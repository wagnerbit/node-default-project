"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const db_1 = require("./config/db");
const cors = require("cors");
const auth_1 = require("./config/auth");
//Route
const userController_1 = require("./controllers/userController");
class App {
    constructor() {
        this.app = express();
        this.enableCors();
        this.middleware();
        this.database = new db_1.default();
        this.dataBaseConnection();
        this.routes();
    }
    enableCors() {
        const options = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: '*',
            preflightContinue: false
        };
        this.app.use(cors(options));
    }
    dataBaseConnection() {
        this.database.createConnection();
    }
    closedataBaseConnection(message, callback) {
        this.database.closeConnection(message, () => callback());
    }
    middleware() {
        this.app.use(morgan("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ 'result': 'version 0.0.2' });
        });
        this.app.use(auth_1.default.validate);
        this.app.route("/api/v1/users").get(userController_1.default.get);
        this.app.route("/api/v1/users/:id").get(userController_1.default.getById);
        this.app.route("/api/v1/users").post(userController_1.default.create);
        this.app.route("/api/v1/users/:id").put(userController_1.default.update);
        this.app.route("/api/v1/users/:id").delete(userController_1.default.delete);
    }
}
exports.default = new App();
