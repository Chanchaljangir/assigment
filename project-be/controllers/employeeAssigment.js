const EmployeeAssigne = require("../models/employeeAssigment");


module.exports = {
    async assignEmployee(req, res) {
        let respObj = {
            IsSuccess: false,
            Message: "OK.",
            Data: null,
        };

        try {
            let result = await new EmployeeAssigne(req.body).save()

            respObj.IsSuccess = true;
            respObj.Message = "Susscefully added"
            res.status(200).json(respObj);

        } catch (err) {
            respObj.error = err;
            (respObj.message = err.message || "Error while processing db query"),
                res.status(500).json(respObj);
        }
    }

}

