import { Prisma } from "@prisma/client";
import { NTTKey } from "./entities-type";

export interface Inclusions {
    Appointment: Prisma.AppointmentInclude;
    AppointmentType: Prisma.AppointmentTypeInclude;
    Location: Prisma.LocationInclude;
    Patient: Prisma.PatientInclude;
    Provider: Prisma.ProviderInclude;
    Form: Prisma.FormInclude;
    FormEncounter: Prisma.FormEncounterInclude;
    FormResource: Prisma.FormResourceInclude;
    FormSubmission: Prisma.FormSubmissionInclude;
    Field: Prisma.FieldInclude;
    FieldAnswer: Prisma.FieldAnswerInclude;
    FieldOption: Prisma.FieldOptionInclude;
    Encounter: Prisma.EncounterInclude;
    EncounterType: Prisma.EncounterTypeInclude;
    Obs: Prisma.ObsInclude;
    Order: Prisma.OrderInclude;
    OrderFrequency: Prisma.OrderFrequencyInclude;
    OrderRoute: Prisma.OrderRouteInclude;
    OrderType: Prisma.OrderTypeInclude;
    OrderUnit: Prisma.OrderUnitInclude;
    Concept: Prisma.ConceptInclude;
    ConceptAnswer: Prisma.ConceptAnswerInclude;
    ConceptClass: Prisma.ConceptClassInclude;
    ConceptDatatype: Prisma.ConceptDatatypeInclude;
    ConceptMap: Prisma.ConceptMapInclude;
    ConceptName: Prisma.ConceptNameInclude;
    ConceptNumeric: Prisma.ConceptNumericInclude;
    ConceptProposal: Prisma.ConceptProposalInclude;
    ConceptSet: Prisma.ConceptSetInclude;
    ConceptSource: Prisma.ConceptSourceInclude;
    ConceptWord: Prisma.ConceptWordInclude;
    Resource: Prisma.ResourceInclude;
    BlogPost: Prisma.BlogPostInclude;
    BlogPostTag: Prisma.BlogPostTagInclude;
    BlogPostTagArrow: Prisma.BlogPostTagArrowInclude;
    BlogPostAuthor: Prisma.BlogPostAuthorInclude;
    SpaceTimeCoordinates: Prisma.SpaceTimeCoordinatesInclude;
}

export type InclusionType<T extends NTTKey> = Inclusions[T];
