/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/iframe-resizer/index.js":
/*!*****************************************!*\
  !*** ./modules/iframe-resizer/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./js */ "./modules/iframe-resizer/js/index.js");


/***/ }),

/***/ "./modules/iframe-resizer/js/index.js":
/*!********************************************!*\
  !*** ./modules/iframe-resizer/js/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

if (false) {} else {
  exports.iframeResizer = __webpack_require__(/*! ../../../node_modules/iframe-resizer/js/iframeResizer */ "./node_modules/iframe-resizer/js/iframeResizer.js");
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/booking/BookingWidgetModal.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/booking/BookingWidgetModal.css ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".caspeco-booking-modal {\r\n  display: block;\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  padding: 10vw 0;\r\n}\r\n\r\n.caspeco-booking-modal-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 0 25vw;\r\n  background: lightgray;\r\n  border-radius: 0.5rem;\r\n  overflow: auto;\r\n  height: 100%;\r\n  overscroll-behavior: contain;\r\n  box-shadow: grey -5px 5px 5px 0px;\r\n}\r\n\r\n.closeIcon {\r\n  cursor: pointer;\r\n  position: fixed;\r\n  top: -0.5rem;\r\n  right: 0.5rem;\r\n  font-weight: 900;\r\n  font-size: xx-large;\r\n  color: white;\r\n  text-shadow: 0px 0px 5px black;\r\n  padding: 0.5rem;\r\n}\r\n\r\n@media only screen and (max-device-width: 600px) {\r\n  .caspeco-booking-modal-container {\r\n    margin: 0 1vw;\r\n  }\r\n\r\n  .closeIcon {\r\n    position: absolute;\r\n    top: -17px;\r\n    right: -3px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-device-width: 600px) and (max-device-width: 900px) {\r\n  .caspeco-booking-modal-container {\r\n    margin: 0 5vw;\r\n  }\r\n\r\n  .caspeco-booking-modal {\r\n    padding: 5vh 0;\r\n  }\r\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/booking/BookingWidgetModal.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,eAAe;EACf,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,cAAc;EACd,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,YAAY;EACZ,4BAA4B;EAC5B,iCAAiC;AACnC;;AAEA;EACE,eAAe;EACf,eAAe;EACf,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,kBAAkB;IAClB,UAAU;IACV,WAAW;EACb;AACF;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,cAAc;EAChB;AACF","sourcesContent":[".caspeco-booking-modal {\r\n  display: block;\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n  padding: 10vw 0;\r\n}\r\n\r\n.caspeco-booking-modal-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 0 25vw;\r\n  background: lightgray;\r\n  border-radius: 0.5rem;\r\n  overflow: auto;\r\n  height: 100%;\r\n  overscroll-behavior: contain;\r\n  box-shadow: grey -5px 5px 5px 0px;\r\n}\r\n\r\n.closeIcon {\r\n  cursor: pointer;\r\n  position: fixed;\r\n  top: -0.5rem;\r\n  right: 0.5rem;\r\n  font-weight: 900;\r\n  font-size: xx-large;\r\n  color: white;\r\n  text-shadow: 0px 0px 5px black;\r\n  padding: 0.5rem;\r\n}\r\n\r\n@media only screen and (max-device-width: 600px) {\r\n  .caspeco-booking-modal-container {\r\n    margin: 0 1vw;\r\n  }\r\n\r\n  .closeIcon {\r\n    position: absolute;\r\n    top: -17px;\r\n    right: -3px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-device-width: 600px) and (max-device-width: 900px) {\r\n  .caspeco-booking-modal-container {\r\n    margin: 0 5vw;\r\n  }\r\n\r\n  .caspeco-booking-modal {\r\n    padding: 5vh 0;\r\n  }\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/iframe-resizer/js/iframeResizer.js":
/*!*********************************************************!*\
  !*** ./node_modules/iframe-resizer/js/iframeResizer.js ***!
  \*********************************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * File: iframeResizer.js
 * Desc: Force iframes to size to content.
 * Requires: iframeResizer.contentWindow.js to be loaded into the target frame.
 * Doc: https://github.com/davidjbradshaw/iframe-resizer
 * Author: David J. Bradshaw - dave@bradshaw.net
 * Contributor: Jure Mav - jure.mav@gmail.com
 * Contributor: Reed Dadoune - reed@dadoune.com
 */

// eslint-disable-next-line sonarjs/cognitive-complexity, no-shadow-restricted-names
;(function (undefined) {
  if (typeof window === 'undefined') return // don't run for server side render

  var count = 0,
    logEnabled = false,
    hiddenCheckEnabled = false,
    msgHeader = 'message',
    msgHeaderLen = msgHeader.length,
    msgId = '[iFrameSizer]', // Must match iframe msg ID
    msgIdLen = msgId.length,
    pagePosition = null,
    requestAnimationFrame = window.requestAnimationFrame,
    resetRequiredMethods = {
      max: 1,
      scroll: 1,
      bodyScroll: 1,
      documentElementScroll: 1
    },
    settings = {},
    timer = null,
    defaults = {
      autoResize: true,
      bodyBackground: null,
      bodyMargin: null,
      bodyMarginV1: 8,
      bodyPadding: null,
      checkOrigin: true,
      inPageLinks: false,
      enablePublicMethods: true,
      heightCalculationMethod: 'bodyOffset',
      id: 'iFrameResizer',
      interval: 32,
      log: false,
      maxHeight: Infinity,
      maxWidth: Infinity,
      minHeight: 0,
      minWidth: 0,
      resizeFrom: 'parent',
      scrolling: false,
      sizeHeight: true,
      sizeWidth: false,
      warningTimeout: 5000,
      tolerance: 0,
      widthCalculationMethod: 'scroll',
      onClose: function () {
        return true
      },
      onClosed: function () {},
      onInit: function () {},
      onMessage: function () {
        warn('onMessage function not defined')
      },
      onResized: function () {},
      onScroll: function () {
        return true
      }
    }

  function getMutationObserver() {
    return (
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    )
  }

  function addEventListener(el, evt, func) {
    el.addEventListener(evt, func, false)
  }

  function removeEventListener(el, evt, func) {
    el.removeEventListener(evt, func, false)
  }

  function setupRequestAnimationFrame() {
    var vendors = ['moz', 'webkit', 'o', 'ms']
    var x

    // Remove vendor prefixing if prefixed and break early if not
    for (x = 0; x < vendors.length && !requestAnimationFrame; x += 1) {
      requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
    }

    if (!requestAnimationFrame) {
      log('setup', 'RequestAnimationFrame not supported')
    } else {
      // Firefox extension content-scripts have a globalThis object that is not the same as window.
      // Binding `requestAnimationFrame` to window allows the function to work and prevents errors
      // being thrown when run in that context, and should be a no-op in every other context.
      requestAnimationFrame = requestAnimationFrame.bind(window)
    }
  }

  function getMyID(iframeId) {
    var retStr = 'Host page: ' + iframeId

    if (window.top !== window.self) {
      if (window.parentIFrame && window.parentIFrame.getId) {
        retStr = window.parentIFrame.getId() + ': ' + iframeId
      } else {
        retStr = 'Nested host page: ' + iframeId
      }
    }

    return retStr
  }

  function formatLogHeader(iframeId) {
    return msgId + '[' + getMyID(iframeId) + ']'
  }

  function isLogEnabled(iframeId) {
    return settings[iframeId] ? settings[iframeId].log : logEnabled
  }

  function log(iframeId, msg) {
    output('log', iframeId, msg, isLogEnabled(iframeId))
  }

  function info(iframeId, msg) {
    output('info', iframeId, msg, isLogEnabled(iframeId))
  }

  function warn(iframeId, msg) {
    output('warn', iframeId, msg, true)
  }

  function output(type, iframeId, msg, enabled) {
    if (true === enabled && 'object' === typeof window.console) {
      // eslint-disable-next-line no-console
      console[type](formatLogHeader(iframeId), msg)
    }
  }

  function iFrameListener(event) {
    function resizeIFrame() {
      function resize() {
        setSize(messageData)
        setPagePosition(iframeId)
        on('onResized', messageData)
      }

      ensureInRange('Height')
      ensureInRange('Width')

      syncResize(resize, messageData, 'init')
    }

    function processMsg() {
      var data = msg.substr(msgIdLen).split(':')
      var height = data[1] ? parseInt(data[1], 10) : 0
      var iframe = settings[data[0]] && settings[data[0]].iframe
      var compStyle = getComputedStyle(iframe)

      return {
        iframe: iframe,
        id: data[0],
        height: height + getPaddingEnds(compStyle) + getBorderEnds(compStyle),
        width: data[2],
        type: data[3]
      }
    }

    function getPaddingEnds(compStyle) {
      if (compStyle.boxSizing !== 'border-box') {
        return 0
      }
      var top = compStyle.paddingTop ? parseInt(compStyle.paddingTop, 10) : 0
      var bot = compStyle.paddingBottom
        ? parseInt(compStyle.paddingBottom, 10)
        : 0
      return top + bot
    }

    function getBorderEnds(compStyle) {
      if (compStyle.boxSizing !== 'border-box') {
        return 0
      }
      var top = compStyle.borderTopWidth
        ? parseInt(compStyle.borderTopWidth, 10)
        : 0
      var bot = compStyle.borderBottomWidth
        ? parseInt(compStyle.borderBottomWidth, 10)
        : 0
      return top + bot
    }

    function ensureInRange(Dimension) {
      var max = Number(settings[iframeId]['max' + Dimension]),
        min = Number(settings[iframeId]['min' + Dimension]),
        dimension = Dimension.toLowerCase(),
        size = Number(messageData[dimension])

      log(iframeId, 'Checking ' + dimension + ' is in range ' + min + '-' + max)

      if (size < min) {
        size = min
        log(iframeId, 'Set ' + dimension + ' to min value')
      }

      if (size > max) {
        size = max
        log(iframeId, 'Set ' + dimension + ' to max value')
      }

      messageData[dimension] = '' + size
    }

    function isMessageFromIFrame() {
      function checkAllowedOrigin() {
        function checkList() {
          var i = 0,
            retCode = false

          log(
            iframeId,
            'Checking connection is from allowed list of origins: ' +
              checkOrigin
          )

          for (; i < checkOrigin.length; i++) {
            if (checkOrigin[i] === origin) {
              retCode = true
              break
            }
          }
          return retCode
        }

        function checkSingle() {
          var remoteHost = settings[iframeId] && settings[iframeId].remoteHost
          log(iframeId, 'Checking connection is from: ' + remoteHost)
          return origin === remoteHost
        }

        return checkOrigin.constructor === Array ? checkList() : checkSingle()
      }

      var origin = event.origin,
        checkOrigin = settings[iframeId] && settings[iframeId].checkOrigin

      if (checkOrigin && '' + origin !== 'null' && !checkAllowedOrigin()) {
        throw new Error(
          'Unexpected message received from: ' +
            origin +
            ' for ' +
            messageData.iframe.id +
            '. Message was: ' +
            event.data +
            '. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.'
        )
      }

      return true
    }

    function isMessageForUs() {
      return (
        msgId === ('' + msg).substr(0, msgIdLen) &&
        msg.substr(msgIdLen).split(':')[0] in settings
      ) // ''+Protects against non-string msg
    }

    function isMessageFromMetaParent() {
      // Test if this message is from a parent above us. This is an ugly test, however, updating
      // the message format would break backwards compatibity.
      var retCode = messageData.type in { true: 1, false: 1, undefined: 1 }

      if (retCode) {
        log(iframeId, 'Ignoring init message from meta parent page')
      }

      return retCode
    }

    function getMsgBody(offset) {
      return msg.substr(msg.indexOf(':') + msgHeaderLen + offset)
    }

    function forwardMsgFromIFrame(msgBody) {
      log(
        iframeId,
        'onMessage passed: {iframe: ' +
          messageData.iframe.id +
          ', message: ' +
          msgBody +
          '}'
      )
      on('onMessage', {
        iframe: messageData.iframe,
        message: JSON.parse(msgBody)
      })
      log(iframeId, '--')
    }

    function getPageInfo() {
      var bodyPosition = document.body.getBoundingClientRect(),
        iFramePosition = messageData.iframe.getBoundingClientRect()

      return JSON.stringify({
        iframeHeight: iFramePosition.height,
        iframeWidth: iFramePosition.width,
        clientHeight: Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        ),
        clientWidth: Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        ),
        offsetTop: parseInt(iFramePosition.top - bodyPosition.top, 10),
        offsetLeft: parseInt(iFramePosition.left - bodyPosition.left, 10),
        scrollTop: window.pageYOffset,
        scrollLeft: window.pageXOffset,
        documentHeight: document.documentElement.clientHeight,
        documentWidth: document.documentElement.clientWidth,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
      })
    }

    function sendPageInfoToIframe(iframe, iframeId) {
      function debouncedTrigger() {
        trigger('Send Page Info', 'pageInfo:' + getPageInfo(), iframe, iframeId)
      }
      debounceFrameEvents(debouncedTrigger, 32, iframeId)
    }

    function startPageInfoMonitor() {
      function setListener(type, func) {
        function sendPageInfo() {
          if (settings[id]) {
            sendPageInfoToIframe(settings[id].iframe, id)
          } else {
            stop()
          }
        }

        ;['scroll', 'resize'].forEach(function (evt) {
          log(id, type + evt + ' listener for sendPageInfo')
          func(window, evt, sendPageInfo)
        })
      }

      function stop() {
        setListener('Remove ', removeEventListener)
      }

      function start() {
        setListener('Add ', addEventListener)
      }

      var id = iframeId // Create locally scoped copy of iFrame ID

      start()

      if (settings[id]) {
        settings[id].stopPageInfo = stop
      }
    }

    function stopPageInfoMonitor() {
      if (settings[iframeId] && settings[iframeId].stopPageInfo) {
        settings[iframeId].stopPageInfo()
        delete settings[iframeId].stopPageInfo
      }
    }

    function checkIFrameExists() {
      var retBool = true

      if (null === messageData.iframe) {
        warn(iframeId, 'IFrame (' + messageData.id + ') not found')
        retBool = false
      }
      return retBool
    }

    function getElementPosition(target) {
      var iFramePosition = target.getBoundingClientRect()

      getPagePosition(iframeId)

      return {
        x: Math.floor(Number(iFramePosition.left) + Number(pagePosition.x)),
        y: Math.floor(Number(iFramePosition.top) + Number(pagePosition.y))
      }
    }

    function scrollRequestFromChild(addOffset) {
      /* istanbul ignore next */ // Not testable in Karma
      function reposition() {
        pagePosition = newPosition
        scrollTo()
        log(iframeId, '--')
      }

      function calcOffset() {
        return {
          x: Number(messageData.width) + offset.x,
          y: Number(messageData.height) + offset.y
        }
      }

      function scrollParent() {
        if (window.parentIFrame) {
          window.parentIFrame['scrollTo' + (addOffset ? 'Offset' : '')](
            newPosition.x,
            newPosition.y
          )
        } else {
          warn(
            iframeId,
            'Unable to scroll to requested position, window.parentIFrame not found'
          )
        }
      }

      var offset = addOffset
          ? getElementPosition(messageData.iframe)
          : { x: 0, y: 0 },
        newPosition = calcOffset()

      log(
        iframeId,
        'Reposition requested from iFrame (offset x:' +
          offset.x +
          ' y:' +
          offset.y +
          ')'
      )

      if (window.top !== window.self) {
        scrollParent()
      } else {
        reposition()
      }
    }

    function scrollTo() {
      if (false !== on('onScroll', pagePosition)) {
        setPagePosition(iframeId)
      } else {
        unsetPagePosition()
      }
    }

    function findTarget(location) {
      function jumpToTarget() {
        var jumpPosition = getElementPosition(target)

        log(
          iframeId,
          'Moving to in page link (#' +
            hash +
            ') at x: ' +
            jumpPosition.x +
            ' y: ' +
            jumpPosition.y
        )
        pagePosition = {
          x: jumpPosition.x,
          y: jumpPosition.y
        }

        scrollTo()
        log(iframeId, '--')
      }

      function jumpToParent() {
        if (window.parentIFrame) {
          window.parentIFrame.moveToAnchor(hash)
        } else {
          log(
            iframeId,
            'In page link #' +
              hash +
              ' not found and window.parentIFrame not found'
          )
        }
      }

      var hash = location.split('#')[1] || '',
        hashData = decodeURIComponent(hash),
        target =
          document.getElementById(hashData) ||
          document.getElementsByName(hashData)[0]

      if (target) {
        jumpToTarget()
      } else if (window.top !== window.self) {
        jumpToParent()
      } else {
        log(iframeId, 'In page link #' + hash + ' not found')
      }
    }

    function on(funcName, val) {
      return chkEvent(iframeId, funcName, val)
    }

    function actionMsg() {
      if (settings[iframeId] && settings[iframeId].firstRun) firstRun()

      switch (messageData.type) {
        case 'close':
          closeIFrame(messageData.iframe)
          break

        case 'message':
          forwardMsgFromIFrame(getMsgBody(6))
          break

        case 'autoResize':
          settings[iframeId].autoResize = JSON.parse(getMsgBody(9))
          break

        case 'scrollTo':
          scrollRequestFromChild(false)
          break

        case 'scrollToOffset':
          scrollRequestFromChild(true)
          break

        case 'pageInfo':
          sendPageInfoToIframe(
            settings[iframeId] && settings[iframeId].iframe,
            iframeId
          )
          startPageInfoMonitor()
          break

        case 'pageInfoStop':
          stopPageInfoMonitor()
          break

        case 'inPageLink':
          findTarget(getMsgBody(9))
          break

        case 'reset':
          resetIFrame(messageData)
          break

        case 'init':
          resizeIFrame()
          on('onInit', messageData.iframe)
          break

        default:
          resizeIFrame()
      }
    }

    function hasSettings(iframeId) {
      var retBool = true

      if (!settings[iframeId]) {
        retBool = false
        warn(
          messageData.type +
            ' No settings for ' +
            iframeId +
            '. Message was: ' +
            msg
        )
      }

      return retBool
    }

    function iFrameReadyMsgReceived() {
      // eslint-disable-next-line no-restricted-syntax, guard-for-in
      for (var iframeId in settings) {
        trigger(
          'iFrame requested init',
          createOutgoingMsg(iframeId),
          settings[iframeId].iframe,
          iframeId
        )
      }
    }

    function firstRun() {
      if (settings[iframeId]) {
        settings[iframeId].firstRun = false
      }
    }

    var msg = event.data,
      messageData = {},
      iframeId = null

    if ('[iFrameResizerChild]Ready' === msg) {
      iFrameReadyMsgReceived()
    } else if (isMessageForUs()) {
      messageData = processMsg()
      iframeId = messageData.id
      if (settings[iframeId]) {
        settings[iframeId].loaded = true
      }

      if (!isMessageFromMetaParent() && hasSettings(iframeId)) {
        log(iframeId, 'Received: ' + msg)

        if (checkIFrameExists() && isMessageFromIFrame()) {
          actionMsg()
        }
      }
    } else {
      info(iframeId, 'Ignored: ' + msg)
    }
  }

  function chkEvent(iframeId, funcName, val) {
    var func = null,
      retVal = null

    if (settings[iframeId]) {
      func = settings[iframeId][funcName]

      if ('function' === typeof func) {
        retVal = func(val)
      } else {
        throw new TypeError(
          funcName + ' on iFrame[' + iframeId + '] is not a function'
        )
      }
    }

    return retVal
  }

  function removeIframeListeners(iframe) {
    var iframeId = iframe.id
    delete settings[iframeId]
  }

  function closeIFrame(iframe) {
    var iframeId = iframe.id
    if (chkEvent(iframeId, 'onClose', iframeId) === false) {
      log(iframeId, 'Close iframe cancelled by onClose event')
      return
    }
    log(iframeId, 'Removing iFrame: ' + iframeId)

    try {
      // Catch race condition error with React
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe)
      }
    } catch (error) {
      warn(error)
    }

    chkEvent(iframeId, 'onClosed', iframeId)
    log(iframeId, '--')
    removeIframeListeners(iframe)
  }

  function getPagePosition(iframeId) {
    if (null === pagePosition) {
      pagePosition = {
        x:
          window.pageXOffset !== undefined
            ? window.pageXOffset
            : document.documentElement.scrollLeft,
        y:
          window.pageYOffset !== undefined
            ? window.pageYOffset
            : document.documentElement.scrollTop
      }
      log(
        iframeId,
        'Get page position: ' + pagePosition.x + ',' + pagePosition.y
      )
    }
  }

  function setPagePosition(iframeId) {
    if (null !== pagePosition) {
      window.scrollTo(pagePosition.x, pagePosition.y)
      log(
        iframeId,
        'Set page position: ' + pagePosition.x + ',' + pagePosition.y
      )
      unsetPagePosition()
    }
  }

  function unsetPagePosition() {
    pagePosition = null
  }

  function resetIFrame(messageData) {
    function reset() {
      setSize(messageData)
      trigger('reset', 'reset', messageData.iframe, messageData.id)
    }

    log(
      messageData.id,
      'Size reset requested by ' +
        ('init' === messageData.type ? 'host page' : 'iFrame')
    )
    getPagePosition(messageData.id)
    syncResize(reset, messageData, 'reset')
  }

  function setSize(messageData) {
    function setDimension(dimension) {
      if (!messageData.id) {
        log('undefined', 'messageData id not set')
        return
      }
      messageData.iframe.style[dimension] = messageData[dimension] + 'px'
      log(
        messageData.id,
        'IFrame (' +
          iframeId +
          ') ' +
          dimension +
          ' set to ' +
          messageData[dimension] +
          'px'
      )
    }

    function chkZero(dimension) {
      // FireFox sets dimension of hidden iFrames to zero.
      // So if we detect that set up an event to check for
      // when iFrame becomes visible.

      /* istanbul ignore next */ // Not testable in PhantomJS
      if (!hiddenCheckEnabled && '0' === messageData[dimension]) {
        hiddenCheckEnabled = true
        log(iframeId, 'Hidden iFrame detected, creating visibility listener')
        fixHiddenIFrames()
      }
    }

    function processDimension(dimension) {
      setDimension(dimension)
      chkZero(dimension)
    }

    var iframeId = messageData.iframe.id

    if (settings[iframeId]) {
      if (settings[iframeId].sizeHeight) {
        processDimension('height')
      }
      if (settings[iframeId].sizeWidth) {
        processDimension('width')
      }
    }
  }

  function syncResize(func, messageData, doNotSync) {
    /* istanbul ignore if */ // Not testable in PhantomJS
    if (
      doNotSync !== messageData.type &&
      requestAnimationFrame &&
      // including check for jasmine because had trouble getting spy to work in unit test using requestAnimationFrame
      !window.jasmine
    ) {
      log(messageData.id, 'Requesting animation frame')
      requestAnimationFrame(func)
    } else {
      func()
    }
  }

  function trigger(calleeMsg, msg, iframe, id, noResponseWarning) {
    function postMessageToIFrame() {
      var target = settings[id] && settings[id].targetOrigin
      log(
        id,
        '[' +
          calleeMsg +
          '] Sending msg to iframe[' +
          id +
          '] (' +
          msg +
          ') targetOrigin: ' +
          target
      )
      iframe.contentWindow.postMessage(msgId + msg, target)
    }

    function iFrameNotFound() {
      warn(id, '[' + calleeMsg + '] IFrame(' + id + ') not found')
    }

    function chkAndSend() {
      if (
        iframe &&
        'contentWindow' in iframe &&
        null !== iframe.contentWindow
      ) {
        // Null test for PhantomJS
        postMessageToIFrame()
      } else {
        iFrameNotFound()
      }
    }

    function warnOnNoResponse() {
      function warning() {
        if (settings[id] && !settings[id].loaded && !errorShown) {
          errorShown = true
          warn(
            id,
            'IFrame has not responded within ' +
              settings[id].warningTimeout / 1000 +
              ' seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning.'
          )
        }
      }

      if (
        !!noResponseWarning &&
        settings[id] &&
        !!settings[id].warningTimeout
      ) {
        settings[id].msgTimeout = setTimeout(
          warning,
          settings[id].warningTimeout
        )
      }
    }

    var errorShown = false

    id = id || iframe.id

    if (settings[id]) {
      chkAndSend()
      warnOnNoResponse()
    }
  }

  function createOutgoingMsg(iframeId) {
    return (
      iframeId +
      ':' +
      settings[iframeId].bodyMarginV1 +
      ':' +
      settings[iframeId].sizeWidth +
      ':' +
      settings[iframeId].log +
      ':' +
      settings[iframeId].interval +
      ':' +
      settings[iframeId].enablePublicMethods +
      ':' +
      settings[iframeId].autoResize +
      ':' +
      settings[iframeId].bodyMargin +
      ':' +
      settings[iframeId].heightCalculationMethod +
      ':' +
      settings[iframeId].bodyBackground +
      ':' +
      settings[iframeId].bodyPadding +
      ':' +
      settings[iframeId].tolerance +
      ':' +
      settings[iframeId].inPageLinks +
      ':' +
      settings[iframeId].resizeFrom +
      ':' +
      settings[iframeId].widthCalculationMethod
    )
  }

  function setupIFrame(iframe, options) {
    function setLimits() {
      function addStyle(style) {
        if (
          Infinity !== settings[iframeId][style] &&
          0 !== settings[iframeId][style]
        ) {
          iframe.style[style] = settings[iframeId][style] + 'px'
          log(
            iframeId,
            'Set ' + style + ' = ' + settings[iframeId][style] + 'px'
          )
        }
      }

      function chkMinMax(dimension) {
        if (
          settings[iframeId]['min' + dimension] >
          settings[iframeId]['max' + dimension]
        ) {
          throw new Error(
            'Value for min' +
              dimension +
              ' can not be greater than max' +
              dimension
          )
        }
      }

      chkMinMax('Height')
      chkMinMax('Width')

      addStyle('maxHeight')
      addStyle('minHeight')
      addStyle('maxWidth')
      addStyle('minWidth')
    }

    function newId() {
      var id = (options && options.id) || defaults.id + count++
      if (null !== document.getElementById(id)) {
        id += count++
      }
      return id
    }

    function ensureHasId(iframeId) {
      if ('' === iframeId) {
        // eslint-disable-next-line no-multi-assign
        iframe.id = iframeId = newId()
        logEnabled = (options || {}).log
        log(
          iframeId,
          'Added missing iframe ID: ' + iframeId + ' (' + iframe.src + ')'
        )
      }

      return iframeId
    }

    function setScrolling() {
      log(
        iframeId,
        'IFrame scrolling ' +
          (settings[iframeId] && settings[iframeId].scrolling
            ? 'enabled'
            : 'disabled') +
          ' for ' +
          iframeId
      )
      iframe.style.overflow =
        false === (settings[iframeId] && settings[iframeId].scrolling)
          ? 'hidden'
          : 'auto'
      switch (settings[iframeId] && settings[iframeId].scrolling) {
        case 'omit':
          break

        case true:
          iframe.scrolling = 'yes'
          break

        case false:
          iframe.scrolling = 'no'
          break

        default:
          iframe.scrolling = settings[iframeId]
            ? settings[iframeId].scrolling
            : 'no'
      }
    }

    // The V1 iFrame script expects an int, where as in V2 expects a CSS
    // string value such as '1px 3em', so if we have an int for V2, set V1=V2
    // and then convert V2 to a string PX value.
    function setupBodyMarginValues() {
      if (
        'number' ===
          typeof (settings[iframeId] && settings[iframeId].bodyMargin) ||
        '0' === (settings[iframeId] && settings[iframeId].bodyMargin)
      ) {
        settings[iframeId].bodyMarginV1 = settings[iframeId].bodyMargin
        settings[iframeId].bodyMargin =
          '' + settings[iframeId].bodyMargin + 'px'
      }
    }

    function checkReset() {
      // Reduce scope of firstRun to function, because IE8's JS execution
      // context stack is borked and this value gets externally
      // changed midway through running this function!!!
      var firstRun = settings[iframeId] && settings[iframeId].firstRun,
        resetRequertMethod =
          settings[iframeId] &&
          settings[iframeId].heightCalculationMethod in resetRequiredMethods

      if (!firstRun && resetRequertMethod) {
        resetIFrame({ iframe: iframe, height: 0, width: 0, type: 'init' })
      }
    }

    function setupIFrameObject() {
      if (settings[iframeId]) {
        settings[iframeId].iframe.iFrameResizer = {
          close: closeIFrame.bind(null, settings[iframeId].iframe),

          removeListeners: removeIframeListeners.bind(
            null,
            settings[iframeId].iframe
          ),

          resize: trigger.bind(
            null,
            'Window resize',
            'resize',
            settings[iframeId].iframe
          ),

          moveToAnchor: function (anchor) {
            trigger(
              'Move to anchor',
              'moveToAnchor:' + anchor,
              settings[iframeId].iframe,
              iframeId
            )
          },

          sendMessage: function (message) {
            message = JSON.stringify(message)
            trigger(
              'Send Message',
              'message:' + message,
              settings[iframeId].iframe,
              iframeId
            )
          }
        }
      }
    }

    // We have to call trigger twice, as we can not be sure if all
    // iframes have completed loading when this code runs. The
    // event listener also catches the page changing in the iFrame.
    function init(msg) {
      function iFrameLoaded() {
        trigger('iFrame.onload', msg, iframe, undefined, true)
        checkReset()
      }

      function createDestroyObserver(MutationObserver) {
        if (!iframe.parentNode) {
          return
        }

        var destroyObserver = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            var removedNodes = Array.prototype.slice.call(mutation.removedNodes) // Transform NodeList into an Array
            removedNodes.forEach(function (removedNode) {
              if (removedNode === iframe) {
                closeIFrame(iframe)
              }
            })
          })
        })
        destroyObserver.observe(iframe.parentNode, {
          childList: true
        })
      }

      var MutationObserver = getMutationObserver()
      if (MutationObserver) {
        createDestroyObserver(MutationObserver)
      }

      addEventListener(iframe, 'load', iFrameLoaded)
      trigger('init', msg, iframe, undefined, true)
    }

    function checkOptions(options) {
      if ('object' !== typeof options) {
        throw new TypeError('Options is not an object')
      }
    }

    function copyOptions(options) {
      // eslint-disable-next-line no-restricted-syntax
      for (var option in defaults) {
        if (Object.prototype.hasOwnProperty.call(defaults, option)) {
          settings[iframeId][option] = Object.prototype.hasOwnProperty.call(
            options,
            option
          )
            ? options[option]
            : defaults[option]
        }
      }
    }

    function getTargetOrigin(remoteHost) {
      return '' === remoteHost ||
        null !== remoteHost.match(/^(about:blank|javascript:|file:\/\/)/)
        ? '*'
        : remoteHost
    }

    function depricate(key) {
      var splitName = key.split('Callback')

      if (splitName.length === 2) {
        var name =
          'on' + splitName[0].charAt(0).toUpperCase() + splitName[0].slice(1)
        this[name] = this[key]
        delete this[key]
        warn(
          iframeId,
          "Deprecated: '" +
            key +
            "' has been renamed '" +
            name +
            "'. The old method will be removed in the next major version."
        )
      }
    }

    function processOptions(options) {
      options = options || {}
      settings[iframeId] = {
        firstRun: true,
        iframe: iframe,
        remoteHost: iframe.src && iframe.src.split('/').slice(0, 3).join('/')
      }

      checkOptions(options)
      Object.keys(options).forEach(depricate, options)
      copyOptions(options)

      if (settings[iframeId]) {
        settings[iframeId].targetOrigin =
          true === settings[iframeId].checkOrigin
            ? getTargetOrigin(settings[iframeId].remoteHost)
            : '*'
      }
    }

    function beenHere() {
      return iframeId in settings && 'iFrameResizer' in iframe
    }

    var iframeId = ensureHasId(iframe.id)

    if (!beenHere()) {
      processOptions(options)
      setScrolling()
      setLimits()
      setupBodyMarginValues()
      init(createOutgoingMsg(iframeId))
      setupIFrameObject()
    } else {
      warn(iframeId, 'Ignored iFrame, already setup.')
    }
  }

  function debouce(fn, time) {
    if (null === timer) {
      timer = setTimeout(function () {
        timer = null
        fn()
      }, time)
    }
  }

  var frameTimer = {}
  function debounceFrameEvents(fn, time, frameId) {
    if (!frameTimer[frameId]) {
      frameTimer[frameId] = setTimeout(function () {
        frameTimer[frameId] = null
        fn()
      }, time)
    }
  }

  // Not testable in PhantomJS
  /* istanbul ignore next */

  function fixHiddenIFrames() {
    function checkIFrames() {
      function checkIFrame(settingId) {
        function chkDimension(dimension) {
          return (
            '0px' ===
            (settings[settingId] && settings[settingId].iframe.style[dimension])
          )
        }

        function isVisible(el) {
          return null !== el.offsetParent
        }

        if (
          settings[settingId] &&
          isVisible(settings[settingId].iframe) &&
          (chkDimension('height') || chkDimension('width'))
        ) {
          trigger(
            'Visibility change',
            'resize',
            settings[settingId].iframe,
            settingId
          )
        }
      }

      Object.keys(settings).forEach(function (key) {
        checkIFrame(key)
      })
    }

    function mutationObserved(mutations) {
      log(
        'window',
        'Mutation observed: ' + mutations[0].target + ' ' + mutations[0].type
      )
      debouce(checkIFrames, 16)
    }

    function createMutationObserver() {
      var target = document.querySelector('body'),
        config = {
          attributes: true,
          attributeOldValue: false,
          characterData: true,
          characterDataOldValue: false,
          childList: true,
          subtree: true
        },
        observer = new MutationObserver(mutationObserved)

      observer.observe(target, config)
    }

    var MutationObserver = getMutationObserver()
    if (MutationObserver) {
      createMutationObserver()
    }
  }

  function resizeIFrames(event) {
    function resize() {
      sendTriggerMsg('Window ' + event, 'resize')
    }

    log('window', 'Trigger event: ' + event)
    debouce(resize, 16)
  }

  // Not testable in PhantomJS
  /* istanbul ignore next */
  function tabVisible() {
    function resize() {
      sendTriggerMsg('Tab Visable', 'resize')
    }

    if ('hidden' !== document.visibilityState) {
      log('document', 'Trigger event: Visiblity change')
      debouce(resize, 16)
    }
  }

  function sendTriggerMsg(eventName, event) {
    function isIFrameResizeEnabled(iframeId) {
      return (
        settings[iframeId] &&
        'parent' === settings[iframeId].resizeFrom &&
        settings[iframeId].autoResize &&
        !settings[iframeId].firstRun
      )
    }

    Object.keys(settings).forEach(function (iframeId) {
      if (isIFrameResizeEnabled(iframeId)) {
        trigger(eventName, event, settings[iframeId].iframe, iframeId)
      }
    })
  }

  function setupEventListeners() {
    addEventListener(window, 'message', iFrameListener)

    addEventListener(window, 'resize', function () {
      resizeIFrames('resize')
    })

    addEventListener(document, 'visibilitychange', tabVisible)

    addEventListener(document, '-webkit-visibilitychange', tabVisible)
  }

  function factory() {
    function init(options, element) {
      function chkType() {
        if (!element.tagName) {
          throw new TypeError('Object is not a valid DOM element')
        } else if ('IFRAME' !== element.tagName.toUpperCase()) {
          throw new TypeError(
            'Expected <IFRAME> tag, found <' + element.tagName + '>'
          )
        }
      }

      if (element) {
        chkType()
        setupIFrame(element, options)
        iFrames.push(element)
      }
    }

    function warnDeprecatedOptions(options) {
      if (options && options.enablePublicMethods) {
        warn(
          'enablePublicMethods option has been removed, public methods are now always available in the iFrame'
        )
      }
    }

    var iFrames

    setupRequestAnimationFrame()
    setupEventListeners()

    return function iFrameResizeF(options, target) {
      iFrames = [] // Only return iFrames past in on this call

      warnDeprecatedOptions(options)

      switch (typeof target) {
        case 'undefined':
        case 'string':
          Array.prototype.forEach.call(
            document.querySelectorAll(target || 'iframe'),
            init.bind(undefined, options)
          )
          break

        case 'object':
          init(options, target)
          break

        default:
          throw new TypeError('Unexpected data type (' + typeof target + ')')
      }

      return iFrames
    }
  }

  function createJQueryPublicMethod($) {
    if (!$.fn) {
      info('', 'Unable to bind to jQuery, it is not fully loaded.')
    } else if (!$.fn.iFrameResize) {
      $.fn.iFrameResize = function $iFrameResizeF(options) {
        function init(index, element) {
          setupIFrame(element, options)
        }

        return this.filter('iframe').each(init).end()
      }
    }
  }

  if (window.jQuery) {
    createJQueryPublicMethod(window.jQuery)
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
  window.iFrameResize = window.iFrameResize || factory()
})()


