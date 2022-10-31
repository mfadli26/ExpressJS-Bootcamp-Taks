const { sequelize } = require("../models/init-models")
const jobs = require("../models/jobs")

const findAll = async (req,res)=>{
    try {
        const job = await jobs.findAll()
        return res.send(job)
    } catch (error) {
        return res.status(404).send(error)
    }
}
const findOne = async (req,res)=>{
    try {
        const job = await jobs.findOne({
            where:{job_id : req.params.id}
        })
        return res.send(job)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async (req,res)=>{
    try {
        const job = await jobs.create({
            job_id : req.body.country_id,
            job_title : req.body.country_name,
            min_salary : req.body.min_salary,
            max_salary : req.body.max_salary
        })
        return res.send(job)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async (req,res)=>{
    console.log();
    try {
        const job = await jobs.update({
            job_title : req.body.country_name,
            min_salary : req.body.min_salary,
            max_salary : req.body.max_salary
        },{ returning : true , where:{country_id : req.params.id}})
        return res.send(job)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req,res)=>{
    try {
        const job = await jobs.destroy({
            where:{job_id : req.params.id}
        })
        return res.send('delete '+job+' rows')
    } catch (error) {
        return res.status(404).send(error)
    }
}

const querySQL = async(req,res)=>{
    try {
        await sequelize.query('SELECT * from jobs where job_id = :jobId',
        {replacements : {jobId : req.params.id},type : sequelize.QueryTypes.SELECT})
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