const router = require('express').Router();
const controller = require('./controller');

router
  .route('/')
  .get(controller.get)
  .post(controller.post);

router //: means whatever is after : then turns into an {} object in req.params. property id  in req.params with value what is passed after the :
  .route('/:id') // passes an id property to req.params
  .put(controller.update) //looking for controller.update
  .delete(controller.delete);

module.exports = router;