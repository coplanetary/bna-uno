-- CreateTable
CREATE TABLE "appointment" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "appointmentTypeId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "startDatetime" TIMESTAMP(3) NOT NULL,
    "endDatetime" TIMESTAMP(3) NOT NULL,
    "voided" BOOLEAN NOT NULL DEFAULT false,
    "voidedBy" TEXT NOT NULL,
    "dateVoided" TIMESTAMP(3) NOT NULL,
    "voidReason" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appointment_type" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "appointment_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address1" TEXT NOT NULL,
    "address2" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "stateProvince" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "givenName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "familyName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "dead" BOOLEAN NOT NULL DEFAULT false,
    "deathDate" TIMESTAMP(3) NOT NULL,
    "causeOfDeath" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provider" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "voided" BOOLEAN NOT NULL DEFAULT false,
    "voidedBy" TEXT NOT NULL,
    "dateVoided" TIMESTAMP(3) NOT NULL,
    "voidReason" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "provider_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "appointment_uuid_key" ON "appointment"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "appointment_type_uuid_key" ON "appointment_type"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "location_uuid_key" ON "location"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "patient_uuid_key" ON "patient"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "provider_uuid_key" ON "provider"("uuid");

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_appointmentTypeId_fkey" FOREIGN KEY ("appointmentTypeId") REFERENCES "appointment_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
