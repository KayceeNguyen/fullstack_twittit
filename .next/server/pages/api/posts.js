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
exports.id = "pages/api/posts";
exports.ids = ["pages/api/posts"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/prismadb */ \"(api)/./libs/prismadb.ts\");\n\n\nconst serverAuth = async (req)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    console.log(\"session:\", session);\n    if (!session?.user?.email) {\n        throw new Error(\"Not signed in\");\n    }\n    const currentUser = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n        where: {\n            email: session.user.email\n        }\n    });\n    if (!currentUser) {\n        throw new Error(\"Not signed in\");\n    }\n    return {\n        currentUser\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serverAuth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3NlcnZlckF1dGgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM2QztBQUVSO0FBRXJDLE1BQU1FLGFBQWEsT0FBT0MsTUFBd0I7SUFDaEQsTUFBTUMsVUFBVSxNQUFNSiwyREFBVUEsQ0FBQztRQUFFRztJQUFJO0lBRXZDRSxRQUFRQyxHQUFHLENBQUMsWUFBWUY7SUFFeEIsSUFBSSxDQUFDQSxTQUFTRyxNQUFNQyxPQUFPO1FBQ3pCLE1BQU0sSUFBSUMsTUFBTSxpQkFBaUI7SUFDbkMsQ0FBQztJQUVELE1BQU1DLGNBQWMsTUFBTVQsc0VBQXNCLENBQUM7UUFDL0NXLE9BQU87WUFDTEosT0FBT0osUUFBUUcsSUFBSSxDQUFDQyxLQUFLO1FBQzNCO0lBQ0Y7SUFFQSxJQUFJLENBQUNFLGFBQWE7UUFDaEIsTUFBTSxJQUFJRCxNQUFNLGlCQUFpQjtJQUNuQyxDQUFDO0lBRUQsT0FBTztRQUFFQztJQUFZO0FBQ3ZCO0FBRUEsaUVBQWVSLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d2l0dGl0Ly4vbGlicy9zZXJ2ZXJBdXRoLnRzPzg1OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuXG5pbXBvcnQgcHJpc21hIGZyb20gJ0AvbGlicy9wcmlzbWFkYic7XG5cbmNvbnN0IHNlcnZlckF1dGggPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcblxuICBjb25zb2xlLmxvZygnc2Vzc2lvbjonLCBzZXNzaW9uKTtcblxuICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3Qgc2lnbmVkIGluJyk7XG4gIH0gXG5cbiAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCxcbiAgICB9XG4gIH0pO1xuXG4gIGlmICghY3VycmVudFVzZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBzaWduZWQgaW4nKTtcbiAgfVxuXG4gIHJldHVybiB7IGN1cnJlbnRVc2VyIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXJ2ZXJBdXRoO1xuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJwcmlzbWEiLCJzZXJ2ZXJBdXRoIiwicmVxIiwic2Vzc2lvbiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiZW1haWwiLCJFcnJvciIsImN1cnJlbnRVc2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./libs/serverAuth.ts\n");

/***/ }),

