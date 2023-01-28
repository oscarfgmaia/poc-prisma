import { Workday } from "@prisma/client";
import prisma from "../database/database.js";

export type WorkdayInput = Omit<Workday, "id">;

async function registerWorkedDay(workday: WorkdayInput) {
  try {
    await prisma.workday.create({ data: workday });
  } catch (error) {
    throw {
      name: "Database",
      message: "anything went wrong in connection with database",
    };
  }
}

const workdayRepository = {
  registerWorkedDay,
};
export default workdayRepository;
