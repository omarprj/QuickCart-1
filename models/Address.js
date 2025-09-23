import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    userId: {type: String, required:true },
    fullName: { type:string, required: true },
    phoneNumber: { type: String, required: true},
    pincode: { type:Number, required: true},
    area: {type: String, required: true },
    city: { type: string, required: true },
    state: { type: String, required: true },
})

const Address = mongoose.models.address || mongoose.model('address', addressSchema)

export default Address