(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cellsPolymer"] = factory();
	else
		root["cellsPolymer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _polymerBridge = __webpack_require__(/*! ./polymer-bridge */ 1);
	
	var _polymerBridge2 = _interopRequireDefault(_polymerBridge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.CellsPolymerBridge = _polymerBridge2.default;
	module.exports = _polymerBridge2.default;

/***/ },
/* 1 */
/*!*******************************!*\
  !*** ./src/polymer-bridge.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _bridge = __webpack_require__(/*! cells-bridge/src/bridge */ 2);
	
	var _bridge2 = _interopRequireDefault(_bridge);
	
	var _polymerComponentConnector = __webpack_require__(/*! ./polymer-component-connector */ 22);
	
	var _polymerComponentConnector2 = _interopRequireDefault(_polymerComponentConnector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CellsPolymerBridge = function (_CellsBridge) {
	  _inherits(CellsPolymerBridge, _CellsBridge);
	
	  function CellsPolymerBridge() {
	    _classCallCheck(this, CellsPolymerBridge);
	
	    return _possibleConstructorReturn(this, (CellsPolymerBridge.__proto__ || Object.getPrototypeOf(CellsPolymerBridge)).apply(this, arguments));
	  }
	
	  _createClass(CellsPolymerBridge, [{
	    key: '_initDependencies',
	    value: function _initDependencies(dependencies) {
	      dependencies = _extends({
	        ComponentConnector: _polymerComponentConnector2.default
	      }, dependencies);
	      _get(CellsPolymerBridge.prototype.__proto__ || Object.getPrototypeOf(CellsPolymerBridge.prototype), '_initDependencies', this).call(this, dependencies);
	    }
	  }]);
	
	  return CellsPolymerBridge;
	}(_bridge2.default);
	
	exports.default = CellsPolymerBridge;

/***/ },
/* 2 */
/*!**************************************!*\
  !*** ./~/cells-bridge/src/bridge.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	// eslint-disable-next-line no-unused-vars
	
	
	var _string = __webpack_require__(/*! string */ 3);
	
	var _string2 = _interopRequireDefault(_string);
	
	var _dom = __webpack_require__(/*! ./manager/dom */ 7);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _page = __webpack_require__(/*! ./manager/page */ 10);
	
	var _page2 = _interopRequireDefault(_page);
	
	var _componentConnector = __webpack_require__(/*! ./component-connector */ 14);
	
	var _componentConnector2 = _interopRequireDefault(_componentConnector);
	
	var _router = __webpack_require__(/*! ./router */ 15);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _sanitizer = __webpack_require__(/*! ./sanitizer */ 13);
	
	var _sanitizer2 = _interopRequireDefault(_sanitizer);
	
	var _events = __webpack_require__(/*! ./manager/events */ 8);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _import = __webpack_require__(/*! ./manager/import */ 17);
	
	var _import2 = _interopRequireDefault(_import);
	
	var _template = __webpack_require__(/*! ./manager/template */ 18);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _component = __webpack_require__(/*! ./component */ 20);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _bridgeChannels = __webpack_require__(/*! ./manager/bridge-channels */ 21);
	
	var _bridgeChannels2 = _interopRequireDefault(_bridgeChannels);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var coreInstances = 0;
	var globalChannel = {};
	
	// @TODO: Agregar los imports y eliminar los `new this.*`
	// @TODO: Revisar los métodos que manipulan templates. Quizás deban ser responsabilidad del TemplateManager
	
	var CellsBridge = function () {
	  /**
	   * Max number of views
	   *
	   * Keeps this number of template alive.
	   *
	   * @type {Number}
	   */
	
	  /**
	   * Prefix for LocalStorage keys
	   *
	   * @type {String}
	   */
	
	  /**
	   * Proactive Cache.
	   * Loads future pages definition.
	   *
	   * @type {Boolean}
	   */
	
	  /**
	   * Cross container node Id
	   *
	   * @type {String}
	   */
	
	  /**
	   * PubSub Context
	   *
	   * 'global'   => Notifies all components of all bridge instances.
	   * 'local'    => Notifies components created by the current bridge instance.
	   *
	   * @type {String}
	   */
	
	  /**
	   * Binding Type
	   *
	   * 'always'      => Register all components of all views. Never unregister them.
	   * 'delayed'     => Like 'always' but waits for idle to start the animation.
	   * 'ui'          => Register only ui and cross components of all views. Never
	   *                  unregister them. Datamanagers are only connected when the
	   *                  animation of the current view finishes.
	   * 'currentview' => Register all components of the current view when the
	   *                  animation finishes.
	   *
	   * @type {String}
	   */
	  function CellsBridge(config) {
	    _classCallCheck(this, CellsBridge);
	
	    this.ComponentConnector = null;
	    this.DomManager = null;
	    this.ImportManager = null;
	    this.PageManager = null;
	    this.Router = null;
	    this.TemplateManager = null;
	    this.Sanitizer = null;
	    this.BridgeChannelManager = null;
	    this.binding = 'always';
	    this.cache = true;
	    this.channel = 'global';
	    this.componentsPath = '';
	    this.crossContainerId = '__cross';
	    this.debug = true;
	    this.preCache = true;
	    this.preRender = false;
	    this.storagePrefix = '__bridge-';
	    this.version = '0.3.1';
	    this.viewLimit = 6;
	    this.externalEvents = ['page-ready', 'parse-route', 'after-publish', 'nav-request', 'before-set-attr-to-node', 'after-set-attr-to-node', 'before-create-node', 'after-create-node', 'before-import', 'after-import', 'page-request', 'page-response', 'data-load', 'template-transition-end', 'track-event'];
	
	
	    if (!config || (typeof config === 'undefined' ? 'undefined' : _typeof(config)) !== 'object') {
	      config = {};
	    }
	
	    var dependencies = config.dependencies;
	    delete config.dependencies;
	    _extends(this, config);
	
	    if (!this.mainNode) {
	      console.warn('You should indicate the main node of your app');
	    } else {
	      this._plugExternalEvents();
	    }
	
	    this._initDependencies(dependencies);
	    this.id = coreInstances++;
	    this._initCrossComponents();
	
	    if (this.channel === 'global') {
	      this.ComponentConnector.manager.channels = globalChannel;
	    }
	    if (this.cache) {
	      this.PageManager.persistent = true;
	    }
	    if (this.generateRequestUrl) {
	      console.assert(typeof this.generateRequestUrl === 'function', 'generateRequestUrl has to be a function');
	      this.PageManager.generateRequestUrl = this.generateRequestUrl;
	    }
	    /* istanbul ignore else */
	    if (this.debug) {
	      window.$core = window.$core || [];
	      window.$core.push(this);
	      this.printDebugInfo();
	    }
	
	    this.BridgeChannelManager.initAppContextChannel();
	
	    // 1. Listen for route changes
	    // @TODO: Revisar este binding de un método de otro objeto a otro objeto
	    this.Router.handler = this.routeHandler.bind(this);
	    this.Router.addRoutes(this.routes);
	    this.Router.start();
	
	    _events2.default.on('nav-request', function (info) {
	      var event = info.event;
	      var navigationDetail = info.detail;
	      var page = navigationDetail.page;
	      var params = navigationDetail.params;
	      var p = {};
	      if (!page && navigationDetail.paramPage && event.detail) {
	        page = event.detail[navigationDetail.paramPage];
	      }
	      if (event.detail && params) {
	        for (var param in params) {
	          if (params.hasOwnProperty(param)) {
	            p[params[param]] = event.detail[param];
	          }
	        }
	      }
	      this.Router.go(page, p);
	      _extends(this, config);
	    }.bind(this));
	  }
	
	  /**
	  * Events to expose
	  *
	  *
	  * @type {Array}
	  */
	
	  /**
	   * Lib version.
	   *
	   * @type {string}
	   */
	
	  /**
	   * Proactive Render
	   * Render future pages.
	   *
	   * @type {Boolean}
	   */
	
	  /**
	   * Prints debug info
	   *
	   * @type {Boolean}
	   */
	
	  /**
	   * URL Components Path
	   *
	   * URL path to load components.
	   *
	   * @type {String}
	   */
	
	  /**
	   * Pages Cache
	   *
	   * Saves page definitions into localstorage.
	   *
	   * @type {Boolean}
	   */
	
	
	  _createClass(CellsBridge, [{
	    key: '_plugExternalEvents',
	    value: function _plugExternalEvents() {
	      var _this = this;
	
	      var len = this.externalEvents.length;
	      var mainNode = document.querySelector('#' + this.mainNode);
	      var setExternalEvent = function setExternalEvent(name, payload) {
	        var event = payload ? new CustomEvent(name, { detail: payload }) : new CustomEvent(name);
	        mainNode.dispatchEvent(event);
	      };
	      if (mainNode) {
	        var _loop = function _loop(i) {
	          _events2.default.on(_this.externalEvents[i], function (data) {
	            setExternalEvent(_this.externalEvents[i], data);
	          });
	        };
	
	        for (var i = 0; i < len; i++) {
	          _loop(i);
	        }
	      } else {
	        console.warn('The defined main node does not exist');
	      }
	    }
	  }, {
	    key: '_initCrossComponents',
	    value: function _initCrossComponents() {
	      // Cross components case: creates a cardboard template
	      var crossContainer = this.TemplateManager.create(this.crossContainerId, {
	        tagName: 'div'
	      });
	      document.body.appendChild(crossContainer.node);
	    }
	  }, {
	    key: '_initDependencies',
	    value: function _initDependencies(dependencies) {
	      dependencies = _extends({
	        ComponentConnector: _componentConnector2.default,
	        DomManager: _dom2.default,
	        ImportManager: _import2.default,
	        PageManager: _page2.default,
	        TemplateManager: _template2.default,
	        Router: _router2.default,
	        Sanitizer: _sanitizer2.default,
	        BridgeChannelManager: _bridgeChannels2.default
	      }, dependencies);
	      for (var dependence in dependencies) {
	        if (dependencies.hasOwnProperty(dependence)) {
	          this[dependence] = new dependencies[dependence](this);
	        }
	      }
	    }
	  }, {
	    key: 'createCCComponent',
	    value: function createCCComponent(spec) {
	      var container = this.TemplateManager.get(this.crossContainerId);
	      var node = container.node.querySelector(spec.tagName);
	      if (!node) {
	        var cmp = new _component2.default(spec, this);
	        cmp.__parentTemplate = container;
	        this.ComponentConnector.register(cmp.node, cmp.spec.connections);
	        return cmp;
	      } else {
	        this.ComponentConnector.progressiveRegister(node, spec.connections);
	      }
	    }
	  }, {
	    key: 'createUIComponent',
	    value: function createUIComponent(spec) {
	      var bindingType = this.binding;
	      var cmp = new _component2.default(spec, this);
	      if (bindingType === 'always' || bindingType === 'delayed' || bindingType === 'ui') {
	        this.ComponentConnector.register(cmp.node, cmp.connections);
	      }
	      return cmp;
	    }
	  }, {
	    key: 'createDMComponent',
	    value: function createDMComponent(spec) {
	      var bindingType = this.binding;
	      var cmp = new _component2.default(spec, this);
	      if (bindingType === 'always' || bindingType === 'delayed') {
	        this.ComponentConnector.register(cmp.node, cmp.connections);
	      }
	      return cmp;
	    }
	  }, {
	    key: '_createLocalComponent',
	    value: function _createLocalComponent(type, items, template) {
	      var collection = [];
	      for (var i = 0, l = items.length; i < l; i++) {
	        var spec = items[i];
	        var cmp = this['create' + type + 'Component'](spec);
	        if (cmp) {
	          cmp.__parentTemplate = cmp.__parentTemplate || template;
	          collection.push(cmp);
	        }
	      }
	      return collection;
	    }
	  }, {
	    key: 'createComponentsByType',
	    value: function createComponentsByType(collection, template) {
	      var itemsToInject = [];
	      var sortedList = ['CC', 'UI', 'DM'];
	      for (var j = 0, k = sortedList.length; j < k; j++) {
	        var type = sortedList[j];
	        var items = collection[type];
	        itemsToInject = itemsToInject.concat(this._createLocalComponent(type, items, template));
	      }
	      return itemsToInject;
	    }
	  }, {
	    key: '_createComponents',
	    value: function _createComponents(response, template) {
	      var options = this;
	      var collection = this.Sanitizer.split(response.components);
	      var components = this.createComponentsByType(collection, template);
	      // 9. Sets default attributes
	      for (var i = 0, l = components.length; i < l; i++) {
	        components[i].setProps();
	      }
	      var unresolvedComponents = [];
	      // 9.1 Append components to template
	      for (i = 0, l = components.length; i < l; i++) {
	        var component = components[i];
	        this.TemplateManager.get(component.__parentTemplate.name).append(component);
	        if (component.isUnresolved()) {
	          unresolvedComponents.push(component);
	        }
	      }
	      _events2.default.emit('page-ready');
	      this.ImportManager.loadComponent(unresolvedComponents, this.selectTemplate.bind(this, response.page), options.componentsPath);
	    }
	  }, {
	    key: 'loadTemplate',
	    value: function loadTemplate(name, params) {
	      var options = this;
	      return this.PageManager.get(name, {
	        cache: options.cache,
	        params: params,
	        method: options.method,
	        body: options.body,
	        headers: options.headers
	      });
	    }
	  }, {
	    key: 'createTemplate',
	    value: function createTemplate(response) {
	      var spec = response;
	      var name = response.page;
	      var node = this.TemplateManager.getNode(name);
	      this.BridgeChannelManager.getPrivate(name);
	      // Template is cached
	      if (node) {
	        this.selectTemplate(name);
	      } else {
	
	        // Template not cached and has definition
	        if (spec && spec.template) {
	
	          // 4. Creates the new template
	          var template = this.TemplateManager.create(name, spec.template);
	          this.ComponentConnector.register(template.node, template.connections);
	          // Add new routes in router
	          if (spec.pages) {
	            this.Router.addRoutes(spec.pages);
	          }
	          // 5. Import it when doesn't exists
	          if (template.isUnresolved()) {
	            this.ImportManager.loadComponent(template, this._createComponents.bind(this, response, template), this.componentsPath);
	          } else {
	            this._createComponents.call(this, response, template);
	          }
	        }
	        if (this.preCache !== false && response.pages) {
	          for (var page in response.pages) {
	            this.loadTemplate(page).then(function () {
	              // preRender Template time!
	              // console.log(arguments);
	            });
	            // this._idleCallback(this.PageManager.get.bind(this, page, options));
	          }
	        }
	      }
	    }
	
	    /**
	     * Id for template node
	     *
	     * @param  {String} name Template name
	     *
	     * @return {String}
	     */
	
	  }, {
	    key: 'parseTemplateId',
	    value: function parseTemplateId(name) {
	      return 'cells-template-' + name.replace(/\./g, '-');
	    }
	  }, {
	    key: 'parse',
	    value: function parse(name, value) {
	      name = (0, _string2.default)('parse-' + name).camelize().s;
	      return typeof this[name] === 'function' ? this[name](value) : value;
	    }
	  }, {
	    key: 'printDebugInfo',
	    value: function printDebugInfo() {
	      var getColor = function getColor(option, color) {
	        var hexColor = option ? color : '#b0bec5';
	        return 'background:' + hexColor + '; color:#fff; padding:2px 4px; margin-right: 5px;';
	      };
	      console.log('%cbridge version: ' + this.version + ' %cbinding: ' + this.binding + ' %ccache: ' + this.cache + ' %cpreCache: ' + this.preCache + ' %cpreRender: ' + this.preRender, getColor(this.version, '#003f8d'), getColor(this.binding, '#0065ba'), getColor(this.cache, '#0093e2'), getColor(this.preCache, '#00aeeb'), getColor(this.preRender, '#41cef8') //#00aeeb
	      );
	    }
	  }, {
	    key: 'routeHandler',
	    value: function routeHandler() {
	      var route = this.Router.currentRoute;
	
	      // route = this.parse('route', route);
	      _events2.default.emit('parse-route', route);
	      // 2. Load a new page when route changes
	      this.loadTemplate(route.name, route.params).then(this.createTemplate.bind(this));
	      // 3. Publish URL params to global params.
	      for (var param in route.params) {
	        if (route.params.hasOwnProperty(param)) {
	          var eventData = {
	            detail: {
	              value: route.params[param]
	            },
	            type: (0, _string2.default)(param).dasherize().s + '-changed'
	          };
	
	          this.ComponentConnector.manager.get(param).onNext(eventData);
	        }
	      }
	    }
	  }, {
	    key: 'registerCurrentTemplate',
	    value: function registerCurrentTemplate(currentTemplate, previousTemplate) {
	      var options = this;
	      this.registerChildren(currentTemplate, options.binding === 'ui' ? 'DM' : null);
	      if (previousTemplate && previousTemplate !== currentTemplate) {
	        this.unregisterChildren(previousTemplate, options.binding === 'ui' ? 'DM' : null);
	      }
	    }
	  }, {
	    key: 'registerChildren',
	    value: function registerChildren(template, type) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = template.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var component = _step.value;
	
	          if (type && type === component.type || !type) {
	            this.ComponentConnector.register(component.node, component.connections);
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'unregisterChildren',
	    value: function unregisterChildren(template, type) {
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = template.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var component = _step2.value;
	
	          if (type && type === component.type || !type) {
	            this.ComponentConnector.unregister(component.node);
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'selectTemplate',
	    value: function selectTemplate(name) {
	      var options = this;
	      var template = this.TemplateManager.get(name);
	      if (options.binding === 'currentview' || options.binding === 'ui') {
	        var onTemplateAnimationFinishes = this.registerCurrentTemplate.bind(this, template, this.TemplateManager.get(this.TemplateManager.selected));
	        if (template.node.animationCompleteEvent) {
	          _events2.default.listenToOnce(template.node, template.node.animationCompleteEvent, onTemplateAnimationFinishes);
	        } else {
	          _events2.default.once('template-transition-end', onTemplateAnimationFinishes);
	        }
	      }
	      if (options.onRender) {
	        options.onRender(template.node);
	      }
	      // 10. Shows the template created
	      var animateTemplate = this.TemplateManager.select.bind(this.TemplateManager, name, this.BridgeChannelManager);
	      if (options.binding === 'delayed') {
	        this._idleCallback(animateTemplate);
	      } else {
	        animateTemplate();
	      }
	    }
	  }, {
	    key: '_idleCallback',
	    value: function _idleCallback(fn) {
	      setTimeout(function () {
	        if ('requestIdleCallback' in window) {
	          window.requestIdleCallback(fn);
	        } else {
	          setTimeout(fn, 1);
	        }
	      }, 100);
	    }
	  }]);
	
	  return CellsBridge;
	}();
	
	exports.default = CellsBridge;

/***/ },
/* 3 */
/*!********************************!*\
  !*** ./~/string/lib/string.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*
	string.js - Copyright (C) 2012-2014, JP Richardson <jprichardson@gmail.com>
	*/
	
	!function () {
	  "use strict";
	
	  var VERSION = '3.3.3';
	
	  var ENTITIES = {};
	
	  // from http://semplicewebsites.com/removing-accents-javascript
	  var latin_map = { "Á": "A", "Ă": "A", "Ắ": "A", "Ặ": "A", "Ằ": "A", "Ẳ": "A", "Ẵ": "A", "Ǎ": "A", "Â": "A", "Ấ": "A", "Ậ": "A", "Ầ": "A", "Ẩ": "A", "Ẫ": "A", "Ä": "A", "Ǟ": "A", "Ȧ": "A", "Ǡ": "A", "Ạ": "A", "Ȁ": "A", "À": "A", "Ả": "A", "Ȃ": "A", "Ā": "A", "Ą": "A", "Å": "A", "Ǻ": "A", "Ḁ": "A", "Ⱥ": "A", "Ã": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ḃ": "B", "Ḅ": "B", "Ɓ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ć": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ĉ": "C", "Ċ": "C", "Ƈ": "C", "Ȼ": "C", "Ď": "D", "Ḑ": "D", "Ḓ": "D", "Ḋ": "D", "Ḍ": "D", "Ɗ": "D", "Ḏ": "D", "ǲ": "D", "ǅ": "D", "Đ": "D", "Ƌ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "É": "E", "Ĕ": "E", "Ě": "E", "Ȩ": "E", "Ḝ": "E", "Ê": "E", "Ế": "E", "Ệ": "E", "Ề": "E", "Ể": "E", "Ễ": "E", "Ḙ": "E", "Ë": "E", "Ė": "E", "Ẹ": "E", "Ȅ": "E", "È": "E", "Ẻ": "E", "Ȇ": "E", "Ē": "E", "Ḗ": "E", "Ḕ": "E", "Ę": "E", "Ɇ": "E", "Ẽ": "E", "Ḛ": "E", "Ꝫ": "ET", "Ḟ": "F", "Ƒ": "F", "Ǵ": "G", "Ğ": "G", "Ǧ": "G", "Ģ": "G", "Ĝ": "G", "Ġ": "G", "Ɠ": "G", "Ḡ": "G", "Ǥ": "G", "Ḫ": "H", "Ȟ": "H", "Ḩ": "H", "Ĥ": "H", "Ⱨ": "H", "Ḧ": "H", "Ḣ": "H", "Ḥ": "H", "Ħ": "H", "Í": "I", "Ĭ": "I", "Ǐ": "I", "Î": "I", "Ï": "I", "Ḯ": "I", "İ": "I", "Ị": "I", "Ȉ": "I", "Ì": "I", "Ỉ": "I", "Ȋ": "I", "Ī": "I", "Į": "I", "Ɨ": "I", "Ĩ": "I", "Ḭ": "I", "Ꝺ": "D", "Ꝼ": "F", "Ᵹ": "G", "Ꞃ": "R", "Ꞅ": "S", "Ꞇ": "T", "Ꝭ": "IS", "Ĵ": "J", "Ɉ": "J", "Ḱ": "K", "Ǩ": "K", "Ķ": "K", "Ⱪ": "K", "Ꝃ": "K", "Ḳ": "K", "Ƙ": "K", "Ḵ": "K", "Ꝁ": "K", "Ꝅ": "K", "Ĺ": "L", "Ƚ": "L", "Ľ": "L", "Ļ": "L", "Ḽ": "L", "Ḷ": "L", "Ḹ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ḻ": "L", "Ŀ": "L", "Ɫ": "L", "ǈ": "L", "Ł": "L", "Ǉ": "LJ", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ń": "N", "Ň": "N", "Ņ": "N", "Ṋ": "N", "Ṅ": "N", "Ṇ": "N", "Ǹ": "N", "Ɲ": "N", "Ṉ": "N", "Ƞ": "N", "ǋ": "N", "Ñ": "N", "Ǌ": "NJ", "Ó": "O", "Ŏ": "O", "Ǒ": "O", "Ô": "O", "Ố": "O", "Ộ": "O", "Ồ": "O", "Ổ": "O", "Ỗ": "O", "Ö": "O", "Ȫ": "O", "Ȯ": "O", "Ȱ": "O", "Ọ": "O", "Ő": "O", "Ȍ": "O", "Ò": "O", "Ỏ": "O", "Ơ": "O", "Ớ": "O", "Ợ": "O", "Ờ": "O", "Ở": "O", "Ỡ": "O", "Ȏ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ō": "O", "Ṓ": "O", "Ṑ": "O", "Ɵ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Õ": "O", "Ṍ": "O", "Ṏ": "O", "Ȭ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ɛ": "E", "Ɔ": "O", "Ȣ": "OU", "Ṕ": "P", "Ṗ": "P", "Ꝓ": "P", "Ƥ": "P", "Ꝕ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝙ": "Q", "Ꝗ": "Q", "Ŕ": "R", "Ř": "R", "Ŗ": "R", "Ṙ": "R", "Ṛ": "R", "Ṝ": "R", "Ȑ": "R", "Ȓ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꜿ": "C", "Ǝ": "E", "Ś": "S", "Ṥ": "S", "Š": "S", "Ṧ": "S", "Ş": "S", "Ŝ": "S", "Ș": "S", "Ṡ": "S", "Ṣ": "S", "Ṩ": "S", "ẞ": "SS", "Ť": "T", "Ţ": "T", "Ṱ": "T", "Ț": "T", "Ⱦ": "T", "Ṫ": "T", "Ṭ": "T", "Ƭ": "T", "Ṯ": "T", "Ʈ": "T", "Ŧ": "T", "Ɐ": "A", "Ꞁ": "L", "Ɯ": "M", "Ʌ": "V", "Ꜩ": "TZ", "Ú": "U", "Ŭ": "U", "Ǔ": "U", "Û": "U", "Ṷ": "U", "Ü": "U", "Ǘ": "U", "Ǚ": "U", "Ǜ": "U", "Ǖ": "U", "Ṳ": "U", "Ụ": "U", "Ű": "U", "Ȕ": "U", "Ù": "U", "Ủ": "U", "Ư": "U", "Ứ": "U", "Ự": "U", "Ừ": "U", "Ử": "U", "Ữ": "U", "Ȗ": "U", "Ū": "U", "Ṻ": "U", "Ų": "U", "Ů": "U", "Ũ": "U", "Ṹ": "U", "Ṵ": "U", "Ꝟ": "V", "Ṿ": "V", "Ʋ": "V", "Ṽ": "V", "Ꝡ": "VY", "Ẃ": "W", "Ŵ": "W", "Ẅ": "W", "Ẇ": "W", "Ẉ": "W", "Ẁ": "W", "Ⱳ": "W", "Ẍ": "X", "Ẋ": "X", "Ý": "Y", "Ŷ": "Y", "Ÿ": "Y", "Ẏ": "Y", "Ỵ": "Y", "Ỳ": "Y", "Ƴ": "Y", "Ỷ": "Y", "Ỿ": "Y", "Ȳ": "Y", "Ɏ": "Y", "Ỹ": "Y", "Ź": "Z", "Ž": "Z", "Ẑ": "Z", "Ⱬ": "Z", "Ż": "Z", "Ẓ": "Z", "Ȥ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ĳ": "IJ", "Œ": "OE", "ᴀ": "A", "ᴁ": "AE", "ʙ": "B", "ᴃ": "B", "ᴄ": "C", "ᴅ": "D", "ᴇ": "E", "ꜰ": "F", "ɢ": "G", "ʛ": "G", "ʜ": "H", "ɪ": "I", "ʁ": "R", "ᴊ": "J", "ᴋ": "K", "ʟ": "L", "ᴌ": "L", "ᴍ": "M", "ɴ": "N", "ᴏ": "O", "ɶ": "OE", "ᴐ": "O", "ᴕ": "OU", "ᴘ": "P", "ʀ": "R", "ᴎ": "N", "ᴙ": "R", "ꜱ": "S", "ᴛ": "T", "ⱻ": "E", "ᴚ": "R", "ᴜ": "U", "ᴠ": "V", "ᴡ": "W", "ʏ": "Y", "ᴢ": "Z", "á": "a", "ă": "a", "ắ": "a", "ặ": "a", "ằ": "a", "ẳ": "a", "ẵ": "a", "ǎ": "a", "â": "a", "ấ": "a", "ậ": "a", "ầ": "a", "ẩ": "a", "ẫ": "a", "ä": "a", "ǟ": "a", "ȧ": "a", "ǡ": "a", "ạ": "a", "ȁ": "a", "à": "a", "ả": "a", "ȃ": "a", "ā": "a", "ą": "a", "ᶏ": "a", "ẚ": "a", "å": "a", "ǻ": "a", "ḁ": "a", "ⱥ": "a", "ã": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ḃ": "b", "ḅ": "b", "ɓ": "b", "ḇ": "b", "ᵬ": "b", "ᶀ": "b", "ƀ": "b", "ƃ": "b", "ɵ": "o", "ć": "c", "č": "c", "ç": "c", "ḉ": "c", "ĉ": "c", "ɕ": "c", "ċ": "c", "ƈ": "c", "ȼ": "c", "ď": "d", "ḑ": "d", "ḓ": "d", "ȡ": "d", "ḋ": "d", "ḍ": "d", "ɗ": "d", "ᶑ": "d", "ḏ": "d", "ᵭ": "d", "ᶁ": "d", "đ": "d", "ɖ": "d", "ƌ": "d", "ı": "i", "ȷ": "j", "ɟ": "j", "ʄ": "j", "ǳ": "dz", "ǆ": "dz", "é": "e", "ĕ": "e", "ě": "e", "ȩ": "e", "ḝ": "e", "ê": "e", "ế": "e", "ệ": "e", "ề": "e", "ể": "e", "ễ": "e", "ḙ": "e", "ë": "e", "ė": "e", "ẹ": "e", "ȅ": "e", "è": "e", "ẻ": "e", "ȇ": "e", "ē": "e", "ḗ": "e", "ḕ": "e", "ⱸ": "e", "ę": "e", "ᶒ": "e", "ɇ": "e", "ẽ": "e", "ḛ": "e", "ꝫ": "et", "ḟ": "f", "ƒ": "f", "ᵮ": "f", "ᶂ": "f", "ǵ": "g", "ğ": "g", "ǧ": "g", "ģ": "g", "ĝ": "g", "ġ": "g", "ɠ": "g", "ḡ": "g", "ᶃ": "g", "ǥ": "g", "ḫ": "h", "ȟ": "h", "ḩ": "h", "ĥ": "h", "ⱨ": "h", "ḧ": "h", "ḣ": "h", "ḥ": "h", "ɦ": "h", "ẖ": "h", "ħ": "h", "ƕ": "hv", "í": "i", "ĭ": "i", "ǐ": "i", "î": "i", "ï": "i", "ḯ": "i", "ị": "i", "ȉ": "i", "ì": "i", "ỉ": "i", "ȋ": "i", "ī": "i", "į": "i", "ᶖ": "i", "ɨ": "i", "ĩ": "i", "ḭ": "i", "ꝺ": "d", "ꝼ": "f", "ᵹ": "g", "ꞃ": "r", "ꞅ": "s", "ꞇ": "t", "ꝭ": "is", "ǰ": "j", "ĵ": "j", "ʝ": "j", "ɉ": "j", "ḱ": "k", "ǩ": "k", "ķ": "k", "ⱪ": "k", "ꝃ": "k", "ḳ": "k", "ƙ": "k", "ḵ": "k", "ᶄ": "k", "ꝁ": "k", "ꝅ": "k", "ĺ": "l", "ƚ": "l", "ɬ": "l", "ľ": "l", "ļ": "l", "ḽ": "l", "ȴ": "l", "ḷ": "l", "ḹ": "l", "ⱡ": "l", "ꝉ": "l", "ḻ": "l", "ŀ": "l", "ɫ": "l", "ᶅ": "l", "ɭ": "l", "ł": "l", "ǉ": "lj", "ſ": "s", "ẜ": "s", "ẛ": "s", "ẝ": "s", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ᵯ": "m", "ᶆ": "m", "ń": "n", "ň": "n", "ņ": "n", "ṋ": "n", "ȵ": "n", "ṅ": "n", "ṇ": "n", "ǹ": "n", "ɲ": "n", "ṉ": "n", "ƞ": "n", "ᵰ": "n", "ᶇ": "n", "ɳ": "n", "ñ": "n", "ǌ": "nj", "ó": "o", "ŏ": "o", "ǒ": "o", "ô": "o", "ố": "o", "ộ": "o", "ồ": "o", "ổ": "o", "ỗ": "o", "ö": "o", "ȫ": "o", "ȯ": "o", "ȱ": "o", "ọ": "o", "ő": "o", "ȍ": "o", "ò": "o", "ỏ": "o", "ơ": "o", "ớ": "o", "ợ": "o", "ờ": "o", "ở": "o", "ỡ": "o", "ȏ": "o", "ꝋ": "o", "ꝍ": "o", "ⱺ": "o", "ō": "o", "ṓ": "o", "ṑ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "õ": "o", "ṍ": "o", "ṏ": "o", "ȭ": "o", "ƣ": "oi", "ꝏ": "oo", "ɛ": "e", "ᶓ": "e", "ɔ": "o", "ᶗ": "o", "ȣ": "ou", "ṕ": "p", "ṗ": "p", "ꝓ": "p", "ƥ": "p", "ᵱ": "p", "ᶈ": "p", "ꝕ": "p", "ᵽ": "p", "ꝑ": "p", "ꝙ": "q", "ʠ": "q", "ɋ": "q", "ꝗ": "q", "ŕ": "r", "ř": "r", "ŗ": "r", "ṙ": "r", "ṛ": "r", "ṝ": "r", "ȑ": "r", "ɾ": "r", "ᵳ": "r", "ȓ": "r", "ṟ": "r", "ɼ": "r", "ᵲ": "r", "ᶉ": "r", "ɍ": "r", "ɽ": "r", "ↄ": "c", "ꜿ": "c", "ɘ": "e", "ɿ": "r", "ś": "s", "ṥ": "s", "š": "s", "ṧ": "s", "ş": "s", "ŝ": "s", "ș": "s", "ṡ": "s", "ṣ": "s", "ṩ": "s", "ʂ": "s", "ᵴ": "s", "ᶊ": "s", "ȿ": "s", "ɡ": "g", "ß": "ss", "ᴑ": "o", "ᴓ": "o", "ᴝ": "u", "ť": "t", "ţ": "t", "ṱ": "t", "ț": "t", "ȶ": "t", "ẗ": "t", "ⱦ": "t", "ṫ": "t", "ṭ": "t", "ƭ": "t", "ṯ": "t", "ᵵ": "t", "ƫ": "t", "ʈ": "t", "ŧ": "t", "ᵺ": "th", "ɐ": "a", "ᴂ": "ae", "ǝ": "e", "ᵷ": "g", "ɥ": "h", "ʮ": "h", "ʯ": "h", "ᴉ": "i", "ʞ": "k", "ꞁ": "l", "ɯ": "m", "ɰ": "m", "ᴔ": "oe", "ɹ": "r", "ɻ": "r", "ɺ": "r", "ⱹ": "r", "ʇ": "t", "ʌ": "v", "ʍ": "w", "ʎ": "y", "ꜩ": "tz", "ú": "u", "ŭ": "u", "ǔ": "u", "û": "u", "ṷ": "u", "ü": "u", "ǘ": "u", "ǚ": "u", "ǜ": "u", "ǖ": "u", "ṳ": "u", "ụ": "u", "ű": "u", "ȕ": "u", "ù": "u", "ủ": "u", "ư": "u", "ứ": "u", "ự": "u", "ừ": "u", "ử": "u", "ữ": "u", "ȗ": "u", "ū": "u", "ṻ": "u", "ų": "u", "ᶙ": "u", "ů": "u", "ũ": "u", "ṹ": "u", "ṵ": "u", "ᵫ": "ue", "ꝸ": "um", "ⱴ": "v", "ꝟ": "v", "ṿ": "v", "ʋ": "v", "ᶌ": "v", "ⱱ": "v", "ṽ": "v", "ꝡ": "vy", "ẃ": "w", "ŵ": "w", "ẅ": "w", "ẇ": "w", "ẉ": "w", "ẁ": "w", "ⱳ": "w", "ẘ": "w", "ẍ": "x", "ẋ": "x", "ᶍ": "x", "ý": "y", "ŷ": "y", "ÿ": "y", "ẏ": "y", "ỵ": "y", "ỳ": "y", "ƴ": "y", "ỷ": "y", "ỿ": "y", "ȳ": "y", "ẙ": "y", "ɏ": "y", "ỹ": "y", "ź": "z", "ž": "z", "ẑ": "z", "ʑ": "z", "ⱬ": "z", "ż": "z", "ẓ": "z", "ȥ": "z", "ẕ": "z", "ᵶ": "z", "ᶎ": "z", "ʐ": "z", "ƶ": "z", "ɀ": "z", "ﬀ": "ff", "ﬃ": "ffi", "ﬄ": "ffl", "ﬁ": "fi", "ﬂ": "fl", "ĳ": "ij", "œ": "oe", "ﬆ": "st", "ₐ": "a", "ₑ": "e", "ᵢ": "i", "ⱼ": "j", "ₒ": "o", "ᵣ": "r", "ᵤ": "u", "ᵥ": "v", "ₓ": "x" };
	
	  //******************************************************************************
	  // Added an initialize function which is essentially the code from the S
	  // constructor.  Now, the S constructor calls this and a new method named
	  // setValue calls it as well.  The setValue function allows constructors for
	  // modules that extend string.js to set the initial value of an object without
	  // knowing the internal workings of string.js.
	  //
	  // Also, all methods which return a new S object now call:
	  //
	  //      return new this.constructor(s);
	  //
	  // instead of:
	  //
	  //      return new S(s);
	  //
	  // This allows extended objects to keep their proper instanceOf and constructor.
	  //******************************************************************************
	
	  function initialize(object, s) {
	    if (s !== null && s !== undefined) {
	      if (typeof s === 'string') object.s = s;else object.s = s.toString();
	    } else {
	      object.s = s; //null or undefined
	    }
	
	    object.orig = s; //original object, currently only used by toCSV() and toBoolean()
	
	    if (s !== null && s !== undefined) {
	      if (object.__defineGetter__) {
	        object.__defineGetter__('length', function () {
	          return object.s.length;
	        });
	      } else {
	        object.length = s.length;
	      }
	    } else {
	      object.length = -1;
	    }
	  }
	
	  function S(s) {
	    initialize(this, s);
	  }
	
	  var __nsp = String.prototype;
	  var __sp = S.prototype = {
	
	    between: function between(left, right) {
	      var s = this.s;
	      var startPos = s.indexOf(left);
	      var endPos = s.indexOf(right, startPos + left.length);
	      if (endPos == -1 && right != null) return new this.constructor('');else if (endPos == -1 && right == null) return new this.constructor(s.substring(startPos + left.length));else return new this.constructor(s.slice(startPos + left.length, endPos));
	    },
	
	    //# modified slightly from https://github.com/epeli/underscore.string
	    camelize: function camelize() {
	      var s = this.trim().s.replace(/(\-|_|\s)+(.)?/g, function (mathc, sep, c) {
	        return c ? c.toUpperCase() : '';
	      });
	      return new this.constructor(s);
	    },
	
	    capitalize: function capitalize() {
	      return new this.constructor(this.s.substr(0, 1).toUpperCase() + this.s.substring(1).toLowerCase());
	    },
	
	    charAt: function charAt(index) {
	      return this.s.charAt(index);
	    },
	
	    chompLeft: function chompLeft(prefix) {
	      var s = this.s;
	      if (s.indexOf(prefix) === 0) {
	        s = s.slice(prefix.length);
	        return new this.constructor(s);
	      } else {
	        return this;
	      }
	    },
	
	    chompRight: function chompRight(suffix) {
	      if (this.endsWith(suffix)) {
	        var s = this.s;
	        s = s.slice(0, s.length - suffix.length);
	        return new this.constructor(s);
	      } else {
	        return this;
	      }
	    },
	
	    //#thanks Google
	    collapseWhitespace: function collapseWhitespace() {
	      var s = this.s.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
	      return new this.constructor(s);
	    },
	
	    contains: function contains(ss) {
	      return this.s.indexOf(ss) >= 0;
	    },
	
	    count: function count(ss) {
	      return __webpack_require__(/*! ./_count */ 4)(this.s, ss);
	    },
	
	    //#modified from https://github.com/epeli/underscore.string
	    dasherize: function dasherize() {
	      var s = this.trim().s.replace(/[_\s]+/g, '-').replace(/([A-Z])/g, '-$1').replace(/-+/g, '-').toLowerCase();
	      return new this.constructor(s);
	    },
	
	    equalsIgnoreCase: function equalsIgnoreCase(prefix) {
	      var s = this.s;
	      return s.toLowerCase() == prefix.toLowerCase();
	    },
	
	    latinise: function latinise() {
	      var s = this.replace(/[^A-Za-z0-9\[\] ]/g, function (x) {
	        return latin_map[x] || x;
	      });
	      return new this.constructor(s);
	    },
	
	    decodeHtmlEntities: function decodeHtmlEntities() {
	      //https://github.com/substack/node-ent/blob/master/index.js
	      var s = this.s;
	      s = s.replace(/&#(\d+);?/g, function (_, code) {
	        return String.fromCharCode(code);
	      }).replace(/&#[xX]([A-Fa-f0-9]+);?/g, function (_, hex) {
	        return String.fromCharCode(parseInt(hex, 16));
	      }).replace(/&([^;\W]+;?)/g, function (m, e) {
	        var ee = e.replace(/;$/, '');
	        var target = ENTITIES[e] || e.match(/;$/) && ENTITIES[ee];
	
	        if (typeof target === 'number') {
	          return String.fromCharCode(target);
	        } else if (typeof target === 'string') {
	          return target;
	        } else {
	          return m;
	        }
	      });
	
	      return new this.constructor(s);
	    },
	
	    endsWith: function endsWith() {
	      var suffixes = Array.prototype.slice.call(arguments, 0);
	      for (var i = 0; i < suffixes.length; ++i) {
	        var l = this.s.length - suffixes[i].length;
	        if (l >= 0 && this.s.indexOf(suffixes[i], l) === l) return true;
	      }
	      return false;
	    },
	
	    escapeHTML: function escapeHTML() {
	      //from underscore.string
	      return new this.constructor(this.s.replace(/[&<>"']/g, function (m) {
	        return '&' + reversedEscapeChars[m] + ';';
	      }));
	    },
	
	    ensureLeft: function ensureLeft(prefix) {
	      var s = this.s;
	      if (s.indexOf(prefix) === 0) {
	        return this;
	      } else {
	        return new this.constructor(prefix + s);
	      }
	    },
	
	    ensureRight: function ensureRight(suffix) {
	      var s = this.s;
	      if (this.endsWith(suffix)) {
	        return this;
	      } else {
	        return new this.constructor(s + suffix);
	      }
	    },
	
	    humanize: function humanize() {
	      //modified from underscore.string
	      if (this.s === null || this.s === undefined) return new this.constructor('');
	      var s = this.underscore().replace(/_id$/, '').replace(/_/g, ' ').trim().capitalize();
	      return new this.constructor(s);
	    },
	
	    isAlpha: function isAlpha() {
	      return !/[^a-z\xDF-\xFF]|^$/.test(this.s.toLowerCase());
	    },
	
	    isAlphaNumeric: function isAlphaNumeric() {
	      return !/[^0-9a-z\xDF-\xFF]/.test(this.s.toLowerCase());
	    },
	
	    isEmpty: function isEmpty() {
	      return this.s === null || this.s === undefined ? true : /^[\s\xa0]*$/.test(this.s);
	    },
	
	    isLower: function isLower() {
	      return this.isAlpha() && this.s.toLowerCase() === this.s;
	    },
	
	    isNumeric: function isNumeric() {
	      return !/[^0-9]/.test(this.s);
	    },
	
	    isUpper: function isUpper() {
	      return this.isAlpha() && this.s.toUpperCase() === this.s;
	    },
	
	    left: function left(N) {
	      if (N >= 0) {
	        var s = this.s.substr(0, N);
	        return new this.constructor(s);
	      } else {
	        return this.right(-N);
	      }
	    },
	
	    lines: function lines() {
	      //convert windows newlines to unix newlines then convert to an Array of lines
	      return this.replaceAll('\r\n', '\n').s.split('\n');
	    },
	
	    pad: function pad(len, ch) {
	      //https://github.com/component/pad
	      if (ch == null) ch = ' ';
	      if (this.s.length >= len) return new this.constructor(this.s);
	      len = len - this.s.length;
	      var left = Array(Math.ceil(len / 2) + 1).join(ch);
	      var right = Array(Math.floor(len / 2) + 1).join(ch);
	      return new this.constructor(left + this.s + right);
	    },
	
	    padLeft: function padLeft(len, ch) {
	      //https://github.com/component/pad
	      if (ch == null) ch = ' ';
	      if (this.s.length >= len) return new this.constructor(this.s);
	      return new this.constructor(Array(len - this.s.length + 1).join(ch) + this.s);
	    },
	
	    padRight: function padRight(len, ch) {
	      //https://github.com/component/pad
	      if (ch == null) ch = ' ';
	      if (this.s.length >= len) return new this.constructor(this.s);
	      return new this.constructor(this.s + Array(len - this.s.length + 1).join(ch));
	    },
	
	    parseCSV: function parseCSV(delimiter, qualifier, escape, lineDelimiter) {
	      //try to parse no matter what
	      delimiter = delimiter || ',';
	      escape = escape || '\\';
	      if (typeof qualifier == 'undefined') qualifier = '"';
	
	      var i = 0,
	          fieldBuffer = [],
	          fields = [],
	          len = this.s.length,
	          inField = false,
	          inUnqualifiedString = false,
	          self = this;
	      var ca = function ca(i) {
	        return self.s.charAt(i);
	      };
	      if (typeof lineDelimiter !== 'undefined') var rows = [];
	
	      if (!qualifier) inField = true;
	
	      while (i < len) {
	        var current = ca(i);
	        switch (current) {
	          case escape:
	            //fix for issues #32 and #35
	            if (inField && (escape !== qualifier || ca(i + 1) === qualifier)) {
	              i += 1;
	              fieldBuffer.push(ca(i));
	              break;
	            }
	            if (escape !== qualifier) break;
	          case qualifier:
	            inField = !inField;
	            break;
	          case delimiter:
	            if (inUnqualifiedString) {
	              inField = false;
	              inUnqualifiedString = false;
	            }
	            if (inField && qualifier) fieldBuffer.push(current);else {
	              fields.push(fieldBuffer.join(''));
	              fieldBuffer.length = 0;
	            }
	            break;
	          case lineDelimiter:
	            if (inUnqualifiedString) {
	              inField = false;
	              inUnqualifiedString = false;
	              fields.push(fieldBuffer.join(''));
	              rows.push(fields);
	              fields = [];
	              fieldBuffer.length = 0;
	            } else if (inField) {
	              fieldBuffer.push(current);
	            } else {
	              if (rows) {
	                fields.push(fieldBuffer.join(''));
	                rows.push(fields);
	                fields = [];
	                fieldBuffer.length = 0;
	              }
	            }
	            break;
	          case ' ':
	            if (inField) fieldBuffer.push(current);
	            break;
	          default:
	            if (inField) fieldBuffer.push(current);else if (current !== qualifier) {
	              fieldBuffer.push(current);
	              inField = true;
	              inUnqualifiedString = true;
	            }
	            break;
	        }
	        i += 1;
	      }
	
	      fields.push(fieldBuffer.join(''));
	      if (rows) {
	        rows.push(fields);
	        return rows;
	      }
	      return fields;
	    },
	
	    replaceAll: function replaceAll(ss, r) {
	      //var s = this.s.replace(new RegExp(ss, 'g'), r);
	      var s = this.s.split(ss).join(r);
	      return new this.constructor(s);
	    },
	
	    splitLeft: function splitLeft(sep, maxSplit, limit) {
	      return __webpack_require__(/*! ./_splitLeft */ 5)(this.s, sep, maxSplit, limit);
	    },
	
	    splitRight: function splitRight(sep, maxSplit, limit) {
	      return __webpack_require__(/*! ./_splitRight */ 6)(this.s, sep, maxSplit, limit);
	    },
	
	    strip: function strip() {
	      var ss = this.s;
	      for (var i = 0, n = arguments.length; i < n; i++) {
	        ss = ss.split(arguments[i]).join('');
	      }
	      return new this.constructor(ss);
	    },
	
	    stripLeft: function stripLeft(chars) {
	      var regex;
	      var pattern;
	      var ss = ensureString(this.s);
	
	      if (chars === undefined) {
	        pattern = /^\s+/g;
	      } else {
	        regex = escapeRegExp(chars);
	        pattern = new RegExp("^[" + regex + "]+", "g");
	      }
	
	      return new this.constructor(ss.replace(pattern, ""));
	    },
	
	    stripRight: function stripRight(chars) {
	      var regex;
	      var pattern;
	      var ss = ensureString(this.s);
	
	      if (chars === undefined) {
	        pattern = /\s+$/g;
	      } else {
	        regex = escapeRegExp(chars);
	        pattern = new RegExp("[" + regex + "]+$", "g");
	      }
	
	      return new this.constructor(ss.replace(pattern, ""));
	    },
	
	    right: function right(N) {
	      if (N >= 0) {
	        var s = this.s.substr(this.s.length - N, N);
	        return new this.constructor(s);
	      } else {
	        return this.left(-N);
	      }
	    },
	
	    setValue: function setValue(s) {
	      initialize(this, s);
	      return this;
	    },
	
	    slugify: function slugify() {
	      var sl = new S(new S(this.s).latinise().s.replace(/[^\w\s-]/g, '').toLowerCase()).dasherize().s;
	      if (sl.charAt(0) === '-') sl = sl.substr(1);
	      return new this.constructor(sl);
	    },
	
	    startsWith: function startsWith() {
	      var prefixes = Array.prototype.slice.call(arguments, 0);
	      for (var i = 0; i < prefixes.length; ++i) {
	        if (this.s.lastIndexOf(prefixes[i], 0) === 0) return true;
	      }
	      return false;
	    },
	
	    stripPunctuation: function stripPunctuation() {
	      //return new this.constructor(this.s.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""));
	      return new this.constructor(this.s.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " "));
	    },
	
	    stripTags: function stripTags() {
	      //from sugar.js
	      var s = this.s,
	          args = arguments.length > 0 ? arguments : [''];
	      multiArgs(args, function (tag) {
	        s = s.replace(RegExp('<\/?' + tag + '[^<>]*>', 'gi'), '');
	      });
	      return new this.constructor(s);
	    },
	
	    template: function template(values, opening, closing) {
	      var s = this.s;
	      var opening = opening || Export.TMPL_OPEN;
	      var closing = closing || Export.TMPL_CLOSE;
	
	      var open = opening.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, '\\$');
	      var close = closing.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, '\\$');
	      var r = new RegExp(open + '(.+?)' + close, 'g');
	      //, r = /\{\{(.+?)\}\}/g
	      var matches = s.match(r) || [];
	
	      matches.forEach(function (match) {
	        var key = match.substring(opening.length, match.length - closing.length).trim(); //chop {{ and }}
	        var value = typeof values[key] == 'undefined' ? '' : values[key];
	        s = s.replace(match, value);
	      });
	      return new this.constructor(s);
	    },
	
	    times: function times(n) {
	      return new this.constructor(new Array(n + 1).join(this.s));
	    },
	
	    titleCase: function titleCase() {
	      var s = this.s;
	      if (s) {
	        s = s.replace(/(^[a-z]| [a-z]|-[a-z]|_[a-z])/g, function ($1) {
	          return $1.toUpperCase();
	        });
	      }
	      return new this.constructor(s);
	    },
	
	    toBoolean: function toBoolean() {
	      if (typeof this.orig === 'string') {
	        var s = this.s.toLowerCase();
	        return s === 'true' || s === 'yes' || s === 'on' || s === '1';
	      } else return this.orig === true || this.orig === 1;
	    },
	
	    toFloat: function toFloat(precision) {
	      var num = parseFloat(this.s);
	      if (precision) return parseFloat(num.toFixed(precision));else return num;
	    },
	
	    toInt: function toInt() {
	      //thanks Google
	      // If the string starts with '0x' or '-0x', parse as hex.
	      return (/^\s*-?0x/i.test(this.s) ? parseInt(this.s, 16) : parseInt(this.s, 10)
	      );
	    },
	
	    trim: function trim() {
	      var s;
	      if (typeof __nsp.trim === 'undefined') s = this.s.replace(/(^\s*|\s*$)/g, '');else s = this.s.trim();
	      return new this.constructor(s);
	    },
	
	    trimLeft: function trimLeft() {
	      var s;
	      if (__nsp.trimLeft) s = this.s.trimLeft();else s = this.s.replace(/(^\s*)/g, '');
	      return new this.constructor(s);
	    },
	
	    trimRight: function trimRight() {
	      var s;
	      if (__nsp.trimRight) s = this.s.trimRight();else s = this.s.replace(/\s+$/, '');
	      return new this.constructor(s);
	    },
	
	    truncate: function truncate(length, pruneStr) {
	      //from underscore.string, author: github.com/rwz
	      var str = this.s;
	
	      length = ~~length;
	      pruneStr = pruneStr || '...';
	
	      if (str.length <= length) return new this.constructor(str);
	
	      var tmpl = function tmpl(c) {
	        return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' ';
	      },
	          template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl); // 'Hello, world' -> 'HellAA AAAAA'
	
	      if (template.slice(template.length - 2).match(/\w\w/)) template = template.replace(/\s*\S+$/, '');else template = new S(template.slice(0, template.length - 1)).trimRight().s;
	
	      return (template + pruneStr).length > str.length ? new S(str) : new S(str.slice(0, template.length) + pruneStr);
	    },
	
	    toCSV: function toCSV() {
	      var delim = ',',
	          qualifier = '"',
	          escape = '\\',
	          encloseNumbers = true,
	          keys = false;
	      var dataArray = [];
	
	      function hasVal(it) {
	        return it !== null && it !== '';
	      }
	
	      if (_typeof(arguments[0]) === 'object') {
	        delim = arguments[0].delimiter || delim;
	        delim = arguments[0].separator || delim;
	        qualifier = arguments[0].qualifier || qualifier;
	        encloseNumbers = !!arguments[0].encloseNumbers;
	        escape = arguments[0].escape || escape;
	        keys = !!arguments[0].keys;
	      } else if (typeof arguments[0] === 'string') {
	        delim = arguments[0];
	      }
	
	      if (typeof arguments[1] === 'string') qualifier = arguments[1];
	
	      if (arguments[1] === null) qualifier = null;
	
	      if (this.orig instanceof Array) dataArray = this.orig;else {
	        //object
	        for (var key in this.orig) {
	          if (this.orig.hasOwnProperty(key)) if (keys) dataArray.push(key);else dataArray.push(this.orig[key]);
	        }
	      }
	
	      var rep = escape + qualifier;
	      var buildString = [];
	      for (var i = 0; i < dataArray.length; ++i) {
	        var shouldQualify = hasVal(qualifier);
	        if (typeof dataArray[i] == 'number') shouldQualify &= encloseNumbers;
	
	        if (shouldQualify) buildString.push(qualifier);
	
	        if (dataArray[i] !== null && dataArray[i] !== undefined) {
	          var d = new S(dataArray[i]).replaceAll(qualifier, rep).s;
	          buildString.push(d);
	        } else buildString.push('');
	
	        if (shouldQualify) buildString.push(qualifier);
	
	        if (delim) buildString.push(delim);
	      }
	
	      //chop last delim
	      //console.log(buildString.length)
	      buildString.length = buildString.length - 1;
	      return new this.constructor(buildString.join(''));
	    },
	
	    toString: function toString() {
	      return this.s;
	    },
	
	    //#modified from https://github.com/epeli/underscore.string
	    underscore: function underscore() {
	      var s = this.trim().s.replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/([A-Z\d]+)([A-Z][a-z])/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
	      return new this.constructor(s);
	    },
	
	    unescapeHTML: function unescapeHTML() {
	      //from underscore.string
	      return new this.constructor(this.s.replace(/\&([^;]+);/g, function (entity, entityCode) {
	        var match;
	
	        if (entityCode in escapeChars) {
	          return escapeChars[entityCode];
	        } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
	          return String.fromCharCode(parseInt(match[1], 16));
	        } else if (match = entityCode.match(/^#(\d+)$/)) {
	          return String.fromCharCode(~~match[1]);
	        } else {
	          return entity;
	        }
	      }));
	    },
	
	    valueOf: function valueOf() {
	      return this.s.valueOf();
	    },
	
	    //#Added a New Function called wrapHTML.
	    wrapHTML: function wrapHTML(tagName, tagAttrs) {
	      var s = this.s,
	          el = tagName == null ? 'span' : tagName,
	          elAttr = '',
	          wrapped = '';
	      if ((typeof tagAttrs === "undefined" ? "undefined" : _typeof(tagAttrs)) == 'object') for (var prop in tagAttrs) {
	        elAttr += ' ' + prop + '="' + new this.constructor(tagAttrs[prop]).escapeHTML() + '"';
	      }s = wrapped.concat('<', el, elAttr, '>', this, '</', el, '>');
	      return new this.constructor(s);
	    }
	  };
	
	  var methodsAdded = [];
	  function extendPrototype() {
	    for (var name in __sp) {
	      (function (name) {
	        var func = __sp[name];
	        if (!__nsp.hasOwnProperty(name)) {
	          methodsAdded.push(name);
	          __nsp[name] = function () {
	            String.prototype.s = this;
	            return func.apply(this, arguments);
	          };
	        }
	      })(name);
	    }
	  }
	
	  function restorePrototype() {
	    for (var i = 0; i < methodsAdded.length; ++i) {
	      delete String.prototype[methodsAdded[i]];
	    }methodsAdded.length = 0;
	  }
	
	  /*************************************
	  /* Attach Native JavaScript String Properties
	  /*************************************/
	
	  var nativeProperties = getNativeStringProperties();
	  for (var name in nativeProperties) {
	    (function (name) {
	      var stringProp = __nsp[name];
	      if (typeof stringProp == 'function') {
	        //console.log(stringProp)
	        if (!__sp[name]) {
	          if (nativeProperties[name] === 'string') {
	            __sp[name] = function () {
	              //console.log(name)
	              return new this.constructor(stringProp.apply(this, arguments));
	            };
	          } else {
	            __sp[name] = stringProp;
	          }
	        }
	      }
	    })(name);
	  }
	
	  /*************************************
	  /* Function Aliases
	  /*************************************/
	
	  __sp.repeat = __sp.times;
	  __sp.include = __sp.contains;
	  __sp.toInteger = __sp.toInt;
	  __sp.toBool = __sp.toBoolean;
	  __sp.decodeHTMLEntities = __sp.decodeHtmlEntities; //ensure consistent casing scheme of 'HTML'
	
	
	  //******************************************************************************
	  // Set the constructor.  Without this, string.js objects are instances of
	  // Object instead of S.
	  //******************************************************************************
	
	  __sp.constructor = S;
	
	  /*************************************
	  /* Private Functions
	  /*************************************/
	
	  function getNativeStringProperties() {
	    var names = getNativeStringPropertyNames();
	    var retObj = {};
	
	    for (var i = 0; i < names.length; ++i) {
	      var name = names[i];
	      if (name === 'to' || name === 'toEnd') continue; // get rid of the shelljs prototype messup
	      var func = __nsp[name];
	      try {
	        var type = _typeof(func.apply('teststring'));
	        retObj[name] = type;
	      } catch (e) {}
	    }
	    return retObj;
	  }
	
	  function getNativeStringPropertyNames() {
	    var results = [];
	    if (Object.getOwnPropertyNames) {
	      results = Object.getOwnPropertyNames(__nsp);
	      results.splice(results.indexOf('valueOf'), 1);
	      results.splice(results.indexOf('toString'), 1);
	      return results;
	    } else {
	      //meant for legacy cruft, this could probably be made more efficient
	      var stringNames = {};
	      var objectNames = [];
	      for (var name in String.prototype) {
	        stringNames[name] = name;
	      }for (var name in Object.prototype) {
	        delete stringNames[name];
	      } //stringNames['toString'] = 'toString'; //this was deleted with the rest of the object names
	      for (var name in stringNames) {
	        results.push(name);
	      }
	      return results;
	    }
	  }
	
	  function Export(str) {
	    return new S(str);
	  };
	
	  //attach exports to StringJSWrapper
	  Export.extendPrototype = extendPrototype;
	  Export.restorePrototype = restorePrototype;
	  Export.VERSION = VERSION;
	  Export.TMPL_OPEN = '{{';
	  Export.TMPL_CLOSE = '}}';
	  Export.ENTITIES = ENTITIES;
	
	  /*************************************
	  /* Exports
	  /*************************************/
	
	  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	    module.exports = Export;
	  } else {
	
	    if (true) {
	      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	        return Export;
	      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	      window.S = Export;
	    }
	  }
	
	  /*************************************
	  /* 3rd Party Private Functions
	  /*************************************/
	
	  //from sugar.js
	  function multiArgs(args, fn) {
	    var result = [],
	        i;
	    for (i = 0; i < args.length; i++) {
	      result.push(args[i]);
	      if (fn) fn.call(args, args[i], i);
	    }
	    return result;
	  }
	
	  //from underscore.string
	  var escapeChars = {
	    lt: '<',
	    gt: '>',
	    quot: '"',
	    apos: "'",
	    amp: '&'
	  };
	
	  function escapeRegExp(s) {
	    // most part from https://github.com/skulpt/skulpt/blob/ecaf75e69c2e539eff124b2ab45df0b01eaf2295/src/str.js#L242
	    var c;
	    var i;
	    var ret = [];
	    var re = /^[A-Za-z0-9]+$/;
	    s = ensureString(s);
	    for (i = 0; i < s.length; ++i) {
	      c = s.charAt(i);
	
	      if (re.test(c)) {
	        ret.push(c);
	      } else {
	        if (c === "\\000") {
	          ret.push("\\000");
	        } else {
	          ret.push("\\" + c);
	        }
	      }
	    }
	    return ret.join("");
	  }
	
	  function ensureString(string) {
	    return string == null ? '' : '' + string;
	  }
	
	  //from underscore.string
	  var reversedEscapeChars = {};
	  for (var key in escapeChars) {
	    reversedEscapeChars[escapeChars[key]] = key;
	  }
	
	  ENTITIES = {
	    "amp": "&",
	    "gt": ">",
	    "lt": "<",
	    "quot": "\"",
	    "apos": "'",
	    "AElig": 198,
	    "Aacute": 193,
	    "Acirc": 194,
	    "Agrave": 192,
	    "Aring": 197,
	    "Atilde": 195,
	    "Auml": 196,
	    "Ccedil": 199,
	    "ETH": 208,
	    "Eacute": 201,
	    "Ecirc": 202,
	    "Egrave": 200,
	    "Euml": 203,
	    "Iacute": 205,
	    "Icirc": 206,
	    "Igrave": 204,
	    "Iuml": 207,
	    "Ntilde": 209,
	    "Oacute": 211,
	    "Ocirc": 212,
	    "Ograve": 210,
	    "Oslash": 216,
	    "Otilde": 213,
	    "Ouml": 214,
	    "THORN": 222,
	    "Uacute": 218,
	    "Ucirc": 219,
	    "Ugrave": 217,
	    "Uuml": 220,
	    "Yacute": 221,
	    "aacute": 225,
	    "acirc": 226,
	    "aelig": 230,
	    "agrave": 224,
	    "aring": 229,
	    "atilde": 227,
	    "auml": 228,
	    "ccedil": 231,
	    "eacute": 233,
	    "ecirc": 234,
	    "egrave": 232,
	    "eth": 240,
	    "euml": 235,
	    "iacute": 237,
	    "icirc": 238,
	    "igrave": 236,
	    "iuml": 239,
	    "ntilde": 241,
	    "oacute": 243,
	    "ocirc": 244,
	    "ograve": 242,
	    "oslash": 248,
	    "otilde": 245,
	    "ouml": 246,
	    "szlig": 223,
	    "thorn": 254,
	    "uacute": 250,
	    "ucirc": 251,
	    "ugrave": 249,
	    "uuml": 252,
	    "yacute": 253,
	    "yuml": 255,
	    "copy": 169,
	    "reg": 174,
	    "nbsp": 160,
	    "iexcl": 161,
	    "cent": 162,
	    "pound": 163,
	    "curren": 164,
	    "yen": 165,
	    "brvbar": 166,
	    "sect": 167,
	    "uml": 168,
	    "ordf": 170,
	    "laquo": 171,
	    "not": 172,
	    "shy": 173,
	    "macr": 175,
	    "deg": 176,
	    "plusmn": 177,
	    "sup1": 185,
	    "sup2": 178,
	    "sup3": 179,
	    "acute": 180,
	    "micro": 181,
	    "para": 182,
	    "middot": 183,
	    "cedil": 184,
	    "ordm": 186,
	    "raquo": 187,
	    "frac14": 188,
	    "frac12": 189,
	    "frac34": 190,
	    "iquest": 191,
	    "times": 215,
	    "divide": 247,
	    "OElig;": 338,
	    "oelig;": 339,
	    "Scaron;": 352,
	    "scaron;": 353,
	    "Yuml;": 376,
	    "fnof;": 402,
	    "circ;": 710,
	    "tilde;": 732,
	    "Alpha;": 913,
	    "Beta;": 914,
	    "Gamma;": 915,
	    "Delta;": 916,
	    "Epsilon;": 917,
	    "Zeta;": 918,
	    "Eta;": 919,
	    "Theta;": 920,
	    "Iota;": 921,
	    "Kappa;": 922,
	    "Lambda;": 923,
	    "Mu;": 924,
	    "Nu;": 925,
	    "Xi;": 926,
	    "Omicron;": 927,
	    "Pi;": 928,
	    "Rho;": 929,
	    "Sigma;": 931,
	    "Tau;": 932,
	    "Upsilon;": 933,
	    "Phi;": 934,
	    "Chi;": 935,
	    "Psi;": 936,
	    "Omega;": 937,
	    "alpha;": 945,
	    "beta;": 946,
	    "gamma;": 947,
	    "delta;": 948,
	    "epsilon;": 949,
	    "zeta;": 950,
	    "eta;": 951,
	    "theta;": 952,
	    "iota;": 953,
	    "kappa;": 954,
	    "lambda;": 955,
	    "mu;": 956,
	    "nu;": 957,
	    "xi;": 958,
	    "omicron;": 959,
	    "pi;": 960,
	    "rho;": 961,
	    "sigmaf;": 962,
	    "sigma;": 963,
	    "tau;": 964,
	    "upsilon;": 965,
	    "phi;": 966,
	    "chi;": 967,
	    "psi;": 968,
	    "omega;": 969,
	    "thetasym;": 977,
	    "upsih;": 978,
	    "piv;": 982,
	    "ensp;": 8194,
	    "emsp;": 8195,
	    "thinsp;": 8201,
	    "zwnj;": 8204,
	    "zwj;": 8205,
	    "lrm;": 8206,
	    "rlm;": 8207,
	    "ndash;": 8211,
	    "mdash;": 8212,
	    "lsquo;": 8216,
	    "rsquo;": 8217,
	    "sbquo;": 8218,
	    "ldquo;": 8220,
	    "rdquo;": 8221,
	    "bdquo;": 8222,
	    "dagger;": 8224,
	    "Dagger;": 8225,
	    "bull;": 8226,
	    "hellip;": 8230,
	    "permil;": 8240,
	    "prime;": 8242,
	    "Prime;": 8243,
	    "lsaquo;": 8249,
	    "rsaquo;": 8250,
	    "oline;": 8254,
	    "frasl;": 8260,
	    "euro;": 8364,
	    "image;": 8465,
	    "weierp;": 8472,
	    "real;": 8476,
	    "trade;": 8482,
	    "alefsym;": 8501,
	    "larr;": 8592,
	    "uarr;": 8593,
	    "rarr;": 8594,
	    "darr;": 8595,
	    "harr;": 8596,
	    "crarr;": 8629,
	    "lArr;": 8656,
	    "uArr;": 8657,
	    "rArr;": 8658,
	    "dArr;": 8659,
	    "hArr;": 8660,
	    "forall;": 8704,
	    "part;": 8706,
	    "exist;": 8707,
	    "empty;": 8709,
	    "nabla;": 8711,
	    "isin;": 8712,
	    "notin;": 8713,
	    "ni;": 8715,
	    "prod;": 8719,
	    "sum;": 8721,
	    "minus;": 8722,
	    "lowast;": 8727,
	    "radic;": 8730,
	    "prop;": 8733,
	    "infin;": 8734,
	    "ang;": 8736,
	    "and;": 8743,
	    "or;": 8744,
	    "cap;": 8745,
	    "cup;": 8746,
	    "int;": 8747,
	    "there4;": 8756,
	    "sim;": 8764,
	    "cong;": 8773,
	    "asymp;": 8776,
	    "ne;": 8800,
	    "equiv;": 8801,
	    "le;": 8804,
	    "ge;": 8805,
	    "sub;": 8834,
	    "sup;": 8835,
	    "nsub;": 8836,
	    "sube;": 8838,
	    "supe;": 8839,
	    "oplus;": 8853,
	    "otimes;": 8855,
	    "perp;": 8869,
	    "sdot;": 8901,
	    "lceil;": 8968,
	    "rceil;": 8969,
	    "lfloor;": 8970,
	    "rfloor;": 8971,
	    "lang;": 9001,
	    "rang;": 9002,
	    "loz;": 9674,
	    "spades;": 9824,
	    "clubs;": 9827,
	    "hearts;": 9829,
	    "diams;": 9830
	  };
	}.call(undefined);

