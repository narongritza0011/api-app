import { Sequelize } from "sequelize";



const db = new Sequelize("railway", "root", "gpPu3f9SGm3BZZQqiVbj", {
  host: "containers-us-west-192.railway.app",
  port: "6182",
  dialect: "mysql",
  logging: true,
});



export default db;
