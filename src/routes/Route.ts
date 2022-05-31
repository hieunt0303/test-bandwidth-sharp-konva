import { Router } from 'express';
import ZingController from '../controllers/zingController';
import { verifyToken } from '../middlewares/auth.mdw';
import apicache from 'apicache';
let cache = apicache.middleware;
class Routes {
    router = Router();
    zingController = new ZingController()
    constructor() {
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/top-100')
            .get(this.zingController.home);
        
    }
}

export default new Routes().router;