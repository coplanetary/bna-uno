import { Prisma } from "@prisma/client";
import { NTTKey } from "./entities-type";

export interface CreateArgs {
    Appointment: Prisma.AppointmentCreateArgs;
    AppointmentType: Prisma.AppointmentTypeCreateArgs;
    Location: Prisma.LocationCreateArgs;
    Patient: Prisma.PatientCreateArgs;
    Provider: Prisma.ProviderCreateArgs;
    Form: Prisma.FormCreateArgs;
    FormEncounter: Prisma.FormEncounterCreateArgs;
    FormResource: Prisma.FormResourceCreateArgs;
    FormSubmission: Prisma.FormSubmissionCreateArgs;
    Field: Prisma.FieldCreateArgs;
    FieldAnswer: Prisma.FieldAnswerCreateArgs;
    FieldOption: Prisma.FieldOptionCreateArgs;
    Encounter: Prisma.EncounterCreateArgs;
    EncounterType: Prisma.EncounterTypeCreateArgs;
    Obs: Prisma.ObsCreateArgs;
    Order: Prisma.OrderCreateArgs;
    OrderFrequency: Prisma.OrderFrequencyCreateArgs;
    OrderRoute: Prisma.OrderRouteCreateArgs;
    OrderType: Prisma.OrderTypeCreateArgs;
    OrderUnit: Prisma.OrderUnitCreateArgs;
    Concept: Prisma.ConceptCreateArgs;
    ConceptAnswer: Prisma.ConceptAnswerCreateArgs;
    ConceptClass: Prisma.ConceptClassCreateArgs;
    ConceptDatatype: Prisma.ConceptDatatypeCreateArgs;
    ConceptMap: Prisma.ConceptMapCreateArgs;
    ConceptName: Prisma.ConceptNameCreateArgs;
    ConceptNumeric: Prisma.ConceptNumericCreateArgs;
    ConceptProposal: Prisma.ConceptProposalCreateArgs;
    ConceptSet: Prisma.ConceptSetCreateArgs;
    ConceptSource: Prisma.ConceptSourceCreateArgs;
    ConceptWord: Prisma.ConceptWordCreateArgs;
    Resource: Prisma.ResourceCreateArgs;
    BlogPost: Prisma.BlogPostCreateArgs;
    BlogPostTag: Prisma.BlogPostTagCreateArgs;
    BlogPostTagArrow: Prisma.BlogPostTagArrowCreateArgs;
    BlogPostAuthor: Prisma.BlogPostAuthorCreateArgs;
    SpaceTimeCoordinates: Prisma.SpaceTimeCoordinatesCreateArgs;
}

export type CreateArgType<T extends NTTKey> = CreateArgs[T];
