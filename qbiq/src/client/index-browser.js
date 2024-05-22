
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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

exports.Prisma.BudgetEntryScalarFieldEnum = {
  id: 'id',
  serviceId: 'serviceId',
  cost: 'cost',
  discount: 'discount',
  promotion: 'promotion',
  subtotal: 'subtotal',
  percentChange: 'percentChange',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  budgetId: 'budgetId'
};

exports.Prisma.ServiceScalarFieldEnum = {
  id: 'id',
  description: 'description',
  category: 'category',
  metadata: 'metadata',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BudgetScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  fiscalYear: 'fiscalYear',
  reportId: 'reportId'
};

exports.Prisma.ReportScalarFieldEnum = {
  id: 'id',
  budgetId: 'budgetId',
  totalCost: 'totalCost',
  totalDiscount: 'totalDiscount',
  totalPromotion: 'totalPromotion',
  totalSubtotal: 'totalSubtotal',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BudUserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BudgetBudUserScalarFieldEnum = {
  userId: 'userId',
  budgetId: 'budgetId',
  role: 'role',
  ability: 'ability',
  category: 'category'
};

exports.Prisma.BudEventScalarFieldEnum = {
  id: 'id',
  type: 'type',
  description: 'description',
  categoryList: 'categoryList',
  metadata: 'metadata',
  budUserId: 'budUserId',
  createdAt: 'createdAt'
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
  SpaceTimeCoordinates: 'SpaceTimeCoordinates',
  BudgetEntry: 'BudgetEntry',
  Service: 'Service',
  Budget: 'Budget',
  Report: 'Report',
  BudUser: 'BudUser',
  BudgetBudUser: 'BudgetBudUser',
  BudEvent: 'BudEvent'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
