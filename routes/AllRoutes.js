import express from "express";

import { GetLocations } from "../controllers/GeoAPIControllers.js";
import { CreateASearch, PollASearch, PollSearch } from "../controllers/FlightsLivePricesAPIControllers.js";
import { CreateAndPollSearch } from "../controllers/SyncFlightLivePricesAPIControllers.js";

const router = express.Router();


router.get('/ping', (req, res) => {
    return res.send("Pong")
})

router.get('/GetLocations',GetLocations)
router.post('/CreateASearch',CreateASearch)
router.post('/PollSearch',PollSearch)
router.get('/PollASearch',PollASearch)
router.post('/CreateAndPollSearch',CreateAndPollSearch)





export default router;
