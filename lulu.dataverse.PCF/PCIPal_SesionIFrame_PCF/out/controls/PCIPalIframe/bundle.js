var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./PCIPalIframe/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./PCIPalIframe/index.ts":
/*!*******************************!*\
  !*** ./PCIPalIframe/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\nvar __generator = this && this.__generator || function (thisArg, body) {\n  var _ = {\n    label: 0,\n    sent: function sent() {\n      if (t[0] & 1) throw t[1];\n      return t[1];\n    },\n    trys: [],\n    ops: []\n  },\n      f,\n      y,\n      t,\n      g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n\n    while (_) try {\n      if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n      if (y = 0, t) op = [op[0] & 2, t.value];\n\n      switch (op[0]) {\n        case 0:\n        case 1:\n          t = op;\n          break;\n\n        case 4:\n          _.label++;\n          return {\n            value: op[1],\n            done: false\n          };\n\n        case 5:\n          _.label++;\n          y = op[1];\n          op = [0];\n          continue;\n\n        case 7:\n          op = _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n\n        default:\n          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n            _ = 0;\n            continue;\n          }\n\n          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n            _.label = op[1];\n            break;\n          }\n\n          if (op[0] === 6 && _.label < t[1]) {\n            _.label = t[1];\n            t = op;\n            break;\n          }\n\n          if (t && _.label < t[2]) {\n            _.label = t[2];\n\n            _.ops.push(op);\n\n            break;\n          }\n\n          if (t[2]) _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n      }\n\n      op = body.call(thisArg, _);\n    } catch (e) {\n      op = [6, e];\n      y = 0;\n    } finally {\n      f = t = 0;\n    }\n\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PCIPalIframe = void 0; //const PCIPal_SessionViewURL = \"https://<Region>.<Environment>/session/<TenantID>/view/<SessionId>/framed\";\n\nvar PCIPal_Environment_EVConstValName = \"lulu_PCIPal_Environment\";\nvar PCIPal_Region_EVConstValName = \"lulu_PCIPal_Region\";\nvar PCIPal_TenantID_EVConstValName = \"lulu_PCIPal_TenantID\";\nvar PCIPal_form_html_element_ID = \"PCIPal_PCF_form\";\nvar PCIPal_iframe_element_ID = \"PCIPal_PCF_Iframe\";\nvar Alert_DivContainer_Notification_Element_ID = \"ADNEID\";\nvar Alert_Label_Notification_Element_ID = \"ALNEID\";\nvar Alert_Icon_Notification_Element_ID = \"AINEID\";\nvar Error_Label_ID = \"Error_PCIPal_Label_Element\";\n\nvar PCIPalIframe =\n/** @class */\nfunction () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function PCIPalIframe() {\n    this._clientInstanceURL = null;\n    this._incidentID = null;\n    this._PCIPal_Environment_Val = null;\n    this._PCIPal_Region_Val = null;\n    this._PCIPal_TenantID_Val = null; //// Persisted values\n    // Data type used to store the various information as part of the state object.\n\n    this._stateDictionary = {};\n  }\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n\n\n  PCIPalIframe.prototype.init = function (context, notifyOutputChanged, state, container) {\n    //debugger;\n    this._controlViewRendered = false;\n    this._container = document.createElement(\"div\");\n    this._context = context;\n\n    this._container.classList.add(\"PCIPalControl_Container\");\n\n    container.appendChild(this._container); /////// get environment variables \n\n    this.GetandSetEnvironmentVariableValue(PCIPal_Environment_EVConstValName);\n    this.GetandSetEnvironmentVariableValue(PCIPal_Region_EVConstValName);\n    this.GetandSetEnvironmentVariableValue(PCIPal_TenantID_EVConstValName);\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n\n\n  PCIPalIframe.prototype.updateView = function (context) {\n    //debugger;\n    this.renderAlertElements();\n\n    if (!this._controlViewRendered) {\n      this._controlsDiv = this.renderDivControlsElement(\"Div_controls\");\n      this._buttonOps1 = this.renderButtonElement(\"Launch PCIPal\", \"digitalorder\");\n\n      this._controlsDiv.appendChild(this._buttonOps1);\n\n      this._container.appendChild(this._controlsDiv);\n\n      this._sessionIFrameDiv = this.renderDivControlsElement(\"Iframe_Div_Control\");\n\n      this._container.appendChild(this._sessionIFrameDiv);\n\n      this._controlViewRendered = true;\n    }\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n\n\n  PCIPalIframe.prototype.getOutputs = function () {\n    return {};\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  PCIPalIframe.prototype.destroy = function () {// Add code to cleanup control if necessary\n  }; //// Helpers ...............................................................................................................................\n\n\n  PCIPalIframe.prototype.renderAlertElements = function () {\n    this._alertNotificationIcon = document.createElement(\"img\");\n\n    this._alertNotificationIcon.setAttribute(\"id\", Alert_Icon_Notification_Element_ID);\n\n    this._alertNotificationIcon.setAttribute(\"src\", \"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\");\n\n    this._alertNotificationIcon.border = \"none\";\n    this._alertNotificationIcon.style.display = \"block\";\n    this._alertNotificationIcon.style.lineHeight = \"0\";\n\n    this._alertNotificationIcon.classList.add(\"Alert_icon\");\n\n    this._alertLabelElement = document.createElement(\"label\");\n\n    this._alertLabelElement.setAttribute(\"id\", Alert_Label_Notification_Element_ID);\n\n    this._alertDivContatiner = document.createElement(\"div\");\n\n    this._alertDivContatiner.classList.add(\"Alert_Div_Container\");\n\n    this._alertDivContatiner.setAttribute(\"id\", Alert_DivContainer_Notification_Element_ID);\n\n    this._alertDivContatiner.appendChild(this._alertNotificationIcon);\n\n    this._alertDivContatiner.appendChild(this._alertLabelElement);\n\n    this._container.appendChild(this._alertDivContatiner);\n  };\n\n  PCIPalIframe.displayAlertNotification = function (Ops, timmerAlert, msgAlert) {\n    var alertDivContainerElement = document.getElementById(Alert_DivContainer_Notification_Element_ID);\n    var alerIconElement = document.getElementById(Alert_Icon_Notification_Element_ID);\n    var alertLabelElement = document.getElementById(Alert_Label_Notification_Element_ID);\n\n    if (typeof alertLabelElement != 'undefined' && alertLabelElement != null) {\n      alertLabelElement.innerHTML = msgAlert;\n    }\n\n    switch (Ops) {\n      case \"Info\":\n        alertDivContainerElement === null || alertDivContainerElement === void 0 ? void 0 : alertDivContainerElement.classList.add(\"displayInfo\");\n        alerIconElement === null || alerIconElement === void 0 ? void 0 : alerIconElement.classList.add(\"InfoIcon\");\n        alertLabelElement === null || alertLabelElement === void 0 ? void 0 : alertLabelElement.classList.add(\"InfoLabel\");\n        setTimeout(function () {\n          alertDivContainerElement === null || alertDivContainerElement === void 0 ? void 0 : alertDivContainerElement.classList.remove(\"displayInfo\");\n          alerIconElement === null || alerIconElement === void 0 ? void 0 : alerIconElement.classList.remove(\"InfoIcon\");\n          alertLabelElement === null || alertLabelElement === void 0 ? void 0 : alertLabelElement.classList.remove(\"InfoLabel\");\n        }, timmerAlert);\n        break;\n\n      case \"Warning\":\n        alertDivContainerElement === null || alertDivContainerElement === void 0 ? void 0 : alertDivContainerElement.classList.add(\"displayWarning\");\n        alerIconElement === null || alerIconElement === void 0 ? void 0 : alerIconElement.classList.add(\"WarningIcon\");\n        alertLabelElement === null || alertLabelElement === void 0 ? void 0 : alertLabelElement.classList.add(\"WarningLabel\");\n        setTimeout(function () {\n          alertDivContainerElement === null || alertDivContainerElement === void 0 ? void 0 : alertDivContainerElement.classList.remove(\"displayWarning\");\n          alerIconElement === null || alerIconElement === void 0 ? void 0 : alerIconElement.classList.remove(\"WarningIcon\");\n          alertLabelElement === null || alertLabelElement === void 0 ? void 0 : alertLabelElement.classList.remove(\"WarningLabel\");\n        }, timmerAlert);\n        break;\n\n      case \"Success\":\n        alertDivContainerElement === null || alertDivContainerElement === void 0 ? void 0 : alertDivContainerElement.classList.add(\"displaySuccess\");\n        alerIconElement === null || alerIconElement === void 0 ? void 0 : alerIconElement.classList.add(\"SuccessIcon\");\n        alertLabelElement === null || alertLabelElement === void 0 ? void 0 : alertLabelElement.classList.add(\"SuccesLabel\");\n        setTimeout(function () {\n          alertDivContainerElement === null || alertDivContainerElement === void 0 ? void 0 : alertDivContainerElement.classList.remove(\"displaySuccess\");\n          alerIconElement === null || alerIconElement === void 0 ? void 0 : alerIconElement.classList.remove(\"SuccessIcon\");\n          alertLabelElement === null || alertLabelElement === void 0 ? void 0 : alertLabelElement.classList.remove(\"SuccesLabel\");\n        }, timmerAlert);\n        break;\n\n      case \"ProcessingServer\":\n        alertDivContainerElement === null || alertDivContainerElement === void 0 ? void 0 : alertDivContainerElement.classList.add(\"displaySuccess\");\n        alerIconElement === null || alerIconElement === void 0 ? void 0 : alerIconElement.classList.add(\"ProcessingServerIcon\");\n        alertLabelElement === null || alertLabelElement === void 0 ? void 0 : alertLabelElement.classList.add(\"SuccesLabel\");\n        setTimeout(function () {\n          alertDivContainerElement === null || alertDivContainerElement === void 0 ? void 0 : alertDivContainerElement.classList.remove(\"displaySuccess\");\n          alerIconElement === null || alerIconElement === void 0 ? void 0 : alerIconElement.classList.remove(\"ProcessingServerIcon\");\n          alertLabelElement === null || alertLabelElement === void 0 ? void 0 : alertLabelElement.classList.remove(\"SuccesLabel\");\n        }, timmerAlert);\n        break;\n\n      case \"Error\":\n        alertDivContainerElement === null || alertDivContainerElement === void 0 ? void 0 : alertDivContainerElement.classList.add(\"displayError\");\n        alerIconElement === null || alerIconElement === void 0 ? void 0 : alerIconElement.classList.add(\"ErrorIcon\");\n        alertLabelElement === null || alertLabelElement === void 0 ? void 0 : alertLabelElement.classList.add(\"ErrorLabel\");\n        setTimeout(function () {\n          alertDivContainerElement === null || alertDivContainerElement === void 0 ? void 0 : alertDivContainerElement.classList.remove(\"displayError\");\n          alerIconElement === null || alerIconElement === void 0 ? void 0 : alerIconElement.classList.remove(\"ErrorIcon\");\n          alertLabelElement === null || alertLabelElement === void 0 ? void 0 : alertLabelElement.classList.remove(\"ErrorLabel\");\n        }, timmerAlert);\n        break;\n    }\n  };\n\n  PCIPalIframe.prototype.renderDivControlsElement = function (divClass) {\n    var div = document.createElement(\"div\");\n    div.classList.add(divClass);\n    return div;\n  };\n\n  PCIPalIframe.renderPCIPalIFrame = function (iframeClass) {\n    var iFrameElement = document.createElement(\"iframe\");\n    iFrameElement.setAttribute(\"class\", \"paymentFlowIframe\");\n    iFrameElement.setAttribute(\"id\", iframeClass);\n    iFrameElement.setAttribute(\"name\", iframeClass);\n    iFrameElement.setAttribute(\"frameborder\", \"0\");\n    return iFrameElement;\n  };\n\n  PCIPalIframe.prototype.renderButtonElement = function (label, ops) {\n    var _this = this;\n\n    var button = document.createElement(\"button\");\n    button.innerHTML = label;\n    button.setAttribute(\"value\", label);\n    button.setAttribute(\"operation\", ops);\n    button.classList.add(\"ControlOps_ButtonClass\");\n    button.addEventListener(\"click\", function (event) {\n      return _this.onButtonClick(event, _this._sessionIFrameDiv);\n    });\n    return button;\n  };\n\n  PCIPalIframe.prototype.onButtonClick = function (event, selectedElement) {\n    var _a, _b, _c, _d;\n\n    var eventTarget = event.target;\n\n    if (eventTarget) {\n      // Get the label and the selected attributes from the button element that was clicked\n      var opsLabel = (_b = (_a = eventTarget.attributes.getNamedItem(\"value\")) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : \"\";\n      var opsType = (_d = (_c = eventTarget === null || eventTarget === void 0 ? void 0 : eventTarget.attributes.getNamedItem(\"operation\")) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : \"\";\n      this.tryGetClientURLfromXRMContext();\n      this.tryGetIncidentIDfromXRMContext();\n\n      if (this._PCIPal_Environment_Val && this._PCIPal_Region_Val && this._PCIPal_TenantID_Val) {\n        this.triggerPCIPalResquestSesion(this._sessionIFrameDiv, opsType, this._PCIPal_Region_Val, this._PCIPal_Environment_Val);\n        PCIPalIframe.displayAlertNotification(\"ProcessingServer\", 7000, \"The request is being processed.\");\n      } else {\n        var errorMsj = this._context.resources.getString(\"Error_sc1\");\n\n        var evText = this._PCIPal_Environment_Val != null ? \"Defined\" : \"No defined\";\n        var reText = this._PCIPal_Region_Val != null ? \"Defined\" : \"No defined\";\n        var teText = this._PCIPal_TenantID_Val != null ? \"Defined\" : \"No defined\";\n        errorMsj = errorMsj.replace(\"<1>\", evText).replace(\"<2>\", reText).replace(\"<3>\", teText);\n        PCIPalIframe.displayAlertNotification(\"Error\", 9000, errorMsj);\n      }\n    }\n  };\n\n  PCIPalIframe.prototype.tryGetClientURLfromXRMContext = function () {\n    try {\n      this._clientInstanceURL = this._context.page.getClientUrl();\n    } catch (ex) {\n      this._clientInstanceURL = this._context.parameters.api_url_instance_name.raw;\n    }\n  };\n\n  PCIPalIframe.prototype.tryGetIncidentIDfromXRMContext = function () {\n    try {\n      this._incidentID = this._context.page.entityId;\n    } catch (ex) {\n      this._incidentID = this._context.parameters.api_url_instance_name.raw;\n    }\n  };\n\n  PCIPalIframe.prototype.GetandSetEnvironmentVariableValue = function (schemaName) {\n    return __awaiter(this, void 0, void 0, function () {\n      var results, variable;\n      return __generator(this, function (_a) {\n        switch (_a.label) {\n          case 0:\n            return [4\n            /*yield*/\n            , this._context.webAPI.retrieveMultipleRecords(\"environmentvariabledefinition\", \"?$filter=schemaname eq '\" + schemaName + \"'&$select=environmentvariabledefinitionid&$expand=environmentvariabledefinition_environmentvariablevalue($select=value)\")];\n\n          case 1:\n            results = _a.sent();\n\n            if (!results || !results.entities || results.entities.length < 1) {\n              return [2\n              /*return*/\n              , null];\n            }\n\n            variable = results.entities[0];\n\n            if (!variable.environmentvariabledefinition_environmentvariablevalue || variable.environmentvariabledefinition_environmentvariablevalue.length < 1) {\n              return [2\n              /*return*/\n              , null];\n            }\n\n            this.SetEnvironmentVariable(schemaName, variable.environmentvariabledefinition_environmentvariablevalue[0].value);\n            return [2\n            /*return*/\n            , variable.environmentvariabledefinition_environmentvariablevalue[0].value];\n        }\n      });\n    });\n  };\n\n  PCIPalIframe.prototype.SetEnvironmentVariable = function (schemaName, EV_val) {\n    switch (schemaName) {\n      case PCIPal_Environment_EVConstValName:\n        this._PCIPal_Environment_Val = EV_val;\n        break;\n\n      case PCIPal_Region_EVConstValName:\n        this._PCIPal_Region_Val = EV_val;\n        break;\n\n      case PCIPal_TenantID_EVConstValName:\n        this._PCIPal_TenantID_Val = EV_val;\n        break;\n\n      default:\n        break;\n    }\n  };\n\n  PCIPalIframe.prototype.triggerPCIPalResquestSesion = function (htmlElementRef, OpsType, regionVal, environmentVal) {\n    if (this._clientInstanceURL && this._incidentID) {\n      try {\n        //debugger;\n        var PCIPal_SessionViewURL_temp_1 = \"https://\" + this._PCIPal_Region_Val + \".\" + this._PCIPal_Environment_Val + \"/session/\" + this._PCIPal_TenantID_Val + \"/view/<SessionId>/framed\";\n        var pr = new InputActionPArams();\n        pr.IncidentID = this._incidentID;\n        pr.OperationType = OpsType;\n        var req_1 = new XMLHttpRequest();\n        req_1.open(\"POST\", this._clientInstanceURL + \"/api/data/v9.1/lulu_Action_PCIPalGenerate\", true);\n        req_1.setRequestHeader(\"OData-MaxVersion\", \"4.0\");\n        req_1.setRequestHeader(\"OData-Version\", \"4.0\");\n        req_1.setRequestHeader(\"Accept\", \"application/json\");\n        req_1.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\"); //req.setRequestHeader(\"MSCRMCallerID\", \"ED1E6F9B-B3B8-EB11-8236-000D3A595DD5\");\n\n        req_1.onreadystatechange = function () {\n          if (this.readyState === 4) {\n            req_1.onreadystatechange = null;\n\n            if (this.status === 200) {\n              var results = JSON.parse(this.response);\n              var accessTokenResult = results.AccessToken;\n              var refreshTokenResult = results.RefreshToken;\n              var sessionID = results.SessionID;\n              var PCIPal_sessionViewURL = PCIPal_SessionViewURL_temp_1.replace(\"<SessionId>\", sessionID !== null && sessionID !== void 0 ? sessionID : \"X\");\n              var form = document.createElement('form');\n              form.setAttribute('action', PCIPal_sessionViewURL);\n              form.setAttribute('id', PCIPal_form_html_element_ID);\n              form.setAttribute('method', 'post');\n              form.setAttribute('target', PCIPal_iframe_element_ID);\n              var xBearerToken = document.createElement('input');\n              xBearerToken.setAttribute('type', 'hidden');\n              xBearerToken.setAttribute('name', 'X-BEARER-TOKEN');\n              xBearerToken.setAttribute('value', accessTokenResult !== null && accessTokenResult !== void 0 ? accessTokenResult : \"X\");\n              var xRefreshToken = document.createElement('input');\n              xRefreshToken.setAttribute('type', 'hidden');\n              xRefreshToken.setAttribute('name', 'X-REFRESH-TOKEN');\n              xRefreshToken.setAttribute('value', refreshTokenResult !== null && refreshTokenResult !== void 0 ? refreshTokenResult : \"X\");\n              form.appendChild(xBearerToken);\n              form.appendChild(xRefreshToken);\n              var formElement = document.getElementById(PCIPal_form_html_element_ID);\n\n              if (typeof formElement != 'undefined' && formElement != null) {\n                htmlElementRef.removeChild(formElement);\n                htmlElementRef.appendChild(form);\n              } else {\n                htmlElementRef.appendChild(form);\n              }\n\n              var iframeForSession = PCIPalIframe.renderPCIPalIFrame(PCIPal_iframe_element_ID);\n              var iframeElement = document.getElementById(PCIPal_iframe_element_ID);\n\n              if (typeof iframeElement != 'undefined' && iframeElement != null) {\n                htmlElementRef.removeChild(iframeElement);\n                htmlElementRef.appendChild(iframeForSession);\n              } else {\n                htmlElementRef.appendChild(iframeForSession);\n              }\n\n              form.submit();\n              PCIPalIframe.connectWebSocket(regionVal + \".\" + environmentVal, accessTokenResult, sessionID);\n            } else {\n              var errorMsjlog = req_1.responseText.replace(new RegExp('\\r?\\n', 'g'), '<br />');\n              PCIPalIframe.displayAlertNotification(\"Error\", 9000, \"Error: The XMLHttpRequest was not fulfilled, status resume: \" + req_1.status + \":\" + req_1.statusText + \" - \" + errorMsjlog);\n            }\n          }\n        };\n\n        req_1.send(JSON.stringify(pr));\n      } catch (error) {\n        var errorMsj = this._context.resources.getString(\"Error_sc3\");\n\n        errorMsj = errorMsj + error.message;\n        PCIPalIframe.displayAlertNotification(\"Error\", 9000, errorMsj);\n      }\n    } else {\n      var errorMsj = this._context.resources.getString(\"Error_sc2\");\n\n      var instanceUrl = this._clientInstanceURL != null ? \"Defined\" : \"No defined\";\n      var incidentID = this._incidentID != null ? \"Defined\" : \"No defined\";\n      errorMsj = errorMsj.replace(\"<1>\", instanceUrl).replace(\"<2>\", incidentID);\n      PCIPalIframe.displayAlertNotification(\"Error\", 9000, errorMsj);\n    }\n  };\n\n  PCIPalIframe.connectWebSocket = function (enviroment, bearerToken, sessionId) {\n    var ws = new WebSocket('wss://' + enviroment + '/socket');\n\n    ws.onopen = function (event) {\n      var socket = ws;\n\n      if (bearerToken && sessionId) {\n        socket.send(JSON.stringify({\n          type: \"auth\",\n          bearer: bearerToken\n        }));\n        socket.send(JSON.stringify({\n          type: 'websession',\n          register: sessionId,\n          fullStatus: true\n        })); // Send a message to the web stocket at a determined interval to keep it alive.\n\n        setInterval(function preventInitialInactivityTimeoutOnSocket() {\n          socket.send('{}');\n        }, 58000);\n      } else {\n        console.log('Authentication information not provided.');\n        socket.close();\n      }\n    };\n\n    ws.onmessage = function (event) {\n      console.log('Message Received from WebSocket:');\n      console.log(event.data);\n    };\n\n    ws.onerror = function (event) {\n      console.log(JSON.stringify(event.data));\n    };\n\n    ws.onclose = function (event) {\n      console.log(JSON.stringify(event.data));\n    };\n  };\n\n  return PCIPalIframe;\n}();\n\nexports.PCIPalIframe = PCIPalIframe;\n\nvar InputActionPArams =\n/** @class */\nfunction () {\n  function InputActionPArams() {}\n\n  return InputActionPArams;\n}();\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./PCIPalIframe/index.ts?");

/***/ })

/******/ });
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('lulu.PCIPalIframe.PCIPalIframe', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.PCIPalIframe);
} else {
	var lulu = lulu || {};
	lulu.PCIPalIframe = lulu.PCIPalIframe || {};
	lulu.PCIPalIframe.PCIPalIframe = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.PCIPalIframe;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}