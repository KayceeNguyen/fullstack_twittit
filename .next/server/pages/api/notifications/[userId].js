"use strict";
(() => {
var exports = {};
exports.id = 605;
exports.ids = [605];
exports.modules = {

/***/ 8361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ prismadb)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./libs/prismadb.ts

const prisma = new client_namespaceObject.PrismaClient();
const client = globalThis.prisma || new client_namespaceObject.PrismaClient();
if (false) {}
/* harmony default export */ const prismadb = (client);


/***/ }),

/***/ 2737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8361);

async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).end();
    }
    try {
        const { userId  } = req.query;
        if (!userId || typeof userId !== "string") {
            throw new Error("Invalid ID");
        }
        const notifications = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"].notification.findMany */ .Z.notification.findMany({
            where: {
                userId
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"].user.update */ .Z.user.update({
            where: {
                id: userId
            },
            data: {
                hasNotification: false
            }
        });
        return res.status(200).json(notifications);
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2737));
module.exports = __webpack_exports__;

})();