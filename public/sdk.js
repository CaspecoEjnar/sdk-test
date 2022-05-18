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
        // private baseUrl: string = "https://localhost:8080";
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
                if (data.message === "sendColorTheme" && attr.colorTheme) {
                    data.iframe.iFrameResizer.sendMessage({ colorTheme: attr.colorTheme }, _this.baseUrl);
                }
                else if (data.message.eventType && data.message.eventType === "bookingEvent") {
                    sdk.emit("bookingEvent", data.message.event, data.message.payload);
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
        this.supportedLangs = ["sv-SE", "en-US", "en-GB", "nb-NO", "nl-BE", "fr-BE", "ru-RU", "et-EE", "es-ES", "fi-FI"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLFlBQVk7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbURBQW1EO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsV0FBVztBQUNYLCtCQUErQixtQkFBTyxDQUFDLGlGQUFrQztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw0RUFBNEU7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxpQ0FBaUM7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRzZGsvLi9tb2R1bGVzL2lmcmFtZS1yZXNpemVyL2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRzZGsvLi9tb2R1bGVzL2lmcmFtZS1yZXNpemVyL2pzL2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRzZGsvLi9zcmMvYm9va2luZy9Cb29raW5nV2lkZ2V0TW9kYWwuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHRzZGsvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRzZGsvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0c2RrLy4vbm9kZV9tb2R1bGVzL2lmcmFtZS1yZXNpemVyL2pzL2lmcmFtZVJlc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNkay8uL3NyYy9ib29raW5nL0Jvb2tpbmdXaWRnZXRNb2RhbC5jc3M/OWQyYiIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0c2RrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRzZGsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRzZGsvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNkay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0c2RrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNkay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRzZGsvLi9zcmMvYm9va2luZy9Cb29raW5nV2lkZ2V0LnRzIiwid2VicGFjazovL2phdmFzY3JpcHRzZGsvLi9zcmMvYm9va2luZy9Cb29raW5nV2lkZ2V0QXR0cmlidXRlcy50cyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0c2RrLy4vc3JjL2Jvb2tpbmcvQm9va2luZ1dpZGdldEJvb3RzdHJhcC50cyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0c2RrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHRzZGsvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNkay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNkay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHRzZGsvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0c2RrLy4vc3JjL3Nkay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2pzXCIpO1xyXG4iLCJpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gIGV4cG9ydHMuaWZyYW1lUmVzaXplciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaWZyYW1lLXJlc2l6ZXIvanMvaWZyYW1lUmVzaXplci5taW5cIik7XHJcbn0gZWxzZSB7XHJcbiAgZXhwb3J0cy5pZnJhbWVSZXNpemVyID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pZnJhbWUtcmVzaXplci9qcy9pZnJhbWVSZXNpemVyXCIpO1xyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhc3BlY28tYm9va2luZy1tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIHBhZGRpbmc6IDEwdncgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhc3BlY28tYm9va2luZy1tb2RhbC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIDI1dnc7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XFxyXFxuICBib3gtc2hhZG93OiBncmV5IC01cHggNXB4IDVweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUljb24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAtMC41cmVtO1xcclxcbiAgcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IGJsYWNrO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2MDBweCkge1xcclxcbiAgLmNhc3BlY28tYm9va2luZy1tb2RhbC1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDAgMXZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNsb3NlSWNvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAtMTdweDtcXHJcXG4gICAgcmlnaHQ6IC0zcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDYwMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDkwMHB4KSB7XFxyXFxuICAuY2FzcGVjby1ib29raW5nLW1vZGFsLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogMCA1dnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FzcGVjby1ib29raW5nLW1vZGFsIHtcXHJcXG4gICAgcGFkZGluZzogNXZoIDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ib29raW5nL0Jvb2tpbmdXaWRnZXRNb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNhc3BlY28tYm9va2luZy1tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIHBhZGRpbmc6IDEwdncgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhc3BlY28tYm9va2luZy1tb2RhbC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIDI1dnc7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XFxyXFxuICBib3gtc2hhZG93OiBncmV5IC01cHggNXB4IDVweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUljb24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAtMC41cmVtO1xcclxcbiAgcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IGJsYWNrO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2MDBweCkge1xcclxcbiAgLmNhc3BlY28tYm9va2luZy1tb2RhbC1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDAgMXZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNsb3NlSWNvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAtMTdweDtcXHJcXG4gICAgcmlnaHQ6IC0zcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDYwMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDkwMHB4KSB7XFxyXFxuICAuY2FzcGVjby1ib29raW5nLW1vZGFsLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogMCA1dnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FzcGVjby1ib29raW5nLW1vZGFsIHtcXHJcXG4gICAgcGFkZGluZzogNXZoIDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKlxuICogRmlsZTogaWZyYW1lUmVzaXplci5qc1xuICogRGVzYzogRm9yY2UgaWZyYW1lcyB0byBzaXplIHRvIGNvbnRlbnQuXG4gKiBSZXF1aXJlczogaWZyYW1lUmVzaXplci5jb250ZW50V2luZG93LmpzIHRvIGJlIGxvYWRlZCBpbnRvIHRoZSB0YXJnZXQgZnJhbWUuXG4gKiBEb2M6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGpicmFkc2hhdy9pZnJhbWUtcmVzaXplclxuICogQXV0aG9yOiBEYXZpZCBKLiBCcmFkc2hhdyAtIGRhdmVAYnJhZHNoYXcubmV0XG4gKiBDb250cmlidXRvcjogSnVyZSBNYXYgLSBqdXJlLm1hdkBnbWFpbC5jb21cbiAqIENvbnRyaWJ1dG9yOiBSZWVkIERhZG91bmUgLSByZWVkQGRhZG91bmUuY29tXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHNvbmFyanMvY29nbml0aXZlLWNvbXBsZXhpdHksIG5vLXNoYWRvdy1yZXN0cmljdGVkLW5hbWVzXG47KGZ1bmN0aW9uICh1bmRlZmluZWQpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gLy8gZG9uJ3QgcnVuIGZvciBzZXJ2ZXIgc2lkZSByZW5kZXJcblxuICB2YXIgY291bnQgPSAwLFxuICAgIGxvZ0VuYWJsZWQgPSBmYWxzZSxcbiAgICBoaWRkZW5DaGVja0VuYWJsZWQgPSBmYWxzZSxcbiAgICBtc2dIZWFkZXIgPSAnbWVzc2FnZScsXG4gICAgbXNnSGVhZGVyTGVuID0gbXNnSGVhZGVyLmxlbmd0aCxcbiAgICBtc2dJZCA9ICdbaUZyYW1lU2l6ZXJdJywgLy8gTXVzdCBtYXRjaCBpZnJhbWUgbXNnIElEXG4gICAgbXNnSWRMZW4gPSBtc2dJZC5sZW5ndGgsXG4gICAgcGFnZVBvc2l0aW9uID0gbnVsbCxcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuICAgIHJlc2V0UmVxdWlyZWRNZXRob2RzID0ge1xuICAgICAgbWF4OiAxLFxuICAgICAgc2Nyb2xsOiAxLFxuICAgICAgYm9keVNjcm9sbDogMSxcbiAgICAgIGRvY3VtZW50RWxlbWVudFNjcm9sbDogMVxuICAgIH0sXG4gICAgc2V0dGluZ3MgPSB7fSxcbiAgICB0aW1lciA9IG51bGwsXG4gICAgZGVmYXVsdHMgPSB7XG4gICAgICBhdXRvUmVzaXplOiB0cnVlLFxuICAgICAgYm9keUJhY2tncm91bmQ6IG51bGwsXG4gICAgICBib2R5TWFyZ2luOiBudWxsLFxuICAgICAgYm9keU1hcmdpblYxOiA4LFxuICAgICAgYm9keVBhZGRpbmc6IG51bGwsXG4gICAgICBjaGVja09yaWdpbjogdHJ1ZSxcbiAgICAgIGluUGFnZUxpbmtzOiBmYWxzZSxcbiAgICAgIGVuYWJsZVB1YmxpY01ldGhvZHM6IHRydWUsXG4gICAgICBoZWlnaHRDYWxjdWxhdGlvbk1ldGhvZDogJ2JvZHlPZmZzZXQnLFxuICAgICAgaWQ6ICdpRnJhbWVSZXNpemVyJyxcbiAgICAgIGludGVydmFsOiAzMixcbiAgICAgIGxvZzogZmFsc2UsXG4gICAgICBtYXhIZWlnaHQ6IEluZmluaXR5LFxuICAgICAgbWF4V2lkdGg6IEluZmluaXR5LFxuICAgICAgbWluSGVpZ2h0OiAwLFxuICAgICAgbWluV2lkdGg6IDAsXG4gICAgICByZXNpemVGcm9tOiAncGFyZW50JyxcbiAgICAgIHNjcm9sbGluZzogZmFsc2UsXG4gICAgICBzaXplSGVpZ2h0OiB0cnVlLFxuICAgICAgc2l6ZVdpZHRoOiBmYWxzZSxcbiAgICAgIHdhcm5pbmdUaW1lb3V0OiA1MDAwLFxuICAgICAgdG9sZXJhbmNlOiAwLFxuICAgICAgd2lkdGhDYWxjdWxhdGlvbk1ldGhvZDogJ3Njcm9sbCcsXG4gICAgICBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9LFxuICAgICAgb25DbG9zZWQ6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgIG9uTWVzc2FnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdvbk1lc3NhZ2UgZnVuY3Rpb24gbm90IGRlZmluZWQnKVxuICAgICAgfSxcbiAgICAgIG9uUmVzaXplZDogZnVuY3Rpb24gKCkge30sXG4gICAgICBvblNjcm9sbDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICBmdW5jdGlvbiBnZXRNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fFxuICAgICAgd2luZG93LldlYktpdE11dGF0aW9uT2JzZXJ2ZXIgfHxcbiAgICAgIHdpbmRvdy5Nb3pNdXRhdGlvbk9ic2VydmVyXG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbCwgZXZ0LCBmdW5jKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZ1bmMsIGZhbHNlKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgZXZ0LCBmdW5jKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGZ1bmMsIGZhbHNlKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB7XG4gICAgdmFyIHZlbmRvcnMgPSBbJ21veicsICd3ZWJraXQnLCAnbycsICdtcyddXG4gICAgdmFyIHhcblxuICAgIC8vIFJlbW92ZSB2ZW5kb3IgcHJlZml4aW5nIGlmIHByZWZpeGVkIGFuZCBicmVhayBlYXJseSBpZiBub3RcbiAgICBmb3IgKHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXJlcXVlc3RBbmltYXRpb25GcmFtZTsgeCArPSAxKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXVxuICAgIH1cblxuICAgIGlmICghcmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICBsb2coJ3NldHVwJywgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSBub3Qgc3VwcG9ydGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRmlyZWZveCBleHRlbnNpb24gY29udGVudC1zY3JpcHRzIGhhdmUgYSBnbG9iYWxUaGlzIG9iamVjdCB0aGF0IGlzIG5vdCB0aGUgc2FtZSBhcyB3aW5kb3cuXG4gICAgICAvLyBCaW5kaW5nIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIHRvIHdpbmRvdyBhbGxvd3MgdGhlIGZ1bmN0aW9uIHRvIHdvcmsgYW5kIHByZXZlbnRzIGVycm9yc1xuICAgICAgLy8gYmVpbmcgdGhyb3duIHdoZW4gcnVuIGluIHRoYXQgY29udGV4dCwgYW5kIHNob3VsZCBiZSBhIG5vLW9wIGluIGV2ZXJ5IG90aGVyIGNvbnRleHQuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TXlJRChpZnJhbWVJZCkge1xuICAgIHZhciByZXRTdHIgPSAnSG9zdCBwYWdlOiAnICsgaWZyYW1lSWRcblxuICAgIGlmICh3aW5kb3cudG9wICE9PSB3aW5kb3cuc2VsZikge1xuICAgICAgaWYgKHdpbmRvdy5wYXJlbnRJRnJhbWUgJiYgd2luZG93LnBhcmVudElGcmFtZS5nZXRJZCkge1xuICAgICAgICByZXRTdHIgPSB3aW5kb3cucGFyZW50SUZyYW1lLmdldElkKCkgKyAnOiAnICsgaWZyYW1lSWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldFN0ciA9ICdOZXN0ZWQgaG9zdCBwYWdlOiAnICsgaWZyYW1lSWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0U3RyXG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRMb2dIZWFkZXIoaWZyYW1lSWQpIHtcbiAgICByZXR1cm4gbXNnSWQgKyAnWycgKyBnZXRNeUlEKGlmcmFtZUlkKSArICddJ1xuICB9XG5cbiAgZnVuY3Rpb24gaXNMb2dFbmFibGVkKGlmcmFtZUlkKSB7XG4gICAgcmV0dXJuIHNldHRpbmdzW2lmcmFtZUlkXSA/IHNldHRpbmdzW2lmcmFtZUlkXS5sb2cgOiBsb2dFbmFibGVkXG4gIH1cblxuICBmdW5jdGlvbiBsb2coaWZyYW1lSWQsIG1zZykge1xuICAgIG91dHB1dCgnbG9nJywgaWZyYW1lSWQsIG1zZywgaXNMb2dFbmFibGVkKGlmcmFtZUlkKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGluZm8oaWZyYW1lSWQsIG1zZykge1xuICAgIG91dHB1dCgnaW5mbycsIGlmcmFtZUlkLCBtc2csIGlzTG9nRW5hYmxlZChpZnJhbWVJZCkpXG4gIH1cblxuICBmdW5jdGlvbiB3YXJuKGlmcmFtZUlkLCBtc2cpIHtcbiAgICBvdXRwdXQoJ3dhcm4nLCBpZnJhbWVJZCwgbXNnLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb3V0cHV0KHR5cGUsIGlmcmFtZUlkLCBtc2csIGVuYWJsZWQpIHtcbiAgICBpZiAodHJ1ZSA9PT0gZW5hYmxlZCAmJiAnb2JqZWN0JyA9PT0gdHlwZW9mIHdpbmRvdy5jb25zb2xlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZVt0eXBlXShmb3JtYXRMb2dIZWFkZXIoaWZyYW1lSWQpLCBtc2cpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaUZyYW1lTGlzdGVuZXIoZXZlbnQpIHtcbiAgICBmdW5jdGlvbiByZXNpemVJRnJhbWUoKSB7XG4gICAgICBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgICAgIHNldFNpemUobWVzc2FnZURhdGEpXG4gICAgICAgIHNldFBhZ2VQb3NpdGlvbihpZnJhbWVJZClcbiAgICAgICAgb24oJ29uUmVzaXplZCcsIG1lc3NhZ2VEYXRhKVxuICAgICAgfVxuXG4gICAgICBlbnN1cmVJblJhbmdlKCdIZWlnaHQnKVxuICAgICAgZW5zdXJlSW5SYW5nZSgnV2lkdGgnKVxuXG4gICAgICBzeW5jUmVzaXplKHJlc2l6ZSwgbWVzc2FnZURhdGEsICdpbml0JylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzTXNnKCkge1xuICAgICAgdmFyIGRhdGEgPSBtc2cuc3Vic3RyKG1zZ0lkTGVuKS5zcGxpdCgnOicpXG4gICAgICB2YXIgaGVpZ2h0ID0gZGF0YVsxXSA/IHBhcnNlSW50KGRhdGFbMV0sIDEwKSA6IDBcbiAgICAgIHZhciBpZnJhbWUgPSBzZXR0aW5nc1tkYXRhWzBdXSAmJiBzZXR0aW5nc1tkYXRhWzBdXS5pZnJhbWVcbiAgICAgIHZhciBjb21wU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGlmcmFtZSlcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWZyYW1lOiBpZnJhbWUsXG4gICAgICAgIGlkOiBkYXRhWzBdLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCArIGdldFBhZGRpbmdFbmRzKGNvbXBTdHlsZSkgKyBnZXRCb3JkZXJFbmRzKGNvbXBTdHlsZSksXG4gICAgICAgIHdpZHRoOiBkYXRhWzJdLFxuICAgICAgICB0eXBlOiBkYXRhWzNdXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGFkZGluZ0VuZHMoY29tcFN0eWxlKSB7XG4gICAgICBpZiAoY29tcFN0eWxlLmJveFNpemluZyAhPT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gICAgICB2YXIgdG9wID0gY29tcFN0eWxlLnBhZGRpbmdUb3AgPyBwYXJzZUludChjb21wU3R5bGUucGFkZGluZ1RvcCwgMTApIDogMFxuICAgICAgdmFyIGJvdCA9IGNvbXBTdHlsZS5wYWRkaW5nQm90dG9tXG4gICAgICAgID8gcGFyc2VJbnQoY29tcFN0eWxlLnBhZGRpbmdCb3R0b20sIDEwKVxuICAgICAgICA6IDBcbiAgICAgIHJldHVybiB0b3AgKyBib3RcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb3JkZXJFbmRzKGNvbXBTdHlsZSkge1xuICAgICAgaWYgKGNvbXBTdHlsZS5ib3hTaXppbmcgIT09ICdib3JkZXItYm94Jykge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfVxuICAgICAgdmFyIHRvcCA9IGNvbXBTdHlsZS5ib3JkZXJUb3BXaWR0aFxuICAgICAgICA/IHBhcnNlSW50KGNvbXBTdHlsZS5ib3JkZXJUb3BXaWR0aCwgMTApXG4gICAgICAgIDogMFxuICAgICAgdmFyIGJvdCA9IGNvbXBTdHlsZS5ib3JkZXJCb3R0b21XaWR0aFxuICAgICAgICA/IHBhcnNlSW50KGNvbXBTdHlsZS5ib3JkZXJCb3R0b21XaWR0aCwgMTApXG4gICAgICAgIDogMFxuICAgICAgcmV0dXJuIHRvcCArIGJvdFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuc3VyZUluUmFuZ2UoRGltZW5zaW9uKSB7XG4gICAgICB2YXIgbWF4ID0gTnVtYmVyKHNldHRpbmdzW2lmcmFtZUlkXVsnbWF4JyArIERpbWVuc2lvbl0pLFxuICAgICAgICBtaW4gPSBOdW1iZXIoc2V0dGluZ3NbaWZyYW1lSWRdWydtaW4nICsgRGltZW5zaW9uXSksXG4gICAgICAgIGRpbWVuc2lvbiA9IERpbWVuc2lvbi50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBzaXplID0gTnVtYmVyKG1lc3NhZ2VEYXRhW2RpbWVuc2lvbl0pXG5cbiAgICAgIGxvZyhpZnJhbWVJZCwgJ0NoZWNraW5nICcgKyBkaW1lbnNpb24gKyAnIGlzIGluIHJhbmdlICcgKyBtaW4gKyAnLScgKyBtYXgpXG5cbiAgICAgIGlmIChzaXplIDwgbWluKSB7XG4gICAgICAgIHNpemUgPSBtaW5cbiAgICAgICAgbG9nKGlmcmFtZUlkLCAnU2V0ICcgKyBkaW1lbnNpb24gKyAnIHRvIG1pbiB2YWx1ZScpXG4gICAgICB9XG5cbiAgICAgIGlmIChzaXplID4gbWF4KSB7XG4gICAgICAgIHNpemUgPSBtYXhcbiAgICAgICAgbG9nKGlmcmFtZUlkLCAnU2V0ICcgKyBkaW1lbnNpb24gKyAnIHRvIG1heCB2YWx1ZScpXG4gICAgICB9XG5cbiAgICAgIG1lc3NhZ2VEYXRhW2RpbWVuc2lvbl0gPSAnJyArIHNpemVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc01lc3NhZ2VGcm9tSUZyYW1lKCkge1xuICAgICAgZnVuY3Rpb24gY2hlY2tBbGxvd2VkT3JpZ2luKCkge1xuICAgICAgICBmdW5jdGlvbiBjaGVja0xpc3QoKSB7XG4gICAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgcmV0Q29kZSA9IGZhbHNlXG5cbiAgICAgICAgICBsb2coXG4gICAgICAgICAgICBpZnJhbWVJZCxcbiAgICAgICAgICAgICdDaGVja2luZyBjb25uZWN0aW9uIGlzIGZyb20gYWxsb3dlZCBsaXN0IG9mIG9yaWdpbnM6ICcgK1xuICAgICAgICAgICAgICBjaGVja09yaWdpblxuICAgICAgICAgIClcblxuICAgICAgICAgIGZvciAoOyBpIDwgY2hlY2tPcmlnaW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjaGVja09yaWdpbltpXSA9PT0gb3JpZ2luKSB7XG4gICAgICAgICAgICAgIHJldENvZGUgPSB0cnVlXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXRDb2RlXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjaGVja1NpbmdsZSgpIHtcbiAgICAgICAgICB2YXIgcmVtb3RlSG9zdCA9IHNldHRpbmdzW2lmcmFtZUlkXSAmJiBzZXR0aW5nc1tpZnJhbWVJZF0ucmVtb3RlSG9zdFxuICAgICAgICAgIGxvZyhpZnJhbWVJZCwgJ0NoZWNraW5nIGNvbm5lY3Rpb24gaXMgZnJvbTogJyArIHJlbW90ZUhvc3QpXG4gICAgICAgICAgcmV0dXJuIG9yaWdpbiA9PT0gcmVtb3RlSG9zdFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrT3JpZ2luLmNvbnN0cnVjdG9yID09PSBBcnJheSA/IGNoZWNrTGlzdCgpIDogY2hlY2tTaW5nbGUoKVxuICAgICAgfVxuXG4gICAgICB2YXIgb3JpZ2luID0gZXZlbnQub3JpZ2luLFxuICAgICAgICBjaGVja09yaWdpbiA9IHNldHRpbmdzW2lmcmFtZUlkXSAmJiBzZXR0aW5nc1tpZnJhbWVJZF0uY2hlY2tPcmlnaW5cblxuICAgICAgaWYgKGNoZWNrT3JpZ2luICYmICcnICsgb3JpZ2luICE9PSAnbnVsbCcgJiYgIWNoZWNrQWxsb3dlZE9yaWdpbigpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnVW5leHBlY3RlZCBtZXNzYWdlIHJlY2VpdmVkIGZyb206ICcgK1xuICAgICAgICAgICAgb3JpZ2luICtcbiAgICAgICAgICAgICcgZm9yICcgK1xuICAgICAgICAgICAgbWVzc2FnZURhdGEuaWZyYW1lLmlkICtcbiAgICAgICAgICAgICcuIE1lc3NhZ2Ugd2FzOiAnICtcbiAgICAgICAgICAgIGV2ZW50LmRhdGEgK1xuICAgICAgICAgICAgJy4gVGhpcyBlcnJvciBjYW4gYmUgZGlzYWJsZWQgYnkgc2V0dGluZyB0aGUgY2hlY2tPcmlnaW46IGZhbHNlIG9wdGlvbiBvciBieSBwcm92aWRpbmcgb2YgYXJyYXkgb2YgdHJ1c3RlZCBkb21haW5zLidcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTWVzc2FnZUZvclVzKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgbXNnSWQgPT09ICgnJyArIG1zZykuc3Vic3RyKDAsIG1zZ0lkTGVuKSAmJlxuICAgICAgICBtc2cuc3Vic3RyKG1zZ0lkTGVuKS5zcGxpdCgnOicpWzBdIGluIHNldHRpbmdzXG4gICAgICApIC8vICcnK1Byb3RlY3RzIGFnYWluc3Qgbm9uLXN0cmluZyBtc2dcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc01lc3NhZ2VGcm9tTWV0YVBhcmVudCgpIHtcbiAgICAgIC8vIFRlc3QgaWYgdGhpcyBtZXNzYWdlIGlzIGZyb20gYSBwYXJlbnQgYWJvdmUgdXMuIFRoaXMgaXMgYW4gdWdseSB0ZXN0LCBob3dldmVyLCB1cGRhdGluZ1xuICAgICAgLy8gdGhlIG1lc3NhZ2UgZm9ybWF0IHdvdWxkIGJyZWFrIGJhY2t3YXJkcyBjb21wYXRpYml0eS5cbiAgICAgIHZhciByZXRDb2RlID0gbWVzc2FnZURhdGEudHlwZSBpbiB7IHRydWU6IDEsIGZhbHNlOiAxLCB1bmRlZmluZWQ6IDEgfVxuXG4gICAgICBpZiAocmV0Q29kZSkge1xuICAgICAgICBsb2coaWZyYW1lSWQsICdJZ25vcmluZyBpbml0IG1lc3NhZ2UgZnJvbSBtZXRhIHBhcmVudCBwYWdlJylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldENvZGVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRNc2dCb2R5KG9mZnNldCkge1xuICAgICAgcmV0dXJuIG1zZy5zdWJzdHIobXNnLmluZGV4T2YoJzonKSArIG1zZ0hlYWRlckxlbiArIG9mZnNldClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3J3YXJkTXNnRnJvbUlGcmFtZShtc2dCb2R5KSB7XG4gICAgICBsb2coXG4gICAgICAgIGlmcmFtZUlkLFxuICAgICAgICAnb25NZXNzYWdlIHBhc3NlZDoge2lmcmFtZTogJyArXG4gICAgICAgICAgbWVzc2FnZURhdGEuaWZyYW1lLmlkICtcbiAgICAgICAgICAnLCBtZXNzYWdlOiAnICtcbiAgICAgICAgICBtc2dCb2R5ICtcbiAgICAgICAgICAnfSdcbiAgICAgIClcbiAgICAgIG9uKCdvbk1lc3NhZ2UnLCB7XG4gICAgICAgIGlmcmFtZTogbWVzc2FnZURhdGEuaWZyYW1lLFxuICAgICAgICBtZXNzYWdlOiBKU09OLnBhcnNlKG1zZ0JvZHkpXG4gICAgICB9KVxuICAgICAgbG9nKGlmcmFtZUlkLCAnLS0nKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBhZ2VJbmZvKCkge1xuICAgICAgdmFyIGJvZHlQb3NpdGlvbiA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIGlGcmFtZVBvc2l0aW9uID0gbWVzc2FnZURhdGEuaWZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGlmcmFtZUhlaWdodDogaUZyYW1lUG9zaXRpb24uaGVpZ2h0LFxuICAgICAgICBpZnJhbWVXaWR0aDogaUZyYW1lUG9zaXRpb24ud2lkdGgsXG4gICAgICAgIGNsaWVudEhlaWdodDogTWF0aC5tYXgoXG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMFxuICAgICAgICApLFxuICAgICAgICBjbGllbnRXaWR0aDogTWF0aC5tYXgoXG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIHx8IDBcbiAgICAgICAgKSxcbiAgICAgICAgb2Zmc2V0VG9wOiBwYXJzZUludChpRnJhbWVQb3NpdGlvbi50b3AgLSBib2R5UG9zaXRpb24udG9wLCAxMCksXG4gICAgICAgIG9mZnNldExlZnQ6IHBhcnNlSW50KGlGcmFtZVBvc2l0aW9uLmxlZnQgLSBib2R5UG9zaXRpb24ubGVmdCwgMTApLFxuICAgICAgICBzY3JvbGxUb3A6IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgc2Nyb2xsTGVmdDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgICBkb2N1bWVudEhlaWdodDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgZG9jdW1lbnRXaWR0aDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICB3aW5kb3dIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgd2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbmRQYWdlSW5mb1RvSWZyYW1lKGlmcmFtZSwgaWZyYW1lSWQpIHtcbiAgICAgIGZ1bmN0aW9uIGRlYm91bmNlZFRyaWdnZXIoKSB7XG4gICAgICAgIHRyaWdnZXIoJ1NlbmQgUGFnZSBJbmZvJywgJ3BhZ2VJbmZvOicgKyBnZXRQYWdlSW5mbygpLCBpZnJhbWUsIGlmcmFtZUlkKVxuICAgICAgfVxuICAgICAgZGVib3VuY2VGcmFtZUV2ZW50cyhkZWJvdW5jZWRUcmlnZ2VyLCAzMiwgaWZyYW1lSWQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRQYWdlSW5mb01vbml0b3IoKSB7XG4gICAgICBmdW5jdGlvbiBzZXRMaXN0ZW5lcih0eXBlLCBmdW5jKSB7XG4gICAgICAgIGZ1bmN0aW9uIHNlbmRQYWdlSW5mbygpIHtcbiAgICAgICAgICBpZiAoc2V0dGluZ3NbaWRdKSB7XG4gICAgICAgICAgICBzZW5kUGFnZUluZm9Ub0lmcmFtZShzZXR0aW5nc1tpZF0uaWZyYW1lLCBpZClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RvcCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgO1snc2Nyb2xsJywgJ3Jlc2l6ZSddLmZvckVhY2goZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgIGxvZyhpZCwgdHlwZSArIGV2dCArICcgbGlzdGVuZXIgZm9yIHNlbmRQYWdlSW5mbycpXG4gICAgICAgICAgZnVuYyh3aW5kb3csIGV2dCwgc2VuZFBhZ2VJbmZvKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBzZXRMaXN0ZW5lcignUmVtb3ZlICcsIHJlbW92ZUV2ZW50TGlzdGVuZXIpXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBzZXRMaXN0ZW5lcignQWRkICcsIGFkZEV2ZW50TGlzdGVuZXIpXG4gICAgICB9XG5cbiAgICAgIHZhciBpZCA9IGlmcmFtZUlkIC8vIENyZWF0ZSBsb2NhbGx5IHNjb3BlZCBjb3B5IG9mIGlGcmFtZSBJRFxuXG4gICAgICBzdGFydCgpXG5cbiAgICAgIGlmIChzZXR0aW5nc1tpZF0pIHtcbiAgICAgICAgc2V0dGluZ3NbaWRdLnN0b3BQYWdlSW5mbyA9IHN0b3BcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wUGFnZUluZm9Nb25pdG9yKCkge1xuICAgICAgaWYgKHNldHRpbmdzW2lmcmFtZUlkXSAmJiBzZXR0aW5nc1tpZnJhbWVJZF0uc3RvcFBhZ2VJbmZvKSB7XG4gICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5zdG9wUGFnZUluZm8oKVxuICAgICAgICBkZWxldGUgc2V0dGluZ3NbaWZyYW1lSWRdLnN0b3BQYWdlSW5mb1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrSUZyYW1lRXhpc3RzKCkge1xuICAgICAgdmFyIHJldEJvb2wgPSB0cnVlXG5cbiAgICAgIGlmIChudWxsID09PSBtZXNzYWdlRGF0YS5pZnJhbWUpIHtcbiAgICAgICAgd2FybihpZnJhbWVJZCwgJ0lGcmFtZSAoJyArIG1lc3NhZ2VEYXRhLmlkICsgJykgbm90IGZvdW5kJylcbiAgICAgICAgcmV0Qm9vbCA9IGZhbHNlXG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0Qm9vbFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVsZW1lbnRQb3NpdGlvbih0YXJnZXQpIHtcbiAgICAgIHZhciBpRnJhbWVQb3NpdGlvbiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICBnZXRQYWdlUG9zaXRpb24oaWZyYW1lSWQpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IE1hdGguZmxvb3IoTnVtYmVyKGlGcmFtZVBvc2l0aW9uLmxlZnQpICsgTnVtYmVyKHBhZ2VQb3NpdGlvbi54KSksXG4gICAgICAgIHk6IE1hdGguZmxvb3IoTnVtYmVyKGlGcmFtZVBvc2l0aW9uLnRvcCkgKyBOdW1iZXIocGFnZVBvc2l0aW9uLnkpKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbFJlcXVlc3RGcm9tQ2hpbGQoYWRkT2Zmc2V0KSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAvLyBOb3QgdGVzdGFibGUgaW4gS2FybWFcbiAgICAgIGZ1bmN0aW9uIHJlcG9zaXRpb24oKSB7XG4gICAgICAgIHBhZ2VQb3NpdGlvbiA9IG5ld1Bvc2l0aW9uXG4gICAgICAgIHNjcm9sbFRvKClcbiAgICAgICAgbG9nKGlmcmFtZUlkLCAnLS0nKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjYWxjT2Zmc2V0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IE51bWJlcihtZXNzYWdlRGF0YS53aWR0aCkgKyBvZmZzZXQueCxcbiAgICAgICAgICB5OiBOdW1iZXIobWVzc2FnZURhdGEuaGVpZ2h0KSArIG9mZnNldC55XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2Nyb2xsUGFyZW50KCkge1xuICAgICAgICBpZiAod2luZG93LnBhcmVudElGcmFtZSkge1xuICAgICAgICAgIHdpbmRvdy5wYXJlbnRJRnJhbWVbJ3Njcm9sbFRvJyArIChhZGRPZmZzZXQgPyAnT2Zmc2V0JyA6ICcnKV0oXG4gICAgICAgICAgICBuZXdQb3NpdGlvbi54LFxuICAgICAgICAgICAgbmV3UG9zaXRpb24ueVxuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgaWZyYW1lSWQsXG4gICAgICAgICAgICAnVW5hYmxlIHRvIHNjcm9sbCB0byByZXF1ZXN0ZWQgcG9zaXRpb24sIHdpbmRvdy5wYXJlbnRJRnJhbWUgbm90IGZvdW5kJ1xuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgb2Zmc2V0ID0gYWRkT2Zmc2V0XG4gICAgICAgICAgPyBnZXRFbGVtZW50UG9zaXRpb24obWVzc2FnZURhdGEuaWZyYW1lKVxuICAgICAgICAgIDogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIG5ld1Bvc2l0aW9uID0gY2FsY09mZnNldCgpXG5cbiAgICAgIGxvZyhcbiAgICAgICAgaWZyYW1lSWQsXG4gICAgICAgICdSZXBvc2l0aW9uIHJlcXVlc3RlZCBmcm9tIGlGcmFtZSAob2Zmc2V0IHg6JyArXG4gICAgICAgICAgb2Zmc2V0LnggK1xuICAgICAgICAgICcgeTonICtcbiAgICAgICAgICBvZmZzZXQueSArXG4gICAgICAgICAgJyknXG4gICAgICApXG5cbiAgICAgIGlmICh3aW5kb3cudG9wICE9PSB3aW5kb3cuc2VsZikge1xuICAgICAgICBzY3JvbGxQYXJlbnQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVwb3NpdGlvbigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG8oKSB7XG4gICAgICBpZiAoZmFsc2UgIT09IG9uKCdvblNjcm9sbCcsIHBhZ2VQb3NpdGlvbikpIHtcbiAgICAgICAgc2V0UGFnZVBvc2l0aW9uKGlmcmFtZUlkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdW5zZXRQYWdlUG9zaXRpb24oKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmRUYXJnZXQobG9jYXRpb24pIHtcbiAgICAgIGZ1bmN0aW9uIGp1bXBUb1RhcmdldCgpIHtcbiAgICAgICAgdmFyIGp1bXBQb3NpdGlvbiA9IGdldEVsZW1lbnRQb3NpdGlvbih0YXJnZXQpXG5cbiAgICAgICAgbG9nKFxuICAgICAgICAgIGlmcmFtZUlkLFxuICAgICAgICAgICdNb3ZpbmcgdG8gaW4gcGFnZSBsaW5rICgjJyArXG4gICAgICAgICAgICBoYXNoICtcbiAgICAgICAgICAgICcpIGF0IHg6ICcgK1xuICAgICAgICAgICAganVtcFBvc2l0aW9uLnggK1xuICAgICAgICAgICAgJyB5OiAnICtcbiAgICAgICAgICAgIGp1bXBQb3NpdGlvbi55XG4gICAgICAgIClcbiAgICAgICAgcGFnZVBvc2l0aW9uID0ge1xuICAgICAgICAgIHg6IGp1bXBQb3NpdGlvbi54LFxuICAgICAgICAgIHk6IGp1bXBQb3NpdGlvbi55XG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGxUbygpXG4gICAgICAgIGxvZyhpZnJhbWVJZCwgJy0tJylcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24ganVtcFRvUGFyZW50KCkge1xuICAgICAgICBpZiAod2luZG93LnBhcmVudElGcmFtZSkge1xuICAgICAgICAgIHdpbmRvdy5wYXJlbnRJRnJhbWUubW92ZVRvQW5jaG9yKGhhc2gpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9nKFxuICAgICAgICAgICAgaWZyYW1lSWQsXG4gICAgICAgICAgICAnSW4gcGFnZSBsaW5rICMnICtcbiAgICAgICAgICAgICAgaGFzaCArXG4gICAgICAgICAgICAgICcgbm90IGZvdW5kIGFuZCB3aW5kb3cucGFyZW50SUZyYW1lIG5vdCBmb3VuZCdcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGhhc2ggPSBsb2NhdGlvbi5zcGxpdCgnIycpWzFdIHx8ICcnLFxuICAgICAgICBoYXNoRGF0YSA9IGRlY29kZVVSSUNvbXBvbmVudChoYXNoKSxcbiAgICAgICAgdGFyZ2V0ID1cbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoRGF0YSkgfHxcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoRGF0YSlbMF1cblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICBqdW1wVG9UYXJnZXQoKVxuICAgICAgfSBlbHNlIGlmICh3aW5kb3cudG9wICE9PSB3aW5kb3cuc2VsZikge1xuICAgICAgICBqdW1wVG9QYXJlbnQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nKGlmcmFtZUlkLCAnSW4gcGFnZSBsaW5rICMnICsgaGFzaCArICcgbm90IGZvdW5kJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbihmdW5jTmFtZSwgdmFsKSB7XG4gICAgICByZXR1cm4gY2hrRXZlbnQoaWZyYW1lSWQsIGZ1bmNOYW1lLCB2YWwpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aW9uTXNnKCkge1xuICAgICAgaWYgKHNldHRpbmdzW2lmcmFtZUlkXSAmJiBzZXR0aW5nc1tpZnJhbWVJZF0uZmlyc3RSdW4pIGZpcnN0UnVuKClcblxuICAgICAgc3dpdGNoIChtZXNzYWdlRGF0YS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgICAgICBjbG9zZUlGcmFtZShtZXNzYWdlRGF0YS5pZnJhbWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdtZXNzYWdlJzpcbiAgICAgICAgICBmb3J3YXJkTXNnRnJvbUlGcmFtZShnZXRNc2dCb2R5KDYpKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnYXV0b1Jlc2l6ZSc6XG4gICAgICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLmF1dG9SZXNpemUgPSBKU09OLnBhcnNlKGdldE1zZ0JvZHkoOSkpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdzY3JvbGxUbyc6XG4gICAgICAgICAgc2Nyb2xsUmVxdWVzdEZyb21DaGlsZChmYWxzZSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ3Njcm9sbFRvT2Zmc2V0JzpcbiAgICAgICAgICBzY3JvbGxSZXF1ZXN0RnJvbUNoaWxkKHRydWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdwYWdlSW5mbyc6XG4gICAgICAgICAgc2VuZFBhZ2VJbmZvVG9JZnJhbWUoXG4gICAgICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0gJiYgc2V0dGluZ3NbaWZyYW1lSWRdLmlmcmFtZSxcbiAgICAgICAgICAgIGlmcmFtZUlkXG4gICAgICAgICAgKVxuICAgICAgICAgIHN0YXJ0UGFnZUluZm9Nb25pdG9yKClcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ3BhZ2VJbmZvU3RvcCc6XG4gICAgICAgICAgc3RvcFBhZ2VJbmZvTW9uaXRvcigpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdpblBhZ2VMaW5rJzpcbiAgICAgICAgICBmaW5kVGFyZ2V0KGdldE1zZ0JvZHkoOSkpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdyZXNldCc6XG4gICAgICAgICAgcmVzZXRJRnJhbWUobWVzc2FnZURhdGEpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgICByZXNpemVJRnJhbWUoKVxuICAgICAgICAgIG9uKCdvbkluaXQnLCBtZXNzYWdlRGF0YS5pZnJhbWUpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlc2l6ZUlGcmFtZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzU2V0dGluZ3MoaWZyYW1lSWQpIHtcbiAgICAgIHZhciByZXRCb29sID0gdHJ1ZVxuXG4gICAgICBpZiAoIXNldHRpbmdzW2lmcmFtZUlkXSkge1xuICAgICAgICByZXRCb29sID0gZmFsc2VcbiAgICAgICAgd2FybihcbiAgICAgICAgICBtZXNzYWdlRGF0YS50eXBlICtcbiAgICAgICAgICAgICcgTm8gc2V0dGluZ3MgZm9yICcgK1xuICAgICAgICAgICAgaWZyYW1lSWQgK1xuICAgICAgICAgICAgJy4gTWVzc2FnZSB3YXM6ICcgK1xuICAgICAgICAgICAgbXNnXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldEJvb2xcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpRnJhbWVSZWFkeU1zZ1JlY2VpdmVkKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBndWFyZC1mb3ItaW5cbiAgICAgIGZvciAodmFyIGlmcmFtZUlkIGluIHNldHRpbmdzKSB7XG4gICAgICAgIHRyaWdnZXIoXG4gICAgICAgICAgJ2lGcmFtZSByZXF1ZXN0ZWQgaW5pdCcsXG4gICAgICAgICAgY3JlYXRlT3V0Z29pbmdNc2coaWZyYW1lSWQpLFxuICAgICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5pZnJhbWUsXG4gICAgICAgICAgaWZyYW1lSWRcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpcnN0UnVuKCkge1xuICAgICAgaWYgKHNldHRpbmdzW2lmcmFtZUlkXSkge1xuICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uZmlyc3RSdW4gPSBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtc2cgPSBldmVudC5kYXRhLFxuICAgICAgbWVzc2FnZURhdGEgPSB7fSxcbiAgICAgIGlmcmFtZUlkID0gbnVsbFxuXG4gICAgaWYgKCdbaUZyYW1lUmVzaXplckNoaWxkXVJlYWR5JyA9PT0gbXNnKSB7XG4gICAgICBpRnJhbWVSZWFkeU1zZ1JlY2VpdmVkKClcbiAgICB9IGVsc2UgaWYgKGlzTWVzc2FnZUZvclVzKCkpIHtcbiAgICAgIG1lc3NhZ2VEYXRhID0gcHJvY2Vzc01zZygpXG4gICAgICBpZnJhbWVJZCA9IG1lc3NhZ2VEYXRhLmlkXG4gICAgICBpZiAoc2V0dGluZ3NbaWZyYW1lSWRdKSB7XG4gICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5sb2FkZWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICghaXNNZXNzYWdlRnJvbU1ldGFQYXJlbnQoKSAmJiBoYXNTZXR0aW5ncyhpZnJhbWVJZCkpIHtcbiAgICAgICAgbG9nKGlmcmFtZUlkLCAnUmVjZWl2ZWQ6ICcgKyBtc2cpXG5cbiAgICAgICAgaWYgKGNoZWNrSUZyYW1lRXhpc3RzKCkgJiYgaXNNZXNzYWdlRnJvbUlGcmFtZSgpKSB7XG4gICAgICAgICAgYWN0aW9uTXNnKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvKGlmcmFtZUlkLCAnSWdub3JlZDogJyArIG1zZylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGtFdmVudChpZnJhbWVJZCwgZnVuY05hbWUsIHZhbCkge1xuICAgIHZhciBmdW5jID0gbnVsbCxcbiAgICAgIHJldFZhbCA9IG51bGxcblxuICAgIGlmIChzZXR0aW5nc1tpZnJhbWVJZF0pIHtcbiAgICAgIGZ1bmMgPSBzZXR0aW5nc1tpZnJhbWVJZF1bZnVuY05hbWVdXG5cbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZnVuYykge1xuICAgICAgICByZXRWYWwgPSBmdW5jKHZhbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgZnVuY05hbWUgKyAnIG9uIGlGcmFtZVsnICsgaWZyYW1lSWQgKyAnXSBpcyBub3QgYSBmdW5jdGlvbidcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXRWYWxcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUlmcmFtZUxpc3RlbmVycyhpZnJhbWUpIHtcbiAgICB2YXIgaWZyYW1lSWQgPSBpZnJhbWUuaWRcbiAgICBkZWxldGUgc2V0dGluZ3NbaWZyYW1lSWRdXG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZUlGcmFtZShpZnJhbWUpIHtcbiAgICB2YXIgaWZyYW1lSWQgPSBpZnJhbWUuaWRcbiAgICBpZiAoY2hrRXZlbnQoaWZyYW1lSWQsICdvbkNsb3NlJywgaWZyYW1lSWQpID09PSBmYWxzZSkge1xuICAgICAgbG9nKGlmcmFtZUlkLCAnQ2xvc2UgaWZyYW1lIGNhbmNlbGxlZCBieSBvbkNsb3NlIGV2ZW50JylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsb2coaWZyYW1lSWQsICdSZW1vdmluZyBpRnJhbWU6ICcgKyBpZnJhbWVJZClcblxuICAgIHRyeSB7XG4gICAgICAvLyBDYXRjaCByYWNlIGNvbmRpdGlvbiBlcnJvciB3aXRoIFJlYWN0XG4gICAgICBpZiAoaWZyYW1lLnBhcmVudE5vZGUpIHtcbiAgICAgICAgaWZyYW1lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaWZyYW1lKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB3YXJuKGVycm9yKVxuICAgIH1cblxuICAgIGNoa0V2ZW50KGlmcmFtZUlkLCAnb25DbG9zZWQnLCBpZnJhbWVJZClcbiAgICBsb2coaWZyYW1lSWQsICctLScpXG4gICAgcmVtb3ZlSWZyYW1lTGlzdGVuZXJzKGlmcmFtZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhZ2VQb3NpdGlvbihpZnJhbWVJZCkge1xuICAgIGlmIChudWxsID09PSBwYWdlUG9zaXRpb24pIHtcbiAgICAgIHBhZ2VQb3NpdGlvbiA9IHtcbiAgICAgICAgeDpcbiAgICAgICAgICB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB3aW5kb3cucGFnZVhPZmZzZXRcbiAgICAgICAgICAgIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICAgIHk6XG4gICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICAgIH1cbiAgICAgIGxvZyhcbiAgICAgICAgaWZyYW1lSWQsXG4gICAgICAgICdHZXQgcGFnZSBwb3NpdGlvbjogJyArIHBhZ2VQb3NpdGlvbi54ICsgJywnICsgcGFnZVBvc2l0aW9uLnlcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRQYWdlUG9zaXRpb24oaWZyYW1lSWQpIHtcbiAgICBpZiAobnVsbCAhPT0gcGFnZVBvc2l0aW9uKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8ocGFnZVBvc2l0aW9uLngsIHBhZ2VQb3NpdGlvbi55KVxuICAgICAgbG9nKFxuICAgICAgICBpZnJhbWVJZCxcbiAgICAgICAgJ1NldCBwYWdlIHBvc2l0aW9uOiAnICsgcGFnZVBvc2l0aW9uLnggKyAnLCcgKyBwYWdlUG9zaXRpb24ueVxuICAgICAgKVxuICAgICAgdW5zZXRQYWdlUG9zaXRpb24oKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVuc2V0UGFnZVBvc2l0aW9uKCkge1xuICAgIHBhZ2VQb3NpdGlvbiA9IG51bGxcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0SUZyYW1lKG1lc3NhZ2VEYXRhKSB7XG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICBzZXRTaXplKG1lc3NhZ2VEYXRhKVxuICAgICAgdHJpZ2dlcigncmVzZXQnLCAncmVzZXQnLCBtZXNzYWdlRGF0YS5pZnJhbWUsIG1lc3NhZ2VEYXRhLmlkKVxuICAgIH1cblxuICAgIGxvZyhcbiAgICAgIG1lc3NhZ2VEYXRhLmlkLFxuICAgICAgJ1NpemUgcmVzZXQgcmVxdWVzdGVkIGJ5ICcgK1xuICAgICAgICAoJ2luaXQnID09PSBtZXNzYWdlRGF0YS50eXBlID8gJ2hvc3QgcGFnZScgOiAnaUZyYW1lJylcbiAgICApXG4gICAgZ2V0UGFnZVBvc2l0aW9uKG1lc3NhZ2VEYXRhLmlkKVxuICAgIHN5bmNSZXNpemUocmVzZXQsIG1lc3NhZ2VEYXRhLCAncmVzZXQnKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0U2l6ZShtZXNzYWdlRGF0YSkge1xuICAgIGZ1bmN0aW9uIHNldERpbWVuc2lvbihkaW1lbnNpb24pIHtcbiAgICAgIGlmICghbWVzc2FnZURhdGEuaWQpIHtcbiAgICAgICAgbG9nKCd1bmRlZmluZWQnLCAnbWVzc2FnZURhdGEgaWQgbm90IHNldCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbWVzc2FnZURhdGEuaWZyYW1lLnN0eWxlW2RpbWVuc2lvbl0gPSBtZXNzYWdlRGF0YVtkaW1lbnNpb25dICsgJ3B4J1xuICAgICAgbG9nKFxuICAgICAgICBtZXNzYWdlRGF0YS5pZCxcbiAgICAgICAgJ0lGcmFtZSAoJyArXG4gICAgICAgICAgaWZyYW1lSWQgK1xuICAgICAgICAgICcpICcgK1xuICAgICAgICAgIGRpbWVuc2lvbiArXG4gICAgICAgICAgJyBzZXQgdG8gJyArXG4gICAgICAgICAgbWVzc2FnZURhdGFbZGltZW5zaW9uXSArXG4gICAgICAgICAgJ3B4J1xuICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoa1plcm8oZGltZW5zaW9uKSB7XG4gICAgICAvLyBGaXJlRm94IHNldHMgZGltZW5zaW9uIG9mIGhpZGRlbiBpRnJhbWVzIHRvIHplcm8uXG4gICAgICAvLyBTbyBpZiB3ZSBkZXRlY3QgdGhhdCBzZXQgdXAgYW4gZXZlbnQgdG8gY2hlY2sgZm9yXG4gICAgICAvLyB3aGVuIGlGcmFtZSBiZWNvbWVzIHZpc2libGUuXG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIC8vIE5vdCB0ZXN0YWJsZSBpbiBQaGFudG9tSlNcbiAgICAgIGlmICghaGlkZGVuQ2hlY2tFbmFibGVkICYmICcwJyA9PT0gbWVzc2FnZURhdGFbZGltZW5zaW9uXSkge1xuICAgICAgICBoaWRkZW5DaGVja0VuYWJsZWQgPSB0cnVlXG4gICAgICAgIGxvZyhpZnJhbWVJZCwgJ0hpZGRlbiBpRnJhbWUgZGV0ZWN0ZWQsIGNyZWF0aW5nIHZpc2liaWxpdHkgbGlzdGVuZXInKVxuICAgICAgICBmaXhIaWRkZW5JRnJhbWVzKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzRGltZW5zaW9uKGRpbWVuc2lvbikge1xuICAgICAgc2V0RGltZW5zaW9uKGRpbWVuc2lvbilcbiAgICAgIGNoa1plcm8oZGltZW5zaW9uKVxuICAgIH1cblxuICAgIHZhciBpZnJhbWVJZCA9IG1lc3NhZ2VEYXRhLmlmcmFtZS5pZFxuXG4gICAgaWYgKHNldHRpbmdzW2lmcmFtZUlkXSkge1xuICAgICAgaWYgKHNldHRpbmdzW2lmcmFtZUlkXS5zaXplSGVpZ2h0KSB7XG4gICAgICAgIHByb2Nlc3NEaW1lbnNpb24oJ2hlaWdodCcpXG4gICAgICB9XG4gICAgICBpZiAoc2V0dGluZ3NbaWZyYW1lSWRdLnNpemVXaWR0aCkge1xuICAgICAgICBwcm9jZXNzRGltZW5zaW9uKCd3aWR0aCcpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3luY1Jlc2l6ZShmdW5jLCBtZXNzYWdlRGF0YSwgZG9Ob3RTeW5jKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovIC8vIE5vdCB0ZXN0YWJsZSBpbiBQaGFudG9tSlNcbiAgICBpZiAoXG4gICAgICBkb05vdFN5bmMgIT09IG1lc3NhZ2VEYXRhLnR5cGUgJiZcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSAmJlxuICAgICAgLy8gaW5jbHVkaW5nIGNoZWNrIGZvciBqYXNtaW5lIGJlY2F1c2UgaGFkIHRyb3VibGUgZ2V0dGluZyBzcHkgdG8gd29yayBpbiB1bml0IHRlc3QgdXNpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAhd2luZG93Lmphc21pbmVcbiAgICApIHtcbiAgICAgIGxvZyhtZXNzYWdlRGF0YS5pZCwgJ1JlcXVlc3RpbmcgYW5pbWF0aW9uIGZyYW1lJylcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jKVxuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyKGNhbGxlZU1zZywgbXNnLCBpZnJhbWUsIGlkLCBub1Jlc3BvbnNlV2FybmluZykge1xuICAgIGZ1bmN0aW9uIHBvc3RNZXNzYWdlVG9JRnJhbWUoKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gc2V0dGluZ3NbaWRdICYmIHNldHRpbmdzW2lkXS50YXJnZXRPcmlnaW5cbiAgICAgIGxvZyhcbiAgICAgICAgaWQsXG4gICAgICAgICdbJyArXG4gICAgICAgICAgY2FsbGVlTXNnICtcbiAgICAgICAgICAnXSBTZW5kaW5nIG1zZyB0byBpZnJhbWVbJyArXG4gICAgICAgICAgaWQgK1xuICAgICAgICAgICddICgnICtcbiAgICAgICAgICBtc2cgK1xuICAgICAgICAgICcpIHRhcmdldE9yaWdpbjogJyArXG4gICAgICAgICAgdGFyZ2V0XG4gICAgICApXG4gICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShtc2dJZCArIG1zZywgdGFyZ2V0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlGcmFtZU5vdEZvdW5kKCkge1xuICAgICAgd2FybihpZCwgJ1snICsgY2FsbGVlTXNnICsgJ10gSUZyYW1lKCcgKyBpZCArICcpIG5vdCBmb3VuZCcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hrQW5kU2VuZCgpIHtcbiAgICAgIGlmIChcbiAgICAgICAgaWZyYW1lICYmXG4gICAgICAgICdjb250ZW50V2luZG93JyBpbiBpZnJhbWUgJiZcbiAgICAgICAgbnVsbCAhPT0gaWZyYW1lLmNvbnRlbnRXaW5kb3dcbiAgICAgICkge1xuICAgICAgICAvLyBOdWxsIHRlc3QgZm9yIFBoYW50b21KU1xuICAgICAgICBwb3N0TWVzc2FnZVRvSUZyYW1lKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlGcmFtZU5vdEZvdW5kKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YXJuT25Ob1Jlc3BvbnNlKCkge1xuICAgICAgZnVuY3Rpb24gd2FybmluZygpIHtcbiAgICAgICAgaWYgKHNldHRpbmdzW2lkXSAmJiAhc2V0dGluZ3NbaWRdLmxvYWRlZCAmJiAhZXJyb3JTaG93bikge1xuICAgICAgICAgIGVycm9yU2hvd24gPSB0cnVlXG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgJ0lGcmFtZSBoYXMgbm90IHJlc3BvbmRlZCB3aXRoaW4gJyArXG4gICAgICAgICAgICAgIHNldHRpbmdzW2lkXS53YXJuaW5nVGltZW91dCAvIDEwMDAgK1xuICAgICAgICAgICAgICAnIHNlY29uZHMuIENoZWNrIGlGcmFtZVJlc2l6ZXIuY29udGVudFdpbmRvdy5qcyBoYXMgYmVlbiBsb2FkZWQgaW4gaUZyYW1lLiBUaGlzIG1lc3NhZ2UgY2FuIGJlIGlnbm9yZWQgaWYgZXZlcnl0aGluZyBpcyB3b3JraW5nLCBvciB5b3UgY2FuIHNldCB0aGUgd2FybmluZ1RpbWVvdXQgb3B0aW9uIHRvIGEgaGlnaGVyIHZhbHVlIG9yIHplcm8gdG8gc3VwcHJlc3MgdGhpcyB3YXJuaW5nLidcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAhIW5vUmVzcG9uc2VXYXJuaW5nICYmXG4gICAgICAgIHNldHRpbmdzW2lkXSAmJlxuICAgICAgICAhIXNldHRpbmdzW2lkXS53YXJuaW5nVGltZW91dFxuICAgICAgKSB7XG4gICAgICAgIHNldHRpbmdzW2lkXS5tc2dUaW1lb3V0ID0gc2V0VGltZW91dChcbiAgICAgICAgICB3YXJuaW5nLFxuICAgICAgICAgIHNldHRpbmdzW2lkXS53YXJuaW5nVGltZW91dFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGVycm9yU2hvd24gPSBmYWxzZVxuXG4gICAgaWQgPSBpZCB8fCBpZnJhbWUuaWRcblxuICAgIGlmIChzZXR0aW5nc1tpZF0pIHtcbiAgICAgIGNoa0FuZFNlbmQoKVxuICAgICAgd2Fybk9uTm9SZXNwb25zZSgpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT3V0Z29pbmdNc2coaWZyYW1lSWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgaWZyYW1lSWQgK1xuICAgICAgJzonICtcbiAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5ib2R5TWFyZ2luVjEgK1xuICAgICAgJzonICtcbiAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5zaXplV2lkdGggK1xuICAgICAgJzonICtcbiAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5sb2cgK1xuICAgICAgJzonICtcbiAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5pbnRlcnZhbCArXG4gICAgICAnOicgK1xuICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLmVuYWJsZVB1YmxpY01ldGhvZHMgK1xuICAgICAgJzonICtcbiAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5hdXRvUmVzaXplICtcbiAgICAgICc6JyArXG4gICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uYm9keU1hcmdpbiArXG4gICAgICAnOicgK1xuICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLmhlaWdodENhbGN1bGF0aW9uTWV0aG9kICtcbiAgICAgICc6JyArXG4gICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uYm9keUJhY2tncm91bmQgK1xuICAgICAgJzonICtcbiAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5ib2R5UGFkZGluZyArXG4gICAgICAnOicgK1xuICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLnRvbGVyYW5jZSArXG4gICAgICAnOicgK1xuICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLmluUGFnZUxpbmtzICtcbiAgICAgICc6JyArXG4gICAgICBzZXR0aW5nc1tpZnJhbWVJZF0ucmVzaXplRnJvbSArXG4gICAgICAnOicgK1xuICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLndpZHRoQ2FsY3VsYXRpb25NZXRob2RcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cElGcmFtZShpZnJhbWUsIG9wdGlvbnMpIHtcbiAgICBmdW5jdGlvbiBzZXRMaW1pdHMoKSB7XG4gICAgICBmdW5jdGlvbiBhZGRTdHlsZShzdHlsZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgSW5maW5pdHkgIT09IHNldHRpbmdzW2lmcmFtZUlkXVtzdHlsZV0gJiZcbiAgICAgICAgICAwICE9PSBzZXR0aW5nc1tpZnJhbWVJZF1bc3R5bGVdXG4gICAgICAgICkge1xuICAgICAgICAgIGlmcmFtZS5zdHlsZVtzdHlsZV0gPSBzZXR0aW5nc1tpZnJhbWVJZF1bc3R5bGVdICsgJ3B4J1xuICAgICAgICAgIGxvZyhcbiAgICAgICAgICAgIGlmcmFtZUlkLFxuICAgICAgICAgICAgJ1NldCAnICsgc3R5bGUgKyAnID0gJyArIHNldHRpbmdzW2lmcmFtZUlkXVtzdHlsZV0gKyAncHgnXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNoa01pbk1heChkaW1lbnNpb24pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXVsnbWluJyArIGRpbWVuc2lvbl0gPlxuICAgICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXVsnbWF4JyArIGRpbWVuc2lvbl1cbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ1ZhbHVlIGZvciBtaW4nICtcbiAgICAgICAgICAgICAgZGltZW5zaW9uICtcbiAgICAgICAgICAgICAgJyBjYW4gbm90IGJlIGdyZWF0ZXIgdGhhbiBtYXgnICtcbiAgICAgICAgICAgICAgZGltZW5zaW9uXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoa01pbk1heCgnSGVpZ2h0JylcbiAgICAgIGNoa01pbk1heCgnV2lkdGgnKVxuXG4gICAgICBhZGRTdHlsZSgnbWF4SGVpZ2h0JylcbiAgICAgIGFkZFN0eWxlKCdtaW5IZWlnaHQnKVxuICAgICAgYWRkU3R5bGUoJ21heFdpZHRoJylcbiAgICAgIGFkZFN0eWxlKCdtaW5XaWR0aCcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3SWQoKSB7XG4gICAgICB2YXIgaWQgPSAob3B0aW9ucyAmJiBvcHRpb25zLmlkKSB8fCBkZWZhdWx0cy5pZCArIGNvdW50KytcbiAgICAgIGlmIChudWxsICE9PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHtcbiAgICAgICAgaWQgKz0gY291bnQrK1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5zdXJlSGFzSWQoaWZyYW1lSWQpIHtcbiAgICAgIGlmICgnJyA9PT0gaWZyYW1lSWQpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW11bHRpLWFzc2lnblxuICAgICAgICBpZnJhbWUuaWQgPSBpZnJhbWVJZCA9IG5ld0lkKClcbiAgICAgICAgbG9nRW5hYmxlZCA9IChvcHRpb25zIHx8IHt9KS5sb2dcbiAgICAgICAgbG9nKFxuICAgICAgICAgIGlmcmFtZUlkLFxuICAgICAgICAgICdBZGRlZCBtaXNzaW5nIGlmcmFtZSBJRDogJyArIGlmcmFtZUlkICsgJyAoJyArIGlmcmFtZS5zcmMgKyAnKSdcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaWZyYW1lSWRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTY3JvbGxpbmcoKSB7XG4gICAgICBsb2coXG4gICAgICAgIGlmcmFtZUlkLFxuICAgICAgICAnSUZyYW1lIHNjcm9sbGluZyAnICtcbiAgICAgICAgICAoc2V0dGluZ3NbaWZyYW1lSWRdICYmIHNldHRpbmdzW2lmcmFtZUlkXS5zY3JvbGxpbmdcbiAgICAgICAgICAgID8gJ2VuYWJsZWQnXG4gICAgICAgICAgICA6ICdkaXNhYmxlZCcpICtcbiAgICAgICAgICAnIGZvciAnICtcbiAgICAgICAgICBpZnJhbWVJZFxuICAgICAgKVxuICAgICAgaWZyYW1lLnN0eWxlLm92ZXJmbG93ID1cbiAgICAgICAgZmFsc2UgPT09IChzZXR0aW5nc1tpZnJhbWVJZF0gJiYgc2V0dGluZ3NbaWZyYW1lSWRdLnNjcm9sbGluZylcbiAgICAgICAgICA/ICdoaWRkZW4nXG4gICAgICAgICAgOiAnYXV0bydcbiAgICAgIHN3aXRjaCAoc2V0dGluZ3NbaWZyYW1lSWRdICYmIHNldHRpbmdzW2lmcmFtZUlkXS5zY3JvbGxpbmcpIHtcbiAgICAgICAgY2FzZSAnb21pdCc6XG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgaWZyYW1lLnNjcm9sbGluZyA9ICd5ZXMnXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgIGlmcmFtZS5zY3JvbGxpbmcgPSAnbm8nXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmcmFtZS5zY3JvbGxpbmcgPSBzZXR0aW5nc1tpZnJhbWVJZF1cbiAgICAgICAgICAgID8gc2V0dGluZ3NbaWZyYW1lSWRdLnNjcm9sbGluZ1xuICAgICAgICAgICAgOiAnbm8nXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlIFYxIGlGcmFtZSBzY3JpcHQgZXhwZWN0cyBhbiBpbnQsIHdoZXJlIGFzIGluIFYyIGV4cGVjdHMgYSBDU1NcbiAgICAvLyBzdHJpbmcgdmFsdWUgc3VjaCBhcyAnMXB4IDNlbScsIHNvIGlmIHdlIGhhdmUgYW4gaW50IGZvciBWMiwgc2V0IFYxPVYyXG4gICAgLy8gYW5kIHRoZW4gY29udmVydCBWMiB0byBhIHN0cmluZyBQWCB2YWx1ZS5cbiAgICBmdW5jdGlvbiBzZXR1cEJvZHlNYXJnaW5WYWx1ZXMoKSB7XG4gICAgICBpZiAoXG4gICAgICAgICdudW1iZXInID09PVxuICAgICAgICAgIHR5cGVvZiAoc2V0dGluZ3NbaWZyYW1lSWRdICYmIHNldHRpbmdzW2lmcmFtZUlkXS5ib2R5TWFyZ2luKSB8fFxuICAgICAgICAnMCcgPT09IChzZXR0aW5nc1tpZnJhbWVJZF0gJiYgc2V0dGluZ3NbaWZyYW1lSWRdLmJvZHlNYXJnaW4pXG4gICAgICApIHtcbiAgICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLmJvZHlNYXJnaW5WMSA9IHNldHRpbmdzW2lmcmFtZUlkXS5ib2R5TWFyZ2luXG4gICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5ib2R5TWFyZ2luID1cbiAgICAgICAgICAnJyArIHNldHRpbmdzW2lmcmFtZUlkXS5ib2R5TWFyZ2luICsgJ3B4J1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrUmVzZXQoKSB7XG4gICAgICAvLyBSZWR1Y2Ugc2NvcGUgb2YgZmlyc3RSdW4gdG8gZnVuY3Rpb24sIGJlY2F1c2UgSUU4J3MgSlMgZXhlY3V0aW9uXG4gICAgICAvLyBjb250ZXh0IHN0YWNrIGlzIGJvcmtlZCBhbmQgdGhpcyB2YWx1ZSBnZXRzIGV4dGVybmFsbHlcbiAgICAgIC8vIGNoYW5nZWQgbWlkd2F5IHRocm91Z2ggcnVubmluZyB0aGlzIGZ1bmN0aW9uISEhXG4gICAgICB2YXIgZmlyc3RSdW4gPSBzZXR0aW5nc1tpZnJhbWVJZF0gJiYgc2V0dGluZ3NbaWZyYW1lSWRdLmZpcnN0UnVuLFxuICAgICAgICByZXNldFJlcXVlcnRNZXRob2QgPVxuICAgICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXSAmJlxuICAgICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5oZWlnaHRDYWxjdWxhdGlvbk1ldGhvZCBpbiByZXNldFJlcXVpcmVkTWV0aG9kc1xuXG4gICAgICBpZiAoIWZpcnN0UnVuICYmIHJlc2V0UmVxdWVydE1ldGhvZCkge1xuICAgICAgICByZXNldElGcmFtZSh7IGlmcmFtZTogaWZyYW1lLCBoZWlnaHQ6IDAsIHdpZHRoOiAwLCB0eXBlOiAnaW5pdCcgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR1cElGcmFtZU9iamVjdCgpIHtcbiAgICAgIGlmIChzZXR0aW5nc1tpZnJhbWVJZF0pIHtcbiAgICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLmlmcmFtZS5pRnJhbWVSZXNpemVyID0ge1xuICAgICAgICAgIGNsb3NlOiBjbG9zZUlGcmFtZS5iaW5kKG51bGwsIHNldHRpbmdzW2lmcmFtZUlkXS5pZnJhbWUpLFxuXG4gICAgICAgICAgcmVtb3ZlTGlzdGVuZXJzOiByZW1vdmVJZnJhbWVMaXN0ZW5lcnMuYmluZChcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0uaWZyYW1lXG4gICAgICAgICAgKSxcblxuICAgICAgICAgIHJlc2l6ZTogdHJpZ2dlci5iaW5kKFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICdXaW5kb3cgcmVzaXplJyxcbiAgICAgICAgICAgICdyZXNpemUnLFxuICAgICAgICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLmlmcmFtZVxuICAgICAgICAgICksXG5cbiAgICAgICAgICBtb3ZlVG9BbmNob3I6IGZ1bmN0aW9uIChhbmNob3IpIHtcbiAgICAgICAgICAgIHRyaWdnZXIoXG4gICAgICAgICAgICAgICdNb3ZlIHRvIGFuY2hvcicsXG4gICAgICAgICAgICAgICdtb3ZlVG9BbmNob3I6JyArIGFuY2hvcixcbiAgICAgICAgICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLmlmcmFtZSxcbiAgICAgICAgICAgICAgaWZyYW1lSWRcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSlcbiAgICAgICAgICAgIHRyaWdnZXIoXG4gICAgICAgICAgICAgICdTZW5kIE1lc3NhZ2UnLFxuICAgICAgICAgICAgICAnbWVzc2FnZTonICsgbWVzc2FnZSxcbiAgICAgICAgICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdLmlmcmFtZSxcbiAgICAgICAgICAgICAgaWZyYW1lSWRcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXZSBoYXZlIHRvIGNhbGwgdHJpZ2dlciB0d2ljZSwgYXMgd2UgY2FuIG5vdCBiZSBzdXJlIGlmIGFsbFxuICAgIC8vIGlmcmFtZXMgaGF2ZSBjb21wbGV0ZWQgbG9hZGluZyB3aGVuIHRoaXMgY29kZSBydW5zLiBUaGVcbiAgICAvLyBldmVudCBsaXN0ZW5lciBhbHNvIGNhdGNoZXMgdGhlIHBhZ2UgY2hhbmdpbmcgaW4gdGhlIGlGcmFtZS5cbiAgICBmdW5jdGlvbiBpbml0KG1zZykge1xuICAgICAgZnVuY3Rpb24gaUZyYW1lTG9hZGVkKCkge1xuICAgICAgICB0cmlnZ2VyKCdpRnJhbWUub25sb2FkJywgbXNnLCBpZnJhbWUsIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICAgICAgY2hlY2tSZXNldCgpXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZURlc3Ryb3lPYnNlcnZlcihNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgIGlmICghaWZyYW1lLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZXN0cm95T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgcmVtb3ZlZE5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobXV0YXRpb24ucmVtb3ZlZE5vZGVzKSAvLyBUcmFuc2Zvcm0gTm9kZUxpc3QgaW50byBhbiBBcnJheVxuICAgICAgICAgICAgcmVtb3ZlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHJlbW92ZWROb2RlKSB7XG4gICAgICAgICAgICAgIGlmIChyZW1vdmVkTm9kZSA9PT0gaWZyYW1lKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VJRnJhbWUoaWZyYW1lKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGRlc3Ryb3lPYnNlcnZlci5vYnNlcnZlKGlmcmFtZS5wYXJlbnROb2RlLCB7XG4gICAgICAgICAgY2hpbGRMaXN0OiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHZhciBNdXRhdGlvbk9ic2VydmVyID0gZ2V0TXV0YXRpb25PYnNlcnZlcigpXG4gICAgICBpZiAoTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICBjcmVhdGVEZXN0cm95T2JzZXJ2ZXIoTXV0YXRpb25PYnNlcnZlcilcbiAgICAgIH1cblxuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihpZnJhbWUsICdsb2FkJywgaUZyYW1lTG9hZGVkKVxuICAgICAgdHJpZ2dlcignaW5pdCcsIG1zZywgaWZyYW1lLCB1bmRlZmluZWQsIHRydWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgIGlmICgnb2JqZWN0JyAhPT0gdHlwZW9mIG9wdGlvbnMpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT3B0aW9ucyBpcyBub3QgYW4gb2JqZWN0JylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb3B5T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIGZvciAodmFyIG9wdGlvbiBpbiBkZWZhdWx0cykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRlZmF1bHRzLCBvcHRpb24pKSB7XG4gICAgICAgICAgc2V0dGluZ3NbaWZyYW1lSWRdW29wdGlvbl0gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9uXG4gICAgICAgICAgKVxuICAgICAgICAgICAgPyBvcHRpb25zW29wdGlvbl1cbiAgICAgICAgICAgIDogZGVmYXVsdHNbb3B0aW9uXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VGFyZ2V0T3JpZ2luKHJlbW90ZUhvc3QpIHtcbiAgICAgIHJldHVybiAnJyA9PT0gcmVtb3RlSG9zdCB8fFxuICAgICAgICBudWxsICE9PSByZW1vdGVIb3N0Lm1hdGNoKC9eKGFib3V0OmJsYW5rfGphdmFzY3JpcHQ6fGZpbGU6XFwvXFwvKS8pXG4gICAgICAgID8gJyonXG4gICAgICAgIDogcmVtb3RlSG9zdFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlcHJpY2F0ZShrZXkpIHtcbiAgICAgIHZhciBzcGxpdE5hbWUgPSBrZXkuc3BsaXQoJ0NhbGxiYWNrJylcblxuICAgICAgaWYgKHNwbGl0TmFtZS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgdmFyIG5hbWUgPVxuICAgICAgICAgICdvbicgKyBzcGxpdE5hbWVbMF0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzcGxpdE5hbWVbMF0uc2xpY2UoMSlcbiAgICAgICAgdGhpc1tuYW1lXSA9IHRoaXNba2V5XVxuICAgICAgICBkZWxldGUgdGhpc1trZXldXG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgaWZyYW1lSWQsXG4gICAgICAgICAgXCJEZXByZWNhdGVkOiAnXCIgK1xuICAgICAgICAgICAga2V5ICtcbiAgICAgICAgICAgIFwiJyBoYXMgYmVlbiByZW5hbWVkICdcIiArXG4gICAgICAgICAgICBuYW1lICtcbiAgICAgICAgICAgIFwiJy4gVGhlIG9sZCBtZXRob2Qgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24uXCJcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgICBzZXR0aW5nc1tpZnJhbWVJZF0gPSB7XG4gICAgICAgIGZpcnN0UnVuOiB0cnVlLFxuICAgICAgICBpZnJhbWU6IGlmcmFtZSxcbiAgICAgICAgcmVtb3RlSG9zdDogaWZyYW1lLnNyYyAmJiBpZnJhbWUuc3JjLnNwbGl0KCcvJykuc2xpY2UoMCwgMykuam9pbignLycpXG4gICAgICB9XG5cbiAgICAgIGNoZWNrT3B0aW9ucyhvcHRpb25zKVxuICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChkZXByaWNhdGUsIG9wdGlvbnMpXG4gICAgICBjb3B5T3B0aW9ucyhvcHRpb25zKVxuXG4gICAgICBpZiAoc2V0dGluZ3NbaWZyYW1lSWRdKSB7XG4gICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS50YXJnZXRPcmlnaW4gPVxuICAgICAgICAgIHRydWUgPT09IHNldHRpbmdzW2lmcmFtZUlkXS5jaGVja09yaWdpblxuICAgICAgICAgICAgPyBnZXRUYXJnZXRPcmlnaW4oc2V0dGluZ3NbaWZyYW1lSWRdLnJlbW90ZUhvc3QpXG4gICAgICAgICAgICA6ICcqJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJlZW5IZXJlKCkge1xuICAgICAgcmV0dXJuIGlmcmFtZUlkIGluIHNldHRpbmdzICYmICdpRnJhbWVSZXNpemVyJyBpbiBpZnJhbWVcbiAgICB9XG5cbiAgICB2YXIgaWZyYW1lSWQgPSBlbnN1cmVIYXNJZChpZnJhbWUuaWQpXG5cbiAgICBpZiAoIWJlZW5IZXJlKCkpIHtcbiAgICAgIHByb2Nlc3NPcHRpb25zKG9wdGlvbnMpXG4gICAgICBzZXRTY3JvbGxpbmcoKVxuICAgICAgc2V0TGltaXRzKClcbiAgICAgIHNldHVwQm9keU1hcmdpblZhbHVlcygpXG4gICAgICBpbml0KGNyZWF0ZU91dGdvaW5nTXNnKGlmcmFtZUlkKSlcbiAgICAgIHNldHVwSUZyYW1lT2JqZWN0KClcbiAgICB9IGVsc2Uge1xuICAgICAgd2FybihpZnJhbWVJZCwgJ0lnbm9yZWQgaUZyYW1lLCBhbHJlYWR5IHNldHVwLicpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VjZShmbiwgdGltZSkge1xuICAgIGlmIChudWxsID09PSB0aW1lcikge1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICAgIGZuKClcbiAgICAgIH0sIHRpbWUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGZyYW1lVGltZXIgPSB7fVxuICBmdW5jdGlvbiBkZWJvdW5jZUZyYW1lRXZlbnRzKGZuLCB0aW1lLCBmcmFtZUlkKSB7XG4gICAgaWYgKCFmcmFtZVRpbWVyW2ZyYW1lSWRdKSB7XG4gICAgICBmcmFtZVRpbWVyW2ZyYW1lSWRdID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZyYW1lVGltZXJbZnJhbWVJZF0gPSBudWxsXG4gICAgICAgIGZuKClcbiAgICAgIH0sIHRpbWUpXG4gICAgfVxuICB9XG5cbiAgLy8gTm90IHRlc3RhYmxlIGluIFBoYW50b21KU1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG4gIGZ1bmN0aW9uIGZpeEhpZGRlbklGcmFtZXMoKSB7XG4gICAgZnVuY3Rpb24gY2hlY2tJRnJhbWVzKCkge1xuICAgICAgZnVuY3Rpb24gY2hlY2tJRnJhbWUoc2V0dGluZ0lkKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNoa0RpbWVuc2lvbihkaW1lbnNpb24pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgJzBweCcgPT09XG4gICAgICAgICAgICAoc2V0dGluZ3Nbc2V0dGluZ0lkXSAmJiBzZXR0aW5nc1tzZXR0aW5nSWRdLmlmcmFtZS5zdHlsZVtkaW1lbnNpb25dKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlzVmlzaWJsZShlbCkge1xuICAgICAgICAgIHJldHVybiBudWxsICE9PSBlbC5vZmZzZXRQYXJlbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBzZXR0aW5nc1tzZXR0aW5nSWRdICYmXG4gICAgICAgICAgaXNWaXNpYmxlKHNldHRpbmdzW3NldHRpbmdJZF0uaWZyYW1lKSAmJlxuICAgICAgICAgIChjaGtEaW1lbnNpb24oJ2hlaWdodCcpIHx8IGNoa0RpbWVuc2lvbignd2lkdGgnKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdHJpZ2dlcihcbiAgICAgICAgICAgICdWaXNpYmlsaXR5IGNoYW5nZScsXG4gICAgICAgICAgICAncmVzaXplJyxcbiAgICAgICAgICAgIHNldHRpbmdzW3NldHRpbmdJZF0uaWZyYW1lLFxuICAgICAgICAgICAgc2V0dGluZ0lkXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKHNldHRpbmdzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgY2hlY2tJRnJhbWUoa2V5KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtdXRhdGlvbk9ic2VydmVkKG11dGF0aW9ucykge1xuICAgICAgbG9nKFxuICAgICAgICAnd2luZG93JyxcbiAgICAgICAgJ011dGF0aW9uIG9ic2VydmVkOiAnICsgbXV0YXRpb25zWzBdLnRhcmdldCArICcgJyArIG11dGF0aW9uc1swXS50eXBlXG4gICAgICApXG4gICAgICBkZWJvdWNlKGNoZWNrSUZyYW1lcywgMTYpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTXV0YXRpb25PYnNlcnZlcigpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiBmYWxzZSxcbiAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgICAgICAgIGNoYXJhY3RlckRhdGFPbGRWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbk9ic2VydmVkKVxuXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgY29uZmlnKVxuICAgIH1cblxuICAgIHZhciBNdXRhdGlvbk9ic2VydmVyID0gZ2V0TXV0YXRpb25PYnNlcnZlcigpXG4gICAgaWYgKE11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGNyZWF0ZU11dGF0aW9uT2JzZXJ2ZXIoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2l6ZUlGcmFtZXMoZXZlbnQpIHtcbiAgICBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgICBzZW5kVHJpZ2dlck1zZygnV2luZG93ICcgKyBldmVudCwgJ3Jlc2l6ZScpXG4gICAgfVxuXG4gICAgbG9nKCd3aW5kb3cnLCAnVHJpZ2dlciBldmVudDogJyArIGV2ZW50KVxuICAgIGRlYm91Y2UocmVzaXplLCAxNilcbiAgfVxuXG4gIC8vIE5vdCB0ZXN0YWJsZSBpbiBQaGFudG9tSlNcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZnVuY3Rpb24gdGFiVmlzaWJsZSgpIHtcbiAgICBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgICBzZW5kVHJpZ2dlck1zZygnVGFiIFZpc2FibGUnLCAncmVzaXplJylcbiAgICB9XG5cbiAgICBpZiAoJ2hpZGRlbicgIT09IGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSkge1xuICAgICAgbG9nKCdkb2N1bWVudCcsICdUcmlnZ2VyIGV2ZW50OiBWaXNpYmxpdHkgY2hhbmdlJylcbiAgICAgIGRlYm91Y2UocmVzaXplLCAxNilcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZW5kVHJpZ2dlck1zZyhldmVudE5hbWUsIGV2ZW50KSB7XG4gICAgZnVuY3Rpb24gaXNJRnJhbWVSZXNpemVFbmFibGVkKGlmcmFtZUlkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBzZXR0aW5nc1tpZnJhbWVJZF0gJiZcbiAgICAgICAgJ3BhcmVudCcgPT09IHNldHRpbmdzW2lmcmFtZUlkXS5yZXNpemVGcm9tICYmXG4gICAgICAgIHNldHRpbmdzW2lmcmFtZUlkXS5hdXRvUmVzaXplICYmXG4gICAgICAgICFzZXR0aW5nc1tpZnJhbWVJZF0uZmlyc3RSdW5cbiAgICAgIClcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhzZXR0aW5ncykuZm9yRWFjaChmdW5jdGlvbiAoaWZyYW1lSWQpIHtcbiAgICAgIGlmIChpc0lGcmFtZVJlc2l6ZUVuYWJsZWQoaWZyYW1lSWQpKSB7XG4gICAgICAgIHRyaWdnZXIoZXZlbnROYW1lLCBldmVudCwgc2V0dGluZ3NbaWZyYW1lSWRdLmlmcmFtZSwgaWZyYW1lSWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdtZXNzYWdlJywgaUZyYW1lTGlzdGVuZXIpXG5cbiAgICBhZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlc2l6ZUlGcmFtZXMoJ3Jlc2l6ZScpXG4gICAgfSlcblxuICAgIGFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICd2aXNpYmlsaXR5Y2hhbmdlJywgdGFiVmlzaWJsZSlcblxuICAgIGFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICctd2Via2l0LXZpc2liaWxpdHljaGFuZ2UnLCB0YWJWaXNpYmxlKVxuICB9XG5cbiAgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbiAgICBmdW5jdGlvbiBpbml0KG9wdGlvbnMsIGVsZW1lbnQpIHtcbiAgICAgIGZ1bmN0aW9uIGNoa1R5cGUoKSB7XG4gICAgICAgIGlmICghZWxlbWVudC50YWdOYW1lKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0IGlzIG5vdCBhIHZhbGlkIERPTSBlbGVtZW50JylcbiAgICAgICAgfSBlbHNlIGlmICgnSUZSQU1FJyAhPT0gZWxlbWVudC50YWdOYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0V4cGVjdGVkIDxJRlJBTUU+IHRhZywgZm91bmQgPCcgKyBlbGVtZW50LnRhZ05hbWUgKyAnPidcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgY2hrVHlwZSgpXG4gICAgICAgIHNldHVwSUZyYW1lKGVsZW1lbnQsIG9wdGlvbnMpXG4gICAgICAgIGlGcmFtZXMucHVzaChlbGVtZW50KVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhcm5EZXByZWNhdGVkT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmVuYWJsZVB1YmxpY01ldGhvZHMpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnZW5hYmxlUHVibGljTWV0aG9kcyBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZCwgcHVibGljIG1ldGhvZHMgYXJlIG5vdyBhbHdheXMgYXZhaWxhYmxlIGluIHRoZSBpRnJhbWUnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaUZyYW1lc1xuXG4gICAgc2V0dXBSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKVxuICAgIHNldHVwRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlGcmFtZVJlc2l6ZUYob3B0aW9ucywgdGFyZ2V0KSB7XG4gICAgICBpRnJhbWVzID0gW10gLy8gT25seSByZXR1cm4gaUZyYW1lcyBwYXN0IGluIG9uIHRoaXMgY2FsbFxuXG4gICAgICB3YXJuRGVwcmVjYXRlZE9wdGlvbnMob3B0aW9ucylcblxuICAgICAgc3dpdGNoICh0eXBlb2YgdGFyZ2V0KSB7XG4gICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0IHx8ICdpZnJhbWUnKSxcbiAgICAgICAgICAgIGluaXQuYmluZCh1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgICAgICAgKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICBpbml0KG9wdGlvbnMsIHRhcmdldClcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5leHBlY3RlZCBkYXRhIHR5cGUgKCcgKyB0eXBlb2YgdGFyZ2V0ICsgJyknKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaUZyYW1lc1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUpRdWVyeVB1YmxpY01ldGhvZCgkKSB7XG4gICAgaWYgKCEkLmZuKSB7XG4gICAgICBpbmZvKCcnLCAnVW5hYmxlIHRvIGJpbmQgdG8galF1ZXJ5LCBpdCBpcyBub3QgZnVsbHkgbG9hZGVkLicpXG4gICAgfSBlbHNlIGlmICghJC5mbi5pRnJhbWVSZXNpemUpIHtcbiAgICAgICQuZm4uaUZyYW1lUmVzaXplID0gZnVuY3Rpb24gJGlGcmFtZVJlc2l6ZUYob3B0aW9ucykge1xuICAgICAgICBmdW5jdGlvbiBpbml0KGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgc2V0dXBJRnJhbWUoZWxlbWVudCwgb3B0aW9ucylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcignaWZyYW1lJykuZWFjaChpbml0KS5lbmQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh3aW5kb3cualF1ZXJ5KSB7XG4gICAgY3JlYXRlSlF1ZXJ5UHVibGljTWV0aG9kKHdpbmRvdy5qUXVlcnkpXG4gIH1cblxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KVxuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBOb2RlIGZvciBicm93c2VyZnlcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKVxuICB9XG4gIHdpbmRvdy5pRnJhbWVSZXNpemUgPSB3aW5kb3cuaUZyYW1lUmVzaXplIHx8IGZhY3RvcnkoKVxufSkoKVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0Jvb2tpbmdXaWRnZXRNb2RhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0Jvb2tpbmdXaWRnZXRNb2RhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Cb29raW5nV2lkZ2V0ID0gdm9pZCAwO1xyXG52YXIgaWZyYW1lX3Jlc2l6ZXJfMSA9IHJlcXVpcmUoXCJpZnJhbWUtcmVzaXplclwiKTtcclxudmFyIEJvb2tpbmdXaWRnZXRBdHRyaWJ1dGVzXzEgPSByZXF1aXJlKFwiLi9Cb29raW5nV2lkZ2V0QXR0cmlidXRlc1wiKTtcclxucmVxdWlyZShcIi4vQm9va2luZ1dpZGdldE1vZGFsLmNzc1wiKTtcclxudmFyIEJvb2tpbmdXaWRnZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCb29raW5nV2lkZ2V0KCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yZXNpemVkSWZyYW1lcyA9IFtdO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLW11bHRpbGluZS1zdHJpbmcgKi9cclxuICAgICAgICB0aGlzLmJ1dHRvblN0eWxlID0gXCJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODVBRDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMzZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAgMTZweCAwIDE2cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDRweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgXCJcclxuICAgICAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgICAgICAuc3BsaXQoXCJcXG5cIilcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocykgeyByZXR1cm4gcy50cmltKCk7IH0pXHJcbiAgICAgICAgICAgIC5qb2luKFwiIFwiKTtcclxuICAgICAgICAvLyBwcml2YXRlIGJhc2VVcmw6IHN0cmluZyA9IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6ODA4MFwiO1xyXG4gICAgICAgIHRoaXMuYmFzZVVybCA9IFwiaHR0cHM6Ly9jbG91ZC5jYXNwZWNvLnNlXCI7XHJcbiAgICAgICAgdGhpcy5hZGRNb2RhbDJCb2R5ID0gZnVuY3Rpb24gKGlmcmFtZSwgc2RrLCBhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIC8qIFRoZSBwYWdlIG5lZWRzIHRvIGhhdmUgdGhlIHJpZ2h0IGNoYXJzZXQgYmVmb3JlIGxvYWRpbmcgdGhlIHdpZGdldFxyXG4gICAgICAgICAgICAvLyBTZXQgY2hhcnNldCB0byBVVEYtOCB0byBzaG93IHRoZSDDlyBjaGFyYWN0ZXIgYXMgY2xvc2UgYnV0dG9uXHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGFzID0gd2luZG93LmRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvckFsbChcIm1ldGFcIik7XHJcbiAgICAgICAgICAgIGxldCBtZXRhVVRGOEV4aXN0cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBtZXRhcy5mb3JFYWNoKChtZXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG1ldGEuZ2V0QXR0cmlidXRlTm9kZShcImNoYXJzZXRcIik/LnZhbHVlID09PSBcIlVURi04XCIpIHtcclxuICAgICAgICAgICAgICAgIG1ldGFVVEY4RXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIW1ldGFVVEY4RXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbWV0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIpO1xyXG4gICAgICAgICAgICAgIG1ldGEuc2V0QXR0cmlidXRlKFwiY2hhcnNldFwiLCBcIlVURi04XCIpO1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIC8vIENsb3NlIGJ1dHRvblxyXG4gICAgICAgICAgICB2YXIgY2xvc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIGNsb3NlSWNvbi5jbGFzc05hbWUgPSBcImNsb3NlSWNvblwiO1xyXG4gICAgICAgICAgICBjbG9zZUljb24udGV4dENvbnRlbnQgPSBcIsOXXCI7XHJcbiAgICAgICAgICAgIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpOyB9KTtcclxuICAgICAgICAgICAgLy8gVGhlIG1haW4gY29udGFpbmVyXHJcbiAgICAgICAgICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTmFtZSA9IFwiY2FzcGVjby1ib29raW5nLW1vZGFsXCI7XHJcbiAgICAgICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XHJcbiAgICAgICAgICAgIC8vIElubmVyIGNvbnRhaW5lclxyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY2FzcGVjby1ib29raW5nLW1vZGFsLWNvbnRhaW5lclwiO1xyXG4gICAgICAgICAgICAvLyBEaXNyZWdhcmQgY29uc3RhbnQgaGVpZ2h0cyBzZXQgaW4gd2lkZ2V0IGF0dHJpYnV0ZXNcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5oZWlnaHQgPSBcImF1dG9cIjtcclxuICAgICAgICAgICAgLy8gQWRkIHRoZSBpZnJhbWUgdG8gcmVzaXplclxyXG4gICAgICAgICAgICB2YXIgaWZyYW1lUmVzaXplT3B0aW9ucyA9IF90aGlzLmdldElGcmFtZVJlc2l6ZU9wdGlvbnMoYXR0cmlidXRlcywgc2RrKTtcclxuICAgICAgICAgICAgX3RoaXMucmVzaXplZElmcmFtZXMucHVzaChpZnJhbWVfcmVzaXplcl8xLmlmcmFtZVJlc2l6ZXIoaWZyYW1lUmVzaXplT3B0aW9ucywgaWZyYW1lKVswXSk7XHJcbiAgICAgICAgICAgIC8vIFdyYXAgaXQgYW5kIGFkZCB0byB0aGUgYm9keVxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuICAgICAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm9va2luZ1dpZGdldCwgXCJJTlNUQU5DRVwiLCB7XHJcbiAgICAgICAgLy8gcHJpdmF0ZSBiYXNlVXJsID0gXCJodHRwczovL3dlYnBsYXRmb3JtLXRyYWNraW5nZGV2LmF6dXJld2Vic2l0ZXMubmV0XCI7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlIHx8ICh0aGlzLmluc3RhbmNlID0gbmV3IEJvb2tpbmdXaWRnZXQoKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgQm9va2luZ1dpZGdldC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChzZGssIGZvcmNlSW5pdCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJzID0gc2RrLndpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FzcGVjby1ib29raW5nXCIpO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlOnByZWZlci1mb3Itb2YgKi9cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29udGFpbmVycy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5jb250YWluZXJzW2ldO1xyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLmZpcnN0Q2hpbGQgIT09IG51bGwgJiYgY29udGFpbmVyLmZpcnN0Q2hpbGQubm9kZU5hbWUgPT09IFwiaWZyYW1lXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmb3JjZUluaXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBuZXcgQm9va2luZ1dpZGdldEF0dHJpYnV0ZXNfMS5Cb29raW5nV2lkZ2V0QXR0cmlidXRlcyhjb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMuc3lzdGVtID09PSBhdHRyaWJ1dGVzLnN5c3RlbSAmJiBmb3JjZUluaXQudW5pdElkID09PSBhdHRyaWJ1dGVzLnVuaXRJZClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRFbGVtZW50KGNvbnRhaW5lciwgc2RrLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEVsZW1lbnQoY29udGFpbmVyLCBzZGspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB3aWRnZXRzID0gc2RrLndpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FzcGVjby1ib29raW5nLXdpZGdldFwiKTtcclxuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVzID0gbmV3IEJvb2tpbmdXaWRnZXRBdHRyaWJ1dGVzXzEuQm9va2luZ1dpZGdldEF0dHJpYnV0ZXMod2lkZ2V0c1tpXSk7XHJcbiAgICAgICAgICAgIHZhciBpZnJhbWUgPSB0aGlzXzEuZ2V0SUZyYW1lKHNkay53aW5kb3csIGF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICB3aWRnZXRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hZGRNb2RhbDJCb2R5KGlmcmFtZSwgc2RrLCBhdHRyaWJ1dGVzKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgdGhpc18xID0gdGhpcztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdpZGdldHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgX2xvb3BfMShpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQm9va2luZ1dpZGdldC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBpZnJhbWVJbmRleCA9IDA7IGlmcmFtZUluZGV4IDwgdGhpcy5yZXNpemVkSWZyYW1lcy5sZW5ndGg7IGlmcmFtZUluZGV4ICs9IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNpemVkSWZyYW1lc1tpZnJhbWVJbmRleF0uaUZyYW1lUmVzaXplci5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc2l6ZWRJZnJhbWVzID0gW107XHJcbiAgICB9O1xyXG4gICAgQm9va2luZ1dpZGdldC5wcm90b3R5cGUuaW5pdEVsZW1lbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBzZGssIGZvcmNlSW5pdCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBuZXcgQm9va2luZ1dpZGdldEF0dHJpYnV0ZXNfMS5Cb29raW5nV2lkZ2V0QXR0cmlidXRlcyhjb250YWluZXIpO1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmJ1dHRvbikge1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgLyogdHNsaW50OmRpc2FibGU6bm8taW5uZXItaHRtbCAqL1xyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gYXR0cmlidXRlcy5idXR0b25UZXh0O1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgdGhpcy5idXR0b25TdHlsZSk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oX3RoaXMuZ2V0VVJMKGF0dHJpYnV0ZXMpKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvcmNlSW5pdCB8fCBhdHRyaWJ1dGVzLmF1dG9Mb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBpZnJhbWUgPSB0aGlzLmdldElGcmFtZShzZGsud2luZG93LCBhdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgaWZyYW1lID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbiAgICAgICAgICAgIHZhciBpZnJhbWVSZXNpemVPcHRpb25zID0gdGhpcy5nZXRJRnJhbWVSZXNpemVPcHRpb25zKGF0dHJpYnV0ZXMsIHNkayk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzaXplZElmcmFtZXMucHVzaChpZnJhbWVfcmVzaXplcl8xLmlmcmFtZVJlc2l6ZXIoaWZyYW1lUmVzaXplT3B0aW9ucywgaWZyYW1lKVswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEJvb2tpbmdXaWRnZXQucHJvdG90eXBlLmdldFVSTCA9IGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgdmFyIHNyYyA9IHRoaXMuYmFzZVVybCArIFwiL3B1YmxpYy93ZWJCb29raW5nP2lzV2ViQm9va2luZz10cnVlXCI7XHJcbiAgICAgICAgc3JjICs9IFwiJnN5c3RlbT1cIiArIGF0dHIuc3lzdGVtICsgXCImdW5pdElkPVwiICsgYXR0ci51bml0SWQgKyBcIiZsYW5nPVwiICsgYXR0ci5sYW5nICsgXCImaGVpZ2h0PVwiICsgYXR0ci5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKCFhdHRyLmJ1dHRvbikge1xyXG4gICAgICAgICAgICBzcmMgKz0gXCImaW5JRnJhbWU9dHJ1ZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXR0ci5hdXRvU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHNyYyArPSBcIiZhdXRvU2Nyb2xsPXRydWVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGF0dHIuc2VjdGlvbklkcykge1xyXG4gICAgICAgICAgICBzcmMgKz0gXCImc2VjdGlvbklkcz1cIiArIGF0dHIuc2VjdGlvbklkcy5qb2luKFwiLFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGF0dHIuYWR2YW5jZWQpIHtcclxuICAgICAgICAgICAgc3JjICs9IFwiJmFkdmFuY2VkPXRydWVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGF0dHIub25saW5lb3JkZXIpIHtcclxuICAgICAgICAgICAgc3JjICs9IFwiJm9ubGluZW9yZGVyPXRydWVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGF0dHIuY29sb3JUaGVtZSkge1xyXG4gICAgICAgICAgICBzcmMgKz0gXCImY29sb3JUaGVtZT10cnVlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhdHRyLm1haXRyZXMpIHtcclxuICAgICAgICAgICAgc3JjICs9IFwiJm1haXRyZXM9dHJ1ZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcmMgKz0gXCImaG9zdFVSTD1cIiArIGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgcmV0dXJuIHNyYztcclxuICAgIH07XHJcbiAgICBCb29raW5nV2lkZ2V0LnByb3RvdHlwZS5nZXRJRnJhbWUgPSBmdW5jdGlvbiAodywgYXR0cikge1xyXG4gICAgICAgIHZhciBpZnJhbWUgPSB3LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICAgICAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICAgICAgaWYgKHVhLmluZGV4T2YoXCJNU0lFIFwiKSA+IDAgfHwgdWEuaW5kZXhPZihcIlRyaWRlbnQvXCIpID4gMCkge1xyXG4gICAgICAgICAgICBpZnJhbWUuc2Nyb2xsaW5nID0gXCJ5ZXNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmcmFtZS5zY3JvbGxpbmcgPSBcIm5vXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJib3JkZXJcIiwgXCIwXCIpO1xyXG4gICAgICAgIGlmcmFtZS5zdHlsZS53aWR0aCA9IFwiMXB4XCI7XHJcbiAgICAgICAgaWZyYW1lLnN0eWxlLm1pbldpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgaWZyYW1lLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgICAgIGlmcmFtZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgaWZyYW1lLnNyYyA9IHRoaXMuZ2V0VVJMKGF0dHIpO1xyXG4gICAgICAgIHJldHVybiBpZnJhbWU7XHJcbiAgICB9O1xyXG4gICAgQm9va2luZ1dpZGdldC5wcm90b3R5cGUuZ2V0SUZyYW1lUmVzaXplT3B0aW9ucyA9IGZ1bmN0aW9uIChhdHRyLCBzZGspIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBoZWlnaHRJc0F1dG8gPSBhdHRyLmhlaWdodCA9PT0gXCJhdXRvXCI7XHJcbiAgICAgICAgdmFyIHdpZHRoSXNBdXRvID0gYXR0ci53aWR0aCA9PT0gXCJhdXRvXCI7XHJcbiAgICAgICAgdmFyIG1pbldpZHRoID0gMzIwO1xyXG4gICAgICAgIHZhciBtaW5IZWlnaHQgPSA1NTA7XHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGU6bm8taHR0cC1zdHJpbmcgKi9cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvbkluaXQ6IGZ1bmN0aW9uIChpZnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmcmFtZS5pRnJhbWVSZXNpemVyLnNlbmRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBpbml0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgfSwgX3RoaXMuYmFzZVVybCk7XHJcbiAgICAgICAgICAgICAgICBpZiAod2lkdGhJc0F1dG8pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZnJhbWUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25NZXNzYWdlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSA9PT0gXCJzZW5kQ29sb3JUaGVtZVwiICYmIGF0dHIuY29sb3JUaGVtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaWZyYW1lLmlGcmFtZVJlc2l6ZXIuc2VuZE1lc3NhZ2UoeyBjb2xvclRoZW1lOiBhdHRyLmNvbG9yVGhlbWUgfSwgX3RoaXMuYmFzZVVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRhLm1lc3NhZ2UuZXZlbnRUeXBlICYmIGRhdGEubWVzc2FnZS5ldmVudFR5cGUgPT09IFwiYm9va2luZ0V2ZW50XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZGsuZW1pdChcImJvb2tpbmdFdmVudFwiLCBkYXRhLm1lc3NhZ2UuZXZlbnQsIGRhdGEubWVzc2FnZS5wYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2hlY2tPcmlnaW46IFt0aGlzLmJhc2VVcmxdLFxyXG4gICAgICAgICAgICBzY3JvbGxpbmc6ICFoZWlnaHRJc0F1dG8sXHJcbiAgICAgICAgICAgIGJvZHlCYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMClcIixcclxuICAgICAgICAgICAgaGVpZ2h0Q2FsY3VsYXRpb25NZXRob2Q6IFwidGFnZ2VkRWxlbWVudFwiLFxyXG4gICAgICAgICAgICBib2R5TWFyZ2luOiAzLFxyXG4gICAgICAgICAgICBtaW5XaWR0aDogTWF0aC5tYXgobWluV2lkdGgsIHdpZHRoSXNBdXRvID8gMCA6IGF0dHIud2lkdGgpLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogd2lkdGhJc0F1dG8gPyBJbmZpbml0eSA6IE1hdGgubWF4KGF0dHIud2lkdGgsIG1pbldpZHRoKSxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBNYXRoLm1heChtaW5IZWlnaHQsIGhlaWdodElzQXV0byA/IDAgOiBhdHRyLmhlaWdodCksXHJcbiAgICAgICAgICAgIG1heEhlaWdodDogaGVpZ2h0SXNBdXRvID8gSW5maW5pdHkgOiBNYXRoLm1heChhdHRyLmhlaWdodCwgbWluSGVpZ2h0KSxcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCb29raW5nV2lkZ2V0O1xyXG59KCkpO1xyXG5leHBvcnRzLkJvb2tpbmdXaWRnZXQgPSBCb29raW5nV2lkZ2V0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkJvb2tpbmdXaWRnZXRBdHRyaWJ1dGVzID0gdm9pZCAwO1xyXG52YXIgQm9va2luZ1dpZGdldEF0dHJpYnV0ZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCb29raW5nV2lkZ2V0QXR0cmlidXRlcyhlbGVtKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnN5c3RlbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy51bml0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbklkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBcImF1dG9cIjtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IFwiYXV0b1wiO1xyXG4gICAgICAgIHRoaXMuY29sb3JUaGVtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sYW5nID0gXCJzdi1TRVwiO1xyXG4gICAgICAgIHRoaXMuYXV0b1Njcm9sbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hZHZhbmNlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIkJva2FcIjtcclxuICAgICAgICB0aGlzLm9ubGluZW9yZGVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hdXRvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdXBwb3J0ZWRMYW5ncyA9IFtcInN2LVNFXCIsIFwiZW4tVVNcIiwgXCJlbi1HQlwiLCBcIm5iLU5PXCIsIFwibmwtQkVcIiwgXCJmci1CRVwiLCBcInJ1LVJVXCIsIFwiZXQtRUVcIiwgXCJlcy1FU1wiLCBcImZpLUZJXCJdO1xyXG4gICAgICAgIFtcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwidW5pdElkXCJdLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgc3RyVmFsID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiICsga2V5KTtcclxuICAgICAgICAgICAgaWYgKHN0clZhbCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHZhbCA9IHBhcnNlSW50KHN0clZhbCwgMTApO1xyXG4gICAgICAgICAgICBpZiAoaXNOYU4odmFsKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXNba2V5XSA9IHZhbDtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGxhbmcgPSBlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtbGFuZ1wiKTtcclxuICAgICAgICBpZiAobGFuZykge1xyXG4gICAgICAgICAgICBsYW5nID0gdGhpcy51cHBlckNhc2VJQ1VMb2NhbGUobGFuZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsYW5nICYmIHRoaXMuc3VwcG9ydGVkTGFuZ3MuaW5kZXhPZihsYW5nKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZyA9IGxhbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3lzdGVtID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN5c3RlbVwiKTtcclxuICAgICAgICB2YXIgYXV0b1Njcm9sbCA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1hdXRvU2Nyb2xsXCIpO1xyXG4gICAgICAgIHRoaXMuYXV0b1Njcm9sbCA9ICEhYXV0b1Njcm9sbCAmJiBhdXRvU2Nyb2xsID09PSBcInRydWVcIjtcclxuICAgICAgICB2YXIgYWR2YW5jZWQgPSBlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtYWR2YW5jZWRcIik7XHJcbiAgICAgICAgdGhpcy5hZHZhbmNlZCA9ICEhYWR2YW5jZWQgJiYgYWR2YW5jZWQgPT09IFwidHJ1ZVwiO1xyXG4gICAgICAgIHZhciBvbmxpbmVvcmRlciA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1vbmxpbmVvcmRlclwiKTtcclxuICAgICAgICB0aGlzLm9ubGluZW9yZGVyID0gISFvbmxpbmVvcmRlciAmJiBvbmxpbmVvcmRlciA9PT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1idXR0b25cIik7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSAhIWJ1dHRvbiAmJiBidXR0b24gPT09IFwidHJ1ZVwiO1xyXG4gICAgICAgIHZhciBidXR0b25UZXh0ID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJ1dHRvblRleHRcIik7XHJcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gYnV0dG9uVGV4dCB8fCB0aGlzLmJ1dHRvblRleHQ7XHJcbiAgICAgICAgdmFyIHNlY3Rpb25JZHMgPSBlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtc2VjdGlvbklkc1wiKTtcclxuICAgICAgICBpZiAoc2VjdGlvbklkcykge1xyXG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25JZHMgPSBzZWN0aW9uSWRzLnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24gKGlkKSB7IHJldHVybiBwYXJzZUludChpZCwgMTApOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbG9yVGhlbWUgPSBlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtY29sb3JUaGVtZVwiKTtcclxuICAgICAgICBpZiAoY29sb3JUaGVtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yVGhlbWUgPSBKU09OLnBhcnNlKGNvbG9yVGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWFpdHJlcyA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1tYWl0cmVzXCIpO1xyXG4gICAgICAgIHRoaXMubWFpdHJlcyA9ICEhbWFpdHJlcyAmJiBtYWl0cmVzID09PSBcInRydWVcIjtcclxuICAgICAgICB2YXIgYXV0b0xvYWRpbmcgPSBlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtYXV0b0xvYWRpbmdcIik7XHJcbiAgICAgICAgaWYgKGF1dG9Mb2FkaW5nKVxyXG4gICAgICAgICAgICB0aGlzLmF1dG9Mb2FkaW5nID0gYXV0b0xvYWRpbmcgPT09IFwidHJ1ZVwiO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGUoKTtcclxuICAgIH1cclxuICAgIEJvb2tpbmdXaWRnZXRBdHRyaWJ1dGVzLnByb3RvdHlwZS51cHBlckNhc2VJQ1VMb2NhbGUgPSBmdW5jdGlvbiAoaWN1bG9jYWxlKSB7XHJcbiAgICAgICAgdmFyIHBhcnRzID0gaWN1bG9jYWxlLnNwbGl0KFwiLVwiKTtcclxuICAgICAgICBpZiAocGFydHMubGVuZ3RoIDwgMilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBJQ1UgTG9jYWxlOiBcIiArIGljdWxvY2FsZSk7XHJcbiAgICAgICAgdmFyIGljdUxvY2FsZSA9IHBhcnRzWzBdICsgXCItXCIgKyBwYXJ0c1sxXS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnN1cHBvcnRlZExhbmdzLmluZGV4T2YoaWN1TG9jYWxlKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpY3VMb2NhbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQm9va2luZ1dpZGdldEF0dHJpYnV0ZXMucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlcnJvcnMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy51bml0SWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBlcnJvcnMucHVzaChcIk5vIHVuaXRJZCBwcm92aWRlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3lzdGVtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZXJyb3JzLnB1c2goXCJObyBzeXN0ZW0gcHJvdmlkZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLmpvaW4oXCJcXG5cIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQm9va2luZ1dpZGdldEF0dHJpYnV0ZXM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQm9va2luZ1dpZGdldEF0dHJpYnV0ZXMgPSBCb29raW5nV2lkZ2V0QXR0cmlidXRlcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Cb29raW5nV2lkZ2V0Qm9vdHN0cmFwID0gdm9pZCAwO1xyXG52YXIgQm9va2luZ1dpZGdldF8xID0gcmVxdWlyZShcIi4vQm9va2luZ1dpZGdldFwiKTtcclxudmFyIEJvb2tpbmdXaWRnZXRCb290c3RyYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCb29raW5nV2lkZ2V0Qm9vdHN0cmFwKHNkaykge1xyXG4gICAgICAgIHRoaXMuc2RrID0gc2RrO1xyXG4gICAgfVxyXG4gICAgQm9va2luZ1dpZGdldEJvb3RzdHJhcC5JTlNUQU5DRSA9IGZ1bmN0aW9uIChzZGspIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZSB8fCAodGhpcy5pbnN0YW5jZSA9IG5ldyB0aGlzKHNkaykpO1xyXG4gICAgfTtcclxuICAgIEJvb2tpbmdXaWRnZXRCb290c3RyYXAucHJvdG90eXBlLmRldGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWwgPSB0aGlzLnNkay53aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXNwZWNvLWJvb2tpbmcsLmNhc3BlY28tYm9va2luZy13aWRnZXRcIik7XHJcbiAgICAgICAgcmV0dXJuIGVsLmxlbmd0aCA+IDA7XHJcbiAgICB9O1xyXG4gICAgLy8gdGhlIHNkayBpcyBkaXN0cmlidXRlZCB3aXRoIHRoZSBCb29raW5nV2lkZ2V0IHBlciBkZWZhdWx0IGF0IHRoZSBtb21lbnRcclxuICAgIC8vIHRzbGludDpkaXNhYmxlOm5vLXJlc2VydmVkLWtleXdvcmRzXHJcbiAgICBCb29raW5nV2lkZ2V0Qm9vdHN0cmFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIEJvb2tpbmdXaWRnZXRfMS5Cb29raW5nV2lkZ2V0LklOU1RBTkNFO1xyXG4gICAgfTtcclxuICAgIEJvb2tpbmdXaWRnZXRCb290c3RyYXAucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQm9va2luZ1dpZGdldEJvb3RzdHJhcC0+bG9hZCBpcyBub3QgaW1wbGVtZW50ZWRcIik7XHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyAgIHRyeSB7XHJcbiAgICAgICAgLy8gICAgIHJlc29sdmUobmV3IEJvb2tpbmdXaWRnZXQoKSk7XHJcbiAgICAgICAgLy8gICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgIC8vICAgICByZWplY3QoZXgpO1xyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCb29raW5nV2lkZ2V0Qm9vdHN0cmFwO1xyXG59KCkpO1xyXG5leHBvcnRzLkJvb2tpbmdXaWRnZXRCb290c3RyYXAgPSBCb29raW5nV2lkZ2V0Qm9vdHN0cmFwO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qIVxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgQ2FzcGVjbyBBQi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogWW91IGFyZSBoZXJlYnkgZ3JhbnRlZCBhIG5vbi1leGNsdXNpdmUsIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlIGxpY2Vuc2UgdG8gdXNlLFxyXG4gKiBjb3B5LCBtb2RpZnksIGFuZCBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgaW4gc291cmNlIGNvZGUgb3IgYmluYXJ5IGZvcm0gZm9yIHVzZVxyXG4gKiBpbiBjb25uZWN0aW9uIHdpdGggdGhlIHdlYiBzZXJ2aWNlcyBhbmQgQVBJcyBwcm92aWRlZCBieSBDYXNwZWNvLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTXHJcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxyXG4gKiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcclxuICogSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cclxuICogQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5TREsgPSB2b2lkIDA7XHJcbnZhciBCb29raW5nV2lkZ2V0Qm9vdHN0cmFwXzEgPSByZXF1aXJlKFwiLi9ib29raW5nL0Jvb2tpbmdXaWRnZXRCb290c3RyYXBcIik7XHJcbnZhciB2ZXJzaW9uID0gXCIxLjQuMFwiO1xyXG4vKiB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlICovXHJcbi8qIHRzbGludDpkaXNhYmxlOmV4cG9ydC1uYW1lICovXHJcbnZhciBTREsgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTREsodywgbmFtZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gW107XHJcbiAgICAgICAgdGhpcy5tb2R1bGVCb290c3RyYXBzID0gW107XHJcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IHt9O1xyXG4gICAgICAgIHRoaXMub25NZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJlc2V0SGVpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVzZXRIZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzY3JvbGwydG9wXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2Nyb2xsMlRvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5ldmVudExpc3RlbmVyc1tldmVudF0pIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnRdID0gW2hhbmRsZXJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBfdGhpcy5pbml0KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmZvcmNlSW5pdCA9IGZ1bmN0aW9uIChmb3JjZUluaXRJbmZvKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgX3RoaXMuaW5pdChmb3JjZUluaXRJbmZvKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0VmVyc2lvbiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZlcnNpb247IH07XHJcbiAgICAgICAgdGhpcy5zY3JvbGwyVG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXNwZWNvLWJvb2tpbmdcIikuaXRlbSgwKTtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXIpXHJcbiAgICAgICAgICAgICAgICBfdGhpcy53aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBzY3JvbGxUb3AsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZXNldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhc3BlY28tYm9va2luZ1wiKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWZyYW1lID0gaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlmcmFtZVwiKS5pdGVtKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZnJhbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLndpbmRvdyA9IHc7XHJcbiAgICAgICAgdGhpcy53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5vbk1lc3NhZ2UsIGZhbHNlKTtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cclxuICAgICAgICBpZiAod1tuYW1lXSA9PT0gdW5kZWZpbmVkIHx8ICh3W25hbWVdICE9PSB1bmRlZmluZWQgJiYgd1tuYW1lXS5yZUluaXQgPT09IHVuZGVmaW5lZCkpIHtcclxuICAgICAgICAgICAgaWYgKHdbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0RnVuYyA9IHdbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRGdW5jLmFkZEV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEV2ZW50TGlzdGVuZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRGdW5jLnJlSW5pdCA9IHRoaXMucmVJbml0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0RnVuYy5mb3JjZUluaXQgPSB0aGlzLmZvcmNlSW5pdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEZ1bmMuZ2V0VmVyc2lvbiA9IHRoaXMuZ2V0VmVyc2lvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEZ1bmMuc2Nyb2xsMlRvcCA9IHRoaXMuc2Nyb2xsMlRvcDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEZ1bmMucmVzZXRIZWlnaHQgPSB0aGlzLnJlc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdmFyIHEgPSB0aGlzLmluaXRGdW5jLnE7XHJcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuaW5pdEZ1bmMudDtcclxuICAgICAgICAgICAgICAgIHdbbmFtZV0gPSB0aGlzLmluaXRGdW5jO1xyXG4gICAgICAgICAgICAgICAgaWYgKHEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGV4ZWN1dGUgY2FsbGJhY2tzLCB0aGlzIHNob3VsZCBtYXliZSBiZSBkb25lIGFzIGEgY2FsbGJhY2sgdG8gaW5pdCgpP1xyXG4gICAgICAgICAgICAgICAgICAgIHEuZm9yRWFjaChmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGVuID0gYy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNbaV0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd1tuYW1lXSA9IHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAod1tuYW1lXS5yZUluaXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2luZG93ID0gdztcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAvLyB0aGlzLmluaXRNb2R1bGVzKCk7XHJcbiAgICB9XHJcbiAgICBTREsucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAoc2RrRXZlbnQsIGV2ZW50LCBwYXlsb2FkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnNbc2RrRXZlbnRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNbc2RrRXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIGhhbmRsZXIoZXZlbnQsIHBheWxvYWQpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU0RLLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKGZvcmNlSW5pdCkge1xyXG4gICAgICAgIHZhciBib29raW5nV2lkZ2V0Qm9vdHN0cmFwID0gQm9va2luZ1dpZGdldEJvb3RzdHJhcF8xLkJvb2tpbmdXaWRnZXRCb290c3RyYXAuSU5TVEFOQ0UodGhpcyk7XHJcbiAgICAgICAgaWYgKGJvb2tpbmdXaWRnZXRCb290c3RyYXAuZGV0ZWN0KCkpIHtcclxuICAgICAgICAgICAgdmFyIGJvb2tpbmdXaWRnZXQgPSBib29raW5nV2lkZ2V0Qm9vdHN0cmFwLmdldCgpO1xyXG4gICAgICAgICAgICBib29raW5nV2lkZ2V0LmluaXQodGhpcywgZm9yY2VJbml0KTtcclxuICAgICAgICAgICAgdGhpcy5tb2R1bGVzLnB1c2goYm9va2luZ1dpZGdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNESy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5kZXN0cm95KCk7IH0pO1xyXG4gICAgICAgIHRoaXMubW9kdWxlcyA9IFtdO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTREs7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU0RLID0gU0RLO1xyXG50cnkge1xyXG4gICAgLyogdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLWV4cHJlc3Npb24gKi9cclxuICAgIG5ldyBTREsod2luZG93LCB3aW5kb3cuQ2FzcGVjb1NES09iamVjdCB8fCBcImNhXCIpO1xyXG59XHJcbmNhdGNoIChleCkge1xyXG4gICAgY29uc29sZS5sb2coZXgpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==