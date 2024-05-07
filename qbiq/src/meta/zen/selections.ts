import { Prisma } from "@prisma/client";
import { NTTKey } from "./entities-type";

export interface Selections {
    Appointment: Prisma.AppointmentSelect;
    AppointmentType: Prisma.AppointmentTypeSelect;
    Location: Prisma.LocationSelect;
    Patient: Prisma.PatientSelect;
    Provider: Prisma.ProviderSelect;
    Form: Prisma.FormSelect;
    FormEncounter: Prisma.FormEncounterSelect;
    FormResource: Prisma.FormResourceSelect;
    FormSubmission: Prisma.FormSubmissionSelect;
    Field: Prisma.FieldSelect;
    FieldAnswer: Prisma.FieldAnswerSelect;
    FieldOption: Prisma.FieldOptionSelect;
    Encounter: Prisma.EncounterSelect;
    EncounterType: Prisma.EncounterTypeSelect;
    Obs: Prisma.ObsSelect;
    Order: Prisma.OrderSelect;
    OrderFrequency: Prisma.OrderFrequencySelect;
    OrderRoute: Prisma.OrderRouteSelect;
    OrderType: Prisma.OrderTypeSelect;
    OrderUnit: Prisma.OrderUnitSelect;
    Concept: Prisma.ConceptSelect;
    ConceptAnswer: Prisma.ConceptAnswerSelect;
    ConceptClass: Prisma.ConceptClassSelect;
    ConceptDatatype: Prisma.ConceptDatatypeSelect;
    ConceptMap: Prisma.ConceptMapSelect;
    ConceptName: Prisma.ConceptNameSelect;
    ConceptNumeric: Prisma.ConceptNumericSelect;
    ConceptProposal: Prisma.ConceptProposalSelect;
    ConceptSet: Prisma.ConceptSetSelect;
    ConceptSource: Prisma.ConceptSourceSelect;
    ConceptWord: Prisma.ConceptWordSelect;
    Resource: Prisma.ResourceSelect;
    BlogPost: Prisma.BlogPostSelect;
    BlogPostTag: Prisma.BlogPostTagSelect;
    BlogPostTagArrow: Prisma.BlogPostTagArrowSelect;
    BlogPostAuthor: Prisma.BlogPostAuthorSelect;
    SpaceTimeCoordinates: Prisma.SpaceTimeCoordinatesSelect;
}

export type SelectionType<T extends NTTKey> = Selections[T];
