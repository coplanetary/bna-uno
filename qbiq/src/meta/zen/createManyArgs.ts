import { Prisma } from "@prisma/client";
import { NTTKey } from "./entities-type";

export interface CreateManyArgs {
    Appointment: Prisma.AppointmentCreateManyArgs;
    AppointmentType: Prisma.AppointmentTypeCreateManyArgs;
    Location: Prisma.LocationCreateManyArgs;
    Patient: Prisma.PatientCreateManyArgs;
    Provider: Prisma.ProviderCreateManyArgs;
    Form: Prisma.FormCreateManyArgs;
    FormEncounter: Prisma.FormEncounterCreateManyArgs;
    FormResource: Prisma.FormResourceCreateManyArgs;
    FormSubmission: Prisma.FormSubmissionCreateManyArgs;
    Field: Prisma.FieldCreateManyArgs;
    FieldAnswer: Prisma.FieldAnswerCreateManyArgs;
    FieldOption: Prisma.FieldOptionCreateManyArgs;
    Encounter: Prisma.EncounterCreateManyArgs;
    EncounterType: Prisma.EncounterTypeCreateManyArgs;
    Obs: Prisma.ObsCreateManyArgs;
    Order: Prisma.OrderCreateManyArgs;
    OrderFrequency: Prisma.OrderFrequencyCreateManyArgs;
    OrderRoute: Prisma.OrderRouteCreateManyArgs;
    OrderType: Prisma.OrderTypeCreateManyArgs;
    OrderUnit: Prisma.OrderUnitCreateManyArgs;
    Concept: Prisma.ConceptCreateManyArgs;
    ConceptAnswer: Prisma.ConceptAnswerCreateManyArgs;
    ConceptClass: Prisma.ConceptClassCreateManyArgs;
    ConceptDatatype: Prisma.ConceptDatatypeCreateManyArgs;
    ConceptMap: Prisma.ConceptMapCreateManyArgs;
    ConceptName: Prisma.ConceptNameCreateManyArgs;
    ConceptNumeric: Prisma.ConceptNumericCreateManyArgs;
    ConceptProposal: Prisma.ConceptProposalCreateManyArgs;
    ConceptSet: Prisma.ConceptSetCreateManyArgs;
    ConceptSource: Prisma.ConceptSourceCreateManyArgs;
    ConceptWord: Prisma.ConceptWordCreateManyArgs;
    Resource: Prisma.ResourceCreateManyArgs;
    BlogPost: Prisma.BlogPostCreateManyArgs;
    BlogPostTag: Prisma.BlogPostTagCreateManyArgs;
    BlogPostTagArrow: Prisma.BlogPostTagArrowCreateManyArgs;
    BlogPostAuthor: Prisma.BlogPostAuthorCreateManyArgs;
    SpaceTimeCoordinates: Prisma.SpaceTimeCoordinatesCreateManyArgs;
}

export type CreateManyArgType<T extends NTTKey> = CreateManyArgs[T];
