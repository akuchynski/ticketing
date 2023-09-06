import { OrderCancelledEvent, Publisher, Subjects } from "@tickapp/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
