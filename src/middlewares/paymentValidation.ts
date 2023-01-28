import { paymentSchema } from "../schemas/paymentSchema.js";
import { Request, Response } from "express";

export default function (req: Request, res: Response, next: () => void) {
  const payment = req.body;
  const { error } = paymentSchema.validate(payment, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }else{
    payment.value = parseInt(payment.value)
    payment.bank_id = parseInt(payment.bank_id)
    payment.user_id = parseInt(payment.user_id)
    payment.employee_id = parseInt(payment.employee_id)
    payment.date = new Date(payment.date).toISOString()
  }
  next();
}
