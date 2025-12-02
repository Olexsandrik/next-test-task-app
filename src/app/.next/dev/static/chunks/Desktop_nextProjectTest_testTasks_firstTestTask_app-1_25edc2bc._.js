(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/utils/unils.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchData",
    ()=>fetchData,
    "returnToDayData",
    ()=>returnToDayData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const returnToDayData = ()=>{
    const today = new Date();
    const dayOfWeekIndex = today.getDay();
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const dayOfWeek = days[dayOfWeekIndex];
    const date = today.toISOString().split("T")[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-green-700",
                children: dayOfWeek
            }, void 0, false, {
                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/utils/unils.tsx",
                lineNumber: 21,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            ", ",
            date
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/utils/unils.tsx",
        lineNumber: 20,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
const fetchData = async ()=>{
    const response = await fetch("https://683857ff2c55e01d184cee44.mockapi.io/api/v1/tasks");
    if (!response.ok) {
        throw new Error("Failed to fetch tasks");
    }
    console.log(response);
    return response.json();
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/ListOfTasks/ListOfTask.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ListOfTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$utils$2f$unils$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/utils/unils.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function ListOfTask() {
    _s();
    const [elements, setElements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [priority, setPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            status: "to-do",
            count: 0
        },
        {
            status: "in-progress",
            count: 0
        },
        {
            status: "review",
            count: 0
        },
        {
            status: "completed",
            count: 0
        }
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ListOfTask.useEffect": ()=>{
            ({
                "ListOfTask.useEffect": async ()=>{
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$utils$2f$unils$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])();
                    console.log(data);
                    setPriority({
                        "ListOfTask.useEffect": (prev)=>{
                            return prev.map({
                                "ListOfTask.useEffect": (p)=>{
                                    const count = data.filter({
                                        "ListOfTask.useEffect": (task)=>task.status === p.status
                                    }["ListOfTask.useEffect"]).length;
                                    return {
                                        ...p,
                                        count
                                    };
                                }
                            }["ListOfTask.useEffect"]);
                        }
                    }["ListOfTask.useEffect"]);
                    setElements(data);
                }
            })["ListOfTask.useEffect"]();
        }
    }["ListOfTask.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between",
        children: priority.map((el, key)=>{
            const tasksForStatus = elements.filter((task)=>task.status === el.status);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    el.status,
                    " (",
                    el.count,
                    ")",
                    tasksForStatus.map((task)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardOfTask, {}, void 0, false, {
                            fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/ListOfTasks/ListOfTask.tsx",
                            lineNumber: 68,
                            columnNumber: 15
                        }, this);
                    })
                ]
            }, key, true, {
                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/ListOfTasks/ListOfTask.tsx",
                lineNumber: 65,
                columnNumber: 6
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/ListOfTasks/ListOfTask.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, this);
}
_s(ListOfTask, "pOyCt32FX3LoamP3ynJQKNga9/A=");
_c = ListOfTask;
var _c;
__turbopack_context__.k.register(_c, "ListOfTask");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/content/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$component$2f$ListOfTasks$2f$ListOfTask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/ListOfTasks/ListOfTask.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$utils$2f$unils$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/utils/unils.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const Page = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl pb-3 font-bold text-black",
                children: "My Tasks"
            }, void 0, false, {
                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/content/dashboard/page.tsx",
                lineNumber: 8,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$utils$2f$unils$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["returnToDayData"])()
            }, void 0, false, {
                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/content/dashboard/page.tsx",
                lineNumber: 9,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-15",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$component$2f$ListOfTasks$2f$ListOfTask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/content/dashboard/page.tsx",
                    lineNumber: 11,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/content/dashboard/page.tsx",
                lineNumber: 10,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/content/dashboard/page.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Page;
const __TURBOPACK__default__export__ = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_nextProjectTest_testTasks_firstTestTask_app-1_25edc2bc._.js.map