# cells-atom-icon

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

`<cells-atom-icon>` is an element that wraps iron-icon and adds sizing classes to set the icon width and height.

Example:

```html
<cells-atom-icon icon="banking:A01" class="icon-size-24"></cells-atom-icon>
```

Use a class `icon-size-<size>` to set the width and height of the icon. Available sizes goes from 8 to 64px (only even numbers).

If you need an icon size that is not covered using a class, set the size using `--cells-atom-icon-size` custom property.

The icon color can be set using the color property.

Example:

```html
<style is="custom-style">
.custom-size {
--cells-atom-icon-size: 50px; /* sets width and height */
}
</style>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------| :--------------|
| --cells-atom-icon-size  | icon size (width and height)     | 1rem (16px) |
