export class Creator {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.content = '';
        this.actions = [];
    }

    createContent(content) {
        this.content = content;
        this.notifyAll();
    }

    notifyAll() {
        if(this.actions.length === 0) {
            console.log(`Users not informed about new content: ${this.content}`);
        }
        else {
            return this.actions.forEach(subs => subs.inform(this.content));
        }        
    }

    register(observer) {
        this.actions.push(observer);
    }

    printCreatorData() {
        return `
        First Name ${this.firstName}
        Last Name ${this.lastName}`
    }
};