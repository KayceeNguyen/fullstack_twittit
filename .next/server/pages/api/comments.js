"use strict";
(() => {
var exports = {};
exports.id = 265;
exports.ids = [265];
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

/***/ 1001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _libs_serverAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(438);
/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8361);


async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end();
    }
    try {
        const { currentUser  } = await (0,_libs_serverAuth__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(req);
        const { body  } = req.body;
        const { postId  } = req.query;
        if (!postId || typeof postId !== "string") {
            throw new Error("Invalid ID");
        }
        const comment = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__/* ["default"].comment.create */ .Z.comment.create({
            data: {
                body,
                userId: currentUser.id,
                postId
            }
        });
        // NOTIFICATION PART START
        try {
            const post = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post.findUnique */ .Z.post.findUnique({
                where: {
                    id: postId
                }
            });
            if (post?.userId) {
                await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__/* ["default"].notification.create */ .Z.notification.create({
                    data: {
                        body: "Someone replied on your tweet!",
                        userId: post.userId
                    }
                });
                await _libs_prismadb__WEBPACK_IMPORTED_MODULE_1__/* ["default"].user.update */ .Z.user.update({
                    where: {
                        id: post.userId
                    },
                    data: {
                        hasNotification: true
                    }
                });
            }
        } catch (error) {
            console.log(error);
        }
        // NOTIFICATION PART END
        return res.status(200).json(comment);
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
var __webpack_exports__ = (__webpack_exec__(1001));
module.exports = __webpack_exports__;

})();