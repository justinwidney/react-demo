const low = require("lowdb");

//import low from "lowdb";
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./db.json");
const db = new low(adapter);

console.log(db.data);

db.get("user").push({ id: 2, username: "test" }).write();

const createPetModel = require("./pet.js");
const createUserModel = require("./user.js");

module.exports = {
  models: {
    Pet: createPetModel(db),
    User: createUserModel(db),
  },
  db,
};
