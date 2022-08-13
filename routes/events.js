/*
    Event Routes
    /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");

const { isDate } = require("../helpers/isDate");

const { validarCampos } = require("../middlewares/validar-campos");

const { validarJWT } = require("../middlewares/validar-jwt");

const {
  getEventos,
  crearEvento,
  eliminarEvento,
  actualizarEvento,
} = require("../controllers/events");

const router = Router();

//Todas tienen que pasar por la validacion del JWT, todas las que van debajo esta instruccion deben pasar por JWT
//Si se quiere que una no pase por JWT tiene que colocarlo por encima de esta instruccion
router.use(validarJWT);

//Obtener eventos
router.get("/", getEventos);

//Crear un nuevo Evento
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalizacion es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

//Actualizar un nuevo Evento
router.put("/:id", actualizarEvento);

//Borrar un Evento
router.delete("/:id", eliminarEvento);

module.exports = router;
