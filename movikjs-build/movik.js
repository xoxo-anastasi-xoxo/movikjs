var MovikJS =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./movikjs/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./movikjs/index.ts":
/*!**************************!*\
  !*** ./movikjs/index.ts ***!
  \**************************/
/*! exports provided: BaseboneConstraintType3D, BaseboneConstraintType2D, JointType, BoneConnectionPoint, ConstraintCoordinateSystem, FabrikJoint2D, FabrikJoint3D, FabrikBone2D, FabrikBone3D, FabrikChain2D, FabrikChain3D, FabrikStructure2D, FabrikStructure3D, Vec3f, Mat3f, Mat4f, Vec2f, Utils, Colour4f, Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/BaseboneConstraintType3D */ "./movikjs/main/BaseboneConstraintType3D.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseboneConstraintType3D", function() { return _main_BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_0__["BaseboneConstraintType3D"]; });

/* harmony import */ var _main_BaseboneConstraintType2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/BaseboneConstraintType2D */ "./movikjs/main/BaseboneConstraintType2D.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseboneConstraintType2D", function() { return _main_BaseboneConstraintType2D__WEBPACK_IMPORTED_MODULE_1__["BaseboneConstraintType2D"]; });

/* harmony import */ var _main_JointType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/JointType */ "./movikjs/main/JointType.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JointType", function() { return _main_JointType__WEBPACK_IMPORTED_MODULE_2__["JointType"]; });

/* harmony import */ var _main_BoneConnectionPoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/BoneConnectionPoint */ "./movikjs/main/BoneConnectionPoint.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoneConnectionPoint", function() { return _main_BoneConnectionPoint__WEBPACK_IMPORTED_MODULE_3__["BoneConnectionPoint"]; });

/* harmony import */ var _main_ConstraintCoordinateSystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/ConstraintCoordinateSystem */ "./movikjs/main/ConstraintCoordinateSystem.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConstraintCoordinateSystem", function() { return _main_ConstraintCoordinateSystem__WEBPACK_IMPORTED_MODULE_4__["ConstraintCoordinateSystem"]; });

/* harmony import */ var _main_FabrikJoint2D__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/FabrikJoint2D */ "./movikjs/main/FabrikJoint2D.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabrikJoint2D", function() { return _main_FabrikJoint2D__WEBPACK_IMPORTED_MODULE_5__["FabrikJoint2D"]; });

/* harmony import */ var _main_FabrikJoint3D__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/FabrikJoint3D */ "./movikjs/main/FabrikJoint3D.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabrikJoint3D", function() { return _main_FabrikJoint3D__WEBPACK_IMPORTED_MODULE_6__["FabrikJoint3D"]; });

/* harmony import */ var _main_FabrikBone2D__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/FabrikBone2D */ "./movikjs/main/FabrikBone2D.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabrikBone2D", function() { return _main_FabrikBone2D__WEBPACK_IMPORTED_MODULE_7__["FabrikBone2D"]; });

/* harmony import */ var _main_FabrikBone3D__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/FabrikBone3D */ "./movikjs/main/FabrikBone3D.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabrikBone3D", function() { return _main_FabrikBone3D__WEBPACK_IMPORTED_MODULE_8__["FabrikBone3D"]; });

/* harmony import */ var _main_FabrikChain2D__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/FabrikChain2D */ "./movikjs/main/FabrikChain2D.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabrikChain2D", function() { return _main_FabrikChain2D__WEBPACK_IMPORTED_MODULE_9__["FabrikChain2D"]; });

/* harmony import */ var _main_FabrikChain3D__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/FabrikChain3D */ "./movikjs/main/FabrikChain3D.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabrikChain3D", function() { return _main_FabrikChain3D__WEBPACK_IMPORTED_MODULE_10__["FabrikChain3D"]; });

/* harmony import */ var _main_FabrikStructure2D__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/FabrikStructure2D */ "./movikjs/main/FabrikStructure2D.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabrikStructure2D", function() { return _main_FabrikStructure2D__WEBPACK_IMPORTED_MODULE_11__["FabrikStructure2D"]; });

/* harmony import */ var _main_FabrikStructure3D__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/FabrikStructure3D */ "./movikjs/main/FabrikStructure3D.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabrikStructure3D", function() { return _main_FabrikStructure3D__WEBPACK_IMPORTED_MODULE_12__["FabrikStructure3D"]; });

/* harmony import */ var _utils_Vec3f__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/Vec3f */ "./movikjs/utils/Vec3f.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec3f", function() { return _utils_Vec3f__WEBPACK_IMPORTED_MODULE_13__["Vec3f"]; });

/* harmony import */ var _utils_Mat3f__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/Mat3f */ "./movikjs/utils/Mat3f.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mat3f", function() { return _utils_Mat3f__WEBPACK_IMPORTED_MODULE_14__["Mat3f"]; });

/* harmony import */ var _utils_Mat4f__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/Mat4f */ "./movikjs/utils/Mat4f.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mat4f", function() { return _utils_Mat4f__WEBPACK_IMPORTED_MODULE_15__["Mat4f"]; });

/* harmony import */ var _utils_Vec2f__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/Vec2f */ "./movikjs/utils/Vec2f.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec2f", function() { return _utils_Vec2f__WEBPACK_IMPORTED_MODULE_16__["Vec2f"]; });

/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/Utils */ "./movikjs/utils/Utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _utils_Utils__WEBPACK_IMPORTED_MODULE_17__["Utils"]; });

/* harmony import */ var _utils_Colour4f__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/Colour4f */ "./movikjs/utils/Colour4f.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Colour4f", function() { return _utils_Colour4f__WEBPACK_IMPORTED_MODULE_18__["Colour4f"]; });

/* harmony import */ var _visualisation_Scene__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./visualisation/Scene */ "./movikjs/visualisation/Scene.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _visualisation_Scene__WEBPACK_IMPORTED_MODULE_19__["Scene"]; });























/***/ }),

/***/ "./movikjs/main/BaseboneConstraintType2D.ts":
/*!**************************************************!*\
  !*** ./movikjs/main/BaseboneConstraintType2D.ts ***!
  \**************************************************/
/*! exports provided: BaseboneConstraintType2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseboneConstraintType2D", function() { return BaseboneConstraintType2D; });
/**
 * Типы ограничений первой кости в цепи.
 *
 * Имеет следующие значения:
 * <ul>
 * <li>NONE - Без ограничений.</li>
 * <li>GLOBAL_ABSOLUTE - Ограничена относительно мировых координат.</li>
 * <li>LOCAL_RELATIVE - Ограничена относительно прикреплённой к ней кости.</li>
 * <li>LOCAL_ABSOLUTE - Ограничена относительно прикреплённой к ней кости.</li>
 * </ul>
 */
var BaseboneConstraintType2D;
(function (BaseboneConstraintType2D) {
    BaseboneConstraintType2D[BaseboneConstraintType2D["NONE"] = 0] = "NONE";
    BaseboneConstraintType2D[BaseboneConstraintType2D["GLOBAL_ABSOLUTE"] = 1] = "GLOBAL_ABSOLUTE";
    BaseboneConstraintType2D[BaseboneConstraintType2D["LOCAL_RELATIVE"] = 2] = "LOCAL_RELATIVE";
    BaseboneConstraintType2D[BaseboneConstraintType2D["LOCAL_ABSOLUTE"] = 3] = "LOCAL_ABSOLUTE";
})(BaseboneConstraintType2D || (BaseboneConstraintType2D = {}));


/***/ }),

/***/ "./movikjs/main/BaseboneConstraintType3D.ts":
/*!**************************************************!*\
  !*** ./movikjs/main/BaseboneConstraintType3D.ts ***!
  \**************************************************/
/*! exports provided: BaseboneConstraintType3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseboneConstraintType3D", function() { return BaseboneConstraintType3D; });
/**
 * Типы ограничений первой кости в цепи.
 *
 * Имеет следующие значения:
 * <ul>
 * <li>NONE - Без ограничений.</li>
 * <li>GLOBAL_ROTOR - Ограничена относительно мировых координат. Имеет шарообразные возможности вращения.</li>
 * <li>LOCAL_ROTOR - Ограничена относительно прикреплённой к ней кости. Имеет шарообразные возможности вращения.</li>
 * <li>GLOBAL_HINGE - Ограничена относительно мировых координат. Имеет шарнирные возможности вращения. </li>
 * <li>LOCAL_HINGE - Ограничена относительно прикреплённой к ней кости. Имеет шарнирные возможности вращения. </li>
 * </ul>
 */
var BaseboneConstraintType3D;
(function (BaseboneConstraintType3D) {
    BaseboneConstraintType3D[BaseboneConstraintType3D["NONE"] = 0] = "NONE";
    BaseboneConstraintType3D[BaseboneConstraintType3D["GLOBAL_ROTOR"] = 1] = "GLOBAL_ROTOR";
    BaseboneConstraintType3D[BaseboneConstraintType3D["LOCAL_ROTOR"] = 2] = "LOCAL_ROTOR";
    BaseboneConstraintType3D[BaseboneConstraintType3D["GLOBAL_HINGE"] = 3] = "GLOBAL_HINGE";
    BaseboneConstraintType3D[BaseboneConstraintType3D["LOCAL_HINGE"] = 4] = "LOCAL_HINGE";
})(BaseboneConstraintType3D || (BaseboneConstraintType3D = {}));


/***/ }),

/***/ "./movikjs/main/BoneConnectionPoint.ts":
/*!*********************************************!*\
  !*** ./movikjs/main/BoneConnectionPoint.ts ***!
  \*********************************************/
/*! exports provided: BoneConnectionPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoneConnectionPoint", function() { return BoneConnectionPoint; });
/**
 * Типы связи между FabrikBone.
 * В начале или конце кости хозяина располагается данная кость.
 */
var BoneConnectionPoint;
(function (BoneConnectionPoint) {
    BoneConnectionPoint[BoneConnectionPoint["START"] = 0] = "START";
    BoneConnectionPoint[BoneConnectionPoint["END"] = 1] = "END";
})(BoneConnectionPoint || (BoneConnectionPoint = {}));


/***/ }),

/***/ "./movikjs/main/ConstraintCoordinateSystem.ts":
/*!****************************************************!*\
  !*** ./movikjs/main/ConstraintCoordinateSystem.ts ***!
  \****************************************************/
/*! exports provided: ConstraintCoordinateSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstraintCoordinateSystem", function() { return ConstraintCoordinateSystem; });
/**
 * ConstraintCoordinateSystem	Система координат, относительно которой рассматривается ограничения.
 * <p>
 * LOCAL (default) - относительно предыдущей кости в цепи.
 * GLOBAL - относитьльно мировой системы координат.
 */
var ConstraintCoordinateSystem;
(function (ConstraintCoordinateSystem) {
    ConstraintCoordinateSystem[ConstraintCoordinateSystem["LOCAL"] = 0] = "LOCAL";
    ConstraintCoordinateSystem[ConstraintCoordinateSystem["GLOBAL"] = 1] = "GLOBAL";
})(ConstraintCoordinateSystem || (ConstraintCoordinateSystem = {}));


/***/ }),

/***/ "./movikjs/main/FabrikBone2D.ts":
/*!**************************************!*\
  !*** ./movikjs/main/FabrikBone2D.ts ***!
  \**************************************/
/*! exports provided: FabrikBone2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabrikBone2D", function() { return FabrikBone2D; });
/* harmony import */ var _utils_Vec2f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Vec2f */ "./movikjs/utils/Vec2f.ts");
/* harmony import */ var _FabrikJoint2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FabrikJoint2D */ "./movikjs/main/FabrikJoint2D.ts");
/* harmony import */ var _utils_Colour4f__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Colour4f */ "./movikjs/utils/Colour4f.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Utils */ "./movikjs/utils/Utils.ts");




/**
 * Кость.
 * <p>
 * FabrikBone2D состоит из начальной и конечной позиции и FabrikJoint2D, который ограничивает возможность поворота
 * относительно предыдущей кости в цепи или мировой системы координат.
 */
var FabrikBone2D = /** @class */ (function () {
    // ---------- Constructors ----------
    /**
     * Конструктор.
     * <p>
     * Принимает несколько возможных комбинаций параметров:
     * <p>
     * Конструктор без параметров. Все поля класса принимают значения по умолчанию.
     * <p>
     * Если третий параметр конструктора задан как null или undefiened, но при этом первые 2 параметра присутствуют,
     * то конструктор будет воспринимать первые 2 параметра как начальную и конечную позиции данной кости.
     * Параметры с четвертого по седьмой опциональны.
     *
     * @param	startLocation	            Начальная позиция кости в мировой системе координат.
     * @param	endLocationOrDirection		Конечная позиция кости в мировой системе координат.
     * @param	length		                null или undefined.
     * @param	cwConstraintDegs		    Угол-ограничение по часовой стрелке.
     * @param	acwConstraintDegs		    Угол-ограничение против часовой стрелки.
     * @param	colour		                Цвет кости.
     * @param	name		                Название кости.
     * <p>
     * Если третий параметр конструктора - это число, но при этом первые 2 параметра присутствуют,
     * то конструктор будет воспринимать первые 2 параметра как начальную позицию данной кости и её направление.
     * Параметры с четвертого по седьмой опциональны.
     *
     * @param	startLocation	            Начальная позиция кости в мировой системе координат.
     * @param	endLocationOrDirection		Конечная позиция кости в мировой системе координат.
     * @param	length		                null или undefined.
     * @param	cwConstraintDegs		    Угол-ограничение по часовой стрелке.
     * @param	acwConstraintDegs		    Угол-ограничение против часовой стрелки.
     * @param	colour		                Цвет кости.
     * @param	name		                Название кости.
     */
    function FabrikBone2D(startLocation, endLocationOrDirection, length, cwConstraintDegs, acwConstraintDegs, colour, name) {
        var _this = this;
        /**
         * _joint	Сустав прикреплённый к FabrikBone2D.
         * <p>
         * Каждая кость содержит один сустав, который крепит данную кость к предыдущей.
         * <p>
         * По умолчанию сустав ничем не ограничен. Он может вращаться во всех возможных направлениях.
         * Изменить параметры сустава можно через конструктор кости или с помощью методов
         * {@link #setClockwiseConstraintDegs(float)} и {@link #setAnticlockwiseConstraintDegs(float)}.
         */
        this._joint = new _FabrikJoint2D__WEBPACK_IMPORTED_MODULE_1__["FabrikJoint2D"]();
        /**
         * _startLocation	Начальная позиция кости.
         * <p>
         * Начальная позиция может быть задана через конструктоp или с помощью методов 'addBone'
         * или 'addConsecutiveBone' из класса {@link FabrikChain2D}.
         */
        this._startLocation = new _utils_Vec2f__WEBPACK_IMPORTED_MODULE_0__["Vec2f"]();
        /**
         * _endLocation	Конечная позиция кости.
         * <p>
         * Конечная позиция может быть задана через конструктоp или с помощью метода 'addBone'
         * из класса {@link FabrikChain2D}.
         */
        this._endLocation = new _utils_Vec2f__WEBPACK_IMPORTED_MODULE_0__["Vec2f"]();
        /**
         * _name	Название кости.
         * <p>
         * Необязательное поле,облегчающее идентификацию кости в цепи.
         */
        this._name = '';
        this._globalConstraintUV = new _utils_Vec2f__WEBPACK_IMPORTED_MODULE_0__["Vec2f"](1.0, 0.0);
        /**
         * Цвет кости.
         * <p>
         * По умолчанию кость белая непрозрачная.
         */
        this._colour = new _utils_Colour4f__WEBPACK_IMPORTED_MODULE_2__["Colour4f"]();
        this.getGlobalConstraintUV = function () { return _this._globalConstraintUV; };
        /**
         * Возвращает длину кости.
         *
         * @return
         */
        this.getLength = function () { return _this._length; };
        /**
         * Возвращает цвет кости.
         *
         * @return  Цвет кости.
         */
        this.getColour = function () { return _this._colour; };
        /**
         * Возвращает начальную позицию кости.
         *
         * @return Начальная позиция кости.
         */
        this.getStartLocation = function () { return _this._startLocation; };
        /**
         * Возвращает начальную позицию кости в виде числового массива.
         *
         * @return  Начальная позиция кости.
         */
        this.getStartLocationAsArray = function () { return [_this._startLocation.x, _this._startLocation.y]; };
        /**
         * Возвращает конечную позицию кости.
         *
         * @return Конечная позиция кости.
         */
        this.getEndLocation = function () { return _this._endLocation; };
        /**
         * Возвращает конечную позицию кости в виде числового массива.
         *
         * @return  Конечная позиция кости.
         */
        this.getEndLocationAsArray = function () { return [_this._endLocation.x, _this._endLocation.y]; };
        /**
         * Возвращает сустав для кости.
         *
         * @return  Сустав.
         */
        this.getJoint = function () { return _this._joint; };
        /**
         * Возвращает угол-ограничение по часовой стрелке для сустава кости.
         *
         * @return  Угол-ограничение по часовой стрелке в градусах.
         */
        this.getClockwiseConstraintDegs = function () { return _this._joint.getClockwiseConstraintDegs(); };
        /**
         * Возвращает направление кости.
         * <p>
         * Если необходимо получить направление обратное направлению кости - воспользуйтесь методом negated вектора.
         *
         * @return  Единичный вектор направления данной кости.
         * @see		Vec2f#negated()
         */
        this.getDirectionUV = function () { return _utils_Vec2f__WEBPACK_IMPORTED_MODULE_0__["Vec2f"].getDirectionUV(_this._startLocation, _this._endLocation); };
        /**
         * Возвращает имя кости.
         *
         * @return	Имя.
         */
        this.getName = function () { return _this._name; };
        /**
         * Возвращает тип сустава.
         *
         * @return	Тип сустава.
         */
        this.getJointConstraintCoordinateSystem = function () { return _this._joint.getConstraintCoordinateSystem(); };
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                throw new Error('FabrikBone2D constructor can not have 1 param.');
            default:
                if (!startLocation || !endLocationOrDirection) {
                    throw new Error('Invalid FabrikBone2D constructor params.');
                }
                if (length === null || length === undefined) {
                    // Представляем первые 2 вектора как начальную и конечную позиции кости.
                    this._startLocation.set(startLocation);
                    this._endLocation.set(endLocationOrDirection);
                    this._updateLength();
                }
                else {
                    // Представляем первые 2 вектора как начальную позицию и направление кости.
                    _utils_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].validateDirectionUV(endLocationOrDirection);
                    this._startLocation.set(startLocation);
                    this._endLocation.set(this._startLocation.plus(_utils_Vec2f__WEBPACK_IMPORTED_MODULE_0__["Vec2f"].normalised(endLocationOrDirection).times(length)));
                    this._updateLength();
                }
                if (typeof cwConstraintDegs === 'number')
                    this.setClockwiseConstraintDegs(cwConstraintDegs);
                if (typeof acwConstraintDegs === 'number')
                    this.setAnticlockwiseConstraintDegs(acwConstraintDegs);
                if (colour instanceof _utils_Colour4f__WEBPACK_IMPORTED_MODULE_2__["Colour4f"])
                    this._colour.set(colour.toArray());
                if (typeof name === 'string')
                    this._name = name;
        }
    }
    // ---------- Methods ----------
    /**
     * Задаёт всем полям данной кости такие жа значения как у кости источника.
     * <p>
     * Копирование свойств неглубокое.
     * После применнеия метода данная кость и кость источник будут содержать общие элементы.
     *
     * @param	source	Кость источник.
     */
    FabrikBone2D.prototype.set = function (source) {
        this._startLocation.set(source._startLocation);
        this._endLocation.set(source._endLocation);
        this._joint.set(source._joint);
        this._colour.set(source._colour.toArray());
        this._name = source._name;
        this._length = source._length;
        this._globalConstraintUV = source._globalConstraintUV;
    };
    /**
     * Задаёт цвет кости.
     *
     * @param	colour	Цвет кости.
     */
    FabrikBone2D.prototype.setColour = function (colour) { this._colour.set(colour.toArray()); };
    /**
     * Задаёт начальную позицию кости.
     *
     * @param location Начальная позиция кости.
     */
    FabrikBone2D.prototype.setStartLocation = function (location) {
        this._startLocation.set(location);
    };
    /**
     * Задаёт конечную позицию кости.
     *
     * @param location Конечная позиция кости.
     */
    FabrikBone2D.prototype.setEndLocation = function (location) {
        this._endLocation.set(location);
    };
    /**
     * Задаёт сустав для кости.
     *
     * @param  joint  Сустав.
     */
    FabrikBone2D.prototype.setJoint = function (joint) { this._joint.set(joint); };
    /**
     * Задаёт угол-ограничение по часовой стрелке для сустава кости.
     * <p>
     * При передаче угла вне допустимого диапазона, угол приравневается к одному из граничных значений.
     *
     * @param  angleDegs  Угол-ограничение в градусах.
     */
    FabrikBone2D.prototype.setClockwiseConstraintDegs = function (angleDegs) { this._joint.setClockwiseConstraintDegs(angleDegs); };
    /**
     * Задаёт угол-ограничение против часовой стрелки для сустава кости.
     * <p>
     * При передаче угла вне допустимого диапазона, угол приравневается к одному из граничных значений.
     *
     * @param  angleDegs  Угол-ограничение в градусах.
     */
    FabrikBone2D.prototype.setAnticlockwiseConstraintDegs = function (angleDegs) { this._joint.setAnticlockwiseConstraintDegs(angleDegs); };
    /**
     * Возвращает угол-ограничение против часовой стрелки для сустава кости.
     *
     * @return  Угол-ограничение против часовой стрелки в градусах.
     */
    FabrikBone2D.prototype.getAnticlockwiseConstraintDegs = function () { return this._joint.getAnticlockwiseConstraintDegs(); };
    /**
     * Задаёт значение имени кости.
     *
     * @param	name	Имя.
     */
    FabrikBone2D.prototype.setName = function (name) { this._name = name; };
    /**
     * Задаёт тип сустава.
     *
     * @param	coordSystem		Тип сустава.
     */
    FabrikBone2D.prototype.setJointConstraintCoordinateSystem = function (coordSystem) {
        this._joint.setConstraintCoordinateSystem(coordSystem);
    };
    /**
     * Пересчитывает длину кости, опираясь на внутренние поля начальной и конечной позиции.
     */
    FabrikBone2D.prototype._updateLength = function () {
        var length = _utils_Vec2f__WEBPACK_IMPORTED_MODULE_0__["Vec2f"].distanceBetween(this._startLocation, this._endLocation);
        if (length >= 0.0) {
            this._length = length;
        }
        else {
            throw new Error('Bone getLength must be a positive value.');
        }
    };
    return FabrikBone2D;
}());



/***/ }),

/***/ "./movikjs/main/FabrikBone3D.ts":
/*!**************************************!*\
  !*** ./movikjs/main/FabrikBone3D.ts ***!
  \**************************************/
/*! exports provided: FabrikBone3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabrikBone3D", function() { return FabrikBone3D; });
/* harmony import */ var _BoneConnectionPoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoneConnectionPoint */ "./movikjs/main/BoneConnectionPoint.ts");
/* harmony import */ var _FabrikJoint3D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FabrikJoint3D */ "./movikjs/main/FabrikJoint3D.ts");
/* harmony import */ var _utils_Vec3f__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Vec3f */ "./movikjs/utils/Vec3f.ts");
/* harmony import */ var _utils_Colour4f__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Colour4f */ "./movikjs/utils/Colour4f.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Utils */ "./movikjs/utils/Utils.ts");





/**
 * Кость.
 * <p>
 * FabrikBone3D состоит из начальной и конечной позиции и FabrikJoint3D, который ограничивает возможность поворота.
 */
var FabrikBone3D = /** @class */ (function () {
    // ---------- Constructors ----------
    /**
     * Конструктор.
     * <p>
     * Принимает несколько возможных комбинаций параметров:
     * <p>
     * Конструктор без параметров. Все поля класса принимают значения по умолчанию.
     * <p>
     * Если третий параметр конструктора задан как null или undefiened, но при этом первые 2 параметра присутствуют,
     * то конструктор будет воспринимать первые 2 параметра как начальную и конечную позиции данной кости.
     * Параметры с четвертого по седьмой опциональны.
     *
     * @param	startLocation	            Начальная позиция кости в мировой системе координат.
     * @param	endLocationOrDirection		Конечная позиция кости в мировой системе координат.
     * @param	length		                null или undefined.
     * @param	colour		                Цвет кости.
     * @param	name		                Название кости.
     * <p>
     * Если третий параметр конструктора - это число, но при этом первые 2 параметра присутствуют,
     * то конструктор будет воспринимать первые 2 параметра как начальную позицию данной кости и её направление.
     * Параметры с четвертого по седьмой опциональны.
     *
     * @param	startLocation	            Начальная позиция кости в мировой системе координат.
     * @param	endLocationOrDirection		Конечная позиция кости в мировой системе координат.
     * @param	length		                null или undefined.
     * @param	colour		                Цвет кости.
     * @param	name		                Название кости.
     */
    function FabrikBone3D(startLocation, endLocationOrDirection, length, colour, name) {
        var _this = this;
        /**
         * Если данная кость присоединена к кости из другой цепи, к какому концу другой цепи она должна присоединяться?
         * <p>
         * По умолчанию присоединяется к концу данной кости.
         * <p>
         * Это поле может быть изменено с помощью метода {#link #setBoneConnectionPoint(BoneConnectionPoint)}, или при соединении кости
         * с другой цепью с помощью метода {@link FabrikStructure3D#connectChain(FabrikChain3D, number, number, BoneConnectionPoint)}.
         */
        this._boneConnectionPoint = _BoneConnectionPoint__WEBPACK_IMPORTED_MODULE_0__["BoneConnectionPoint"].END;
        /**
         * _joint	Сустав для данной кости.
         * <p>
         * У каждой кости есть один сустав, располагающийся в начальной позиции кости.
         * Он определяет как кость может быть повернута относительно предыдущей кости в цепи.
         * <p>
         * По умолчанию сустав не имеет ограничений, но они могут быть заданы с помощью методов
         * {@link #setClockwiseConstraintDegs(number)} и {@link #setAnticlockwiseConstraintDegs(number)}.
         */
        this._joint = new _FabrikJoint3D__WEBPACK_IMPORTED_MODULE_1__["FabrikJoint3D"]();
        /**
         * _startLocation	Начальная позиция кости.
         * <p>
         * Начальная позиция должна задаваться только через конструктор или
         * с помощью метода 'addBone' класса {@link FabrikChain3D}.
         */
        this._startLocation = new _utils_Vec3f__WEBPACK_IMPORTED_MODULE_2__["Vec3f"]();
        /**
         * _endLocation	Конечная позиция кости.
         * <p>
         * Конечная позиция должна задаваться только через конструктор
         * или через метод 'addBone' класса {@link FabrikChain3D}.
         */
        this._endLocation = new _utils_Vec3f__WEBPACK_IMPORTED_MODULE_2__["Vec3f"]();
        /**
         * _name	Имя кости.
         * <p>
         * Не обязательно использовать это свойство.
         * Иногда его использование облегчает идентификацию кости в цепи.
         *
         * @see #setName(string)
         * @see #FabrikBone3D(Vec3f, Vec3f, string)
         * @see #FabrikBone3D(Vec3f, Vec3f, number, string)
         */
        this._name = '';
        /**
         * Длина кости.
         */
        this._length = 0;
        /**
         * Цвет для визуализации кости.
         *
         * @default Белый непрозрачный - [1, 1, 1, 1].
         */
        this._colour = new _utils_Colour4f__WEBPACK_IMPORTED_MODULE_3__["Colour4f"]();
        /**
         * Возвращает длину кости.
         *
         * @return
         */
        this.getLength = function () { return _this._length; };
        /**
         * Возвращает длину кости.
         *
         * @return
         */
        this.getLifeLength = function () { return _utils_Vec3f__WEBPACK_IMPORTED_MODULE_2__["Vec3f"].distanceBetween(_this._startLocation, _this._endLocation); };
        /**
         * Возвращает точку соединения с данной костью.
         *
         * @return
         */
        this.getBoneConnectionPoint = function () { return _this._boneConnectionPoint; };
        /**
         * Возвращает цвет кости
         *
         * @return
         */
        this.getColour = function () { return _this._colour; };
        /**
         * Возвращает начальную позицию кости.
         *
         * @return Начальная позиция кости.
         */
        this.getStartLocation = function () { return _this._startLocation; };
        /**
         * Возвращает начальную позицию кости в виде числового массива.
         *
         * @return  Начальная позиция кости.
         */
        this.getStartLocationAsArray = function () { return [_this._startLocation.x, _this._startLocation.y, _this._startLocation.z]; };
        /**
         * Возвращает конечную позицию кости.
         *
         * @return Конечная позиция кости.
         */
        this.getEndLocation = function () { return _this._endLocation; };
        /**
         * Возвращает конечную позицию кости в виде числового массива.
         *
         * @return  Конечная позиция кости.
         */
        this.getEndLocationAsArray = function () { return [_this._endLocation.x, _this._endLocation.y, _this._endLocation.z]; };
        /**
         * Возвращает сустав для кости.
         *
         * @return  Сустав.
         */
        this.getJoint = function () { return _this._joint; };
        /**
         * Возвращает тип сустава.
         *
         * @return
         */
        this.getJointType = function () { return _this._joint.getJointType(); };
        /**
         * Возвращает имя кости.
         *
         * @return String
         */
        this.getName = function () { return _this._name; };
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                throw new Error('FabrikBone2D constructor can not have 1 param.');
            default:
                if (!startLocation || !endLocationOrDirection) {
                    throw new Error('Invalid FabrikBone2D constructor params.');
                }
                if (length === null || length === undefined) {
                    // Представляем первые 2 вектора как начальную и конечную позиции кости.
                    this._startLocation.set(startLocation);
                    this._endLocation.set(endLocationOrDirection);
                    this._updateLength();
                }
                else {
                    // Представляем первые 2 вектора как начальную позицию и направление кости.
                    _utils_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].validateDirectionUV(endLocationOrDirection);
                    this._startLocation.set(startLocation);
                    this._endLocation.set(this._startLocation.plus(endLocationOrDirection.normalised().times(length)));
                    this._updateLength();
                }
                if (colour instanceof _utils_Colour4f__WEBPACK_IMPORTED_MODULE_3__["Colour4f"])
                    this._colour.set(colour.toArray());
                if (typeof name === 'string')
                    this._name = name;
        }
    }
    // ---------- Methods ----------
    /**
     * Задаёт всем полям данной кости такие жа значения как у кости источника.
     * <p>
     * Копирование свойств неглубокое.
     * После применнеия метода данная кость и кость источник будут содержать общие элементы.
     *
     * @param	source	Кость источник.
     */
    FabrikBone3D.prototype.set = function (source) {
        this._startLocation.set(source._startLocation);
        this._endLocation.set(source._endLocation);
        this._joint.set(source._joint);
        this._colour.set(source._colour.toArray());
        this._name = source._name;
        this._length = source._length;
        this._boneConnectionPoint = source._boneConnectionPoint;
    };
    /**
     * Задаёт точку соединения.
     * <p>
     * Эта точка соединения контролирует куда присоединяется кость из другой цепи при соединении с нашей костью.
     * <p>
     * Значение по умолчанию BoneConnectionPoint3D.END.
     *
     * @param	bcp	    Точка соединения (BoneConnectionPoint3.START или BoneConnectionPoint.END).
     *
     */
    FabrikBone3D.prototype.setBoneConnectionPoint = function (bcp) { this._boneConnectionPoint = bcp; };
    /**
     * Задаёт цвет кости.
     *
     * @param	colour	Будущий цвет кости для отрисовки.
     */
    FabrikBone3D.prototype.setColour = function (colour) { this._colour.set(colour.toArray()); };
    /**
     * Задаёт сустав для кости.
     *
     * @param	joint	Сустав.
     */
    FabrikBone3D.prototype.setJoint = function (joint) { this._joint.set(joint); };
    /**
     * Задаёт угол ограничение по часовой стрелке для шарнирного сустава.
     * <p>
     * Вызывает ошибки, если угол выходит за границы допустимых значений и
     * если тип сустава не шарнирный.
     *
     * @param    angleDegs    Угол ограничение по часовой стрелке в градусах.
     */
    FabrikBone3D.prototype.setHingeJointClockwiseConstraintDegs = function (angleDegs) { this._joint.setHingeJointClockwiseConstraintDegs(angleDegs); };
    /**
     * Возвращает угол-ограничение по часовой стрелке для шарнирного сустава.
     * <p>
     * Вызывает ошибку, если тип сустава не шарнирный.
     *
     * @return Угол-ограничение по часовой стрелке в градусах.
     */
    FabrikBone3D.prototype.getHingeJointClockwiseConstraintDegs = function () { return this._joint.getHingeClockwiseConstraintDegs(); };
    /**
     * Задаёт угол ограничение против часовой стрелки для шарнирного сустава.
     * <p>
     * Вызывает ошибки, если угол выходит за границы допустимых значений и
     * если тип сустава не шарнирный.
     *
     * @param    angleDegs    Угол ограничение против часовой стрелки в градусах.
     */
    FabrikBone3D.prototype.setHingeJointAnticlockwiseConstraintDegs = function (angleDegs) { this._joint.setHingeJointAnticlockwiseConstraintDegs(angleDegs); };
    /**
     * Возвращает угол-ограничение против часовой стрелки для шарнирного сустава.
     * <p>
     * Вызывает ошибку, если тип сустава не шарнирный.
     *
     * @return Угол-ограничение против часовой стрелки в градусах.
     */
    FabrikBone3D.prototype.getHingeJointAnticlockwiseConstraintDegs = function () { return this._joint.getHingeAnticlockwiseConstraintDegs(); };
    /**
     * Задаёт угол-ограничение для шарового сустава.
     * <p>
     * Вызывает ошибку, если тип сустава не шаровой или
     * угол выходит за границы допустимых значений.
     *
     * @param	angleDegs	Угол-ограничение в градусах.
     */
    FabrikBone3D.prototype.setBallJointConstraintDegs = function (angleDegs) {
        this._joint.setBallJointConstraintDegs(angleDegs);
    };
    /**
     * Возвращает угол ограничение шарового сустава.
     * <p>
     * Вызывает ошибку, если тип сустава не шаровой
     *
     * @return	Угол-ограничение в градусах.
     */
    FabrikBone3D.prototype.getBallJointConstraintDegs = function () { return this._joint.getBallJointConstraintDegs(); };
    /**
     * Возвращает направление кости.
     * <p>
     * Если необходимо получить направление обратное направлению кости - воспользуйтесь методом negated вектора.
     *
     * @return  Единичный вектор направления данной кости.
     * @see		Vec3f#negated()
     */
    FabrikBone3D.prototype.getDirectionUV = function () {
        return _utils_Vec3f__WEBPACK_IMPORTED_MODULE_2__["Vec3f"].getDirectionUV(this._startLocation, this._endLocation);
    };
    /**
     * Возвращает глобальный поворот кости относительно глобальной оси X.
     * Возвращаемое значение находится в диапазоне -179.9..180.0 степени.
     *
     * @return	Отклонение вектора в градусах.
     **/
    FabrikBone3D.prototype.getGlobalPitchDegs = function () {
        return _utils_Vec3f__WEBPACK_IMPORTED_MODULE_2__["Vec3f"].getDirectionUV(this._startLocation, this._endLocation).getGlobalPitchDegs();
    };
    /**
     * Возвращает глобальный поворот кости относительно глобальной оси Y.
     * Возвращаемое значение находится в диапазоне -179.9..180.0 степени.
     *
     * @return	Отклонение вектора в градусах.
     **/
    FabrikBone3D.prototype.getGlobalYawDegs = function () {
        return _utils_Vec3f__WEBPACK_IMPORTED_MODULE_2__["Vec3f"].getDirectionUV(this._startLocation, this._endLocation).getGlobalYawDegs();
    };
    /**
     * Задаёт имя кости.
     *
     * @param	name	The name to set.
     */
    FabrikBone3D.prototype.setName = function (name) { this._name = name; };
    /**
     * Задаёт начальную позицию кости.
     *
     * @param location Начальная позиция кости.
     */
    FabrikBone3D.prototype.setStartLocation = function (location) {
        this._startLocation.set(location);
    };
    /**
     * Задаёт конечную позицию кости.
     *
     * @param location Конечная позиция кости.
     */
    FabrikBone3D.prototype.setEndLocation = function (location) {
        this._endLocation.set(location);
    };
    /**
     * Пересчитывает длину кости, опираясь на внутренние поля начальной и конечной позиции.
     */
    FabrikBone3D.prototype._updateLength = function () {
        var length = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_2__["Vec3f"].distanceBetween(this._startLocation, this._endLocation);
        if (length >= 0.0) {
            this._length = length;
        }
        else {
            throw new Error('Bone getLength must be a positive value.');
        }
    };
    return FabrikBone3D;
}());



/***/ }),

/***/ "./movikjs/main/FabrikChain2D.ts":
/*!***************************************!*\
  !*** ./movikjs/main/FabrikChain2D.ts ***!
  \***************************************/
/*! exports provided: FabrikChain2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabrikChain2D", function() { return FabrikChain2D; });
/* harmony import */ var _FabrikBone2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FabrikBone2D */ "./movikjs/main/FabrikBone2D.ts");
/* harmony import */ var _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Vec2f */ "./movikjs/utils/Vec2f.ts");
/* harmony import */ var _BoneConnectionPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoneConnectionPoint */ "./movikjs/main/BoneConnectionPoint.ts");
/* harmony import */ var _utils_Colour4f__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Colour4f */ "./movikjs/utils/Colour4f.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Utils */ "./movikjs/utils/Utils.ts");
/* harmony import */ var _ConstraintCoordinateSystem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConstraintCoordinateSystem */ "./movikjs/main/ConstraintCoordinateSystem.ts");
/* harmony import */ var _BaseboneConstraintType2D__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BaseboneConstraintType2D */ "./movikjs/main/BaseboneConstraintType2D.ts");







/**
 * 2D цепь костей, решающая задачу инверсной кинематики с помощью алгоритма FABRIK.
 */
var FabrikChain2D = /** @class */ (function () {
    // ---------- Constructors ----------
    /**
     * Конструктор.
     *
     * Принимает три вариации параметров:
     *
     * Без параметров. Всем полям проставляются значения по умолчанию.
     *
     * Один параметр-строка.
     *
     * @param	source	Имя данной цепи.
     *
     * Конструктор копирования.
     *
     * @param	source	Цепь для копирования.
     */
    function FabrikChain2D(source) {
        // ---------- Private Properties ----------
        /**
         * Массив костей.
         */
        this._chain = [];
        /**
         * Название цепи.
         * <p>
         * Необязательное к использованию поле, помогающее идентифицировать цепь.
         */
        this._name = '';
        /**
         * Порог, достигнув которого мы считаем задачу инверсной кинематики решенной.
         * <p>
         * При решении задачи ИК, когда расстояние между текущим положением и желаемым положением становится меньше или равно
         * значению порога, мы прерываем дальнейшие итерации и считаем задачу решенной.
         * <p>
         * Значение по умолчанию 1.
         * <p>
         * Минимально допустимое значение - 0, но стоит помнить о погрешности вычисления и не задавать порог равным нулю, так
         * как это может привести к бесконечным бесполезным попыткам.
         * <p>
         * Хотя данное поле и самый важный критерий останова для ИК-алгоритма, оно работает в комбинации с
         * {@link #_maxIterationAttempts} и {@link _minIterationChange}. Эти вспомогательные свойства помогают пережить ситуации,
         * когда длины цепи не хватает для достижения цели или когда суставы цепи сильно ограничены.
         */
        this._solveDistanceThreshold = 1.0;
        /**
         * Максимальное количество итераций алгоритма, применяемых при решении задачи ИК.
         *
         * @default 20
         */
        this._maxIterationAttempts = 15;
        this._minIterationChange = 0.01;
        this._chainLength = 0;
        this._baseLocation = new _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"]();
        this._fixedBaseMode = true;
        this._baseboneConstraintType = _BaseboneConstraintType2D__WEBPACK_IMPORTED_MODULE_6__["BaseboneConstraintType2D"].NONE;
        this._boneConnectionPoint = _BoneConnectionPoint__WEBPACK_IMPORTED_MODULE_2__["BoneConnectionPoint"].END;
        this._baseboneConstraintUV = new _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"]();
        this._baseboneRelativeConstraintUV = new _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"]();
        this._lastTargetLocation = new _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"](Number.MAX_VALUE, Number.MAX_VALUE);
        this._lastBaseLocation = new _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"](Number.MAX_VALUE, Number.MAX_VALUE);
        this._embeddedTarget = new _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"]();
        this._useEmbeddedTarget = false;
        this._currentSolveDistance = Number.MAX_VALUE;
        this._connectedChainNumber = -1;
        this._connectedBoneNumber = -1;
        if (!source) {
            return;
        }
        if (typeof source === 'string') {
            this._name = source;
        }
        else {
            this._chain = source.cloneChainVector();
            this._baseLocation.set(source._baseLocation);
            this._lastTargetLocation.set(source._lastTargetLocation);
            this._lastBaseLocation.set(source._lastBaseLocation);
            this._baseboneConstraintUV.set(source._baseboneConstraintUV);
            this._baseboneRelativeConstraintUV.set(source._baseboneRelativeConstraintUV);
            this._embeddedTarget.set(source._embeddedTarget);
            this._chainLength = source._chainLength;
            this._currentSolveDistance = source._currentSolveDistance;
            this._connectedChainNumber = source._connectedChainNumber;
            this._connectedBoneNumber = source._connectedBoneNumber;
            this._baseboneConstraintType = source._baseboneConstraintType;
            this._boneConnectionPoint = source._boneConnectionPoint;
            this._name = source._name;
            this._useEmbeddedTarget = source._useEmbeddedTarget;
        }
    }
    // ---------- Public Methods ------------
    FabrikChain2D.prototype.addBone = function (bone) {
        this._chain.push(bone);
        if (this._chain.length === 1) {
            this._baseLocation.set(bone.getStartLocation());
            this._baseboneConstraintUV = bone.getDirectionUV();
        }
        this.updateChainLength();
    };
    FabrikChain2D.prototype.addConsecutiveConstrainedBone = function (directionUV, length, clockwiseDegs, anticlockwiseDegs, colour) {
        if (colour === void 0) { colour = new _utils_Colour4f__WEBPACK_IMPORTED_MODULE_3__["Colour4f"](); }
        _utils_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].validateDirectionUV(directionUV);
        _utils_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].validateLength(length);
        if (this._chain.length !== 0) {
            var prevBoneEnd = this._chain[this._chain.length - 1].getEndLocation();
            var bone = new _FabrikBone2D__WEBPACK_IMPORTED_MODULE_0__["FabrikBone2D"](prevBoneEnd, _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"].normalised(directionUV), length, clockwiseDegs, anticlockwiseDegs, colour);
            this.addBone(bone);
        }
        else {
            throw new Error('You cannot add the base bone to a chain using this method as it does not provide a start location.');
        }
    };
    FabrikChain2D.prototype.addConsecutiveBone = function (directionUV, length) {
        this.addConsecutiveConstrainedBone(directionUV, length, 180.0, 180.0, new _utils_Colour4f__WEBPACK_IMPORTED_MODULE_3__["Colour4f"]());
    };
    FabrikChain2D.prototype.addConsecutiveCreatedBone = function (bone) {
        var dir = bone.getDirectionUV();
        _utils_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].validateDirectionUV(dir);
        var len = bone.getLength();
        _utils_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].validateLength(len);
        if (this._chain.length !== 0) {
            var prevBoneEnd = this._chain[this._chain.length - 1].getEndLocation();
            bone.setStartLocation(prevBoneEnd);
            bone.setEndLocation(prevBoneEnd.plus(dir.times(len)));
            this.addBone(bone);
        }
        else {
            throw new Error('You cannot add the base bone to a chain using this method as it does not provide a start location.');
        }
    };
    FabrikChain2D.prototype.getBaseboneConstraintType = function () { return this._baseboneConstraintType; };
    FabrikChain2D.prototype.getBaseboneConstraintUV = function () { return this._baseboneConstraintUV; };
    FabrikChain2D.prototype.getBaseLocation = function () {
        if (this._chain.length !== 0) {
            return this._chain[0].getStartLocation();
        }
        else {
            throw new Error('Cannot get base location as there are zero bones in the chain.');
        }
    };
    FabrikChain2D.prototype.getBone = function (boneNumber) {
        return this._chain[boneNumber];
    };
    FabrikChain2D.prototype.getBoneConnectionPoint = function () { return this._boneConnectionPoint; };
    FabrikChain2D.prototype.getChain = function () { return this._chain; };
    FabrikChain2D.prototype.getChainLength = function () { return this._chainLength; };
    FabrikChain2D.prototype.getConnectedBoneNumber = function () { return this._connectedBoneNumber; };
    FabrikChain2D.prototype.getConnectedChainNumber = function () { return this._connectedChainNumber; };
    FabrikChain2D.prototype.getEffectorLocation = function () {
        if (this._chain.length !== 0) {
            return this._chain[this._chain.length - 1].getEndLocation();
        }
        else {
            throw new Error('Cannot get effector location as there are zero bones in the chain.');
        }
    };
    FabrikChain2D.prototype.getEmbeddedTargetMode = function () { return this._useEmbeddedTarget; };
    FabrikChain2D.prototype.getEmbeddedTarget = function () { return this._embeddedTarget; };
    FabrikChain2D.prototype.getLastTargetLocation = function () { return this._lastTargetLocation; };
    FabrikChain2D.prototype.getName = function () { return this._name; };
    FabrikChain2D.prototype.getNumBones = function () { return this._chain.length; };
    FabrikChain2D.prototype.removeBone = function (boneNumber) {
        if (boneNumber < this._chain.length) {
            this._chain.splice(boneNumber, 1);
            this.updateChainLength();
        }
        else {
            throw new Error('Bone ' + boneNumber + ' does not exist to be removed from the chain. Bones are zero indexed.');
        }
    };
    FabrikChain2D.prototype.setBaseboneConstraintType = function (type) { this._baseboneConstraintType = type; };
    FabrikChain2D.prototype.setBaseboneConstraintUV = function (constraintUV) {
        _utils_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].validateDirectionUV(constraintUV);
        this._baseboneConstraintUV.set(_utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"].normalised(constraintUV));
    };
    FabrikChain2D.prototype.setBaseLocation = function (baseLocation) {
        this._baseLocation.set(baseLocation);
    };
    FabrikChain2D.prototype.setBoneConnectionPoint = function (boneConnectionPoint) { this._boneConnectionPoint = boneConnectionPoint; };
    FabrikChain2D.prototype.setChain = function (chain) {
        this._chain = chain;
    };
    FabrikChain2D.prototype.setColour = function (colour) {
        for (var _i = 0, _a = this._chain; _i < _a.length; _i++) {
            var aBone = _a[_i];
            aBone.setColour(colour);
        }
    };
    FabrikChain2D.prototype.setConnectedBoneNumber = function (boneNumber) {
        this._connectedBoneNumber = boneNumber;
    };
    FabrikChain2D.prototype.setConnectedChainNumber = function (chainNumber) {
        this._connectedChainNumber = chainNumber;
    };
    FabrikChain2D.prototype.setFixedBaseMode = function (value) {
        if (!value && this._connectedChainNumber !== -1) {
            throw new Error('This chain is connected to another chain so must remain in fixed base mode.');
        }
        if (this._baseboneConstraintType === _BaseboneConstraintType2D__WEBPACK_IMPORTED_MODULE_6__["BaseboneConstraintType2D"].GLOBAL_ABSOLUTE && !value) {
            throw new Error('Cannot set a non-fixed base mode when the chain\'s constraint type is BaseBoneConstraintType2D.GLOBAL_ABSOLUTE.');
        }
        this._fixedBaseMode = value;
    };
    FabrikChain2D.prototype.setMaxIterationAttempts = function (maxIterations) {
        if (maxIterations < 1) {
            throw new Error('The maximum number of attempts to solve this IK chain must be at least 1.');
        }
        this._maxIterationAttempts = maxIterations;
    };
    FabrikChain2D.prototype.setMinIterationChange = function (minIterationChange) {
        if (minIterationChange < 0) {
            throw new Error('The minimum iteration change value must be more than or equal to zero.');
        }
        this._minIterationChange = minIterationChange;
    };
    FabrikChain2D.prototype.setName = function (name) { this._name = name; };
    FabrikChain2D.prototype.setSolveDistanceThreshold = function (solveDistance) {
        if (solveDistance < 0.0) {
            throw new Error('The solve distance threshold must be greater than or equal to zero.');
        }
        this._solveDistanceThreshold = solveDistance;
    };
    FabrikChain2D.prototype.solveIK = function (target) {
        // ---------- Прямой проход от эффектора к основанию  -----------
        for (var loop = this._chain.length - 1; loop >= 0; --loop) {
            var thisBone = this._chain[loop];
            var boneLength = thisBone.getLength();
            if (loop !== this._chain.length - 1) {
                var outerBone = this._chain[loop + 1];
                var outerBoneOuterToInnerUV = outerBone.getDirectionUV().negated();
                var thisBoneOuterToInnerUV = thisBone.getDirectionUV().negated();
                var clockwiseConstraintDegs = outerBone.getJoint().getClockwiseConstraintDegs();
                var antiClockwiseConstraintDegs = outerBone.getJoint().getAnticlockwiseConstraintDegs();
                var constrainedUV = void 0;
                if (this._chain[loop].getJointConstraintCoordinateSystem() == _ConstraintCoordinateSystem__WEBPACK_IMPORTED_MODULE_5__["ConstraintCoordinateSystem"].LOCAL) {
                    constrainedUV = _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"].getConstrainedUV(thisBoneOuterToInnerUV, outerBoneOuterToInnerUV, clockwiseConstraintDegs, antiClockwiseConstraintDegs);
                }
                else {
                    constrainedUV = _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"].getConstrainedUV(thisBoneOuterToInnerUV, thisBone.getGlobalConstraintUV().negated(), clockwiseConstraintDegs, antiClockwiseConstraintDegs);
                }
                var newStartLocation = thisBone.getEndLocation().plus(constrainedUV.times(boneLength));
                thisBone.setStartLocation(newStartLocation);
                if (loop > 0) {
                    this._chain[loop - 1].setEndLocation(newStartLocation);
                }
            }
            else {
                thisBone.setEndLocation(target);
                var thisBoneOuterToInnerUV = thisBone.getDirectionUV().negated();
                var constrainedUV = void 0;
                if (loop > 0) {
                    var innerBoneOuterToInnerUV = this._chain[loop - 1].getDirectionUV().negated();
                    var clockwiseConstraintDegs = thisBone.getJoint().getClockwiseConstraintDegs();
                    var antiClockwiseConstraintDegs = thisBone.getJoint().getAnticlockwiseConstraintDegs();
                    if (thisBone.getJoint().getConstraintCoordinateSystem() == _ConstraintCoordinateSystem__WEBPACK_IMPORTED_MODULE_5__["ConstraintCoordinateSystem"].LOCAL) {
                        constrainedUV = _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"].getConstrainedUV(thisBoneOuterToInnerUV, innerBoneOuterToInnerUV, clockwiseConstraintDegs, antiClockwiseConstraintDegs);
                    }
                    else {
                        constrainedUV = _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"].getConstrainedUV(thisBoneOuterToInnerUV, thisBone.getGlobalConstraintUV().negated(), clockwiseConstraintDegs, antiClockwiseConstraintDegs);
                    }
                }
                else {
                    if (thisBone.getJointConstraintCoordinateSystem() == _ConstraintCoordinateSystem__WEBPACK_IMPORTED_MODULE_5__["ConstraintCoordinateSystem"].LOCAL) {
                        constrainedUV = thisBoneOuterToInnerUV;
                    }
                    else {
                        constrainedUV = _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"].getConstrainedUV(thisBoneOuterToInnerUV, thisBone.getGlobalConstraintUV().negated(), thisBone.getClockwiseConstraintDegs(), thisBone.getAnticlockwiseConstraintDegs());
                    }
                }
                var newStartLocation = thisBone.getEndLocation().plus(constrainedUV.times(boneLength));
                thisBone.setStartLocation(newStartLocation);
                if (loop > 0) {
                    this._chain[loop - 1].setEndLocation(newStartLocation);
                }
            }
        }
        // ---------- Обратный проход от основания к эффектору -----------
        for (var loop = 0; loop < this._chain.length; ++loop) {
            var boneLength = this._chain[loop].getLength();
            var thisBone = this._chain[loop];
            if (loop !== 0) {
                var previousBone = this._chain[loop - 1];
                var thisBoneInnerToOuterUV = thisBone.getDirectionUV();
                var prevBoneInnerToOuterUV = previousBone.getDirectionUV();
                var clockwiseConstraintDegs = thisBone.getJoint().getClockwiseConstraintDegs();
                var antiClockwiseConstraintDegs = thisBone.getJoint().getAnticlockwiseConstraintDegs();
                var constrainedUV = void 0;
                if (thisBone.getJointConstraintCoordinateSystem() == _ConstraintCoordinateSystem__WEBPACK_IMPORTED_MODULE_5__["ConstraintCoordinateSystem"].LOCAL) {
                    constrainedUV = _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"].getConstrainedUV(thisBoneInnerToOuterUV, prevBoneInnerToOuterUV, clockwiseConstraintDegs, antiClockwiseConstraintDegs);
                }
                else {
                    constrainedUV = _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"].getConstrainedUV(thisBoneInnerToOuterUV, thisBone.getGlobalConstraintUV(), clockwiseConstraintDegs, antiClockwiseConstraintDegs);
                }
                var newEndLocation = thisBone.getStartLocation().plus(constrainedUV.times(boneLength));
                thisBone.setEndLocation(newEndLocation);
                if (loop < this._chain.length - 1) {
                    this._chain[loop + 1].setStartLocation(newEndLocation);
                }
            }
            else {
                if (this._fixedBaseMode) {
                    this._chain[0].setStartLocation(this._baseLocation);
                }
                else {
                    var boneZeroUV = this._chain[0].getDirectionUV();
                    var boneZeroEndLocation = this._chain[0].getEndLocation();
                    var newBoneZeroStartLocation = boneZeroEndLocation.minus(boneZeroUV.times(boneLength));
                    this._chain[0].setStartLocation(newBoneZeroStartLocation);
                }
                if (this._baseboneConstraintType == _BaseboneConstraintType2D__WEBPACK_IMPORTED_MODULE_6__["BaseboneConstraintType2D"].NONE) {
                    var thisBoneInnerToOuterUV = thisBone.getDirectionUV();
                    var newEndLocation = thisBone.getStartLocation().plus(thisBoneInnerToOuterUV.times(boneLength));
                    this._chain[0].setEndLocation(newEndLocation);
                    if (this._chain.length > 1) {
                        this._chain[1].setStartLocation(newEndLocation);
                    }
                }
                else {
                    var thisBoneInnerToOuterUV = thisBone.getDirectionUV();
                    var clockwiseConstraintDegs = thisBone.getJoint().getClockwiseConstraintDegs();
                    var antiClockwiseConstraintDegs = thisBone.getJoint().getAnticlockwiseConstraintDegs();
                    var constrainedUV = void 0;
                    if (this._baseboneConstraintType === _BaseboneConstraintType2D__WEBPACK_IMPORTED_MODULE_6__["BaseboneConstraintType2D"].LOCAL_ABSOLUTE) {
                        constrainedUV = _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"].getConstrainedUV(thisBoneInnerToOuterUV, this._baseboneRelativeConstraintUV, clockwiseConstraintDegs, antiClockwiseConstraintDegs);
                    }
                    else {
                        constrainedUV = _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"].getConstrainedUV(thisBoneInnerToOuterUV, this._baseboneConstraintUV, clockwiseConstraintDegs, antiClockwiseConstraintDegs);
                    }
                    var newEndLocation = this._chain[loop].getStartLocation().plus(constrainedUV.times(boneLength));
                    this._chain[loop].setEndLocation(newEndLocation);
                    if (loop < this._chain.length - 1) {
                        this._chain[loop + 1].setStartLocation(newEndLocation);
                    }
                }
            }
        }
        this._lastTargetLocation.set(target);
        var currentEffectorLocation = this._chain[this._chain.length - 1].getEndLocation();
        return _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"].distanceBetween(currentEffectorLocation, target);
    };
    FabrikChain2D.prototype.setEmbeddedTargetMode = function (value) { this._useEmbeddedTarget = value; };
    FabrikChain2D.prototype.cloneChainVector = function () {
        var numBones = this._chain.length;
        var clonedChain = [];
        for (var loop = 0; loop < numBones; ++loop) {
            var bone = new _FabrikBone2D__WEBPACK_IMPORTED_MODULE_0__["FabrikBone2D"]();
            bone.set(this._chain[loop]);
            clonedChain.push(bone);
        }
        return clonedChain;
    };
    FabrikChain2D.prototype.updateChainLength = function () {
        this._chainLength = 0.0;
        for (var _i = 0, _a = this._chain; _i < _a.length; _i++) {
            var aBone = _a[_i];
            this._chainLength += aBone.getLength();
        }
    };
    FabrikChain2D.prototype.updateEmbeddedTarget = function (newEmbeddedTarget) {
        if (this._useEmbeddedTarget) {
            this._embeddedTarget.set(newEmbeddedTarget);
        }
        else {
            throw new Error('This chain does not have embedded targets enabled - enable with setEmbeddedTargetMode(true).');
        }
    };
    FabrikChain2D.prototype.solveForEmbeddedTarget = function () {
        if (this._useEmbeddedTarget) {
            return this.solveForTarget(this._embeddedTarget);
        }
        else {
            throw new Error('This chain does not have embedded targets enabled - enable with setEmbeddedTargetMode(true).');
        }
    };
    FabrikChain2D.prototype.solveForTarget = function (newTarget) {
        if (this._lastTargetLocation.approximatelyEquals(newTarget, 0.001) && this._lastBaseLocation.approximatelyEquals(this._baseLocation, 0.001)) {
            return this._currentSolveDistance;
        }
        var startingDistance;
        var startingSolution = null;
        if (this._lastBaseLocation.approximatelyEquals(this._baseLocation, 0.001)) {
            startingDistance = _utils_Vec2f__WEBPACK_IMPORTED_MODULE_1__["Vec2f"].distanceBetween(this._chain[this._chain.length - 1].getEndLocation(), newTarget);
            startingSolution = this.cloneChainVector();
        }
        else {
            startingDistance = Number.MAX_VALUE;
        }
        var bestSolution = [];
        var bestSolveDistance = Number.MAX_VALUE;
        var lastPassSolveDistance = Number.MAX_VALUE;
        var solveDistance;
        for (var loop = 0; loop < this._maxIterationAttempts; ++loop) {
            solveDistance = this.solveIK(newTarget);
            if (solveDistance < bestSolveDistance) {
                bestSolveDistance = solveDistance;
                bestSolution = this.cloneChainVector();
                if (solveDistance <= this._solveDistanceThreshold) {
                    break;
                }
            }
            else {
                if (Math.abs(solveDistance - lastPassSolveDistance) < this._minIterationChange) {
                    break;
                }
            }
            lastPassSolveDistance = solveDistance;
        }
        if (bestSolveDistance < startingDistance) {
            this._currentSolveDistance = bestSolveDistance;
            this._chain = bestSolution;
        }
        else {
            this._currentSolveDistance = startingDistance;
            this._chain = startingSolution;
        }
        this._lastBaseLocation.set(this._baseLocation);
        this._lastTargetLocation.set(newTarget);
        return this._currentSolveDistance;
    };
    FabrikChain2D.prototype.getBaseboneRelativeConstraintUV = function () { return this._baseboneRelativeConstraintUV; };
    FabrikChain2D.prototype.setBaseboneRelativeConstraintUV = function (constraintUV) { this._baseboneRelativeConstraintUV.set(constraintUV); };
    FabrikChain2D.prototype.getMaxIterationAttempts = function () {
        return this._maxIterationAttempts;
    };
    FabrikChain2D.prototype.getMinIterationChange = function () {
        return this._minIterationChange;
    };
    FabrikChain2D.prototype.getSolveDistanceThreshold = function () {
        return this._solveDistanceThreshold;
    };
    return FabrikChain2D;
}());



/***/ }),

/***/ "./movikjs/main/FabrikChain3D.ts":
/*!***************************************!*\
  !*** ./movikjs/main/FabrikChain3D.ts ***!
  \***************************************/
/*! exports provided: FabrikChain3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabrikChain3D", function() { return FabrikChain3D; });
/* harmony import */ var _FabrikBone3D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FabrikBone3D */ "./movikjs/main/FabrikBone3D.ts");
/* harmony import */ var _FabrikJoint3D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FabrikJoint3D */ "./movikjs/main/FabrikJoint3D.ts");
/* harmony import */ var _JointType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JointType */ "./movikjs/main/JointType.ts");
/* harmony import */ var _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Vec3f */ "./movikjs/utils/Vec3f.ts");
/* harmony import */ var _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BaseboneConstraintType3D */ "./movikjs/main/BaseboneConstraintType3D.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Utils */ "./movikjs/utils/Utils.ts");
/* harmony import */ var _utils_Colour4f__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Colour4f */ "./movikjs/utils/Colour4f.ts");
/* harmony import */ var _utils_Mat3f__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/Mat3f */ "./movikjs/utils/Mat3f.ts");








/**
 * 3D цепь костей, решающая задачу инверсной кинематики с помощью алгоритма FABRIK.
 */
var FabrikChain3D = /** @class */ (function () {
    // ---------- Constructors ----------
    /**
     * Конструктор.
     *
     * Принимает три вариации параметров:
     *
     * Без параметров. Всем полям проставляются значения по умолчанию.
     *
     * Один параметр-строка.
     *
     * @param    source    Имя данной цепи.
     *
     * Конструктор копирования.
     *
     * @param    source    Цепь для копирования.
     */
    function FabrikChain3D(source) {
        var _this = this;
        // ---------- Private Properties ----------
        /**
         * Массив костей цепи.
         */
        this._chain = [];
        /**
         * Порог, достигнув которого мы считаем задачу инверсной кинематики решенной.
         * <p>
         * При решении задачи ИК, когда расстояние между текущим положением и желаемым положением становится меньше или равно
         * значению порога, мы прерываем дальнейшие итерации и считаем задачу решенной.
         * <p>
         * Значение по умолчанию 0.01.
         * <p>
         * Минимально допустимое значение - 0, но стоит помнить о погрешности вычисления и не задавать порог равным нулю, так
         * как это может привести к бесконечным бесполезным попыткам.
         * <p>
         * Хотя данное поле и самый важный критерий останова для ИК-алгоритма, оно работает в комбинации с
         * {@link #_maxIterationAttempts} и {@link _minIterationChange}. Эти вспомогательные свойства помогают пережить ситуации,
         * когда длины цепи не хватает для достижения цели или когда суставы цепи сильно ограничены.
         */
        this._solveDistanceThreshold = 0.01;
        /**
         * Максимальное количество итераций алгоритма, применяемых при решении задачи ИК.
         *
         * @default 20
         */
        this._maxIterationAttempts = 20;
        /**
         * Минимальное значения для дельты рассотояний между итерациями алгоритма.
         *
         * @default 0.01
         */
        this._minIterationChange = 0.01;
        /**
         * Начальная позиция первой кости в цепи.
         *
         * @default: Vec3f(0, 0)
         */
        this._fixedBaseLocation = new _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"]();
        /**
         * Зафиксирована ли начальная позиция цепи.
         * Если нет - то она может перемещаться.
         *
         * @default true
         */
        this._fixedBaseMode = true;
        /**
         * Тип сустава первой кости в цепи.
         */
        this._baseboneConstraintType = _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_4__["BaseboneConstraintType3D"].NONE;
        /**
         * Направление относительно которого мы ограничиваем первую кость цепи.
         */
        this._baseboneConstraintUV = new _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"]();
        this._baseboneRelativeConstraintUV = new _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"]();
        this._baseboneRelativeReferenceConstraintUV = new _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"]();
        /**
         * Последняя целевая позиция, относительно которой решалась задача ИК.
         *
         * @default Vec3f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
         */
        this._lastTargetLocation = new _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"](Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        /**
         * Предыдущая начальная позиция базовой (первой в цепи) кости.
         * <p>
         * Данное значение хранится для того, чтобы сравнивать изменилось ли
         * начальное положение базовой кости в процессе решения.
         *
         * @default Vec3f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
         */
        this._lastBaseLocation = new _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"](Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        /**
         * Текущее расстояние между эффектором(концом последней точки в цепи) и целевой позицией.
         */
        this._currentSolveDistance = Number.MAX_VALUE;
        /**
         * Номер цепи, к которой эта цепь подключена в FabrikStructure3D.
         * <p>
         * Если значение -1, значит данная цепь ни с чем не связана.
         *
         * @default -1
         */
        this._connectedChainNumber = -1;
        /**
         * Номер кости, с которой связана эта цепь, если она вообще связана с другой цепью.
         * <p>
         * Если значение -1, значит данная цепь ни с чем не связана.
         *
         * @default -1
         */
        this._connectedBoneNumber = -1;
        /**
         * Встроенное целевое расположение,которое можно использовать для решения ИК.
         * <p>
         * Встроенные целевые местоположения позволяют решать ИК структуры для нескольких целей (по одной на цепочку в структуре)
         * вместо того, чтобы все цепочки решались для одной и той же цели. Чтобы использовать встроенные цели, флаг _useEmbeddedTargets
         * должно быть true(что не является значением по умолчанию) - этот флаг можно установить с помощью вызова setEmbeddedTargetMode (true).
         *
         * @see {@link setEmbeddedTargetMode(boolean) }
         */
        this._embeddedTarget = new _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"]();
        /**
         * _useEmbeddedTarget    Следует ли использовать местоположение _embeddedTarget при решении этой цепочки.
         * <p>
         * Этот флаг можно переключить, вызвав setEmbeddedTargetMode (true) в цепочке.
         *
         * @default false
         * @see {@link setEmbeddedTargetMode(boolean) }
         */
        this._useEmbeddedTarget = false;
        /**
         * Возвращает относительный единичный вектор основной кости этой цепочки.
         *
         * @return
         */
        this.getBaseboneRelativeConstraintUV = function () { return _this._baseboneRelativeConstraintUV; };
        /**
         * Возвращает тип сустава базовой кости.
         *
         * @return
         */
        this.getBaseboneConstraintType = function () { return _this._baseboneConstraintType; };
        /**
         * Возвращает базовое расположение цепочки IK.
         * <p>
         * Независимо от того, сколько костей содержится в цепи, базовое местоположение всегда является начальным местоположением
         * первой кости в цепи.
         *
         * @return
         */
        this.getBaseLocation = function () { return _this._chain[0].getStartLocation(); };
        /**
         * Возвращает кость цепи по индексу.
         *
         * @param    boneNumber    Индекс кости.
         * @return                Кость.
         */
        this.getBone = function (boneNumber) { return _this._chain[boneNumber]; };
        /**
         * Возвращает длину цепи.
         *
         * @return
         */
        this.getChainLength = function () { return _this._chainLength; };
        /**
         * Возвращает индекс кости из другой цепи, к которой присоединена наша цепь.
         * <p>
         * Возвращает -1 если мы ни к кому не присоединены.
         *
         * @return
         */
        this.getConnectedBoneNumber = function () { return _this._connectedBoneNumber; };
        /**
         * Возвращает индекс цепи в структуре, к которой присоединена наша цепь.
         * <p>
         * Возвращает -1 если мы ни к кому не присоединены.
         *
         * @return
         */
        this.getConnectedChainNumber = function () { return _this._connectedChainNumber; };
        /**
         * Возврат внедренного целевого местоположения.
         *
         * @return
         */
        this.getEmbeddedTarget = function () { return _this._embeddedTarget; };
        /**
         * Возвращает цель последней попытки решения.
         * <p>
         * Целевое местоположение и местоположение эффектора не обязательно находятся в одном и том же месте.
         *
         * @return
         */
        this.getLastTargetLocation = function () { return _this._lastTargetLocation; };
        /**
         * Возвращает название этой ИК цепи.
         *
         * @return
         */
        this.getName = function () { return _this._name; };
        /**
         * Возвращает количество костей в цепи.
         *
         * @return
         */
        this.getNumBones = function () { return _this._chain.length; };
        this.getBaseboneRelativeReferenceConstraintUV = function () { return _this._baseboneRelativeReferenceConstraintUV; };
        if (!source) {
            return;
        }
        if (typeof source === 'string') {
            this._name = source;
        }
        else {
            this._chain = source.cloneIkChain();
            this._fixedBaseLocation.set(source.getBaseLocation());
            this._lastTargetLocation.set(source._lastTargetLocation);
            this._lastBaseLocation.set(source._lastBaseLocation);
            this._embeddedTarget.set(source._embeddedTarget);
            if (source._baseboneConstraintType != _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_4__["BaseboneConstraintType3D"].NONE) {
                this._baseboneConstraintUV.set(source._baseboneConstraintUV);
                this._baseboneRelativeConstraintUV.set(source._baseboneRelativeConstraintUV);
            }
            this._chainLength = source._chainLength;
            this._currentSolveDistance = source._currentSolveDistance;
            this._connectedChainNumber = source._connectedChainNumber;
            this._connectedBoneNumber = source._connectedBoneNumber;
            this._baseboneConstraintType = source._baseboneConstraintType;
            this._name = source._name;
            this._useEmbeddedTarget = source._useEmbeddedTarget;
        }
    }
    // ---------- Public Methods ------------
    /**
     * Добавляет кость в конец цепи.
     *
     * @param    bone    Кость.
     */
    FabrikChain3D.prototype.addBone = function (bone) {
        this._chain.push(bone);
        if (this._chain.length == 1) {
            this._fixedBaseLocation.set(bone.getStartLocation());
            this._baseboneConstraintUV = bone.getDirectionUV();
        }
        this.updateChainLength();
    };
    /***
     * Добавляет последовательную кость в конец этой цепи IK с учетом вектора направления и длины новой кости.
     * <p>
     * Добавленная кость не имеет каких-либо ограничений.
     * <p>
     * Этот метод можно использовать только тогда, когда цепь IK содержит базовую кость, так как без нее у нас нет
     * начального местоположения для этой кости (т. е. конечного местоположения предыдущей).
     * <p>
     * Если этот метод выполняется в цепочке, которая не содержит основной кости, то возбуждается ошибка.
     * <p>
     * Если вектор направления или длина равны нулю, то возбуждается ошибка.
     *
     * @param    directionUV    Первоначальное направление новой кости.
     * @param    length        Длина новой кости.
     * @param    colour        Цвет для отрисовки новой кости.
     * @param    name          Имя новой кости.
     */
    FabrikChain3D.prototype.addConsecutiveBone = function (directionUV, length, colour, name) {
        _utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].validateDirectionUV(directionUV);
        _utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].validateLength(length);
        if (!(this._chain.length === 0)) {
            var prevBoneEnd = this._chain[this._chain.length - 1].getEndLocation();
            this.addBone(new _FabrikBone3D__WEBPACK_IMPORTED_MODULE_0__["FabrikBone3D"](prevBoneEnd, directionUV.normalised(), length, colour, name));
        }
        else {
            throw new Error('You cannot add the basebone as a consecutive bone as it does not provide a start location. Use the addBone() method instead.');
        }
    };
    /**
     * Добавляет предварительно созданную последовательную кость к концу этой цепочки IK.
     * <p>
     * Этот метод можно использовать только тогда, когда цепь IK содержит базовую кость, так как без нее у нас нет
     * начального местоположения для этой кости (т. е. конечного местоположения предыдущей).
     * <p>
     * Если этот метод выполняется в цепочке, которая не содержит основной кости,
     * или кость, которую пытаются добавить имеет нулевую длину то возбуждается ошибка.
     *
     * @param    bone        Кость.
     */
    FabrikChain3D.prototype.addConsecutiveCreatedBone = function (bone) {
        var dir = bone.getDirectionUV();
        _utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].validateDirectionUV(dir);
        var len = bone.getLength();
        _utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].validateLength(len);
        if (!(this._chain.length === 0)) {
            var prevBoneEnd = this._chain[this._chain.length - 1].getEndLocation();
            bone.setStartLocation(prevBoneEnd);
            bone.setEndLocation(prevBoneEnd.plus(dir.times(len)));
            this.addBone(bone);
        }
        else {
            throw new Error('You cannot add the base bone to a chain using this method as it does not provide a start location.');
        }
    };
    /**
     * Добавляет последовательную шарнирную кость к концу этой цепи IK.
     * <p>
     * Тип шарнира может быть глобальным, ось вращения которого указана в мировом пространстве, или
     * локальным, ось вращения которого расположена относительно предыдущей кости в цепи.
     * <p>
     * Если этот метод выполняется в цепочке, которая не содержит основной кости, возникает ошибка.
     * Если направление кости или ось ограничения шарнира нули, возникает ошибка.
     * Если запрошенный тип соединения не является LOCAL_HINGE или GLOBAL_HINGE, возникает ошибка.
     *
     * @param    directionUV            Начальное направление новой кости.
     * @param    length                Длина новой кости.
     * @param    jointType            Тип сустава новой кости.
     * @param    hingeRotationAxis    Ось вращения шарнира.
     * @param    clockwiseDegs        Угол-ограничение по часовой стрелке в градусах.
     * @param    anticlockwiseDegs    Угол-ограничение против часовой стрелки в градусах.
     * @param    hingeReferenceAxis    Ось относительно которой ведется отсчет угла поворота шарнира.
     * @param    colour                Цвет новой кости.
     */
    FabrikChain3D.prototype.addConsecutiveHingedBone = function (directionUV, length, jointType, hingeRotationAxis, clockwiseDegs, anticlockwiseDegs, hingeReferenceAxis, colour) {
        if (clockwiseDegs === void 0) { clockwiseDegs = 180; }
        if (anticlockwiseDegs === void 0) { anticlockwiseDegs = 180; }
        if (hingeReferenceAxis === void 0) { hingeReferenceAxis = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].genPerpendicularVectorQuick(hingeRotationAxis); }
        if (colour === void 0) { colour = new _utils_Colour4f__WEBPACK_IMPORTED_MODULE_6__["Colour4f"](); }
        _utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].validateDirectionUV(directionUV);
        _utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].validateDirectionUV(hingeRotationAxis);
        _utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].validateLength(length);
        if (this._chain.length === 0) {
            throw new Error('You must add a basebone before adding a consectutive bone.');
        }
        directionUV.normalise();
        hingeRotationAxis.normalise();
        var prevBoneEnd = this._chain[this._chain.length - 1].getEndLocation();
        var bone = new _FabrikBone3D__WEBPACK_IMPORTED_MODULE_0__["FabrikBone3D"](prevBoneEnd, directionUV, length, colour);
        var joint = new _FabrikJoint3D__WEBPACK_IMPORTED_MODULE_1__["FabrikJoint3D"]();
        switch (jointType) {
            case _JointType__WEBPACK_IMPORTED_MODULE_2__["JointType"].GLOBAL_HINGE:
                joint.setHingeJoint(_JointType__WEBPACK_IMPORTED_MODULE_2__["JointType"].GLOBAL_HINGE, hingeRotationAxis, clockwiseDegs, anticlockwiseDegs, hingeReferenceAxis);
                break;
            case _JointType__WEBPACK_IMPORTED_MODULE_2__["JointType"].LOCAL_HINGE:
                joint.setHingeJoint(_JointType__WEBPACK_IMPORTED_MODULE_2__["JointType"].LOCAL_HINGE, hingeRotationAxis, clockwiseDegs, anticlockwiseDegs, hingeReferenceAxis);
                break;
            default:
                throw new Error('Hinge joint types may be only JointType.GLOBAL_HINGE or JointType.LOCAL_HINGE.');
        }
        bone.setJoint(joint);
        this.addBone(bone);
    };
    /**
     * Добавляет последовательный шаровой сустав, ограничивающий кость, к концу этой цепи IK.
     * <p>
     * Этот метод можно использовать только тогда, когда цепь IK содержит базовую кость, так как без нее у нас нет
     * начального местоположения для этой кости (т. е. конечного местоположения предыдущей).
     * <p>
     * Если этот метод выполняется в цепочке, которая не содержит основной кости,
     * или кость, которую пытаются добавить имеет нулевую длину то возбуждается ошибка.
     *
     * @param    boneDirectionUV                    Начальное направление единичного вектора новой кости.
     * @param    boneLength                        Длина новой кости.
     * @param    constraintAngleDegs                Угол ограничение.
     * @param    colour                            Цвет для отрисовки новой кости.
     */
    FabrikChain3D.prototype.addConsecutiveRotorConstrainedBone = function (boneDirectionUV, boneLength, constraintAngleDegs, colour) {
        if (constraintAngleDegs === void 0) { constraintAngleDegs = 180; }
        if (colour === void 0) { colour = new _utils_Colour4f__WEBPACK_IMPORTED_MODULE_6__["Colour4f"](); }
        _utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].validateDirectionUV(boneDirectionUV);
        _utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].validateLength(boneLength);
        if (this._chain.length === 0) {
            throw new Error('Add a basebone before attempting to add consectuive bones.');
        }
        var bone = new _FabrikBone3D__WEBPACK_IMPORTED_MODULE_0__["FabrikBone3D"](this._chain[this._chain.length - 1].getEndLocation(), boneDirectionUV.normalise(), boneLength, colour);
        bone.setBallJointConstraintDegs(constraintAngleDegs);
        this.addBone(bone);
    };
    /**
     * Возвращает ограничение направления основной кости.
     * <p>
     * Если базовая кость не ограничена, то возникает ошибка. Если вы хотите проверить, ограничена ли
     * базовая кость этой цепочки ИК вы можете использовать метод {@link #getBaseboneConstraintType()}.
     *
     * @return
     */
    FabrikChain3D.prototype.getBaseboneConstraintUV = function () {
        if (this._baseboneConstraintType != _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_4__["BaseboneConstraintType3D"].NONE) {
            return this._baseboneConstraintUV;
        }
        else {
            throw new Error('Cannot return the basebone constraint when the basebone constraint type is NONE.');
        }
    };
    /**
     * Возвращает массив костей цепи.
     *
     * @return
     */
    FabrikChain3D.prototype.getChain = function () {
        return this._chain;
    };
    /**
     * Возвращает эффектор.
     * <p>
     * Независимо от того, сколько костей содержится в цепи, эффектор - это всегда конец
     * последней кости в цепи.
     *
     * @return
     */
    FabrikChain3D.prototype.getEffectorLocation = function () {
        return this._chain[this._chain.length - 1].getEndLocation();
    };
    /**
     * Возвращает должна ли цепь использовать встроенное целевое положение.
     *
     * @return
     */
    FabrikChain3D.prototype.getEmbeddedTargetMode = function () {
        return this._useEmbeddedTarget;
    };
    /**
     * Удаляет кость из этой цепи IK по ее индексу в цепи.
     * <p>
     * Если номер кости, которую необходимо удалить, не существует в цепочке, то возникает ошибка.
     *
     * @param    boneNumber    Индекс кости в цепи.
     */
    FabrikChain3D.prototype.removeBone = function (boneNumber) {
        if (boneNumber < this._chain.length) {
            this._chain.splice(boneNumber, 1);
            this.updateChainLength();
        }
        else {
            throw new Error('Bone ' + boneNumber + ' does not exist to be removed from the chain. Bones are zero indexed.');
        }
    };
    FabrikChain3D.prototype._setBaseboneRelativeConstraintUV = function (constraintUV) {
        this._baseboneRelativeConstraintUV = constraintUV;
    };
    FabrikChain3D.prototype._setBaseboneRelativeReferenceConstraintUV = function (constraintUV) {
        this._baseboneRelativeReferenceConstraintUV = constraintUV;
    };
    /**
     * Устанавливает должна ли использоваться встроенная целевая позиция.
     *
     * @param    value
     */
    FabrikChain3D.prototype.setEmbeddedTargetMode = function (value) {
        this._useEmbeddedTarget = value;
    };
    FabrikChain3D.prototype.setRotorBaseboneConstraint = function (rotorType, constraintAxis, angleDegs) {
        if (this._chain.length === 0) {
            throw new Error('Chain must contain a basebone before we can specify the basebone constraint type.');
        }
        if (constraintAxis.length() <= 0.0) {
            throw new Error('Constraint axis cannot be zero.');
        }
        if (angleDegs < 0.0) {
            angleDegs = 0.0;
        }
        if (angleDegs > 180.0) {
            angleDegs = 180.0;
        }
        if (!(rotorType == _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_4__["BaseboneConstraintType3D"].GLOBAL_ROTOR || rotorType == _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_4__["BaseboneConstraintType3D"].LOCAL_ROTOR)) {
            throw new Error('The only valid rotor types for this method are GLOBAL_ROTOR and LOCAL_ROTOR.');
        }
        this._baseboneConstraintType = rotorType;
        this._baseboneConstraintUV = constraintAxis.normalised();
        this._baseboneRelativeConstraintUV.set(this._baseboneConstraintUV);
        this.getBone(0).getJoint().setAsBallJoint(angleDegs);
    };
    FabrikChain3D.prototype.setHingeBaseboneConstraint = function (hingeType, hingeRotationAxis, cwConstraintDegs, acwConstraintDegs, hingeReferenceAxis) {
        if (this._chain.length === 0) {
            throw new Error('Chain must contain a basebone before we can specify the basebone constraint type.');
        }
        if (hingeRotationAxis.length() <= 0.0) {
            throw new Error('Hinge rotation axis cannot be zero.');
        }
        if (hingeReferenceAxis.length() <= 0.0) {
            throw new Error('Hinge reference axis cannot be zero.');
        }
        if (!(_utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].perpendicular(hingeRotationAxis, hingeReferenceAxis))) {
            throw new Error('The hinge reference axis must be in the plane of the hinge rotation axis, that is, they must be perpendicular.');
        }
        if (!(hingeType == _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_4__["BaseboneConstraintType3D"].GLOBAL_HINGE || hingeType == _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_4__["BaseboneConstraintType3D"].LOCAL_HINGE)) {
            throw new Error('The only valid hinge types for this method are GLOBAL_HINGE and LOCAL_HINGE.');
        }
        this._baseboneConstraintType = hingeType;
        this._baseboneConstraintUV.set(hingeRotationAxis.normalised());
        var hinge = new _FabrikJoint3D__WEBPACK_IMPORTED_MODULE_1__["FabrikJoint3D"]();
        if (hingeType == _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_4__["BaseboneConstraintType3D"].GLOBAL_HINGE) {
            hinge.setHingeJoint(_JointType__WEBPACK_IMPORTED_MODULE_2__["JointType"].GLOBAL_HINGE, hingeRotationAxis, cwConstraintDegs, acwConstraintDegs, hingeReferenceAxis);
        }
        else {
            hinge.setHingeJoint(_JointType__WEBPACK_IMPORTED_MODULE_2__["JointType"].LOCAL_HINGE, hingeRotationAxis, cwConstraintDegs, acwConstraintDegs, hingeReferenceAxis);
        }
        this.getBone(0).setJoint(hinge);
    };
    FabrikChain3D.prototype.setBaseboneConstraintUV = function (constraintUV) {
        if (this._baseboneConstraintType == _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_4__["BaseboneConstraintType3D"].NONE) {
            throw new Error('Specify the basebone constraint type with setBaseboneConstraintTypeCannot specify a basebone constraint when the current constraint type is BaseboneConstraint.NONE.');
        }
        _utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].validateDirectionUV(constraintUV);
        constraintUV.normalise();
        this._baseboneConstraintUV.set(constraintUV);
    };
    FabrikChain3D.prototype.setBaseLocation = function (baseLocation) {
        this._fixedBaseLocation.set(baseLocation);
    };
    /**
     * Присоединяет цепь к кости из другой цепи.
     * <p>
     * Чтобы соединить эту цепь с другой цепью, обе цепи должны существовать в одной и той же структуре.
     * <p>
     * Если структура не содержит указанную цепь или кость, то возникает ошибка.
     *
     * @param    structure    Структура, в которой произойдёт соединение.
     * @param    chainNumber    Индекс цепи для присоединения.
     * @param    boneNumber    Индекс кости к которой мы присоединяемся.
     */
    FabrikChain3D.prototype.connectToStructure = function (structure, chainNumber, boneNumber) {
        var nu_chains = structure.getNumChains();
        if (chainNumber > nu_chains) {
            throw new Error('Structure does not contain a chain ' + chainNumber + ' - it has ' + nu_chains + ' chains.');
        }
        var numBones = structure.getChain(chainNumber).getNumBones();
        if (boneNumber > numBones) {
            throw new Error('Chain does not contain a bone ' + boneNumber + ' - it has ' + numBones + ' bones.');
        }
        this._connectedChainNumber = chainNumber;
        this._connectedBoneNumber = boneNumber;
    };
    FabrikChain3D.prototype.setFixedBaseMode = function (value) {
        if (!value && this._connectedChainNumber != -1) {
            throw new Error('This chain is connected to another chain so must remain in fixed base mode.');
        }
        if (this._baseboneConstraintType == _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_4__["BaseboneConstraintType3D"].GLOBAL_ROTOR && !value) {
            throw new Error('Cannot set a non-fixed base mode when the chain\'s constraint type is BaseboneConstraintType3D.GLOBAL_ABSOLUTE_ROTOR.');
        }
        this._fixedBaseMode = value;
    };
    FabrikChain3D.prototype.setMaxIterationAttempts = function (maxIterations) {
        if (maxIterations < 1) {
            throw new Error('The maximum number of attempts to solve this IK chain must be at least 1.');
        }
        this._maxIterationAttempts = maxIterations;
    };
    FabrikChain3D.prototype.setMinIterationChange = function (minIterationChange) {
        if (minIterationChange < 0.0) {
            throw new Error('The minimum iteration change value must be more than or equal to zero.');
        }
        this._minIterationChange = minIterationChange;
    };
    FabrikChain3D.prototype.setName = function (name) {
        this._name = name;
    };
    FabrikChain3D.prototype.setSolveDistanceThreshold = function (solveDistance) {
        if (solveDistance < 0.0) {
            throw new Error('The solve distance threshold must be greater than or equal to zero.');
        }
        this._solveDistanceThreshold = solveDistance;
    };
    /**
     * Set the colour of all bones in this chain to the specified colour.
     *
     * @param    colour    The colour to set all bones in this chain.
     */
    FabrikChain3D.prototype.setColour = function (colour) {
        for (var _i = 0, _a = this._chain; _i < _a.length; _i++) {
            var aBone = _a[_i];
            aBone.setColour(colour);
        }
    };
    FabrikChain3D.prototype.solveForEmbeddedTarget = function () {
        if (this._useEmbeddedTarget) {
            return this.solveForTarget(this._embeddedTarget);
        }
        else {
            throw new Error('This chain does not have embedded targets enabled - enable with setEmbeddedTargetMode(true).');
        }
    };
    FabrikChain3D.prototype.solveForTarget = function (newTarget) {
        if (this._lastTargetLocation.approximatelyEquals(newTarget, 0.00001) &&
            (!this._fixedBaseMode && this._lastBaseLocation.approximatelyEquals(this.getBaseLocation(), 0.00001)) &&
            (this._fixedBaseMode && this._fixedBaseLocation.approximatelyEquals(this.getBaseLocation(), 0.00001))) {
            return this._currentSolveDistance;
        }
        var bestSolution = [];
        var bestSolveDistance = Number.MAX_VALUE;
        var lastPassSolveDistance = Number.MAX_VALUE;
        var solveDistance;
        for (var loop = 0; loop < this._maxIterationAttempts; ++loop) {
            solveDistance = this.solveIK(newTarget);
            if (solveDistance < bestSolveDistance) {
                bestSolveDistance = solveDistance;
                bestSolution = this.cloneIkChain();
                if (solveDistance <= this._solveDistanceThreshold) {
                    break;
                }
            }
            else {
                if (Math.abs(solveDistance - lastPassSolveDistance) < this._minIterationChange) {
                    break;
                }
            }
            lastPassSolveDistance = solveDistance;
        }
        this._currentSolveDistance = bestSolveDistance;
        this._chain = bestSolution;
        this._lastBaseLocation.set(this.getBaseLocation());
        this._lastTargetLocation.set(newTarget);
        return this._currentSolveDistance;
    };
    // ---------- Private Methods ----------
    /**
     * Решает задачу ИК с помощью алгоритма FABRIK.
     * <p>
     * Если в цепи еще нет костей - возникнет ошибка.
     *
     * @param target    Целевое местоположение.
     * @return            Наименьшее расстояние между новым положением эффектора и целевым местоположением, которого удалось достичь.
     */
    FabrikChain3D.prototype.solveIK = function (target) {
        if (this._chain.length === 0) {
            throw new Error('It makes no sense to solve an IK chain with zero bones.');
        }
        // ---------- ПРЯМОЙ ПРОХОД: от эффектора к базовой кости -----------
        for (var loop = this._chain.length - 1; loop >= 0; --loop) {
            var thisBone = this._chain[loop];
            var thisBoneLength = thisBone.getLength();
            var thisBoneJoint = thisBone.getJoint();
            var thisBoneJointType = thisBone.getJointType();
            if (loop != this._chain.length - 1) {
                var outerBoneOuterToInnerUV = this._chain[loop + 1].getDirectionUV().negated();
                var thisBoneOuterToInnerUV = thisBone.getDirectionUV().negated();
                if (thisBoneJointType == _JointType__WEBPACK_IMPORTED_MODULE_2__["JointType"].BALL) {
                    var angleBetweenDegs = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].getAngleBetweenDegs(outerBoneOuterToInnerUV, thisBoneOuterToInnerUV);
                    var constraintAngleDegs = thisBoneJoint.getBallJointConstraintDegs();
                    if (angleBetweenDegs > constraintAngleDegs) {
                        thisBoneOuterToInnerUV = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].getAngleLimitedUnitVectorDegs(thisBoneOuterToInnerUV, outerBoneOuterToInnerUV, constraintAngleDegs);
                    }
                }
                else if (thisBoneJointType == _JointType__WEBPACK_IMPORTED_MODULE_2__["JointType"].GLOBAL_HINGE) {
                    thisBoneOuterToInnerUV = thisBoneOuterToInnerUV.projectOntoPlane(thisBoneJoint.getHingeRotationAxis());
                }
                else if (thisBoneJointType == _JointType__WEBPACK_IMPORTED_MODULE_2__["JointType"].LOCAL_HINGE) {
                    var m = void 0;
                    var relativeHingeRotationAxis = void 0;
                    if (loop > 0) {
                        m = _utils_Mat3f__WEBPACK_IMPORTED_MODULE_7__["Mat3f"].createRotationMatrix(this._chain[loop - 1].getDirectionUV());
                        relativeHingeRotationAxis = m.times(thisBoneJoint.getHingeRotationAxis()).normalise();
                    }
                    else {
                        relativeHingeRotationAxis = this._baseboneRelativeConstraintUV;
                    }
                    thisBoneOuterToInnerUV = thisBoneOuterToInnerUV.projectOntoPlane(relativeHingeRotationAxis);
                }
                var newStartLocation = thisBone.getEndLocation().plus(thisBoneOuterToInnerUV.times(thisBoneLength));
                thisBone.setStartLocation(newStartLocation);
                if (loop > 0) {
                    this._chain[loop - 1].setEndLocation(newStartLocation);
                }
            }
            else {
                thisBone.setEndLocation(target);
                var thisBoneOuterToInnerUV = thisBone.getDirectionUV().negated();
                console.log('target', target);
                console.log('thisBoneOuterToInnerUV', thisBoneOuterToInnerUV);
                switch (thisBoneJointType) {
                    case _JointType__WEBPACK_IMPORTED_MODULE_2__["JointType"].BALL:
                        break;
                    case _JointType__WEBPACK_IMPORTED_MODULE_2__["JointType"].GLOBAL_HINGE:
                        thisBoneOuterToInnerUV = thisBoneOuterToInnerUV.projectOntoPlane(thisBoneJoint.getHingeRotationAxis());
                        break;
                    case _JointType__WEBPACK_IMPORTED_MODULE_2__["JointType"].LOCAL_HINGE:
                        var m = _utils_Mat3f__WEBPACK_IMPORTED_MODULE_7__["Mat3f"].createRotationMatrix(this._chain[loop - 1].getDirectionUV());
                        var relativeHingeRotationAxis = m.times(thisBoneJoint.getHingeRotationAxis()).normalise();
                        thisBoneOuterToInnerUV = thisBoneOuterToInnerUV.projectOntoPlane(relativeHingeRotationAxis);
                        break;
                }
                var newStartLocation = target.plus(thisBoneOuterToInnerUV.times(thisBoneLength));
                thisBone.setStartLocation(newStartLocation);
                if (loop > 0) {
                    this._chain[loop - 1].setEndLocation(newStartLocation);
                }
            }
        }
        // ---------- Обратный проход -----------
        for (var loop = 0; loop < this._chain.length; ++loop) {
            var thisBone = this._chain[loop];
            var thisBoneLength = thisBone.getLength();
            if (loop != 0) {
                var thisBoneInnerToOuterUV = thisBone.getDirectionUV();
                var prevBoneInnerToOuterUV = this._chain[loop - 1].getDirectionUV();
                var thisBoneJoint = thisBone.getJoint();
                var jointType = thisBoneJoint.getJointType();
                if (jointType == _JointType__WEBPACK_IMPORTED_MODULE_2__["JointType"].BALL) {
                    var angleBetweenDegs = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].getAngleBetweenDegs(prevBoneInnerToOuterUV, thisBoneInnerToOuterUV);
                    var constraintAngleDegs = thisBoneJoint.getBallJointConstraintDegs();
                    if (angleBetweenDegs > constraintAngleDegs) {
                        thisBoneInnerToOuterUV = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].getAngleLimitedUnitVectorDegs(thisBoneInnerToOuterUV, prevBoneInnerToOuterUV, constraintAngleDegs);
                    }
                }
                else if (jointType == _JointType__WEBPACK_IMPORTED_MODULE_2__["JointType"].GLOBAL_HINGE) {
                    var hingeRotationAxis = thisBoneJoint.getHingeRotationAxis();
                    thisBoneInnerToOuterUV = thisBoneInnerToOuterUV.projectOntoPlane(hingeRotationAxis);
                    var cwConstraintDegs = -thisBoneJoint.getHingeClockwiseConstraintDegs();
                    var acwConstraintDegs = thisBoneJoint.getHingeAnticlockwiseConstraintDegs();
                    if (!(_utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].approximatelyEquals(cwConstraintDegs, -_FabrikJoint3D__WEBPACK_IMPORTED_MODULE_1__["FabrikJoint3D"].MAX_CONSTRAINT_ANGLE_DEGS, 0.001)) &&
                        !(_utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].approximatelyEquals(acwConstraintDegs, _FabrikJoint3D__WEBPACK_IMPORTED_MODULE_1__["FabrikJoint3D"].MAX_CONSTRAINT_ANGLE_DEGS, 0.001))) {
                        var hingeReferenceAxis = thisBoneJoint.getHingeReferenceAxis();
                        var signedAngleDegs = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].getSignedAngleBetweenDegs(hingeReferenceAxis, thisBoneInnerToOuterUV, hingeRotationAxis);
                        if (signedAngleDegs > acwConstraintDegs) {
                            thisBoneInnerToOuterUV = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].rotateAboutAxisDegs(hingeReferenceAxis, acwConstraintDegs, hingeRotationAxis).normalised();
                        }
                        else if (signedAngleDegs < cwConstraintDegs) {
                            thisBoneInnerToOuterUV = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].rotateAboutAxisDegs(hingeReferenceAxis, cwConstraintDegs, hingeRotationAxis).normalised();
                        }
                    }
                }
                else if (jointType == _JointType__WEBPACK_IMPORTED_MODULE_2__["JointType"].LOCAL_HINGE) {
                    var hingeRotationAxis = thisBoneJoint.getHingeRotationAxis();
                    var m = _utils_Mat3f__WEBPACK_IMPORTED_MODULE_7__["Mat3f"].createRotationMatrix(prevBoneInnerToOuterUV);
                    var relativeHingeRotationAxis = m.times(hingeRotationAxis).normalise();
                    thisBoneInnerToOuterUV = thisBoneInnerToOuterUV.projectOntoPlane(relativeHingeRotationAxis);
                    var cwConstraintDegs = -thisBoneJoint.getHingeClockwiseConstraintDegs();
                    var acwConstraintDegs = thisBoneJoint.getHingeAnticlockwiseConstraintDegs();
                    if (!(_utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].approximatelyEquals(cwConstraintDegs, -_FabrikJoint3D__WEBPACK_IMPORTED_MODULE_1__["FabrikJoint3D"].MAX_CONSTRAINT_ANGLE_DEGS, 0.001)) &&
                        !(_utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].approximatelyEquals(acwConstraintDegs, _FabrikJoint3D__WEBPACK_IMPORTED_MODULE_1__["FabrikJoint3D"].MAX_CONSTRAINT_ANGLE_DEGS, 0.001))) {
                        var relativeHingeReferenceAxis = m.times(thisBoneJoint.getHingeReferenceAxis()).normalise();
                        var signedAngleDegs = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].getSignedAngleBetweenDegs(relativeHingeReferenceAxis, thisBoneInnerToOuterUV, relativeHingeRotationAxis);
                        if (signedAngleDegs > acwConstraintDegs) {
                            thisBoneInnerToOuterUV = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].rotateAboutAxisDegs(relativeHingeReferenceAxis, acwConstraintDegs, relativeHingeRotationAxis).normalise();
                        }
                        else if (signedAngleDegs < cwConstraintDegs) {
                            thisBoneInnerToOuterUV = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].rotateAboutAxisDegs(relativeHingeReferenceAxis, cwConstraintDegs, relativeHingeRotationAxis).normalise();
                        }
                    }
                }
                var newEndLocation = thisBone.getStartLocation().plus(thisBoneInnerToOuterUV.times(thisBoneLength));
                thisBone.setEndLocation(newEndLocation);
                if (loop < this._chain.length - 1) {
                    this._chain[loop + 1].setStartLocation(newEndLocation);
                }
            }
            else {
                if (this._fixedBaseMode) {
                    thisBone.setStartLocation(this._fixedBaseLocation);
                }
                else {
                    thisBone.setStartLocation(thisBone.getEndLocation().minus(thisBone.getDirectionUV().times(thisBoneLength)));
                }
                if (this._baseboneConstraintType == _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_4__["BaseboneConstraintType3D"].NONE) {
                    var newEndLocation = thisBone.getStartLocation().plus(thisBone.getDirectionUV().times(thisBoneLength));
                    thisBone.setEndLocation(newEndLocation);
                    if (this._chain.length > 1) {
                        this._chain[1].setStartLocation(newEndLocation);
                    }
                }
                else {
                    if (this._baseboneConstraintType == _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_4__["BaseboneConstraintType3D"].GLOBAL_ROTOR) {
                        var thisBoneInnerToOuterUV = thisBone.getDirectionUV();
                        var angleBetweenDegs = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].getAngleBetweenDegs(this._baseboneConstraintUV, thisBoneInnerToOuterUV);
                        var constraintAngleDegs = thisBone.getBallJointConstraintDegs();
                        if (angleBetweenDegs > constraintAngleDegs) {
                            thisBoneInnerToOuterUV = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].getAngleLimitedUnitVectorDegs(thisBoneInnerToOuterUV, this._baseboneConstraintUV, constraintAngleDegs);
                        }
                        var newEndLocation = thisBone.getStartLocation().plus(thisBoneInnerToOuterUV.times(thisBoneLength));
                        thisBone.setEndLocation(newEndLocation);
                        if (this._chain.length > 1) {
                            this._chain[1].setStartLocation(newEndLocation);
                        }
                    }
                    else if (this._baseboneConstraintType == _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_4__["BaseboneConstraintType3D"].LOCAL_ROTOR) {
                        var thisBoneInnerToOuterUV = thisBone.getDirectionUV();
                        var angleBetweenDegs = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].getAngleBetweenDegs(this._baseboneRelativeConstraintUV, thisBoneInnerToOuterUV);
                        var constraintAngleDegs = thisBone.getBallJointConstraintDegs();
                        if (angleBetweenDegs > constraintAngleDegs) {
                            thisBoneInnerToOuterUV = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].getAngleLimitedUnitVectorDegs(thisBoneInnerToOuterUV, this._baseboneRelativeConstraintUV, constraintAngleDegs);
                        }
                        var newEndLocation = thisBone.getStartLocation().plus(thisBoneInnerToOuterUV.times(thisBoneLength));
                        thisBone.setEndLocation(newEndLocation);
                        if (this._chain.length > 1) {
                            this._chain[1].setStartLocation(newEndLocation);
                        }
                    }
                    else if (this._baseboneConstraintType == _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_4__["BaseboneConstraintType3D"].GLOBAL_HINGE) {
                        var thisJoint = thisBone.getJoint();
                        var hingeRotationAxis = thisJoint.getHingeRotationAxis();
                        var cwConstraintDegs = -thisJoint.getHingeClockwiseConstraintDegs();
                        var acwConstraintDegs = thisJoint.getHingeAnticlockwiseConstraintDegs();
                        var thisBoneInnerToOuterUV = thisBone.getDirectionUV().projectOntoPlane(hingeRotationAxis);
                        if (!(_utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].approximatelyEquals(cwConstraintDegs, -_FabrikJoint3D__WEBPACK_IMPORTED_MODULE_1__["FabrikJoint3D"].MAX_CONSTRAINT_ANGLE_DEGS, 0.01) &&
                            _utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].approximatelyEquals(acwConstraintDegs, _FabrikJoint3D__WEBPACK_IMPORTED_MODULE_1__["FabrikJoint3D"].MAX_CONSTRAINT_ANGLE_DEGS, 0.01))) {
                            var hingeReferenceAxis = thisJoint.getHingeReferenceAxis();
                            var signedAngleDegs = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].getSignedAngleBetweenDegs(hingeReferenceAxis, thisBoneInnerToOuterUV, hingeRotationAxis);
                            if (signedAngleDegs > acwConstraintDegs) {
                                thisBoneInnerToOuterUV = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].rotateAboutAxisDegs(hingeReferenceAxis, acwConstraintDegs, hingeRotationAxis).normalise();
                            }
                            else if (signedAngleDegs < cwConstraintDegs) {
                                thisBoneInnerToOuterUV = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].rotateAboutAxisDegs(hingeReferenceAxis, cwConstraintDegs, hingeRotationAxis).normalise();
                            }
                        }
                        var newEndLocation = thisBone.getStartLocation().plus(thisBoneInnerToOuterUV.times(thisBoneLength));
                        thisBone.setEndLocation(newEndLocation);
                        if (this._chain.length > 1) {
                            this._chain[1].setStartLocation(newEndLocation);
                        }
                    }
                    else if (this._baseboneConstraintType == _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_4__["BaseboneConstraintType3D"].LOCAL_HINGE) {
                        var thisJoint = thisBone.getJoint();
                        var hingeRotationAxis = this._baseboneRelativeConstraintUV;
                        var cwConstraintDegs = -thisJoint.getHingeClockwiseConstraintDegs();
                        var acwConstraintDegs = thisJoint.getHingeAnticlockwiseConstraintDegs();
                        var thisBoneInnerToOuterUV = thisBone.getDirectionUV().projectOntoPlane(hingeRotationAxis);
                        if (!(_utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].approximatelyEquals(cwConstraintDegs, -_FabrikJoint3D__WEBPACK_IMPORTED_MODULE_1__["FabrikJoint3D"].MAX_CONSTRAINT_ANGLE_DEGS, 0.01) &&
                            _utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].approximatelyEquals(acwConstraintDegs, _FabrikJoint3D__WEBPACK_IMPORTED_MODULE_1__["FabrikJoint3D"].MAX_CONSTRAINT_ANGLE_DEGS, 0.01))) {
                            var hingeReferenceAxis = this._baseboneRelativeReferenceConstraintUV;
                            var signedAngleDegs = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].getSignedAngleBetweenDegs(hingeReferenceAxis, thisBoneInnerToOuterUV, hingeRotationAxis);
                            if (signedAngleDegs > acwConstraintDegs) {
                                thisBoneInnerToOuterUV = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].rotateAboutAxisDegs(hingeReferenceAxis, acwConstraintDegs, hingeRotationAxis).normalise();
                            }
                            else if (signedAngleDegs < cwConstraintDegs) {
                                thisBoneInnerToOuterUV = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].rotateAboutAxisDegs(hingeReferenceAxis, cwConstraintDegs, hingeRotationAxis).normalise();
                            }
                        }
                        var newEndLocation = thisBone.getStartLocation().plus(thisBoneInnerToOuterUV.times(thisBoneLength));
                        thisBone.setEndLocation(newEndLocation);
                        if (this._chain.length > 1) {
                            this._chain[1].setStartLocation(newEndLocation);
                        }
                    }
                }
            }
        }
        this._lastTargetLocation.set(target);
        return _utils_Vec3f__WEBPACK_IMPORTED_MODULE_3__["Vec3f"].distanceBetween(this._chain[this._chain.length - 1].getEndLocation(), target);
    };
    FabrikChain3D.prototype.updateChainLength = function () {
        this._chainLength = 0.0;
        for (var _i = 0, _a = this._chain; _i < _a.length; _i++) {
            var aBone = _a[_i];
            this._chainLength += aBone.getLength();
        }
    };
    FabrikChain3D.prototype.updateEmbeddedTarget = function (newEmbeddedTarget) {
        if (this._useEmbeddedTarget) {
            this._embeddedTarget.set(newEmbeddedTarget);
        }
        else {
            throw new Error('This chain does not have embedded targets enabled - enable with setEmbeddedTargetMode(true).');
        }
    };
    FabrikChain3D.prototype.cloneIkChain = function () {
        var clonedChain = [];
        for (var _i = 0, _a = this._chain; _i < _a.length; _i++) {
            var aBone = _a[_i];
            var bone = new _FabrikBone3D__WEBPACK_IMPORTED_MODULE_0__["FabrikBone3D"]();
            bone.set(aBone);
            clonedChain.push(bone);
        }
        return clonedChain;
    };
    FabrikChain3D.prototype.getMaxIterationAttempts = function () {
        return this._maxIterationAttempts;
    };
    FabrikChain3D.prototype.getMinIterationChange = function () {
        return this._minIterationChange;
    };
    FabrikChain3D.prototype.getSolveDistanceThreshold = function () {
        return this._solveDistanceThreshold;
    };
    return FabrikChain3D;
}());



/***/ }),

/***/ "./movikjs/main/FabrikJoint2D.ts":
/*!***************************************!*\
  !*** ./movikjs/main/FabrikJoint2D.ts ***!
  \***************************************/
/*! exports provided: FabrikJoint2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabrikJoint2D", function() { return FabrikJoint2D; });
/* harmony import */ var _ConstraintCoordinateSystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConstraintCoordinateSystem */ "./movikjs/main/ConstraintCoordinateSystem.ts");

/**
 * Сустав, определяющий углы-ограничения между костями цепи.
 * <p>
 * FabrikJoint2D состоит из пары углов:
 * <ul><li>Угол-ограничение по часовой стрелке;</li>
 * <li>Угол-ограничение против часовой стрелки.</li></ul>
 * <p>
 * Они оба измеряются в градусах [0..180].
 * Значение по умолчанию для обоих углов - 180, что означает, что сустав не имеет ограничений.
 * Для установки собственных значений углов-ограничений можно воспользоваться конструктором, задать свойствам значения
 * непосредственно по ссылкам {@link #_clockwiseConstraintDegs} и {@link #_anticlockwiseConstraintDegs} или
 * воспользоваться методами-сеттерами {@link #setClockwiseConstraintDegs} and {@link #setAnticlockwiseConstraintDegs}.
 * Первый и третий метод наиболее предпочтительные, так как они осуществляют проверку задаваемых значений.
 * <p>
 * Каждая FabrikBone2D содержит в себе один FabrikJoint2D, который располагается в начале кости {@code mStartLocation}.
 * <p>
 * Сустав отделен от кости в самостоятельный класс в связи с тем, что существует несколько типов ограничений, что
 * делает функциональность сустава громоздкой и сложной для понимания внутри класса кости.
 */
var FabrikJoint2D = /** @class */ (function () {
    // ---------- Constructor ----------
    /**
     * Конструктор.
     * <p>
     * Принимает три параметра угол-ограничение по часовой стрелке, против часовой стрелки и систему координат.
     * Все параметры опциональны, в случае отсутствия принимают значения по умолчанию.
     *
     * @param clockwiseConstraintDegs		Угол-ограничение по часовой стрелке в градусах.
     * @param antiClockwiseConstraintDegs	Угол-ограничение против часовой стрелки в градусах.
     * @param constraintCoordSystem         Система координат.
     */
    function FabrikJoint2D(clockwiseConstraintDegs, antiClockwiseConstraintDegs, constraintCoordSystem) {
        var _this = this;
        /**
         * _clockwiseConstraintDegs	Угол в градусах, на который данный FabrikJoint2D может быть повернут по часовой стрелке
         * относительно предыдущей кости или мировой системы координат, в зависимости от выбранной системы координат.
         * <p>
         * Допустимые значения [0..180].
         *
         * @default 180.0
         */
        this._clockwiseConstraintDegs = FabrikJoint2D.MAX_2D_CONSTRAINT_ANGLE_DEGS;
        /**
         * mAntiClockwiseContraintDegs	Угол в градусах, на который данный FabrikJoint2D может быть повернут против часовой стрелки
         * относительно предыдущей кости или мировой системы координат, в зависимости от выбранной системы координат.
         * <p>
         * Допустимые значения [0..180].
         *
         * @default 180.0
         */
        this._anticlockwiseConstraintDegs = FabrikJoint2D.MAX_2D_CONSTRAINT_ANGLE_DEGS;
        /**
         * _constraintCoordinateSystem	Система координат, относительно которой задаются углы-ограничения.
         * <p>
         * Может принимать значения из перечисления {@link #ConstraintCoordinateSystem}
         * <p>
         * Значение по умолчанию - ConstraintCoordinateSystem.LOCAL.
         */
        this._constraintCoordinateSystem = _ConstraintCoordinateSystem__WEBPACK_IMPORTED_MODULE_0__["ConstraintCoordinateSystem"].LOCAL;
        /**
         * Возвращает угол-ограничение по часовой стрелке в градусах.
         *
         * @return	Угол-ограничение по часовой стрелке в градусах.
         */
        this.getClockwiseConstraintDegs = function () { return _this._clockwiseConstraintDegs; };
        /**
         * Возвращает угол-ограничение против часовой стрелки в градусах.
         *
         * @return	Угол-ограничение против часовой стрелки в градусах.
         */
        this.getAnticlockwiseConstraintDegs = function () { return _this._anticlockwiseConstraintDegs; };
        /**
         * Задаёт систему координат данного ограничения.
         *
         * @param	coordSystem	Система координат.
         */
        this.setConstraintCoordinateSystem = function (coordSystem) {
            _this._constraintCoordinateSystem = coordSystem;
        };
        /**
         * Возвращает систему координат данного ограничения.
         *
         * @return	Система координат.
         */
        this.getConstraintCoordinateSystem = function () {
            return _this._constraintCoordinateSystem;
        };
        switch (arguments.length) {
            case 0:
                return;
            case 3:
                this.setClockwiseConstraintDegs(clockwiseConstraintDegs);
                this.setAnticlockwiseConstraintDegs(antiClockwiseConstraintDegs);
                this._constraintCoordinateSystem = constraintCoordSystem;
                return;
            default:
                throw Error('Invalid FabrikJoint2D constructor params!');
        }
    }
    // ---------- Methods ----------
    /**
     * Копирует sourceJoint в данный сустав.
     *
     * @param sourceJoint   Сустав, значения которого будут скопированы.
     */
    FabrikJoint2D.prototype.set = function (sourceJoint) {
        this.setClockwiseConstraintDegs(sourceJoint._clockwiseConstraintDegs);
        this.setAnticlockwiseConstraintDegs(sourceJoint._anticlockwiseConstraintDegs);
        this._constraintCoordinateSystem = sourceJoint._constraintCoordinateSystem;
    };
    ;
    /**
     * Задаёт угол-ограничение по часовой стрелке в градусах.
     * <p>
     * Угол-ограничение может принимать значения от 0 (не предусматривает движения), до 180 (полностью подвижен).
     * @param	angleDegs	Угол-ограничение по часовой стрелке в градусах.
     */
    FabrikJoint2D.prototype.setClockwiseConstraintDegs = function (angleDegs) {
        if (angleDegs < FabrikJoint2D.MIN_2D_CONSTRAINT_ANGLE_DEGS) {
            this._clockwiseConstraintDegs = FabrikJoint2D.MIN_2D_CONSTRAINT_ANGLE_DEGS;
        }
        else if (angleDegs > FabrikJoint2D.MAX_2D_CONSTRAINT_ANGLE_DEGS) {
            this._clockwiseConstraintDegs = FabrikJoint2D.MAX_2D_CONSTRAINT_ANGLE_DEGS;
        }
        else {
            this._clockwiseConstraintDegs = angleDegs;
        }
    };
    ;
    /**
     * Задаёт угол-ограничение против часовой стрелки в градусах.
     * <p>
     * Угол-ограничение может принимать значения от 0 (не предусматривает движения), до 180 (полностью подвижен).
     * @param	angleDegs	Угол-ограничение против часовой стрелки в градусах.
     */
    FabrikJoint2D.prototype.setAnticlockwiseConstraintDegs = function (angleDegs) {
        if (angleDegs < FabrikJoint2D.MIN_2D_CONSTRAINT_ANGLE_DEGS) {
            this._anticlockwiseConstraintDegs = FabrikJoint2D.MIN_2D_CONSTRAINT_ANGLE_DEGS;
        }
        else if (angleDegs > FabrikJoint2D.MAX_2D_CONSTRAINT_ANGLE_DEGS) {
            this._anticlockwiseConstraintDegs = FabrikJoint2D.MAX_2D_CONSTRAINT_ANGLE_DEGS;
        }
        else {
            this._anticlockwiseConstraintDegs = angleDegs;
        }
    };
    ;
    /** Минимальный угол-ограничение для любого из направлений в градусах. Полностью обездвиживает кость. */
    FabrikJoint2D.MIN_2D_CONSTRAINT_ANGLE_DEGS = 0;
    /** Максимальный угол-ограничение для любого из направлений в градусах. Даёт кости полную свободу. */
    FabrikJoint2D.MAX_2D_CONSTRAINT_ANGLE_DEGS = 180;
    return FabrikJoint2D;
}());



/***/ }),

/***/ "./movikjs/main/FabrikJoint3D.ts":
/*!***************************************!*\
  !*** ./movikjs/main/FabrikJoint3D.ts ***!
  \***************************************/
/*! exports provided: FabrikJoint3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabrikJoint3D", function() { return FabrikJoint3D; });
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Utils */ "./movikjs/utils/Utils.ts");
/* harmony import */ var _JointType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JointType */ "./movikjs/main/JointType.ts");
/* harmony import */ var _utils_Vec3f__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Vec3f */ "./movikjs/utils/Vec3f.ts");



/**
 * Сустав, определяющий углы-ограничения между костями цепи.
 * <p>
 * Существует три типа суставов:
 * <ul>
 * <li>JointType.BALL - сустав будет вращаться на один и тот же угол во все стороны относительно предыдущей кости
 * в цепи или относительно мировой системы координат, в случае если это начальная кость цепи,</li>
 * <li>JointType.GLOBAL_HINGE - сустав, для которого заданы углы-ограничители относительно мировой системы координат
 * для выбранной оси по и против часовой стрелки,</li>
 * <li>JointType.LOCAL_HINGE - сустав, для которого заданы углы-ограничители относительно предыдущей кости
 * для выбранной оси по и против часовой стрелки.</li>
 * </ul>
 * Шаровой сустав может вращаться в любую сторону относительно положения предыдущей кости в цепи.
 * Угол-ограничитель в 180 градусов будет давать суставу полную свободу движения, а угол в 0
 * градусов не предусматривает движения совсем, делая текущую кость продолжением предыдущей.
 * <p>
 * Шарнирный сустав может вращаться по и против часовой стрелки вдоль каждой оси на допустимое число градусов [0..180].
 * Локальный шарнир ведет отсчет градусов относительно предыдущей кости в цепи,
 * а глобальный - относительно мировой системы координат.
 * <p>
 * Каждая FabrikBone3D имеет один FabrikJoint3D, который располагается в начальной точке кости {@code mStartLocation}.
 *
 */
var FabrikJoint3D = /** @class */ (function () {
    // ---------- Constructors ----------
    /**
     * Конструктор.
     * <p>
     * Принимает 2 возможных сочетания параметров:
     * <p>
     * Без параметров.
     * Все поля получают занчения по умолчанию.
     * Задать недефолтные значения можно через методы
     * {@link #setAsGlobalHinge(Vec3f, number, number, Vec3f)} и
     * {@link #setAsLocalHinge(Vec3f, number, number, Vec3f)} methods.
     * <p>
     * Конструктор копирования.
     * Создаёт глубокую копию сустава.
     *
     * @param source Сустав источник.
     */
    function FabrikJoint3D(source) {
        /**
         * Угол-ограничение в градусах, на который позволяет повернуться сустав (для шаровых суставов).
         * <p>
         * Допустимые значения  [0..180].
         *
         * @default 180.0
         */
        this._rotorConstraintDegs = FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS;
        /**
         * Угол в градусах, на который сустав позволяет повернуться по часовой стрелке
         * относительно выбранной оси и системы координат (для шарнирных суставов).
         * <p>
         * Допустимые значения  [0..180].
         *
         * @default 180.0
         * @see mHingeAxis
         */
        this._hingeClockwiseConstraintDegs = FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS;
        /**
         * Угол в градусах, на который сустав позволяет повернуться против часовой стрелки
         * относительно выбранной оси и системы координат (для шарнирных суставов).
         * <p>
         * Допустимые значения  [0..180].
         *
         * @default 180.0
         * @see mHingeAxis
         */
        this._hingeAnticlockwiseConstraintDegs = FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS;
        /** Ось вращения шарнирного сустава. */
        this._rotationAxisUV = new _utils_Vec3f__WEBPACK_IMPORTED_MODULE_2__["Vec3f"]();
        /** Опорная ось шарнирного сустава. */
        this._referenceAxisUV = new _utils_Vec3f__WEBPACK_IMPORTED_MODULE_2__["Vec3f"]();
        /**
         * Тип сустава.
         * <p>
         * Допустимые значения - JointType.BALL, JointType.GLOBAL_HINGE или JointType.LOCAL_HINGE.
         *
         * @default	JointType.BALL
         */
        this._jointType = _JointType__WEBPACK_IMPORTED_MODULE_1__["JointType"].BALL;
        if (source)
            this.set(source);
    }
    /**
     * Делает из данного сустава глубокую копию сустава-источника.
     *
     * @param	source	Сустав источник.
     */
    FabrikJoint3D.prototype.set = function (source) {
        this._jointType = source._jointType;
        this._rotorConstraintDegs = source._rotorConstraintDegs;
        this._hingeClockwiseConstraintDegs = source._hingeClockwiseConstraintDegs;
        this._hingeAnticlockwiseConstraintDegs = source._hingeAnticlockwiseConstraintDegs;
        this._rotationAxisUV.set(source._rotationAxisUV);
        this._referenceAxisUV.set(source._referenceAxisUV);
    };
    /**
     * Задаёт данному суставу шаровой тип.
     *
     * @param	constraintAngleDegs	Максимальный допустимый угол в градусах между костью сустава и предыдущей костью в цепи.
     */
    FabrikJoint3D.prototype.setAsBallJoint = function (constraintAngleDegs) {
        FabrikJoint3D._validateConstraintAngleDegs(constraintAngleDegs);
        this._rotorConstraintDegs = constraintAngleDegs;
        this._jointType = _JointType__WEBPACK_IMPORTED_MODULE_1__["JointType"].BALL;
    };
    /**
     * Задаёт данному суставу шарнирный тип.
     *
     * @param jointType						Тип сустава, допустимы и BALL, и GLOBAL_HINGE, и LOCAL_HINGE.
     * @param rotationAxis					Ось вращения шарнира.
     * @param clockwiseConstraintDegs		Угол ограничение по часовой стрелке относительно опорной оси.
     * @param anticlockwiseConstraintDegs	Угол ограничение против часовой стрелки относительно опорной оси.
     * @param referenceAxis					Опорная ось.
     */
    FabrikJoint3D.prototype.setHingeJoint = function (jointType, rotationAxis, clockwiseConstraintDegs, anticlockwiseConstraintDegs, referenceAxis) {
        // Убедимся, что ось вращения и опорная ось образуют плоскость (т. к. они могут быть перпендикулярны и их скалярное произведение равно 0)
        if (!_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].approximatelyEquals(_utils_Vec3f__WEBPACK_IMPORTED_MODULE_2__["Vec3f"].dotProduct(rotationAxis, referenceAxis), 0.0, 0.01)) {
            var angleDegs = _utils_Vec3f__WEBPACK_IMPORTED_MODULE_2__["Vec3f"].getAngleBetweenDegs(rotationAxis, referenceAxis);
            throw new Error('The reference axis must be in the plane of the hinge rotation axis - angle between them is currently: ' + angleDegs);
        }
        FabrikJoint3D._validateConstraintAngleDegs(clockwiseConstraintDegs);
        FabrikJoint3D._validateConstraintAngleDegs(anticlockwiseConstraintDegs);
        FabrikJoint3D._validateAxis(rotationAxis);
        FabrikJoint3D._validateAxis(referenceAxis);
        this._hingeClockwiseConstraintDegs = clockwiseConstraintDegs;
        this._hingeAnticlockwiseConstraintDegs = anticlockwiseConstraintDegs;
        this._jointType = jointType;
        this._rotationAxisUV.set(rotationAxis.normalised());
        this._referenceAxisUV.set(referenceAxis.normalised());
    };
    /**
     * Задаёт угол ограничение по часовой стрелке для шарнирного сустава.
     * <p>
     * Вызывает ошибки, если угол выходит за границы допустимых значений и
     * если тип сустава не шарнирный.
     *
     * @param    angleDegs    Угол ограничение по часовой стрелке в градусах.
     */
    FabrikJoint3D.prototype.setHingeJointClockwiseConstraintDegs = function (angleDegs) {
        FabrikJoint3D._validateConstraintAngleDegs(angleDegs);
        if (this._jointType !== _JointType__WEBPACK_IMPORTED_MODULE_1__["JointType"].BALL) {
            this._hingeClockwiseConstraintDegs = angleDegs;
        }
        else {
            throw new Error('Joint type is JointType.BALL - it does not have hinge constraint angles.');
        }
    };
    /**
     * Возвращает угол-ограничение по часовой стрелке для шарнирного сустава.
     * <p>
     * Вызывает ошибку, если тип сустава не шарнирный.
     *
     * @return Угол-ограничение по часовой стрелке в градусах.
     */
    FabrikJoint3D.prototype.getHingeClockwiseConstraintDegs = function () {
        if (this._jointType !== _JointType__WEBPACK_IMPORTED_MODULE_1__["JointType"].BALL) {
            return this._hingeClockwiseConstraintDegs;
        }
        else {
            throw new Error('Joint type is JointType.BALL - it does not have hinge constraint angles.');
        }
    };
    /**
     * Задаёт угол ограничение против часовой стрелки для шарнирного сустава.
     * <p>
     * Вызывает ошибки, если угол выходит за границы допустимых значений и
     * если тип сустава не шарнирный.
     *
     * @param    angleDegs    Угол ограничение против часовой стрелки в градусах.
     */
    FabrikJoint3D.prototype.setHingeJointAnticlockwiseConstraintDegs = function (angleDegs) {
        FabrikJoint3D._validateConstraintAngleDegs(angleDegs);
        if (this._jointType !== _JointType__WEBPACK_IMPORTED_MODULE_1__["JointType"].BALL) {
            this._hingeAnticlockwiseConstraintDegs = angleDegs;
        }
        else {
            throw new Error('Joint type is JointType.BALL - it does not have hinge constraint angles.');
        }
    };
    /**
     * Возвращает угол-ограничение против часовой стрелки для шарнирного сустава.
     * <p>
     * Вызывает ошибку, если тип сустава не шарнирный.
     *
     * @return Угол-ограничение против часовой стрелки в градусах.
     */
    FabrikJoint3D.prototype.getHingeAnticlockwiseConstraintDegs = function () {
        if (this._jointType !== _JointType__WEBPACK_IMPORTED_MODULE_1__["JointType"].BALL) {
            return this._hingeAnticlockwiseConstraintDegs;
        }
        else {
            throw new Error('Joint type is JointType.BALL - it does not have hinge constraint angles.');
        }
    };
    /**
     * Задаёт угол-ограничение для шарового сустава.
     * <p>
     * Вызывает ошибку, если тип сустава не шаровой или
     * угол выходит за границы допустимых значений.
     *
     * @param	angleDegs	Угол-ограничение в градусах.
     */
    FabrikJoint3D.prototype.setBallJointConstraintDegs = function (angleDegs) {
        FabrikJoint3D._validateConstraintAngleDegs(angleDegs);
        if (this._jointType === _JointType__WEBPACK_IMPORTED_MODULE_1__["JointType"].BALL) {
            this._rotorConstraintDegs = angleDegs;
        }
        else {
            throw new Error('This joint is of type: ' + this._jointType + ' - only joints of type JointType.BALL have a ball joint constraint angle.');
        }
    };
    /**
     * Возвращает угол ограничение шарового сустава.
     * <p>
     * Вызывает ошибку, если тип сустава не шаровой
     *
     * @return	Угол-ограничение в градусах.
     */
    FabrikJoint3D.prototype.getBallJointConstraintDegs = function () {
        if (this._jointType === _JointType__WEBPACK_IMPORTED_MODULE_1__["JointType"].BALL) {
            return this._rotorConstraintDegs;
        }
        else {
            throw new Error('This joint is not of type JointType.BALL - it does not have a ball joint constraint angle.');
        }
    };
    /**
     * Задаёт ось вращения шарнирного сустава как нормализованную версию исходной оси.
     * <p>
     * Вызывает ошибки, если переданная ось имеет нулевую длину и если тип сустава не шарнирный.
     *
     * @param axis	Ось вращения.
     */
    FabrikJoint3D.prototype.setHingeRotationAxis = function (axis) {
        FabrikJoint3D._validateAxis(axis);
        if (this._jointType !== _JointType__WEBPACK_IMPORTED_MODULE_1__["JointType"].BALL) {
            this._rotationAxisUV.set(axis.normalised());
        }
        else {
            throw new Error('Joint type is JointType.BALL - it does not have a hinge rotation axis.');
        }
    };
    /**
     * Возвращает опорную ось шарнирного сустава.
     * <p>
     * Если тип сустава не шарнирный, выбрасывается ошибка.
     *
     * @return	Опорная ось.
     */
    FabrikJoint3D.prototype.getHingeReferenceAxis = function () {
        if (this._jointType !== _JointType__WEBPACK_IMPORTED_MODULE_1__["JointType"].BALL) {
            return this._referenceAxisUV;
        }
        else {
            throw new Error('Joint type is JointType.BALL - it does not have a hinge reference axis.');
        }
    };
    /**
     * Задаёт опорную ось шарнирного сустава, относительно которой измеряется угол вращения сустава.
     * <p>
     * Вызывает ошибки, если переданная ось имеет нулевую длину и если тип сустава не шарнирный.
     *
     * @param referenceAxis	Опорная ось.
     */
    FabrikJoint3D.prototype.setHingeReferenceAxis = function (referenceAxis) {
        FabrikJoint3D._validateAxis(referenceAxis);
        if (this._jointType !== _JointType__WEBPACK_IMPORTED_MODULE_1__["JointType"].BALL) {
            this._referenceAxisUV.set(referenceAxis.normalised());
        }
        else {
            throw new Error('Joint type is JointType.BALL - it does not have a hinge reference axis.');
        }
    };
    /**
     * Возвращает ось вращения шарнирного сустава.
     * <p>
     * Если у сустава тип JointType.BALL (т.е. он не шарнирный) бросам ошибку.
     *
     * @return	Ось вращения шарнирного сустава.
     */
    FabrikJoint3D.prototype.getHingeRotationAxis = function () {
        if (this._jointType !== _JointType__WEBPACK_IMPORTED_MODULE_1__["JointType"].BALL) {
            return this._rotationAxisUV;
        }
        else {
            throw new Error('Joint type is JointType.BALL - it does not have a hinge rotation axis.');
        }
    };
    /**
     * Возвращает тип сустава.
     * <p>
     * Допустимые значения: JointType.BALL, JointType.GLOBAL_HINGE, JointType.LOCAL_HINGE.
     *
     * @return	Тип сустава.
     */
    FabrikJoint3D.prototype.getJointType = function () { return this._jointType; };
    // ---------- Private Methods ----------
    FabrikJoint3D._validateConstraintAngleDegs = function (angleDegs) {
        if (angleDegs < FabrikJoint3D.MIN_CONSTRAINT_ANGLE_DEGS || angleDegs > FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS) {
            throw new Error('Constraint angles must be within the range ' + FabrikJoint3D.MIN_CONSTRAINT_ANGLE_DEGS + ' to ' + FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS + ' inclusive.');
        }
    };
    FabrikJoint3D._validateAxis = function (axis) {
        if (axis.length() <= 0.0) {
            throw new Error('Provided axis is illegal - it has a magnitude of zero.');
        }
    };
    /** Минимальный угол-ограничение для любого из направлений в градусах. Полностью обездвиживает кость. */
    FabrikJoint3D.MIN_CONSTRAINT_ANGLE_DEGS = 0.0;
    /** Максимальный угол-ограничение для любого из направлений в градусах. Даёт кости полную свободу. */
    FabrikJoint3D.MAX_CONSTRAINT_ANGLE_DEGS = 180.0;
    return FabrikJoint3D;
}());



/***/ }),

/***/ "./movikjs/main/FabrikStructure2D.ts":
/*!*******************************************!*\
  !*** ./movikjs/main/FabrikStructure2D.ts ***!
  \*******************************************/
/*! exports provided: FabrikStructure2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabrikStructure2D", function() { return FabrikStructure2D; });
/* harmony import */ var _utils_Vec2f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Vec2f */ "./movikjs/utils/Vec2f.ts");
/* harmony import */ var _FabrikChain2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FabrikChain2D */ "./movikjs/main/FabrikChain2D.ts");
/* harmony import */ var _BoneConnectionPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoneConnectionPoint */ "./movikjs/main/BoneConnectionPoint.ts");
/* harmony import */ var _BaseboneConstraintType2D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseboneConstraintType2D */ "./movikjs/main/BaseboneConstraintType2D.ts");




/**
 * Набор 2D цепей.
 **/
var FabrikStructure2D = /** @class */ (function () {
    // --------- Public Methods ----------
    /** Конструктор.
     * Принимает два варианта значений:
     * Конструктор без параметров - задает всем полям значения по умолчанию.
     *
     * Один параметр. Задает имя структуры.
     *
     * @param name Имя структуры.
     * */
    function FabrikStructure2D(name) {
        if (name === void 0) { name = ''; }
        // ---------- Private Properties ----------
        /** Название структуры. */
        this._name = '';
        /** Список цепей. */
        this._chains = [];
        this._name = name;
    }
    FabrikStructure2D.prototype.setName = function (name) { this._name = name; };
    /**
     * Решает задачу ИК для всех цепей структуры.
     * <p>
     * Все цепи перемещаются к единой целевой позиции за исключением тех, для которых задан embeddedTargetMode.
     *
     * @param   newTargetLocation    Целевая позиция для всех эффекторов структуры.
     */
    FabrikStructure2D.prototype.solveForTarget = function (newTargetLocation) {
        var nu_chains = this._chains.length;
        var hostChainNumber;
        var thisChain;
        for (var loop = 0; loop < nu_chains; ++loop) {
            thisChain = this._chains[loop];
            hostChainNumber = thisChain.getConnectedChainNumber();
            var constraintType = thisChain.getBaseboneConstraintType();
            if (hostChainNumber !== -1 && constraintType !== _BaseboneConstraintType2D__WEBPACK_IMPORTED_MODULE_3__["BaseboneConstraintType2D"].GLOBAL_ABSOLUTE) {
                var hostBone = this._chains[hostChainNumber].getBone(this._chains[loop].getConnectedBoneNumber());
                if (thisChain.getBoneConnectionPoint() == _BoneConnectionPoint__WEBPACK_IMPORTED_MODULE_2__["BoneConnectionPoint"].START) {
                    thisChain.setBaseLocation(hostBone.getStartLocation());
                }
                else {
                    thisChain.setBaseLocation(hostBone.getEndLocation());
                }
                var hostBoneUV = hostBone.getDirectionUV();
                if (constraintType == _BaseboneConstraintType2D__WEBPACK_IMPORTED_MODULE_3__["BaseboneConstraintType2D"].LOCAL_RELATIVE) {
                    this._chains[loop].setBaseboneConstraintUV(hostBoneUV);
                }
                else if (constraintType == _BaseboneConstraintType2D__WEBPACK_IMPORTED_MODULE_3__["BaseboneConstraintType2D"].LOCAL_ABSOLUTE) {
                    var angleDegs = FabrikStructure2D.UP.getSignedAngleDegsTo(hostBoneUV);
                    var relativeConstraintUV = _utils_Vec2f__WEBPACK_IMPORTED_MODULE_0__["Vec2f"].rotateDegs(thisChain.getBaseboneConstraintUV(), angleDegs);
                    thisChain.setBaseboneRelativeConstraintUV(relativeConstraintUV);
                }
            }
            if (!thisChain.getEmbeddedTargetMode()) {
                thisChain.solveForTarget(newTargetLocation);
            }
            else {
                thisChain.solveForEmbeddedTarget();
            }
        }
    };
    FabrikStructure2D.prototype.addChain = function (chain) {
        this._chains.push(chain);
    };
    FabrikStructure2D.prototype.connectChain = function (chain, chainNumber, boneNumber, boneConnectionPoint, shouldCalcCoordinates) {
        chain.setBoneConnectionPoint(boneConnectionPoint);
        if (chainNumber >= this._chains.length) {
            throw new Error('Cannot connect to chain ' + chainNumber + ' - no such chain (remember that chains are zero indexed).');
        }
        if (boneNumber >= this._chains[chainNumber].getNumBones()) {
            throw new Error('Cannot connect to bone ' + boneNumber + ' of chain ' + chainNumber + ' - no such bone (remember that bones are zero indexed).');
        }
        var relativeChain = new _FabrikChain2D__WEBPACK_IMPORTED_MODULE_1__["FabrikChain2D"](chain);
        relativeChain.setConnectedChainNumber(chainNumber);
        relativeChain.setConnectedBoneNumber(boneNumber);
        var connectionPoint = chain.getBoneConnectionPoint();
        var connectionLocation;
        if (connectionPoint == _BoneConnectionPoint__WEBPACK_IMPORTED_MODULE_2__["BoneConnectionPoint"].START) {
            connectionLocation = this._chains[chainNumber].getBone(boneNumber).getStartLocation();
        }
        else {
            connectionLocation = this._chains[chainNumber].getBone(boneNumber).getEndLocation();
        }
        relativeChain.setBaseLocation(connectionLocation);
        relativeChain.setFixedBaseMode(true);
        if (shouldCalcCoordinates) {
            for (var loop = 0; loop < chain.getNumBones(); ++loop) {
                var origStart = relativeChain.getBone(loop).getStartLocation();
                var origEnd = relativeChain.getBone(loop).getEndLocation();
                var translatedStart = origStart.plus(connectionLocation);
                var translatedEnd = origEnd.plus(connectionLocation);
                relativeChain.getBone(loop).setStartLocation(translatedStart);
                relativeChain.getBone(loop).setEndLocation(translatedEnd);
            }
        }
        this.addChain(relativeChain);
    };
    FabrikStructure2D.prototype.getNumChains = function () { return this._chains.length; };
    FabrikStructure2D.prototype.getChain = function (chainNumber) { return this._chains[chainNumber]; };
    FabrikStructure2D.prototype.getName = function () {
        return this._name;
    };
    FabrikStructure2D.UP = new _utils_Vec2f__WEBPACK_IMPORTED_MODULE_0__["Vec2f"](0.0, 1.0);
    return FabrikStructure2D;
}());



/***/ }),

/***/ "./movikjs/main/FabrikStructure3D.ts":
/*!*******************************************!*\
  !*** ./movikjs/main/FabrikStructure3D.ts ***!
  \*******************************************/
/*! exports provided: FabrikStructure3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabrikStructure3D", function() { return FabrikStructure3D; });
/* harmony import */ var _FabrikChain3D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FabrikChain3D */ "./movikjs/main/FabrikChain3D.ts");
/* harmony import */ var _BoneConnectionPoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoneConnectionPoint */ "./movikjs/main/BoneConnectionPoint.ts");
/* harmony import */ var _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseboneConstraintType3D */ "./movikjs/main/BaseboneConstraintType3D.ts");
/* harmony import */ var _utils_Mat3f__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Mat3f */ "./movikjs/utils/Mat3f.ts");




/**
 * Набор 3D цепей.
 **/
var FabrikStructure3D = /** @class */ (function () {
    // --------- Public Methods ----------
    /**
     * Конструктор.
     * Принимает два варианта значений:
     *
     * Конструктор без параметров - задает всем полям значения по умолчанию.
     *
     * Один параметр. Задает имя структуры.
     * @param name Имя структуры.
     * */
    function FabrikStructure3D(name) {
        if (name === void 0) { name = ''; }
        // ---------- Private Properties ----------
        /** Название структуры. */
        this._name = '';
        /** Список цепей. */
        this._chains = [];
        this._name = name;
    }
    /**
     * Решает задачу ИК для всех цепей структуры.
     * <p>
     * Все цепи перемещаются к единой целевой позиции за исключением тех, для которых задан embeddedTargetMode.
     *
     * @param   newTargetLocation    Целевая позиция для всех эффекторов структуры.
     */
    FabrikStructure3D.prototype.solveForTarget = function (newTargetLocation) {
        var nu_chains = this._chains.length;
        var connectedChainNumber;
        for (var loop = 0; loop < nu_chains; ++loop) {
            var thisChain = this._chains[loop];
            connectedChainNumber = thisChain.getConnectedChainNumber();
            if (connectedChainNumber === -1) {
                if (!thisChain.getEmbeddedTargetMode()) {
                    thisChain.solveForTarget(newTargetLocation);
                }
                else {
                    thisChain.solveForEmbeddedTarget();
                }
            }
            else {
                var hostChain = this._chains[connectedChainNumber];
                var hostBone = hostChain.getBone(thisChain.getConnectedBoneNumber());
                if (hostBone.getBoneConnectionPoint() == _BoneConnectionPoint__WEBPACK_IMPORTED_MODULE_1__["BoneConnectionPoint"].START) {
                    thisChain.setBaseLocation(hostBone.getStartLocation());
                }
                else {
                    thisChain.setBaseLocation(hostBone.getEndLocation());
                }
                var constraintType = thisChain.getBaseboneConstraintType();
                switch (constraintType) {
                    case _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_2__["BaseboneConstraintType3D"].NONE:
                    case _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_2__["BaseboneConstraintType3D"].GLOBAL_ROTOR:
                    case _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_2__["BaseboneConstraintType3D"].GLOBAL_HINGE:
                        break;
                    case _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_2__["BaseboneConstraintType3D"].LOCAL_ROTOR:
                    case _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_2__["BaseboneConstraintType3D"].LOCAL_HINGE: {
                        var connectionBoneMatrix = _utils_Mat3f__WEBPACK_IMPORTED_MODULE_3__["Mat3f"].createRotationMatrix(hostBone.getDirectionUV());
                        var relativeBaseboneConstraintUV = connectionBoneMatrix.times(thisChain.getBaseboneConstraintUV()).normalised();
                        thisChain._setBaseboneRelativeConstraintUV(relativeBaseboneConstraintUV);
                        if (constraintType == _BaseboneConstraintType3D__WEBPACK_IMPORTED_MODULE_2__["BaseboneConstraintType3D"].LOCAL_HINGE) {
                            thisChain._setBaseboneRelativeReferenceConstraintUV(connectionBoneMatrix.times(thisChain.getBone(0).getJoint().getHingeReferenceAxis()));
                        }
                        break;
                    }
                }
                if (!thisChain.getEmbeddedTargetMode()) {
                    thisChain.solveForTarget(newTargetLocation);
                }
                else {
                    thisChain.solveForEmbeddedTarget();
                }
            }
        }
    };
    FabrikStructure3D.prototype.addChain = function (chain) {
        this._chains.push(chain);
    };
    FabrikStructure3D.prototype.removeChain = function (chainIndex) {
        this._chains.splice(chainIndex, 1);
    };
    FabrikStructure3D.prototype.connectChain = function (newChain, existingChainNumber, existingBoneNumber, boneConnectionPoint, shouldCalcCoordinates) {
        if (existingChainNumber > this._chains.length) {
            throw new Error('Cannot connect to chain ' + existingChainNumber + ' - no such chain (remember that chains are zero indexed).');
        }
        if (existingBoneNumber > this._chains[existingChainNumber].getNumBones()) {
            throw new Error('Cannot connect to bone ' + existingBoneNumber + ' of chain ' + existingChainNumber + ' - no such bone (remember that bones are zero indexed).');
        }
        var relativeChain = new _FabrikChain3D__WEBPACK_IMPORTED_MODULE_0__["FabrikChain3D"](newChain);
        relativeChain.connectToStructure(this, existingChainNumber, existingBoneNumber);
        this.getChain(existingChainNumber).getBone(existingBoneNumber).setBoneConnectionPoint(boneConnectionPoint);
        var connectionLocation;
        if (boneConnectionPoint == _BoneConnectionPoint__WEBPACK_IMPORTED_MODULE_1__["BoneConnectionPoint"].START) {
            connectionLocation = this._chains[existingChainNumber].getBone(existingBoneNumber).getStartLocation();
        }
        else {
            connectionLocation = this._chains[existingChainNumber].getBone(existingBoneNumber).getEndLocation();
        }
        relativeChain.setBaseLocation(connectionLocation);
        relativeChain.setFixedBaseMode(true);
        if (shouldCalcCoordinates) {
            for (var loop = 0; loop < relativeChain.getNumBones(); ++loop) {
                var origStart = relativeChain.getBone(loop).getStartLocation();
                var origEnd = relativeChain.getBone(loop).getEndLocation();
                var translatedStart = origStart.plus(connectionLocation);
                var translatedEnd = origEnd.plus(connectionLocation);
                relativeChain.getBone(loop).setStartLocation(translatedStart);
                relativeChain.getBone(loop).setEndLocation(translatedEnd);
            }
        }
        this.addChain(relativeChain);
    };
    FabrikStructure3D.prototype.getNumChains = function () {
        return this._chains.length;
    };
    FabrikStructure3D.prototype.getChain = function (chainNumber) {
        return this._chains[chainNumber];
    };
    /**
     * Задаёт имя структуре.
     *
     * @param    name    Желаемое имя.
     */
    FabrikStructure3D.prototype.setName = function (name) {
        this._name = name;
    };
    /**
     * Возвращает имя структуры.
     *
     * @return
     */
    FabrikStructure3D.prototype.getName = function () {
        return this._name;
    };
    return FabrikStructure3D;
}());



/***/ }),

/***/ "./movikjs/main/JointType.ts":
/*!***********************************!*\
  !*** ./movikjs/main/JointType.ts ***!
  \***********************************/
/*! exports provided: JointType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JointType", function() { return JointType; });
/**
 * Тип сустава.
 *
 * <ul><li><strong>JointType.BALL</strong> - тип сустава, имеющий один угол-ограничение,
 * на который он может поворачиваться во всех направлениях. Если угол-ограничитель равен 180 -
 * сустав может быть повернут куда угодно, в противном случае, если угол-ограничитель равен 0 -
 * сустав не может двигаться вовсе.</li>
 * <li><strong>JointType.GLOBAL_HINGE</strong> - тип сустава, при котором ограничения задаются
 * на вращение в определенном направлении, относительно мировой системы координат. По выбранной оси
 * задаётся 2 значения - по и против часовой стрелки - на которые сустав позволяет поворачиваться.
 * Все значения указываются в пределах от 0 до 180 градусов.</li>
 * <li><strong>JointType.LOCAL_HINGE</strong> - тип сустава, при котором ограничения задаются
 * а вращение в определенном направлении, относительно предыдущей кости. По выбранной оси
 * задаётся 2 значения - по и против часовой стрелки - на которые сустав позволяет поворачиваться.
 * Все значения указываются в пределах от 0 до 180 градусов.</li>
 * </ul>
 */
var JointType;
(function (JointType) {
    JointType[JointType["BALL"] = 0] = "BALL";
    JointType[JointType["GLOBAL_HINGE"] = 1] = "GLOBAL_HINGE";
    JointType[JointType["LOCAL_HINGE"] = 2] = "LOCAL_HINGE";
})(JointType || (JointType = {}));


/***/ }),

/***/ "./movikjs/utils/Colour4f.ts":
/*!***********************************!*\
  !*** ./movikjs/utils/Colour4f.ts ***!
  \***********************************/
/*! exports provided: Colour4f */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colour4f", function() { return Colour4f; });
/**
 * Цвет в формате RGBA.
 * <p>
 * Представлен четырьмя r, g, b, a свойствами типа Number.
 * Задать значения данных свойств можно присваиванием напрямую, через конструктор или
 * через функции сеттеры.
 * Допустимые значения для каждой переменной - число [0..1].
 * Использование значений вне этого диапазона может привести к неопределенному поведению.
 */
var Colour4f = /** @class */ (function () {
    // ---------- Constructor ----------
    /**
     * Конструктор.
     * <p>
     * Принимает один из двух возможных сочетаний параметров:<ul>
     * <li>
     *     Без параметров - проставляет значения по умолчанию всем полям.
     * </li>
     * <li>
     *     Принимает массив из 4 значений для компонент по порядку: [red, green, blue, alpha].
     *
     *     @param source {number[]} Значения компонент цвета.
     * </li>
     * </ul>
     *
     * Все значения должны быть в пределах [0..1].
     */
    function Colour4f(source) {
        var _this = this;
        /** Red компонента. */
        this.r = 1;
        /** Green компонента. */
        this.g = 1;
        /** Blue компонента. */
        this.b = 1;
        /** Alpha компонента (компонента непрозрачности).
         *  */
        this.a = 1;
        /**
         * Возвращает массив компонент данного цвета в порядке RGBA.
         *
         * @return	Данный цвет в виде числового массива.
         */
        this.toArray = function () { return [_this.r, _this.g, _this.b, _this.a]; };
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                if (source instanceof Array && source.length == 4) {
                    this.r = Colour4f._clamp(source[0]);
                    this.g = Colour4f._clamp(source[1]);
                    this.b = Colour4f._clamp(source[2]);
                    this.a = Colour4f._clamp(source[3]);
                }
                else {
                    throw new Error('Colour source array size must be precisely 4 elements.');
                }
                break;
            default:
                throw new Error('Colour constructor was invoked incorrectly.');
        }
    }
    // ---------- Public Methods ----------
    /**
     * Задёт значения компонент.
     * <p>
     * Если значения не подходят по диапазону, то они заменяются на граничные.
     *
     * @param   source 	Массив из 4 значений для компонент по порядку: [red, green, blue, alpha].
     */
    Colour4f.prototype.set = function (source) {
        this.r = Colour4f._clamp(source[0]);
        this.g = Colour4f._clamp(source[1]);
        this.b = Colour4f._clamp(source[2]);
        this.a = Colour4f._clamp(source[3]);
    };
    ;
    /**
     * Добавляет заданные значения к RGB компонентам и возвращает изменненный цвет для формирования цепочки.
     * <p>
     * Если при добавленни значений происходит выход за границы диапазона,
     * то результат заменяется на ближайшее граничное.
     *
     * @param   red		Red компонента для добавления.
     * @param   green	Green компонента для добавления.
     * @param   blue	Blue компонента для добавления.
     * @return			This модифицированный цвет.
     */
    Colour4f.prototype.addRGB = function (red, green, blue) {
        this.r = Colour4f._clamp(this.r + red);
        this.g = Colour4f._clamp(this.g + green);
        this.b = Colour4f._clamp(this.b + blue);
        return this;
    };
    ;
    /**
     * Вычитает заданные значения из RGB компонент и возвращает изменненный цвет для формирования цепочки.
     * <p>
     * Если при вычитании значений происходит выход за границы диапазона,
     * то результат заменяется на ближайшее граничное.
     *
     * @param   red		Red компонента для вычитания.
     * @param   green	Green компонента для вычитания.
     * @param   blue	Blue компонента для вычитания.
     * @return			This модифицированный цвет.
     */
    Colour4f.prototype.subtractRGB = function (red, green, blue) {
        this.r = Colour4f._clamp(this.r - red);
        this.g = Colour4f._clamp(this.g - green);
        this.b = Colour4f._clamp(this.b - blue);
        return this;
    };
    ;
    /**
     * Осветляет RGB компоненты данного цвета на заданное количество единиц.
     * <p>
     * Результирующий цвет приводится к диапазону [0..1] и возвращается для создания цепочки.
     *
     * @param	amount	Значение, которое необходимо прибавить к RGB компонентам текущего цвета.
     * @return			Текущий цвет после модицикации.
     */
    Colour4f.prototype.lighten = function (amount) {
        return this.addRGB(amount, amount, amount);
    };
    /**
     * Затемняет RGB компоненты данного цвета на заданное количество единиц.
     * <p>
     * Результирующий цвет приводится к диапазону [0..1] и возвращается для создания цепочки.
     *
     * @param	amount	Значение, которое необходимо отнять от RGB компонент текущего цвета.
     * @return			Текущий цвет после модицикации.
     */
    Colour4f.prototype.darken = function (amount) {
        return this.subtractRGB(amount, amount, amount);
    };
    // ---------- Private Methods ----------
    Colour4f._clamp = function (componentValue) {
        if (componentValue > Colour4f.MAX_COMPONENT_VALUE) {
            return Colour4f.MAX_COMPONENT_VALUE;
        }
        else if (componentValue < Colour4f.MIN_COMPONENT_VALUE) {
            return Colour4f.MIN_COMPONENT_VALUE;
        }
        else {
            return componentValue;
        }
    };
    // ---------- Properties ----------
    /** Минимально допустимое значение для компоненты цвета. */
    Colour4f.MIN_COMPONENT_VALUE = 0;
    /** Максимально допустимое значение для компоненты цвета. */
    Colour4f.MAX_COMPONENT_VALUE = 1;
    return Colour4f;
}());



/***/ }),

/***/ "./movikjs/utils/Mat3f.ts":
/*!********************************!*\
  !*** ./movikjs/utils/Mat3f.ts ***!
  \********************************/
/*! exports provided: Mat3f */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mat3f", function() { return Mat3f; });
/* harmony import */ var _Vec3f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec3f */ "./movikjs/utils/Vec3f.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./movikjs/utils/Utils.ts");


/**
 * Числовая матрица 3x3.
 * <p>
 * Элементы данной матрицы:
 * m00  m10  m20
 * m01	m11  m21
 * m02	m12  m22
 * <p>
 * Основной элемент матрицы - столбец.
 *
 */
var Mat3f = /** @class */ (function () {
    /**
     * Конструктор.
     * Принимает 9 параметров или ноль.
     *
     * @param	m00	Первый компонент по оси X.
     * @param	m01	Второй компонент по оси X.
     * @param	m02	Третий компонент по оси X.
     * @param	m10	Первый компонент по оси Y.
     * @param	m11	Второй компонент по оси Y.
     * @param	m12	Третий компонент по оси Y.
     * @param	m20	Первый компонент по оси Z.
     * @param	m21	Второй компонент по оси Z.
     * @param	m22	Третий компонент по оси Z.
     */
    function Mat3f(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        var _this = this;
        // Первый вектор-столбец - положительно направление оси X.
        this.m00 = 0;
        this.m01 = 0;
        this.m02 = 0;
        // Второй вектор-столбец - положительно направление оси Y.
        this.m10 = 0;
        this.m11 = 0;
        this.m12 = 0;
        // Третий вектор-столбец - положительно направление оси Z.
        this.m20 = 0;
        this.m21 = 0;
        this.m22 = 0;
        /**
         * Поворачивает эту матрицу на угол-параметр относительно оси-параметра.
         * Не модифицирует исходную матрицу.
         *
         *  @param	angleDegs	Угол в градусах.
         *  @param	localAxis	Ось.
         *  @return
         *  */
        this.rotateDegs = function (angleDegs, localAxis) { return _this.rotateRads(localAxis, angleDegs * _Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].DEGS_TO_RADS); };
        /**
         * Возвращает значения матрицы по оси X.
         *
         * @return
         **/
        this.getXBasis = function () { return new _Vec3f__WEBPACK_IMPORTED_MODULE_0__["Vec3f"](_this.m00, _this.m01, _this.m02); };
        /**
         * Возвращает значения матрицы по оси Y.
         *
         * @return
         **/
        this.getYBasis = function () { return new _Vec3f__WEBPACK_IMPORTED_MODULE_0__["Vec3f"](_this.m10, _this.m11, _this.m12); };
        /**
         * Возвращает значения матрицы по оси Z.
         *
         * @return
         **/
        this.getZBasis = function () { return new _Vec3f__WEBPACK_IMPORTED_MODULE_0__["Vec3f"](_this.m20, _this.m21, _this.m22); };
        /**
         * Возвращает матрицу в виде массива из девяти чисел.
         *
         * @return	Матрица как массив из 9 чисел.
         */
        this.toArray = function () { return [_this.m00, _this.m01, _this.m02, _this.m10, _this.m11, _this.m12, _this.m20, _this.m21, _this.m22]; };
        switch (arguments.length) {
            case 0:
                return;
            case 9:
                this.m00 = m00;
                this.m01 = m01;
                this.m02 = m02;
                this.m10 = m10;
                this.m11 = m11;
                this.m12 = m12;
                this.m20 = m20;
                this.m21 = m21;
                this.m22 = m22;
                return;
            default:
                throw Error('Invalid Mat3f constructor params.');
        }
    }
    /** Зануляет все числа в матрице. */
    Mat3f.prototype.zero = function () { this.m00 = this.m01 = this.m02 = this.m10 = this.m11 = this.m12 = this.m20 = this.m21 = this.m22 = 0.0; };
    /** Превращает данную матрицу в единичную. */
    Mat3f.prototype.setIdentity = function () {
        this.m00 = this.m11 = this.m22 = 1.0;
        this.m01 = this.m02 = this.m10 = this.m12 = this.m20 = this.m21 = 0.0;
    };
    /**
     * Задаёт матрицу вращения.
     *
     * @param	referenceDirection	Вектор используемый в качестве оси Z.
     * @return	Матрица вращения.
     */
    Mat3f.createRotationMatrix = function (referenceDirection) {
        var rotMat = new Mat3f();
        if (referenceDirection.y == 1.0) {
            referenceDirection.y -= 0.0001;
            referenceDirection.normalise();
        }
        rotMat.setZBasis(referenceDirection);
        rotMat.setXBasis(_Vec3f__WEBPACK_IMPORTED_MODULE_0__["Vec3f"].crossProduct(referenceDirection, new _Vec3f__WEBPACK_IMPORTED_MODULE_0__["Vec3f"](0.0, 1.0, 0.0)).normalised());
        rotMat.setYBasis(_Vec3f__WEBPACK_IMPORTED_MODULE_0__["Vec3f"].crossProduct(rotMat.getXBasis(), rotMat.getZBasis()).normalised());
        return rotMat;
    };
    /**
     * Состоит ли матрица из трёх ортогональных векторов.
     *
     * @return	Ортогональна ли матрица.
     */
    Mat3f.prototype.isOrthogonal = function () {
        var xCrossYDot = _Vec3f__WEBPACK_IMPORTED_MODULE_0__["Vec3f"].dotProduct(this.getXBasis(), this.getYBasis());
        var xCrossZDot = _Vec3f__WEBPACK_IMPORTED_MODULE_0__["Vec3f"].dotProduct(this.getXBasis(), this.getZBasis());
        var yCrossZDot = _Vec3f__WEBPACK_IMPORTED_MODULE_0__["Vec3f"].dotProduct(this.getYBasis(), this.getZBasis());
        return (_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].approximatelyEquals(xCrossYDot, 0.0, 0.01) &&
            _Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].approximatelyEquals(xCrossZDot, 0.0, 0.01) &&
            _Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].approximatelyEquals(yCrossZDot, 0.0, 0.01));
    };
    /**
     * Умножает матрицу на вектор обычным матричным умножением.
     *
     * @param	source	Вектор.
     * @return
     */
    Mat3f.prototype.times = function (source) {
        return new _Vec3f__WEBPACK_IMPORTED_MODULE_0__["Vec3f"](this.m00 * source.x + this.m10 * source.y + this.m20 * source.z, this.m01 * source.x + this.m11 * source.y + this.m21 * source.z, this.m02 * source.x + this.m12 * source.y + this.m22 * source.z);
    };
    /**
     * Вычисляет определитель матрицы.
     *
     * @return	Определитель матрицы.
     */
    Mat3f.prototype.determinant = function () {
        return this.m20 * this.m01 * this.m12
            - this.m20 * this.m02 * this.m11
            - this.m10 * this.m01 * this.m22
            + this.m10 * this.m02 * this.m21
            + this.m00 * this.m11 * this.m22
            - this.m00 * this.m12 * this.m21;
    };
    /**
     * Возвращает обратную матрицу для матрицы-параметра.
     *
     * @param	m	Исходная матрица.
     * @return		Матрица обратная исходной.
     */
    Mat3f.inverse = function (m) {
        var d = m.determinant();
        var temp = new Mat3f();
        temp.m00 = (m.m11 * m.m22 - m.m12 * m.m21) / d;
        temp.m01 = -(m.m01 * m.m22 - m.m02 * m.m21) / d;
        temp.m02 = (m.m01 * m.m12 - m.m02 * m.m11) / d;
        temp.m10 = -(-m.m20 * m.m12 + m.m10 * m.m22) / d;
        temp.m11 = (-m.m20 * m.m02 + m.m00 * m.m22) / d;
        temp.m12 = -(-m.m10 * m.m02 + m.m00 * m.m12) / d;
        temp.m20 = (-m.m20 * m.m11 + m.m10 * m.m21) / d;
        temp.m21 = -(-m.m20 * m.m01 + m.m00 * m.m21) / d;
        temp.m22 = (-m.m10 * m.m02 + m.m00 * m.m11) / d;
        return temp;
    };
    /**
     * Поворачивает эту матрицу на угол-параметр относительно оси-параметра.
     * Не модифицирует исходную матрицу.
     *
     *  @param	angleRads	Угол в радианах.
     *  @param	rotationAxis	Ось.
     *  @return
     *  */
    Mat3f.prototype.rotateRads = function (rotationAxis, angleRads) {
        var dest = new Mat3f();
        var sin = Math.sin(angleRads);
        var cos = Math.cos(angleRads);
        var oneMinusCos = 1.0 - cos;
        var xy = rotationAxis.x * rotationAxis.y;
        var yz = rotationAxis.y * rotationAxis.z;
        var xz = rotationAxis.x * rotationAxis.z;
        var xs = rotationAxis.x * sin;
        var ys = rotationAxis.y * sin;
        var zs = rotationAxis.z * sin;
        var f00 = rotationAxis.x * rotationAxis.x * oneMinusCos + cos;
        var f01 = xy * oneMinusCos + zs;
        var f02 = xz * oneMinusCos - ys;
        var f10 = xy * oneMinusCos - zs;
        var f11 = rotationAxis.y * rotationAxis.y * oneMinusCos + cos;
        var f12 = yz * oneMinusCos + xs;
        var f20 = xz * oneMinusCos + ys;
        var f21 = yz * oneMinusCos - xs;
        var f22 = rotationAxis.z * rotationAxis.z * oneMinusCos + cos;
        var t00 = this.m00 * f00 + this.m10 * f01 + this.m20 * f02;
        var t01 = this.m01 * f00 + this.m11 * f01 + this.m21 * f02;
        var t02 = this.m02 * f00 + this.m12 * f01 + this.m22 * f02;
        var t10 = this.m00 * f10 + this.m10 * f11 + this.m20 * f12;
        var t11 = this.m01 * f10 + this.m11 * f11 + this.m21 * f12;
        var t12 = this.m02 * f10 + this.m12 * f11 + this.m22 * f12;
        dest.m20 = this.m00 * f20 + this.m10 * f21 + this.m20 * f22;
        dest.m21 = this.m01 * f20 + this.m11 * f21 + this.m21 * f22;
        dest.m22 = this.m02 * f20 + this.m12 * f21 + this.m22 * f22;
        dest.m00 = t00;
        dest.m01 = t01;
        dest.m02 = t02;
        dest.m10 = t10;
        dest.m11 = t11;
        dest.m12 = t12;
        return dest;
    };
    /**
     * Задаёт ось X матрице.
     *
     * @param	v	Вектор, значения которого будут использоваться в качестве оси матрицы.
     */
    Mat3f.prototype.setXBasis = function (v) { this.m00 = v.x; this.m01 = v.y; this.m02 = v.z; };
    /**
     * Задаёт ось Y матрице.
     *
     * @param	v	Вектор, значения которого будут использоваться в качестве оси матрицы.
     */
    Mat3f.prototype.setYBasis = function (v) { this.m10 = v.x; this.m11 = v.y; this.m12 = v.z; };
    /**
     * Задаёт ось Z матрице.
     *
     * @param	v	Вектор, значения которого будут использоваться в качестве оси матрицы.
     */
    Mat3f.prototype.setZBasis = function (v) { this.m20 = v.x; this.m21 = v.y; this.m22 = v.z; };
    /**
     * Возвращает новую матрицу, транспонированную версию матрицы-параметра.
     *
     * @param	m	Матрицу, которую хотят транспонировать.
     * @return		Транспонированная версия матрицы-параметра.
     */
    Mat3f.transpose = function (m) { return new Mat3f(m.m00, m.m10, m.m20, m.m01, m.m11, m.m21, m.m02, m.m12, m.m22); };
    return Mat3f;
}());



/***/ }),

/***/ "./movikjs/utils/Mat4f.ts":
/*!********************************!*\
  !*** ./movikjs/utils/Mat4f.ts ***!
  \********************************/
/*! exports provided: Mat4f */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mat4f", function() { return Mat4f; });
/**
 * Матрица 4*4.
 *
 * Класс, используемый для отрисовки.
 */
var Mat4f = /** @class */ (function () {
    function Mat4f() {
        this.raw = Mat4f.identity();
    }
    Mat4f.prototype.vtranslate = function (v) {
        Mat4f.translate(this.raw, v.x, v.y, v.z);
        return this;
    };
    Mat4f.prototype.rotateY = function (rad) {
        Mat4f.rotateY(this.raw, rad);
        return this;
    };
    Mat4f.prototype.rotateX = function (rad) {
        Mat4f.rotateX(this.raw, rad);
        return this;
    };
    Mat4f.prototype.rotateZ = function (rad) {
        Mat4f.rotateZ(this.raw, rad);
        return this;
    };
    Mat4f.prototype.vscale = function (vec3) {
        Mat4f.scale(this.raw, vec3.x, vec3.y, vec3.z);
        return this;
    };
    Mat4f.prototype.reset = function () {
        for (var i = 0; i < this.raw.length; i++)
            this.raw[i] = (i % 5 === 0) ? 1 : 0;
        return this;
    };
    Mat4f.identity = function () {
        var a = new Float32Array(16);
        a[0] = a[5] = a[10] = a[15] = 1;
        return a;
    };
    Mat4f.perspective = function (out, fovy, aspect, near, far) {
        var f = 1.0 / Math.tan(fovy / 2), nf = 1 / (near - far);
        out[0] = f / aspect;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = f;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = (far + near) * nf;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[14] = (2 * far * near) * nf;
        out[15] = 0;
    };
    Mat4f.normalMat3 = function (out, a) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3], a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7], a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11], a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15], b00 = a00 * a11 - a01 * a10, b01 = a00 * a12 - a02 * a10, b02 = a00 * a13 - a03 * a10, b03 = a01 * a12 - a02 * a11, b04 = a01 * a13 - a03 * a11, b05 = a02 * a13 - a03 * a12, b06 = a20 * a31 - a21 * a30, b07 = a20 * a32 - a22 * a30, b08 = a20 * a33 - a23 * a30, b09 = a21 * a32 - a22 * a31, b10 = a21 * a33 - a23 * a31, b11 = a22 * a33 - a23 * a32, det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        if (!det)
            return null;
        det = 1.0 / det;
        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        return out;
    };
    Mat4f.transformVec4 = function (out, v, m) {
        out[0] = m[0] * v[0] + m[4] * v[1] + m[8] * v[2] + m[12] * v[3];
        out[1] = m[1] * v[0] + m[5] * v[1] + m[9] * v[2] + m[13] * v[3];
        out[2] = m[2] * v[0] + m[6] * v[1] + m[10] * v[2] + m[14] * v[3];
        out[3] = m[3] * v[0] + m[7] * v[1] + m[11] * v[2] + m[15] * v[3];
        return out;
    };
    Mat4f.scale = function (out, x, y, z) {
        out[0] *= x;
        out[1] *= x;
        out[2] *= x;
        out[3] *= x;
        out[4] *= y;
        out[5] *= y;
        out[6] *= y;
        out[7] *= y;
        out[8] *= z;
        out[9] *= z;
        out[10] *= z;
        out[11] *= z;
        return out;
    };
    ;
    Mat4f.rotateY = function (out, rad) {
        var s = Math.sin(rad), c = Math.cos(rad), a00 = out[0], a01 = out[1], a02 = out[2], a03 = out[3], a20 = out[8], a21 = out[9], a22 = out[10], a23 = out[11];
        out[0] = a00 * c - a20 * s;
        out[1] = a01 * c - a21 * s;
        out[2] = a02 * c - a22 * s;
        out[3] = a03 * c - a23 * s;
        out[8] = a00 * s + a20 * c;
        out[9] = a01 * s + a21 * c;
        out[10] = a02 * s + a22 * c;
        out[11] = a03 * s + a23 * c;
        return out;
    };
    Mat4f.rotateX = function (out, rad) {
        var s = Math.sin(rad), c = Math.cos(rad), a10 = out[4], a11 = out[5], a12 = out[6], a13 = out[7], a20 = out[8], a21 = out[9], a22 = out[10], a23 = out[11];
        out[4] = a10 * c + a20 * s;
        out[5] = a11 * c + a21 * s;
        out[6] = a12 * c + a22 * s;
        out[7] = a13 * c + a23 * s;
        out[8] = a20 * c - a10 * s;
        out[9] = a21 * c - a11 * s;
        out[10] = a22 * c - a12 * s;
        out[11] = a23 * c - a13 * s;
        return out;
    };
    Mat4f.rotateZ = function (out, rad) {
        var s = Math.sin(rad), c = Math.cos(rad), a00 = out[0], a01 = out[1], a02 = out[2], a03 = out[3], a10 = out[4], a11 = out[5], a12 = out[6], a13 = out[7];
        out[0] = a00 * c + a10 * s;
        out[1] = a01 * c + a11 * s;
        out[2] = a02 * c + a12 * s;
        out[3] = a03 * c + a13 * s;
        out[4] = a10 * c - a00 * s;
        out[5] = a11 * c - a01 * s;
        out[6] = a12 * c - a02 * s;
        out[7] = a13 * c - a03 * s;
        return out;
    };
    Mat4f.invert = function (out, mat) {
        if (mat === undefined)
            mat = out;
        var a00 = mat[0], a01 = mat[1], a02 = mat[2], a03 = mat[3], a10 = mat[4], a11 = mat[5], a12 = mat[6], a13 = mat[7], a20 = mat[8], a21 = mat[9], a22 = mat[10], a23 = mat[11], a30 = mat[12], a31 = mat[13], a32 = mat[14], a33 = mat[15], b00 = a00 * a11 - a01 * a10, b01 = a00 * a12 - a02 * a10, b02 = a00 * a13 - a03 * a10, b03 = a01 * a12 - a02 * a11, b04 = a01 * a13 - a03 * a11, b05 = a02 * a13 - a03 * a12, b06 = a20 * a31 - a21 * a30, b07 = a20 * a32 - a22 * a30, b08 = a20 * a33 - a23 * a30, b09 = a21 * a32 - a22 * a31, b10 = a21 * a33 - a23 * a31, b11 = a22 * a33 - a23 * a32, det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        if (!det)
            return false;
        det = 1.0 / det;
        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
        return true;
    };
    Mat4f.translate = function (out, x, y, z) {
        out[12] = out[0] * x + out[4] * y + out[8] * z + out[12];
        out[13] = out[1] * x + out[5] * y + out[9] * z + out[13];
        out[14] = out[2] * x + out[6] * y + out[10] * z + out[14];
        out[15] = out[3] * x + out[7] * y + out[11] * z + out[15];
    };
    return Mat4f;
}());



/***/ }),

/***/ "./movikjs/utils/Utils.ts":
/*!********************************!*\
  !*** ./movikjs/utils/Utils.ts ***!
  \********************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var _Colour4f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Colour4f */ "./movikjs/utils/Colour4f.ts");

/**
 * Вспомогательные методы.
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * Возвращвет знак числа.
     *
     * @param	value	Число.
     * @return			1 если значение больше или равно нулю, иначе -1.
     */
    Utils.sign = function (value) {
        if (value >= 0.0) {
            return 1.0;
        }
        return -1.0;
    };
    /**
     * Валидирует направление вектора, чтобы убедиться, что он не равен нулю.
     * <p>
     * Если длина вектора равна нулю бросает Error.
     * @param	directionUV     Вектор.
     */
    Utils.validateDirectionUV = function (directionUV) {
        if (directionUV.length() <= 0.0) {
            throw new Error('Vec direction unit vector cannot be zero.');
        }
    };
    /**
     * Валидирует длину кости, чтобы убедаться, что она не нулевая.
     * <p>
     * Если длина кости равна нулю бросает Error.
     * @param	length	Длина.
     */
    Utils.validateLength = function (length) {
        if (length < 0.0) {
            throw new Error('Length must be a greater than or equal to zero.');
        }
    };
    // Константы для перевода из градусов в радианы и наоборот
    Utils.DEGS_TO_RADS = Math.PI / 180.0;
    Utils.RADS_TO_DEGS = 180.0 / Math.PI;
    // Приведение чисел к формату с тремя знаками после запятой
    Utils.formatter = function (num) { return num.toFixed(3); };
    /**
     * Некоторые цвета.
     */
    Utils.RED = new _Colour4f__WEBPACK_IMPORTED_MODULE_0__["Colour4f"]([1.0, 0.0, 0.0, 1.0]);
    Utils.GREEN = new _Colour4f__WEBPACK_IMPORTED_MODULE_0__["Colour4f"]([0.0, 1.0, 0.0, 1.0]);
    Utils.BLUE = new _Colour4f__WEBPACK_IMPORTED_MODULE_0__["Colour4f"]([0.0, 0.0, 1.0, 1.0]);
    Utils.MID_RED = new _Colour4f__WEBPACK_IMPORTED_MODULE_0__["Colour4f"]([0.6, 0.0, 0.0, 1.0]);
    Utils.MID_GREEN = new _Colour4f__WEBPACK_IMPORTED_MODULE_0__["Colour4f"]([0.0, 0.6, 0.0, 1.0]);
    Utils.MID_BLUE = new _Colour4f__WEBPACK_IMPORTED_MODULE_0__["Colour4f"]([0.0, 0.0, 0.6, 1.0]);
    Utils.BLACK = new _Colour4f__WEBPACK_IMPORTED_MODULE_0__["Colour4f"]([0.0, 0.0, 0.0, 1.0]);
    Utils.GREY = new _Colour4f__WEBPACK_IMPORTED_MODULE_0__["Colour4f"]([0.5, 0.5, 0.5, 1.0]);
    Utils.WHITE = new _Colour4f__WEBPACK_IMPORTED_MODULE_0__["Colour4f"]([1.0, 1.0, 1.0, 1.0]);
    Utils.YELLOW = new _Colour4f__WEBPACK_IMPORTED_MODULE_0__["Colour4f"]([1.0, 1.0, 0.0, 1.0]);
    Utils.CYAN = new _Colour4f__WEBPACK_IMPORTED_MODULE_0__["Colour4f"]([0.0, 1.0, 1.0, 1.0]);
    Utils.MAGENTA = new _Colour4f__WEBPACK_IMPORTED_MODULE_0__["Colour4f"]([1.0, 0.0, 1.0, 1.0]);
    /**
     * Возвращает котангенс угла в радианах.
     * Return the co-tangent of an angle specified in radians.
     *
     * @param	angleRads	Угол врадианах.
     * @return				Котангенс угла.
     */
    Utils.cot = function (angleRads) { return (1.0 / Math.tan(angleRads)); };
    /**
     * Конвертирует из радиан в градусы.
     *
     * @param	angleRads	Угол в радианах.
     * @return				Угол в градусах.
     */
    Utils.radiansToDegrees = function (angleRads) { return angleRads * Utils.RADS_TO_DEGS; };
    /**
     * Конвертирует из градусов в радианы.
     *
     * @param	angleDegs	Угол в градусах.
     * @return				Угол в радианах.
     */
    Utils.degreesToRadians = function (angleDegs) { return angleDegs * Utils.DEGS_TO_RADS; };
    /**
     * Возвращает флаг, показывающий равны ли значения с заданным уровнем терпимости.
     *
     * @param	a		Первое значение.
     * @param	b		Второе значение.
     * @param	tolerance	Максимальная разница между числами при которой они будут считаться равными.
     * @return			Равны ли значения.
     */
    Utils.approximatelyEquals = function (a, b, tolerance) { return (Math.abs(a - b) <= tolerance); };
    return Utils;
}());



/***/ }),

/***/ "./movikjs/utils/Vec2f.ts":
/*!********************************!*\
  !*** ./movikjs/utils/Vec2f.ts ***!
  \********************************/
/*! exports provided: Vec2f */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec2f", function() { return Vec2f; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./movikjs/utils/Utils.ts");

/**
 * 2D вектор.
 * <p>
 * Состоит из x и y полей, задающих направление вектора.
 */
var Vec2f = /** @class */ (function () {
    // ---------- Constructors ----------
    /**
     * Конструктор.
     * <p>
     * Принимает три вариации параметров:
     * <p>
     * Без параметров. Заполняет x и y значениями по умолчанию (нулями).
     * <p>
     * Конструктор копирования. Задаёт x и y равными значениям source-вектора.
     *
     * @param source Вектор, параметры которого будут скопированы.
     * <p>
     * Конструктор с двумя параметрами, задающими x и y.
     *
     * @param source Значение координаты по оси x.
     * @param y Значение координаты по оси y.
     */
    function Vec2f(source, y) {
        var _this = this;
        this.x = 0;
        this.y = 0;
        /**
         * Возвращает сумму данного вектора с вектором из параметров, не меняя данный вектор.
         *
         * @param	v	Вектор.
         * @return		Результат сложения данного вектора с вектором параметром.
         **/
        this.plus = function (v) { return new Vec2f(_this.x + v.x, _this.y + v.y); };
        /**
         * Возвращает разность данного вектора с вектором из параметров, не меняя данный вектор.
         *
         * @param	v	Вектор.
         * @return		Результат вычитания из данного вектора вектора-параметра.
         **/
        this.minus = function (v) { return new Vec2f(_this.x - v.x, _this.y - v.y); };
        /**
         * Умножает вектор на число и возвращает результат, не меняя при этом исходный вектор.
         *
         * @param	value	Число, на которое необходимо умножить.
         * @return			Результат умножения данного вектора на число.
         **/
        this.times = function (value) { return new Vec2f(_this.x * value, _this.y * value); };
        /**
         * Делит вектор на число и возвращает результат, не меняя при этом исходный вектор.
         *
         * @param	value	Число, на которое необходимо поделить.
         * @return			Результат деления данного вектора на число.
         **/
        this.dividedBy = function (value) { return new Vec2f(_this.x / value, _this.y / value); };
        /**
         * Возвращает вектор противоположного направления.
         * Сам вектор не меняет.
         *
         * @return Вектор противоположного направления.
         */
        this.negated = function () { return new Vec2f(-_this.x, -_this.y); };
        /**
         * Возвращает длину вектора.
         *
         * @return	Длина вектора.
         */
        this.length = function () { return Math.sqrt(_this.x * _this.x + _this.y * _this.y); };
        /**
         * Возвращает скалярное произведение двух векторов: this и вектора-параметра.
         *
         * @param	v	Второй вектор.
         * @return		Скалярное произведение.
         */
        this.dot = function (v) { return _this.x * v.x + _this.y * v.y; };
        switch (arguments.length) {
            case 0:
                return;
            case 1:
                if (source instanceof Vec2f) {
                    this.x = source.x;
                    this.y = source.y;
                    return;
                }
                else {
                    throw new Error('Wrong Vec2f constructor params!');
                }
            case 2:
                if (typeof source === 'number') {
                    this.x = source;
                    this.y = y;
                    return;
                }
                else {
                    throw new Error('Wrong Vec2f constructor params!');
                }
        }
    }
    // ---------- Methods ----------
    /**
     * Проверяет вектора на примерное равенство.
     * Векторы примерно равны если модуль их координат по каждой из осей меньше tolerance.
     * <p>
     * Если значение tolerance меньше 0 - бросаем ошибку.
     *
     * @param	v			Вектор для сравнения.
     * @param   tolerance	Значение "терпимости" к разнице.
     * @return				Результат сравнения.
     */
    Vec2f.prototype.approximatelyEquals = function (v, tolerance) {
        if (tolerance < 0) {
            throw new Error('Equality threshold must be greater than or equal to 0.0');
        }
        return (Math.abs(this.x - v.x) < tolerance && Math.abs(this.y - v.y) < tolerance);
    };
    /**
     * Задаёт значения полей вектора.
     * Принимает две вариации параметров:
     * <p>
     * Один параметр - вектор источник.
     *
     * @param	source	Вектор-источник.
     * <p>
     * Два параметра - x и y соответственно.
     *
     * @param	source	Значение координаты по X.
     * @param	y	Значение координаты по Y.
     */
    Vec2f.prototype.set = function (source, y) {
        switch (arguments.length) {
            case 1:
                if (source instanceof Vec2f) {
                    this.x = source.x;
                    this.y = source.y;
                    return;
                }
                else {
                    throw new Error('Wrong Vec2f set params!');
                }
            case 2:
                if (typeof source === 'number') {
                    this.x = source;
                    this.y = y;
                    return;
                }
                else {
                    throw new Error('Wrong Vec2f set params!');
                }
            default:
                throw new Error('Wrong Vec2f set params!');
        }
    };
    /**
     * Нормализует и возвращает себя.
     *
     * @return	Нормализованный вектор.
     */
    Vec2f.prototype.normalise = function () {
        var magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
        if (magnitude > 0.0) {
            this.x /= magnitude;
            this.y /= magnitude;
        }
        return this;
    };
    /**
     * Возвращает нормализованную версию вектора-параметра, не меняясь сам.
     *
     * @param source Вектор для нормализации.
     * @return	Нормализованный вектор.
     */
    Vec2f.normalised = function (source) { return new Vec2f(source).normalise(); };
    /**
     * Возвращает знак угла между двумя векторами.
     * 1, если второй вектор находится против часовой стрелки относительно первого;
     * -1, если второй вектор находится по часовой стрелке относительно первого;
     * 0, если угол между ними 0.
     *
     * @param	u	Первый угол.
     * @param	v	Второй угол.
     * @return		Знак угла.
     */
    Vec2f.zcross = function (u, v) {
        var p = u.x * v.y - v.x * u.y;
        if (p > 0.0) {
            return 1;
        }
        else {
            if (p < 0.0) {
                return -1;
            }
        }
        return 0;
    };
    /**
     * Возвращает угол со знаком между двумя векорами: this и параметром.
     * <p>
     * Угол будет положительным, если второй вектор находится против часовой стрелки относительно первого;
     * Угол будет отричательным, если второй вектор находится по часовой стрелке относительно первого.
     *
     * @param	otherVector Второй вектор.
     * @return	float       Угол между векторами в градусах.
     */
    Vec2f.prototype.getSignedAngleDegsTo = function (otherVector) {
        var thisVectorUV = Vec2f.normalised(this);
        var otherVectorUV = Vec2f.normalised(otherVector);
        var unsignedAngleDegs = Math.acos(thisVectorUV.dot(otherVectorUV)) * _Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].RADS_TO_DEGS;
        if (Vec2f.zcross(thisVectorUV, otherVectorUV) == 1) {
            return unsignedAngleDegs;
        }
        else {
            return -unsignedAngleDegs;
        }
    };
    /**
     * Возвращает единичный вектор с примененными к нему ограничениями.
     * Если угол между идеальным положением вектора и бейзлайном привышает ограничения, то
     * возвращаем вектор, который повернут на граничный угол относительно бейзлайна.
     * В противном случае - возвращаем идеальный вектор.
     *
     * @param	directionUV	                Идеальное положение вектора, которое возможно недостижимо.
     * @param	baselineUV	                Вектор относительно которого считаются углы.
     * @param	clockwiseConstraintDegs	    Угол-ограничение по часовой стрелке.
     * @param	antiClockwiseConstraintDegs	Угол-ограничение против часовой стрелки.
     * @return	Vec2f
     */
    Vec2f.getConstrainedUV = function (directionUV, baselineUV, clockwiseConstraintDegs, antiClockwiseConstraintDegs) {
        var signedAngleDegs = baselineUV.getSignedAngleDegsTo(directionUV);
        if (signedAngleDegs > antiClockwiseConstraintDegs) {
            return Vec2f.rotateDegs(baselineUV, antiClockwiseConstraintDegs);
        }
        if (signedAngleDegs < -clockwiseConstraintDegs) {
            return Vec2f.rotateDegs(baselineUV, -clockwiseConstraintDegs);
        }
        return directionUV;
    };
    /**
     * Вращает текущий вектор на число-параметр радиан.
     * <p>
     * Положительное значение угла свидетельствует о повороте против часовой стрелки.
     * Отрицательное значеине - по часовой.
     * <p>
     * Меняет текущий вектор и возвращает this для создания цепочек.
     * @param   angleRads	TУгол поворота в радианах.
     * @return	Vec2f
     */
    Vec2f.prototype.rotateRads = function (angleRads) {
        // Поворот вокруг оси z:
        // x' = x*cos q - y*sin q
        // y' = x*sin q + y*cos q
        // z' = z
        var cosTheta = Math.cos(angleRads);
        var sinTheta = Math.sin(angleRads);
        var rotatedVector = new Vec2f(this.x * cosTheta - this.y * sinTheta, // x
        this.x * sinTheta + this.y * cosTheta); // y
        this.x = rotatedVector.x;
        this.y = rotatedVector.y;
        return this;
    };
    /**
     * Поворачивает вектор-параметр на заданное число градусов.
     * Method to rotate this Vec2f by a given angle as specified in degrees.
     * <p>
     * Метод не меняет исходный вектор.
     * Положительное значение угла свидетельствует о повороте против часовой стрелки.
     * Отрицательное значеине - по часовой.
     *
     * @param	source		Вектор для поворота.
     * @param	angleDegs	Угол поворота в градусах.
     * @return	Vec2f
     */
    Vec2f.rotateDegs = function (source, angleDegs) {
        // Поворот вокруг оси z:
        // x' = x*cos q - y*sin q
        // y' = x*sin q + y*cos q
        // z' = z
        var angleRads = angleDegs * _Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].DEGS_TO_RADS;
        var cosTheta = Math.cos(angleRads);
        var sinTheta = Math.sin(angleRads);
        return new Vec2f(source.x * cosTheta - source.y * sinTheta, // x
        source.x * sinTheta + source.y * cosTheta); // y
    };
    /**
     * Возвращает направление вектора, для которого a - начальная точка, а b - конечная.
     * Направление будет единичным вектором.
     *
     * @param	a	Начальная точка.
     * @param	b	Конечная точка.
     * @return
     */
    Vec2f.getDirectionUV = function (a, b) { return b.minus(a).normalise(); };
    /**
     * Возвращает расстояние между двумя точками.
     *
     * @param	v1	Начальная позиция.
     * @param	v2	Конечная позиция.
     * @return		Расстояние.
     */
    Vec2f.distanceBetween = function (v1, v2) { return Math.sqrt((v2.x - v1.x) * (v2.x - v1.x) + (v2.y - v1.y) * (v2.y - v1.y)); };
    /**
     * Возвращает скалярное произведение двух векторов параметров.
     *
     * @param	v1	Первый вектор.
     * @param	v2	Второй вектор.
     * @return		Скалярное произведение.
     */
    Vec2f.dot = function (v1, v2) { return v1.x * v2.x + v1.y * v2.y; };
    /**
     * Возвращает угол между двумя векторами-параметрами.
     * У возвращаемого угла нет знака, все значения лежат в проеделах [0..180].
     *
     * @param	v1	    Первый вектор.
     * @param	v2	    Второй вектор.
     * @return	float   Угол между векторами.
     */
    Vec2f.getUnsignedAngleBetweenVectorsDegs = function (v1, v2) { return Math.acos(Vec2f.normalised(v1).dot(Vec2f.normalised(v2))) * _Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].RADS_TO_DEGS; };
    return Vec2f;
}());



/***/ }),

/***/ "./movikjs/utils/Vec3f.ts":
/*!********************************!*\
  !*** ./movikjs/utils/Vec3f.ts ***!
  \********************************/
/*! exports provided: Vec3f */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec3f", function() { return Vec3f; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./movikjs/utils/Utils.ts");
/* harmony import */ var _Mat3f__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mat3f */ "./movikjs/utils/Mat3f.ts");


/**
 * 3D вектор.
 */
var Vec3f = /** @class */ (function () {
    // ----- Methods -----
    /**
     * Конструктор, который принимает четыре вариации параметров:
     * <p>
     * Без параметров - все поля принимают значения по умолчанию.
     * <p>
     * Конструктор копирования. Создается глубокая копия объекта.
     *
     * @param value Вектор-источник
     * <p>
     * Конструктор с одним параметром - числом, задающим координаты вектора по всем осям.
     *
     * @param value Координата вектора по каждой из осей.
     * <p>
     * Конструктор с тремя параметрами - значения координат по X, Y, Z осям соответственно.
     *
     * @param value Значении координаты по оси X.
     * @param y Значении координаты по оси Y.
     * @param z Значении координаты по оси Z.
     * */
    function Vec3f(value, y, z) {
        var _this = this;
        // ----- Properties -----
        // Координаты вектора
        this.x = 0;
        this.y = 0;
        this.z = 0;
        /**
         * Возвращает вектор противоположного направления.
         * Сам вектор не меняет.
         *
         * @return Вектор противоположного направления.
         */
        this.negated = function () { return new Vec3f(-_this.x, -_this.y, -_this.z); };
        /**
         * Возвращает векторное произведение двух векторов: this и параметра.
         *
         * @param	v	Второй вектор.
         * @return		Скалярное произведение нормализованных векторов.
         */
        this.cross = function (v) { return new Vec3f(_this.y * v.z - _this.z * v.y, _this.z * v.x - _this.x * v.z, _this.x * v.y - _this.y * v.x); };
        /**
         * Возвращает длину вектора.
         *
         * @return	Длина вектора.
         */
        this.length = function () { return Math.sqrt(_this.x * _this.x + _this.y * _this.y + _this.z * _this.z); };
        /**
         * Возвращает сумму данного вектора с вектором из параметров, не меняя данный вектор.
         *
         * @param	v	Вектор.
         * @return		Результат сложения данного вектора с вектором параметром.
         **/
        this.plus = function (v) { return new Vec3f(_this.x + v.x, _this.y + v.y, _this.z + v.z); };
        /**
         * Возвращает разность данного вектора с вектором из параметров, не меняя данный вектор.
         *
         * @param	v	Вектор.
         * @return		Результат вычитания из данного вектора вектора-параметра.
         **/
        this.minus = function (v) { return new Vec3f(_this.x - v.x, _this.y - v.y, _this.z - v.z); };
        this.toArray = function () { return [_this.x, _this.y, _this.z]; };
        switch (arguments.length) {
            case 0: break;
            case 1:
                if (value instanceof Vec3f) {
                    this.x = value.x;
                    this.y = value.y;
                    this.z = value.z;
                }
                else {
                    this.x = this.y = this.z = value;
                }
                break;
            case 3:
                if (typeof value === 'number') {
                    this.x = value;
                    this.y = y;
                    this.z = z;
                }
                else {
                    throw new Error('Vec3f constructor was invoked incorrectly.');
                }
                break;
        }
    }
    /**
     * Задаёт значения полей вектора.
     * Принимает две вариации параметров:
     * <p>
     * Один параметр - вектор источник.
     *
     * @param	source	Вектор-источник.
     * <p>
     * Три параметра - x, y, z соответственно.
     *
     * @param	source	Значение координаты по X.
     * @param	y	Значение координаты по Y.
     * @param	z	Значение координаты по Z.
     */
    Vec3f.prototype.set = function (source, y, z) {
        switch (arguments.length) {
            case 0: break;
            case 1:
                if (source instanceof Vec3f) {
                    this.x = source.x;
                    this.y = source.y;
                    this.z = source.z;
                }
                else {
                    throw new Error('Vec3f set was invoked incorrectly.');
                }
                break;
            case 3:
                if (typeof source === 'number') {
                    this.x = source;
                    this.y = y;
                    this.z = z;
                }
                else {
                    throw new Error('Vec3f set was invoked incorrectly.');
                }
                break;
            default:
                throw new Error('Vec3f set was invoked incorrectly.');
        }
    };
    /**
     * Проверяет вектора на примерное равенство.
     * Векторы примерно равны если модуль их координат по каждой из осей меньше tolerance.
     * <p>
     * Если значение tolerance меньше 0 - бросаем ошибку.
     *
     * @param	v			Вектор для сравнения.
     * @param   tolerance	Значение "терпимости" к разнице.
     * @return				Результат сравнения.
     */
    Vec3f.prototype.approximatelyEquals = function (v, tolerance) {
        if (tolerance < 0) {
            throw Error('Equality threshold must be greater than or equal to 0.0f');
        }
        var xDiff = Math.abs(this.x - v.x);
        var yDiff = Math.abs(this.y - v.y);
        var zDiff = Math.abs(this.z - v.z);
        return (xDiff < tolerance && yDiff < tolerance && zDiff < tolerance);
    };
    /**
     * Возвращает равна ли примерно длина данного вектора числу параметру.
     *
     * @param	value		Значение для сравнения с длиной.
     * @param	tolerance	Значение "терпимости".
     * @return				Равны ли примерно длина и число-параметр.
     */
    Vec3f.prototype.lengthIsApproximately = function (value, tolerance) {
        if (tolerance < 0) {
            throw new Error('Comparison tolerance cannot be less than zero.');
        }
        return (Math.abs(this.length() - value) < tolerance);
    };
    /** Зануляет координаты данного вектора */
    Vec3f.prototype.zero = function () { this.x = this.y = this.z = 0.0; };
    /**
     * Задаёт текущему вектору противоположное направление. Возвращает this для построения цепочек.
     *
     * @return	Вектор с противоположным направлением.
     */
    Vec3f.prototype.negate = function () {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    };
    /**
     * Нормализует и возвращает себя.
     * Если величина вектора равна нулю, то возвращается вектор без изменений.
     *
     * @return	Нормализованный вектор.
     */
    Vec3f.prototype.normalise = function () {
        var magnitude = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        if (magnitude > 0) {
            this.x /= magnitude;
            this.y /= magnitude;
            this.z /= magnitude;
        }
        return this;
    };
    /**
     * Возвращает нормализованную версию данного вектора, не меняясь сам.
     *
     * @return	Нормализованный вектор.
     */
    Vec3f.prototype.normalised = function () { return new Vec3f(this).normalise(); };
    /**
     * Возвращает скалярное произведение двух нормализованных векторов переданных в параметрах.
     *
     * @param	v1	Первый вектор.
     * @param	v2	Второй вектор.
     * @return		Скалярное произведение нормализованных векторов.
     */
    Vec3f.dotProduct = function (v1, v2) {
        var v1Norm = v1.normalised();
        var v2Norm = v2.normalised();
        return v1Norm.x * v2Norm.x + v1Norm.y * v2Norm.y + v1Norm.z * v2Norm.z;
    };
    /**
     * Вычисляет расстояние между двумя точками в 3D.
     *
     * @param	v1	Первая точка.
     * @param	v2	Вторая точка.
     * @return		Расстояние между точками.
     */
    Vec3f.distanceBetween = function (v1, v2) {
        var dx = v2.x - v1.x;
        var dy = v2.y - v1.y;
        var dz = v2.z - v1.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    };
    /**
     * Возвращает вектор, компоненты которого - это абсолютные значения вектора-параметра.
     * Не меняет исходный вектор.
     *
     * @param	source	Вектор.
     * @return		    Покомпонентно абсолютный аналог вектора параметра.
     */
    Vec3f.abs = function (source) {
        var absVector = new Vec3f();
        if (source.x < 0.0) {
            absVector.x = -source.x;
        }
        else {
            absVector.x = source.x;
        }
        if (source.y < 0.0) {
            absVector.y = -source.y;
        }
        else {
            absVector.y = source.y;
        }
        if (source.z < 0.0) {
            absVector.z = -source.z;
        }
        else {
            absVector.z = source.z;
        }
        return absVector;
    };
    /**
     * Возвращает единичный вектор-перпендикуляр к вектору параметру.
     *
     * @param	u	Вектор.
     * @return		Единичный вектор-перпендикуляр для вектора-параметра.
     */
    Vec3f.genPerpendicularVectorQuick = function (u) {
        var perp;
        if (Math.abs(u.y) < 0.99) {
            perp = new Vec3f(-u.z, 0.0, u.x); // cross(u, UP)
        }
        else {
            perp = new Vec3f(0.0, u.z, -u.y); // cross(u, RIGHT)
        }
        return perp.normalise();
    };
    /**
     * Возвращает вектор в радианах между векторами.
     * <p>
     * Результат будет всегда положительным числом от 0 до pi (3.14159) радиан.
     *
     * @param	v1	Первый вектор.
     * @param	v2	Второй вектор.
     * @return		Угол между векторами в радианах.
     */
    Vec3f.getAngleBetweenRads = function (v1, v2) {
        // Note: a and b are normalised within the dotProduct method.
        return Math.acos(Vec3f.dotProduct(v1, v2));
    };
    /**
     * Возвращает вектор в градусах между векторами.
     * <p>
     * Результат будет всегда положительным числом от 0 до 180.
     *
     * @param	v1	Первый вектор.
     * @param	v2	Второй вектор.
     * @return		Угол между векторами в градусах.
     */
    Vec3f.getAngleBetweenDegs = function (v1, v2) { return Vec3f.getAngleBetweenRads(v1, v2) * _Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].RADS_TO_DEGS; };
    /**
     * Возвращает угол между векторами [-179.9..180.0].
     *
     * @param	referenceVector	Первый, базовый вектор, от которого ведется отсчет.
     * @param	otherVector		Второй вектор.
     * @param	normalVector	Вектор, первендикулярный первым двум.
     * @return					Угол между векторами.
     **/
    Vec3f.getSignedAngleBetweenDegs = function (referenceVector, otherVector, normalVector) {
        var unsignedAngle = Vec3f.getAngleBetweenDegs(referenceVector, otherVector);
        var sign = _Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].sign(Vec3f.dotProduct(Vec3f.crossProduct(referenceVector, otherVector), normalVector));
        return unsignedAngle * sign;
    };
    /**
     * Возвращает вектор с применёнными к нему ограничениями.
     *
     * @param	vecToLimit		Вектор поворот которого надо ограничить по отношению к базовому вектору.
     * @param	vecBaseline		Базовый вектор.
     * @param	angleLimitDegs	Максимально допустимый угол в градусах.
     * @return					Ограниченный вектор.
     */
    Vec3f.getAngleLimitedUnitVectorDegs = function (vecToLimit, vecBaseline, angleLimitDegs) {
        var angleBetweenVectorsDegs = Vec3f.getAngleBetweenDegs(vecBaseline, vecToLimit);
        if (angleBetweenVectorsDegs > angleLimitDegs) {
            var correctionAxis = Vec3f.crossProduct(vecBaseline.normalised(), vecToLimit.normalised()).normalise();
            return Vec3f.rotateAboutAxisDegs(vecBaseline, angleLimitDegs, correctionAxis).normalised();
        }
        else {
            return vecToLimit.normalised();
        }
    };
    /**
     * Возвращает глобальный поворот этого вектора относительно глобальной оси X.
     * Возвращаемое значение находится в диапазоне -179.9..180.0 степени.
     *
     * @return	Отклонение вектора в градусах.
     **/
    Vec3f.prototype.getGlobalPitchDegs = function () {
        var xProjected = this.projectOntoPlane(Vec3f.X_AXIS);
        var pitch = Vec3f.getAngleBetweenDegs(Vec3f.Z_AXIS.negated(), xProjected);
        return xProjected.y < 0.0 ? -pitch : pitch;
    };
    /**
     * Возвращает глобальный поворот этого вектора относительно глобальной оси Y.
     * Возвращаемое значение находится в диапазоне -179.9..180.0 степени.
     *
     * @return	Отклонение вектора в градусах.
     **/
    Vec3f.prototype.getGlobalYawDegs = function () {
        var yProjected = this.projectOntoPlane(Vec3f.Y_AXIS);
        var yaw = Vec3f.getAngleBetweenDegs(Vec3f.Z_AXIS.negated(), yProjected);
        return yProjected.x < 0.0 ? -yaw : yaw;
    };
    /**
     * Поворачивает вектор-параметр вокруг оси X на заданный угол в радианах.
     *
     * @param	source		Вектор для поворота.
     * @param	angleRads	Угол в радианах.
     * @return				Повернутый вектор.
     */
    Vec3f.rotateXRads = function (source, angleRads) {
        // Поворот вокруг оси x:
        // x' = x
        // y' = y*cos q - z*sin q
        // z' = y*sin q + z*cos q
        var cosTheta = Math.cos(angleRads);
        var sinTheta = Math.sin(angleRads);
        return new Vec3f(source.x, source.y * cosTheta - source.z * sinTheta, source.y * sinTheta + source.z * cosTheta);
    };
    /**
     * Поворачивает вектор-параметр вокруг оси X на заданный угол в градусах.
     *
     * @param	source		Вектор для поворота.
     * @param	angleDegs	Угол в градусах.
     * @return				Повернутый вектор.
     */
    Vec3f.rotateXDegs = function (source, angleDegs) { return Vec3f.rotateXRads(source, angleDegs * _Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].DEGS_TO_RADS); };
    /**
     * Поворачивает вектор-параметр вокруг оси Y на заданный угол в радианах.
     *
     * @param	source		Вектор для поворота.
     * @param	angleRads	Угол в радианах.
     * @return				Повернутый вектор.
     */
    Vec3f.rotateYRads = function (source, angleRads) {
        // Поворот вокруг оси y:
        // x' = z*sin q + x*cos q
        // y' = y
        // z' = z*cos q - x*sin q
        var cosTheta = Math.cos(angleRads);
        var sinTheta = Math.sin(angleRads);
        return new Vec3f(source.z * sinTheta + source.x * cosTheta, source.y, source.z * cosTheta - source.x * sinTheta);
    };
    /**
     * Поворачивает вектор-параметр вокруг оси Y на заданный угол в градусах.
     *
     * @param	source		Вектор для поворота.
     * @param	angleDegs	Угол в градусах.
     * @return				Повернутый вектор.
     */
    Vec3f.rotateYDegs = function (source, angleDegs) { return Vec3f.rotateYRads(source, angleDegs * _Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].DEGS_TO_RADS); };
    /**
     * Поворачивает вектор-параметр вокруг оси Z на заданный угол в радианах.
     *
     * @param	source		Вектор для поворота.
     * @param	angleRads	Угол в радианах.
     * @return				Повернутый вектор.
     */
    Vec3f.rotateZRads = function (source, angleRads) {
        // Поворот вокруг оси z:
        // x' = x*cos q - y*sin q
        // y' = x*sin q + y*cos q
        // z' = z
        var cosTheta = Math.cos(angleRads);
        var sinTheta = Math.sin(angleRads);
        return new Vec3f(source.x * cosTheta - source.y * sinTheta, source.x * sinTheta + source.y * cosTheta, source.z);
    };
    /**
     * Поворачивает вектор-параметр вокруг оси Z на заданный угол в градусах.
     *
     * @param	source		Вектор для поворота.
     * @param	angleDegs	Угол в градусах.
     * @return				Повернутый вектор.
     */
    Vec3f.rotateZDegs = function (source, angleDegs) { return Vec3f.rotateZRads(source, angleDegs * _Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].DEGS_TO_RADS); };
    /**
     * Поворачивает вектор относительно оси.
     *
     * @param source		Вектор для поворота.
     * @param angleDegs		Угол поворота в радианах.
     * @param rotationAxis	Ось вращения.
     * @return				Исходный вектор, повернутый на нужный угол.
     */
    Vec3f.rotateAboutAxisRads = function (source, angleRads, rotationAxis) {
        var rotationMatrix = new _Mat3f__WEBPACK_IMPORTED_MODULE_1__["Mat3f"]();
        var sinTheta = Math.sin(angleRads);
        var cosTheta = Math.cos(angleRads);
        var oneMinusCosTheta = 1.0 - cosTheta;
        var xyOne = rotationAxis.x * rotationAxis.y * oneMinusCosTheta;
        var xzOne = rotationAxis.x * rotationAxis.z * oneMinusCosTheta;
        var yzOne = rotationAxis.y * rotationAxis.z * oneMinusCosTheta;
        rotationMatrix.m00 = rotationAxis.x * rotationAxis.x * oneMinusCosTheta + cosTheta;
        rotationMatrix.m01 = xyOne + rotationAxis.z * sinTheta;
        rotationMatrix.m02 = xzOne - rotationAxis.y * sinTheta;
        rotationMatrix.m10 = xyOne - rotationAxis.z * sinTheta;
        rotationMatrix.m11 = rotationAxis.y * rotationAxis.y * oneMinusCosTheta + cosTheta;
        rotationMatrix.m12 = yzOne + rotationAxis.x * sinTheta;
        rotationMatrix.m20 = xzOne + rotationAxis.y * sinTheta;
        rotationMatrix.m21 = yzOne - rotationAxis.x * sinTheta;
        rotationMatrix.m22 = rotationAxis.z * rotationAxis.z * oneMinusCosTheta + cosTheta;
        return rotationMatrix.times(source);
    };
    /**
     * Поворачивает вектор относительно оси.
     *
     * @param source		Вектор для поворота.
     * @param angleDegs		Угол поворота в градусах.
     * @param rotationAxis	Ось вращения.
     * @return				Исходный вектор, повернутый на нужный градус.
     */
    Vec3f.rotateAboutAxisDegs = function (source, angleDegs, rotationAxis) {
        return Vec3f.rotateAboutAxisRads(source, angleDegs * _Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].DEGS_TO_RADS, rotationAxis);
    };
    /**
     * Возвращает новый вектор, у которого каждая компонента домноженный на число или
     * на соответствующую компоненту вектора-параметра.
     *
     * @param	scale	Число или вектор.
     * @return
     **/
    Vec3f.prototype.times = function (scale) {
        if (scale instanceof Vec3f) {
            return new Vec3f(this.x * scale.x, this.y * scale.y, this.z * scale.z);
        }
        else {
            return new Vec3f(this.x * scale, this.y * scale, this.z * scale);
        }
    };
    /**
     * Домножает каждую компоненту вектора-параметра на число-параметр.
     *
     * @param	v		Вектор.
     * @param	scale	Число, на которое надо домножить.
     **/
    Vec3f.times = function (v, scale) { v.x *= scale; v.y *= scale; v.z *= scale; };
    /**
     * Покомпонентно складывает два вектора, записывая результат в первый.
     *
     *  @param	source	Вектор, в который запишется результат сложения.
     *  @param	other	Второй вектор.
     */
    Vec3f.add = function (source, other) { source.x += other.x; source.y += other.y; source.z += other.z; };
    /**
     * Покомпонентно вычитает из первого вектора второй, модифицируя первый.
     *
     *  @param	source	Вектор, который будет содержать результат.
     *  @param	other	Второй вектор.
     */
    Vec3f.subtract = function (source, other) { source.x -= other.x; source.y -= other.y; source.z -= other.z; };
    /**
     * Делит вектор на число и возвращает результат, не меняя при этом исходный вектор.
     *
     * @param	value	Число, на которое необходимо поделить.
     * @return			Результат деления данного вектора на число.
     **/
    Vec3f.prototype.dividedBy = function (value) { return new Vec3f(this.x / value, this.y / value, this.z / value); };
    /**
     * Возвращает проекцию вектора на плоскость.
     *
     * @param	planeNormal	Нормаль к плоскости.
     * @return				Проекция вектора.
     */
    Vec3f.prototype.projectOntoPlane = function (planeNormal) {
        if (!(planeNormal.length() > 0.0)) {
            throw new Error('Plane normal cannot be a zero vector.');
        }
        // Проекция вектора b на плоскость с нормалью n : b - ( b.n / ( |n| squared )) * n
        var b = this.normalised();
        var n = planeNormal.normalised();
        return b.minus(n.times(Vec3f.dotProduct(b, planeNormal))).normalise();
    };
    /**
     * Возвращает направление вектора, для которого v1 - начальная точка, а v2 - конечная.
     * Направление будет единичным вектором.
     *
     * @param	v1	Начальная точка.
     * @param	v2	Конечная точка.
     * @return
     */
    Vec3f.getDirectionUV = function (v1, v2) { return v2.minus(v1).normalise(); };
    // Координатные оси
    Vec3f.X_AXIS = new Vec3f(1, 0, 0);
    Vec3f.Y_AXIS = new Vec3f(0, 1, 0);
    Vec3f.Z_AXIS = new Vec3f(0, 0, 1);
    /**
     * Возвращает копию вектора-источника.
     *
     * @param	source	Вектор-источник.
     * @return		    Глубокая копия вектора источника .
     */
    Vec3f.clone = function (source) { return new Vec3f(source.x, source.y, source.z); };
    /**
     * Возвращает перпендикулярны ли два вектора.
     *
     * @param	a	Первый вектор.
     * @param	b	Второй вектор.
     * @return		Перпендикулярны ли они.
     */
    Vec3f.perpendicular = function (a, b) { return _Utils__WEBPACK_IMPORTED_MODULE_0__["Utils"].approximatelyEquals(Vec3f.dotProduct(a, b), 0.0, 0.01); };
    /**
     * Возвращает равны ли примерно вектора при заданном уровне "терпимости".
     *
     * @param	a		Первый вектор.
     * @param	b		Второй вектор.
     * @param	tolerance	Уровень "терпимости", максимальная разница между векторами, при которой они всё еще равны.
     * @return
     */
    Vec3f.approximatelyEqual = function (a, b, tolerance) { return ((Math.abs(a.x - b.x) < tolerance)
        && (Math.abs(a.y - b.y) < tolerance)
        && (Math.abs(a.z - b.z) < tolerance)); };
    /**
     * Возвращает скалярное произведение двух векторов переданных в параметрах.
     *
     * @param	v1	Первый вектор.
     * @param	v2	Второй вектор.
     * @return		Скалярное произведение.
     */
    Vec3f.scalarProduct = function (v1, v2) { return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z; };
    /**
     * Возвращает векторное произведение двух векторов переданных в параметрах.
     *
     * @param	v1	Первый вектор.
     * @param	v2	Второй вектор.
     * @return		Векторное произведение векторов.
     */
    Vec3f.crossProduct = function (v1, v2) { return new Vec3f(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x); };
    /**
     * Возвращает единичный вектор-направление от первой точки ко второй.
     *
     * @param	v1	Первая точка.
     * @param	v2	Вторая точка.
     * @return		Единичный вектор-направление.
     */
    Vec3f.getUvBetween = function (v1, v2) { return new Vec3f(v2.minus(v1)).normalise(); };
    return Vec3f;
}());



/***/ }),

/***/ "./movikjs/visualisation/Scene.ts":
/*!****************************************!*\
  !*** ./movikjs/visualisation/Scene.ts ***!
  \****************************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
!(function webpackMissingModule() { var e = new Error("Cannot find module './Camera'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var ATTR_POSITION_NAME = 'a_position';
var ATTR_POSITION_LOC = 0;
var ATTR_COLOR_NAME = 'a_color';
var ATTR_COLOR_LOC = 1;
var Scene = /** @class */ (function () {
    function Scene(canvasID) {
        var _this = this;
        this._primitives = [];
        this._points = [];
        this.onRender = function () {
            _this.gCamera.updateViewMatrix();
            _this.gl.fClear();
            _this.gGridShader.activate()
                .setCameraMatrix(_this.gCamera.viewMatrix)
                .renderModal(_this.gGridModal.preRender());
            for (var _i = 0, _a = _this._primitives; _i < _a.length; _i++) {
                var primitive = _a[_i];
                primitive.gShader.activate()
                    .setCameraMatrix(_this.gCamera.viewMatrix)
                    .renderModal(primitive.gModal.preRender());
            }
            for (var _b = 0, _c = _this._points; _b < _c.length; _b++) {
                var point = _c[_b];
                point.gShader.activate()
                    .setCameraMatrix(_this.gCamera.viewMatrix)
                    .renderModal(point.gModal.preRender());
            }
        };
        this.canvas = document.getElementById(canvasID);
        var gl = this.gl = this.canvas.getContext('webgl2');
        if (!gl) {
            console.error('WebGL context is not available.');
            return;
        }
        gl.mMeshCache = []; // Будем кешировать всё, что рисуем на сцене.
        // Задаём необходимые конфигурации сцене.
        gl.cullFace(gl.BACK); // Back is also default
        gl.frontFace(gl.CCW); // Dont really need to set it, its ccw by default.
        gl.enable(gl.DEPTH_TEST); // Shouldn't use this, use something else to add depth detection
        gl.enable(gl.CULL_FACE); // Cull back face, so only show triangles that are created clockwise
        gl.depthFunc(gl.LEQUAL); // Near things obscure far things
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA); // Setup default alpha blending
        gl.clearColor(1.0, 1.0, 1.0, 1.0); // Set clear color
        //  Чистим канвас от всего, что изображено.
        gl.fClear = function () {
            this.clear(this.COLOR_BUFFER_BIT | this.DEPTH_BUFFER_BIT);
            return this;
        };
        // Создаём и заполняем буффер.
        gl.fCreateArrayBuffer = function (floatAry, isStatic) {
            if (isStatic === void 0) { isStatic = true; }
            var buf = this.createBuffer();
            this.bindBuffer(this.ARRAY_BUFFER, buf);
            this.bufferData(this.ARRAY_BUFFER, floatAry, (isStatic) ? this.STATIC_DRAW : this.DYNAMIC_DRAW);
            this.bindBuffer(this.ARRAY_BUFFER, null);
            return buf;
        };
        // Превращаем массивы в GL буферы и заполняем VAO, которые будут предопределять буферы стандартных атрибутов шейдера.
        gl.fCreateMeshVAO = function (name, arrVert, arrCol, drawMode) {
            if (drawMode === void 0) { drawMode = this.LINES; }
            var res = { drawMode: drawMode };
            res.vao = this.createVertexArray();
            this.bindVertexArray(res.vao);
            //.......................................................
            // Задаём константы
            if (arrVert) {
                res.bufVertices = this.createBuffer();
                res.vertexComponentLen = 3;
                res.vertexCount = arrVert.length / res.vertexComponentLen;
                this.bindBuffer(this.ARRAY_BUFFER, res.bufVertices);
                this.bufferData(this.ARRAY_BUFFER, new Float32Array(arrVert), this.STATIC_DRAW);
                this.enableVertexAttribArray(ATTR_POSITION_LOC);
                this.vertexAttribPointer(ATTR_POSITION_LOC, 3, this.FLOAT, false, 0, 0);
            }
            //.......................................................
            // Задаём цвета
            if (arrCol) {
                res.bufColors = this.createBuffer();
                this.bindBuffer(this.ARRAY_BUFFER, res.bufColors);
                this.bufferData(this.ARRAY_BUFFER, new Float32Array(arrCol), this.STATIC_DRAW);
                this.enableVertexAttribArray(ATTR_COLOR_LOC);
                this.vertexAttribPointer(ATTR_COLOR_LOC, 4, this.FLOAT, false, 0, 0);
            }
            this.bindVertexArray(null); // !!!
            this.bindBuffer(this.ARRAY_BUFFER, null);
            this.mMeshCache[name] = res;
            return res;
        };
        gl.fSetSize = function (w, h) {
            this.canvas.style.width = w + 'px';
            this.canvas.style.height = h + 'px';
            this.canvas.width = w;
            this.canvas.height = h;
            this.viewport(0, 0, w, h);
            return this;
        };
        gl.fFitScreen = function (wp, hp) {
            if (wp === void 0) { wp = 1; }
            if (hp === void 0) { hp = 1; }
            return this.fSetSize(window.innerWidth * wp, window.innerHeight * hp);
        };
    }
    Scene.prototype.init = function () {
        this.gl.fFitScreen(1, 1).fClear();
        this.gCamera = new !(function webpackMissingModule() { var e = new Error("Cannot find module './Camera'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.gl);
        this.gCamera.transform.position.set(0, 0.3, 3);
        this.gCameraCtrl = new !(function webpackMissingModule() { var e = new Error("Cannot find module './Camera'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.gl, this.gCamera);
        this.gGridShader = new GridAxisShader(this.gl, this.gCamera.projectionMatrix);
        this.gGridModal = Primatives.GridAxis.createModal(this.gl, true);
        this.RLoop = new RenderLoop(this.onRender, 30).start();
    };
    Scene.prototype.addPrimitive = function (structure) {
        var prim = new Primitive(this.gl, this.gCamera, structure);
        this._primitives.push(prim);
        return prim;
    };
    Scene.prototype.addPoint = function (vec, color) {
        this._points.push(new Point(this.gl, this.gCamera, vec, color));
    };
    return Scene;
}());

var Point = /** @class */ (function () {
    function Point(gl, camera, vec, color) {
        this.gShader = new PrimitiveShader(gl, camera.projectionMatrix);
        this.gModal = Primatives.Point.createModal(gl, 'point', vec.toArray(), color.toArray());
    }
    return Point;
}());
var Primitive = /** @class */ (function () {
    function Primitive(gl, camera, structure) {
        this.structure = structure;
        this.parseStructure();
        this.gl = gl;
        this.gShader = new PrimitiveShader(gl, camera.projectionMatrix);
        this.gModal = Primatives.Primitive.createModal(gl, this.name, this.verts, this.colors);
    }
    Primitive.prototype.parseStructure = function () {
        var _a, _b, _c, _d;
        this.name = this.structure.getName();
        this.effectors = [];
        this.colors = [];
        this.verts = [];
        for (var i = 0; i < this.structure.getNumChains(); i++) {
            for (var _i = 0, _e = this.structure.getChain(i).getChain(); _i < _e.length; _i++) {
                var bone = _e[_i];
                (_a = this.colors).push.apply(_a, bone.getColour().toArray());
                (_b = this.colors).push.apply(_b, bone.getColour().toArray());
                (_c = this.verts).push.apply(_c, bone.getStartLocationAsArray());
                (_d = this.verts).push.apply(_d, bone.getEndLocationAsArray());
            }
            this.effectors.push(this.structure.getChain(i));
        }
    };
    Primitive.prototype.moveTo = function (index, vec) {
        for (var i = 0; i < this.structure.getNumChains(); i++) {
            this.structure.getChain(i).setEmbeddedTargetMode(index !== i);
            if (index !== i) {
                this.structure.getChain(i).updateEmbeddedTarget(this.structure.getChain(i).getEffectorLocation());
            }
        }
        this.structure.solveForTarget(vec);
        this.parseStructure();
        this.gModal = Primatives.Primitive.createModal(this.gl, this.name, this.verts, this.colors);
    };
    return Primitive;
}());


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nb3Zpa0pTL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01vdmlrSlMvLi9tb3Zpa2pzL2luZGV4LnRzIiwid2VicGFjazovL01vdmlrSlMvLi9tb3Zpa2pzL21haW4vQmFzZWJvbmVDb25zdHJhaW50VHlwZTJELnRzIiwid2VicGFjazovL01vdmlrSlMvLi9tb3Zpa2pzL21haW4vQmFzZWJvbmVDb25zdHJhaW50VHlwZTNELnRzIiwid2VicGFjazovL01vdmlrSlMvLi9tb3Zpa2pzL21haW4vQm9uZUNvbm5lY3Rpb25Qb2ludC50cyIsIndlYnBhY2s6Ly9Nb3Zpa0pTLy4vbW92aWtqcy9tYWluL0NvbnN0cmFpbnRDb29yZGluYXRlU3lzdGVtLnRzIiwid2VicGFjazovL01vdmlrSlMvLi9tb3Zpa2pzL21haW4vRmFicmlrQm9uZTJELnRzIiwid2VicGFjazovL01vdmlrSlMvLi9tb3Zpa2pzL21haW4vRmFicmlrQm9uZTNELnRzIiwid2VicGFjazovL01vdmlrSlMvLi9tb3Zpa2pzL21haW4vRmFicmlrQ2hhaW4yRC50cyIsIndlYnBhY2s6Ly9Nb3Zpa0pTLy4vbW92aWtqcy9tYWluL0ZhYnJpa0NoYWluM0QudHMiLCJ3ZWJwYWNrOi8vTW92aWtKUy8uL21vdmlranMvbWFpbi9GYWJyaWtKb2ludDJELnRzIiwid2VicGFjazovL01vdmlrSlMvLi9tb3Zpa2pzL21haW4vRmFicmlrSm9pbnQzRC50cyIsIndlYnBhY2s6Ly9Nb3Zpa0pTLy4vbW92aWtqcy9tYWluL0ZhYnJpa1N0cnVjdHVyZTJELnRzIiwid2VicGFjazovL01vdmlrSlMvLi9tb3Zpa2pzL21haW4vRmFicmlrU3RydWN0dXJlM0QudHMiLCJ3ZWJwYWNrOi8vTW92aWtKUy8uL21vdmlranMvbWFpbi9Kb2ludFR5cGUudHMiLCJ3ZWJwYWNrOi8vTW92aWtKUy8uL21vdmlranMvdXRpbHMvQ29sb3VyNGYudHMiLCJ3ZWJwYWNrOi8vTW92aWtKUy8uL21vdmlranMvdXRpbHMvTWF0M2YudHMiLCJ3ZWJwYWNrOi8vTW92aWtKUy8uL21vdmlranMvdXRpbHMvTWF0NGYudHMiLCJ3ZWJwYWNrOi8vTW92aWtKUy8uL21vdmlranMvdXRpbHMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTW92aWtKUy8uL21vdmlranMvdXRpbHMvVmVjMmYudHMiLCJ3ZWJwYWNrOi8vTW92aWtKUy8uL21vdmlranMvdXRpbHMvVmVjM2YudHMiLCJ3ZWJwYWNrOi8vTW92aWtKUy8uL21vdmlranMvdmlzdWFsaXNhdGlvbi9TY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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LENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEdBQUcsR0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEdBQUcsR0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEdBQUcsR0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVqRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7Ozs7VUFPTTtJQUNOLDBCQUFVLEdBQVYsVUFBVyxZQUFtQixFQUFFLFNBQWlCO1FBQzdDLElBQU8sSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFFMUIsSUFBTyxHQUFHLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxJQUFPLEdBQUcsR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLElBQU8sV0FBVyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFL0IsSUFBTyxFQUFFLEdBQUcsWUFBWSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQU8sRUFBRSxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFPLEVBQUUsR0FBRyxZQUFZLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBTyxFQUFFLEdBQUcsWUFBWSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDakMsSUFBTyxFQUFFLEdBQUcsWUFBWSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDakMsSUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFaEMsSUFBTSxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDaEUsSUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFHLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDbEMsSUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFHLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFbEMsSUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFHLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDbEMsSUFBTSxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDaEUsSUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFHLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFbEMsSUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFHLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDbEMsSUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFHLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDbEMsSUFBTSxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFFaEUsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDN0QsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDN0QsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFN0QsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDN0QsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDN0QsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFN0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxH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QUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDOUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDOUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDaEQsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFFbEQsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFHM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhGLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFdEIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFaEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRU0sbUJBQWEsR0FBcEIsVUFBcUIsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUdNLFdBQUssR0FBWixVQUFhLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixHQUFH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QUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNaLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFHakIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMzQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDM0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMzQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDM0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMzQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVNLFlBQU0sR0FBYixVQUFjLEdBQUcsRUFBRSxHQUFHO1FBQ2xCLElBQUksR0FBRyxLQUFLLFNBQVM7WUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWpDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDdEQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDdEQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFDeEQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFFMUQsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFDM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFHM0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWhGLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDdkIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFaEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDcEQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDcEQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDcEQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDcEQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDcEQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFcEQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLGVBQVMsR0FBaEIsVUFBaUIsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN6QixHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxRCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNuUUQ7QUFBQTtBQUFBO0FBQW9DO0FBSXBDOztHQUVHO0FBQ0g7SUFBQTtJQStGQSxDQUFDO0lBOUNHOzs7OztPQUtHO0lBQ0ksVUFBSSxHQUFYLFVBQVksS0FBYTtRQUNyQixJQUFJLEtBQUssSUFBSSxHQUFHLEVBQUU7WUFDZCxPQUFPLEdBQUcsQ0FBQztTQUNkO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSx5QkFBbUIsR0FBMUIsVUFBMkIsV0FBMEI7UUFDakQsSUFBSyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxFQUFFO1lBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztTQUNoRTtJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLG9CQUFjLEdBQXJCLFVBQXNCLE1BQWM7UUFDaEMsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0wsQ0FBQztJQW5GRCwwREFBMEQ7SUFDbkQsa0JBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztJQUMvQixrQkFBWSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBRXRDLDJEQUEyRDtJQUNwRCxlQUFTLEdBQUcsVUFBQyxHQUFHLElBQUssVUFBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLENBQUM7SUFFM0M7O09BRUc7SUFDSSxTQUFHLEdBQVMsSUFBSSxrREFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxXQUFLLEdBQU8sSUFBSSxrREFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxVQUFJLEdBQVEsSUFBSSxrREFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxhQUFPLEdBQUssSUFBSSxrREFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxlQUFTLEdBQUcsSUFBSSxrREFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxjQUFRLEdBQUksSUFBSSxrREFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxXQUFLLEdBQU8sSUFBSSxrREFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxVQUFJLEdBQVEsSUFBSSxrREFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxXQUFLLEdBQU8sSUFBSSxrREFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxZQUFNLEdBQU0sSUFBSSxrREFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxVQUFJLEdBQVEsSUFBSSxrREFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFH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QUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7YUFDckc7U0FDSjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDIiwiZmlsZSI6Im1vdmlrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tb3Zpa2pzL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IHtCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0R9IGZyb20gJy4vbWFpbi9CYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0QnO1xuZXhwb3J0IHtCYXNlYm9uZUNvbnN0cmFpbnRUeXBlMkR9IGZyb20gJy4vbWFpbi9CYXNlYm9uZUNvbnN0cmFpbnRUeXBlMkQnO1xuZXhwb3J0IHtKb2ludFR5cGV9IGZyb20gJy4vbWFpbi9Kb2ludFR5cGUnO1xuZXhwb3J0IHtCb25lQ29ubmVjdGlvblBvaW50fSBmcm9tICcuL21haW4vQm9uZUNvbm5lY3Rpb25Qb2ludCc7XG5leHBvcnQge0NvbnN0cmFpbnRDb29yZGluYXRlU3lzdGVtfSBmcm9tICcuL21haW4vQ29uc3RyYWludENvb3JkaW5hdGVTeXN0ZW0nO1xuXG5leHBvcnQge0ZhYnJpa0pvaW50MkR9IGZyb20gJy4vbWFpbi9GYWJyaWtKb2ludDJEJztcbmV4cG9ydCB7RmFicmlrSm9pbnQzRH0gZnJvbSAnLi9tYWluL0ZhYnJpa0pvaW50M0QnO1xuXG5leHBvcnQge0ZhYnJpa0JvbmUyRH0gZnJvbSAnLi9tYWluL0ZhYnJpa0JvbmUyRCc7XG5leHBvcnQge0ZhYnJpa0JvbmUzRH0gZnJvbSAnLi9tYWluL0ZhYnJpa0JvbmUzRCc7XG5cbmV4cG9ydCB7RmFicmlrQ2hhaW4yRH0gZnJvbSAnLi9tYWluL0ZhYnJpa0NoYWluMkQnO1xuZXhwb3J0IHtGYWJyaWtDaGFpbjNEfSBmcm9tICcuL21haW4vRmFicmlrQ2hhaW4zRCc7XG5cbmV4cG9ydCB7RmFicmlrU3RydWN0dXJlMkR9IGZyb20gJy4vbWFpbi9GYWJyaWtTdHJ1Y3R1cmUyRCc7XG5leHBvcnQge0ZhYnJpa1N0cnVjdHVyZTNEfSBmcm9tICcuL21haW4vRmFicmlrU3RydWN0dXJlM0QnO1xuXG5leHBvcnQge1ZlYzNmfSBmcm9tICcuL3V0aWxzL1ZlYzNmJztcbmV4cG9ydCB7TWF0M2Z9IGZyb20gJy4vdXRpbHMvTWF0M2YnO1xuZXhwb3J0IHtNYXQ0Zn0gZnJvbSAnLi91dGlscy9NYXQ0Zic7XG5leHBvcnQge1ZlYzJmfSBmcm9tICcuL3V0aWxzL1ZlYzJmJztcbmV4cG9ydCB7VXRpbHN9IGZyb20gJy4vdXRpbHMvVXRpbHMnO1xuZXhwb3J0IHtDb2xvdXI0Zn0gZnJvbSAnLi91dGlscy9Db2xvdXI0Zic7XG5cbmV4cG9ydCB7U2NlbmV9IGZyb20gJy4vdmlzdWFsaXNhdGlvbi9TY2VuZSdcbiIsIi8qKlxuICog0KLQuNC/0Ysg0L7Qs9GA0LDQvdC40YfQtdC90LjQuSDQv9C10YDQstC+0Lkg0LrQvtGB0YLQuCDQsiDRhtC10L/QuC5cbiAqXG4gKiDQmNC80LXQtdGCINGB0LvQtdC00YPRjtGJ0LjQtSDQt9C90LDRh9C10L3QuNGPOlxuICogPHVsPlxuICogPGxpPk5PTkUgLSDQkdC10Lcg0L7Qs9GA0LDQvdC40YfQtdC90LjQuS48L2xpPlxuICogPGxpPkdMT0JBTF9BQlNPTFVURSAtINCe0LPRgNCw0L3QuNGH0LXQvdCwINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQvNC40YDQvtCy0YvRhSDQutC+0L7RgNC00LjQvdCw0YIuPC9saT5cbiAqIDxsaT5MT0NBTF9SRUxBVElWRSAtINCe0LPRgNCw0L3QuNGH0LXQvdCwINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQv9GA0LjQutGA0LXQv9C70ZHQvdC90L7QuSDQuiDQvdC10Lkg0LrQvtGB0YLQuC48L2xpPlxuICogPGxpPkxPQ0FMX0FCU09MVVRFIC0g0J7Qs9GA0LDQvdC40YfQtdC90LAg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC/0YDQuNC60YDQtdC/0LvRkdC90L3QvtC5INC6INC90LXQuSDQutC+0YHRgtC4LjwvbGk+XG4gKiA8L3VsPlxuICovXG5leHBvcnQgZW51bSBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlMkQgeyBOT05FLCBHTE9CQUxfQUJTT0xVVEUsIExPQ0FMX1JFTEFUSVZFLCBMT0NBTF9BQlNPTFVURSB9XG4iLCIvKipcbiAqINCi0LjQv9GLINC+0LPRgNCw0L3QuNGH0LXQvdC40Lkg0L/QtdGA0LLQvtC5INC60L7RgdGC0Lgg0LIg0YbQtdC/0LguXG4gKlxuICog0JjQvNC10LXRgiDRgdC70LXQtNGD0Y7RidC40LUg0LfQvdCw0YfQtdC90LjRjzpcbiAqIDx1bD5cbiAqIDxsaT5OT05FIC0g0JHQtdC3INC+0LPRgNCw0L3QuNGH0LXQvdC40LkuPC9saT5cbiAqIDxsaT5HTE9CQUxfUk9UT1IgLSDQntCz0YDQsNC90LjRh9C10L3QsCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0LzQuNGA0L7QstGL0YUg0LrQvtC+0YDQtNC40L3QsNGCLiDQmNC80LXQtdGCINGI0LDRgNC+0L7QsdGA0LDQt9C90YvQtSDQstC+0LfQvNC+0LbQvdC+0YHRgtC4INCy0YDQsNGJ0LXQvdC40Y8uPC9saT5cbiAqIDxsaT5MT0NBTF9ST1RPUiAtINCe0LPRgNCw0L3QuNGH0LXQvdCwINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQv9GA0LjQutGA0LXQv9C70ZHQvdC90L7QuSDQuiDQvdC10Lkg0LrQvtGB0YLQuC4g0JjQvNC10LXRgiDRiNCw0YDQvtC+0LHRgNCw0LfQvdGL0LUg0LLQvtC30LzQvtC20L3QvtGB0YLQuCDQstGA0LDRidC10L3QuNGPLjwvbGk+XG4gKiA8bGk+R0xPQkFMX0hJTkdFIC0g0J7Qs9GA0LDQvdC40YfQtdC90LAg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC80LjRgNC+0LLRi9GFINC60L7QvtGA0LTQuNC90LDRgi4g0JjQvNC10LXRgiDRiNCw0YDQvdC40YDQvdGL0LUg0LLQvtC30LzQvtC20L3QvtGB0YLQuCDQstGA0LDRidC10L3QuNGPLiA8L2xpPlxuICogPGxpPkxPQ0FMX0hJTkdFIC0g0J7Qs9GA0LDQvdC40YfQtdC90LAg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC/0YDQuNC60YDQtdC/0LvRkdC90L3QvtC5INC6INC90LXQuSDQutC+0YHRgtC4LiDQmNC80LXQtdGCINGI0LDRgNC90LjRgNC90YvQtSDQstC+0LfQvNC+0LbQvdC+0YHRgtC4INCy0YDQsNGJ0LXQvdC40Y8uIDwvbGk+XG4gKiA8L3VsPlxuICovXG5leHBvcnQgZW51bSBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0Qge1xuICAgIE5PTkUsXG4gICAgR0xPQkFMX1JPVE9SLFxuICAgIExPQ0FMX1JPVE9SLFxuICAgIEdMT0JBTF9ISU5HRSxcbiAgICBMT0NBTF9ISU5HRVxufVxuIiwiLyoqXG4gKiDQotC40L/RiyDRgdCy0Y/Qt9C4INC80LXQttC00YMgRmFicmlrQm9uZS5cbiAqINCSINC90LDRh9Cw0LvQtSDQuNC70Lgg0LrQvtC90YbQtSDQutC+0YHRgtC4INGF0L7Qt9GP0LjQvdCwINGA0LDRgdC/0L7Qu9Cw0LPQsNC10YLRgdGPINC00LDQvdC90LDRjyDQutC+0YHRgtGMLlxuICovXG5leHBvcnQgZW51bSBCb25lQ29ubmVjdGlvblBvaW50IHsgU1RBUlQsIEVORCB9XG4iLCIvKipcbiAqIENvbnN0cmFpbnRDb29yZGluYXRlU3lzdGVtXHTQodC40YHRgtC10LzQsCDQutC+0L7RgNC00LjQvdCw0YIsINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQutC+0YLQvtGA0L7QuSDRgNCw0YHRgdC80LDRgtGA0LjQstCw0LXRgtGB0Y8g0L7Qs9GA0LDQvdC40YfQtdC90LjRjy5cbiAqIDxwPlxuICogTE9DQUwgKGRlZmF1bHQpIC0g0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC/0YDQtdC00YvQtNGD0YnQtdC5INC60L7RgdGC0Lgg0LIg0YbQtdC/0LguXG4gKiBHTE9CQUwgLSDQvtGC0L3QvtGB0LjRgtGM0LvRjNC90L4g0LzQuNGA0L7QstC+0Lkg0YHQuNGB0YLQtdC80Ysg0LrQvtC+0YDQtNC40L3QsNGCLlxuICovXG5leHBvcnQgZW51bSBDb25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbSB7IExPQ0FMLCBHTE9CQUwgfVxuIiwiaW1wb3J0IHtWZWMyZn0gZnJvbSAnLi4vdXRpbHMvVmVjMmYnO1xuaW1wb3J0IHtGYWJyaWtKb2ludDJEfSBmcm9tICcuL0ZhYnJpa0pvaW50MkQnO1xuaW1wb3J0IHtDb2xvdXI0Zn0gZnJvbSAnLi4vdXRpbHMvQ29sb3VyNGYnO1xuaW1wb3J0IHtVdGlsc30gZnJvbSAnLi4vdXRpbHMvVXRpbHMnO1xuaW1wb3J0IHtDb25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbX0gZnJvbSAnLi9Db25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbSc7XG5cbi8qKlxuICog0JrQvtGB0YLRjC5cbiAqIDxwPlxuICogRmFicmlrQm9uZTJEINGB0L7RgdGC0L7QuNGCINC40Lcg0L3QsNGH0LDQu9GM0L3QvtC5INC4INC60L7QvdC10YfQvdC+0Lkg0L/QvtC30LjRhtC40Lgg0LggRmFicmlrSm9pbnQyRCwg0LrQvtGC0L7RgNGL0Lkg0L7Qs9GA0LDQvdC40YfQuNCy0LDQtdGCINCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0L/QvtCy0L7RgNC+0YLQsFxuICog0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC/0YDQtdC00YvQtNGD0YnQtdC5INC60L7RgdGC0Lgg0LIg0YbQtdC/0Lgg0LjQu9C4INC80LjRgNC+0LLQvtC5INGB0LjRgdGC0LXQvNGLINC60L7QvtGA0LTQuNC90LDRgi5cbiAqL1xuZXhwb3J0IGNsYXNzIEZhYnJpa0JvbmUyRCB7XG4gICAgLyoqXG4gICAgICogX2pvaW50XHTQodGD0YHRgtCw0LIg0L/RgNC40LrRgNC10L/Qu9GR0L3QvdGL0Lkg0LogRmFicmlrQm9uZTJELlxuICAgICAqIDxwPlxuICAgICAqINCa0LDQttC00LDRjyDQutC+0YHRgtGMINGB0L7QtNC10YDQttC40YIg0L7QtNC40L0g0YHRg9GB0YLQsNCyLCDQutC+0YLQvtGA0YvQuSDQutGA0LXQv9C40YIg0LTQsNC90L3Rg9GOINC60L7RgdGC0Ywg0Log0L/RgNC10LTRi9C00YPRidC10LkuXG4gICAgICogPHA+XG4gICAgICog0J/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0YHRg9GB0YLQsNCyINC90LjRh9C10Lwg0L3QtSDQvtCz0YDQsNC90LjRh9C10L0uINCe0L0g0LzQvtC20LXRgiDQstGA0LDRidCw0YLRjNGB0Y8g0LLQviDQstGB0LXRhSDQstC+0LfQvNC+0LbQvdGL0YUg0L3QsNC/0YDQsNCy0LvQtdC90LjRj9GFLlxuICAgICAqINCY0LfQvNC10L3QuNGC0Ywg0L/QsNGA0LDQvNC10YLRgNGLINGB0YPRgdGC0LDQstCwINC80L7QttC90L4g0YfQtdGA0LXQtyDQutC+0L3RgdGC0YDRg9C60YLQvtGAINC60L7RgdGC0Lgg0LjQu9C4INGBINC/0L7QvNC+0YnRjNGOINC80LXRgtC+0LTQvtCyXG4gICAgICoge0BsaW5rICNzZXRDbG9ja3dpc2VDb25zdHJhaW50RGVncyhmbG9hdCl9INC4IHtAbGluayAjc2V0QW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKGZsb2F0KX0uXG4gICAgICovXG4gICAgcHJpdmF0ZSBfam9pbnQgPSBuZXcgRmFicmlrSm9pbnQyRCgpO1xuXG4gICAgLyoqXG4gICAgICogX3N0YXJ0TG9jYXRpb25cdNCd0LDRh9Cw0LvRjNC90LDRjyDQv9C+0LfQuNGG0LjRjyDQutC+0YHRgtC4LlxuICAgICAqIDxwPlxuICAgICAqINCd0LDRh9Cw0LvRjNC90LDRjyDQv9C+0LfQuNGG0LjRjyDQvNC+0LbQtdGCINCx0YvRgtGMINC30LDQtNCw0L3QsCDRh9C10YDQtdC3INC60L7QvdGB0YLRgNGD0LrRgtC+cCDQuNC70Lgg0YEg0L/QvtC80L7RidGM0Y4g0LzQtdGC0L7QtNC+0LIgJ2FkZEJvbmUnXG4gICAgICog0LjQu9C4ICdhZGRDb25zZWN1dGl2ZUJvbmUnINC40Lcg0LrQu9Cw0YHRgdCwIHtAbGluayBGYWJyaWtDaGFpbjJEfS5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9zdGFydExvY2F0aW9uID0gbmV3IFZlYzJmKCk7XG5cbiAgICAvKipcbiAgICAgKiBfZW5kTG9jYXRpb25cdNCa0L7QvdC10YfQvdCw0Y8g0L/QvtC30LjRhtC40Y8g0LrQvtGB0YLQuC5cbiAgICAgKiA8cD5cbiAgICAgKiDQmtC+0L3QtdGH0L3QsNGPINC/0L7Qt9C40YbQuNGPINC80L7QttC10YIg0LHRi9GC0Ywg0LfQsNC00LDQvdCwINGH0LXRgNC10Lcg0LrQvtC90YHRgtGA0YPQutGC0L5wINC40LvQuCDRgSDQv9C+0LzQvtGJ0YzRjiDQvNC10YLQvtC00LAgJ2FkZEJvbmUnXG4gICAgICog0LjQtyDQutC70LDRgdGB0LAge0BsaW5rIEZhYnJpa0NoYWluMkR9LlxuICAgICAqL1xuICAgIHByaXZhdGUgX2VuZExvY2F0aW9uID0gbmV3IFZlYzJmKCk7XG5cbiAgICAvKipcbiAgICAgKiBfbmFtZVx00J3QsNC30LLQsNC90LjQtSDQutC+0YHRgtC4LlxuICAgICAqIDxwPlxuICAgICAqINCd0LXQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+0LUg0L/QvtC70LUs0L7QsdC70LXQs9GH0LDRjtGJ0LXQtSDQuNC00LXQvdGC0LjRhNC40LrQsNGG0LjRjiDQutC+0YHRgtC4INCyINGG0LXQv9C4LlxuICAgICAqL1xuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZyA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogX2xlbmd0aFx00JTQu9C40L3QsCDQutC+0YHRgtC4INCy0YvRh9C40YHQu9C10L3QvdCw0Y8g0LjQtyDQtdGRINC90LDRh9Cw0LvRjNC90L7QuSDQuCDQutC+0L3QtdGH0L3QvtC5INC/0L7Qt9C40YbQuNC4LlxuICAgICAqIDxwPlxuICAgICAqINCSINC/0YDQvtGG0LXRgdGB0LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8g0LrQvtGB0YLQuCDQtdGRINC00LvQuNC90LAg0L3QtSDQvNC10L3Rj9C10YLRgdGPLlxuICAgICAqL1xuICAgIHByaXZhdGUgX2xlbmd0aDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfZ2xvYmFsQ29uc3RyYWludFVWID0gbmV3IFZlYzJmKDEuMCwgMC4wKTtcblxuICAgIC8qKlxuICAgICAqINCm0LLQtdGCINC60L7RgdGC0LguXG4gICAgICogPHA+XG4gICAgICog0J/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0LrQvtGB0YLRjCDQsdC10LvQsNGPINC90LXQv9GA0L7Qt9GA0LDRh9C90LDRjy5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9jb2xvdXIgPSBuZXcgQ29sb3VyNGYoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0gQ29uc3RydWN0b3JzIC0tLS0tLS0tLS1cblxuICAgIC8qKlxuICAgICAqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAuXG4gICAgICogPHA+XG4gICAgICog0J/RgNC40L3QuNC80LDQtdGCINC90LXRgdC60L7Qu9GM0LrQviDQstC+0LfQvNC+0LbQvdGL0YUg0LrQvtC80LHQuNC90LDRhtC40Lkg0L/QsNGA0LDQvNC10YLRgNC+0LI6XG4gICAgICogPHA+XG4gICAgICog0JrQvtC90YHRgtGA0YPQutGC0L7RgCDQsdC10Lcg0L/QsNGA0LDQvNC10YLRgNC+0LIuINCS0YHQtSDQv9C+0LvRjyDQutC70LDRgdGB0LAg0L/RgNC40L3QuNC80LDRjtGCINC30L3QsNGH0LXQvdC40Y8g0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4uXG4gICAgICogPHA+XG4gICAgICog0JXRgdC70Lgg0YLRgNC10YLQuNC5INC/0LDRgNCw0LzQtdGC0YAg0LrQvtC90YHRgtGA0YPQutGC0L7RgNCwINC30LDQtNCw0L0g0LrQsNC6IG51bGwg0LjQu9C4IHVuZGVmaWVuZWQsINC90L4g0L/RgNC4INGN0YLQvtC8INC/0LXRgNCy0YvQtSAyINC/0LDRgNCw0LzQtdGC0YDQsCDQv9GA0LjRgdGD0YLRgdGC0LLRg9GO0YIsXG4gICAgICog0YLQviDQutC+0L3RgdGC0YDRg9C60YLQvtGAINCx0YPQtNC10YIg0LLQvtGB0L/RgNC40L3QuNC80LDRgtGMINC/0LXRgNCy0YvQtSAyINC/0LDRgNCw0LzQtdGC0YDQsCDQutCw0Log0L3QsNGH0LDQu9GM0L3Rg9GOINC4INC60L7QvdC10YfQvdGD0Y4g0L/QvtC30LjRhtC40Lgg0LTQsNC90L3QvtC5INC60L7RgdGC0LguXG4gICAgICog0J/QsNGA0LDQvNC10YLRgNGLINGBINGH0LXRgtCy0LXRgNGC0L7Qs9C+INC/0L4g0YHQtdC00YzQvNC+0Lkg0L7Qv9GG0LjQvtC90LDQu9GM0L3Riy5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0c3RhcnRMb2NhdGlvblx0ICAgICAgICAgICAg0J3QsNGH0LDQu9GM0L3QsNGPINC/0L7Qt9C40YbQuNGPINC60L7RgdGC0Lgg0LIg0LzQuNGA0L7QstC+0Lkg0YHQuNGB0YLQtdC80LUg0LrQvtC+0YDQtNC40L3QsNGCLlxuICAgICAqIEBwYXJhbVx0ZW5kTG9jYXRpb25PckRpcmVjdGlvblx0XHTQmtC+0L3QtdGH0L3QsNGPINC/0L7Qt9C40YbQuNGPINC60L7RgdGC0Lgg0LIg0LzQuNGA0L7QstC+0Lkg0YHQuNGB0YLQtdC80LUg0LrQvtC+0YDQtNC40L3QsNGCLlxuICAgICAqIEBwYXJhbVx0bGVuZ3RoXHRcdCAgICAgICAgICAgICAgICBudWxsINC40LvQuCB1bmRlZmluZWQuXG4gICAgICogQHBhcmFtXHRjd0NvbnN0cmFpbnREZWdzXHRcdCAgICDQo9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUuXG4gICAgICogQHBhcmFtXHRhY3dDb25zdHJhaW50RGVnc1x0XHQgICAg0KPQs9C+0Lst0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LguXG4gICAgICogQHBhcmFtXHRjb2xvdXJcdFx0ICAgICAgICAgICAgICAgINCm0LLQtdGCINC60L7RgdGC0LguXG4gICAgICogQHBhcmFtXHRuYW1lXHRcdCAgICAgICAgICAgICAgICDQndCw0LfQstCw0L3QuNC1INC60L7RgdGC0LguXG4gICAgICogPHA+XG4gICAgICog0JXRgdC70Lgg0YLRgNC10YLQuNC5INC/0LDRgNCw0LzQtdGC0YAg0LrQvtC90YHRgtGA0YPQutGC0L7RgNCwIC0g0Y3RgtC+INGH0LjRgdC70L4sINC90L4g0L/RgNC4INGN0YLQvtC8INC/0LXRgNCy0YvQtSAyINC/0LDRgNCw0LzQtdGC0YDQsCDQv9GA0LjRgdGD0YLRgdGC0LLRg9GO0YIsXG4gICAgICog0YLQviDQutC+0L3RgdGC0YDRg9C60YLQvtGAINCx0YPQtNC10YIg0LLQvtGB0L/RgNC40L3QuNC80LDRgtGMINC/0LXRgNCy0YvQtSAyINC/0LDRgNCw0LzQtdGC0YDQsCDQutCw0Log0L3QsNGH0LDQu9GM0L3Rg9GOINC/0L7Qt9C40YbQuNGOINC00LDQvdC90L7QuSDQutC+0YHRgtC4INC4INC10ZEg0L3QsNC/0YDQsNCy0LvQtdC90LjQtS5cbiAgICAgKiDQn9Cw0YDQsNC80LXRgtGA0Ysg0YEg0YfQtdGC0LLQtdGA0YLQvtCz0L4g0L/QviDRgdC10LTRjNC80L7QuSDQvtC/0YbQuNC+0L3QsNC70YzQvdGLLlxuICAgICAqXG4gICAgICogQHBhcmFtXHRzdGFydExvY2F0aW9uXHQgICAgICAgICAgICDQndCw0YfQsNC70YzQvdCw0Y8g0L/QvtC30LjRhtC40Y8g0LrQvtGB0YLQuCDQsiDQvNC40YDQvtCy0L7QuSDRgdC40YHRgtC10LzQtSDQutC+0L7RgNC00LjQvdCw0YIuXG4gICAgICogQHBhcmFtXHRlbmRMb2NhdGlvbk9yRGlyZWN0aW9uXHRcdNCa0L7QvdC10YfQvdCw0Y8g0L/QvtC30LjRhtC40Y8g0LrQvtGB0YLQuCDQsiDQvNC40YDQvtCy0L7QuSDRgdC40YHRgtC10LzQtSDQutC+0L7RgNC00LjQvdCw0YIuXG4gICAgICogQHBhcmFtXHRsZW5ndGhcdFx0ICAgICAgICAgICAgICAgIG51bGwg0LjQu9C4IHVuZGVmaW5lZC5cbiAgICAgKiBAcGFyYW1cdGN3Q29uc3RyYWludERlZ3NcdFx0ICAgINCj0LPQvtC7LdC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtS5cbiAgICAgKiBAcGFyYW1cdGFjd0NvbnN0cmFpbnREZWdzXHRcdCAgICDQo9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuC5cbiAgICAgKiBAcGFyYW1cdGNvbG91clx0XHQgICAgICAgICAgICAgICAg0KbQstC10YIg0LrQvtGB0YLQuC5cbiAgICAgKiBAcGFyYW1cdG5hbWVcdFx0ICAgICAgICAgICAgICAgINCd0LDQt9Cy0LDQvdC40LUg0LrQvtGB0YLQuC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgc3RhcnRMb2NhdGlvbj86IFZlYzJmLFxuICAgICAgICBlbmRMb2NhdGlvbk9yRGlyZWN0aW9uPzogVmVjMmYsXG4gICAgICAgIGxlbmd0aD86IG51bWJlciB8IG51bGwsXG4gICAgICAgIGN3Q29uc3RyYWludERlZ3M/OiBudW1iZXIsXG4gICAgICAgIGFjd0NvbnN0cmFpbnREZWdzPzogbnVtYmVyLFxuICAgICAgICBjb2xvdXI/OiBDb2xvdXI0ZixcbiAgICAgICAgbmFtZT86IHN0cmluZyxcbiAgICApIHtcbiAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWJyaWtCb25lMkQgY29uc3RydWN0b3IgY2FuIG5vdCBoYXZlIDEgcGFyYW0uJyk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmICghc3RhcnRMb2NhdGlvbiB8fCAhZW5kTG9jYXRpb25PckRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgRmFicmlrQm9uZTJEIGNvbnN0cnVjdG9yIHBhcmFtcy4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA9PT0gbnVsbCB8fCBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDQn9GA0LXQtNGB0YLQsNCy0LvRj9C10Lwg0L/QtdGA0LLRi9C1IDIg0LLQtdC60YLQvtGA0LAg0LrQsNC6INC90LDRh9Cw0LvRjNC90YPRjiDQuCDQutC+0L3QtdGH0L3Rg9GOINC/0L7Qt9C40YbQuNC4INC60L7RgdGC0LguXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0TG9jYXRpb24uc2V0KHN0YXJ0TG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbmRMb2NhdGlvbi5zZXQoZW5kTG9jYXRpb25PckRpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUxlbmd0aCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCf0YDQtdC00YHRgtCw0LLQu9GP0LXQvCDQv9C10YDQstGL0LUgMiDQstC10LrRgtC+0YDQsCDQutCw0Log0L3QsNGH0LDQu9GM0L3Rg9GOINC/0L7Qt9C40YbQuNGOINC4INC90LDQv9GA0LDQstC70LXQvdC40LUg0LrQvtGB0YLQuC5cbiAgICAgICAgICAgICAgICAgICAgVXRpbHMudmFsaWRhdGVEaXJlY3Rpb25VVihlbmRMb2NhdGlvbk9yRGlyZWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFydExvY2F0aW9uLnNldChzdGFydExvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5kTG9jYXRpb24uc2V0KCB0aGlzLl9zdGFydExvY2F0aW9uLnBsdXMoIFZlYzJmLm5vcm1hbGlzZWQoZW5kTG9jYXRpb25PckRpcmVjdGlvbikudGltZXMobGVuZ3RoKSApICk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlTGVuZ3RoKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjd0NvbnN0cmFpbnREZWdzID09PSAnbnVtYmVyJykgdGhpcy5zZXRDbG9ja3dpc2VDb25zdHJhaW50RGVncyhjd0NvbnN0cmFpbnREZWdzKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFjd0NvbnN0cmFpbnREZWdzID09PSAnbnVtYmVyJykgdGhpcy5zZXRBbnRpY2xvY2t3aXNlQ29uc3RyYWludERlZ3MoYWN3Q29uc3RyYWludERlZ3MpO1xuICAgICAgICAgICAgICAgIGlmIChjb2xvdXIgaW5zdGFuY2VvZiBDb2xvdXI0ZikgdGhpcy5fY29sb3VyLnNldChjb2xvdXIudG9BcnJheSgpKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0gTWV0aG9kcyAtLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNGR0YIg0LLRgdC10Lwg0L/QvtC70Y/QvCDQtNCw0L3QvdC+0Lkg0LrQvtGB0YLQuCDRgtCw0LrQuNC1INC20LAg0LfQvdCw0YfQtdC90LjRjyDQutCw0Log0YMg0LrQvtGB0YLQuCDQuNGB0YLQvtGH0L3QuNC60LAuXG4gICAgICogPHA+XG4gICAgICog0JrQvtC/0LjRgNC+0LLQsNC90LjQtSDRgdCy0L7QudGB0YLQsiDQvdC10LPQu9GD0LHQvtC60L7QtS5cbiAgICAgKiDQn9C+0YHQu9C1INC/0YDQuNC80LXQvdC90LXQuNGPINC80LXRgtC+0LTQsCDQtNCw0L3QvdCw0Y8g0LrQvtGB0YLRjCDQuCDQutC+0YHRgtGMINC40YHRgtC+0YfQvdC40Log0LHRg9C00YPRgiDRgdC+0LTQtdGA0LbQsNGC0Ywg0L7QsdGJ0LjQtSDRjdC70LXQvNC10L3RgtGLLlxuICAgICAqXG4gICAgICogQHBhcmFtXHRzb3VyY2VcdNCa0L7RgdGC0Ywg0LjRgdGC0L7Rh9C90LjQui5cbiAgICAgKi9cbiAgICBzZXQoc291cmNlOiBGYWJyaWtCb25lMkQpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRMb2NhdGlvbi5zZXQoc291cmNlLl9zdGFydExvY2F0aW9uKTtcbiAgICAgICAgdGhpcy5fZW5kTG9jYXRpb24uc2V0KHNvdXJjZS5fZW5kTG9jYXRpb24pO1xuICAgICAgICB0aGlzLl9qb2ludC5zZXQoc291cmNlLl9qb2ludCk7XG4gICAgICAgIHRoaXMuX2NvbG91ci5zZXQoc291cmNlLl9jb2xvdXIudG9BcnJheSgpKTtcblxuICAgICAgICB0aGlzLl9uYW1lICAgICAgICAgICAgICAgPSBzb3VyY2UuX25hbWU7XG4gICAgICAgIHRoaXMuX2xlbmd0aCAgICAgICAgICAgICA9IHNvdXJjZS5fbGVuZ3RoO1xuICAgICAgICB0aGlzLl9nbG9iYWxDb25zdHJhaW50VVYgPSBzb3VyY2UuX2dsb2JhbENvbnN0cmFpbnRVVjtcbiAgICB9XG5cbiAgICBnZXRHbG9iYWxDb25zdHJhaW50VVYgPSAoKSA9PiB0aGlzLl9nbG9iYWxDb25zdHJhaW50VVY7XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQtNC70LjQvdGDINC60L7RgdGC0LguXG4gICAgICpcbiAgICAgKiBAcmV0dXJuXG4gICAgICovXG4gICAgZ2V0TGVuZ3RoID0gKCk6IG51bWJlciA9PiB0aGlzLl9sZW5ndGg7XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNGR0YIg0YbQstC10YIg0LrQvtGB0YLQuC5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0Y29sb3VyXHTQptCy0LXRgiDQutC+0YHRgtC4LlxuICAgICAqL1xuICAgIHNldENvbG91cihjb2xvdXI6IENvbG91cjRmKTogdm9pZCB7dGhpcy5fY29sb3VyLnNldChjb2xvdXIudG9BcnJheSgpKTsgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YbQstC10YIg0LrQvtGB0YLQuC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gINCm0LLQtdGCINC60L7RgdGC0LguXG4gICAgICovXG4gICAgZ2V0Q29sb3VyID0gKCk6IENvbG91cjRmID0+IHRoaXMuX2NvbG91cjtcblxuICAgIC8qKlxuICAgICAqINCX0LDQtNCw0ZHRgiDQvdCw0YfQsNC70YzQvdGD0Y4g0L/QvtC30LjRhtC40Y4g0LrQvtGB0YLQuC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsb2NhdGlvbiDQndCw0YfQsNC70YzQvdCw0Y8g0L/QvtC30LjRhtC40Y8g0LrQvtGB0YLQuC5cbiAgICAgKi9cbiAgICBzZXRTdGFydExvY2F0aW9uKGxvY2F0aW9uOiBWZWMyZik6IHZvaWQge1xuICAgICAgICB0aGlzLl9zdGFydExvY2F0aW9uLnNldChsb2NhdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0L3QsNGH0LDQu9GM0L3Rg9GOINC/0L7Qt9C40YbQuNGOINC60L7RgdGC0LguXG4gICAgICpcbiAgICAgKiBAcmV0dXJuINCd0LDRh9Cw0LvRjNC90LDRjyDQv9C+0LfQuNGG0LjRjyDQutC+0YHRgtC4LlxuICAgICAqL1xuICAgIGdldFN0YXJ0TG9jYXRpb24gPSAoKTogVmVjMmYgID0+IHRoaXMuX3N0YXJ0TG9jYXRpb247XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQvdCw0YfQsNC70YzQvdGD0Y4g0L/QvtC30LjRhtC40Y4g0LrQvtGB0YLQuCDQsiDQstC40LTQtSDRh9C40YHQu9C+0LLQvtCz0L4g0LzQsNGB0YHQuNCy0LAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICDQndCw0YfQsNC70YzQvdCw0Y8g0L/QvtC30LjRhtC40Y8g0LrQvtGB0YLQuC5cbiAgICAgKi9cbiAgICBnZXRTdGFydExvY2F0aW9uQXNBcnJheSA9ICgpOiBudW1iZXJbXSA9PiBbdGhpcy5fc3RhcnRMb2NhdGlvbi54LCB0aGlzLl9zdGFydExvY2F0aW9uLnldO1xuXG4gICAgLyoqXG4gICAgICog0JfQsNC00LDRkdGCINC60L7QvdC10YfQvdGD0Y4g0L/QvtC30LjRhtC40Y4g0LrQvtGB0YLQuC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsb2NhdGlvbiDQmtC+0L3QtdGH0L3QsNGPINC/0L7Qt9C40YbQuNGPINC60L7RgdGC0LguXG4gICAgICovXG4gICAgc2V0RW5kTG9jYXRpb24obG9jYXRpb246IFZlYzJmKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2VuZExvY2F0aW9uLnNldChsb2NhdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LrQvtC90LXRh9C90YPRjiDQv9C+0LfQuNGG0LjRjiDQutC+0YHRgtC4LlxuICAgICAqXG4gICAgICogQHJldHVybiDQmtC+0L3QtdGH0L3QsNGPINC/0L7Qt9C40YbQuNGPINC60L7RgdGC0LguXG4gICAgICovXG4gICAgZ2V0RW5kTG9jYXRpb24gPSAoKTogVmVjMmYgPT4gdGhpcy5fZW5kTG9jYXRpb247XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQutC+0L3QtdGH0L3Rg9GOINC/0L7Qt9C40YbQuNGOINC60L7RgdGC0Lgg0LIg0LLQuNC00LUg0YfQuNGB0LvQvtCy0L7Qs9C+INC80LDRgdGB0LjQstCwLlxuICAgICAqXG4gICAgICogQHJldHVybiAg0JrQvtC90LXRh9C90LDRjyDQv9C+0LfQuNGG0LjRjyDQutC+0YHRgtC4LlxuICAgICAqL1xuICAgIGdldEVuZExvY2F0aW9uQXNBcnJheSA9ICgpOiBudW1iZXJbXSA9PiBbdGhpcy5fZW5kTG9jYXRpb24ueCwgdGhpcy5fZW5kTG9jYXRpb24ueV07XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNGR0YIg0YHRg9GB0YLQsNCyINC00LvRjyDQutC+0YHRgtC4LlxuICAgICAqXG4gICAgICogQHBhcmFtICBqb2ludCAg0KHRg9GB0YLQsNCyLlxuICAgICAqL1xuICAgIHNldEpvaW50KGpvaW50OiBGYWJyaWtKb2ludDJEKTogdm9pZCB7XHR0aGlzLl9qb2ludC5zZXQoam9pbnQpOyB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDRgdGD0YHRgtCw0LIg0LTQu9GPINC60L7RgdGC0LguXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICDQodGD0YHRgtCw0LIuXG4gICAgICovXG4gICAgZ2V0Sm9pbnQgPSAoKTogRmFicmlrSm9pbnQyRCA9PiB0aGlzLl9qb2ludDtcblxuICAgIC8qKlxuICAgICAqINCX0LDQtNCw0ZHRgiDRg9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUg0LTQu9GPINGB0YPRgdGC0LDQstCwINC60L7RgdGC0LguXG4gICAgICogPHA+XG4gICAgICog0J/RgNC4INC/0LXRgNC10LTQsNGH0LUg0YPQs9C70LAg0LLQvdC1INC00L7Qv9GD0YHRgtC40LzQvtCz0L4g0LTQuNCw0L/QsNC30L7QvdCwLCDRg9Cz0L7QuyDQv9GA0LjRgNCw0LLQvdC10LLQsNC10YLRgdGPINC6INC+0LTQvdC+0LzRgyDQuNC3INCz0YDQsNC90LjRh9C90YvRhSDQt9C90LDRh9C10L3QuNC5LlxuICAgICAqXG4gICAgICogQHBhcmFtICBhbmdsZURlZ3MgINCj0LPQvtC7LdC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0LIg0LPRgNCw0LTRg9GB0LDRhS5cbiAgICAgKi9cbiAgICBzZXRDbG9ja3dpc2VDb25zdHJhaW50RGVncyhhbmdsZURlZ3M6IG51bWJlcik6IHZvaWQgeyB0aGlzLl9qb2ludC5zZXRDbG9ja3dpc2VDb25zdHJhaW50RGVncyhhbmdsZURlZ3MpOyB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDRg9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUg0LTQu9GPINGB0YPRgdGC0LDQstCwINC60L7RgdGC0LguXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICDQo9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUg0LIg0LPRgNCw0LTRg9GB0LDRhS5cbiAgICAgKi9cbiAgICBnZXRDbG9ja3dpc2VDb25zdHJhaW50RGVncyA9ICgpOiBudW1iZXIgPT4gdGhpcy5fam9pbnQuZ2V0Q2xvY2t3aXNlQ29uc3RyYWludERlZ3MoKTtcblxuICAgIC8qKlxuICAgICAqINCX0LDQtNCw0ZHRgiDRg9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuCDQtNC70Y8g0YHRg9GB0YLQsNCy0LAg0LrQvtGB0YLQuC5cbiAgICAgKiA8cD5cbiAgICAgKiDQn9GA0Lgg0L/QtdGA0LXQtNCw0YfQtSDRg9Cz0LvQsCDQstC90LUg0LTQvtC/0YPRgdGC0LjQvNC+0LPQviDQtNC40LDQv9Cw0LfQvtC90LAsINGD0LPQvtC7INC/0YDQuNGA0LDQstC90LXQstCw0LXRgtGB0Y8g0Log0L7QtNC90L7QvNGDINC40Lcg0LPRgNCw0L3QuNGH0L3Ri9GFINC30L3QsNGH0LXQvdC40LkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIGFuZ2xlRGVncyAg0KPQs9C+0Lst0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQsiDQs9GA0LDQtNGD0YHQsNGFLlxuICAgICAqL1xuICAgIHNldEFudGljbG9ja3dpc2VDb25zdHJhaW50RGVncyhhbmdsZURlZ3M6IG51bWJlcik6IHZvaWQgeyB0aGlzLl9qb2ludC5zZXRBbnRpY2xvY2t3aXNlQ29uc3RyYWludERlZ3MoYW5nbGVEZWdzKTsgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YPQs9C+0Lst0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60Lgg0LTQu9GPINGB0YPRgdGC0LDQstCwINC60L7RgdGC0LguXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICDQo9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuCDQsiDQs9GA0LDQtNGD0YHQsNGFLlxuICAgICAqL1xuICAgIGdldEFudGljbG9ja3dpc2VDb25zdHJhaW50RGVncygpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fam9pbnQuZ2V0QW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKCk7IH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC90LDQv9GA0LDQstC70LXQvdC40LUg0LrQvtGB0YLQuC5cbiAgICAgKiA8cD5cbiAgICAgKiDQldGB0LvQuCDQvdC10L7QsdGF0L7QtNC40LzQviDQv9C+0LvRg9GH0LjRgtGMINC90LDQv9GA0LDQstC70LXQvdC40LUg0L7QsdGA0LDRgtC90L7QtSDQvdCw0L/RgNCw0LLQu9C10L3QuNGOINC60L7RgdGC0LggLSDQstC+0YHQv9C+0LvRjNC30YPQudGC0LXRgdGMINC80LXRgtC+0LTQvtC8IG5lZ2F0ZWQg0LLQtdC60YLQvtGA0LAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICDQldC00LjQvdC40YfQvdGL0Lkg0LLQtdC60YLQvtGAINC90LDQv9GA0LDQstC70LXQvdC40Y8g0LTQsNC90L3QvtC5INC60L7RgdGC0LguXG4gICAgICogQHNlZVx0XHRWZWMyZiNuZWdhdGVkKClcbiAgICAgKi9cbiAgICBnZXREaXJlY3Rpb25VViA9ICgpOiBWZWMyZiA9PiBWZWMyZi5nZXREaXJlY3Rpb25VVih0aGlzLl9zdGFydExvY2F0aW9uLCB0aGlzLl9lbmRMb2NhdGlvbik7XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNGR0YIg0LfQvdCw0YfQtdC90LjQtSDQuNC80LXQvdC4INC60L7RgdGC0LguXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdG5hbWVcdNCY0LzRjy5cbiAgICAgKi9cbiAgICBzZXROYW1lKG5hbWU6IHN0cmluZyk6IHZvaWQgeyB0aGlzLl9uYW1lID0gbmFtZTsgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LjQvNGPINC60L7RgdGC0LguXG4gICAgICpcbiAgICAgKiBAcmV0dXJuXHTQmNC80Y8uXG4gICAgICovXG4gICAgZ2V0TmFtZSA9ICgpOiBzdHJpbmcgPT4gdGhpcy5fbmFtZTtcblxuICAgIC8qKlxuICAgICAqINCX0LDQtNCw0ZHRgiDRgtC40L8g0YHRg9GB0YLQsNCy0LAuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdGNvb3JkU3lzdGVtXHRcdNCi0LjQvyDRgdGD0YHRgtCw0LLQsC5cbiAgICAgKi9cbiAgICBzZXRKb2ludENvbnN0cmFpbnRDb29yZGluYXRlU3lzdGVtKGNvb3JkU3lzdGVtOiBDb25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9qb2ludC5zZXRDb25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbShjb29yZFN5c3RlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YLQuNC/INGB0YPRgdGC0LDQstCwLlxuICAgICAqXG4gICAgICogQHJldHVyblx00KLQuNC/INGB0YPRgdGC0LDQstCwLlxuICAgICAqL1xuICAgIGdldEpvaW50Q29uc3RyYWludENvb3JkaW5hdGVTeXN0ZW0gPSAoKTogQ29uc3RyYWludENvb3JkaW5hdGVTeXN0ZW0gPT4gdGhpcy5fam9pbnQuZ2V0Q29uc3RyYWludENvb3JkaW5hdGVTeXN0ZW0oKTtcblxuICAgIC8qKlxuICAgICAqINCf0LXRgNC10YHRh9C40YLRi9Cy0LDQtdGCINC00LvQuNC90YMg0LrQvtGB0YLQuCwg0L7Qv9C40YDQsNGP0YHRjCDQvdCwINCy0L3Rg9GC0YDQtdC90L3QuNC1INC/0L7Qu9GPINC90LDRh9Cw0LvRjNC90L7QuSDQuCDQutC+0L3QtdGH0L3QvtC5INC/0L7Qt9C40YbQuNC4LlxuICAgICAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZUxlbmd0aCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gVmVjMmYuZGlzdGFuY2VCZXR3ZWVuKHRoaXMuX3N0YXJ0TG9jYXRpb24sIHRoaXMuX2VuZExvY2F0aW9uKTtcblxuICAgICAgICBpZiAobGVuZ3RoID49IDAuMCkge1xuICAgICAgICAgICAgdGhpcy5fbGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb25lIGdldExlbmd0aCBtdXN0IGJlIGEgcG9zaXRpdmUgdmFsdWUuJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge0JvbmVDb25uZWN0aW9uUG9pbnR9IGZyb20gJy4vQm9uZUNvbm5lY3Rpb25Qb2ludCc7XG5pbXBvcnQge0ZhYnJpa0pvaW50M0R9IGZyb20gJy4vRmFicmlrSm9pbnQzRCc7XG5pbXBvcnQge0pvaW50VHlwZX0gZnJvbSAnLi9Kb2ludFR5cGUnO1xuaW1wb3J0IHtWZWMzZn0gZnJvbSAnLi4vdXRpbHMvVmVjM2YnO1xuaW1wb3J0IHtDb2xvdXI0Zn0gZnJvbSAnLi4vdXRpbHMvQ29sb3VyNGYnO1xuaW1wb3J0IHtVdGlsc30gZnJvbSAnLi4vdXRpbHMvVXRpbHMnO1xuXG4vKipcbiAqINCa0L7RgdGC0YwuXG4gKiA8cD5cbiAqIEZhYnJpa0JvbmUzRCDRgdC+0YHRgtC+0LjRgiDQuNC3INC90LDRh9Cw0LvRjNC90L7QuSDQuCDQutC+0L3QtdGH0L3QvtC5INC/0L7Qt9C40YbQuNC4INC4IEZhYnJpa0pvaW50M0QsINC60L7RgtC+0YDRi9C5INC+0LPRgNCw0L3QuNGH0LjQstCw0LXRgiDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINC/0L7QstC+0YDQvtGC0LAuXG4gKi9cbmV4cG9ydCBjbGFzcyBGYWJyaWtCb25lM0Qge1xuICAgIC8qKlxuICAgICAqINCV0YHQu9C4INC00LDQvdC90LDRjyDQutC+0YHRgtGMINC/0YDQuNGB0L7QtdC00LjQvdC10L3QsCDQuiDQutC+0YHRgtC4INC40Lcg0LTRgNGD0LPQvtC5INGG0LXQv9C4LCDQuiDQutCw0LrQvtC80YMg0LrQvtC90YbRgyDQtNGA0YPQs9C+0Lkg0YbQtdC/0Lgg0L7QvdCwINC00L7Qu9C20L3QsCDQv9GA0LjRgdC+0LXQtNC40L3Rj9GC0YzRgdGPP1xuICAgICAqIDxwPlxuICAgICAqINCf0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINC/0YDQuNGB0L7QtdC00LjQvdGP0LXRgtGB0Y8g0Log0LrQvtC90YbRgyDQtNCw0L3QvdC+0Lkg0LrQvtGB0YLQuC5cbiAgICAgKiA8cD5cbiAgICAgKiDQrdGC0L4g0L/QvtC70LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQuNC30LzQtdC90LXQvdC+INGBINC/0L7QvNC+0YnRjNGOINC80LXRgtC+0LTQsCB7I2xpbmsgI3NldEJvbmVDb25uZWN0aW9uUG9pbnQoQm9uZUNvbm5lY3Rpb25Qb2ludCl9LCDQuNC70Lgg0L/RgNC4INGB0L7QtdC00LjQvdC10L3QuNC4INC60L7RgdGC0LhcbiAgICAgKiDRgSDQtNGA0YPQs9C+0Lkg0YbQtdC/0YzRjiDRgSDQv9C+0LzQvtGJ0YzRjiDQvNC10YLQvtC00LAge0BsaW5rIEZhYnJpa1N0cnVjdHVyZTNEI2Nvbm5lY3RDaGFpbihGYWJyaWtDaGFpbjNELCBudW1iZXIsIG51bWJlciwgQm9uZUNvbm5lY3Rpb25Qb2ludCl9LlxuICAgICAqL1xuICAgIHByaXZhdGUgX2JvbmVDb25uZWN0aW9uUG9pbnQ6IEJvbmVDb25uZWN0aW9uUG9pbnQgPSBCb25lQ29ubmVjdGlvblBvaW50LkVORDtcblxuICAgIC8qKlxuICAgICAqIF9qb2ludFx00KHRg9GB0YLQsNCyINC00LvRjyDQtNCw0L3QvdC+0Lkg0LrQvtGB0YLQuC5cbiAgICAgKiA8cD5cbiAgICAgKiDQoyDQutCw0LbQtNC+0Lkg0LrQvtGB0YLQuCDQtdGB0YLRjCDQvtC00LjQvSDRgdGD0YHRgtCw0LIsINGA0LDRgdC/0L7Qu9Cw0LPQsNGO0YnQuNC50YHRjyDQsiDQvdCw0YfQsNC70YzQvdC+0Lkg0L/QvtC30LjRhtC40Lgg0LrQvtGB0YLQuC5cbiAgICAgKiDQntC9INC+0L/RgNC10LTQtdC70Y/QtdGCINC60LDQuiDQutC+0YHRgtGMINC80L7QttC10YIg0LHRi9GC0Ywg0L/QvtCy0LXRgNC90YPRgtCwINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQv9GA0LXQtNGL0LTRg9GJ0LXQuSDQutC+0YHRgtC4INCyINGG0LXQv9C4LlxuICAgICAqIDxwPlxuICAgICAqINCf0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINGB0YPRgdGC0LDQsiDQvdC1INC40LzQtdC10YIg0L7Qs9GA0LDQvdC40YfQtdC90LjQuSwg0L3QviDQvtC90Lgg0LzQvtCz0YPRgiDQsdGL0YLRjCDQt9Cw0LTQsNC90Ysg0YEg0L/QvtC80L7RidGM0Y4g0LzQtdGC0L7QtNC+0LJcbiAgICAgKiB7QGxpbmsgI3NldENsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKG51bWJlcil9INC4IHtAbGluayAjc2V0QW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKG51bWJlcil9LlxuICAgICAqL1xuICAgIHByaXZhdGUgX2pvaW50OiBGYWJyaWtKb2ludDNEID0gbmV3IEZhYnJpa0pvaW50M0QoKTtcblxuICAgIC8qKlxuICAgICAqIF9zdGFydExvY2F0aW9uXHTQndCw0YfQsNC70YzQvdCw0Y8g0L/QvtC30LjRhtC40Y8g0LrQvtGB0YLQuC5cbiAgICAgKiA8cD5cbiAgICAgKiDQndCw0YfQsNC70YzQvdCw0Y8g0L/QvtC30LjRhtC40Y8g0LTQvtC70LbQvdCwINC30LDQtNCw0LLQsNGC0YzRgdGPINGC0L7Qu9GM0LrQviDRh9C10YDQtdC3INC60L7QvdGB0YLRgNGD0LrRgtC+0YAg0LjQu9C4XG4gICAgICog0YEg0L/QvtC80L7RidGM0Y4g0LzQtdGC0L7QtNCwICdhZGRCb25lJyDQutC70LDRgdGB0LAge0BsaW5rIEZhYnJpa0NoYWluM0R9LlxuICAgICAqL1xuICAgIHByaXZhdGUgX3N0YXJ0TG9jYXRpb246IFZlYzNmID0gbmV3IFZlYzNmKCk7XG5cbiAgICAvKipcbiAgICAgKiBfZW5kTG9jYXRpb25cdNCa0L7QvdC10YfQvdCw0Y8g0L/QvtC30LjRhtC40Y8g0LrQvtGB0YLQuC5cbiAgICAgKiA8cD5cbiAgICAgKiDQmtC+0L3QtdGH0L3QsNGPINC/0L7Qt9C40YbQuNGPINC00L7Qu9C20L3QsCDQt9Cw0LTQsNCy0LDRgtGM0YHRjyDRgtC+0LvRjNC60L4g0YfQtdGA0LXQtyDQutC+0L3RgdGC0YDRg9C60YLQvtGAXG4gICAgICog0LjQu9C4INGH0LXRgNC10Lcg0LzQtdGC0L7QtCAnYWRkQm9uZScg0LrQu9Cw0YHRgdCwIHtAbGluayBGYWJyaWtDaGFpbjNEfS5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9lbmRMb2NhdGlvbjogVmVjM2YgPSBuZXcgVmVjM2YoKTtcblxuICAgIC8qKlxuICAgICAqIF9uYW1lXHTQmNC80Y8g0LrQvtGB0YLQuC5cbiAgICAgKiA8cD5cbiAgICAgKiDQndC1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINGN0YLQviDRgdCy0L7QudGB0YLQstC+LlxuICAgICAqINCY0L3QvtCz0LTQsCDQtdCz0L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0L7QsdC70LXQs9GH0LDQtdGCINC40LTQtdC90YLQuNGE0LjQutCw0YbQuNGOINC60L7RgdGC0Lgg0LIg0YbQtdC/0LguXG4gICAgICpcbiAgICAgKiBAc2VlICNzZXROYW1lKHN0cmluZylcbiAgICAgKiBAc2VlICNGYWJyaWtCb25lM0QoVmVjM2YsIFZlYzNmLCBzdHJpbmcpXG4gICAgICogQHNlZSAjRmFicmlrQm9uZTNEKFZlYzNmLCBWZWMzZiwgbnVtYmVyLCBzdHJpbmcpXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiDQlNC70LjQvdCwINC60L7RgdGC0LguXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbGVuZ3RoOiBudW1iZXIgPSAwO1xuXG4gICAgLyoqXG4gICAgICog0KbQstC10YIg0LTQu9GPINCy0LjQt9GD0LDQu9C40LfQsNGG0LjQuCDQutC+0YHRgtC4LlxuICAgICAqXG4gICAgICogQGRlZmF1bHQg0JHQtdC70YvQuSDQvdC10L/RgNC+0LfRgNCw0YfQvdGL0LkgLSBbMSwgMSwgMSwgMV0uXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY29sb3VyOiBDb2xvdXI0ZiA9IG5ldyBDb2xvdXI0ZigpO1xuXG4gICAgLy8gLS0tLS0tLS0tLSBDb25zdHJ1Y3RvcnMgLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICog0JrQvtC90YHRgtGA0YPQutGC0L7RgC5cbiAgICAgKiA8cD5cbiAgICAgKiDQn9GA0LjQvdC40LzQsNC10YIg0L3QtdGB0LrQvtC70YzQutC+INCy0L7Qt9C80L7QttC90YvRhSDQutC+0LzQsdC40L3QsNGG0LjQuSDQv9Cw0YDQsNC80LXRgtGA0L7QsjpcbiAgICAgKiA8cD5cbiAgICAgKiDQmtC+0L3RgdGC0YDRg9C60YLQvtGAINCx0LXQtyDQv9Cw0YDQsNC80LXRgtGA0L7Qsi4g0JLRgdC1INC/0L7Qu9GPINC60LvQsNGB0YHQsCDQv9GA0LjQvdC40LzQsNGO0YIg0LfQvdCw0YfQtdC90LjRjyDQv9C+INGD0LzQvtC70YfQsNC90LjRji5cbiAgICAgKiA8cD5cbiAgICAgKiDQldGB0LvQuCDRgtGA0LXRgtC40Lkg0L/QsNGA0LDQvNC10YLRgCDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LAg0LfQsNC00LDQvSDQutCw0LogbnVsbCDQuNC70LggdW5kZWZpZW5lZCwg0L3QviDQv9GA0Lgg0Y3RgtC+0Lwg0L/QtdGA0LLRi9C1IDIg0L/QsNGA0LDQvNC10YLRgNCwINC/0YDQuNGB0YPRgtGB0YLQstGD0Y7RgixcbiAgICAgKiDRgtC+INC60L7QvdGB0YLRgNGD0LrRgtC+0YAg0LHRg9C00LXRgiDQstC+0YHQv9GA0LjQvdC40LzQsNGC0Ywg0L/QtdGA0LLRi9C1IDIg0L/QsNGA0LDQvNC10YLRgNCwINC60LDQuiDQvdCw0YfQsNC70YzQvdGD0Y4g0Lgg0LrQvtC90LXRh9C90YPRjiDQv9C+0LfQuNGG0LjQuCDQtNCw0L3QvdC+0Lkg0LrQvtGB0YLQuC5cbiAgICAgKiDQn9Cw0YDQsNC80LXRgtGA0Ysg0YEg0YfQtdGC0LLQtdGA0YLQvtCz0L4g0L/QviDRgdC10LTRjNC80L7QuSDQvtC/0YbQuNC+0L3QsNC70YzQvdGLLlxuICAgICAqXG4gICAgICogQHBhcmFtXHRzdGFydExvY2F0aW9uXHQgICAgICAgICAgICDQndCw0YfQsNC70YzQvdCw0Y8g0L/QvtC30LjRhtC40Y8g0LrQvtGB0YLQuCDQsiDQvNC40YDQvtCy0L7QuSDRgdC40YHRgtC10LzQtSDQutC+0L7RgNC00LjQvdCw0YIuXG4gICAgICogQHBhcmFtXHRlbmRMb2NhdGlvbk9yRGlyZWN0aW9uXHRcdNCa0L7QvdC10YfQvdCw0Y8g0L/QvtC30LjRhtC40Y8g0LrQvtGB0YLQuCDQsiDQvNC40YDQvtCy0L7QuSDRgdC40YHRgtC10LzQtSDQutC+0L7RgNC00LjQvdCw0YIuXG4gICAgICogQHBhcmFtXHRsZW5ndGhcdFx0ICAgICAgICAgICAgICAgIG51bGwg0LjQu9C4IHVuZGVmaW5lZC5cbiAgICAgKiBAcGFyYW1cdGNvbG91clx0XHQgICAgICAgICAgICAgICAg0KbQstC10YIg0LrQvtGB0YLQuC5cbiAgICAgKiBAcGFyYW1cdG5hbWVcdFx0ICAgICAgICAgICAgICAgINCd0LDQt9Cy0LDQvdC40LUg0LrQvtGB0YLQuC5cbiAgICAgKiA8cD5cbiAgICAgKiDQldGB0LvQuCDRgtGA0LXRgtC40Lkg0L/QsNGA0LDQvNC10YLRgCDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LAgLSDRjdGC0L4g0YfQuNGB0LvQviwg0L3QviDQv9GA0Lgg0Y3RgtC+0Lwg0L/QtdGA0LLRi9C1IDIg0L/QsNGA0LDQvNC10YLRgNCwINC/0YDQuNGB0YPRgtGB0YLQstGD0Y7RgixcbiAgICAgKiDRgtC+INC60L7QvdGB0YLRgNGD0LrRgtC+0YAg0LHRg9C00LXRgiDQstC+0YHQv9GA0LjQvdC40LzQsNGC0Ywg0L/QtdGA0LLRi9C1IDIg0L/QsNGA0LDQvNC10YLRgNCwINC60LDQuiDQvdCw0YfQsNC70YzQvdGD0Y4g0L/QvtC30LjRhtC40Y4g0LTQsNC90L3QvtC5INC60L7RgdGC0Lgg0Lgg0LXRkSDQvdCw0L/RgNCw0LLQu9C10L3QuNC1LlxuICAgICAqINCf0LDRgNCw0LzQtdGC0YDRiyDRgSDRh9C10YLQstC10YDRgtC+0LPQviDQv9C+INGB0LXQtNGM0LzQvtC5INC+0L/RhtC40L7QvdCw0LvRjNC90YsuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdHN0YXJ0TG9jYXRpb25cdCAgICAgICAgICAgINCd0LDRh9Cw0LvRjNC90LDRjyDQv9C+0LfQuNGG0LjRjyDQutC+0YHRgtC4INCyINC80LjRgNC+0LLQvtC5INGB0LjRgdGC0LXQvNC1INC60L7QvtGA0LTQuNC90LDRgi5cbiAgICAgKiBAcGFyYW1cdGVuZExvY2F0aW9uT3JEaXJlY3Rpb25cdFx00JrQvtC90LXRh9C90LDRjyDQv9C+0LfQuNGG0LjRjyDQutC+0YHRgtC4INCyINC80LjRgNC+0LLQvtC5INGB0LjRgdGC0LXQvNC1INC60L7QvtGA0LTQuNC90LDRgi5cbiAgICAgKiBAcGFyYW1cdGxlbmd0aFx0XHQgICAgICAgICAgICAgICAgbnVsbCDQuNC70LggdW5kZWZpbmVkLlxuICAgICAqIEBwYXJhbVx0Y29sb3VyXHRcdCAgICAgICAgICAgICAgICDQptCy0LXRgiDQutC+0YHRgtC4LlxuICAgICAqIEBwYXJhbVx0bmFtZVx0XHQgICAgICAgICAgICAgICAg0J3QsNC30LLQsNC90LjQtSDQutC+0YHRgtC4LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBzdGFydExvY2F0aW9uPzogVmVjM2YsXG4gICAgICAgIGVuZExvY2F0aW9uT3JEaXJlY3Rpb24/OiBWZWMzZixcbiAgICAgICAgbGVuZ3RoPzogbnVtYmVyIHwgbnVsbCxcbiAgICAgICAgY29sb3VyPzogQ29sb3VyNGYsXG4gICAgICAgIG5hbWU/OiBzdHJpbmcsXG4gICAgKSB7XG4gICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFicmlrQm9uZTJEIGNvbnN0cnVjdG9yIGNhbiBub3QgaGF2ZSAxIHBhcmFtLicpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXJ0TG9jYXRpb24gfHwgIWVuZExvY2F0aW9uT3JEaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEZhYnJpa0JvbmUyRCBjb25zdHJ1Y3RvciBwYXJhbXMuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPT09IG51bGwgfHwgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0J/RgNC10LTRgdGC0LDQstC70Y/QtdC8INC/0LXRgNCy0YvQtSAyINCy0LXQutGC0L7RgNCwINC60LDQuiDQvdCw0YfQsNC70YzQvdGD0Y4g0Lgg0LrQvtC90LXRh9C90YPRjiDQv9C+0LfQuNGG0LjQuCDQutC+0YHRgtC4LlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFydExvY2F0aW9uLnNldChzdGFydExvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5kTG9jYXRpb24uc2V0KGVuZExvY2F0aW9uT3JEaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVMZW5ndGgoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDQn9GA0LXQtNGB0YLQsNCy0LvRj9C10Lwg0L/QtdGA0LLRi9C1IDIg0LLQtdC60YLQvtGA0LAg0LrQsNC6INC90LDRh9Cw0LvRjNC90YPRjiDQv9C+0LfQuNGG0LjRjiDQuCDQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC60L7RgdGC0LguXG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLnZhbGlkYXRlRGlyZWN0aW9uVVYoZW5kTG9jYXRpb25PckRpcmVjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRMb2NhdGlvbi5zZXQoc3RhcnRMb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VuZExvY2F0aW9uLnNldCggdGhpcy5fc3RhcnRMb2NhdGlvbi5wbHVzKCBlbmRMb2NhdGlvbk9yRGlyZWN0aW9uLm5vcm1hbGlzZWQoKS50aW1lcyhsZW5ndGgpICkgKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVMZW5ndGgoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29sb3VyIGluc3RhbmNlb2YgQ29sb3VyNGYpIHRoaXMuX2NvbG91ci5zZXQoY29sb3VyLnRvQXJyYXkoKSk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tIE1ldGhvZHMgLS0tLS0tLS0tLVxuICAgIC8qKlxuICAgICAqINCX0LDQtNCw0ZHRgiDQstGB0LXQvCDQv9C+0LvRj9C8INC00LDQvdC90L7QuSDQutC+0YHRgtC4INGC0LDQutC40LUg0LbQsCDQt9C90LDRh9C10L3QuNGPINC60LDQuiDRgyDQutC+0YHRgtC4INC40YHRgtC+0YfQvdC40LrQsC5cbiAgICAgKiA8cD5cbiAgICAgKiDQmtC+0L/QuNGA0L7QstCw0L3QuNC1INGB0LLQvtC50YHRgtCyINC90LXQs9C70YPQsdC+0LrQvtC1LlxuICAgICAqINCf0L7RgdC70LUg0L/RgNC40LzQtdC90L3QtdC40Y8g0LzQtdGC0L7QtNCwINC00LDQvdC90LDRjyDQutC+0YHRgtGMINC4INC60L7RgdGC0Ywg0LjRgdGC0L7Rh9C90LjQuiDQsdGD0LTRg9GCINGB0L7QtNC10YDQttCw0YLRjCDQvtCx0YnQuNC1INGN0LvQtdC80LXQvdGC0YsuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdHNvdXJjZVx00JrQvtGB0YLRjCDQuNGB0YLQvtGH0L3QuNC6LlxuICAgICAqL1xuICAgIHNldChzb3VyY2U6IEZhYnJpa0JvbmUzRCkge1xuICAgICAgICB0aGlzLl9zdGFydExvY2F0aW9uLnNldChzb3VyY2UuX3N0YXJ0TG9jYXRpb24pO1xuICAgICAgICB0aGlzLl9lbmRMb2NhdGlvbi5zZXQoc291cmNlLl9lbmRMb2NhdGlvbik7XG4gICAgICAgIHRoaXMuX2pvaW50LnNldChzb3VyY2UuX2pvaW50KTtcbiAgICAgICAgdGhpcy5fY29sb3VyLnNldChzb3VyY2UuX2NvbG91ci50b0FycmF5KCkpO1xuXG4gICAgICAgIHRoaXMuX25hbWUgICAgICAgICAgICAgICA9IHNvdXJjZS5fbmFtZTtcbiAgICAgICAgdGhpcy5fbGVuZ3RoICAgICAgICAgICAgID0gc291cmNlLl9sZW5ndGg7XG4gICAgICAgIHRoaXMuX2JvbmVDb25uZWN0aW9uUG9pbnQgPSBzb3VyY2UuX2JvbmVDb25uZWN0aW9uUG9pbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LTQu9C40L3RgyDQutC+0YHRgtC4LlxuICAgICAqXG4gICAgICogQHJldHVyblxuICAgICAqL1xuICAgIGdldExlbmd0aCA9ICgpOiBudW1iZXIgPT4gdGhpcy5fbGVuZ3RoO1xuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LTQu9C40L3RgyDQutC+0YHRgtC4LlxuICAgICAqXG4gICAgICogQHJldHVyblxuICAgICAqL1xuICAgIGdldExpZmVMZW5ndGggPSAoKTogbnVtYmVyID0+IFZlYzNmLmRpc3RhbmNlQmV0d2Vlbih0aGlzLl9zdGFydExvY2F0aW9uLCB0aGlzLl9lbmRMb2NhdGlvbik7XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNGR0YIg0YLQvtGH0LrRgyDRgdC+0LXQtNC40L3QtdC90LjRjy5cbiAgICAgKiA8cD5cbiAgICAgKiDQrdGC0LAg0YLQvtGH0LrQsCDRgdC+0LXQtNC40L3QtdC90LjRjyDQutC+0L3RgtGA0L7Qu9C40YDRg9C10YIg0LrRg9C00LAg0L/RgNC40YHQvtC10LTQuNC90Y/QtdGC0YHRjyDQutC+0YHRgtGMINC40Lcg0LTRgNGD0LPQvtC5INGG0LXQv9C4INC/0YDQuCDRgdC+0LXQtNC40L3QtdC90LjQuCDRgSDQvdCw0YjQtdC5INC60L7RgdGC0YzRji5cbiAgICAgKiA8cD5cbiAgICAgKiDQl9C90LDRh9C10L3QuNC1INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOIEJvbmVDb25uZWN0aW9uUG9pbnQzRC5FTkQuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdGJjcFx0ICAgINCi0L7Rh9C60LAg0YHQvtC10LTQuNC90LXQvdC40Y8gKEJvbmVDb25uZWN0aW9uUG9pbnQzLlNUQVJUINC40LvQuCBCb25lQ29ubmVjdGlvblBvaW50LkVORCkuXG4gICAgICpcbiAgICAgKi9cbiAgICBzZXRCb25lQ29ubmVjdGlvblBvaW50KGJjcDogQm9uZUNvbm5lY3Rpb25Qb2ludCk6IHZvaWQgeyB0aGlzLl9ib25lQ29ubmVjdGlvblBvaW50ID0gYmNwOyB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDRgtC+0YfQutGDINGB0L7QtdC00LjQvdC10L3QuNGPINGBINC00LDQvdC90L7QuSDQutC+0YHRgtGM0Y4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuXG4gICAgICovXG4gICAgZ2V0Qm9uZUNvbm5lY3Rpb25Qb2ludCA9ICgpOiBCb25lQ29ubmVjdGlvblBvaW50ID0+IHRoaXMuX2JvbmVDb25uZWN0aW9uUG9pbnQ7XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDRhtCy0LXRgiDQutC+0YHRgtC4XG4gICAgICpcbiAgICAgKiBAcmV0dXJuXG4gICAgICovXG4gICAgZ2V0Q29sb3VyID0gKCk6IENvbG91cjRmID0+IHRoaXMuX2NvbG91cjtcblxuICAgIC8qKlxuICAgICAqINCX0LDQtNCw0ZHRgiDRhtCy0LXRgiDQutC+0YHRgtC4LlxuICAgICAqXG4gICAgICogQHBhcmFtXHRjb2xvdXJcdNCR0YPQtNGD0YnQuNC5INGG0LLQtdGCINC60L7RgdGC0Lgg0LTQu9GPINC+0YLRgNC40YHQvtCy0LrQuC5cbiAgICAgKi9cbiAgICBzZXRDb2xvdXIoY29sb3VyOiBDb2xvdXI0Zik6IHZvaWQgeyB0aGlzLl9jb2xvdXIuc2V0KGNvbG91ci50b0FycmF5KCkpOyB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQvdCw0YfQsNC70YzQvdGD0Y4g0L/QvtC30LjRhtC40Y4g0LrQvtGB0YLQuC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4g0J3QsNGH0LDQu9GM0L3QsNGPINC/0L7Qt9C40YbQuNGPINC60L7RgdGC0LguXG4gICAgICovXG4gICAgZ2V0U3RhcnRMb2NhdGlvbiA9ICgpOiBWZWMzZiA9PiB0aGlzLl9zdGFydExvY2F0aW9uO1xuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0L3QsNGH0LDQu9GM0L3Rg9GOINC/0L7Qt9C40YbQuNGOINC60L7RgdGC0Lgg0LIg0LLQuNC00LUg0YfQuNGB0LvQvtCy0L7Qs9C+INC80LDRgdGB0LjQstCwLlxuICAgICAqXG4gICAgICogQHJldHVybiAg0J3QsNGH0LDQu9GM0L3QsNGPINC/0L7Qt9C40YbQuNGPINC60L7RgdGC0LguXG4gICAgICovXG4gICAgZ2V0U3RhcnRMb2NhdGlvbkFzQXJyYXkgPSAoKTogbnVtYmVyW10gPT4gW3RoaXMuX3N0YXJ0TG9jYXRpb24ueCwgdGhpcy5fc3RhcnRMb2NhdGlvbi55LCB0aGlzLl9zdGFydExvY2F0aW9uLnpdO1xuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LrQvtC90LXRh9C90YPRjiDQv9C+0LfQuNGG0LjRjiDQutC+0YHRgtC4LlxuICAgICAqXG4gICAgICogQHJldHVybiDQmtC+0L3QtdGH0L3QsNGPINC/0L7Qt9C40YbQuNGPINC60L7RgdGC0LguXG4gICAgICovXG4gICAgZ2V0RW5kTG9jYXRpb24gPSAoKTogVmVjM2YgPT4gdGhpcy5fZW5kTG9jYXRpb247XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQutC+0L3QtdGH0L3Rg9GOINC/0L7Qt9C40YbQuNGOINC60L7RgdGC0Lgg0LIg0LLQuNC00LUg0YfQuNGB0LvQvtCy0L7Qs9C+INC80LDRgdGB0LjQstCwLlxuICAgICAqXG4gICAgICogQHJldHVybiAg0JrQvtC90LXRh9C90LDRjyDQv9C+0LfQuNGG0LjRjyDQutC+0YHRgtC4LlxuICAgICAqL1xuICAgIGdldEVuZExvY2F0aW9uQXNBcnJheSA9ICgpOiBudW1iZXJbXSA9PiBbdGhpcy5fZW5kTG9jYXRpb24ueCwgdGhpcy5fZW5kTG9jYXRpb24ueSwgdGhpcy5fZW5kTG9jYXRpb24uel07XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNGR0YIg0YHRg9GB0YLQsNCyINC00LvRjyDQutC+0YHRgtC4LlxuICAgICAqXG4gICAgICogQHBhcmFtXHRqb2ludFx00KHRg9GB0YLQsNCyLlxuICAgICAqL1xuICAgIHNldEpvaW50KGpvaW50OiBGYWJyaWtKb2ludDNEKTogdm9pZCB7IHRoaXMuX2pvaW50LnNldChqb2ludCk7IH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0YPRgdGC0LDQsiDQtNC70Y8g0LrQvtGB0YLQuC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gINCh0YPRgdGC0LDQsi5cbiAgICAgKi9cbiAgICBnZXRKb2ludCA9ICgpOiBGYWJyaWtKb2ludDNEID0+IHRoaXMuX2pvaW50O1xuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YLQuNC/INGB0YPRgdGC0LDQstCwLlxuICAgICAqXG4gICAgICogQHJldHVyblxuICAgICAqL1xuICAgIGdldEpvaW50VHlwZSA9ICgpOiBKb2ludFR5cGUgPT4gdGhpcy5fam9pbnQuZ2V0Sm9pbnRUeXBlKCk7XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNGR0YIg0YPQs9C+0Lsg0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQv9C+INGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC1INC00LvRjyDRiNCw0YDQvdC40YDQvdC+0LPQviDRgdGD0YHRgtCw0LLQsC5cbiAgICAgKiA8cD5cbiAgICAgKiDQktGL0LfRi9Cy0LDQtdGCINC+0YjQuNCx0LrQuCwg0LXRgdC70Lgg0YPQs9C+0Lsg0LLRi9GF0L7QtNC40YIg0LfQsCDQs9GA0LDQvdC40YbRiyDQtNC+0L/Rg9GB0YLQuNC80YvRhSDQt9C90LDRh9C10L3QuNC5INC4XG4gICAgICog0LXRgdC70Lgg0YLQuNC/INGB0YPRgdGC0LDQstCwINC90LUg0YjQsNGA0L3QuNGA0L3Ri9C5LlxuICAgICAqXG4gICAgICogQHBhcmFtICAgIGFuZ2xlRGVncyAgICDQo9Cz0L7QuyDQvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUg0LIg0LPRgNCw0LTRg9GB0LDRhS5cbiAgICAgKi9cbiAgICBzZXRIaW5nZUpvaW50Q2xvY2t3aXNlQ29uc3RyYWludERlZ3MoYW5nbGVEZWdzKTogdm9pZCB7XHR0aGlzLl9qb2ludC5zZXRIaW5nZUpvaW50Q2xvY2t3aXNlQ29uc3RyYWludERlZ3MoYW5nbGVEZWdzKTtcdH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGD0LPQvtC7LdC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtSDQtNC70Y8g0YjQsNGA0L3QuNGA0L3QvtCz0L4g0YHRg9GB0YLQsNCy0LAuXG4gICAgICogPHA+XG4gICAgICog0JLRi9C30YvQstCw0LXRgiDQvtGI0LjQsdC60YMsINC10YHQu9C4INGC0LjQvyDRgdGD0YHRgtCw0LLQsCDQvdC1INGI0LDRgNC90LjRgNC90YvQuS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4g0KPQs9C+0Lst0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQv9C+INGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC1INCyINCz0YDQsNC00YPRgdCw0YUuXG4gICAgICovXG4gICAgZ2V0SGluZ2VKb2ludENsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKCk6IG51bWJlclx0eyByZXR1cm4gdGhpcy5fam9pbnQuZ2V0SGluZ2VDbG9ja3dpc2VDb25zdHJhaW50RGVncygpOyB9XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNGR0YIg0YPQs9C+0Lsg0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60Lgg0LTQu9GPINGI0LDRgNC90LjRgNC90L7Qs9C+INGB0YPRgdGC0LDQstCwLlxuICAgICAqIDxwPlxuICAgICAqINCS0YvQt9GL0LLQsNC10YIg0L7RiNC40LHQutC4LCDQtdGB0LvQuCDRg9Cz0L7QuyDQstGL0YXQvtC00LjRgiDQt9CwINCz0YDQsNC90LjRhtGLINC00L7Qv9GD0YHRgtC40LzRi9GFINC30L3QsNGH0LXQvdC40Lkg0LhcbiAgICAgKiDQtdGB0LvQuCDRgtC40L8g0YHRg9GB0YLQsNCy0LAg0L3QtSDRiNCw0YDQvdC40YDQvdGL0LkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICAgYW5nbGVEZWdzICAgINCj0LPQvtC7INC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0L/RgNC+0YLQuNCyINGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC4INCyINCz0YDQsNC00YPRgdCw0YUuXG4gICAgICovXG4gICAgc2V0SGluZ2VKb2ludEFudGljbG9ja3dpc2VDb25zdHJhaW50RGVncyhhbmdsZURlZ3M6IG51bWJlcik6IHZvaWQgeyB0aGlzLl9qb2ludC5zZXRIaW5nZUpvaW50QW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKGFuZ2xlRGVncyk7IH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGD0LPQvtC7LdC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0L/RgNC+0YLQuNCyINGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC4INC00LvRjyDRiNCw0YDQvdC40YDQvdC+0LPQviDRgdGD0YHRgtCw0LLQsC5cbiAgICAgKiA8cD5cbiAgICAgKiDQktGL0LfRi9Cy0LDQtdGCINC+0YjQuNCx0LrRgywg0LXRgdC70Lgg0YLQuNC/INGB0YPRgdGC0LDQstCwINC90LUg0YjQsNGA0L3QuNGA0L3Ri9C5LlxuICAgICAqXG4gICAgICogQHJldHVybiDQo9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuCDQsiDQs9GA0LDQtNGD0YHQsNGFLlxuICAgICAqL1xuICAgIGdldEhpbmdlSm9pbnRBbnRpY2xvY2t3aXNlQ29uc3RyYWludERlZ3MoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2pvaW50LmdldEhpbmdlQW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKCk7IH1cblxuICAgIC8qKlxuICAgICAqINCX0LDQtNCw0ZHRgiDRg9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC00LvRjyDRiNCw0YDQvtCy0L7Qs9C+INGB0YPRgdGC0LDQstCwLlxuICAgICAqIDxwPlxuICAgICAqINCS0YvQt9GL0LLQsNC10YIg0L7RiNC40LHQutGDLCDQtdGB0LvQuCDRgtC40L8g0YHRg9GB0YLQsNCy0LAg0L3QtSDRiNCw0YDQvtCy0L7QuSDQuNC70LhcbiAgICAgKiDRg9Cz0L7QuyDQstGL0YXQvtC00LjRgiDQt9CwINCz0YDQsNC90LjRhtGLINC00L7Qv9GD0YHRgtC40LzRi9GFINC30L3QsNGH0LXQvdC40LkuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdGFuZ2xlRGVnc1x00KPQs9C+0Lst0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQsiDQs9GA0LDQtNGD0YHQsNGFLlxuICAgICAqL1xuICAgIHNldEJhbGxKb2ludENvbnN0cmFpbnREZWdzKGFuZ2xlRGVnczogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2pvaW50LnNldEJhbGxKb2ludENvbnN0cmFpbnREZWdzKGFuZ2xlRGVncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YPQs9C+0Lsg0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDRiNCw0YDQvtCy0L7Qs9C+INGB0YPRgdGC0LDQstCwLlxuICAgICAqIDxwPlxuICAgICAqINCS0YvQt9GL0LLQsNC10YIg0L7RiNC40LHQutGDLCDQtdGB0LvQuCDRgtC40L8g0YHRg9GB0YLQsNCy0LAg0L3QtSDRiNCw0YDQvtCy0L7QuVxuICAgICAqXG4gICAgICogQHJldHVyblx00KPQs9C+0Lst0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQsiDQs9GA0LDQtNGD0YHQsNGFLlxuICAgICAqL1xuICAgIGdldEJhbGxKb2ludENvbnN0cmFpbnREZWdzKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9qb2ludC5nZXRCYWxsSm9pbnRDb25zdHJhaW50RGVncygpO1x0fVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQutC+0YHRgtC4LlxuICAgICAqIDxwPlxuICAgICAqINCV0YHQu9C4INC90LXQvtCx0YXQvtC00LjQvNC+INC/0L7Qu9GD0YfQuNGC0Ywg0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQvtCx0YDQsNGC0L3QvtC1INC90LDQv9GA0LDQstC70LXQvdC40Y4g0LrQvtGB0YLQuCAtINCy0L7RgdC/0L7Qu9GM0LfRg9C50YLQtdGB0Ywg0LzQtdGC0L7QtNC+0LwgbmVnYXRlZCDQstC10LrRgtC+0YDQsC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gINCV0LTQuNC90LjRh9C90YvQuSDQstC10LrRgtC+0YAg0L3QsNC/0YDQsNCy0LvQtdC90LjRjyDQtNCw0L3QvdC+0Lkg0LrQvtGB0YLQuC5cbiAgICAgKiBAc2VlXHRcdFZlYzNmI25lZ2F0ZWQoKVxuICAgICAqL1xuICAgIGdldERpcmVjdGlvblVWKCk6IFZlYzNmIHtcbiAgICAgICAgcmV0dXJuIFZlYzNmLmdldERpcmVjdGlvblVWKHRoaXMuX3N0YXJ0TG9jYXRpb24sIHRoaXMuX2VuZExvY2F0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQs9C70L7QsdCw0LvRjNC90YvQuSDQv9C+0LLQvtGA0L7RgiDQutC+0YHRgtC4INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQs9C70L7QsdCw0LvRjNC90L7QuSDQvtGB0LggWC5cbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXQvNC+0LUg0LfQvdCw0YfQtdC90LjQtSDQvdCw0YXQvtC00LjRgtGB0Y8g0LIg0LTQuNCw0L/QsNC30L7QvdC1IC0xNzkuOS4uMTgwLjAg0YHRgtC10L/QtdC90LguXG4gICAgICpcbiAgICAgKiBAcmV0dXJuXHTQntGC0LrQu9C+0L3QtdC90LjQtSDQstC10LrRgtC+0YDQsCDQsiDQs9GA0LDQtNGD0YHQsNGFLlxuICAgICAqKi9cbiAgICBnZXRHbG9iYWxQaXRjaERlZ3MoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICBWZWMzZi5nZXREaXJlY3Rpb25VVih0aGlzLl9zdGFydExvY2F0aW9uLCB0aGlzLl9lbmRMb2NhdGlvbikuZ2V0R2xvYmFsUGl0Y2hEZWdzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LPQu9C+0LHQsNC70YzQvdGL0Lkg0L/QvtCy0L7RgNC+0YIg0LrQvtGB0YLQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0LPQu9C+0LHQsNC70YzQvdC+0Lkg0L7RgdC4IFkuXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10LzQvtC1INC30L3QsNGH0LXQvdC40LUg0L3QsNGF0L7QtNC40YLRgdGPINCyINC00LjQsNC/0LDQt9C+0L3QtSAtMTc5LjkuLjE4MC4wINGB0YLQtdC/0LXQvdC4LlxuICAgICAqXG4gICAgICogQHJldHVyblx00J7RgtC60LvQvtC90LXQvdC40LUg0LLQtdC60YLQvtGA0LAg0LIg0LPRgNCw0LTRg9GB0LDRhS5cbiAgICAgKiovXG4gICAgZ2V0R2xvYmFsWWF3RGVncygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gIFZlYzNmLmdldERpcmVjdGlvblVWKHRoaXMuX3N0YXJ0TG9jYXRpb24sIHRoaXMuX2VuZExvY2F0aW9uKS5nZXRHbG9iYWxZYXdEZWdzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JfQsNC00LDRkdGCINC40LzRjyDQutC+0YHRgtC4LlxuICAgICAqXG4gICAgICogQHBhcmFtXHRuYW1lXHRUaGUgbmFtZSB0byBzZXQuXG4gICAgICovXG4gICAgc2V0TmFtZShuYW1lOiBzdHJpbmcpOiB2b2lkIHsgdGhpcy5fbmFtZSA9IG5hbWU7IH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC40LzRjyDQutC+0YHRgtC4LlxuICAgICAqXG4gICAgICogQHJldHVybiBTdHJpbmdcbiAgICAgKi9cbiAgICBnZXROYW1lID0gKCk6IHN0cmluZyA9PiB0aGlzLl9uYW1lO1xuXG4gICAgLyoqXG4gICAgICog0JfQsNC00LDRkdGCINC90LDRh9Cw0LvRjNC90YPRjiDQv9C+0LfQuNGG0LjRjiDQutC+0YHRgtC4LlxuICAgICAqXG4gICAgICogQHBhcmFtIGxvY2F0aW9uINCd0LDRh9Cw0LvRjNC90LDRjyDQv9C+0LfQuNGG0LjRjyDQutC+0YHRgtC4LlxuICAgICAqL1xuICAgIHNldFN0YXJ0TG9jYXRpb24obG9jYXRpb246IFZlYzNmKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3N0YXJ0TG9jYXRpb24uc2V0KGxvY2F0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNGR0YIg0LrQvtC90LXRh9C90YPRjiDQv9C+0LfQuNGG0LjRjiDQutC+0YHRgtC4LlxuICAgICAqXG4gICAgICogQHBhcmFtIGxvY2F0aW9uINCa0L7QvdC10YfQvdCw0Y8g0L/QvtC30LjRhtC40Y8g0LrQvtGB0YLQuC5cbiAgICAgKi9cbiAgICBzZXRFbmRMb2NhdGlvbihsb2NhdGlvbjogVmVjM2YpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZW5kTG9jYXRpb24uc2V0KGxvY2F0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQn9C10YDQtdGB0YfQuNGC0YvQstCw0LXRgiDQtNC70LjQvdGDINC60L7RgdGC0LgsINC+0L/QuNGA0LDRj9GB0Ywg0L3QsCDQstC90YPRgtGA0LXQvdC90LjQtSDQv9C+0LvRjyDQvdCw0YfQsNC70YzQvdC+0Lkg0Lgg0LrQvtC90LXRh9C90L7QuSDQv9C+0LfQuNGG0LjQuC5cbiAgICAgKi9cbiAgICBfdXBkYXRlTGVuZ3RoKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBWZWMzZi5kaXN0YW5jZUJldHdlZW4odGhpcy5fc3RhcnRMb2NhdGlvbiwgdGhpcy5fZW5kTG9jYXRpb24pO1xuXG4gICAgICAgIGlmIChsZW5ndGggPj0gMC4wKSB7XG4gICAgICAgICAgICB0aGlzLl9sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JvbmUgZ2V0TGVuZ3RoIG11c3QgYmUgYSBwb3NpdGl2ZSB2YWx1ZS4nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7RmFicmlrQm9uZTJEfSBmcm9tICcuL0ZhYnJpa0JvbmUyRCc7XG5pbXBvcnQge1ZlYzJmfSBmcm9tICcuLi91dGlscy9WZWMyZic7XG5pbXBvcnQge0JvbmVDb25uZWN0aW9uUG9pbnR9IGZyb20gJy4vQm9uZUNvbm5lY3Rpb25Qb2ludCc7XG5pbXBvcnQge0NvbG91cjRmfSBmcm9tICcuLi91dGlscy9Db2xvdXI0Zic7XG5pbXBvcnQge1V0aWxzfSBmcm9tICcuLi91dGlscy9VdGlscyc7XG5pbXBvcnQge0NvbnN0cmFpbnRDb29yZGluYXRlU3lzdGVtfSBmcm9tICcuL0NvbnN0cmFpbnRDb29yZGluYXRlU3lzdGVtJztcbmltcG9ydCB7QmFzZWJvbmVDb25zdHJhaW50VHlwZTJEfSBmcm9tICcuL0Jhc2Vib25lQ29uc3RyYWludFR5cGUyRCc7XG5cbi8qKlxuICogMkQg0YbQtdC/0Ywg0LrQvtGB0YLQtdC5LCDRgNC10YjQsNGO0YnQsNGPINC30LDQtNCw0YfRgyDQuNC90LLQtdGA0YHQvdC+0Lkg0LrQuNC90LXQvNCw0YLQuNC60Lgg0YEg0L/QvtC80L7RidGM0Y4g0LDQu9Cz0L7RgNC40YLQvNCwIEZBQlJJSy5cbiAqL1xuZXhwb3J0IGNsYXNzIEZhYnJpa0NoYWluMkQge1xuXG4gICAgLy8gLS0tLS0tLS0tLSBQcml2YXRlIFByb3BlcnRpZXMgLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICog0JzQsNGB0YHQuNCyINC60L7RgdGC0LXQuS5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9jaGFpbjogRmFicmlrQm9uZTJEW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqINCd0LDQt9Cy0LDQvdC40LUg0YbQtdC/0LguXG4gICAgICogPHA+XG4gICAgICog0J3QtdC+0LHRj9C30LDRgtC10LvRjNC90L7QtSDQuiDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjiDQv9C+0LvQtSwg0L/QvtC80L7Qs9Cw0Y7RidC10LUg0LjQtNC10L3RgtC40YTQuNGG0LjRgNC+0LLQsNGC0Ywg0YbQtdC/0YwuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nID0gJyc7XG4gICAgXG4gICAgLyoqXG4gICAgICog0J/QvtGA0L7Qsywg0LTQvtGB0YLQuNCz0L3Rg9CyINC60L7RgtC+0YDQvtCz0L4g0LzRiyDRgdGH0LjRgtCw0LXQvCDQt9Cw0LTQsNGH0YMg0LjQvdCy0LXRgNGB0L3QvtC5INC60LjQvdC10LzQsNGC0LjQutC4INGA0LXRiNC10L3QvdC+0LkuXG4gICAgICogPHA+XG4gICAgICog0J/RgNC4INGA0LXRiNC10L3QuNC4INC30LDQtNCw0YfQuCDQmNCaLCDQutC+0LPQtNCwINGA0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0YLQtdC60YPRidC40Lwg0L/QvtC70L7QttC10L3QuNC10Lwg0Lgg0LbQtdC70LDQtdC80YvQvCDQv9C+0LvQvtC20LXQvdC40LXQvCDRgdGC0LDQvdC+0LLQuNGC0YHRjyDQvNC10L3RjNGI0LUg0LjQu9C4INGA0LDQstC90L5cbiAgICAgKiDQt9C90LDRh9C10L3QuNGOINC/0L7RgNC+0LPQsCwg0LzRiyDQv9GA0LXRgNGL0LLQsNC10Lwg0LTQsNC70YzQvdC10LnRiNC40LUg0LjRgtC10YDQsNGG0LjQuCDQuCDRgdGH0LjRgtCw0LXQvCDQt9Cw0LTQsNGH0YMg0YDQtdGI0LXQvdC90L7QuS5cbiAgICAgKiA8cD5cbiAgICAgKiDQl9C90LDRh9C10L3QuNC1INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOIDEuXG4gICAgICogPHA+XG4gICAgICog0JzQuNC90LjQvNCw0LvRjNC90L4g0LTQvtC/0YPRgdGC0LjQvNC+0LUg0LfQvdCw0YfQtdC90LjQtSAtIDAsINC90L4g0YHRgtC+0LjRgiDQv9C+0LzQvdC40YLRjCDQviDQv9C+0LPRgNC10YjQvdC+0YHRgtC4INCy0YvRh9C40YHQu9C10L3QuNGPINC4INC90LUg0LfQsNC00LDQstCw0YLRjCDQv9C+0YDQvtCzINGA0LDQstC90YvQvCDQvdGD0LvRjiwg0YLQsNC6XG4gICAgICog0LrQsNC6INGN0YLQviDQvNC+0LbQtdGCINC/0YDQuNCy0LXRgdGC0Lgg0Log0LHQtdGB0LrQvtC90LXRh9C90YvQvCDQsdC10YHQv9C+0LvQtdC30L3Ri9C8INC/0L7Qv9GL0YLQutCw0LwuXG4gICAgICogPHA+XG4gICAgICog0KXQvtGC0Y8g0LTQsNC90L3QvtC1INC/0L7Qu9C1INC4INGB0LDQvNGL0Lkg0LLQsNC20L3Ri9C5INC60YDQuNGC0LXRgNC40Lkg0L7RgdGC0LDQvdC+0LLQsCDQtNC70Y8g0JjQmi3QsNC70LPQvtGA0LjRgtC80LAsINC+0L3QviDRgNCw0LHQvtGC0LDQtdGCINCyINC60L7QvNCx0LjQvdCw0YbQuNC4INGBXG4gICAgICoge0BsaW5rICNfbWF4SXRlcmF0aW9uQXR0ZW1wdHN9INC4IHtAbGluayBfbWluSXRlcmF0aW9uQ2hhbmdlfS4g0K3RgtC4INCy0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90YvQtSDRgdCy0L7QudGB0YLQstCwINC/0L7QvNC+0LPQsNGO0YIg0L/QtdGA0LXQttC40YLRjCDRgdC40YLRg9Cw0YbQuNC4LFxuICAgICAqINC60L7Qs9C00LAg0LTQu9C40L3RiyDRhtC10L/QuCDQvdC1INGF0LLQsNGC0LDQtdGCINC00LvRjyDQtNC+0YHRgtC40LbQtdC90LjRjyDRhtC10LvQuCDQuNC70Lgg0LrQvtCz0LTQsCDRgdGD0YHRgtCw0LLRiyDRhtC10L/QuCDRgdC40LvRjNC90L4g0L7Qs9GA0LDQvdC40YfQtdC90YsuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc29sdmVEaXN0YW5jZVRocmVzaG9sZDogbnVtYmVyID0gMS4wO1xuXG5cbiAgICAvKipcbiAgICAgKiDQnNCw0LrRgdC40LzQsNC70YzQvdC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0LjRgtC10YDQsNGG0LjQuSDQsNC70LPQvtGA0LjRgtC80LAsINC/0YDQuNC80LXQvdGP0LXQvNGL0YUg0L/RgNC4INGA0LXRiNC10L3QuNC4INC30LDQtNCw0YfQuCDQmNCaLlxuICAgICAqXG4gICAgICogQGRlZmF1bHQgMjBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9tYXhJdGVyYXRpb25BdHRlbXB0czogbnVtYmVyID0gMTU7XG5cbiAgICBwcml2YXRlIF9taW5JdGVyYXRpb25DaGFuZ2U6IG51bWJlciA9IDAuMDE7XG5cbiAgICBwcml2YXRlIF9jaGFpbkxlbmd0aDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgX2Jhc2VMb2NhdGlvbjogVmVjMmYgPSBuZXcgVmVjMmYoKTtcbiAgICBcbiAgICBwcml2YXRlIF9maXhlZEJhc2VNb2RlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHByaXZhdGUgX2Jhc2Vib25lQ29uc3RyYWludFR5cGU6IEJhc2Vib25lQ29uc3RyYWludFR5cGUyRCA9IEJhc2Vib25lQ29uc3RyYWludFR5cGUyRC5OT05FO1xuXG4gICAgcHJpdmF0ZSBfYm9uZUNvbm5lY3Rpb25Qb2ludDogQm9uZUNvbm5lY3Rpb25Qb2ludCA9IEJvbmVDb25uZWN0aW9uUG9pbnQuRU5EO1xuXG4gICAgcHJpdmF0ZSBfYmFzZWJvbmVDb25zdHJhaW50VVY6IFZlYzJmID0gbmV3IFZlYzJmKCk7XG5cbiAgICBwcml2YXRlIF9iYXNlYm9uZVJlbGF0aXZlQ29uc3RyYWludFVWOiBWZWMyZiA9IG5ldyBWZWMyZigpO1xuXG4gICAgcHJpdmF0ZSBfbGFzdFRhcmdldExvY2F0aW9uOiBWZWMyZiA9IG5ldyBWZWMyZihOdW1iZXIuTUFYX1ZBTFVFLCBOdW1iZXIuTUFYX1ZBTFVFKTtcblxuICAgIHByaXZhdGUgX2xhc3RCYXNlTG9jYXRpb246VmVjMmYgPSBuZXcgVmVjMmYoTnVtYmVyLk1BWF9WQUxVRSwgTnVtYmVyLk1BWF9WQUxVRSk7XG5cbiAgICBwcml2YXRlIF9lbWJlZGRlZFRhcmdldDogVmVjMmYgPSBuZXcgVmVjMmYoKTtcblxuICAgIHByaXZhdGUgX3VzZUVtYmVkZGVkVGFyZ2V0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIF9jdXJyZW50U29sdmVEaXN0YW5jZTogbnVtYmVyID0gTnVtYmVyLk1BWF9WQUxVRTtcblxuICAgIHByaXZhdGUgX2Nvbm5lY3RlZENoYWluTnVtYmVyOiBudW1iZXIgPSAtMTtcblxuICAgIHByaXZhdGUgX2Nvbm5lY3RlZEJvbmVOdW1iZXI6IG51bWJlciAgPSAtMTtcblxuICAgIC8vIC0tLS0tLS0tLS0gQ29uc3RydWN0b3JzIC0tLS0tLS0tLS1cblxuICAgIC8qKlxuICAgICAqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAuXG4gICAgICpcbiAgICAgKiDQn9GA0LjQvdC40LzQsNC10YIg0YLRgNC4INCy0LDRgNC40LDRhtC40Lgg0L/QsNGA0LDQvNC10YLRgNC+0LI6XG4gICAgICpcbiAgICAgKiDQkdC10Lcg0L/QsNGA0LDQvNC10YLRgNC+0LIuINCS0YHQtdC8INC/0L7Qu9GP0Lwg0L/RgNC+0YHRgtCw0LLQu9GP0Y7RgtGB0Y8g0LfQvdCw0YfQtdC90LjRjyDQv9C+INGD0LzQvtC70YfQsNC90LjRji5cbiAgICAgKlxuICAgICAqINCe0LTQuNC9INC/0LDRgNCw0LzQtdGC0YAt0YHRgtGA0L7QutCwLlxuICAgICAqXG4gICAgICogQHBhcmFtXHRzb3VyY2VcdNCY0LzRjyDQtNCw0L3QvdC+0Lkg0YbQtdC/0LguXG4gICAgICpcbiAgICAgKiDQmtC+0L3RgdGC0YDRg9C60YLQvtGAINC60L7Qv9C40YDQvtCy0LDQvdC40Y8uXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdHNvdXJjZVx00KbQtdC/0Ywg0LTQu9GPINC60L7Qv9C40YDQvtCy0LDQvdC40Y8uXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc291cmNlPzogc3RyaW5nIHwgRmFicmlrQ2hhaW4yRCkge1xuICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHNvdXJjZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NoYWluID0gc291cmNlLmNsb25lQ2hhaW5WZWN0b3IoKTtcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VMb2NhdGlvbi5zZXQoc291cmNlLl9iYXNlTG9jYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5fbGFzdFRhcmdldExvY2F0aW9uLnNldChzb3VyY2UuX2xhc3RUYXJnZXRMb2NhdGlvbik7XG4gICAgICAgICAgICB0aGlzLl9sYXN0QmFzZUxvY2F0aW9uLnNldChzb3VyY2UuX2xhc3RCYXNlTG9jYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5fYmFzZWJvbmVDb25zdHJhaW50VVYuc2V0KHNvdXJjZS5fYmFzZWJvbmVDb25zdHJhaW50VVYpO1xuICAgICAgICAgICAgdGhpcy5fYmFzZWJvbmVSZWxhdGl2ZUNvbnN0cmFpbnRVVi5zZXQoc291cmNlLl9iYXNlYm9uZVJlbGF0aXZlQ29uc3RyYWludFVWKTtcbiAgICAgICAgICAgIHRoaXMuX2VtYmVkZGVkVGFyZ2V0LnNldChzb3VyY2UuX2VtYmVkZGVkVGFyZ2V0KTtcblxuICAgICAgICAgICAgdGhpcy5fY2hhaW5MZW5ndGggICAgICAgICAgICA9IHNvdXJjZS5fY2hhaW5MZW5ndGg7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50U29sdmVEaXN0YW5jZSAgID0gc291cmNlLl9jdXJyZW50U29sdmVEaXN0YW5jZTtcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RlZENoYWluTnVtYmVyICAgPSBzb3VyY2UuX2Nvbm5lY3RlZENoYWluTnVtYmVyO1xuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGVkQm9uZU51bWJlciAgICA9IHNvdXJjZS5fY29ubmVjdGVkQm9uZU51bWJlcjtcbiAgICAgICAgICAgIHRoaXMuX2Jhc2Vib25lQ29uc3RyYWludFR5cGUgPSBzb3VyY2UuX2Jhc2Vib25lQ29uc3RyYWludFR5cGU7XG4gICAgICAgICAgICB0aGlzLl9ib25lQ29ubmVjdGlvblBvaW50ICAgID0gc291cmNlLl9ib25lQ29ubmVjdGlvblBvaW50O1xuICAgICAgICAgICAgdGhpcy5fbmFtZSAgICAgICAgICAgICAgICAgICA9IHNvdXJjZS5fbmFtZTtcbiAgICAgICAgICAgIHRoaXMuX3VzZUVtYmVkZGVkVGFyZ2V0ICAgICAgPSBzb3VyY2UuX3VzZUVtYmVkZGVkVGFyZ2V0O1xuICAgICAgICB9XG4gICAgfVxuXG4vLyAtLS0tLS0tLS0tIFB1YmxpYyBNZXRob2RzIC0tLS0tLS0tLS0tLVxuXG4gICAgYWRkQm9uZShib25lOiBGYWJyaWtCb25lMkQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2hhaW4ucHVzaChib25lKTtcblxuICAgICAgICBpZiAodGhpcy5fY2hhaW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9iYXNlTG9jYXRpb24uc2V0KCBib25lLmdldFN0YXJ0TG9jYXRpb24oKSApO1xuXG4gICAgICAgICAgICB0aGlzLl9iYXNlYm9uZUNvbnN0cmFpbnRVViA9IGJvbmUuZ2V0RGlyZWN0aW9uVVYoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlQ2hhaW5MZW5ndGgoKTtcbiAgICB9XG5cbiAgICBhZGRDb25zZWN1dGl2ZUNvbnN0cmFpbmVkQm9uZShkaXJlY3Rpb25VVjogVmVjMmYsIGxlbmd0aDogbnVtYmVyLCBjbG9ja3dpc2VEZWdzOiBudW1iZXIsIGFudGljbG9ja3dpc2VEZWdzOiBudW1iZXIsIGNvbG91cjogQ29sb3VyNGYgPSBuZXcgQ29sb3VyNGYoKSk6IHZvaWQge1xuICAgICAgICBVdGlscy52YWxpZGF0ZURpcmVjdGlvblVWKGRpcmVjdGlvblVWKTtcblxuICAgICAgICBVdGlscy52YWxpZGF0ZUxlbmd0aChsZW5ndGgpO1xuXG4gICAgICAgIGlmICh0aGlzLl9jaGFpbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZCb25lRW5kID0gdGhpcy5fY2hhaW5bdGhpcy5fY2hhaW4ubGVuZ3RoIC0gMV0uZ2V0RW5kTG9jYXRpb24oKTtcblxuICAgICAgICAgICAgbGV0IGJvbmUgPSBuZXcgRmFicmlrQm9uZTJEKHByZXZCb25lRW5kLCBWZWMyZi5ub3JtYWxpc2VkKGRpcmVjdGlvblVWKSwgbGVuZ3RoLCBjbG9ja3dpc2VEZWdzLCBhbnRpY2xvY2t3aXNlRGVncywgY29sb3VyKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQm9uZShib25lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbm5vdCBhZGQgdGhlIGJhc2UgYm9uZSB0byBhIGNoYWluIHVzaW5nIHRoaXMgbWV0aG9kIGFzIGl0IGRvZXMgbm90IHByb3ZpZGUgYSBzdGFydCBsb2NhdGlvbi4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZENvbnNlY3V0aXZlQm9uZShkaXJlY3Rpb25VVjogVmVjMmYsIGxlbmd0aDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkQ29uc2VjdXRpdmVDb25zdHJhaW5lZEJvbmUoIGRpcmVjdGlvblVWLCBsZW5ndGgsIDE4MC4wLCAxODAuMCwgbmV3IENvbG91cjRmKCkgKTtcbiAgICB9XG5cbiAgICBhZGRDb25zZWN1dGl2ZUNyZWF0ZWRCb25lKGJvbmU6IEZhYnJpa0JvbmUyRCk6IHZvaWQge1xuICAgICAgICBjb25zdCBkaXIgPSBib25lLmdldERpcmVjdGlvblVWKCk7XG4gICAgICAgIFV0aWxzLnZhbGlkYXRlRGlyZWN0aW9uVVYoZGlyKTtcblxuICAgICAgICBjb25zdCBsZW4gPSBib25lLmdldExlbmd0aCgpO1xuICAgICAgICBVdGlscy52YWxpZGF0ZUxlbmd0aChsZW4pO1xuXG4gICAgICAgIGlmICh0aGlzLl9jaGFpbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZCb25lRW5kID0gdGhpcy5fY2hhaW5bdGhpcy5fY2hhaW4ubGVuZ3RoIC0gMV0uZ2V0RW5kTG9jYXRpb24oKTtcblxuICAgICAgICAgICAgYm9uZS5zZXRTdGFydExvY2F0aW9uKHByZXZCb25lRW5kKTtcbiAgICAgICAgICAgIGJvbmUuc2V0RW5kTG9jYXRpb24oIHByZXZCb25lRW5kLnBsdXMoZGlyLnRpbWVzKGxlbikpICk7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkQm9uZShib25lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbm5vdCBhZGQgdGhlIGJhc2UgYm9uZSB0byBhIGNoYWluIHVzaW5nIHRoaXMgbWV0aG9kIGFzIGl0IGRvZXMgbm90IHByb3ZpZGUgYSBzdGFydCBsb2NhdGlvbi4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEJhc2Vib25lQ29uc3RyYWludFR5cGUoKTogQmFzZWJvbmVDb25zdHJhaW50VHlwZTJEIHsgcmV0dXJuIHRoaXMuX2Jhc2Vib25lQ29uc3RyYWludFR5cGU7IH1cblxuICAgIGdldEJhc2Vib25lQ29uc3RyYWludFVWKCk6IFZlYzJmIHsgcmV0dXJuIHRoaXMuX2Jhc2Vib25lQ29uc3RyYWludFVWOyB9XG5cbiAgICBnZXRCYXNlTG9jYXRpb24oKTogVmVjMmYge1xuICAgICAgICBpZiAodGhpcy5fY2hhaW4ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hhaW5bMF0uZ2V0U3RhcnRMb2NhdGlvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IGJhc2UgbG9jYXRpb24gYXMgdGhlcmUgYXJlIHplcm8gYm9uZXMgaW4gdGhlIGNoYWluLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Qm9uZShib25lTnVtYmVyOiBudW1iZXIpOiBGYWJyaWtCb25lMkQge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hhaW5bYm9uZU51bWJlcl07XG4gICAgfVxuXG4gICAgZ2V0Qm9uZUNvbm5lY3Rpb25Qb2ludCgpOiBCb25lQ29ubmVjdGlvblBvaW50IHsgcmV0dXJuIHRoaXMuX2JvbmVDb25uZWN0aW9uUG9pbnQ7IH1cblxuICAgIGdldENoYWluKCk6IEZhYnJpa0JvbmUyRFtdIHsgcmV0dXJuIHRoaXMuX2NoYWluOyB9XG5cbiAgICBnZXRDaGFpbkxlbmd0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fY2hhaW5MZW5ndGg7IH1cblxuICAgIGdldENvbm5lY3RlZEJvbmVOdW1iZXIoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2Nvbm5lY3RlZEJvbmVOdW1iZXI7IH1cblxuICAgIGdldENvbm5lY3RlZENoYWluTnVtYmVyKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9jb25uZWN0ZWRDaGFpbk51bWJlcjsgfVxuXG4gICAgZ2V0RWZmZWN0b3JMb2NhdGlvbigpOiBWZWMyZiB7XG4gICAgICAgIGlmICh0aGlzLl9jaGFpbi5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jaGFpblt0aGlzLl9jaGFpbi5sZW5ndGggLSAxXS5nZXRFbmRMb2NhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IGVmZmVjdG9yIGxvY2F0aW9uIGFzIHRoZXJlIGFyZSB6ZXJvIGJvbmVzIGluIHRoZSBjaGFpbi4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEVtYmVkZGVkVGFyZ2V0TW9kZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3VzZUVtYmVkZGVkVGFyZ2V0OyB9XG5cbiAgICBnZXRFbWJlZGRlZFRhcmdldCgpOiBWZWMyZiB7IHJldHVybiB0aGlzLl9lbWJlZGRlZFRhcmdldDsgfVxuXG4gICAgZ2V0TGFzdFRhcmdldExvY2F0aW9uKCk6IFZlYzJmIHsgcmV0dXJuIHRoaXMuX2xhc3RUYXJnZXRMb2NhdGlvbjsgfVxuXG4gICAgZ2V0TmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fbmFtZTsgfVxuXG4gICAgZ2V0TnVtQm9uZXMoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2NoYWluLmxlbmd0aDsgfVxuXG4gICAgcmVtb3ZlQm9uZShib25lTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKGJvbmVOdW1iZXIgPCB0aGlzLl9jaGFpbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoYWluLnNwbGljZShib25lTnVtYmVyLCAxKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hhaW5MZW5ndGgoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQm9uZSAnICsgYm9uZU51bWJlciArICcgZG9lcyBub3QgZXhpc3QgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoZSBjaGFpbi4gQm9uZXMgYXJlIHplcm8gaW5kZXhlZC4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEJhc2Vib25lQ29uc3RyYWludFR5cGUodHlwZTogQmFzZWJvbmVDb25zdHJhaW50VHlwZTJEKTogdm9pZCB7IHRoaXMuX2Jhc2Vib25lQ29uc3RyYWludFR5cGUgPSB0eXBlOyB9XG5cbiAgICBzZXRCYXNlYm9uZUNvbnN0cmFpbnRVVihjb25zdHJhaW50VVY6IFZlYzJmKTogdm9pZCB7XG4gICAgICAgIFV0aWxzLnZhbGlkYXRlRGlyZWN0aW9uVVYoY29uc3RyYWludFVWKTtcblxuICAgICAgICB0aGlzLl9iYXNlYm9uZUNvbnN0cmFpbnRVVi5zZXQoVmVjMmYubm9ybWFsaXNlZChjb25zdHJhaW50VVYpKTtcbiAgICB9XG5cbiAgICBzZXRCYXNlTG9jYXRpb24oYmFzZUxvY2F0aW9uOiBWZWMyZik6IHZvaWQge1xuICAgICAgICB0aGlzLl9iYXNlTG9jYXRpb24uc2V0KGJhc2VMb2NhdGlvbik7XG4gICAgfVxuXG4gICAgc2V0Qm9uZUNvbm5lY3Rpb25Qb2ludChib25lQ29ubmVjdGlvblBvaW50OiBCb25lQ29ubmVjdGlvblBvaW50KSB7IHRoaXMuX2JvbmVDb25uZWN0aW9uUG9pbnQgPSBib25lQ29ubmVjdGlvblBvaW50OyB9XG5cbiAgICBzZXRDaGFpbihjaGFpbjogRmFicmlrQm9uZTJEW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2hhaW4gPSBjaGFpbjtcbiAgICB9XG5cbiAgICBzZXRDb2xvdXIoY29sb3VyOiBDb2xvdXI0Zik6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBhQm9uZSBvZiB0aGlzLl9jaGFpbikge1xuICAgICAgICAgICAgYUJvbmUuc2V0Q29sb3VyKGNvbG91cik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDb25uZWN0ZWRCb25lTnVtYmVyKGJvbmVOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb25uZWN0ZWRCb25lTnVtYmVyID0gYm9uZU51bWJlcjtcbiAgICB9XG5cbiAgICBzZXRDb25uZWN0ZWRDaGFpbk51bWJlcihjaGFpbk51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZENoYWluTnVtYmVyID0gY2hhaW5OdW1iZXI7XG4gICAgfVxuXG4gICAgc2V0Rml4ZWRCYXNlTW9kZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoIXZhbHVlICYmIHRoaXMuX2Nvbm5lY3RlZENoYWluTnVtYmVyICE9PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGNoYWluIGlzIGNvbm5lY3RlZCB0byBhbm90aGVyIGNoYWluIHNvIG11c3QgcmVtYWluIGluIGZpeGVkIGJhc2UgbW9kZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9iYXNlYm9uZUNvbnN0cmFpbnRUeXBlID09PSBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlMkQuR0xPQkFMX0FCU09MVVRFICYmICF2YWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgc2V0IGEgbm9uLWZpeGVkIGJhc2UgbW9kZSB3aGVuIHRoZSBjaGFpblxcJ3MgY29uc3RyYWludCB0eXBlIGlzIEJhc2VCb25lQ29uc3RyYWludFR5cGUyRC5HTE9CQUxfQUJTT0xVVEUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9maXhlZEJhc2VNb2RlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0TWF4SXRlcmF0aW9uQXR0ZW1wdHMobWF4SXRlcmF0aW9uczogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChtYXhJdGVyYXRpb25zIDwgMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgbWF4aW11bSBudW1iZXIgb2YgYXR0ZW1wdHMgdG8gc29sdmUgdGhpcyBJSyBjaGFpbiBtdXN0IGJlIGF0IGxlYXN0IDEuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9tYXhJdGVyYXRpb25BdHRlbXB0cyA9IG1heEl0ZXJhdGlvbnM7XG4gICAgfVxuXG4gICAgc2V0TWluSXRlcmF0aW9uQ2hhbmdlKG1pbkl0ZXJhdGlvbkNoYW5nZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChtaW5JdGVyYXRpb25DaGFuZ2UgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBtaW5pbXVtIGl0ZXJhdGlvbiBjaGFuZ2UgdmFsdWUgbXVzdCBiZSBtb3JlIHRoYW4gb3IgZXF1YWwgdG8gemVyby4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21pbkl0ZXJhdGlvbkNoYW5nZSA9IG1pbkl0ZXJhdGlvbkNoYW5nZTtcbiAgICB9XG5cbiAgICBzZXROYW1lKG5hbWU6IHN0cmluZyk6IHZvaWQgeyB0aGlzLl9uYW1lID0gbmFtZTsgfVxuXG4gICAgc2V0U29sdmVEaXN0YW5jZVRocmVzaG9sZChzb2x2ZURpc3RhbmNlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHNvbHZlRGlzdGFuY2UgPCAwLjApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHNvbHZlIGRpc3RhbmNlIHRocmVzaG9sZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc29sdmVEaXN0YW5jZVRocmVzaG9sZCA9IHNvbHZlRGlzdGFuY2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzb2x2ZUlLKHRhcmdldDogVmVjMmYpOiBudW1iZXIge1xuICAgICAgICAvLyAtLS0tLS0tLS0tINCf0YDRj9C80L7QuSDQv9GA0L7RhdC+0LQg0L7RgiDRjdGE0YTQtdC60YLQvtGA0LAg0Log0L7RgdC90L7QstCw0L3QuNGOICAtLS0tLS0tLS0tLVxuXG4gICAgICAgIGZvciAobGV0IGxvb3AgPSB0aGlzLl9jaGFpbi5sZW5ndGggLSAxOyBsb29wID49IDA7IC0tbG9vcCkge1xuICAgICAgICAgICAgY29uc3QgdGhpc0JvbmUgPSB0aGlzLl9jaGFpbltsb29wXTtcblxuICAgICAgICAgICAgY29uc3QgYm9uZUxlbmd0aCA9IHRoaXNCb25lLmdldExlbmd0aCgpO1xuXG4gICAgICAgICAgICBpZiAobG9vcCAhPT0gdGhpcy5fY2hhaW4ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dGVyQm9uZSA9IHRoaXMuX2NoYWluW2xvb3AgKyAxXTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG91dGVyQm9uZU91dGVyVG9Jbm5lclVWID0gb3V0ZXJCb25lLmdldERpcmVjdGlvblVWKCkubmVnYXRlZCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGhpc0JvbmVPdXRlclRvSW5uZXJVViA9IHRoaXNCb25lLmdldERpcmVjdGlvblVWKCkubmVnYXRlZCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvY2t3aXNlQ29uc3RyYWludERlZ3MgPSBvdXRlckJvbmUuZ2V0Sm9pbnQoKS5nZXRDbG9ja3dpc2VDb25zdHJhaW50RGVncygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFudGlDbG9ja3dpc2VDb25zdHJhaW50RGVncyA9IG91dGVyQm9uZS5nZXRKb2ludCgpLmdldEFudGljbG9ja3dpc2VDb25zdHJhaW50RGVncygpO1xuXG5cbiAgICAgICAgICAgICAgICBsZXQgY29uc3RyYWluZWRVVjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2hhaW5bbG9vcF0uZ2V0Sm9pbnRDb25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbSgpID09IENvbnN0cmFpbnRDb29yZGluYXRlU3lzdGVtLkxPQ0FMKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbmVkVVYgPSBWZWMyZi5nZXRDb25zdHJhaW5lZFVWKHRoaXNCb25lT3V0ZXJUb0lubmVyVVYsIG91dGVyQm9uZU91dGVyVG9Jbm5lclVWLCBjbG9ja3dpc2VDb25zdHJhaW50RGVncywgYW50aUNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW5lZFVWID0gVmVjMmYuZ2V0Q29uc3RyYWluZWRVVih0aGlzQm9uZU91dGVyVG9Jbm5lclVWLCB0aGlzQm9uZS5nZXRHbG9iYWxDb25zdHJhaW50VVYoKS5uZWdhdGVkKCksIGNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzLCBhbnRpQ2xvY2t3aXNlQ29uc3RyYWludERlZ3MpO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhcnRMb2NhdGlvbiA9IHRoaXNCb25lLmdldEVuZExvY2F0aW9uKCkucGx1cyhjb25zdHJhaW5lZFVWLnRpbWVzKGJvbmVMZW5ndGgpKTtcblxuICAgICAgICAgICAgICAgIHRoaXNCb25lLnNldFN0YXJ0TG9jYXRpb24obmV3U3RhcnRMb2NhdGlvbik7XG5cbiAgICAgICAgICAgICAgICBpZiAobG9vcCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhaW5bbG9vcCAtIDFdLnNldEVuZExvY2F0aW9uKG5ld1N0YXJ0TG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpc0JvbmUuc2V0RW5kTG9jYXRpb24odGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRoaXNCb25lT3V0ZXJUb0lubmVyVVYgPSB0aGlzQm9uZS5nZXREaXJlY3Rpb25VVigpLm5lZ2F0ZWQoKTtcblxuICAgICAgICAgICAgICAgIGxldCBjb25zdHJhaW5lZFVWO1xuICAgICAgICAgICAgICAgIGlmIChsb29wID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbm5lckJvbmVPdXRlclRvSW5uZXJVViA9IHRoaXMuX2NoYWluW2xvb3AgLSAxXS5nZXREaXJlY3Rpb25VVigpLm5lZ2F0ZWQoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9ja3dpc2VDb25zdHJhaW50RGVncyA9IHRoaXNCb25lLmdldEpvaW50KCkuZ2V0Q2xvY2t3aXNlQ29uc3RyYWludERlZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW50aUNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzID0gdGhpc0JvbmUuZ2V0Sm9pbnQoKS5nZXRBbnRpY2xvY2t3aXNlQ29uc3RyYWludERlZ3MoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc0JvbmUuZ2V0Sm9pbnQoKS5nZXRDb25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbSgpID09IENvbnN0cmFpbnRDb29yZGluYXRlU3lzdGVtLkxPQ0FMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW5lZFVWID0gVmVjMmYuZ2V0Q29uc3RyYWluZWRVVih0aGlzQm9uZU91dGVyVG9Jbm5lclVWLCBpbm5lckJvbmVPdXRlclRvSW5uZXJVViwgY2xvY2t3aXNlQ29uc3RyYWludERlZ3MsIGFudGlDbG9ja3dpc2VDb25zdHJhaW50RGVncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW5lZFVWID0gVmVjMmYuZ2V0Q29uc3RyYWluZWRVVih0aGlzQm9uZU91dGVyVG9Jbm5lclVWLCB0aGlzQm9uZS5nZXRHbG9iYWxDb25zdHJhaW50VVYoKS5uZWdhdGVkKCksIGNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzLCBhbnRpQ2xvY2t3aXNlQ29uc3RyYWludERlZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc0JvbmUuZ2V0Sm9pbnRDb25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbSgpID09IENvbnN0cmFpbnRDb29yZGluYXRlU3lzdGVtLkxPQ0FMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW5lZFVWID0gdGhpc0JvbmVPdXRlclRvSW5uZXJVVjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbmVkVVYgPSBWZWMyZi5nZXRDb25zdHJhaW5lZFVWKHRoaXNCb25lT3V0ZXJUb0lubmVyVVYsIHRoaXNCb25lLmdldEdsb2JhbENvbnN0cmFpbnRVVigpLm5lZ2F0ZWQoKSwgdGhpc0JvbmUuZ2V0Q2xvY2t3aXNlQ29uc3RyYWludERlZ3MoKSwgdGhpc0JvbmUuZ2V0QW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhcnRMb2NhdGlvbiA9IHRoaXNCb25lLmdldEVuZExvY2F0aW9uKCkucGx1cyhjb25zdHJhaW5lZFVWLnRpbWVzKGJvbmVMZW5ndGgpKTtcblxuICAgICAgICAgICAgICAgIHRoaXNCb25lLnNldFN0YXJ0TG9jYXRpb24obmV3U3RhcnRMb2NhdGlvbik7XG5cbiAgICAgICAgICAgICAgICBpZiAobG9vcCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhaW5bbG9vcCAtIDFdLnNldEVuZExvY2F0aW9uKG5ld1N0YXJ0TG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0g0J7QsdGA0LDRgtC90YvQuSDQv9GA0L7RhdC+0LQg0L7RgiDQvtGB0L3QvtCy0LDQvdC40Y8g0Log0Y3RhNGE0LXQutGC0L7RgNGDIC0tLS0tLS0tLS0tXG5cbiAgICAgICAgZm9yIChsZXQgbG9vcCA9IDA7IGxvb3AgPCB0aGlzLl9jaGFpbi5sZW5ndGg7ICsrbG9vcCkge1xuICAgICAgICAgICAgY29uc3QgYm9uZUxlbmd0aCA9IHRoaXMuX2NoYWluW2xvb3BdLmdldExlbmd0aCgpO1xuXG4gICAgICAgICAgICBjb25zdCB0aGlzQm9uZSA9IHRoaXMuX2NoYWluW2xvb3BdO1xuICAgICAgICAgICAgaWYgKGxvb3AgIT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0JvbmUgPSB0aGlzLl9jaGFpbltsb29wIC0gMV07XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0aGlzQm9uZUlubmVyVG9PdXRlclVWID0gdGhpc0JvbmUuZ2V0RGlyZWN0aW9uVVYoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2Qm9uZUlubmVyVG9PdXRlclVWID0gcHJldmlvdXNCb25lLmdldERpcmVjdGlvblVWKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjbG9ja3dpc2VDb25zdHJhaW50RGVncyA9IHRoaXNCb25lLmdldEpvaW50KCkuZ2V0Q2xvY2t3aXNlQ29uc3RyYWludERlZ3MoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhbnRpQ2xvY2t3aXNlQ29uc3RyYWludERlZ3MgPSB0aGlzQm9uZS5nZXRKb2ludCgpLmdldEFudGljbG9ja3dpc2VDb25zdHJhaW50RGVncygpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNvbnN0cmFpbmVkVVY7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNCb25lLmdldEpvaW50Q29uc3RyYWludENvb3JkaW5hdGVTeXN0ZW0oKSA9PSBDb25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbS5MT0NBTCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW5lZFVWID0gVmVjMmYuZ2V0Q29uc3RyYWluZWRVVih0aGlzQm9uZUlubmVyVG9PdXRlclVWLCBwcmV2Qm9uZUlubmVyVG9PdXRlclVWLCBjbG9ja3dpc2VDb25zdHJhaW50RGVncywgYW50aUNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW5lZFVWID0gVmVjMmYuZ2V0Q29uc3RyYWluZWRVVih0aGlzQm9uZUlubmVyVG9PdXRlclVWLCB0aGlzQm9uZS5nZXRHbG9iYWxDb25zdHJhaW50VVYoKSwgY2xvY2t3aXNlQ29uc3RyYWludERlZ3MsIGFudGlDbG9ja3dpc2VDb25zdHJhaW50RGVncyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RW5kTG9jYXRpb24gPSB0aGlzQm9uZS5nZXRTdGFydExvY2F0aW9uKCkucGx1cyhjb25zdHJhaW5lZFVWLnRpbWVzKGJvbmVMZW5ndGgpKTtcblxuICAgICAgICAgICAgICAgIHRoaXNCb25lLnNldEVuZExvY2F0aW9uKG5ld0VuZExvY2F0aW9uKTtcblxuICAgICAgICAgICAgICAgIGlmIChsb29wIDwgdGhpcy5fY2hhaW4ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFpbltsb29wICsgMV0uc2V0U3RhcnRMb2NhdGlvbihuZXdFbmRMb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZml4ZWRCYXNlTW9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFpblswXS5zZXRTdGFydExvY2F0aW9uKHRoaXMuX2Jhc2VMb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9uZVplcm9VViA9IHRoaXMuX2NoYWluWzBdLmdldERpcmVjdGlvblVWKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvbmVaZXJvRW5kTG9jYXRpb24gPSB0aGlzLl9jaGFpblswXS5nZXRFbmRMb2NhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdCb25lWmVyb1N0YXJ0TG9jYXRpb24gPSBib25lWmVyb0VuZExvY2F0aW9uLm1pbnVzKGJvbmVaZXJvVVYudGltZXMoYm9uZUxlbmd0aCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFpblswXS5zZXRTdGFydExvY2F0aW9uKG5ld0JvbmVaZXJvU3RhcnRMb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Jhc2Vib25lQ29uc3RyYWludFR5cGUgPT0gQmFzZWJvbmVDb25zdHJhaW50VHlwZTJELk5PTkUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGhpc0JvbmVJbm5lclRvT3V0ZXJVViA9IHRoaXNCb25lLmdldERpcmVjdGlvblVWKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RW5kTG9jYXRpb24gPSB0aGlzQm9uZS5nZXRTdGFydExvY2F0aW9uKCkucGx1cyh0aGlzQm9uZUlubmVyVG9PdXRlclVWLnRpbWVzKGJvbmVMZW5ndGgpKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFpblswXS5zZXRFbmRMb2NhdGlvbihuZXdFbmRMb2NhdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NoYWluLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYWluWzFdLnNldFN0YXJ0TG9jYXRpb24obmV3RW5kTG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGhpc0JvbmVJbm5lclRvT3V0ZXJVViA9IHRoaXNCb25lLmdldERpcmVjdGlvblVWKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvY2t3aXNlQ29uc3RyYWludERlZ3MgPSB0aGlzQm9uZS5nZXRKb2ludCgpLmdldENsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFudGlDbG9ja3dpc2VDb25zdHJhaW50RGVncyA9IHRoaXNCb25lLmdldEpvaW50KCkuZ2V0QW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnN0cmFpbmVkVVY7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9iYXNlYm9uZUNvbnN0cmFpbnRUeXBlID09PSBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlMkQuTE9DQUxfQUJTT0xVVEUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbmVkVVYgPSBWZWMyZi5nZXRDb25zdHJhaW5lZFVWKHRoaXNCb25lSW5uZXJUb091dGVyVVYsIHRoaXMuX2Jhc2Vib25lUmVsYXRpdmVDb25zdHJhaW50VVYsIGNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzLCBhbnRpQ2xvY2t3aXNlQ29uc3RyYWludERlZ3MpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW5lZFVWID0gVmVjMmYuZ2V0Q29uc3RyYWluZWRVVih0aGlzQm9uZUlubmVyVG9PdXRlclVWLCB0aGlzLl9iYXNlYm9uZUNvbnN0cmFpbnRVViwgY2xvY2t3aXNlQ29uc3RyYWludERlZ3MsIGFudGlDbG9ja3dpc2VDb25zdHJhaW50RGVncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RW5kTG9jYXRpb24gPSB0aGlzLl9jaGFpbltsb29wXS5nZXRTdGFydExvY2F0aW9uKCkucGx1cyhjb25zdHJhaW5lZFVWLnRpbWVzKGJvbmVMZW5ndGgpKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFpbltsb29wXS5zZXRFbmRMb2NhdGlvbihuZXdFbmRMb2NhdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvb3AgPCB0aGlzLl9jaGFpbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFpbltsb29wICsgMV0uc2V0U3RhcnRMb2NhdGlvbihuZXdFbmRMb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYXN0VGFyZ2V0TG9jYXRpb24uc2V0KHRhcmdldCk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudEVmZmVjdG9yTG9jYXRpb24gPSB0aGlzLl9jaGFpblt0aGlzLl9jaGFpbi5sZW5ndGggLSAxXS5nZXRFbmRMb2NhdGlvbigpO1xuXG4gICAgICAgIHJldHVybiBWZWMyZi5kaXN0YW5jZUJldHdlZW4oY3VycmVudEVmZmVjdG9yTG9jYXRpb24sIHRhcmdldCk7XG4gICAgfVxuXG4gICAgc2V0RW1iZWRkZWRUYXJnZXRNb2RlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7IHRoaXMuX3VzZUVtYmVkZGVkVGFyZ2V0ID0gdmFsdWU7IH1cblxuICAgIHByaXZhdGUgY2xvbmVDaGFpblZlY3RvcigpOiBGYWJyaWtCb25lMkRbXSB7XG4gICAgICAgIGNvbnN0IG51bUJvbmVzID0gdGhpcy5fY2hhaW4ubGVuZ3RoO1xuXG4gICAgICAgIGNvbnN0IGNsb25lZENoYWluID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgbG9vcCA9IDA7IGxvb3AgPCBudW1Cb25lczsgKytsb29wKSB7XG4gICAgICAgICAgICBjb25zdCBib25lID0gbmV3IEZhYnJpa0JvbmUyRCgpO1xuICAgICAgICAgICAgYm9uZS5zZXQodGhpcy5fY2hhaW5bbG9vcF0pO1xuICAgICAgICAgICAgY2xvbmVkQ2hhaW4ucHVzaChib25lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbG9uZWRDaGFpbjtcbiAgICB9XG5cbiAgICB1cGRhdGVDaGFpbkxlbmd0aCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2hhaW5MZW5ndGggPSAwLjA7XG4gICAgICAgIGZvciAobGV0IGFCb25lIG9mIHRoaXMuX2NoYWluKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGFpbkxlbmd0aCArPSBhQm9uZS5nZXRMZW5ndGgoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUVtYmVkZGVkVGFyZ2V0KG5ld0VtYmVkZGVkVGFyZ2V0OiBWZWMyZik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fdXNlRW1iZWRkZWRUYXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuX2VtYmVkZGVkVGFyZ2V0LnNldChuZXdFbWJlZGRlZFRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgY2hhaW4gZG9lcyBub3QgaGF2ZSBlbWJlZGRlZCB0YXJnZXRzIGVuYWJsZWQgLSBlbmFibGUgd2l0aCBzZXRFbWJlZGRlZFRhcmdldE1vZGUodHJ1ZSkuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzb2x2ZUZvckVtYmVkZGVkVGFyZ2V0KCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl91c2VFbWJlZGRlZFRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29sdmVGb3JUYXJnZXQodGhpcy5fZW1iZWRkZWRUYXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGNoYWluIGRvZXMgbm90IGhhdmUgZW1iZWRkZWQgdGFyZ2V0cyBlbmFibGVkIC0gZW5hYmxlIHdpdGggc2V0RW1iZWRkZWRUYXJnZXRNb2RlKHRydWUpLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc29sdmVGb3JUYXJnZXQobmV3VGFyZ2V0OiBWZWMyZik6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9sYXN0VGFyZ2V0TG9jYXRpb24uYXBwcm94aW1hdGVseUVxdWFscyhuZXdUYXJnZXQsIDAuMDAxKSAmJiB0aGlzLl9sYXN0QmFzZUxvY2F0aW9uLmFwcHJveGltYXRlbHlFcXVhbHModGhpcy5fYmFzZUxvY2F0aW9uLCAwLjAwMSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50U29sdmVEaXN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdGFydGluZ0Rpc3RhbmNlO1xuICAgICAgICBsZXQgc3RhcnRpbmdTb2x1dGlvbiA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuX2xhc3RCYXNlTG9jYXRpb24uYXBwcm94aW1hdGVseUVxdWFscyh0aGlzLl9iYXNlTG9jYXRpb24sIDAuMDAxKSkge1xuICAgICAgICAgICAgc3RhcnRpbmdEaXN0YW5jZSA9IFZlYzJmLmRpc3RhbmNlQmV0d2Vlbih0aGlzLl9jaGFpblt0aGlzLl9jaGFpbi5sZW5ndGggLSAxXS5nZXRFbmRMb2NhdGlvbigpLCBuZXdUYXJnZXQpO1xuICAgICAgICAgICAgc3RhcnRpbmdTb2x1dGlvbiA9IHRoaXMuY2xvbmVDaGFpblZlY3RvcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRpbmdEaXN0YW5jZSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmVzdFNvbHV0aW9uOiBGYWJyaWtCb25lMkRbXSA9IFtdO1xuXG4gICAgICAgIGxldCBiZXN0U29sdmVEaXN0YW5jZSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGxldCBsYXN0UGFzc1NvbHZlRGlzdGFuY2UgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuXG4gICAgICAgIGxldCBzb2x2ZURpc3RhbmNlO1xuICAgICAgICBmb3IgKGxldCBsb29wID0gMDsgbG9vcCA8IHRoaXMuX21heEl0ZXJhdGlvbkF0dGVtcHRzOyArK2xvb3ApIHtcbiAgICAgICAgICAgIHNvbHZlRGlzdGFuY2UgPSB0aGlzLnNvbHZlSUsobmV3VGFyZ2V0KTtcblxuICAgICAgICAgICAgaWYgKHNvbHZlRGlzdGFuY2UgPCBiZXN0U29sdmVEaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGJlc3RTb2x2ZURpc3RhbmNlID0gc29sdmVEaXN0YW5jZTtcbiAgICAgICAgICAgICAgICBiZXN0U29sdXRpb24gPSB0aGlzLmNsb25lQ2hhaW5WZWN0b3IoKTtcblxuICAgICAgICAgICAgICAgIGlmIChzb2x2ZURpc3RhbmNlIDw9IHRoaXMuX3NvbHZlRGlzdGFuY2VUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc29sdmVEaXN0YW5jZSAtIGxhc3RQYXNzU29sdmVEaXN0YW5jZSkgPCB0aGlzLl9taW5JdGVyYXRpb25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYXN0UGFzc1NvbHZlRGlzdGFuY2UgPSBzb2x2ZURpc3RhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlc3RTb2x2ZURpc3RhbmNlIDwgc3RhcnRpbmdEaXN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFNvbHZlRGlzdGFuY2UgPSBiZXN0U29sdmVEaXN0YW5jZTtcbiAgICAgICAgICAgIHRoaXMuX2NoYWluID0gYmVzdFNvbHV0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFNvbHZlRGlzdGFuY2UgPSBzdGFydGluZ0Rpc3RhbmNlO1xuICAgICAgICAgICAgdGhpcy5fY2hhaW4gPSBzdGFydGluZ1NvbHV0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGFzdEJhc2VMb2NhdGlvbi5zZXQodGhpcy5fYmFzZUxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy5fbGFzdFRhcmdldExvY2F0aW9uLnNldChuZXdUYXJnZXQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50U29sdmVEaXN0YW5jZTtcbiAgICB9XG5cbiAgICBnZXRCYXNlYm9uZVJlbGF0aXZlQ29uc3RyYWludFVWKCk6IFZlYzJmIHsgcmV0dXJuIHRoaXMuX2Jhc2Vib25lUmVsYXRpdmVDb25zdHJhaW50VVY7IH1cblxuICAgIHNldEJhc2Vib25lUmVsYXRpdmVDb25zdHJhaW50VVYoY29uc3RyYWludFVWOiBWZWMyZik6IHZvaWQgeyB0aGlzLl9iYXNlYm9uZVJlbGF0aXZlQ29uc3RyYWludFVWLnNldChjb25zdHJhaW50VVYpOyB9XG5cbiAgICBnZXRNYXhJdGVyYXRpb25BdHRlbXB0cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4SXRlcmF0aW9uQXR0ZW1wdHM7XG4gICAgfVxuXG4gICAgZ2V0TWluSXRlcmF0aW9uQ2hhbmdlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taW5JdGVyYXRpb25DaGFuZ2U7XG4gICAgfVxuXG4gICAgZ2V0U29sdmVEaXN0YW5jZVRocmVzaG9sZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc29sdmVEaXN0YW5jZVRocmVzaG9sZDtcbiAgICB9XG59XG4iLCJpbXBvcnQge0ZhYnJpa0JvbmUzRH0gZnJvbSAnLi9GYWJyaWtCb25lM0QnO1xuaW1wb3J0IHtGYWJyaWtKb2ludDNEfSBmcm9tICcuL0ZhYnJpa0pvaW50M0QnO1xuaW1wb3J0IHtGYWJyaWtTdHJ1Y3R1cmUzRH0gZnJvbSAnLi9GYWJyaWtTdHJ1Y3R1cmUzRCc7XG5pbXBvcnQge0pvaW50VHlwZX0gZnJvbSAnLi9Kb2ludFR5cGUnO1xuaW1wb3J0IHtWZWMzZn0gZnJvbSAnLi4vdXRpbHMvVmVjM2YnO1xuaW1wb3J0IHtCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0R9IGZyb20gJy4vQmFzZWJvbmVDb25zdHJhaW50VHlwZTNEJztcbmltcG9ydCB7VXRpbHN9IGZyb20gJy4uL3V0aWxzL1V0aWxzJztcbmltcG9ydCB7Q29sb3VyNGZ9IGZyb20gJy4uL3V0aWxzL0NvbG91cjRmJztcbmltcG9ydCB7TWF0M2Z9IGZyb20gJy4uL3V0aWxzL01hdDNmJztcblxuLyoqXG4gKiAzRCDRhtC10L/RjCDQutC+0YHRgtC10LksINGA0LXRiNCw0Y7RidCw0Y8g0LfQsNC00LDRh9GDINC40L3QstC10YDRgdC90L7QuSDQutC40L3QtdC80LDRgtC40LrQuCDRgSDQv9C+0LzQvtGJ0YzRjiDQsNC70LPQvtGA0LjRgtC80LAgRkFCUklLLlxuICovXG5leHBvcnQgY2xhc3MgRmFicmlrQ2hhaW4zRCB7XG4gICAgLy8gLS0tLS0tLS0tLSBQcml2YXRlIFByb3BlcnRpZXMgLS0tLS0tLS0tLVxuICAgIC8qKlxuICAgICAqINCc0LDRgdGB0LjQsiDQutC+0YHRgtC10Lkg0YbQtdC/0LguXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY2hhaW46IEZhYnJpa0JvbmUzRFtdID0gW107XG5cbiAgICAvKipcbiAgICAgKiDQndCw0LfQstCw0L3QuNC1INGG0LXQv9C4LlxuICAgICAqIDxwPlxuICAgICAqINCd0LXQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+0LUg0Log0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y4g0L/QvtC70LUsINC/0L7QvNC+0LPQsNGO0YnQtdC1INC40LTQtdC90YLQuNGE0LjRhtC40YDQvtCy0LDRgtGMINGG0LXQv9GMLlxuICAgICAqL1xuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqINCf0L7RgNC+0LMsINC00L7RgdGC0LjQs9C90YPQsiDQutC+0YLQvtGA0L7Qs9C+INC80Ysg0YHRh9C40YLQsNC10Lwg0LfQsNC00LDRh9GDINC40L3QstC10YDRgdC90L7QuSDQutC40L3QtdC80LDRgtC40LrQuCDRgNC10YjQtdC90L3QvtC5LlxuICAgICAqIDxwPlxuICAgICAqINCf0YDQuCDRgNC10YjQtdC90LjQuCDQt9Cw0LTQsNGH0Lgg0JjQmiwg0LrQvtCz0LTQsCDRgNCw0YHRgdGC0L7Rj9C90LjQtSDQvNC10LbQtNGDINGC0LXQutGD0YnQuNC8INC/0L7Qu9C+0LbQtdC90LjQtdC8INC4INC20LXQu9Cw0LXQvNGL0Lwg0L/QvtC70L7QttC10L3QuNC10Lwg0YHRgtCw0L3QvtCy0LjRgtGB0Y8g0LzQtdC90YzRiNC1INC40LvQuCDRgNCw0LLQvdC+XG4gICAgICog0LfQvdCw0YfQtdC90LjRjiDQv9C+0YDQvtCz0LAsINC80Ysg0L/RgNC10YDRi9Cy0LDQtdC8INC00LDQu9GM0L3QtdC50YjQuNC1INC40YLQtdGA0LDRhtC40Lgg0Lgg0YHRh9C40YLQsNC10Lwg0LfQsNC00LDRh9GDINGA0LXRiNC10L3QvdC+0LkuXG4gICAgICogPHA+XG4gICAgICog0JfQvdCw0YfQtdC90LjQtSDQv9C+INGD0LzQvtC70YfQsNC90LjRjiAwLjAxLlxuICAgICAqIDxwPlxuICAgICAqINCc0LjQvdC40LzQsNC70YzQvdC+INC00L7Qv9GD0YHRgtC40LzQvtC1INC30L3QsNGH0LXQvdC40LUgLSAwLCDQvdC+INGB0YLQvtC40YIg0L/QvtC80L3QuNGC0Ywg0L4g0L/QvtCz0YDQtdGI0L3QvtGB0YLQuCDQstGL0YfQuNGB0LvQtdC90LjRjyDQuCDQvdC1INC30LDQtNCw0LLQsNGC0Ywg0L/QvtGA0L7QsyDRgNCw0LLQvdGL0Lwg0L3Rg9C70Y4sINGC0LDQulxuICAgICAqINC60LDQuiDRjdGC0L4g0LzQvtC20LXRgiDQv9GA0LjQstC10YHRgtC4INC6INCx0LXRgdC60L7QvdC10YfQvdGL0Lwg0LHQtdGB0L/QvtC70LXQt9C90YvQvCDQv9C+0L/Ri9GC0LrQsNC8LlxuICAgICAqIDxwPlxuICAgICAqINCl0L7RgtGPINC00LDQvdC90L7QtSDQv9C+0LvQtSDQuCDRgdCw0LzRi9C5INCy0LDQttC90YvQuSDQutGA0LjRgtC10YDQuNC5INC+0YHRgtCw0L3QvtCy0LAg0LTQu9GPINCY0Jot0LDQu9Cz0L7RgNC40YLQvNCwLCDQvtC90L4g0YDQsNCx0L7RgtCw0LXRgiDQsiDQutC+0LzQsdC40L3QsNGG0LjQuCDRgVxuICAgICAqIHtAbGluayAjX21heEl0ZXJhdGlvbkF0dGVtcHRzfSDQuCB7QGxpbmsgX21pbkl0ZXJhdGlvbkNoYW5nZX0uINCt0YLQuCDQstGB0L/QvtC80L7Qs9Cw0YLQtdC70YzQvdGL0LUg0YHQstC+0LnRgdGC0LLQsCDQv9C+0LzQvtCz0LDRjtGCINC/0LXRgNC10LbQuNGC0Ywg0YHQuNGC0YPQsNGG0LjQuCxcbiAgICAgKiDQutC+0LPQtNCwINC00LvQuNC90Ysg0YbQtdC/0Lgg0L3QtSDRhdCy0LDRgtCw0LXRgiDQtNC70Y8g0LTQvtGB0YLQuNC20LXQvdC40Y8g0YbQtdC70Lgg0LjQu9C4INC60L7Qs9C00LAg0YHRg9GB0YLQsNCy0Ysg0YbQtdC/0Lgg0YHQuNC70YzQvdC+INC+0LPRgNCw0L3QuNGH0LXQvdGLLlxuICAgICAqL1xuICAgIHByaXZhdGUgX3NvbHZlRGlzdGFuY2VUaHJlc2hvbGQgPSAwLjAxO1xuXG4gICAgLyoqXG4gICAgICog0JzQsNC60YHQuNC80LDQu9GM0L3QvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC40YLQtdGA0LDRhtC40Lkg0LDQu9Cz0L7RgNC40YLQvNCwLCDQv9GA0LjQvNC10L3Rj9C10LzRi9GFINC/0YDQuCDRgNC10YjQtdC90LjQuCDQt9Cw0LTQsNGH0Lgg0JjQmi5cbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IDIwXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbWF4SXRlcmF0aW9uQXR0ZW1wdHMgPSAyMDtcblxuICAgIC8qKlxuICAgICAqINCc0LjQvdC40LzQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjRjyDQtNC70Y8g0LTQtdC70YzRgtGLINGA0LDRgdGB0L7RgtC+0Y/QvdC40Lkg0LzQtdC20LTRgyDQuNGC0LXRgNCw0YbQuNGP0LzQuCDQsNC70LPQvtGA0LjRgtC80LAuXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdCAwLjAxXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbWluSXRlcmF0aW9uQ2hhbmdlID0gMC4wMTtcblxuICAgIC8qKlxuICAgICAqINCU0LvQuNC90LAg0YbQtdC/0LguXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY2hhaW5MZW5ndGg6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqINCd0LDRh9Cw0LvRjNC90LDRjyDQv9C+0LfQuNGG0LjRjyDQv9C10YDQstC+0Lkg0LrQvtGB0YLQuCDQsiDRhtC10L/QuC5cbiAgICAgKlxuICAgICAqIEBkZWZhdWx0OiBWZWMzZigwLCAwKVxuICAgICAqL1xuICAgIHByaXZhdGUgX2ZpeGVkQmFzZUxvY2F0aW9uID0gbmV3IFZlYzNmKCk7XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0YTQuNC60YHQuNGA0L7QstCw0L3QsCDQu9C4INC90LDRh9Cw0LvRjNC90LDRjyDQv9C+0LfQuNGG0LjRjyDRhtC10L/QuC5cbiAgICAgKiDQldGB0LvQuCDQvdC10YIgLSDRgtC+INC+0L3QsCDQvNC+0LbQtdGCINC/0LXRgNC10LzQtdGJ0LDRgtGM0YHRjy5cbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cbiAgICBwcml2YXRlIF9maXhlZEJhc2VNb2RlID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqINCi0LjQvyDRgdGD0YHRgtCw0LLQsCDQv9C10YDQstC+0Lkg0LrQvtGB0YLQuCDQsiDRhtC10L/QuC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9iYXNlYm9uZUNvbnN0cmFpbnRUeXBlOiBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0QgPSBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0QuTk9ORTtcblxuICAgIC8qKlxuICAgICAqINCd0LDQv9GA0LDQstC70LXQvdC40LUg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC60L7RgtC+0YDQvtCz0L4g0LzRiyDQvtCz0YDQsNC90LjRh9C40LLQsNC10Lwg0L/QtdGA0LLRg9GOINC60L7RgdGC0Ywg0YbQtdC/0LguXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYmFzZWJvbmVDb25zdHJhaW50VVYgPSBuZXcgVmVjM2YoKTtcblxuICAgIHByaXZhdGUgX2Jhc2Vib25lUmVsYXRpdmVDb25zdHJhaW50VVY6IFZlYzNmID0gbmV3IFZlYzNmKCk7XG5cbiAgICBwcml2YXRlIF9iYXNlYm9uZVJlbGF0aXZlUmVmZXJlbmNlQ29uc3RyYWludFVWOiBWZWMzZiA9IG5ldyBWZWMzZigpO1xuXG4gICAgLyoqXG4gICAgICog0J/QvtGB0LvQtdC00L3Rj9GPINGG0LXQu9C10LLQsNGPINC/0L7Qt9C40YbQuNGPLCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0LrQvtGC0L7RgNC+0Lkg0YDQtdGI0LDQu9Cw0YHRjCDQt9Cw0LTQsNGH0LAg0JjQmi5cbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IFZlYzNmKE51bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUUpXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbGFzdFRhcmdldExvY2F0aW9uOiBWZWMzZiA9IG5ldyBWZWMzZihOdW1iZXIuTUFYX1ZBTFVFLCBOdW1iZXIuTUFYX1ZBTFVFLCBOdW1iZXIuTUFYX1ZBTFVFKTtcblxuICAgIC8qKlxuICAgICAqINCf0YDQtdC00YvQtNGD0YnQsNGPINC90LDRh9Cw0LvRjNC90LDRjyDQv9C+0LfQuNGG0LjRjyDQsdCw0LfQvtCy0L7QuSAo0L/QtdGA0LLQvtC5INCyINGG0LXQv9C4KSDQutC+0YHRgtC4LlxuICAgICAqIDxwPlxuICAgICAqINCU0LDQvdC90L7QtSDQt9C90LDRh9C10L3QuNC1INGF0YDQsNC90LjRgtGB0Y8g0LTQu9GPINGC0L7Qs9C+LCDRh9GC0L7QsdGLINGB0YDQsNCy0L3QuNCy0LDRgtGMINC40LfQvNC10L3QuNC70L7RgdGMINC70LhcbiAgICAgKiDQvdCw0YfQsNC70YzQvdC+0LUg0L/QvtC70L7QttC10L3QuNC1INCx0LDQt9C+0LLQvtC5INC60L7RgdGC0Lgg0LIg0L/RgNC+0YbQtdGB0YHQtSDRgNC10YjQtdC90LjRjy5cbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IFZlYzNmKE51bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUUsIE51bWJlci5NQVhfVkFMVUUpXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbGFzdEJhc2VMb2NhdGlvbjogVmVjM2YgPSBuZXcgVmVjM2YoTnVtYmVyLk1BWF9WQUxVRSwgTnVtYmVyLk1BWF9WQUxVRSwgTnVtYmVyLk1BWF9WQUxVRSk7XG5cbiAgICAvKipcbiAgICAgKiDQotC10LrRg9GJ0LXQtSDRgNCw0YHRgdGC0L7Rj9C90LjQtSDQvNC10LbQtNGDINGN0YTRhNC10LrRgtC+0YDQvtC8KNC60L7QvdGG0L7QvCDQv9C+0YHQu9C10LTQvdC10Lkg0YLQvtGH0LrQuCDQsiDRhtC10L/QuCkg0Lgg0YbQtdC70LXQstC+0Lkg0L/QvtC30LjRhtC40LXQuS5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9jdXJyZW50U29sdmVEaXN0YW5jZTogbnVtYmVyID0gTnVtYmVyLk1BWF9WQUxVRTtcblxuICAgIC8qKlxuICAgICAqINCd0L7QvNC10YAg0YbQtdC/0LgsINC6INC60L7RgtC+0YDQvtC5INGN0YLQsCDRhtC10L/RjCDQv9C+0LTQutC70Y7Rh9C10L3QsCDQsiBGYWJyaWtTdHJ1Y3R1cmUzRC5cbiAgICAgKiA8cD5cbiAgICAgKiDQldGB0LvQuCDQt9C90LDRh9C10L3QuNC1IC0xLCDQt9C90LDRh9C40YIg0LTQsNC90L3QsNGPINGG0LXQv9GMINC90Lgg0YEg0YfQtdC8INC90LUg0YHQstGP0LfQsNC90LAuXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdCAtMVxuICAgICAqL1xuICAgIHByaXZhdGUgX2Nvbm5lY3RlZENoYWluTnVtYmVyOiBudW1iZXIgPSAtMTtcblxuICAgIC8qKlxuICAgICAqINCd0L7QvNC10YAg0LrQvtGB0YLQuCwg0YEg0LrQvtGC0L7RgNC+0Lkg0YHQstGP0LfQsNC90LAg0Y3RgtCwINGG0LXQv9GMLCDQtdGB0LvQuCDQvtC90LAg0LLQvtC+0LHRidC1INGB0LLRj9C30LDQvdCwINGBINC00YDRg9Cz0L7QuSDRhtC10L/RjNGOLlxuICAgICAqIDxwPlxuICAgICAqINCV0YHQu9C4INC30L3QsNGH0LXQvdC40LUgLTEsINC30L3QsNGH0LjRgiDQtNCw0L3QvdCw0Y8g0YbQtdC/0Ywg0L3QuCDRgSDRh9C10Lwg0L3QtSDRgdCy0Y/Qt9Cw0L3QsC5cbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IC0xXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY29ubmVjdGVkQm9uZU51bWJlcjogbnVtYmVyID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiDQktGB0YLRgNC+0LXQvdC90L7QtSDRhtC10LvQtdCy0L7QtSDRgNCw0YHQv9C+0LvQvtC20LXQvdC40LUs0LrQvtGC0L7RgNC+0LUg0LzQvtC20L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LTQu9GPINGA0LXRiNC10L3QuNGPINCY0JouXG4gICAgICogPHA+XG4gICAgICog0JLRgdGC0YDQvtC10L3QvdGL0LUg0YbQtdC70LXQstGL0LUg0LzQtdGB0YLQvtC/0L7Qu9C+0LbQtdC90LjRjyDQv9C+0LfQstC+0LvRj9GO0YIg0YDQtdGI0LDRgtGMINCY0Jog0YHRgtGA0YPQutGC0YPRgNGLINC00LvRjyDQvdC10YHQutC+0LvRjNC60LjRhSDRhtC10LvQtdC5ICjQv9C+INC+0LTQvdC+0Lkg0L3QsCDRhtC10L/QvtGH0LrRgyDQsiDRgdGC0YDRg9C60YLRg9GA0LUpXG4gICAgICog0LLQvNC10YHRgtC+INGC0L7Qs9C+LCDRh9GC0L7QsdGLINCy0YHQtSDRhtC10L/QvtGH0LrQuCDRgNC10YjQsNC70LjRgdGMINC00LvRjyDQvtC00L3QvtC5INC4INGC0L7QuSDQttC1INGG0LXQu9C4LiDQp9GC0L7QsdGLINC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQstGB0YLRgNC+0LXQvdC90YvQtSDRhtC10LvQuCwg0YTQu9Cw0LMgX3VzZUVtYmVkZGVkVGFyZ2V0c1xuICAgICAqINC00L7Qu9C20L3QviDQsdGL0YLRjCB0cnVlKNGH0YLQviDQvdC1INGP0LLQu9GP0LXRgtGB0Y8g0LfQvdCw0YfQtdC90LjQtdC8INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOKSAtINGN0YLQvtGCINGE0LvQsNCzINC80L7QttC90L4g0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0YEg0L/QvtC80L7RidGM0Y4g0LLRi9C30L7QstCwIHNldEVtYmVkZGVkVGFyZ2V0TW9kZSAodHJ1ZSkuXG4gICAgICpcbiAgICAgKiBAc2VlIHtAbGluayBzZXRFbWJlZGRlZFRhcmdldE1vZGUoYm9vbGVhbikgfVxuICAgICAqL1xuICAgIHByaXZhdGUgX2VtYmVkZGVkVGFyZ2V0OiBWZWMzZiA9IG5ldyBWZWMzZigpO1xuXG4gICAgLyoqXG4gICAgICogX3VzZUVtYmVkZGVkVGFyZ2V0ICAgINCh0LvQtdC00YPQtdGCINC70Lgg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC80LXRgdGC0L7Qv9C+0LvQvtC20LXQvdC40LUgX2VtYmVkZGVkVGFyZ2V0INC/0YDQuCDRgNC10YjQtdC90LjQuCDRjdGC0L7QuSDRhtC10L/QvtGH0LrQuC5cbiAgICAgKiA8cD5cbiAgICAgKiDQrdGC0L7RgiDRhNC70LDQsyDQvNC+0LbQvdC+INC/0LXRgNC10LrQu9GO0YfQuNGC0YwsINCy0YvQt9Cy0LDQsiBzZXRFbWJlZGRlZFRhcmdldE1vZGUgKHRydWUpINCyINGG0LXQv9C+0YfQutC1LlxuICAgICAqXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAc2VlIHtAbGluayBzZXRFbWJlZGRlZFRhcmdldE1vZGUoYm9vbGVhbikgfVxuICAgICAqL1xuICAgIHByaXZhdGUgX3VzZUVtYmVkZGVkVGFyZ2V0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvLyAtLS0tLS0tLS0tIENvbnN0cnVjdG9ycyAtLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiDQmtC+0L3RgdGC0YDRg9C60YLQvtGALlxuICAgICAqXG4gICAgICog0J/RgNC40L3QuNC80LDQtdGCINGC0YDQuCDQstCw0YDQuNCw0YbQuNC4INC/0LDRgNCw0LzQtdGC0YDQvtCyOlxuICAgICAqXG4gICAgICog0JHQtdC3INC/0LDRgNCw0LzQtdGC0YDQvtCyLiDQktGB0LXQvCDQv9C+0LvRj9C8INC/0YDQvtGB0YLQsNCy0LvRj9GO0YLRgdGPINC30L3QsNGH0LXQvdC40Y8g0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4uXG4gICAgICpcbiAgICAgKiDQntC00LjQvSDQv9Cw0YDQsNC80LXRgtGALdGB0YLRgNC+0LrQsC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgICBzb3VyY2UgICAg0JjQvNGPINC00LDQvdC90L7QuSDRhtC10L/QuC5cbiAgICAgKlxuICAgICAqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0LrQvtC/0LjRgNC+0LLQsNC90LjRjy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgICBzb3VyY2UgICAg0KbQtdC/0Ywg0LTQu9GPINC60L7Qv9C40YDQvtCy0LDQvdC40Y8uXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc291cmNlPzogc3RyaW5nIHwgRmFicmlrQ2hhaW4zRCkge1xuICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHNvdXJjZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NoYWluID0gc291cmNlLmNsb25lSWtDaGFpbigpO1xuXG4gICAgICAgICAgICB0aGlzLl9maXhlZEJhc2VMb2NhdGlvbi5zZXQoc291cmNlLmdldEJhc2VMb2NhdGlvbigpKTtcbiAgICAgICAgICAgIHRoaXMuX2xhc3RUYXJnZXRMb2NhdGlvbi5zZXQoc291cmNlLl9sYXN0VGFyZ2V0TG9jYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5fbGFzdEJhc2VMb2NhdGlvbi5zZXQoc291cmNlLl9sYXN0QmFzZUxvY2F0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuX2VtYmVkZGVkVGFyZ2V0LnNldChzb3VyY2UuX2VtYmVkZGVkVGFyZ2V0KTtcblxuICAgICAgICAgICAgaWYgKHNvdXJjZS5fYmFzZWJvbmVDb25zdHJhaW50VHlwZSAhPSBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0QuTk9ORSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Jhc2Vib25lQ29uc3RyYWludFVWLnNldChzb3VyY2UuX2Jhc2Vib25lQ29uc3RyYWludFVWKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9iYXNlYm9uZVJlbGF0aXZlQ29uc3RyYWludFVWLnNldChzb3VyY2UuX2Jhc2Vib25lUmVsYXRpdmVDb25zdHJhaW50VVYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9jaGFpbkxlbmd0aCA9IHNvdXJjZS5fY2hhaW5MZW5ndGg7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50U29sdmVEaXN0YW5jZSA9IHNvdXJjZS5fY3VycmVudFNvbHZlRGlzdGFuY2U7XG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0ZWRDaGFpbk51bWJlciA9IHNvdXJjZS5fY29ubmVjdGVkQ2hhaW5OdW1iZXI7XG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0ZWRCb25lTnVtYmVyID0gc291cmNlLl9jb25uZWN0ZWRCb25lTnVtYmVyO1xuICAgICAgICAgICAgdGhpcy5fYmFzZWJvbmVDb25zdHJhaW50VHlwZSA9IHNvdXJjZS5fYmFzZWJvbmVDb25zdHJhaW50VHlwZTtcbiAgICAgICAgICAgIHRoaXMuX25hbWUgPSBzb3VyY2UuX25hbWU7XG4gICAgICAgICAgICB0aGlzLl91c2VFbWJlZGRlZFRhcmdldCA9IHNvdXJjZS5fdXNlRW1iZWRkZWRUYXJnZXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tIFB1YmxpYyBNZXRob2RzIC0tLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICog0JTQvtCx0LDQstC70Y/QtdGCINC60L7RgdGC0Ywg0LIg0LrQvtC90LXRhiDRhtC10L/QuC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgICBib25lICAgINCa0L7RgdGC0YwuXG4gICAgICovXG4gICAgYWRkQm9uZShib25lOiBGYWJyaWtCb25lM0QpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2hhaW4ucHVzaChib25lKTtcblxuICAgICAgICBpZiAodGhpcy5fY2hhaW4ubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpeGVkQmFzZUxvY2F0aW9uLnNldChib25lLmdldFN0YXJ0TG9jYXRpb24oKSk7XG5cbiAgICAgICAgICAgIHRoaXMuX2Jhc2Vib25lQ29uc3RyYWludFVWID0gYm9uZS5nZXREaXJlY3Rpb25VVigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVDaGFpbkxlbmd0aCgpO1xuICAgIH1cblxuICAgIC8qKipcbiAgICAgKiDQlNC+0LHQsNCy0LvRj9C10YIg0L/QvtGB0LvQtdC00L7QstCw0YLQtdC70YzQvdGD0Y4g0LrQvtGB0YLRjCDQsiDQutC+0L3QtdGGINGN0YLQvtC5INGG0LXQv9C4IElLINGBINGD0YfQtdGC0L7QvCDQstC10LrRgtC+0YDQsCDQvdCw0L/RgNCw0LLQu9C10L3QuNGPINC4INC00LvQuNC90Ysg0L3QvtCy0L7QuSDQutC+0YHRgtC4LlxuICAgICAqIDxwPlxuICAgICAqINCU0L7QsdCw0LLQu9C10L3QvdCw0Y8g0LrQvtGB0YLRjCDQvdC1INC40LzQtdC10YIg0LrQsNC60LjRhS3Qu9C40LHQviDQvtCz0YDQsNC90LjRh9C10L3QuNC5LlxuICAgICAqIDxwPlxuICAgICAqINCt0YLQvtGCINC80LXRgtC+0LQg0LzQvtC20L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0YLQvtC70YzQutC+INGC0L7Qs9C00LAsINC60L7Qs9C00LAg0YbQtdC/0YwgSUsg0YHQvtC00LXRgNC20LjRgiDQsdCw0LfQvtCy0YPRjiDQutC+0YHRgtGMLCDRgtCw0Log0LrQsNC6INCx0LXQtyDQvdC10LUg0YMg0L3QsNGBINC90LXRglxuICAgICAqINC90LDRh9Cw0LvRjNC90L7Qs9C+INC80LXRgdGC0L7Qv9C+0LvQvtC20LXQvdC40Y8g0LTQu9GPINGN0YLQvtC5INC60L7RgdGC0LggKNGCLiDQtS4g0LrQvtC90LXRh9C90L7Qs9C+INC80LXRgdGC0L7Qv9C+0LvQvtC20LXQvdC40Y8g0L/RgNC10LTRi9C00YPRidC10LkpLlxuICAgICAqIDxwPlxuICAgICAqINCV0YHQu9C4INGN0YLQvtGCINC80LXRgtC+0LQg0LLRi9C/0L7Qu9C90Y/QtdGC0YHRjyDQsiDRhtC10L/QvtGH0LrQtSwg0LrQvtGC0L7RgNCw0Y8g0L3QtSDRgdC+0LTQtdGA0LbQuNGCINC+0YHQvdC+0LLQvdC+0Lkg0LrQvtGB0YLQuCwg0YLQviDQstC+0LfQsdGD0LbQtNCw0LXRgtGB0Y8g0L7RiNC40LHQutCwLlxuICAgICAqIDxwPlxuICAgICAqINCV0YHQu9C4INCy0LXQutGC0L7RgCDQvdCw0L/RgNCw0LLQu9C10L3QuNGPINC40LvQuCDQtNC70LjQvdCwINGA0LDQstC90Ysg0L3Rg9C70Y4sINGC0L4g0LLQvtC30LHRg9C20LTQsNC10YLRgdGPINC+0YjQuNCx0LrQsC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgICBkaXJlY3Rpb25VViAgICDQn9C10YDQstC+0L3QsNGH0LDQu9GM0L3QvtC1INC90LDQv9GA0LDQstC70LXQvdC40LUg0L3QvtCy0L7QuSDQutC+0YHRgtC4LlxuICAgICAqIEBwYXJhbSAgICBsZW5ndGggICAgICAgINCU0LvQuNC90LAg0L3QvtCy0L7QuSDQutC+0YHRgtC4LlxuICAgICAqIEBwYXJhbSAgICBjb2xvdXIgICAgICAgINCm0LLQtdGCINC00LvRjyDQvtGC0YDQuNGB0L7QstC60Lgg0L3QvtCy0L7QuSDQutC+0YHRgtC4LlxuICAgICAqIEBwYXJhbSAgICBuYW1lICAgICAgICAgINCY0LzRjyDQvdC+0LLQvtC5INC60L7RgdGC0LguXG4gICAgICovXG4gICAgYWRkQ29uc2VjdXRpdmVCb25lKGRpcmVjdGlvblVWOiBWZWMzZiwgbGVuZ3RoOiBudW1iZXIsIGNvbG91cj86IENvbG91cjRmLCBuYW1lPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIFV0aWxzLnZhbGlkYXRlRGlyZWN0aW9uVVYoZGlyZWN0aW9uVVYpO1xuXG4gICAgICAgIFV0aWxzLnZhbGlkYXRlTGVuZ3RoKGxlbmd0aCk7XG5cbiAgICAgICAgaWYgKCEodGhpcy5fY2hhaW4ubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgY29uc3QgcHJldkJvbmVFbmQ6IFZlYzNmID0gdGhpcy5fY2hhaW5bdGhpcy5fY2hhaW4ubGVuZ3RoIC0gMV0uZ2V0RW5kTG9jYXRpb24oKTtcblxuICAgICAgICAgICAgdGhpcy5hZGRCb25lKG5ldyBGYWJyaWtCb25lM0QocHJldkJvbmVFbmQsIGRpcmVjdGlvblVWLm5vcm1hbGlzZWQoKSwgbGVuZ3RoLCBjb2xvdXIsIG5hbWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbm5vdCBhZGQgdGhlIGJhc2Vib25lIGFzIGEgY29uc2VjdXRpdmUgYm9uZSBhcyBpdCBkb2VzIG5vdCBwcm92aWRlIGEgc3RhcnQgbG9jYXRpb24uIFVzZSB0aGUgYWRkQm9uZSgpIG1ldGhvZCBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JTQvtCx0LDQstC70Y/QtdGCINC/0YDQtdC00LLQsNGA0LjRgtC10LvRjNC90L4g0YHQvtC30LTQsNC90L3Rg9GOINC/0L7RgdC70LXQtNC+0LLQsNGC0LXQu9GM0L3Rg9GOINC60L7RgdGC0Ywg0Log0LrQvtC90YbRgyDRjdGC0L7QuSDRhtC10L/QvtGH0LrQuCBJSy5cbiAgICAgKiA8cD5cbiAgICAgKiDQrdGC0L7RgiDQvNC10YLQvtC0INC80L7QttC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINGC0L7Qu9GM0LrQviDRgtC+0LPQtNCwLCDQutC+0LPQtNCwINGG0LXQv9GMIElLINGB0L7QtNC10YDQttC40YIg0LHQsNC30L7QstGD0Y4g0LrQvtGB0YLRjCwg0YLQsNC6INC60LDQuiDQsdC10Lcg0L3QtdC1INGDINC90LDRgSDQvdC10YJcbiAgICAgKiDQvdCw0YfQsNC70YzQvdC+0LPQviDQvNC10YHRgtC+0L/QvtC70L7QttC10L3QuNGPINC00LvRjyDRjdGC0L7QuSDQutC+0YHRgtC4ICjRgi4g0LUuINC60L7QvdC10YfQvdC+0LPQviDQvNC10YHRgtC+0L/QvtC70L7QttC10L3QuNGPINC/0YDQtdC00YvQtNGD0YnQtdC5KS5cbiAgICAgKiA8cD5cbiAgICAgKiDQldGB0LvQuCDRjdGC0L7RgiDQvNC10YLQvtC0INCy0YvQv9C+0LvQvdGP0LXRgtGB0Y8g0LIg0YbQtdC/0L7Rh9C60LUsINC60L7RgtC+0YDQsNGPINC90LUg0YHQvtC00LXRgNC20LjRgiDQvtGB0L3QvtCy0L3QvtC5INC60L7RgdGC0LgsXG4gICAgICog0LjQu9C4INC60L7RgdGC0YwsINC60L7RgtC+0YDRg9GOINC/0YvRgtCw0Y7RgtGB0Y8g0LTQvtCx0LDQstC40YLRjCDQuNC80LXQtdGCINC90YPQu9C10LLRg9GOINC00LvQuNC90YMg0YLQviDQstC+0LfQsdGD0LbQtNCw0LXRgtGB0Y8g0L7RiNC40LHQutCwLlxuICAgICAqXG4gICAgICogQHBhcmFtICAgIGJvbmUgICAgICAgINCa0L7RgdGC0YwuXG4gICAgICovXG4gICAgYWRkQ29uc2VjdXRpdmVDcmVhdGVkQm9uZShib25lOiBGYWJyaWtCb25lM0QpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGlyOiBWZWMzZiA9IGJvbmUuZ2V0RGlyZWN0aW9uVVYoKTtcbiAgICAgICAgVXRpbHMudmFsaWRhdGVEaXJlY3Rpb25VVihkaXIpO1xuXG4gICAgICAgIGNvbnN0IGxlbiA9IGJvbmUuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIFV0aWxzLnZhbGlkYXRlTGVuZ3RoKGxlbik7XG5cbiAgICAgICAgaWYgKCEodGhpcy5fY2hhaW4ubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgY29uc3QgcHJldkJvbmVFbmQ6IFZlYzNmID0gdGhpcy5fY2hhaW5bdGhpcy5fY2hhaW4ubGVuZ3RoIC0gMV0uZ2V0RW5kTG9jYXRpb24oKTtcblxuICAgICAgICAgICAgYm9uZS5zZXRTdGFydExvY2F0aW9uKHByZXZCb25lRW5kKTtcbiAgICAgICAgICAgIGJvbmUuc2V0RW5kTG9jYXRpb24ocHJldkJvbmVFbmQucGx1cyhkaXIudGltZXMobGVuKSkpO1xuXG4gICAgICAgICAgICB0aGlzLmFkZEJvbmUoYm9uZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBjYW5ub3QgYWRkIHRoZSBiYXNlIGJvbmUgdG8gYSBjaGFpbiB1c2luZyB0aGlzIG1ldGhvZCBhcyBpdCBkb2VzIG5vdCBwcm92aWRlIGEgc3RhcnQgbG9jYXRpb24uJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQlNC+0LHQsNCy0LvRj9C10YIg0L/QvtGB0LvQtdC00L7QstCw0YLQtdC70YzQvdGD0Y4g0YjQsNGA0L3QuNGA0L3Rg9GOINC60L7RgdGC0Ywg0Log0LrQvtC90YbRgyDRjdGC0L7QuSDRhtC10L/QuCBJSy5cbiAgICAgKiA8cD5cbiAgICAgKiDQotC40L8g0YjQsNGA0L3QuNGA0LAg0LzQvtC20LXRgiDQsdGL0YLRjCDQs9C70L7QsdCw0LvRjNC90YvQvCwg0L7RgdGMINCy0YDQsNGJ0LXQvdC40Y8g0LrQvtGC0L7RgNC+0LPQviDRg9C60LDQt9Cw0L3QsCDQsiDQvNC40YDQvtCy0L7QvCDQv9GA0L7RgdGC0YDQsNC90YHRgtCy0LUsINC40LvQuFxuICAgICAqINC70L7QutCw0LvRjNC90YvQvCwg0L7RgdGMINCy0YDQsNGJ0LXQvdC40Y8g0LrQvtGC0L7RgNC+0LPQviDRgNCw0YHQv9C+0LvQvtC20LXQvdCwINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQv9GA0LXQtNGL0LTRg9GJ0LXQuSDQutC+0YHRgtC4INCyINGG0LXQv9C4LlxuICAgICAqIDxwPlxuICAgICAqINCV0YHQu9C4INGN0YLQvtGCINC80LXRgtC+0LQg0LLRi9C/0L7Qu9C90Y/QtdGC0YHRjyDQsiDRhtC10L/QvtGH0LrQtSwg0LrQvtGC0L7RgNCw0Y8g0L3QtSDRgdC+0LTQtdGA0LbQuNGCINC+0YHQvdC+0LLQvdC+0Lkg0LrQvtGB0YLQuCwg0LLQvtC30L3QuNC60LDQtdGCINC+0YjQuNCx0LrQsC5cbiAgICAgKiDQldGB0LvQuCDQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC60L7RgdGC0Lgg0LjQu9C4INC+0YHRjCDQvtCz0YDQsNC90LjRh9C10L3QuNGPINGI0LDRgNC90LjRgNCwINC90YPQu9C4LCDQstC+0LfQvdC40LrQsNC10YIg0L7RiNC40LHQutCwLlxuICAgICAqINCV0YHQu9C4INC30LDQv9GA0L7RiNC10L3QvdGL0Lkg0YLQuNC/INGB0L7QtdC00LjQvdC10L3QuNGPINC90LUg0Y/QstC70Y/QtdGC0YHRjyBMT0NBTF9ISU5HRSDQuNC70LggR0xPQkFMX0hJTkdFLCDQstC+0LfQvdC40LrQsNC10YIg0L7RiNC40LHQutCwLlxuICAgICAqXG4gICAgICogQHBhcmFtICAgIGRpcmVjdGlvblVWICAgICAgICAgICAg0J3QsNGH0LDQu9GM0L3QvtC1INC90LDQv9GA0LDQstC70LXQvdC40LUg0L3QvtCy0L7QuSDQutC+0YHRgtC4LlxuICAgICAqIEBwYXJhbSAgICBsZW5ndGggICAgICAgICAgICAgICAg0JTQu9C40L3QsCDQvdC+0LLQvtC5INC60L7RgdGC0LguXG4gICAgICogQHBhcmFtICAgIGpvaW50VHlwZSAgICAgICAgICAgINCi0LjQvyDRgdGD0YHRgtCw0LLQsCDQvdC+0LLQvtC5INC60L7RgdGC0LguXG4gICAgICogQHBhcmFtICAgIGhpbmdlUm90YXRpb25BeGlzICAgINCe0YHRjCDQstGA0LDRidC10L3QuNGPINGI0LDRgNC90LjRgNCwLlxuICAgICAqIEBwYXJhbSAgICBjbG9ja3dpc2VEZWdzICAgICAgICDQo9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUg0LIg0LPRgNCw0LTRg9GB0LDRhS5cbiAgICAgKiBAcGFyYW0gICAgYW50aWNsb2Nrd2lzZURlZ3MgICAg0KPQs9C+0Lst0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60Lgg0LIg0LPRgNCw0LTRg9GB0LDRhS5cbiAgICAgKiBAcGFyYW0gICAgaGluZ2VSZWZlcmVuY2VBeGlzICAgINCe0YHRjCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0LrQvtGC0L7RgNC+0Lkg0LLQtdC00LXRgtGB0Y8g0L7RgtGB0YfQtdGCINGD0LPQu9CwINC/0L7QstC+0YDQvtGC0LAg0YjQsNGA0L3QuNGA0LAuXG4gICAgICogQHBhcmFtICAgIGNvbG91ciAgICAgICAgICAgICAgICDQptCy0LXRgiDQvdC+0LLQvtC5INC60L7RgdGC0LguXG4gICAgICovXG4gICAgYWRkQ29uc2VjdXRpdmVIaW5nZWRCb25lKFxuICAgICAgICBkaXJlY3Rpb25VVjogVmVjM2YsXG4gICAgICAgIGxlbmd0aDogbnVtYmVyLFxuICAgICAgICBqb2ludFR5cGU6IEpvaW50VHlwZSxcbiAgICAgICAgaGluZ2VSb3RhdGlvbkF4aXM6IFZlYzNmLFxuICAgICAgICBjbG9ja3dpc2VEZWdzOiBudW1iZXIgPSAxODAsXG4gICAgICAgIGFudGljbG9ja3dpc2VEZWdzOiBudW1iZXIgPSAxODAsXG4gICAgICAgIGhpbmdlUmVmZXJlbmNlQXhpczogVmVjM2YgPSBWZWMzZi5nZW5QZXJwZW5kaWN1bGFyVmVjdG9yUXVpY2soaGluZ2VSb3RhdGlvbkF4aXMpLFxuICAgICAgICBjb2xvdXI6IENvbG91cjRmID0gbmV3IENvbG91cjRmKCksXG4gICAgKTogdm9pZCB7XG4gICAgICAgIFV0aWxzLnZhbGlkYXRlRGlyZWN0aW9uVVYoZGlyZWN0aW9uVVYpO1xuICAgICAgICBVdGlscy52YWxpZGF0ZURpcmVjdGlvblVWKGhpbmdlUm90YXRpb25BeGlzKTtcbiAgICAgICAgVXRpbHMudmFsaWRhdGVMZW5ndGgobGVuZ3RoKTtcblxuICAgICAgICBpZiAodGhpcy5fY2hhaW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IGFkZCBhIGJhc2Vib25lIGJlZm9yZSBhZGRpbmcgYSBjb25zZWN0dXRpdmUgYm9uZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpcmVjdGlvblVWLm5vcm1hbGlzZSgpO1xuICAgICAgICBoaW5nZVJvdGF0aW9uQXhpcy5ub3JtYWxpc2UoKTtcblxuICAgICAgICBjb25zdCBwcmV2Qm9uZUVuZDogVmVjM2YgPSB0aGlzLl9jaGFpblt0aGlzLl9jaGFpbi5sZW5ndGggLSAxXS5nZXRFbmRMb2NhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGJvbmU6IEZhYnJpa0JvbmUzRCA9IG5ldyBGYWJyaWtCb25lM0QocHJldkJvbmVFbmQsIGRpcmVjdGlvblVWLCBsZW5ndGgsIGNvbG91cik7XG5cbiAgICAgICAgY29uc3Qgam9pbnQ6IEZhYnJpa0pvaW50M0QgPSBuZXcgRmFicmlrSm9pbnQzRCgpO1xuICAgICAgICBzd2l0Y2ggKGpvaW50VHlwZSkge1xuICAgICAgICAgICAgY2FzZSBKb2ludFR5cGUuR0xPQkFMX0hJTkdFOlxuICAgICAgICAgICAgICAgIGpvaW50LnNldEhpbmdlSm9pbnQoSm9pbnRUeXBlLkdMT0JBTF9ISU5HRSwgaGluZ2VSb3RhdGlvbkF4aXMsIGNsb2Nrd2lzZURlZ3MsIGFudGljbG9ja3dpc2VEZWdzLCBoaW5nZVJlZmVyZW5jZUF4aXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBKb2ludFR5cGUuTE9DQUxfSElOR0U6XG4gICAgICAgICAgICAgICAgam9pbnQuc2V0SGluZ2VKb2ludChKb2ludFR5cGUuTE9DQUxfSElOR0UsIGhpbmdlUm90YXRpb25BeGlzLCBjbG9ja3dpc2VEZWdzLCBhbnRpY2xvY2t3aXNlRGVncywgaGluZ2VSZWZlcmVuY2VBeGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIaW5nZSBqb2ludCB0eXBlcyBtYXkgYmUgb25seSBKb2ludFR5cGUuR0xPQkFMX0hJTkdFIG9yIEpvaW50VHlwZS5MT0NBTF9ISU5HRS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvbmUuc2V0Sm9pbnQoam9pbnQpO1xuXG4gICAgICAgIHRoaXMuYWRkQm9uZShib25lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQlNC+0LHQsNCy0LvRj9C10YIg0L/QvtGB0LvQtdC00L7QstCw0YLQtdC70YzQvdGL0Lkg0YjQsNGA0L7QstC+0Lkg0YHRg9GB0YLQsNCyLCDQvtCz0YDQsNC90LjRh9C40LLQsNGO0YnQuNC5INC60L7RgdGC0YwsINC6INC60L7QvdGG0YMg0Y3RgtC+0Lkg0YbQtdC/0LggSUsuXG4gICAgICogPHA+XG4gICAgICog0K3RgtC+0YIg0LzQtdGC0L7QtCDQvNC+0LbQvdC+INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDRgtC+0LvRjNC60L4g0YLQvtCz0LTQsCwg0LrQvtCz0LTQsCDRhtC10L/RjCBJSyDRgdC+0LTQtdGA0LbQuNGCINCx0LDQt9C+0LLRg9GOINC60L7RgdGC0YwsINGC0LDQuiDQutCw0Log0LHQtdC3INC90LXQtSDRgyDQvdCw0YEg0L3QtdGCXG4gICAgICog0L3QsNGH0LDQu9GM0L3QvtCz0L4g0LzQtdGB0YLQvtC/0L7Qu9C+0LbQtdC90LjRjyDQtNC70Y8g0Y3RgtC+0Lkg0LrQvtGB0YLQuCAo0YIuINC1LiDQutC+0L3QtdGH0L3QvtCz0L4g0LzQtdGB0YLQvtC/0L7Qu9C+0LbQtdC90LjRjyDQv9GA0LXQtNGL0LTRg9GJ0LXQuSkuXG4gICAgICogPHA+XG4gICAgICog0JXRgdC70Lgg0Y3RgtC+0YIg0LzQtdGC0L7QtCDQstGL0L/QvtC70L3Rj9C10YLRgdGPINCyINGG0LXQv9C+0YfQutC1LCDQutC+0YLQvtGA0LDRjyDQvdC1INGB0L7QtNC10YDQttC40YIg0L7RgdC90L7QstC90L7QuSDQutC+0YHRgtC4LFxuICAgICAqINC40LvQuCDQutC+0YHRgtGMLCDQutC+0YLQvtGA0YPRjiDQv9GL0YLQsNGO0YLRgdGPINC00L7QsdCw0LLQuNGC0Ywg0LjQvNC10LXRgiDQvdGD0LvQtdCy0YPRjiDQtNC70LjQvdGDINGC0L4g0LLQvtC30LHRg9C20LTQsNC10YLRgdGPINC+0YjQuNCx0LrQsC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgICBib25lRGlyZWN0aW9uVVYgICAgICAgICAgICAgICAgICAgINCd0LDRh9Cw0LvRjNC90L7QtSDQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC10LTQuNC90LjRh9C90L7Qs9C+INCy0LXQutGC0L7RgNCwINC90L7QstC+0Lkg0LrQvtGB0YLQuC5cbiAgICAgKiBAcGFyYW0gICAgYm9uZUxlbmd0aCAgICAgICAgICAgICAgICAgICAgICAgINCU0LvQuNC90LAg0L3QvtCy0L7QuSDQutC+0YHRgtC4LlxuICAgICAqIEBwYXJhbSAgICBjb25zdHJhaW50QW5nbGVEZWdzICAgICAgICAgICAgICAgINCj0LPQvtC7INC+0LPRgNCw0L3QuNGH0LXQvdC40LUuXG4gICAgICogQHBhcmFtICAgIGNvbG91ciAgICAgICAgICAgICAgICAgICAgICAgICAgICDQptCy0LXRgiDQtNC70Y8g0L7RgtGA0LjRgdC+0LLQutC4INC90L7QstC+0Lkg0LrQvtGB0YLQuC5cbiAgICAgKi9cbiAgICBhZGRDb25zZWN1dGl2ZVJvdG9yQ29uc3RyYWluZWRCb25lKFxuICAgICAgICBib25lRGlyZWN0aW9uVVY6IFZlYzNmLFxuICAgICAgICBib25lTGVuZ3RoOiBudW1iZXIsXG4gICAgICAgIGNvbnN0cmFpbnRBbmdsZURlZ3M6IG51bWJlciA9IDE4MCxcbiAgICAgICAgY29sb3VyOiBDb2xvdXI0ZiA9IG5ldyBDb2xvdXI0ZigpLFxuICAgICk6IHZvaWQge1xuICAgICAgICBVdGlscy52YWxpZGF0ZURpcmVjdGlvblVWKGJvbmVEaXJlY3Rpb25VVik7XG4gICAgICAgIFV0aWxzLnZhbGlkYXRlTGVuZ3RoKGJvbmVMZW5ndGgpO1xuICAgICAgICBpZiAodGhpcy5fY2hhaW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FkZCBhIGJhc2Vib25lIGJlZm9yZSBhdHRlbXB0aW5nIHRvIGFkZCBjb25zZWN0dWl2ZSBib25lcy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJvbmU6IEZhYnJpa0JvbmUzRCA9IG5ldyBGYWJyaWtCb25lM0QodGhpcy5fY2hhaW5bdGhpcy5fY2hhaW4ubGVuZ3RoIC0gMV0uZ2V0RW5kTG9jYXRpb24oKSwgYm9uZURpcmVjdGlvblVWLm5vcm1hbGlzZSgpLCBib25lTGVuZ3RoLCBjb2xvdXIpO1xuICAgICAgICBib25lLnNldEJhbGxKb2ludENvbnN0cmFpbnREZWdzKGNvbnN0cmFpbnRBbmdsZURlZ3MpO1xuICAgICAgICB0aGlzLmFkZEJvbmUoYm9uZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0L7RgtC90L7RgdC40YLQtdC70YzQvdGL0Lkg0LXQtNC40L3QuNGH0L3Ri9C5INCy0LXQutGC0L7RgCDQvtGB0L3QvtCy0L3QvtC5INC60L7RgdGC0Lgg0Y3RgtC+0Lkg0YbQtdC/0L7Rh9C60LguXG4gICAgICpcbiAgICAgKiBAcmV0dXJuXG4gICAgICovXG4gICAgZ2V0QmFzZWJvbmVSZWxhdGl2ZUNvbnN0cmFpbnRVViA9ICgpOiBWZWMzZiA9PiB0aGlzLl9iYXNlYm9uZVJlbGF0aXZlQ29uc3RyYWludFVWO1xuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YLQuNC/INGB0YPRgdGC0LDQstCwINCx0LDQt9C+0LLQvtC5INC60L7RgdGC0LguXG4gICAgICpcbiAgICAgKiBAcmV0dXJuXG4gICAgICovXG4gICAgZ2V0QmFzZWJvbmVDb25zdHJhaW50VHlwZSA9ICgpOiBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0QgPT4gdGhpcy5fYmFzZWJvbmVDb25zdHJhaW50VHlwZTtcblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0L3QsNC/0YDQsNCy0LvQtdC90LjRjyDQvtGB0L3QvtCy0L3QvtC5INC60L7RgdGC0LguXG4gICAgICogPHA+XG4gICAgICog0JXRgdC70Lgg0LHQsNC30L7QstCw0Y8g0LrQvtGB0YLRjCDQvdC1INC+0LPRgNCw0L3QuNGH0LXQvdCwLCDRgtC+INCy0L7Qt9C90LjQutCw0LXRgiDQvtGI0LjQsdC60LAuINCV0YHQu9C4INCy0Ysg0YXQvtGC0LjRgtC1INC/0YDQvtCy0LXRgNC40YLRjCwg0L7Qs9GA0LDQvdC40YfQtdC90LAg0LvQuFxuICAgICAqINCx0LDQt9C+0LLQsNGPINC60L7RgdGC0Ywg0Y3RgtC+0Lkg0YbQtdC/0L7Rh9C60Lgg0JjQmiDQstGLINC80L7QttC10YLQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LzQtdGC0L7QtCB7QGxpbmsgI2dldEJhc2Vib25lQ29uc3RyYWludFR5cGUoKX0uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuXG4gICAgICovXG4gICAgZ2V0QmFzZWJvbmVDb25zdHJhaW50VVYoKTogVmVjM2Yge1xuICAgICAgICBpZiAodGhpcy5fYmFzZWJvbmVDb25zdHJhaW50VHlwZSAhPSBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0QuTk9ORSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jhc2Vib25lQ29uc3RyYWludFVWO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmV0dXJuIHRoZSBiYXNlYm9uZSBjb25zdHJhaW50IHdoZW4gdGhlIGJhc2Vib25lIGNvbnN0cmFpbnQgdHlwZSBpcyBOT05FLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LHQsNC30L7QstC+0LUg0YDQsNGB0L/QvtC70L7QttC10L3QuNC1INGG0LXQv9C+0YfQutC4IElLLlxuICAgICAqIDxwPlxuICAgICAqINCd0LXQt9Cw0LLQuNGB0LjQvNC+INC+0YIg0YLQvtCz0L4sINGB0LrQvtC70YzQutC+INC60L7RgdGC0LXQuSDRgdC+0LTQtdGA0LbQuNGC0YHRjyDQsiDRhtC10L/QuCwg0LHQsNC30L7QstC+0LUg0LzQtdGB0YLQvtC/0L7Qu9C+0LbQtdC90LjQtSDQstGB0LXQs9C00LAg0Y/QstC70Y/QtdGC0YHRjyDQvdCw0YfQsNC70YzQvdGL0Lwg0LzQtdGB0YLQvtC/0L7Qu9C+0LbQtdC90LjQtdC8XG4gICAgICog0L/QtdGA0LLQvtC5INC60L7RgdGC0Lgg0LIg0YbQtdC/0LguXG4gICAgICpcbiAgICAgKiBAcmV0dXJuXG4gICAgICovXG4gICAgZ2V0QmFzZUxvY2F0aW9uID0gKCk6IFZlYzNmID0+IHRoaXMuX2NoYWluWzBdLmdldFN0YXJ0TG9jYXRpb24oKTtcblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC60L7RgdGC0Ywg0YbQtdC/0Lgg0L/QviDQuNC90LTQtdC60YHRgy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgICBib25lTnVtYmVyICAgINCY0L3QtNC10LrRgSDQutC+0YHRgtC4LlxuICAgICAqIEByZXR1cm4gICAgICAgICAgICAgICAg0JrQvtGB0YLRjC5cbiAgICAgKi9cbiAgICBnZXRCb25lID0gKGJvbmVOdW1iZXI6IG51bWJlcik6IEZhYnJpa0JvbmUzRCA9PiB0aGlzLl9jaGFpbltib25lTnVtYmVyXTtcblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC80LDRgdGB0LjQsiDQutC+0YHRgtC10Lkg0YbQtdC/0LguXG4gICAgICpcbiAgICAgKiBAcmV0dXJuXG4gICAgICovXG4gICAgZ2V0Q2hhaW4oKTogRmFicmlrQm9uZTNEW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hhaW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LTQu9C40L3RgyDRhtC10L/QuC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5cbiAgICAgKi9cbiAgICBnZXRDaGFpbkxlbmd0aCA9ICgpOiBudW1iZXIgPT4gdGhpcy5fY2hhaW5MZW5ndGg7XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQuNC90LTQtdC60YEg0LrQvtGB0YLQuCDQuNC3INC00YDRg9Cz0L7QuSDRhtC10L/QuCwg0Log0LrQvtGC0L7RgNC+0Lkg0L/RgNC40YHQvtC10LTQuNC90LXQvdCwINC90LDRiNCwINGG0LXQv9GMLlxuICAgICAqIDxwPlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCIC0xINC10YHQu9C4INC80Ysg0L3QuCDQuiDQutC+0LzRgyDQvdC1INC/0YDQuNGB0L7QtdC00LjQvdC10L3Riy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5cbiAgICAgKi9cbiAgICBnZXRDb25uZWN0ZWRCb25lTnVtYmVyID0gKCk6IG51bWJlciA9PiB0aGlzLl9jb25uZWN0ZWRCb25lTnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LjQvdC00LXQutGBINGG0LXQv9C4INCyINGB0YLRgNGD0LrRgtGD0YDQtSwg0Log0LrQvtGC0L7RgNC+0Lkg0L/RgNC40YHQvtC10LTQuNC90LXQvdCwINC90LDRiNCwINGG0LXQv9GMLlxuICAgICAqIDxwPlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCIC0xINC10YHQu9C4INC80Ysg0L3QuCDQuiDQutC+0LzRgyDQvdC1INC/0YDQuNGB0L7QtdC00LjQvdC10L3Riy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5cbiAgICAgKi9cbiAgICBnZXRDb25uZWN0ZWRDaGFpbk51bWJlciA9ICgpOiBudW1iZXIgPT4gdGhpcy5fY29ubmVjdGVkQ2hhaW5OdW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDRjdGE0YTQtdC60YLQvtGALlxuICAgICAqIDxwPlxuICAgICAqINCd0LXQt9Cw0LLQuNGB0LjQvNC+INC+0YIg0YLQvtCz0L4sINGB0LrQvtC70YzQutC+INC60L7RgdGC0LXQuSDRgdC+0LTQtdGA0LbQuNGC0YHRjyDQsiDRhtC10L/QuCwg0Y3RhNGE0LXQutGC0L7RgCAtINGN0YLQviDQstGB0LXQs9C00LAg0LrQvtC90LXRhlxuICAgICAqINC/0L7RgdC70LXQtNC90LXQuSDQutC+0YHRgtC4INCyINGG0LXQv9C4LlxuICAgICAqXG4gICAgICogQHJldHVyblxuICAgICAqL1xuICAgIGdldEVmZmVjdG9yTG9jYXRpb24oKTogVmVjM2Yge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hhaW5bdGhpcy5fY2hhaW4ubGVuZ3RoIC0gMV0uZ2V0RW5kTG9jYXRpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQtNC+0LvQttC90LAg0LvQuCDRhtC10L/RjCDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LLRgdGC0YDQvtC10L3QvdC+0LUg0YbQtdC70LXQstC+0LUg0L/QvtC70L7QttC10L3QuNC1LlxuICAgICAqXG4gICAgICogQHJldHVyblxuICAgICAqL1xuICAgIGdldEVtYmVkZGVkVGFyZ2V0TW9kZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZUVtYmVkZGVkVGFyZ2V0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGCINCy0L3QtdC00YDQtdC90L3QvtCz0L4g0YbQtdC70LXQstC+0LPQviDQvNC10YHRgtC+0L/QvtC70L7QttC10L3QuNGPLlxuICAgICAqXG4gICAgICogQHJldHVyblxuICAgICAqL1xuICAgIGdldEVtYmVkZGVkVGFyZ2V0ID0gKCk6IFZlYzNmID0+IHRoaXMuX2VtYmVkZGVkVGFyZ2V0O1xuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YbQtdC70Ywg0L/QvtGB0LvQtdC00L3QtdC5INC/0L7Qv9GL0YLQutC4INGA0LXRiNC10L3QuNGPLlxuICAgICAqIDxwPlxuICAgICAqINCm0LXQu9C10LLQvtC1INC80LXRgdGC0L7Qv9C+0LvQvtC20LXQvdC40LUg0Lgg0LzQtdGB0YLQvtC/0L7Qu9C+0LbQtdC90LjQtSDRjdGE0YTQtdC60YLQvtGA0LAg0L3QtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC90LDRhdC+0LTRj9GC0YHRjyDQsiDQvtC00L3QvtC8INC4INGC0L7QvCDQttC1INC80LXRgdGC0LUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuXG4gICAgICovXG4gICAgZ2V0TGFzdFRhcmdldExvY2F0aW9uID0gKCk6IFZlYzNmID0+IHRoaXMuX2xhc3RUYXJnZXRMb2NhdGlvbjtcblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC90LDQt9Cy0LDQvdC40LUg0Y3RgtC+0Lkg0JjQmiDRhtC10L/QuC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5cbiAgICAgKi9cbiAgICBnZXROYW1lID0gKCk6IHN0cmluZyA9PiB0aGlzLl9uYW1lO1xuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LrQvtC70LjRh9C10YHRgtCy0L4g0LrQvtGB0YLQtdC5INCyINGG0LXQv9C4LlxuICAgICAqXG4gICAgICogQHJldHVyblxuICAgICAqL1xuICAgIGdldE51bUJvbmVzID0gKCk6IG51bWJlciA9PiB0aGlzLl9jaGFpbi5sZW5ndGg7XG5cbiAgICAvKipcbiAgICAgKiDQo9C00LDQu9GP0LXRgiDQutC+0YHRgtGMINC40Lcg0Y3RgtC+0Lkg0YbQtdC/0LggSUsg0L/QviDQtdC1INC40L3QtNC10LrRgdGDINCyINGG0LXQv9C4LlxuICAgICAqIDxwPlxuICAgICAqINCV0YHQu9C4INC90L7QvNC10YAg0LrQvtGB0YLQuCwg0LrQvtGC0L7RgNGD0Y4g0L3QtdC+0LHRhdC+0LTQuNC80L4g0YPQtNCw0LvQuNGC0YwsINC90LUg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LIg0YbQtdC/0L7Rh9C60LUsINGC0L4g0LLQvtC30L3QuNC60LDQtdGCINC+0YjQuNCx0LrQsC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgICBib25lTnVtYmVyICAgINCY0L3QtNC10LrRgSDQutC+0YHRgtC4INCyINGG0LXQv9C4LlxuICAgICAqL1xuICAgIHJlbW92ZUJvbmUoYm9uZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChib25lTnVtYmVyIDwgdGhpcy5fY2hhaW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGFpbi5zcGxpY2UoYm9uZU51bWJlciwgMSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNoYWluTGVuZ3RoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JvbmUgJyArIGJvbmVOdW1iZXIgKyAnIGRvZXMgbm90IGV4aXN0IHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgY2hhaW4uIEJvbmVzIGFyZSB6ZXJvIGluZGV4ZWQuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc2V0QmFzZWJvbmVSZWxhdGl2ZUNvbnN0cmFpbnRVVihjb25zdHJhaW50VVY6IFZlYzNmKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2Jhc2Vib25lUmVsYXRpdmVDb25zdHJhaW50VVYgPSBjb25zdHJhaW50VVY7XG4gICAgfVxuXG4gICAgX3NldEJhc2Vib25lUmVsYXRpdmVSZWZlcmVuY2VDb25zdHJhaW50VVYoY29uc3RyYWludFVWOiBWZWMzZik6IHZvaWQge1xuICAgICAgICB0aGlzLl9iYXNlYm9uZVJlbGF0aXZlUmVmZXJlbmNlQ29uc3RyYWludFVWID0gY29uc3RyYWludFVWO1xuICAgIH1cblxuICAgIGdldEJhc2Vib25lUmVsYXRpdmVSZWZlcmVuY2VDb25zdHJhaW50VVYgPSAoKTogVmVjM2YgPT4gdGhpcy5fYmFzZWJvbmVSZWxhdGl2ZVJlZmVyZW5jZUNvbnN0cmFpbnRVVjtcblxuICAgIC8qKlxuICAgICAqINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCINC00L7Qu9C20L3QsCDQu9C4INC40YHQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y8g0LLRgdGC0YDQvtC10L3QvdCw0Y8g0YbQtdC70LXQstCw0Y8g0L/QvtC30LjRhtC40Y8uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICAgdmFsdWVcbiAgICAgKi9cbiAgICBzZXRFbWJlZGRlZFRhcmdldE1vZGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdXNlRW1iZWRkZWRUYXJnZXQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXRSb3RvckJhc2Vib25lQ29uc3RyYWludChyb3RvclR5cGU6IEJhc2Vib25lQ29uc3RyYWludFR5cGUzRCwgY29uc3RyYWludEF4aXM6IFZlYzNmLCBhbmdsZURlZ3M6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fY2hhaW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoYWluIG11c3QgY29udGFpbiBhIGJhc2Vib25lIGJlZm9yZSB3ZSBjYW4gc3BlY2lmeSB0aGUgYmFzZWJvbmUgY29uc3RyYWludCB0eXBlLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25zdHJhaW50QXhpcy5sZW5ndGgoKSA8PSAwLjApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29uc3RyYWludCBheGlzIGNhbm5vdCBiZSB6ZXJvLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbmdsZURlZ3MgPCAwLjApIHtcbiAgICAgICAgICAgIGFuZ2xlRGVncyA9IDAuMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYW5nbGVEZWdzID4gMTgwLjApIHtcbiAgICAgICAgICAgIGFuZ2xlRGVncyA9IDE4MC4wO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKHJvdG9yVHlwZSA9PSBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0QuR0xPQkFMX1JPVE9SIHx8IHJvdG9yVHlwZSA9PSBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0QuTE9DQUxfUk9UT1IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBvbmx5IHZhbGlkIHJvdG9yIHR5cGVzIGZvciB0aGlzIG1ldGhvZCBhcmUgR0xPQkFMX1JPVE9SIGFuZCBMT0NBTF9ST1RPUi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2Jhc2Vib25lQ29uc3RyYWludFR5cGUgPSByb3RvclR5cGU7XG4gICAgICAgIHRoaXMuX2Jhc2Vib25lQ29uc3RyYWludFVWID0gY29uc3RyYWludEF4aXMubm9ybWFsaXNlZCgpO1xuICAgICAgICB0aGlzLl9iYXNlYm9uZVJlbGF0aXZlQ29uc3RyYWludFVWLnNldCh0aGlzLl9iYXNlYm9uZUNvbnN0cmFpbnRVVik7XG4gICAgICAgIHRoaXMuZ2V0Qm9uZSgwKS5nZXRKb2ludCgpLnNldEFzQmFsbEpvaW50KGFuZ2xlRGVncyk7XG4gICAgfVxuXG4gICAgc2V0SGluZ2VCYXNlYm9uZUNvbnN0cmFpbnQoaGluZ2VUeXBlOiBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0QsIGhpbmdlUm90YXRpb25BeGlzOiBWZWMzZiwgY3dDb25zdHJhaW50RGVnczogbnVtYmVyLCBhY3dDb25zdHJhaW50RGVnczogbnVtYmVyLCBoaW5nZVJlZmVyZW5jZUF4aXM6IFZlYzNmKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9jaGFpbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hhaW4gbXVzdCBjb250YWluIGEgYmFzZWJvbmUgYmVmb3JlIHdlIGNhbiBzcGVjaWZ5IHRoZSBiYXNlYm9uZSBjb25zdHJhaW50IHR5cGUuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhpbmdlUm90YXRpb25BeGlzLmxlbmd0aCgpIDw9IDAuMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIaW5nZSByb3RhdGlvbiBheGlzIGNhbm5vdCBiZSB6ZXJvLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoaW5nZVJlZmVyZW5jZUF4aXMubGVuZ3RoKCkgPD0gMC4wKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hpbmdlIHJlZmVyZW5jZSBheGlzIGNhbm5vdCBiZSB6ZXJvLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKFZlYzNmLnBlcnBlbmRpY3VsYXIoaGluZ2VSb3RhdGlvbkF4aXMsIGhpbmdlUmVmZXJlbmNlQXhpcykpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBoaW5nZSByZWZlcmVuY2UgYXhpcyBtdXN0IGJlIGluIHRoZSBwbGFuZSBvZiB0aGUgaGluZ2Ugcm90YXRpb24gYXhpcywgdGhhdCBpcywgdGhleSBtdXN0IGJlIHBlcnBlbmRpY3VsYXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoaGluZ2VUeXBlID09IEJhc2Vib25lQ29uc3RyYWludFR5cGUzRC5HTE9CQUxfSElOR0UgfHwgaGluZ2VUeXBlID09IEJhc2Vib25lQ29uc3RyYWludFR5cGUzRC5MT0NBTF9ISU5HRSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIG9ubHkgdmFsaWQgaGluZ2UgdHlwZXMgZm9yIHRoaXMgbWV0aG9kIGFyZSBHTE9CQUxfSElOR0UgYW5kIExPQ0FMX0hJTkdFLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYmFzZWJvbmVDb25zdHJhaW50VHlwZSA9IGhpbmdlVHlwZTtcbiAgICAgICAgdGhpcy5fYmFzZWJvbmVDb25zdHJhaW50VVYuc2V0KGhpbmdlUm90YXRpb25BeGlzLm5vcm1hbGlzZWQoKSk7XG5cbiAgICAgICAgY29uc3QgaGluZ2U6IEZhYnJpa0pvaW50M0QgPSBuZXcgRmFicmlrSm9pbnQzRCgpO1xuXG4gICAgICAgIGlmIChoaW5nZVR5cGUgPT0gQmFzZWJvbmVDb25zdHJhaW50VHlwZTNELkdMT0JBTF9ISU5HRSkge1xuICAgICAgICAgICAgaGluZ2Uuc2V0SGluZ2VKb2ludChKb2ludFR5cGUuR0xPQkFMX0hJTkdFLCBoaW5nZVJvdGF0aW9uQXhpcywgY3dDb25zdHJhaW50RGVncywgYWN3Q29uc3RyYWludERlZ3MsIGhpbmdlUmVmZXJlbmNlQXhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoaW5nZS5zZXRIaW5nZUpvaW50KEpvaW50VHlwZS5MT0NBTF9ISU5HRSwgaGluZ2VSb3RhdGlvbkF4aXMsIGN3Q29uc3RyYWludERlZ3MsIGFjd0NvbnN0cmFpbnREZWdzLCBoaW5nZVJlZmVyZW5jZUF4aXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0Qm9uZSgwKS5zZXRKb2ludChoaW5nZSk7XG4gICAgfVxuXG4gICAgc2V0QmFzZWJvbmVDb25zdHJhaW50VVYoY29uc3RyYWludFVWOiBWZWMzZik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fYmFzZWJvbmVDb25zdHJhaW50VHlwZSA9PSBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0QuTk9ORSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTcGVjaWZ5IHRoZSBiYXNlYm9uZSBjb25zdHJhaW50IHR5cGUgd2l0aCBzZXRCYXNlYm9uZUNvbnN0cmFpbnRUeXBlQ2Fubm90IHNwZWNpZnkgYSBiYXNlYm9uZSBjb25zdHJhaW50IHdoZW4gdGhlIGN1cnJlbnQgY29uc3RyYWludCB0eXBlIGlzIEJhc2Vib25lQ29uc3RyYWludC5OT05FLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgVXRpbHMudmFsaWRhdGVEaXJlY3Rpb25VVihjb25zdHJhaW50VVYpO1xuXG4gICAgICAgIGNvbnN0cmFpbnRVVi5ub3JtYWxpc2UoKTtcbiAgICAgICAgdGhpcy5fYmFzZWJvbmVDb25zdHJhaW50VVYuc2V0KGNvbnN0cmFpbnRVVik7XG4gICAgfVxuXG4gICAgc2V0QmFzZUxvY2F0aW9uKGJhc2VMb2NhdGlvbjogVmVjM2YpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZml4ZWRCYXNlTG9jYXRpb24uc2V0KGJhc2VMb2NhdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0J/RgNC40YHQvtC10LTQuNC90Y/QtdGCINGG0LXQv9GMINC6INC60L7RgdGC0Lgg0LjQtyDQtNGA0YPQs9C+0Lkg0YbQtdC/0LguXG4gICAgICogPHA+XG4gICAgICog0KfRgtC+0LHRiyDRgdC+0LXQtNC40L3QuNGC0Ywg0Y3RgtGDINGG0LXQv9GMINGBINC00YDRg9Cz0L7QuSDRhtC10L/RjNGOLCDQvtCx0LUg0YbQtdC/0Lgg0LTQvtC70LbQvdGLINGB0YPRidC10YHRgtCy0L7QstCw0YLRjCDQsiDQvtC00L3QvtC5INC4INGC0L7QuSDQttC1INGB0YLRgNGD0LrRgtGD0YDQtS5cbiAgICAgKiA8cD5cbiAgICAgKiDQldGB0LvQuCDRgdGC0YDRg9C60YLRg9GA0LAg0L3QtSDRgdC+0LTQtdGA0LbQuNGCINGD0LrQsNC30LDQvdC90YPRjiDRhtC10L/RjCDQuNC70Lgg0LrQvtGB0YLRjCwg0YLQviDQstC+0LfQvdC40LrQsNC10YIg0L7RiNC40LHQutCwLlxuICAgICAqXG4gICAgICogQHBhcmFtICAgIHN0cnVjdHVyZSAgICDQodGC0YDRg9C60YLRg9GA0LAsINCyINC60L7RgtC+0YDQvtC5INC/0YDQvtC40LfQvtC50LTRkdGCINGB0L7QtdC00LjQvdC10L3QuNC1LlxuICAgICAqIEBwYXJhbSAgICBjaGFpbk51bWJlciAgICDQmNC90LTQtdC60YEg0YbQtdC/0Lgg0LTQu9GPINC/0YDQuNGB0L7QtdC00LjQvdC10L3QuNGPLlxuICAgICAqIEBwYXJhbSAgICBib25lTnVtYmVyICAgINCY0L3QtNC10LrRgSDQutC+0YHRgtC4INC6INC60L7RgtC+0YDQvtC5INC80Ysg0L/RgNC40YHQvtC10LTQuNC90Y/QtdC80YHRjy5cbiAgICAgKi9cbiAgICBjb25uZWN0VG9TdHJ1Y3R1cmUoc3RydWN0dXJlOiBGYWJyaWtTdHJ1Y3R1cmUzRCwgY2hhaW5OdW1iZXI6IG51bWJlciwgYm9uZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG51X2NoYWlucyA9IHN0cnVjdHVyZS5nZXROdW1DaGFpbnMoKTtcbiAgICAgICAgaWYgKGNoYWluTnVtYmVyID4gbnVfY2hhaW5zKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0cnVjdHVyZSBkb2VzIG5vdCBjb250YWluIGEgY2hhaW4gJyArIGNoYWluTnVtYmVyICsgJyAtIGl0IGhhcyAnICsgbnVfY2hhaW5zICsgJyBjaGFpbnMuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBudW1Cb25lcyA9IHN0cnVjdHVyZS5nZXRDaGFpbihjaGFpbk51bWJlcikuZ2V0TnVtQm9uZXMoKTtcbiAgICAgICAgaWYgKGJvbmVOdW1iZXIgPiBudW1Cb25lcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGFpbiBkb2VzIG5vdCBjb250YWluIGEgYm9uZSAnICsgYm9uZU51bWJlciArICcgLSBpdCBoYXMgJyArIG51bUJvbmVzICsgJyBib25lcy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZENoYWluTnVtYmVyID0gY2hhaW5OdW1iZXI7XG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZEJvbmVOdW1iZXIgPSBib25lTnVtYmVyO1xuICAgIH1cblxuICAgIHNldEZpeGVkQmFzZU1vZGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKCF2YWx1ZSAmJiB0aGlzLl9jb25uZWN0ZWRDaGFpbk51bWJlciAhPSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGNoYWluIGlzIGNvbm5lY3RlZCB0byBhbm90aGVyIGNoYWluIHNvIG11c3QgcmVtYWluIGluIGZpeGVkIGJhc2UgbW9kZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9iYXNlYm9uZUNvbnN0cmFpbnRUeXBlID09IEJhc2Vib25lQ29uc3RyYWludFR5cGUzRC5HTE9CQUxfUk9UT1IgJiYgIXZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBzZXQgYSBub24tZml4ZWQgYmFzZSBtb2RlIHdoZW4gdGhlIGNoYWluXFwncyBjb25zdHJhaW50IHR5cGUgaXMgQmFzZWJvbmVDb25zdHJhaW50VHlwZTNELkdMT0JBTF9BQlNPTFVURV9ST1RPUi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2ZpeGVkQmFzZU1vZGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXRNYXhJdGVyYXRpb25BdHRlbXB0cyhtYXhJdGVyYXRpb25zOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKG1heEl0ZXJhdGlvbnMgPCAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBtYXhpbXVtIG51bWJlciBvZiBhdHRlbXB0cyB0byBzb2x2ZSB0aGlzIElLIGNoYWluIG11c3QgYmUgYXQgbGVhc3QgMS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21heEl0ZXJhdGlvbkF0dGVtcHRzID0gbWF4SXRlcmF0aW9ucztcbiAgICB9XG5cbiAgICBzZXRNaW5JdGVyYXRpb25DaGFuZ2UobWluSXRlcmF0aW9uQ2hhbmdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKG1pbkl0ZXJhdGlvbkNoYW5nZSA8IDAuMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgbWluaW11bSBpdGVyYXRpb24gY2hhbmdlIHZhbHVlIG11c3QgYmUgbW9yZSB0aGFuIG9yIGVxdWFsIHRvIHplcm8uJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9taW5JdGVyYXRpb25DaGFuZ2UgPSBtaW5JdGVyYXRpb25DaGFuZ2U7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgc2V0U29sdmVEaXN0YW5jZVRocmVzaG9sZChzb2x2ZURpc3RhbmNlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHNvbHZlRGlzdGFuY2UgPCAwLjApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHNvbHZlIGRpc3RhbmNlIHRocmVzaG9sZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc29sdmVEaXN0YW5jZVRocmVzaG9sZCA9IHNvbHZlRGlzdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjb2xvdXIgb2YgYWxsIGJvbmVzIGluIHRoaXMgY2hhaW4gdG8gdGhlIHNwZWNpZmllZCBjb2xvdXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICAgY29sb3VyICAgIFRoZSBjb2xvdXIgdG8gc2V0IGFsbCBib25lcyBpbiB0aGlzIGNoYWluLlxuICAgICAqL1xuICAgIHNldENvbG91cihjb2xvdXI6IENvbG91cjRmKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGFCb25lIG9mIHRoaXMuX2NoYWluKSB7XG4gICAgICAgICAgICBhQm9uZS5zZXRDb2xvdXIoY29sb3VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNvbHZlRm9yRW1iZWRkZWRUYXJnZXQoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX3VzZUVtYmVkZGVkVGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb2x2ZUZvclRhcmdldCh0aGlzLl9lbWJlZGRlZFRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgY2hhaW4gZG9lcyBub3QgaGF2ZSBlbWJlZGRlZCB0YXJnZXRzIGVuYWJsZWQgLSBlbmFibGUgd2l0aCBzZXRFbWJlZGRlZFRhcmdldE1vZGUodHJ1ZSkuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzb2x2ZUZvclRhcmdldChuZXdUYXJnZXQ6IFZlYzNmKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX2xhc3RUYXJnZXRMb2NhdGlvbi5hcHByb3hpbWF0ZWx5RXF1YWxzKG5ld1RhcmdldCwgMC4wMDAwMSkgJiZcbiAgICAgICAgICAgICghdGhpcy5fZml4ZWRCYXNlTW9kZSAmJiB0aGlzLl9sYXN0QmFzZUxvY2F0aW9uLmFwcHJveGltYXRlbHlFcXVhbHModGhpcy5nZXRCYXNlTG9jYXRpb24oKSwgMC4wMDAwMSkpICYmXG4gICAgICAgICAgICAodGhpcy5fZml4ZWRCYXNlTW9kZSAmJiB0aGlzLl9maXhlZEJhc2VMb2NhdGlvbi5hcHByb3hpbWF0ZWx5RXF1YWxzKHRoaXMuZ2V0QmFzZUxvY2F0aW9uKCksIDAuMDAwMDEpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50U29sdmVEaXN0YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBiZXN0U29sdXRpb246IEZhYnJpa0JvbmUzRFtdID0gW107XG5cbiAgICAgICAgbGV0IGJlc3RTb2x2ZURpc3RhbmNlID0gTnVtYmVyLk1BWF9WQUxVRTtcblxuICAgICAgICBsZXQgbGFzdFBhc3NTb2x2ZURpc3RhbmNlID0gTnVtYmVyLk1BWF9WQUxVRTtcblxuICAgICAgICBsZXQgc29sdmVEaXN0YW5jZTtcbiAgICAgICAgZm9yIChsZXQgbG9vcCA9IDA7IGxvb3AgPCB0aGlzLl9tYXhJdGVyYXRpb25BdHRlbXB0czsgKytsb29wKSB7XG4gICAgICAgICAgICBzb2x2ZURpc3RhbmNlID0gdGhpcy5zb2x2ZUlLKG5ld1RhcmdldCk7XG5cbiAgICAgICAgICAgIGlmIChzb2x2ZURpc3RhbmNlIDwgYmVzdFNvbHZlRGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBiZXN0U29sdmVEaXN0YW5jZSA9IHNvbHZlRGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgYmVzdFNvbHV0aW9uID0gdGhpcy5jbG9uZUlrQ2hhaW4oKTtcblxuICAgICAgICAgICAgICAgIGlmIChzb2x2ZURpc3RhbmNlIDw9IHRoaXMuX3NvbHZlRGlzdGFuY2VUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc29sdmVEaXN0YW5jZSAtIGxhc3RQYXNzU29sdmVEaXN0YW5jZSkgPCB0aGlzLl9taW5JdGVyYXRpb25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYXN0UGFzc1NvbHZlRGlzdGFuY2UgPSBzb2x2ZURpc3RhbmNlO1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY3VycmVudFNvbHZlRGlzdGFuY2UgPSBiZXN0U29sdmVEaXN0YW5jZTtcbiAgICAgICAgdGhpcy5fY2hhaW4gPSBiZXN0U29sdXRpb247XG5cbiAgICAgICAgdGhpcy5fbGFzdEJhc2VMb2NhdGlvbi5zZXQodGhpcy5nZXRCYXNlTG9jYXRpb24oKSk7XG4gICAgICAgIHRoaXMuX2xhc3RUYXJnZXRMb2NhdGlvbi5zZXQobmV3VGFyZ2V0KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFNvbHZlRGlzdGFuY2U7XG4gICAgfVxuXG4vLyAtLS0tLS0tLS0tIFByaXZhdGUgTWV0aG9kcyAtLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiDQoNC10YjQsNC10YIg0LfQsNC00LDRh9GDINCY0Jog0YEg0L/QvtC80L7RidGM0Y4g0LDQu9Cz0L7RgNC40YLQvNCwIEZBQlJJSy5cbiAgICAgKiA8cD5cbiAgICAgKiDQldGB0LvQuCDQsiDRhtC10L/QuCDQtdGJ0LUg0L3QtdGCINC60L7RgdGC0LXQuSAtINCy0L7Qt9C90LjQutC90LXRgiDQvtGI0LjQsdC60LAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFyZ2V0ICAgINCm0LXQu9C10LLQvtC1INC80LXRgdGC0L7Qv9C+0LvQvtC20LXQvdC40LUuXG4gICAgICogQHJldHVybiAgICAgICAgICAgINCd0LDQuNC80LXQvdGM0YjQtdC1INGA0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0L3QvtCy0YvQvCDQv9C+0LvQvtC20LXQvdC40LXQvCDRjdGE0YTQtdC60YLQvtGA0LAg0Lgg0YbQtdC70LXQstGL0Lwg0LzQtdGB0YLQvtC/0L7Qu9C+0LbQtdC90LjQtdC8LCDQutC+0YLQvtGA0L7Qs9C+INGD0LTQsNC70L7RgdGMINC00L7RgdGC0LjRh9GMLlxuICAgICAqL1xuICAgIHByaXZhdGUgc29sdmVJSyh0YXJnZXQ6IFZlYzNmKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX2NoYWluLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJdCBtYWtlcyBubyBzZW5zZSB0byBzb2x2ZSBhbiBJSyBjaGFpbiB3aXRoIHplcm8gYm9uZXMuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLS0tINCf0KDQr9Cc0J7QmSDQn9Cg0J7QpdCe0JQ6INC+0YIg0Y3RhNGE0LXQutGC0L7RgNCwINC6INCx0LDQt9C+0LLQvtC5INC60L7RgdGC0LggLS0tLS0tLS0tLS1cblxuICAgICAgICBmb3IgKGxldCBsb29wID0gdGhpcy5fY2hhaW4ubGVuZ3RoIC0gMTsgbG9vcCA+PSAwOyAtLWxvb3ApIHtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNCb25lOiBGYWJyaWtCb25lM0QgPSB0aGlzLl9jaGFpbltsb29wXTtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNCb25lTGVuZ3RoOiBudW1iZXIgPSB0aGlzQm9uZS5nZXRMZW5ndGgoKTtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNCb25lSm9pbnQ6IEZhYnJpa0pvaW50M0QgPSB0aGlzQm9uZS5nZXRKb2ludCgpO1xuICAgICAgICAgICAgY29uc3QgdGhpc0JvbmVKb2ludFR5cGU6IEpvaW50VHlwZSA9IHRoaXNCb25lLmdldEpvaW50VHlwZSgpO1xuXG4gICAgICAgICAgICBpZiAobG9vcCAhPSB0aGlzLl9jaGFpbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0ZXJCb25lT3V0ZXJUb0lubmVyVVY6IFZlYzNmID0gdGhpcy5fY2hhaW5bbG9vcCArIDFdLmdldERpcmVjdGlvblVWKCkubmVnYXRlZCgpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHRoaXNCb25lT3V0ZXJUb0lubmVyVVY6IFZlYzNmID0gdGhpc0JvbmUuZ2V0RGlyZWN0aW9uVVYoKS5uZWdhdGVkKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpc0JvbmVKb2ludFR5cGUgPT0gSm9pbnRUeXBlLkJBTEwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5nbGVCZXR3ZWVuRGVncyA9IFZlYzNmLmdldEFuZ2xlQmV0d2VlbkRlZ3Mob3V0ZXJCb25lT3V0ZXJUb0lubmVyVVYsIHRoaXNCb25lT3V0ZXJUb0lubmVyVVYpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25zdHJhaW50QW5nbGVEZWdzID0gdGhpc0JvbmVKb2ludC5nZXRCYWxsSm9pbnRDb25zdHJhaW50RGVncygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5nbGVCZXR3ZWVuRGVncyA+IGNvbnN0cmFpbnRBbmdsZURlZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNCb25lT3V0ZXJUb0lubmVyVVYgPSBWZWMzZi5nZXRBbmdsZUxpbWl0ZWRVbml0VmVjdG9yRGVncyh0aGlzQm9uZU91dGVyVG9Jbm5lclVWLCBvdXRlckJvbmVPdXRlclRvSW5uZXJVViwgY29uc3RyYWludEFuZ2xlRGVncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXNCb25lSm9pbnRUeXBlID09IEpvaW50VHlwZS5HTE9CQUxfSElOR0UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0JvbmVPdXRlclRvSW5uZXJVViA9IHRoaXNCb25lT3V0ZXJUb0lubmVyVVYucHJvamVjdE9udG9QbGFuZSh0aGlzQm9uZUpvaW50LmdldEhpbmdlUm90YXRpb25BeGlzKCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpc0JvbmVKb2ludFR5cGUgPT0gSm9pbnRUeXBlLkxPQ0FMX0hJTkdFKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVsYXRpdmVIaW5nZVJvdGF0aW9uQXhpcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvb3AgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtID0gTWF0M2YuY3JlYXRlUm90YXRpb25NYXRyaXgodGhpcy5fY2hhaW5bbG9vcCAtIDFdLmdldERpcmVjdGlvblVWKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVIaW5nZVJvdGF0aW9uQXhpcyA9IG0udGltZXModGhpc0JvbmVKb2ludC5nZXRIaW5nZVJvdGF0aW9uQXhpcygpKS5ub3JtYWxpc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlSGluZ2VSb3RhdGlvbkF4aXMgPSB0aGlzLl9iYXNlYm9uZVJlbGF0aXZlQ29uc3RyYWludFVWO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpc0JvbmVPdXRlclRvSW5uZXJVViA9IHRoaXNCb25lT3V0ZXJUb0lubmVyVVYucHJvamVjdE9udG9QbGFuZShyZWxhdGl2ZUhpbmdlUm90YXRpb25BeGlzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgbmV3U3RhcnRMb2NhdGlvbiA9IHRoaXNCb25lLmdldEVuZExvY2F0aW9uKCkucGx1cyh0aGlzQm9uZU91dGVyVG9Jbm5lclVWLnRpbWVzKHRoaXNCb25lTGVuZ3RoKSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzQm9uZS5zZXRTdGFydExvY2F0aW9uKG5ld1N0YXJ0TG9jYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxvb3AgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYWluW2xvb3AgLSAxXS5zZXRFbmRMb2NhdGlvbihuZXdTdGFydExvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgdGhpc0JvbmUuc2V0RW5kTG9jYXRpb24odGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIGxldCB0aGlzQm9uZU91dGVyVG9Jbm5lclVWID0gdGhpc0JvbmUuZ2V0RGlyZWN0aW9uVVYoKS5uZWdhdGVkKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RhcmdldCcsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXNCb25lT3V0ZXJUb0lubmVyVVYnLCB0aGlzQm9uZU91dGVyVG9Jbm5lclVWKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpc0JvbmVKb2ludFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBKb2ludFR5cGUuQkFMTDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEpvaW50VHlwZS5HTE9CQUxfSElOR0U6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzQm9uZU91dGVyVG9Jbm5lclVWID0gdGhpc0JvbmVPdXRlclRvSW5uZXJVVi5wcm9qZWN0T250b1BsYW5lKHRoaXNCb25lSm9pbnQuZ2V0SGluZ2VSb3RhdGlvbkF4aXMoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBKb2ludFR5cGUuTE9DQUxfSElOR0U6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtID0gTWF0M2YuY3JlYXRlUm90YXRpb25NYXRyaXgodGhpcy5fY2hhaW5bbG9vcCAtIDFdLmdldERpcmVjdGlvblVWKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGl2ZUhpbmdlUm90YXRpb25BeGlzID0gbS50aW1lcyh0aGlzQm9uZUpvaW50LmdldEhpbmdlUm90YXRpb25BeGlzKCkpLm5vcm1hbGlzZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzQm9uZU91dGVyVG9Jbm5lclVWID0gdGhpc0JvbmVPdXRlclRvSW5uZXJVVi5wcm9qZWN0T250b1BsYW5lKHJlbGF0aXZlSGluZ2VSb3RhdGlvbkF4aXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RhcnRMb2NhdGlvbiA9IHRhcmdldC5wbHVzKHRoaXNCb25lT3V0ZXJUb0lubmVyVVYudGltZXModGhpc0JvbmVMZW5ndGgpKTtcblxuICAgICAgICAgICAgICAgIHRoaXNCb25lLnNldFN0YXJ0TG9jYXRpb24obmV3U3RhcnRMb2NhdGlvbik7XG5cbiAgICAgICAgICAgICAgICBpZiAobG9vcCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhaW5bbG9vcCAtIDFdLnNldEVuZExvY2F0aW9uKG5ld1N0YXJ0TG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLSDQntCx0YDQsNGC0L3Ri9C5INC/0YDQvtGF0L7QtCAtLS0tLS0tLS0tLVxuXG4gICAgICAgIGZvciAobGV0IGxvb3AgPSAwOyBsb29wIDwgdGhpcy5fY2hhaW4ubGVuZ3RoOyArK2xvb3ApIHtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNCb25lOiBGYWJyaWtCb25lM0QgPSB0aGlzLl9jaGFpbltsb29wXTtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNCb25lTGVuZ3RoID0gdGhpc0JvbmUuZ2V0TGVuZ3RoKCk7XG5cbiAgICAgICAgICAgIGlmIChsb29wICE9IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhpc0JvbmVJbm5lclRvT3V0ZXJVVjogVmVjM2YgPSB0aGlzQm9uZS5nZXREaXJlY3Rpb25VVigpO1xuICAgICAgICAgICAgICAgIGxldCBwcmV2Qm9uZUlubmVyVG9PdXRlclVWOiBWZWMzZiA9IHRoaXMuX2NoYWluW2xvb3AgLSAxXS5nZXREaXJlY3Rpb25VVigpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGhpc0JvbmVKb2ludDogRmFicmlrSm9pbnQzRCA9IHRoaXNCb25lLmdldEpvaW50KCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgam9pbnRUeXBlOiBKb2ludFR5cGUgPSB0aGlzQm9uZUpvaW50LmdldEpvaW50VHlwZSgpO1xuICAgICAgICAgICAgICAgIGlmIChqb2ludFR5cGUgPT0gSm9pbnRUeXBlLkJBTEwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5nbGVCZXR3ZWVuRGVnczogbnVtYmVyID0gVmVjM2YuZ2V0QW5nbGVCZXR3ZWVuRGVncyhwcmV2Qm9uZUlubmVyVG9PdXRlclVWLCB0aGlzQm9uZUlubmVyVG9PdXRlclVWKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uc3RyYWludEFuZ2xlRGVnczogbnVtYmVyID0gdGhpc0JvbmVKb2ludC5nZXRCYWxsSm9pbnRDb25zdHJhaW50RGVncygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmdsZUJldHdlZW5EZWdzID4gY29uc3RyYWludEFuZ2xlRGVncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0JvbmVJbm5lclRvT3V0ZXJVViA9IFZlYzNmLmdldEFuZ2xlTGltaXRlZFVuaXRWZWN0b3JEZWdzKHRoaXNCb25lSW5uZXJUb091dGVyVVYsIHByZXZCb25lSW5uZXJUb091dGVyVVYsIGNvbnN0cmFpbnRBbmdsZURlZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGpvaW50VHlwZSA9PSBKb2ludFR5cGUuR0xPQkFMX0hJTkdFKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhpbmdlUm90YXRpb25BeGlzOiBWZWMzZiA9IHRoaXNCb25lSm9pbnQuZ2V0SGluZ2VSb3RhdGlvbkF4aXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0JvbmVJbm5lclRvT3V0ZXJVViA9IHRoaXNCb25lSW5uZXJUb091dGVyVVYucHJvamVjdE9udG9QbGFuZShoaW5nZVJvdGF0aW9uQXhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3dDb25zdHJhaW50RGVncyA9IC10aGlzQm9uZUpvaW50LmdldEhpbmdlQ2xvY2t3aXNlQ29uc3RyYWludERlZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN3Q29uc3RyYWludERlZ3MgPSB0aGlzQm9uZUpvaW50LmdldEhpbmdlQW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKFV0aWxzLmFwcHJveGltYXRlbHlFcXVhbHMoY3dDb25zdHJhaW50RGVncywgLUZhYnJpa0pvaW50M0QuTUFYX0NPTlNUUkFJTlRfQU5HTEVfREVHUywgMC4wMDEpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIShVdGlscy5hcHByb3hpbWF0ZWx5RXF1YWxzKGFjd0NvbnN0cmFpbnREZWdzLCBGYWJyaWtKb2ludDNELk1BWF9DT05TVFJBSU5UX0FOR0xFX0RFR1MsIDAuMDAxKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhpbmdlUmVmZXJlbmNlQXhpczogVmVjM2YgPSB0aGlzQm9uZUpvaW50LmdldEhpbmdlUmVmZXJlbmNlQXhpcygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWduZWRBbmdsZURlZ3M6IG51bWJlciA9IFZlYzNmLmdldFNpZ25lZEFuZ2xlQmV0d2VlbkRlZ3MoaGluZ2VSZWZlcmVuY2VBeGlzLCB0aGlzQm9uZUlubmVyVG9PdXRlclVWLCBoaW5nZVJvdGF0aW9uQXhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaWduZWRBbmdsZURlZ3MgPiBhY3dDb25zdHJhaW50RGVncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNCb25lSW5uZXJUb091dGVyVVYgPSBWZWMzZi5yb3RhdGVBYm91dEF4aXNEZWdzKGhpbmdlUmVmZXJlbmNlQXhpcywgYWN3Q29uc3RyYWludERlZ3MsIGhpbmdlUm90YXRpb25BeGlzKS5ub3JtYWxpc2VkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNpZ25lZEFuZ2xlRGVncyA8IGN3Q29uc3RyYWludERlZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzQm9uZUlubmVyVG9PdXRlclVWID0gVmVjM2Yucm90YXRlQWJvdXRBeGlzRGVncyhoaW5nZVJlZmVyZW5jZUF4aXMsIGN3Q29uc3RyYWludERlZ3MsIGhpbmdlUm90YXRpb25BeGlzKS5ub3JtYWxpc2VkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGpvaW50VHlwZSA9PSBKb2ludFR5cGUuTE9DQUxfSElOR0UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGluZ2VSb3RhdGlvbkF4aXM6IFZlYzNmID0gdGhpc0JvbmVKb2ludC5nZXRIaW5nZVJvdGF0aW9uQXhpcygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG06IE1hdDNmID0gTWF0M2YuY3JlYXRlUm90YXRpb25NYXRyaXgocHJldkJvbmVJbm5lclRvT3V0ZXJVVik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVIaW5nZVJvdGF0aW9uQXhpczogVmVjM2YgPSBtLnRpbWVzKGhpbmdlUm90YXRpb25BeGlzKS5ub3JtYWxpc2UoKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzQm9uZUlubmVyVG9PdXRlclVWID0gdGhpc0JvbmVJbm5lclRvT3V0ZXJVVi5wcm9qZWN0T250b1BsYW5lKHJlbGF0aXZlSGluZ2VSb3RhdGlvbkF4aXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN3Q29uc3RyYWludERlZ3MgPSAtdGhpc0JvbmVKb2ludC5nZXRIaW5nZUNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjd0NvbnN0cmFpbnREZWdzID0gdGhpc0JvbmVKb2ludC5nZXRIaW5nZUFudGljbG9ja3dpc2VDb25zdHJhaW50RGVncygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIShVdGlscy5hcHByb3hpbWF0ZWx5RXF1YWxzKGN3Q29uc3RyYWludERlZ3MsIC1GYWJyaWtKb2ludDNELk1BWF9DT05TVFJBSU5UX0FOR0xFX0RFR1MsIDAuMDAxKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICEoVXRpbHMuYXBwcm94aW1hdGVseUVxdWFscyhhY3dDb25zdHJhaW50RGVncywgRmFicmlrSm9pbnQzRC5NQVhfQ09OU1RSQUlOVF9BTkdMRV9ERUdTLCAwLjAwMSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGl2ZUhpbmdlUmVmZXJlbmNlQXhpczogVmVjM2YgPSBtLnRpbWVzKHRoaXNCb25lSm9pbnQuZ2V0SGluZ2VSZWZlcmVuY2VBeGlzKCkpLm5vcm1hbGlzZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWduZWRBbmdsZURlZ3MgPSBWZWMzZi5nZXRTaWduZWRBbmdsZUJldHdlZW5EZWdzKHJlbGF0aXZlSGluZ2VSZWZlcmVuY2VBeGlzLCB0aGlzQm9uZUlubmVyVG9PdXRlclVWLCByZWxhdGl2ZUhpbmdlUm90YXRpb25BeGlzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25lZEFuZ2xlRGVncyA+IGFjd0NvbnN0cmFpbnREZWdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0JvbmVJbm5lclRvT3V0ZXJVViA9IFZlYzNmLnJvdGF0ZUFib3V0QXhpc0RlZ3MocmVsYXRpdmVIaW5nZVJlZmVyZW5jZUF4aXMsIGFjd0NvbnN0cmFpbnREZWdzLCByZWxhdGl2ZUhpbmdlUm90YXRpb25BeGlzKS5ub3JtYWxpc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2lnbmVkQW5nbGVEZWdzIDwgY3dDb25zdHJhaW50RGVncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNCb25lSW5uZXJUb091dGVyVVYgPSBWZWMzZi5yb3RhdGVBYm91dEF4aXNEZWdzKHJlbGF0aXZlSGluZ2VSZWZlcmVuY2VBeGlzLCBjd0NvbnN0cmFpbnREZWdzLCByZWxhdGl2ZUhpbmdlUm90YXRpb25BeGlzKS5ub3JtYWxpc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0VuZExvY2F0aW9uID0gdGhpc0JvbmUuZ2V0U3RhcnRMb2NhdGlvbigpLnBsdXModGhpc0JvbmVJbm5lclRvT3V0ZXJVVi50aW1lcyh0aGlzQm9uZUxlbmd0aCkpO1xuXG4gICAgICAgICAgICAgICAgdGhpc0JvbmUuc2V0RW5kTG9jYXRpb24obmV3RW5kTG9jYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxvb3AgPCB0aGlzLl9jaGFpbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYWluW2xvb3AgKyAxXS5zZXRTdGFydExvY2F0aW9uKG5ld0VuZExvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9maXhlZEJhc2VNb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNCb25lLnNldFN0YXJ0TG9jYXRpb24odGhpcy5fZml4ZWRCYXNlTG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNCb25lLnNldFN0YXJ0TG9jYXRpb24odGhpc0JvbmUuZ2V0RW5kTG9jYXRpb24oKS5taW51cyh0aGlzQm9uZS5nZXREaXJlY3Rpb25VVigpLnRpbWVzKHRoaXNCb25lTGVuZ3RoKSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9iYXNlYm9uZUNvbnN0cmFpbnRUeXBlID09IEJhc2Vib25lQ29uc3RyYWludFR5cGUzRC5OT05FKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0VuZExvY2F0aW9uID0gdGhpc0JvbmUuZ2V0U3RhcnRMb2NhdGlvbigpLnBsdXModGhpc0JvbmUuZ2V0RGlyZWN0aW9uVVYoKS50aW1lcyh0aGlzQm9uZUxlbmd0aCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzQm9uZS5zZXRFbmRMb2NhdGlvbihuZXdFbmRMb2NhdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NoYWluLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYWluWzFdLnNldFN0YXJ0TG9jYXRpb24obmV3RW5kTG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Jhc2Vib25lQ29uc3RyYWludFR5cGUgPT0gQmFzZWJvbmVDb25zdHJhaW50VHlwZTNELkdMT0JBTF9ST1RPUikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRoaXNCb25lSW5uZXJUb091dGVyVVY6IFZlYzNmID0gdGhpc0JvbmUuZ2V0RGlyZWN0aW9uVVYoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5nbGVCZXR3ZWVuRGVncyA9IFZlYzNmLmdldEFuZ2xlQmV0d2VlbkRlZ3ModGhpcy5fYmFzZWJvbmVDb25zdHJhaW50VVYsIHRoaXNCb25lSW5uZXJUb091dGVyVVYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uc3RyYWludEFuZ2xlRGVncyA9IHRoaXNCb25lLmdldEJhbGxKb2ludENvbnN0cmFpbnREZWdzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmdsZUJldHdlZW5EZWdzID4gY29uc3RyYWludEFuZ2xlRGVncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNCb25lSW5uZXJUb091dGVyVVYgPSBWZWMzZi5nZXRBbmdsZUxpbWl0ZWRVbml0VmVjdG9yRGVncyh0aGlzQm9uZUlubmVyVG9PdXRlclVWLCB0aGlzLl9iYXNlYm9uZUNvbnN0cmFpbnRVViwgY29uc3RyYWludEFuZ2xlRGVncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0VuZExvY2F0aW9uID0gdGhpc0JvbmUuZ2V0U3RhcnRMb2NhdGlvbigpLnBsdXModGhpc0JvbmVJbm5lclRvT3V0ZXJVVi50aW1lcyh0aGlzQm9uZUxlbmd0aCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzQm9uZS5zZXRFbmRMb2NhdGlvbihuZXdFbmRMb2NhdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jaGFpbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhaW5bMV0uc2V0U3RhcnRMb2NhdGlvbihuZXdFbmRMb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYmFzZWJvbmVDb25zdHJhaW50VHlwZSA9PSBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0QuTE9DQUxfUk9UT1IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aGlzQm9uZUlubmVyVG9PdXRlclVWID0gdGhpc0JvbmUuZ2V0RGlyZWN0aW9uVVYoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5nbGVCZXR3ZWVuRGVncyA9IFZlYzNmLmdldEFuZ2xlQmV0d2VlbkRlZ3ModGhpcy5fYmFzZWJvbmVSZWxhdGl2ZUNvbnN0cmFpbnRVViwgdGhpc0JvbmVJbm5lclRvT3V0ZXJVVik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25zdHJhaW50QW5nbGVEZWdzID0gdGhpc0JvbmUuZ2V0QmFsbEpvaW50Q29uc3RyYWludERlZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbmdsZUJldHdlZW5EZWdzID4gY29uc3RyYWludEFuZ2xlRGVncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNCb25lSW5uZXJUb091dGVyVVYgPSBWZWMzZi5nZXRBbmdsZUxpbWl0ZWRVbml0VmVjdG9yRGVncyh0aGlzQm9uZUlubmVyVG9PdXRlclVWLCB0aGlzLl9iYXNlYm9uZVJlbGF0aXZlQ29uc3RyYWludFVWLCBjb25zdHJhaW50QW5nbGVEZWdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RW5kTG9jYXRpb24gPSB0aGlzQm9uZS5nZXRTdGFydExvY2F0aW9uKCkucGx1cyh0aGlzQm9uZUlubmVyVG9PdXRlclVWLnRpbWVzKHRoaXNCb25lTGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzQm9uZS5zZXRFbmRMb2NhdGlvbihuZXdFbmRMb2NhdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jaGFpbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhaW5bMV0uc2V0U3RhcnRMb2NhdGlvbihuZXdFbmRMb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYmFzZWJvbmVDb25zdHJhaW50VHlwZSA9PSBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0QuR0xPQkFMX0hJTkdFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aGlzSm9pbnQgPSB0aGlzQm9uZS5nZXRKb2ludCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGluZ2VSb3RhdGlvbkF4aXMgPSB0aGlzSm9pbnQuZ2V0SGluZ2VSb3RhdGlvbkF4aXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN3Q29uc3RyYWludERlZ3MgPSAtdGhpc0pvaW50LmdldEhpbmdlQ2xvY2t3aXNlQ29uc3RyYWludERlZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjd0NvbnN0cmFpbnREZWdzID0gdGhpc0pvaW50LmdldEhpbmdlQW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aGlzQm9uZUlubmVyVG9PdXRlclVWID0gdGhpc0JvbmUuZ2V0RGlyZWN0aW9uVVYoKS5wcm9qZWN0T250b1BsYW5lKGhpbmdlUm90YXRpb25BeGlzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoVXRpbHMuYXBwcm94aW1hdGVseUVxdWFscyhjd0NvbnN0cmFpbnREZWdzLCAtRmFicmlrSm9pbnQzRC5NQVhfQ09OU1RSQUlOVF9BTkdMRV9ERUdTLCAwLjAxKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLmFwcHJveGltYXRlbHlFcXVhbHMoYWN3Q29uc3RyYWludERlZ3MsIEZhYnJpa0pvaW50M0QuTUFYX0NPTlNUUkFJTlRfQU5HTEVfREVHUywgMC4wMSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGluZ2VSZWZlcmVuY2VBeGlzID0gdGhpc0pvaW50LmdldEhpbmdlUmVmZXJlbmNlQXhpcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpZ25lZEFuZ2xlRGVncyA9IFZlYzNmLmdldFNpZ25lZEFuZ2xlQmV0d2VlbkRlZ3MoaGluZ2VSZWZlcmVuY2VBeGlzLCB0aGlzQm9uZUlubmVyVG9PdXRlclVWLCBoaW5nZVJvdGF0aW9uQXhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2lnbmVkQW5nbGVEZWdzID4gYWN3Q29uc3RyYWludERlZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0JvbmVJbm5lclRvT3V0ZXJVViA9IFZlYzNmLnJvdGF0ZUFib3V0QXhpc0RlZ3MoaGluZ2VSZWZlcmVuY2VBeGlzLCBhY3dDb25zdHJhaW50RGVncywgaGluZ2VSb3RhdGlvbkF4aXMpLm5vcm1hbGlzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzaWduZWRBbmdsZURlZ3MgPCBjd0NvbnN0cmFpbnREZWdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNCb25lSW5uZXJUb091dGVyVVYgPSBWZWMzZi5yb3RhdGVBYm91dEF4aXNEZWdzKGhpbmdlUmVmZXJlbmNlQXhpcywgY3dDb25zdHJhaW50RGVncywgaGluZ2VSb3RhdGlvbkF4aXMpLm5vcm1hbGlzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RW5kTG9jYXRpb24gPSB0aGlzQm9uZS5nZXRTdGFydExvY2F0aW9uKCkucGx1cyh0aGlzQm9uZUlubmVyVG9PdXRlclVWLnRpbWVzKHRoaXNCb25lTGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzQm9uZS5zZXRFbmRMb2NhdGlvbihuZXdFbmRMb2NhdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jaGFpbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhaW5bMV0uc2V0U3RhcnRMb2NhdGlvbihuZXdFbmRMb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYmFzZWJvbmVDb25zdHJhaW50VHlwZSA9PSBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0QuTE9DQUxfSElOR0UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoaXNKb2ludCA9IHRoaXNCb25lLmdldEpvaW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoaW5nZVJvdGF0aW9uQXhpcyA9IHRoaXMuX2Jhc2Vib25lUmVsYXRpdmVDb25zdHJhaW50VVY7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjd0NvbnN0cmFpbnREZWdzID0gLXRoaXNKb2ludC5nZXRIaW5nZUNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3dDb25zdHJhaW50RGVncyA9IHRoaXNKb2ludC5nZXRIaW5nZUFudGljbG9ja3dpc2VDb25zdHJhaW50RGVncygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGhpc0JvbmVJbm5lclRvT3V0ZXJVViA9IHRoaXNCb25lLmdldERpcmVjdGlvblVWKCkucHJvamVjdE9udG9QbGFuZShoaW5nZVJvdGF0aW9uQXhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKFV0aWxzLmFwcHJveGltYXRlbHlFcXVhbHMoY3dDb25zdHJhaW50RGVncywgLUZhYnJpa0pvaW50M0QuTUFYX0NPTlNUUkFJTlRfQU5HTEVfREVHUywgMC4wMSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5hcHByb3hpbWF0ZWx5RXF1YWxzKGFjd0NvbnN0cmFpbnREZWdzLCBGYWJyaWtKb2ludDNELk1BWF9DT05TVFJBSU5UX0FOR0xFX0RFR1MsIDAuMDEpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhpbmdlUmVmZXJlbmNlQXhpcyA9IHRoaXMuX2Jhc2Vib25lUmVsYXRpdmVSZWZlcmVuY2VDb25zdHJhaW50VVY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2lnbmVkQW5nbGVEZWdzID0gVmVjM2YuZ2V0U2lnbmVkQW5nbGVCZXR3ZWVuRGVncyhoaW5nZVJlZmVyZW5jZUF4aXMsIHRoaXNCb25lSW5uZXJUb091dGVyVVYsIGhpbmdlUm90YXRpb25BeGlzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaWduZWRBbmdsZURlZ3MgPiBhY3dDb25zdHJhaW50RGVncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzQm9uZUlubmVyVG9PdXRlclVWID0gVmVjM2Yucm90YXRlQWJvdXRBeGlzRGVncyhoaW5nZVJlZmVyZW5jZUF4aXMsIGFjd0NvbnN0cmFpbnREZWdzLCBoaW5nZVJvdGF0aW9uQXhpcykubm9ybWFsaXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzaWduZWRBbmdsZURlZ3MgPCBjd0NvbnN0cmFpbnREZWdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNCb25lSW5uZXJUb091dGVyVVYgPSBWZWMzZi5yb3RhdGVBYm91dEF4aXNEZWdzKGhpbmdlUmVmZXJlbmNlQXhpcywgY3dDb25zdHJhaW50RGVncywgaGluZ2VSb3RhdGlvbkF4aXMpLm5vcm1hbGlzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RW5kTG9jYXRpb24gPSB0aGlzQm9uZS5nZXRTdGFydExvY2F0aW9uKCkucGx1cyh0aGlzQm9uZUlubmVyVG9PdXRlclVWLnRpbWVzKHRoaXNCb25lTGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzQm9uZS5zZXRFbmRMb2NhdGlvbihuZXdFbmRMb2NhdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jaGFpbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhaW5bMV0uc2V0U3RhcnRMb2NhdGlvbihuZXdFbmRMb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYXN0VGFyZ2V0TG9jYXRpb24uc2V0KHRhcmdldCk7XG5cbiAgICAgICAgcmV0dXJuIFZlYzNmLmRpc3RhbmNlQmV0d2Vlbih0aGlzLl9jaGFpblt0aGlzLl9jaGFpbi5sZW5ndGggLSAxXS5nZXRFbmRMb2NhdGlvbigpLCB0YXJnZXQpO1xuICAgIH1cblxuICAgIHVwZGF0ZUNoYWluTGVuZ3RoKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jaGFpbkxlbmd0aCA9IDAuMDtcblxuICAgICAgICBmb3IgKGxldCBhQm9uZSBvZiB0aGlzLl9jaGFpbikge1xuICAgICAgICAgICAgdGhpcy5fY2hhaW5MZW5ndGggKz0gYUJvbmUuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVFbWJlZGRlZFRhcmdldChuZXdFbWJlZGRlZFRhcmdldDogVmVjM2YpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3VzZUVtYmVkZGVkVGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLl9lbWJlZGRlZFRhcmdldC5zZXQobmV3RW1iZWRkZWRUYXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGNoYWluIGRvZXMgbm90IGhhdmUgZW1iZWRkZWQgdGFyZ2V0cyBlbmFibGVkIC0gZW5hYmxlIHdpdGggc2V0RW1iZWRkZWRUYXJnZXRNb2RlKHRydWUpLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbG9uZUlrQ2hhaW4oKTogRmFicmlrQm9uZTNEW10ge1xuICAgICAgICBjb25zdCBjbG9uZWRDaGFpbiA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGFCb25lIG9mIHRoaXMuX2NoYWluKSB7XG4gICAgICAgICAgICBjb25zdCBib25lID0gbmV3IEZhYnJpa0JvbmUzRCgpO1xuICAgICAgICAgICAgYm9uZS5zZXQoYUJvbmUpO1xuICAgICAgICAgICAgY2xvbmVkQ2hhaW4ucHVzaChib25lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbG9uZWRDaGFpbjtcbiAgICB9XG5cbiAgICBnZXRNYXhJdGVyYXRpb25BdHRlbXB0cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4SXRlcmF0aW9uQXR0ZW1wdHM7XG4gICAgfVxuXG4gICAgZ2V0TWluSXRlcmF0aW9uQ2hhbmdlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taW5JdGVyYXRpb25DaGFuZ2U7XG4gICAgfVxuXG4gICAgZ2V0U29sdmVEaXN0YW5jZVRocmVzaG9sZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc29sdmVEaXN0YW5jZVRocmVzaG9sZDtcbiAgICB9XG59XG4iLCJpbXBvcnQge0NvbnN0cmFpbnRDb29yZGluYXRlU3lzdGVtfSBmcm9tICcuL0NvbnN0cmFpbnRDb29yZGluYXRlU3lzdGVtJztcblxuLyoqXG4gKiDQodGD0YHRgtCw0LIsINC+0L/RgNC10LTQtdC70Y/RjtGJ0LjQuSDRg9Cz0LvRiy3QvtCz0YDQsNC90LjRh9C10L3QuNGPINC80LXQttC00YMg0LrQvtGB0YLRj9C80Lgg0YbQtdC/0LguXG4gKiA8cD5cbiAqIEZhYnJpa0pvaW50MkQg0YHQvtGB0YLQvtC40YIg0LjQtyDQv9Cw0YDRiyDRg9Cz0LvQvtCyOlxuICogPHVsPjxsaT7Qo9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LU7PC9saT5cbiAqIDxsaT7Qo9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuC48L2xpPjwvdWw+XG4gKiA8cD5cbiAqINCe0L3QuCDQvtCx0LAg0LjQt9C80LXRgNGP0Y7RgtGB0Y8g0LIg0LPRgNCw0LTRg9GB0LDRhSBbMC4uMTgwXS5cbiAqINCX0L3QsNGH0LXQvdC40LUg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0LTQu9GPINC+0LHQvtC40YUg0YPQs9C70L7QsiAtIDE4MCwg0YfRgtC+INC+0LfQvdCw0YfQsNC10YIsINGH0YLQviDRgdGD0YHRgtCw0LIg0L3QtSDQuNC80LXQtdGCINC+0LPRgNCw0L3QuNGH0LXQvdC40LkuXG4gKiDQlNC70Y8g0YPRgdGC0LDQvdC+0LLQutC4INGB0L7QsdGB0YLQstC10L3QvdGL0YUg0LfQvdCw0YfQtdC90LjQuSDRg9Cz0LvQvtCyLdC+0LPRgNCw0L3QuNGH0LXQvdC40Lkg0LzQvtC20L3QviDQstC+0YHQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y8g0LrQvtC90YHRgtGA0YPQutGC0L7RgNC+0LwsINC30LDQtNCw0YLRjCDRgdCy0L7QudGB0YLQstCw0Lwg0LfQvdCw0YfQtdC90LjRj1xuICog0L3QtdC/0L7RgdGA0LXQtNGB0YLQstC10L3QvdC+INC/0L4g0YHRgdGL0LvQutCw0Lwge0BsaW5rICNfY2xvY2t3aXNlQ29uc3RyYWludERlZ3N9INC4IHtAbGluayAjX2FudGljbG9ja3dpc2VDb25zdHJhaW50RGVnc30g0LjQu9C4XG4gKiDQstC+0YHQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y8g0LzQtdGC0L7QtNCw0LzQuC3RgdC10YLRgtC10YDQsNC80Lgge0BsaW5rICNzZXRDbG9ja3dpc2VDb25zdHJhaW50RGVnc30gYW5kIHtAbGluayAjc2V0QW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzfS5cbiAqINCf0LXRgNCy0YvQuSDQuCDRgtGA0LXRgtC40Lkg0LzQtdGC0L7QtCDQvdCw0LjQsdC+0LvQtdC1INC/0YDQtdC00L/QvtGH0YLQuNGC0LXQu9GM0L3Ri9C1LCDRgtCw0Log0LrQsNC6INC+0L3QuCDQvtGB0YPRidC10YHRgtCy0LvRj9GO0YIg0L/RgNC+0LLQtdGA0LrRgyDQt9Cw0LTQsNCy0LDQtdC80YvRhSDQt9C90LDRh9C10L3QuNC5LlxuICogPHA+XG4gKiDQmtCw0LbQtNCw0Y8gRmFicmlrQm9uZTJEINGB0L7QtNC10YDQttC40YIg0LIg0YHQtdCx0LUg0L7QtNC40L0gRmFicmlrSm9pbnQyRCwg0LrQvtGC0L7RgNGL0Lkg0YDQsNGB0L/QvtC70LDQs9Cw0LXRgtGB0Y8g0LIg0L3QsNGH0LDQu9C1INC60L7RgdGC0Lgge0Bjb2RlIG1TdGFydExvY2F0aW9ufS5cbiAqIDxwPlxuICog0KHRg9GB0YLQsNCyINC+0YLQtNC10LvQtdC9INC+0YIg0LrQvtGB0YLQuCDQsiDRgdCw0LzQvtGB0YLQvtGP0YLQtdC70YzQvdGL0Lkg0LrQu9Cw0YHRgSDQsiDRgdCy0Y/Qt9C4INGBINGC0LXQvCwg0YfRgtC+INGB0YPRidC10YHRgtCy0YPQtdGCINC90LXRgdC60L7Qu9GM0LrQviDRgtC40L/QvtCyINC+0LPRgNCw0L3QuNGH0LXQvdC40LksINGH0YLQvlxuICog0LTQtdC70LDQtdGCINGE0YPQvdC60YbQuNC+0L3QsNC70YzQvdC+0YHRgtGMINGB0YPRgdGC0LDQstCwINCz0YDQvtC80L7Qt9C00LrQvtC5INC4INGB0LvQvtC20L3QvtC5INC00LvRjyDQv9C+0L3QuNC80LDQvdC40Y8g0LLQvdGD0YLRgNC4INC60LvQsNGB0YHQsCDQutC+0YHRgtC4LlxuICovXG5leHBvcnQgY2xhc3MgRmFicmlrSm9pbnQyRCB7XG4gICAgLyoqINCc0LjQvdC40LzQsNC70YzQvdGL0Lkg0YPQs9C+0Lst0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQtNC70Y8g0LvRjtCx0L7Qs9C+INC40Lcg0L3QsNC/0YDQsNCy0LvQtdC90LjQuSDQsiDQs9GA0LDQtNGD0YHQsNGFLiDQn9C+0LvQvdC+0YHRgtGM0Y4g0L7QsdC10LfQtNCy0LjQttC40LLQsNC10YIg0LrQvtGB0YLRjC4gKi9cbiAgICBzdGF0aWMgTUlOXzJEX0NPTlNUUkFJTlRfQU5HTEVfREVHUyA9IDA7XG5cbiAgICAvKiog0JzQsNC60YHQuNC80LDQu9GM0L3Ri9C5INGD0LPQvtC7LdC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0LTQu9GPINC70Y7QsdC+0LPQviDQuNC3INC90LDQv9GA0LDQstC70LXQvdC40Lkg0LIg0LPRgNCw0LTRg9GB0LDRhS4g0JTQsNGR0YIg0LrQvtGB0YLQuCDQv9C+0LvQvdGD0Y4g0YHQstC+0LHQvtC00YMuICovXG4gICAgc3RhdGljIE1BWF8yRF9DT05TVFJBSU5UX0FOR0xFX0RFR1MgPSAxODA7XG5cbiAgICAvKipcbiAgICAgKiBfY2xvY2t3aXNlQ29uc3RyYWludERlZ3NcdNCj0LPQvtC7INCyINCz0YDQsNC00YPRgdCw0YUsINC90LAg0LrQvtGC0L7RgNGL0Lkg0LTQsNC90L3Ri9C5IEZhYnJpa0pvaW50MkQg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9C+0LLQtdGA0L3Rg9GCINC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LVcbiAgICAgKiDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0L/RgNC10LTRi9C00YPRidC10Lkg0LrQvtGB0YLQuCDQuNC70Lgg0LzQuNGA0L7QstC+0Lkg0YHQuNGB0YLQtdC80Ysg0LrQvtC+0YDQtNC40L3QsNGCLCDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LLRi9Cx0YDQsNC90L3QvtC5INGB0LjRgdGC0LXQvNGLINC60L7QvtGA0LTQuNC90LDRgi5cbiAgICAgKiA8cD5cbiAgICAgKiDQlNC+0L/Rg9GB0YLQuNC80YvQtSDQt9C90LDRh9C10L3QuNGPIFswLi4xODBdLlxuICAgICAqXG4gICAgICogQGRlZmF1bHQgMTgwLjBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9jbG9ja3dpc2VDb25zdHJhaW50RGVncyA9IEZhYnJpa0pvaW50MkQuTUFYXzJEX0NPTlNUUkFJTlRfQU5HTEVfREVHUztcblxuICAgIC8qKlxuICAgICAqIG1BbnRpQ2xvY2t3aXNlQ29udHJhaW50RGVnc1x00KPQs9C+0Lsg0LIg0LPRgNCw0LTRg9GB0LDRhSwg0L3QsCDQutC+0YLQvtGA0YvQuSDQtNCw0L3QvdGL0LkgRmFicmlrSm9pbnQyRCDQvNC+0LbQtdGCINCx0YvRgtGMINC/0L7QstC10YDQvdGD0YIg0L/RgNC+0YLQuNCyINGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC4XG4gICAgICog0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC/0YDQtdC00YvQtNGD0YnQtdC5INC60L7RgdGC0Lgg0LjQu9C4INC80LjRgNC+0LLQvtC5INGB0LjRgdGC0LXQvNGLINC60L7QvtGA0LTQuNC90LDRgiwg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINCy0YvQsdGA0LDQvdC90L7QuSDRgdC40YHRgtC10LzRiyDQutC+0L7RgNC00LjQvdCw0YIuXG4gICAgICogPHA+XG4gICAgICog0JTQvtC/0YPRgdGC0LjQvNGL0LUg0LfQvdCw0YfQtdC90LjRjyBbMC4uMTgwXS5cbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IDE4MC4wXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzID0gRmFicmlrSm9pbnQyRC5NQVhfMkRfQ09OU1RSQUlOVF9BTkdMRV9ERUdTO1xuXG4gICAgLyoqXG4gICAgICogX2NvbnN0cmFpbnRDb29yZGluYXRlU3lzdGVtXHTQodC40YHRgtC10LzQsCDQutC+0L7RgNC00LjQvdCw0YIsINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQutC+0YLQvtGA0L7QuSDQt9Cw0LTQsNGO0YLRgdGPINGD0LPQu9GLLdC+0LPRgNCw0L3QuNGH0LXQvdC40Y8uXG4gICAgICogPHA+XG4gICAgICog0JzQvtC20LXRgiDQv9GA0LjQvdC40LzQsNGC0Ywg0LfQvdCw0YfQtdC90LjRjyDQuNC3INC/0LXRgNC10YfQuNGB0LvQtdC90LjRjyB7QGxpbmsgI0NvbnN0cmFpbnRDb29yZGluYXRlU3lzdGVtfVxuICAgICAqIDxwPlxuICAgICAqINCX0L3QsNGH0LXQvdC40LUg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4gLSBDb25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbS5MT0NBTC5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9jb25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbSA9IENvbnN0cmFpbnRDb29yZGluYXRlU3lzdGVtLkxPQ0FMO1xuXG4gICAgLy8gLS0tLS0tLS0tLSBDb25zdHJ1Y3RvciAtLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiDQmtC+0L3RgdGC0YDRg9C60YLQvtGALlxuICAgICAqIDxwPlxuICAgICAqINCf0YDQuNC90LjQvNCw0LXRgiDRgtGA0Lgg0L/QsNGA0LDQvNC10YLRgNCwINGD0LPQvtC7LdC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtSwg0L/RgNC+0YLQuNCyINGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC4INC4INGB0LjRgdGC0LXQvNGDINC60L7QvtGA0LTQuNC90LDRgi5cbiAgICAgKiDQktGB0LUg0L/QsNGA0LDQvNC10YLRgNGLINC+0L/RhtC40L7QvdCw0LvRjNC90YssINCyINGB0LvRg9GH0LDQtSDQvtGC0YHRg9GC0YHRgtCy0LjRjyDQv9GA0LjQvdC40LzQsNGO0YIg0LfQvdCw0YfQtdC90LjRjyDQv9C+INGD0LzQvtC70YfQsNC90LjRji5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjbG9ja3dpc2VDb25zdHJhaW50RGVnc1x0XHTQo9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUg0LIg0LPRgNCw0LTRg9GB0LDRhS5cbiAgICAgKiBAcGFyYW0gYW50aUNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzXHTQo9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuCDQsiDQs9GA0LDQtNGD0YHQsNGFLlxuICAgICAqIEBwYXJhbSBjb25zdHJhaW50Q29vcmRTeXN0ZW0gICAgICAgICDQodC40YHRgtC10LzQsCDQutC+0L7RgNC00LjQvdCw0YIuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2xvY2t3aXNlQ29uc3RyYWludERlZ3M/OiBudW1iZXIsIGFudGlDbG9ja3dpc2VDb25zdHJhaW50RGVncz86IG51bWJlciwgY29uc3RyYWludENvb3JkU3lzdGVtPzogQ29uc3RyYWludENvb3JkaW5hdGVTeXN0ZW0pIHtcbiAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICB0aGlzLnNldENsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKGNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKTtcbiAgICAgICAgICAgICAgIHRoaXMuc2V0QW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKGFudGlDbG9ja3dpc2VDb25zdHJhaW50RGVncyk7XG4gICAgICAgICAgICAgICB0aGlzLl9jb25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbSA9IGNvbnN0cmFpbnRDb29yZFN5c3RlbTtcbiAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIEZhYnJpa0pvaW50MkQgY29uc3RydWN0b3IgcGFyYW1zIScpO1xuICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tIE1ldGhvZHMgLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICog0JrQvtC/0LjRgNGD0LXRgiBzb3VyY2VKb2ludCDQsiDQtNCw0L3QvdGL0Lkg0YHRg9GB0YLQsNCyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNvdXJjZUpvaW50ICAg0KHRg9GB0YLQsNCyLCDQt9C90LDRh9C10L3QuNGPINC60L7RgtC+0YDQvtCz0L4g0LHRg9C00YPRgiDRgdC60L7Qv9C40YDQvtCy0LDQvdGLLlxuICAgICAqL1xuICAgIHNldChzb3VyY2VKb2ludDogRmFicmlrSm9pbnQyRCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldENsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKHNvdXJjZUpvaW50Ll9jbG9ja3dpc2VDb25zdHJhaW50RGVncyk7XG4gICAgICAgIHRoaXMuc2V0QW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKHNvdXJjZUpvaW50Ll9hbnRpY2xvY2t3aXNlQ29uc3RyYWludERlZ3MpO1xuICAgICAgICB0aGlzLl9jb25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbSA9IHNvdXJjZUpvaW50Ll9jb25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0JfQsNC00LDRkdGCINGD0LPQvtC7LdC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtSDQsiDQs9GA0LDQtNGD0YHQsNGFLlxuICAgICAqIDxwPlxuICAgICAqINCj0LPQvtC7LdC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0LzQvtC20LXRgiDQv9GA0LjQvdC40LzQsNGC0Ywg0LfQvdCw0YfQtdC90LjRjyDQvtGCIDAgKNC90LUg0L/RgNC10LTRg9GB0LzQsNGC0YDQuNCy0LDQtdGCINC00LLQuNC20LXQvdC40Y8pLCDQtNC+IDE4MCAo0L/QvtC70L3QvtGB0YLRjNGOINC/0L7QtNCy0LjQttC10L0pLlxuICAgICAqIEBwYXJhbVx0YW5nbGVEZWdzXHTQo9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUg0LIg0LPRgNCw0LTRg9GB0LDRhS5cbiAgICAgKi9cbiAgICBzZXRDbG9ja3dpc2VDb25zdHJhaW50RGVncyAoYW5nbGVEZWdzOiBudW1iZXIpOiB2b2lkICB7XG4gICAgICAgIGlmIChhbmdsZURlZ3MgPCBGYWJyaWtKb2ludDJELk1JTl8yRF9DT05TVFJBSU5UX0FOR0xFX0RFR1MpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nsb2Nrd2lzZUNvbnN0cmFpbnREZWdzID0gRmFicmlrSm9pbnQyRC5NSU5fMkRfQ09OU1RSQUlOVF9BTkdMRV9ERUdTO1xuICAgICAgICB9IGVsc2UgaWYgKGFuZ2xlRGVncyA+IEZhYnJpa0pvaW50MkQuTUFYXzJEX0NPTlNUUkFJTlRfQU5HTEVfREVHUykge1xuICAgICAgICAgICAgdGhpcy5fY2xvY2t3aXNlQ29uc3RyYWludERlZ3MgPSBGYWJyaWtKb2ludDJELk1BWF8yRF9DT05TVFJBSU5UX0FOR0xFX0RFR1M7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jbG9ja3dpc2VDb25zdHJhaW50RGVncyA9IGFuZ2xlRGVncztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDRg9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUg0LIg0LPRgNCw0LTRg9GB0LDRhS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5cdNCj0LPQvtC7LdC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtSDQsiDQs9GA0LDQtNGD0YHQsNGFLlxuICAgICAqL1xuICAgIGdldENsb2Nrd2lzZUNvbnN0cmFpbnREZWdzID0gKCk6IG51bWJlciA9PiB0aGlzLl9jbG9ja3dpc2VDb25zdHJhaW50RGVncztcblxuICAgIC8qKlxuICAgICAqINCX0LDQtNCw0ZHRgiDRg9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuCDQsiDQs9GA0LDQtNGD0YHQsNGFLlxuICAgICAqIDxwPlxuICAgICAqINCj0LPQvtC7LdC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0LzQvtC20LXRgiDQv9GA0LjQvdC40LzQsNGC0Ywg0LfQvdCw0YfQtdC90LjRjyDQvtGCIDAgKNC90LUg0L/RgNC10LTRg9GB0LzQsNGC0YDQuNCy0LDQtdGCINC00LLQuNC20LXQvdC40Y8pLCDQtNC+IDE4MCAo0L/QvtC70L3QvtGB0YLRjNGOINC/0L7QtNCy0LjQttC10L0pLlxuICAgICAqIEBwYXJhbVx0YW5nbGVEZWdzXHTQo9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuCDQsiDQs9GA0LDQtNGD0YHQsNGFLlxuICAgICAqL1xuICAgIHNldEFudGljbG9ja3dpc2VDb25zdHJhaW50RGVncyAoYW5nbGVEZWdzOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKGFuZ2xlRGVncyA8IEZhYnJpa0pvaW50MkQuTUlOXzJEX0NPTlNUUkFJTlRfQU5HTEVfREVHUykge1xuICAgICAgICAgICAgdGhpcy5fYW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzID0gRmFicmlrSm9pbnQyRC5NSU5fMkRfQ09OU1RSQUlOVF9BTkdMRV9ERUdTO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFuZ2xlRGVncyA+IEZhYnJpa0pvaW50MkQuTUFYXzJEX0NPTlNUUkFJTlRfQU5HTEVfREVHUykge1xuICAgICAgICAgICAgdGhpcy5fYW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzID0gRmFicmlrSm9pbnQyRC5NQVhfMkRfQ09OU1RSQUlOVF9BTkdMRV9ERUdTO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzID0gYW5nbGVEZWdzO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGD0LPQvtC7LdC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0L/RgNC+0YLQuNCyINGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC4INCyINCz0YDQsNC00YPRgdCw0YUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuXHTQo9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuCDQsiDQs9GA0LDQtNGD0YHQsNGFLlxuICAgICAqL1xuICAgIGdldEFudGljbG9ja3dpc2VDb25zdHJhaW50RGVncyA9ICgpOiBudW1iZXIgPT4gdGhpcy5fYW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzO1xuXG4gICAgLyoqXG4gICAgICog0JfQsNC00LDRkdGCINGB0LjRgdGC0LXQvNGDINC60L7QvtGA0LTQuNC90LDRgiDQtNCw0L3QvdC+0LPQviDQvtCz0YDQsNC90LjRh9C10L3QuNGPLlxuICAgICAqXG4gICAgICogQHBhcmFtXHRjb29yZFN5c3RlbVx00KHQuNGB0YLQtdC80LAg0LrQvtC+0YDQtNC40L3QsNGCLlxuICAgICAqL1xuICAgIHNldENvbnN0cmFpbnRDb29yZGluYXRlU3lzdGVtID0gKGNvb3JkU3lzdGVtOiBDb25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbSk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLl9jb25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbSA9IGNvb3JkU3lzdGVtO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDRgdC40YHRgtC10LzRgyDQutC+0L7RgNC00LjQvdCw0YIg0LTQsNC90L3QvtCz0L4g0L7Qs9GA0LDQvdC40YfQtdC90LjRjy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5cdNCh0LjRgdGC0LXQvNCwINC60L7QvtGA0LTQuNC90LDRgi5cbiAgICAgKi9cbiAgICBnZXRDb25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbSA9ICgpOiBDb25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25zdHJhaW50Q29vcmRpbmF0ZVN5c3RlbTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHtVdGlsc30gZnJvbSAnLi4vdXRpbHMvVXRpbHMnO1xuaW1wb3J0IHtKb2ludFR5cGV9IGZyb20gJy4vSm9pbnRUeXBlJztcbmltcG9ydCB7VmVjM2Z9IGZyb20gJy4uL3V0aWxzL1ZlYzNmJztcblxuLyoqXG4gKiDQodGD0YHRgtCw0LIsINC+0L/RgNC10LTQtdC70Y/RjtGJ0LjQuSDRg9Cz0LvRiy3QvtCz0YDQsNC90LjRh9C10L3QuNGPINC80LXQttC00YMg0LrQvtGB0YLRj9C80Lgg0YbQtdC/0LguXG4gKiA8cD5cbiAqINCh0YPRidC10YHRgtCy0YPQtdGCINGC0YDQuCDRgtC40L/QsCDRgdGD0YHRgtCw0LLQvtCyOlxuICogPHVsPlxuICogPGxpPkpvaW50VHlwZS5CQUxMIC0g0YHRg9GB0YLQsNCyINCx0YPQtNC10YIg0LLRgNCw0YnQsNGC0YzRgdGPINC90LAg0L7QtNC40L0g0Lgg0YLQvtGCINC20LUg0YPQs9C+0Lsg0LLQviDQstGB0LUg0YHRgtC+0YDQvtC90Ysg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC/0YDQtdC00YvQtNGD0YnQtdC5INC60L7RgdGC0LhcbiAqINCyINGG0LXQv9C4INC40LvQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0LzQuNGA0L7QstC+0Lkg0YHQuNGB0YLQtdC80Ysg0LrQvtC+0YDQtNC40L3QsNGCLCDQsiDRgdC70YPRh9Cw0LUg0LXRgdC70Lgg0Y3RgtC+INC90LDRh9Cw0LvRjNC90LDRjyDQutC+0YHRgtGMINGG0LXQv9C4LDwvbGk+XG4gKiA8bGk+Sm9pbnRUeXBlLkdMT0JBTF9ISU5HRSAtINGB0YPRgdGC0LDQsiwg0LTQu9GPINC60L7RgtC+0YDQvtCz0L4g0LfQsNC00LDQvdGLINGD0LPQu9GLLdC+0LPRgNCw0L3QuNGH0LjRgtC10LvQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0LzQuNGA0L7QstC+0Lkg0YHQuNGB0YLQtdC80Ysg0LrQvtC+0YDQtNC40L3QsNGCXG4gKiDQtNC70Y8g0LLRi9Cx0YDQsNC90L3QvtC5INC+0YHQuCDQv9C+INC4INC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuCw8L2xpPlxuICogPGxpPkpvaW50VHlwZS5MT0NBTF9ISU5HRSAtINGB0YPRgdGC0LDQsiwg0LTQu9GPINC60L7RgtC+0YDQvtCz0L4g0LfQsNC00LDQvdGLINGD0LPQu9GLLdC+0LPRgNCw0L3QuNGH0LjRgtC10LvQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0L/RgNC10LTRi9C00YPRidC10Lkg0LrQvtGB0YLQuFxuICog0LTQu9GPINCy0YvQsdGA0LDQvdC90L7QuSDQvtGB0Lgg0L/QviDQuCDQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LguPC9saT5cbiAqIDwvdWw+XG4gKiDQqNCw0YDQvtCy0L7QuSDRgdGD0YHRgtCw0LIg0LzQvtC20LXRgiDQstGA0LDRidCw0YLRjNGB0Y8g0LIg0LvRjtCx0YPRjiDRgdGC0L7RgNC+0L3RgyDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0L/QvtC70L7QttC10L3QuNGPINC/0YDQtdC00YvQtNGD0YnQtdC5INC60L7RgdGC0Lgg0LIg0YbQtdC/0LguXG4gKiDQo9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C40YLQtdC70Ywg0LIgMTgwINCz0YDQsNC00YPRgdC+0LIg0LHRg9C00LXRgiDQtNCw0LLQsNGC0Ywg0YHRg9GB0YLQsNCy0YMg0L/QvtC70L3Rg9GOINGB0LLQvtCx0L7QtNGDINC00LLQuNC20LXQvdC40Y8sINCwINGD0LPQvtC7INCyIDBcbiAqINCz0YDQsNC00YPRgdC+0LIg0L3QtSDQv9GA0LXQtNGD0YHQvNCw0YLRgNC40LLQsNC10YIg0LTQstC40LbQtdC90LjRjyDRgdC+0LLRgdC10LwsINC00LXQu9Cw0Y8g0YLQtdC60YPRidGD0Y4g0LrQvtGB0YLRjCDQv9GA0L7QtNC+0LvQttC10L3QuNC10Lwg0L/RgNC10LTRi9C00YPRidC10LkuXG4gKiA8cD5cbiAqINCo0LDRgNC90LjRgNC90YvQuSDRgdGD0YHRgtCw0LIg0LzQvtC20LXRgiDQstGA0LDRidCw0YLRjNGB0Y8g0L/QviDQuCDQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60Lgg0LLQtNC+0LvRjCDQutCw0LbQtNC+0Lkg0L7RgdC4INC90LAg0LTQvtC/0YPRgdGC0LjQvNC+0LUg0YfQuNGB0LvQviDQs9GA0LDQtNGD0YHQvtCyIFswLi4xODBdLlxuICog0JvQvtC60LDQu9GM0L3Ri9C5INGI0LDRgNC90LjRgCDQstC10LTQtdGCINC+0YLRgdGH0LXRgiDQs9GA0LDQtNGD0YHQvtCyINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQv9GA0LXQtNGL0LTRg9GJ0LXQuSDQutC+0YHRgtC4INCyINGG0LXQv9C4LFxuICog0LAg0LPQu9C+0LHQsNC70YzQvdGL0LkgLSDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0LzQuNGA0L7QstC+0Lkg0YHQuNGB0YLQtdC80Ysg0LrQvtC+0YDQtNC40L3QsNGCLlxuICogPHA+XG4gKiDQmtCw0LbQtNCw0Y8gRmFicmlrQm9uZTNEINC40LzQtdC10YIg0L7QtNC40L0gRmFicmlrSm9pbnQzRCwg0LrQvtGC0L7RgNGL0Lkg0YDQsNGB0L/QvtC70LDQs9Cw0LXRgtGB0Y8g0LIg0L3QsNGH0LDQu9GM0L3QvtC5INGC0L7Rh9C60LUg0LrQvtGB0YLQuCB7QGNvZGUgbVN0YXJ0TG9jYXRpb259LlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEZhYnJpa0pvaW50M0Qge1xuICAgIC8qKiDQnNC40L3QuNC80LDQu9GM0L3Ri9C5INGD0LPQvtC7LdC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0LTQu9GPINC70Y7QsdC+0LPQviDQuNC3INC90LDQv9GA0LDQstC70LXQvdC40Lkg0LIg0LPRgNCw0LTRg9GB0LDRhS4g0J/QvtC70L3QvtGB0YLRjNGOINC+0LHQtdC30LTQstC40LbQuNCy0LDQtdGCINC60L7RgdGC0YwuICovXG4gICAgc3RhdGljIE1JTl9DT05TVFJBSU5UX0FOR0xFX0RFR1M6IG51bWJlciA9IDAuMDtcblxuICAgIC8qKiDQnNCw0LrRgdC40LzQsNC70YzQvdGL0Lkg0YPQs9C+0Lst0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQtNC70Y8g0LvRjtCx0L7Qs9C+INC40Lcg0L3QsNC/0YDQsNCy0LvQtdC90LjQuSDQsiDQs9GA0LDQtNGD0YHQsNGFLiDQlNCw0ZHRgiDQutC+0YHRgtC4INC/0L7Qu9C90YPRjiDRgdCy0L7QsdC+0LTRgy4gKi9cbiAgICBzdGF0aWMgTUFYX0NPTlNUUkFJTlRfQU5HTEVfREVHUzogbnVtYmVyID0gMTgwLjA7XG5cbiAgICAvKipcbiAgICAgKiDQo9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INCyINCz0YDQsNC00YPRgdCw0YUsINC90LAg0LrQvtGC0L7RgNGL0Lkg0L/QvtC30LLQvtC70Y/QtdGCINC/0L7QstC10YDQvdGD0YLRjNGB0Y8g0YHRg9GB0YLQsNCyICjQtNC70Y8g0YjQsNGA0L7QstGL0YUg0YHRg9GB0YLQsNCy0L7QsikuXG4gICAgICogPHA+XG4gICAgICog0JTQvtC/0YPRgdGC0LjQvNGL0LUg0LfQvdCw0YfQtdC90LjRjyAgWzAuLjE4MF0uXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdCAxODAuMFxuICAgICAqL1xuICAgIHByaXZhdGUgX3JvdG9yQ29uc3RyYWludERlZ3M6IG51bWJlciA9IEZhYnJpa0pvaW50M0QuTUFYX0NPTlNUUkFJTlRfQU5HTEVfREVHUztcblxuICAgIC8qKlxuICAgICAqINCj0LPQvtC7INCyINCz0YDQsNC00YPRgdCw0YUsINC90LAg0LrQvtGC0L7RgNGL0Lkg0YHRg9GB0YLQsNCyINC/0L7Qt9Cy0L7Qu9GP0LXRgiDQv9C+0LLQtdGA0L3Rg9GC0YzRgdGPINC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LVcbiAgICAgKiDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0LLRi9Cx0YDQsNC90L3QvtC5INC+0YHQuCDQuCDRgdC40YHRgtC10LzRiyDQutC+0L7RgNC00LjQvdCw0YIgKNC00LvRjyDRiNCw0YDQvdC40YDQvdGL0YUg0YHRg9GB0YLQsNCy0L7QsikuXG4gICAgICogPHA+XG4gICAgICog0JTQvtC/0YPRgdGC0LjQvNGL0LUg0LfQvdCw0YfQtdC90LjRjyAgWzAuLjE4MF0uXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdCAxODAuMFxuICAgICAqIEBzZWUgbUhpbmdlQXhpc1xuICAgICAqL1xuICAgIHByaXZhdGUgX2hpbmdlQ2xvY2t3aXNlQ29uc3RyYWludERlZ3M6IG51bWJlciA9IEZhYnJpa0pvaW50M0QuTUFYX0NPTlNUUkFJTlRfQU5HTEVfREVHUztcblxuICAgIC8qKlxuICAgICAqINCj0LPQvtC7INCyINCz0YDQsNC00YPRgdCw0YUsINC90LAg0LrQvtGC0L7RgNGL0Lkg0YHRg9GB0YLQsNCyINC/0L7Qt9Cy0L7Qu9GP0LXRgiDQv9C+0LLQtdGA0L3Rg9GC0YzRgdGPINC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuFxuICAgICAqINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQstGL0LHRgNCw0L3QvdC+0Lkg0L7RgdC4INC4INGB0LjRgdGC0LXQvNGLINC60L7QvtGA0LTQuNC90LDRgiAo0LTQu9GPINGI0LDRgNC90LjRgNC90YvRhSDRgdGD0YHRgtCw0LLQvtCyKS5cbiAgICAgKiA8cD5cbiAgICAgKiDQlNC+0L/Rg9GB0YLQuNC80YvQtSDQt9C90LDRh9C10L3QuNGPICBbMC4uMTgwXS5cbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IDE4MC4wXG4gICAgICogQHNlZSBtSGluZ2VBeGlzXG4gICAgICovXG4gICAgcHJpdmF0ZSBfaGluZ2VBbnRpY2xvY2t3aXNlQ29uc3RyYWludERlZ3M6IG51bWJlciA9IEZhYnJpa0pvaW50M0QuTUFYX0NPTlNUUkFJTlRfQU5HTEVfREVHUztcblxuICAgIC8qKiDQntGB0Ywg0LLRgNCw0YnQtdC90LjRjyDRiNCw0YDQvdC40YDQvdC+0LPQviDRgdGD0YHRgtCw0LLQsC4gKi9cbiAgICBwcml2YXRlIF9yb3RhdGlvbkF4aXNVVjogVmVjM2YgPSBuZXcgVmVjM2YoKTtcblxuICAgIC8qKiDQntC/0L7RgNC90LDRjyDQvtGB0Ywg0YjQsNGA0L3QuNGA0L3QvtCz0L4g0YHRg9GB0YLQsNCy0LAuICovXG4gICAgcHJpdmF0ZSBfcmVmZXJlbmNlQXhpc1VWOiBWZWMzZiA9IG5ldyBWZWMzZigpO1xuXG4gICAgLyoqXG4gICAgICog0KLQuNC/INGB0YPRgdGC0LDQstCwLlxuICAgICAqIDxwPlxuICAgICAqINCU0L7Qv9GD0YHRgtC40LzRi9C1INC30L3QsNGH0LXQvdC40Y8gLSBKb2ludFR5cGUuQkFMTCwgSm9pbnRUeXBlLkdMT0JBTF9ISU5HRSDQuNC70LggSm9pbnRUeXBlLkxPQ0FMX0hJTkdFLlxuICAgICAqXG4gICAgICogQGRlZmF1bHRcdEpvaW50VHlwZS5CQUxMXG4gICAgICovXG4gICAgcHJpdmF0ZSBfam9pbnRUeXBlOiBKb2ludFR5cGUgPSBKb2ludFR5cGUuQkFMTDtcblxuICAgIC8vIC0tLS0tLS0tLS0gQ29uc3RydWN0b3JzIC0tLS0tLS0tLS1cblxuICAgIC8qKlxuICAgICAqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAuXG4gICAgICogPHA+XG4gICAgICog0J/RgNC40L3QuNC80LDQtdGCIDIg0LLQvtC30LzQvtC20L3Ri9GFINGB0L7Rh9C10YLQsNC90LjRjyDQv9Cw0YDQsNC80LXRgtGA0L7QsjpcbiAgICAgKiA8cD5cbiAgICAgKiDQkdC10Lcg0L/QsNGA0LDQvNC10YLRgNC+0LIuXG4gICAgICog0JLRgdC1INC/0L7Qu9GPINC/0L7Qu9GD0YfQsNGO0YIg0LfQsNC90YfQtdC90LjRjyDQv9C+INGD0LzQvtC70YfQsNC90LjRji5cbiAgICAgKiDQl9Cw0LTQsNGC0Ywg0L3QtdC00LXRhNC+0LvRgtC90YvQtSDQt9C90LDRh9C10L3QuNGPINC80L7QttC90L4g0YfQtdGA0LXQtyDQvNC10YLQvtC00YtcbiAgICAgKiB7QGxpbmsgI3NldEFzR2xvYmFsSGluZ2UoVmVjM2YsIG51bWJlciwgbnVtYmVyLCBWZWMzZil9INC4XG4gICAgICoge0BsaW5rICNzZXRBc0xvY2FsSGluZ2UoVmVjM2YsIG51bWJlciwgbnVtYmVyLCBWZWMzZil9IG1ldGhvZHMuXG4gICAgICogPHA+XG4gICAgICog0JrQvtC90YHRgtGA0YPQutGC0L7RgCDQutC+0L/QuNGA0L7QstCw0L3QuNGPLlxuICAgICAqINCh0L7Qt9C00LDRkdGCINCz0LvRg9Cx0L7QutGD0Y4g0LrQvtC/0LjRjiDRgdGD0YHRgtCw0LLQsC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzb3VyY2Ug0KHRg9GB0YLQsNCyINC40YHRgtC+0YfQvdC40LouXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc291cmNlPzogRmFicmlrSm9pbnQzRCkgeyBpZiAoc291cmNlKSB0aGlzLnNldChzb3VyY2UpOyB9XG5cbiAgICAvKipcbiAgICAgKiDQlNC10LvQsNC10YIg0LjQtyDQtNCw0L3QvdC+0LPQviDRgdGD0YHRgtCw0LLQsCDQs9C70YPQsdC+0LrRg9GOINC60L7Qv9C40Y4g0YHRg9GB0YLQsNCy0LAt0LjRgdGC0L7Rh9C90LjQutCwLlxuICAgICAqXG4gICAgICogQHBhcmFtXHRzb3VyY2VcdNCh0YPRgdGC0LDQsiDQuNGB0YLQvtGH0L3QuNC6LlxuICAgICAqL1xuICAgIHNldChzb3VyY2U6IEZhYnJpa0pvaW50M0QpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fam9pbnRUeXBlICAgICAgICAgICAgICAgICAgICAgICAgPSBzb3VyY2UuX2pvaW50VHlwZTtcbiAgICAgICAgdGhpcy5fcm90b3JDb25zdHJhaW50RGVncyAgICAgICAgICAgICAgPSBzb3VyY2UuX3JvdG9yQ29uc3RyYWludERlZ3M7XG4gICAgICAgIHRoaXMuX2hpbmdlQ2xvY2t3aXNlQ29uc3RyYWludERlZ3MgICAgID0gc291cmNlLl9oaW5nZUNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzO1xuICAgICAgICB0aGlzLl9oaW5nZUFudGljbG9ja3dpc2VDb25zdHJhaW50RGVncyA9IHNvdXJjZS5faGluZ2VBbnRpY2xvY2t3aXNlQ29uc3RyYWludERlZ3M7XG5cbiAgICAgICAgdGhpcy5fcm90YXRpb25BeGlzVVYuc2V0KHNvdXJjZS5fcm90YXRpb25BeGlzVVYpO1xuICAgICAgICB0aGlzLl9yZWZlcmVuY2VBeGlzVVYuc2V0KHNvdXJjZS5fcmVmZXJlbmNlQXhpc1VWKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNGR0YIg0LTQsNC90L3QvtC80YMg0YHRg9GB0YLQsNCy0YMg0YjQsNGA0L7QstC+0Lkg0YLQuNC/LlxuICAgICAqXG4gICAgICogQHBhcmFtXHRjb25zdHJhaW50QW5nbGVEZWdzXHTQnNCw0LrRgdC40LzQsNC70YzQvdGL0Lkg0LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YPQs9C+0Lsg0LIg0LPRgNCw0LTRg9GB0LDRhSDQvNC10LbQtNGDINC60L7RgdGC0YzRjiDRgdGD0YHRgtCw0LLQsCDQuCDQv9GA0LXQtNGL0LTRg9GJ0LXQuSDQutC+0YHRgtGM0Y4g0LIg0YbQtdC/0LguXG4gICAgICovXG4gICAgc2V0QXNCYWxsSm9pbnQoY29uc3RyYWludEFuZ2xlRGVnczogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIEZhYnJpa0pvaW50M0QuX3ZhbGlkYXRlQ29uc3RyYWludEFuZ2xlRGVncyhjb25zdHJhaW50QW5nbGVEZWdzKTtcblxuICAgICAgICB0aGlzLl9yb3RvckNvbnN0cmFpbnREZWdzID0gY29uc3RyYWludEFuZ2xlRGVncztcbiAgICAgICAgdGhpcy5fam9pbnRUeXBlID0gSm9pbnRUeXBlLkJBTEw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JfQsNC00LDRkdGCINC00LDQvdC90L7QvNGDINGB0YPRgdGC0LDQstGDINGI0LDRgNC90LjRgNC90YvQuSDRgtC40L8uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gam9pbnRUeXBlXHRcdFx0XHRcdFx00KLQuNC/INGB0YPRgdGC0LDQstCwLCDQtNC+0L/Rg9GB0YLQuNC80Ysg0LggQkFMTCwg0LggR0xPQkFMX0hJTkdFLCDQuCBMT0NBTF9ISU5HRS5cbiAgICAgKiBAcGFyYW0gcm90YXRpb25BeGlzXHRcdFx0XHRcdNCe0YHRjCDQstGA0LDRidC10L3QuNGPINGI0LDRgNC90LjRgNCwLlxuICAgICAqIEBwYXJhbSBjbG9ja3dpc2VDb25zdHJhaW50RGVnc1x0XHTQo9Cz0L7QuyDQvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC+0L/QvtGA0L3QvtC5INC+0YHQuC5cbiAgICAgKiBAcGFyYW0gYW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzXHTQo9Cz0L7QuyDQvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0L7Qv9C+0YDQvdC+0Lkg0L7RgdC4LlxuICAgICAqIEBwYXJhbSByZWZlcmVuY2VBeGlzXHRcdFx0XHRcdNCe0L/QvtGA0L3QsNGPINC+0YHRjC5cbiAgICAgKi9cbiAgICBzZXRIaW5nZUpvaW50KGpvaW50VHlwZTogSm9pbnRUeXBlLCByb3RhdGlvbkF4aXM6IFZlYzNmLCBjbG9ja3dpc2VDb25zdHJhaW50RGVnczogbnVtYmVyLCBhbnRpY2xvY2t3aXNlQ29uc3RyYWludERlZ3M6IG51bWJlciwgcmVmZXJlbmNlQXhpczogVmVjM2YpOiB2b2lkIHtcbiAgICAgICAgLy8g0KPQsdC10LTQuNC80YHRjywg0YfRgtC+INC+0YHRjCDQstGA0LDRidC10L3QuNGPINC4INC+0L/QvtGA0L3QsNGPINC+0YHRjCDQvtCx0YDQsNC30YPRjtGCINC/0LvQvtGB0LrQvtGB0YLRjCAo0YIuINC6LiDQvtC90Lgg0LzQvtCz0YPRgiDQsdGL0YLRjCDQv9C10YDQv9C10L3QtNC40LrRg9C70Y/RgNC90Ysg0Lgg0LjRhSDRgdC60LDQu9GP0YDQvdC+0LUg0L/RgNC+0LjQt9Cy0LXQtNC10L3QuNC1INGA0LDQstC90L4gMClcbiAgICAgICAgaWYgKCAhVXRpbHMuYXBwcm94aW1hdGVseUVxdWFscyggVmVjM2YuZG90UHJvZHVjdChyb3RhdGlvbkF4aXMsIHJlZmVyZW5jZUF4aXMpLCAwLjAsIDAuMDEpICkge1xuICAgICAgICAgICAgY29uc3QgYW5nbGVEZWdzID0gVmVjM2YuZ2V0QW5nbGVCZXR3ZWVuRGVncyhyb3RhdGlvbkF4aXMsIHJlZmVyZW5jZUF4aXMpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcmVmZXJlbmNlIGF4aXMgbXVzdCBiZSBpbiB0aGUgcGxhbmUgb2YgdGhlIGhpbmdlIHJvdGF0aW9uIGF4aXMgLSBhbmdsZSBiZXR3ZWVuIHRoZW0gaXMgY3VycmVudGx5OiAnICsgYW5nbGVEZWdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEZhYnJpa0pvaW50M0QuX3ZhbGlkYXRlQ29uc3RyYWludEFuZ2xlRGVncyhjbG9ja3dpc2VDb25zdHJhaW50RGVncyk7XG4gICAgICAgIEZhYnJpa0pvaW50M0QuX3ZhbGlkYXRlQ29uc3RyYWludEFuZ2xlRGVncyhhbnRpY2xvY2t3aXNlQ29uc3RyYWludERlZ3MpO1xuICAgICAgICBGYWJyaWtKb2ludDNELl92YWxpZGF0ZUF4aXMocm90YXRpb25BeGlzKTtcbiAgICAgICAgRmFicmlrSm9pbnQzRC5fdmFsaWRhdGVBeGlzKHJlZmVyZW5jZUF4aXMpO1xuXG4gICAgICAgIHRoaXMuX2hpbmdlQ2xvY2t3aXNlQ29uc3RyYWludERlZ3MgICAgID0gY2xvY2t3aXNlQ29uc3RyYWludERlZ3M7XG4gICAgICAgIHRoaXMuX2hpbmdlQW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzID0gYW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzO1xuICAgICAgICB0aGlzLl9qb2ludFR5cGUgICAgICAgICAgICAgICAgICAgICAgICA9IGpvaW50VHlwZTtcbiAgICAgICAgdGhpcy5fcm90YXRpb25BeGlzVVYuc2V0KCAgcm90YXRpb25BeGlzLm5vcm1hbGlzZWQoKSAgKTtcbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlQXhpc1VWLnNldCggcmVmZXJlbmNlQXhpcy5ub3JtYWxpc2VkKCkgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNGR0YIg0YPQs9C+0Lsg0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQv9C+INGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC1INC00LvRjyDRiNCw0YDQvdC40YDQvdC+0LPQviDRgdGD0YHRgtCw0LLQsC5cbiAgICAgKiA8cD5cbiAgICAgKiDQktGL0LfRi9Cy0LDQtdGCINC+0YjQuNCx0LrQuCwg0LXRgdC70Lgg0YPQs9C+0Lsg0LLRi9GF0L7QtNC40YIg0LfQsCDQs9GA0LDQvdC40YbRiyDQtNC+0L/Rg9GB0YLQuNC80YvRhSDQt9C90LDRh9C10L3QuNC5INC4XG4gICAgICog0LXRgdC70Lgg0YLQuNC/INGB0YPRgdGC0LDQstCwINC90LUg0YjQsNGA0L3QuNGA0L3Ri9C5LlxuICAgICAqXG4gICAgICogQHBhcmFtICAgIGFuZ2xlRGVncyAgICDQo9Cz0L7QuyDQvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUg0LIg0LPRgNCw0LTRg9GB0LDRhS5cbiAgICAgKi9cbiAgICBzZXRIaW5nZUpvaW50Q2xvY2t3aXNlQ29uc3RyYWludERlZ3MoYW5nbGVEZWdzOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgRmFicmlrSm9pbnQzRC5fdmFsaWRhdGVDb25zdHJhaW50QW5nbGVEZWdzKGFuZ2xlRGVncyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2pvaW50VHlwZSAhPT0gSm9pbnRUeXBlLkJBTEwpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpbmdlQ2xvY2t3aXNlQ29uc3RyYWludERlZ3MgPSBhbmdsZURlZ3M7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pvaW50IHR5cGUgaXMgSm9pbnRUeXBlLkJBTEwgLSBpdCBkb2VzIG5vdCBoYXZlIGhpbmdlIGNvbnN0cmFpbnQgYW5nbGVzLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YPQs9C+0Lst0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQv9C+INGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC1INC00LvRjyDRiNCw0YDQvdC40YDQvdC+0LPQviDRgdGD0YHRgtCw0LLQsC5cbiAgICAgKiA8cD5cbiAgICAgKiDQktGL0LfRi9Cy0LDQtdGCINC+0YjQuNCx0LrRgywg0LXRgdC70Lgg0YLQuNC/INGB0YPRgdGC0LDQstCwINC90LUg0YjQsNGA0L3QuNGA0L3Ri9C5LlxuICAgICAqXG4gICAgICogQHJldHVybiDQo9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUg0LIg0LPRgNCw0LTRg9GB0LDRhS5cbiAgICAgKi9cbiAgICBnZXRIaW5nZUNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKCk6IG51bWJlciB7XG4gICAgICAgIGlmICggdGhpcy5fam9pbnRUeXBlICE9PSBKb2ludFR5cGUuQkFMTCApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oaW5nZUNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdKb2ludCB0eXBlIGlzIEpvaW50VHlwZS5CQUxMIC0gaXQgZG9lcyBub3QgaGF2ZSBoaW5nZSBjb25zdHJhaW50IGFuZ2xlcy4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCX0LDQtNCw0ZHRgiDRg9Cz0L7QuyDQvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuCDQtNC70Y8g0YjQsNGA0L3QuNGA0L3QvtCz0L4g0YHRg9GB0YLQsNCy0LAuXG4gICAgICogPHA+XG4gICAgICog0JLRi9C30YvQstCw0LXRgiDQvtGI0LjQsdC60LgsINC10YHQu9C4INGD0LPQvtC7INCy0YvRhdC+0LTQuNGCINC30LAg0LPRgNCw0L3QuNGG0Ysg0LTQvtC/0YPRgdGC0LjQvNGL0YUg0LfQvdCw0YfQtdC90LjQuSDQuFxuICAgICAqINC10YHQu9C4INGC0LjQvyDRgdGD0YHRgtCw0LLQsCDQvdC1INGI0LDRgNC90LjRgNC90YvQuS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgICBhbmdsZURlZ3MgICAg0KPQs9C+0Lsg0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60Lgg0LIg0LPRgNCw0LTRg9GB0LDRhS5cbiAgICAgKi9cbiAgICBzZXRIaW5nZUpvaW50QW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKGFuZ2xlRGVnczogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIEZhYnJpa0pvaW50M0QuX3ZhbGlkYXRlQ29uc3RyYWludEFuZ2xlRGVncyhhbmdsZURlZ3MpO1xuXG4gICAgICAgIGlmICh0aGlzLl9qb2ludFR5cGUgIT09IEpvaW50VHlwZS5CQUxMKSB7XG4gICAgICAgICAgICB0aGlzLl9oaW5nZUFudGljbG9ja3dpc2VDb25zdHJhaW50RGVncyA9IGFuZ2xlRGVncztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSm9pbnQgdHlwZSBpcyBKb2ludFR5cGUuQkFMTCAtIGl0IGRvZXMgbm90IGhhdmUgaGluZ2UgY29uc3RyYWludCBhbmdsZXMuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDRg9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuCDQtNC70Y8g0YjQsNGA0L3QuNGA0L3QvtCz0L4g0YHRg9GB0YLQsNCy0LAuXG4gICAgICogPHA+XG4gICAgICog0JLRi9C30YvQstCw0LXRgiDQvtGI0LjQsdC60YMsINC10YHQu9C4INGC0LjQvyDRgdGD0YHRgtCw0LLQsCDQvdC1INGI0LDRgNC90LjRgNC90YvQuS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4g0KPQs9C+0Lst0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60Lgg0LIg0LPRgNCw0LTRg9GB0LDRhS5cbiAgICAgKi9cbiAgICBnZXRIaW5nZUFudGljbG9ja3dpc2VDb25zdHJhaW50RGVncygpIHtcbiAgICAgICAgaWYgKCB0aGlzLl9qb2ludFR5cGUgIT09IEpvaW50VHlwZS5CQUxMICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hpbmdlQW50aWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdKb2ludCB0eXBlIGlzIEpvaW50VHlwZS5CQUxMIC0gaXQgZG9lcyBub3QgaGF2ZSBoaW5nZSBjb25zdHJhaW50IGFuZ2xlcy4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCX0LDQtNCw0ZHRgiDRg9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC00LvRjyDRiNCw0YDQvtCy0L7Qs9C+INGB0YPRgdGC0LDQstCwLlxuICAgICAqIDxwPlxuICAgICAqINCS0YvQt9GL0LLQsNC10YIg0L7RiNC40LHQutGDLCDQtdGB0LvQuCDRgtC40L8g0YHRg9GB0YLQsNCy0LAg0L3QtSDRiNCw0YDQvtCy0L7QuSDQuNC70LhcbiAgICAgKiDRg9Cz0L7QuyDQstGL0YXQvtC00LjRgiDQt9CwINCz0YDQsNC90LjRhtGLINC00L7Qv9GD0YHRgtC40LzRi9GFINC30L3QsNGH0LXQvdC40LkuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdGFuZ2xlRGVnc1x00KPQs9C+0Lst0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQsiDQs9GA0LDQtNGD0YHQsNGFLlxuICAgICAqL1xuICAgIHNldEJhbGxKb2ludENvbnN0cmFpbnREZWdzKGFuZ2xlRGVnczogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIEZhYnJpa0pvaW50M0QuX3ZhbGlkYXRlQ29uc3RyYWludEFuZ2xlRGVncyhhbmdsZURlZ3MpO1xuXG4gICAgICAgIGlmICh0aGlzLl9qb2ludFR5cGUgPT09IEpvaW50VHlwZS5CQUxMKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3RvckNvbnN0cmFpbnREZWdzID0gYW5nbGVEZWdzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGpvaW50IGlzIG9mIHR5cGU6ICcgKyB0aGlzLl9qb2ludFR5cGUgKyAnIC0gb25seSBqb2ludHMgb2YgdHlwZSBKb2ludFR5cGUuQkFMTCBoYXZlIGEgYmFsbCBqb2ludCBjb25zdHJhaW50IGFuZ2xlLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YPQs9C+0Lsg0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDRiNCw0YDQvtCy0L7Qs9C+INGB0YPRgdGC0LDQstCwLlxuICAgICAqIDxwPlxuICAgICAqINCS0YvQt9GL0LLQsNC10YIg0L7RiNC40LHQutGDLCDQtdGB0LvQuCDRgtC40L8g0YHRg9GB0YLQsNCy0LAg0L3QtSDRiNCw0YDQvtCy0L7QuVxuICAgICAqXG4gICAgICogQHJldHVyblx00KPQs9C+0Lst0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQsiDQs9GA0LDQtNGD0YHQsNGFLlxuICAgICAqL1xuICAgIGdldEJhbGxKb2ludENvbnN0cmFpbnREZWdzKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9qb2ludFR5cGUgPT09IEpvaW50VHlwZS5CQUxMKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcm90b3JDb25zdHJhaW50RGVncztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBqb2ludCBpcyBub3Qgb2YgdHlwZSBKb2ludFR5cGUuQkFMTCAtIGl0IGRvZXMgbm90IGhhdmUgYSBiYWxsIGpvaW50IGNvbnN0cmFpbnQgYW5nbGUuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNGR0YIg0L7RgdGMINCy0YDQsNGJ0LXQvdC40Y8g0YjQsNGA0L3QuNGA0L3QvtCz0L4g0YHRg9GB0YLQsNCy0LAg0LrQsNC6INC90L7RgNC80LDQu9C40LfQvtCy0LDQvdC90YPRjiDQstC10YDRgdC40Y4g0LjRgdGF0L7QtNC90L7QuSDQvtGB0LguXG4gICAgICogPHA+XG4gICAgICog0JLRi9C30YvQstCw0LXRgiDQvtGI0LjQsdC60LgsINC10YHQu9C4INC/0LXRgNC10LTQsNC90L3QsNGPINC+0YHRjCDQuNC80LXQtdGCINC90YPQu9C10LLRg9GOINC00LvQuNC90YMg0Lgg0LXRgdC70Lgg0YLQuNC/INGB0YPRgdGC0LDQstCwINC90LUg0YjQsNGA0L3QuNGA0L3Ri9C5LlxuICAgICAqXG4gICAgICogQHBhcmFtIGF4aXNcdNCe0YHRjCDQstGA0LDRidC10L3QuNGPLlxuICAgICAqL1xuICAgIHNldEhpbmdlUm90YXRpb25BeGlzKGF4aXM6IFZlYzNmKTogdm9pZCB7XG4gICAgICAgIEZhYnJpa0pvaW50M0QuX3ZhbGlkYXRlQXhpcyhheGlzKTtcblxuICAgICAgICBpZiAoIHRoaXMuX2pvaW50VHlwZSAhPT0gSm9pbnRUeXBlLkJBTEwgKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3RhdGlvbkF4aXNVVi5zZXQoIGF4aXMubm9ybWFsaXNlZCgpICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pvaW50IHR5cGUgaXMgSm9pbnRUeXBlLkJBTEwgLSBpdCBkb2VzIG5vdCBoYXZlIGEgaGluZ2Ugcm90YXRpb24gYXhpcy4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC+0L/QvtGA0L3Rg9GOINC+0YHRjCDRiNCw0YDQvdC40YDQvdC+0LPQviDRgdGD0YHRgtCw0LLQsC5cbiAgICAgKiA8cD5cbiAgICAgKiDQldGB0LvQuCDRgtC40L8g0YHRg9GB0YLQsNCy0LAg0L3QtSDRiNCw0YDQvdC40YDQvdGL0LksINCy0YvQsdGA0LDRgdGL0LLQsNC10YLRgdGPINC+0YjQuNCx0LrQsC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5cdNCe0L/QvtGA0L3QsNGPINC+0YHRjC5cbiAgICAgKi9cbiAgICBnZXRIaW5nZVJlZmVyZW5jZUF4aXMoKTogVmVjM2Yge1xuICAgICAgICBpZiAoIHRoaXMuX2pvaW50VHlwZSAhPT0gSm9pbnRUeXBlLkJBTEwgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVmZXJlbmNlQXhpc1VWO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdKb2ludCB0eXBlIGlzIEpvaW50VHlwZS5CQUxMIC0gaXQgZG9lcyBub3QgaGF2ZSBhIGhpbmdlIHJlZmVyZW5jZSBheGlzLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JfQsNC00LDRkdGCINC+0L/QvtGA0L3Rg9GOINC+0YHRjCDRiNCw0YDQvdC40YDQvdC+0LPQviDRgdGD0YHRgtCw0LLQsCwg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC60L7RgtC+0YDQvtC5INC40LfQvNC10YDRj9C10YLRgdGPINGD0LPQvtC7INCy0YDQsNGJ0LXQvdC40Y8g0YHRg9GB0YLQsNCy0LAuXG4gICAgICogPHA+XG4gICAgICog0JLRi9C30YvQstCw0LXRgiDQvtGI0LjQsdC60LgsINC10YHQu9C4INC/0LXRgNC10LTQsNC90L3QsNGPINC+0YHRjCDQuNC80LXQtdGCINC90YPQu9C10LLRg9GOINC00LvQuNC90YMg0Lgg0LXRgdC70Lgg0YLQuNC/INGB0YPRgdGC0LDQstCwINC90LUg0YjQsNGA0L3QuNGA0L3Ri9C5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlZmVyZW5jZUF4aXNcdNCe0L/QvtGA0L3QsNGPINC+0YHRjC5cbiAgICAgKi9cbiAgICBzZXRIaW5nZVJlZmVyZW5jZUF4aXMocmVmZXJlbmNlQXhpczogVmVjM2YpOiB2b2lkIHtcbiAgICAgICAgRmFicmlrSm9pbnQzRC5fdmFsaWRhdGVBeGlzKHJlZmVyZW5jZUF4aXMpO1xuXG4gICAgICAgIGlmICggdGhpcy5fam9pbnRUeXBlICE9PSBKb2ludFR5cGUuQkFMTCApIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZUF4aXNVVi5zZXQoIHJlZmVyZW5jZUF4aXMubm9ybWFsaXNlZCgpICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pvaW50IHR5cGUgaXMgSm9pbnRUeXBlLkJBTEwgLSBpdCBkb2VzIG5vdCBoYXZlIGEgaGluZ2UgcmVmZXJlbmNlIGF4aXMuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQvtGB0Ywg0LLRgNCw0YnQtdC90LjRjyDRiNCw0YDQvdC40YDQvdC+0LPQviDRgdGD0YHRgtCw0LLQsC5cbiAgICAgKiA8cD5cbiAgICAgKiDQldGB0LvQuCDRgyDRgdGD0YHRgtCw0LLQsCDRgtC40L8gSm9pbnRUeXBlLkJBTEwgKNGCLtC1LiDQvtC9INC90LUg0YjQsNGA0L3QuNGA0L3Ri9C5KSDQsdGA0L7RgdCw0Lwg0L7RiNC40LHQutGDLlxuICAgICAqXG4gICAgICogQHJldHVyblx00J7RgdGMINCy0YDQsNGJ0LXQvdC40Y8g0YjQsNGA0L3QuNGA0L3QvtCz0L4g0YHRg9GB0YLQsNCy0LAuXG4gICAgICovXG4gICAgZ2V0SGluZ2VSb3RhdGlvbkF4aXMoKTogVmVjM2Yge1xuICAgICAgICBpZiAoIHRoaXMuX2pvaW50VHlwZSAhPT0gSm9pbnRUeXBlLkJBTEwgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcm90YXRpb25BeGlzVVY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pvaW50IHR5cGUgaXMgSm9pbnRUeXBlLkJBTEwgLSBpdCBkb2VzIG5vdCBoYXZlIGEgaGluZ2Ugcm90YXRpb24gYXhpcy4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGC0LjQvyDRgdGD0YHRgtCw0LLQsC5cbiAgICAgKiA8cD5cbiAgICAgKiDQlNC+0L/Rg9GB0YLQuNC80YvQtSDQt9C90LDRh9C10L3QuNGPOiBKb2ludFR5cGUuQkFMTCwgSm9pbnRUeXBlLkdMT0JBTF9ISU5HRSwgSm9pbnRUeXBlLkxPQ0FMX0hJTkdFLlxuICAgICAqXG4gICAgICogQHJldHVyblx00KLQuNC/INGB0YPRgdGC0LDQstCwLlxuICAgICAqL1xuICAgIGdldEpvaW50VHlwZSgpOiBKb2ludFR5cGUgeyByZXR1cm4gdGhpcy5fam9pbnRUeXBlOyB9XG5cbiAgICAvLyAtLS0tLS0tLS0tIFByaXZhdGUgTWV0aG9kcyAtLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgX3ZhbGlkYXRlQ29uc3RyYWludEFuZ2xlRGVncyhhbmdsZURlZ3M6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoYW5nbGVEZWdzIDwgRmFicmlrSm9pbnQzRC5NSU5fQ09OU1RSQUlOVF9BTkdMRV9ERUdTIHx8IGFuZ2xlRGVncyA+IEZhYnJpa0pvaW50M0QuTUFYX0NPTlNUUkFJTlRfQU5HTEVfREVHUykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb25zdHJhaW50IGFuZ2xlcyBtdXN0IGJlIHdpdGhpbiB0aGUgcmFuZ2UgJyArIEZhYnJpa0pvaW50M0QuTUlOX0NPTlNUUkFJTlRfQU5HTEVfREVHUyArICcgdG8gJyArIEZhYnJpa0pvaW50M0QuTUFYX0NPTlNUUkFJTlRfQU5HTEVfREVHUyArICcgaW5jbHVzaXZlLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIF92YWxpZGF0ZUF4aXMoYXhpczogVmVjM2YpOiB2b2lkIHtcbiAgICAgICAgaWYgKCBheGlzLmxlbmd0aCgpIDw9IDAuMCApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUHJvdmlkZWQgYXhpcyBpcyBpbGxlZ2FsIC0gaXQgaGFzIGEgbWFnbml0dWRlIG9mIHplcm8uJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge1ZlYzJmfSBmcm9tICcuLi91dGlscy9WZWMyZic7XG5pbXBvcnQge0ZhYnJpa0NoYWluMkR9IGZyb20gJy4vRmFicmlrQ2hhaW4yRCc7XG5pbXBvcnQge0JvbmVDb25uZWN0aW9uUG9pbnR9IGZyb20gJy4vQm9uZUNvbm5lY3Rpb25Qb2ludCc7XG5pbXBvcnQge0Jhc2Vib25lQ29uc3RyYWludFR5cGUyRH0gZnJvbSAnLi9CYXNlYm9uZUNvbnN0cmFpbnRUeXBlMkQnO1xuXG4vKipcbiAqINCd0LDQsdC+0YAgMkQg0YbQtdC/0LXQuS5cbiAqKi9cbmV4cG9ydCBjbGFzcyBGYWJyaWtTdHJ1Y3R1cmUyRCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgVVA6IFZlYzJmID0gbmV3IFZlYzJmKDAuMCwgMS4wKTtcblxuICAgIC8vIC0tLS0tLS0tLS0gUHJpdmF0ZSBQcm9wZXJ0aWVzIC0tLS0tLS0tLS1cblxuICAgIC8qKiDQndCw0LfQstCw0L3QuNC1INGB0YLRgNGD0LrRgtGD0YDRiy4gKi9cbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmcgPSAnJztcblxuICAgIC8qKiDQodC/0LjRgdC+0Log0YbQtdC/0LXQuS4gKi9cbiAgICBwcml2YXRlIF9jaGFpbnM6IEZhYnJpa0NoYWluMkRbXSA9IFtdO1xuXG4gICAgLy8gLS0tLS0tLS0tIFB1YmxpYyBNZXRob2RzIC0tLS0tLS0tLS1cblxuICAgIC8qKiDQmtC+0L3RgdGC0YDRg9C60YLQvtGALlxuICAgICAqINCf0YDQuNC90LjQvNCw0LXRgiDQtNCy0LAg0LLQsNGA0LjQsNC90YLQsCDQt9C90LDRh9C10L3QuNC5OlxuICAgICAqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0LHQtdC3INC/0LDRgNCw0LzQtdGC0YDQvtCyIC0g0LfQsNC00LDQtdGCINCy0YHQtdC8INC/0L7Qu9GP0Lwg0LfQvdCw0YfQtdC90LjRjyDQv9C+INGD0LzQvtC70YfQsNC90LjRji5cbiAgICAgKlxuICAgICAqINCe0LTQuNC9INC/0LDRgNCw0LzQtdGC0YAuINCX0LDQtNCw0LXRgiDQuNC80Y8g0YHRgtGA0YPQutGC0YPRgNGLLlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUg0JjQvNGPINGB0YLRgNGD0LrRgtGD0YDRiy5cbiAgICAgKiAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZyA9ICcnKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXROYW1lKG5hbWU6IHN0cmluZyk6IHZvaWQgeyB0aGlzLl9uYW1lID0gbmFtZTsgfVxuXG4gICAgLyoqXG4gICAgICog0KDQtdGI0LDQtdGCINC30LDQtNCw0YfRgyDQmNCaINC00LvRjyDQstGB0LXRhSDRhtC10L/QtdC5INGB0YLRgNGD0LrRgtGD0YDRiy5cbiAgICAgKiA8cD5cbiAgICAgKiDQktGB0LUg0YbQtdC/0Lgg0L/QtdGA0LXQvNC10YnQsNGO0YLRgdGPINC6INC10LTQuNC90L7QuSDRhtC10LvQtdCy0L7QuSDQv9C+0LfQuNGG0LjQuCDQt9CwINC40YHQutC70Y7Rh9C10L3QuNC10Lwg0YLQtdGFLCDQtNC70Y8g0LrQvtGC0L7RgNGL0YUg0LfQsNC00LDQvSBlbWJlZGRlZFRhcmdldE1vZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICBuZXdUYXJnZXRMb2NhdGlvbiAgICDQptC10LvQtdCy0LDRjyDQv9C+0LfQuNGG0LjRjyDQtNC70Y8g0LLRgdC10YUg0Y3RhNGE0LXQutGC0L7RgNC+0LIg0YHRgtGA0YPQutGC0YPRgNGLLlxuICAgICAqL1xuICAgIHB1YmxpYyBzb2x2ZUZvclRhcmdldChuZXdUYXJnZXRMb2NhdGlvbjogVmVjMmYpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbnVfY2hhaW5zID0gdGhpcy5fY2hhaW5zLmxlbmd0aDtcbiAgICAgICAgbGV0IGhvc3RDaGFpbk51bWJlcjogbnVtYmVyO1xuICAgICAgICBsZXQgdGhpc0NoYWluOiBGYWJyaWtDaGFpbjJEO1xuXG5cbiAgICAgICAgZm9yIChsZXQgbG9vcCA9IDA7IGxvb3AgPCBudV9jaGFpbnM7ICsrbG9vcCkge1xuICAgICAgICAgICAgdGhpc0NoYWluID0gdGhpcy5fY2hhaW5zW2xvb3BdO1xuXG4gICAgICAgICAgICBob3N0Q2hhaW5OdW1iZXIgPSB0aGlzQ2hhaW4uZ2V0Q29ubmVjdGVkQ2hhaW5OdW1iZXIoKTtcblxuICAgICAgICAgICAgY29uc3QgY29uc3RyYWludFR5cGUgPSB0aGlzQ2hhaW4uZ2V0QmFzZWJvbmVDb25zdHJhaW50VHlwZSgpO1xuXG4gICAgICAgICAgICBpZiAoaG9zdENoYWluTnVtYmVyICE9PSAtMSAmJiBjb25zdHJhaW50VHlwZSAhPT0gQmFzZWJvbmVDb25zdHJhaW50VHlwZTJELkdMT0JBTF9BQlNPTFVURSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvc3RCb25lID0gdGhpcy5fY2hhaW5zW2hvc3RDaGFpbk51bWJlcl0uZ2V0Qm9uZSh0aGlzLl9jaGFpbnNbbG9vcF0uZ2V0Q29ubmVjdGVkQm9uZU51bWJlcigpKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzQ2hhaW4uZ2V0Qm9uZUNvbm5lY3Rpb25Qb2ludCgpID09IEJvbmVDb25uZWN0aW9uUG9pbnQuU1RBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0NoYWluLnNldEJhc2VMb2NhdGlvbihob3N0Qm9uZS5nZXRTdGFydExvY2F0aW9uKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0NoYWluLnNldEJhc2VMb2NhdGlvbihob3N0Qm9uZS5nZXRFbmRMb2NhdGlvbigpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBob3N0Qm9uZVVWID0gaG9zdEJvbmUuZ2V0RGlyZWN0aW9uVVYoKTtcbiAgICAgICAgICAgICAgICBpZiAoY29uc3RyYWludFR5cGUgPT0gQmFzZWJvbmVDb25zdHJhaW50VHlwZTJELkxPQ0FMX1JFTEFUSVZFKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYWluc1tsb29wXS5zZXRCYXNlYm9uZUNvbnN0cmFpbnRVVihob3N0Qm9uZVVWKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29uc3RyYWludFR5cGUgPT0gQmFzZWJvbmVDb25zdHJhaW50VHlwZTJELkxPQ0FMX0FCU09MVVRFKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlRGVncyA9IEZhYnJpa1N0cnVjdHVyZTJELlVQLmdldFNpZ25lZEFuZ2xlRGVnc1RvKGhvc3RCb25lVVYpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0aXZlQ29uc3RyYWludFVWID0gVmVjMmYucm90YXRlRGVncyh0aGlzQ2hhaW4uZ2V0QmFzZWJvbmVDb25zdHJhaW50VVYoKSwgYW5nbGVEZWdzKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzQ2hhaW4uc2V0QmFzZWJvbmVSZWxhdGl2ZUNvbnN0cmFpbnRVVihyZWxhdGl2ZUNvbnN0cmFpbnRVVik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXNDaGFpbi5nZXRFbWJlZGRlZFRhcmdldE1vZGUoKSkge1xuICAgICAgICAgICAgICAgIHRoaXNDaGFpbi5zb2x2ZUZvclRhcmdldChuZXdUYXJnZXRMb2NhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzQ2hhaW4uc29sdmVGb3JFbWJlZGRlZFRhcmdldCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGFkZENoYWluKGNoYWluOiBGYWJyaWtDaGFpbjJEKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NoYWlucy5wdXNoKGNoYWluKTtcbiAgICB9XG5cbiAgICBjb25uZWN0Q2hhaW4oY2hhaW46IEZhYnJpa0NoYWluMkQsIGNoYWluTnVtYmVyOiBudW1iZXIsIGJvbmVOdW1iZXI6IG51bWJlciwgYm9uZUNvbm5lY3Rpb25Qb2ludDogQm9uZUNvbm5lY3Rpb25Qb2ludCwgc2hvdWxkQ2FsY0Nvb3JkaW5hdGVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGNoYWluLnNldEJvbmVDb25uZWN0aW9uUG9pbnQoYm9uZUNvbm5lY3Rpb25Qb2ludCk7XG4gICAgICAgIGlmIChjaGFpbk51bWJlciA+PSB0aGlzLl9jaGFpbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjb25uZWN0IHRvIGNoYWluICcgKyBjaGFpbk51bWJlciArICcgLSBubyBzdWNoIGNoYWluIChyZW1lbWJlciB0aGF0IGNoYWlucyBhcmUgemVybyBpbmRleGVkKS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib25lTnVtYmVyID49IHRoaXMuX2NoYWluc1tjaGFpbk51bWJlcl0uZ2V0TnVtQm9uZXMoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY29ubmVjdCB0byBib25lICcgKyBib25lTnVtYmVyICsgJyBvZiBjaGFpbiAnICsgY2hhaW5OdW1iZXIgKyAnIC0gbm8gc3VjaCBib25lIChyZW1lbWJlciB0aGF0IGJvbmVzIGFyZSB6ZXJvIGluZGV4ZWQpLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVsYXRpdmVDaGFpbiA9IG5ldyBGYWJyaWtDaGFpbjJEKGNoYWluKTtcbiAgICAgICAgcmVsYXRpdmVDaGFpbi5zZXRDb25uZWN0ZWRDaGFpbk51bWJlcihjaGFpbk51bWJlcik7XG4gICAgICAgIHJlbGF0aXZlQ2hhaW4uc2V0Q29ubmVjdGVkQm9uZU51bWJlcihib25lTnVtYmVyKTtcblxuICAgICAgICBjb25zdCBjb25uZWN0aW9uUG9pbnQgPSBjaGFpbi5nZXRCb25lQ29ubmVjdGlvblBvaW50KCk7XG4gICAgICAgIGxldCBjb25uZWN0aW9uTG9jYXRpb247XG4gICAgICAgIGlmIChjb25uZWN0aW9uUG9pbnQgPT0gQm9uZUNvbm5lY3Rpb25Qb2ludC5TVEFSVCkge1xuICAgICAgICAgICAgY29ubmVjdGlvbkxvY2F0aW9uID0gdGhpcy5fY2hhaW5zW2NoYWluTnVtYmVyXS5nZXRCb25lKGJvbmVOdW1iZXIpLmdldFN0YXJ0TG9jYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbm5lY3Rpb25Mb2NhdGlvbiA9IHRoaXMuX2NoYWluc1tjaGFpbk51bWJlcl0uZ2V0Qm9uZShib25lTnVtYmVyKS5nZXRFbmRMb2NhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIHJlbGF0aXZlQ2hhaW4uc2V0QmFzZUxvY2F0aW9uKGNvbm5lY3Rpb25Mb2NhdGlvbik7XG5cbiAgICAgICAgcmVsYXRpdmVDaGFpbi5zZXRGaXhlZEJhc2VNb2RlKHRydWUpO1xuXG4gICAgICAgIGlmIChzaG91bGRDYWxjQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGxvb3AgPSAwOyBsb29wIDwgY2hhaW4uZ2V0TnVtQm9uZXMoKTsgKytsb29wKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ1N0YXJ0ID0gcmVsYXRpdmVDaGFpbi5nZXRCb25lKGxvb3ApLmdldFN0YXJ0TG9jYXRpb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnRW5kID0gcmVsYXRpdmVDaGFpbi5nZXRCb25lKGxvb3ApLmdldEVuZExvY2F0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2xhdGVkU3RhcnQgPSBvcmlnU3RhcnQucGx1cyhjb25uZWN0aW9uTG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRFbmQgPSBvcmlnRW5kLnBsdXMoY29ubmVjdGlvbkxvY2F0aW9uKTtcblxuICAgICAgICAgICAgICAgIHJlbGF0aXZlQ2hhaW4uZ2V0Qm9uZShsb29wKS5zZXRTdGFydExvY2F0aW9uKHRyYW5zbGF0ZWRTdGFydCk7XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVDaGFpbi5nZXRCb25lKGxvb3ApLnNldEVuZExvY2F0aW9uKHRyYW5zbGF0ZWRFbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRDaGFpbihyZWxhdGl2ZUNoYWluKTtcbiAgICB9XG5cbiAgICBnZXROdW1DaGFpbnMoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2NoYWlucy5sZW5ndGg7IH1cblxuICAgIGdldENoYWluKGNoYWluTnVtYmVyOiBudW1iZXIpOiBGYWJyaWtDaGFpbjJEIHsgcmV0dXJuIHRoaXMuX2NoYWluc1tjaGFpbk51bWJlcl07IH1cblxuICAgIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtGYWJyaWtDaGFpbjNEfSBmcm9tICcuL0ZhYnJpa0NoYWluM0QnO1xuaW1wb3J0IHtGYWJyaWtCb25lM0R9IGZyb20gJy4vRmFicmlrQm9uZTNEJztcbmltcG9ydCB7Qm9uZUNvbm5lY3Rpb25Qb2ludH0gZnJvbSAnLi9Cb25lQ29ubmVjdGlvblBvaW50JztcbmltcG9ydCB7VmVjM2Z9IGZyb20gJy4uL3V0aWxzL1ZlYzNmJztcbmltcG9ydCB7QmFzZWJvbmVDb25zdHJhaW50VHlwZTNEfSBmcm9tICcuL0Jhc2Vib25lQ29uc3RyYWludFR5cGUzRCc7XG5pbXBvcnQge01hdDNmfSBmcm9tICcuLi91dGlscy9NYXQzZic7XG5cbi8qKlxuICog0J3QsNCx0L7RgCAzRCDRhtC10L/QtdC5LlxuICoqL1xuZXhwb3J0IGNsYXNzIEZhYnJpa1N0cnVjdHVyZTNEIHtcbiAgICAvLyAtLS0tLS0tLS0tIFByaXZhdGUgUHJvcGVydGllcyAtLS0tLS0tLS0tXG5cbiAgICAvKiog0J3QsNC30LLQsNC90LjQtSDRgdGC0YDRg9C60YLRg9GA0YsuICovXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nID0gJyc7XG5cbiAgICAvKiog0KHQv9C40YHQvtC6INGG0LXQv9C10LkuICovXG4gICAgcHJpdmF0ZSBfY2hhaW5zOiBGYWJyaWtDaGFpbjNEW10gPSBbXTtcblxuICAgIC8vIC0tLS0tLS0tLSBQdWJsaWMgTWV0aG9kcyAtLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiDQmtC+0L3RgdGC0YDRg9C60YLQvtGALlxuICAgICAqINCf0YDQuNC90LjQvNCw0LXRgiDQtNCy0LAg0LLQsNGA0LjQsNC90YLQsCDQt9C90LDRh9C10L3QuNC5OlxuICAgICAqXG4gICAgICog0JrQvtC90YHRgtGA0YPQutGC0L7RgCDQsdC10Lcg0L/QsNGA0LDQvNC10YLRgNC+0LIgLSDQt9Cw0LTQsNC10YIg0LLRgdC10Lwg0L/QvtC70Y/QvCDQt9C90LDRh9C10L3QuNGPINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOLlxuICAgICAqXG4gICAgICog0J7QtNC40L0g0L/QsNGA0LDQvNC10YLRgC4g0JfQsNC00LDQtdGCINC40LzRjyDRgdGC0YDRg9C60YLRg9GA0YsuXG4gICAgICogQHBhcmFtIG5hbWUg0JjQvNGPINGB0YLRgNGD0LrRgtGD0YDRiy5cbiAgICAgKiAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZyA9ICcnKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCg0LXRiNCw0LXRgiDQt9Cw0LTQsNGH0YMg0JjQmiDQtNC70Y8g0LLRgdC10YUg0YbQtdC/0LXQuSDRgdGC0YDRg9C60YLRg9GA0YsuXG4gICAgICogPHA+XG4gICAgICog0JLRgdC1INGG0LXQv9C4INC/0LXRgNC10LzQtdGJ0LDRjtGC0YHRjyDQuiDQtdC00LjQvdC+0Lkg0YbQtdC70LXQstC+0Lkg0L/QvtC30LjRhtC40Lgg0LfQsCDQuNGB0LrQu9GO0YfQtdC90LjQtdC8INGC0LXRhSwg0LTQu9GPINC60L7RgtC+0YDRi9GFINC30LDQtNCw0L0gZW1iZWRkZWRUYXJnZXRNb2RlLlxuICAgICAqXG4gICAgICogQHBhcmFtICAgbmV3VGFyZ2V0TG9jYXRpb24gICAg0KbQtdC70LXQstCw0Y8g0L/QvtC30LjRhtC40Y8g0LTQu9GPINCy0YHQtdGFINGN0YTRhNC10LrRgtC+0YDQvtCyINGB0YLRgNGD0LrRgtGD0YDRiy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc29sdmVGb3JUYXJnZXQobmV3VGFyZ2V0TG9jYXRpb246IFZlYzNmKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG51X2NoYWlucyA9IHRoaXMuX2NoYWlucy5sZW5ndGg7XG4gICAgICAgIGxldCBjb25uZWN0ZWRDaGFpbk51bWJlcjtcblxuICAgICAgICBmb3IgKGxldCBsb29wID0gMDsgbG9vcCA8IG51X2NoYWluczsgKytsb29wKSB7XG4gICAgICAgICAgICBjb25zdCB0aGlzQ2hhaW4gPSB0aGlzLl9jaGFpbnNbbG9vcF07XG4gICAgICAgICAgICBjb25uZWN0ZWRDaGFpbk51bWJlciA9IHRoaXNDaGFpbi5nZXRDb25uZWN0ZWRDaGFpbk51bWJlcigpO1xuXG4gICAgICAgICAgICBpZiAoY29ubmVjdGVkQ2hhaW5OdW1iZXIgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzQ2hhaW4uZ2V0RW1iZWRkZWRUYXJnZXRNb2RlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc0NoYWluLnNvbHZlRm9yVGFyZ2V0KG5ld1RhcmdldExvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzQ2hhaW4uc29sdmVGb3JFbWJlZGRlZFRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaG9zdENoYWluOiBGYWJyaWtDaGFpbjNEID0gdGhpcy5fY2hhaW5zW2Nvbm5lY3RlZENoYWluTnVtYmVyXTtcbiAgICAgICAgICAgICAgICBjb25zdCBob3N0Qm9uZTogRmFicmlrQm9uZTNEID0gaG9zdENoYWluLmdldEJvbmUodGhpc0NoYWluLmdldENvbm5lY3RlZEJvbmVOdW1iZXIoKSk7XG4gICAgICAgICAgICAgICAgaWYgKGhvc3RCb25lLmdldEJvbmVDb25uZWN0aW9uUG9pbnQoKSA9PSBCb25lQ29ubmVjdGlvblBvaW50LlNUQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNDaGFpbi5zZXRCYXNlTG9jYXRpb24oaG9zdEJvbmUuZ2V0U3RhcnRMb2NhdGlvbigpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzQ2hhaW4uc2V0QmFzZUxvY2F0aW9uKGhvc3RCb25lLmdldEVuZExvY2F0aW9uKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnN0cmFpbnRUeXBlOiBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0QgPSB0aGlzQ2hhaW4uZ2V0QmFzZWJvbmVDb25zdHJhaW50VHlwZSgpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoY29uc3RyYWludFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0QuTk9ORTpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0QuR0xPQkFMX1JPVE9SOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIEJhc2Vib25lQ29uc3RyYWludFR5cGUzRC5HTE9CQUxfSElOR0U6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIEJhc2Vib25lQ29uc3RyYWludFR5cGUzRC5MT0NBTF9ST1RPUjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0QuTE9DQUxfSElOR0U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbm5lY3Rpb25Cb25lTWF0cml4OiBNYXQzZiA9IE1hdDNmLmNyZWF0ZVJvdGF0aW9uTWF0cml4KGhvc3RCb25lLmdldERpcmVjdGlvblVWKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVCYXNlYm9uZUNvbnN0cmFpbnRVVjogVmVjM2YgPSBjb25uZWN0aW9uQm9uZU1hdHJpeC50aW1lcyh0aGlzQ2hhaW4uZ2V0QmFzZWJvbmVDb25zdHJhaW50VVYoKSkubm9ybWFsaXNlZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzQ2hhaW4uX3NldEJhc2Vib25lUmVsYXRpdmVDb25zdHJhaW50VVYocmVsYXRpdmVCYXNlYm9uZUNvbnN0cmFpbnRVVik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25zdHJhaW50VHlwZSA9PSBCYXNlYm9uZUNvbnN0cmFpbnRUeXBlM0QuTE9DQUxfSElOR0UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzQ2hhaW4uX3NldEJhc2Vib25lUmVsYXRpdmVSZWZlcmVuY2VDb25zdHJhaW50VVYoY29ubmVjdGlvbkJvbmVNYXRyaXgudGltZXModGhpc0NoYWluLmdldEJvbmUoMCkuZ2V0Sm9pbnQoKS5nZXRIaW5nZVJlZmVyZW5jZUF4aXMoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXNDaGFpbi5nZXRFbWJlZGRlZFRhcmdldE1vZGUoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzQ2hhaW4uc29sdmVGb3JUYXJnZXQobmV3VGFyZ2V0TG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNDaGFpbi5zb2x2ZUZvckVtYmVkZGVkVGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ2hhaW4oY2hhaW46IEZhYnJpa0NoYWluM0QpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2hhaW5zLnB1c2goY2hhaW4pO1xuICAgIH1cblxuICAgIHJlbW92ZUNoYWluKGNoYWluSW5kZXgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2hhaW5zLnNwbGljZShjaGFpbkluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBjb25uZWN0Q2hhaW4obmV3Q2hhaW46IEZhYnJpa0NoYWluM0QsIGV4aXN0aW5nQ2hhaW5OdW1iZXI6IG51bWJlciwgZXhpc3RpbmdCb25lTnVtYmVyOiBudW1iZXIsIGJvbmVDb25uZWN0aW9uUG9pbnQ6IEJvbmVDb25uZWN0aW9uUG9pbnQsIHNob3VsZENhbGNDb29yZGluYXRlczogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoZXhpc3RpbmdDaGFpbk51bWJlciA+IHRoaXMuX2NoYWlucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNvbm5lY3QgdG8gY2hhaW4gJyArIGV4aXN0aW5nQ2hhaW5OdW1iZXIgKyAnIC0gbm8gc3VjaCBjaGFpbiAocmVtZW1iZXIgdGhhdCBjaGFpbnMgYXJlIHplcm8gaW5kZXhlZCkuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhpc3RpbmdCb25lTnVtYmVyID4gdGhpcy5fY2hhaW5zW2V4aXN0aW5nQ2hhaW5OdW1iZXJdLmdldE51bUJvbmVzKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNvbm5lY3QgdG8gYm9uZSAnICsgZXhpc3RpbmdCb25lTnVtYmVyICsgJyBvZiBjaGFpbiAnICsgZXhpc3RpbmdDaGFpbk51bWJlciArICcgLSBubyBzdWNoIGJvbmUgKHJlbWVtYmVyIHRoYXQgYm9uZXMgYXJlIHplcm8gaW5kZXhlZCkuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWxhdGl2ZUNoYWluOiBGYWJyaWtDaGFpbjNEID0gbmV3IEZhYnJpa0NoYWluM0QobmV3Q2hhaW4pO1xuXG4gICAgICAgIHJlbGF0aXZlQ2hhaW4uY29ubmVjdFRvU3RydWN0dXJlKHRoaXMsIGV4aXN0aW5nQ2hhaW5OdW1iZXIsIGV4aXN0aW5nQm9uZU51bWJlcik7XG5cbiAgICAgICAgdGhpcy5nZXRDaGFpbihleGlzdGluZ0NoYWluTnVtYmVyKS5nZXRCb25lKGV4aXN0aW5nQm9uZU51bWJlcikuc2V0Qm9uZUNvbm5lY3Rpb25Qb2ludChib25lQ29ubmVjdGlvblBvaW50KTtcbiAgICAgICAgbGV0IGNvbm5lY3Rpb25Mb2NhdGlvbjogVmVjM2Y7XG4gICAgICAgIGlmIChib25lQ29ubmVjdGlvblBvaW50ID09IEJvbmVDb25uZWN0aW9uUG9pbnQuU1RBUlQpIHtcbiAgICAgICAgICAgIGNvbm5lY3Rpb25Mb2NhdGlvbiA9IHRoaXMuX2NoYWluc1tleGlzdGluZ0NoYWluTnVtYmVyXS5nZXRCb25lKGV4aXN0aW5nQm9uZU51bWJlcikuZ2V0U3RhcnRMb2NhdGlvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29ubmVjdGlvbkxvY2F0aW9uID0gdGhpcy5fY2hhaW5zW2V4aXN0aW5nQ2hhaW5OdW1iZXJdLmdldEJvbmUoZXhpc3RpbmdCb25lTnVtYmVyKS5nZXRFbmRMb2NhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIHJlbGF0aXZlQ2hhaW4uc2V0QmFzZUxvY2F0aW9uKGNvbm5lY3Rpb25Mb2NhdGlvbik7XG5cbiAgICAgICAgcmVsYXRpdmVDaGFpbi5zZXRGaXhlZEJhc2VNb2RlKHRydWUpO1xuXG4gICAgICAgIGlmIChzaG91bGRDYWxjQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGxvb3AgPSAwOyBsb29wIDwgcmVsYXRpdmVDaGFpbi5nZXROdW1Cb25lcygpOyArK2xvb3ApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnU3RhcnQ6IFZlYzNmID0gcmVsYXRpdmVDaGFpbi5nZXRCb25lKGxvb3ApLmdldFN0YXJ0TG9jYXRpb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnRW5kOiBWZWMzZiA9IHJlbGF0aXZlQ2hhaW4uZ2V0Qm9uZShsb29wKS5nZXRFbmRMb2NhdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRlZFN0YXJ0OiBWZWMzZiA9IG9yaWdTdGFydC5wbHVzKGNvbm5lY3Rpb25Mb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRlZEVuZDogVmVjM2YgPSBvcmlnRW5kLnBsdXMoY29ubmVjdGlvbkxvY2F0aW9uKTtcblxuICAgICAgICAgICAgICAgIHJlbGF0aXZlQ2hhaW4uZ2V0Qm9uZShsb29wKS5zZXRTdGFydExvY2F0aW9uKHRyYW5zbGF0ZWRTdGFydCk7XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVDaGFpbi5nZXRCb25lKGxvb3ApLnNldEVuZExvY2F0aW9uKHRyYW5zbGF0ZWRFbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRDaGFpbihyZWxhdGl2ZUNoYWluKTtcbiAgICB9XG5cbiAgICBnZXROdW1DaGFpbnMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYWlucy5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0Q2hhaW4oY2hhaW5OdW1iZXI6IG51bWJlcik6IEZhYnJpa0NoYWluM0Qge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hhaW5zW2NoYWluTnVtYmVyXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNGR0YIg0LjQvNGPINGB0YLRgNGD0LrRgtGD0YDQtS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgICBuYW1lICAgINCW0LXQu9Cw0LXQvNC+0LUg0LjQvNGPLlxuICAgICAqL1xuICAgIHNldE5hbWUobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC40LzRjyDRgdGC0YDRg9C60YLRg9GA0YsuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuXG4gICAgICovXG4gICAgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG59XG4iLCIvKipcbiAqINCi0LjQvyDRgdGD0YHRgtCw0LLQsC5cbiAqXG4gKiA8dWw+PGxpPjxzdHJvbmc+Sm9pbnRUeXBlLkJBTEw8L3N0cm9uZz4gLSDRgtC40L8g0YHRg9GB0YLQsNCy0LAsINC40LzQtdGO0YnQuNC5INC+0LTQuNC9INGD0LPQvtC7LdC+0LPRgNCw0L3QuNGH0LXQvdC40LUsXG4gKiDQvdCwINC60L7RgtC+0YDRi9C5INC+0L0g0LzQvtC20LXRgiDQv9C+0LLQvtGA0LDRh9C40LLQsNGC0YzRgdGPINCy0L4g0LLRgdC10YUg0L3QsNC/0YDQsNCy0LvQtdC90LjRj9GFLiDQldGB0LvQuCDRg9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C40YLQtdC70Ywg0YDQsNCy0LXQvSAxODAgLVxuICog0YHRg9GB0YLQsNCyINC80L7QttC10YIg0LHRi9GC0Ywg0L/QvtCy0LXRgNC90YPRgiDQutGD0LTQsCDRg9Cz0L7QtNC90L4sINCyINC/0YDQvtGC0LjQstC90L7QvCDRgdC70YPRh9Cw0LUsINC10YHQu9C4INGD0LPQvtC7LdC+0LPRgNCw0L3QuNGH0LjRgtC10LvRjCDRgNCw0LLQtdC9IDAgLVxuICog0YHRg9GB0YLQsNCyINC90LUg0LzQvtC20LXRgiDQtNCy0LjQs9Cw0YLRjNGB0Y8g0LLQvtCy0YHQtS48L2xpPlxuICogPGxpPjxzdHJvbmc+Sm9pbnRUeXBlLkdMT0JBTF9ISU5HRTwvc3Ryb25nPiAtINGC0LjQvyDRgdGD0YHRgtCw0LLQsCwg0L/RgNC4INC60L7RgtC+0YDQvtC8INC+0LPRgNCw0L3QuNGH0LXQvdC40Y8g0LfQsNC00LDRjtGC0YHRj1xuICog0L3QsCDQstGA0LDRidC10L3QuNC1INCyINC+0L/RgNC10LTQtdC70LXQvdC90L7QvCDQvdCw0L/RgNCw0LLQu9C10L3QuNC4LCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0LzQuNGA0L7QstC+0Lkg0YHQuNGB0YLQtdC80Ysg0LrQvtC+0YDQtNC40L3QsNGCLiDQn9C+INCy0YvQsdGA0LDQvdC90L7QuSDQvtGB0LhcbiAqINC30LDQtNCw0ZHRgtGB0Y8gMiDQt9C90LDRh9C10L3QuNGPIC0g0L/QviDQuCDQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LggLSDQvdCwINC60L7RgtC+0YDRi9C1INGB0YPRgdGC0LDQsiDQv9C+0LfQstC+0LvRj9C10YIg0L/QvtCy0L7RgNCw0YfQuNCy0LDRgtGM0YHRjy5cbiAqINCS0YHQtSDQt9C90LDRh9C10L3QuNGPINGD0LrQsNC30YvQstCw0Y7RgtGB0Y8g0LIg0L/RgNC10LTQtdC70LDRhSDQvtGCIDAg0LTQviAxODAg0LPRgNCw0LTRg9GB0L7Qsi48L2xpPlxuICogPGxpPjxzdHJvbmc+Sm9pbnRUeXBlLkxPQ0FMX0hJTkdFPC9zdHJvbmc+IC0g0YLQuNC/INGB0YPRgdGC0LDQstCwLCDQv9GA0Lgg0LrQvtGC0L7RgNC+0Lwg0L7Qs9GA0LDQvdC40YfQtdC90LjRjyDQt9Cw0LTQsNGO0YLRgdGPXG4gKiDQsCDQstGA0LDRidC10L3QuNC1INCyINC+0L/RgNC10LTQtdC70LXQvdC90L7QvCDQvdCw0L/RgNCw0LLQu9C10L3QuNC4LCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0L/RgNC10LTRi9C00YPRidC10Lkg0LrQvtGB0YLQuC4g0J/QviDQstGL0LHRgNCw0L3QvdC+0Lkg0L7RgdC4XG4gKiDQt9Cw0LTQsNGR0YLRgdGPIDIg0LfQvdCw0YfQtdC90LjRjyAtINC/0L4g0Lgg0L/RgNC+0YLQuNCyINGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC4IC0g0L3QsCDQutC+0YLQvtGA0YvQtSDRgdGD0YHRgtCw0LIg0L/QvtC30LLQvtC70Y/QtdGCINC/0L7QstC+0YDQsNGH0LjQstCw0YLRjNGB0Y8uXG4gKiDQktGB0LUg0LfQvdCw0YfQtdC90LjRjyDRg9C60LDQt9GL0LLQsNGO0YLRgdGPINCyINC/0YDQtdC00LXQu9Cw0YUg0L7RgiAwINC00L4gMTgwINCz0YDQsNC00YPRgdC+0LIuPC9saT5cbiAqIDwvdWw+XG4gKi9cbmV4cG9ydCBlbnVtIEpvaW50VHlwZSB7QkFMTCwgR0xPQkFMX0hJTkdFLCBMT0NBTF9ISU5HRX1cbiIsIi8qKlxuICog0KbQstC10YIg0LIg0YTQvtGA0LzQsNGC0LUgUkdCQS5cbiAqIDxwPlxuICog0J/RgNC10LTRgdGC0LDQstC70LXQvSDRh9C10YLRi9GA0YzQvNGPIHIsIGcsIGIsIGEg0YHQstC+0LnRgdGC0LLQsNC80Lgg0YLQuNC/0LAgTnVtYmVyLlxuICog0JfQsNC00LDRgtGMINC30L3QsNGH0LXQvdC40Y8g0LTQsNC90L3Ri9GFINGB0LLQvtC50YHRgtCyINC80L7QttC90L4g0L/RgNC40YHQstCw0LjQstCw0L3QuNC10Lwg0L3QsNC/0YDRj9C80YPRjiwg0YfQtdGA0LXQtyDQutC+0L3RgdGC0YDRg9C60YLQvtGAINC40LvQuFxuICog0YfQtdGA0LXQtyDRhNGD0L3QutGG0LjQuCDRgdC10YLRgtC10YDRiy5cbiAqINCU0L7Qv9GD0YHRgtC40LzRi9C1INC30L3QsNGH0LXQvdC40Y8g0LTQu9GPINC60LDQttC00L7QuSDQv9C10YDQtdC80LXQvdC90L7QuSAtINGH0LjRgdC70L4gWzAuLjFdLlxuICog0JjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0LfQvdCw0YfQtdC90LjQuSDQstC90LUg0Y3RgtC+0LPQviDQtNC40LDQv9Cw0LfQvtC90LAg0LzQvtC20LXRgiDQv9GA0LjQstC10YHRgtC4INC6INC90LXQvtC/0YDQtdC00LXQu9C10L3QvdC+0LzRgyDQv9C+0LLQtdC00LXQvdC40Y4uXG4gKi9cbmV4cG9ydCBjbGFzcyBDb2xvdXI0ZiB7XG4gICAgLy8gLS0tLS0tLS0tLSBQcm9wZXJ0aWVzIC0tLS0tLS0tLS1cblxuICAgIC8qKiDQnNC40L3QuNC80LDQu9GM0L3QviDQtNC+0L/Rg9GB0YLQuNC80L7QtSDQt9C90LDRh9C10L3QuNC1INC00LvRjyDQutC+0LzQv9C+0L3QtdC90YLRiyDRhtCy0LXRgtCwLiAqL1xuICAgIHN0YXRpYyBNSU5fQ09NUE9ORU5UX1ZBTFVFID0gMDtcblxuICAgIC8qKiDQnNCw0LrRgdC40LzQsNC70YzQvdC+INC00L7Qv9GD0YHRgtC40LzQvtC1INC30L3QsNGH0LXQvdC40LUg0LTQu9GPINC60L7QvNC/0L7QvdC10L3RgtGLINGG0LLQtdGC0LAuICovXG4gICAgc3RhdGljIE1BWF9DT01QT05FTlRfVkFMVUUgPSAxO1xuXG4gICAgLyoqIFJlZCDQutC+0LzQv9C+0L3QtdC90YLQsC4gKi9cbiAgICByOiBudW1iZXIgPSAxO1xuXG4gICAgLyoqIEdyZWVuINC60L7QvNC/0L7QvdC10L3RgtCwLiAqL1xuICAgIGc6IG51bWJlciA9IDE7XG5cbiAgICAvKiogQmx1ZSDQutC+0LzQv9C+0L3QtdC90YLQsC4gKi9cbiAgICBiOiBudW1iZXIgPSAxO1xuXG4gICAgLyoqIEFscGhhINC60L7QvNC/0L7QvdC10L3RgtCwICjQutC+0LzQv9C+0L3QtdC90YLQsCDQvdC10L/RgNC+0LfRgNCw0YfQvdC+0YHRgtC4KS5cbiAgICAgKiAgKi9cbiAgICBhOiBudW1iZXIgPSAxO1xuXG4gICAgLy8gLS0tLS0tLS0tLSBDb25zdHJ1Y3RvciAtLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiDQmtC+0L3RgdGC0YDRg9C60YLQvtGALlxuICAgICAqIDxwPlxuICAgICAqINCf0YDQuNC90LjQvNCw0LXRgiDQvtC00LjQvSDQuNC3INC00LLRg9GFINCy0L7Qt9C80L7QttC90YvRhSDRgdC+0YfQtdGC0LDQvdC40Lkg0L/QsNGA0LDQvNC10YLRgNC+0LI6PHVsPlxuICAgICAqIDxsaT5cbiAgICAgKiAgICAg0JHQtdC3INC/0LDRgNCw0LzQtdGC0YDQvtCyIC0g0L/RgNC+0YHRgtCw0LLQu9GP0LXRgiDQt9C90LDRh9C10L3QuNGPINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINCy0YHQtdC8INC/0L7Qu9GP0LwuXG4gICAgICogPC9saT5cbiAgICAgKiA8bGk+XG4gICAgICogICAgINCf0YDQuNC90LjQvNCw0LXRgiDQvNCw0YHRgdC40LIg0LjQtyA0INC30L3QsNGH0LXQvdC40Lkg0LTQu9GPINC60L7QvNC/0L7QvdC10L3RgiDQv9C+INC/0L7RgNGP0LTQutGDOiBbcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGFdLlxuICAgICAqXG4gICAgICogICAgIEBwYXJhbSBzb3VyY2Uge251bWJlcltdfSDQl9C90LDRh9C10L3QuNGPINC60L7QvNC/0L7QvdC10L3RgiDRhtCy0LXRgtCwLlxuICAgICAqIDwvbGk+XG4gICAgICogPC91bD5cbiAgICAgKlxuICAgICAqINCS0YHQtSDQt9C90LDRh9C10L3QuNGPINC00L7Qu9C20L3RiyDQsdGL0YLRjCDQsiDQv9GA0LXQtNC10LvQsNGFIFswLi4xXS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U/OiBudW1iZXJbXSkge1xuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkgJiYgc291cmNlLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuciA9IENvbG91cjRmLl9jbGFtcChzb3VyY2VbMF0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmcgPSBDb2xvdXI0Zi5fY2xhbXAoc291cmNlWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iID0gQ29sb3VyNGYuX2NsYW1wKHNvdXJjZVsyXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYSA9IENvbG91cjRmLl9jbGFtcChzb3VyY2VbM10pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29sb3VyIHNvdXJjZSBhcnJheSBzaXplIG11c3QgYmUgcHJlY2lzZWx5IDQgZWxlbWVudHMuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbG91ciBjb25zdHJ1Y3RvciB3YXMgaW52b2tlZCBpbmNvcnJlY3RseS4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0gUHVibGljIE1ldGhvZHMgLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICog0JfQsNC00ZHRgiDQt9C90LDRh9C10L3QuNGPINC60L7QvNC/0L7QvdC10L3Rgi5cbiAgICAgKiA8cD5cbiAgICAgKiDQldGB0LvQuCDQt9C90LDRh9C10L3QuNGPINC90LUg0L/QvtC00YXQvtC00Y/RgiDQv9C+INC00LjQsNC/0LDQt9C+0L3Rgywg0YLQviDQvtC90Lgg0LfQsNC80LXQvdGP0Y7RgtGB0Y8g0L3QsCDQs9GA0LDQvdC40YfQvdGL0LUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICBzb3VyY2UgXHTQnNCw0YHRgdC40LIg0LjQtyA0INC30L3QsNGH0LXQvdC40Lkg0LTQu9GPINC60L7QvNC/0L7QvdC10L3RgiDQv9C+INC/0L7RgNGP0LTQutGDOiBbcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGFdLlxuICAgICAqL1xuICAgIHNldChzb3VyY2U6IG51bWJlcltdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuciA9IENvbG91cjRmLl9jbGFtcChzb3VyY2VbMF0pO1xuICAgICAgICB0aGlzLmcgPSBDb2xvdXI0Zi5fY2xhbXAoc291cmNlWzFdKTtcbiAgICAgICAgdGhpcy5iID0gQ29sb3VyNGYuX2NsYW1wKHNvdXJjZVsyXSk7XG4gICAgICAgIHRoaXMuYSA9IENvbG91cjRmLl9jbGFtcChzb3VyY2VbM10pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiDQlNC+0LHQsNCy0LvRj9C10YIg0LfQsNC00LDQvdC90YvQtSDQt9C90LDRh9C10L3QuNGPINC6IFJHQiDQutC+0LzQv9C+0L3QtdC90YLQsNC8INC4INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC40LfQvNC10L3QvdC10L3QvdGL0Lkg0YbQstC10YIg0LTQu9GPINGE0L7RgNC80LjRgNC+0LLQsNC90LjRjyDRhtC10L/QvtGH0LrQuC5cbiAgICAgKiA8cD5cbiAgICAgKiDQldGB0LvQuCDQv9GA0Lgg0LTQvtCx0LDQstC70LXQvdC90Lgg0LfQvdCw0YfQtdC90LjQuSDQv9GA0L7QuNGB0YXQvtC00LjRgiDQstGL0YXQvtC0INC30LAg0LPRgNCw0L3QuNGG0Ysg0LTQuNCw0L/QsNC30L7QvdCwLFxuICAgICAqINGC0L4g0YDQtdC30YPQu9GM0YLQsNGCINC30LDQvNC10L3Rj9C10YLRgdGPINC90LAg0LHQu9C40LbQsNC50YjQtdC1INCz0YDQsNC90LjRh9C90L7QtS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHJlZFx0XHRSZWQg0LrQvtC80L/QvtC90LXQvdGC0LAg0LTQu9GPINC00L7QsdCw0LLQu9C10L3QuNGPLlxuICAgICAqIEBwYXJhbSAgIGdyZWVuXHRHcmVlbiDQutC+0LzQv9C+0L3QtdC90YLQsCDQtNC70Y8g0LTQvtCx0LDQstC70LXQvdC40Y8uXG4gICAgICogQHBhcmFtICAgYmx1ZVx0Qmx1ZSDQutC+0LzQv9C+0L3QtdC90YLQsCDQtNC70Y8g0LTQvtCx0LDQstC70LXQvdC40Y8uXG4gICAgICogQHJldHVyblx0XHRcdFRoaXMg0LzQvtC00LjRhNC40YbQuNGA0L7QstCw0L3QvdGL0Lkg0YbQstC10YIuXG4gICAgICovXG4gICAgYWRkUkdCIChyZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyKTogQ29sb3VyNGYge1xuICAgICAgICB0aGlzLnIgPSBDb2xvdXI0Zi5fY2xhbXAodGhpcy5yICsgcmVkKTtcbiAgICAgICAgdGhpcy5nID0gQ29sb3VyNGYuX2NsYW1wKHRoaXMuZyArIGdyZWVuKTtcbiAgICAgICAgdGhpcy5iID0gQ29sb3VyNGYuX2NsYW1wKHRoaXMuYiArIGJsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0JLRi9GH0LjRgtCw0LXRgiDQt9Cw0LTQsNC90L3Ri9C1INC30L3QsNGH0LXQvdC40Y8g0LjQtyBSR0Ig0LrQvtC80L/QvtC90LXQvdGCINC4INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC40LfQvNC10L3QvdC10L3QvdGL0Lkg0YbQstC10YIg0LTQu9GPINGE0L7RgNC80LjRgNC+0LLQsNC90LjRjyDRhtC10L/QvtGH0LrQuC5cbiAgICAgKiA8cD5cbiAgICAgKiDQldGB0LvQuCDQv9GA0Lgg0LLRi9GH0LjRgtCw0L3QuNC4INC30L3QsNGH0LXQvdC40Lkg0L/RgNC+0LjRgdGF0L7QtNC40YIg0LLRi9GF0L7QtCDQt9CwINCz0YDQsNC90LjRhtGLINC00LjQsNC/0LDQt9C+0L3QsCxcbiAgICAgKiDRgtC+INGA0LXQt9GD0LvRjNGC0LDRgiDQt9Cw0LzQtdC90Y/QtdGC0YHRjyDQvdCwINCx0LvQuNC20LDQudGI0LXQtSDQs9GA0LDQvdC40YfQvdC+0LUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICByZWRcdFx0UmVkINC60L7QvNC/0L7QvdC10L3RgtCwINC00LvRjyDQstGL0YfQuNGC0LDQvdC40Y8uXG4gICAgICogQHBhcmFtICAgZ3JlZW5cdEdyZWVuINC60L7QvNC/0L7QvdC10L3RgtCwINC00LvRjyDQstGL0YfQuNGC0LDQvdC40Y8uXG4gICAgICogQHBhcmFtICAgYmx1ZVx0Qmx1ZSDQutC+0LzQv9C+0L3QtdC90YLQsCDQtNC70Y8g0LLRi9GH0LjRgtCw0L3QuNGPLlxuICAgICAqIEByZXR1cm5cdFx0XHRUaGlzINC80L7QtNC40YTQuNGG0LjRgNC+0LLQsNC90L3Ri9C5INGG0LLQtdGCLlxuICAgICAqL1xuICAgIHN1YnRyYWN0UkdCIChyZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyKTogQ29sb3VyNGYge1xuICAgICAgICB0aGlzLnIgPSBDb2xvdXI0Zi5fY2xhbXAodGhpcy5yIC0gcmVkKTtcbiAgICAgICAgdGhpcy5nID0gQ29sb3VyNGYuX2NsYW1wKHRoaXMuZyAtIGdyZWVuKTtcbiAgICAgICAgdGhpcy5iID0gQ29sb3VyNGYuX2NsYW1wKHRoaXMuYiAtIGJsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog0J7RgdCy0LXRgtC70Y/QtdGCIFJHQiDQutC+0LzQv9C+0L3QtdC90YLRiyDQtNCw0L3QvdC+0LPQviDRhtCy0LXRgtCwINC90LAg0LfQsNC00LDQvdC90L7QtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQtdC00LjQvdC40YYuXG4gICAgICogPHA+XG4gICAgICog0KDQtdC30YPQu9GM0YLQuNGA0YPRjtGJ0LjQuSDRhtCy0LXRgiDQv9GA0LjQstC+0LTQuNGC0YHRjyDQuiDQtNC40LDQv9Cw0LfQvtC90YMgWzAuLjFdINC4INCy0L7Qt9Cy0YDQsNGJ0LDQtdGC0YHRjyDQtNC70Y8g0YHQvtC30LTQsNC90LjRjyDRhtC10L/QvtGH0LrQuC5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0YW1vdW50XHTQl9C90LDRh9C10L3QuNC1LCDQutC+0YLQvtGA0L7QtSDQvdC10L7QsdGF0L7QtNC40LzQviDQv9GA0LjQsdCw0LLQuNGC0Ywg0LogUkdCINC60L7QvNC/0L7QvdC10L3RgtCw0Lwg0YLQtdC60YPRidC10LPQviDRhtCy0LXRgtCwLlxuICAgICAqIEByZXR1cm5cdFx0XHTQotC10LrRg9GJ0LjQuSDRhtCy0LXRgiDQv9C+0YHQu9C1INC80L7QtNC40YbQuNC60LDRhtC40LguXG4gICAgICovXG4gICAgbGlnaHRlbiAoYW1vdW50OiBudW1iZXIpOiBDb2xvdXI0ZiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFJHQihhbW91bnQsIGFtb3VudCwgYW1vdW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0YLQtdC80L3Rj9C10YIgUkdCINC60L7QvNC/0L7QvdC10L3RgtGLINC00LDQvdC90L7Qs9C+INGG0LLQtdGC0LAg0L3QsCDQt9Cw0LTQsNC90L3QvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC10LTQuNC90LjRhi5cbiAgICAgKiA8cD5cbiAgICAgKiDQoNC10LfRg9C70YzRgtC40YDRg9GO0YnQuNC5INGG0LLQtdGCINC/0YDQuNCy0L7QtNC40YLRgdGPINC6INC00LjQsNC/0LDQt9C+0L3RgyBbMC4uMV0g0Lgg0LLQvtC30LLRgNCw0YnQsNC10YLRgdGPINC00LvRjyDRgdC+0LfQtNCw0L3QuNGPINGG0LXQv9C+0YfQutC4LlxuICAgICAqXG4gICAgICogQHBhcmFtXHRhbW91bnRcdNCX0L3QsNGH0LXQvdC40LUsINC60L7RgtC+0YDQvtC1INC90LXQvtCx0YXQvtC00LjQvNC+INC+0YLQvdGP0YLRjCDQvtGCIFJHQiDQutC+0LzQv9C+0L3QtdC90YIg0YLQtdC60YPRidC10LPQviDRhtCy0LXRgtCwLlxuICAgICAqIEByZXR1cm5cdFx0XHTQotC10LrRg9GJ0LjQuSDRhtCy0LXRgiDQv9C+0YHQu9C1INC80L7QtNC40YbQuNC60LDRhtC40LguXG4gICAgICovXG4gICAgZGFya2VuIChhbW91bnQ6IG51bWJlcik6IENvbG91cjRmIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VidHJhY3RSR0IoYW1vdW50LCBhbW91bnQsIGFtb3VudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LzQsNGB0YHQuNCyINC60L7QvNC/0L7QvdC10L3RgiDQtNCw0L3QvdC+0LPQviDRhtCy0LXRgtCwINCyINC/0L7RgNGP0LTQutC1IFJHQkEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuXHTQlNCw0L3QvdGL0Lkg0YbQstC10YIg0LIg0LLQuNC00LUg0YfQuNGB0LvQvtCy0L7Qs9C+INC80LDRgdGB0LjQstCwLlxuICAgICAqL1xuICAgIHRvQXJyYXkgPSAoKTogbnVtYmVyW10gPT4gW3RoaXMuciwgdGhpcy5nLCB0aGlzLmIsIHRoaXMuYV07XG5cbiAgICAvLyAtLS0tLS0tLS0tIFByaXZhdGUgTWV0aG9kcyAtLS0tLS0tLS0tXG5cbiAgICBwcml2YXRlIHN0YXRpYyBfY2xhbXAoY29tcG9uZW50VmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmICAgICAgKGNvbXBvbmVudFZhbHVlID4gQ29sb3VyNGYuTUFYX0NPTVBPTkVOVF9WQUxVRSkgeyByZXR1cm4gQ29sb3VyNGYuTUFYX0NPTVBPTkVOVF9WQUxVRTsgfVxuICAgICAgICBlbHNlIGlmIChjb21wb25lbnRWYWx1ZSA8IENvbG91cjRmLk1JTl9DT01QT05FTlRfVkFMVUUpIHsgcmV0dXJuIENvbG91cjRmLk1JTl9DT01QT05FTlRfVkFMVUU7IH1cbiAgICAgICAgZWxzZSAgICB7IHJldHVybiBjb21wb25lbnRWYWx1ZTsgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7VmVjM2Z9IGZyb20gJy4vVmVjM2YnO1xuaW1wb3J0IHtVdGlsc30gZnJvbSAnLi9VdGlscyc7XG5cbi8qKlxuICog0KfQuNGB0LvQvtCy0LDRjyDQvNCw0YLRgNC40YbQsCAzeDMuXG4gKiA8cD5cbiAqINCt0LvQtdC80LXQvdGC0Ysg0LTQsNC90L3QvtC5INC80LDRgtGA0LjRhtGLOlxuICogbTAwICBtMTAgIG0yMFxuICogbTAxXHRtMTEgIG0yMVxuICogbTAyXHRtMTIgIG0yMlxuICogPHA+XG4gKiDQntGB0L3QvtCy0L3QvtC5INGN0LvQtdC80LXQvdGCINC80LDRgtGA0LjRhtGLIC0g0YHRgtC+0LvQsdC10YYuXG4gKlxuICovXG5leHBvcnQgY2xhc3MgTWF0M2Yge1xuICAgIC8vINCf0LXRgNCy0YvQuSDQstC10LrRgtC+0YAt0YHRgtC+0LvQsdC10YYgLSDQv9C+0LvQvtC20LjRgtC10LvRjNC90L4g0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQvtGB0LggWC5cbiAgICBtMDA6IG51bWJlciA9IDA7XG4gICAgbTAxOiBudW1iZXIgPSAwO1xuICAgIG0wMjogbnVtYmVyID0gMDtcblxuICAgIC8vINCS0YLQvtGA0L7QuSDQstC10LrRgtC+0YAt0YHRgtC+0LvQsdC10YYgLSDQv9C+0LvQvtC20LjRgtC10LvRjNC90L4g0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQvtGB0LggWS5cbiAgICBtMTA6IG51bWJlciA9IDA7XG4gICAgbTExOiBudW1iZXIgPSAwO1xuICAgIG0xMjogbnVtYmVyID0gMDtcblxuICAgIC8vINCi0YDQtdGC0LjQuSDQstC10LrRgtC+0YAt0YHRgtC+0LvQsdC10YYgLSDQv9C+0LvQvtC20LjRgtC10LvRjNC90L4g0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQvtGB0LggWi5cbiAgICBtMjA6IG51bWJlciA9IDA7XG4gICAgbTIxOiBudW1iZXIgPSAwO1xuICAgIG0yMjogbnVtYmVyID0gMDtcblxuICAgIC8qKlxuICAgICAqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAuXG4gICAgICog0J/RgNC40L3QuNC80LDQtdGCIDkg0L/QsNGA0LDQvNC10YLRgNC+0LIg0LjQu9C4INC90L7Qu9GMLlxuICAgICAqXG4gICAgICogQHBhcmFtXHRtMDBcdNCf0LXRgNCy0YvQuSDQutC+0LzQv9C+0L3QtdC90YIg0L/QviDQvtGB0LggWC5cbiAgICAgKiBAcGFyYW1cdG0wMVx00JLRgtC+0YDQvtC5INC60L7QvNC/0L7QvdC10L3RgiDQv9C+INC+0YHQuCBYLlxuICAgICAqIEBwYXJhbVx0bTAyXHTQotGA0LXRgtC40Lkg0LrQvtC80L/QvtC90LXQvdGCINC/0L4g0L7RgdC4IFguXG4gICAgICogQHBhcmFtXHRtMTBcdNCf0LXRgNCy0YvQuSDQutC+0LzQv9C+0L3QtdC90YIg0L/QviDQvtGB0LggWS5cbiAgICAgKiBAcGFyYW1cdG0xMVx00JLRgtC+0YDQvtC5INC60L7QvNC/0L7QvdC10L3RgiDQv9C+INC+0YHQuCBZLlxuICAgICAqIEBwYXJhbVx0bTEyXHTQotGA0LXRgtC40Lkg0LrQvtC80L/QvtC90LXQvdGCINC/0L4g0L7RgdC4IFkuXG4gICAgICogQHBhcmFtXHRtMjBcdNCf0LXRgNCy0YvQuSDQutC+0LzQv9C+0L3QtdC90YIg0L/QviDQvtGB0LggWi5cbiAgICAgKiBAcGFyYW1cdG0yMVx00JLRgtC+0YDQvtC5INC60L7QvNC/0L7QvdC10L3RgiDQv9C+INC+0YHQuCBaLlxuICAgICAqIEBwYXJhbVx0bTIyXHTQotGA0LXRgtC40Lkg0LrQvtC80L/QvtC90LXQvdGCINC/0L4g0L7RgdC4IFouXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobTAwPzogbnVtYmVyLCBtMDE/OiBudW1iZXIsIG0wMj86IG51bWJlciwgbTEwPzogbnVtYmVyLCBtMTE/OiBudW1iZXIsIG0xMj86IG51bWJlciwgbTIwPzogbnVtYmVyLCBtMjE/OiBudW1iZXIsIG0yMj86IG51bWJlcikge1xuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgdGhpcy5tMDAgPSBtMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5tMDEgPSBtMDE7XG4gICAgICAgICAgICAgICAgdGhpcy5tMDIgPSBtMDI7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm0xMCA9IG0xMDtcbiAgICAgICAgICAgICAgICB0aGlzLm0xMSA9IG0xMTtcbiAgICAgICAgICAgICAgICB0aGlzLm0xMiA9IG0xMjtcblxuICAgICAgICAgICAgICAgIHRoaXMubTIwID0gbTIwO1xuICAgICAgICAgICAgICAgIHRoaXMubTIxID0gbTIxO1xuICAgICAgICAgICAgICAgIHRoaXMubTIyID0gbTIyO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgTWF0M2YgY29uc3RydWN0b3IgcGFyYW1zLicpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog0JfQsNC90YPQu9GP0LXRgiDQstGB0LUg0YfQuNGB0LvQsCDQsiDQvNCw0YLRgNC40YbQtS4gKi9cbiAgICB6ZXJvKCk6IHZvaWQgeyB0aGlzLm0wMCA9IHRoaXMubTAxID0gdGhpcy5tMDIgPSB0aGlzLm0xMCA9IHRoaXMubTExID0gdGhpcy5tMTIgPSB0aGlzLm0yMCA9IHRoaXMubTIxID0gdGhpcy5tMjIgPSAwLjA7IH1cblxuICAgIC8qKiDQn9GA0LXQstGA0LDRidCw0LXRgiDQtNCw0L3QvdGD0Y4g0LzQsNGC0YDQuNGG0YMg0LIg0LXQtNC40L3QuNGH0L3Rg9GOLiAqL1xuICAgIHNldElkZW50aXR5KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm0wMCA9IHRoaXMubTExID0gdGhpcy5tMjIgPSAxLjA7XG4gICAgICAgIHRoaXMubTAxID0gdGhpcy5tMDIgPSB0aGlzLm0xMCA9IHRoaXMubTEyID0gdGhpcy5tMjAgPSB0aGlzLm0yMSA9IDAuMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQvdC+0LLRg9GOINC80LDRgtGA0LjRhtGDLCDRgtGA0LDQvdGB0L/QvtC90LjRgNC+0LLQsNC90L3Rg9GOINCy0LXRgNGB0LjRjiDQvNCw0YLRgNC40YbRiy3Qv9Cw0YDQsNC80LXRgtGA0LAuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdG1cdNCc0LDRgtGA0LjRhtGDLCDQutC+0YLQvtGA0YPRjiDRhdC+0YLRj9GCINGC0YDQsNC90YHQv9C+0L3QuNGA0L7QstCw0YLRjC5cbiAgICAgKiBAcmV0dXJuXHRcdNCi0YDQsNC90YHQv9C+0L3QuNGA0L7QstCw0L3QvdCw0Y8g0LLQtdGA0YHQuNGPINC80LDRgtGA0LjRhtGLLdC/0LDRgNCw0LzQtdGC0YDQsC5cbiAgICAgKi9cbiAgICBzdGF0aWMgdHJhbnNwb3NlID0gKG06IE1hdDNmKTogTWF0M2YgPT4gbmV3IE1hdDNmKG0ubTAwLCBtLm0xMCwgbS5tMjAsIG0ubTAxLCBtLm0xMSwgbS5tMjEsIG0ubTAyLCBtLm0xMiwgbS5tMjIpO1xuXG4gICAgLyoqXG4gICAgICog0JfQsNC00LDRkdGCINC80LDRgtGA0LjRhtGDINCy0YDQsNGJ0LXQvdC40Y8uXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdHJlZmVyZW5jZURpcmVjdGlvblx00JLQtdC60YLQvtGAINC40YHQv9C+0LvRjNC30YPQtdC80YvQuSDQsiDQutCw0YfQtdGB0YLQstC1INC+0YHQuCBaLlxuICAgICAqIEByZXR1cm5cdNCc0LDRgtGA0LjRhtCwINCy0YDQsNGJ0LXQvdC40Y8uXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVJvdGF0aW9uTWF0cml4KHJlZmVyZW5jZURpcmVjdGlvbjogVmVjM2YpOiBNYXQzZiB7XG4gICAgICAgIGNvbnN0ICByb3RNYXQgPSBuZXcgTWF0M2YoKTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlRGlyZWN0aW9uLnkgPT0gMS4wKSB7XG4gICAgICAgIHJlZmVyZW5jZURpcmVjdGlvbi55IC09IDAuMDAwMTtcbiAgICAgICAgcmVmZXJlbmNlRGlyZWN0aW9uLm5vcm1hbGlzZSgpO1xuICAgIH1cblxuICAgICAgICByb3RNYXQuc2V0WkJhc2lzKCByZWZlcmVuY2VEaXJlY3Rpb24gKTtcbiAgICAgICAgcm90TWF0LnNldFhCYXNpcyggVmVjM2YuY3Jvc3NQcm9kdWN0KCByZWZlcmVuY2VEaXJlY3Rpb24sIG5ldyBWZWMzZigwLjAsIDEuMCwgMC4wKSApLm5vcm1hbGlzZWQoKSApO1xuICAgICAgICByb3RNYXQuc2V0WUJhc2lzKCBWZWMzZi5jcm9zc1Byb2R1Y3QoIHJvdE1hdC5nZXRYQmFzaXMoKSwgcm90TWF0LmdldFpCYXNpcygpICkubm9ybWFsaXNlZCgpICk7XG5cbiAgICAgICAgcmV0dXJuIHJvdE1hdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQodC+0YHRgtC+0LjRgiDQu9C4INC80LDRgtGA0LjRhtCwINC40Lcg0YLRgNGR0YUg0L7RgNGC0L7Qs9C+0L3QsNC70YzQvdGL0YUg0LLQtdC60YLQvtGA0L7Qsi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5cdNCe0YDRgtC+0LPQvtC90LDQu9GM0L3QsCDQu9C4INC80LDRgtGA0LjRhtCwLlxuICAgICAqL1xuICAgIGlzT3J0aG9nb25hbCgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgeENyb3NzWURvdCA9IFZlYzNmLmRvdFByb2R1Y3QodGhpcy5nZXRYQmFzaXMoKSwgdGhpcy5nZXRZQmFzaXMoKSk7XG4gICAgICAgIGNvbnN0IHhDcm9zc1pEb3QgPSBWZWMzZi5kb3RQcm9kdWN0KHRoaXMuZ2V0WEJhc2lzKCksIHRoaXMuZ2V0WkJhc2lzKCkpO1xuICAgICAgICBjb25zdCB5Q3Jvc3NaRG90ID0gVmVjM2YuZG90UHJvZHVjdCh0aGlzLmdldFlCYXNpcygpLCB0aGlzLmdldFpCYXNpcygpKTtcblxuICAgICAgICByZXR1cm4gKFV0aWxzLmFwcHJveGltYXRlbHlFcXVhbHMoeENyb3NzWURvdCwgMC4wLCAwLjAxKSAmJlxuICAgICAgICAgICAgVXRpbHMuYXBwcm94aW1hdGVseUVxdWFscyh4Q3Jvc3NaRG90LCAwLjAsIDAuMDEpICYmXG4gICAgICAgICAgICBVdGlscy5hcHByb3hpbWF0ZWx5RXF1YWxzKHlDcm9zc1pEb3QsIDAuMCwgMC4wMSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCj0LzQvdC+0LbQsNC10YIg0LzQsNGC0YDQuNGG0YMg0L3QsCDQstC10LrRgtC+0YAg0L7QsdGL0YfQvdGL0Lwg0LzQsNGC0YDQuNGH0L3Ri9C8INGD0LzQvdC+0LbQtdC90LjQtdC8LlxuICAgICAqXG4gICAgICogQHBhcmFtXHRzb3VyY2VcdNCS0LXQutGC0L7RgC5cbiAgICAgKiBAcmV0dXJuXG4gICAgICovXG4gICAgdGltZXMoc291cmNlOiBWZWMzZik6IFZlYzNmIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzZih0aGlzLm0wMCAqIHNvdXJjZS54ICsgdGhpcy5tMTAgKiBzb3VyY2UueSArIHRoaXMubTIwICogc291cmNlLnosXG4gICAgICAgICAgICB0aGlzLm0wMSAqIHNvdXJjZS54ICsgdGhpcy5tMTEgKiBzb3VyY2UueSArIHRoaXMubTIxICogc291cmNlLnosXG4gICAgICAgICAgICB0aGlzLm0wMiAqIHNvdXJjZS54ICsgdGhpcy5tMTIgKiBzb3VyY2UueSArIHRoaXMubTIyICogc291cmNlLnopO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0YvRh9C40YHQu9GP0LXRgiDQvtC/0YDQtdC00LXQu9C40YLQtdC70Ywg0LzQsNGC0YDQuNGG0YsuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuXHTQntC/0YDQtdC00LXQu9C40YLQtdC70Ywg0LzQsNGC0YDQuNGG0YsuXG4gICAgICovXG4gICAgZGV0ZXJtaW5hbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm0yMCAqIHRoaXMubTAxICogdGhpcy5tMTJcbiAgICAgICAgICAgIC0gdGhpcy5tMjAgICogdGhpcy5tMDIgKiB0aGlzLm0xMVxuICAgICAgICAgICAgLSB0aGlzLm0xMCAqIHRoaXMubTAxICogdGhpcy5tMjJcbiAgICAgICAgICAgICsgdGhpcy5tMTAgKiB0aGlzLm0wMiAqIHRoaXMubTIxXG4gICAgICAgICAgICArIHRoaXMubTAwICogdGhpcy5tMTEgKiB0aGlzLm0yMlxuICAgICAgICAgICAgLSB0aGlzLm0wMCAqIHRoaXMubTEyICogdGhpcy5tMjE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0L7QsdGA0LDRgtC90YPRjiDQvNCw0YLRgNC40YbRgyDQtNC70Y8g0LzQsNGC0YDQuNGG0Yst0L/QsNGA0LDQvNC10YLRgNCwLlxuICAgICAqXG4gICAgICogQHBhcmFtXHRtXHTQmNGB0YXQvtC00L3QsNGPINC80LDRgtGA0LjRhtCwLlxuICAgICAqIEByZXR1cm5cdFx00JzQsNGC0YDQuNGG0LAg0L7QsdGA0LDRgtC90LDRjyDQuNGB0YXQvtC00L3QvtC5LlxuICAgICAqL1xuICAgIHN0YXRpYyBpbnZlcnNlKG06IE1hdDNmKTogTWF0M2Yge1xuICAgICAgICBjb25zdCAgZCA9IG0uZGV0ZXJtaW5hbnQoKTtcblxuICAgICAgICBjb25zdCAgdGVtcCA9IG5ldyBNYXQzZigpO1xuXG4gICAgICAgIHRlbXAubTAwID0gIChtLm0xMSAgKiBtLm0yMiAtIG0ubTEyICogbS5tMjEpIC8gZDtcbiAgICAgICAgdGVtcC5tMDEgPSAtKG0ubTAxICAqIG0ubTIyIC0gbS5tMDIgKiBtLm0yMSkgLyBkO1xuICAgICAgICB0ZW1wLm0wMiA9ICAobS5tMDEgICogbS5tMTIgLSBtLm0wMiAqIG0ubTExKSAvIGQ7XG4gICAgICAgIHRlbXAubTEwID0gLSgtbS5tMjAgKiBtLm0xMiArIG0ubTEwICogbS5tMjIpIC8gZDtcbiAgICAgICAgdGVtcC5tMTEgPSAgKC1tLm0yMCAqIG0ubTAyICsgbS5tMDAgKiBtLm0yMikgLyBkO1xuICAgICAgICB0ZW1wLm0xMiA9IC0oLW0ubTEwICogbS5tMDIgKyBtLm0wMCAqIG0ubTEyKSAvIGQ7XG4gICAgICAgIHRlbXAubTIwID0gICgtbS5tMjAgKiBtLm0xMSArIG0ubTEwICogbS5tMjEpIC8gZDtcbiAgICAgICAgdGVtcC5tMjEgPSAtKC1tLm0yMCAqIG0ubTAxICsgbS5tMDAgKiBtLm0yMSkgLyBkO1xuICAgICAgICB0ZW1wLm0yMiA9ICAoLW0ubTEwICogbS5tMDIgKyBtLm0wMCAqIG0ubTExKSAvIGQ7XG5cbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0J/QvtCy0L7RgNCw0YfQuNCy0LDQtdGCINGN0YLRgyDQvNCw0YLRgNC40YbRgyDQvdCwINGD0LPQvtC7LdC/0LDRgNCw0LzQtdGC0YAg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC+0YHQuC3Qv9Cw0YDQsNC80LXRgtGA0LAuXG4gICAgICog0J3QtSDQvNC+0LTQuNGE0LjRhtC40YDRg9C10YIg0LjRgdGF0L7QtNC90YPRjiDQvNCw0YLRgNC40YbRgy5cbiAgICAgKlxuICAgICAqICBAcGFyYW1cdGFuZ2xlUmFkc1x00KPQs9C+0Lsg0LIg0YDQsNC00LjQsNC90LDRhS5cbiAgICAgKiAgQHBhcmFtXHRyb3RhdGlvbkF4aXNcdNCe0YHRjC5cbiAgICAgKiAgQHJldHVyblxuICAgICAqICAqL1xuICAgIHJvdGF0ZVJhZHMocm90YXRpb25BeGlzOiBWZWMzZiwgYW5nbGVSYWRzOiBudW1iZXIpOiBNYXQzZiB7XG4gICAgICAgIGNvbnN0ICBkZXN0ID0gbmV3IE1hdDNmKCk7XG5cbiAgICAgICAgY29uc3QgIHNpbiAgICAgICAgID0gTWF0aC5zaW4oYW5nbGVSYWRzKTtcbiAgICAgICAgY29uc3QgIGNvcyAgICAgICAgID0gTWF0aC5jb3MoYW5nbGVSYWRzKTtcbiAgICAgICAgY29uc3QgIG9uZU1pbnVzQ29zID0gMS4wIC0gY29zO1xuXG4gICAgICAgIGNvbnN0ICB4eSA9IHJvdGF0aW9uQXhpcy54ICogcm90YXRpb25BeGlzLnk7XG4gICAgICAgIGNvbnN0ICB5eiA9IHJvdGF0aW9uQXhpcy55ICogcm90YXRpb25BeGlzLno7XG4gICAgICAgIGNvbnN0ICB4eiA9IHJvdGF0aW9uQXhpcy54ICogcm90YXRpb25BeGlzLno7XG4gICAgICAgIGNvbnN0ICB4cyA9IHJvdGF0aW9uQXhpcy54ICogc2luO1xuICAgICAgICBjb25zdCAgeXMgPSByb3RhdGlvbkF4aXMueSAqIHNpbjtcbiAgICAgICAgY29uc3QgenMgPSByb3RhdGlvbkF4aXMueiAqIHNpbjtcblxuICAgICAgICBjb25zdCBmMDAgPSByb3RhdGlvbkF4aXMueCAqIHJvdGF0aW9uQXhpcy54ICogb25lTWludXNDb3MgKyBjb3M7XG4gICAgICAgIGNvbnN0IGYwMSA9IHh5ICogb25lTWludXNDb3MgKyB6cztcbiAgICAgICAgY29uc3QgZjAyID0geHogKiBvbmVNaW51c0NvcyAtIHlzO1xuXG4gICAgICAgIGNvbnN0IGYxMCA9IHh5ICogb25lTWludXNDb3MgLSB6cztcbiAgICAgICAgY29uc3QgZjExID0gcm90YXRpb25BeGlzLnkgKiByb3RhdGlvbkF4aXMueSAqIG9uZU1pbnVzQ29zICsgY29zO1xuICAgICAgICBjb25zdCBmMTIgPSB5eiAqIG9uZU1pbnVzQ29zICsgeHM7XG5cbiAgICAgICAgY29uc3QgZjIwID0geHogKiBvbmVNaW51c0NvcyArIHlzO1xuICAgICAgICBjb25zdCBmMjEgPSB5eiAqIG9uZU1pbnVzQ29zIC0geHM7XG4gICAgICAgIGNvbnN0IGYyMiA9IHJvdGF0aW9uQXhpcy56ICogcm90YXRpb25BeGlzLnogKiBvbmVNaW51c0NvcyArIGNvcztcblxuICAgICAgICBjb25zdCB0MDAgPSB0aGlzLm0wMCAqIGYwMCArIHRoaXMubTEwICogZjAxICsgdGhpcy5tMjAgKiBmMDI7XG4gICAgICAgIGNvbnN0IHQwMSA9IHRoaXMubTAxICogZjAwICsgdGhpcy5tMTEgKiBmMDEgKyB0aGlzLm0yMSAqIGYwMjtcbiAgICAgICAgY29uc3QgdDAyID0gdGhpcy5tMDIgKiBmMDAgKyB0aGlzLm0xMiAqIGYwMSArIHRoaXMubTIyICogZjAyO1xuXG4gICAgICAgIGNvbnN0IHQxMCA9IHRoaXMubTAwICogZjEwICsgdGhpcy5tMTAgKiBmMTEgKyB0aGlzLm0yMCAqIGYxMjtcbiAgICAgICAgY29uc3QgdDExID0gdGhpcy5tMDEgKiBmMTAgKyB0aGlzLm0xMSAqIGYxMSArIHRoaXMubTIxICogZjEyO1xuICAgICAgICBjb25zdCB0MTIgPSB0aGlzLm0wMiAqIGYxMCArIHRoaXMubTEyICogZjExICsgdGhpcy5tMjIgKiBmMTI7XG5cbiAgICAgICAgZGVzdC5tMjAgPSB0aGlzLm0wMCAqIGYyMCArIHRoaXMubTEwICogZjIxICsgdGhpcy5tMjAgKiBmMjI7XG4gICAgICAgIGRlc3QubTIxID0gdGhpcy5tMDEgKiBmMjAgKyB0aGlzLm0xMSAqIGYyMSArIHRoaXMubTIxICogZjIyO1xuICAgICAgICBkZXN0Lm0yMiA9IHRoaXMubTAyICogZjIwICsgdGhpcy5tMTIgKiBmMjEgKyB0aGlzLm0yMiAqIGYyMjtcblxuICAgICAgICBkZXN0Lm0wMCA9IHQwMDtcbiAgICAgICAgZGVzdC5tMDEgPSB0MDE7XG4gICAgICAgIGRlc3QubTAyID0gdDAyO1xuXG4gICAgICAgIGRlc3QubTEwID0gdDEwO1xuICAgICAgICBkZXN0Lm0xMSA9IHQxMTtcbiAgICAgICAgZGVzdC5tMTIgPSB0MTI7XG5cbiAgICAgICAgcmV0dXJuIGRlc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0J/QvtCy0L7RgNCw0YfQuNCy0LDQtdGCINGN0YLRgyDQvNCw0YLRgNC40YbRgyDQvdCwINGD0LPQvtC7LdC/0LDRgNCw0LzQtdGC0YAg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC+0YHQuC3Qv9Cw0YDQsNC80LXRgtGA0LAuXG4gICAgICog0J3QtSDQvNC+0LTQuNGE0LjRhtC40YDRg9C10YIg0LjRgdGF0L7QtNC90YPRjiDQvNCw0YLRgNC40YbRgy5cbiAgICAgKlxuICAgICAqICBAcGFyYW1cdGFuZ2xlRGVnc1x00KPQs9C+0Lsg0LIg0LPRgNCw0LTRg9GB0LDRhS5cbiAgICAgKiAgQHBhcmFtXHRsb2NhbEF4aXNcdNCe0YHRjC5cbiAgICAgKiAgQHJldHVyblxuICAgICAqICAqL1xuICAgIHJvdGF0ZURlZ3MgPSAoYW5nbGVEZWdzOiBudW1iZXIsIGxvY2FsQXhpczogVmVjM2YpOiBNYXQzZiA9PiB0aGlzLnJvdGF0ZVJhZHMobG9jYWxBeGlzLCBhbmdsZURlZ3MgKiBVdGlscy5ERUdTX1RPX1JBRFMpO1xuXG4gICAgLyoqXG4gICAgICog0JfQsNC00LDRkdGCINC+0YHRjCBYINC80LDRgtGA0LjRhtC1LlxuICAgICAqXG4gICAgICogQHBhcmFtXHR2XHTQktC10LrRgtC+0YAsINC30L3QsNGH0LXQvdC40Y8g0LrQvtGC0L7RgNC+0LPQviDQsdGD0LTRg9GCINC40YHQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y8g0LIg0LrQsNGH0LXRgdGC0LLQtSDQvtGB0Lgg0LzQsNGC0YDQuNGG0YsuXG4gICAgICovXG4gICAgc2V0WEJhc2lzKHY6IFZlYzNmKTogdm9pZCB7IHRoaXMubTAwID0gdi54OyB0aGlzLm0wMSA9IHYueTsgdGhpcy5tMDIgPSB2Lno7IH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC30L3QsNGH0LXQvdC40Y8g0LzQsNGC0YDQuNGG0Ysg0L/QviDQvtGB0LggWC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5cbiAgICAgKiovXG4gICAgZ2V0WEJhc2lzID0gKCk6IFZlYzNmID0+IG5ldyBWZWMzZih0aGlzLm0wMCwgdGhpcy5tMDEsIHRoaXMubTAyKTtcblxuICAgIC8qKlxuICAgICAqINCX0LDQtNCw0ZHRgiDQvtGB0YwgWSDQvNCw0YLRgNC40YbQtS5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0dlx00JLQtdC60YLQvtGALCDQt9C90LDRh9C10L3QuNGPINC60L7RgtC+0YDQvtCz0L4g0LHRg9C00YPRgiDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YzRgdGPINCyINC60LDRh9C10YHRgtCy0LUg0L7RgdC4INC80LDRgtGA0LjRhtGLLlxuICAgICAqL1xuICAgIHNldFlCYXNpcyh2OiBWZWMzZik6IHZvaWQgeyB0aGlzLm0xMCA9IHYueDsgdGhpcy5tMTEgPSB2Lnk7IHRoaXMubTEyID0gdi56OyB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQt9C90LDRh9C10L3QuNGPINC80LDRgtGA0LjRhtGLINC/0L4g0L7RgdC4IFkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuXG4gICAgICoqL1xuICAgIGdldFlCYXNpcyA9ICgpOiBWZWMzZiA9PiBuZXcgVmVjM2YodGhpcy5tMTAsIHRoaXMubTExLCB0aGlzLm0xMik7XG5cbiAgICAvKipcbiAgICAgKiDQl9Cw0LTQsNGR0YIg0L7RgdGMIFog0LzQsNGC0YDQuNGG0LUuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdHZcdNCS0LXQutGC0L7RgCwg0LfQvdCw0YfQtdC90LjRjyDQutC+0YLQvtGA0L7Qs9C+INCx0YPQtNGD0YIg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGM0YHRjyDQsiDQutCw0YfQtdGB0YLQstC1INC+0YHQuCDQvNCw0YLRgNC40YbRiy5cbiAgICAgKi9cbiAgICBzZXRaQmFzaXModjogVmVjM2YpOiB2b2lkIHsgdGhpcy5tMjAgPSB2Lng7IHRoaXMubTIxID0gdi55OyB0aGlzLm0yMiA9IHYuejsgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LfQvdCw0YfQtdC90LjRjyDQvNCw0YLRgNC40YbRiyDQv9C+INC+0YHQuCBaLlxuICAgICAqXG4gICAgICogQHJldHVyblxuICAgICAqKi9cbiAgICBnZXRaQmFzaXMgPSAoKTogVmVjM2YgPT4gbmV3IFZlYzNmKHRoaXMubTIwLCB0aGlzLm0yMSwgdGhpcy5tMjIpO1xuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LzQsNGC0YDQuNGG0YMg0LIg0LLQuNC00LUg0LzQsNGB0YHQuNCy0LAg0LjQtyDQtNC10LLRj9GC0Lgg0YfQuNGB0LXQuy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5cdNCc0LDRgtGA0LjRhtCwINC60LDQuiDQvNCw0YHRgdC40LIg0LjQtyA5INGH0LjRgdC10LsuXG4gICAgICovXG4gICAgdG9BcnJheSA9ICgpOiBudW1iZXJbXSA9PiBbdGhpcy5tMDAsIHRoaXMubTAxLCB0aGlzLm0wMiwgdGhpcy5tMTAsIHRoaXMubTExLCB0aGlzLm0xMiwgdGhpcy5tMjAsIHRoaXMubTIxLCB0aGlzLm0yMl07XG5cbn1cbiIsIi8qKlxuICog0JzQsNGC0YDQuNGG0LAgNCo0LlxuICpcbiAqINCa0LvQsNGB0YEsINC40YHQv9C+0LvRjNC30YPQtdC80YvQuSDQtNC70Y8g0L7RgtGA0LjRgdC+0LLQutC4LlxuICovXG5leHBvcnQgY2xhc3MgTWF0NGYge1xuICAgIHJhdztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJhdyA9IE1hdDRmLmlkZW50aXR5KCk7XG4gICAgfVxuXG4gICAgdnRyYW5zbGF0ZSh2KSB7XG4gICAgICAgIE1hdDRmLnRyYW5zbGF0ZSh0aGlzLnJhdywgdi54LCB2LnksIHYueik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJvdGF0ZVkocmFkKSB7XG4gICAgICAgIE1hdDRmLnJvdGF0ZVkodGhpcy5yYXcsIHJhZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJvdGF0ZVgocmFkKSB7XG4gICAgICAgIE1hdDRmLnJvdGF0ZVgodGhpcy5yYXcsIHJhZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJvdGF0ZVoocmFkKSB7XG4gICAgICAgIE1hdDRmLnJvdGF0ZVoodGhpcy5yYXcsIHJhZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZzY2FsZSh2ZWMzKSB7XG4gICAgICAgIE1hdDRmLnNjYWxlKHRoaXMucmF3LCB2ZWMzLngsIHZlYzMueSwgdmVjMy56KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yYXcubGVuZ3RoOyBpKyspIHRoaXMucmF3W2ldID0gKGkgJSA1ID09PSAwKSA/IDEgOiAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGF0aWMgaWRlbnRpdHkoKSB7XG4gICAgICAgIGxldCBhID0gbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gICAgICAgIGFbMF0gPSBhWzVdID0gYVsxMF0gPSBhWzE1XSA9IDE7XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIHN0YXRpYyBwZXJzcGVjdGl2ZShvdXQsIGZvdnksIGFzcGVjdCwgbmVhciwgZmFyKSB7XG4gICAgICAgIGxldCBmID0gMS4wIC8gTWF0aC50YW4oZm92eSAvIDIpLFxuICAgICAgICAgICAgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICAgICAgICBvdXRbMF0gPSBmIC8gYXNwZWN0O1xuICAgICAgICBvdXRbMV0gPSAwO1xuICAgICAgICBvdXRbMl0gPSAwO1xuICAgICAgICBvdXRbM10gPSAwO1xuICAgICAgICBvdXRbNF0gPSAwO1xuICAgICAgICBvdXRbNV0gPSBmO1xuICAgICAgICBvdXRbNl0gPSAwO1xuICAgICAgICBvdXRbN10gPSAwO1xuICAgICAgICBvdXRbOF0gPSAwO1xuICAgICAgICBvdXRbOV0gPSAwO1xuICAgICAgICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgICAgIG91dFsxMV0gPSAtMTtcbiAgICAgICAgb3V0WzEyXSA9IDA7XG4gICAgICAgIG91dFsxM10gPSAwO1xuICAgICAgICBvdXRbMTRdID0gKDIgKiBmYXIgKiBuZWFyKSAqIG5mO1xuICAgICAgICBvdXRbMTVdID0gMDtcbiAgICB9XG5cbiAgICBzdGF0aWMgbm9ybWFsTWF0MyhvdXQsIGEpIHtcbiAgICAgICAgbGV0IGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV0sXG5cbiAgICAgICAgICAgIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMCxcbiAgICAgICAgICAgIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMCxcbiAgICAgICAgICAgIGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMCxcbiAgICAgICAgICAgIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMSxcbiAgICAgICAgICAgIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMSxcbiAgICAgICAgICAgIGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMixcbiAgICAgICAgICAgIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMCxcbiAgICAgICAgICAgIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMCxcbiAgICAgICAgICAgIGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMCxcbiAgICAgICAgICAgIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMSxcbiAgICAgICAgICAgIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMSxcbiAgICAgICAgICAgIGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMixcblxuXG4gICAgICAgICAgICBkZXQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgICAgICAgaWYgKCFkZXQpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGRldCA9IDEuMCAvIGRldDtcblxuICAgICAgICBvdXRbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcbiAgICAgICAgb3V0WzFdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XG4gICAgICAgIG91dFsyXSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xuXG4gICAgICAgIG91dFszXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xuICAgICAgICBvdXRbNF0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcbiAgICAgICAgb3V0WzVdID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XG5cbiAgICAgICAgb3V0WzZdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XG4gICAgICAgIG91dFs3XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xuICAgICAgICBvdXRbOF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICBzdGF0aWMgdHJhbnNmb3JtVmVjNChvdXQsIHYsIG0pIHtcbiAgICAgICAgb3V0WzBdID0gbVswXSAqIHZbMF0gKyBtWzRdICogdlsxXSArIG1bOF0gKiB2WzJdICsgbVsxMl0gKiB2WzNdO1xuICAgICAgICBvdXRbMV0gPSBtWzFdICogdlswXSArIG1bNV0gKiB2WzFdICsgbVs5XSAqIHZbMl0gKyBtWzEzXSAqIHZbM107XG4gICAgICAgIG91dFsyXSA9IG1bMl0gKiB2WzBdICsgbVs2XSAqIHZbMV0gKyBtWzEwXSAqIHZbMl0gKyBtWzE0XSAqIHZbM107XG4gICAgICAgIG91dFszXSA9IG1bM10gKiB2WzBdICsgbVs3XSAqIHZbMV0gKyBtWzExXSAqIHZbMl0gKyBtWzE1XSAqIHZbM107XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgc2NhbGUob3V0LCB4LCB5LCB6KSB7XG4gICAgICAgIG91dFswXSAqPSB4O1xuICAgICAgICBvdXRbMV0gKj0geDtcbiAgICAgICAgb3V0WzJdICo9IHg7XG4gICAgICAgIG91dFszXSAqPSB4O1xuICAgICAgICBvdXRbNF0gKj0geTtcbiAgICAgICAgb3V0WzVdICo9IHk7XG4gICAgICAgIG91dFs2XSAqPSB5O1xuICAgICAgICBvdXRbN10gKj0geTtcbiAgICAgICAgb3V0WzhdICo9IHo7XG4gICAgICAgIG91dFs5XSAqPSB6O1xuICAgICAgICBvdXRbMTBdICo9IHo7XG4gICAgICAgIG91dFsxMV0gKj0gejtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuXG4gICAgc3RhdGljIHJvdGF0ZVkob3V0LCByYWQpIHtcbiAgICAgICAgbGV0IHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICAgICAgYyA9IE1hdGguY29zKHJhZCksXG4gICAgICAgICAgICBhMDAgPSBvdXRbMF0sXG4gICAgICAgICAgICBhMDEgPSBvdXRbMV0sXG4gICAgICAgICAgICBhMDIgPSBvdXRbMl0sXG4gICAgICAgICAgICBhMDMgPSBvdXRbM10sXG4gICAgICAgICAgICBhMjAgPSBvdXRbOF0sXG4gICAgICAgICAgICBhMjEgPSBvdXRbOV0sXG4gICAgICAgICAgICBhMjIgPSBvdXRbMTBdLFxuICAgICAgICAgICAgYTIzID0gb3V0WzExXTtcblxuXG4gICAgICAgIG91dFswXSA9IGEwMCAqIGMgLSBhMjAgKiBzO1xuICAgICAgICBvdXRbMV0gPSBhMDEgKiBjIC0gYTIxICogcztcbiAgICAgICAgb3V0WzJdID0gYTAyICogYyAtIGEyMiAqIHM7XG4gICAgICAgIG91dFszXSA9IGEwMyAqIGMgLSBhMjMgKiBzO1xuICAgICAgICBvdXRbOF0gPSBhMDAgKiBzICsgYTIwICogYztcbiAgICAgICAgb3V0WzldID0gYTAxICogcyArIGEyMSAqIGM7XG4gICAgICAgIG91dFsxMF0gPSBhMDIgKiBzICsgYTIyICogYztcbiAgICAgICAgb3V0WzExXSA9IGEwMyAqIHMgKyBhMjMgKiBjO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cblxuICAgIHN0YXRpYyByb3RhdGVYKG91dCwgcmFkKSB7XG4gICAgICAgIGxldCBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgICAgICAgIGMgPSBNYXRoLmNvcyhyYWQpLFxuICAgICAgICAgICAgYTEwID0gb3V0WzRdLFxuICAgICAgICAgICAgYTExID0gb3V0WzVdLFxuICAgICAgICAgICAgYTEyID0gb3V0WzZdLFxuICAgICAgICAgICAgYTEzID0gb3V0WzddLFxuICAgICAgICAgICAgYTIwID0gb3V0WzhdLFxuICAgICAgICAgICAgYTIxID0gb3V0WzldLFxuICAgICAgICAgICAgYTIyID0gb3V0WzEwXSxcbiAgICAgICAgICAgIGEyMyA9IG91dFsxMV07XG5cblxuICAgICAgICBvdXRbNF0gPSBhMTAgKiBjICsgYTIwICogcztcbiAgICAgICAgb3V0WzVdID0gYTExICogYyArIGEyMSAqIHM7XG4gICAgICAgIG91dFs2XSA9IGExMiAqIGMgKyBhMjIgKiBzO1xuICAgICAgICBvdXRbN10gPSBhMTMgKiBjICsgYTIzICogcztcbiAgICAgICAgb3V0WzhdID0gYTIwICogYyAtIGExMCAqIHM7XG4gICAgICAgIG91dFs5XSA9IGEyMSAqIGMgLSBhMTEgKiBzO1xuICAgICAgICBvdXRbMTBdID0gYTIyICogYyAtIGExMiAqIHM7XG4gICAgICAgIG91dFsxMV0gPSBhMjMgKiBjIC0gYTEzICogcztcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICBzdGF0aWMgcm90YXRlWihvdXQsIHJhZCkge1xuICAgICAgICBsZXQgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgICAgIGEwMCA9IG91dFswXSxcbiAgICAgICAgICAgIGEwMSA9IG91dFsxXSxcbiAgICAgICAgICAgIGEwMiA9IG91dFsyXSxcbiAgICAgICAgICAgIGEwMyA9IG91dFszXSxcbiAgICAgICAgICAgIGExMCA9IG91dFs0XSxcbiAgICAgICAgICAgIGExMSA9IG91dFs1XSxcbiAgICAgICAgICAgIGExMiA9IG91dFs2XSxcbiAgICAgICAgICAgIGExMyA9IG91dFs3XTtcblxuXG4gICAgICAgIG91dFswXSA9IGEwMCAqIGMgKyBhMTAgKiBzO1xuICAgICAgICBvdXRbMV0gPSBhMDEgKiBjICsgYTExICogcztcbiAgICAgICAgb3V0WzJdID0gYTAyICogYyArIGExMiAqIHM7XG4gICAgICAgIG91dFszXSA9IGEwMyAqIGMgKyBhMTMgKiBzO1xuICAgICAgICBvdXRbNF0gPSBhMTAgKiBjIC0gYTAwICogcztcbiAgICAgICAgb3V0WzVdID0gYTExICogYyAtIGEwMSAqIHM7XG4gICAgICAgIG91dFs2XSA9IGExMiAqIGMgLSBhMDIgKiBzO1xuICAgICAgICBvdXRbN10gPSBhMTMgKiBjIC0gYTAzICogcztcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW52ZXJ0KG91dCwgbWF0KSB7XG4gICAgICAgIGlmIChtYXQgPT09IHVuZGVmaW5lZCkgbWF0ID0gb3V0O1xuXG4gICAgICAgIGxldCBhMDAgPSBtYXRbMF0sIGEwMSA9IG1hdFsxXSwgYTAyID0gbWF0WzJdLCBhMDMgPSBtYXRbM10sXG4gICAgICAgICAgICBhMTAgPSBtYXRbNF0sIGExMSA9IG1hdFs1XSwgYTEyID0gbWF0WzZdLCBhMTMgPSBtYXRbN10sXG4gICAgICAgICAgICBhMjAgPSBtYXRbOF0sIGEyMSA9IG1hdFs5XSwgYTIyID0gbWF0WzEwXSwgYTIzID0gbWF0WzExXSxcbiAgICAgICAgICAgIGEzMCA9IG1hdFsxMl0sIGEzMSA9IG1hdFsxM10sIGEzMiA9IG1hdFsxNF0sIGEzMyA9IG1hdFsxNV0sXG5cbiAgICAgICAgICAgIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMCxcbiAgICAgICAgICAgIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMCxcbiAgICAgICAgICAgIGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMCxcbiAgICAgICAgICAgIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMSxcbiAgICAgICAgICAgIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMSxcbiAgICAgICAgICAgIGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMixcbiAgICAgICAgICAgIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMCxcbiAgICAgICAgICAgIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMCxcbiAgICAgICAgICAgIGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMCxcbiAgICAgICAgICAgIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMSxcbiAgICAgICAgICAgIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMSxcbiAgICAgICAgICAgIGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMixcblxuXG4gICAgICAgICAgICBkZXQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgICAgICAgaWYgKCFkZXQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gICAgICAgIG91dFswXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xuICAgICAgICBvdXRbMV0gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcbiAgICAgICAgb3V0WzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XG4gICAgICAgIG91dFszXSA9IChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0O1xuICAgICAgICBvdXRbNF0gPSAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldDtcbiAgICAgICAgb3V0WzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XG4gICAgICAgIG91dFs2XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xuICAgICAgICBvdXRbN10gPSAoYTIwICogYjA1IC0gYTIyICogYjAyICsgYTIzICogYjAxKSAqIGRldDtcbiAgICAgICAgb3V0WzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XG4gICAgICAgIG91dFs5XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuICAgICAgICBvdXRbMTBdID0gKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQ7XG4gICAgICAgIG91dFsxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcbiAgICAgICAgb3V0WzEyXSA9IChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0O1xuICAgICAgICBvdXRbMTNdID0gKGEwMCAqIGIwOSAtIGEwMSAqIGIwNyArIGEwMiAqIGIwNikgKiBkZXQ7XG4gICAgICAgIG91dFsxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcbiAgICAgICAgb3V0WzE1XSA9IChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0O1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyB0cmFuc2xhdGUob3V0LCB4LCB5LCB6KSB7XG4gICAgICAgIG91dFsxMl0gPSBvdXRbMF0gKiB4ICsgb3V0WzRdICogeSArIG91dFs4XSAqIHogKyBvdXRbMTJdO1xuICAgICAgICBvdXRbMTNdID0gb3V0WzFdICogeCArIG91dFs1XSAqIHkgKyBvdXRbOV0gKiB6ICsgb3V0WzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IG91dFsyXSAqIHggKyBvdXRbNl0gKiB5ICsgb3V0WzEwXSAqIHogKyBvdXRbMTRdO1xuICAgICAgICBvdXRbMTVdID0gb3V0WzNdICogeCArIG91dFs3XSAqIHkgKyBvdXRbMTFdICogeiArIG91dFsxNV07XG4gICAgfVxufVxuIiwiaW1wb3J0IHtDb2xvdXI0Zn0gZnJvbSAnLi9Db2xvdXI0Zic7XG5pbXBvcnQge1ZlYzNmfSBmcm9tICcuL1ZlYzNmJztcbmltcG9ydCB7VmVjMmZ9IGZyb20gJy4vVmVjMmYnO1xuXG4vKipcbiAqINCS0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90YvQtSDQvNC10YLQvtC00YsuXG4gKi9cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gICAgLy8g0JrQvtC90YHRgtCw0L3RgtGLINC00LvRjyDQv9C10YDQtdCy0L7QtNCwINC40Lcg0LPRgNCw0LTRg9GB0L7QsiDQsiDRgNCw0LTQuNCw0L3RiyDQuCDQvdCw0L7QsdC+0YDQvtGCXG4gICAgc3RhdGljIERFR1NfVE9fUkFEUyA9IE1hdGguUEkgLyAxODAuMDtcbiAgICBzdGF0aWMgUkFEU19UT19ERUdTID0gMTgwLjAgLyBNYXRoLlBJO1xuXG4gICAgLy8g0J/RgNC40LLQtdC00LXQvdC40LUg0YfQuNGB0LXQuyDQuiDRhNC+0YDQvNCw0YLRgyDRgSDRgtGA0LXQvNGPINC30L3QsNC60LDQvNC4INC/0L7RgdC70LUg0LfQsNC/0Y/RgtC+0LlcbiAgICBzdGF0aWMgZm9ybWF0dGVyID0gKG51bSkgPT4gbnVtLnRvRml4ZWQoMyk7XG5cbiAgICAvKipcbiAgICAgKiDQndC10LrQvtGC0L7RgNGL0LUg0YbQstC10YLQsC5cbiAgICAgKi9cbiAgICBzdGF0aWMgUkVEICAgICAgID0gbmV3IENvbG91cjRmKFsxLjAsIDAuMCwgMC4wLCAxLjBdKTtcbiAgICBzdGF0aWMgR1JFRU4gICAgID0gbmV3IENvbG91cjRmKFswLjAsIDEuMCwgMC4wLCAxLjBdKTtcbiAgICBzdGF0aWMgQkxVRSAgICAgID0gbmV3IENvbG91cjRmKFswLjAsIDAuMCwgMS4wLCAxLjBdKTtcbiAgICBzdGF0aWMgTUlEX1JFRCAgID0gbmV3IENvbG91cjRmKFswLjYsIDAuMCwgMC4wLCAxLjBdKTtcbiAgICBzdGF0aWMgTUlEX0dSRUVOID0gbmV3IENvbG91cjRmKFswLjAsIDAuNiwgMC4wLCAxLjBdKTtcbiAgICBzdGF0aWMgTUlEX0JMVUUgID0gbmV3IENvbG91cjRmKFswLjAsIDAuMCwgMC42LCAxLjBdKTtcbiAgICBzdGF0aWMgQkxBQ0sgICAgID0gbmV3IENvbG91cjRmKFswLjAsIDAuMCwgMC4wLCAxLjBdKTtcbiAgICBzdGF0aWMgR1JFWSAgICAgID0gbmV3IENvbG91cjRmKFswLjUsIDAuNSwgMC41LCAxLjBdKTtcbiAgICBzdGF0aWMgV0hJVEUgICAgID0gbmV3IENvbG91cjRmKFsxLjAsIDEuMCwgMS4wLCAxLjBdKTtcbiAgICBzdGF0aWMgWUVMTE9XICAgID0gbmV3IENvbG91cjRmKFsxLjAsIDEuMCwgMC4wLCAxLjBdKTtcbiAgICBzdGF0aWMgQ1lBTiAgICAgID0gbmV3IENvbG91cjRmKFswLjAsIDEuMCwgMS4wLCAxLjBdKTtcbiAgICBzdGF0aWMgTUFHRU5UQSAgID0gbmV3IENvbG91cjRmKFsxLjAsIDAuMCwgMS4wLCAxLjBdKTtcblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC60L7RgtCw0L3Qs9C10L3RgSDRg9Cz0LvQsCDQsiDRgNCw0LTQuNCw0L3QsNGFLlxuICAgICAqIFJldHVybiB0aGUgY28tdGFuZ2VudCBvZiBhbiBhbmdsZSBzcGVjaWZpZWQgaW4gcmFkaWFucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0YW5nbGVSYWRzXHTQo9Cz0L7QuyDQstGA0LDQtNC40LDQvdCw0YUuXG4gICAgICogQHJldHVyblx0XHRcdFx00JrQvtGC0LDQvdCz0LXQvdGBINGD0LPQu9CwLlxuICAgICAqL1xuICAgIHN0YXRpYyBjb3QgPSAoYW5nbGVSYWRzOiBudW1iZXIpID0+ICggMS4wIC8gTWF0aC50YW4oYW5nbGVSYWRzKSApO1xuXG4gICAgLyoqXG4gICAgICog0JrQvtC90LLQtdGA0YLQuNGA0YPQtdGCINC40Lcg0YDQsNC00LjQsNC9INCyINCz0YDQsNC00YPRgdGLLlxuICAgICAqXG4gICAgICogQHBhcmFtXHRhbmdsZVJhZHNcdNCj0LPQvtC7INCyINGA0LDQtNC40LDQvdCw0YUuXG4gICAgICogQHJldHVyblx0XHRcdFx00KPQs9C+0Lsg0LIg0LPRgNCw0LTRg9GB0LDRhS5cbiAgICAgKi9cbiAgICBzdGF0aWMgcmFkaWFuc1RvRGVncmVlcyA9IChhbmdsZVJhZHM6IG51bWJlcik6IG51bWJlciA9PiBhbmdsZVJhZHMgKiBVdGlscy5SQURTX1RPX0RFR1M7XG5cbiAgICAvKipcbiAgICAgKiDQmtC+0L3QstC10YDRgtC40YDRg9C10YIg0LjQtyDQs9GA0LDQtNGD0YHQvtCyINCyINGA0LDQtNC40LDQvdGLLlxuICAgICAqXG4gICAgICogQHBhcmFtXHRhbmdsZURlZ3NcdNCj0LPQvtC7INCyINCz0YDQsNC00YPRgdCw0YUuXG4gICAgICogQHJldHVyblx0XHRcdFx00KPQs9C+0Lsg0LIg0YDQsNC00LjQsNC90LDRhS5cbiAgICAgKi9cbiAgICBzdGF0aWMgZGVncmVlc1RvUmFkaWFucyA9IChhbmdsZURlZ3M6IG51bWJlcik6IG51bWJlciA9PiBhbmdsZURlZ3MgKiBVdGlscy5ERUdTX1RPX1JBRFM7XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCy0LXRgiDQt9C90LDQuiDRh9C40YHQu9CwLlxuICAgICAqXG4gICAgICogQHBhcmFtXHR2YWx1ZVx00KfQuNGB0LvQvi5cbiAgICAgKiBAcmV0dXJuXHRcdFx0MSDQtdGB0LvQuCDQt9C90LDRh9C10L3QuNC1INCx0L7Qu9GM0YjQtSDQuNC70Lgg0YDQsNCy0L3QviDQvdGD0LvRjiwg0LjQvdCw0YfQtSAtMS5cbiAgICAgKi9cbiAgICBzdGF0aWMgc2lnbih2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHZhbHVlID49IDAuMCkge1xuICAgICAgICAgICAgcmV0dXJuIDEuMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTEuMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktCw0LvQuNC00LjRgNGD0LXRgiDQvdCw0L/RgNCw0LLQu9C10L3QuNC1INCy0LXQutGC0L7RgNCwLCDRh9GC0L7QsdGLINGD0LHQtdC00LjRgtGM0YHRjywg0YfRgtC+INC+0L0g0L3QtSDRgNCw0LLQtdC9INC90YPQu9GOLlxuICAgICAqIDxwPlxuICAgICAqINCV0YHQu9C4INC00LvQuNC90LAg0LLQtdC60YLQvtGA0LAg0YDQsNCy0L3QsCDQvdGD0LvRjiDQsdGA0L7RgdCw0LXRgiBFcnJvci5cbiAgICAgKiBAcGFyYW1cdGRpcmVjdGlvblVWICAgICDQktC10LrRgtC+0YAuXG4gICAgICovXG4gICAgc3RhdGljIHZhbGlkYXRlRGlyZWN0aW9uVVYoZGlyZWN0aW9uVVY6IFZlYzJmIHwgVmVjM2YpOiB2b2lkIHtcbiAgICAgICAgaWYgKCBkaXJlY3Rpb25VVi5sZW5ndGgoKSA8PSAwLjApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmVjIGRpcmVjdGlvbiB1bml0IHZlY3RvciBjYW5ub3QgYmUgemVyby4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0LDQu9C40LTQuNGA0YPQtdGCINC00LvQuNC90YMg0LrQvtGB0YLQuCwg0YfRgtC+0LHRiyDRg9Cx0LXQtNCw0YLRjNGB0Y8sINGH0YLQviDQvtC90LAg0L3QtSDQvdGD0LvQtdCy0LDRjy5cbiAgICAgKiA8cD5cbiAgICAgKiDQldGB0LvQuCDQtNC70LjQvdCwINC60L7RgdGC0Lgg0YDQsNCy0L3QsCDQvdGD0LvRjiDQsdGA0L7RgdCw0LXRgiBFcnJvci5cbiAgICAgKiBAcGFyYW1cdGxlbmd0aFx00JTQu9C40L3QsC5cbiAgICAgKi9cbiAgICBzdGF0aWMgdmFsaWRhdGVMZW5ndGgobGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKGxlbmd0aCA8IDAuMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMZW5ndGggbXVzdCBiZSBhIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YTQu9Cw0LMsINC/0L7QutCw0LfRi9Cy0LDRjtGJ0LjQuSDRgNCw0LLQvdGLINC70Lgg0LfQvdCw0YfQtdC90LjRjyDRgSDQt9Cw0LTQsNC90L3Ri9C8INGD0YDQvtCy0L3QtdC8INGC0LXRgNC/0LjQvNC+0YHRgtC4LlxuICAgICAqXG4gICAgICogQHBhcmFtXHRhXHRcdNCf0LXRgNCy0L7QtSDQt9C90LDRh9C10L3QuNC1LlxuICAgICAqIEBwYXJhbVx0Ylx0XHTQktGC0L7RgNC+0LUg0LfQvdCw0YfQtdC90LjQtS5cbiAgICAgKiBAcGFyYW1cdHRvbGVyYW5jZVx00JzQsNC60YHQuNC80LDQu9GM0L3QsNGPINGA0LDQt9C90LjRhtCwINC80LXQttC00YMg0YfQuNGB0LvQsNC80Lgg0L/RgNC4INC60L7RgtC+0YDQvtC5INC+0L3QuCDQsdGD0LTRg9GCINGB0YfQuNGC0LDRgtGM0YHRjyDRgNCw0LLQvdGL0LzQuC5cbiAgICAgKiBAcmV0dXJuXHRcdFx00KDQsNCy0L3RiyDQu9C4INC30L3QsNGH0LXQvdC40Y8uXG4gICAgICovXG4gICAgc3RhdGljIGFwcHJveGltYXRlbHlFcXVhbHMgPSAoYTogbnVtYmVyLCBiOiBudW1iZXIsIHRvbGVyYW5jZTogbnVtYmVyKTogYm9vbGVhbiA9PiAoTWF0aC5hYnMoYSAtIGIpIDw9IHRvbGVyYW5jZSk7XG59XG4iLCJpbXBvcnQge1V0aWxzfSBmcm9tICcuL1V0aWxzJztcblxuLyoqXG4gKiAyRCDQstC10LrRgtC+0YAuXG4gKiA8cD5cbiAqINCh0L7RgdGC0L7QuNGCINC40LcgeCDQuCB5INC/0L7Qu9C10LksINC30LDQtNCw0Y7RidC40YUg0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQstC10LrRgtC+0YDQsC5cbiAqL1xuZXhwb3J0IGNsYXNzIFZlYzJmIHtcbiAgICB4OiBudW1iZXIgPSAwO1xuICAgIHk6IG51bWJlciA9IDA7XG5cbiAgICAvLyAtLS0tLS0tLS0tIENvbnN0cnVjdG9ycyAtLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiDQmtC+0L3RgdGC0YDRg9C60YLQvtGALlxuICAgICAqIDxwPlxuICAgICAqINCf0YDQuNC90LjQvNCw0LXRgiDRgtGA0Lgg0LLQsNGA0LjQsNGG0LjQuCDQv9Cw0YDQsNC80LXRgtGA0L7QsjpcbiAgICAgKiA8cD5cbiAgICAgKiDQkdC10Lcg0L/QsNGA0LDQvNC10YLRgNC+0LIuINCX0LDQv9C+0LvQvdGP0LXRgiB4INC4IHkg0LfQvdCw0YfQtdC90LjRj9C80Lgg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4gKNC90YPQu9GP0LzQuCkuXG4gICAgICogPHA+XG4gICAgICog0JrQvtC90YHRgtGA0YPQutGC0L7RgCDQutC+0L/QuNGA0L7QstCw0L3QuNGPLiDQl9Cw0LTQsNGR0YIgeCDQuCB5INGA0LDQstC90YvQvNC4INC30L3QsNGH0LXQvdC40Y/QvCBzb3VyY2Ut0LLQtdC60YLQvtGA0LAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc291cmNlINCS0LXQutGC0L7RgCwg0L/QsNGA0LDQvNC10YLRgNGLINC60L7RgtC+0YDQvtCz0L4g0LHRg9C00YPRgiDRgdC60L7Qv9C40YDQvtCy0LDQvdGLLlxuICAgICAqIDxwPlxuICAgICAqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0YEg0LTQstGD0LzRjyDQv9Cw0YDQsNC80LXRgtGA0LDQvNC4LCDQt9Cw0LTQsNGO0YnQuNC80LggeCDQuCB5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHNvdXJjZSDQl9C90LDRh9C10L3QuNC1INC60L7QvtGA0LTQuNC90LDRgtGLINC/0L4g0L7RgdC4IHguXG4gICAgICogQHBhcmFtIHkg0JfQvdCw0YfQtdC90LjQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQv9C+INC+0YHQuCB5LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZT86IFZlYzJmIHwgbnVtYmVyLCB5PzogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgVmVjMmYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gc291cmNlLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IHNvdXJjZS55O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBWZWMyZiBjb25zdHJ1Y3RvciBwYXJhbXMhJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggPSBzb3VyY2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dyb25nIFZlYzJmIGNvbnN0cnVjdG9yIHBhcmFtcyEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tIE1ldGhvZHMgLS0tLS0tLS0tLVxuXG4gICAgLyoqXG4gICAgICog0J/RgNC+0LLQtdGA0Y/QtdGCINCy0LXQutGC0L7RgNCwINC90LAg0L/RgNC40LzQtdGA0L3QvtC1INGA0LDQstC10L3RgdGC0LLQvi5cbiAgICAgKiDQktC10LrRgtC+0YDRiyDQv9GA0LjQvNC10YDQvdC+INGA0LDQstC90Ysg0LXRgdC70Lgg0LzQvtC00YPQu9GMINC40YUg0LrQvtC+0YDQtNC40L3QsNGCINC/0L4g0LrQsNC20LTQvtC5INC40Lcg0L7RgdC10Lkg0LzQtdC90YzRiNC1IHRvbGVyYW5jZS5cbiAgICAgKiA8cD5cbiAgICAgKiDQldGB0LvQuCDQt9C90LDRh9C10L3QuNC1IHRvbGVyYW5jZSDQvNC10L3RjNGI0LUgMCAtINCx0YDQvtGB0LDQtdC8INC+0YjQuNCx0LrRgy5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0dlx0XHRcdNCS0LXQutGC0L7RgCDQtNC70Y8g0YHRgNCw0LLQvdC10L3QuNGPLlxuICAgICAqIEBwYXJhbSAgIHRvbGVyYW5jZVx00JfQvdCw0YfQtdC90LjQtSBcItGC0LXRgNC/0LjQvNC+0YHRgtC4XCIg0Log0YDQsNC30L3QuNGG0LUuXG4gICAgICogQHJldHVyblx0XHRcdFx00KDQtdC30YPQu9GM0YLQsNGCINGB0YDQsNCy0L3QtdC90LjRjy5cbiAgICAgKi9cbiAgICBhcHByb3hpbWF0ZWx5RXF1YWxzKHY6IFZlYzJmLCB0b2xlcmFuY2U6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodG9sZXJhbmNlIDwgMCkge1x0dGhyb3cgbmV3IEVycm9yKCdFcXVhbGl0eSB0aHJlc2hvbGQgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gMC4wJyk7XHR9XG4gICAgICAgIHJldHVybiAoTWF0aC5hYnModGhpcy54IC0gdi54KSA8IHRvbGVyYW5jZSAmJiAgTWF0aC5hYnModGhpcy55IC0gdi55KSA8IHRvbGVyYW5jZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YHRg9C80LzRgyDQtNCw0L3QvdC+0LPQviDQstC10LrRgtC+0YDQsCDRgSDQstC10LrRgtC+0YDQvtC8INC40Lcg0L/QsNGA0LDQvNC10YLRgNC+0LIsINC90LUg0LzQtdC90Y/RjyDQtNCw0L3QvdGL0Lkg0LLQtdC60YLQvtGALlxuICAgICAqXG4gICAgICogQHBhcmFtXHR2XHTQktC10LrRgtC+0YAuXG4gICAgICogQHJldHVyblx0XHTQoNC10LfRg9C70YzRgtCw0YIg0YHQu9C+0LbQtdC90LjRjyDQtNCw0L3QvdC+0LPQviDQstC10LrRgtC+0YDQsCDRgSDQstC10LrRgtC+0YDQvtC8INC/0LDRgNCw0LzQtdGC0YDQvtC8LlxuICAgICAqKi9cbiAgICBwbHVzID0gKHY6IFZlYzJmKTogVmVjMmYgPT4gbmV3IFZlYzJmKHRoaXMueCArIHYueCwgdGhpcy55ICsgdi55KTtcblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGA0LDQt9C90L7RgdGC0Ywg0LTQsNC90L3QvtCz0L4g0LLQtdC60YLQvtGA0LAg0YEg0LLQtdC60YLQvtGA0L7QvCDQuNC3INC/0LDRgNCw0LzQtdGC0YDQvtCyLCDQvdC1INC80LXQvdGP0Y8g0LTQsNC90L3Ri9C5INCy0LXQutGC0L7RgC5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0dlx00JLQtdC60YLQvtGALlxuICAgICAqIEByZXR1cm5cdFx00KDQtdC30YPQu9GM0YLQsNGCINCy0YvRh9C40YLQsNC90LjRjyDQuNC3INC00LDQvdC90L7Qs9C+INCy0LXQutGC0L7RgNCwINCy0LXQutGC0L7RgNCwLdC/0LDRgNCw0LzQtdGC0YDQsC5cbiAgICAgKiovXG4gICAgbWludXMgPSAodjogVmVjMmYpOiBWZWMyZiA9PiBuZXcgVmVjMmYodGhpcy54IC0gdi54LCB0aGlzLnkgLSB2LnkpO1xuXG4gICAgLyoqXG4gICAgICog0KPQvNC90L7QttCw0LXRgiDQstC10LrRgtC+0YAg0L3QsCDRh9C40YHQu9C+INC4INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGA0LXQt9GD0LvRjNGC0LDRgiwg0L3QtSDQvNC10L3Rj9GPINC/0YDQuCDRjdGC0L7QvCDQuNGB0YXQvtC00L3Ri9C5INCy0LXQutGC0L7RgC5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0dmFsdWVcdNCn0LjRgdC70L4sINC90LAg0LrQvtGC0L7RgNC+0LUg0L3QtdC+0LHRhdC+0LTQuNC80L4g0YPQvNC90L7QttC40YLRjC5cbiAgICAgKiBAcmV0dXJuXHRcdFx00KDQtdC30YPQu9GM0YLQsNGCINGD0LzQvdC+0LbQtdC90LjRjyDQtNCw0L3QvdC+0LPQviDQstC10LrRgtC+0YDQsCDQvdCwINGH0LjRgdC70L4uXG4gICAgICoqL1xuICAgIHRpbWVzID0gKHZhbHVlOiBudW1iZXIpOiBWZWMyZiA9PiBuZXcgVmVjMmYodGhpcy54ICogdmFsdWUsIHRoaXMueSAqIHZhbHVlKTtcblxuICAgIC8qKlxuICAgICAqINCU0LXQu9C40YIg0LLQtdC60YLQvtGAINC90LAg0YfQuNGB0LvQviDQuCDQstC+0LfQstGA0LDRidCw0LXRgiDRgNC10LfRg9C70YzRgtCw0YIsINC90LUg0LzQtdC90Y/RjyDQv9GA0Lgg0Y3RgtC+0Lwg0LjRgdGF0L7QtNC90YvQuSDQstC10LrRgtC+0YAuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdHZhbHVlXHTQp9C40YHQu9C+LCDQvdCwINC60L7RgtC+0YDQvtC1INC90LXQvtCx0YXQvtC00LjQvNC+INC/0L7QtNC10LvQuNGC0YwuXG4gICAgICogQHJldHVyblx0XHRcdNCg0LXQt9GD0LvRjNGC0LDRgiDQtNC10LvQtdC90LjRjyDQtNCw0L3QvdC+0LPQviDQstC10LrRgtC+0YDQsCDQvdCwINGH0LjRgdC70L4uXG4gICAgICoqL1xuICAgIGRpdmlkZWRCeSA9ICh2YWx1ZTogbnVtYmVyKTogVmVjMmYgPT4gbmV3IFZlYzJmKHRoaXMueCAvIHZhbHVlLCB0aGlzLnkgLyB2YWx1ZSk7XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQstC10LrRgtC+0YAg0L/RgNC+0YLQuNCy0L7Qv9C+0LvQvtC20L3QvtCz0L4g0L3QsNC/0YDQsNCy0LvQtdC90LjRjy5cbiAgICAgKiDQodCw0Lwg0LLQtdC60YLQvtGAINC90LUg0LzQtdC90Y/QtdGCLlxuICAgICAqXG4gICAgICogQHJldHVybiDQktC10LrRgtC+0YAg0L/RgNC+0YLQuNCy0L7Qv9C+0LvQvtC20L3QvtCz0L4g0L3QsNC/0YDQsNCy0LvQtdC90LjRjy5cbiAgICAgKi9cbiAgICBuZWdhdGVkID0gKCk6IFZlYzJmID0+IG5ldyBWZWMyZigtdGhpcy54LCAtdGhpcy55KTtcblxuICAgIC8qKlxuICAgICAqINCX0LDQtNCw0ZHRgiDQt9C90LDRh9C10L3QuNGPINC/0L7Qu9C10Lkg0LLQtdC60YLQvtGA0LAuXG4gICAgICog0J/RgNC40L3QuNC80LDQtdGCINC00LLQtSDQstCw0YDQuNCw0YbQuNC4INC/0LDRgNCw0LzQtdGC0YDQvtCyOlxuICAgICAqIDxwPlxuICAgICAqINCe0LTQuNC9INC/0LDRgNCw0LzQtdGC0YAgLSDQstC10LrRgtC+0YAg0LjRgdGC0L7Rh9C90LjQui5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0c291cmNlXHTQktC10LrRgtC+0YAt0LjRgdGC0L7Rh9C90LjQui5cbiAgICAgKiA8cD5cbiAgICAgKiDQlNCy0LAg0L/QsNGA0LDQvNC10YLRgNCwIC0geCDQuCB5INGB0L7QvtGC0LLQtdGC0YHRgtCy0LXQvdC90L4uXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdHNvdXJjZVx00JfQvdCw0YfQtdC90LjQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQv9C+IFguXG4gICAgICogQHBhcmFtXHR5XHTQl9C90LDRh9C10L3QuNC1INC60L7QvtGA0LTQuNC90LDRgtGLINC/0L4gWS5cbiAgICAgKi9cbiAgICBzZXQoc291cmNlOiBWZWMyZiB8IG51bWJlciwgeT86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgVmVjMmYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gc291cmNlLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IHNvdXJjZS55O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBWZWMyZiBzZXQgcGFyYW1zIScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gc291cmNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBWZWMyZiBzZXQgcGFyYW1zIScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBWZWMyZiBzZXQgcGFyYW1zIScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LTQu9C40L3RgyDQstC10LrRgtC+0YDQsC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5cdNCU0LvQuNC90LAg0LLQtdC60YLQvtGA0LAuXG4gICAgICovXG4gICAgbGVuZ3RoID0gKCk6IG51bWJlciA9PiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcblxuICAgIC8qKlxuICAgICAqINCd0L7RgNC80LDQu9C40LfRg9C10YIg0Lgg0LLQvtC30LLRgNCw0YnQsNC10YIg0YHQtdCx0Y8uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuXHTQndC+0YDQvNCw0LvQuNC30L7QstCw0L3QvdGL0Lkg0LLQtdC60YLQvtGALlxuICAgICAqL1xuICAgIG5vcm1hbGlzZSgpOiBWZWMyZiB7XG4gICAgICAgIGNvbnN0IG1hZ25pdHVkZSA9IE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuXG4gICAgICAgIGlmIChtYWduaXR1ZGUgPiAwLjApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBtYWduaXR1ZGU7XG4gICAgICAgICAgICB0aGlzLnkgLz0gbWFnbml0dWRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0L3QvtGA0LzQsNC70LjQt9C+0LLQsNC90L3Rg9GOINCy0LXRgNGB0LjRjiDQstC10LrRgtC+0YDQsC3Qv9Cw0YDQsNC80LXRgtGA0LAsINC90LUg0LzQtdC90Y/Rj9GB0Ywg0YHQsNC8LlxuICAgICAqXG4gICAgICogQHBhcmFtIHNvdXJjZSDQktC10LrRgtC+0YAg0LTQu9GPINC90L7RgNC80LDQu9C40LfQsNGG0LjQuC5cbiAgICAgKiBAcmV0dXJuXHTQndC+0YDQvNCw0LvQuNC30L7QstCw0L3QvdGL0Lkg0LLQtdC60YLQvtGALlxuICAgICAqL1xuICAgIHN0YXRpYyBub3JtYWxpc2VkKHNvdXJjZTogVmVjMmYpOiBWZWMyZiB7IHJldHVybiBuZXcgVmVjMmYoc291cmNlKS5ub3JtYWxpc2UoKTsgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQstC10LrRgtC+0YDQsCwg0LTQu9GPINC60L7RgtC+0YDQvtCz0L4gYSAtINC90LDRh9Cw0LvRjNC90LDRjyDRgtC+0YfQutCwLCDQsCBiIC0g0LrQvtC90LXRh9C90LDRjy5cbiAgICAgKiDQndCw0L/RgNCw0LLQu9C10L3QuNC1INCx0YPQtNC10YIg0LXQtNC40L3QuNGH0L3Ri9C8INCy0LXQutGC0L7RgNC+0LwuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdGFcdNCd0LDRh9Cw0LvRjNC90LDRjyDRgtC+0YfQutCwLlxuICAgICAqIEBwYXJhbVx0Ylx00JrQvtC90LXRh9C90LDRjyDRgtC+0YfQutCwLlxuICAgICAqIEByZXR1cm5cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0RGlyZWN0aW9uVVYgPSAoYTogVmVjMmYsIGI6IFZlYzJmKTogVmVjMmYgPT4gYi5taW51cyhhKS5ub3JtYWxpc2UoKTtcblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGA0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0LTQstGD0LzRjyDRgtC+0YfQutCw0LzQuC5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0djFcdNCd0LDRh9Cw0LvRjNC90LDRjyDQv9C+0LfQuNGG0LjRjy5cbiAgICAgKiBAcGFyYW1cdHYyXHTQmtC+0L3QtdGH0L3QsNGPINC/0L7Qt9C40YbQuNGPLlxuICAgICAqIEByZXR1cm5cdFx00KDQsNGB0YHRgtC+0Y/QvdC40LUuXG4gICAgICovXG4gICAgc3RhdGljIGRpc3RhbmNlQmV0d2VlbiA9ICh2MTogVmVjMmYsIHYyOlZlYzJmKTogbnVtYmVyXHQ9PiBNYXRoLnNxcnQoICh2Mi54IC0gdjEueCkgKiAodjIueCAtIHYxLngpICsgKHYyLnkgLSB2MS55KSAqICh2Mi55IC0gdjEueSkgKTtcblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0LrQsNC70Y/RgNC90L7QtSDQv9GA0L7QuNC30LLQtdC00LXQvdC40LUg0LTQstGD0YUg0LLQtdC60YLQvtGA0L7QsiDQv9Cw0YDQsNC80LXRgtGA0L7Qsi5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0djFcdNCf0LXRgNCy0YvQuSDQstC10LrRgtC+0YAuXG4gICAgICogQHBhcmFtXHR2Mlx00JLRgtC+0YDQvtC5INCy0LXQutGC0L7RgC5cbiAgICAgKiBAcmV0dXJuXHRcdNCh0LrQsNC70Y/RgNC90L7QtSDQv9GA0L7QuNC30LLQtdC00LXQvdC40LUuXG4gICAgICovXG4gICAgc3RhdGljIGRvdCA9ICh2MTogVmVjMmYsIHYyOiBWZWMyZik6IG51bWJlciA9PiB2MS54ICogdjIueCArIHYxLnkgKiB2Mi55O1xuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YHQutCw0LvRj9GA0L3QvtC1INC/0YDQvtC40LfQstC10LTQtdC90LjQtSDQtNCy0YPRhSDQstC10LrRgtC+0YDQvtCyOiB0aGlzINC4INCy0LXQutGC0L7RgNCwLdC/0LDRgNCw0LzQtdGC0YDQsC5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0dlx00JLRgtC+0YDQvtC5INCy0LXQutGC0L7RgC5cbiAgICAgKiBAcmV0dXJuXHRcdNCh0LrQsNC70Y/RgNC90L7QtSDQv9GA0L7QuNC30LLQtdC00LXQvdC40LUuXG4gICAgICovXG4gICAgZG90ID0gKHY6IFZlYzJmKTogbnVtYmVyID0+IHRoaXMueCAqIHYueCArIHRoaXMueSAqIHYueTtcblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGD0LPQvtC7INC80LXQttC00YMg0LTQstGD0LzRjyDQstC10LrRgtC+0YDQsNC80Lgt0L/QsNGA0LDQvNC10YLRgNCw0LzQuC5cbiAgICAgKiDQoyDQstC+0LfQstGA0LDRidCw0LXQvNC+0LPQviDRg9Cz0LvQsCDQvdC10YIg0LfQvdCw0LrQsCwg0LLRgdC1INC30L3QsNGH0LXQvdC40Y8g0LvQtdC20LDRgiDQsiDQv9GA0L7QtdC00LXQu9Cw0YUgWzAuLjE4MF0uXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdHYxXHQgICAg0J/QtdGA0LLRi9C5INCy0LXQutGC0L7RgC5cbiAgICAgKiBAcGFyYW1cdHYyXHQgICAg0JLRgtC+0YDQvtC5INCy0LXQutGC0L7RgC5cbiAgICAgKiBAcmV0dXJuXHRmbG9hdCAgINCj0LPQvtC7INC80LXQttC00YMg0LLQtdC60YLQvtGA0LDQvNC4LlxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRVbnNpZ25lZEFuZ2xlQmV0d2VlblZlY3RvcnNEZWdzID0gKHYxOiBWZWMyZiwgdjI6IFZlYzJmKTogbnVtYmVyID0+IE1hdGguYWNvcyggVmVjMmYubm9ybWFsaXNlZCh2MSkuZG90KCBWZWMyZi5ub3JtYWxpc2VkKHYyKSApICkgKiBVdGlscy5SQURTX1RPX0RFR1M7XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQt9C90LDQuiDRg9Cz0LvQsCDQvNC10LbQtNGDINC00LLRg9C80Y8g0LLQtdC60YLQvtGA0LDQvNC4LlxuICAgICAqIDEsINC10YHQu9C4INCy0YLQvtGA0L7QuSDQstC10LrRgtC+0YAg0L3QsNGF0L7QtNC40YLRgdGPINC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0L/QtdGA0LLQvtCz0L47XG4gICAgICogLTEsINC10YHQu9C4INCy0YLQvtGA0L7QuSDQstC10LrRgtC+0YAg0L3QsNGF0L7QtNC40YLRgdGPINC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC/0LXRgNCy0L7Qs9C+O1xuICAgICAqIDAsINC10YHQu9C4INGD0LPQvtC7INC80LXQttC00YMg0L3QuNC80LggMC5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0dVx00J/QtdGA0LLRi9C5INGD0LPQvtC7LlxuICAgICAqIEBwYXJhbVx0dlx00JLRgtC+0YDQvtC5INGD0LPQvtC7LlxuICAgICAqIEByZXR1cm5cdFx00JfQvdCw0Log0YPQs9C70LAuXG4gICAgICovXG4gICAgc3RhdGljIHpjcm9zcyh1OiBWZWMyZiwgdjogVmVjMmYpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBwID0gdS54ICogdi55IC0gdi54ICogdS55O1xuXG4gICAgICAgIGlmIChwID4gMC4wKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwIDwgMC4wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YPQs9C+0Lsg0YHQviDQt9C90LDQutC+0Lwg0LzQtdC20LTRgyDQtNCy0YPQvNGPINCy0LXQutC+0YDQsNC80Lg6IHRoaXMg0Lgg0L/QsNGA0LDQvNC10YLRgNC+0LwuXG4gICAgICogPHA+XG4gICAgICog0KPQs9C+0Lsg0LHRg9C00LXRgiDQv9C+0LvQvtC20LjRgtC10LvRjNC90YvQvCwg0LXRgdC70Lgg0LLRgtC+0YDQvtC5INCy0LXQutGC0L7RgCDQvdCw0YXQvtC00LjRgtGB0Y8g0L/RgNC+0YLQuNCyINGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC4INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQv9C10YDQstC+0LPQvjtcbiAgICAgKiDQo9Cz0L7QuyDQsdGD0LTQtdGCINC+0YLRgNC40YfQsNGC0LXQu9GM0L3Ri9C8LCDQtdGB0LvQuCDQstGC0L7RgNC+0Lkg0LLQtdC60YLQvtGAINC90LDRhdC+0LTQuNGC0YHRjyDQv9C+INGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC1INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQv9C10YDQstC+0LPQvi5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0b3RoZXJWZWN0b3Ig0JLRgtC+0YDQvtC5INCy0LXQutGC0L7RgC5cbiAgICAgKiBAcmV0dXJuXHRmbG9hdCAgICAgICDQo9Cz0L7QuyDQvNC10LbQtNGDINCy0LXQutGC0L7RgNCw0LzQuCDQsiDQs9GA0LDQtNGD0YHQsNGFLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRTaWduZWRBbmdsZURlZ3NUbyhvdGhlclZlY3RvcjogVmVjMmYpOiBudW1iZXIge1xuICAgICAgICBjb25zdCB0aGlzVmVjdG9yVVYgID0gVmVjMmYubm9ybWFsaXNlZCh0aGlzKTtcbiAgICAgICAgY29uc3Qgb3RoZXJWZWN0b3JVViA9IFZlYzJmLm5vcm1hbGlzZWQob3RoZXJWZWN0b3IpO1xuXG4gICAgICAgIGNvbnN0IHVuc2lnbmVkQW5nbGVEZWdzID0gTWF0aC5hY29zKCB0aGlzVmVjdG9yVVYuZG90KG90aGVyVmVjdG9yVVYpICkgKiBVdGlscy5SQURTX1RPX0RFR1M7XG5cbiAgICAgICAgaWYgKCBWZWMyZi56Y3Jvc3ModGhpc1ZlY3RvclVWLCBvdGhlclZlY3RvclVWKSA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5zaWduZWRBbmdsZURlZ3M7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLXVuc2lnbmVkQW5nbGVEZWdzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LXQtNC40L3QuNGH0L3Ri9C5INCy0LXQutGC0L7RgCDRgSDQv9GA0LjQvNC10L3QtdC90L3Ri9C80Lgg0Log0L3QtdC80YMg0L7Qs9GA0LDQvdC40YfQtdC90LjRj9C80LguXG4gICAgICog0JXRgdC70Lgg0YPQs9C+0Lsg0LzQtdC20LTRgyDQuNC00LXQsNC70YzQvdGL0Lwg0L/QvtC70L7QttC10L3QuNC10Lwg0LLQtdC60YLQvtGA0LAg0Lgg0LHQtdC50LfQu9Cw0LnQvdC+0Lwg0L/RgNC40LLRi9GI0LDQtdGCINC+0LPRgNCw0L3QuNGH0LXQvdC40Y8sINGC0L5cbiAgICAgKiDQstC+0LfQstGA0LDRidCw0LXQvCDQstC10LrRgtC+0YAsINC60L7RgtC+0YDRi9C5INC/0L7QstC10YDQvdGD0YIg0L3QsCDQs9GA0LDQvdC40YfQvdGL0Lkg0YPQs9C+0Lsg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INCx0LXQudC30LvQsNC50L3QsC5cbiAgICAgKiDQkiDQv9GA0L7RgtC40LLQvdC+0Lwg0YHQu9GD0YfQsNC1IC0g0LLQvtC30LLRgNCw0YnQsNC10Lwg0LjQtNC10LDQu9GM0L3Ri9C5INCy0LXQutGC0L7RgC5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0ZGlyZWN0aW9uVVZcdCAgICAgICAgICAgICAgICDQmNC00LXQsNC70YzQvdC+0LUg0L/QvtC70L7QttC10L3QuNC1INCy0LXQutGC0L7RgNCwLCDQutC+0YLQvtGA0L7QtSDQstC+0LfQvNC+0LbQvdC+INC90LXQtNC+0YHRgtC40LbQuNC80L4uXG4gICAgICogQHBhcmFtXHRiYXNlbGluZVVWXHQgICAgICAgICAgICAgICAg0JLQtdC60YLQvtGAINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQutC+0YLQvtGA0L7Qs9C+INGB0YfQuNGC0LDRjtGC0YHRjyDRg9Cz0LvRiy5cbiAgICAgKiBAcGFyYW1cdGNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzXHQgICAg0KPQs9C+0Lst0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQv9C+INGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC1LlxuICAgICAqIEBwYXJhbVx0YW50aUNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzXHTQo9Cz0L7Quy3QvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuC5cbiAgICAgKiBAcmV0dXJuXHRWZWMyZlxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb25zdHJhaW5lZFVWKGRpcmVjdGlvblVWOiBWZWMyZiwgYmFzZWxpbmVVVjogVmVjMmYsIGNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzOiBudW1iZXIsIGFudGlDbG9ja3dpc2VDb25zdHJhaW50RGVnczogbnVtYmVyKTogVmVjMmYge1xuICAgICAgICBjb25zdCBzaWduZWRBbmdsZURlZ3MgPSBiYXNlbGluZVVWLmdldFNpZ25lZEFuZ2xlRGVnc1RvKGRpcmVjdGlvblVWKTtcblxuICAgICAgICBpZiAoc2lnbmVkQW5nbGVEZWdzID4gYW50aUNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKSB7XG4gICAgICAgICAgICByZXR1cm4gVmVjMmYucm90YXRlRGVncyhiYXNlbGluZVVWLCBhbnRpQ2xvY2t3aXNlQ29uc3RyYWludERlZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpZ25lZEFuZ2xlRGVncyA8IC1jbG9ja3dpc2VDb25zdHJhaW50RGVncykge1xuICAgICAgICAgICAgcmV0dXJuIFZlYzJmLnJvdGF0ZURlZ3MoYmFzZWxpbmVVViwgLWNsb2Nrd2lzZUNvbnN0cmFpbnREZWdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25VVjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktGA0LDRidCw0LXRgiDRgtC10LrRg9GJ0LjQuSDQstC10LrRgtC+0YAg0L3QsCDRh9C40YHQu9C+LdC/0LDRgNCw0LzQtdGC0YAg0YDQsNC00LjQsNC9LlxuICAgICAqIDxwPlxuICAgICAqINCf0L7Qu9C+0LbQuNGC0LXQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0YPQs9C70LAg0YHQstC40LTQtdGC0LXQu9GM0YHRgtCy0YPQtdGCINC+INC/0L7QstC+0YDQvtGC0LUg0L/RgNC+0YLQuNCyINGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC4LlxuICAgICAqINCe0YLRgNC40YbQsNGC0LXQu9GM0L3QvtC1INC30L3QsNGH0LXQuNC90LUgLSDQv9C+INGH0LDRgdC+0LLQvtC5LlxuICAgICAqIDxwPlxuICAgICAqINCc0LXQvdGP0LXRgiDRgtC10LrRg9GJ0LjQuSDQstC10LrRgtC+0YAg0Lgg0LLQvtC30LLRgNCw0YnQsNC10YIgdGhpcyDQtNC70Y8g0YHQvtC30LTQsNC90LjRjyDRhtC10L/QvtGH0LXQui5cbiAgICAgKiBAcGFyYW0gICBhbmdsZVJhZHNcdFTQo9Cz0L7QuyDQv9C+0LLQvtGA0L7RgtCwINCyINGA0LDQtNC40LDQvdCw0YUuXG4gICAgICogQHJldHVyblx0VmVjMmZcbiAgICAgKi9cbiAgICByb3RhdGVSYWRzKGFuZ2xlUmFkczogbnVtYmVyKTogVmVjMmYge1xuICAgICAgICAvLyDQn9C+0LLQvtGA0L7RgiDQstC+0LrRgNGD0LMg0L7RgdC4IHo6XG4gICAgICAgIC8vIHgnID0geCpjb3MgcSAtIHkqc2luIHFcbiAgICAgICAgLy8geScgPSB4KnNpbiBxICsgeSpjb3MgcVxuICAgICAgICAvLyB6JyA9IHpcblxuICAgICAgICBjb25zdCBjb3NUaGV0YSA9IE1hdGguY29zKGFuZ2xlUmFkcyk7XG4gICAgICAgIGNvbnN0IHNpblRoZXRhID0gTWF0aC5zaW4oYW5nbGVSYWRzKTtcblxuICAgICAgICBjb25zdCByb3RhdGVkVmVjdG9yID0gbmV3IFZlYzJmKHRoaXMueCAqIGNvc1RoZXRhIC0gdGhpcy55ICogc2luVGhldGEsICAvLyB4XG4gICAgICAgICAgICB0aGlzLnggKiBzaW5UaGV0YSArIHRoaXMueSAqIGNvc1RoZXRhKTsgLy8geVxuXG4gICAgICAgIHRoaXMueCA9IHJvdGF0ZWRWZWN0b3IueDtcbiAgICAgICAgdGhpcy55ID0gcm90YXRlZFZlY3Rvci55O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCf0L7QstC+0YDQsNGH0LjQstCw0LXRgiDQstC10LrRgtC+0YAt0L/QsNGA0LDQvNC10YLRgCDQvdCwINC30LDQtNCw0L3QvdC+0LUg0YfQuNGB0LvQviDQs9GA0LDQtNGD0YHQvtCyLlxuICAgICAqIE1ldGhvZCB0byByb3RhdGUgdGhpcyBWZWMyZiBieSBhIGdpdmVuIGFuZ2xlIGFzIHNwZWNpZmllZCBpbiBkZWdyZWVzLlxuICAgICAqIDxwPlxuICAgICAqINCc0LXRgtC+0LQg0L3QtSDQvNC10L3Rj9C10YIg0LjRgdGF0L7QtNC90YvQuSDQstC10LrRgtC+0YAuXG4gICAgICog0J/QvtC70L7QttC40YLQtdC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDRg9Cz0LvQsCDRgdCy0LjQtNC10YLQtdC70YzRgdGC0LLRg9C10YIg0L4g0L/QvtCy0L7RgNC+0YLQtSDQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LguXG4gICAgICog0J7RgtGA0LjRhtCw0YLQtdC70YzQvdC+0LUg0LfQvdCw0YfQtdC40L3QtSAtINC/0L4g0YfQsNGB0L7QstC+0LkuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdHNvdXJjZVx0XHTQktC10LrRgtC+0YAg0LTQu9GPINC/0L7QstC+0YDQvtGC0LAuXG4gICAgICogQHBhcmFtXHRhbmdsZURlZ3NcdNCj0LPQvtC7INC/0L7QstC+0YDQvtGC0LAg0LIg0LPRgNCw0LTRg9GB0LDRhS5cbiAgICAgKiBAcmV0dXJuXHRWZWMyZlxuICAgICAqL1xuICAgIHN0YXRpYyByb3RhdGVEZWdzKHNvdXJjZTogVmVjMmYsIGFuZ2xlRGVnczogbnVtYmVyKTogVmVjMmYge1xuICAgICAgICAvLyDQn9C+0LLQvtGA0L7RgiDQstC+0LrRgNGD0LMg0L7RgdC4IHo6XG4gICAgICAgIC8vIHgnID0geCpjb3MgcSAtIHkqc2luIHFcbiAgICAgICAgLy8geScgPSB4KnNpbiBxICsgeSpjb3MgcVxuICAgICAgICAvLyB6JyA9IHpcblxuICAgICAgICBjb25zdCBhbmdsZVJhZHMgPSBhbmdsZURlZ3MgKiBVdGlscy5ERUdTX1RPX1JBRFM7XG5cbiAgICAgICAgY29uc3QgY29zVGhldGEgPSBNYXRoLmNvcyhhbmdsZVJhZHMpO1xuICAgICAgICBjb25zdCBzaW5UaGV0YSA9IE1hdGguc2luKGFuZ2xlUmFkcyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBWZWMyZihzb3VyY2UueCAqIGNvc1RoZXRhIC0gc291cmNlLnkgKiBzaW5UaGV0YSwgIC8vIHhcbiAgICAgICAgICAgIHNvdXJjZS54ICogc2luVGhldGEgKyBzb3VyY2UueSAqIGNvc1RoZXRhKTsgLy8geVxuICAgIH1cbn1cbiIsImltcG9ydCB7VXRpbHN9IGZyb20gJy4vVXRpbHMnO1xuaW1wb3J0IHtNYXQzZn0gZnJvbSAnLi9NYXQzZic7XG5cbi8qKlxuICogM0Qg0LLQtdC60YLQvtGALlxuICovXG5leHBvcnQgY2xhc3MgVmVjM2Yge1xuICAgIC8vINCa0L7QvtGA0LTQuNC90LDRgtC90YvQtSDQvtGB0LhcbiAgICBzdGF0aWMgWF9BWElTID0gbmV3IFZlYzNmKDEsIDAsIDApO1xuICAgIHN0YXRpYyBZX0FYSVMgPSBuZXcgVmVjM2YoMCwgMSwgMCk7XG4gICAgc3RhdGljIFpfQVhJUyA9IG5ldyBWZWMzZigwLCAwLCAxKTtcblxuICAgIC8vIC0tLS0tIFByb3BlcnRpZXMgLS0tLS1cblxuICAgIC8vINCa0L7QvtGA0LTQuNC90LDRgtGLINCy0LXQutGC0L7RgNCwXG4gICAgeDogbnVtYmVyID0gMDtcbiAgICB5OiBudW1iZXIgPSAwO1xuICAgIHo6IG51bWJlciA9IDA7XG5cbiAgICAvLyAtLS0tLSBNZXRob2RzIC0tLS0tXG5cbiAgICAvKipcbiAgICAgKiDQmtC+0L3RgdGC0YDRg9C60YLQvtGALCDQutC+0YLQvtGA0YvQuSDQv9GA0LjQvdC40LzQsNC10YIg0YfQtdGC0YvRgNC1INCy0LDRgNC40LDRhtC40Lgg0L/QsNGA0LDQvNC10YLRgNC+0LI6XG4gICAgICogPHA+XG4gICAgICog0JHQtdC3INC/0LDRgNCw0LzQtdGC0YDQvtCyIC0g0LLRgdC1INC/0L7Qu9GPINC/0YDQuNC90LjQvNCw0Y7RgiDQt9C90LDRh9C10L3QuNGPINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOLlxuICAgICAqIDxwPlxuICAgICAqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0LrQvtC/0LjRgNC+0LLQsNC90LjRjy4g0KHQvtC30LTQsNC10YLRgdGPINCz0LvRg9Cx0L7QutCw0Y8g0LrQvtC/0LjRjyDQvtCx0YrQtdC60YLQsC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSDQktC10LrRgtC+0YAt0LjRgdGC0L7Rh9C90LjQulxuICAgICAqIDxwPlxuICAgICAqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0YEg0L7QtNC90LjQvCDQv9Cw0YDQsNC80LXRgtGA0L7QvCAtINGH0LjRgdC70L7QvCwg0LfQsNC00LDRjtGJ0LjQvCDQutC+0L7RgNC00LjQvdCw0YLRiyDQstC10LrRgtC+0YDQsCDQv9C+INCy0YHQtdC8INC+0YHRj9C8LlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlINCa0L7QvtGA0LTQuNC90LDRgtCwINCy0LXQutGC0L7RgNCwINC/0L4g0LrQsNC20LTQvtC5INC40Lcg0L7RgdC10LkuXG4gICAgICogPHA+XG4gICAgICog0JrQvtC90YHRgtGA0YPQutGC0L7RgCDRgSDRgtGA0LXQvNGPINC/0LDRgNCw0LzQtdGC0YDQsNC80LggLSDQt9C90LDRh9C10L3QuNGPINC60L7QvtGA0LTQuNC90LDRgiDQv9C+IFgsIFksIFog0L7RgdGP0Lwg0YHQvtC+0YLQstC10YLRgdGC0LLQtdC90L3Qvi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSDQl9C90LDRh9C10L3QuNC4INC60L7QvtGA0LTQuNC90LDRgtGLINC/0L4g0L7RgdC4IFguXG4gICAgICogQHBhcmFtIHkg0JfQvdCw0YfQtdC90LjQuCDQutC+0L7RgNC00LjQvdCw0YLRiyDQv9C+INC+0YHQuCBZLlxuICAgICAqIEBwYXJhbSB6INCX0L3QsNGH0LXQvdC40Lgg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L/QviDQvtGB0LggWi5cbiAgICAgKiAqL1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlPzogbnVtYmVyIHwgVmVjM2YsIHk/OiBudW1iZXIsIHo/OiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFZlYzNmKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHZhbHVlLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSA9IHZhbHVlLnk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueiA9IHZhbHVlLno7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy55ID0gdGhpcy56ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnogPSB6O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmVjM2YgY29uc3RydWN0b3Igd2FzIGludm9rZWQgaW5jb3JyZWN0bHkuJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQutC+0L/QuNGOINCy0LXQutGC0L7RgNCwLdC40YHRgtC+0YfQvdC40LrQsC5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0c291cmNlXHTQktC10LrRgtC+0YAt0LjRgdGC0L7Rh9C90LjQui5cbiAgICAgKiBAcmV0dXJuXHRcdCAgICDQk9C70YPQsdC+0LrQsNGPINC60L7Qv9C40Y8g0LLQtdC60YLQvtGA0LAg0LjRgdGC0L7Rh9C90LjQutCwIC5cbiAgICAgKi9cbiAgICBzdGF0aWMgY2xvbmUgPSAoc291cmNlOiBWZWMzZik6IFZlYzNmID0+IG5ldyBWZWMzZihzb3VyY2UueCwgc291cmNlLnksIHNvdXJjZS56KTtcblxuICAgIC8qKlxuICAgICAqINCX0LDQtNCw0ZHRgiDQt9C90LDRh9C10L3QuNGPINC/0L7Qu9C10Lkg0LLQtdC60YLQvtGA0LAuXG4gICAgICog0J/RgNC40L3QuNC80LDQtdGCINC00LLQtSDQstCw0YDQuNCw0YbQuNC4INC/0LDRgNCw0LzQtdGC0YDQvtCyOlxuICAgICAqIDxwPlxuICAgICAqINCe0LTQuNC9INC/0LDRgNCw0LzQtdGC0YAgLSDQstC10LrRgtC+0YAg0LjRgdGC0L7Rh9C90LjQui5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0c291cmNlXHTQktC10LrRgtC+0YAt0LjRgdGC0L7Rh9C90LjQui5cbiAgICAgKiA8cD5cbiAgICAgKiDQotGA0Lgg0L/QsNGA0LDQvNC10YLRgNCwIC0geCwgeSwgeiDRgdC+0L7RgtCy0LXRgtGB0YLQstC10L3QvdC+LlxuICAgICAqXG4gICAgICogQHBhcmFtXHRzb3VyY2VcdNCX0L3QsNGH0LXQvdC40LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L/QviBYLlxuICAgICAqIEBwYXJhbVx0eVx00JfQvdCw0YfQtdC90LjQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQv9C+IFkuXG4gICAgICogQHBhcmFtXHR6XHTQl9C90LDRh9C10L3QuNC1INC60L7QvtGA0LTQuNC90LDRgtGLINC/0L4gWi5cbiAgICAgKi9cbiAgICBzZXQoc291cmNlOiBWZWMzZiB8IG51bWJlciwgeT86IG51bWJlciwgej86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIFZlYzNmKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHNvdXJjZS54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgPSBzb3VyY2UueTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy56ID0gc291cmNlLno7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWZWMzZiBzZXQgd2FzIGludm9rZWQgaW5jb3JyZWN0bHkuJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCA9IHNvdXJjZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy56ID0gejtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZlYzNmIHNldCB3YXMgaW52b2tlZCBpbmNvcnJlY3RseS4nKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWZWMzZiBzZXQgd2FzIGludm9rZWQgaW5jb3JyZWN0bHkuJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCf0YDQvtCy0LXRgNGP0LXRgiDQstC10LrRgtC+0YDQsCDQvdCwINC/0YDQuNC80LXRgNC90L7QtSDRgNCw0LLQtdC90YHRgtCy0L4uXG4gICAgICog0JLQtdC60YLQvtGA0Ysg0L/RgNC40LzQtdGA0L3QviDRgNCw0LLQvdGLINC10YHQu9C4INC80L7QtNGD0LvRjCDQuNGFINC60L7QvtGA0LTQuNC90LDRgiDQv9C+INC60LDQttC00L7QuSDQuNC3INC+0YHQtdC5INC80LXQvdGM0YjQtSB0b2xlcmFuY2UuXG4gICAgICogPHA+XG4gICAgICog0JXRgdC70Lgg0LfQvdCw0YfQtdC90LjQtSB0b2xlcmFuY2Ug0LzQtdC90YzRiNC1IDAgLSDQsdGA0L7RgdCw0LXQvCDQvtGI0LjQsdC60YMuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdHZcdFx0XHTQktC10LrRgtC+0YAg0LTQu9GPINGB0YDQsNCy0L3QtdC90LjRjy5cbiAgICAgKiBAcGFyYW0gICB0b2xlcmFuY2VcdNCX0L3QsNGH0LXQvdC40LUgXCLRgtC10YDQv9C40LzQvtGB0YLQuFwiINC6INGA0LDQt9C90LjRhtC1LlxuICAgICAqIEByZXR1cm5cdFx0XHRcdNCg0LXQt9GD0LvRjNGC0LDRgiDRgdGA0LDQstC90LXQvdC40Y8uXG4gICAgICovXG4gICAgYXBwcm94aW1hdGVseUVxdWFscyh2LCB0b2xlcmFuY2UpIHtcbiAgICAgICAgaWYgKHRvbGVyYW5jZSA8IDApIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdFcXVhbGl0eSB0aHJlc2hvbGQgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gMC4wZicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeERpZmYgPSBNYXRoLmFicyh0aGlzLnggLSB2LngpO1xuICAgICAgICBjb25zdCB5RGlmZiA9IE1hdGguYWJzKHRoaXMueSAtIHYueSk7XG4gICAgICAgIGNvbnN0IHpEaWZmID0gTWF0aC5hYnModGhpcy56IC0gdi56KTtcblxuICAgICAgICByZXR1cm4gKHhEaWZmIDwgdG9sZXJhbmNlICYmIHlEaWZmIDwgdG9sZXJhbmNlICYmIHpEaWZmIDwgdG9sZXJhbmNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQv9C10YDQv9C10L3QtNC40LrRg9C70Y/RgNC90Ysg0LvQuCDQtNCy0LAg0LLQtdC60YLQvtGA0LAuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdGFcdNCf0LXRgNCy0YvQuSDQstC10LrRgtC+0YAuXG4gICAgICogQHBhcmFtXHRiXHTQktGC0L7RgNC+0Lkg0LLQtdC60YLQvtGALlxuICAgICAqIEByZXR1cm5cdFx00J/QtdGA0L/QtdC90LTQuNC60YPQu9GP0YDQvdGLINC70Lgg0L7QvdC4LlxuICAgICAqL1xuICAgIHN0YXRpYyBwZXJwZW5kaWN1bGFyID0gKGE6IFZlYzNmLCBiOiBWZWMzZik6IGJvb2xlYW4gPT4gVXRpbHMuYXBwcm94aW1hdGVseUVxdWFscyggVmVjM2YuZG90UHJvZHVjdChhLCBiKSwgMC4wLCAwLjAxICk7XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDRgNCw0LLQvdCwINC70Lgg0L/RgNC40LzQtdGA0L3QviDQtNC70LjQvdCwINC00LDQvdC90L7Qs9C+INCy0LXQutGC0L7RgNCwINGH0LjRgdC70YMg0L/QsNGA0LDQvNC10YLRgNGDLlxuICAgICAqXG4gICAgICogQHBhcmFtXHR2YWx1ZVx0XHTQl9C90LDRh9C10L3QuNC1INC00LvRjyDRgdGA0LDQstC90LXQvdC40Y8g0YEg0LTQu9C40L3QvtC5LlxuICAgICAqIEBwYXJhbVx0dG9sZXJhbmNlXHTQl9C90LDRh9C10L3QuNC1IFwi0YLQtdGA0L/QuNC80L7RgdGC0LhcIi5cbiAgICAgKiBAcmV0dXJuXHRcdFx0XHTQoNCw0LLQvdGLINC70Lgg0L/RgNC40LzQtdGA0L3QviDQtNC70LjQvdCwINC4INGH0LjRgdC70L4t0L/QsNGA0LDQvNC10YLRgC5cbiAgICAgKi9cbiAgICBsZW5ndGhJc0FwcHJveGltYXRlbHkodmFsdWU6IG51bWJlciwgdG9sZXJhbmNlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRvbGVyYW5jZSA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcGFyaXNvbiB0b2xlcmFuY2UgY2Fubm90IGJlIGxlc3MgdGhhbiB6ZXJvLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChNYXRoLmFicyh0aGlzLmxlbmd0aCgpIC0gdmFsdWUpIDwgdG9sZXJhbmNlKTtcbiAgICB9XG5cbiAgICAvKiog0JfQsNC90YPQu9GP0LXRgiDQutC+0L7RgNC00LjQvdCw0YLRiyDQtNCw0L3QvdC+0LPQviDQstC10LrRgtC+0YDQsCAqL1xuICAgIHplcm8oKTogdm9pZCB7IHRoaXMueCA9IHRoaXMueSA9IHRoaXMueiA9IDAuMDsgfVxuXG4gICAgLyoqXG4gICAgICog0JfQsNC00LDRkdGCINGC0LXQutGD0YnQtdC80YMg0LLQtdC60YLQvtGA0YMg0L/RgNC+0YLQuNCy0L7Qv9C+0LvQvtC20L3QvtC1INC90LDQv9GA0LDQstC70LXQvdC40LUuINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCIHRoaXMg0LTQu9GPINC/0L7RgdGC0YDQvtC10L3QuNGPINGG0LXQv9C+0YfQtdC6LlxuICAgICAqXG4gICAgICogQHJldHVyblx00JLQtdC60YLQvtGAINGBINC/0YDQvtGC0LjQstC+0L/QvtC70L7QttC90YvQvCDQvdCw0L/RgNCw0LLQu9C10L3QuNC10LwuXG4gICAgICovXG4gICAgbmVnYXRlKCk6IFZlYzNmIHtcbiAgICAgICAgdGhpcy54ID0gLXRoaXMueDtcbiAgICAgICAgdGhpcy55ID0gLXRoaXMueTtcbiAgICAgICAgdGhpcy56ID0gLXRoaXMuejtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQstC10LrRgtC+0YAg0L/RgNC+0YLQuNCy0L7Qv9C+0LvQvtC20L3QvtCz0L4g0L3QsNC/0YDQsNCy0LvQtdC90LjRjy5cbiAgICAgKiDQodCw0Lwg0LLQtdC60YLQvtGAINC90LUg0LzQtdC90Y/QtdGCLlxuICAgICAqXG4gICAgICogQHJldHVybiDQktC10LrRgtC+0YAg0L/RgNC+0YLQuNCy0L7Qv9C+0LvQvtC20L3QvtCz0L4g0L3QsNC/0YDQsNCy0LvQtdC90LjRjy5cbiAgICAgKi9cbiAgICBuZWdhdGVkID0gKCk6IFZlYzNmID0+IG5ldyBWZWMzZigtdGhpcy54LCAtdGhpcy55LCAtdGhpcy56KTtcblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGA0LDQstC90Ysg0LvQuCDQv9GA0LjQvNC10YDQvdC+INCy0LXQutGC0L7RgNCwINC/0YDQuCDQt9Cw0LTQsNC90L3QvtC8INGD0YDQvtCy0L3QtSBcItGC0LXRgNC/0LjQvNC+0YHRgtC4XCIuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdGFcdFx00J/QtdGA0LLRi9C5INCy0LXQutGC0L7RgC5cbiAgICAgKiBAcGFyYW1cdGJcdFx00JLRgtC+0YDQvtC5INCy0LXQutGC0L7RgC5cbiAgICAgKiBAcGFyYW1cdHRvbGVyYW5jZVx00KPRgNC+0LLQtdC90YwgXCLRgtC10YDQv9C40LzQvtGB0YLQuFwiLCDQvNCw0LrRgdC40LzQsNC70YzQvdCw0Y8g0YDQsNC30L3QuNGG0LAg0LzQtdC20LTRgyDQstC10LrRgtC+0YDQsNC80LgsINC/0YDQuCDQutC+0YLQvtGA0L7QuSDQvtC90Lgg0LLRgdGRINC10YnQtSDRgNCw0LLQvdGLLlxuICAgICAqIEByZXR1cm5cbiAgICAgKi9cbiAgICBzdGF0aWMgYXBwcm94aW1hdGVseUVxdWFsID0gKGE6IFZlYzNmLCBiOiBWZWMzZiwgdG9sZXJhbmNlOiBudW1iZXIpOiBib29sZWFuID0+IChcbiAgICAgICAgKE1hdGguYWJzKGEueCAtIGIueCkgPCB0b2xlcmFuY2UpXG4gICAgICAgICYmIChNYXRoLmFicyhhLnkgLSBiLnkpIDwgdG9sZXJhbmNlKVxuICAgICAgICAmJiAoTWF0aC5hYnMoYS56IC0gYi56KSA8IHRvbGVyYW5jZSlcbiAgICApO1xuXG4gICAgLyoqXG4gICAgICog0J3QvtGA0LzQsNC70LjQt9GD0LXRgiDQuCDQstC+0LfQstGA0LDRidCw0LXRgiDRgdC10LHRjy5cbiAgICAgKiDQldGB0LvQuCDQstC10LvQuNGH0LjQvdCwINCy0LXQutGC0L7RgNCwINGA0LDQstC90LAg0L3Rg9C70Y4sINGC0L4g0LLQvtC30LLRgNCw0YnQsNC10YLRgdGPINCy0LXQutGC0L7RgCDQsdC10Lcg0LjQt9C80LXQvdC10L3QuNC5LlxuICAgICAqXG4gICAgICogQHJldHVyblx00J3QvtGA0LzQsNC70LjQt9C+0LLQsNC90L3Ri9C5INCy0LXQutGC0L7RgC5cbiAgICAgKi9cbiAgICAgbm9ybWFsaXNlKCk6IFZlYzNmIHtcbiAgICAgICAgY29uc3QgbWFnbml0dWRlID0gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueik7XG5cbiAgICAgICAgaWYgKG1hZ25pdHVkZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMueCAvPSBtYWduaXR1ZGU7XG4gICAgICAgICAgICB0aGlzLnkgLz0gbWFnbml0dWRlO1xuICAgICAgICAgICAgdGhpcy56IC89IG1hZ25pdHVkZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC90L7RgNC80LDQu9C40LfQvtCy0LDQvdC90YPRjiDQstC10YDRgdC40Y4g0LTQsNC90L3QvtCz0L4g0LLQtdC60YLQvtGA0LAsINC90LUg0LzQtdC90Y/Rj9GB0Ywg0YHQsNC8LlxuICAgICAqXG4gICAgICogQHJldHVyblx00J3QvtGA0LzQsNC70LjQt9C+0LLQsNC90L3Ri9C5INCy0LXQutGC0L7RgC5cbiAgICAgKi9cbiAgICBub3JtYWxpc2VkKCk6IFZlYzNmIHsgcmV0dXJuIG5ldyBWZWMzZih0aGlzKS5ub3JtYWxpc2UoKTsgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YHQutCw0LvRj9GA0L3QvtC1INC/0YDQvtC40LfQstC10LTQtdC90LjQtSDQtNCy0YPRhSDQstC10LrRgtC+0YDQvtCyINC/0LXRgNC10LTQsNC90L3Ri9GFINCyINC/0LDRgNCw0LzQtdGC0YDQsNGFLlxuICAgICAqXG4gICAgICogQHBhcmFtXHR2MVx00J/QtdGA0LLRi9C5INCy0LXQutGC0L7RgC5cbiAgICAgKiBAcGFyYW1cdHYyXHTQktGC0L7RgNC+0Lkg0LLQtdC60YLQvtGALlxuICAgICAqIEByZXR1cm5cdFx00KHQutCw0LvRj9GA0L3QvtC1INC/0YDQvtC40LfQstC10LTQtdC90LjQtS5cbiAgICAgKi9cbiAgICBzdGF0aWMgc2NhbGFyUHJvZHVjdCA9ICh2MTogVmVjM2YsIHYyOiBWZWMzZik6IG51bWJlciA9PiB2MS54ICogdjIueCArIHYxLnkgKiB2Mi55ICsgdjEueiAqIHYyLno7XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDRgdC60LDQu9GP0YDQvdC+0LUg0L/RgNC+0LjQt9Cy0LXQtNC10L3QuNC1INC00LLRg9GFINC90L7RgNC80LDQu9C40LfQvtCy0LDQvdC90YvRhSDQstC10LrRgtC+0YDQvtCyINC/0LXRgNC10LTQsNC90L3Ri9GFINCyINC/0LDRgNCw0LzQtdGC0YDQsNGFLlxuICAgICAqXG4gICAgICogQHBhcmFtXHR2MVx00J/QtdGA0LLRi9C5INCy0LXQutGC0L7RgC5cbiAgICAgKiBAcGFyYW1cdHYyXHTQktGC0L7RgNC+0Lkg0LLQtdC60YLQvtGALlxuICAgICAqIEByZXR1cm5cdFx00KHQutCw0LvRj9GA0L3QvtC1INC/0YDQvtC40LfQstC10LTQtdC90LjQtSDQvdC+0YDQvNCw0LvQuNC30L7QstCw0L3QvdGL0YUg0LLQtdC60YLQvtGA0L7Qsi5cbiAgICAgKi9cbiAgICBzdGF0aWMgIGRvdFByb2R1Y3QodjE6IFZlYzNmLCB2MjogVmVjM2YpOiBudW1iZXIge1xuICAgICAgICBjb25zdCB2MU5vcm0gPSB2MS5ub3JtYWxpc2VkKCk7XG4gICAgICAgIGNvbnN0IHYyTm9ybSA9IHYyLm5vcm1hbGlzZWQoKTtcblxuICAgICAgICByZXR1cm4gdjFOb3JtLnggKiB2Mk5vcm0ueCArIHYxTm9ybS55ICogdjJOb3JtLnkgKyB2MU5vcm0ueiAqIHYyTm9ybS56O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINCy0LXQutGC0L7RgNC90L7QtSDQv9GA0L7QuNC30LLQtdC00LXQvdC40LUg0LTQstGD0YUg0LLQtdC60YLQvtGA0L7QsiDQv9C10YDQtdC00LDQvdC90YvRhSDQsiDQv9Cw0YDQsNC80LXRgtGA0LDRhS5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0djFcdNCf0LXRgNCy0YvQuSDQstC10LrRgtC+0YAuXG4gICAgICogQHBhcmFtXHR2Mlx00JLRgtC+0YDQvtC5INCy0LXQutGC0L7RgC5cbiAgICAgKiBAcmV0dXJuXHRcdNCS0LXQutGC0L7RgNC90L7QtSDQv9GA0L7QuNC30LLQtdC00LXQvdC40LUg0LLQtdC60YLQvtGA0L7Qsi5cbiAgICAgKi9cbiAgICBzdGF0aWMgY3Jvc3NQcm9kdWN0ID0gKHYxOiBWZWMzZiwgdjI6IFZlYzNmKTogVmVjM2YgPT4gbmV3IFZlYzNmKHYxLnkgKiB2Mi56IC0gdjEueiAqIHYyLnksIHYxLnogKiB2Mi54IC0gdjEueCAqIHYyLnosIHYxLnggKiB2Mi55IC0gdjEueSAqIHYyLngpO1xuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LLQtdC60YLQvtGA0L3QvtC1INC/0YDQvtC40LfQstC10LTQtdC90LjQtSDQtNCy0YPRhSDQstC10LrRgtC+0YDQvtCyOiB0aGlzINC4INC/0LDRgNCw0LzQtdGC0YDQsC5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0dlx00JLRgtC+0YDQvtC5INCy0LXQutGC0L7RgC5cbiAgICAgKiBAcmV0dXJuXHRcdNCh0LrQsNC70Y/RgNC90L7QtSDQv9GA0L7QuNC30LLQtdC00LXQvdC40LUg0L3QvtGA0LzQsNC70LjQt9C+0LLQsNC90L3Ri9GFINCy0LXQutGC0L7RgNC+0LIuXG4gICAgICovXG4gICAgY3Jvc3MgPSAodjogVmVjM2YpOiBWZWMzZiA9PiBuZXcgVmVjM2YodGhpcy55ICogdi56IC0gdGhpcy56ICogdi55LFx0dGhpcy56ICogdi54IC0gdGhpcy54ICogdi56LCB0aGlzLnggKiB2LnkgLSB0aGlzLnkgKiB2LngpO1xuXG4gICAgLyoqXG4gICAgICog0JLRi9GH0LjRgdC70Y/QtdGCINGA0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0LTQstGD0LzRjyDRgtC+0YfQutCw0LzQuCDQsiAzRC5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0djFcdNCf0LXRgNCy0LDRjyDRgtC+0YfQutCwLlxuICAgICAqIEBwYXJhbVx0djJcdNCS0YLQvtGA0LDRjyDRgtC+0YfQutCwLlxuICAgICAqIEByZXR1cm5cdFx00KDQsNGB0YHRgtC+0Y/QvdC40LUg0LzQtdC20LTRgyDRgtC+0YfQutCw0LzQuC5cbiAgICAgKi9cbiAgICBzdGF0aWMgZGlzdGFuY2VCZXR3ZWVuKHYxOiBWZWMzZiwgdjI6IFZlYzNmKSA6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGR4ID0gdjIueCAtIHYxLng7XG4gICAgICAgIGNvbnN0IGR5ID0gdjIueSAtIHYxLnk7XG4gICAgICAgIGNvbnN0IGR6ID0gdjIueiAtIHYxLno7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkgKyBkeiAqIGR6KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQtNC70LjQvdGDINCy0LXQutGC0L7RgNCwLlxuICAgICAqXG4gICAgICogQHJldHVyblx00JTQu9C40L3QsCDQstC10LrRgtC+0YDQsC5cbiAgICAgKi9cbiAgICBsZW5ndGggPSAoKTogbnVtYmVyID0+IE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnopO1xuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LLQtdC60YLQvtGALCDQutC+0LzQv9C+0L3QtdC90YLRiyDQutC+0YLQvtGA0L7Qs9C+IC0g0Y3RgtC+INCw0LHRgdC+0LvRjtGC0L3Ri9C1INC30L3QsNGH0LXQvdC40Y8g0LLQtdC60YLQvtGA0LAt0L/QsNGA0LDQvNC10YLRgNCwLlxuICAgICAqINCd0LUg0LzQtdC90Y/QtdGCINC40YHRhdC+0LTQvdGL0Lkg0LLQtdC60YLQvtGALlxuICAgICAqXG4gICAgICogQHBhcmFtXHRzb3VyY2VcdNCS0LXQutGC0L7RgC5cbiAgICAgKiBAcmV0dXJuXHRcdCAgICDQn9C+0LrQvtC80L/QvtC90LXQvdGC0L3QviDQsNCx0YHQvtC70Y7RgtC90YvQuSDQsNC90LDQu9C+0LMg0LLQtdC60YLQvtGA0LAg0L/QsNGA0LDQvNC10YLRgNCwLlxuICAgICAqL1xuICAgIHN0YXRpYyBhYnMoc291cmNlOiBWZWMzZik6IFZlYzNmIHtcbiAgICAgICAgY29uc3QgYWJzVmVjdG9yID0gbmV3IFZlYzNmKCk7XG5cbiAgICAgICAgaWYgKHNvdXJjZS54IDwgMC4wKSB7IGFic1ZlY3Rvci54ID0gLXNvdXJjZS54OyB9IGVsc2UgeyBhYnNWZWN0b3IueCA9IHNvdXJjZS54OyB9XG4gICAgICAgIGlmIChzb3VyY2UueSA8IDAuMCkgeyBhYnNWZWN0b3IueSA9IC1zb3VyY2UueTsgfSBlbHNlIHsgYWJzVmVjdG9yLnkgPSBzb3VyY2UueTsgfVxuICAgICAgICBpZiAoc291cmNlLnogPCAwLjApIHsgYWJzVmVjdG9yLnogPSAtc291cmNlLno7IH0gZWxzZSB7IGFic1ZlY3Rvci56ID0gc291cmNlLno7IH1cblxuICAgICAgICByZXR1cm4gYWJzVmVjdG9yO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC10LTQuNC90LjRh9C90YvQuSDQstC10LrRgtC+0YAt0L/QtdGA0L/QtdC90LTQuNC60YPQu9GP0YAg0Log0LLQtdC60YLQvtGA0YMg0L/QsNGA0LDQvNC10YLRgNGDLlxuICAgICAqXG4gICAgICogQHBhcmFtXHR1XHTQktC10LrRgtC+0YAuXG4gICAgICogQHJldHVyblx0XHTQldC00LjQvdC40YfQvdGL0Lkg0LLQtdC60YLQvtGALdC/0LXRgNC/0LXQvdC00LjQutGD0LvRj9GAINC00LvRjyDQstC10LrRgtC+0YDQsC3Qv9Cw0YDQsNC80LXRgtGA0LAuXG4gICAgICovXG4gICAgc3RhdGljIGdlblBlcnBlbmRpY3VsYXJWZWN0b3JRdWljayh1OiBWZWMzZik6IFZlYzNmIHtcbiAgICAgICAgbGV0IHBlcnA6IFZlYzNmO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyh1LnkpIDwgMC45OSkge1xuICAgICAgICAgICAgcGVycCA9IG5ldyBWZWMzZigtdS56LCAwLjAsIHUueCk7IC8vIGNyb3NzKHUsIFVQKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGVycCA9IG5ldyBWZWMzZigwLjAsIHUueiwgLXUueSk7IC8vIGNyb3NzKHUsIFJJR0hUKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBlcnAubm9ybWFsaXNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LXQtNC40L3QuNGH0L3Ri9C5INCy0LXQutGC0L7RgC3QvdCw0L/RgNCw0LLQu9C10L3QuNC1INC+0YIg0L/QtdGA0LLQvtC5INGC0L7Rh9C60Lgg0LrQviDQstGC0L7RgNC+0LkuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdHYxXHTQn9C10YDQstCw0Y8g0YLQvtGH0LrQsC5cbiAgICAgKiBAcGFyYW1cdHYyXHTQktGC0L7RgNCw0Y8g0YLQvtGH0LrQsC5cbiAgICAgKiBAcmV0dXJuXHRcdNCV0LTQuNC90LjRh9C90YvQuSDQstC10LrRgtC+0YAt0L3QsNC/0YDQsNCy0LvQtdC90LjQtS5cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0VXZCZXR3ZWVuID0gKHYxOiBWZWMzZiwgdjI6IFZlYzNmKTogVmVjM2YgPT4gbmV3IFZlYzNmKCB2Mi5taW51cyh2MSkgKS5ub3JtYWxpc2UoKTtcblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINCy0LXQutGC0L7RgCDQsiDRgNCw0LTQuNCw0L3QsNGFINC80LXQttC00YMg0LLQtdC60YLQvtGA0LDQvNC4LlxuICAgICAqIDxwPlxuICAgICAqINCg0LXQt9GD0LvRjNGC0LDRgiDQsdGD0LTQtdGCINCy0YHQtdCz0LTQsCDQv9C+0LvQvtC20LjRgtC10LvRjNC90YvQvCDRh9C40YHQu9C+0Lwg0L7RgiAwINC00L4gcGkgKDMuMTQxNTkpINGA0LDQtNC40LDQvS5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0djFcdNCf0LXRgNCy0YvQuSDQstC10LrRgtC+0YAuXG4gICAgICogQHBhcmFtXHR2Mlx00JLRgtC+0YDQvtC5INCy0LXQutGC0L7RgC5cbiAgICAgKiBAcmV0dXJuXHRcdNCj0LPQvtC7INC80LXQttC00YMg0LLQtdC60YLQvtGA0LDQvNC4INCyINGA0LDQtNC40LDQvdCw0YUuXG4gICAgICovXG4gICAgc3RhdGljIGdldEFuZ2xlQmV0d2VlblJhZHModjE6IFZlYzNmLCB2MjogVmVjM2YpOiBudW1iZXIge1xuICAgICAgICAvLyBOb3RlOiBhIGFuZCBiIGFyZSBub3JtYWxpc2VkIHdpdGhpbiB0aGUgZG90UHJvZHVjdCBtZXRob2QuXG4gICAgICAgIHJldHVybiBNYXRoLmFjb3MoIFZlYzNmLmRvdFByb2R1Y3QodjEsICB2MikgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQstC10LrRgtC+0YAg0LIg0LPRgNCw0LTRg9GB0LDRhSDQvNC10LbQtNGDINCy0LXQutGC0L7RgNCw0LzQuC5cbiAgICAgKiA8cD5cbiAgICAgKiDQoNC10LfRg9C70YzRgtCw0YIg0LHRg9C00LXRgiDQstGB0LXQs9C00LAg0L/QvtC70L7QttC40YLQtdC70YzQvdGL0Lwg0YfQuNGB0LvQvtC8INC+0YIgMCDQtNC+IDE4MC5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0djFcdNCf0LXRgNCy0YvQuSDQstC10LrRgtC+0YAuXG4gICAgICogQHBhcmFtXHR2Mlx00JLRgtC+0YDQvtC5INCy0LXQutGC0L7RgC5cbiAgICAgKiBAcmV0dXJuXHRcdNCj0LPQvtC7INC80LXQttC00YMg0LLQtdC60YLQvtGA0LDQvNC4INCyINCz0YDQsNC00YPRgdCw0YUuXG4gICAgICovXG4gICAgc3RhdGljIGdldEFuZ2xlQmV0d2VlbkRlZ3ModjE6IFZlYzNmLCB2MjogVmVjM2YpOiBudW1iZXIgeyByZXR1cm4gVmVjM2YuZ2V0QW5nbGVCZXR3ZWVuUmFkcyh2MSwgdjIpICogVXRpbHMuUkFEU19UT19ERUdTOyB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDRg9Cz0L7QuyDQvNC10LbQtNGDINCy0LXQutGC0L7RgNCw0LzQuCBbLTE3OS45Li4xODAuMF0uXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdHJlZmVyZW5jZVZlY3Rvclx00J/QtdGA0LLRi9C5LCDQsdCw0LfQvtCy0YvQuSDQstC10LrRgtC+0YAsINC+0YIg0LrQvtGC0L7RgNC+0LPQviDQstC10LTQtdGC0YHRjyDQvtGC0YHRh9C10YIuXG4gICAgICogQHBhcmFtXHRvdGhlclZlY3Rvclx0XHTQktGC0L7RgNC+0Lkg0LLQtdC60YLQvtGALlxuICAgICAqIEBwYXJhbVx0bm9ybWFsVmVjdG9yXHTQktC10LrRgtC+0YAsINC/0LXRgNCy0LXQvdC00LjQutGD0LvRj9GA0L3Ri9C5INC/0LXRgNCy0YvQvCDQtNCy0YPQvC5cbiAgICAgKiBAcmV0dXJuXHRcdFx0XHRcdNCj0LPQvtC7INC80LXQttC00YMg0LLQtdC60YLQvtGA0LDQvNC4LlxuICAgICAqKi9cbiAgICBzdGF0aWMgZ2V0U2lnbmVkQW5nbGVCZXR3ZWVuRGVncyhyZWZlcmVuY2VWZWN0b3I6IFZlYzNmLCBvdGhlclZlY3RvcjogVmVjM2YsIG5vcm1hbFZlY3RvcjogVmVjM2YpOiBudW1iZXIge1xuICAgICAgICBjb25zdCB1bnNpZ25lZEFuZ2xlID0gVmVjM2YuZ2V0QW5nbGVCZXR3ZWVuRGVncyhyZWZlcmVuY2VWZWN0b3IsIG90aGVyVmVjdG9yKTtcbiAgICAgICAgY29uc3Qgc2lnbiAgICAgICAgICA9IFV0aWxzLnNpZ24oIFZlYzNmLmRvdFByb2R1Y3QoVmVjM2YuY3Jvc3NQcm9kdWN0KHJlZmVyZW5jZVZlY3Rvciwgb3RoZXJWZWN0b3IpLCBub3JtYWxWZWN0b3IpKTtcbiAgICAgICAgcmV0dXJuIHVuc2lnbmVkQW5nbGUgKiBzaWduO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINCy0LXQutGC0L7RgCDRgSDQv9GA0LjQvNC10L3RkdC90L3Ri9C80Lgg0Log0L3QtdC80YMg0L7Qs9GA0LDQvdC40YfQtdC90LjRj9C80LguXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdHZlY1RvTGltaXRcdFx00JLQtdC60YLQvtGAINC/0L7QstC+0YDQvtGCINC60L7RgtC+0YDQvtCz0L4g0L3QsNC00L4g0L7Qs9GA0LDQvdC40YfQuNGC0Ywg0L/QviDQvtGC0L3QvtGI0LXQvdC40Y4g0Log0LHQsNC30L7QstC+0LzRgyDQstC10LrRgtC+0YDRgy5cbiAgICAgKiBAcGFyYW1cdHZlY0Jhc2VsaW5lXHRcdNCR0LDQt9C+0LLRi9C5INCy0LXQutGC0L7RgC5cbiAgICAgKiBAcGFyYW1cdGFuZ2xlTGltaXREZWdzXHTQnNCw0LrRgdC40LzQsNC70YzQvdC+INC00L7Qv9GD0YHRgtC40LzRi9C5INGD0LPQvtC7INCyINCz0YDQsNC00YPRgdCw0YUuXG4gICAgICogQHJldHVyblx0XHRcdFx0XHTQntCz0YDQsNC90LjRh9C10L3QvdGL0Lkg0LLQtdC60YLQvtGALlxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRBbmdsZUxpbWl0ZWRVbml0VmVjdG9yRGVncyh2ZWNUb0xpbWl0OiBWZWMzZiwgdmVjQmFzZWxpbmU6IFZlYzNmLCBhbmdsZUxpbWl0RGVnczogbnVtYmVyKTogVmVjM2Yge1xuICAgICAgICBjb25zdCBhbmdsZUJldHdlZW5WZWN0b3JzRGVncyA9IFZlYzNmLmdldEFuZ2xlQmV0d2VlbkRlZ3ModmVjQmFzZWxpbmUsIHZlY1RvTGltaXQpO1xuXG4gICAgICAgIGlmIChhbmdsZUJldHdlZW5WZWN0b3JzRGVncyA+IGFuZ2xlTGltaXREZWdzKSB7XG4gICAgICAgICAgICBjb25zdCBjb3JyZWN0aW9uQXhpcyA9IFZlYzNmLmNyb3NzUHJvZHVjdCh2ZWNCYXNlbGluZS5ub3JtYWxpc2VkKCksIHZlY1RvTGltaXQubm9ybWFsaXNlZCgpICkubm9ybWFsaXNlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBWZWMzZi5yb3RhdGVBYm91dEF4aXNEZWdzKHZlY0Jhc2VsaW5lLCBhbmdsZUxpbWl0RGVncywgY29ycmVjdGlvbkF4aXMpLm5vcm1hbGlzZWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2ZWNUb0xpbWl0Lm5vcm1hbGlzZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINCz0LvQvtCx0LDQu9GM0L3Ri9C5INC/0L7QstC+0YDQvtGCINGN0YLQvtCz0L4g0LLQtdC60YLQvtGA0LAg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INCz0LvQvtCx0LDQu9GM0L3QvtC5INC+0YHQuCBYLlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdC80L7QtSDQt9C90LDRh9C10L3QuNC1INC90LDRhdC+0LTQuNGC0YHRjyDQsiDQtNC40LDQv9Cw0LfQvtC90LUgLTE3OS45Li4xODAuMCDRgdGC0LXQv9C10L3QuC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5cdNCe0YLQutC70L7QvdC10L3QuNC1INCy0LXQutGC0L7RgNCwINCyINCz0YDQsNC00YPRgdCw0YUuXG4gICAgICoqL1xuICAgIGdldEdsb2JhbFBpdGNoRGVncygpOiBudW1iZXIge1xuICAgICAgICBjb25zdCB4UHJvamVjdGVkID0gdGhpcy5wcm9qZWN0T250b1BsYW5lKFZlYzNmLlhfQVhJUyk7XG4gICAgICAgIGNvbnN0IHBpdGNoID0gVmVjM2YuZ2V0QW5nbGVCZXR3ZWVuRGVncyggVmVjM2YuWl9BWElTLm5lZ2F0ZWQoKSwgeFByb2plY3RlZCk7XG4gICAgICAgIHJldHVybiB4UHJvamVjdGVkLnkgPCAwLjAgPyAtcGl0Y2ggOiBwaXRjaDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQs9C70L7QsdCw0LvRjNC90YvQuSDQv9C+0LLQvtGA0L7RgiDRjdGC0L7Qs9C+INCy0LXQutGC0L7RgNCwINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQs9C70L7QsdCw0LvRjNC90L7QuSDQvtGB0LggWS5cbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXQvNC+0LUg0LfQvdCw0YfQtdC90LjQtSDQvdCw0YXQvtC00LjRgtGB0Y8g0LIg0LTQuNCw0L/QsNC30L7QvdC1IC0xNzkuOS4uMTgwLjAg0YHRgtC10L/QtdC90LguXG4gICAgICpcbiAgICAgKiBAcmV0dXJuXHTQntGC0LrQu9C+0L3QtdC90LjQtSDQstC10LrRgtC+0YDQsCDQsiDQs9GA0LDQtNGD0YHQsNGFLlxuICAgICAqKi9cbiAgICBnZXRHbG9iYWxZYXdEZWdzKCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHlQcm9qZWN0ZWQgPSB0aGlzLnByb2plY3RPbnRvUGxhbmUoVmVjM2YuWV9BWElTKTtcbiAgICAgICAgY29uc3QgeWF3ID0gVmVjM2YuZ2V0QW5nbGVCZXR3ZWVuRGVncyggVmVjM2YuWl9BWElTLm5lZ2F0ZWQoKSwgeVByb2plY3RlZCk7XG4gICAgICAgIHJldHVybiB5UHJvamVjdGVkLnggPCAwLjAgPyAteWF3IDogeWF3O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCf0L7QstC+0YDQsNGH0LjQstCw0LXRgiDQstC10LrRgtC+0YAt0L/QsNGA0LDQvNC10YLRgCDQstC+0LrRgNGD0LMg0L7RgdC4IFgg0L3QsCDQt9Cw0LTQsNC90L3Ri9C5INGD0LPQvtC7INCyINGA0LDQtNC40LDQvdCw0YUuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdHNvdXJjZVx0XHTQktC10LrRgtC+0YAg0LTQu9GPINC/0L7QstC+0YDQvtGC0LAuXG4gICAgICogQHBhcmFtXHRhbmdsZVJhZHNcdNCj0LPQvtC7INCyINGA0LDQtNC40LDQvdCw0YUuXG4gICAgICogQHJldHVyblx0XHRcdFx00J/QvtCy0LXRgNC90YPRgtGL0Lkg0LLQtdC60YLQvtGALlxuICAgICAqL1xuICAgIHN0YXRpYyByb3RhdGVYUmFkcyhzb3VyY2U6IFZlYzNmLCBhbmdsZVJhZHM6IG51bWJlcik6IFZlYzNmIHtcbiAgICAgICAgLy8g0J/QvtCy0L7RgNC+0YIg0LLQvtC60YDRg9CzINC+0YHQuCB4OlxuICAgICAgICAvLyB4JyA9IHhcbiAgICAgICAgLy8geScgPSB5KmNvcyBxIC0geipzaW4gcVxuICAgICAgICAvLyB6JyA9IHkqc2luIHEgKyB6KmNvcyBxXG5cbiAgICAgICAgY29uc3QgY29zVGhldGEgPSBNYXRoLmNvcyhhbmdsZVJhZHMpO1xuICAgICAgICBjb25zdCBzaW5UaGV0YSA9IE1hdGguc2luKGFuZ2xlUmFkcyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzZihzb3VyY2UueCwgc291cmNlLnkgKiBjb3NUaGV0YSAtIHNvdXJjZS56ICogc2luVGhldGEsIHNvdXJjZS55ICogc2luVGhldGEgKyBzb3VyY2UueiAqIGNvc1RoZXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LLQvtGA0LDRh9C40LLQsNC10YIg0LLQtdC60YLQvtGALdC/0LDRgNCw0LzQtdGC0YAg0LLQvtC60YDRg9CzINC+0YHQuCBYINC90LAg0LfQsNC00LDQvdC90YvQuSDRg9Cz0L7QuyDQsiDQs9GA0LDQtNGD0YHQsNGFLlxuICAgICAqXG4gICAgICogQHBhcmFtXHRzb3VyY2VcdFx00JLQtdC60YLQvtGAINC00LvRjyDQv9C+0LLQvtGA0L7RgtCwLlxuICAgICAqIEBwYXJhbVx0YW5nbGVEZWdzXHTQo9Cz0L7QuyDQsiDQs9GA0LDQtNGD0YHQsNGFLlxuICAgICAqIEByZXR1cm5cdFx0XHRcdNCf0L7QstC10YDQvdGD0YLRi9C5INCy0LXQutGC0L7RgC5cbiAgICAgKi9cbiAgICBzdGF0aWMgcm90YXRlWERlZ3Moc291cmNlOiBWZWMzZiwgYW5nbGVEZWdzOiBudW1iZXIpOiBWZWMzZiB7IHJldHVybiBWZWMzZi5yb3RhdGVYUmFkcyhzb3VyY2UsIGFuZ2xlRGVncyAqIFV0aWxzLkRFR1NfVE9fUkFEUyk7IH1cblxuICAgIC8qKlxuICAgICAqINCf0L7QstC+0YDQsNGH0LjQstCw0LXRgiDQstC10LrRgtC+0YAt0L/QsNGA0LDQvNC10YLRgCDQstC+0LrRgNGD0LMg0L7RgdC4IFkg0L3QsCDQt9Cw0LTQsNC90L3Ri9C5INGD0LPQvtC7INCyINGA0LDQtNC40LDQvdCw0YUuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdHNvdXJjZVx0XHTQktC10LrRgtC+0YAg0LTQu9GPINC/0L7QstC+0YDQvtGC0LAuXG4gICAgICogQHBhcmFtXHRhbmdsZVJhZHNcdNCj0LPQvtC7INCyINGA0LDQtNC40LDQvdCw0YUuXG4gICAgICogQHJldHVyblx0XHRcdFx00J/QvtCy0LXRgNC90YPRgtGL0Lkg0LLQtdC60YLQvtGALlxuICAgICAqL1xuICAgIHN0YXRpYyByb3RhdGVZUmFkcyhzb3VyY2U6IFZlYzNmLCBhbmdsZVJhZHM6IG51bWJlcik6IFZlYzNmIHtcbiAgICAgICAgLy8g0J/QvtCy0L7RgNC+0YIg0LLQvtC60YDRg9CzINC+0YHQuCB5OlxuICAgICAgICAvLyB4JyA9IHoqc2luIHEgKyB4KmNvcyBxXG4gICAgICAgIC8vIHknID0geVxuICAgICAgICAvLyB6JyA9IHoqY29zIHEgLSB4KnNpbiBxXG4gICAgXG4gICAgICAgIGNvbnN0IGNvc1RoZXRhID0gTWF0aC5jb3MoYW5nbGVSYWRzKTtcbiAgICAgICAgY29uc3Qgc2luVGhldGEgPSBNYXRoLnNpbihhbmdsZVJhZHMpO1xuICAgIFxuICAgICAgICByZXR1cm4gbmV3IFZlYzNmKHNvdXJjZS56ICogc2luVGhldGEgKyBzb3VyY2UueCAqIGNvc1RoZXRhLCBzb3VyY2UueSwgc291cmNlLnogKiBjb3NUaGV0YSAtIHNvdXJjZS54ICogc2luVGhldGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCf0L7QstC+0YDQsNGH0LjQstCw0LXRgiDQstC10LrRgtC+0YAt0L/QsNGA0LDQvNC10YLRgCDQstC+0LrRgNGD0LMg0L7RgdC4IFkg0L3QsCDQt9Cw0LTQsNC90L3Ri9C5INGD0LPQvtC7INCyINCz0YDQsNC00YPRgdCw0YUuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdHNvdXJjZVx0XHTQktC10LrRgtC+0YAg0LTQu9GPINC/0L7QstC+0YDQvtGC0LAuXG4gICAgICogQHBhcmFtXHRhbmdsZURlZ3NcdNCj0LPQvtC7INCyINCz0YDQsNC00YPRgdCw0YUuXG4gICAgICogQHJldHVyblx0XHRcdFx00J/QvtCy0LXRgNC90YPRgtGL0Lkg0LLQtdC60YLQvtGALlxuICAgICAqL1xuICAgIHN0YXRpYyByb3RhdGVZRGVncyhzb3VyY2U6IFZlYzNmLCBhbmdsZURlZ3M6IG51bWJlcik6IFZlYzNmIHsgcmV0dXJuIFZlYzNmLnJvdGF0ZVlSYWRzKHNvdXJjZSwgYW5nbGVEZWdzICogVXRpbHMuREVHU19UT19SQURTKTsgfVxuXG4gICAgLyoqXG4gICAgICog0J/QvtCy0L7RgNCw0YfQuNCy0LDQtdGCINCy0LXQutGC0L7RgC3Qv9Cw0YDQsNC80LXRgtGAINCy0L7QutGA0YPQsyDQvtGB0LggWiDQvdCwINC30LDQtNCw0L3QvdGL0Lkg0YPQs9C+0Lsg0LIg0YDQsNC00LjQsNC90LDRhS5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0c291cmNlXHRcdNCS0LXQutGC0L7RgCDQtNC70Y8g0L/QvtCy0L7RgNC+0YLQsC5cbiAgICAgKiBAcGFyYW1cdGFuZ2xlUmFkc1x00KPQs9C+0Lsg0LIg0YDQsNC00LjQsNC90LDRhS5cbiAgICAgKiBAcmV0dXJuXHRcdFx0XHTQn9C+0LLQtdGA0L3Rg9GC0YvQuSDQstC10LrRgtC+0YAuXG4gICAgICovXG4gICAgc3RhdGljIHJvdGF0ZVpSYWRzKHNvdXJjZTogVmVjM2YsIGFuZ2xlUmFkczogbnVtYmVyKTogVmVjM2Yge1xuICAgICAgICAvLyDQn9C+0LLQvtGA0L7RgiDQstC+0LrRgNGD0LMg0L7RgdC4IHo6XG4gICAgICAgIC8vIHgnID0geCpjb3MgcSAtIHkqc2luIHFcbiAgICAgICAgLy8geScgPSB4KnNpbiBxICsgeSpjb3MgcVxuICAgICAgICAvLyB6JyA9IHpcblxuICAgICAgICBjb25zdCBjb3NUaGV0YSA9IE1hdGguY29zKGFuZ2xlUmFkcyk7XG4gICAgICAgIGNvbnN0IHNpblRoZXRhID0gTWF0aC5zaW4oYW5nbGVSYWRzKTtcblxuICAgICAgICByZXR1cm4gbmV3IFZlYzNmKHNvdXJjZS54ICogY29zVGhldGEgLSBzb3VyY2UueSAqIHNpblRoZXRhLCBzb3VyY2UueCAqIHNpblRoZXRhICsgc291cmNlLnkgKiBjb3NUaGV0YSwgc291cmNlLnopO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqINCf0L7QstC+0YDQsNGH0LjQstCw0LXRgiDQstC10LrRgtC+0YAt0L/QsNGA0LDQvNC10YLRgCDQstC+0LrRgNGD0LMg0L7RgdC4IFog0L3QsCDQt9Cw0LTQsNC90L3Ri9C5INGD0LPQvtC7INCyINCz0YDQsNC00YPRgdCw0YUuXG4gICAgICpcbiAgICAgKiBAcGFyYW1cdHNvdXJjZVx0XHTQktC10LrRgtC+0YAg0LTQu9GPINC/0L7QstC+0YDQvtGC0LAuXG4gICAgICogQHBhcmFtXHRhbmdsZURlZ3NcdNCj0LPQvtC7INCyINCz0YDQsNC00YPRgdCw0YUuXG4gICAgICogQHJldHVyblx0XHRcdFx00J/QvtCy0LXRgNC90YPRgtGL0Lkg0LLQtdC60YLQvtGALlxuICAgICAqL1xuICAgIHN0YXRpYyByb3RhdGVaRGVncyhzb3VyY2U6IFZlYzNmLCBhbmdsZURlZ3M6IG51bWJlcik6IFZlYzNmIHsgcmV0dXJuIFZlYzNmLnJvdGF0ZVpSYWRzKHNvdXJjZSwgYW5nbGVEZWdzICogVXRpbHMuREVHU19UT19SQURTKTsgfVxuXG4gICAgLyoqXG4gICAgICog0J/QvtCy0L7RgNCw0YfQuNCy0LDQtdGCINCy0LXQutGC0L7RgCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0L7RgdC4LlxuICAgICAqXG4gICAgICogQHBhcmFtIHNvdXJjZVx0XHTQktC10LrRgtC+0YAg0LTQu9GPINC/0L7QstC+0YDQvtGC0LAuXG4gICAgICogQHBhcmFtIGFuZ2xlRGVnc1x0XHTQo9Cz0L7QuyDQv9C+0LLQvtGA0L7RgtCwINCyINGA0LDQtNC40LDQvdCw0YUuXG4gICAgICogQHBhcmFtIHJvdGF0aW9uQXhpc1x00J7RgdGMINCy0YDQsNGJ0LXQvdC40Y8uXG4gICAgICogQHJldHVyblx0XHRcdFx00JjRgdGF0L7QtNC90YvQuSDQstC10LrRgtC+0YAsINC/0L7QstC10YDQvdGD0YLRi9C5INC90LAg0L3Rg9C20L3Ri9C5INGD0LPQvtC7LlxuICAgICAqL1xuICAgIHN0YXRpYyByb3RhdGVBYm91dEF4aXNSYWRzKHNvdXJjZTogVmVjM2YsIGFuZ2xlUmFkczogbnVtYmVyLCByb3RhdGlvbkF4aXM6IFZlYzNmKTogVmVjM2Yge1xuICAgICAgICBjb25zdCByb3RhdGlvbk1hdHJpeCA9IG5ldyBNYXQzZigpO1xuXG4gICAgICAgIGNvbnN0IHNpblRoZXRhICAgICAgICAgPSBNYXRoLnNpbihhbmdsZVJhZHMpO1xuICAgICAgICBjb25zdCBjb3NUaGV0YSAgICAgICAgID0gTWF0aC5jb3MoYW5nbGVSYWRzKTtcbiAgICAgICAgY29uc3Qgb25lTWludXNDb3NUaGV0YSA9IDEuMCAtIGNvc1RoZXRhO1xuXG4gICAgICAgIGNvbnN0IHh5T25lID0gcm90YXRpb25BeGlzLnggKiByb3RhdGlvbkF4aXMueSAqIG9uZU1pbnVzQ29zVGhldGE7XG4gICAgICAgIGNvbnN0IHh6T25lID0gcm90YXRpb25BeGlzLnggKiByb3RhdGlvbkF4aXMueiAqIG9uZU1pbnVzQ29zVGhldGE7XG4gICAgICAgIGNvbnN0IHl6T25lID0gcm90YXRpb25BeGlzLnkgKiByb3RhdGlvbkF4aXMueiAqIG9uZU1pbnVzQ29zVGhldGE7XG5cbiAgICAgICAgcm90YXRpb25NYXRyaXgubTAwID0gcm90YXRpb25BeGlzLnggKiByb3RhdGlvbkF4aXMueCAqIG9uZU1pbnVzQ29zVGhldGEgKyBjb3NUaGV0YTtcbiAgICAgICAgcm90YXRpb25NYXRyaXgubTAxID0geHlPbmUgKyByb3RhdGlvbkF4aXMueiAqIHNpblRoZXRhO1xuICAgICAgICByb3RhdGlvbk1hdHJpeC5tMDIgPSB4ek9uZSAtIHJvdGF0aW9uQXhpcy55ICogc2luVGhldGE7XG5cbiAgICAgICAgcm90YXRpb25NYXRyaXgubTEwID0geHlPbmUgLSByb3RhdGlvbkF4aXMueiAqIHNpblRoZXRhO1xuICAgICAgICByb3RhdGlvbk1hdHJpeC5tMTEgPSByb3RhdGlvbkF4aXMueSAqIHJvdGF0aW9uQXhpcy55ICogb25lTWludXNDb3NUaGV0YSArIGNvc1RoZXRhO1xuICAgICAgICByb3RhdGlvbk1hdHJpeC5tMTIgPSB5ek9uZSArIHJvdGF0aW9uQXhpcy54ICogc2luVGhldGE7XG5cbiAgICAgICAgcm90YXRpb25NYXRyaXgubTIwID0geHpPbmUgKyByb3RhdGlvbkF4aXMueSAqIHNpblRoZXRhO1xuICAgICAgICByb3RhdGlvbk1hdHJpeC5tMjEgPSB5ek9uZSAtIHJvdGF0aW9uQXhpcy54ICogc2luVGhldGE7XG4gICAgICAgIHJvdGF0aW9uTWF0cml4Lm0yMiA9IHJvdGF0aW9uQXhpcy56ICogcm90YXRpb25BeGlzLnogKiBvbmVNaW51c0Nvc1RoZXRhICsgY29zVGhldGE7XG5cbiAgICAgICAgcmV0dXJuIHJvdGF0aW9uTWF0cml4LnRpbWVzKHNvdXJjZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0J/QvtCy0L7RgNCw0YfQuNCy0LDQtdGCINCy0LXQutGC0L7RgCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0L7RgdC4LlxuICAgICAqXG4gICAgICogQHBhcmFtIHNvdXJjZVx0XHTQktC10LrRgtC+0YAg0LTQu9GPINC/0L7QstC+0YDQvtGC0LAuXG4gICAgICogQHBhcmFtIGFuZ2xlRGVnc1x0XHTQo9Cz0L7QuyDQv9C+0LLQvtGA0L7RgtCwINCyINCz0YDQsNC00YPRgdCw0YUuXG4gICAgICogQHBhcmFtIHJvdGF0aW9uQXhpc1x00J7RgdGMINCy0YDQsNGJ0LXQvdC40Y8uXG4gICAgICogQHJldHVyblx0XHRcdFx00JjRgdGF0L7QtNC90YvQuSDQstC10LrRgtC+0YAsINC/0L7QstC10YDQvdGD0YLRi9C5INC90LAg0L3Rg9C20L3Ri9C5INCz0YDQsNC00YPRgS5cbiAgICAgKi9cbiAgICBzdGF0aWMgcm90YXRlQWJvdXRBeGlzRGVncyhzb3VyY2U6IFZlYzNmLCBhbmdsZURlZ3M6IG51bWJlciwgcm90YXRpb25BeGlzOiBWZWMzZik6IFZlYzNmIHtcbiAgICAgICAgcmV0dXJuIFZlYzNmLnJvdGF0ZUFib3V0QXhpc1JhZHMoc291cmNlLCBhbmdsZURlZ3MgKiBVdGlscy5ERUdTX1RPX1JBRFMsIHJvdGF0aW9uQXhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0YHRg9C80LzRgyDQtNCw0L3QvdC+0LPQviDQstC10LrRgtC+0YDQsCDRgSDQstC10LrRgtC+0YDQvtC8INC40Lcg0L/QsNGA0LDQvNC10YLRgNC+0LIsINC90LUg0LzQtdC90Y/RjyDQtNCw0L3QvdGL0Lkg0LLQtdC60YLQvtGALlxuICAgICAqXG4gICAgICogQHBhcmFtXHR2XHTQktC10LrRgtC+0YAuXG4gICAgICogQHJldHVyblx0XHTQoNC10LfRg9C70YzRgtCw0YIg0YHQu9C+0LbQtdC90LjRjyDQtNCw0L3QvdC+0LPQviDQstC10LrRgtC+0YDQsCDRgSDQstC10LrRgtC+0YDQvtC8INC/0LDRgNCw0LzQtdGC0YDQvtC8LlxuICAgICAqKi9cbiAgICBwbHVzID0gKHY6IFZlYzNmKTogVmVjM2YgID0+IG5ldyBWZWMzZih0aGlzLnggKyB2LngsIHRoaXMueSArIHYueSwgdGhpcy56ICsgdi56KTtcblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINGA0LDQt9C90L7RgdGC0Ywg0LTQsNC90L3QvtCz0L4g0LLQtdC60YLQvtGA0LAg0YEg0LLQtdC60YLQvtGA0L7QvCDQuNC3INC/0LDRgNCw0LzQtdGC0YDQvtCyLCDQvdC1INC80LXQvdGP0Y8g0LTQsNC90L3Ri9C5INCy0LXQutGC0L7RgC5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0dlx00JLQtdC60YLQvtGALlxuICAgICAqIEByZXR1cm5cdFx00KDQtdC30YPQu9GM0YLQsNGCINCy0YvRh9C40YLQsNC90LjRjyDQuNC3INC00LDQvdC90L7Qs9C+INCy0LXQutGC0L7RgNCwINCy0LXQutGC0L7RgNCwLdC/0LDRgNCw0LzQtdGC0YDQsC5cbiAgICAgKiovXG4gICAgbWludXMgPSAodjogVmVjM2YpOiBWZWMzZiA9PiBuZXcgVmVjM2YodGhpcy54IC0gdi54LCB0aGlzLnkgLSB2LnksIHRoaXMueiAtIHYueik7XG5cbiAgICAvKipcbiAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQvdC+0LLRi9C5INCy0LXQutGC0L7RgCwg0YMg0LrQvtGC0L7RgNC+0LPQviDQutCw0LbQtNCw0Y8g0LrQvtC80L/QvtC90LXQvdGC0LAg0LTQvtC80L3QvtC20LXQvdC90YvQuSDQvdCwINGH0LjRgdC70L4g0LjQu9C4XG4gICAgICog0L3QsCDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidGD0Y4g0LrQvtC80L/QvtC90LXQvdGC0YMg0LLQtdC60YLQvtGA0LAt0L/QsNGA0LDQvNC10YLRgNCwLlxuICAgICAqXG4gICAgICogQHBhcmFtXHRzY2FsZVx00KfQuNGB0LvQviDQuNC70Lgg0LLQtdC60YLQvtGALlxuICAgICAqIEByZXR1cm5cbiAgICAgKiovXG4gICAgdGltZXMoc2NhbGU6IFZlYzNmIHwgbnVtYmVyKTogVmVjM2Yge1xuICAgICAgICBpZiAoc2NhbGUgaW5zdGFuY2VvZiBWZWMzZikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWMzZih0aGlzLnggKiBzY2FsZS54LCB0aGlzLnkgKiBzY2FsZS55LCB0aGlzLnogKiBzY2FsZS56KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjM2YodGhpcy54ICogc2NhbGUsIHRoaXMueSAqIHNjYWxlLCB0aGlzLnogKiBzY2FsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDQlNC+0LzQvdC+0LbQsNC10YIg0LrQsNC20LTRg9GOINC60L7QvNC/0L7QvdC10L3RgtGDINCy0LXQutGC0L7RgNCwLdC/0LDRgNCw0LzQtdGC0YDQsCDQvdCwINGH0LjRgdC70L4t0L/QsNGA0LDQvNC10YLRgC5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0dlx0XHTQktC10LrRgtC+0YAuXG4gICAgICogQHBhcmFtXHRzY2FsZVx00KfQuNGB0LvQviwg0L3QsCDQutC+0YLQvtGA0L7QtSDQvdCw0LTQviDQtNC+0LzQvdC+0LbQuNGC0YwuXG4gICAgICoqL1xuICAgIHN0YXRpYyB0aW1lcyh2OiBWZWMzZiwgc2NhbGU6IG51bWJlcik6IHZvaWQgeyB2LnggKj0gc2NhbGU7IHYueSAqPSBzY2FsZTsgdi56ICo9IHNjYWxlOyB9XG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LrQvtC80L/QvtC90LXQvdGC0L3QviDRgdC60LvQsNC00YvQstCw0LXRgiDQtNCy0LAg0LLQtdC60YLQvtGA0LAsINC30LDQv9C40YHRi9Cy0LDRjyDRgNC10LfRg9C70YzRgtCw0YIg0LIg0L/QtdGA0LLRi9C5LlxuICAgICAqXG4gICAgICogIEBwYXJhbVx0c291cmNlXHTQktC10LrRgtC+0YAsINCyINC60L7RgtC+0YDRi9C5INC30LDQv9C40YjQtdGC0YHRjyDRgNC10LfRg9C70YzRgtCw0YIg0YHQu9C+0LbQtdC90LjRjy5cbiAgICAgKiAgQHBhcmFtXHRvdGhlclx00JLRgtC+0YDQvtC5INCy0LXQutGC0L7RgC5cbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkKHNvdXJjZTogVmVjM2YsIG90aGVyOiBWZWMzZik6IHZvaWQgeyBzb3VyY2UueCArPSBvdGhlci54OyBzb3VyY2UueSArPSBvdGhlci55OyBzb3VyY2UueiArPSBvdGhlci56OyB9XG5cbiAgICAvKipcbiAgICAgKiDQn9C+0LrQvtC80L/QvtC90LXQvdGC0L3QviDQstGL0YfQuNGC0LDQtdGCINC40Lcg0L/QtdGA0LLQvtCz0L4g0LLQtdC60YLQvtGA0LAg0LLRgtC+0YDQvtC5LCDQvNC+0LTQuNGE0LjRhtC40YDRg9GPINC/0LXRgNCy0YvQuS5cbiAgICAgKlxuICAgICAqICBAcGFyYW1cdHNvdXJjZVx00JLQtdC60YLQvtGALCDQutC+0YLQvtGA0YvQuSDQsdGD0LTQtdGCINGB0L7QtNC10YDQttCw0YLRjCDRgNC10LfRg9C70YzRgtCw0YIuXG4gICAgICogIEBwYXJhbVx0b3RoZXJcdNCS0YLQvtGA0L7QuSDQstC10LrRgtC+0YAuXG4gICAgICovXG4gICAgc3RhdGljIHN1YnRyYWN0KHNvdXJjZTogVmVjM2YsIG90aGVyOiBWZWMzZik6IHZvaWQgeyBzb3VyY2UueCAtPSBvdGhlci54OyBzb3VyY2UueSAtPSBvdGhlci55OyBzb3VyY2UueiAtPSBvdGhlci56OyB9XG5cbiAgICAvKipcbiAgICAgKiDQlNC10LvQuNGCINCy0LXQutGC0L7RgCDQvdCwINGH0LjRgdC70L4g0Lgg0LLQvtC30LLRgNCw0YnQsNC10YIg0YDQtdC30YPQu9GM0YLQsNGCLCDQvdC1INC80LXQvdGP0Y8g0L/RgNC4INGN0YLQvtC8INC40YHRhdC+0LTQvdGL0Lkg0LLQtdC60YLQvtGALlxuICAgICAqXG4gICAgICogQHBhcmFtXHR2YWx1ZVx00KfQuNGB0LvQviwg0L3QsCDQutC+0YLQvtGA0L7QtSDQvdC10L7QsdGF0L7QtNC40LzQviDQv9C+0LTQtdC70LjRgtGMLlxuICAgICAqIEByZXR1cm5cdFx0XHTQoNC10LfRg9C70YzRgtCw0YIg0LTQtdC70LXQvdC40Y8g0LTQsNC90L3QvtCz0L4g0LLQtdC60YLQvtGA0LAg0L3QsCDRh9C40YHQu9C+LlxuICAgICAqKi9cbiAgICBkaXZpZGVkQnkodmFsdWU6IG51bWJlcik6IFZlYzNmIHsgcmV0dXJuIG5ldyBWZWMzZih0aGlzLnggLyB2YWx1ZSwgdGhpcy55IC8gdmFsdWUsIHRoaXMueiAvIHZhbHVlKTsgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0L/RgNC+0LXQutGG0LjRjiDQstC10LrRgtC+0YDQsCDQvdCwINC/0LvQvtGB0LrQvtGB0YLRjC5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0cGxhbmVOb3JtYWxcdNCd0L7RgNC80LDQu9GMINC6INC/0LvQvtGB0LrQvtGB0YLQuC5cbiAgICAgKiBAcmV0dXJuXHRcdFx0XHTQn9GA0L7QtdC60YbQuNGPINCy0LXQutGC0L7RgNCwLlxuICAgICAqL1xuICAgIHByb2plY3RPbnRvUGxhbmUocGxhbmVOb3JtYWw6IFZlYzNmKTogVmVjM2Yge1xuICAgICAgICBpZiAoICEocGxhbmVOb3JtYWwubGVuZ3RoKCkgPiAwLjApICkge1x0dGhyb3cgbmV3IEVycm9yKCdQbGFuZSBub3JtYWwgY2Fubm90IGJlIGEgemVybyB2ZWN0b3IuJyk7IH1cblxuICAgICAgICAvLyDQn9GA0L7QtdC60YbQuNGPINCy0LXQutGC0L7RgNCwIGIg0L3QsCDQv9C70L7RgdC60L7RgdGC0Ywg0YEg0L3QvtGA0LzQsNC70YzRjiBuIDogYiAtICggYi5uIC8gKCB8bnwgc3F1YXJlZCApKSAqIG5cbiAgICAgICAgY29uc3QgYiA9IHRoaXMubm9ybWFsaXNlZCgpO1xuICAgICAgICBjb25zdCBuID0gcGxhbmVOb3JtYWwubm9ybWFsaXNlZCgpO1xuICAgICAgICByZXR1cm4gYi5taW51cyhuLnRpbWVzKFZlYzNmLmRvdFByb2R1Y3QoYiwgcGxhbmVOb3JtYWwpKSkubm9ybWFsaXNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQstC10LrRgtC+0YDQsCwg0LTQu9GPINC60L7RgtC+0YDQvtCz0L4gdjEgLSDQvdCw0YfQsNC70YzQvdCw0Y8g0YLQvtGH0LrQsCwg0LAgdjIgLSDQutC+0L3QtdGH0L3QsNGPLlxuICAgICAqINCd0LDQv9GA0LDQstC70LXQvdC40LUg0LHRg9C00LXRgiDQtdC00LjQvdC40YfQvdGL0Lwg0LLQtdC60YLQvtGA0L7QvC5cbiAgICAgKlxuICAgICAqIEBwYXJhbVx0djFcdNCd0LDRh9Cw0LvRjNC90LDRjyDRgtC+0YfQutCwLlxuICAgICAqIEBwYXJhbVx0djJcdNCa0L7QvdC10YfQvdCw0Y8g0YLQvtGH0LrQsC5cbiAgICAgKiBAcmV0dXJuXG4gICAgICovXG4gICAgc3RhdGljIGdldERpcmVjdGlvblVWKHYxOiBWZWMzZiwgdjI6IFZlYzNmKTogVmVjM2YgeyByZXR1cm4gdjIubWludXModjEpLm5vcm1hbGlzZSgpOyB9XG5cbiAgICB0b0FycmF5ID0gKCk6IG51bWJlcltdID0+IFt0aGlzLngsIHRoaXMueSwgdGhpcy56XTtcbn1cbiIsImltcG9ydCB7Q2FtZXJhLCBDYW1lcmFDb250cm9sbGVyfSBmcm9tICcuL0NhbWVyYSc7XG5cbmNvbnN0IEFUVFJfUE9TSVRJT05fTkFNRSA9ICdhX3Bvc2l0aW9uJztcbmNvbnN0IEFUVFJfUE9TSVRJT05fTE9DID0gMDtcbmNvbnN0IEFUVFJfQ09MT1JfTkFNRSA9ICdhX2NvbG9yJztcbmNvbnN0IEFUVFJfQ09MT1JfTE9DID0gMTtcblxuZXhwb3J0IGNsYXNzIFNjZW5lIHtcbiAgICBjYW52YXM7XG4gICAgZ2w7XG4gICAgZ0NhbWVyYTtcbiAgICBnQ2FtZXJhQ3RybDtcbiAgICBnR3JpZFNoYWRlcjtcbiAgICBnR3JpZE1vZGFsO1xuICAgIFJMb29wO1xuICAgIF9wcmltaXRpdmVzID0gW107XG4gICAgX3BvaW50cyA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzSUQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJRCk7XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJ3dlYmdsMicpO1xuXG4gICAgICAgIGlmICghZ2wpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlYkdMIGNvbnRleHQgaXMgbm90IGF2YWlsYWJsZS4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGdsLm1NZXNoQ2FjaGUgPSBbXTtcdC8vINCR0YPQtNC10Lwg0LrQtdGI0LjRgNC+0LLQsNGC0Ywg0LLRgdGRLCDRh9GC0L4g0YDQuNGB0YPQtdC8INC90LAg0YHRhtC10L3QtS5cblxuICAgICAgICAvLyDQl9Cw0LTQsNGR0Lwg0L3QtdC+0LHRhdC+0LTQuNC80YvQtSDQutC+0L3RhNC40LPRg9GA0LDRhtC40Lgg0YHRhtC10L3QtS5cbiAgICAgICAgZ2wuY3VsbEZhY2UoZ2wuQkFDSyk7XHRcdFx0XHRcdFx0XHRcdC8vIEJhY2sgaXMgYWxzbyBkZWZhdWx0XG4gICAgICAgIGdsLmZyb250RmFjZShnbC5DQ1cpO1x0XHRcdFx0XHRcdFx0XHQvLyBEb250IHJlYWxseSBuZWVkIHRvIHNldCBpdCwgaXRzIGNjdyBieSBkZWZhdWx0LlxuICAgICAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XHRcdFx0XHRcdFx0XHQvLyBTaG91bGRuJ3QgdXNlIHRoaXMsIHVzZSBzb21ldGhpbmcgZWxzZSB0byBhZGQgZGVwdGggZGV0ZWN0aW9uXG4gICAgICAgIGdsLmVuYWJsZShnbC5DVUxMX0ZBQ0UpO1x0XHRcdFx0XHRcdFx0Ly8gQ3VsbCBiYWNrIGZhY2UsIHNvIG9ubHkgc2hvdyB0cmlhbmdsZXMgdGhhdCBhcmUgY3JlYXRlZCBjbG9ja3dpc2VcbiAgICAgICAgZ2wuZGVwdGhGdW5jKGdsLkxFUVVBTCk7XHRcdFx0XHRcdFx0XHQvLyBOZWFyIHRoaW5ncyBvYnNjdXJlIGZhciB0aGluZ3NcbiAgICAgICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XHQvLyBTZXR1cCBkZWZhdWx0IGFscGhhIGJsZW5kaW5nXG4gICAgICAgIGdsLmNsZWFyQ29sb3IoMS4wLCAxLjAsIDEuMCwgMS4wKTtcdCAgICAgICAgICAgICAgICAvLyBTZXQgY2xlYXIgY29sb3JcblxuXG4gICAgICAgIC8vICDQp9C40YHRgtC40Lwg0LrQsNC90LLQsNGBINC+0YIg0LLRgdC10LPQviwg0YfRgtC+INC40LfQvtCx0YDQsNC20LXQvdC+LlxuICAgICAgICBnbC5mQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKHRoaXMuQ09MT1JfQlVGRkVSX0JJVCB8IHRoaXMuREVQVEhfQlVGRkVSX0JJVCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDQodC+0LfQtNCw0ZHQvCDQuCDQt9Cw0L/QvtC70L3Rj9C10Lwg0LHRg9GE0YTQtdGALlxuICAgICAgICBnbC5mQ3JlYXRlQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoZmxvYXRBcnksIGlzU3RhdGljID0gdHJ1ZSkge1xuICAgICAgICAgICAgbGV0IGJ1ZiA9IHRoaXMuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgICAgICB0aGlzLmJpbmRCdWZmZXIodGhpcy5BUlJBWV9CVUZGRVIsIGJ1Zik7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlckRhdGEodGhpcy5BUlJBWV9CVUZGRVIsIGZsb2F0QXJ5LCAoaXNTdGF0aWMpID8gdGhpcy5TVEFUSUNfRFJBVyA6IHRoaXMuRFlOQU1JQ19EUkFXKTtcbiAgICAgICAgICAgIHRoaXMuYmluZEJ1ZmZlcih0aGlzLkFSUkFZX0JVRkZFUiwgbnVsbCk7XG4gICAgICAgICAgICByZXR1cm4gYnVmO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vINCf0YDQtdCy0YDQsNGJ0LDQtdC8INC80LDRgdGB0LjQstGLINCyIEdMINCx0YPRhNC10YDRiyDQuCDQt9Cw0L/QvtC70L3Rj9C10LwgVkFPLCDQutC+0YLQvtGA0YvQtSDQsdGD0LTRg9GCINC/0YDQtdC00L7Qv9GA0LXQtNC10LvRj9GC0Ywg0LHRg9GE0LXRgNGLINGB0YLQsNC90LTQsNGA0YLQvdGL0YUg0LDRgtGA0LjQsdGD0YLQvtCyINGI0LXQudC00LXRgNCwLlxuICAgICAgICBnbC5mQ3JlYXRlTWVzaFZBTyA9IGZ1bmN0aW9uIChuYW1lLCBhcnJWZXJ0LCBhcnJDb2wsIGRyYXdNb2RlID0gdGhpcy5MSU5FUykge1xuICAgICAgICAgICAgbGV0IHJlczogYW55ID0ge2RyYXdNb2RlfTtcblxuICAgICAgICAgICAgcmVzLnZhbyA9IHRoaXMuY3JlYXRlVmVydGV4QXJyYXkoKTtcbiAgICAgICAgICAgIHRoaXMuYmluZFZlcnRleEFycmF5KHJlcy52YW8pO1xuXG4gICAgICAgICAgICAvLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgICAgIC8vINCX0LDQtNCw0ZHQvCDQutC+0L3RgdGC0LDQvdGC0YtcbiAgICAgICAgICAgIGlmIChhcnJWZXJ0KSB7XG4gICAgICAgICAgICAgICAgcmVzLmJ1ZlZlcnRpY2VzID0gdGhpcy5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgICAgICAgICByZXMudmVydGV4Q29tcG9uZW50TGVuID0gMztcbiAgICAgICAgICAgICAgICByZXMudmVydGV4Q291bnQgPSBhcnJWZXJ0Lmxlbmd0aCAvIHJlcy52ZXJ0ZXhDb21wb25lbnRMZW47XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRCdWZmZXIodGhpcy5BUlJBWV9CVUZGRVIsIHJlcy5idWZWZXJ0aWNlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXJEYXRhKHRoaXMuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KGFyclZlcnQpLCB0aGlzLlNUQVRJQ19EUkFXKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KEFUVFJfUE9TSVRJT05fTE9DKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRleEF0dHJpYlBvaW50ZXIoQVRUUl9QT1NJVElPTl9MT0MsIDMsIHRoaXMuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgICAvLyDQl9Cw0LTQsNGR0Lwg0YbQstC10YLQsFxuICAgICAgICAgICAgaWYgKGFyckNvbCkge1xuICAgICAgICAgICAgICAgIHJlcy5idWZDb2xvcnMgPSB0aGlzLmNyZWF0ZUJ1ZmZlcigpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kQnVmZmVyKHRoaXMuQVJSQVlfQlVGRkVSLCByZXMuYnVmQ29sb3JzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlckRhdGEodGhpcy5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoYXJyQ29sKSwgdGhpcy5TVEFUSUNfRFJBVyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShBVFRSX0NPTE9SX0xPQyk7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXhBdHRyaWJQb2ludGVyKEFUVFJfQ09MT1JfTE9DLCA0LCB0aGlzLkZMT0FULCBmYWxzZSwgMCwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYmluZFZlcnRleEFycmF5KG51bGwpO1x0XHRcdFx0XHQvLyAhISFcbiAgICAgICAgICAgIHRoaXMuYmluZEJ1ZmZlcih0aGlzLkFSUkFZX0JVRkZFUiwgbnVsbCk7XG5cbiAgICAgICAgICAgIHRoaXMubU1lc2hDYWNoZVtuYW1lXSA9IHJlcztcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgZ2wuZlNldFNpemUgPSBmdW5jdGlvbiAodywgaCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSB3ICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3O1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaDtcblxuICAgICAgICAgICAgdGhpcy52aWV3cG9ydCgwLCAwLCB3LCBoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIGdsLmZGaXRTY3JlZW4gPSBmdW5jdGlvbiAod3AgPSAxLCBocCA9IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZTZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoICogd3AsIHdpbmRvdy5pbm5lckhlaWdodCAqIGhwKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmdsLmZGaXRTY3JlZW4oMSwgMSkuZkNsZWFyKCk7XG5cbiAgICAgICAgdGhpcy5nQ2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKTtcbiAgICAgICAgdGhpcy5nQ2FtZXJhLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoMCwgMC4zLCAzKTtcbiAgICAgICAgdGhpcy5nQ2FtZXJhQ3RybCA9IG5ldyBDYW1lcmFDb250cm9sbGVyKHRoaXMuZ2wsIHRoaXMuZ0NhbWVyYSk7XG5cbiAgICAgICAgdGhpcy5nR3JpZFNoYWRlciA9IG5ldyBHcmlkQXhpc1NoYWRlcih0aGlzLmdsLCB0aGlzLmdDYW1lcmEucHJvamVjdGlvbk1hdHJpeCk7XG4gICAgICAgIHRoaXMuZ0dyaWRNb2RhbCA9IFByaW1hdGl2ZXMuR3JpZEF4aXMuY3JlYXRlTW9kYWwodGhpcy5nbCwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5STG9vcCA9IG5ldyBSZW5kZXJMb29wKHRoaXMub25SZW5kZXIsIDMwKS5zdGFydCgpO1xuICAgIH1cblxuICAgIG9uUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmdDYW1lcmEudXBkYXRlVmlld01hdHJpeCgpO1xuICAgICAgICB0aGlzLmdsLmZDbGVhcigpO1xuXG4gICAgICAgIHRoaXMuZ0dyaWRTaGFkZXIuYWN0aXZhdGUoKVxuICAgICAgICAuc2V0Q2FtZXJhTWF0cml4KHRoaXMuZ0NhbWVyYS52aWV3TWF0cml4KVxuICAgICAgICAucmVuZGVyTW9kYWwodGhpcy5nR3JpZE1vZGFsLnByZVJlbmRlcigpKTtcblxuICAgICAgICBmb3IgKGxldCBwcmltaXRpdmUgb2YgdGhpcy5fcHJpbWl0aXZlcykge1xuICAgICAgICAgICAgcHJpbWl0aXZlLmdTaGFkZXIuYWN0aXZhdGUoKVxuICAgICAgICAgICAgLnNldENhbWVyYU1hdHJpeCh0aGlzLmdDYW1lcmEudmlld01hdHJpeClcbiAgICAgICAgICAgIC5yZW5kZXJNb2RhbChwcmltaXRpdmUuZ01vZGFsLnByZVJlbmRlcigpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiB0aGlzLl9wb2ludHMpIHtcbiAgICAgICAgICAgIHBvaW50LmdTaGFkZXIuYWN0aXZhdGUoKVxuICAgICAgICAgICAgLnNldENhbWVyYU1hdHJpeCh0aGlzLmdDYW1lcmEudmlld01hdHJpeClcbiAgICAgICAgICAgIC5yZW5kZXJNb2RhbChwb2ludC5nTW9kYWwucHJlUmVuZGVyKCkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFkZFByaW1pdGl2ZShzdHJ1Y3R1cmUpIHtcbiAgICAgICAgY29uc3QgcHJpbSA9IG5ldyBQcmltaXRpdmUodGhpcy5nbCwgdGhpcy5nQ2FtZXJhLCBzdHJ1Y3R1cmUpO1xuICAgICAgICB0aGlzLl9wcmltaXRpdmVzLnB1c2gocHJpbSk7XG5cbiAgICAgICAgcmV0dXJuIHByaW07XG4gICAgfVxuXG4gICAgYWRkUG9pbnQodmVjLCBjb2xvcikge1xuICAgICAgICB0aGlzLl9wb2ludHMucHVzaChuZXcgUG9pbnQodGhpcy5nbCwgdGhpcy5nQ2FtZXJhLCB2ZWMsIGNvbG9yKSk7XG4gICAgfVxufVxuXG5jbGFzcyBQb2ludCB7XG4gICAgZ01vZGFsO1xuICAgIGdTaGFkZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihnbCwgY2FtZXJhLCB2ZWMsIGNvbG9yKSB7XG4gICAgICAgIHRoaXMuZ1NoYWRlciA9IG5ldyBQcmltaXRpdmVTaGFkZXIoZ2wsIGNhbWVyYS5wcm9qZWN0aW9uTWF0cml4KTtcbiAgICAgICAgdGhpcy5nTW9kYWwgPSBQcmltYXRpdmVzLlBvaW50LmNyZWF0ZU1vZGFsKGdsLCAncG9pbnQnLCB2ZWMudG9BcnJheSgpLCBjb2xvci50b0FycmF5KCkpO1xuICAgIH1cbn1cblxuY2xhc3MgUHJpbWl0aXZlIHtcbiAgICBzdHJ1Y3R1cmU7XG4gICAgZ2w7XG4gICAgZ1NoYWRlcjtcbiAgICBnTW9kYWw7XG4gICAgbmFtZTtcbiAgICBlZmZlY3RvcnM7XG4gICAgY29sb3JzO1xuICAgIHZlcnRzO1xuXG4gICAgY29uc3RydWN0b3IoZ2wsIGNhbWVyYSwgc3RydWN0dXJlKSB7XG4gICAgICAgIHRoaXMuc3RydWN0dXJlID0gc3RydWN0dXJlO1xuICAgICAgICB0aGlzLnBhcnNlU3RydWN0dXJlKCk7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcblxuICAgICAgICB0aGlzLmdTaGFkZXIgPSBuZXcgUHJpbWl0aXZlU2hhZGVyKGdsLCBjYW1lcmEucHJvamVjdGlvbk1hdHJpeCk7XG4gICAgICAgIHRoaXMuZ01vZGFsID0gUHJpbWF0aXZlcy5QcmltaXRpdmUuY3JlYXRlTW9kYWwoZ2wsIHRoaXMubmFtZSwgdGhpcy52ZXJ0cywgdGhpcy5jb2xvcnMpO1xuICAgIH1cblxuICAgIHBhcnNlU3RydWN0dXJlKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLnN0cnVjdHVyZS5nZXROYW1lKCk7XG4gICAgICAgIHRoaXMuZWZmZWN0b3JzID0gW107XG5cbiAgICAgICAgdGhpcy5jb2xvcnMgPSBbXTtcbiAgICAgICAgdGhpcy52ZXJ0cyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdHJ1Y3R1cmUuZ2V0TnVtQ2hhaW5zKCk7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgYm9uZSBvZiB0aGlzLnN0cnVjdHVyZS5nZXRDaGFpbihpKS5nZXRDaGFpbigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvcnMucHVzaCguLi5ib25lLmdldENvbG91cigpLnRvQXJyYXkoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvcnMucHVzaCguLi5ib25lLmdldENvbG91cigpLnRvQXJyYXkoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0cy5wdXNoKC4uLmJvbmUuZ2V0U3RhcnRMb2NhdGlvbkFzQXJyYXkoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0cy5wdXNoKC4uLmJvbmUuZ2V0RW5kTG9jYXRpb25Bc0FycmF5KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lZmZlY3RvcnMucHVzaCh0aGlzLnN0cnVjdHVyZS5nZXRDaGFpbihpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlVG8oaW5kZXgsIHZlYykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RydWN0dXJlLmdldE51bUNoYWlucygpOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc3RydWN0dXJlLmdldENoYWluKGkpLnNldEVtYmVkZGVkVGFyZ2V0TW9kZShpbmRleCAhPT0gaSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IGkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0cnVjdHVyZS5nZXRDaGFpbihpKS51cGRhdGVFbWJlZGRlZFRhcmdldCh0aGlzLnN0cnVjdHVyZS5nZXRDaGFpbihpKS5nZXRFZmZlY3RvckxvY2F0aW9uKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RydWN0dXJlLnNvbHZlRm9yVGFyZ2V0KHZlYyk7XG4gICAgICAgIHRoaXMucGFyc2VTdHJ1Y3R1cmUoKTtcbiAgICAgICAgdGhpcy5nTW9kYWwgPSBQcmltYXRpdmVzLlByaW1pdGl2ZS5jcmVhdGVNb2RhbCh0aGlzLmdsLCB0aGlzLm5hbWUsIHRoaXMudmVydHMsIHRoaXMuY29sb3JzKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9