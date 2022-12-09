// import { Sequelize } from "sequelize";
// const db = new Sequelize('comunity_general', 'root', 'cx2021!', {
//     host : "68.183.234.187",
//     port:3307,
//     dialect: "mysql",
// });


// console.log(db);



import { Sequelize } from "sequelize";
const db = new Sequelize('fiona', 'fazriii', '123456', {
    host: "localhost",
    dialect: "mysql"
});
export default db  

// export default db  