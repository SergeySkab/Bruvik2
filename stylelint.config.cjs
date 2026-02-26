module.exports = {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['.netlify-dist/**'],
  rules: {
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    'color-function-notation': null,
    'alpha-value-notation': null,
    'font-family-name-quotes': null,
    'custom-property-empty-line-before': null,
    'no-descending-specificity': null,
    'media-feature-range-notation': null,
    'property-no-vendor-prefix': null,
  },
};
