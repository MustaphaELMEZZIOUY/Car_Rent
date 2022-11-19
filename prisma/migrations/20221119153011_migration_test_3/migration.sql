/*
  Warnings:

  - Added the required column `test2` to the `domy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "domy" ADD COLUMN     "test2" TEXT NOT NULL;
