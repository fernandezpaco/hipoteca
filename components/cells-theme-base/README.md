# Theme

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

> __RECOMMENDATION__: It is strongly encouraged to review first [Polymer Styling]

## 1. Definition

The theme base is a model for any theme base. You may import it and create an extended theme to modify it. Or instead replicate the entirety of the cells-theme-base, redefining its values.

The theme gives to the application a "look&feel". It is used as an application dependency, thus it should be a devDependency for standalone components.

All variables and mixins have been organized as follows:

```html
<link rel="import" href="cells-theme-base-fonts.html"> <!-- @font-face imports -->
<link rel="import" href="cells-theme-base-font-family.html"> <!-- Variable declaration for the font-family -->
<link rel="import" href="cells-theme-base-typography.html"> <!-- Font families and weights combinations -->
<link rel="import" href="cells-theme-base-text-size.html"> <!-- Font sizes -->
<link rel="import" href="cells-theme-base-common.html"> <!-- Colors -->
<link rel="import" href="cells-theme-base-height.html"> <!-- Sizes -->
<link rel="import" href="cells-theme-base-border-radius.html"> <!-- Border radiuses combinations -->
<link rel="import" href="cells-theme-base-buttons.html"> <!-- Buttons types, sizes and combinations -->
<link rel="import" href="cells-theme-base-input.html"> <!-- Input types, statuses and sizes -->
<link rel="import" href="cells-theme-base-apply.html"> <!-- Component specific decorators and various -->
<link rel="import" href="cells-theme-base-decorator.html"> <!-- Decorators: content, background... -->
```


## 2. Importing theme

Import `cells-theme-base` to your app or demo.

```html
<!-- Add theme from /index -->
<link rel="import" href="../cells-theme-base/cells-theme-base.html">
```

## 3. Tuning cells-theme-base
To customize the `cells-theme-base` variables and mixins you may create a `theme-app` to fulfill your needs. Where you can either import the whole theme base or only the sets of custom variables / mixins you need:

Given `theme-app.html`, from which you can import the whole theme,

```html
<link rel="import" href="../cells-theme-base/cells-theme-base.html">
```

or the parts you need (for example you may want to omit -fonts.html and bring your own), **along with your version of the theme base parts you are not importing**:

```html
<link rel="import" href="cells-theme-base-common.html">
<link rel="import" href="cells-theme-base-buttons.html">
<link rel="import" href="cells-theme-base-height.html">
<link rel="import" href="cells-theme-base-border-radius.html">

<link rel="import" href="theme-app-fonts.html">
<link rel="import" href="theme-app-typography.html">
<link rel="import" href="theme-app-text-size.html">
<link rel="import" href="theme-app-input.html">
<link rel="import" href="theme-app-decorator.html">
<link rel="import" href="theme-app-apply.html">
```
> __TIP__: Use your theme to redefine the variables or use the empty mixins that are available throughout the components in order to tune them (the components).

If you use the theme app, add the cells-theme-base as a production dependency of your theme-app (so you continue having a single dependency in your app).

`bower.json`

```json
{
  "dev": {
    "cells-theme-base": "https://descinet.bbva.es/stash/scm/ct/cells-theme-base.git"
  }
}
```


## 4. Override theme

From the `theme-app.html`:

Given that the existent variable is `--text-primary: #fff;`

Redefine the variable globally or scoped ([Polymer  Styling](https://www.polymer-project.org/1.0/docs/devguide/styling.html#xscope-styling-details)):

```html
<style is="custom-style">
  /* Globally */
  :root{
    --text-primary: blue;
  }
  /* Scoped */
  .main-content {
    --text-primary: blue;
  }
</style>
```

[Polymer Styling]: https://www.polymer-project.org/1.0/docs/devguide/styling.html#custom-style
