import { Prisma } from "@prisma/client";
import { NTTKey } from "./entities-type";

export interface UpsertArgs {
    Appointment: Prisma.AppointmentUpsertArgs;
    AppointmentType: Prisma.AppointmentTypeUpsertArgs;
    Location: Prisma.LocationUpsertArgs;
    Patient: Prisma.PatientUpsertArgs;
    Provider: Prisma.ProviderUpsertArgs;
    Form: Prisma.FormUpsertArgs;
    FormEncounter: Prisma.FormEncounterUpsertArgs;
    FormResource: Prisma.FormResourceUpsertArgs;
    FormSubmission: Prisma.FormSubmissionUpsertArgs;
    Field: Prisma.FieldUpsertArgs;
    FieldAnswer: Prisma.FieldAnswerUpsertArgs;
    FieldOption: Prisma.FieldOptionUpsertArgs;
    Encounter: Prisma.EncounterUpsertArgs;
    EncounterType: Prisma.EncounterTypeUpsertArgs;
    Obs: Prisma.ObsUpsertArgs;
    Order: Prisma.OrderUpsertArgs;
    OrderFrequency: Prisma.OrderFrequencyUpsertArgs;
    OrderRoute: Prisma.OrderRouteUpsertArgs;
    OrderType: Prisma.OrderTypeUpsertArgs;
    OrderUnit: Prisma.OrderUnitUpsertArgs;
    Concept: Prisma.ConceptUpsertArgs;
    ConceptAnswer: Prisma.ConceptAnswerUpsertArgs;
    ConceptClass: Prisma.ConceptClassUpsertArgs;
    ConceptDatatype: Prisma.ConceptDatatypeUpsertArgs;
    ConceptMap: Prisma.ConceptMapUpsertArgs;
    ConceptName: Prisma.ConceptNameUpsertArgs;
    ConceptNumeric: Prisma.ConceptNumericUpsertArgs;
    ConceptProposal: Prisma.ConceptProposalUpsertArgs;
    ConceptSet: Prisma.ConceptSetUpsertArgs;
    ConceptSource: Prisma.ConceptSourceUpsertArgs;
    ConceptWord: Prisma.ConceptWordUpsertArgs;
    Resource: Prisma.ResourceUpsertArgs;
    BlogPost: Prisma.BlogPostUpsertArgs;
    BlogPostTag: Prisma.BlogPostTagUpsertArgs;
    BlogPostTagArrow: Prisma.BlogPostTagArrowUpsertArgs;
    BlogPostAuthor: Prisma.BlogPostAuthorUpsertArgs;
    SpaceTimeCoordinates: Prisma.SpaceTimeCoordinatesUpsertArgs;
}

export type UpsertArgType<T extends NTTKey> = UpsertArgs[T];
