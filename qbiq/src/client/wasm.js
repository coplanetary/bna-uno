
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.13.0
 * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
 */
Prisma.prismaVersion = {
  client: "5.13.0",
  engine: "b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AppointmentScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  appointmentTypeId: 'appointmentTypeId',
  patientId: 'patientId',
  locationId: 'locationId',
  providerId: 'providerId',
  startDatetime: 'startDatetime',
  endDatetime: 'endDatetime',
  voided: 'voided',
  voidedBy: 'voidedBy',
  dateVoided: 'dateVoided',
  voidReason: 'voidReason',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.AppointmentTypeScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  duration: 'duration',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.LocationScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  address1: 'address1',
  address2: 'address2',
  city: 'city',
  stateProvince: 'stateProvince',
  country: 'country',
  postalCode: 'postalCode',
  latitude: 'latitude',
  longitude: 'longitude',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.PatientScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  givenName: 'givenName',
  middleName: 'middleName',
  familyName: 'familyName',
  gender: 'gender',
  birthdate: 'birthdate',
  dead: 'dead',
  deathDate: 'deathDate',
  causeOfDeath: 'causeOfDeath',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ProviderScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  identifier: 'identifier',
  description: 'description',
  voided: 'voided',
  voidedBy: 'voidedBy',
  dateVoided: 'dateVoided',
  voidReason: 'voidReason',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.FormScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  version: 'version',
  retired: 'retired',
  retiredBy: 'retiredBy',
  dateRetired: 'dateRetired',
  retiredReason: 'retiredReason',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate',
  fieldId: 'fieldId'
};

exports.Prisma.FormEncounterScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  formId: 'formId',
  encounterId: 'encounterId',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.FormResourceScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  formId: 'formId',
  resourceId: 'resourceId',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.FormSubmissionScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  formId: 'formId',
  encounterId: 'encounterId',
  submissionDate: 'submissionDate',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.FieldScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  fieldType: 'fieldType',
  conceptId: 'conceptId',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.FieldAnswerScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  formSubmissionId: 'formSubmissionId',
  fieldId: 'fieldId',
  value: 'value',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.FieldOptionScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  fieldId: 'fieldId',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.EncounterScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  encounterTypeId: 'encounterTypeId',
  patientId: 'patientId',
  locationId: 'locationId',
  formId: 'formId',
  providerId: 'providerId',
  startDatetime: 'startDatetime',
  endDatetime: 'endDatetime',
  voided: 'voided',
  voidedBy: 'voidedBy',
  dateVoided: 'dateVoided',
  voidReason: 'voidReason',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.EncounterTypeScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ObsScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  conceptId: 'conceptId',
  encounterId: 'encounterId',
  obsDatetime: 'obsDatetime',
  valueDatetime: 'valueDatetime',
  valueNumeric: 'valueNumeric',
  valueText: 'valueText',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  conceptId: 'conceptId',
  encounterId: 'encounterId',
  orderDatetime: 'orderDatetime',
  instructions: 'instructions',
  dosage: 'dosage',
  route: 'route',
  frequency: 'frequency',
  asNeeded: 'asNeeded',
  prn: 'prn',
  quantity: 'quantity',
  units: 'units',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate',
  orderFrequencyId: 'orderFrequencyId',
  orderRouteId: 'orderRouteId',
  orderTypeId: 'orderTypeId',
  orderUnitId: 'orderUnitId'
};

exports.Prisma.OrderFrequencyScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.OrderRouteScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.OrderTypeScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.OrderUnitScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  dataType: 'dataType',
  class: 'class',
  isRetired: 'isRetired',
  retiredBy: 'retiredBy',
  dateRetired: 'dateRetired',
  retiredReason: 'retiredReason',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate',
  conceptClassId: 'conceptClassId',
  conceptDatatypeId: 'conceptDatatypeId',
  conceptMapId: 'conceptMapId',
  conceptSetId: 'conceptSetId',
  conceptSourceId: 'conceptSourceId'
};

exports.Prisma.ConceptAnswerScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  conceptId: 'conceptId',
  answerConceptId: 'answerConceptId',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptClassScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptDatatypeScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptMapScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptNameScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  conceptId: 'conceptId',
  name: 'name',
  locale: 'locale',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptNumericScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  conceptId: 'conceptId',
  hiAbsolute: 'hiAbsolute',
  hiCritical: 'hiCritical',
  hiNormal: 'hiNormal',
  lowAbsolute: 'lowAbsolute',
  lowCritical: 'lowCritical',
  lowNormal: 'lowNormal',
  units: 'units',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptProposalScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  conceptId: 'conceptId',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptSetScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptSourceScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ConceptWordScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  conceptId: 'conceptId',
  word: 'word',
  locale: 'locale',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.ResourceScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  creator: 'creator',
  dateCreated: 'dateCreated',
  lastChangedBy: 'lastChangedBy',
  lastChangedDate: 'lastChangedDate'
};

