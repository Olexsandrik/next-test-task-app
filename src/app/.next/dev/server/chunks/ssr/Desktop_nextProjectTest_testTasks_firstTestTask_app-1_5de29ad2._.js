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
"[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/CardOfTask/CardOfTask.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CardOfTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
const formatDate = (dateString)=>{
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", {
        month: "long"
    });
    return `${day} ${month}`;
};
function CardOfTask({ task }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-3 min-w-[160px] min-h-[180px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold text-gray-900 mb-2 text-base",
                children: task.title
            }, void 0, false, {
                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/CardOfTask/CardOfTask.tsx",
                lineNumber: 19,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600 mb-4 line-clamp-3",
                children: task.description
            }, void 0, false, {
                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/CardOfTask/CardOfTask.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "12",
                                height: "12",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/CardOfTask/CardOfTask.tsx",
                                        lineNumber: 39,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "12 6 12 12 16 14"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/CardOfTask/CardOfTask.tsx",
                                        lineNumber: 40,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/CardOfTask/CardOfTask.tsx",
                                lineNumber: 29,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: formatDate(task.dueDate)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/CardOfTask/CardOfTask.tsx",
                                lineNumber: 42,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/CardOfTask/CardOfTask.tsx",
                        lineNumber: 28,
                        columnNumber: 5
                    }, this),
                    task.assignees && task.assignees.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex -space-x-2",
                        children: task.assignees.slice(0, 3).map((assignee)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200 relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: assignee.avatar,
                                    alt: assignee.name,
                                    fill: true,
                                    className: "object-cover",
                                    unoptimized: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/CardOfTask/CardOfTask.tsx",
                                    lineNumber: 52,
                                    columnNumber: 9
                                }, this)
                            }, assignee.id, false, {
                                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/CardOfTask/CardOfTask.tsx",
                                lineNumber: 48,
                                columnNumber: 8
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/CardOfTask/CardOfTask.tsx",
                        lineNumber: 46,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/CardOfTask/CardOfTask.tsx",
                lineNumber: 27,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/CardOfTask/CardOfTask.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this);
}
}),
"[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/EmptyElementOfList/EmptyElementOfList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmptyElementOfList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function EmptyElementOfList() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-w-[160] min-h-[180] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 mb-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-400 text-sm",
            children: "Empty slot"
        }, void 0, false, {
            fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/EmptyElementOfList/EmptyElementOfList.tsx",
            lineNumber: 6,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/EmptyElementOfList/EmptyElementOfList.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, this);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$component$2f$CardOfTask$2f$CardOfTask$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/CardOfTask/CardOfTask.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$component$2f$EmptyElementOfList$2f$EmptyElementOfList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/EmptyElementOfList/EmptyElementOfList.tsx [app-ssr] (ecmascript)");
;
;
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
        className: "flex justify-between gap-4 flex-col md:flex-row",
        children: priority.map((el, key)=>{
            const tasksForStatus = elements.filter((task)=>task.status === el.status);
            const maxSlots = 3;
            const emptySlotsCount = Math.max(0, maxSlots - tasksForStatus.length);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col flex-1 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold mb-4 capitalize",
                        children: [
                            el.status.replace("-", " "),
                            " (",
                            el.count,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/ListOfTasks/ListOfTask.tsx",
                        lineNumber: 71,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 ",
                        children: [
                            tasksForStatus.map((task)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$component$2f$CardOfTask$2f$CardOfTask$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    task: task
                                }, task.id, false, {
                                    fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/ListOfTasks/ListOfTask.tsx",
                                    lineNumber: 76,
                                    columnNumber: 16
                                }, this);
                            }),
                            Array.from({
                                length: emptySlotsCount
                            }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$component$2f$EmptyElementOfList$2f$EmptyElementOfList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, `empty-${index}`, false, {
                                    fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/ListOfTasks/ListOfTask.tsx",
                                    lineNumber: 79,
                                    columnNumber: 9
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/ListOfTasks/ListOfTask.tsx",
                        lineNumber: 74,
                        columnNumber: 7
                    }, this)
                ]
            }, key, true, {
                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/ListOfTasks/ListOfTask.tsx",
                lineNumber: 70,
                columnNumber: 6
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/component/ListOfTasks/ListOfTask.tsx",
        lineNumber: 61,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:p-10 text-center md:text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl pb-3 md:text-4xl md:p-5 font-bold text-black",
                        children: "My Tasks"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/content/dashboard/page.tsx",
                        lineNumber: 9,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 text-xs md:text-xl",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$utils$2f$unils$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["returnToDayData"])()
                    }, void 0, false, {
                        fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/content/dashboard/page.tsx",
                        lineNumber: 12,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/content/dashboard/page.tsx",
                lineNumber: 8,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-15",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$nextProjectTest$2f$testTasks$2f$firstTestTask$2f$app$2d$1$2f$component$2f$ListOfTasks$2f$ListOfTask$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/content/dashboard/page.tsx",
                    lineNumber: 16,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/nextProjectTest/testTasks/firstTestTask/app-1/app/content/dashboard/page.tsx",
                lineNumber: 15,
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

//# sourceMappingURL=Desktop_nextProjectTest_testTasks_firstTestTask_app-1_5de29ad2._.js.map