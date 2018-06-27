

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "dbConfigs";
var config = require(path.join(__dirname, '..', 'config', 'config.js'));

const sequelConfig = config.sequelConfig;
let db = {};//需要挂载db对象
const database = sequelConfig.database;
const username = sequelConfig.username;
const password = sequelConfig.password;
const sequelize = new Sequelize(database, username, password, sequelConfig);
fs.readdirSync(path.join(__dirname, '..', 'model'))
    .filter(function (file) {
        return (file.indexOf(".") !== 0);
    })
    .forEach(function (file) {
        var model = sequelize.import(path.join(__dirname, '..', 'model',file));
        db[model.name] = model;
    });
Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;