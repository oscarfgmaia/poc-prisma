import { Payment } from "@prisma/client";
import prisma from "../database/database.js";

export type PaymentInput = Omit<Payment, "id">;

async function registerPayment(payment: PaymentInput) {
  try {
    await prisma.payment.create({
      data: payment,
    });
  } catch (error) {
    throw {
      name: "Database",
      message: "anything went wrong in connection with database",
    };
  }
}

async function getAllPayments() {
  try {
    return await prisma.payment.findMany();
  } catch (error) {
    throw {
      name: "Database",
      message: "anything went wrong in connection with database",
    };
  }
}

export async function getPayment(id: number) {
  try {
    return await prisma.payment.findFirst({ where: { id } });
  } catch (error) {
    throw {
      name: "Database",
      message: "anything went wrong in connection with database",
    };
  }
}
export async function getTotal() {
  try {
    const totalPaid = await prisma.payment.groupBy({
      by: ["value"],
      _sum: { value: true },
    });
  } catch (error) {
    throw {
      name: "Database",
      message: "anything went wrong in connection with database",
    };
  }
}

async function deletePayment(id: string) {
  try {
    await prisma.payment.delete({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    throw {
      name: "Database",
      message: "anything went wrong in connection with database",
    };
  }
}

//TODO FIX UPDATE
async function updatePayment(payment: PaymentInput, id: string) {
  try {
    const paymentUpdate = await prisma.payment.update({
      where: { id: parseInt(id) },
      data: payment,
    });
    return paymentUpdate;
  } catch (error) {
    throw {
      name: "Database",
      message: "anything went wrong in connection with database",
    };
  }
}

const paymentsRepository = {
  registerPayment,
  getAllPayments,
  deletePayment,
  updatePayment,
  getPayment,
  getTotal,
};

export default paymentsRepository;
