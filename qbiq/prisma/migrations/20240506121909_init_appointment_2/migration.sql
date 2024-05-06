/*
  Warnings:

  - A unique constraint covering the columns `[patientId,locationId,providerId]` on the table `appointment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "appointment_patientId_locationId_providerId_key" ON "appointment"("patientId", "locationId", "providerId");
