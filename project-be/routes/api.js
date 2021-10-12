let express         =   require('express');
let router          =   express.Router();
let _employee = require("../controllers/employee")
let _employeeAssg = require("../controllers/employeeAssigment")

router.post("/employee", _employee.addNewEmployee);
router.get("/employees", _employee.getAllEmployee);
router.get("/eligiableSupervisoryees/:empId", _employee.getAllEligiableSupervisor);

router.post("/assignEmployee", _employeeAssg.assignEmployee);

module.exports = router;