/***/ },
/* 4 */
/*!********************************!*\
  !*** ./~/string/lib/_count.js ***!
  \********************************/
/***/ function(module, exports) {

	"use strict";
	
	function count(self, substr) {
	  var count = 0;
	  var pos = self.indexOf(substr);
	
	  while (pos >= 0) {
	    count += 1;
	    pos = self.indexOf(substr, pos + 1);
	  }
	
	  return count;
	}
	
	module.exports = count;

/***/ },
/* 5 */
/*!************************************!*\
  !*** ./~/string/lib/_splitLeft.js ***!
  \************************************/
/***/ function(module, exports) {

	'use strict';
	
	function splitLeft(self, sep, maxSplit, limit) {
	
	  if (typeof maxSplit === 'undefined') {
	    var maxSplit = -1;
	  }
	
	  var splitResult = self.split(sep);
	  var splitPart1 = splitResult.slice(0, maxSplit);
	  var splitPart2 = splitResult.slice(maxSplit);
	
	  if (splitPart2.length === 0) {
	    splitResult = splitPart1;
	  } else {
	    splitResult = splitPart1.concat(splitPart2.join(sep));
	  }
	
	  if (typeof limit === 'undefined') {
	    return splitResult;
	  } else if (limit < 0) {
	    return splitResult.slice(limit);
	  } else {
	    return splitResult.slice(0, limit);
	  }
	}
	
	module.exports = splitLeft;

/***/ },
/* 6 */
/*!*************************************!*\
  !*** ./~/string/lib/_splitRight.js ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';
	
	function splitRight(self, sep, maxSplit, limit) {
	
	  if (typeof maxSplit === 'undefined') {
	    var maxSplit = -1;
	  }
	  if (typeof limit === 'undefined') {
	    var limit = 0;
	  }
	
	  var splitResult = [self];
	
	  for (var i = self.length - 1; i >= 0; i--) {
	
	    if (splitResult[0].slice(i).indexOf(sep) === 0 && (splitResult.length <= maxSplit || maxSplit === -1)) {
	      splitResult.splice(1, 0, splitResult[0].slice(i + sep.length)); // insert
	      splitResult[0] = splitResult[0].slice(0, i);
	    }
	  }
	
	  if (limit >= 0) {
	    return splitResult.slice(-limit);
	  } else {
	    return splitResult.slice(0, -limit);
	  }
	}
	
	module.exports = splitRight;

/***/ },
/* 7 */
/*!*******************************************!*\
  !*** ./~/cells-bridge/src/manager/dom.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _events = __webpack_require__(/*! ./events */ 8);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CellsManagerDom = function () {
	  function CellsManagerDom() {
	    _classCallCheck(this, CellsManagerDom);
	  }
	
	  _createClass(CellsManagerDom, [{
	    key: 'createComponents',
	    value: function createComponents(spec) {
	      // @TODO: Revisar métodos con diferentes puntos de salida.
	      // @TODO: Los valores de retorno deberían ser homogéneos siempre que sea posible. En este caso se podría devolver un array vacío.
	      /* istanbul ignore if */
	      if (!spec) {
	        return;
	      }
	      var elements = [];
	      var i = 0;
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = spec[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var element = _step.value;
	
	          elements[i] = this.createElement(element.tagName);
	          elements[i].__zone = element.zone;
	          i++;
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return elements;
	    }
	  }, {
	    key: 'setAttrs',
	    value: function setAttrs(node, attrs) {
	      if (attrs && (typeof attrs === 'undefined' ? 'undefined' : _typeof(attrs)) === 'object') {
	        _events2.default.emit('before-set-attr-to-node', node.tagName);
	        _extends(node, attrs);
	        _events2.default.emit('after-set-attr-to-node', node);
	      }
	    }
	  }, {
	    key: 'createElement',
	    value: function createElement(tagName, properties) {
	      _events2.default.emit('before-create-node', tagName);
	      var node = document.createElement(tagName);
	      _events2.default.emit('after-create-node', node);
	
	      /* istanbul ignore else */
	      if (properties) {
	        this.setAttrs(node, properties);
	      }
	
	      return node;
	    }
	  }]);
	
	  return CellsManagerDom;
	}();
	
	exports.default = CellsManagerDom;

/***/ },
/* 8 */
/*!**********************************************!*\
  !*** ./~/cells-bridge/src/manager/events.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _events = __webpack_require__(/*! events */ 9);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var maxNumListeners = 20;
	
	var CustomEventEmitter = function (_EventEmitter) {
	  _inherits(CustomEventEmitter, _EventEmitter);
	
	  function CustomEventEmitter() {
	    _classCallCheck(this, CustomEventEmitter);
	
	    return _possibleConstructorReturn(this, (CustomEventEmitter.__proto__ || Object.getPrototypeOf(CustomEventEmitter)).apply(this, arguments));
	  }
	
	  _createClass(CustomEventEmitter, [{
	    key: 'listenToOnce',
	    value: function listenToOnce(node, name, callback) {
	      var fn = function () {
	        callback();
	        node.removeEventListener(name, fn);
	      }.bind(this);
	      node.addEventListener(name, fn);
	    }
	  }]);
	
	  return CustomEventEmitter;
	}(_events2.default);
	
	var eventManager = new CustomEventEmitter();
	
	eventManager.setMaxListeners(maxNumListeners);
	
	exports.default = eventManager;

