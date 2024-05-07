import { Prisma } from "@prisma/client";
import { NTTKey } from "./entities-type";

export interface FindFirstArgs {
    Appointment: Prisma.AppointmentFindFirstArgs;
    AppointmentType: Prisma.AppointmentTypeFindFirstArgs;
    Location: Prisma.LocationFindFirstArgs;
    Patient: Prisma.PatientFindFirstArgs;
    Provider: Prisma.ProviderFindFirstArgs;
    Form: Prisma.FormFindFirstArgs;
    FormEncounter: Prisma.FormEncounterFindFirstArgs;
    FormResource: Prisma.FormResourceFindFirstArgs;
    FormSubmission: Prisma.FormSubmissionFindFirstArgs;
    Field: Prisma.FieldFindFirstArgs;
    FieldAnswer: Prisma.FieldAnswerFindFirstArgs;
    FieldOption: Prisma.FieldOptionFindFirstArgs;
    Encounter: Prisma.EncounterFindFirstArgs;
    EncounterType: Prisma.EncounterTypeFindFirstArgs;
    Obs: Prisma.ObsFindFirstArgs;
    Order: Prisma.OrderFindFirstArgs;
    OrderFrequency: Prisma.OrderFrequencyFindFirstArgs;
    OrderRoute: Prisma.OrderRouteFindFirstArgs;
    OrderType: Prisma.OrderTypeFindFirstArgs;
    OrderUnit: Prisma.OrderUnitFindFirstArgs;
    Concept: Prisma.ConceptFindFirstArgs;
    ConceptAnswer: Prisma.ConceptAnswerFindFirstArgs;
    ConceptClass: Prisma.ConceptClassFindFirstArgs;
    ConceptDatatype: Prisma.ConceptDatatypeFindFirstArgs;
    ConceptMap: Prisma.ConceptMapFindFirstArgs;
    ConceptName: Prisma.ConceptNameFindFirstArgs;
    ConceptNumeric: Prisma.ConceptNumericFindFirstArgs;
    ConceptProposal: Prisma.ConceptProposalFindFirstArgs;
    ConceptSet: Prisma.ConceptSetFindFirstArgs;
    ConceptSource: Prisma.ConceptSourceFindFirstArgs;
    ConceptWord: Prisma.ConceptWordFindFirstArgs;
    Resource: Prisma.ResourceFindFirstArgs;
    BlogPost: Prisma.BlogPostFindFirstArgs;
    BlogPostTag: Prisma.BlogPostTagFindFirstArgs;
    BlogPostTagArrow: Prisma.BlogPostTagArrowFindFirstArgs;
    BlogPostAuthor: Prisma.BlogPostAuthorFindFirstArgs;
    SpaceTimeCoordinates: Prisma.SpaceTimeCoordinatesFindFirstArgs;
}

export type FindFirstArgType<T extends NTTKey> = FindFirstArgs[T];
