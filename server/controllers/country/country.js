import Country from '../../models/countries/country.js';

export const create = async (req,res) => {
    try{
        const {countryName} = req.body;
        
        const country = new Country({countryName});
        await country.save();

        res.json("ok")
    }catch(e){
        console.log(e);
    }
}

export const getCountries = async (req,res) => {
    try{
        const countries = await Country.find().exec();
        return res.json({countries})
    }catch(e){
        console.log(e);
    }
}