/***/ },
/* 9 */
/*!****************************!*\
  !*** ./~/events/events.js ***!
  \****************************/
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function (n) {
	  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function (type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events) this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler)) return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++) {
	      listeners[i].apply(this, args);
	    }
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function (type, listener) {
	  var m;
	
	  if (!isFunction(listener)) throw TypeError('listener must be a function');
	
	  if (!this._events) this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function (type, listener) {
	  if (!isFunction(listener)) throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function (type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener)) throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type]) return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener || isFunction(list.listener) && list.listener === listener) {
	    delete this._events[type];
	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0) return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function (type) {
	  var key, listeners;
	
	  if (!this._events) return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length) {
	      this.removeListener(type, listeners[listeners.length - 1]);
	    }
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function (type) {
	  var ret;
	  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function (type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function (emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}

/***/ },
/* 10 */
/*!********************************************!*\
  !*** ./~/cells-bridge/src/manager/page.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _storage = __webpack_require__(/*! ./storage */ 11);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _connector = __webpack_require__(/*! ../connector */ 12);
	
	var _connector2 = _interopRequireDefault(_connector);
	
	var _sanitizer = __webpack_require__(/*! ../sanitizer */ 13);
	
	var _sanitizer2 = _interopRequireDefault(_sanitizer);
	
	var _events = __webpack_require__(/*! ./events */ 8);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CellsManagerPage = function () {
	  function CellsManagerPage(bridge) {
	    _classCallCheck(this, CellsManagerPage);
	
	    // super(bridge);
	    this.storage = new _storage2.default({
	      prefix: bridge.storagePrefix,
	      persistent: bridge.cache
	    });
	    this.cache = bridge.cache;
	    this.connector = new _connector2.default();
	    this.sanitizer = new _sanitizer2.default();
	  }
	
	  //template
	
	
	  _createClass(CellsManagerPage, [{
	    key: 'generateRequestUrl',
	    value: function generateRequestUrl(page /*, params*/) {
	      return 'componentsPages/' + page + '.json';
	    }
	  }, {
	    key: 'get',
	    value: function get(page, options) {
	      var spec = this.storage.getItem(page);
	      if (this.cache && spec) {
	        return new Promise(function (resolve) {
	          resolve(spec);
	        });
	      } else {
	        return this._getFromConnector(page, options);
	      }
	    }
	  }, {
	    key: '_getFromConnector',
	    value: function _getFromConnector(page, options) {
	      options = options || {};
	      options.url = this.generateRequestUrl(page, options.params);
	
	      _events2.default.emit('page-request', options);
	
	      var promise = this.connector.getJSON(options);
	
	      return promise.then(this._onResponse.bind(this, page, options)).catch(function (error) {
	        return error.message;
	      });
	    }
	  }, {
	    key: '_onResponse',
	    value: function _onResponse(page, options, response) {
	      response.page = page;
	
	      _events2.default.emit('page-response', response);
	
	      var sanitizedData = this.sanitizer.parse(response);
	      // sanitizedData = this.bridge.parse('data', sanitizedData);
	
	      this.storage.setItem(page, sanitizedData);
	
	      _events2.default.emit('data-load', sanitizedData);
	
	      return sanitizedData;
	    }
	  }]);
	
	  return CellsManagerPage;
	}();
	
	exports.default = CellsManagerPage;

