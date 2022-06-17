const ModulosControllers = {};
const courses = require("../courses.json")


//Métodos que recibirán el Require y el Response

ModulosControllers.getAll = (req, res) => {
    res.json(courses)
}

ModulosControllers.create = (req, res) => {
    const id = courses.length + 1;
    const newCourse = req.body;
    newCourse["id"] = id;
    courses.push(newCourse);
    res.json(newCourse);

}

ModulosControllers.update = (req, res) => {

    const id = 3;
    const found = courses.find(validacion =>
        validacion.id == id);    // Aquí sería .value de la consulta de un front


    let update = req.body;       // cogemos el req 

    if (update.hasOwnProperty("description")) {
        found.description = update.description // convertimos el req cogiendo solo el valor del mismo
    } if (update.hasOwnProperty("profesor")) {
        found.profesor = update.profesor
    } if (update.hasOwnProperty("Horario")) {
        found.Horario = update.Horario
    }

    res.json(courses);
}


ModulosControllers.delete = (req, res) => {
    res.json({ "Modulo de materias": "Logica de programación one" })
}

module.exports = ModulosControllers;