import notFountError from "../errors/notFoundError.js";
import paymentsRepository, {
  PaymentInput,
} from "../repositories/payment-repository.js";

async function createPayment(payment: PaymentInput) {
  await paymentsRepository.registerPayment(payment);
}

async function getAllPayments() {
  const payments = await paymentsRepository.getAllPayments();
  if (!payments) {
    throw notFountError();
  }
  return payments;
}

async function getPaymentById(id:number) {
    const payment = await paymentsRepository.getPayment(id);
    if (!payment) {
      throw notFountError();
    }
    return payment;
  }

const paymentService = { createPayment, getAllPayments,getPaymentById };

export default paymentService;
