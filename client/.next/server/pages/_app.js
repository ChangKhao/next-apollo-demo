/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/GlobalStates.tsx":
/*!******************************!*\
  !*** ./lib/GlobalStates.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalContext\": () => (/* binding */ GlobalContext),\n/* harmony export */   \"GlobalProvider\": () => (/* binding */ GlobalProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/constant */ \"./lib/constant.ts\");\n\n\n\n\nconst defaultInitialState = {\n    contactlist: [],\n    next: 1,\n    loading: false,\n    setLoading: ()=>[],\n    handleLoadMore: ()=>{},\n    error: \"\"\n};\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultInitialState);\nconst GlobalProvider = ({ children  })=>{\n    const { 0: contactlist , 1: setContactList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: next , 1: setHasNext  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { fetchMore  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_lib_constant__WEBPACK_IMPORTED_MODULE_3__.QUERY, {\n        variables: {\n            count: 0,\n            page: 1\n        },\n        fetchPolicy: \"cache-and-network\",\n        skip: true\n    });\n    const handleLoadMore = ()=>{\n        fetchMore({\n            variables: {\n                count: _lib_constant__WEBPACK_IMPORTED_MODULE_3__.batchCount,\n                page\n            }\n        }).then((res)=>{\n            const contacts = res.data && res.data.ContactsList && Array.isArray(res.data.ContactsList.contacts) && res.data.ContactsList.contacts || [];\n            setContactList((list)=>[\n                    ...list,\n                    ...contacts\n                ]);\n            const isNextPage = res.data && res.data.ContactsList && res.data.ContactsList.next;\n            isNextPage && setPage((index)=>index + 1);\n            setHasNext(isNextPage);\n            setLoading(false);\n        }).catch((e)=>{\n            setError(e);\n            setLoading(false);\n        });\n    };\n    const providerValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            contactlist,\n            next,\n            loading,\n            setLoading,\n            handleLoadMore,\n            error\n        }), [\n        contactlist,\n        next,\n        loading,\n        setLoading,\n        handleLoadMore,\n        error\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: providerValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/marberre/Documents/projects/temp/sapient/next-apollo-demo/client/lib/GlobalStates.tsx\",\n        lineNumber: 73,\n        columnNumber: 13\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVDLFVBQVU7UUFBRUMsY0FBYztRQUFFQyxLQUFLO0tBQUMsQ0FDbkU7SUFFRCxxQkFDSSw4REFBQ0MsYUFBYSxDQUFDMEIsUUFBUTtRQUFDQyxLQUFLLEVBQUVGLGFBQWE7a0JBQ3ZDdkIsUUFBUTs7Ozs7aUJBQ1ksQ0FDM0I7Q0FDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcG9sbG8vLi9saWIvR2xvYmFsU3RhdGVzLnRzeD83MThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBRVUVSWSwgYmF0Y2hDb3VudCB9IGZyb20gJy4uL2xpYi9jb25zdGFudCc7XG5cbmNvbnN0IGRlZmF1bHRJbml0aWFsU3RhdGUgPSB7XG4gICAgY29udGFjdGxpc3Q6IFtdLFxuICAgIG5leHQ6IDEsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgc2V0TG9hZGluZzogKCkgPT4gW10sXG4gICAgaGFuZGxlTG9hZE1vcmU6ICgpID0+IHt9LFxuICAgIGVycm9yOiAnJ1xufTtcblxuaW50ZXJmYWNlIEdsb2JhbENvbnRleHRQcm9wcyB7XG4gICAgY29udGFjdGxpc3Q6IGFueVtdO1xuICAgIG5leHQ6IG51bWJlcjtcbiAgICBsb2FkaW5nOiBib29sZWFuO1xuICAgIHNldExvYWRpbmc6IChsb2FkaW5nOiBib29sZWFuKSA9PiB2b2lkO1xuICAgIGhhbmRsZUxvYWRNb3JlOiAoKSA9PiB2b2lkO1xuICAgIGVycm9yOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dCA9IFxuICAgIGNyZWF0ZUNvbnRleHQ8R2xvYmFsQ29udGV4dFByb3BzPihkZWZhdWx0SW5pdGlhbFN0YXRlKTtcbiAgICBpbnRlcmZhY2UgR2xvYmFsUHJvdmlkZXJQcm9wcyB7IGNoaWxkcmVuOiBhbnk7IH1cblxuICAgIGV4cG9ydCBjb25zdCBHbG9iYWxQcm92aWRlcjogRkM8R2xvYmFsUHJvdmlkZXJQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgICAgIGNvbnN0IFtjb250YWN0bGlzdCwgc2V0Q29udGFjdExpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgICAgICBjb25zdCBbbmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gICAgICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKTtcblxuICAgICAgICBjb25zdCB7IGZldGNoTW9yZSB9ID0gdXNlUXVlcnkoUVVFUlksIHtcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICdjYWNoZS1hbmQtbmV0d29yaycsXG4gICAgICAgICAgICBza2lwOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZUxvYWRNb3JlID0gKCkgPT4ge1xuICAgICAgICAgICAgZmV0Y2hNb3JlKHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IGJhdGNoQ291bnQsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWN0cyA9IChyZXMuZGF0YSAmJiByZXMuZGF0YS5Db250YWN0c0xpc3QgJiYgQXJyYXkuaXNBcnJheShyZXMuZGF0YS5Db250YWN0c0xpc3QuY29udGFjdHMpICYmIHJlcy5kYXRhLkNvbnRhY3RzTGlzdC5jb250YWN0cykgfHwgW107XG5cbiAgICAgICAgICAgICAgICBzZXRDb250YWN0TGlzdCgobGlzdCkgPT4gWy4uLmxpc3QsIC4uLmNvbnRhY3RzXSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc05leHRQYWdlID0gcmVzLmRhdGEgJiYgcmVzLmRhdGEuQ29udGFjdHNMaXN0ICYmIHJlcy5kYXRhLkNvbnRhY3RzTGlzdC5uZXh0O1xuICAgICAgICAgICAgICAgIGlzTmV4dFBhZ2UgJiYgc2V0UGFnZSgoaW5kZXgpID0+IGluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgc2V0SGFzTmV4dChpc05leHRQYWdlKTtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7IHNldEVycm9yKGUpOyBzZXRMb2FkaW5nKGZhbHNlKTsgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm92aWRlclZhbHVlOiBhbnkgPSB1c2VNZW1vKCAoKSA9PiAoe1xuICAgICAgICAgICAgY29udGFjdGxpc3QsXG4gICAgICAgICAgICBuZXh0LFxuICAgICAgICAgICAgbG9hZGluZyxcbiAgICAgICAgICAgIHNldExvYWRpbmcsXG4gICAgICAgICAgICBoYW5kbGVMb2FkTW9yZSxcbiAgICAgICAgICAgIGVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICAgICAgWyBjb250YWN0bGlzdCwgbmV4dCwgbG9hZGluZywgc2V0TG9hZGluZywgaGFuZGxlTG9hZE1vcmUsIGVycm9yXVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cHJvdmlkZXJWYWx1ZX0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICApO1xuICAgIH07Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlTWVtbyIsInVzZVF1ZXJ5IiwiUVVFUlkiLCJiYXRjaENvdW50IiwiZGVmYXVsdEluaXRpYWxTdGF0ZSIsImNvbnRhY3RsaXN0IiwibmV4dCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlTG9hZE1vcmUiLCJlcnJvciIsIkdsb2JhbENvbnRleHQiLCJHbG9iYWxQcm92aWRlciIsImNoaWxkcmVuIiwic2V0Q29udGFjdExpc3QiLCJzZXRIYXNOZXh0IiwicGFnZSIsInNldFBhZ2UiLCJzZXRFcnJvciIsImZldGNoTW9yZSIsInZhcmlhYmxlcyIsImNvdW50IiwiZmV0Y2hQb2xpY3kiLCJza2lwIiwidGhlbiIsInJlcyIsImNvbnRhY3RzIiwiZGF0YSIsIkNvbnRhY3RzTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsImxpc3QiLCJpc05leHRQYWdlIiwiaW5kZXgiLCJjYXRjaCIsImUiLCJwcm92aWRlclZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/GlobalStates.tsx\n");

