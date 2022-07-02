import {User} from './modules/user.js';
import {Creator} from './modules/creator.js';

let applicationState = false;

if(applicationState == true) {
    console.log("----- The Application is Working -----");
    let user1 = new User("Elisha","Bartov","ElishaB","elisha.bartov@emerson.com");
    let user2 = new User("Renata","Fayziev","RenataF","renatulya.f@gmail.com");
    let user3 = new User("Evelin","Bartov","Evelinb","evelin.b@gmail.com");

    let creator1 = new Creator("Tomer","Babamurator");
    let creator2 = new Creator("Shuhrat","Bartov");
    let creator3 = new Creator("Max","Siskovetski");

    console.log("Users:");
    console.log(user1.printUserData());
    console.log(user2.printUserData());
    console.log(user3.printUserData());

    console.log("Content Creators:");
    console.log(creator1.printCreatorData());
    console.log(creator2.printCreatorData());
    console.log(creator3.printCreatorData());

    console.log("Creator 1 notifications:");
    creator1.register(user1);
    creator1.register(user2);
    creator1.register(user3);
    creator1.createContent("New Video Uploaded");

    console.log("Creator 2 notifications:");
    creator2.register(user1);
    creator2.register(user3);
    creator2.createContent("Video deleted from Youtube");

    console.log("Creator 3 notifications");
    creator3.createContent("Video reloaded");
}
else {
    console.log("The Application is Down...");
}

