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
exports.id = "pages/api/follow";
exports.ids = ["pages/api/follow"];
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

/***/ "(api)/./pages/api/follow.ts":
/*!*****************************!*\
  !*** ./pages/api/follow.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/prismadb */ \"(api)/./libs/prismadb.ts\");\n/* harmony import */ var _libs_serverAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/serverAuth */ \"(api)/./libs/serverAuth.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\" && req.method !== \"DELETE\") {\n        return res.status(405).end();\n    }\n    try {\n        const { userId  } = req.body;\n        const { currentUser  } = await (0,_libs_serverAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req);\n        if (!userId || typeof userId !== \"string\") {\n            throw new Error(\"Invalid ID\");\n        }\n        const user = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                id: userId\n            }\n        });\n        if (!user) {\n            throw new Error(\"Invalid ID\");\n        }\n        let updatedFollowingIds = [\n            ...user.followingIds || []\n        ];\n        if (req.method === \"POST\") {\n            updatedFollowingIds.push(userId);\n            // NOTIFICATION PART START\n            try {\n                await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notification.create({\n                    data: {\n                        body: \"Someone followed you!\",\n                        userId\n                    }\n                });\n                await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.update({\n                    where: {\n                        id: userId\n                    },\n                    data: {\n                        hasNotification: true\n                    }\n                });\n            } catch (error) {\n                console.log(error);\n            }\n        // NOTIFICATION PART END\n        }\n        if (req.method === \"DELETE\") {\n            updatedFollowingIds = updatedFollowingIds.filter((followingId)=>followingId !== userId);\n        }\n        const updatedUser = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.update({\n            where: {\n                id: currentUser.id\n            },\n            data: {\n                followingIds: updatedFollowingIds\n            }\n        });\n        return res.status(200).json(updatedUser);\n    } catch (error) {\n        console.log(error);\n        return res.status(400).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZm9sbG93LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVxQztBQUNNO0FBRTVCLGVBQWVFLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDL0UsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFVBQVVGLElBQUlFLE1BQU0sS0FBSyxVQUFVO1FBQ3BELE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxHQUFHO0lBQzVCLENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0wsSUFBSU0sSUFBSTtRQUUzQixNQUFNLEVBQUVDLFlBQVcsRUFBRSxHQUFHLE1BQU1ULDREQUFVQSxDQUFDRTtRQUV6QyxJQUFJLENBQUNLLFVBQVUsT0FBT0EsV0FBVyxVQUFVO1lBQ3pDLE1BQU0sSUFBSUcsTUFBTSxjQUFjO1FBQ2hDLENBQUM7UUFFRCxNQUFNQyxPQUFPLE1BQU1aLHNFQUFzQixDQUFDO1lBQ3hDYyxPQUFPO2dCQUNMQyxJQUFJUDtZQUNOO1FBQ0Y7UUFFQSxJQUFJLENBQUNJLE1BQU07WUFDVCxNQUFNLElBQUlELE1BQU0sY0FBYztRQUNoQyxDQUFDO1FBRUQsSUFBSUssc0JBQXNCO2VBQUtKLEtBQUtLLFlBQVksSUFBSSxFQUFFO1NBQUU7UUFFeEQsSUFBSWQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7WUFDekJXLG9CQUFvQkUsSUFBSSxDQUFDVjtZQUV6QiwwQkFBMEI7WUFDMUIsSUFBSTtnQkFDRixNQUFNUiwwRUFBMEIsQ0FBQztvQkFDL0JxQixNQUFNO3dCQUNKWixNQUFNO3dCQUNORDtvQkFDRjtnQkFDRjtnQkFFQSxNQUFNUixrRUFBa0IsQ0FBQztvQkFDdkJjLE9BQU87d0JBQ0xDLElBQUlQO29CQUNOO29CQUNBYSxNQUFNO3dCQUNKRSxpQkFBaUIsSUFBSTtvQkFDdkI7Z0JBQ0Y7WUFDRixFQUFFLE9BQU9DLE9BQU87Z0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDZDtRQUNBLHdCQUF3QjtRQUUxQixDQUFDO1FBRUQsSUFBSXJCLElBQUlFLE1BQU0sS0FBSyxVQUFVO1lBQzNCVyxzQkFBc0JBLG9CQUFvQlcsTUFBTSxDQUFDLENBQUNDLGNBQWdCQSxnQkFBZ0JwQjtRQUNwRixDQUFDO1FBRUQsTUFBTXFCLGNBQWMsTUFBTTdCLGtFQUFrQixDQUFDO1lBQzNDYyxPQUFPO2dCQUNMQyxJQUFJTCxZQUFZSyxFQUFFO1lBQ3BCO1lBQ0FNLE1BQU07Z0JBQ0pKLGNBQWNEO1lBQ2hCO1FBQ0Y7UUFFQSxPQUFPWixJQUFJRSxNQUFNLENBQUMsS0FBS3dCLElBQUksQ0FBQ0Q7SUFDOUIsRUFBRSxPQUFPTCxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPcEIsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUc7SUFDNUI7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHdpdHRpdC8uL3BhZ2VzL2FwaS9mb2xsb3cudHM/YmJkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tICdAL2xpYnMvcHJpc21hZGInO1xuaW1wb3J0IHNlcnZlckF1dGggZnJvbSBcIkAvbGlicy9zZXJ2ZXJBdXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJyAmJiByZXEubWV0aG9kICE9PSAnREVMRVRFJykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHsgdXNlcklkIH0gPSByZXEuYm9keTtcblxuICAgIGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IGF3YWl0IHNlcnZlckF1dGgocmVxKTtcblxuICAgIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSUQnKTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogdXNlcklkXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBJRCcpO1xuICAgIH1cblxuICAgIGxldCB1cGRhdGVkRm9sbG93aW5nSWRzID0gWy4uLih1c2VyLmZvbGxvd2luZ0lkcyB8fCBbXSldO1xuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgdXBkYXRlZEZvbGxvd2luZ0lkcy5wdXNoKHVzZXJJZCk7XG5cbiAgICAgIC8vIE5PVElGSUNBVElPTiBQQVJUIFNUQVJUXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmNyZWF0ZSh7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYm9keTogJ1NvbWVvbmUgZm9sbG93ZWQgeW91IScsXG4gICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgaWQ6IHVzZXJJZCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGhhc05vdGlmaWNhdGlvbjogdHJ1ZSxcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgICAgLy8gTk9USUZJQ0FUSU9OIFBBUlQgRU5EXG4gICAgICBcbiAgICB9XG5cbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0RFTEVURScpIHtcbiAgICAgIHVwZGF0ZWRGb2xsb3dpbmdJZHMgPSB1cGRhdGVkRm9sbG93aW5nSWRzLmZpbHRlcigoZm9sbG93aW5nSWQpID0+IGZvbGxvd2luZ0lkICE9PSB1c2VySWQpO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZWRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBjdXJyZW50VXNlci5pZFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZm9sbG93aW5nSWRzOiB1cGRhdGVkRm9sbG93aW5nSWRzXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXBkYXRlZFVzZXIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmVuZCgpO1xuICB9XG59Il0sIm5hbWVzIjpbInByaXNtYSIsInNlcnZlckF1dGgiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIiwidXNlcklkIiwiYm9keSIsImN1cnJlbnRVc2VyIiwiRXJyb3IiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJ1cGRhdGVkRm9sbG93aW5nSWRzIiwiZm9sbG93aW5nSWRzIiwicHVzaCIsIm5vdGlmaWNhdGlvbiIsImNyZWF0ZSIsImRhdGEiLCJ1cGRhdGUiLCJoYXNOb3RpZmljYXRpb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJmb2xsb3dpbmdJZCIsInVwZGF0ZWRVc2VyIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/follow.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/follow.ts"));
module.exports = __webpack_exports__;

})();