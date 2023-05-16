const TaskModel = require("../models/TaskModel")

// Create

exports.createTask = (req, res)=>{
    let reqBody= req.body;
    reqBody.email= req.headers['email']

    TaskModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"Fail", data: err})
        }
        else {
            res.status(200).json({status:"Success", data: data})
        }
    })
}

exports.deleteTask= (req,res)=>{
    let id= req.params.id;
    let Query = {_id: id};
    TaskModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"Delete Fail", data: err})
        }
        else {
            res.status(200).json({status:"Success", data: data})
        }
    })

}

exports.updateTaskStatus= (req,res)=>{
    let id= req.params.id;
    let status= req.params.status;
    let Query = {_id:id};
    let reqBody= {status:status};

    TaskModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"Update Fail", data: err})
        }
        else {
            res.status(200).json({status:"Success", data: data})
        }
    })

}

exports.listTaskByStatus= (req,res)=>{
    let status= req.params.status;
    let email = req.headers['email'];

    TaskModel.aggregate([
        {$match:{status: status, email: email}},
        {$project:{
                _id:1,title:1,description:1, status:1,
                createDate:{
                    $dateToString:{
                        date:"$createDate",
                        format:"%d-%m-%Y"
                    }
                }
            }
        }
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"Query Fail", data: err})
        }
        else {
            res.status(200).json({status:"Success", data: data})
        }
    })
}


exports.taskStatusCount=(req,res)=>{
    let email = req.headers['email'];

    TaskModel.aggregate([
        {$match:{email: email}},
        {$group:{_id:"$status",sum:{$count:{}}}}
        ],
        (err,data)=>{
            if(err){
                res.status(400).json({status:"Status count Fail", data: err})
            }
            else {
                res.status(200).json({status:"Success", data: data})
            }
        }
    )


}