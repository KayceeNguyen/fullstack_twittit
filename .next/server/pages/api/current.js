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
exports.id = "pages/api/current";
exports.ids = ["pages/api/current"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./libs/prismadb.ts":
/*!**************************!*\
  !*** ./libs/prismadb.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nconst client = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3ByaXNtYWRiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUM3QyxNQUFNQyxTQUFTLElBQUlELHdEQUFZQTtBQU0vQixNQUFNRSxTQUFTQyxXQUFXRixNQUFNLElBQUksSUFBSUQsd0RBQVlBO0FBQ3BELElBQUlJLElBQXFDLEVBQUVELFdBQVdGLE1BQU0sR0FBR0M7QUFFL0QsaUVBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d2l0dGl0Ly4vbGlicy9wcmlzbWFkYi50cz83ZDlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkXG59XG5cbmNvbnN0IGNsaWVudCA9IGdsb2JhbFRoaXMucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKVxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSBjbGllbnRcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImNsaWVudCIsImdsb2JhbFRoaXMiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./libs/prismadb.ts\n");

/***/ }),

/***/ "(api)/./libs/serverAuth.ts":
/*!****************************!*\
  !*** ./libs/serverAuth.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/prismadb */ \"(api)/./libs/prismadb.ts\");\n\n\nconst serverAuth = async (req)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    if (!session?.user?.email) {\n        throw new Error(\"Not signed in\");\n    }\n    const currentUser = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n        where: {\n            email: session.user.email\n        }\n    });\n    if (!currentUser) {\n        throw new Error(\"Not signed in\");\n    }\n    return {\n        currentUser\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serverAuth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3NlcnZlckF1dGgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM2QztBQUVSO0FBRXJDLE1BQU1FLGFBQWEsT0FBT0MsTUFBd0I7SUFDaEQsTUFBTUMsVUFBVSxNQUFNSiwyREFBVUEsQ0FBQztRQUFFRztJQUFJO0lBRXZDLElBQUksQ0FBQ0MsU0FBU0MsTUFBTUMsT0FBTztRQUN6QixNQUFNLElBQUlDLE1BQU0saUJBQWlCO0lBQ25DLENBQUM7SUFFRCxNQUFNQyxjQUFjLE1BQU1QLHNFQUFzQixDQUFDO1FBQy9DUyxPQUFPO1lBQ0xKLE9BQU9GLFFBQVFDLElBQUksQ0FBQ0MsS0FBSztRQUMzQjtJQUNGO0lBRUEsSUFBSSxDQUFDRSxhQUFhO1FBQ2hCLE1BQU0sSUFBSUQsTUFBTSxpQkFBaUI7SUFDbkMsQ0FBQztJQUVELE9BQU87UUFBRUM7SUFBWTtBQUN2QjtBQUVBLGlFQUFlTixVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHdpdHRpdC8uL2xpYnMvc2VydmVyQXV0aC50cz84NTkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0IH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcblxuaW1wb3J0IHByaXNtYSBmcm9tICdAL2xpYnMvcHJpc21hZGInO1xuXG5jb25zdCBzZXJ2ZXJBdXRoID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XG5cbiAgaWYgKCFzZXNzaW9uPy51c2VyPy5lbWFpbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IHNpZ25lZCBpbicpO1xuICB9IFxuXG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwsXG4gICAgfVxuICB9KTtcblxuICBpZiAoIWN1cnJlbnRVc2VyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3Qgc2lnbmVkIGluJyk7XG4gIH1cblxuICByZXR1cm4geyBjdXJyZW50VXNlciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmVyQXV0aDtcbiJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwicHJpc21hIiwic2VydmVyQXV0aCIsInJlcSIsInNlc3Npb24iLCJ1c2VyIiwiZW1haWwiLCJFcnJvciIsImN1cnJlbnRVc2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./libs/serverAuth.ts\n");

/***/ }),

/***/ "(api)/./pages/api/current.ts":
/*!******************************!*\
  !*** ./pages/api/current.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _libs_serverAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/serverAuth */ \"(api)/./libs/serverAuth.ts\");\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).end();\n    }\n    try {\n        const { currentUser  } = await (0,_libs_serverAuth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req);\n        return res.status(200).json(currentUser);\n    } catch (error) {\n        console.log(error);\n        return res.status(400).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3VycmVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUUyQztBQUU1QixlQUFlQyxRQUFRQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQy9FLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO0lBQzVCLENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxZQUFXLEVBQUUsR0FBRyxNQUFNUCw0REFBVUEsQ0FBQ0U7UUFFekMsT0FBT0MsSUFBSUUsTUFBTSxDQUFDLEtBQUtHLElBQUksQ0FBQ0Q7SUFDOUIsRUFBRSxPQUFPRSxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPTixJQUFJRSxNQUFNLENBQUMsS0FBS0MsR0FBRztJQUM1QjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d2l0dGl0Ly4vcGFnZXMvYXBpL2N1cnJlbnQudHM/ZDAxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5cbmltcG9ydCBzZXJ2ZXJBdXRoIGZyb20gJ0AvbGlicy9zZXJ2ZXJBdXRoJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSBhd2FpdCBzZXJ2ZXJBdXRoKHJlcSk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oY3VycmVudFVzZXIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmVuZCgpO1xuICB9XG59XG4iXSwibmFtZXMiOlsic2VydmVyQXV0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJlbmQiLCJjdXJyZW50VXNlciIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/current.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/current.ts"));
module.exports = __webpack_exports__;

})();