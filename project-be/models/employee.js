"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    name: String,
    email: String,
    designation: String,
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