exports.Prisma.BlogPostScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  context: 'context',
  authorId: 'authorId',
  spaceTimeCoordinatesId: 'spaceTimeCoordinatesId'
};

exports.Prisma.BlogPostTagScalarFieldEnum = {
  id: 'id',
  name: 'name',
  descriptor: 'descriptor'
};

exports.Prisma.BlogPostTagArrowScalarFieldEnum = {
  id: 'id',
  postId: 'postId',
  tagId: 'tagId'
};

exports.Prisma.BlogPostAuthorScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.SpaceTimeCoordinatesScalarFieldEnum = {
  id: 'id',
  latitude: 'latitude',
  longitude: 'longitude',
  startTime: 'startTime',
  pauseTime: 'pauseTime',
  stopTime: 'stopTime',
  timezone: 'timezone',
  blogPostId: 'blogPostId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  Appointment: 'Appointment',
  AppointmentType: 'AppointmentType',
  Location: 'Location',
  Patient: 'Patient',
  Provider: 'Provider',
  Form: 'Form',
  FormEncounter: 'FormEncounter',
  FormResource: 'FormResource',
  FormSubmission: 'FormSubmission',
  Field: 'Field',
  FieldAnswer: 'FieldAnswer',
  FieldOption: 'FieldOption',
  Encounter: 'Encounter',
  EncounterType: 'EncounterType',
  Obs: 'Obs',
  Order: 'Order',
  OrderFrequency: 'OrderFrequency',
  OrderRoute: 'OrderRoute',
  OrderType: 'OrderType',
  OrderUnit: 'OrderUnit',
  Concept: 'Concept',
  ConceptAnswer: 'ConceptAnswer',
  ConceptClass: 'ConceptClass',
  ConceptDatatype: 'ConceptDatatype',
  ConceptMap: 'ConceptMap',
  ConceptName: 'ConceptName',
  ConceptNumeric: 'ConceptNumeric',
  ConceptProposal: 'ConceptProposal',
  ConceptSet: 'ConceptSet',
  ConceptSource: 'ConceptSource',
  ConceptWord: 'ConceptWord',
  Resource: 'Resource',
  BlogPost: 'BlogPost',
  BlogPostTag: 'BlogPostTag',
  BlogPostTagArrow: 'BlogPostTagArrow',
  BlogPostAuthor: 'BlogPostAuthor',
  SpaceTimeCoordinates: 'SpaceTimeCoordinates'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\bna\\bna-uno\\qbiq\\src\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../prisma/.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.13.0",
  "engineVersion": "b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider      = \"prisma-client-js\"\n  previewFeatures = [\"driverAdapters\"]\n  output        = \"../src/client\"\n}\n\ndatasource db {\n  provider  = \"postgresql\"\n  url       = env(\"DATABASE_URL\")\n  directUrl = env(\"DIRECT_URL\")\n}\n\ngenerator dbml {\n  provider = \"prisma-dbml-generator\"\n}\n\ngenerator docs {\n  provider = \"node node_modules/prisma-docs-generator\"\n  output   = \"../../docs\"\n}\n\nmodel Appointment {\n  id   String @id @default(cuid())\n  uuid String @unique\n\n  appointmentTypeId String\n  appointmentType   AppointmentType @relation(fields: [appointmentTypeId], references: [id])\n\n  patientId String\n  patient   Patient @relation(fields: [patientId], references: [id])\n\n  locationId String\n  location   Location @relation(fields: [locationId], references: [id])\n\n  providerId String\n  provider   Provider @relation(fields: [providerId], references: [id])\n\n  startDatetime DateTime\n  endDatetime   DateTime\n\n  voided   Boolean @default(false)\n  voidedBy String\n\n  dateVoided DateTime\n  voidReason String\n\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n\n  @@unique([patientId, locationId, providerId])\n  @@map(\"appointment\")\n}\n\nmodel AppointmentType {\n  id              String        @id @default(cuid())\n  uuid            String        @unique\n  name            String\n  description     String\n  duration        Int\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n  appointmentList Appointment[]\n\n  @@map(\"appointment_type\")\n}\n\nmodel Location {\n  id              String        @id @default(cuid())\n  uuid            String        @unique\n  name            String\n  description     String\n  address1        String\n  address2        String\n  city            String\n  stateProvince   String\n  country         String\n  postalCode      String\n  latitude        Float\n  longitude       Float\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n  appointmentList Appointment[]\n  encounterList   Encounter[]\n\n  @@map(\"location\")\n}\n\nmodel Patient {\n  id              String        @id @default(cuid())\n  uuid            String        @unique\n  givenName       String\n  middleName      String\n  familyName      String\n  gender          String\n  birthdate       DateTime\n  dead            Boolean       @default(false)\n  deathDate       DateTime\n  causeOfDeath    String\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n  appointmentList Appointment[]\n  encounterList   Encounter[]\n\n  @@map(\"patient\")\n}\n\nmodel Provider {\n  id              String        @id @default(cuid())\n  uuid            String        @unique\n  name            String\n  identifier      String\n  description     String\n  voided          Boolean       @default(false)\n  voidedBy        String\n  dateVoided      DateTime\n  voidReason      String\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n  appointmentList Appointment[]\n  encounterList   Encounter[]\n\n  @@map(\"provider\")\n}\n\nmodel Form {\n  id                 String           @id @default(cuid())\n  uuid               String           @unique\n  name               String\n  description        String\n  version            String\n  retired            Boolean          @default(false)\n  retiredBy          String\n  dateRetired        DateTime\n  retiredReason      String\n  creator            String\n  dateCreated        DateTime\n  lastChangedBy      String\n  lastChangedDate    DateTime\n  formEncounterList  FormEncounter[]\n  formResourceList   FormResource[]\n  formSubmissionList FormSubmission[]\n  dield              Field?           @relation(fields: [fieldId], references: [id])\n  fieldId            String?\n  encounterList      Encounter[]\n\n  @@map(\"form\")\n}\n\nmodel FormEncounter {\n  id              String    @id @default(cuid())\n  uuid            String    @unique\n  formId          String\n  form            Form      @relation(fields: [formId], references: [id])\n  encounterId     String\n  encounter       Encounter @relation(fields: [encounterId], references: [id])\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n\n  @@map(\"form_encounter\")\n}\n\nmodel FormResource {\n  id              String   @id @default(cuid())\n  uuid            String   @unique\n  formId          String\n  form            Form     @relation(fields: [formId], references: [id])\n  resourceId      String\n  resource        Resource @relation(fields: [resourceId], references: [id])\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n\n  @@map(\"form_resource\")\n}\n\nmodel FormSubmission {\n  id              String        @id @default(cuid())\n  uuid            String        @unique\n  formId          String\n  form            Form          @relation(fields: [formId], references: [id])\n  encounterId     String\n  encounter       Encounter     @relation(fields: [encounterId], references: [id])\n  submissionDate  DateTime\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n  fieldAnswerList FieldAnswer[]\n\n  @@map(\"form_submission\")\n}\n\nmodel Field {\n  id              String        @id @default(cuid())\n  uuid            String        @unique\n  name            String\n  description     String\n  fieldType       String\n  conceptId       String\n  concept         Concept       @relation(fields: [conceptId], references: [id])\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n  formList        Form[]\n  fieldAnswerList FieldAnswer[]\n  fieldOptionList FieldOption[]\n\n  @@map(\"field\")\n}\n\nmodel FieldAnswer {\n  id               String         @id @default(cuid())\n  uuid             String         @unique\n  formSubmissionId String\n  formSubmission   FormSubmission @relation(fields: [formSubmissionId], references: [id])\n  fieldId          String\n  field            Field          @relation(fields: [fieldId], references: [id])\n  value            String\n  creator          String\n  dateCreated      DateTime\n  lastChangedBy    String\n  lastChangedDate  DateTime\n\n  @@map(\"field_answer\")\n}\n\nmodel FieldOption {\n  id              String   @id @default(cuid())\n  uuid            String   @unique\n  fieldId         String\n  field           Field    @relation(fields: [fieldId], references: [id])\n  name            String\n  description     String\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n\n  @@map(\"field_option\")\n}\n\nmodel Encounter {\n  id                 String           @id @default(cuid())\n  uuid               String           @unique\n  encounterType      EncounterType    @relation(fields: [encounterTypeId], references: [id])\n  encounterTypeId    String\n  patientId          String\n  patient            Patient          @relation(fields: [patientId], references: [id])\n  locationId         String\n  location           Location         @relation(fields: [locationId], references: [id])\n  formId             String\n  form               Form             @relation(fields: [formId], references: [id])\n  providerId         String\n  provider           Provider         @relation(fields: [providerId], references: [id])\n  startDatetime      DateTime\n  endDatetime        DateTime\n  voided             Boolean          @default(false)\n  voidedBy           String\n  dateVoided         DateTime\n  voidReason         String\n  creator            String\n  dateCreated        DateTime\n  lastChangedBy      String\n  lastChangedDate    DateTime\n  formEncounterList  FormEncounter[]\n  formSubmissionList FormSubmission[]\n  obsList            Obs[]\n  orderList          Order[]\n\n  @@map(\"encounter\")\n}\n\nmodel EncounterType {\n  id              String      @id @default(cuid())\n  uuid            String      @unique\n  name            String\n  description     String\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n  encounterList   Encounter[]\n\n  @@map(\"encounter_type\")\n}\n\nmodel Obs {\n  id              String    @id @default(cuid())\n  uuid            String    @unique\n  conceptId       String\n  concept         Concept   @relation(fields: [conceptId], references: [id])\n  encounterId     String\n  encounter       Encounter @relation(fields: [encounterId], references: [id])\n  obsDatetime     DateTime\n  valueDatetime   DateTime\n  valueNumeric    Float\n  valueText       String\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n\n  @@map(\"obs\")\n}\n\nmodel Order {\n  id               String          @id @default(cuid())\n  uuid             String          @unique\n  conceptId        String\n  concept          Concept         @relation(fields: [conceptId], references: [id])\n  encounterId      String\n  encounter        Encounter       @relation(fields: [encounterId], references: [id])\n  orderDatetime    DateTime\n  instructions     String\n  dosage           String\n  route            String\n  frequency        String\n  asNeeded         Boolean         @default(false)\n  prn              Boolean         @default(false)\n  quantity         Int\n  units            String\n  creator          String\n  dateCreated      DateTime\n  lastChangedBy    String\n  lastChangedDate  DateTime\n  OrderFrequency   OrderFrequency? @relation(fields: [orderFrequencyId], references: [id])\n  orderFrequencyId String?\n  OrderRoute       OrderRoute?     @relation(fields: [orderRouteId], references: [id])\n  orderRouteId     String?\n  OrderType        OrderType?      @relation(fields: [orderTypeId], references: [id])\n  orderTypeId      String?\n  OrderUnit        OrderUnit?      @relation(fields: [orderUnitId], references: [id])\n  orderUnitId      String?\n\n  @@map(\"order\")\n}\n\nmodel OrderFrequency {\n  id              String   @id @default(cuid())\n  uuid            String   @unique\n  name            String\n  description     String\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n  orderList       Order[]\n\n  @@map(\"order_frequency\")\n}\n\nmodel OrderRoute {\n  id              String   @id @default(cuid())\n  uuid            String   @unique\n  name            String\n  description     String\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n  orderList       Order[]\n\n  @@map(\"order_route\")\n}\n\nmodel OrderType {\n  id              String   @id @default(cuid())\n  uuid            String   @unique\n  name            String\n  description     String\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n  orderList       Order[]\n\n  @@map(\"order_type\")\n}\n\nmodel OrderUnit {\n  id              String   @id @default(cuid())\n  uuid            String   @unique\n  name            String\n  description     String\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n  orderList       Order[]\n\n  @@map(\"order_unit\")\n}\n\nmodel Concept {\n  id                  String            @id @default(cuid())\n  uuid                String            @unique\n  name                String\n  description         String\n  dataType            String\n  class               String\n  isRetired           Boolean           @default(false)\n  retiredBy           String\n  dateRetired         DateTime\n  retiredReason       String\n  creator             String\n  dateCreated         DateTime\n  lastChangedBy       String\n  lastChangedDate     DateTime\n  metaList            ConceptAnswer[]   @relation(\"meta_concept\")\n  answerList          ConceptAnswer[]   @relation(\"answer_concept\")\n  fieldList           Field[]\n  obsList             Obs[]\n  orderList           Order[]\n  ConceptClass        ConceptClass?     @relation(fields: [conceptClassId], references: [id])\n  conceptClassId      String?\n  ConceptDatatype     ConceptDatatype?  @relation(fields: [conceptDatatypeId], references: [id])\n  conceptDatatypeId   String?\n  conceptMap          ConceptMap?       @relation(fields: [conceptMapId], references: [id])\n  conceptMapId        String?\n  conceptNameList     ConceptName[]\n  conceptNumericList  ConceptNumeric[]\n  conceptProposalList ConceptProposal[]\n  conceptSet          ConceptSet?       @relation(fields: [conceptSetId], references: [id])\n  conceptSetId        String?\n  conceptSource       ConceptSource?    @relation(fields: [conceptSourceId], references: [id])\n  conceptSourceId     String?\n  conceptWordList     ConceptWord[]\n\n  @@map(\"concept\")\n}\n\nmodel ConceptAnswer {\n  id              String   @id @default(cuid())\n  uuid            String   @unique\n  conceptId       String\n  concept         Concept  @relation(name: \"meta_concept\", fields: [conceptId], references: [id])\n  answerConceptId String\n  answerConcept   Concept  @relation(name: \"answer_concept\", fields: [answerConceptId], references: [id])\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n\n  @@map(\"concept_answer\")\n}\n\nmodel ConceptClass {\n  id              String    @id @default(cuid())\n  uuid            String    @unique\n  name            String\n  description     String\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n  conceptList     Concept[]\n\n  @@map(\"concept_class\")\n}\n\nmodel ConceptDatatype {\n  id              String    @id @default(cuid())\n  uuid            String    @unique\n  name            String\n  description     String\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n  conceptList     Concept[]\n\n  @@map(\"concept_data_type\")\n}\n\nmodel ConceptMap {\n  id              String    @id @default(cuid())\n  uuid            String    @unique\n  name            String\n  description     String\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n  conceptList     Concept[]\n\n  @@map(\"concept_map\")\n}\n\nmodel ConceptName {\n  id              String   @id @default(cuid())\n  uuid            String   @unique\n  conceptId       String\n  concept         Concept  @relation(fields: [conceptId], references: [id])\n  name            String\n  locale          String\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n\n  @@map(\"concept_name\")\n}\n\nmodel ConceptNumeric {\n  id              String   @id @default(cuid())\n  uuid            String   @unique\n  conceptId       String\n  concept         Concept  @relation(fields: [conceptId], references: [id])\n  hiAbsolute      Float\n  hiCritical      Float\n  hiNormal        Float\n  lowAbsolute     Float\n  lowCritical     Float\n  lowNormal       Float\n  units           String\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n\n  @@map(\"concept_numeric\")\n}\n\nmodel ConceptProposal {\n  id              String   @id @default(cuid())\n  uuid            String   @unique\n  conceptId       String\n  concept         Concept  @relation(fields: [conceptId], references: [id])\n  name            String\n  description     String\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n\n  @@map(\"concept_proposal\")\n}\n\nmodel ConceptSet {\n  id              String    @id @default(cuid())\n  uuid            String    @unique\n  name            String\n  description     String\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n  conceptList     Concept[]\n\n  @@map(\"concept_set\")\n}\n\nmodel ConceptSource {\n  id              String    @id @default(cuid())\n  uuid            String    @unique\n  name            String\n  description     String\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n  conceptList     Concept[]\n\n  @@map(\"concept_source\")\n}\n\nmodel ConceptWord {\n  id              String   @id @default(cuid())\n  uuid            String   @unique\n  conceptId       String\n  concept         Concept  @relation(fields: [conceptId], references: [id])\n  word            String\n  locale          String\n  creator         String\n  dateCreated     DateTime\n  lastChangedBy   String\n  lastChangedDate DateTime\n\n  @@map(\"concept_word\")\n}\n\nmodel Resource {\n  id               String         @id @default(cuid())\n  uuid             String         @unique\n  name             String\n  description      String\n  creator          String\n  dateCreated      DateTime\n  lastChangedBy    String\n  lastChangedDate  DateTime\n  formResourceList FormResource[]\n\n  @@map(\"resource\")\n}\n\nmodel BlogPost {\n  id String @id @default(cuid())\n\n  title   String\n  content String\n  context Json\n\n  authorId String\n  author   BlogPostAuthor @relation(fields: [authorId], references: [id])\n\n  spaceTimeCoordinatesId String               @unique\n  spaceTimeCoordinates   SpaceTimeCoordinates @relation(fields: [spaceTimeCoordinatesId], references: [id])\n\n  tagArrowList BlogPostTagArrow[]\n\n  @@map(\"blog_post\")\n}\n\nmodel BlogPostTag {\n  id         String  @id @default(cuid())\n  name       String\n  descriptor String?\n\n  postArrowList BlogPostTagArrow[]\n\n  @@map(\"blog_post_tag\")\n}\n\nmodel BlogPostTagArrow {\n  id String @id @default(cuid())\n\n  postId String\n  post   BlogPost @relation(fields: [postId], references: [id])\n\n  tagId String\n  tag   BlogPostTag @relation(fields: [tagId], references: [id])\n\n  @@unique([postId, tagId])\n  @@map(\"blog_post_tag_arrow\")\n}\n\nmodel BlogPostAuthor {\n  id           String     @id @default(cuid())\n  name         String\n  blogPostList BlogPost[]\n\n  @@map(\"blog_post_author\")\n}\n\nmodel SpaceTimeCoordinates {\n  id        String @id @default(cuid())\n  latitude  Float\n  longitude Float\n  startTime Float\n  pauseTime Float?\n  stopTime  Float\n  timezone  String\n\n  blogPostId String    @db.Uuid\n  BlogPost   BlogPost?\n\n  @@map(\"space_time_coordinates\")\n}\n",
  "inlineSchemaHash": "a188d7eb4daaaeaa7338fd19615d7aa28e7dadbaac0c02a5a9205d216f7cd53f",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Appointment\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"appointmentTypeId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"appointmentType\",\"kind\":\"object\",\"type\":\"AppointmentType\",\"relationName\":\"AppointmentToAppointmentType\"},{\"name\":\"patientId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"patient\",\"kind\":\"object\",\"type\":\"Patient\",\"relationName\":\"AppointmentToPatient\"},{\"name\":\"locationId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"location\",\"kind\":\"object\",\"type\":\"Location\",\"relationName\":\"AppointmentToLocation\"},{\"name\":\"providerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"provider\",\"kind\":\"object\",\"type\":\"Provider\",\"relationName\":\"AppointmentToProvider\"},{\"name\":\"startDatetime\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"endDatetime\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"voided\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"voidedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateVoided\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"voidReason\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"appointment\"},\"AppointmentType\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"duration\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"appointmentList\",\"kind\":\"object\",\"type\":\"Appointment\",\"relationName\":\"AppointmentToAppointmentType\"}],\"dbName\":\"appointment_type\"},\"Location\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"address1\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"address2\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"city\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"stateProvince\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"country\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"postalCode\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"latitude\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"longitude\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"appointmentList\",\"kind\":\"object\",\"type\":\"Appointment\",\"relationName\":\"AppointmentToLocation\"},{\"name\":\"encounterList\",\"kind\":\"object\",\"type\":\"Encounter\",\"relationName\":\"EncounterToLocation\"}],\"dbName\":\"location\"},\"Patient\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"givenName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"middleName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"familyName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"gender\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"birthdate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"dead\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"deathDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"causeOfDeath\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"appointmentList\",\"kind\":\"object\",\"type\":\"Appointment\",\"relationName\":\"AppointmentToPatient\"},{\"name\":\"encounterList\",\"kind\":\"object\",\"type\":\"Encounter\",\"relationName\":\"EncounterToPatient\"}],\"dbName\":\"patient\"},\"Provider\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"identifier\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"voided\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"voidedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateVoided\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"voidReason\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"appointmentList\",\"kind\":\"object\",\"type\":\"Appointment\",\"relationName\":\"AppointmentToProvider\"},{\"name\":\"encounterList\",\"kind\":\"object\",\"type\":\"Encounter\",\"relationName\":\"EncounterToProvider\"}],\"dbName\":\"provider\"},\"Form\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"version\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"retired\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"retiredBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateRetired\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"retiredReason\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"formEncounterList\",\"kind\":\"object\",\"type\":\"FormEncounter\",\"relationName\":\"FormToFormEncounter\"},{\"name\":\"formResourceList\",\"kind\":\"object\",\"type\":\"FormResource\",\"relationName\":\"FormToFormResource\"},{\"name\":\"formSubmissionList\",\"kind\":\"object\",\"type\":\"FormSubmission\",\"relationName\":\"FormToFormSubmission\"},{\"name\":\"dield\",\"kind\":\"object\",\"type\":\"Field\",\"relationName\":\"FieldToForm\"},{\"name\":\"fieldId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"encounterList\",\"kind\":\"object\",\"type\":\"Encounter\",\"relationName\":\"EncounterToForm\"}],\"dbName\":\"form\"},\"FormEncounter\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"formId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"form\",\"kind\":\"object\",\"type\":\"Form\",\"relationName\":\"FormToFormEncounter\"},{\"name\":\"encounterId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"encounter\",\"kind\":\"object\",\"type\":\"Encounter\",\"relationName\":\"EncounterToFormEncounter\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"form_encounter\"},\"FormResource\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"formId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"form\",\"kind\":\"object\",\"type\":\"Form\",\"relationName\":\"FormToFormResource\"},{\"name\":\"resourceId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"resource\",\"kind\":\"object\",\"type\":\"Resource\",\"relationName\":\"FormResourceToResource\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"form_resource\"},\"FormSubmission\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"formId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"form\",\"kind\":\"object\",\"type\":\"Form\",\"relationName\":\"FormToFormSubmission\"},{\"name\":\"encounterId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"encounter\",\"kind\":\"object\",\"type\":\"Encounter\",\"relationName\":\"EncounterToFormSubmission\"},{\"name\":\"submissionDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"fieldAnswerList\",\"kind\":\"object\",\"type\":\"FieldAnswer\",\"relationName\":\"FieldAnswerToFormSubmission\"}],\"dbName\":\"form_submission\"},\"Field\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"fieldType\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"conceptId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"concept\",\"kind\":\"object\",\"type\":\"Concept\",\"relationName\":\"ConceptToField\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"formList\",\"kind\":\"object\",\"type\":\"Form\",\"relationName\":\"FieldToForm\"},{\"name\":\"fieldAnswerList\",\"kind\":\"object\",\"type\":\"FieldAnswer\",\"relationName\":\"FieldToFieldAnswer\"},{\"name\":\"fieldOptionList\",\"kind\":\"object\",\"type\":\"FieldOption\",\"relationName\":\"FieldToFieldOption\"}],\"dbName\":\"field\"},\"FieldAnswer\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"formSubmissionId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"formSubmission\",\"kind\":\"object\",\"type\":\"FormSubmission\",\"relationName\":\"FieldAnswerToFormSubmission\"},{\"name\":\"fieldId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"field\",\"kind\":\"object\",\"type\":\"Field\",\"relationName\":\"FieldToFieldAnswer\"},{\"name\":\"value\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"field_answer\"},\"FieldOption\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"fieldId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"field\",\"kind\":\"object\",\"type\":\"Field\",\"relationName\":\"FieldToFieldOption\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"field_option\"},\"Encounter\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"encounterType\",\"kind\":\"object\",\"type\":\"EncounterType\",\"relationName\":\"EncounterToEncounterType\"},{\"name\":\"encounterTypeId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"patientId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"patient\",\"kind\":\"object\",\"type\":\"Patient\",\"relationName\":\"EncounterToPatient\"},{\"name\":\"locationId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"location\",\"kind\":\"object\",\"type\":\"Location\",\"relationName\":\"EncounterToLocation\"},{\"name\":\"formId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"form\",\"kind\":\"object\",\"type\":\"Form\",\"relationName\":\"EncounterToForm\"},{\"name\":\"providerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"provider\",\"kind\":\"object\",\"type\":\"Provider\",\"relationName\":\"EncounterToProvider\"},{\"name\":\"startDatetime\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"endDatetime\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"voided\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"voidedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateVoided\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"voidReason\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"formEncounterList\",\"kind\":\"object\",\"type\":\"FormEncounter\",\"relationName\":\"EncounterToFormEncounter\"},{\"name\":\"formSubmissionList\",\"kind\":\"object\",\"type\":\"FormSubmission\",\"relationName\":\"EncounterToFormSubmission\"},{\"name\":\"obsList\",\"kind\":\"object\",\"type\":\"Obs\",\"relationName\":\"EncounterToObs\"},{\"name\":\"orderList\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"EncounterToOrder\"}],\"dbName\":\"encounter\"},\"EncounterType\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"encounterList\",\"kind\":\"object\",\"type\":\"Encounter\",\"relationName\":\"EncounterToEncounterType\"}],\"dbName\":\"encounter_type\"},\"Obs\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"conceptId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"concept\",\"kind\":\"object\",\"type\":\"Concept\",\"relationName\":\"ConceptToObs\"},{\"name\":\"encounterId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"encounter\",\"kind\":\"object\",\"type\":\"Encounter\",\"relationName\":\"EncounterToObs\"},{\"name\":\"obsDatetime\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"valueDatetime\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"valueNumeric\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"valueText\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"obs\"},\"Order\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"conceptId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"concept\",\"kind\":\"object\",\"type\":\"Concept\",\"relationName\":\"ConceptToOrder\"},{\"name\":\"encounterId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"encounter\",\"kind\":\"object\",\"type\":\"Encounter\",\"relationName\":\"EncounterToOrder\"},{\"name\":\"orderDatetime\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"instructions\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dosage\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"route\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"frequency\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"asNeeded\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"prn\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"quantity\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"units\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"OrderFrequency\",\"kind\":\"object\",\"type\":\"OrderFrequency\",\"relationName\":\"OrderToOrderFrequency\"},{\"name\":\"orderFrequencyId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"OrderRoute\",\"kind\":\"object\",\"type\":\"OrderRoute\",\"relationName\":\"OrderToOrderRoute\"},{\"name\":\"orderRouteId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"OrderType\",\"kind\":\"object\",\"type\":\"OrderType\",\"relationName\":\"OrderToOrderType\"},{\"name\":\"orderTypeId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"OrderUnit\",\"kind\":\"object\",\"type\":\"OrderUnit\",\"relationName\":\"OrderToOrderUnit\"},{\"name\":\"orderUnitId\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":\"order\"},\"OrderFrequency\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"orderList\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"OrderToOrderFrequency\"}],\"dbName\":\"order_frequency\"},\"OrderRoute\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"orderList\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"OrderToOrderRoute\"}],\"dbName\":\"order_route\"},\"OrderType\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"orderList\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"OrderToOrderType\"}],\"dbName\":\"order_type\"},\"OrderUnit\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"orderList\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"OrderToOrderUnit\"}],\"dbName\":\"order_unit\"},\"Concept\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dataType\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"class\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isRetired\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"retiredBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateRetired\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"retiredReason\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"metaList\",\"kind\":\"object\",\"type\":\"ConceptAnswer\",\"relationName\":\"meta_concept\"},{\"name\":\"answerList\",\"kind\":\"object\",\"type\":\"ConceptAnswer\",\"relationName\":\"answer_concept\"},{\"name\":\"fieldList\",\"kind\":\"object\",\"type\":\"Field\",\"relationName\":\"ConceptToField\"},{\"name\":\"obsList\",\"kind\":\"object\",\"type\":\"Obs\",\"relationName\":\"ConceptToObs\"},{\"name\":\"orderList\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"ConceptToOrder\"},{\"name\":\"ConceptClass\",\"kind\":\"object\",\"type\":\"ConceptClass\",\"relationName\":\"ConceptToConceptClass\"},{\"name\":\"conceptClassId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ConceptDatatype\",\"kind\":\"object\",\"type\":\"ConceptDatatype\",\"relationName\":\"ConceptToConceptDatatype\"},{\"name\":\"conceptDatatypeId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"conceptMap\",\"kind\":\"object\",\"type\":\"ConceptMap\",\"relationName\":\"ConceptToConceptMap\"},{\"name\":\"conceptMapId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"conceptNameList\",\"kind\":\"object\",\"type\":\"ConceptName\",\"relationName\":\"ConceptToConceptName\"},{\"name\":\"conceptNumericList\",\"kind\":\"object\",\"type\":\"ConceptNumeric\",\"relationName\":\"ConceptToConceptNumeric\"},{\"name\":\"conceptProposalList\",\"kind\":\"object\",\"type\":\"ConceptProposal\",\"relationName\":\"ConceptToConceptProposal\"},{\"name\":\"conceptSet\",\"kind\":\"object\",\"type\":\"ConceptSet\",\"relationName\":\"ConceptToConceptSet\"},{\"name\":\"conceptSetId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"conceptSource\",\"kind\":\"object\",\"type\":\"ConceptSource\",\"relationName\":\"ConceptToConceptSource\"},{\"name\":\"conceptSourceId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"conceptWordList\",\"kind\":\"object\",\"type\":\"ConceptWord\",\"relationName\":\"ConceptToConceptWord\"}],\"dbName\":\"concept\"},\"ConceptAnswer\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"conceptId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"concept\",\"kind\":\"object\",\"type\":\"Concept\",\"relationName\":\"meta_concept\"},{\"name\":\"answerConceptId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"answerConcept\",\"kind\":\"object\",\"type\":\"Concept\",\"relationName\":\"answer_concept\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"concept_answer\"},\"ConceptClass\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"conceptList\",\"kind\":\"object\",\"type\":\"Concept\",\"relationName\":\"ConceptToConceptClass\"}],\"dbName\":\"concept_class\"},\"ConceptDatatype\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"conceptList\",\"kind\":\"object\",\"type\":\"Concept\",\"relationName\":\"ConceptToConceptDatatype\"}],\"dbName\":\"concept_data_type\"},\"ConceptMap\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"conceptList\",\"kind\":\"object\",\"type\":\"Concept\",\"relationName\":\"ConceptToConceptMap\"}],\"dbName\":\"concept_map\"},\"ConceptName\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"conceptId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"concept\",\"kind\":\"object\",\"type\":\"Concept\",\"relationName\":\"ConceptToConceptName\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"locale\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"concept_name\"},\"ConceptNumeric\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"conceptId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"concept\",\"kind\":\"object\",\"type\":\"Concept\",\"relationName\":\"ConceptToConceptNumeric\"},{\"name\":\"hiAbsolute\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"hiCritical\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"hiNormal\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"lowAbsolute\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"lowCritical\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"lowNormal\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"units\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"concept_numeric\"},\"ConceptProposal\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"conceptId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"concept\",\"kind\":\"object\",\"type\":\"Concept\",\"relationName\":\"ConceptToConceptProposal\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"concept_proposal\"},\"ConceptSet\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"conceptList\",\"kind\":\"object\",\"type\":\"Concept\",\"relationName\":\"ConceptToConceptSet\"}],\"dbName\":\"concept_set\"},\"ConceptSource\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"conceptList\",\"kind\":\"object\",\"type\":\"Concept\",\"relationName\":\"ConceptToConceptSource\"}],\"dbName\":\"concept_source\"},\"ConceptWord\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"conceptId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"concept\",\"kind\":\"object\",\"type\":\"Concept\",\"relationName\":\"ConceptToConceptWord\"},{\"name\":\"word\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"locale\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"concept_word\"},\"Resource\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lastChangedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastChangedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"formResourceList\",\"kind\":\"object\",\"type\":\"FormResource\",\"relationName\":\"FormResourceToResource\"}],\"dbName\":\"resource\"},\"BlogPost\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"context\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"authorId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"author\",\"kind\":\"object\",\"type\":\"BlogPostAuthor\",\"relationName\":\"BlogPostToBlogPostAuthor\"},{\"name\":\"spaceTimeCoordinatesId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"spaceTimeCoordinates\",\"kind\":\"object\",\"type\":\"SpaceTimeCoordinates\",\"relationName\":\"BlogPostToSpaceTimeCoordinates\"},{\"name\":\"tagArrowList\",\"kind\":\"object\",\"type\":\"BlogPostTagArrow\",\"relationName\":\"BlogPostToBlogPostTagArrow\"}],\"dbName\":\"blog_post\"},\"BlogPostTag\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"descriptor\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"postArrowList\",\"kind\":\"object\",\"type\":\"BlogPostTagArrow\",\"relationName\":\"BlogPostTagToBlogPostTagArrow\"}],\"dbName\":\"blog_post_tag\"},\"BlogPostTagArrow\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"postId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"post\",\"kind\":\"object\",\"type\":\"BlogPost\",\"relationName\":\"BlogPostToBlogPostTagArrow\"},{\"name\":\"tagId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tag\",\"kind\":\"object\",\"type\":\"BlogPostTag\",\"relationName\":\"BlogPostTagToBlogPostTagArrow\"}],\"dbName\":\"blog_post_tag_arrow\"},\"BlogPostAuthor\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"blogPostList\",\"kind\":\"object\",\"type\":\"BlogPost\",\"relationName\":\"BlogPostToBlogPostAuthor\"}],\"dbName\":\"blog_post_author\"},\"SpaceTimeCoordinates\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"latitude\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"longitude\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"startTime\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"pauseTime\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"stopTime\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"timezone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"blogPostId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"BlogPost\",\"kind\":\"object\",\"type\":\"BlogPost\",\"relationName\":\"BlogPostToSpaceTimeCoordinates\"}],\"dbName\":\"space_time_coordinates\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    return (await import('#wasm-engine-loader')).default
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

