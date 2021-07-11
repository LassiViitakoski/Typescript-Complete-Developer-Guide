import { Model } from './Model'
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps) {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        );
    }

    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(
            rootUrl,
            (json: UserProps) => User.buildUser(json)
        );
    }

    setRandomAge(): void {
        const age = Math.round(Math.random() * 100);
        this.set({ age });
    }




    // With static methods we can now build different versions of User, example below if we
    // want to replace ApiSync with LocalSync and fetch user data with LocalSync implementation!

    // static buildLocalUser(attrs: UserProps) {
    //     return new User(
    //         new Attributes<UserProps>(attrs),
    //         new Eventing(),
    //         new LocalSync<UserProps>(rootUrl)
    //     );
    // }
}