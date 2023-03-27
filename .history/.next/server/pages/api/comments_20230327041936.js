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
exports.id = "pages/api/comments";
exports.ids = ["pages/api/comments"];
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

/***/ "(api)/./pages/api/comments.ts":
/*!*******************************!*\
  !*** ./pages/api/comments.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _libs_serverAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/serverAuth */ \"(api)/./libs/serverAuth.ts\");\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/prismadb */ \"(api)/./libs/prismadb.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).end();\n    }\n    try {\n        const { currentUser  } = await (0,_libs_serverAuth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req);\n        const { body  } = req.body;\n        const { postId  } = req.query;\n        if (!postId || typeof postId !== \"string\") {\n            throw new Error(\"Invalid ID\");\n        }\n        const comment = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].comment.create({\n            data: {\n                body,\n                userId: currentUser.id,\n                postId\n            }\n        });\n        // NOTIFICATION PART START\n        try {\n            const post = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post.findUnique({\n                where: {\n                    id: postId\n                }\n            });\n            if (post?.userId) {\n                await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].notification.create({\n                    data: {\n                        body: \"Someone replied on your tweet!\",\n                        userId: post.userId\n                    }\n                });\n                await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.update({\n                    where: {\n                        id: post.userId\n                    },\n                    data: {\n                        hasNotification: true\n                    }\n                });\n            }\n        } catch (error) {\n            console.log(error);\n        }\n        // NOTIFICATION PART END\n        return res.status(200).json(comment);\n    } catch (error) {\n        console.log(error);\n        return res.status(400).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRTJDO0FBQ047QUFFdEIsZUFBZUUsUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUMvRSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixPQUFPRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsR0FBRztJQUM1QixDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU0sRUFBRUMsWUFBVyxFQUFFLEdBQUcsTUFBTVIsNERBQVVBLENBQUNHO1FBQ3pDLE1BQU0sRUFBRU0sS0FBSSxFQUFFLEdBQUdOLElBQUlNLElBQUk7UUFDekIsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR1AsSUFBSVEsS0FBSztRQUU1QixJQUFJLENBQUNELFVBQVUsT0FBT0EsV0FBVyxVQUFVO1lBQ3pDLE1BQU0sSUFBSUUsTUFBTSxjQUFjO1FBQ2hDLENBQUM7UUFFRCxNQUFNQyxVQUFVLE1BQU1aLHFFQUFxQixDQUFDO1lBQzFDYyxNQUFNO2dCQUNKTjtnQkFDQU8sUUFBUVIsWUFBWVMsRUFBRTtnQkFDdEJQO1lBQ0Y7UUFDRjtRQUVBLDBCQUEwQjtRQUMxQixJQUFJO1lBQ0YsTUFBTVEsT0FBTyxNQUFNakIsc0VBQXNCLENBQUM7Z0JBQ3hDbUIsT0FBTztvQkFDTEgsSUFBSVA7Z0JBQ047WUFDRjtZQUVBLElBQUlRLE1BQU1GLFFBQVE7Z0JBQ2hCLE1BQU1mLDBFQUEwQixDQUFDO29CQUMvQmMsTUFBTTt3QkFDSk4sTUFBTTt3QkFDTk8sUUFBUUUsS0FBS0YsTUFBTTtvQkFDckI7Z0JBQ0Y7Z0JBRUEsTUFBTWYsa0VBQWtCLENBQUM7b0JBQ3ZCbUIsT0FBTzt3QkFDTEgsSUFBSUMsS0FBS0YsTUFBTTtvQkFDakI7b0JBQ0FELE1BQU07d0JBQ0pTLGlCQUFpQixJQUFJO29CQUN2QjtnQkFDRjtZQUNGLENBQUM7UUFDSCxFQUNBLE9BQU9DLE9BQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO1FBQ0Esd0JBQXdCO1FBRXhCLE9BQU9yQixJQUFJRSxNQUFNLENBQUMsS0FBS3NCLElBQUksQ0FBQ2Y7SUFDOUIsRUFBRSxPQUFPWSxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPckIsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUc7SUFDNUI7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHdpdHRpdC8uL3BhZ2VzL2FwaS9jb21tZW50cy50cz9iM2MwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5pbXBvcnQgc2VydmVyQXV0aCBmcm9tIFwiQC9saWJzL3NlcnZlckF1dGhcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGlicy9wcmlzbWFkYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSBhd2FpdCBzZXJ2ZXJBdXRoKHJlcSk7XG4gICAgY29uc3QgeyBib2R5IH0gPSByZXEuYm9keTtcbiAgICBjb25zdCB7IHBvc3RJZCB9ID0gcmVxLnF1ZXJ5O1xuXG4gICAgaWYgKCFwb3N0SWQgfHwgdHlwZW9mIHBvc3RJZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBJRCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbW1lbnQgPSBhd2FpdCBwcmlzbWEuY29tbWVudC5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBib2R5LFxuICAgICAgICB1c2VySWQ6IGN1cnJlbnRVc2VyLmlkLFxuICAgICAgICBwb3N0SWRcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIE5PVElGSUNBVElPTiBQQVJUIFNUQVJUXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZDogcG9zdElkLFxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHBvc3Q/LnVzZXJJZCkge1xuICAgICAgICBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmNyZWF0ZSh7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYm9keTogJ1NvbWVvbmUgcmVwbGllZCBvbiB5b3VyIHR3ZWV0IScsXG4gICAgICAgICAgICB1c2VySWQ6IHBvc3QudXNlcklkXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBpZDogcG9zdC51c2VySWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGhhc05vdGlmaWNhdGlvbjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgICAvLyBOT1RJRklDQVRJT04gUEFSVCBFTkRcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihjb21tZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5lbmQoKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJzZXJ2ZXJBdXRoIiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImVuZCIsImN1cnJlbnRVc2VyIiwiYm9keSIsInBvc3RJZCIsInF1ZXJ5IiwiRXJyb3IiLCJjb21tZW50IiwiY3JlYXRlIiwiZGF0YSIsInVzZXJJZCIsImlkIiwicG9zdCIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsIm5vdGlmaWNhdGlvbiIsInVzZXIiLCJ1cGRhdGUiLCJoYXNOb3RpZmljYXRpb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comments.ts"));
module.exports = __webpack_exports__;

})();