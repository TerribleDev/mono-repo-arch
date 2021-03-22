import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import { IWorkerMessage } from "domain-worker/IWorkerMessage";

const router = Router();
const { OK } = StatusCodes;

router.get('/all', async (req: Request, res: Response<Array<IWorkerMessage<any>>>) => {
    console.log('hit')
    return res.status(OK).json([{ 
        name: "yo",
        payload: {
            type: "message",
            value: {
                data: true
            }
        }
    }]);
});

export default router;
