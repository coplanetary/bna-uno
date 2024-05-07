import { Prisma } from "@prisma/client";
import { NTTKey } from "./entities-type";

export interface Delegates {
    Appointment: Prisma.AppointmentDelegate;
    AppointmentType: Prisma.AppointmentTypeDelegate;
    Location: Prisma.LocationDelegate;
    Patient: Prisma.PatientDelegate;
    Provider: Prisma.ProviderDelegate;
    Form: Prisma.FormDelegate;
    FormEncounter: Prisma.FormEncounterDelegate;
    FormResource: Prisma.FormResourceDelegate;
    FormSubmission: Prisma.FormSubmissionDelegate;
    Field: Prisma.FieldDelegate;
    FieldAnswer: Prisma.FieldAnswerDelegate;
    FieldOption: Prisma.FieldOptionDelegate;
    Encounter: Prisma.EncounterDelegate;
    EncounterType: Prisma.EncounterTypeDelegate;
    Obs: Prisma.ObsDelegate;
    Order: Prisma.OrderDelegate;
    OrderFrequency: Prisma.OrderFrequencyDelegate;
    OrderRoute: Prisma.OrderRouteDelegate;
    OrderType: Prisma.OrderTypeDelegate;
    OrderUnit: Prisma.OrderUnitDelegate;
    Concept: Prisma.ConceptDelegate;
    ConceptAnswer: Prisma.ConceptAnswerDelegate;
    ConceptClass: Prisma.ConceptClassDelegate;
    ConceptDatatype: Prisma.ConceptDatatypeDelegate;
    ConceptMap: Prisma.ConceptMapDelegate;
    ConceptName: Prisma.ConceptNameDelegate;
    ConceptNumeric: Prisma.ConceptNumericDelegate;
    ConceptProposal: Prisma.ConceptProposalDelegate;
    ConceptSet: Prisma.ConceptSetDelegate;
    ConceptSource: Prisma.ConceptSourceDelegate;
    ConceptWord: Prisma.ConceptWordDelegate;
    Resource: Prisma.ResourceDelegate;
    BlogPost: Prisma.BlogPostDelegate;
    BlogPostTag: Prisma.BlogPostTagDelegate;
    BlogPostTagArrow: Prisma.BlogPostTagArrowDelegate;
    BlogPostAuthor: Prisma.BlogPostAuthorDelegate;
    SpaceTimeCoordinates: Prisma.SpaceTimeCoordinatesDelegate;
}

export type DelegateType<T extends NTTKey> = Delegates[T];
