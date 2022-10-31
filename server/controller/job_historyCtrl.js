const { sequelize } = require("../models/init-models")
const job_history = require("../models/job_history")

const findAll = async (req,res)=>{
    try {
        const job = await job_history.findAll()
        return res.send(job)
    } catch (error) {
        return res.status(404).send(error)
    }
}
const findOne = async (req,res)=>{
    try {
        const job = await job_history.findOne({
            where:{job_id : req.params.id}
        })
        return res.send(job)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async (req,res)=>{
    try {
        const job = await job_history.create({
            job_id : req.body.job_id,
            employee_id : req.body.employee_id,
            start_date : req.body.start_date,
            end_date : req.body.end_date,
            department_id : req.body.department_id
        })
        return res.send(job)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async (req,res)=>{
    console.log();
    try {
        const job = await job_history.update({
            employee_id : req.body.employee_id,
            start_date : req.body.start_date,
            end_date : req.body.end_date,
            department_id : req.body.department_id
        },{ returning : true , where:{job_id : req.params.id}})
        return res.send(job)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req,res)=>{
    try {
        const job = await job_history.destroy({
            where:{job_id : req.params.id}
        })
        return res.send('delete '+job+' rows')
    } catch (error) {
        return res.status(404).send(error)
    }
}

const querySQL = async(req,res)=>{
    try {
        await sequelize.query('SELECT * from job_history where job_id = :jobId',
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