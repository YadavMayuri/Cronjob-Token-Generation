console.log("hii");
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import router  from "./routes/AllRoutes.js";


const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1',router);


// var job = new CronJob('*/1 * * * *', ()=>{
//     console.log("inside cronjob");
// // router.post('/CreateASearch',CreateASearch)

// })
// job.start();

mongoose.connect('mongodb+srv://mayuriyadav54:HGU1ZbJCNcqlTu0z@cluster0.s9gcceb.mongodb.net/Cronjob-DB')
.then(()=> console.log("DB connected"))
.catch((err)=> console.log("DB Erroe=>",err))


app.listen(8000, ()=> console.log("workin on port 8000"));

