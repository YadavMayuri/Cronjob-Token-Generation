console.log("hii");
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import router  from "./routes/AllRoutes.js";
import { CronJob } from "cron";
import { CreateASearch } from "./controllers/FlightsLivePricesAPIControllers.js";


const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1',router);


var job = new CronJob('*/1 * * * *', ()=>{
    console.log("inside cronjob");
// router.post('/CreateASearch',CreateASearch)

})
job.start();


app.listen(8000)
