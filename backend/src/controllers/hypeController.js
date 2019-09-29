const Hype = require('../model/hype')

module.exports ={
    async index(req,res){
        const hype = await Hype.find()

        return res.json(hype)
    },

    async store(req,res){

        const {title, description, url} = req.body

        const hype = await Hype.create({
            title,
            description,
            url,
        })

        return res.json(hype)
    }
}