/***/ },
/* 11 */
/*!***********************************************!*\
  !*** ./~/cells-bridge/src/manager/storage.js ***!
  \***********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CellsStorage = function () {
	  function CellsStorage(options) {
	    _classCallCheck(this, CellsStorage);
	
	    this.prefix = '';
	    this.persistent = false;
	
	    _extends(this, options);
	
	    if (this.persistent) {
	      this.clear();
	    }
	  }
	
	  _createClass(CellsStorage, [{
	    key: 'getItem',
	    value: function getItem(key) {
	      return JSON.parse(this.storage.getItem(this.prefix + key));
	    }
	  }, {
	    key: 'setItem',
	    value: function setItem(key, value) {
	      this.storage.setItem(this.prefix + key, JSON.stringify(value, '', true));
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var pattern = new RegExp('^(' + this.prefix + ')');
	
	      for (var key in this.storage) {
	        if (pattern.test(key)) {
	          this.storage.removeItem(key);
	        }
	      }
	    }
	  }, {
	    key: 'storage',
	    get: function get() {
	      if (this.persistent) {
	        return window.localStorage;
	      } else {
	        return window.sessionStorage;
	      }
	    }
	  }]);
	
	  return CellsStorage;
	}();
	
	exports.default = CellsStorage;

/***/ },
/* 12 */
/*!*****************************************!*\
  !*** ./~/cells-bridge/src/connector.js ***!
  \*****************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CellsBridgeConnector = function () {
	  function CellsBridgeConnector() {
	    _classCallCheck(this, CellsBridgeConnector);
	  }
	
	  _createClass(CellsBridgeConnector, [{
	    key: 'getJSON',
	    value: function getJSON(options) {
	      return new Promise(function (resolve, reject) {
	        var xhr = new XMLHttpRequest();
	        if (!options || !options.url) {
	          reject(new Error('URL not defined'));
	        }
	        var method = (options.method || '').toUpperCase() || 'GET';
	        xhr.addEventListener('load', function (e) {
	          var xhr = e.target;
	          var status = xhr.status;
	          if (status >= 200 && status < 300 || status == 0 && xhr.responseText.length > 0) {
	            resolve(JSON.parse(xhr.response));
	          } else {
	            reject(new Error(xhr.statusText));
	          }
	        });
	        xhr.addEventListener('error', function () {
	          reject(new Error('Network Error'));
	        });
	        xhr.open(method, options.url);
	        //
	        var headers = options.headers;
	        for (var header in headers) {
	          if (headers.hasOwnProperty(header)) {
	            xhr.setRequestHeader(header, headers[header]);
	          }
	        }
	        xhr.send(options.body);
	      });
	    }
	  }, {
	    key: '_onErrorCallback',
	    value: function _onErrorCallback() {
	      this.reject(new Error('Network Error'));
	    }
	  }, {
	    key: '_onLoadCallback',
	    value: function _onLoadCallback() {
	      var xhr = this.xhr;
	      var status = xhr.status;
	      if (status >= 200 && status < 300 || status == 0 && xhr.responseText.length > 0) {
	        this.resolve(JSON.parse(xhr.response));
	      } else {
	        this.reject(new Error(xhr.statusText));
	      }
	    }
	  }]);
	
	  return CellsBridgeConnector;
	}();
	
	exports.default = CellsBridgeConnector;

/***/ },
/* 13 */
/*!*****************************************!*\
  !*** ./~/cells-bridge/src/sanitizer.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _string = __webpack_require__(/*! string */ 3);
	
	var _string2 = _interopRequireDefault(_string);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _getPath = function _getPath(cmpDef) {
	  return (cmpDef.familyPath ? cmpDef.familyPath : cmpDef.tag || cmpDef.tagName) + '/' + (cmpDef.tag || cmpDef.tagName) + '.html';
	};
	
	var CellsBridgeComposerSanitizer = function () {
	  function CellsBridgeComposerSanitizer() {
	    _classCallCheck(this, CellsBridgeComposerSanitizer);
	  }
	
	  _createClass(CellsBridgeComposerSanitizer, [{
	    key: '_buildConfig',
	    value: function _buildConfig(component) {
	      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'UI';
	
	      var config = {
	        type: component.type ? component.type.toUpperCase() : type,
	        tagName: component.tag || component.tagName,
	        zone: component.zone,
	        properties: component.properties,
	        path: _getPath(component)
	      };
	      this.parseConnections(config);
	      return config;
	    }
	  }, {
	    key: 'parse',
	    value: function parse(json) {
	      var components = [];
	      var LTRIM_SLASH = /^\/(\b)/;
	      components.push.apply(components, _toConsumableArray(this._parseComponentsFromJson(json, 'components', 'UI')));
	      var jsonTemplate = json.template;
	      if (jsonTemplate) {
	        jsonTemplate = this._buildConfig(jsonTemplate, 'TEMPLATE');
	      }
	      var pages = {};
	      var jsonPages = json.pages;
	      if (jsonPages) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = Object.keys(jsonPages)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var page = _step.value;
	
	            pages[page] = '/' + jsonPages[page].url.replace(LTRIM_SLASH, '');
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      }
	      return {
	        page: json.page,
	        currentPage: json.currentPage || {},
	        template: jsonTemplate,
	        components: components,
	        pages: pages
	      };
	    }
	  }, {
	    key: '_parseComponentsFromJson',
	    value: function _parseComponentsFromJson(json, key, type) {
	      var list = [];
	      var components = json[key];
	      if (Array.isArray(components)) {
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;
	
	        try {
	          for (var _iterator2 = components[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var component = _step2.value;
	
	            list.push(this._buildConfig(component, type));
	          }
	        } catch (err) {
	          _didIteratorError2 = true;
	          _iteratorError2 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	              _iterator2.return();
	            }
	          } finally {
	            if (_didIteratorError2) {
	              throw _iteratorError2;
	            }
	          }
	        }
	      }
	      return list;
	    }
	  }, {
	    key: 'parseConnections',
	    value: function parseConnections(component) {
	      var connections;
	      /* istanbul ignore else */
	      if (component.properties) {
	        connections = component.properties.cellsConnections;
	      }
	      /* istanbul ignore else */
	      if (connections) {
	        if (connections.params) {
	
	          /* istanbul ignore if */
	          if (!connections.in) {
	            connections.in = {};
	          }
	          /* istanbul ignore if */
	          if (!connections.out) {
	            connections.out = {};
	          }
	          var params = this.paramsToActions(connections.params);
	          _extends(connections.in, params.in);
	          _extends(connections.out, params.out);
	        }
	        component.connections = connections;
	      }
	    }
	  }, {
	    key: 'paramsToActions',
	    value: function paramsToActions(params) {
	      var connections = {
	        in: {},
	        out: {}
	      };
	      for (var prop in params) {
	        var paramDef = params[prop];
	        connections.in[paramDef] = {
	          bind: prop,
	          global: true
	        };
	        connections.out[paramDef] = {
	          bind: (0, _string2.default)(prop).dasherize().s + '-changed',
	          global: true
	        };
	      }
	      return connections;
	    }
	  }, {
	    key: 'split',
	    value: function split(data) {
	      var response;
	      if (data) {
	        response = {
	          CC: [],
	          UI: [],
	          DM: []
	        };
	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;
	
	        try {
	          for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var item = _step3.value;
	
	            response[item.type].push(item);
	          }
	        } catch (err) {
	          _didIteratorError3 = true;
	          _iteratorError3 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	              _iterator3.return();
	            }
	          } finally {
	            if (_didIteratorError3) {
	              throw _iteratorError3;
	            }
	          }
	        }
	      }
	      return response;
	    }
	  }]);
	
	  return CellsBridgeComposerSanitizer;
	}();
	
	exports.default = CellsBridgeComposerSanitizer;

