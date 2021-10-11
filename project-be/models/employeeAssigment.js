"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeAssigmentSchema = new Schema({
    empId: {
        type: mongoose.Schema.Types.ObjectId, ref: "Employee"
    },
    empAssignToId: {
        type: mongoose.Schema.Types.ObjectId, ref: "Employee"
    },
    assignOn: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamp: true,
    autoIndex: true,
    versionKey: false,
});

let employeeAssigment = mongoose.model("employeeAssigment", employeeAssigmentSchema);

module.exports = employeeAssigment;