/***/ }),

/***/ "./src/booking/BookingWidgetModal.css":
/*!********************************************!*\
  !*** ./src/booking/BookingWidgetModal.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_BookingWidgetModal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./BookingWidgetModal.css */ "./node_modules/css-loader/dist/cjs.js!./src/booking/BookingWidgetModal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_BookingWidgetModal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_BookingWidgetModal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_BookingWidgetModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_BookingWidgetModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/booking/BookingWidget.ts":
/*!**************************************!*\
  !*** ./src/booking/BookingWidget.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingWidget = void 0;
var iframe_resizer_1 = __webpack_require__(/*! iframe-resizer */ "./modules/iframe-resizer/index.js");
var BookingWidgetAttributes_1 = __webpack_require__(/*! ./BookingWidgetAttributes */ "./src/booking/BookingWidgetAttributes.ts");
__webpack_require__(/*! ./BookingWidgetModal.css */ "./src/booking/BookingWidgetModal.css");
var BookingWidget = /** @class */ (function () {
    function BookingWidget() {
        var _this = this;
        this.resizedIframes = [];
        /* tslint:disable:no-multiline-string */
        this.buttonStyle = "\n    background-color: #0085AD;\n    height: 36px;\n    line-height: 36px;\n    border: none;\n    color: white;\n    padding: 0 16px 0 16px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    border-radius: 2px;\n    font-size: 16px;\n    font-family: sans-serif;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n    font-size: 14px;\n    letter-spacing: 0px;\n    text-transform: uppercase;\n    font-weight: 500;\n    margin: 0px;\n    cursor: pointer;\n    outline: none;\n  "
            .trim()
            .split("\n")
            .map(function (s) { return s.trim(); })
            .join(" ");
        // private baseUrl = "https://localhost:8080";
        this.baseUrl = "https://cloud.caspeco.se";
        this.addModal2Body = function (iframe, sdk, attributes) {
            /* The page needs to have the right charset before loading the widget
            // Set charset to UTF-8 to show the × character as close button
            const metas = window.document.head.querySelectorAll("meta");
            let metaUTF8Exists = false;
            metas.forEach((meta) => {
              if (meta.getAttributeNode("charset")?.value === "UTF-8") {
                metaUTF8Exists = true;
                return;
              }
            });
        
            if (!metaUTF8Exists) {
              const meta = document.createElement("meta");
              meta.setAttribute("charset", "UTF-8");
              window.document.head.appendChild(meta);
            }
            */
            // Close button
            var closeIcon = document.createElement("span");
            closeIcon.className = "closeIcon";
            closeIcon.textContent = "×";
            closeIcon.addEventListener("click", function () { return window.document.body.removeChild(modal); });
            // The main container
            var modal = document.createElement("div");
            modal.className = "caspeco-booking-modal";
            modal.appendChild(closeIcon);
            // Inner container
            var container = document.createElement("div");
            container.className = "caspeco-booking-modal-container";
            // Disregard constant heights set in widget attributes
            attributes.height = "auto";
            // Add the iframe to resizer
            var iframeResizeOptions = _this.getIFrameResizeOptions(attributes, sdk);
            _this.resizedIframes.push(iframe_resizer_1.iframeResizer(iframeResizeOptions, iframe)[0]);
            // Wrap it and add to the body
            container.appendChild(iframe);
            modal.appendChild(container);
            window.document.body.appendChild(modal);
        };
    }
    Object.defineProperty(BookingWidget, "INSTANCE", {
        // private baseUrl = "https://webplatform-trackingdev.azurewebsites.net";
        get: function () {
            return this.instance || (this.instance = new BookingWidget());
        },
        enumerable: false,
        configurable: true
    });
    BookingWidget.prototype.init = function (sdk, forceInit) {
        var _this = this;
        this.containers = sdk.window.document.getElementsByClassName("caspeco-booking");
        /* tslint:disable:prefer-for-of */
        for (var i = 0; i < this.containers.length; i += 1) {
            var container = this.containers[i];
            if (container.firstChild !== null && container.firstChild.nodeName === "iframe") {
                continue;
            }
            if (forceInit !== undefined) {
                var attributes = new BookingWidgetAttributes_1.BookingWidgetAttributes(container);
                if (attributes.system === attributes.system && forceInit.unitId === attributes.unitId)
                    this.initElement(container, sdk, true);
            }
            else {
                this.initElement(container, sdk);
            }
        }
        var widgets = sdk.window.document.getElementsByClassName("caspeco-booking-widget");
        var _loop_1 = function (i) {
            var attributes = new BookingWidgetAttributes_1.BookingWidgetAttributes(widgets[i]);
            var iframe = this_1.getIFrame(sdk.window, attributes);
            widgets[i].addEventListener("click", function () { return _this.addModal2Body(iframe, sdk, attributes); });
        };
        var this_1 = this;
        for (var i = 0; i < widgets.length; i += 1) {
            _loop_1(i);
        }
    };
    BookingWidget.prototype.destroy = function () {
        for (var iframeIndex = 0; iframeIndex < this.resizedIframes.length; iframeIndex += 1) {
            this.resizedIframes[iframeIndex].iFrameResizer.close();
        }
        this.resizedIframes = [];
    };
    BookingWidget.prototype.initElement = function (container, sdk, forceInit) {
        var _this = this;
        var attributes = new BookingWidgetAttributes_1.BookingWidgetAttributes(container);
        if (attributes.button) {
            var button = document.createElement("button");
            /* tslint:disable:no-inner-html */
            button.innerHTML = attributes.buttonText;
            button.setAttribute("style", this.buttonStyle);
            button.onclick = function () {
                window.open(_this.getURL(attributes));
            };
            container.appendChild(button);
            return;
        }
        if (forceInit || attributes.autoLoading) {
            var iframe = this.getIFrame(sdk.window, attributes);
            iframe = container.appendChild(iframe);
            var iframeResizeOptions = this.getIFrameResizeOptions(attributes, sdk);
            this.resizedIframes.push(iframe_resizer_1.iframeResizer(iframeResizeOptions, iframe)[0]);
        }
    };
    BookingWidget.prototype.getURL = function (attr) {
        var src = this.baseUrl + "/public/webBooking?isWebBooking=true";
        src += "&system=" + attr.system + "&unitId=" + attr.unitId + "&lang=" + attr.lang + "&height=" + attr.height;
        if (!attr.button) {
            src += "&inIFrame=true";
        }
        if (attr.autoScroll) {
            src += "&autoScroll=true";
        }
        if (attr.sectionIds) {
            src += "&sectionIds=" + attr.sectionIds.join(",");
        }
        if (attr.advanced) {
            src += "&advanced=true";
        }
        if (attr.onlineorder) {
            src += "&onlineorder=true";
        }
        if (attr.colorTheme) {
            src += "&colorTheme=true";
        }
        if (attr.maitres) {
            src += "&maitres=true";
        }
        src += "&hostURL=" + document.location.href;
        return src;
    };
    BookingWidget.prototype.getIFrame = function (w, attr) {
        var iframe = w.document.createElement("iframe");
        var ua = window.navigator.userAgent;
        if (ua.indexOf("MSIE ") > 0 || ua.indexOf("Trident/") > 0) {
            iframe.scrolling = "yes";
        }
        else {
            iframe.scrolling = "no";
        }
        iframe.setAttribute("border", "0");
        iframe.style.width = "1px";
        iframe.style.minWidth = "100%";
        iframe.style.border = "none";
        iframe.style.backgroundColor = "transparent";
        iframe.src = this.getURL(attr);
        return iframe;
    };
    BookingWidget.prototype.getIFrameResizeOptions = function (attr, sdk) {
        var _this = this;
        var heightIsAuto = attr.height === "auto";
        var widthIsAuto = attr.width === "auto";
        var minWidth = 320;
        var minHeight = 550;
        /* tslint:disable:no-http-string */
        return {
            onInit: function (iframe) {
                iframe.iFrameResizer.sendMessage({
                    inited: true,
                    target: document.location.protocol + "//" + document.location.hostname,
                }, _this.baseUrl);
                if (widthIsAuto) {
                    iframe.style.width = "100%";
                }
            },
            onMessage: function (data) {
                console.log("Här är ett event");
                if (data.message === "sendColorTheme" && attr.colorTheme) {
                    data.iframe.iFrameResizer.sendMessage({ colorTheme: attr.colorTheme }, _this.baseUrl);
                }
                else if (data.message.eventType && data.message.eventType === "bookingEvent") {
                    data.iframe.iFrameResizer.sendMessage("bookingEvent", data.message.event, data.message.payload);
                }
            },
            checkOrigin: [this.baseUrl],
            scrolling: !heightIsAuto,
            bodyBackground: "rgba(0,0,0,0)",
            heightCalculationMethod: "taggedElement",
            bodyMargin: 3,
            minWidth: Math.max(minWidth, widthIsAuto ? 0 : attr.width),
            maxWidth: widthIsAuto ? Infinity : Math.max(attr.width, minWidth),
            minHeight: Math.max(minHeight, heightIsAuto ? 0 : attr.height),
            maxHeight: heightIsAuto ? Infinity : Math.max(attr.height, minHeight),
        };
    };
    return BookingWidget;
}());
exports.BookingWidget = BookingWidget;