/***/ }),

/***/ "./lib/apollo-client.ts":
/*!******************************!*\
  !*** ./lib/apollo-client.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/utilities */ \"@apollo/client/utilities\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ \"./lib/constant.ts\");\n\n\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: _constant__WEBPACK_IMPORTED_MODULE_2__.uri,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({\n        typePolicies: {\n            Query: {\n                fields: {\n                    ContactsList: (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1__.offsetLimitPagination)()\n                }\n            }\n        }\n    })\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBvbGxvLWNsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkQ7QUFDSTtBQUNoQztBQUVqQyxNQUFNSSxNQUFNLEdBQUcsSUFBSUosd0RBQVksQ0FBQztJQUM1QkcsR0FBRztJQUNIRSxLQUFLLEVBQUUsSUFBSUoseURBQWEsQ0FBQztRQUNyQkssWUFBWSxFQUFFO1lBQ1ZDLEtBQUssRUFBRTtnQkFDSEMsTUFBTSxFQUFFO29CQUNKQyxZQUFZLEVBQUVQLCtFQUFxQixFQUFFO2lCQUN4QzthQUNKO1NBQ0o7S0FDSixDQUFDO0NBQ0wsQ0FBQztBQUVGLGlFQUFlRSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwb2xsby8uL2xpYi9hcG9sbG8tY2xpZW50LnRzP2I5NWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBvZmZzZXRMaW1pdFBhZ2luYXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnQvdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyB1cmkgfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgdXJpLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7XG4gICAgICAgIHR5cGVQb2xpY2llczoge1xuICAgICAgICAgICAgUXVlcnk6IHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgQ29udGFjdHNMaXN0OiBvZmZzZXRMaW1pdFBhZ2luYXRpb24oKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50OyJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwib2Zmc2V0TGltaXRQYWdpbmF0aW9uIiwidXJpIiwiY2xpZW50IiwiY2FjaGUiLCJ0eXBlUG9saWNpZXMiLCJRdWVyeSIsImZpZWxkcyIsIkNvbnRhY3RzTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/apollo-client.ts\n");

