export class Notification {
  private subject: string;
  private message: string;
  private isRead: boolean;
  private receivedOn: number;
  private readOn: number;
  constructor(
    subject: string,
    message: string,
    isRead: boolean,
    receivedOn: number,
    readOn: number
  ){
    this.subject = subject;
    this.message = message;
    this.isRead = isRead;
    this.receivedOn = receivedOn;
    this.readOn = readOn;
  }
}
