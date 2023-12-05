import { Router } from 'express';
import * as countryController from '../../controllers/country/country.js';

const router = new Router();

router.post("/",countryController.create);
router.get("/",countryController.getCountries);


export default router;