/***/ }),

/***/ "./lib/constant.ts":
/*!*************************!*\
  !*** ./lib/constant.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QUERY\": () => (/* binding */ QUERY),\n/* harmony export */   \"batchCount\": () => (/* binding */ batchCount),\n/* harmony export */   \"errMsg\": () => (/* binding */ errMsg),\n/* harmony export */   \"uri\": () => (/* binding */ uri)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"http://localhost:4000/graphql\";\nconst batchCount = 20;\nconst errMsg = \"Looks like something went amiss, please try again\";\nconst QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n    query ContactsList($count: Int, $page: Int) {\n        ContactsList(count: $count, page: $page) {\n            contacts {\n                company\n                name\n                email\n                address\n                phoneNumber\n            }\n            next\n        }\n    }`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29uc3RhbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFDO0FBRTlCLE1BQU1DLEdBQUcsR0FBRywrQkFBK0IsQ0FBQztBQUM1QyxNQUFNQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLE1BQU1DLE1BQU0sR0FBRyxtREFBbUQsQ0FBQztBQUNuRSxNQUFNQyxLQUFLLEdBQUdKLCtDQUFHLENBQUM7Ozs7Ozs7Ozs7OztLQVlwQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwb2xsby8uL2xpYi9jb25zdGFudC50cz85MmFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuZXhwb3J0IGNvbnN0IHVyaSA9ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbCc7XG5leHBvcnQgY29uc3QgYmF0Y2hDb3VudCA9IDIwO1xuZXhwb3J0IGNvbnN0IGVyck1zZyA9ICdMb29rcyBsaWtlIHNvbWV0aGluZyB3ZW50IGFtaXNzLCBwbGVhc2UgdHJ5IGFnYWluJztcbmV4cG9ydCBjb25zdCBRVUVSWSA9IGdxbGBcbiAgICBxdWVyeSBDb250YWN0c0xpc3QoJGNvdW50OiBJbnQsICRwYWdlOiBJbnQpIHtcbiAgICAgICAgQ29udGFjdHNMaXN0KGNvdW50OiAkY291bnQsIHBhZ2U6ICRwYWdlKSB7XG4gICAgICAgICAgICBjb250YWN0cyB7XG4gICAgICAgICAgICAgICAgY29tcGFueVxuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICBlbWFpbFxuICAgICAgICAgICAgICAgIGFkZHJlc3NcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV4dFxuICAgICAgICB9XG4gICAgfWA7Il0sIm5hbWVzIjpbImdxbCIsInVyaSIsImJhdGNoQ291bnQiLCJlcnJNc2ciLCJRVUVSWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/constant.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_GlobalStates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/GlobalStates */ \"./lib/GlobalStates.tsx\");\n/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/apollo-client */ \"./lib/apollo-client.ts\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: _lib_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_GlobalStates__WEBPACK_IMPORTED_MODULE_2__.GlobalProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/marberre/Documents/projects/temp/sapient/next-apollo-demo/client/pages/_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/marberre/Documents/projects/temp/sapient/next-apollo-demo/client/pages/_app.tsx\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/marberre/Documents/projects/temp/sapient/next-apollo-demo/client/pages/_app.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNnRDtBQUVLO0FBQ1g7QUFFWDtBQUUvQixNQUFNRyxHQUFHLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxHQUFLO0lBQ2hELHFCQUNJLDhEQUFDTCwwREFBYztRQUFDRSxNQUFNLEVBQUVBLDBEQUFNO2tCQUMxQiw0RUFBQ0QsNkRBQWM7c0JBQ1gsNEVBQUNHLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7eUJBQUk7Ozs7O3FCQUNmOzs7OztpQkFDSixDQUNuQjtDQUNMO0FBRUQsaUVBQWVGLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBvbGxvLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuaW1wb3J0IHsgR2xvYmFsUHJvdmlkZXIgfSBmcm9tIFwiLi4vbGliL0dsb2JhbFN0YXRlc1wiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vbGliL2Fwb2xsby1jbGllbnRcIjtcblxuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgICAgICA8R2xvYmFsUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9HbG9iYWxQcm92aWRlcj5cbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj4gICAgICAgIFxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm5hbWVzIjpbIkFwb2xsb1Byb3ZpZGVyIiwiR2xvYmFsUHJvdmlkZXIiLCJjbGllbnQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/utilities":
/*!*******************************************!*\
  !*** external "@apollo/client/utilities" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();