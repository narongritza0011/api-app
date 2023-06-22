import { Sequelize } from "sequelize";

// const db = new Sequelize("landing_page_app", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
//   logging: false, //console loggin ดู sql
// });

const db = new Sequelize("railway", "root", "gpPu3f9SGm3BZZQqiVbj", {
  host: "containers-us-west-192.railway.app",
  port: "6182",
  dialect: "mysql",
  logging: false,
});

// const db = new Sequelize({
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DATABASE,
//   dialect: "mysql", // Replace with your database dialect if different
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
// });

export default db;
