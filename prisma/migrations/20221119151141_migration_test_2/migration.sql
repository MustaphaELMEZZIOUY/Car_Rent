/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE "contact_id_seq";
ALTER TABLE "Contact" ADD COLUMN     "address" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('contact_id_seq');
ALTER SEQUENCE "contact_id_seq" OWNED BY "Contact"."id";

-- CreateTable
CREATE TABLE "domy" (
    "id" INTEGER NOT NULL,
    "test" TEXT NOT NULL,

    CONSTRAINT "domy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contact_email_key" ON "Contact"("email");
