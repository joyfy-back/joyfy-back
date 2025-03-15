/*
  Warnings:

  - You are about to drop the column `confirmationCode` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `expirationDate` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `isConfirmed` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "confirmationCode",
DROP COLUMN "expirationDate",
DROP COLUMN "isConfirmed";

-- CreateTable
CREATE TABLE "email_confirmations" (
    "id" TEXT NOT NULL,
    "confirmationCode" TEXT NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "isConfirmed" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,

    CONSTRAINT "email_confirmations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "email_confirmations_userId_key" ON "email_confirmations"("userId");

-- AddForeignKey
ALTER TABLE "email_confirmations" ADD CONSTRAINT "email_confirmations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
