const { Router } = require('express');
const { Activity, Country, Country_Activity } = require('../db')
const { Sequelize } = require('Sequelize')
const axios = require('axios');
const { json } = require('body-parser');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getCountriesInfo = async (req, res) => {


    const apiCountries = await axios.get("https://restcountries.com/v3/all")

   
    const { name } = req.query

    try {
        if (name) {
            let country = await Country.findAll({
                include: { model: Activity },
                where: { name: { [Sequelize.Op.iLike]: `%${name}%` } }
            })
            console.log(country.dataValues, "country")
            return country ? res.status(200).json(country) : res.status(404).json(err.message)
        }
        else {



            const responseDb = await Country.findAll({

                include: { model: Activity },

            })
            const filteredResponseDb = responseDb.map(a => {
                if (a.name === "Åland Islands") {
                    a.name = "Aland Islands"
                }
                return a
            }
            )

            return filteredResponseDb ? res.status(200).json(filteredResponseDb) : res.sendStatus(400)
        }
    }
    catch (err) {
        return res.status(400).json(err.message)
    }


}


const getCountryDetail = async (req, res) => {

    const { id } = req.params
    const countryid = await Country.findOne(
        {
            where: {
                id: id.toUpperCase()
            },
            include: {
                model: Activity
            }
        })

    if (countryid)
        return res.status(200).json(countryid)
        return res.status(400).json("este id no pertenece a ningun pais")

}





const recipeActivities = async (req, res) => {

    const { name, dificulty, duration, season, country } = req.body

    try {
        const allRecipt = await Activity.create({
            name: name,
            dificulty: dificulty,
            duration: duration,
            season: season,
        })

        for (const c of country) {
            const countries = await Country.findOne({
                where: { name: c }
            })
            await allRecipt.addCountry(countries)
            await countries.addActivity(allRecipt)
        }

        return res.status(200).json(allRecipt)
    } catch (err) {
        return res.status(400).json(err.message)
    }

}



router.get('/countries/:id', getCountryDetail)
router.get('/countries', getCountriesInfo)
router.post('/activities', recipeActivities)

module.exports = router;
