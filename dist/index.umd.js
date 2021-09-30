(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
    typeof define === 'function' && define.amd ? define(['react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['pretty-progress'] = factory(global.React));
}(this, (function (React) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

    var css = ".progress-bar__container {\n  background: rgba(71, 71, 71, 0.12);\n  width: 100% !important;\n  height: 4px !important;\n  border: none;\n  border-radius: 2px !important; }\n  .progress-bar__container--filled {\n    background: #FD8542 !important;\n    height: 100%; }\n";
    n(css,{});

    var PrettyProgress = function PrettyProgress(_ref) {
      var width = _ref.width,
          color = _ref.color;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "progress-bar__container"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "progress-bar__container--filled",
        style: {
          width: "".concat(width, "%"),
          background: "".concat(color, " !important")
        }
      }));
    };

    var ProgressWrapper = function ProgressWrapper() {
      return {
        PrettyProgress: PrettyProgress
      };
    };

    var index = ProgressWrapper();

    return index;

})));
