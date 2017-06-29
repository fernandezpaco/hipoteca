# cells-template-paper-drawer-panel

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

## A set of zones elements for your template. It includes:

__cells-template-paper-drawer-panel__ contains a drawer panel and a main panel. The drawer and the main panel are side-by-side with drawer on the left.

  ```app__header``` - A container element for top app.

  ```app__main``` - A container element main content and general manager scroll.

  ```app__footer``` - A container element for bottom app.

  ```app__complementary``` - A container element for drawer. [```Navigation drawer*```](https://www.google.com/design/spec/patterns/navigation-drawer.html)

  ```app__overlay``` - A container element for overlay all content.

  ```app__transactional``` - A container element that positions transverse layers.

[__*The navigation drawer slides in from the left and contains the navigation destinations for your app.__](https://www.google.com/design/spec/patterns/navigation-drawer.html)

Example cells context: *(view demo for declarative app)*
```html
<cells-template-paper-drawer-panel></cells-template-paper-drawer-panel>

<cells-template-paper-drawer-panel right-drawer drawer-width="300px"></cells-template-paper-drawer-panel>
```
## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:---------------|:---------------| :-------------:|
| --app__main-padding-top | padding top scroll section | 0 |
| --app__main-padding-bottom | padding bottom scroll section | 0 |
| --paper-scroll-header-container | {} | display: flex |
| --app__section-zindex | z-index  .app__section | 0  |
| --app__section-bg | background-color  .app__section | #fff  |
| --app__header-zindex | z-index  .app__header | 0  |
| --app__complementary-zindex | z-index  .app__complementary | 0  |
| --app__overlay-zindex | z-index  .app__overlay | 0  |
| --app__transactional-zindex | z-index  .app__transactional | 0  |
| --app__complementary-width | width  .app__complamentary | 100%  |
| --cells-template-paper-drawer-panel | empty mixin for :host | {}  |
| --cells-template-paper-drawer-panel-state-active | empty mixin for :host([state="active"]) | {}  |
| --cells-template-paper-drawer-panel-containersection | empty mixin for .app-container, .app__section | {}  |
| --cells-template-paper-drawer-panel-section | empty mixin for .app__section | {}  |
| --cells-template-paper-drawer-panel-header | empty mixin for .app__header | {}  |
| --cells-template-paper-drawer-panel-relative-main | empty mixin for :host[relative-main] .app__main | {}  |
| --cells-template-paper-drawer-panel-main | empty mixin for .app__main | {}  |
| --cells-template-paper-drawer-panel-header-maincontainer | empty mixin for paper-scroll-header-panel ::content #mainContainer | {}  |
| --cells-template-paper-drawer-panel-maincontainer | empty mixin for :host(.overflow-initial)::content #mainContainer | {}  |
| --cells-template-paper-drawer-panel-complementary | empty mixin for .app__complementary | {}  |
| --cells-template-paper-drawer-panel-overlay | empty mixin for .app__overlay | {}  |
| --cells-template-paper-drawer-panel-transactional | empty mixin for .app__transactional | {}  |
