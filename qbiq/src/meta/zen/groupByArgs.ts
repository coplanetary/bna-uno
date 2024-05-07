import { Prisma } from "@prisma/client";
import { NTTKey } from "./entities-type";

export interface GroupByArgs {
    Appointment: Prisma.AppointmentGroupByArgs;
    AppointmentType: Prisma.AppointmentTypeGroupByArgs;
    Location: Prisma.LocationGroupByArgs;
    Patient: Prisma.PatientGroupByArgs;
    Provider: Prisma.ProviderGroupByArgs;
    Form: Prisma.FormGroupByArgs;
    FormEncounter: Prisma.FormEncounterGroupByArgs;
    FormResource: Prisma.FormResourceGroupByArgs;
    FormSubmission: Prisma.FormSubmissionGroupByArgs;
    Field: Prisma.FieldGroupByArgs;
    FieldAnswer: Prisma.FieldAnswerGroupByArgs;
    FieldOption: Prisma.FieldOptionGroupByArgs;
    Encounter: Prisma.EncounterGroupByArgs;
    EncounterType: Prisma.EncounterTypeGroupByArgs;
    Obs: Prisma.ObsGroupByArgs;
    Order: Prisma.OrderGroupByArgs;
    OrderFrequency: Prisma.OrderFrequencyGroupByArgs;
    OrderRoute: Prisma.OrderRouteGroupByArgs;
    OrderType: Prisma.OrderTypeGroupByArgs;
    OrderUnit: Prisma.OrderUnitGroupByArgs;
    Concept: Prisma.ConceptGroupByArgs;
    ConceptAnswer: Prisma.ConceptAnswerGroupByArgs;
    ConceptClass: Prisma.ConceptClassGroupByArgs;
    ConceptDatatype: Prisma.ConceptDatatypeGroupByArgs;
    ConceptMap: Prisma.ConceptMapGroupByArgs;
    ConceptName: Prisma.ConceptNameGroupByArgs;
    ConceptNumeric: Prisma.ConceptNumericGroupByArgs;
    ConceptProposal: Prisma.ConceptProposalGroupByArgs;
    ConceptSet: Prisma.ConceptSetGroupByArgs;
    ConceptSource: Prisma.ConceptSourceGroupByArgs;
    ConceptWord: Prisma.ConceptWordGroupByArgs;
    Resource: Prisma.ResourceGroupByArgs;
    BlogPost: Prisma.BlogPostGroupByArgs;
    BlogPostTag: Prisma.BlogPostTagGroupByArgs;
    BlogPostTagArrow: Prisma.BlogPostTagArrowGroupByArgs;
    BlogPostAuthor: Prisma.BlogPostAuthorGroupByArgs;
    SpaceTimeCoordinates: Prisma.SpaceTimeCoordinatesGroupByArgs;
}

export type GroupByArgType<T extends NTTKey> = GroupByArgs[T];
