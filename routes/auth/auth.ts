import { Router } from "express";

import { signin, signout } from "../../controllers/auth/auth";

const router = Router();

router.route('/signin')
    .post(signin);

router.route('/signout')
    .get(signout)

export default router;