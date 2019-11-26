define(["require", "exports", "./HelloWorld"], function (require, exports, HelloWorld_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            document.getElementById("output").innerHTML = HelloWorld_1.default.GetHello();
        };
        return Program;
    }());
    Program.Main();
});
//# sourceMappingURL=Program.js.map