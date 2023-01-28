import { Request, Response } from "express";
import httpStatus from "http-status";
import paymentService from "../services/payment-service.js";

export async function registerWorkedDay(req: Request, res: Response) {
  const workedDay = req.body;
  try {
    await workdayService.registerWorkedDay(workedDay);
    console.log('passou')
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    res.sendStatus(500);
  }
}
