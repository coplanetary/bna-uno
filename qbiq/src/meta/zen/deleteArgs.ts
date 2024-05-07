import { Prisma } from "@prisma/client";
import { NTTKey } from "./entities-type";

export interface DeleteArgs {
    Appointment: Prisma.AppointmentDeleteArgs;
    AppointmentType: Prisma.AppointmentTypeDeleteArgs;
    Location: Prisma.LocationDeleteArgs;
    Patient: Prisma.PatientDeleteArgs;
    Provider: Prisma.ProviderDeleteArgs;
    Form: Prisma.FormDeleteArgs;
    FormEncounter: Prisma.FormEncounterDeleteArgs;
    FormResource: Prisma.FormResourceDeleteArgs;
    FormSubmission: Prisma.FormSubmissionDeleteArgs;
    Field: Prisma.FieldDeleteArgs;
    FieldAnswer: Prisma.FieldAnswerDeleteArgs;
    FieldOption: Prisma.FieldOptionDeleteArgs;
    Encounter: Prisma.EncounterDeleteArgs;
    EncounterType: Prisma.EncounterTypeDeleteArgs;
    Obs: Prisma.ObsDeleteArgs;
    Order: Prisma.OrderDeleteArgs;
    OrderFrequency: Prisma.OrderFrequencyDeleteArgs;
    OrderRoute: Prisma.OrderRouteDeleteArgs;
    OrderType: Prisma.OrderTypeDeleteArgs;
    OrderUnit: Prisma.OrderUnitDeleteArgs;
    Concept: Prisma.ConceptDeleteArgs;
    ConceptAnswer: Prisma.ConceptAnswerDeleteArgs;
    ConceptClass: Prisma.ConceptClassDeleteArgs;
    ConceptDatatype: Prisma.ConceptDatatypeDeleteArgs;
    ConceptMap: Prisma.ConceptMapDeleteArgs;
    ConceptName: Prisma.ConceptNameDeleteArgs;
    ConceptNumeric: Prisma.ConceptNumericDeleteArgs;
    ConceptProposal: Prisma.ConceptProposalDeleteArgs;
    ConceptSet: Prisma.ConceptSetDeleteArgs;
    ConceptSource: Prisma.ConceptSourceDeleteArgs;
    ConceptWord: Prisma.ConceptWordDeleteArgs;
    Resource: Prisma.ResourceDeleteArgs;
    BlogPost: Prisma.BlogPostDeleteArgs;
    BlogPostTag: Prisma.BlogPostTagDeleteArgs;
    BlogPostTagArrow: Prisma.BlogPostTagArrowDeleteArgs;
    BlogPostAuthor: Prisma.BlogPostAuthorDeleteArgs;
    SpaceTimeCoordinates: Prisma.SpaceTimeCoordinatesDeleteArgs;
}

export type DeleteArgType<T extends NTTKey> = DeleteArgs[T];
