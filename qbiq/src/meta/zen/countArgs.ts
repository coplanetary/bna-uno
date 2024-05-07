import { Prisma } from "@prisma/client";
import { NTTKey } from "./entities-type";

export interface CountArgs {
    Appointment: Prisma.AppointmentCountArgs;
    AppointmentType: Prisma.AppointmentTypeCountArgs;
    Location: Prisma.LocationCountArgs;
    Patient: Prisma.PatientCountArgs;
    Provider: Prisma.ProviderCountArgs;
    Form: Prisma.FormCountArgs;
    FormEncounter: Prisma.FormEncounterCountArgs;
    FormResource: Prisma.FormResourceCountArgs;
    FormSubmission: Prisma.FormSubmissionCountArgs;
    Field: Prisma.FieldCountArgs;
    FieldAnswer: Prisma.FieldAnswerCountArgs;
    FieldOption: Prisma.FieldOptionCountArgs;
    Encounter: Prisma.EncounterCountArgs;
    EncounterType: Prisma.EncounterTypeCountArgs;
    Obs: Prisma.ObsCountArgs;
    Order: Prisma.OrderCountArgs;
    OrderFrequency: Prisma.OrderFrequencyCountArgs;
    OrderRoute: Prisma.OrderRouteCountArgs;
    OrderType: Prisma.OrderTypeCountArgs;
    OrderUnit: Prisma.OrderUnitCountArgs;
    Concept: Prisma.ConceptCountArgs;
    ConceptAnswer: Prisma.ConceptAnswerCountArgs;
    ConceptClass: Prisma.ConceptClassCountArgs;
    ConceptDatatype: Prisma.ConceptDatatypeCountArgs;
    ConceptMap: Prisma.ConceptMapCountArgs;
    ConceptName: Prisma.ConceptNameCountArgs;
    ConceptNumeric: Prisma.ConceptNumericCountArgs;
    ConceptProposal: Prisma.ConceptProposalCountArgs;
    ConceptSet: Prisma.ConceptSetCountArgs;
    ConceptSource: Prisma.ConceptSourceCountArgs;
    ConceptWord: Prisma.ConceptWordCountArgs;
    Resource: Prisma.ResourceCountArgs;
    BlogPost: Prisma.BlogPostCountArgs;
    BlogPostTag: Prisma.BlogPostTagCountArgs;
    BlogPostTagArrow: Prisma.BlogPostTagArrowCountArgs;
    BlogPostAuthor: Prisma.BlogPostAuthorCountArgs;
    SpaceTimeCoordinates: Prisma.SpaceTimeCoordinatesCountArgs;
}

export type CountArgType<T extends NTTKey> = CountArgs[T];
