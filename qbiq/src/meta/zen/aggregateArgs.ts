import { Prisma } from "@prisma/client";
import { NTTKey } from "./entities-type";

export interface AggregateArgs {
    Appointment: Prisma.AppointmentAggregateArgs;
    AppointmentType: Prisma.AppointmentTypeAggregateArgs;
    Location: Prisma.LocationAggregateArgs;
    Patient: Prisma.PatientAggregateArgs;
    Provider: Prisma.ProviderAggregateArgs;
    Form: Prisma.FormAggregateArgs;
    FormEncounter: Prisma.FormEncounterAggregateArgs;
    FormResource: Prisma.FormResourceAggregateArgs;
    FormSubmission: Prisma.FormSubmissionAggregateArgs;
    Field: Prisma.FieldAggregateArgs;
    FieldAnswer: Prisma.FieldAnswerAggregateArgs;
    FieldOption: Prisma.FieldOptionAggregateArgs;
    Encounter: Prisma.EncounterAggregateArgs;
    EncounterType: Prisma.EncounterTypeAggregateArgs;
    Obs: Prisma.ObsAggregateArgs;
    Order: Prisma.OrderAggregateArgs;
    OrderFrequency: Prisma.OrderFrequencyAggregateArgs;
    OrderRoute: Prisma.OrderRouteAggregateArgs;
    OrderType: Prisma.OrderTypeAggregateArgs;
    OrderUnit: Prisma.OrderUnitAggregateArgs;
    Concept: Prisma.ConceptAggregateArgs;
    ConceptAnswer: Prisma.ConceptAnswerAggregateArgs;
    ConceptClass: Prisma.ConceptClassAggregateArgs;
    ConceptDatatype: Prisma.ConceptDatatypeAggregateArgs;
    ConceptMap: Prisma.ConceptMapAggregateArgs;
    ConceptName: Prisma.ConceptNameAggregateArgs;
    ConceptNumeric: Prisma.ConceptNumericAggregateArgs;
    ConceptProposal: Prisma.ConceptProposalAggregateArgs;
    ConceptSet: Prisma.ConceptSetAggregateArgs;
    ConceptSource: Prisma.ConceptSourceAggregateArgs;
    ConceptWord: Prisma.ConceptWordAggregateArgs;
    Resource: Prisma.ResourceAggregateArgs;
    BlogPost: Prisma.BlogPostAggregateArgs;
    BlogPostTag: Prisma.BlogPostTagAggregateArgs;
    BlogPostTagArrow: Prisma.BlogPostTagArrowAggregateArgs;
    BlogPostAuthor: Prisma.BlogPostAuthorAggregateArgs;
    SpaceTimeCoordinates: Prisma.SpaceTimeCoordinatesAggregateArgs;
}

export type AggregateArgType<T extends NTTKey> = AggregateArgs[T];
