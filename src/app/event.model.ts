export class Event {
  constructor (
    public date: string,
    public location: string,
    public venue: string,
    public tickets: boolean,
    public id: number
  ) { }
}
