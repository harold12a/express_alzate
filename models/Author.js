import { Schema, model, Types } from 'mongoose'


let collection = 'authors'

let schema = new Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: false },
    city: { type: String, required: true },
    country: { type: String, required: true },
    date: { type: Date }, // por default es false si no se especifica
    photo: { type: String, required: true },
    user_id: {
        type: Types.ObjectId, // el object id es dato especial de mongo es un string con propiedades de objetos
        ref: 'users',
        required: true
    },
    active: { type: Boolean, default: false }
}, { timestamps: true })

let Author = model(collection, schema)

export default Author

