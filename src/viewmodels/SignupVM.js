import User from "@/models/User";

export default class SignupVM {
    constructor(user = new User(), saveData = false) {
        this.user = user;
        this.saveData = saveData;
    }

    get saveDataRead() {
        return this.saveData ? 'Yes' : 'No';
    }
}
