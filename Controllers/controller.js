const {
    GetAll,
    GetOne,
    Create,
    GetAllMessage,
    GetMessage
} = require('../Models/model');


exports.GetAll = (req, res) => {
    console.log('Method '+req.method+ ' Url '+req.url)
    GetAll(req, res).then(result => {
        res.json(result);
    })
}
exports.GetOne = (req, res) => {
    let ID = req.params.id
    console.log('Method '+req.method+ ' Url '+req.url)
    GetOne(ID).then(result => {
        if (result==-1) {
            res.json({error:'not valid'})
        }
        else{
            res.json(result)
        }
        
    })
}
exports.Create=(req, res) => {
    let ID = req.params.id
    let data=req.body
    console.log('Method '+req.method+ ' Url '+req.url)
    Create(data,req.body.id).then(result=>{
        if (result==-1) {
            res.json({error:'Not valid'})
        }
        else{
            res.json({message:'Done'})
        }
    })
}
exports.GetAllMessage=(req, res) => {
    console.log('Method '+req.method+ ' Url '+req.url)
    GetAllMessage().then(result=>{
        res.send(result)
    })
}
exports.GetMessage=(req,res)=>{
    let ID = req.params.id
    console.log('Method '+req.method+ ' Url '+req.url)
    GetMessage(ID).then(result=>{
        if(result==-1){
            res.json({error:'Not valid'})
        }
        else{
            res.send(result)
        }
    })
}
