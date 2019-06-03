class IUser {
    _id: string;
    name: string;
    username: string;
    email: string;
    password: string;
}

export class User implements IUser {
    _id: string;
    name: string;
    username: string;
    email: string;
    password: string;

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