/***/ },
/* 14 */
/*!***************************************************!*\
  !*** ./~/cells-bridge/src/component-connector.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _events = __webpack_require__(/*! ./manager/events */ 8);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Channel ReplaySubject extension of Rx.ReplaySubject.
	 * This is pretty hacky, but so far I'd found no better way of having
	 * Channels that do no close on multicasted stream completion and on multiple errors.
	 * For documentation refer to
	 * [Rx.ReplaySubject docs](@link https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/replaysubject.md).
	 * The only difference is that Channel never triggers '.onCompleted()' and
	 * does not closes observers on errors (thus allowing to continuously dispatch them).
	 */
	var Channel = function Channel(buffer) {
	  Rx.ReplaySubject.call(this, buffer);
	};
	
	Channel.prototype = Object.create(Rx.ReplaySubject.prototype);
	
	_extends(Channel.prototype, {
	  /**
	   * Dummy method override to prevent execution and Rx.Observable completion
	   * @ignore
	   */
	  onCompleted: function onCompleted() {},
	
	  /**
	   * Dummy method override to prevent stop execution when error in Rx.Observable
	   * @ignore
	   */
	  onError: function onError(error) {
	    this.error = error;
	    this.observers.forEach(function (o) {
	      o.isStopped = false;
	      o.onError(error);
	    });
	  },
	
	  /**
	   * Removes a specific observer.
	   *
	   * @param  {Number} index  Position of observer in array
	   * @example
	   * channel.unsubscribe(1);
	   */
	  unsubscribe: function unsubscribe(index) {
	    this.observers.splice(index, 1);
	  },
	
	  /**
	   * Resets the channel.
	   */
	  clean: function clean() {
	    this.q = [];
	  }
	});
	
	/**
	 * A subscriptor can publish to a channel and receive notifications
	 * about changes from a channel.
	 *
	 * @param {HTMLElement/Object} node
	 */
	var Subscriptor = function Subscriptor(node) {
	  this.node = node;
	  this.subscriptions = []; //[] //*1prototype mixin clone problem
	  this.publications = new Rx.CompositeDisposable();
	};
	
	Subscriptor.prototype = {
	  node: null,
	  subscriptions: null, //[] //*1prototype mixin clone problem
	  publications: null,
	
	  /**
	   * Returns true if the subscriptor has already subscribed to a channel.
	   *
	   * @param  {Channel}  channel The channel to check the subscription
	   * @return {Boolean}
	   */
	  hasSubscription: function hasSubscription(channel) {
	    return this.subscriptions.filter(function (d) {
	      return d.channel === channel;
	    }).length > 0;
	  },
	
	  /**
	   * Publish an event.sss
	   *
	   * @param  {Event} event
	   */
	  publish: function publish(event) {
	    this.publications.add(event);
	  },
	
	  /**
	   * Subscribe to a channel.
	   *
	   * @param  {Channel}   channel  Channel to subscribe
	   * @param  {Function}  fn       Callback function to run when a value from a channel changed
	   */
	  subscribe: function subscribe(channel, fn) {
	    if (!this.hasSubscription(channel)) {
	
	      var pos = this._firstInstanceOfObserver(fn.node, channel);
	      if (pos === -1) {
	        channel.subscribe(fn);
	        pos = channel.observers.length - 1;
	      }
	      channel.observers[pos].node = fn.node;
	
	      var subscription = {
	        channel: channel,
	        observer: channel.observers[pos]
	      };
	
	      this.subscriptions.push(subscription);
	    }
	  },
	
	  /**
	   * Remove all active subscriptions.
	   */
	  unsubscribe: function unsubscribe() {
	    for (var i = this.subscriptions.length - 1; i >= 0; i--) {
	      var subscription = this.subscriptions[i];
	      var channel = subscription.channel;
	      var observer = subscription.observer;
	      var index = channel.observers.indexOf(observer);
	
	      if (!channel.name.match(/\b__bridge_/)) {
	        channel.unsubscribe(index);
	      }
	
	      if (!channel.hasObservers()) {
	        channel.clean();
	      }
	    }
	
	    this.publications.dispose();
	  },
	
	  /**
	   * Returns the position of the first occurrence of the observer's node in the channel.
	   * If the node has none observer registered to the channel, it returns -1.
	   * 
	   * @param {node}
	   * @param {channel}
	   */
	  _firstInstanceOfObserver: function _firstInstanceOfObserver(node, channel) {
	    var pos = -1;
	
	    for (var index = 0; index < channel.observers.length; index++) {
	      if (channel.observers[index].node === node) {
	        pos = index;
	        break;
	      }
	    }
	    return pos;
	  }
	};
	
	/**
	 * Collection of channels.
	 */
	var ChannelManager = function ChannelManager() {
	  this.channels = {}; //*1prototype mixin clone problem
	};
	
	ChannelManager.prototype = {
	  channels: null, //{} //*1prototype mixin clone problem
	
	  /**
	   * Gets a channel by name.
	   *
	   * @param  {String} name
	   *
	   * @return {Channel}
	   */
	  get: function get(name) {
	    var channel = this.channels[name];
	
	    if (channel == null) {
	      channel = this.create(name);
	    }
	
	    return channel;
	  },
	
	  /**
	   * Gets a channel by name.
	   *
	   * @param  {String} name
	   *
	   * @return {Channel}
	   */
	  getUnsafe: function getUnsafe(name) {
	    return this.channels[name];
	  },
	
	  /**
	   * Creates a channel.
	   *
	   * @param  {String} name Channel name
	   * 
	   * @return {Channel}
	   */
	  create: function create(name) {
	    var channel = new Channel(1);
	    channel.name = name;
	    return this.channels[name] = channel;
	  },
	
	  /**
	   * Removes a channel from the collection.
	   *
	   * @param  {String} name Name of the channel to remove.
	   */
	  remove: function remove(name) {
	    delete this.channels[name];
	  },
	
	  /**
	   * Returns true if there is a channel registered with the given name,
	   *  
	   * @param {String} name Channel name,
	   * 
	   * @return {Boolean}
	   */
	  has: function has(name) {
	    return this.channels[name] != null;
	  }
	};
	
	var ComponentConnector = function () {
	  function ComponentConnector() {
	    _classCallCheck(this, ComponentConnector);
	
	    this.EventManager = null;
	    this.manager = null;
	    this.subscriptors = null;
	    this.bridgeChannelsPrefix = null;
	
	    this.manager = new ChannelManager();
	    this.subscriptors = new WeakMap();
	    this.bridgeChannelsPrefix = '__bridge_';
	  }
	
	  _createClass(ComponentConnector, [{
	    key: 'getSubscriptor',
	    value: function getSubscriptor(node) {
	      var subscriptor = this.subscriptors.get(node);
	
	      if (!subscriptor) {
	        subscriptor = new Subscriptor(node);
	        this.subscriptors.set(node, subscriptor);
	      }
	
	      return subscriptor;
	    }
	
	    /**
	     * Register a node in pubsub
	     *
	     * @param  {HTMLElement}  node
	     * @param  {Object}       connections
	     */
	
	  }, {
	    key: 'register',
	    value: function register(node, connections) {
	      if (node && connections) {
	        this._registerOutConnections(node, connections.out);
	        this._registerInConnections(node, connections.in);
	      }
	    }
	
	    /**
	     * Registesr new connections of a node that may have other connections registered previously.  
	     *
	     * @param  {HTMLElement}  node
	     * @param  {Object}       connections
	     */
	
	  }, {
	    key: 'progressiveRegister',
	    value: function progressiveRegister(node, connections) {
	      if (node && connections) {
	        this._registerOutConnections(node, connections.out);
	        this._updateInConnections(node, connections.in);
	      }
	    }
	  }, {
	    key: '_registerInConnections',
	    value: function _registerInConnections(node, inConnections) {
	      var channelName = void 0;
	      var bindName = void 0;
	      var subscriptor = void 0;
	      var channel = void 0;
	
	      if (inConnections) {
	        for (channelName in inConnections) {
	          channel = this.isBridgeChannel(channelName) ? this.manager.getUnsafe(channelName) : this.manager.get(channelName);
	          if (channel) {
	            bindName = inConnections[channelName].bind;
	            subscriptor = this.getSubscriptor(node);
	
	            subscriptor.subscribe(channel, this._wrapCallbackWithNode(node, bindName));
	          }
	        }
	      }
	    }
	  }, {
	    key: '_updateInConnections',
	    value: function _updateInConnections(node, inConnections) {
	      var channelName = void 0;
	      var bindName = void 0;
	      var subscriptor = void 0;
	      var channel = void 0;
	
	      if (inConnections) {
	        for (channelName in inConnections) {
	          bindName = inConnections[channelName].bind;
	          subscriptor = this.getSubscriptor(node);
	          if (this.isActiveBridgeChannel(channelName) || !this.isActiveBridgeChannel(channelName) && !this.hasSubscriptions(subscriptor, channelName)) {
	            channel = this.manager.get(channelName);
	
	            subscriptor.subscribe(channel, this._wrapCallbackWithNode(node, bindName));
	          }
	        }
	      }
	    }
	  }, {
	    key: '_wrapCallbackWithNode',
	    value: function _wrapCallbackWithNode(node, bindName) {
	      var cb = this.wrapCallback(node, bindName);
	      cb.node = node;
	      return cb;
	    }
	  }, {
	    key: '_registerOutConnections',
	    value: function _registerOutConnections(node, outConnections) {
	      var channelName = void 0;
	      var bindName = void 0;
	      var subscriptor = void 0;
	      var channel = void 0;
	
	      if (outConnections) {
	        for (channelName in outConnections) {
	          if (this.isBridgeChannel(channelName)) {
	            console.warn('Forbidden operation. You are trying to write to a private channel (' + channelName + ').');
	          } else {
	            bindName = outConnections[channelName].bind;
	            subscriptor = this.getSubscriptor(node);
	            channel = this.manager.get(channelName);
	
	            subscriptor.publish(this.wrapEvent(node, bindName, channel, outConnections[channelName]));
	          }
	        }
	      }
	    }
	
	    /**
	     * Unregister a node from pubsub
	     *
	     * @param  {HTMLElement} node
	     */
	
	  }, {
	    key: 'unregister',
	    value: function unregister(node) {
	      if (!node) {
	        return;
	      }
	
	      var subscriptor = this.subscriptors.get(node);
	
	      if (subscriptor) {
	        subscriptor.unsubscribe();
	        this.subscriptors.delete(node);
	      }
	    }
	
	    /**
	     * Wrap a callback.
	     *
	     * @param  {HTMLElement/Object} node
	     * @param  {String} bindName Method or property name
	     *
	     * @return {Function}
	     */
	
	  }, {
	    key: 'wrapCallback',
	    value: function wrapCallback(node, bindName) {
	      var wrappedCb = function wrappedCb(event) {
	        if (typeof node[bindName] === 'function') {
	          node[bindName](event.detail);
	        } else {
	          node[bindName] = event.detail;
	        }
	      };
	
	      return wrappedCb;
	    }
	
	    /**
	     * Wrap an event.
	     *
	     * @param  {HTMLElement} node
	     * @param  {String} eventName
	     * @param  {Channel} channel
	     *
	     * @return {Function}
	     */
	
	  }, {
	    key: 'wrapEvent',
	    value: function wrapEvent(node, eventName, channel, connection) {
	      var source = Rx.Observable.fromEvent(node, eventName);
	      var wrappedListener = source.subscribe(function (event) {
	        if (event.eventPhase !== Event.AT_TARGET) {
	          // If the event bubbles up from a child element:
	          return;
	        }
	
	        channel.onNext(event);
	        _events2.default.emit('after-publish', event);
	
	        if (connection.link) {
	          _events2.default.emit('nav-request', {
	            event: event,
	            detail: connection.link
	          });
	        }
	
	        if (connection.analytics) {
	          _events2.default.emit('track-event', {
	            event: event,
	            detail: connection.analytics
	          });
	        }
	      }.bind(this));
	
	      return wrappedListener;
	    }
	
	    /**
	     * Receive a channel name  and change old private values.
	     *
	     * @param  {string} name
	     *
	     */
	
	    /**
	     * receive a channel name and change old private values.
	     *
	     * @param  {string} name
	     *
	     */
	
	  }, {
	    key: 'createEvent',
	    value: function createEvent(name, value) {
	      var evt = new Event(name);
	      evt.detail = { value: value };
	      return evt;
	    }
	
	    /**
	     * returns true if there's a private channel with the given name
	     * 
	     * @param {String} name
	     * 
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'isActiveBridgeChannel',
	    value: function isActiveBridgeChannel(name) {
	      return this.isBridgeChannel(name) && this.manager.getUnsafe(name);
	    }
	
	    /**
	     * returns true if the given name matches a private channel's name
	     * 
	     * @param {String} name
	     * 
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'isBridgeChannel',
	    value: function isBridgeChannel(name) {
	      return name.indexOf(this.bridgeChannelsPrefix) === 0;
	    }
	
	    /**
	     * returns true if the subscriptor has been subscribed to the given channel.
	     *  
	     * @param {Subscriptor} subscriptor
	     * @param {String} channelName
	     * 
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'hasSubscriptions',
	    value: function hasSubscriptions(subscriptor, channelName) {
	      return subscriptor.subscriptions.filter(function (d) {
	        return d.channel.name === channelName;
	      }).length > 0;
	    }
	  }]);
	
	  return ComponentConnector;
	}();
	
	/**
	 * ComponentConnector definition
	 */
	exports.default = ComponentConnector;

/***/ },
/* 15 */
/*!**************************************!*\
  !*** ./~/cells-bridge/src/router.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _route = __webpack_require__(/*! ./route */ 16);
	
	var _route2 = _interopRequireDefault(_route);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var instance = null;
	
	var _useHistory = false;
	var _routes = {};
	var _disposables = void 0;
	var _currentRoute = void 0;
	
	var Router = function () {
	  function Router() {
	    _classCallCheck(this, Router);
	
	    if (!instance) {
	      instance = this;
	    }
	
	    return instance;
	  }
	
	  /**
	   * @param {Boolean} value
	   */
	
	
	  _createClass(Router, [{
	    key: 'handler',
	
	    /**
	     * @param {Object} route
	     */
	    // eslint-disable-next-line no-unused-vars
	    value: function handler(route) {
	      // Overwrite to make something after all matched routes
	    }
	  }, {
	    key: 'addRoute',
	    value: function addRoute(name, pattern) {
	      this.routes[name] = new _route2.default(name, pattern);
	      return this.routes[name];
	    }
	  }, {
	    key: 'addRoutes',
	    value: function addRoutes(routes) {
	      var __routes = {};
	      for (var routeName in routes) {
	        __routes[routeName] = this.addRoute(routeName, routes[routeName]);
	      }
	      return __routes;
	    }
	
	    /**
	     * @private
	     * @return {String}
	     */
	
	  }, {
	    key: '_getHashPath',
	    value: function _getHashPath() {
	      return location.hash.replace(Router.HASH_PREFIX, '/').replace(Router.EMPTY, '/');
	    }
	
	    /**
	     * @private
	     * @return {Rx.Observable}
	     */
	
	  }, {
	    key: '_observeHashChange',
	    value: function _observeHashChange() {
	      return Rx.Observable.fromEvent(window, 'hashchange').map(this._getHashPath).startWith(this._getHashPath());
	    }
	
	    /**
	     * @private
	     * @return {String}
	     */
	
	  }, {
	    key: '_getURLPath',
	    value: function _getURLPath() {
	      return location.pathname.replace(Router.PATH_PREFIX, '/');
	    }
	
	    /**
	     * @private
	     * @return {Rx.Observable}
	     */
	
	  }, {
	    key: '_observeStateChange',
	    value: function _observeStateChange() {
	      return Rx.Observable.merge(Rx.Observable.fromEvent(window, 'popstate'), Rx.Observable.fromEvent(window, 'pushstate')).map(this._getURLPath).startWith(this._getURLPath());
	    }
	
	    /**
	     * @private
	     * @param {String}
	     * @return {Array}
	     */
	
	  }, {
	    key: 'matchRoute',
	    value: function matchRoute(fullPath) {
	      var route;
	
	      var _fullPath$split = fullPath.split('?'),
	          _fullPath$split2 = _slicedToArray(_fullPath$split, 2),
	          path = _fullPath$split2[0],
	          query = _fullPath$split2[1];
	
	      query = this._parseQuery(query);
	      for (var routeName in this.routes) {
	        route = this.routes[routeName];
	        if (route.matchPath(path)) {
	          route.parsePath(path);
	          route.parseQuery(query);
	          return route;
	        }
	      }
	    }
	  }, {
	    key: '_parseQuery',
	    value: function _parseQuery(querystr) {
	      var params = {};
	      if (querystr) {
	        // Split into key/value pairs
	        var queries = querystr.split('&');
	        if (queries) {
	          // Convert the array of strings into an object
	          var key = void 0,
	              value = void 0,
	              i = void 0,
	              len = queries.length;
	          for (i = 0; i < len; i++) {
	            var _queries$i$split = queries[i].split('=');
	
	            var _queries$i$split2 = _slicedToArray(_queries$i$split, 2);
	
	            key = _queries$i$split2[0];
	            value = _queries$i$split2[1];
	
	            params[key] = decodeURIComponent(value);
	          }
	        }
	      }
	      return params;
	    }
	
	    /**
	     *
	     * @return {Rx.Disposable}
	     */
	
	  }, {
	    key: 'start',
	    value: function start() {
	      var _this = this;
	
	      /* istanbul ignore else */
	      if (!_disposables) {
	        var active = new Rx.SerialDisposable();
	
	        var source = this.useHistory ? this._observeStateChange() : this._observeHashChange();
	
	        var subscription = source.distinctUntilChanged().map(this.matchRoute.bind(this)).forEach(function (route) {
	          if (route) {
	            _currentRoute = route;
	            var disposable = Rx.Disposable.create(function () {
	              return _this.currentRoute;
	            });
	            active.setDisposable(disposable);
	            _this.currentRoute.handler();
	            _this.handler(_this.currentRoute);
	          }
	        });
	
	        _disposables = new Rx.CompositeDisposable(subscription, active);
	      }
	
	      return _disposables;
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (_disposables) {
	        _disposables.dispose();
	        _disposables = null;
	      }
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.stop();
	      this.routes = {};
	    }
	  }, {
	    key: 'getPath',
	    value: function getPath(routeName, params) {
	      var route = this.routes[routeName];
	      if (route) {
	        return route.path(params);
	      } else {
	        console.error('Wrong route name: %s, valid route names: %s', routeName, Object.keys(this.routes).join(', '));
	      }
	    }
	  }, {
	    key: 'go',
	    value: function go(name, params, replace) {
	      var sanitizedName = name.replace(Router.LTRIM_SLASH, '');
	      var path = this.getPath(sanitizedName, params);
	      if (path !== this._getHashPath()) {
	        if (this.useHistory) {
	          if (replace) {
	            this.historyReplaceState(path);
	          } else {
	            this.historyPushState(path);
	          }
	        } else {
	          if (replace) {
	            this.locationReplace(path);
	          } else {
	            this.locationHash(path);
	          }
	        }
	      }
	    }
	  }, {
	    key: 'goReplacing',
	    value: function goReplacing(name, params) {
	      this.go(name, params, true);
	    }
	  }, {
	    key: 'historyReplaceState',
	    value: function historyReplaceState(path) {
	      history.replaceState(null, null, path);
	    }
	  }, {
	    key: 'historyPushState',
	    value: function historyPushState(path) {
	      history.pushState(null, null, path);
	    }
	  }, {
	    key: 'locationReplace',
	    value: function locationReplace(path) {
	      location.replace('#!' + path);
	    }
	  }, {
	    key: 'locationHash',
	    value: function locationHash(path) {
	      location.hash = '#!' + path;
	    }
	  }, {
	    key: 'useHistory',
	    set: function set(value) {
	      /* istanbul ignore else */
	      if (Router.SUPPORTS_HISTORY_API) {
	        _useHistory = value;
	      }
	    },
	    get: function get() {
	      return _useHistory;
	    }
	  }, {
	    key: 'routes',
	    set: function set(routes) {
	      _routes = routes;
	    },
	    get: function get() {
	      return _routes;
	    }
	  }, {
	    key: 'currentRoute',
	    get: function get() {
	      return _currentRoute;
	    }
	  }]);
	
	  return Router;
	}();
	
	Router.SUPPORTS_HISTORY_API = window.history && 'pushState' in window.history;
	Router.PARAM = /(?:\:([^\/]+))/g;
	Router.LTRIM_SLASH = /^\/(\b)/;
	Router.EMPTY = /^$/;
	Router.HASH_PREFIX = /^#\!?\/*/;
	Router.PATH_PREFIX = /^\/*/;
	exports.default = Router;

/***/ },
/* 16 */
/*!*************************************!*\
  !*** ./~/cells-bridge/src/route.js ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Route = function () {
	  /**
	  * @private
	  * @param {String} routeName
	  * * @param {String} pattern
	  * @return {Object}
	  */
	  function Route(name, pattern) {
	    _classCallCheck(this, Route);
	
	    this.name = '';
	    this.pattern = '';
	    this.regexp = null;
	
	    this.name = name;
	    this.pattern = pattern;
	    var regexp = pattern.replace(Route.PARAM, '([^/]+)').replace(Route.TRAILING_SLASHES, '/*');
	    this.regexp = new RegExp('^' + regexp + '$');
	    var parts;
	    var keys = [];
	    while ((parts = Route.PARAM.exec(pattern)) !== null) {
	      keys.push(parts[1]);
	    }
	    this.keys = keys;
	  }
	
	  _createClass(Route, [{
	    key: 'path',
	    value: function path(params) {
	      params = params || {};
	      this.params = {};
	      var parts;
	      var path = this.pattern;
	      while ((parts = Route.PARAM.exec(this.pattern)) !== null) {
	        path = path.replace(parts[0], params[parts[1]]);
	        this.params[parts[1]] = params[parts[1]];
	      }
	      var queryParams = [];
	      for (var param in params) {
	        if (!this.params.hasOwnProperty(param)) {
	          queryParams.push(param + '=' + encodeURIComponent(params[param]));
	        }
	      }
	      if (queryParams.length) {
	        path += '?' + queryParams.join('&');
	      }
	      return path;
	    }
	  }, {
	    key: 'matchPath',
	    value: function matchPath(path) {
	      return path.match(this.regexp);
	    }
	  }, {
	    key: 'parsePath',
	    value: function parsePath(path) {
	      var match = this.matchPath(path);
	      this.params = {};
	      if (match) {
	        var i = 1;
	        var parts;
	        while ((parts = Route.PARAM.exec(this.pattern)) !== null) {
	          this.params[parts[1]] = this._parseParam(match[i]);
	          i++;
	        }
	      }
	    }
	  }, {
	    key: 'parseQuery',
	    value: function parseQuery(query) {
	      this.query = query;
	      for (var queryParam in this.query) {
	        this.params[queryParam] = this.query[queryParam];
	      }
	    }
	
	    /**
	     * @private
	     * @param {String} value
	     * @return {Boolean}
	     */
	
	  }, {
	    key: '_isNumber',
	    value: function _isNumber(value) {
	      return value !== '' && value !== null && !isNaN(value) && typeof value === 'number';
	    }
	
	    /**
	     * @private
	     * @param {String} param
	     * @return {String|Number}
	     */
	
	  }, {
	    key: '_parseParam',
	    value: function _parseParam(param) {
	      if (this._isNumber(param)) {
	        param = +param;
	      }
	
	      return param;
	    }
	  }, {
	    key: 'handler',
	    value: function handler() {
	      // Overwrite to make something with the current route
	    }
	  }]);
	
	  return Route;
	}();
	
	Route.PARAM = /(?:\:([^\/]+))/g;
	Route.TRAILING_SLASHES = /\/*$/;
	exports.default = Route;

/***/ },
/* 17 */
/*!**********************************************!*\
  !*** ./~/cells-bridge/src/manager/import.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _events = __webpack_require__(/*! ./events */ 8);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _after = function _after(times, func) {
	  return function () {
	    if (--times < 1) {
	      return func();
	    }
	  };
	};
	
	var CellsManagerImport = function () {
	  function CellsManagerImport() {
	    _classCallCheck(this, CellsManagerImport);
	  }
	
	  _createClass(CellsManagerImport, [{
	    key: '_importElement',
	    value: function _importElement(endPoint, component, callback) {
	      var node = document.createElement('link');
	      _extends(node, {
	        rel: 'import',
	        async: true,
	        href: endPoint + component.spec.path,
	        onload: callback,
	        onerror: callback
	      });
	
	      document.head.appendChild(node);
	    }
	  }, {
	    key: 'loadComponent',
	    value: function loadComponent(component, callback, baseUri) {
	      var _this = this;
	
	      var list = component;
	
	      if (!Array.isArray(list)) {
	        list = [component];
	      }
	
	      if (list.length === 0) {
	        return callback.call(this);
	      }
	
	      _events2.default.emit('before-import');
	
	      var iCb = _after(list.length, function () {
	        _events2.default.emit('after-import');
	        return callback.call(_this);
	      });
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var item = _step.value;
	
	          this._importElement(baseUri, item, iCb);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }]);
	
	  return CellsManagerImport;
	}();
	
	exports.default = CellsManagerImport;

/***/ },
/* 18 */
/*!************************************************!*\
  !*** ./~/cells-bridge/src/manager/template.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _template = __webpack_require__(/*! ../template */ 19);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _events = __webpack_require__(/*! ./events */ 8);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CellsManagerTemplate = function () {
	  function CellsManagerTemplate() {
	    _classCallCheck(this, CellsManagerTemplate);
	
	    this.cache = {};
	    this.templates = {};
	    this.selected = '';
	  }
	
	  _createClass(CellsManagerTemplate, [{
	    key: 'create',
	    value: function create(name, spec) {
	      var template = this.get(name);
	
	      if (!template) {
	        template = new _template2.default(spec);
	        template.name = name;
	
	        var node = template.node;
	
	        this.cache[name] = template;
	        this.templates[name] = node;
	
	        node.id = this.parseTemplateId(name);
	        node.name = this.parseTemplateName(name);
	
	        template.setProps();
	      }
	
	      return template;
	    }
	  }, {
	    key: 'get',
	    value: function get(name) {
	      return this.cache[name];
	    }
	  }, {
	    key: 'getNode',
	    value: function getNode(name) {
	      return this.templates[name];
	    }
	  }, {
	    key: 'parseTemplateName',
	    value: function parseTemplateName(name) {
	      return name;
	    }
	  }, {
	    key: 'parseTemplateId',
	    value: function parseTemplateId(name) {
	      return 'cells-template-' + name.replace(/\./g, '-');
	    }
	  }, {
	    key: 'select',
	    value: function select(name) {
	      var bridgeChannelManager = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
	
	      var template = this.get(name);
	      var cache = this.cache;
	      var oldPageName = void 0;
	
	      for (var tplName in cache) {
	        if (tplName === this.selected) {
	          oldPageName = tplName;
	          cache[tplName].deactivate();
	        } else if (name !== tplName) {
	          cache[tplName].cache();
	        }
	      }
	
	      this.selected = name;
	      template.activate();
	
	      if (bridgeChannelManager) {
	        bridgeChannelManager.updateAppContext(oldPageName, name);
	        bridgeChannelManager.initPrivateChannel(oldPageName, name);
	      }
	
	      _events2.default.emit('template-transition-end', template);
	    }
	  }]);
	
	  return CellsManagerTemplate;
	}();
	
	exports.default = CellsManagerTemplate;

