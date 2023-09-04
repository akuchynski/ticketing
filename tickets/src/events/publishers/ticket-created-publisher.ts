import { Publisher, Subjects, TicketCreatedEvent } from '@tickapp/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
