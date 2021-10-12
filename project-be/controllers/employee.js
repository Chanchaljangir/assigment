const Employee = require("../models/employee");


module.exports = {
    async addNewEmployee(req, res) {
        let respObj = {
            IsSuccess: false,
            Message: "OK.",
            Data: null,
        };

        try {
            let result = await new Employee(req.body).save()

            respObj.IsSuccess = true;
            respObj.Message = "Susscefully added"
            res.status(200).json(respObj);

        } catch (err) {
            respObj.error = err;
            (respObj.message = err.message || "Error while processing db query"),
                res.status(500).json(respObj);
        }
    },
    async getAllEmployee(req, res) {
        let respObj = {
            IsSuccess: false,
            Message: "OK.",
            Data: null,
        };

        try {
            let result = await Employee.find()

            respObj.IsSuccess = true;
            respObj.Data = result
            respObj.Message = "Susscefully get all data"
            res.status(200).json(respObj);

        } catch (err) {
            respObj.error = err;
            (respObj.message = err.message || "Error while processing db query"),
                res.status(500).json(respObj);
        }
    },

    async getAllEligiableSupervisor(req, res) {
        let respObj = {
            IsSuccess: false,
            Message: "OK.",
            Data: null,
        };

        try {
            let result = await Employee.find({ _id: { $nin: [req.params.empId] } })

            respObj.IsSuccess = true;
            respObj.Data = result
            respObj.Message = "Succefully get all data"
            res.status(200).json(respObj);

        } catch (err) {
            respObj.error = err;
            (respObj.message = err.message || "Error while processing db query"),
                res.status(500).json(respObj);
        }
    },

    async getSpecificEmployee(req, res) {
        let respObj = {
            IsSuccess: false,
            Message: "OK.",
            Data: null,
        };

        try {
            let result = await Employee.find({ _id: req.params.empId })

            respObj.IsSuccess = true;
            respObj.Data = result
            respObj.Message = "Succefully get all data"
            res.status(200).json(respObj);

        } catch (err) {
            respObj.error = err;
            (respObj.message = err.message || "Error while processing db query"),
                res.status(500).json(respObj);
        }
    }
    
}

