export const initImageLightbox = () => {
  const collectBackgroundUrl = (element) => {
    const fromData = element.getAttribute('data-lightbox-src');
    if (fromData) return fromData;
    const styleValue = element.getAttribute('style') || '';
    const match = styleValue.match(/background-image\s*:\s*url\((['"]?)(.*?)\1\)/i);
    return match ? match[2] : '';
  };

  const rawTargets = [
    ...Array.from(document.querySelectorAll('.chronicle-figure img')),
    ...Array.from(document.querySelectorAll('.photo-panel')),
  ];
  if (!rawTargets.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.hidden = true;

  const backdrop = document.createElement('div');
  backdrop.className = 'lightbox-backdrop';
  backdrop.setAttribute('data-lightbox-close', '');

  const shell = document.createElement('div');
  shell.className = 'lightbox-shell';
  shell.setAttribute('role', 'dialog');
  shell.setAttribute('aria-modal', 'true');
  shell.setAttribute('aria-label', 'Image viewer');

  const stageNode = document.createElement('div');
  stageNode.className = 'lightbox-stage';
  const imageNode = document.createElement('img');
  imageNode.className = 'lightbox-image';
  imageNode.alt = '';
  stageNode.appendChild(imageNode);

  const controls = document.createElement('div');
  controls.className = 'lightbox-controls';
  controls.setAttribute('role', 'toolbar');
  controls.setAttribute('aria-label', 'Image controls');

  const makeButton = (classes, action, label, text) => {
    const button = document.createElement('button');
    button.className = classes;
    button.type = 'button';
    button.setAttribute('data-action', action);
    button.setAttribute('aria-label', label);
    button.textContent = text;
    return button;
  };

  controls.appendChild(makeButton('lightbox-btn', 'zoom-in', 'Zoom in', '+'));
  controls.appendChild(makeButton('lightbox-btn', 'zoom-out', 'Zoom out', '-'));
  controls.appendChild(makeButton('lightbox-btn lightbox-btn-reset', 'reset', 'Reset zoom', 'Reset'));

  const zoomReadoutNode = document.createElement('span');
  zoomReadoutNode.className = 'lightbox-zoom-readout';
  zoomReadoutNode.setAttribute('aria-live', 'polite');
  zoomReadoutNode.textContent = '100%';
  controls.appendChild(zoomReadoutNode);

  controls.appendChild(makeButton('lightbox-btn lightbox-btn-close', 'close', 'Close viewer', 'Close'));

  shell.appendChild(stageNode);
  shell.appendChild(controls);
  overlay.appendChild(backdrop);
  overlay.appendChild(shell);
  document.body.appendChild(overlay);

  const stage = overlay.querySelector('.lightbox-stage');
  const image = overlay.querySelector('.lightbox-image');
  const zoomReadout = overlay.querySelector('.lightbox-zoom-readout');
  const closeBtn = overlay.querySelector('[data-action="close"]');
  const focusables = () =>
    Array.from(overlay.querySelectorAll('button')).filter((button) => !button.disabled && button.offsetParent !== null);
  const inertSiblings = Array.from(document.body.children).filter((element) => element !== overlay);
  const inertSupport = 'inert' in HTMLElement.prototype;

  let activeTrigger = null;
  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  const minScale = 1;
  const maxScale = 6;
  let dragging = false;
  let dragPointerId = null;
  let dragStartX = 0;
  let dragStartY = 0;
  let startTranslateX = 0;
  let startTranslateY = 0;
  const pointers = new Map();
  let pinchStartDistance = 0;
  let pinchStartScale = 1;
  let pinchCenter = null;
  let lastTouchTap = 0;
  let previousBodyOverflow = '';

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  const getImageMetrics = () => {
    const stageRect = stage.getBoundingClientRect();
    const naturalWidth = image.naturalWidth || 1;
    const naturalHeight = image.naturalHeight || 1;
    const fitScale = Math.min(stageRect.width / naturalWidth, stageRect.height / naturalHeight);
    return {
      stageWidth: stageRect.width,
      stageHeight: stageRect.height,
      baseWidth: naturalWidth * fitScale,
      baseHeight: naturalHeight * fitScale,
    };
  };

  const clampTranslation = () => {
    const { stageWidth, stageHeight, baseWidth, baseHeight } = getImageMetrics();
    const projectedWidth = baseWidth * scale;
    const projectedHeight = baseHeight * scale;
    const maxX = Math.max(0, (projectedWidth - stageWidth) / 2);
    const maxY = Math.max(0, (projectedHeight - stageHeight) / 2);
    translateX = clamp(translateX, -maxX, maxX);
    translateY = clamp(translateY, -maxY, maxY);
  };

  const paint = () => {
    clampTranslation();
    image.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
    overlay.classList.toggle('is-zoomed', scale > 1.001);
    stage.classList.toggle('is-dragging', dragging);
    if (zoomReadout) {
      zoomReadout.textContent = `${Math.round(scale * 100)}%`;
    }
  };

  const resetView = () => {
    scale = 1;
    translateX = 0;
    translateY = 0;
    dragging = false;
    dragPointerId = null;
    paint();
  };

  const zoomTo = (nextScale, pointX = 0, pointY = 0) => {
    const targetScale = clamp(nextScale, minScale, maxScale);
    if (Math.abs(targetScale - scale) < 0.001) return;
    const ratio = targetScale / scale;
    translateX = pointX - (pointX - translateX) * ratio;
    translateY = pointY - (pointY - translateY) * ratio;
    scale = targetScale;
    paint();
  };

  const getPointFromEvent = (event) => {
    const rect = stage.getBoundingClientRect();
    return {
      x: event.clientX - rect.left - rect.width / 2,
      y: event.clientY - rect.top - rect.height / 2,
    };
  };

  const open = (source, trigger) => {
    activeTrigger = trigger;
    image.src = source;
    image.alt = trigger.getAttribute('aria-label') || trigger.getAttribute('alt') || 'Article photo';
    overlay.hidden = false;
    overlay.classList.add('is-open');
    previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (inertSupport) {
      inertSiblings.forEach((element) => {
        element.inert = true;
      });
    }
    resetView();
    closeBtn.focus();
  };

  const close = () => {
    overlay.classList.remove('is-open');
    overlay.hidden = true;
    document.body.style.overflow = previousBodyOverflow;
    if (inertSupport) {
      inertSiblings.forEach((element) => {
        element.inert = false;
      });
    }
    pointers.clear();
    dragging = false;
    dragPointerId = null;
    if (activeTrigger) {
      activeTrigger.focus();
    }
    activeTrigger = null;
    image.src = '';
  };

  const extractSource = (element) => {
    if (element.matches('.chronicle-figure img')) {
      return element.currentSrc || element.src || '';
    }
    if (element.classList.contains('photo-panel')) {
      return collectBackgroundUrl(element);
    }
    return '';
  };

  rawTargets.forEach((element) => {
    const source = extractSource(element);
    if (!source) return;
    const label =
      element.getAttribute('alt') ||
      element.querySelector('img')?.getAttribute('alt') ||
      'Open image in viewer';
    element.setAttribute('data-lightbox', 'true');
    element.setAttribute('role', 'button');
    element.setAttribute('tabindex', '0');
    element.setAttribute('aria-label', label);
    element.classList.add('is-lightbox-target');

    element.addEventListener('click', () => open(source, element));
    element.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open(source, element);
      }
    });
  });

  image.addEventListener('load', () => {
    resetView();
  });

  stage.addEventListener(
    'wheel',
    (event) => {
      if (overlay.hidden) return;
      event.preventDefault();
      const { x, y } = getPointFromEvent(event);
      const direction = event.deltaY < 0 ? 1 : -1;
      zoomTo(scale + direction * 0.18, x, y);
    },
    { passive: false }
  );

  stage.addEventListener('dblclick', (event) => {
    if (overlay.hidden) return;
    const { x, y } = getPointFromEvent(event);
    const target = scale > 1.1 ? 1 : 2.5;
    zoomTo(target, x, y);
  });

  stage.addEventListener('pointerdown', (event) => {
    if (overlay.hidden) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.size === 1 && scale > 1) {
      dragging = true;
      dragPointerId = event.pointerId;
      dragStartX = event.clientX;
      dragStartY = event.clientY;
      startTranslateX = translateX;
      startTranslateY = translateY;
      stage.setPointerCapture(event.pointerId);
      paint();
    }

    if (pointers.size === 2) {
      const values = Array.from(pointers.values());
      const dx = values[0].x - values[1].x;
      const dy = values[0].y - values[1].y;
      pinchStartDistance = Math.hypot(dx, dy);
      pinchStartScale = scale;
      const rect = stage.getBoundingClientRect();
      pinchCenter = {
        x: (values[0].x + values[1].x) / 2 - rect.left - rect.width / 2,
        y: (values[0].y + values[1].y) / 2 - rect.top - rect.height / 2,
      };
    }
  });

  stage.addEventListener('pointermove', (event) => {
    if (overlay.hidden || !pointers.has(event.pointerId)) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.size === 2 && pinchStartDistance > 0) {
      const values = Array.from(pointers.values());
      const dx = values[0].x - values[1].x;
      const dy = values[0].y - values[1].y;
      const distance = Math.hypot(dx, dy);
      const nextScale = pinchStartScale * (distance / pinchStartDistance);
      const pivot = pinchCenter || { x: 0, y: 0 };
      zoomTo(nextScale, pivot.x, pivot.y);
      return;
    }

    if (dragging && event.pointerId === dragPointerId) {
      event.preventDefault();
      translateX = startTranslateX + (event.clientX - dragStartX);
      translateY = startTranslateY + (event.clientY - dragStartY);
      paint();
    }
  });

  const stopPointer = (event) => {
    pointers.delete(event.pointerId);
    if (dragPointerId === event.pointerId) {
      dragging = false;
      dragPointerId = null;
      paint();
    }
    if (pointers.size < 2) {
      pinchStartDistance = 0;
      pinchCenter = null;
    }

    if (event.pointerType === 'touch') {
      const now = Date.now();
      if (now - lastTouchTap < 280) {
        const point = getPointFromEvent(event);
        const target = scale > 1.1 ? 1 : 2.5;
        zoomTo(target, point.x, point.y);
        lastTouchTap = 0;
      } else {
        lastTouchTap = now;
      }
    }
  };

  stage.addEventListener('pointerup', stopPointer);
  stage.addEventListener('pointercancel', stopPointer);
  stage.addEventListener('pointerleave', (event) => {
    if (event.pointerType !== 'mouse') return;
    stopPointer(event);
  });

  overlay.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-lightbox-close')) {
      close();
    }
  });

  overlay.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.getAttribute('data-action');
      if (action === 'close') close();
      if (action === 'zoom-in') zoomTo(scale + 0.2);
      if (action === 'zoom-out') zoomTo(scale - 0.2);
      if (action === 'reset') resetView();
    });
  });

  overlay.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }
    if (event.key === '+' || event.key === '=') {
      event.preventDefault();
      zoomTo(scale + 0.2);
    }
    if (event.key === '-') {
      event.preventDefault();
      zoomTo(scale - 0.2);
    }
    if (event.key === '0') {
      event.preventDefault();
      resetView();
    }
    if (event.key === 'ArrowLeft' && scale > 1) {
      event.preventDefault();
      translateX += 36;
      paint();
    }
    if (event.key === 'ArrowRight' && scale > 1) {
      event.preventDefault();
      translateX -= 36;
      paint();
    }
    if (event.key === 'ArrowUp' && scale > 1) {
      event.preventDefault();
      translateY += 36;
      paint();
    }
    if (event.key === 'ArrowDown' && scale > 1) {
      event.preventDefault();
      translateY -= 36;
      paint();
    }

    if (event.key === 'Tab') {
      const controls = focusables();
      if (!controls.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  window.addEventListener('resize', () => {
    if (!overlay.hidden) {
      paint();
    }
  });
};




