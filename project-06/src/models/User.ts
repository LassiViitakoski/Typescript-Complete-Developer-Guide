import { Model } from './Model'
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';

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

    isAdminUser(): boolean {
        return this.get('id') === 1;
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