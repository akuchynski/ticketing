import { Publisher, Subjects, TicketUpdatedEvent } from '@tickapp/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
