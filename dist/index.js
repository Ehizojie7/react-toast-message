"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastContainer = exports.useToast = void 0;
var react_1 = __importStar(require("react"));
require("./toast.css");
var useToast = function () {
    var _a = (0, react_1.useState)([]), toasts = _a[0], setToasts = _a[1];
    var addToast = (0, react_1.useCallback)(function (message, type, duration) {
        if (type === void 0) { type = 'info'; }
        if (duration === void 0) { duration = 3000; }
        var id = Date.now() + Math.random();
        var toast = { id: id, message: message, type: type, duration: duration };
        setToasts(function (prev) { return __spreadArray(__spreadArray([], prev, true), [toast], false); });
        setTimeout(function () {
            removeToast(id);
        }, duration);
        return id;
    }, []);
    var removeToast = (0, react_1.useCallback)(function (id) {
        setToasts(function (prev) { return prev.filter(function (toast) { return toast.id !== id; }); });
    }, []);
    var showSuccess = (0, react_1.useCallback)(function (message, duration) {
        return addToast(message, 'success', duration);
    }, [addToast]);
    var showError = (0, react_1.useCallback)(function (message, duration) {
        return addToast(message, 'error', duration);
    }, [addToast]);
    var showWarning = (0, react_1.useCallback)(function (message, duration) {
        return addToast(message, 'warning', duration);
    }, [addToast]);
    var showInfo = (0, react_1.useCallback)(function (message, duration) {
        return addToast(message, 'info', duration);
    }, [addToast]);
    return {
        toasts: toasts,
        showSuccess: showSuccess,
        showError: showError,
        showWarning: showWarning,
        showInfo: showInfo,
        removeToast: removeToast
    };
};
exports.useToast = useToast;
var ToastContainer = function (_a) {
    var toasts = _a.toasts, removeToast = _a.removeToast;
    if (!toasts.length)
        return null;
    return react_1.default.createElement('div', { className: 'toast-container' }, toasts.map(function (toast) {
        return react_1.default.createElement('div', {
            key: toast.id,
            className: "toast toast-".concat(toast.type),
            onClick: function () { return removeToast(toast.id); }
        }, [
            react_1.default.createElement('span', { key: 'message' }, toast.message),
            react_1.default.createElement('button', {
                key: 'close',
                className: 'toast-close',
                onClick: function (e) {
                    e.stopPropagation();
                    removeToast(toast.id);
                }
            }, 'X')
        ]);
    }));
};
exports.ToastContainer = ToastContainer;
//# sourceMappingURL=index.js.map