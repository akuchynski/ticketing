import { Subjects, Publisher, ExpirationCompleteEvent } from '@tickapp/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
