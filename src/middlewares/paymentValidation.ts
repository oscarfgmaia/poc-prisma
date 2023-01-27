import { paymentSchema } from "../schemas/paymentSchema.js";
import { Request, Response } from "express";
import { PaymentInput } from "../repositories/payment-repository.js";
export default function (req: Request, res: Response, next: () => void) {
  const payment = req.body as PaymentInput;
  const { error } = paymentSchema.validate(payment, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }else{
  }
  next();
}
