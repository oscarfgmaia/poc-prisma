import Joi from "joi";
import { PaymentInput } from "../repositories/payment-repository";

export const paymentSchema = Joi.object<PaymentInput>({
  value: Joi.number().required(),
  description: Joi.string().required(),
  date: Joi.date().default(() => new Date()),
  bank_id: Joi.number().required(),
  employee_id: Joi.number().required(),
  user_id: Joi.number().required(),
});
