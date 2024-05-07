import { Prisma } from "@prisma/client";
import { NTTKey } from "./entities-type";

export interface UpdateManyArgs {
    Appointment: Prisma.AppointmentUpdateManyArgs;
    AppointmentType: Prisma.AppointmentTypeUpdateManyArgs;
    Location: Prisma.LocationUpdateManyArgs;
    Patient: Prisma.PatientUpdateManyArgs;
    Provider: Prisma.ProviderUpdateManyArgs;
    Form: Prisma.FormUpdateManyArgs;
    FormEncounter: Prisma.FormEncounterUpdateManyArgs;
    FormResource: Prisma.FormResourceUpdateManyArgs;
    FormSubmission: Prisma.FormSubmissionUpdateManyArgs;
    Field: Prisma.FieldUpdateManyArgs;
    FieldAnswer: Prisma.FieldAnswerUpdateManyArgs;
    FieldOption: Prisma.FieldOptionUpdateManyArgs;
    Encounter: Prisma.EncounterUpdateManyArgs;
    EncounterType: Prisma.EncounterTypeUpdateManyArgs;
    Obs: Prisma.ObsUpdateManyArgs;
    Order: Prisma.OrderUpdateManyArgs;
    OrderFrequency: Prisma.OrderFrequencyUpdateManyArgs;
    OrderRoute: Prisma.OrderRouteUpdateManyArgs;
    OrderType: Prisma.OrderTypeUpdateManyArgs;
    OrderUnit: Prisma.OrderUnitUpdateManyArgs;
    Concept: Prisma.ConceptUpdateManyArgs;
    ConceptAnswer: Prisma.ConceptAnswerUpdateManyArgs;
    ConceptClass: Prisma.ConceptClassUpdateManyArgs;
    ConceptDatatype: Prisma.ConceptDatatypeUpdateManyArgs;
    ConceptMap: Prisma.ConceptMapUpdateManyArgs;
    ConceptName: Prisma.ConceptNameUpdateManyArgs;
    ConceptNumeric: Prisma.ConceptNumericUpdateManyArgs;
    ConceptProposal: Prisma.ConceptProposalUpdateManyArgs;
    ConceptSet: Prisma.ConceptSetUpdateManyArgs;
    ConceptSource: Prisma.ConceptSourceUpdateManyArgs;
    ConceptWord: Prisma.ConceptWordUpdateManyArgs;
    Resource: Prisma.ResourceUpdateManyArgs;
    BlogPost: Prisma.BlogPostUpdateManyArgs;
    BlogPostTag: Prisma.BlogPostTagUpdateManyArgs;
    BlogPostTagArrow: Prisma.BlogPostTagArrowUpdateManyArgs;
    BlogPostAuthor: Prisma.BlogPostAuthorUpdateManyArgs;
    SpaceTimeCoordinates: Prisma.SpaceTimeCoordinatesUpdateManyArgs;
}

export type UpdateManyArgType<T extends NTTKey> = UpdateManyArgs[T];
