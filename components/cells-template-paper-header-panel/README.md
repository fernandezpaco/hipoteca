## cells-template-paper-header-panel

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

__cells-template-paper-header-panel__ contains a header, main and footer section. It uses the __paper-header-panel__ to have different header and scrolling behabiors.

It includes:

  ```app__header``` - A container element for top app.

  ```app__main``` - A container element main content.

  ```app__footer``` - A container element for bottom app.

  ```app__overlay``` - A container element for overlay all content.

Example cells context: *(view demo for declarative app)*

```html
<cells-template-paper-header-panel></cells-template-paper-header-panel> 
```

The __mode__ property is necessary to the different header and scrolling behabiors. See [paper-header-panel](https://elements.polymer-project.org/elements/paper-header-panel).

```html
<cells-template-paper-header-panel mode="standard"></cells-template-paper-header-panel>
```

In the third example, it is used the __tallClass__ property to add a style to header section. This class is used with the __waterfall-tall__ mode.

```html
<cells-template-paper-header-panel mode="waterfall-tall" tall-class="medium-tall"></cells-template-paper-header-panel>
```
In the fourth example, it is used the transparent property to add a style to header section. This class is used with the seamed mode.

```html
<cells-template-paper-header-panel mode="seamed" >
  <header id="app__header" class="transparent"></header>
</cells-template-paper-header-panel>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-template-paper-header-panel-scope      | scope description | default value  |
| --cells-template-paper-header-panel | empty mixin | {} |
| --cells-template-paper-header-panel-app__header | .app__header empty mixin | {} |
| --cells-template-paper-header-panel-app__container | .app__container empty mixin | {} |
| --cells-template-paper-header-panel-app__section | .app__section empty mixin  | {} |
| --cells-template-paper-header-panel-app__main | .app__main empty mixin | {} |
| --cells-template-paper-header-panel-app__footer | .app__footer empty mixin | {} |
| --cells-template-paper-header-panel-paper-header-waterfall-tall | .paper-header empty mixin in waterfall-tall mode | {} |
| --cells-template-paper-header-panel-app__header-background | .app__header background | transparent |
| --cells-template-paper-header-panel-app__main-max-width | .app__main max-width | 768px |
| --cells-template-paper-header-panel-app__main-padding | .app__main padding | 0 |
| --cells-template-paper-header-panel-paper-header-height | .paper-header height in waterfall-tall mode | 100px |
| --app__overlay-zindex | .app__overlay z-index | 0 |
| --cells-template-paper-drawer-panel-overlay | .app__overlay empty mixin | {} |

@demo demo/index.html
