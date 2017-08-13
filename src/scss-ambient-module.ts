// typings-for-css-modules-loader is used to automatically generate Typescript
// typings for SCSS files.

// SCSS files need to be import-ed before they will be processed by Webpack
// (which will in turn generate the typings), but require typings in order for
// compilation to succeed. This module will allow SCSS files to be compiled,
// which will then be processed by typings-for-css-modules-loader, creating
// specific typings.

declare module "*.scss";
