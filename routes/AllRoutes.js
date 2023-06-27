import express from "express";
import { GetLocales, Market, getCurrencies } from "../controllers/CultureAPIControllers.js";
import { Carriers } from "../controllers/CarriersAPIControllers.js";
import { GetLocations } from "../controllers/GeoAPIControllers.js";
import { CreateASearch, PollASearch, PollSearch } from "../controllers/FlightsLivePricesAPIControllers.js";
import { CreateAndPollSearch } from "../controllers/SyncFlightLivePricesAPIControllers.js";
import { PollAPageFromSearch, StartASearch } from "../controllers/HotelsLivePriceAPIControllers.js";
import { autoSuggestFlights, autoSuggestHotels } from "../controllers/AutoSuggestAPIControllers.js";
const router = express.Router();


router.get('/GetLocales',GetLocales)
router.get('/getCurrencies',getCurrencies)
router.get('/Market',Market)
router.get('/Carriers',Carriers)
router.get('/GetLocations',GetLocations)
router.post('/CreateASearch',CreateASearch)
router.post('/PollSearch',PollSearch)
router.get('/PollASearch',PollASearch)
router.post('/CreateAndPollSearch',CreateAndPollSearch)
router.post('/StartASearch',StartASearch)
router.get('/PollAPageFromSearch',PollAPageFromSearch)
router.get('/autoSuggestFlights',autoSuggestFlights)
router.get('/autoSuggestHotels',autoSuggestHotels)









export default router;
