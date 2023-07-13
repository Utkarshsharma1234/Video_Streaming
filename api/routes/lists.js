const router = require("express").Router();
const List = require("../models/List")
const verifyToken = require("../verifyToken")

// Create a list

router.post("/", verifyToken, async(req,res)=>{
    if(req.user.isAdmin){
        const newList = new List(req.body);

        try{
            const savedList = await newList.save();
            res.status(201).json(savedList);
        }
        catch(err){
            res.status(500).json(err);
        }
    }

    else{
        res.status(403).json("You are not allowed to create the list")
    }
    
})

// Delete

router.delete("/:id", verifyToken, async(req,res)=>{
    if(req.user.isAdmin){

        try{
            await List.findByIdAndDelete(req.params.id);
            res.status(201).json("List Deleted!");
        }
        catch(err){
            res.status(500).json(err);
        }
    }

    else{
        res.status(403).json("You are not allowed to delete the list")
    }
    
})


// get the lists

router.get("/", verifyToken, async(req,res)=>{
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
    

        try{
            if(typeQuery){
                if(genreQuery){
                    list = await List.aggregate([
                        {$match : {type : typeQuery, genre:genreQuery}},
                        {$sample : {size : 10}}
                    ])
                }
                
                else{
                    list = await List.aggregate([
                        {$match : {type : typeQuery}},
                        {$sample : {size : 5}}
                    ]);
                }
            }
            else{
                list = await List.aggregate([{$sample : {size : 5}}]);
            }

            res.status(200).json(list);
        }
        catch(err){
            res.status(500).json(err);
        }
    
})

// get all lists for the admin

router.get("/admin", async(req,res)=>{
    try{
        const lists = await List.find();
        res.status(200).json(lists.reverse());
    }

    catch(err){
        res.status(500).json(err);
    }
})

// Update

router.put("/:id", verifyToken, async(req,res)=>{
    if(req.user.isAdmin){
        try{
            const updatedList = await List.findByIdAndUpdate(req.params.id,{$set : req.body}, {new : true});
            res.status(200).json(updatedList);
        }
        catch(err){
            res.status(500).json(err);
        }
    }

    else{
        res.status(403).json("You are not allowed to update the movie")
    }
    
})


module.exports = router;