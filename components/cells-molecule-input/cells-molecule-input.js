Polymer({

  is: 'cells-molecule-input',

  properties: {

    /**
    * Label of the input
    * @type {String}
    */
    label: String,

    /**
    * The type of the input. The supported types are text, number and password.
    * @type {String}
    */
    type: {
      type: String,
      value: 'text',
      reflectToAttribute: true
    },

    /**
    * Name that maps to HTML native's name attribute (useful for forms)
    * @type {String}
    */
    name: {
      type: String,
      value: '',
      reflectToAttribute: true,
      observer: '_reset'
    },

    /**
    * If true, the element currently has focus.
    * @type {Boolean}
    */
    focused: {
      type: Boolean,
      notify: true,
      value: false,
      reflectToAttribute: true,
      observer: '_focusedObserver'
    },

    /**
    * If true, the element is currently invalid.
    * @type {Boolean}
    */
    invalid: {
      type: Boolean,
      value: false,
      notify: true,
      reflectToAttribute: true
    },

    /**
    * If true, the element is currently disabled.
    * @type {Boolean}
    */
    disabled: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * If true, the element is currently required.
     * @type {Boolean}
     */
    required: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * If true, the element have autofocus.
     * @type {Boolean}
     */
    autofocus: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * If true, the user can't write wrong data in the input.
     * @type {Boolean}
     */
    preventInvalidInput: {
      type: Boolean,
      value: false
    },

    /**
     * Pattern that validates user input
     * @type {String}
     */
    allowedPattern: {
      type: String,
      value: ''
    },

    /**
    * If true, the input will have an icon on its right side
    * @type {Boolean}
    */
    withIcon: {
      type: Boolean,
      value: false,
      observer: '_withIconObserver'
    },

    /**
    * If true, the icon will be visible always
    * @type {Boolean}
    */
    iconAlwaysVisible: {
      type: Boolean,
      value: false
    },

    /**
    * The value for this input.
    * @type {String}
    */
    value: {
      type: String,
      notify: true,
      observer: '_valueObserver'
    },

    /**
     * If `withIcon:true`,
     * Size for text field icon e.g. 'icon-size-20'
     */
    textFieldIconSize: String,

    /**
    * If `withIcon:true`,
    * ID for text field icon
    */
    textFieldIcon: String,

    /**
    * If `withIcon:true`,
    * ID for text field icon (toggle of `textFieldIcon`)
    */
    textFieldIconToggle: String,

    /**
    * The icon code of the icon-set
    * @type {String}
    */
    _iconCode: String,

    /**
     * The icon size of the icon
     * @type {String}
     */
    _iconSize: String,

    /**
    * Control variable that allows to remember if the component
    * was originally an type='password' input after making it visible
    * @type {Boolean}
    */
    _visiblePassword: {
      type: Boolean,
      value: false
    },

    /**
     * Control variable that indicates if input is empty
     * @type {Boolean}
     */
    _isEmpty: {
      type: Boolean,
      value: true,
      observer: '_isEmptyObserver'
    },

    _showIconClass: {
      type: String,
      computed: '_computeShowIconClass(iconAlwaysVisible)'
    },
    /**
    *Control variable that indicates the maxlength of the input
    *@type{String}
    */
    maxLength: {
      type: String,
      value: ''
    },
    /**
     * Set to true to auto-validate the input value.
     */
    autoValidate: {
      type: Boolean,
      value: false
    },
    /**
     * The regular expression used to validate the email. By default, the
     * input is of type=email and uses the native input regex, as defined in
     * the spec: https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail
     * You can override this if you want your email to be validated against
     * a custom regex. If the string is empty, then no validation will be applied.
     */
    regex: {
      type: String,
      value: null
    },

    /**
     * Message Error
     * @type {String}
     */
    errorMessage: {
      type: String,
      value: null
    },

     /**
     * Control variable that indicates if show a message error
     * @type {Boolean}
     */
    _showError: {
      type: Boolean,
      value: false
    },

    /**
     * Whether all the written text is selected on an input focus
     * @type {Boolean}
     */
    selectAllOnFocus: {
      type: Boolean
    }
  },

  listeners: {
    'input.focus': '_onInputFocus',
    'input.blur': '_onInputBlur',
    'iconLabel.tap': '_onIconClick',
    'input.input': '_onInputInput'
  },

  /**
  * @event
  * 'input-icon-click' Fired when icon is clicked
  */
  ready: function() {
    // If there's an initial input, validate it.
    if (this.value) {
      this._handleAutoValidate();
    }
  },

  attached: function() {
    if (this.withIcon) {
      if (this._isPasswordInput()) {
        this._iconCode = this.textFieldIcon || 'coronita:visualize';
        this._iconSize = this.textFieldIconSize || 'icon-size-20';
      } else {
        this._iconCode = this.textFieldIcon || 'coronita:close';
        this._iconSize = this.textFieldIconSize || 'icon-size-16';
        if (this._isEmpty) {
          this.toggleAttribute('hidden', !this.iconAlwaysVisible, this.$.icon);
        }
      }
    }

  },

  focus: function() {
    this.$.input.focus();
  },

  blur: function() {
    this.$.input.blur();
  },

  /**
  * Handles a 'click' event on the icon.
  * If inputs type=password then clicking on the icon allows to show the password in plain text
  * otherwise it reset's the input by cleaning its content.
  * @method _onIconClick
  */
  _onIconClick: function(e) {
    if (this.$.icon.hasAttribute('hidden')) {
      return;
    }

    if (this._visiblePassword) {
      this._iconCode = this.textFieldIcon || 'coronita:visualize';
      this.type = 'password';
      this.set('_visiblePassword', false);
    } else {
      if (this._isPasswordInput()) {
        this.set('_visiblePassword', true);
        this.type = 'text';
        this._iconCode = this.textFieldIconToggle || 'coronita:hide';
      } else {
        this.value = '';
        if (this.iconAlwaysVisible) {
          this._iconCode = this.textFieldIcon;
        }
        this.toggleAttribute('hidden', !this.iconAlwaysVisible, this.$.icon);
      }
    }

    this.focused = true;
    this.focus();

    //Fire specific event when the icon is clicked
    e.stopPropagation();
    e.preventDefault(); //prevent tap event bubbling
    this.fire('input-icon-click');
  },

  /**
  * Returns if the type of the inputs is 'password'
  * @method _isPasswordInput
  * @return {Boolean}
  */
  _isPasswordInput: function() {
    return this.type === 'password';
  },

  /**
   * If the input is empty, a class is changed
   * @method _isEmptyObserver
   */
  _isEmptyObserver: function(newValue, oldValue) {
    this._toggleHasContentClass(!newValue);
  },

  /**
   * Launched when user changes input. If has value and the field is required, a invalid value is setted
   * @method _onInputInput
   */
  _onInputInput: function(event) {
    if (this.required && !event.target.value) {
      this.invalid = true;
    } else {
      this._handleAutoValidate();
    }
  },

  /**
    * If `autoValidate` is true, then validates the element.
    */
  _handleAutoValidate: function() {
    if (this.autoValidate) {
      this.validate();
    }
  },

  /**
   * Observer for value.
   * @method _valueObserver
   */
  _valueObserver: function(newValue) {
    if (newValue) {
      this._isEmpty = newValue.length === 0;
    } else {
      this._isEmpty = true;
    }

    this._resetIcon();
  },

  /**
   * Observer for withIcon property. Icon is setted
   * @method _withIconObserver
   */
  _withIconObserver: function(newValue) {
    if (newValue) {
      this._resetIcon();
    }
  },

  /**
   * Icon is setted depending of field type and state
   * @method _resetIcon
   */
  _resetIcon: function() {
    if (this._isPasswordInput()) {
      this._iconCode = this.textFieldIcon || 'coronita:visualize';
      this.toggleAttribute('hidden', false, this.$.icon);
    } else {
      if (this.withIcon) {
        if (this.iconAlwaysVisible) {
          this._iconCode = this._isEmpty ? this.textFieldIcon || 'coronita:hide' : this.textFieldIconToggle || 'coronita:close';
          this.toggleAttribute('hidden', this._isEmpty && !this.iconAlwaysVisible, this.$.icon);
        } else {
          this._iconCode = this._visiblePassword ? this.textFieldIconToggle || 'coronita:hide' : 'coronita:close';
          this.toggleAttribute('hidden', this._isEmpty, this.$.icon);
        }
      } else {
        this._iconCode = '';
        this.toggleAttribute('hidden', true, this.$.icon);
      }
    }
  },

  /**
  * Fired when focused
  * @event input-focus
  */
  _onInputFocus: function(e) {
    this.focused = true;
    this.fire('input-focus');
  },

  /**
   * Fired when blur
   * @event   input-blur
   * @param   e {Event}
   * @private
   */
  _onInputBlur: function(e) {
    e.preventDefault();
    this.focused = false;
    this._toggleHasContentClass(!this._isEmpty);
    this.fire('input-blur');
  },

  /**
   * Toggle the has-content css class in the input
   * @method _toggleHasContentClass
   */
  _toggleHasContentClass: function(hasContent) {
    this.toggleClass('has-content', hasContent);
    this.toggleClass('has-content', hasContent, this.$.input);
  },

  /**
   * Resets the component
   * @method _reset
   */
  _reset: function() {
    this._isEmpty = true;
    this._visiblePassword = false;
    this.toggleAttribute('hidden', true, this.$.icon);
    this._resetIcon();
  },

  /**
   * Label moved up if the input is empty and focused and down when
   * it remains empty and is focused out (blur)
   * @method _focusedObserver
   */
  _focusedObserver: function(isFocused) {
    if (this._isEmpty) {
      this._toggleHasContentClass(isFocused);
    }
    if (isFocused && this.selectAllOnFocus) {
      /* setTimeout 0 because iOS moves cursor to click coordinates after the text has been selected */
      setTimeout(function() {
        this.$.input.setSelectionRange(0, this.$.input.value.length);
      }.bind(this), 0);
    }
  },

  _computeShowIconClass: function(value) {
    return value ? 'icon-always-visible' : '';
  },

  /**
   * Returns true if the element has a valid value, and sets the visual error
   * state.
   *
   * @return {boolean} Whether the input is currently valid or not.
   */
  validate: function() {

    var valid;

    // Empty, non-required input is valid.
    if (!this.required && this.value === '') {
      valid = true;
    } else if (this.regex === null) {
      // If the regex isn't set, then use the native validator.
      valid = this.$.input.validate();
    } else {
      // A blank regex means everything is valid. Else, check value against regex.
      valid = new RegExp(this.regex, 'i').test(this.value);
    }

    // Check if validity has changed
    if (valid === this.invalid) {
      // Update `this.invalid` since it's data-bound to container
      this.invalid = !valid;
      if (this.errorMessage) {
        this._showError = !valid;
      }
    }
  }

});
