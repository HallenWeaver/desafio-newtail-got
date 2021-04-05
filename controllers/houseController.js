import mongoose from 'mongoose';
import HouseSchema from './../models/houseModel';

const House = mongoose.model('House', HouseSchema);

//add new House to database
export function addNewHouse(req, res){
    let newHouse = new House(req.body);
    newHouse.save((err, house) => {
        if(err) { res.json(err); }
        res.json(house);
    })
}

//get all Houses from database; implements pagination
export function findHouseByQuery(req, res){
    if (!!req.body.query){
        House.findOne(req.body.query, (err, house) => {
            if(err) { res.json(err); }
            res.json(house);
        });
    } else {
        House.find({}, null, req.body.paginationOptions, (err, houses) => {
            if(err) { res.json(err); }
            res.json(houses);
        });
    }
}

// removes House by name or Id
export function deleteHouse(req, res){
    try {
        if (!req.body.query){
            throw "Search has no parameters, please provide at least one between id or house name";
        }
        House.findOneAndDelete(req.body.query, (err, house) => {
            if(err) { res.json(err); }
            res.json(house);
        });
    }
    catch(e){
        console.log(e);
    }
}