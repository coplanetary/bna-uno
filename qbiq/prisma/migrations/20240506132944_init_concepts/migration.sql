-- CreateTable
CREATE TABLE "Form" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "retired" BOOLEAN NOT NULL DEFAULT false,
    "retiredBy" TEXT NOT NULL,
    "dateRetired" TIMESTAMP(3) NOT NULL,
    "retiredReason" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,
    "fieldId" TEXT,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormEncounter" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "formId" TEXT NOT NULL,
    "encounterId" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FormEncounter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormResource" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "formId" TEXT NOT NULL,
    "resourceId" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FormResource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormSubmission" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "formId" TEXT NOT NULL,
    "encounterId" TEXT NOT NULL,
    "submissionDate" TIMESTAMP(3) NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FormSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Field" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "fieldType" TEXT NOT NULL,
    "conceptId" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Field_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FieldAnswer" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "formSubmissionId" TEXT NOT NULL,
    "fieldId" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FieldAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FieldOption" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "fieldId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FieldOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Encounter" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "encounterTypeId" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "formId" TEXT NOT NULL,
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

    CONSTRAINT "Encounter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EncounterType" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EncounterType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Obs" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "conceptId" TEXT NOT NULL,
    "encounterId" TEXT NOT NULL,
    "obsDatetime" TIMESTAMP(3) NOT NULL,
    "valueDatetime" TIMESTAMP(3) NOT NULL,
    "valueNumeric" DOUBLE PRECISION NOT NULL,
    "valueText" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Obs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "conceptId" TEXT NOT NULL,
    "encounterId" TEXT NOT NULL,
    "orderDatetime" TIMESTAMP(3) NOT NULL,
    "instructions" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "asNeeded" BOOLEAN NOT NULL DEFAULT false,
    "prn" BOOLEAN NOT NULL DEFAULT false,
    "quantity" INTEGER NOT NULL,
    "units" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,
    "orderFrequencyId" TEXT,
    "orderRouteId" TEXT,
    "orderTypeId" TEXT,
    "orderUnitId" TEXT,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderFrequency" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderFrequency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderRoute" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderRoute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderType" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderUnit" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Concept" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dataType" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "isRetired" BOOLEAN NOT NULL DEFAULT false,
    "retiredBy" TEXT NOT NULL,
    "dateRetired" TIMESTAMP(3) NOT NULL,
    "retiredReason" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,
    "conceptClassId" TEXT,
    "conceptDatatypeId" TEXT,
    "conceptMapId" TEXT,
    "conceptSetId" TEXT,
    "conceptSourceId" TEXT,

    CONSTRAINT "Concept_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConceptAnswer" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "conceptId" TEXT NOT NULL,
    "answerConceptId" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConceptAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConceptClass" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConceptClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConceptDatatype" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConceptDatatype_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConceptMap" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConceptMap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConceptName" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "conceptId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConceptName_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConceptNumeric" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "conceptId" TEXT NOT NULL,
    "hiAbsolute" DOUBLE PRECISION NOT NULL,
    "hiCritical" DOUBLE PRECISION NOT NULL,
    "hiNormal" DOUBLE PRECISION NOT NULL,
    "lowAbsolute" DOUBLE PRECISION NOT NULL,
    "lowCritical" DOUBLE PRECISION NOT NULL,
    "lowNormal" DOUBLE PRECISION NOT NULL,
    "units" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConceptNumeric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConceptProposal" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "conceptId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConceptProposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConceptSet" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConceptSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConceptSource" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConceptSource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConceptWord" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "conceptId" TEXT NOT NULL,
    "word" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConceptWord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" TEXT NOT NULL,
    "lastChangedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Form_uuid_key" ON "Form"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "FormEncounter_uuid_key" ON "FormEncounter"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "FormResource_uuid_key" ON "FormResource"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "FormSubmission_uuid_key" ON "FormSubmission"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Field_uuid_key" ON "Field"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "FieldAnswer_uuid_key" ON "FieldAnswer"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "FieldOption_uuid_key" ON "FieldOption"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Encounter_uuid_key" ON "Encounter"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "EncounterType_uuid_key" ON "EncounterType"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Obs_uuid_key" ON "Obs"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Order_uuid_key" ON "Order"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "OrderFrequency_uuid_key" ON "OrderFrequency"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "OrderRoute_uuid_key" ON "OrderRoute"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "OrderType_uuid_key" ON "OrderType"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "OrderUnit_uuid_key" ON "OrderUnit"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Concept_uuid_key" ON "Concept"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ConceptAnswer_uuid_key" ON "ConceptAnswer"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ConceptClass_uuid_key" ON "ConceptClass"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ConceptDatatype_uuid_key" ON "ConceptDatatype"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ConceptMap_uuid_key" ON "ConceptMap"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ConceptName_uuid_key" ON "ConceptName"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ConceptNumeric_uuid_key" ON "ConceptNumeric"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ConceptProposal_uuid_key" ON "ConceptProposal"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ConceptSet_uuid_key" ON "ConceptSet"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ConceptSource_uuid_key" ON "ConceptSource"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ConceptWord_uuid_key" ON "ConceptWord"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Resource_uuid_key" ON "Resource"("uuid");

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormEncounter" ADD CONSTRAINT "FormEncounter_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormEncounter" ADD CONSTRAINT "FormEncounter_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "Encounter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormResource" ADD CONSTRAINT "FormResource_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormResource" ADD CONSTRAINT "FormResource_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormSubmission" ADD CONSTRAINT "FormSubmission_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormSubmission" ADD CONSTRAINT "FormSubmission_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "Encounter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Field" ADD CONSTRAINT "Field_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FieldAnswer" ADD CONSTRAINT "FieldAnswer_formSubmissionId_fkey" FOREIGN KEY ("formSubmissionId") REFERENCES "FormSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FieldAnswer" ADD CONSTRAINT "FieldAnswer_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FieldOption" ADD CONSTRAINT "FieldOption_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encounter" ADD CONSTRAINT "Encounter_encounterTypeId_fkey" FOREIGN KEY ("encounterTypeId") REFERENCES "EncounterType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encounter" ADD CONSTRAINT "Encounter_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encounter" ADD CONSTRAINT "Encounter_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encounter" ADD CONSTRAINT "Encounter_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encounter" ADD CONSTRAINT "Encounter_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obs" ADD CONSTRAINT "Obs_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obs" ADD CONSTRAINT "Obs_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "Encounter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "Encounter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_orderFrequencyId_fkey" FOREIGN KEY ("orderFrequencyId") REFERENCES "OrderFrequency"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_orderRouteId_fkey" FOREIGN KEY ("orderRouteId") REFERENCES "OrderRoute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_orderTypeId_fkey" FOREIGN KEY ("orderTypeId") REFERENCES "OrderType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_orderUnitId_fkey" FOREIGN KEY ("orderUnitId") REFERENCES "OrderUnit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Concept" ADD CONSTRAINT "Concept_conceptClassId_fkey" FOREIGN KEY ("conceptClassId") REFERENCES "ConceptClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Concept" ADD CONSTRAINT "Concept_conceptDatatypeId_fkey" FOREIGN KEY ("conceptDatatypeId") REFERENCES "ConceptDatatype"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Concept" ADD CONSTRAINT "Concept_conceptMapId_fkey" FOREIGN KEY ("conceptMapId") REFERENCES "ConceptMap"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Concept" ADD CONSTRAINT "Concept_conceptSetId_fkey" FOREIGN KEY ("conceptSetId") REFERENCES "ConceptSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Concept" ADD CONSTRAINT "Concept_conceptSourceId_fkey" FOREIGN KEY ("conceptSourceId") REFERENCES "ConceptSource"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConceptAnswer" ADD CONSTRAINT "ConceptAnswer_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConceptAnswer" ADD CONSTRAINT "ConceptAnswer_answerConceptId_fkey" FOREIGN KEY ("answerConceptId") REFERENCES "Concept"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConceptName" ADD CONSTRAINT "ConceptName_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConceptNumeric" ADD CONSTRAINT "ConceptNumeric_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConceptProposal" ADD CONSTRAINT "ConceptProposal_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConceptWord" ADD CONSTRAINT "ConceptWord_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
