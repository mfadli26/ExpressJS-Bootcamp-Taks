import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
const router = Router()


router.get('/',indexCtrl.DprtCtrl.findAll)
router.get('/:id',indexCtrl.DprtCtrl.findOne)
router.post('/',indexCtrl.DprtCtrl.create)
router.put('/:id',indexCtrl.DprtCtrl.update)
router.delete('/:id',indexCtrl.DprtCtrl.deleted)
router.get ('/sql/:id',indexCtrl.DprtCtrl.querySQL)
export default router