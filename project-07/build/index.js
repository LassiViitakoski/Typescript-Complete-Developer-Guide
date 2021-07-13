"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./routes/loginRoutes");
var cookie_session_1 = __importDefault(require("cookie-session"));
// const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieSession({ keys: ['secret-token'] }));
// app.use(router);
// app.listen(3000, () => {
//     console.log('listening on port 3000');
// });
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(cookie_session_1.default({ keys: ['secret-token'] }));
        this.app.use(loginRoutes_1.router);
    }
    Server.prototype.start = function () {
        this.app.listen(3000, function () {
            console.log('listening on port 3000');
        });
    };
    return Server;
}());
