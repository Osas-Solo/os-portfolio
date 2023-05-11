import express, {Request, Response, Router} from "express";
const router : Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('respond with a resource');
});

module.exports = router;