/***/ },
/* 19 */
/*!****************************************!*\
  !*** ./~/cells-bridge/src/template.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _component = __webpack_require__(/*! ./component */ 20);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CellsBridgeTemplate = function (_CellsComponent) {
	  _inherits(CellsBridgeTemplate, _CellsComponent);
	
	  function CellsBridgeTemplate(spec) {
	    _classCallCheck(this, CellsBridgeTemplate);
	
	    var _this = _possibleConstructorReturn(this, (CellsBridgeTemplate.__proto__ || Object.getPrototypeOf(CellsBridgeTemplate)).call(this, spec));
	
	    _this.children = null;
	    _this.type = 'TEMPLATE';
	
	    _this.children = [];
	    return _this;
	  }
	
	  _createClass(CellsBridgeTemplate, [{
	    key: 'getZone',
	    value: function getZone(zoneId) {
	      var curTemplate = this.node;
	      var node;
	      if (curTemplate.$ && curTemplate.$[zoneId]) {
	        //TODO: Polymer2 will remove $
	        node = curTemplate.$[zoneId];
	      } else if (!zoneId) {
	        node = curTemplate;
	      } else {
	        node = curTemplate.querySelector('#' + zoneId);
	      }
	      return node || curTemplate;
	    }
	  }, {
	    key: 'cache',
	    value: function cache() {
	      this.node.setAttribute('state', 'cached');
	    }
	  }, {
	    key: 'activate',
	    value: function activate() {
	      this.node.setAttribute('state', 'active');
	    }
	  }, {
	    key: 'deactivate',
	    value: function deactivate() {
	      this.node.setAttribute('state', 'inactive');
	    }
	  }, {
	    key: 'append',
	    value: function append(components) {
	      /* istanbul ignore else */
	      if (!components) {
	        return;
	      }
	      /* istanbul ignore else */
	      if (!components.length) {
	        components = [components];
	      }
	      this.children = this.children.concat(components);
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var component = _step.value;
	
	          this.getZone(component.zone).appendChild(component.node);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }]);
	
	  return CellsBridgeTemplate;
	}(_component2.default);
	
	exports.default = CellsBridgeTemplate;

/***/ },
/* 20 */
/*!*****************************************!*\
  !*** ./~/cells-bridge/src/component.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dom = __webpack_require__(/*! ./manager/dom */ 7);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CellsBridgeComponent = function (_CellsBridgeManagerDo) {
	  _inherits(CellsBridgeComponent, _CellsBridgeManagerDo);
	
	  function CellsBridgeComponent(spec) {
	    _classCallCheck(this, CellsBridgeComponent);
	
	    // @TODO: Por qué almacenar spec en una propiedad y algunas de sus propiedades en otra.
	    var _this = _possibleConstructorReturn(this, (CellsBridgeComponent.__proto__ || Object.getPrototypeOf(CellsBridgeComponent)).call(this));
	
	    _this.type = '';
	    _this.spec = null;
	    _this.zone = null;
	    _this.node = null;
	    _this.connections = null;
	    _this.spec = spec;
	    _this.type = spec.type;
	    _this.zone = spec.zone;
	    _this.node = _this.createElement(_this.spec.tagName);
	    _this.connections = spec.connections;
	    return _this;
	  }
	  /**
	   * Componen type. It could be TYPE_UI, TYPE_DM or TYPE_CC.
	   *
	   * @type {String}
	   */
	
	
	  _createClass(CellsBridgeComponent, [{
	    key: 'setProps',
	    value: function setProps() {
	      var spec = this.spec;
	      if (spec.connections && spec.connections.ignoreAttr) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = spec.connections.ignoreAttr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var key = _step.value;
	
	            delete spec.properties[key];
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      }
	
	      this.setAttrs(this.node, spec.properties);
	    }
	  }, {
	    key: 'isUnresolved',
	    value: function isUnresolved() {
	      return this.node.tagName.indexOf('-') > -1 && this.node.constructor === HTMLElement;
	    }
	  }]);
	
	  return CellsBridgeComponent;
	}(_dom2.default);
	
	exports.default = CellsBridgeComponent;

