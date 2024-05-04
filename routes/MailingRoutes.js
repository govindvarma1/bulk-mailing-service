import express from "express";
import { SendMails } from "../controllers/MailingController.js";
const router = express.Router();

// router.post("/", (req, res)=> {
//     res.send("under work");
// })

router.post("/send-mails", SendMails);

export default router

