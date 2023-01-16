import { Router } from 'express';

import {
    postLineToken
} from '../../controllers/lineToken/lineToken';

const router = Router();

router.route('/lineToken')
    .post(postLineToken)

export default router;