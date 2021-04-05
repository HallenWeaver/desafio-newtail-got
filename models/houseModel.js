import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const HouseSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
        required: 'House Name is Required'
    },
    foundationDate: {
        type: String,
        required: 'House Foundation Date is Required'
    },
    region: {
        type: String,
        required: 'House Region is Required'
    },
    currentLord: {
        name: {
            type: String,
            required: 'Lord Name is Required'
        },
        seasons: {
            type: [String]
        }
    }
});

export default HouseSchema;