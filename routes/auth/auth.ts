import { Router } from "express";

import { login } from "../../controllers/auth/auth";

const router = Router();

router.route('/login')
    .post(login);

export default router;