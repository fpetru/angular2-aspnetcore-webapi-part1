export class NoteItem {
    constructor(
        public id: string,
        public body: string,
        public updatedOn: Date,
        public createdOn: Date,
        public userId: number)
    { }
}