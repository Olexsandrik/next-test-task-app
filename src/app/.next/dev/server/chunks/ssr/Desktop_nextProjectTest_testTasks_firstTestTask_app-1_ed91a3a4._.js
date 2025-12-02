module.exports = [
"[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/utils/unils.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchData",
    ()=>fetchData,
    "returnToDayData",
    ()=>returnToDayData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/ListOfTasks/ListOfTask.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ListOfTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$utils$2f$unils$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/utils/unils.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
function ListOfTask() {
    const [elements, setElements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [priority, setPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (async ()=>{
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$utils$2f$unils$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchData"])();
            console.log(data);
            setPriority((prev)=>{
                return prev.map((p)=>{
                    const count = data.filter((task)=>task.status === p.status).length;
                    return {
                        ...p,
                        count
                    };
                });
            });
            setElements(data);
        })();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between",
        children: priority.map((el, key)=>{
            const tasksForStatus = elements.filter((task)=>task.status === el.status);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    el.status,
                    " (",
                    el.count,
                    ")",
                    tasksForStatus.map((task)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardOfTask, {}, void 0, false, {
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
}),
"[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/content/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$component$2f$ListOfTasks$2f$ListOfTask$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/ListOfTasks/ListOfTask.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$utils$2f$unils$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/utils/unils.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const Page = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl pb-3 font-bold text-black",
                children: "My Tasks"
            }, void 0, false, {
                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/content/dashboard/page.tsx",
                lineNumber: 8,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$utils$2f$unils$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["returnToDayData"])()
            }, void 0, false, {
                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/content/dashboard/page.tsx",
                lineNumber: 9,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-15",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$component$2f$ListOfTasks$2f$ListOfTask$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
const __TURBOPACK__default__export__ = Page;
}),
];

//# sourceMappingURL=Desktop_nextProjectTest_testTasks_firstTestTask_app-1_ed91a3a4._.js.map