/***/ },
/* 21 */
/*!*******************************************************!*\
  !*** ./~/cells-bridge/src/manager/bridge-channels.js ***!
  \*******************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BridgeChannelManager = function () {
	  function BridgeChannelManager(bridge) {
	    _classCallCheck(this, BridgeChannelManager);
	
	    this.componentConnector = bridge.ComponentConnector;
	    this.privateChannels = new Set();
	  }
	
	  /**
	   * Returns the name of the application context channel.
	   */
	
	
	  _createClass(BridgeChannelManager, [{
	    key: 'getAppContextChannelName',
	    value: function getAppContextChannelName() {
	      return '__bridge_app';
	    }
	
	    /**
	     * Returns the prefix for private channels.
	     */
	
	  }, {
	    key: 'getPrivateChannelPrefix',
	    value: function getPrivateChannelPrefix() {
	      return '__bridge_page_';
	    }
	
	    /**
	     * Gets the application context channel.
	     *  
	     * @return {Channel}
	     */
	
	  }, {
	    key: 'getAppContextChannel',
	    value: function getAppContextChannel() {
	      return this.componentConnector.manager.get(this.getAppContextChannelName());
	    }
	
	    /**
	     * Gets the private channel that corresponds to a page.
	     *
	     * @param  {String} pageName
	     *
	     * @return {Channel}
	     */
	
	  }, {
	    key: 'getPrivate',
	    value: function getPrivate(pageName) {
	      var newName = this.getPrivateChannelPrefix() + pageName;
	      var channel = this.componentConnector.manager.get(newName);
	      this.privateChannels.add(newName);
	      return channel;
	    }
	
	    /**
	     * Creates and initializes the application context channel.
	     * 
	     */
	
	  }, {
	    key: 'initAppContextChannel',
	    value: function initAppContextChannel() {
	      this.getAppContextChannel();
	    }
	
	    /**
	     * Initializes the private chanel for the given page.
	     * 
	     * @param {String} pageName
	     * 
	     */
	
	  }, {
	    key: 'initPrivateChannel',
	    value: function initPrivateChannel(oldPageName, newPageName) {
	      var oldPrivateChannelName = void 0;
	      var newPrivateChannelName = void 0;
	      var channel = void 0;
	      var evt = void 0;
	      if (oldPageName) {
	        oldPrivateChannelName = this.getPrivateChannelPrefix() + oldPageName;
	        channel = this.componentConnector.manager.get(oldPrivateChannelName);
	        evt = this.componentConnector.createEvent('page-load', false);
	        channel.onNext(evt);
	      }
	      newPrivateChannelName = this.getPrivateChannelPrefix() + newPageName;
	      channel = this.componentConnector.manager.get(newPrivateChannelName);
	      evt = this.componentConnector.createEvent('page-load', true);
	      channel.onNext(evt);
	    }
	
	    /**
	     * Updates the application context.
	     * Puts in context the information of the current page and previous active page.
	     * 
	     * @param {String} oldPage was the previous current page
	     * @param {String} newPage is the page that becomes the current page
	     *  
	     */
	
	  }, {
	    key: 'updateAppContext',
	    value: function updateAppContext(oldPage, newPage) {
	      var evt = this.componentConnector.createEvent('page-load', {
	        currentPage: newPage,
	        fromPage: oldPage
	      });
	      this.getAppContextChannel().onNext(evt);
	    }
	
	    /**
	     * returns true if the given name matches a private channel's name
	     * 
	     * @param {String} name
	     * 
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'isPrivateChannel',
	    value: function isPrivateChannel(name) {
	      return name.indexOf(this.getPrivateChannelPrefix()) === 0;
	    }
	
	    /**
	     * returns true if there's a private channel with the given name
	     * 
	     * @param {String} name
	     * 
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'isActivePrivateChannel',
	    value: function isActivePrivateChannel(name) {
	      return this.privateChannels.has(name);
	    }
	  }]);
	
	  return BridgeChannelManager;
	}();
	
	/**
	 * BridgeChannelManager definition
	 */
	exports.default = BridgeChannelManager;

/***/ },
/* 22 */
/*!********************************************!*\
  !*** ./src/polymer-component-connector.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _componentConnector = __webpack_require__(/*! cells-bridge/src/component-connector */ 14);
	
	var _componentConnector2 = _interopRequireDefault(_componentConnector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _getProperyChangedName = function _getProperyChangedName(name) {
	  var propertyName;
	
	  /* istanbul ignore else */
	  if (name.endsWith(Polymer.Base._EVENT_CHANGED)) {
	    propertyName = name.slice(0, -Polymer.Base._EVENT_CHANGED.length);
	    propertyName = Polymer.CaseMap.dashToCamelCase(propertyName);
	  }
	
	  return propertyName;
	};
	
	// Hell to test:
	var _parseActionInEvent = function _parseActionInEvent(evt, targetPath, target) {
	  var path;
	  var value;
	
	  // Check if event is because of property changed.
	  var propertyName = _getProperyChangedName(evt.type);
	
	  if (propertyName && evt.detail && evt.detail.hasOwnProperty('value')) {
	    value = evt.detail.value;
	    targetPath = targetPath || propertyName;
	
	    if (evt.detail.path) {
	      path = evt.detail.path.replace(propertyName, targetPath);
	    } else {
	      path = targetPath;
	    }
	  } else {
	    path = targetPath;
	    value = evt.detail;
	  }
	
	  if (target !== undefined && target.is === undefined && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	    if (Polymer.Element === undefined) {
	      value = JSON.stringify(value);
	    } else if (target instanceof Polymer.Element === false) {
	      value = JSON.stringify(value);
	    }
	  }
	
	  return {
	    path: path,
	    value: value
	  };
	};
	
	var CellsPolymerComponentConnector = function (_CellsComponentConnec) {
	  _inherits(CellsPolymerComponentConnector, _CellsComponentConnec);
	
	  function CellsPolymerComponentConnector() {
	    _classCallCheck(this, CellsPolymerComponentConnector);
	
	    return _possibleConstructorReturn(this, (CellsPolymerComponentConnector.__proto__ || Object.getPrototypeOf(CellsPolymerComponentConnector)).apply(this, arguments));
	  }
	
	  _createClass(CellsPolymerComponentConnector, [{
	    key: 'wrapCallback',
	    value: function wrapCallback(node, bindName) {
	      return function (evt) {
	        if (typeof node[bindName] === 'function') {
	          this._dispatchActionFunction(evt, node, bindName);
	        } else {
	          this._dispatchActionProperty(evt, node, bindName);
	        }
	      }.bind(this);
	    }
	  }, {
	    key: '_dispatchActionFunction',
	    value: function _dispatchActionFunction(evt, target, method) {
	      var propertyName = _getProperyChangedName(evt.type);
	      var payload;
	
	      if (propertyName && evt.detail && evt.detail.hasOwnProperty('value')) {
	        payload = Polymer.dom(evt).rootTarget[propertyName];
	      } else {
	        payload = evt.detail;
	      }
	
	      //TODO: Review to see if we actually want to show this warning.
	      if (this.bridge && this.bridge.debug && this.bridge.parsePayload && ('' + target[method]).indexOf('.data') > -1) {
	        payload = this.bridge.parsePayload(evt.detail);
	        console.warn('%c' + target.tagName + '%c is using an incompatible payload data in ' + method, 'background: #ff9800; color: white; padding: 4px 4px 4px 10px', 'background: #ff9800; color: rgba(255,255,255,0.9); padding: 4px 10px 4px 0');
	      }
	
	      target[method](payload);
	    }
	  }, {
	    key: '_dispatchActionProperty',
	    value: function _dispatchActionProperty(evt, target, property) {
	      var info;
	      var data = _parseActionInEvent(evt, property, target);
	
	      //check if target is an instance of Polymer Element to check if is a polymer 2 element
	      if (target && target.getPropertyInfo || Polymer.Element !== undefined && target instanceof Polymer.Element === false) {
	        if (target.getPropertyInfo) {
	          info = target.getPropertyInfo(data.path);
	        } else {
	          info = target.constructor.config.properties[data.path];
	        }
	
	        if (info && info.defined && !info.readOnly && !info.computed) {
	          return target.set(data.path, data.value);
	        }
	      }
	      //check if target is an instance of Polymer Element to check if is a polymer 2 element
	      if (target && target.getPropertyInfo === undefined || Polymer.Element !== undefined && target instanceof Polymer.Element === false) {
	
	        info = target.constructor.config !== undefined ? target.constructor.config.properties[data.path] : undefined;
	
	        if (info && !info.readOnly && !info.computed) {
	          return target.set(data.path, data.value);
	        }
	      }
	
	      return target.setAttribute(data.path, data.value);
	    }
	  }, {
	    key: 'register',
	    value: function register(node, connections) {
	      _get(CellsPolymerComponentConnector.prototype.__proto__ || Object.getPrototypeOf(CellsPolymerComponentConnector.prototype), 'register', this).call(this, node, connections);
	
	      if (!node || !connections) {
	        return;
	      }
	
	      if (node.__isCellsConnected) {
	        return;
	      }
	
	      if (connections.in) {
	        for (var action in connections.in) {
	          if (this.manager.get(action).q[0]) {
	            if (connections.ignoreAttr) {
	              connections.ignoreAttr.push(connections.in[action].bind);
	            } else {
	              connections.ignoreAttr = [connections.in[action].bind];
	            }
	          }
	        }
	      }
	
	      if (connections.out) {
	        for (var _action in connections.out) {
	          var attrName = _getProperyChangedName(connections.out[_action].bind);
	
	          if (attrName && node.__data__) {
	            if (node && node.getPropertyInfo) {
	              var info = node.getPropertyInfo(attrName);
	
	              if (info.defined && !info.readOnly && !info.computed) {
	                var oldValue = node[attrName];
	                // remove polymer internal current value to trigger model changes
	                node.__data__[attrName] = undefined;
	                node[attrName] = oldValue;
	              }
	            }
	          }
	        }
	      }
	
	      node.__isCellsConnected = true;
	    }
	  }]);
	
	  return CellsPolymerComponentConnector;
	}(_componentConnector2.default);
	
	exports.default = CellsPolymerComponentConnector;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=cells-polymer-bridge.js.map