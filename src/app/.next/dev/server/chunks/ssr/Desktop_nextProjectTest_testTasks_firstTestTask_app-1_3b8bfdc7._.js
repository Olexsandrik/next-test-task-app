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
"[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/content/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/content/dashboard/page.tsx'\n\nExpression expected");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
];

//# sourceMappingURL=Desktop_nextProjectTest_testTasks_firstTestTask_app-1_3b8bfdc7._.js.map