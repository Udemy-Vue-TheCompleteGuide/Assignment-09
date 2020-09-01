export default class User {
    constructor(fName = '', lName = '', email = '', password = '') {
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.password = password;
    }

    get fullName() {
        return `${this.fName} ${this.lName}`;
    }
}
