/*
  Warnings:

  - You are about to drop the column `value` on the `workdays` table. All the data in the column will be lost.
  - Added the required column `value_day` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "value_day" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "workdays" DROP COLUMN "value";
