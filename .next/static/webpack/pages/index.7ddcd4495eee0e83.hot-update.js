"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Form.tsx":
/*!*****************************!*\
  !*** ./components/Form.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useLoginModal */ \"./hooks/useLoginModal.ts\");\n/* harmony import */ var _hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useRegisterModal */ \"./hooks/useRegisterModal.ts\");\n/* harmony import */ var _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useCurrentUser */ \"./hooks/useCurrentUser.ts\");\n/* harmony import */ var _hooks_usePosts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/usePosts */ \"./hooks/usePosts.ts\");\n/* harmony import */ var _hooks_usePost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/usePost */ \"./hooks/usePost.ts\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Avatar */ \"./components/Avatar.tsx\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Button */ \"./components/Button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Form = (param)=>{\n    let { placeholder , isComment , postId  } = param;\n    _s();\n    const registerModal = (0,_hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const loginModal = (0,_hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const { data: currentUser  } = (0,_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const { mutate: mutatePosts  } = (0,_hooks_usePosts__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const { mutate: mutatePost  } = (0,_hooks_usePost__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(postId);\n    const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{\n        try {\n            setIsLoading(true);\n            const url = isComment ? \"/api/comments?postId=\".concat(postId) : \"/api/posts\";\n            await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(url, {\n                body\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"Twitt created\");\n            setBody(\"\");\n            mutatePosts();\n            mutatePost();\n        } catch (error) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Something went wrong\");\n        } finally{\n            setIsLoading(false);\n        }\n    }, [\n        body,\n        mutatePosts,\n        isComment,\n        postId,\n        mutatePost\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-b-[1px] border-neutral-800 px-5 py-2\",\n        children: currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Avatar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        userId: currentUser === null || currentUser === void 0 ? void 0 : currentUser.id\n                    }, void 0, false, {\n                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/FullStack/TWITTER CLONE/fullstack_twittit/components/Form.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/FullStack/TWITTER CLONE/fullstack_twittit/components/Form.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            disabled: isLoading,\n                            onChange: (event)=>setBody(event.target.value),\n                            value: body,\n                            className: \" disabled:opacity-80 peer resize-none  mt-3  w-full  bg-black  ring-0  outline-none  text-[20px]  placeholder-neutral-500  text-white \",\n                            placeholder: placeholder\n                        }, void 0, false, {\n                            fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/FullStack/TWITTER CLONE/fullstack_twittit/components/Form.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                            className: \" opacity-0  peer-focus:opacity-100  h-[1px]  w-full  border-neutral-800  transition\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/FullStack/TWITTER CLONE/fullstack_twittit/components/Form.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-4 flex flex-row justify-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                disabled: isLoading || !body,\n                                onClick: onSubmit,\n                                label: \"Twitt\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/FullStack/TWITTER CLONE/fullstack_twittit/components/Form.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/FullStack/TWITTER CLONE/fullstack_twittit/components/Form.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/FullStack/TWITTER CLONE/fullstack_twittit/components/Form.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/FullStack/TWITTER CLONE/fullstack_twittit/components/Form.tsx\",\n            lineNumber: 53,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"py-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-white text-2xl text-center mb-4 font-bold\",\n                    children: \"Welcome to Twitter\"\n                }, void 0, false, {\n                    fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/FullStack/TWITTER CLONE/fullstack_twittit/components/Form.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            label: \"Login\",\n                            onClick: loginModal.onOpen\n                        }, void 0, false, {\n                            fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/FullStack/TWITTER CLONE/fullstack_twittit/components/Form.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            label: \"Register\",\n                            onClick: registerModal.onOpen,\n                            secondary: true\n                        }, void 0, false, {\n                            fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/FullStack/TWITTER CLONE/fullstack_twittit/components/Form.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/FullStack/TWITTER CLONE/fullstack_twittit/components/Form.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/FullStack/TWITTER CLONE/fullstack_twittit/components/Form.tsx\",\n            lineNumber: 92,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/FullStack/TWITTER CLONE/fullstack_twittit/components/Form.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Form, \"PovN7CZZSZbiWWhecu/ZjUatSYk=\", false, function() {\n    return [\n        _hooks_useRegisterModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _hooks_useLoginModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _hooks_usePosts__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _hooks_usePost__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFDTjtBQUVVO0FBQ007QUFDSjtBQUNaO0FBQ0Y7QUFFUjtBQUNBO0FBUTlCLE1BQU1XLE9BQTRCLFNBQXdDO1FBQXZDLEVBQUVDLFlBQVcsRUFBRUMsVUFBUyxFQUFFQyxPQUFNLEVBQUU7O0lBQ25FLE1BQU1DLGdCQUFnQlYsbUVBQWdCQTtJQUN0QyxNQUFNVyxhQUFhWixnRUFBYUE7SUFFaEMsTUFBTSxFQUFFYSxNQUFNQyxZQUFXLEVBQUUsR0FBR1osaUVBQWNBO0lBQzVDLE1BQU0sRUFBRWEsUUFBUUMsWUFBVyxFQUFFLEdBQUdiLDJEQUFRQTtJQUN4QyxNQUFNLEVBQUVZLFFBQVFFLFdBQVUsRUFBRSxHQUFHYiwwREFBT0EsQ0FBQ007SUFFdkMsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNzQixXQUFXQyxhQUFhLEdBQUd2QiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWhELE1BQU13QixXQUFXekIsa0RBQVdBLENBQUMsVUFBWTtRQUN2QyxJQUFJO1lBQ0Z3QixhQUFhLElBQUk7WUFFakIsTUFBTUUsTUFBTWQsWUFBWSx3QkFBK0IsT0FBUEMsVUFBVyxZQUFZO1lBRXZFLE1BQU1kLG1EQUFVLENBQUMyQixLQUFLO2dCQUFFTDtZQUFLO1lBRTdCbkIsMERBQWEsQ0FBQztZQUNkb0IsUUFBUTtZQUNSSDtZQUNBQztRQUNGLEVBQUUsT0FBT1MsT0FBTztZQUNkM0Isd0RBQVcsQ0FBQztRQUNkLFNBQVU7WUFDUnNCLGFBQWEsS0FBSztRQUNwQjtJQUNGLEdBQUc7UUFBQ0g7UUFBTUY7UUFBYVA7UUFBV0M7UUFBUU87S0FBVztJQUVyRCxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBVTtrQkFDWmQsNEJBQ0MsOERBQUNhO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDs4QkFDQyw0RUFBQ3RCLCtDQUFNQTt3QkFBQ3dCLFFBQVFmLHdCQUFBQSx5QkFBQUEsS0FBQUEsSUFBQUEsWUFBYWdCLEVBQUU7Ozs7Ozs7Ozs7OzhCQUVqQyw4REFBQ0g7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRzs0QkFDQ0MsVUFBVVo7NEJBQ1ZhLFVBQVUsQ0FBQ0MsUUFBVWYsUUFBUWUsTUFBTUMsTUFBTSxDQUFDQyxLQUFLOzRCQUMvQ0EsT0FBT2xCOzRCQUNQVSxXQUFVOzRCQWFWcEIsYUFBYUE7Ozs7OztzQ0FFZiw4REFBQzZCOzRCQUNDVCxXQUFVOzs7Ozs7c0NBUVosOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDdEIsK0NBQU1BO2dDQUFDMEIsVUFBVVosYUFBYSxDQUFDRjtnQ0FBTW9CLFNBQVNoQjtnQ0FBVWlCLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS3JFLDhEQUFDWjtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ1k7b0JBQUdaLFdBQVU7OEJBQWlEOzs7Ozs7OEJBQy9ELDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUN0QiwrQ0FBTUE7NEJBQUNpQyxPQUFNOzRCQUFRRCxTQUFTMUIsV0FBVzZCLE1BQU07Ozs7OztzQ0FDaEQsOERBQUNuQywrQ0FBTUE7NEJBQUNpQyxPQUFNOzRCQUFXRCxTQUFTM0IsY0FBYzhCLE1BQU07NEJBQUVDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUd0RTs7Ozs7O0FBR1A7R0FsRk1uQzs7UUFDa0JOLCtEQUFnQkE7UUFDbkJELDREQUFhQTtRQUVGRSw2REFBY0E7UUFDWkMsdURBQVFBO1FBQ1RDLHNEQUFPQTs7O0tBTmxDRztBQW9GTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm0udHN4P2VlZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcblxuaW1wb3J0IHVzZUxvZ2luTW9kYWwgZnJvbSAnQC9ob29rcy91c2VMb2dpbk1vZGFsJztcbmltcG9ydCB1c2VSZWdpc3Rlck1vZGFsIGZyb20gJ0AvaG9va3MvdXNlUmVnaXN0ZXJNb2RhbCc7XG5pbXBvcnQgdXNlQ3VycmVudFVzZXIgZnJvbSAnQC9ob29rcy91c2VDdXJyZW50VXNlcic7XG5pbXBvcnQgdXNlUG9zdHMgZnJvbSAnQC9ob29rcy91c2VQb3N0cyc7XG5pbXBvcnQgdXNlUG9zdCBmcm9tICdAL2hvb2tzL3VzZVBvc3QnO1xuXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4vQXZhdGFyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuXG5pbnRlcmZhY2UgRm9ybVByb3BzIHtcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgaXNDb21tZW50PzogYm9vbGVhbjtcbiAgcG9zdElkPzogc3RyaW5nO1xufVxuXG5jb25zdCBGb3JtOiBSZWFjdC5GQzxGb3JtUHJvcHM+ID0gKHsgcGxhY2Vob2xkZXIsIGlzQ29tbWVudCwgcG9zdElkIH0pID0+IHtcbiAgY29uc3QgcmVnaXN0ZXJNb2RhbCA9IHVzZVJlZ2lzdGVyTW9kYWwoKTtcbiAgY29uc3QgbG9naW5Nb2RhbCA9IHVzZUxvZ2luTW9kYWwoKTtcblxuICBjb25zdCB7IGRhdGE6IGN1cnJlbnRVc2VyIH0gPSB1c2VDdXJyZW50VXNlcigpO1xuICBjb25zdCB7IG11dGF0ZTogbXV0YXRlUG9zdHMgfSA9IHVzZVBvc3RzKCk7XG4gIGNvbnN0IHsgbXV0YXRlOiBtdXRhdGVQb3N0IH0gPSB1c2VQb3N0KHBvc3RJZCBhcyBzdHJpbmcpO1xuXG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgICBjb25zdCB1cmwgPSBpc0NvbW1lbnQgPyBgL2FwaS9jb21tZW50cz9wb3N0SWQ9JHtwb3N0SWR9YCA6ICcvYXBpL3Bvc3RzJztcblxuICAgICAgYXdhaXQgYXhpb3MucG9zdCh1cmwsIHsgYm9keSB9KTtcblxuICAgICAgdG9hc3Quc3VjY2VzcygnVHdpdHQgY3JlYXRlZCcpO1xuICAgICAgc2V0Qm9keSgnJyk7XG4gICAgICBtdXRhdGVQb3N0cygpO1xuICAgICAgbXV0YXRlUG9zdCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0b2FzdC5lcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtib2R5LCBtdXRhdGVQb3N0cywgaXNDb21tZW50LCBwb3N0SWQsIG11dGF0ZVBvc3RdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWItWzFweF0gYm9yZGVyLW5ldXRyYWwtODAwIHB4LTUgcHktMlwiPlxuICAgICAge2N1cnJlbnRVc2VyID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLTRcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEF2YXRhciB1c2VySWQ9e2N1cnJlbnRVc2VyPy5pZH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEJvZHkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgdmFsdWU9e2JvZHl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkOm9wYWNpdHktODBcbiAgICAgICAgICAgICAgICBwZWVyXG4gICAgICAgICAgICAgICAgcmVzaXplLW5vbmUgXG4gICAgICAgICAgICAgICAgbXQtMyBcbiAgICAgICAgICAgICAgICB3LWZ1bGwgXG4gICAgICAgICAgICAgICAgYmctYmxhY2sgXG4gICAgICAgICAgICAgICAgcmluZy0wIFxuICAgICAgICAgICAgICAgIG91dGxpbmUtbm9uZSBcbiAgICAgICAgICAgICAgICB0ZXh0LVsyMHB4XSBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci1uZXV0cmFsLTUwMCBcbiAgICAgICAgICAgICAgICB0ZXh0LXdoaXRlXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0+XG4gICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgPGhyIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcbiAgICAgICAgICAgICAgICBvcGFjaXR5LTAgXG4gICAgICAgICAgICAgICAgcGVlci1mb2N1czpvcGFjaXR5LTEwMCBcbiAgICAgICAgICAgICAgICBoLVsxcHhdIFxuICAgICAgICAgICAgICAgIHctZnVsbCBcbiAgICAgICAgICAgICAgICBib3JkZXItbmV1dHJhbC04MDAgXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGZsZXggZmxleC1yb3cganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17aXNMb2FkaW5nIHx8ICFib2R5fSBvbkNsaWNrPXtvblN1Ym1pdH0gbGFiZWw9XCJUd2l0dFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LThcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bCB0ZXh0LWNlbnRlciBtYi00IGZvbnQtYm9sZFwiPldlbGNvbWUgdG8gVHdpdHRlcjwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIkxvZ2luXCIgb25DbGljaz17bG9naW5Nb2RhbC5vbk9wZW59IC8+XG4gICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiUmVnaXN0ZXJcIiBvbkNsaWNrPXtyZWdpc3Rlck1vZGFsLm9uT3Blbn0gc2Vjb25kYXJ5IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidG9hc3QiLCJ1c2VMb2dpbk1vZGFsIiwidXNlUmVnaXN0ZXJNb2RhbCIsInVzZUN1cnJlbnRVc2VyIiwidXNlUG9zdHMiLCJ1c2VQb3N0IiwiQXZhdGFyIiwiQnV0dG9uIiwiRm9ybSIsInBsYWNlaG9sZGVyIiwiaXNDb21tZW50IiwicG9zdElkIiwicmVnaXN0ZXJNb2RhbCIsImxvZ2luTW9kYWwiLCJkYXRhIiwiY3VycmVudFVzZXIiLCJtdXRhdGUiLCJtdXRhdGVQb3N0cyIsIm11dGF0ZVBvc3QiLCJib2R5Iiwic2V0Qm9keSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm9uU3VibWl0IiwidXJsIiwicG9zdCIsInN1Y2Nlc3MiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInVzZXJJZCIsImlkIiwidGV4dGFyZWEiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhyIiwib25DbGljayIsImxhYmVsIiwiaDEiLCJvbk9wZW4iLCJzZWNvbmRhcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form.tsx\n"));

/***/ })

});