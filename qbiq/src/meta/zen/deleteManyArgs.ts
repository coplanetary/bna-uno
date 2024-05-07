import { Prisma } from "@prisma/client";
import { NTTKey } from "./entities-type";

export interface DeleteManyArgs {
    Appointment: Prisma.AppointmentDeleteManyArgs;
    AppointmentType: Prisma.AppointmentTypeDeleteManyArgs;
    Location: Prisma.LocationDeleteManyArgs;
    Patient: Prisma.PatientDeleteManyArgs;
    Provider: Prisma.ProviderDeleteManyArgs;
    Form: Prisma.FormDeleteManyArgs;
    FormEncounter: Prisma.FormEncounterDeleteManyArgs;
    FormResource: Prisma.FormResourceDeleteManyArgs;
    FormSubmission: Prisma.FormSubmissionDeleteManyArgs;
    Field: Prisma.FieldDeleteManyArgs;
    FieldAnswer: Prisma.FieldAnswerDeleteManyArgs;
    FieldOption: Prisma.FieldOptionDeleteManyArgs;
    Encounter: Prisma.EncounterDeleteManyArgs;
    EncounterType: Prisma.EncounterTypeDeleteManyArgs;
    Obs: Prisma.ObsDeleteManyArgs;
    Order: Prisma.OrderDeleteManyArgs;
    OrderFrequency: Prisma.OrderFrequencyDeleteManyArgs;
    OrderRoute: Prisma.OrderRouteDeleteManyArgs;
    OrderType: Prisma.OrderTypeDeleteManyArgs;
    OrderUnit: Prisma.OrderUnitDeleteManyArgs;
    Concept: Prisma.ConceptDeleteManyArgs;
    ConceptAnswer: Prisma.ConceptAnswerDeleteManyArgs;
    ConceptClass: Prisma.ConceptClassDeleteManyArgs;
    ConceptDatatype: Prisma.ConceptDatatypeDeleteManyArgs;
    ConceptMap: Prisma.ConceptMapDeleteManyArgs;
    ConceptName: Prisma.ConceptNameDeleteManyArgs;
    ConceptNumeric: Prisma.ConceptNumericDeleteManyArgs;
    ConceptProposal: Prisma.ConceptProposalDeleteManyArgs;
    ConceptSet: Prisma.ConceptSetDeleteManyArgs;
    ConceptSource: Prisma.ConceptSourceDeleteManyArgs;
    ConceptWord: Prisma.ConceptWordDeleteManyArgs;
    Resource: Prisma.ResourceDeleteManyArgs;
    BlogPost: Prisma.BlogPostDeleteManyArgs;
    BlogPostTag: Prisma.BlogPostTagDeleteManyArgs;
    BlogPostTagArrow: Prisma.BlogPostTagArrowDeleteManyArgs;
    BlogPostAuthor: Prisma.BlogPostAuthorDeleteManyArgs;
    SpaceTimeCoordinates: Prisma.SpaceTimeCoordinatesDeleteManyArgs;
}

export type DeleteManyArgType<T extends NTTKey> = DeleteManyArgs[T];
