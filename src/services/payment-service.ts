import paymentsRepository, {
  PaymentInput,
} from "../repositories/payment-repository.js";

async function createPayment(payment: PaymentInput) {
  await paymentsRepository.registerPayment(payment);
}

async function getAllPayments() {
    const payments = await paymentsRepository.getAllPayments()
    if(!payments){
        throw 
    }
}

const paymentService = { createPayment, getAllPayments };

export default paymentService;
