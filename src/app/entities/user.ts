import { Quiz } from './quiz';

class IUser {
    _id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    quizes: Quiz[];
}

export class User implements IUser {
    _id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    quizes : Quiz[];

    constructor(user?: IUser | firebase.User) {
        if (user) {
            if (user instanceof IUser) {
                this._id = user._id;
            } else {
                this.username = user.displayName;
            }
        }
    }

    method() {}
}