import { Prisma } from "@prisma/client";
import { NTTKey } from "./entities-type";

export interface FieldRefs {
    Appointment: Prisma.AppointmentFieldRefs;
    AppointmentType: Prisma.AppointmentTypeFieldRefs;
    Location: Prisma.LocationFieldRefs;
    Patient: Prisma.PatientFieldRefs;
    Provider: Prisma.ProviderFieldRefs;
    Form: Prisma.FormFieldRefs;
    FormEncounter: Prisma.FormEncounterFieldRefs;
    FormResource: Prisma.FormResourceFieldRefs;
    FormSubmission: Prisma.FormSubmissionFieldRefs;
    Field: Prisma.FieldFieldRefs;
    FieldAnswer: Prisma.FieldAnswerFieldRefs;
    FieldOption: Prisma.FieldOptionFieldRefs;
    Encounter: Prisma.EncounterFieldRefs;
    EncounterType: Prisma.EncounterTypeFieldRefs;
    Obs: Prisma.ObsFieldRefs;
    Order: Prisma.OrderFieldRefs;
    OrderFrequency: Prisma.OrderFrequencyFieldRefs;
    OrderRoute: Prisma.OrderRouteFieldRefs;
    OrderType: Prisma.OrderTypeFieldRefs;
    OrderUnit: Prisma.OrderUnitFieldRefs;
    Concept: Prisma.ConceptFieldRefs;
    ConceptAnswer: Prisma.ConceptAnswerFieldRefs;
    ConceptClass: Prisma.ConceptClassFieldRefs;
    ConceptDatatype: Prisma.ConceptDatatypeFieldRefs;
    ConceptMap: Prisma.ConceptMapFieldRefs;
    ConceptName: Prisma.ConceptNameFieldRefs;
    ConceptNumeric: Prisma.ConceptNumericFieldRefs;
    ConceptProposal: Prisma.ConceptProposalFieldRefs;
    ConceptSet: Prisma.ConceptSetFieldRefs;
    ConceptSource: Prisma.ConceptSourceFieldRefs;
    ConceptWord: Prisma.ConceptWordFieldRefs;
    Resource: Prisma.ResourceFieldRefs;
    BlogPost: Prisma.BlogPostFieldRefs;
    BlogPostTag: Prisma.BlogPostTagFieldRefs;
    BlogPostTagArrow: Prisma.BlogPostTagArrowFieldRefs;
    BlogPostAuthor: Prisma.BlogPostAuthorFieldRefs;
    SpaceTimeCoordinates: Prisma.SpaceTimeCoordinatesFieldRefs;
}

export type FieldRefType<T extends NTTKey> = FieldRefs[T];
