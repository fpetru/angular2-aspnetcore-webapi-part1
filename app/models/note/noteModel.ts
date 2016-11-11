export class NoteModel {
    constructor(
        public id: string,
        public body: string,
        public updatedOn: Date,
        public createdOn: Date,
        public userId: number)
    { }
}