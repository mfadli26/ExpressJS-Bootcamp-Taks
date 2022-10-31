import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
const router = Router()


router.get('/',indexCtrl.LctCtrl.findAll)
router.get('/:id',indexCtrl.LctCtrl.findOne)
router.post('/',indexCtrl.LctCtrl.create)
router.put('/:id',indexCtrl.LctCtrl.update)
router.delete('/:id',indexCtrl.LctCtrl.deleted)
router.get ('/sql/:id',indexCtrl.LctCtrl.querySQL)
export default router