/***/ "(api)/./pages/api/posts/index.ts":
/*!**********************************!*\
  !*** ./pages/api/posts/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _libs_serverAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/serverAuth */ \"(api)/./libs/serverAuth.ts\");\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/prismadb */ \"(api)/./libs/prismadb.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\" && req.method !== \"GET\") {\n        return res.status(405).end();\n    }\n    try {\n        if (req.method === \"POST\") {\n            const { currentUser  } = await (0,_libs_serverAuth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req);\n            const { body  } = req.body;\n            const post = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post.create({\n                data: {\n                    body,\n                    userId: currentUser.id\n                }\n            });\n            return res.status(200).json(post);\n        }\n        if (req.method === \"GET\") {\n            const { userId  } = req.query;\n            console.log({\n                userId\n            });\n            let posts;\n            if (userId && typeof userId === \"string\") {\n                posts = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post.findMany({\n                    where: {\n                        userId\n                    },\n                    include: {\n                        user: true,\n                        comments: true\n                    },\n                    orderBy: {\n                        createdAt: \"desc\"\n                    }\n                });\n            } else {\n                posts = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post.findMany({\n                    include: {\n                        user: true,\n                        comments: true\n                    },\n                    orderBy: {\n                        createdAt: \"desc\"\n                    }\n                });\n            }\n            return res.status(200).json(posts);\n        }\n    } catch (error) {\n        console.log(error);\n        return res.status(400).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRTJDO0FBQ047QUFFdEIsZUFBZUUsUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUMvRSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssVUFBVUYsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDakQsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUc7SUFDNUIsQ0FBQztJQUVELElBQUk7UUFFRixJQUFJSixJQUFJRSxNQUFNLEtBQUssUUFBUTtZQUN6QixNQUFNLEVBQUVHLFlBQVcsRUFBRSxHQUFHLE1BQU1SLDREQUFVQSxDQUFDRztZQUN6QyxNQUFNLEVBQUVNLEtBQUksRUFBRSxHQUFHTixJQUFJTSxJQUFJO1lBRXpCLE1BQU1DLE9BQU8sTUFBTVQsa0VBQWtCLENBQUM7Z0JBQ3BDVyxNQUFNO29CQUNKSDtvQkFDQUksUUFBUUwsWUFBWU0sRUFBRTtnQkFDeEI7WUFDRjtZQUVBLE9BQU9WLElBQUlFLE1BQU0sQ0FBQyxLQUFLUyxJQUFJLENBQUNMO1FBQzlCLENBQUM7UUFFRCxJQUFJUCxJQUFJRSxNQUFNLEtBQUssT0FBTztZQUN4QixNQUFNLEVBQUVRLE9BQU0sRUFBRSxHQUFHVixJQUFJYSxLQUFLO1lBRTVCQyxRQUFRQyxHQUFHLENBQUM7Z0JBQUVMO1lBQU87WUFFckIsSUFBSU07WUFFSixJQUFJTixVQUFVLE9BQU9BLFdBQVcsVUFBVTtnQkFDeENNLFFBQVEsTUFBTWxCLG9FQUFvQixDQUFDO29CQUNqQ29CLE9BQU87d0JBQ0xSO29CQUNGO29CQUNBUyxTQUFTO3dCQUNQQyxNQUFNLElBQUk7d0JBQ1ZDLFVBQVUsSUFBSTtvQkFDaEI7b0JBQ0FDLFNBQVM7d0JBQ1BDLFdBQVc7b0JBQ2I7Z0JBQ0Y7WUFDRixPQUFPO2dCQUNMUCxRQUFRLE1BQU1sQixvRUFBb0IsQ0FBQztvQkFDakNxQixTQUFTO3dCQUNQQyxNQUFNLElBQUk7d0JBQ1ZDLFVBQVUsSUFBSTtvQkFDaEI7b0JBQ0FDLFNBQVM7d0JBQ1BDLFdBQVc7b0JBQ2I7Z0JBQ0Y7WUFDRixDQUFDO1lBRUQsT0FBT3RCLElBQUlFLE1BQU0sQ0FBQyxLQUFLUyxJQUFJLENBQUNJO1FBQzlCLENBQUM7SUFDSCxFQUFFLE9BQU9RLE9BQU87UUFDZFYsUUFBUUMsR0FBRyxDQUFDUztRQUNaLE9BQU92QixJQUFJRSxNQUFNLENBQUMsS0FBS0MsR0FBRztJQUM1QjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d2l0dGl0Ly4vcGFnZXMvYXBpL3Bvc3RzL2luZGV4LnRzP2QyNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCBzZXJ2ZXJBdXRoIGZyb20gXCJAL2xpYnMvc2VydmVyQXV0aFwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWJzL3ByaXNtYWRiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJyAmJiByZXEubWV0aG9kICE9PSAnR0VUJykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG4gIH1cblxuICB0cnkge1xuICAgIFxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IGF3YWl0IHNlcnZlckF1dGgocmVxKTtcbiAgICAgIGNvbnN0IHsgYm9keSB9ID0gcmVxLmJvZHk7XG5cbiAgICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBwcmlzbWEucG9zdC5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICB1c2VySWQ6IGN1cnJlbnRVc2VyLmlkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocG9zdCk7XG4gICAgfVxuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICBjb25zdCB7IHVzZXJJZCB9ID0gcmVxLnF1ZXJ5O1xuXG4gICAgICBjb25zb2xlLmxvZyh7IHVzZXJJZCB9KVxuXG4gICAgICBsZXQgcG9zdHM7XG5cbiAgICAgIGlmICh1c2VySWQgJiYgdHlwZW9mIHVzZXJJZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcG9zdHMgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kTWFueSh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIHVzZXJJZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgdXNlcjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbW1lbnRzOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcmRlckJ5OiB7XG4gICAgICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zdHMgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kTWFueSh7XG4gICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgdXNlcjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbW1lbnRzOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcmRlckJ5OiB7XG4gICAgICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihwb3N0cyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmVuZCgpO1xuICB9XG59Il0sIm5hbWVzIjpbInNlcnZlckF1dGgiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIiwiY3VycmVudFVzZXIiLCJib2R5IiwicG9zdCIsImNyZWF0ZSIsImRhdGEiLCJ1c2VySWQiLCJpZCIsImpzb24iLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJwb3N0cyIsImZpbmRNYW55Iiwid2hlcmUiLCJpbmNsdWRlIiwidXNlciIsImNvbW1lbnRzIiwib3JkZXJCeSIsImNyZWF0ZWRBdCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/index.ts"));
module.exports = __webpack_exports__;

})();