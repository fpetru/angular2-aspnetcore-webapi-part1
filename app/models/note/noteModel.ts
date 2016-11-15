export class NoteItem {
    constructor(
        public Id: string,
        public Body: string,
        public UpdatedOn: Date,
        public CreatedOn: Date,
        public UserId: number)
    { }
}