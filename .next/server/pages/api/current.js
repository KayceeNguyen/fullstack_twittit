"use strict";
(() => {
var exports = {};
exports.id = 663;
exports.ids = [663];
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

/***/ 438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ libs_serverAuth)
});

;// CONCATENATED MODULE: external "next-auth/react"
const react_namespaceObject = require("next-auth/react");
// EXTERNAL MODULE: ./libs/prismadb.ts + 1 modules
var prismadb = __webpack_require__(8361);
;// CONCATENATED MODULE: ./libs/serverAuth.ts


const serverAuth = async (req)=>{
    const session = await (0,react_namespaceObject.getSession)({
        req
    });
    if (!session?.user?.email) {
        throw new Error("Not signed in");
    }
    const currentUser = await prismadb/* default.user.findUnique */.Z.user.findUnique({
        where: {
            email: session.user.email
        }
    });
    if (!currentUser) {
        throw new Error("Not signed in");
    }
    return {
        currentUser
    };
};
/* harmony default export */ const libs_serverAuth = (serverAuth);


/***/ }),

/***/ 1266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _libs_serverAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(438);

async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).end();
    }
    try {
        const { currentUser  } = await (0,_libs_serverAuth__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(req);
        return res.status(200).json(currentUser);
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1266));
module.exports = __webpack_exports__;

})();