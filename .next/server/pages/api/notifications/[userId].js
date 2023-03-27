"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/notifications/[userId]";
exports.ids = ["pages/api/notifications/[userId]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./libs/prismadb.ts":
/*!**************************!*\
  !*** ./libs/prismadb.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nconst client = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3ByaXNtYWRiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUM3QyxNQUFNQyxTQUFTLElBQUlELHdEQUFZQTtBQU0vQixNQUFNRSxTQUFTQyxXQUFXRixNQUFNLElBQUksSUFBSUQsd0RBQVlBO0FBQ3BELElBQUlJLElBQXFDLEVBQUVELFdBQVdGLE1BQU0sR0FBR0M7QUFFL0QsaUVBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d2l0dGl0Ly4vbGlicy9wcmlzbWFkYi50cz83ZDlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkXG59XG5cbmNvbnN0IGNsaWVudCA9IGdsb2JhbFRoaXMucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKVxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSBjbGllbnRcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImNsaWVudCIsImdsb2JhbFRoaXMiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./libs/prismadb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/notifications/[userId].ts":
/*!*********************************************!*\
  !*** ./pages/api/notifications/[userId].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/prismadb */ \"(api)/./libs/prismadb.ts\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).end();\n    }\n    try {\n        const { userId  } = req.query;\n        if (!userId || typeof userId !== \"string\") {\n            throw new Error(\"Invalid ID\");\n        }\n        const notifications = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notification.findMany({\n            where: {\n                userId\n            },\n            orderBy: {\n                createdAt: \"desc\"\n            }\n        });\n        await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.update({\n            where: {\n                id: userId\n            },\n            data: {\n                hasNotification: false\n            }\n        });\n        return res.status(200).json(notifications);\n    } catch (error) {\n        console.log(error);\n        return res.status(400).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbm90aWZpY2F0aW9ucy9bdXNlcklkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVxQztBQUV0QixlQUFlQyxRQUFRQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQy9FLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO0lBQzVCLENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0wsSUFBSU0sS0FBSztRQUU1QixJQUFJLENBQUNELFVBQVUsT0FBT0EsV0FBVyxVQUFVO1lBQ3pDLE1BQU0sSUFBSUUsTUFBTSxjQUFjO1FBQ2hDLENBQUM7UUFFRCxNQUFNQyxnQkFBZ0IsTUFBTVYsNEVBQTRCLENBQUM7WUFDdkRhLE9BQU87Z0JBQ0xOO1lBQ0Y7WUFDQU8sU0FBUztnQkFDUEMsV0FBVztZQUNiO1FBQ0Y7UUFFQSxNQUFNZixrRUFBa0IsQ0FBQztZQUN2QmEsT0FBTztnQkFDTEssSUFBSVg7WUFDTjtZQUNBWSxNQUFNO2dCQUNKQyxpQkFBaUIsS0FBSztZQUN4QjtRQUNGO1FBRUEsT0FBT2pCLElBQUlFLE1BQU0sQ0FBQyxLQUFLZ0IsSUFBSSxDQUFDWDtJQUM5QixFQUFFLE9BQU9ZLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE9BQU9uQixJQUFJRSxNQUFNLENBQUMsS0FBS0MsR0FBRztJQUM1QjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d2l0dGl0Ly4vcGFnZXMvYXBpL25vdGlmaWNhdGlvbnMvW3VzZXJJZF0udHM/MjQxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tICdAL2xpYnMvcHJpc21hZGInO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHsgdXNlcklkIH0gPSByZXEucXVlcnk7XG5cbiAgICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIElEJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm90aWZpY2F0aW9ucyA9IGF3YWl0IHByaXNtYS5ub3RpZmljYXRpb24uZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHtcbiAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogdXNlcklkXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBoYXNOb3RpZmljYXRpb246IGZhbHNlLFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKG5vdGlmaWNhdGlvbnMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmVuZCgpO1xuICB9XG59Il0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJlbmQiLCJ1c2VySWQiLCJxdWVyeSIsIkVycm9yIiwibm90aWZpY2F0aW9ucyIsIm5vdGlmaWNhdGlvbiIsImZpbmRNYW55Iiwid2hlcmUiLCJvcmRlckJ5IiwiY3JlYXRlZEF0IiwidXNlciIsInVwZGF0ZSIsImlkIiwiZGF0YSIsImhhc05vdGlmaWNhdGlvbiIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/notifications/[userId].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/notifications/[userId].ts"));
module.exports = __webpack_exports__;

})();