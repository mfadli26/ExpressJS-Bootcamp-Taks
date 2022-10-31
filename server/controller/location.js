const { sequelize } = require("../models/init-models")
const locations = require("../models/locations")

const findAll = async (req,res)=>{
    try {
        const location = await locations.findAll()
        return res.send(location)
    } catch (error) {
        return res.status(404).send(error)
    }
}
const findOne = async (req,res)=>{
    try {
        const location = await req.context.models.countries.findOne({
            where:{location_id : req.params.id}
        })
        return res.send(location)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async (req,res)=>{
    try {
        const location = await locations.create({
            street_address : req.body.street_address,
            postal_code : req.body.postal_code,
            city : req.body.city,
            state_province : req.body.state_province,
            country_id : req.body.country_id
        })
        return res.send(location)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async (req,res)=>{
    console.log();
    try {
        
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req,res)=>{
    try {
        
    } catch (error) {
        return res.status(404).send(error)
    }
}

const querySQL = async(req,res)=>{
    try {
        
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