"use strict";
exports.id = 430;
exports.ids = [430];
exports.modules = {

/***/ 9873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1699);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useUser__WEBPACK_IMPORTED_MODULE_4__]);
_hooks_useUser__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Avatar = ({ userId , isLarge , hasBorder  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { data: fetchedUser  } = (0,_hooks_useUser__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(userId);
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((event)=>{
        event.stopPropagation();
        const url = `/users/${userId}`;
        router.push(url);
    }, [
        router,
        userId
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `
        ${hasBorder ? "border-4 border-black" : ""}
        ${isLarge ? "h-32" : "h-12"}
        ${isLarge ? "w-32" : "w-12"}
        rounded-full 
        hover:opacity-90 
        transition 
        cursor-pointer
        relative
      `,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            fill: true,
            style: {
                objectFit: "cover",
                borderRadius: "100%"
            },
            alt: "Avatar",
            onClick: onClick,
            src: fetchedUser?.profileImage || "/images/placeholder.png"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Button = ({ label , secondary , fullWidth , onClick , large , disabled , outline  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        disabled: disabled,
        onClick: onClick,
        className: `
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        font-semibold
        hover:opacity-80
        transition
        border-2
        ${fullWidth ? "w-full" : "w-fit"}
        ${secondary ? "bg-white" : "bg-sky-500"}
        ${secondary ? "text-black" : "text-white"}
        ${secondary ? "border-black" : "border-sky-500"}
        ${large ? "text-xl" : "text-md"}
        ${large ? "px-5" : "px-4"}
        ${large ? "py-3" : "py-2"}
        ${outline ? "bg-transparent" : ""}
        ${outline ? "border-white" : ""}
        ${outline ? "text-white" : ""}
      `,
        children: label
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 4396:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1524);
/* harmony import */ var _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1954);
/* harmony import */ var _hooks_useLike__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2573);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9873);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_5__, _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_6__, _hooks_useLike__WEBPACK_IMPORTED_MODULE_7__, _Avatar__WEBPACK_IMPORTED_MODULE_8__]);
([_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_5__, _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_6__, _hooks_useLike__WEBPACK_IMPORTED_MODULE_7__, _Avatar__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const PostItem = ({ data ={} , userId  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const loginModal = (0,_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { data: currentUser  } = (0,_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { hasLiked , toggleLike  } = (0,_hooks_useLike__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
        postId: data.id,
        userId
    });
    const goToUser = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((ev)=>{
        ev.stopPropagation();
        router.push(`/users/${data.user.id}`);
    }, [
        router,
        data.user.id
    ]);
    const goToPost = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        router.push(`/posts/${data.id}`);
    }, [
        router,
        data.id
    ]);
    const onLike = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (ev)=>{
        ev.stopPropagation();
        if (!currentUser) {
            return loginModal.onOpen();
        }
        toggleLike();
    }, [
        loginModal,
        currentUser,
        toggleLike
    ]);
    const LikeIcon = hasLiked ? react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillHeart : react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineHeart;
    const createdAt = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (!data?.createdAt) {
            return null;
        }
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.formatDistanceToNowStrict)(new Date(data.createdAt));
    }, [
        data.createdAt
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onClick: goToPost,
        className: " border-b-[1px]  border-neutral-800  p-5  cursor-pointer  hover:bg-neutral-900  transition ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-row items-start gap-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Avatar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    userId: data.user.id
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row items-center gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    onClick: goToUser,
                                    className: " text-white  font-semibold  cursor-pointer  hover:underline ",
                                    children: data.user.name
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    onClick: goToUser,
                                    className: " text-neutral-500 cursor-pointer hover:underline hidden md:block ",
                                    children: [
                                        "@",
                                        data.user.username
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-neutral-500 text-sm",
                                    children: createdAt
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-white mt-1",
                            children: data.body
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row items-center mt-3 gap-10",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " flex  flex-row  items-center  text-neutral-500  gap-2  cursor-pointer  transition  hover:text-sky-500 ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineMessage, {
                                            size: 20
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: data.comments?.length || 0
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    onClick: onLike,
                                    className: " flex  flex-row  items-center  text-neutral-500  gap-2  cursor-pointer  transition  hover:text-red-500 ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LikeIcon, {
                                            color: hasLiked ? "red" : "",
                                            size: 20
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: data.likedIds.length
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1954:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__]);
([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useCurrentUser = ()=>{
    const { data , error , isLoading , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])("/api/current", _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    return {
        data,
        error,
        isLoading,
        mutate
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCurrentUser);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2573:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
/* harmony import */ var _useCurrentUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1954);
/* harmony import */ var _useLoginModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1524);
/* harmony import */ var _usePost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4217);
/* harmony import */ var _usePosts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2402);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _useCurrentUser__WEBPACK_IMPORTED_MODULE_3__, _useLoginModal__WEBPACK_IMPORTED_MODULE_4__, _usePost__WEBPACK_IMPORTED_MODULE_5__, _usePosts__WEBPACK_IMPORTED_MODULE_6__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _useCurrentUser__WEBPACK_IMPORTED_MODULE_3__, _useLoginModal__WEBPACK_IMPORTED_MODULE_4__, _usePost__WEBPACK_IMPORTED_MODULE_5__, _usePosts__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useLike = ({ postId , userId  })=>{
    const { data: currentUser  } = (0,_useCurrentUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data: fetchedPost , mutate: mutateFetchedPost  } = (0,_usePost__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(postId);
    const { mutate: mutateFetchedPosts  } = (0,_usePosts__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(userId);
    const loginModal = (0,_useLoginModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const hasLiked = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const list = fetchedPost?.likedIds || [];
        return list.includes(currentUser?.id);
    }, [
        fetchedPost,
        currentUser
    ]);
    const toggleLike = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (!currentUser) {
            return loginModal.onOpen();
        }
        try {
            let request;
            if (hasLiked) {
                request = ()=>axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/api/like", {
                        data: {
                            postId
                        }
                    });
            } else {
                request = ()=>axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/like", {
                        postId
                    });
            }
            await request();
            mutateFetchedPost();
            mutateFetchedPosts();
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success("Success");
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error("Something went wrong");
        }
    }, [
        currentUser,
        hasLiked,
        postId,
        mutateFetchedPosts,
        mutateFetchedPost,
        loginModal
    ]);
    return {
        hasLiked,
        toggleLike
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLike);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1524:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useLoginModal = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({
        isOpen: false,
        onOpen: ()=>set({
                isOpen: true
            }),
        onClose: ()=>set({
                isOpen: false
            })
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLoginModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4217:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__]);
([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const usePost = (postId)=>{
    const { data , error , isLoading , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(postId ? `/api/posts/${postId}` : null, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    return {
        data,
        error,
        isLoading,
        mutate
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePost);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2402:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__]);
([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const usePosts = (userId)=>{
    const url = userId ? `/api/posts?userId=${userId}` : "/api/posts";
    const { data , error , isLoading , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(url, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    return {
        data,
        error,
        isLoading,
        mutate
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePosts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1699:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__]);
([swr__WEBPACK_IMPORTED_MODULE_0__, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useUser = (userId)=>{
    const { data , error , isLoading , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(userId ? `/api/users/${userId}` : null, _libs_fetcher__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    return {
        data,
        error,
        isLoading,
        mutate
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUser);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8698:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const fetcher = (url)=>axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then((res)=>res.data);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;