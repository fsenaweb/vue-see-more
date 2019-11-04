/*!
 * vue-see-more v1.0.0
 * (c) Matheus Ricelly <fsenaweb@gmail.com>
 * Released under the MIT License.
 */
'use strict';

//
//
//
//
//
//
//
//
//
//
var script = {
  data: function data() {
    return {
      activeSeeMore: false
    };
  },
  props: {
    seeMore: {
      type: String,
      "default": 'See More'
    },
    seeLess: {
      type: String,
      "default": 'Retract'
    },
    toText: {
      type: String,
      required: true
    },
    isStyle: {
      type: String,
      "default": ''
    },
    countLetters: {
      type: Number,
      "default": 80
    }
  },
  computed: {
    formatText: function formatText() {
      var newFormatText = this.toText;

      if (!this.activeSeeMore && this.toText.length > this.countLetters) {
        newFormatText = newFormatText.substring(0, this.countLetters) + " [...] ";
      }

      return newFormatText;
    }
  },
  methods: {
    handleSeeText: function handleSeeText(e, value) {
      if (this.seeLess !== 'Retract' || this.seeLess !== null) {
        e.preventDefault();
        this.activeSeeMore = value;
      }
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('p', {
    "class": [_vm.isStyle ? _vm.isStyle : ''],
    domProps: {
      "innerHTML": _vm._s(_vm.formatText)
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.toText.length > _vm.countLetters,
      expression: "toText.length > countLetters"
    }]
  }, [_c('a', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.activeSeeMore,
      expression: "!activeSeeMore"
    }],
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        return _vm.handleSeeText($event, true);
      }
    }
  }, [_vm._v(_vm._s(_vm.seeMore))]), _vm._v(" "), _c('a', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.activeSeeMore,
      expression: "activeSeeMore"
    }],
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        return _vm.handleSeeText($event, false);
      }
    }
  }, [_vm._v(_vm._s(_vm.seeLess))])])]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var VueSeeMore = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var index = {
  install: function install(Vue, options) {
    Vue.component("vue-see-more", VueSeeMore);
  }
};

module.exports = index;
