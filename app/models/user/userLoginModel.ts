export class UserLoginModel {
    constructor(
        public userName: string,
        public password: string,
        public keepLoggedIn: boolean)
    {}
}