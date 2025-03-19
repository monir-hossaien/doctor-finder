import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
    {
        patientID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        doctorID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
            required: true
        },
        day: {
            type: String,
            required: true
        },
        timeSlot: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["Pending", "Confirmed", "Canceled"],
            default: "Pending"
        },
    },{
        timestamps: true,
        versionKey: false,
    }
);

const Appointment = mongoose.model("appointment", dataSchema);

export default Appointment;
