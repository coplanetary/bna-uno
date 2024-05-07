import { Prisma } from "@prisma/client";
import { NTTKey } from "./entities-type";

export interface UpdateArgs {
    Appointment: Prisma.AppointmentUpdateArgs;
    AppointmentType: Prisma.AppointmentTypeUpdateArgs;
    Location: Prisma.LocationUpdateArgs;
    Patient: Prisma.PatientUpdateArgs;
    Provider: Prisma.ProviderUpdateArgs;
    Form: Prisma.FormUpdateArgs;
    FormEncounter: Prisma.FormEncounterUpdateArgs;
    FormResource: Prisma.FormResourceUpdateArgs;
    FormSubmission: Prisma.FormSubmissionUpdateArgs;
    Field: Prisma.FieldUpdateArgs;
    FieldAnswer: Prisma.FieldAnswerUpdateArgs;
    FieldOption: Prisma.FieldOptionUpdateArgs;
    Encounter: Prisma.EncounterUpdateArgs;
    EncounterType: Prisma.EncounterTypeUpdateArgs;
    Obs: Prisma.ObsUpdateArgs;
    Order: Prisma.OrderUpdateArgs;
    OrderFrequency: Prisma.OrderFrequencyUpdateArgs;
    OrderRoute: Prisma.OrderRouteUpdateArgs;
    OrderType: Prisma.OrderTypeUpdateArgs;
    OrderUnit: Prisma.OrderUnitUpdateArgs;
    Concept: Prisma.ConceptUpdateArgs;
    ConceptAnswer: Prisma.ConceptAnswerUpdateArgs;
    ConceptClass: Prisma.ConceptClassUpdateArgs;
    ConceptDatatype: Prisma.ConceptDatatypeUpdateArgs;
    ConceptMap: Prisma.ConceptMapUpdateArgs;
    ConceptName: Prisma.ConceptNameUpdateArgs;
    ConceptNumeric: Prisma.ConceptNumericUpdateArgs;
    ConceptProposal: Prisma.ConceptProposalUpdateArgs;
    ConceptSet: Prisma.ConceptSetUpdateArgs;
    ConceptSource: Prisma.ConceptSourceUpdateArgs;
    ConceptWord: Prisma.ConceptWordUpdateArgs;
    Resource: Prisma.ResourceUpdateArgs;
    BlogPost: Prisma.BlogPostUpdateArgs;
    BlogPostTag: Prisma.BlogPostTagUpdateArgs;
    BlogPostTagArrow: Prisma.BlogPostTagArrowUpdateArgs;
    BlogPostAuthor: Prisma.BlogPostAuthorUpdateArgs;
    SpaceTimeCoordinates: Prisma.SpaceTimeCoordinatesUpdateArgs;
}

export type UpdateArgType<T extends NTTKey> = UpdateArgs[T];
