import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";
import db from "./config/database.js";
// import UserRoutes from "./routes/UserRoutes.js";
import bodyParser from "body-parser";
import path from "path";
// import Profile from "./routes/ProfileRoute.js";
import jwt_decode from "jwt-decode";
import todo from "./routes/todoRoutes.js";
import activity from "./routes/activity_groupsRoutes.js";

dotenv.config();

const port = process.env.PORT || 3030;

const app = express();
// (async()=>{
//     await db.sync();
// })();
  
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(session({
    secret: process.env.ACCESS_TOKEN_SECRET,
    resave:true,
    saveUninitialized:true,
    cookie:{
        secure:'auto'
    }
}));

app.use(cors({
    origin:'http://localhost:3000',
    credentials: true,
}));
app.use(cookieParser());


app.use(express.json());
// app.use(UserRoutes);
app.use(activity);
app.use(todo);


app.listen(port, ()=> console.log(`Server running at port ${port}`));
