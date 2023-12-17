/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Newletter` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Newletter_email_key" ON "Newletter"("email");
