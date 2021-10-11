"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId, ref: "Job"
    },
    name: String,
    email: String,
    mobile: String,
    experience: String,
    isDeleted: {
        type: Boolean,
        default: false,
    },
    toShow: {
        type: Boolean,
        default: false,
    },
    registedOn: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamp: true,
    autoIndex: true,
    versionKey: false,
});

let Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
