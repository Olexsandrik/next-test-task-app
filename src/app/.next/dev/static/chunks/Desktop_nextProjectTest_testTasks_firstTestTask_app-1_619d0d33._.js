(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/InputForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const InputForm = ({ register, type, classNameProps })=>{
    const validationForPassword = type === "password" ? {
        required: "Your password is between 4 and 12 characters",
        minLength: {
            value: 4,
            message: "Your password is between 4 and 12 characters"
        },
        maxLength: {
            value: 12,
            message: "Your password is between 4 and 12 characters"
        }
    } : {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type === "name" ? "text" : type,
        ...register(type, validationForPassword),
        placeholder: type === "password" ? "Enter password" : type.charAt(0).toUpperCase() + type.slice(1),
        className: classNameProps ? classNameProps : "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:border-dashed transition-all duration-200 text-black bg-white"
    }, void 0, false, {
        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/InputForm.tsx",
        lineNumber: 32,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = InputForm;
const __TURBOPACK__default__export__ = InputForm;
var _c;
__turbopack_context__.k.register(_c, "InputForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$component$2f$InputForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/InputForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$app$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/providers/AuthProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const Page = ()=>{
    _s();
    const { register, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])();
    const { setUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$app$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const onSubmit = (data)=>{
        if (!data) return;
        const checkStorage = localStorage.getItem("users");
        if (!checkStorage) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("No users found");
        }
        if (checkStorage) {
            const users = JSON.parse(checkStorage);
            const user = users.find((user)=>user.email === data.email);
            if (user) {
                setUser(user);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"])("/content/dashboard");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("usern not find");
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit(onSubmit),
                className: "bg-white rounded-lg shadow-sm border border-gray-200 p-8 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$component$2f$InputForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                register: register,
                                type: "email"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/login/page.tsx",
                                lineNumber: 46,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$component$2f$InputForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                register: register,
                                type: "password"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/login/page.tsx",
                                lineNumber: 47,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/login/page.tsx",
                        lineNumber: 45,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "w-full bg-black text-white py-3 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
                        children: "Login"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/login/page.tsx",
                        lineNumber: 50,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/register",
                        className: "text-center text-sm text-gray-500",
                        children: "Don't have an account? Register"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/login/page.tsx",
                        lineNumber: 56,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/login/page.tsx",
                lineNumber: 41,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/login/page.tsx",
            lineNumber: 40,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/login/page.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Page, "MOrVLn2kGxKy9zrealN4IwRgLXk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$app$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Page;
const __TURBOPACK__default__export__ = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_nextProjectTest_testTasks_firstTestTask_app-1_619d0d33._.js.map