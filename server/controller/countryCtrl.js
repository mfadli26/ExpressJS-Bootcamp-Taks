const { sequelize } = require("../models/init-models")
const countries = require("../models/countries")

const findAll = async (req,res)=>{
    try {
        const country = await countries.findAll()
        return res.send(country)
    } catch (error) {
        return res.status(404).send(error)
    }
}
const findOne = async (req,res)=>{
    try {
        const country = await countries.findOne({
            where:{country_id : req.params.id}
        })
        return res.send(country)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async (req,res)=>{
    try {
        const country = await countries.create({
            country_id : req.body.country_id,
            country_name : req.body.country_name,
            region_id : req.body.region_id
        })
        return res.send(country)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async (req,res)=>{
    console.log();
    try {
        const country = await countries.update({
            country_name : req.body.country_name,
            region_id : req.body.region_id
        },{ returning : true , where:{country_id : req.params.id}})
        return res.send(country)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req,res)=>{
    try {
        const country = await countries.destroy({
            where:{country_id : req.params.id}
        })
        return res.send('delete '+country+' rows')
    } catch (error) {
        return res.status(404).send(error)
    }
}

const querySQL = async(req,res)=>{
    try {
        await sequelize.query('SELECT * from countries where country_id = :countryId',
        {replacements : {countryId : req.params.id},type : sequelize.QueryTypes.SELECT})
        .then(result =>{
            return res.send(result)
        })
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    findOne,
    create,
    update,
    deleted,
    querySQL
}