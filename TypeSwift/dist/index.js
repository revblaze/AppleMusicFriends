"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//var jsonTextEditor = ace.edit('source')
//var outputTextEditor = ace.edit('output');
var jsonTextEditor;
var outputTextEditor;
var outputStorage;
var compareString;
var counter = 0;
function formatJSON(msg) {
    return JSON.stringify(msg);
}
function insertJSON(msg) {
    outputStorage = outputTextEditor.getSession().getValue().toString();
    var jsonString = formatJSON(msg); //JSON.stringify(msg)
    jsonTextEditor.getSession().setValue(jsonString);
    window.webkit.messageHandlers.eventListeners.postMessage("[ACE] Inserted JSON");
    printOutputCode();
    //printDebug()
}
function printOutputCode() {
    var outputString = outputTextEditor.getSession().getValue().toString();
    //window.webkit.messageHandlers.eventListeners.postMessage(`localeCompare: ${outputString.localeCompare(outputStorage)}`)
    window.webkit.messageHandlers.eventListeners.postMessage("Counter: " + counter);
    //if (outputString != outputString) {
    if (outputString.localeCompare(outputStorage) != 0) {
        //outputStorage = outputString
        window.webkit.messageHandlers.eventListeners.postMessage("[ACE] SUCCESS");
        window.webkit.messageHandlers.eventListeners.postMessage(outputString.toString());
        counter = 0;
    }
    else if (counter <= 20) {
        if (counter >= 10 && [10, 15, 20].includes(counter)) {
            window.webkit.messageHandlers.eventListeners.postMessage("[ACE] BUFFER: Still searching...");
            window.webkit.messageHandlers.eventListeners.postMessage(outputString.toString());
        }
        counter++;
        setTimeout(printOutputCode, 300);
    }
    else {
        //window.webkit.messageHandlers.eventListeners.postMessage(`outputString: ${outputString}`)
        //window.webkit.messageHandlers.eventListeners.postMessage(`outputStorage: ${outputStorage}`)
        window.webkit.messageHandlers.eventListeners.postMessage("[ACE] ERROR: Could not retrieve output code.");
        //window.webkit.messageHandlers.eventListeners.postMessage(outputString.toString());
        counter = 0;
    }
}
function getOutputCode() {
    return __awaiter(this, void 0, void 0, function () {
        var outputString;
        return __generator(this, function (_a) {
            outputString = outputTextEditor.getSession().getValue().toString();
            if (outputString != outputString) {
                outputStorage = outputString;
                window.webkit.messageHandlers.eventListeners.postMessage(outputString);
            }
            else if (counter <= 10) {
                counter++;
                setTimeout(getOutputCode, 300);
            }
            else {
                window.webkit.messageHandlers.eventListeners.postMessage("[ACE] Could not retrieve output code.");
            }
            return [2 /*return*/];
        });
    });
}
var SourceType;
(function (SourceType) {
    SourceType["JSON"] = "JSON";
    SourceType["MultipleJSON"] = "Multiple JSON";
    SourceType["TypeScript"] = "TypeScript";
    SourceType["JSONSchema"] = "JSON Schema";
    SourceType["Postman"] = "Postman v2.1";
})(SourceType || (SourceType = {}));
//# sourceMappingURL=index.js.map