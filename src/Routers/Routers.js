const { Router } = require("express");
const router = Router();
const apiRoute = '/api';
const ModulosControllers = require("../Controllers/Modulos_controllers");


//Resource Route Modulos 

router.get(apiRoute + '/Modulos', ModulosControllers.getAll); // Ruta por donde enlazará el response y el require
router.post(apiRoute + '/Modulos', ModulosControllers.create);
router.put(apiRoute + '/Modulos', ModulosControllers.update);
router.delete(apiRoute + '/Modulos', ModulosControllers.delete);

module.exports = router;