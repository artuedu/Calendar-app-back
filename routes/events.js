const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');

const router = Router();

//Validacion de token en todas las rutas
router.use(validarJWT);

//Obtener eventos
router.get('/', getEventos);

//Crear un nuevo evento
router.post('/', [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').not().isEmpty(),
    check('start', 'Fecha de inicio no valida').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').not().isEmpty(),
    check('end', 'Fecha de finalización no valida').custom(isDate),
    validarCampos
], crearEvento);

//Actualizar evento
router.put('/:id', [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').not().isEmpty(),
    check('start', 'Fecha de inicio no valida').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').not().isEmpty(),
    check('end', 'Fecha de finalización no valida').custom(isDate),
    validarCampos
], actualizarEvento);

//Borrar evento
router.delete('/:id', eliminarEvento);

module.exports = router;