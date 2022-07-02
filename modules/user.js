export class User {
    constructor(firstName,lastName,userName,email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
    }

    inform(content) {
        console.log(`User ${this.firstName} ${this.lastName} was informed about new content: ${content}`);
    }

    printUserData() {
        return `
        First Name: ${this.firstName}
        Last Name: ${this.lastName}
        User Name: ${this.userName}
        email: ${this.email}`
    }
}