/***/ }),

/***/ "./src/booking/BookingWidgetAttributes.ts":
/*!************************************************!*\
  !*** ./src/booking/BookingWidgetAttributes.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingWidgetAttributes = void 0;
var BookingWidgetAttributes = /** @class */ (function () {
    function BookingWidgetAttributes(elem) {
        var _this = this;
        this.system = null;
        this.unitId = null;
        this.sectionIds = [];
        this.width = "auto";
        this.height = "auto";
        this.colorTheme = null;
        this.lang = "sv-SE";
        this.autoScroll = true;
        this.advanced = true;
        this.button = false;
        this.buttonText = "Boka";
        this.onlineorder = false;
        this.autoLoading = true;
        this.supportedLangs = ["sv-SE", "en-US", "en-GB", "nb-NO", "nl-BE", "fr-BE", "ru-RU", "et-EE", "es-ES"];
        ["width", "height", "unitId"].forEach(function (key) {
            var strVal = elem.getAttribute("data-" + key);
            if (strVal === null) {
                return true;
            }
            var val = parseInt(strVal, 10);
            if (isNaN(val)) {
                return true;
            }
            _this[key] = val;
            return true;
        });
        var lang = elem.getAttribute("data-lang");
        if (lang) {
            lang = this.upperCaseICULocale(lang);
        }
        if (lang && this.supportedLangs.indexOf(lang) > -1) {
            this.lang = lang;
        }
        this.system = elem.getAttribute("data-system");
        var autoScroll = elem.getAttribute("data-autoScroll");
        this.autoScroll = !!autoScroll && autoScroll === "true";
        var advanced = elem.getAttribute("data-advanced");
        this.advanced = !!advanced && advanced === "true";
        var onlineorder = elem.getAttribute("data-onlineorder");
        this.onlineorder = !!onlineorder && onlineorder === "true";
        var button = elem.getAttribute("data-button");
        this.button = !!button && button === "true";
        var buttonText = elem.getAttribute("data-buttonText");
        this.buttonText = buttonText || this.buttonText;
        var sectionIds = elem.getAttribute("data-sectionIds");
        if (sectionIds) {
            this.sectionIds = sectionIds.split(",").map(function (id) { return parseInt(id, 10); });
        }
        var colorTheme = elem.getAttribute("data-colorTheme");
        if (colorTheme) {
            this.colorTheme = JSON.parse(colorTheme);
        }
        var maitres = elem.getAttribute("data-maitres");
        this.maitres = !!maitres && maitres === "true";
        var autoLoading = elem.getAttribute("data-autoLoading");
        if (autoLoading)
            this.autoLoading = autoLoading === "true";
        this.validate();
    }
    BookingWidgetAttributes.prototype.upperCaseICULocale = function (iculocale) {
        var parts = iculocale.split("-");
        if (parts.length < 2)
            throw new Error("Invalid ICU Locale: " + iculocale);
        var icuLocale = parts[0] + "-" + parts[1].toUpperCase();
        if (this.supportedLangs.indexOf(icuLocale) > -1) {
            return icuLocale;
        }
        else {
            return null;
        }
    };
    BookingWidgetAttributes.prototype.validate = function () {
        var errors = [];
        if (this.unitId === undefined) {
            errors.push("No unitId provided");
        }
        if (this.system === undefined) {
            errors.push("No system provided");
        }
        if (errors.length > 0) {
            throw new Error(errors.join("\n"));
        }
        return true;
    };
    return BookingWidgetAttributes;
}());
exports.BookingWidgetAttributes = BookingWidgetAttributes;


/***/ }),

/***/ "./src/booking/BookingWidgetBootstrap.ts":
/*!***********************************************!*\
  !*** ./src/booking/BookingWidgetBootstrap.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingWidgetBootstrap = void 0;
var BookingWidget_1 = __webpack_require__(/*! ./BookingWidget */ "./src/booking/BookingWidget.ts");
var BookingWidgetBootstrap = /** @class */ (function () {
    function BookingWidgetBootstrap(sdk) {
        this.sdk = sdk;
    }
    BookingWidgetBootstrap.INSTANCE = function (sdk) {
        return this.instance || (this.instance = new this(sdk));
    };
    BookingWidgetBootstrap.prototype.detect = function () {
        var el = this.sdk.window.document.querySelectorAll(".caspeco-booking,.caspeco-booking-widget");
        return el.length > 0;
    };
    // the sdk is distributed with the BookingWidget per default at the moment
    // tslint:disable:no-reserved-keywords
    BookingWidgetBootstrap.prototype.get = function () {
        return BookingWidget_1.BookingWidget.INSTANCE;
    };
    BookingWidgetBootstrap.prototype.load = function () {
        throw new Error("BookingWidgetBootstrap->load is not implemented");
        // return new Promise((resolve, reject) => {
        //   try {
        //     resolve(new BookingWidget());
        //   } catch (ex) {
        //     reject(ex);
        //   }
        // });
    };
    return BookingWidgetBootstrap;
}());
exports.BookingWidgetBootstrap = BookingWidgetBootstrap;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/sdk.ts ***!
  \********************/

