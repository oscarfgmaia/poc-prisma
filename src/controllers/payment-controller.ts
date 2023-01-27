import { Request, Response } from "express";
import { PaymentInput } from "../repositories/payment-repository.js";
import httpStatus from "http-status";
import paymentService from "../services/payment-service.js";

export async function registerPayment(req: Request, res: Response) {
  const payment = req.body as PaymentInput;
  try {
    await paymentService.createPayment(payment);
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function getPayments(req: Request, res: Response) {
  try {
    const payments = await paymentsRepository.getAllPayments();
    if (!payments) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    } else {
      return res.send(payments);
    }
  } catch (error) {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getPayment(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const payments = await paymentsRepository.getPayment(id);
    if (!payments) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    } else {
      return res.send(payments);
    }
  } catch (error) {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
export async function getTotal(req: Request, res: Response) {
  try {
    const total = await paymentsRepository.getTotal();
    res.send(total)
  } catch (error) {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function deletePayment(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await paymentsRepository.deletePayment(id);
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function updatePayment(req: Request, res: Response) {
  const payment = req.body as PaymentInput;
  const { id } = req.params;
  try {
    const paymentExists = await paymentsRepository.getPayment(id);
    if (!paymentExists) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    } else {
      await paymentsRepository.updatePayment(payment, id);
      res.sendStatus(httpStatus.OK);
    }
  } catch (error) {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
