import { OrderCreatedEvent, Publisher, Subjects } from '@tickapp/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