/*!
 * Copyright (c) 2018-present, Caspeco AB. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Caspeco.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SDK = void 0;
var BookingWidgetBootstrap_1 = __webpack_require__(/*! ./booking/BookingWidgetBootstrap */ "./src/booking/BookingWidgetBootstrap.ts");
var version = "1.4.0";
/* tslint:disable:no-console */
/* tslint:disable:export-name */
var SDK = /** @class */ (function () {
    function SDK(w, name) {
        var _this = this;
        this.modules = [];
        this.moduleBootstraps = [];
        this.eventListeners = {};
        this.onMessage = function (event) {
            console.log(event);
            switch (event.data) {
                case "resetHeight":
                    _this.resetHeight();
                    break;
                case "scroll2top":
                    _this.scroll2Top();
                    break;
                default:
                    break;
            }
        };
        this.addEventListener = function (event, handler) {
            if (_this.eventListeners[event]) {
                _this.eventListeners[event].push(handler);
            }
            else {
                _this.eventListeners[event] = [handler];
            }
        };
        this.reInit = function () {
            _this.destroy();
            _this.init();
        };
        this.forceInit = function (forceInitInfo) {
            _this.destroy();
            _this.init(forceInitInfo);
        };
        this.getVersion = function () { return version; };
        this.scroll2Top = function () {
            var container = window.document.getElementsByClassName("caspeco-booking").item(0);
            var scrollTop = document.documentElement.scrollTop;
            if (container)
                _this.window.scrollTo({ top: container.getBoundingClientRect().top + scrollTop, behavior: "smooth" });
        };
        this.resetHeight = function () {
            var container = window.document.querySelectorAll(".caspeco-booking");
            if (container) {
                container.forEach(function (item) {
                    var iframe = item.getElementsByTagName("iframe").item(0);
                    if (iframe)
                        iframe.style.height = "100%";
                });
            }
        };
        this.window = w;
        this.window.addEventListener("message", this.onMessage, false);
        /* tslint:disable:no-any */
        if (w[name] === undefined || (w[name] !== undefined && w[name].reInit === undefined)) {
            if (w[name] !== undefined) {
                this.initFunc = w[name];
                this.initFunc.addEventListener = this.addEventListener;
                this.initFunc.reInit = this.reInit;
                this.initFunc.forceInit = this.forceInit;
                this.initFunc.getVersion = this.getVersion;
                this.initFunc.scroll2Top = this.scroll2Top;
                this.initFunc.resetHeight = this.resetHeight;
                var q = this.initFunc.q;
                var t = this.initFunc.t;
                w[name] = this.initFunc;
                if (q !== undefined) {
                    // execute callbacks, this should maybe be done as a callback to init()?
                    q.forEach(function (c) {
                        var len = c.length;
                        for (var i = 0; i < len; i += 1) {
                            c[i]();
                        }
                    });
                }
            }
            else {
                w[name] = this;
            }
        }
        else if (w[name].reInit !== undefined) {
            return;
        }
        this.window = w;
        this.init();
        // this.initModules();
    }
    SDK.prototype.emit = function (sdkEvent, event, payload) {
        if (this.eventListeners[sdkEvent]) {
            this.eventListeners[sdkEvent].forEach(function (handler) { return handler(event, payload); });
        }
    };
    SDK.prototype.init = function (forceInit) {
        var bookingWidgetBootstrap = BookingWidgetBootstrap_1.BookingWidgetBootstrap.INSTANCE(this);
        if (bookingWidgetBootstrap.detect()) {
            var bookingWidget = bookingWidgetBootstrap.get();
            bookingWidget.init(this, forceInit);
            this.modules.push(bookingWidget);
        }
    };
    SDK.prototype.destroy = function () {
        this.modules.forEach(function (m) { return m.destroy(); });
        this.modules = [];
    };
    return SDK;
}());
exports.SDK = SDK;
try {
    /* tslint:disable:no-unused-expression */
    new SDK(window, window.CaspecoSDKObject || "ca");
}
catch (ex) {
    console.log(ex);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLFlBQVk7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbURBQW1EO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxXQUFXO0FBQ1gsK0JBQStCLG1CQUFPLENBQUMsaUZBQWtDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsNEVBQTRFO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsaUNBQWlDO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0c2RrLy4vbW9kdWxlcy9pZnJhbWUtcmVzaXplci9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0c2RrLy4vbW9kdWxlcy9pZnJhbWUtcmVzaXplci9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0c2RrLy4vc3JjL2Jvb2tpbmcvQm9va2luZ1dpZGdldE1vZGFsLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0c2RrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0c2RrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNkay8uL25vZGVfbW9kdWxlcy9pZnJhbWUtcmVzaXplci9qcy9pZnJhbWVSZXNpemVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRzZGsvLi9zcmMvYm9va2luZy9Cb29raW5nV2lkZ2V0TW9kYWwuY3NzPzlkMmIiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNkay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0c2RrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0c2RrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRzZGsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNkay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRzZGsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0c2RrLy4vc3JjL2Jvb2tpbmcvQm9va2luZ1dpZGdldC50cyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0c2RrLy4vc3JjL2Jvb2tpbmcvQm9va2luZ1dpZGdldEF0dHJpYnV0ZXMudHMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNkay8uL3NyYy9ib29raW5nL0Jvb2tpbmdXaWRnZXRCb290c3RyYXAudHMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNkay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0c2RrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHRzZGsvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHRzZGsvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0c2RrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNkay8uL3NyYy9zZGsudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9qc1wiKTtcclxuIiwiaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICBleHBvcnRzLmlmcmFtZVJlc2l6ZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lmcmFtZS1yZXNpemVyL2pzL2lmcmFtZVJlc2l6ZXIubWluXCIpO1xyXG59IGVsc2Uge1xyXG4gIGV4cG9ydHMuaWZyYW1lUmVzaXplciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaWZyYW1lLXJlc2l6ZXIvanMvaWZyYW1lUmVzaXplclwiKTtcclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYXNwZWNvLWJvb2tpbmctbW9kYWwge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICBwYWRkaW5nOiAxMHZ3IDA7XFxyXFxufVxcclxcblxcclxcbi5jYXNwZWNvLWJvb2tpbmctbW9kYWwtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCAyNXZ3O1xcclxcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xcclxcbiAgYm94LXNoYWRvdzogZ3JleSAtNXB4IDVweCA1cHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VJY29uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogLTAuNXJlbTtcXHJcXG4gIHJpZ2h0OiAwLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNjAwcHgpIHtcXHJcXG4gIC5jYXNwZWNvLWJvb2tpbmctbW9kYWwtY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiAwIDF2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jbG9zZUljb24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogLTE3cHg7XFxyXFxuICAgIHJpZ2h0OiAtM3B4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5MDBweCkge1xcclxcbiAgLmNhc3BlY28tYm9va2luZy1tb2RhbC1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDAgNXZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhc3BlY28tYm9va2luZy1tb2RhbCB7XFxyXFxuICAgIHBhZGRpbmc6IDV2aCAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYm9va2luZy9Cb29raW5nV2lkZ2V0TW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1Isb0NBQW9DO0VBQ3BDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYXNwZWNvLWJvb2tpbmctbW9kYWwge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICBwYWRkaW5nOiAxMHZ3IDA7XFxyXFxufVxcclxcblxcclxcbi5jYXNwZWNvLWJvb2tpbmctbW9kYWwtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCAyNXZ3O1xcclxcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xcclxcbiAgYm94LXNoYWRvdzogZ3JleSAtNXB4IDVweCA1cHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VJY29uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogLTAuNXJlbTtcXHJcXG4gIHJpZ2h0OiAwLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNjAwcHgpIHtcXHJcXG4gIC5jYXNwZWNvLWJvb2tpbmctbW9kYWwtY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiAwIDF2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jbG9zZUljb24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogLTE3cHg7XFxyXFxuICAgIHJpZ2h0OiAtM3B4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5MDBweCkge1xcclxcbiAgLmNhc3BlY28tYm9va2luZy1tb2RhbC1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDAgNXZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhc3BlY28tYm9va2luZy1tb2RhbCB7XFxyXFxuICAgIHBhZGRpbmc6IDV2aCAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLypcbiAqIEZpbGU6IGlmcmFtZVJlc2l6ZXIuanNcbiAqIERlc2M6IEZvcmNlIGlmcmFtZXMgdG8gc2l6ZSB0byBjb250ZW50LlxuICogUmVxdWlyZXM6IGlmcmFtZVJlc2l6ZXIuY29udGVudFdpbmRvdy5qcyB0byBiZSBsb2FkZWQgaW50byB0aGUgdGFyZ2V0IGZyYW1lLlxuICogRG9jOiBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRqYnJhZHNoYXcvaWZyYW1lLXJlc2l6ZXJcbiAqIEF1dGhvcjogRGF2aWQgSi4gQnJhZHNoYXcgLSBkYXZlQGJyYWRzaGF3Lm5ldFxuICogQ29udHJpYnV0b3I6IEp1cmUgTWF2IC0ganVyZS5tYXZAZ21haWwuY29tXG4gKiBDb250cmlidXRvcjogUmVlZCBEYWRvdW5lIC0gcmVlZEBkYWRvdW5lLmNvbVxuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzb25hcmpzL2NvZ25pdGl2ZS1jb21wbGV4aXR5LCBuby1zaGFkb3ctcmVzdHJpY3RlZC1uYW1lc1xuOyhmdW5jdGlvbiAodW5kZWZpbmVkKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIC8vIGRvbid0IHJ1biBmb3Igc2VydmVyIHNpZGUgcmVuZGVyXG5cbiAgdmFyIGNvdW50ID0gMCxcbiAgICBsb2dFbmFibGVkID0gZmFsc2UsXG4gICAgaGlkZGVuQ2hlY2tFbmFibGVkID0gZmFsc2UsXG4gICAgbXNnSGVhZGVyID0gJ21lc3NhZ2UnLFxuICAgIG1zZ0hlYWRlckxlbiA9IG1zZ0hlYWRlci5sZW5ndGgsXG4gICAgbXNnSWQgPSAnW2lGcmFtZVNpemVyXScsIC8vIE11c3QgbWF0Y2ggaWZyYW1lIG1zZyBJRFxuICAgIG1zZ0lkTGVuID0gbXNnSWQubGVuZ3RoLFxuICAgIHBhZ2VQb3NpdGlvbiA9IG51bGwsXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSxcbiAgICByZXNldFJlcXVpcmVkTWV0aG9kcyA9IHtcbiAgICAgIG1heDogMSxcbiAgICAgIHNjcm9sbDogMSxcbiAgICAgIGJvZHlTY3JvbGw6IDEsXG4gICAgICBkb2N1bWVudEVsZW1lbnRTY3JvbGw6IDFcbiAgICB9LFxuICAgIHNldHRpbmdzID0ge30sXG4gICAgdGltZXIgPSBudWxsLFxuICAgIGRlZmF1bHRzID0ge1xuICAgICAgYXV0b1Jlc2l6ZTogdHJ1ZSxcbiAgICAgIGJvZHlCYWNrZ3JvdW5kOiBudWxsLFxuICAgICAgYm9keU1hcmdpbjogbnVsbCxcbiAgICAgIGJvZHlNYXJnaW5WMTogOCxcbiAgICAgIGJvZHlQYWRkaW5nOiBudWxsLFxuICAgICAgY2hlY2tPcmlnaW46IHRydWUsXG4gICAgICBpblBhZ2VMaW5rczogZmFsc2UsXG4gICAgICBlbmFibGVQdWJsaWNNZXRob2RzOiB0cnVlLFxuICAgICAgaGVpZ2h0Q2FsY3VsYXRpb25NZXRob2Q6ICdib2R5T2Zmc2V0JyxcbiAgICAgIGlkOiAnaUZyYW1lUmVzaXplcicsXG4gICAgICBpbnRlcnZhbDogMzIsXG4gICAgICBsb2c6IGZhbHNlLFxuICAgICAgbWF4SGVpZ2h0OiBJbmZpbml0eSxcbiAgICAgIG1heFdpZHRoOiBJbmZpbml0eSxcbiAgICAgIG1pbkhlaWdodDogMCxcbiAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgcmVzaXplRnJvbTogJ3BhcmVudCcsXG4gICAgICBzY3JvbGxpbmc6IGZhbHNlLFxuICAgICAgc2l6ZUhlaWdodDogdHJ1ZSxcbiAgICAgIHNpemVXaWR0aDogZmFsc2UsXG4gICAgICB3YXJuaW5nVGltZW91dDogNTAwMCxcbiAgICAgIHRvbGVyYW5jZTogMCxcbiAgICAgIHdpZHRoQ2FsY3VsYXRpb25NZXRob2Q6ICdzY3JvbGwnLFxuICAgICAgb25DbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSxcbiAgICAgIG9uQ2xvc2VkOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge30sXG4gICAgICBvbk1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2Fybignb25NZXNzYWdlIGZ1bmN0aW9uIG5vdCBkZWZpbmVkJylcbiAgICAgIH0sXG4gICAgICBvblJlc2l6ZWQ6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgb25TY3JvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgZnVuY3Rpb24gZ2V0TXV0YXRpb25PYnNlcnZlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgfHxcbiAgICAgIHdpbmRvdy5XZWJLaXRNdXRhdGlvbk9ic2VydmVyIHx8XG4gICAgICB3aW5kb3cuTW96TXV0YXRpb25PYnNlcnZlclxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZWwsIGV2dCwgZnVuYykge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBmdW5jLCBmYWxzZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsIGV2dCwgZnVuYykge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBmdW5jLCBmYWxzZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwUmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkge1xuICAgIHZhciB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0JywgJ28nLCAnbXMnXVxuICAgIHZhciB4XG5cbiAgICAvLyBSZW1vdmUgdmVuZG9yIHByZWZpeGluZyBpZiBwcmVmaXhlZCBhbmQgYnJlYWsgZWFybHkgaWYgbm90XG4gICAgZm9yICh4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICFyZXF1ZXN0QW5pbWF0aW9uRnJhbWU7IHggKz0gMSkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ11cbiAgICB9XG5cbiAgICBpZiAoIXJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgbG9nKCdzZXR1cCcsICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgbm90IHN1cHBvcnRlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZpcmVmb3ggZXh0ZW5zaW9uIGNvbnRlbnQtc2NyaXB0cyBoYXZlIGEgZ2xvYmFsVGhpcyBvYmplY3QgdGhhdCBpcyBub3QgdGhlIHNhbWUgYXMgd2luZG93LlxuICAgICAgLy8gQmluZGluZyBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCB0byB3aW5kb3cgYWxsb3dzIHRoZSBmdW5jdGlvbiB0byB3b3JrIGFuZCBwcmV2ZW50cyBlcnJvcnNcbiAgICAgIC8vIGJlaW5nIHRocm93biB3aGVuIHJ1biBpbiB0aGF0IGNvbnRleHQsIGFuZCBzaG91bGQgYmUgYSBuby1vcCBpbiBldmVyeSBvdGhlciBjb250ZXh0LlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE15SUQoaWZyYW1lSWQpIHtcbiAgICB2YXIgcmV0U3RyID0gJ0hvc3QgcGFnZTogJyArIGlmcmFtZUlkXG5cbiAgICBpZiAod2luZG93LnRvcCAhPT0gd2luZG93LnNlbGYpIHtcbiAgICAgIGlmICh3aW5kb3cucGFyZW50SUZyYW1lICYmIHdpbmRvdy5wYXJlbnRJRnJhbWUuZ2V0SWQpIHtcbiAgICAgICAgcmV0U3RyID0gd2luZG93LnBhcmVudElGcmFtZS5nZXRJZCgpICsgJzogJyArIGlmcmFtZUlkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXRTdHIgPSAnTmVzdGVkIGhvc3QgcGFnZTogJyArIGlmcmFtZUlkXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldFN0clxuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0TG9nSGVhZGVyKGlmcmFtZUlkKSB7XG4gICAgcmV0dXJuIG1zZ0lkICsgJ1snICsgZ2V0TXlJRChpZnJhbWVJZCkgKyAnXSdcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTG9nRW5hYmxlZChpZnJhbWVJZCkge1xuICAgIHJldHVybiBzZXR0aW5nc1tpZnJhbWVJZF0gPyBzZXR0aW5nc1tpZnJhbWVJZF0ubG9nIDogbG9nRW5hYmxlZFxuICB9XG5cbiAgZnVuY3Rpb24gbG9nKGlmcmFtZUlkLCBtc2cpIHtcbiAgICBvdXRwdXQoJ2xvZycsIGlmcmFtZUlkLCBtc2csIGlzTG9nRW5hYmxlZChpZnJhbWVJZCkpXG4gIH1cblxuICBmdW5jdGlvbiBpbmZvKGlmcmFtZUlkLCBtc2cpIHtcbiAgICBvdXRwdXQoJ2luZm8nLCBpZnJhbWVJZCwgbXNnLCBpc0xvZ0VuYWJsZWQoaWZyYW1lSWQpKVxuICB9XG5cbiAgZnVuY3Rpb24gd2FybihpZnJhbWVJZCwgbXNnKSB7XG4gICAgb3V0cHV0KCd3YXJuJywgaWZyYW1lSWQsIG1zZywgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG91dHB1dCh0eXBlLCBpZnJhbWVJZCwgbXNnLCBlbmFibGVkKSB7XG4gICAgaWYgKHRydWUgPT09IGVuYWJsZWQgJiYgJ29iamVjdCcgPT09IHR5cGVvZiB3aW5kb3cuY29uc29sZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGVbdHlwZV0oZm9ybWF0TG9nSGVhZGVyKGlmcmFtZUlkKSwgbXNnKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlGcmFtZUxpc3RlbmVyKGV2ZW50KSB7XG4gICAgZnVuY3Rpb24gcmVzaXplSUZyYW1lKCkge1xuICAgICAgZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgICBzZXRTaXplKG1lc3NhZ2VEYXRhKVxuICAgICAgICBzZXRQYWdlUG9zaXRpb24oaWZyYW1lSWQpXG4gICAgICAgIG9uKCdvblJlc2l6ZWQnLCBtZXNzYWdlRGF0YSlcbiAgICAgIH1cblxuICAgICAgZW5zdXJlSW5SYW5nZSgnSGVpZ2h0JylcbiAgICAgIGVuc3VyZUluUmFuZ2UoJ1dpZHRoJylcblxuICAgICAgc3luY1Jlc2l6ZShyZXNpemUsIG1lc3NhZ2VEYXRhLCAnaW5pdCcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc01zZygpIHtcbiAgICAgIHZhciBkYXRhID0gbXNnLnN1YnN0cihtc2dJZExlbikuc3BsaXQoJzonKVxuICAgICAgdmFyIGhlaWdodCA9IGRhdGFbMV0gPyBwYXJzZUludChkYXRhWzFdLCAxMCkgOiAwXG4gICAgICB2YXIgaWZyYW1lID0gc2V0dGluZ3NbZGF0YVswXV0gJiYgc2V0dGluZ3NbZGF0YVswXV0uaWZyYW1lXG4gICAgICB2YXIgY29tcFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShpZnJhbWUpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlmcmFtZTogaWZyYW1lLFxuICAgICAgICBpZDogZGF0YVswXSxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKyBnZXRQYWRkaW5nRW5kcyhjb21wU3R5bGUpICsgZ2V0Qm9yZGVyRW5kcyhjb21wU3R5bGUpLFxuICAgICAgICB3aWR0aDogZGF0YVsyXSxcbiAgICAgICAgdHlwZTogZGF0YVszXVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBhZGRpbmdFbmRzKGNvbXBTdHlsZSkge1xuICAgICAgaWYgKGNvbXBTdHlsZS5ib3hTaXppbmcgIT09ICdib3JkZXItYm94Jykge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfVxuICAgICAgdmFyIHRvcCA9IGNvbXBTdHlsZS5wYWRkaW5nVG9wID8gcGFyc2VJbnQoY29tcFN0eWxlLnBhZGRpbmdUb3AsIDEwKSA6IDBcbiAgICAgIHZhciBib3QgPSBjb21wU3R5bGUucGFkZGluZ0JvdHRvbVxuICAgICAgICA/IHBhcnNlSW50KGNvbXBTdHlsZS5wYWRkaW5nQm90dG9tLCAxMClcbiAgICAgICAgOiAwXG4gICAgICByZXR1cm4gdG9wICsgYm90XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9yZGVyRW5kcyhjb21wU3R5bGUpIHtcbiAgICAgIGlmIChjb21wU3R5bGUuYm94U2l6aW5nICE9PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIHZhciB0b3AgPSBjb21wU3R5bGUuYm9yZGVyVG9wV2lkdGhcbiAgICAgICAgPyBwYXJzZUludChjb21wU3R5bGUuYm9yZGVyVG9wV2lkdGgsIDEwKVxuICAgICAgICA6IDBcbiAgICAgIHZhciBib3QgPSBjb21wU3R5bGUuYm9yZGVyQm90dG9tV2lkdGhcbiAgICAgICAgPyBwYXJzZUludChjb21wU3R5bGUuYm9yZGVyQm90dG9tV2lkdGgsIDEwKVxuICAgICAgICA6IDBcbiAgICAgIHJldHVybiB0b3AgKyBib3RcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbnN1cmVJblJhbmdlKERpbWVuc2lvbikge1xuICAgICAgdmFyIG1heCA9IE51bWJlcihzZXR0aW5nc1tpZnJhbWVJZF1bJ21heCcgKyBEaW1lbnNpb25dKSxcbiAgICAgICAgbWluID0gTnVtYmVyKHNldHRpbmdzW2lmcmFtZUlkXVsnbWluJyArIERpbWVuc2lvbl0pLFxuICAgICAgICBkaW1lbnNpb24gPSBEaW1lbnNpb24udG9Mb3dlckNhc2UoKSxcbiAgICAgICAgc2l6ZSA9IE51bWJlcihtZXNzYWdlRGF0YVtkaW1lbnNpb25dKVxuXG4gICAgICBsb2coaWZyYW1lSWQsICdDaGVja2luZyAnICsgZGltZW5zaW9uICsgJyBpcyBpbiByYW5nZSAnICsgbWluICsgJy0nICsgbWF4KVxuXG4gICAgICBpZiAoc2l6ZSA8IG1pbikge1xuICAgICAgICBzaXplID0gbWluXG4gICAgICAgIGxvZyhpZnJhbWVJZCwgJ1NldCAnICsgZGltZW5zaW9uICsgJyB0byBtaW4gdmFsdWUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2l6ZSA+IG1heCkge1xuICAgICAgICBzaXplID0gbWF4XG4gICAgICAgIGxvZyhpZnJhbWVJZCwgJ1NldCAnICsgZGltZW5zaW9uICsgJyB0byBtYXggdmFsdWUnKVxuICAgICAgfVxuXG4gICAgICBtZXNzYWdlRGF0YVtkaW1lbnNpb25dID0gJycgKyBzaXplXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNNZXNzYWdlRnJvbUlGcmFtZSgpIHtcbiAgICAgIGZ1bmN0aW9uIGNoZWNrQWxsb3dlZE9yaWdpbigpIHtcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tMaXN0KCkge1xuICAgICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgIHJldENvZGUgPSBmYWxzZVxuXG4gICAgICAgICAgbG9nKFxuICAgICAgICAgICAgaWZyYW1lSWQsXG4gICAgICAgICAgICAnQ2hlY2tpbmcgY29ubmVjdGlvbiBpcyBmcm9tIGFsbG93ZWQgbGlzdCBvZiBvcmlnaW5zOiAnICtcbiAgICAgICAgICAgICAgY2hlY2tPcmlnaW5cbiAgICAgICAgICApXG5cbiAgICAgICAgICBmb3IgKDsgaSA8IGNoZWNrT3JpZ2luLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tPcmlnaW5baV0gPT09IG9yaWdpbikge1xuICAgICAgICAgICAgICByZXRDb2RlID0gdHJ1ZVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmV0Q29kZVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tTaW5nbGUoKSB7XG4gICAgICAgICAgdmFyIHJlbW90ZUhvc3QgPSBzZXR0aW5nc1tpZnJhbWVJZF0gJiYgc2V0dGluZ3NbaWZyYW1lSWRdLnJlbW90ZUhvc3RcbiAgICAgICAgICBsb2coaWZyYW1lSWQsICdDaGVja2luZyBjb25uZWN0aW9uIGlzIGZyb206ICcgKyByZW1vdGVIb3N0KVxuICAgICAgICAgIHJldHVybiBvcmlnaW4gPT09IHJlbW90ZUhvc3RcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGVja09yaWdpbi5jb25zdHJ1Y3RvciA9PT0gQXJyYXkgPyBjaGVja0xpc3QoKSA6IGNoZWNrU2luZ2xlKClcbiAgICAgIH1cblxuICAgICAgdmFyIG9yaWdpbiA9IGV2ZW50Lm9yaWdpbixcbiAgICAgICAgY2hlY2tPcmlnaW4gPSBzZXR0aW5nc1tpZnJhbWVJZF0gJiYgc2V0dGluZ3NbaWZyYW1lSWRdLmNoZWNrT3JpZ2luXG5cbiAgICAgIGlmIChjaGVja09yaWdpbiAmJiAnJyArIG9yaWdpbiAhPT0gJ251bGwnICYmICFjaGVja0FsbG93ZWRPcmlnaW4oKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1VuZXhwZWN0ZWQgbWVzc2FnZSByZWNlaXZlZCBmcm9tOiAnICtcbiAgICAgICAgICAgIG9yaWdpbiArXG4gICAgICAgICAgICAnIGZvciAnICtcbiAgICAgICAgICAgIG1lc3NhZ2VEYXRhLmlmcmFtZS5pZCArXG4gICAgICAgICAgICAnLiBNZXNzYWdlIHdhczogJyArXG4gICAgICAgICAgICBldmVudC5kYXRhICtcbiAgICAgICAgICAgICcuIFRoaXMgZXJyb3IgY2FuIGJlIGRpc2FibGVkIGJ5IHNldHRpbmcgdGhlIGNoZWNrT3JpZ2luOiBmYWxzZSBvcHRpb24gb3IgYnkgcHJvdmlkaW5nIG9mIGFycmF5IG9mIHRydXN0ZWQgZG9tYWlucy4nXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc01lc3NhZ2VGb3JVcygpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIG1zZ0lkID09PSAoJycgKyBtc2cpLnN1YnN0cigwLCBtc2dJZExlbikgJiZcbiAgICAgICAgbXNnLnN1YnN0cihtc2dJZExlbikuc3BsaXQoJzonKVswXSBpbiBzZXR0aW5nc1xuICAgICAgKSAvLyAnJytQcm90ZWN0cyBhZ2FpbnN0IG5vbi1zdHJpbmcgbXNnXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNNZXNzYWdlRnJvbU1ldGFQYXJlbnQoKSB7XG4gICAgICAvLyBUZXN0IGlmIHRoaXMgbWVzc2FnZSBpcyBmcm9tIGEgcGFyZW50IGFib3ZlIHVzLiBUaGlzIGlzIGFuIHVnbHkgdGVzdCwgaG93ZXZlciwgdXBkYXRpbmdcbiAgICAgIC8vIHRoZSBtZXNzYWdlIGZvcm1hdCB3b3VsZCBicmVhayBiYWNrd2FyZHMgY29tcGF0aWJpdHkuXG4gICAgICB2YXIgcmV0Q29kZSA9IG1lc3NhZ2VEYXRhLnR5cGUgaW4geyB0cnVlOiAxLCBmYWxzZTogMSwgdW5kZWZpbmVkOiAxIH1cblxuICAgICAgaWYgKHJldENvZGUpIHtcbiAgICAgICAgbG9nKGlmcmFtZUlkLCAnSWdub3JpbmcgaW5pdCBtZXNzYWdlIGZyb20gbWV0YSBwYXJlbnQgcGFnZScpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXRDb2RlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TXNnQm9keShvZmZzZXQpIHtcbiAgICAgIHJldHVybiBtc2cuc3Vic3RyKG1zZy5pbmRleE9mKCc6JykgKyBtc2dIZWFkZXJMZW4gKyBvZmZzZXQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9yd2FyZE1zZ0Zyb21JRnJhbWUobXNnQm9keSkge1xuICAgICAgbG9nKFxuICAgICAgICBpZnJhbWVJZCxcbiAgICAgICAgJ29uTWVzc2FnZSBwYXNzZWQ6IHtpZnJhbWU6ICcgK1xuICAgICAgICAgIG1lc3NhZ2VEYXRhLmlmcmFtZS5pZCArXG4gICAgICAgICAgJywgbWVzc2FnZTogJyArXG4gICAgICAgICAgbXNnQm9keSArXG4gICAgICAgICAgJ30nXG4gICAgICApXG4gICAgICBvbignb25NZXNzYWdlJywge1xuICAgICAgICBpZnJhbWU6IG1lc3NhZ2VEYXRhLmlmcmFtZSxcbiAgICAgICAgbWVzc2FnZTogSlNPTi5wYXJzZShtc2dCb2R5KVxuICAgICAgfSlcbiAgICAgIGxvZyhpZnJhbWVJZCwgJy0tJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQYWdlSW5mbygpIHtcbiAgICAgIHZhciBib2R5UG9zaXRpb24gPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBpRnJhbWVQb3NpdGlvbiA9IG1lc3NhZ2VEYXRhLmlmcmFtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpZnJhbWVIZWlnaHQ6IGlGcmFtZVBvc2l0aW9uLmhlaWdodCxcbiAgICAgICAgaWZyYW1lV2lkdGg6IGlGcmFtZVBvc2l0aW9uLndpZHRoLFxuICAgICAgICBjbGllbnRIZWlnaHQ6IE1hdGgubWF4KFxuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IHx8IDBcbiAgICAgICAgKSxcbiAgICAgICAgY2xpZW50V2lkdGg6IE1hdGgubWF4KFxuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwXG4gICAgICAgICksXG4gICAgICAgIG9mZnNldFRvcDogcGFyc2VJbnQoaUZyYW1lUG9zaXRpb24udG9wIC0gYm9keVBvc2l0aW9uLnRvcCwgMTApLFxuICAgICAgICBvZmZzZXRMZWZ0OiBwYXJzZUludChpRnJhbWVQb3NpdGlvbi5sZWZ0IC0gYm9keVBvc2l0aW9uLmxlZnQsIDEwKSxcbiAgICAgICAgc2Nyb2xsVG9wOiB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgIHNjcm9sbExlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgZG9jdW1lbnRIZWlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgIGRvY3VtZW50V2lkdGg6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgd2luZG93SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZW5kUGFnZUluZm9Ub0lmcmFtZShpZnJhbWUsIGlmcmFtZUlkKSB7XG4gICAgICBmdW5jdGlvbiBkZWJvdW5jZWRUcmlnZ2VyKCkge1xuICAgICAgICB0cmlnZ2VyKCdTZW5kIFBhZ2UgSW5mbycsICdwYWdlSW5mbzonICsgZ2V0UGFnZUluZm8oKSwgaWZyYW1lLCBpZnJhbWVJZClcbiAgICAgIH1cbiAgICAgIGRlYm91bmNlRnJhbWVFdmVudHMoZGVib3VuY2VkVHJpZ2dlciwgMzIsIGlmcmFtZUlkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0UGFnZUluZm9Nb25pdG9yKCkge1xuICAgICAgZnVuY3Rpb24gc2V0TGlzdGVuZXIodHlwZSwgZnVuYykge1xuICAgICAgICBmdW5jdGlvbiBzZW5kUGFnZUluZm8oKSB7XG4gICAgICAgICAgaWYgKHNldHRpbmdzW2lkXSkge1xuICAgICAgICAgICAgc2VuZFBhZ2VJbmZvVG9JZnJhbWUoc2V0dGluZ3NbaWRdLmlmcmFtZSwgaWQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0b3AoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIDtbJ3Njcm9sbCcsICdyZXNpemUnXS5mb3JFYWNoKGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICBsb2coaWQsIHR5cGUgKyBldnQgKyAnIGxpc3RlbmVyIGZvciBzZW5kUGFnZUluZm8nKVxuICAgICAgICAgIGZ1bmMod2luZG93LCBldnQsIHNlbmRQYWdlSW5mbylcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgc2V0TGlzdGVuZXIoJ1JlbW92ZSAnLCByZW1vdmVFdmVudExpc3RlbmVyKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgc2V0TGlzdGVuZXIoJ0FkZCAnLCBhZGRFdmVudExpc3RlbmVyKVxuICAgICAgfVxuXG4gICAgICB2YXIgaWQgPSBpZnJhbWVJZCAvLyBDcmVhdGUgbG9jYWxseSBzY29wZWQgY29weSBvZiBpRnJhbWUgSURcblxuICAgICAgc3RhcnQoKVxuXG4gICAgICBpZiAoc2V0dGluZ3NbaWRdKSB7XG4gICAgICAgIHNldHRpbmdzW2lkXS5zdG9wUGFnZUluZm8gPSBzdG9wXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcFBhZ2VJbmZvTW9uaXRvcigpIHtcbiAgICAgIGlmIChzZXR0aW5nc1tpZnJhbWVJZF0gJiYgc2V0dGluZ3NbaWZyYW1lSWRdLnN0b3BQYWdlSW5mbykge1xuICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uc3RvcFBhZ2VJbmZvKClcbiAgICAgICAgZGVsZXRlIHNldHRpbmdzW2lmcmFtZUlkXS5zdG9wUGFnZUluZm9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0lGcmFtZUV4aXN0cygpIHtcbiAgICAgIHZhciByZXRCb29sID0gdHJ1ZVxuXG4gICAgICBpZiAobnVsbCA9PT0gbWVzc2FnZURhdGEuaWZyYW1lKSB7XG4gICAgICAgIHdhcm4oaWZyYW1lSWQsICdJRnJhbWUgKCcgKyBtZXNzYWdlRGF0YS5pZCArICcpIG5vdCBmb3VuZCcpXG4gICAgICAgIHJldEJvb2wgPSBmYWxzZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJldEJvb2xcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50UG9zaXRpb24odGFyZ2V0KSB7XG4gICAgICB2YXIgaUZyYW1lUG9zaXRpb24gPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgZ2V0UGFnZVBvc2l0aW9uKGlmcmFtZUlkKVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiBNYXRoLmZsb29yKE51bWJlcihpRnJhbWVQb3NpdGlvbi5sZWZ0KSArIE51bWJlcihwYWdlUG9zaXRpb24ueCkpLFxuICAgICAgICB5OiBNYXRoLmZsb29yKE51bWJlcihpRnJhbWVQb3NpdGlvbi50b3ApICsgTnVtYmVyKHBhZ2VQb3NpdGlvbi55KSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxSZXF1ZXN0RnJvbUNoaWxkKGFkZE9mZnNldCkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gLy8gTm90IHRlc3RhYmxlIGluIEthcm1hXG4gICAgICBmdW5jdGlvbiByZXBvc2l0aW9uKCkge1xuICAgICAgICBwYWdlUG9zaXRpb24gPSBuZXdQb3NpdGlvblxuICAgICAgICBzY3JvbGxUbygpXG4gICAgICAgIGxvZyhpZnJhbWVJZCwgJy0tJylcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY2FsY09mZnNldCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB4OiBOdW1iZXIobWVzc2FnZURhdGEud2lkdGgpICsgb2Zmc2V0LngsXG4gICAgICAgICAgeTogTnVtYmVyKG1lc3NhZ2VEYXRhLmhlaWdodCkgKyBvZmZzZXQueVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHNjcm9sbFBhcmVudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnRJRnJhbWUpIHtcbiAgICAgICAgICB3aW5kb3cucGFyZW50SUZyYW1lWydzY3JvbGxUbycgKyAoYWRkT2Zmc2V0ID8gJ09mZnNldCcgOiAnJyldKFxuICAgICAgICAgICAgbmV3UG9zaXRpb24ueCxcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uLnlcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGlmcmFtZUlkLFxuICAgICAgICAgICAgJ1VuYWJsZSB0byBzY3JvbGwgdG8gcmVxdWVzdGVkIHBvc2l0aW9uLCB3aW5kb3cucGFyZW50SUZyYW1lIG5vdCBmb3VuZCdcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIG9mZnNldCA9IGFkZE9mZnNldFxuICAgICAgICAgID8gZ2V0RWxlbWVudFBvc2l0aW9uKG1lc3NhZ2VEYXRhLmlmcmFtZSlcbiAgICAgICAgICA6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICBuZXdQb3NpdGlvbiA9IGNhbGNPZmZzZXQoKVxuXG4gICAgICBsb2coXG4gICAgICAgIGlmcmFtZUlkLFxuICAgICAgICAnUmVwb3NpdGlvbiByZXF1ZXN0ZWQgZnJvbSBpRnJhbWUgKG9mZnNldCB4OicgK1xuICAgICAgICAgIG9mZnNldC54ICtcbiAgICAgICAgICAnIHk6JyArXG4gICAgICAgICAgb2Zmc2V0LnkgK1xuICAgICAgICAgICcpJ1xuICAgICAgKVxuXG4gICAgICBpZiAod2luZG93LnRvcCAhPT0gd2luZG93LnNlbGYpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcG9zaXRpb24oKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvKCkge1xuICAgICAgaWYgKGZhbHNlICE9PSBvbignb25TY3JvbGwnLCBwYWdlUG9zaXRpb24pKSB7XG4gICAgICAgIHNldFBhZ2VQb3NpdGlvbihpZnJhbWVJZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVuc2V0UGFnZVBvc2l0aW9uKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kVGFyZ2V0KGxvY2F0aW9uKSB7XG4gICAgICBmdW5jdGlvbiBqdW1wVG9UYXJnZXQoKSB7XG4gICAgICAgIHZhciBqdW1wUG9zaXRpb24gPSBnZXRFbGVtZW50UG9zaXRpb24odGFyZ2V0KVxuXG4gICAgICAgIGxvZyhcbiAgICAgICAgICBpZnJhbWVJZCxcbiAgICAgICAgICAnTW92aW5nIHRvIGluIHBhZ2UgbGluayAoIycgK1xuICAgICAgICAgICAgaGFzaCArXG4gICAgICAgICAgICAnKSBhdCB4OiAnICtcbiAgICAgICAgICAgIGp1bXBQb3NpdGlvbi54ICtcbiAgICAgICAgICAgICcgeTogJyArXG4gICAgICAgICAgICBqdW1wUG9zaXRpb24ueVxuICAgICAgICApXG4gICAgICAgIHBhZ2VQb3NpdGlvbiA9IHtcbiAgICAgICAgICB4OiBqdW1wUG9zaXRpb24ueCxcbiAgICAgICAgICB5OiBqdW1wUG9zaXRpb24ueVxuICAgICAgICB9XG5cbiAgICAgICAgc2Nyb2xsVG8oKVxuICAgICAgICBsb2coaWZyYW1lSWQsICctLScpXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGp1bXBUb1BhcmVudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnRJRnJhbWUpIHtcbiAgICAgICAgICB3aW5kb3cucGFyZW50SUZyYW1lLm1vdmVUb0FuY2hvcihoYXNoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvZyhcbiAgICAgICAgICAgIGlmcmFtZUlkLFxuICAgICAgICAgICAgJ0luIHBhZ2UgbGluayAjJyArXG4gICAgICAgICAgICAgIGhhc2ggK1xuICAgICAgICAgICAgICAnIG5vdCBmb3VuZCBhbmQgd2luZG93LnBhcmVudElGcmFtZSBub3QgZm91bmQnXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBoYXNoID0gbG9jYXRpb24uc3BsaXQoJyMnKVsxXSB8fCAnJyxcbiAgICAgICAgaGFzaERhdGEgPSBkZWNvZGVVUklDb21wb25lbnQoaGFzaCksXG4gICAgICAgIHRhcmdldCA9XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaERhdGEpIHx8XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaERhdGEpWzBdXG5cbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAganVtcFRvVGFyZ2V0KClcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LnRvcCAhPT0gd2luZG93LnNlbGYpIHtcbiAgICAgICAganVtcFRvUGFyZW50KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZyhpZnJhbWVJZCwgJ0luIHBhZ2UgbGluayAjJyArIGhhc2ggKyAnIG5vdCBmb3VuZCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb24oZnVuY05hbWUsIHZhbCkge1xuICAgICAgcmV0dXJuIGNoa0V2ZW50KGlmcmFtZUlkLCBmdW5jTmFtZSwgdmFsKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGlvbk1zZygpIHtcbiAgICAgIGlmIChzZXR0aW5nc1tpZnJhbWVJZF0gJiYgc2V0dGluZ3NbaWZyYW1lSWRdLmZpcnN0UnVuKSBmaXJzdFJ1bigpXG5cbiAgICAgIHN3aXRjaCAobWVzc2FnZURhdGEudHlwZSkge1xuICAgICAgICBjYXNlICdjbG9zZSc6XG4gICAgICAgICAgY2xvc2VJRnJhbWUobWVzc2FnZURhdGEuaWZyYW1lKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnbWVzc2FnZSc6XG4gICAgICAgICAgZm9yd2FyZE1zZ0Zyb21JRnJhbWUoZ2V0TXNnQm9keSg2KSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2F1dG9SZXNpemUnOlxuICAgICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5hdXRvUmVzaXplID0gSlNPTi5wYXJzZShnZXRNc2dCb2R5KDkpKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnc2Nyb2xsVG8nOlxuICAgICAgICAgIHNjcm9sbFJlcXVlc3RGcm9tQ2hpbGQoZmFsc2UpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdzY3JvbGxUb09mZnNldCc6XG4gICAgICAgICAgc2Nyb2xsUmVxdWVzdEZyb21DaGlsZCh0cnVlKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAncGFnZUluZm8nOlxuICAgICAgICAgIHNlbmRQYWdlSW5mb1RvSWZyYW1lKFxuICAgICAgICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdICYmIHNldHRpbmdzW2lmcmFtZUlkXS5pZnJhbWUsXG4gICAgICAgICAgICBpZnJhbWVJZFxuICAgICAgICAgIClcbiAgICAgICAgICBzdGFydFBhZ2VJbmZvTW9uaXRvcigpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdwYWdlSW5mb1N0b3AnOlxuICAgICAgICAgIHN0b3BQYWdlSW5mb01vbml0b3IoKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnaW5QYWdlTGluayc6XG4gICAgICAgICAgZmluZFRhcmdldChnZXRNc2dCb2R5KDkpKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAncmVzZXQnOlxuICAgICAgICAgIHJlc2V0SUZyYW1lKG1lc3NhZ2VEYXRhKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnaW5pdCc6XG4gICAgICAgICAgcmVzaXplSUZyYW1lKClcbiAgICAgICAgICBvbignb25Jbml0JywgbWVzc2FnZURhdGEuaWZyYW1lKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXNpemVJRnJhbWUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc1NldHRpbmdzKGlmcmFtZUlkKSB7XG4gICAgICB2YXIgcmV0Qm9vbCA9IHRydWVcblxuICAgICAgaWYgKCFzZXR0aW5nc1tpZnJhbWVJZF0pIHtcbiAgICAgICAgcmV0Qm9vbCA9IGZhbHNlXG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgbWVzc2FnZURhdGEudHlwZSArXG4gICAgICAgICAgICAnIE5vIHNldHRpbmdzIGZvciAnICtcbiAgICAgICAgICAgIGlmcmFtZUlkICtcbiAgICAgICAgICAgICcuIE1lc3NhZ2Ugd2FzOiAnICtcbiAgICAgICAgICAgIG1zZ1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXRCb29sXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaUZyYW1lUmVhZHlNc2dSZWNlaXZlZCgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheCwgZ3VhcmQtZm9yLWluXG4gICAgICBmb3IgKHZhciBpZnJhbWVJZCBpbiBzZXR0aW5ncykge1xuICAgICAgICB0cmlnZ2VyKFxuICAgICAgICAgICdpRnJhbWUgcmVxdWVzdGVkIGluaXQnLFxuICAgICAgICAgIGNyZWF0ZU91dGdvaW5nTXNnKGlmcmFtZUlkKSxcbiAgICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uaWZyYW1lLFxuICAgICAgICAgIGlmcmFtZUlkXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXJzdFJ1bigpIHtcbiAgICAgIGlmIChzZXR0aW5nc1tpZnJhbWVJZF0pIHtcbiAgICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLmZpcnN0UnVuID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbXNnID0gZXZlbnQuZGF0YSxcbiAgICAgIG1lc3NhZ2VEYXRhID0ge30sXG4gICAgICBpZnJhbWVJZCA9IG51bGxcblxuICAgIGlmICgnW2lGcmFtZVJlc2l6ZXJDaGlsZF1SZWFkeScgPT09IG1zZykge1xuICAgICAgaUZyYW1lUmVhZHlNc2dSZWNlaXZlZCgpXG4gICAgfSBlbHNlIGlmIChpc01lc3NhZ2VGb3JVcygpKSB7XG4gICAgICBtZXNzYWdlRGF0YSA9IHByb2Nlc3NNc2coKVxuICAgICAgaWZyYW1lSWQgPSBtZXNzYWdlRGF0YS5pZFxuICAgICAgaWYgKHNldHRpbmdzW2lmcmFtZUlkXSkge1xuICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0ubG9hZGVkID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTWVzc2FnZUZyb21NZXRhUGFyZW50KCkgJiYgaGFzU2V0dGluZ3MoaWZyYW1lSWQpKSB7XG4gICAgICAgIGxvZyhpZnJhbWVJZCwgJ1JlY2VpdmVkOiAnICsgbXNnKVxuXG4gICAgICAgIGlmIChjaGVja0lGcmFtZUV4aXN0cygpICYmIGlzTWVzc2FnZUZyb21JRnJhbWUoKSkge1xuICAgICAgICAgIGFjdGlvbk1zZygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyhpZnJhbWVJZCwgJ0lnbm9yZWQ6ICcgKyBtc2cpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hrRXZlbnQoaWZyYW1lSWQsIGZ1bmNOYW1lLCB2YWwpIHtcbiAgICB2YXIgZnVuYyA9IG51bGwsXG4gICAgICByZXRWYWwgPSBudWxsXG5cbiAgICBpZiAoc2V0dGluZ3NbaWZyYW1lSWRdKSB7XG4gICAgICBmdW5jID0gc2V0dGluZ3NbaWZyYW1lSWRdW2Z1bmNOYW1lXVxuXG4gICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGZ1bmMpIHtcbiAgICAgICAgcmV0VmFsID0gZnVuYyh2YWwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIGZ1bmNOYW1lICsgJyBvbiBpRnJhbWVbJyArIGlmcmFtZUlkICsgJ10gaXMgbm90IGEgZnVuY3Rpb24nXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0VmFsXG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVJZnJhbWVMaXN0ZW5lcnMoaWZyYW1lKSB7XG4gICAgdmFyIGlmcmFtZUlkID0gaWZyYW1lLmlkXG4gICAgZGVsZXRlIHNldHRpbmdzW2lmcmFtZUlkXVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VJRnJhbWUoaWZyYW1lKSB7XG4gICAgdmFyIGlmcmFtZUlkID0gaWZyYW1lLmlkXG4gICAgaWYgKGNoa0V2ZW50KGlmcmFtZUlkLCAnb25DbG9zZScsIGlmcmFtZUlkKSA9PT0gZmFsc2UpIHtcbiAgICAgIGxvZyhpZnJhbWVJZCwgJ0Nsb3NlIGlmcmFtZSBjYW5jZWxsZWQgYnkgb25DbG9zZSBldmVudCcpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbG9nKGlmcmFtZUlkLCAnUmVtb3ZpbmcgaUZyYW1lOiAnICsgaWZyYW1lSWQpXG5cbiAgICB0cnkge1xuICAgICAgLy8gQ2F0Y2ggcmFjZSBjb25kaXRpb24gZXJyb3Igd2l0aCBSZWFjdFxuICAgICAgaWYgKGlmcmFtZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIGlmcmFtZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGlmcmFtZSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgd2FybihlcnJvcilcbiAgICB9XG5cbiAgICBjaGtFdmVudChpZnJhbWVJZCwgJ29uQ2xvc2VkJywgaWZyYW1lSWQpXG4gICAgbG9nKGlmcmFtZUlkLCAnLS0nKVxuICAgIHJlbW92ZUlmcmFtZUxpc3RlbmVycyhpZnJhbWUpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYWdlUG9zaXRpb24oaWZyYW1lSWQpIHtcbiAgICBpZiAobnVsbCA9PT0gcGFnZVBvc2l0aW9uKSB7XG4gICAgICBwYWdlUG9zaXRpb24gPSB7XG4gICAgICAgIHg6XG4gICAgICAgICAgd2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gd2luZG93LnBhZ2VYT2Zmc2V0XG4gICAgICAgICAgICA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgICB5OlxuICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgICAgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgICB9XG4gICAgICBsb2coXG4gICAgICAgIGlmcmFtZUlkLFxuICAgICAgICAnR2V0IHBhZ2UgcG9zaXRpb246ICcgKyBwYWdlUG9zaXRpb24ueCArICcsJyArIHBhZ2VQb3NpdGlvbi55XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0UGFnZVBvc2l0aW9uKGlmcmFtZUlkKSB7XG4gICAgaWYgKG51bGwgIT09IHBhZ2VQb3NpdGlvbikge1xuICAgICAgd2luZG93LnNjcm9sbFRvKHBhZ2VQb3NpdGlvbi54LCBwYWdlUG9zaXRpb24ueSlcbiAgICAgIGxvZyhcbiAgICAgICAgaWZyYW1lSWQsXG4gICAgICAgICdTZXQgcGFnZSBwb3NpdGlvbjogJyArIHBhZ2VQb3NpdGlvbi54ICsgJywnICsgcGFnZVBvc2l0aW9uLnlcbiAgICAgIClcbiAgICAgIHVuc2V0UGFnZVBvc2l0aW9uKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1bnNldFBhZ2VQb3NpdGlvbigpIHtcbiAgICBwYWdlUG9zaXRpb24gPSBudWxsXG4gIH1cblxuICBmdW5jdGlvbiByZXNldElGcmFtZShtZXNzYWdlRGF0YSkge1xuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgc2V0U2l6ZShtZXNzYWdlRGF0YSlcbiAgICAgIHRyaWdnZXIoJ3Jlc2V0JywgJ3Jlc2V0JywgbWVzc2FnZURhdGEuaWZyYW1lLCBtZXNzYWdlRGF0YS5pZClcbiAgICB9XG5cbiAgICBsb2coXG4gICAgICBtZXNzYWdlRGF0YS5pZCxcbiAgICAgICdTaXplIHJlc2V0IHJlcXVlc3RlZCBieSAnICtcbiAgICAgICAgKCdpbml0JyA9PT0gbWVzc2FnZURhdGEudHlwZSA/ICdob3N0IHBhZ2UnIDogJ2lGcmFtZScpXG4gICAgKVxuICAgIGdldFBhZ2VQb3NpdGlvbihtZXNzYWdlRGF0YS5pZClcbiAgICBzeW5jUmVzaXplKHJlc2V0LCBtZXNzYWdlRGF0YSwgJ3Jlc2V0JylcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFNpemUobWVzc2FnZURhdGEpIHtcbiAgICBmdW5jdGlvbiBzZXREaW1lbnNpb24oZGltZW5zaW9uKSB7XG4gICAgICBpZiAoIW1lc3NhZ2VEYXRhLmlkKSB7XG4gICAgICAgIGxvZygndW5kZWZpbmVkJywgJ21lc3NhZ2VEYXRhIGlkIG5vdCBzZXQnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG1lc3NhZ2VEYXRhLmlmcmFtZS5zdHlsZVtkaW1lbnNpb25dID0gbWVzc2FnZURhdGFbZGltZW5zaW9uXSArICdweCdcbiAgICAgIGxvZyhcbiAgICAgICAgbWVzc2FnZURhdGEuaWQsXG4gICAgICAgICdJRnJhbWUgKCcgK1xuICAgICAgICAgIGlmcmFtZUlkICtcbiAgICAgICAgICAnKSAnICtcbiAgICAgICAgICBkaW1lbnNpb24gK1xuICAgICAgICAgICcgc2V0IHRvICcgK1xuICAgICAgICAgIG1lc3NhZ2VEYXRhW2RpbWVuc2lvbl0gK1xuICAgICAgICAgICdweCdcbiAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGtaZXJvKGRpbWVuc2lvbikge1xuICAgICAgLy8gRmlyZUZveCBzZXRzIGRpbWVuc2lvbiBvZiBoaWRkZW4gaUZyYW1lcyB0byB6ZXJvLlxuICAgICAgLy8gU28gaWYgd2UgZGV0ZWN0IHRoYXQgc2V0IHVwIGFuIGV2ZW50IHRvIGNoZWNrIGZvclxuICAgICAgLy8gd2hlbiBpRnJhbWUgYmVjb21lcyB2aXNpYmxlLlxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAvLyBOb3QgdGVzdGFibGUgaW4gUGhhbnRvbUpTXG4gICAgICBpZiAoIWhpZGRlbkNoZWNrRW5hYmxlZCAmJiAnMCcgPT09IG1lc3NhZ2VEYXRhW2RpbWVuc2lvbl0pIHtcbiAgICAgICAgaGlkZGVuQ2hlY2tFbmFibGVkID0gdHJ1ZVxuICAgICAgICBsb2coaWZyYW1lSWQsICdIaWRkZW4gaUZyYW1lIGRldGVjdGVkLCBjcmVhdGluZyB2aXNpYmlsaXR5IGxpc3RlbmVyJylcbiAgICAgICAgZml4SGlkZGVuSUZyYW1lcygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0RpbWVuc2lvbihkaW1lbnNpb24pIHtcbiAgICAgIHNldERpbWVuc2lvbihkaW1lbnNpb24pXG4gICAgICBjaGtaZXJvKGRpbWVuc2lvbilcbiAgICB9XG5cbiAgICB2YXIgaWZyYW1lSWQgPSBtZXNzYWdlRGF0YS5pZnJhbWUuaWRcblxuICAgIGlmIChzZXR0aW5nc1tpZnJhbWVJZF0pIHtcbiAgICAgIGlmIChzZXR0aW5nc1tpZnJhbWVJZF0uc2l6ZUhlaWdodCkge1xuICAgICAgICBwcm9jZXNzRGltZW5zaW9uKCdoZWlnaHQnKVxuICAgICAgfVxuICAgICAgaWYgKHNldHRpbmdzW2lmcmFtZUlkXS5zaXplV2lkdGgpIHtcbiAgICAgICAgcHJvY2Vzc0RpbWVuc2lvbignd2lkdGgnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN5bmNSZXNpemUoZnVuYywgbWVzc2FnZURhdGEsIGRvTm90U3luYykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqLyAvLyBOb3QgdGVzdGFibGUgaW4gUGhhbnRvbUpTXG4gICAgaWYgKFxuICAgICAgZG9Ob3RTeW5jICE9PSBtZXNzYWdlRGF0YS50eXBlICYmXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiZcbiAgICAgIC8vIGluY2x1ZGluZyBjaGVjayBmb3IgamFzbWluZSBiZWNhdXNlIGhhZCB0cm91YmxlIGdldHRpbmcgc3B5IHRvIHdvcmsgaW4gdW5pdCB0ZXN0IHVzaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgIXdpbmRvdy5qYXNtaW5lXG4gICAgKSB7XG4gICAgICBsb2cobWVzc2FnZURhdGEuaWQsICdSZXF1ZXN0aW5nIGFuaW1hdGlvbiBmcmFtZScpXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuYylcbiAgICB9IGVsc2Uge1xuICAgICAgZnVuYygpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHJpZ2dlcihjYWxsZWVNc2csIG1zZywgaWZyYW1lLCBpZCwgbm9SZXNwb25zZVdhcm5pbmcpIHtcbiAgICBmdW5jdGlvbiBwb3N0TWVzc2FnZVRvSUZyYW1lKCkge1xuICAgICAgdmFyIHRhcmdldCA9IHNldHRpbmdzW2lkXSAmJiBzZXR0aW5nc1tpZF0udGFyZ2V0T3JpZ2luXG4gICAgICBsb2coXG4gICAgICAgIGlkLFxuICAgICAgICAnWycgK1xuICAgICAgICAgIGNhbGxlZU1zZyArXG4gICAgICAgICAgJ10gU2VuZGluZyBtc2cgdG8gaWZyYW1lWycgK1xuICAgICAgICAgIGlkICtcbiAgICAgICAgICAnXSAoJyArXG4gICAgICAgICAgbXNnICtcbiAgICAgICAgICAnKSB0YXJnZXRPcmlnaW46ICcgK1xuICAgICAgICAgIHRhcmdldFxuICAgICAgKVxuICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UobXNnSWQgKyBtc2csIHRhcmdldClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpRnJhbWVOb3RGb3VuZCgpIHtcbiAgICAgIHdhcm4oaWQsICdbJyArIGNhbGxlZU1zZyArICddIElGcmFtZSgnICsgaWQgKyAnKSBub3QgZm91bmQnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoa0FuZFNlbmQoKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGlmcmFtZSAmJlxuICAgICAgICAnY29udGVudFdpbmRvdycgaW4gaWZyYW1lICYmXG4gICAgICAgIG51bGwgIT09IGlmcmFtZS5jb250ZW50V2luZG93XG4gICAgICApIHtcbiAgICAgICAgLy8gTnVsbCB0ZXN0IGZvciBQaGFudG9tSlNcbiAgICAgICAgcG9zdE1lc3NhZ2VUb0lGcmFtZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpRnJhbWVOb3RGb3VuZCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2Fybk9uTm9SZXNwb25zZSgpIHtcbiAgICAgIGZ1bmN0aW9uIHdhcm5pbmcoKSB7XG4gICAgICAgIGlmIChzZXR0aW5nc1tpZF0gJiYgIXNldHRpbmdzW2lkXS5sb2FkZWQgJiYgIWVycm9yU2hvd24pIHtcbiAgICAgICAgICBlcnJvclNob3duID0gdHJ1ZVxuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICdJRnJhbWUgaGFzIG5vdCByZXNwb25kZWQgd2l0aGluICcgK1xuICAgICAgICAgICAgICBzZXR0aW5nc1tpZF0ud2FybmluZ1RpbWVvdXQgLyAxMDAwICtcbiAgICAgICAgICAgICAgJyBzZWNvbmRzLiBDaGVjayBpRnJhbWVSZXNpemVyLmNvbnRlbnRXaW5kb3cuanMgaGFzIGJlZW4gbG9hZGVkIGluIGlGcmFtZS4gVGhpcyBtZXNzYWdlIGNhbiBiZSBpZ25vcmVkIGlmIGV2ZXJ5dGhpbmcgaXMgd29ya2luZywgb3IgeW91IGNhbiBzZXQgdGhlIHdhcm5pbmdUaW1lb3V0IG9wdGlvbiB0byBhIGhpZ2hlciB2YWx1ZSBvciB6ZXJvIHRvIHN1cHByZXNzIHRoaXMgd2FybmluZy4nXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgISFub1Jlc3BvbnNlV2FybmluZyAmJlxuICAgICAgICBzZXR0aW5nc1tpZF0gJiZcbiAgICAgICAgISFzZXR0aW5nc1tpZF0ud2FybmluZ1RpbWVvdXRcbiAgICAgICkge1xuICAgICAgICBzZXR0aW5nc1tpZF0ubXNnVGltZW91dCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgd2FybmluZyxcbiAgICAgICAgICBzZXR0aW5nc1tpZF0ud2FybmluZ1RpbWVvdXRcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBlcnJvclNob3duID0gZmFsc2VcblxuICAgIGlkID0gaWQgfHwgaWZyYW1lLmlkXG5cbiAgICBpZiAoc2V0dGluZ3NbaWRdKSB7XG4gICAgICBjaGtBbmRTZW5kKClcbiAgICAgIHdhcm5Pbk5vUmVzcG9uc2UoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU91dGdvaW5nTXNnKGlmcmFtZUlkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGlmcmFtZUlkICtcbiAgICAgICc6JyArXG4gICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uYm9keU1hcmdpblYxICtcbiAgICAgICc6JyArXG4gICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uc2l6ZVdpZHRoICtcbiAgICAgICc6JyArXG4gICAgICBzZXR0aW5nc1tpZnJhbWVJZF0ubG9nICtcbiAgICAgICc6JyArXG4gICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uaW50ZXJ2YWwgK1xuICAgICAgJzonICtcbiAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5lbmFibGVQdWJsaWNNZXRob2RzICtcbiAgICAgICc6JyArXG4gICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uYXV0b1Jlc2l6ZSArXG4gICAgICAnOicgK1xuICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLmJvZHlNYXJnaW4gK1xuICAgICAgJzonICtcbiAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5oZWlnaHRDYWxjdWxhdGlvbk1ldGhvZCArXG4gICAgICAnOicgK1xuICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLmJvZHlCYWNrZ3JvdW5kICtcbiAgICAgICc6JyArXG4gICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uYm9keVBhZGRpbmcgK1xuICAgICAgJzonICtcbiAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS50b2xlcmFuY2UgK1xuICAgICAgJzonICtcbiAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5pblBhZ2VMaW5rcyArXG4gICAgICAnOicgK1xuICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLnJlc2l6ZUZyb20gK1xuICAgICAgJzonICtcbiAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS53aWR0aENhbGN1bGF0aW9uTWV0aG9kXG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBJRnJhbWUoaWZyYW1lLCBvcHRpb25zKSB7XG4gICAgZnVuY3Rpb24gc2V0TGltaXRzKCkge1xuICAgICAgZnVuY3Rpb24gYWRkU3R5bGUoc3R5bGUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIEluZmluaXR5ICE9PSBzZXR0aW5nc1tpZnJhbWVJZF1bc3R5bGVdICYmXG4gICAgICAgICAgMCAhPT0gc2V0dGluZ3NbaWZyYW1lSWRdW3N0eWxlXVxuICAgICAgICApIHtcbiAgICAgICAgICBpZnJhbWUuc3R5bGVbc3R5bGVdID0gc2V0dGluZ3NbaWZyYW1lSWRdW3N0eWxlXSArICdweCdcbiAgICAgICAgICBsb2coXG4gICAgICAgICAgICBpZnJhbWVJZCxcbiAgICAgICAgICAgICdTZXQgJyArIHN0eWxlICsgJyA9ICcgKyBzZXR0aW5nc1tpZnJhbWVJZF1bc3R5bGVdICsgJ3B4J1xuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjaGtNaW5NYXgoZGltZW5zaW9uKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF1bJ21pbicgKyBkaW1lbnNpb25dID5cbiAgICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF1bJ21heCcgKyBkaW1lbnNpb25dXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdWYWx1ZSBmb3IgbWluJyArXG4gICAgICAgICAgICAgIGRpbWVuc2lvbiArXG4gICAgICAgICAgICAgICcgY2FuIG5vdCBiZSBncmVhdGVyIHRoYW4gbWF4JyArXG4gICAgICAgICAgICAgIGRpbWVuc2lvblxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGtNaW5NYXgoJ0hlaWdodCcpXG4gICAgICBjaGtNaW5NYXgoJ1dpZHRoJylcblxuICAgICAgYWRkU3R5bGUoJ21heEhlaWdodCcpXG4gICAgICBhZGRTdHlsZSgnbWluSGVpZ2h0JylcbiAgICAgIGFkZFN0eWxlKCdtYXhXaWR0aCcpXG4gICAgICBhZGRTdHlsZSgnbWluV2lkdGgnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0lkKCkge1xuICAgICAgdmFyIGlkID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5pZCkgfHwgZGVmYXVsdHMuaWQgKyBjb3VudCsrXG4gICAgICBpZiAobnVsbCAhPT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XG4gICAgICAgIGlkICs9IGNvdW50KytcbiAgICAgIH1cbiAgICAgIHJldHVybiBpZFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuc3VyZUhhc0lkKGlmcmFtZUlkKSB7XG4gICAgICBpZiAoJycgPT09IGlmcmFtZUlkKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tdWx0aS1hc3NpZ25cbiAgICAgICAgaWZyYW1lLmlkID0gaWZyYW1lSWQgPSBuZXdJZCgpXG4gICAgICAgIGxvZ0VuYWJsZWQgPSAob3B0aW9ucyB8fCB7fSkubG9nXG4gICAgICAgIGxvZyhcbiAgICAgICAgICBpZnJhbWVJZCxcbiAgICAgICAgICAnQWRkZWQgbWlzc2luZyBpZnJhbWUgSUQ6ICcgKyBpZnJhbWVJZCArICcgKCcgKyBpZnJhbWUuc3JjICsgJyknXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlmcmFtZUlkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U2Nyb2xsaW5nKCkge1xuICAgICAgbG9nKFxuICAgICAgICBpZnJhbWVJZCxcbiAgICAgICAgJ0lGcmFtZSBzY3JvbGxpbmcgJyArXG4gICAgICAgICAgKHNldHRpbmdzW2lmcmFtZUlkXSAmJiBzZXR0aW5nc1tpZnJhbWVJZF0uc2Nyb2xsaW5nXG4gICAgICAgICAgICA/ICdlbmFibGVkJ1xuICAgICAgICAgICAgOiAnZGlzYWJsZWQnKSArXG4gICAgICAgICAgJyBmb3IgJyArXG4gICAgICAgICAgaWZyYW1lSWRcbiAgICAgIClcbiAgICAgIGlmcmFtZS5zdHlsZS5vdmVyZmxvdyA9XG4gICAgICAgIGZhbHNlID09PSAoc2V0dGluZ3NbaWZyYW1lSWRdICYmIHNldHRpbmdzW2lmcmFtZUlkXS5zY3JvbGxpbmcpXG4gICAgICAgICAgPyAnaGlkZGVuJ1xuICAgICAgICAgIDogJ2F1dG8nXG4gICAgICBzd2l0Y2ggKHNldHRpbmdzW2lmcmFtZUlkXSAmJiBzZXR0aW5nc1tpZnJhbWVJZF0uc2Nyb2xsaW5nKSB7XG4gICAgICAgIGNhc2UgJ29taXQnOlxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgIGlmcmFtZS5zY3JvbGxpbmcgPSAneWVzJ1xuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICBpZnJhbWUuc2Nyb2xsaW5nID0gJ25vJ1xuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZnJhbWUuc2Nyb2xsaW5nID0gc2V0dGluZ3NbaWZyYW1lSWRdXG4gICAgICAgICAgICA/IHNldHRpbmdzW2lmcmFtZUlkXS5zY3JvbGxpbmdcbiAgICAgICAgICAgIDogJ25vJ1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZSBWMSBpRnJhbWUgc2NyaXB0IGV4cGVjdHMgYW4gaW50LCB3aGVyZSBhcyBpbiBWMiBleHBlY3RzIGEgQ1NTXG4gICAgLy8gc3RyaW5nIHZhbHVlIHN1Y2ggYXMgJzFweCAzZW0nLCBzbyBpZiB3ZSBoYXZlIGFuIGludCBmb3IgVjIsIHNldCBWMT1WMlxuICAgIC8vIGFuZCB0aGVuIGNvbnZlcnQgVjIgdG8gYSBzdHJpbmcgUFggdmFsdWUuXG4gICAgZnVuY3Rpb24gc2V0dXBCb2R5TWFyZ2luVmFsdWVzKCkge1xuICAgICAgaWYgKFxuICAgICAgICAnbnVtYmVyJyA9PT1cbiAgICAgICAgICB0eXBlb2YgKHNldHRpbmdzW2lmcmFtZUlkXSAmJiBzZXR0aW5nc1tpZnJhbWVJZF0uYm9keU1hcmdpbikgfHxcbiAgICAgICAgJzAnID09PSAoc2V0dGluZ3NbaWZyYW1lSWRdICYmIHNldHRpbmdzW2lmcmFtZUlkXS5ib2R5TWFyZ2luKVxuICAgICAgKSB7XG4gICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5ib2R5TWFyZ2luVjEgPSBzZXR0aW5nc1tpZnJhbWVJZF0uYm9keU1hcmdpblxuICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uYm9keU1hcmdpbiA9XG4gICAgICAgICAgJycgKyBzZXR0aW5nc1tpZnJhbWVJZF0uYm9keU1hcmdpbiArICdweCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1Jlc2V0KCkge1xuICAgICAgLy8gUmVkdWNlIHNjb3BlIG9mIGZpcnN0UnVuIHRvIGZ1bmN0aW9uLCBiZWNhdXNlIElFOCdzIEpTIGV4ZWN1dGlvblxuICAgICAgLy8gY29udGV4dCBzdGFjayBpcyBib3JrZWQgYW5kIHRoaXMgdmFsdWUgZ2V0cyBleHRlcm5hbGx5XG4gICAgICAvLyBjaGFuZ2VkIG1pZHdheSB0aHJvdWdoIHJ1bm5pbmcgdGhpcyBmdW5jdGlvbiEhIVxuICAgICAgdmFyIGZpcnN0UnVuID0gc2V0dGluZ3NbaWZyYW1lSWRdICYmIHNldHRpbmdzW2lmcmFtZUlkXS5maXJzdFJ1bixcbiAgICAgICAgcmVzZXRSZXF1ZXJ0TWV0aG9kID1cbiAgICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0gJiZcbiAgICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uaGVpZ2h0Q2FsY3VsYXRpb25NZXRob2QgaW4gcmVzZXRSZXF1aXJlZE1ldGhvZHNcblxuICAgICAgaWYgKCFmaXJzdFJ1biAmJiByZXNldFJlcXVlcnRNZXRob2QpIHtcbiAgICAgICAgcmVzZXRJRnJhbWUoeyBpZnJhbWU6IGlmcmFtZSwgaGVpZ2h0OiAwLCB3aWR0aDogMCwgdHlwZTogJ2luaXQnIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXBJRnJhbWVPYmplY3QoKSB7XG4gICAgICBpZiAoc2V0dGluZ3NbaWZyYW1lSWRdKSB7XG4gICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5pZnJhbWUuaUZyYW1lUmVzaXplciA9IHtcbiAgICAgICAgICBjbG9zZTogY2xvc2VJRnJhbWUuYmluZChudWxsLCBzZXR0aW5nc1tpZnJhbWVJZF0uaWZyYW1lKSxcblxuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyczogcmVtb3ZlSWZyYW1lTGlzdGVuZXJzLmJpbmQoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLmlmcmFtZVxuICAgICAgICAgICksXG5cbiAgICAgICAgICByZXNpemU6IHRyaWdnZXIuYmluZChcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAnV2luZG93IHJlc2l6ZScsXG4gICAgICAgICAgICAncmVzaXplJyxcbiAgICAgICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5pZnJhbWVcbiAgICAgICAgICApLFxuXG4gICAgICAgICAgbW92ZVRvQW5jaG9yOiBmdW5jdGlvbiAoYW5jaG9yKSB7XG4gICAgICAgICAgICB0cmlnZ2VyKFxuICAgICAgICAgICAgICAnTW92ZSB0byBhbmNob3InLFxuICAgICAgICAgICAgICAnbW92ZVRvQW5jaG9yOicgKyBhbmNob3IsXG4gICAgICAgICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5pZnJhbWUsXG4gICAgICAgICAgICAgIGlmcmFtZUlkXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHNlbmRNZXNzYWdlOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpXG4gICAgICAgICAgICB0cmlnZ2VyKFxuICAgICAgICAgICAgICAnU2VuZCBNZXNzYWdlJyxcbiAgICAgICAgICAgICAgJ21lc3NhZ2U6JyArIG1lc3NhZ2UsXG4gICAgICAgICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5pZnJhbWUsXG4gICAgICAgICAgICAgIGlmcmFtZUlkXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2UgaGF2ZSB0byBjYWxsIHRyaWdnZXIgdHdpY2UsIGFzIHdlIGNhbiBub3QgYmUgc3VyZSBpZiBhbGxcbiAgICAvLyBpZnJhbWVzIGhhdmUgY29tcGxldGVkIGxvYWRpbmcgd2hlbiB0aGlzIGNvZGUgcnVucy4gVGhlXG4gICAgLy8gZXZlbnQgbGlzdGVuZXIgYWxzbyBjYXRjaGVzIHRoZSBwYWdlIGNoYW5naW5nIGluIHRoZSBpRnJhbWUuXG4gICAgZnVuY3Rpb24gaW5pdChtc2cpIHtcbiAgICAgIGZ1bmN0aW9uIGlGcmFtZUxvYWRlZCgpIHtcbiAgICAgICAgdHJpZ2dlcignaUZyYW1lLm9ubG9hZCcsIG1zZywgaWZyYW1lLCB1bmRlZmluZWQsIHRydWUpXG4gICAgICAgIGNoZWNrUmVzZXQoKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjcmVhdGVEZXN0cm95T2JzZXJ2ZXIoTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICBpZiAoIWlmcmFtZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVzdHJveU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgICAgICAgICAgdmFyIHJlbW92ZWROb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG11dGF0aW9uLnJlbW92ZWROb2RlcykgLy8gVHJhbnNmb3JtIE5vZGVMaXN0IGludG8gYW4gQXJyYXlcbiAgICAgICAgICAgIHJlbW92ZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZW1vdmVkTm9kZSkge1xuICAgICAgICAgICAgICBpZiAocmVtb3ZlZE5vZGUgPT09IGlmcmFtZSkge1xuICAgICAgICAgICAgICAgIGNsb3NlSUZyYW1lKGlmcmFtZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBkZXN0cm95T2JzZXJ2ZXIub2JzZXJ2ZShpZnJhbWUucGFyZW50Tm9kZSwge1xuICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICB2YXIgTXV0YXRpb25PYnNlcnZlciA9IGdldE11dGF0aW9uT2JzZXJ2ZXIoKVxuICAgICAgaWYgKE11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgY3JlYXRlRGVzdHJveU9ic2VydmVyKE11dGF0aW9uT2JzZXJ2ZXIpXG4gICAgICB9XG5cbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIoaWZyYW1lLCAnbG9hZCcsIGlGcmFtZUxvYWRlZClcbiAgICAgIHRyaWdnZXIoJ2luaXQnLCBtc2csIGlmcmFtZSwgdW5kZWZpbmVkLCB0cnVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICBpZiAoJ29iamVjdCcgIT09IHR5cGVvZiBvcHRpb25zKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09wdGlvbnMgaXMgbm90IGFuIG9iamVjdCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29weU9wdGlvbnMob3B0aW9ucykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICBmb3IgKHZhciBvcHRpb24gaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZWZhdWx0cywgb3B0aW9uKSkge1xuICAgICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXVtvcHRpb25dID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvblxuICAgICAgICAgIClcbiAgICAgICAgICAgID8gb3B0aW9uc1tvcHRpb25dXG4gICAgICAgICAgICA6IGRlZmF1bHRzW29wdGlvbl1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRhcmdldE9yaWdpbihyZW1vdGVIb3N0KSB7XG4gICAgICByZXR1cm4gJycgPT09IHJlbW90ZUhvc3QgfHxcbiAgICAgICAgbnVsbCAhPT0gcmVtb3RlSG9zdC5tYXRjaCgvXihhYm91dDpibGFua3xqYXZhc2NyaXB0OnxmaWxlOlxcL1xcLykvKVxuICAgICAgICA/ICcqJ1xuICAgICAgICA6IHJlbW90ZUhvc3RcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXByaWNhdGUoa2V5KSB7XG4gICAgICB2YXIgc3BsaXROYW1lID0ga2V5LnNwbGl0KCdDYWxsYmFjaycpXG5cbiAgICAgIGlmIChzcGxpdE5hbWUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHZhciBuYW1lID1cbiAgICAgICAgICAnb24nICsgc3BsaXROYW1lWzBdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3BsaXROYW1lWzBdLnNsaWNlKDEpXG4gICAgICAgIHRoaXNbbmFtZV0gPSB0aGlzW2tleV1cbiAgICAgICAgZGVsZXRlIHRoaXNba2V5XVxuICAgICAgICB3YXJuKFxuICAgICAgICAgIGlmcmFtZUlkLFxuICAgICAgICAgIFwiRGVwcmVjYXRlZDogJ1wiICtcbiAgICAgICAgICAgIGtleSArXG4gICAgICAgICAgICBcIicgaGFzIGJlZW4gcmVuYW1lZCAnXCIgK1xuICAgICAgICAgICAgbmFtZSArXG4gICAgICAgICAgICBcIicuIFRoZSBvbGQgbWV0aG9kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uLlwiXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdID0ge1xuICAgICAgICBmaXJzdFJ1bjogdHJ1ZSxcbiAgICAgICAgaWZyYW1lOiBpZnJhbWUsXG4gICAgICAgIHJlbW90ZUhvc3Q6IGlmcmFtZS5zcmMgJiYgaWZyYW1lLnNyYy5zcGxpdCgnLycpLnNsaWNlKDAsIDMpLmpvaW4oJy8nKVxuICAgICAgfVxuXG4gICAgICBjaGVja09wdGlvbnMob3B0aW9ucylcbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZGVwcmljYXRlLCBvcHRpb25zKVxuICAgICAgY29weU9wdGlvbnMob3B0aW9ucylcblxuICAgICAgaWYgKHNldHRpbmdzW2lmcmFtZUlkXSkge1xuICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0udGFyZ2V0T3JpZ2luID1cbiAgICAgICAgICB0cnVlID09PSBzZXR0aW5nc1tpZnJhbWVJZF0uY2hlY2tPcmlnaW5cbiAgICAgICAgICAgID8gZ2V0VGFyZ2V0T3JpZ2luKHNldHRpbmdzW2lmcmFtZUlkXS5yZW1vdGVIb3N0KVxuICAgICAgICAgICAgOiAnKidcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiZWVuSGVyZSgpIHtcbiAgICAgIHJldHVybiBpZnJhbWVJZCBpbiBzZXR0aW5ncyAmJiAnaUZyYW1lUmVzaXplcicgaW4gaWZyYW1lXG4gICAgfVxuXG4gICAgdmFyIGlmcmFtZUlkID0gZW5zdXJlSGFzSWQoaWZyYW1lLmlkKVxuXG4gICAgaWYgKCFiZWVuSGVyZSgpKSB7XG4gICAgICBwcm9jZXNzT3B0aW9ucyhvcHRpb25zKVxuICAgICAgc2V0U2Nyb2xsaW5nKClcbiAgICAgIHNldExpbWl0cygpXG4gICAgICBzZXR1cEJvZHlNYXJnaW5WYWx1ZXMoKVxuICAgICAgaW5pdChjcmVhdGVPdXRnb2luZ01zZyhpZnJhbWVJZCkpXG4gICAgICBzZXR1cElGcmFtZU9iamVjdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oaWZyYW1lSWQsICdJZ25vcmVkIGlGcmFtZSwgYWxyZWFkeSBzZXR1cC4nKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91Y2UoZm4sIHRpbWUpIHtcbiAgICBpZiAobnVsbCA9PT0gdGltZXIpIHtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpbWVyID0gbnVsbFxuICAgICAgICBmbigpXG4gICAgICB9LCB0aW1lKVxuICAgIH1cbiAgfVxuXG4gIHZhciBmcmFtZVRpbWVyID0ge31cbiAgZnVuY3Rpb24gZGVib3VuY2VGcmFtZUV2ZW50cyhmbiwgdGltZSwgZnJhbWVJZCkge1xuICAgIGlmICghZnJhbWVUaW1lcltmcmFtZUlkXSkge1xuICAgICAgZnJhbWVUaW1lcltmcmFtZUlkXSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmcmFtZVRpbWVyW2ZyYW1lSWRdID0gbnVsbFxuICAgICAgICBmbigpXG4gICAgICB9LCB0aW1lKVxuICAgIH1cbiAgfVxuXG4gIC8vIE5vdCB0ZXN0YWJsZSBpbiBQaGFudG9tSlNcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuICBmdW5jdGlvbiBmaXhIaWRkZW5JRnJhbWVzKCkge1xuICAgIGZ1bmN0aW9uIGNoZWNrSUZyYW1lcygpIHtcbiAgICAgIGZ1bmN0aW9uIGNoZWNrSUZyYW1lKHNldHRpbmdJZCkge1xuICAgICAgICBmdW5jdGlvbiBjaGtEaW1lbnNpb24oZGltZW5zaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICcwcHgnID09PVxuICAgICAgICAgICAgKHNldHRpbmdzW3NldHRpbmdJZF0gJiYgc2V0dGluZ3Nbc2V0dGluZ0lkXS5pZnJhbWUuc3R5bGVbZGltZW5zaW9uXSlcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpc1Zpc2libGUoZWwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbCAhPT0gZWwub2Zmc2V0UGFyZW50XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgc2V0dGluZ3Nbc2V0dGluZ0lkXSAmJlxuICAgICAgICAgIGlzVmlzaWJsZShzZXR0aW5nc1tzZXR0aW5nSWRdLmlmcmFtZSkgJiZcbiAgICAgICAgICAoY2hrRGltZW5zaW9uKCdoZWlnaHQnKSB8fCBjaGtEaW1lbnNpb24oJ3dpZHRoJykpXG4gICAgICAgICkge1xuICAgICAgICAgIHRyaWdnZXIoXG4gICAgICAgICAgICAnVmlzaWJpbGl0eSBjaGFuZ2UnLFxuICAgICAgICAgICAgJ3Jlc2l6ZScsXG4gICAgICAgICAgICBzZXR0aW5nc1tzZXR0aW5nSWRdLmlmcmFtZSxcbiAgICAgICAgICAgIHNldHRpbmdJZFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhzZXR0aW5ncykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGNoZWNrSUZyYW1lKGtleSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbXV0YXRpb25PYnNlcnZlZChtdXRhdGlvbnMpIHtcbiAgICAgIGxvZyhcbiAgICAgICAgJ3dpbmRvdycsXG4gICAgICAgICdNdXRhdGlvbiBvYnNlcnZlZDogJyArIG11dGF0aW9uc1swXS50YXJnZXQgKyAnICcgKyBtdXRhdGlvbnNbMF0udHlwZVxuICAgICAgKVxuICAgICAgZGVib3VjZShjaGVja0lGcmFtZXMsIDE2KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICAgICAgICBjaGFyYWN0ZXJEYXRhT2xkVmFsdWU6IGZhbHNlLFxuICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25PYnNlcnZlZClcblxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIGNvbmZpZylcbiAgICB9XG5cbiAgICB2YXIgTXV0YXRpb25PYnNlcnZlciA9IGdldE11dGF0aW9uT2JzZXJ2ZXIoKVxuICAgIGlmIChNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICBjcmVhdGVNdXRhdGlvbk9ic2VydmVyKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNpemVJRnJhbWVzKGV2ZW50KSB7XG4gICAgZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgc2VuZFRyaWdnZXJNc2coJ1dpbmRvdyAnICsgZXZlbnQsICdyZXNpemUnKVxuICAgIH1cblxuICAgIGxvZygnd2luZG93JywgJ1RyaWdnZXIgZXZlbnQ6ICcgKyBldmVudClcbiAgICBkZWJvdWNlKHJlc2l6ZSwgMTYpXG4gIH1cblxuICAvLyBOb3QgdGVzdGFibGUgaW4gUGhhbnRvbUpTXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGZ1bmN0aW9uIHRhYlZpc2libGUoKSB7XG4gICAgZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgc2VuZFRyaWdnZXJNc2coJ1RhYiBWaXNhYmxlJywgJ3Jlc2l6ZScpXG4gICAgfVxuXG4gICAgaWYgKCdoaWRkZW4nICE9PSBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUpIHtcbiAgICAgIGxvZygnZG9jdW1lbnQnLCAnVHJpZ2dlciBldmVudDogVmlzaWJsaXR5IGNoYW5nZScpXG4gICAgICBkZWJvdWNlKHJlc2l6ZSwgMTYpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2VuZFRyaWdnZXJNc2coZXZlbnROYW1lLCBldmVudCkge1xuICAgIGZ1bmN0aW9uIGlzSUZyYW1lUmVzaXplRW5hYmxlZChpZnJhbWVJZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdICYmXG4gICAgICAgICdwYXJlbnQnID09PSBzZXR0aW5nc1tpZnJhbWVJZF0ucmVzaXplRnJvbSAmJlxuICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uYXV0b1Jlc2l6ZSAmJlxuICAgICAgICAhc2V0dGluZ3NbaWZyYW1lSWRdLmZpcnN0UnVuXG4gICAgICApXG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoc2V0dGluZ3MpLmZvckVhY2goZnVuY3Rpb24gKGlmcmFtZUlkKSB7XG4gICAgICBpZiAoaXNJRnJhbWVSZXNpemVFbmFibGVkKGlmcmFtZUlkKSkge1xuICAgICAgICB0cmlnZ2VyKGV2ZW50TmFtZSwgZXZlbnQsIHNldHRpbmdzW2lmcmFtZUlkXS5pZnJhbWUsIGlmcmFtZUlkKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnbWVzc2FnZScsIGlGcmFtZUxpc3RlbmVyKVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNpemVJRnJhbWVzKCdyZXNpemUnKVxuICAgIH0pXG5cbiAgICBhZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCAndmlzaWJpbGl0eWNoYW5nZScsIHRhYlZpc2libGUpXG5cbiAgICBhZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCAnLXdlYmtpdC12aXNpYmlsaXR5Y2hhbmdlJywgdGFiVmlzaWJsZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGZhY3RvcnkoKSB7XG4gICAgZnVuY3Rpb24gaW5pdChvcHRpb25zLCBlbGVtZW50KSB7XG4gICAgICBmdW5jdGlvbiBjaGtUeXBlKCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQudGFnTmFtZSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdCBpcyBub3QgYSB2YWxpZCBET00gZWxlbWVudCcpXG4gICAgICAgIH0gZWxzZSBpZiAoJ0lGUkFNRScgIT09IGVsZW1lbnQudGFnTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICdFeHBlY3RlZCA8SUZSQU1FPiB0YWcsIGZvdW5kIDwnICsgZWxlbWVudC50YWdOYW1lICsgJz4nXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGNoa1R5cGUoKVxuICAgICAgICBzZXR1cElGcmFtZShlbGVtZW50LCBvcHRpb25zKVxuICAgICAgICBpRnJhbWVzLnB1c2goZWxlbWVudClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YXJuRGVwcmVjYXRlZE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbmFibGVQdWJsaWNNZXRob2RzKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ2VuYWJsZVB1YmxpY01ldGhvZHMgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQsIHB1YmxpYyBtZXRob2RzIGFyZSBub3cgYWx3YXlzIGF2YWlsYWJsZSBpbiB0aGUgaUZyYW1lJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGlGcmFtZXNcblxuICAgIHNldHVwUmVxdWVzdEFuaW1hdGlvbkZyYW1lKClcbiAgICBzZXR1cEV2ZW50TGlzdGVuZXJzKClcblxuICAgIHJldHVybiBmdW5jdGlvbiBpRnJhbWVSZXNpemVGKG9wdGlvbnMsIHRhcmdldCkge1xuICAgICAgaUZyYW1lcyA9IFtdIC8vIE9ubHkgcmV0dXJuIGlGcmFtZXMgcGFzdCBpbiBvbiB0aGlzIGNhbGxcblxuICAgICAgd2FybkRlcHJlY2F0ZWRPcHRpb25zKG9wdGlvbnMpXG5cbiAgICAgIHN3aXRjaCAodHlwZW9mIHRhcmdldCkge1xuICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCB8fCAnaWZyYW1lJyksXG4gICAgICAgICAgICBpbml0LmJpbmQodW5kZWZpbmVkLCBvcHRpb25zKVxuICAgICAgICAgIClcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgaW5pdChvcHRpb25zLCB0YXJnZXQpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1VuZXhwZWN0ZWQgZGF0YSB0eXBlICgnICsgdHlwZW9mIHRhcmdldCArICcpJylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlGcmFtZXNcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVKUXVlcnlQdWJsaWNNZXRob2QoJCkge1xuICAgIGlmICghJC5mbikge1xuICAgICAgaW5mbygnJywgJ1VuYWJsZSB0byBiaW5kIHRvIGpRdWVyeSwgaXQgaXMgbm90IGZ1bGx5IGxvYWRlZC4nKVxuICAgIH0gZWxzZSBpZiAoISQuZm4uaUZyYW1lUmVzaXplKSB7XG4gICAgICAkLmZuLmlGcmFtZVJlc2l6ZSA9IGZ1bmN0aW9uICRpRnJhbWVSZXNpemVGKG9wdGlvbnMpIHtcbiAgICAgICAgZnVuY3Rpb24gaW5pdChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgIHNldHVwSUZyYW1lKGVsZW1lbnQsIG9wdGlvbnMpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIoJ2lmcmFtZScpLmVhY2goaW5pdCkuZW5kKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAod2luZG93LmpRdWVyeSkge1xuICAgIGNyZWF0ZUpRdWVyeVB1YmxpY01ldGhvZCh3aW5kb3cualF1ZXJ5KVxuICB9XG5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXSwgZmFjdG9yeSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gTm9kZSBmb3IgYnJvd3NlcmZ5XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KClcbiAgfVxuICB3aW5kb3cuaUZyYW1lUmVzaXplID0gd2luZG93LmlGcmFtZVJlc2l6ZSB8fCBmYWN0b3J5KClcbn0pKClcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Cb29raW5nV2lkZ2V0TW9kYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Cb29raW5nV2lkZ2V0TW9kYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQm9va2luZ1dpZGdldCA9IHZvaWQgMDtcclxudmFyIGlmcmFtZV9yZXNpemVyXzEgPSByZXF1aXJlKFwiaWZyYW1lLXJlc2l6ZXJcIik7XHJcbnZhciBCb29raW5nV2lkZ2V0QXR0cmlidXRlc18xID0gcmVxdWlyZShcIi4vQm9va2luZ1dpZGdldEF0dHJpYnV0ZXNcIik7XHJcbnJlcXVpcmUoXCIuL0Jvb2tpbmdXaWRnZXRNb2RhbC5jc3NcIik7XHJcbnZhciBCb29raW5nV2lkZ2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9va2luZ1dpZGdldCgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucmVzaXplZElmcmFtZXMgPSBbXTtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1tdWx0aWxpbmUtc3RyaW5nICovXHJcbiAgICAgICAgdGhpcy5idXR0b25TdHlsZSA9IFwiXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg1QUQ7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwIDE2cHggMCAxNnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCA0cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIFwiXHJcbiAgICAgICAgICAgIC50cmltKClcclxuICAgICAgICAgICAgLnNwbGl0KFwiXFxuXCIpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMudHJpbSgpOyB9KVxyXG4gICAgICAgICAgICAuam9pbihcIiBcIik7XHJcbiAgICAgICAgLy8gcHJpdmF0ZSBiYXNlVXJsID0gXCJodHRwczovL2xvY2FsaG9zdDo4MDgwXCI7XHJcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gXCJodHRwczovL2Nsb3VkLmNhc3BlY28uc2VcIjtcclxuICAgICAgICB0aGlzLmFkZE1vZGFsMkJvZHkgPSBmdW5jdGlvbiAoaWZyYW1lLCBzZGssIGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgLyogVGhlIHBhZ2UgbmVlZHMgdG8gaGF2ZSB0aGUgcmlnaHQgY2hhcnNldCBiZWZvcmUgbG9hZGluZyB0aGUgd2lkZ2V0XHJcbiAgICAgICAgICAgIC8vIFNldCBjaGFyc2V0IHRvIFVURi04IHRvIHNob3cgdGhlIMOXIGNoYXJhY3RlciBhcyBjbG9zZSBidXR0b25cclxuICAgICAgICAgICAgY29uc3QgbWV0YXMgPSB3aW5kb3cuZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yQWxsKFwibWV0YVwiKTtcclxuICAgICAgICAgICAgbGV0IG1ldGFVVEY4RXhpc3RzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG1ldGFzLmZvckVhY2goKG1ldGEpID0+IHtcclxuICAgICAgICAgICAgICBpZiAobWV0YS5nZXRBdHRyaWJ1dGVOb2RlKFwiY2hhcnNldFwiKT8udmFsdWUgPT09IFwiVVRGLThcIikge1xyXG4gICAgICAgICAgICAgICAgbWV0YVVURjhFeGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghbWV0YVVURjhFeGlzdHMpIHtcclxuICAgICAgICAgICAgICBjb25zdCBtZXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1ldGFcIik7XHJcbiAgICAgICAgICAgICAgbWV0YS5zZXRBdHRyaWJ1dGUoXCJjaGFyc2V0XCIsIFwiVVRGLThcIik7XHJcbiAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgLy8gQ2xvc2UgYnV0dG9uXHJcbiAgICAgICAgICAgIHZhciBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgY2xvc2VJY29uLmNsYXNzTmFtZSA9IFwiY2xvc2VJY29uXCI7XHJcbiAgICAgICAgICAgIGNsb3NlSWNvbi50ZXh0Q29udGVudCA9IFwiw5dcIjtcclxuICAgICAgICAgICAgY2xvc2VJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbCk7IH0pO1xyXG4gICAgICAgICAgICAvLyBUaGUgbWFpbiBjb250YWluZXJcclxuICAgICAgICAgICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgbW9kYWwuY2xhc3NOYW1lID0gXCJjYXNwZWNvLWJvb2tpbmctbW9kYWxcIjtcclxuICAgICAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcclxuICAgICAgICAgICAgLy8gSW5uZXIgY29udGFpbmVyXHJcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJjYXNwZWNvLWJvb2tpbmctbW9kYWwtY29udGFpbmVyXCI7XHJcbiAgICAgICAgICAgIC8vIERpc3JlZ2FyZCBjb25zdGFudCBoZWlnaHRzIHNldCBpbiB3aWRnZXQgYXR0cmlidXRlc1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmhlaWdodCA9IFwiYXV0b1wiO1xyXG4gICAgICAgICAgICAvLyBBZGQgdGhlIGlmcmFtZSB0byByZXNpemVyXHJcbiAgICAgICAgICAgIHZhciBpZnJhbWVSZXNpemVPcHRpb25zID0gX3RoaXMuZ2V0SUZyYW1lUmVzaXplT3B0aW9ucyhhdHRyaWJ1dGVzLCBzZGspO1xyXG4gICAgICAgICAgICBfdGhpcy5yZXNpemVkSWZyYW1lcy5wdXNoKGlmcmFtZV9yZXNpemVyXzEuaWZyYW1lUmVzaXplcihpZnJhbWVSZXNpemVPcHRpb25zLCBpZnJhbWUpWzBdKTtcclxuICAgICAgICAgICAgLy8gV3JhcCBpdCBhbmQgYWRkIHRvIHRoZSBib2R5XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG4gICAgICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb29raW5nV2lkZ2V0LCBcIklOU1RBTkNFXCIsIHtcclxuICAgICAgICAvLyBwcml2YXRlIGJhc2VVcmwgPSBcImh0dHBzOi8vd2VicGxhdGZvcm0tdHJhY2tpbmdkZXYuYXp1cmV3ZWJzaXRlcy5uZXRcIjtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UgfHwgKHRoaXMuaW5zdGFuY2UgPSBuZXcgQm9va2luZ1dpZGdldCgpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBCb29raW5nV2lkZ2V0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHNkaywgZm9yY2VJbml0KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcnMgPSBzZGsud2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXNwZWNvLWJvb2tpbmdcIik7XHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGU6cHJlZmVyLWZvci1vZiAqL1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb250YWluZXJzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcnNbaV07XHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXIuZmlyc3RDaGlsZCAhPT0gbnVsbCAmJiBjb250YWluZXIuZmlyc3RDaGlsZC5ub2RlTmFtZSA9PT0gXCJpZnJhbWVcIikge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZvcmNlSW5pdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlcyA9IG5ldyBCb29raW5nV2lkZ2V0QXR0cmlidXRlc18xLkJvb2tpbmdXaWRnZXRBdHRyaWJ1dGVzKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5zeXN0ZW0gPT09IGF0dHJpYnV0ZXMuc3lzdGVtICYmIGZvcmNlSW5pdC51bml0SWQgPT09IGF0dHJpYnV0ZXMudW5pdElkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdEVsZW1lbnQoY29udGFpbmVyLCBzZGssIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0RWxlbWVudChjb250YWluZXIsIHNkayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHdpZGdldHMgPSBzZGsud2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXNwZWNvLWJvb2tpbmctd2lkZ2V0XCIpO1xyXG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBuZXcgQm9va2luZ1dpZGdldEF0dHJpYnV0ZXNfMS5Cb29raW5nV2lkZ2V0QXR0cmlidXRlcyh3aWRnZXRzW2ldKTtcclxuICAgICAgICAgICAgdmFyIGlmcmFtZSA9IHRoaXNfMS5nZXRJRnJhbWUoc2RrLndpbmRvdywgYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgIHdpZGdldHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFkZE1vZGFsMkJvZHkoaWZyYW1lLCBzZGssIGF0dHJpYnV0ZXMpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciB0aGlzXzEgPSB0aGlzO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd2lkZ2V0cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBCb29raW5nV2lkZ2V0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGlmcmFtZUluZGV4ID0gMDsgaWZyYW1lSW5kZXggPCB0aGlzLnJlc2l6ZWRJZnJhbWVzLmxlbmd0aDsgaWZyYW1lSW5kZXggKz0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZWRJZnJhbWVzW2lmcmFtZUluZGV4XS5pRnJhbWVSZXNpemVyLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzaXplZElmcmFtZXMgPSBbXTtcclxuICAgIH07XHJcbiAgICBCb29raW5nV2lkZ2V0LnByb3RvdHlwZS5pbml0RWxlbWVudCA9IGZ1bmN0aW9uIChjb250YWluZXIsIHNkaywgZm9yY2VJbml0KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IG5ldyBCb29raW5nV2lkZ2V0QXR0cmlidXRlc18xLkJvb2tpbmdXaWRnZXRBdHRyaWJ1dGVzKGNvbnRhaW5lcik7XHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMuYnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1pbm5lci1odG1sICovXHJcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBhdHRyaWJ1dGVzLmJ1dHRvblRleHQ7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCB0aGlzLmJ1dHRvblN0eWxlKTtcclxuICAgICAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihfdGhpcy5nZXRVUkwoYXR0cmlidXRlcykpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZm9yY2VJbml0IHx8IGF0dHJpYnV0ZXMuYXV0b0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgdmFyIGlmcmFtZSA9IHRoaXMuZ2V0SUZyYW1lKHNkay53aW5kb3csIGF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICBpZnJhbWUgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuICAgICAgICAgICAgdmFyIGlmcmFtZVJlc2l6ZU9wdGlvbnMgPSB0aGlzLmdldElGcmFtZVJlc2l6ZU9wdGlvbnMoYXR0cmlidXRlcywgc2RrKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNpemVkSWZyYW1lcy5wdXNoKGlmcmFtZV9yZXNpemVyXzEuaWZyYW1lUmVzaXplcihpZnJhbWVSZXNpemVPcHRpb25zLCBpZnJhbWUpWzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQm9va2luZ1dpZGdldC5wcm90b3R5cGUuZ2V0VVJMID0gZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICB2YXIgc3JjID0gdGhpcy5iYXNlVXJsICsgXCIvcHVibGljL3dlYkJvb2tpbmc/aXNXZWJCb29raW5nPXRydWVcIjtcclxuICAgICAgICBzcmMgKz0gXCImc3lzdGVtPVwiICsgYXR0ci5zeXN0ZW0gKyBcIiZ1bml0SWQ9XCIgKyBhdHRyLnVuaXRJZCArIFwiJmxhbmc9XCIgKyBhdHRyLmxhbmcgKyBcIiZoZWlnaHQ9XCIgKyBhdHRyLmhlaWdodDtcclxuICAgICAgICBpZiAoIWF0dHIuYnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHNyYyArPSBcIiZpbklGcmFtZT10cnVlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhdHRyLmF1dG9TY3JvbGwpIHtcclxuICAgICAgICAgICAgc3JjICs9IFwiJmF1dG9TY3JvbGw9dHJ1ZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXR0ci5zZWN0aW9uSWRzKSB7XHJcbiAgICAgICAgICAgIHNyYyArPSBcIiZzZWN0aW9uSWRzPVwiICsgYXR0ci5zZWN0aW9uSWRzLmpvaW4oXCIsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXR0ci5hZHZhbmNlZCkge1xyXG4gICAgICAgICAgICBzcmMgKz0gXCImYWR2YW5jZWQ9dHJ1ZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXR0ci5vbmxpbmVvcmRlcikge1xyXG4gICAgICAgICAgICBzcmMgKz0gXCImb25saW5lb3JkZXI9dHJ1ZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXR0ci5jb2xvclRoZW1lKSB7XHJcbiAgICAgICAgICAgIHNyYyArPSBcIiZjb2xvclRoZW1lPXRydWVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGF0dHIubWFpdHJlcykge1xyXG4gICAgICAgICAgICBzcmMgKz0gXCImbWFpdHJlcz10cnVlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNyYyArPSBcIiZob3N0VVJMPVwiICsgZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcclxuICAgICAgICByZXR1cm4gc3JjO1xyXG4gICAgfTtcclxuICAgIEJvb2tpbmdXaWRnZXQucHJvdG90eXBlLmdldElGcmFtZSA9IGZ1bmN0aW9uICh3LCBhdHRyKSB7XHJcbiAgICAgICAgdmFyIGlmcmFtZSA9IHcuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgICAgICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgICAgICBpZiAodWEuaW5kZXhPZihcIk1TSUUgXCIpID4gMCB8fCB1YS5pbmRleE9mKFwiVHJpZGVudC9cIikgPiAwKSB7XHJcbiAgICAgICAgICAgIGlmcmFtZS5zY3JvbGxpbmcgPSBcInllc1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWZyYW1lLnNjcm9sbGluZyA9IFwibm9cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZShcImJvcmRlclwiLCBcIjBcIik7XHJcbiAgICAgICAgaWZyYW1lLnN0eWxlLndpZHRoID0gXCIxcHhcIjtcclxuICAgICAgICBpZnJhbWUuc3R5bGUubWluV2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICBpZnJhbWUuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICAgICAgaWZyYW1lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICBpZnJhbWUuc3JjID0gdGhpcy5nZXRVUkwoYXR0cik7XHJcbiAgICAgICAgcmV0dXJuIGlmcmFtZTtcclxuICAgIH07XHJcbiAgICBCb29raW5nV2lkZ2V0LnByb3RvdHlwZS5nZXRJRnJhbWVSZXNpemVPcHRpb25zID0gZnVuY3Rpb24gKGF0dHIsIHNkaykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGhlaWdodElzQXV0byA9IGF0dHIuaGVpZ2h0ID09PSBcImF1dG9cIjtcclxuICAgICAgICB2YXIgd2lkdGhJc0F1dG8gPSBhdHRyLndpZHRoID09PSBcImF1dG9cIjtcclxuICAgICAgICB2YXIgbWluV2lkdGggPSAzMjA7XHJcbiAgICAgICAgdmFyIG1pbkhlaWdodCA9IDU1MDtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1odHRwLXN0cmluZyAqL1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9uSW5pdDogZnVuY3Rpb24gKGlmcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWZyYW1lLmlGcmFtZVJlc2l6ZXIuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUsXHJcbiAgICAgICAgICAgICAgICB9LCBfdGhpcy5iYXNlVXJsKTtcclxuICAgICAgICAgICAgICAgIGlmICh3aWR0aElzQXV0bykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmcmFtZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbk1lc3NhZ2U6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkjDpHIgw6RyIGV0dCBldmVudFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT09IFwic2VuZENvbG9yVGhlbWVcIiAmJiBhdHRyLmNvbG9yVGhlbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmlmcmFtZS5pRnJhbWVSZXNpemVyLnNlbmRNZXNzYWdlKHsgY29sb3JUaGVtZTogYXR0ci5jb2xvclRoZW1lIH0sIF90aGlzLmJhc2VVcmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5tZXNzYWdlLmV2ZW50VHlwZSAmJiBkYXRhLm1lc3NhZ2UuZXZlbnRUeXBlID09PSBcImJvb2tpbmdFdmVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pZnJhbWUuaUZyYW1lUmVzaXplci5zZW5kTWVzc2FnZShcImJvb2tpbmdFdmVudFwiLCBkYXRhLm1lc3NhZ2UuZXZlbnQsIGRhdGEubWVzc2FnZS5wYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2hlY2tPcmlnaW46IFt0aGlzLmJhc2VVcmxdLFxyXG4gICAgICAgICAgICBzY3JvbGxpbmc6ICFoZWlnaHRJc0F1dG8sXHJcbiAgICAgICAgICAgIGJvZHlCYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMClcIixcclxuICAgICAgICAgICAgaGVpZ2h0Q2FsY3VsYXRpb25NZXRob2Q6IFwidGFnZ2VkRWxlbWVudFwiLFxyXG4gICAgICAgICAgICBib2R5TWFyZ2luOiAzLFxyXG4gICAgICAgICAgICBtaW5XaWR0aDogTWF0aC5tYXgobWluV2lkdGgsIHdpZHRoSXNBdXRvID8gMCA6IGF0dHIud2lkdGgpLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogd2lkdGhJc0F1dG8gPyBJbmZpbml0eSA6IE1hdGgubWF4KGF0dHIud2lkdGgsIG1pbldpZHRoKSxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBNYXRoLm1heChtaW5IZWlnaHQsIGhlaWdodElzQXV0byA/IDAgOiBhdHRyLmhlaWdodCksXHJcbiAgICAgICAgICAgIG1heEhlaWdodDogaGVpZ2h0SXNBdXRvID8gSW5maW5pdHkgOiBNYXRoLm1heChhdHRyLmhlaWdodCwgbWluSGVpZ2h0KSxcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCb29raW5nV2lkZ2V0O1xyXG59KCkpO1xyXG5leHBvcnRzLkJvb2tpbmdXaWRnZXQgPSBCb29raW5nV2lkZ2V0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkJvb2tpbmdXaWRnZXRBdHRyaWJ1dGVzID0gdm9pZCAwO1xyXG52YXIgQm9va2luZ1dpZGdldEF0dHJpYnV0ZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCb29raW5nV2lkZ2V0QXR0cmlidXRlcyhlbGVtKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnN5c3RlbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy51bml0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbklkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBcImF1dG9cIjtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IFwiYXV0b1wiO1xyXG4gICAgICAgIHRoaXMuY29sb3JUaGVtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sYW5nID0gXCJzdi1TRVwiO1xyXG4gICAgICAgIHRoaXMuYXV0b1Njcm9sbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hZHZhbmNlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIkJva2FcIjtcclxuICAgICAgICB0aGlzLm9ubGluZW9yZGVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hdXRvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdXBwb3J0ZWRMYW5ncyA9IFtcInN2LVNFXCIsIFwiZW4tVVNcIiwgXCJlbi1HQlwiLCBcIm5iLU5PXCIsIFwibmwtQkVcIiwgXCJmci1CRVwiLCBcInJ1LVJVXCIsIFwiZXQtRUVcIiwgXCJlcy1FU1wiXTtcclxuICAgICAgICBbXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcInVuaXRJZFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHN0clZhbCA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1cIiArIGtleSk7XHJcbiAgICAgICAgICAgIGlmIChzdHJWYWwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB2YWwgPSBwYXJzZUludChzdHJWYWwsIDEwKTtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKHZhbCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzW2tleV0gPSB2YWw7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBsYW5nID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxhbmdcIik7XHJcbiAgICAgICAgaWYgKGxhbmcpIHtcclxuICAgICAgICAgICAgbGFuZyA9IHRoaXMudXBwZXJDYXNlSUNVTG9jYWxlKGxhbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGFuZyAmJiB0aGlzLnN1cHBvcnRlZExhbmdzLmluZGV4T2YobGFuZykgPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmcgPSBsYW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN5c3RlbSA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1zeXN0ZW1cIik7XHJcbiAgICAgICAgdmFyIGF1dG9TY3JvbGwgPSBlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtYXV0b1Njcm9sbFwiKTtcclxuICAgICAgICB0aGlzLmF1dG9TY3JvbGwgPSAhIWF1dG9TY3JvbGwgJiYgYXV0b1Njcm9sbCA9PT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgdmFyIGFkdmFuY2VkID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFkdmFuY2VkXCIpO1xyXG4gICAgICAgIHRoaXMuYWR2YW5jZWQgPSAhIWFkdmFuY2VkICYmIGFkdmFuY2VkID09PSBcInRydWVcIjtcclxuICAgICAgICB2YXIgb25saW5lb3JkZXIgPSBlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtb25saW5lb3JkZXJcIik7XHJcbiAgICAgICAgdGhpcy5vbmxpbmVvcmRlciA9ICEhb25saW5lb3JkZXIgJiYgb25saW5lb3JkZXIgPT09IFwidHJ1ZVwiO1xyXG4gICAgICAgIHZhciBidXR0b24gPSBlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gISFidXR0b24gJiYgYnV0dG9uID09PSBcInRydWVcIjtcclxuICAgICAgICB2YXIgYnV0dG9uVGV4dCA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1idXR0b25UZXh0XCIpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IGJ1dHRvblRleHQgfHwgdGhpcy5idXR0b25UZXh0O1xyXG4gICAgICAgIHZhciBzZWN0aW9uSWRzID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlY3Rpb25JZHNcIik7XHJcbiAgICAgICAgaWYgKHNlY3Rpb25JZHMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWN0aW9uSWRzID0gc2VjdGlvbklkcy5zcGxpdChcIixcIikubWFwKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gcGFyc2VJbnQoaWQsIDEwKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb2xvclRoZW1lID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbG9yVGhlbWVcIik7XHJcbiAgICAgICAgaWYgKGNvbG9yVGhlbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvclRoZW1lID0gSlNPTi5wYXJzZShjb2xvclRoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1haXRyZXMgPSBlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtbWFpdHJlc1wiKTtcclxuICAgICAgICB0aGlzLm1haXRyZXMgPSAhIW1haXRyZXMgJiYgbWFpdHJlcyA9PT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgdmFyIGF1dG9Mb2FkaW5nID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWF1dG9Mb2FkaW5nXCIpO1xyXG4gICAgICAgIGlmIChhdXRvTG9hZGluZylcclxuICAgICAgICAgICAgdGhpcy5hdXRvTG9hZGluZyA9IGF1dG9Mb2FkaW5nID09PSBcInRydWVcIjtcclxuICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICB9XHJcbiAgICBCb29raW5nV2lkZ2V0QXR0cmlidXRlcy5wcm90b3R5cGUudXBwZXJDYXNlSUNVTG9jYWxlID0gZnVuY3Rpb24gKGljdWxvY2FsZSkge1xyXG4gICAgICAgIHZhciBwYXJ0cyA9IGljdWxvY2FsZS5zcGxpdChcIi1cIik7XHJcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA8IDIpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgSUNVIExvY2FsZTogXCIgKyBpY3Vsb2NhbGUpO1xyXG4gICAgICAgIHZhciBpY3VMb2NhbGUgPSBwYXJ0c1swXSArIFwiLVwiICsgcGFydHNbMV0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICBpZiAodGhpcy5zdXBwb3J0ZWRMYW5ncy5pbmRleE9mKGljdUxvY2FsZSkgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaWN1TG9jYWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEJvb2tpbmdXaWRnZXRBdHRyaWJ1dGVzLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZXJyb3JzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMudW5pdElkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZXJyb3JzLnB1c2goXCJObyB1bml0SWQgcHJvdmlkZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN5c3RlbSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKFwiTm8gc3lzdGVtIHByb3ZpZGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5qb2luKFwiXFxuXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJvb2tpbmdXaWRnZXRBdHRyaWJ1dGVzO1xyXG59KCkpO1xyXG5leHBvcnRzLkJvb2tpbmdXaWRnZXRBdHRyaWJ1dGVzID0gQm9va2luZ1dpZGdldEF0dHJpYnV0ZXM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQm9va2luZ1dpZGdldEJvb3RzdHJhcCA9IHZvaWQgMDtcclxudmFyIEJvb2tpbmdXaWRnZXRfMSA9IHJlcXVpcmUoXCIuL0Jvb2tpbmdXaWRnZXRcIik7XHJcbnZhciBCb29raW5nV2lkZ2V0Qm9vdHN0cmFwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm9va2luZ1dpZGdldEJvb3RzdHJhcChzZGspIHtcclxuICAgICAgICB0aGlzLnNkayA9IHNkaztcclxuICAgIH1cclxuICAgIEJvb2tpbmdXaWRnZXRCb290c3RyYXAuSU5TVEFOQ0UgPSBmdW5jdGlvbiAoc2RrKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UgfHwgKHRoaXMuaW5zdGFuY2UgPSBuZXcgdGhpcyhzZGspKTtcclxuICAgIH07XHJcbiAgICBCb29raW5nV2lkZ2V0Qm9vdHN0cmFwLnByb3RvdHlwZS5kZXRlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsID0gdGhpcy5zZGsud2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FzcGVjby1ib29raW5nLC5jYXNwZWNvLWJvb2tpbmctd2lkZ2V0XCIpO1xyXG4gICAgICAgIHJldHVybiBlbC5sZW5ndGggPiAwO1xyXG4gICAgfTtcclxuICAgIC8vIHRoZSBzZGsgaXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGUgQm9va2luZ1dpZGdldCBwZXIgZGVmYXVsdCBhdCB0aGUgbW9tZW50XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1yZXNlcnZlZC1rZXl3b3Jkc1xyXG4gICAgQm9va2luZ1dpZGdldEJvb3RzdHJhcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBCb29raW5nV2lkZ2V0XzEuQm9va2luZ1dpZGdldC5JTlNUQU5DRTtcclxuICAgIH07XHJcbiAgICBCb29raW5nV2lkZ2V0Qm9vdHN0cmFwLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJvb2tpbmdXaWRnZXRCb290c3RyYXAtPmxvYWQgaXMgbm90IGltcGxlbWVudGVkXCIpO1xyXG4gICAgICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gICB0cnkge1xyXG4gICAgICAgIC8vICAgICByZXNvbHZlKG5ldyBCb29raW5nV2lkZ2V0KCkpO1xyXG4gICAgICAgIC8vICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAvLyAgICAgcmVqZWN0KGV4KTtcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQm9va2luZ1dpZGdldEJvb3RzdHJhcDtcclxufSgpKTtcclxuZXhwb3J0cy5Cb29raW5nV2lkZ2V0Qm9vdHN0cmFwID0gQm9va2luZ1dpZGdldEJvb3RzdHJhcDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG4vKiFcclxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIENhc3BlY28gQUIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFlvdSBhcmUgaGVyZWJ5IGdyYW50ZWQgYSBub24tZXhjbHVzaXZlLCB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSBsaWNlbnNlIHRvIHVzZSxcclxuICogY29weSwgbW9kaWZ5LCBhbmQgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGluIHNvdXJjZSBjb2RlIG9yIGJpbmFyeSBmb3JtIGZvciB1c2VcclxuICogaW4gY29ubmVjdGlvbiB3aXRoIHRoZSB3ZWIgc2VydmljZXMgYW5kIEFQSXMgcHJvdmlkZWQgYnkgQ2FzcGVjby5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTU1xyXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1JcclxuICogQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXHJcbiAqIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXHJcbiAqIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuU0RLID0gdm9pZCAwO1xyXG52YXIgQm9va2luZ1dpZGdldEJvb3RzdHJhcF8xID0gcmVxdWlyZShcIi4vYm9va2luZy9Cb29raW5nV2lkZ2V0Qm9vdHN0cmFwXCIpO1xyXG52YXIgdmVyc2lvbiA9IFwiMS40LjBcIjtcclxuLyogdHNsaW50OmRpc2FibGU6bm8tY29uc29sZSAqL1xyXG4vKiB0c2xpbnQ6ZGlzYWJsZTpleHBvcnQtbmFtZSAqL1xyXG52YXIgU0RLID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU0RLKHcsIG5hbWUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubW9kdWxlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubW9kdWxlQm9vdHN0cmFwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSB7fTtcclxuICAgICAgICB0aGlzLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJlc2V0SGVpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVzZXRIZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzY3JvbGwydG9wXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2Nyb2xsMlRvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5ldmVudExpc3RlbmVyc1tldmVudF0pIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnRdID0gW2hhbmRsZXJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBfdGhpcy5pbml0KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmZvcmNlSW5pdCA9IGZ1bmN0aW9uIChmb3JjZUluaXRJbmZvKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgX3RoaXMuaW5pdChmb3JjZUluaXRJbmZvKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0VmVyc2lvbiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZlcnNpb247IH07XHJcbiAgICAgICAgdGhpcy5zY3JvbGwyVG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXNwZWNvLWJvb2tpbmdcIikuaXRlbSgwKTtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXIpXHJcbiAgICAgICAgICAgICAgICBfdGhpcy53aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBzY3JvbGxUb3AsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZXNldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhc3BlY28tYm9va2luZ1wiKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWZyYW1lID0gaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlmcmFtZVwiKS5pdGVtKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZnJhbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndpbmRvdyA9IHc7XHJcbiAgICAgICAgdGhpcy53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5vbk1lc3NhZ2UsIGZhbHNlKTtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cclxuICAgICAgICBpZiAod1tuYW1lXSA9PT0gdW5kZWZpbmVkIHx8ICh3W25hbWVdICE9PSB1bmRlZmluZWQgJiYgd1tuYW1lXS5yZUluaXQgPT09IHVuZGVmaW5lZCkpIHtcclxuICAgICAgICAgICAgaWYgKHdbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0RnVuYyA9IHdbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRGdW5jLmFkZEV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEV2ZW50TGlzdGVuZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRGdW5jLnJlSW5pdCA9IHRoaXMucmVJbml0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0RnVuYy5mb3JjZUluaXQgPSB0aGlzLmZvcmNlSW5pdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEZ1bmMuZ2V0VmVyc2lvbiA9IHRoaXMuZ2V0VmVyc2lvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEZ1bmMuc2Nyb2xsMlRvcCA9IHRoaXMuc2Nyb2xsMlRvcDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEZ1bmMucmVzZXRIZWlnaHQgPSB0aGlzLnJlc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdmFyIHEgPSB0aGlzLmluaXRGdW5jLnE7XHJcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuaW5pdEZ1bmMudDtcclxuICAgICAgICAgICAgICAgIHdbbmFtZV0gPSB0aGlzLmluaXRGdW5jO1xyXG4gICAgICAgICAgICAgICAgaWYgKHEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGV4ZWN1dGUgY2FsbGJhY2tzLCB0aGlzIHNob3VsZCBtYXliZSBiZSBkb25lIGFzIGEgY2FsbGJhY2sgdG8gaW5pdCgpP1xyXG4gICAgICAgICAgICAgICAgICAgIHEuZm9yRWFjaChmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGVuID0gYy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNbaV0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd1tuYW1lXSA9IHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAod1tuYW1lXS5yZUluaXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2luZG93ID0gdztcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAvLyB0aGlzLmluaXRNb2R1bGVzKCk7XHJcbiAgICB9XHJcbiAgICBTREsucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAoc2RrRXZlbnQsIGV2ZW50LCBwYXlsb2FkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnNbc2RrRXZlbnRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNbc2RrRXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIGhhbmRsZXIoZXZlbnQsIHBheWxvYWQpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU0RLLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKGZvcmNlSW5pdCkge1xyXG4gICAgICAgIHZhciBib29raW5nV2lkZ2V0Qm9vdHN0cmFwID0gQm9va2luZ1dpZGdldEJvb3RzdHJhcF8xLkJvb2tpbmdXaWRnZXRCb290c3RyYXAuSU5TVEFOQ0UodGhpcyk7XHJcbiAgICAgICAgaWYgKGJvb2tpbmdXaWRnZXRCb290c3RyYXAuZGV0ZWN0KCkpIHtcclxuICAgICAgICAgICAgdmFyIGJvb2tpbmdXaWRnZXQgPSBib29raW5nV2lkZ2V0Qm9vdHN0cmFwLmdldCgpO1xyXG4gICAgICAgICAgICBib29raW5nV2lkZ2V0LmluaXQodGhpcywgZm9yY2VJbml0KTtcclxuICAgICAgICAgICAgdGhpcy5tb2R1bGVzLnB1c2goYm9va2luZ1dpZGdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNESy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5kZXN0cm95KCk7IH0pO1xyXG4gICAgICAgIHRoaXMubW9kdWxlcyA9IFtdO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTREs7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU0RLID0gU0RLO1xyXG50cnkge1xyXG4gICAgLyogdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLWV4cHJlc3Npb24gKi9cclxuICAgIG5ldyBTREsod2luZG93LCB3aW5kb3cuQ2FzcGVjb1NES09iamVjdCB8fCBcImNhXCIpO1xyXG59XHJcbmNhdGNoIChleCkge1xyXG4gICAgY29uc29sZS5sb2coZXgpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==