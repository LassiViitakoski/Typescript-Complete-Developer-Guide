import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserEdit } from "./views/UserEdit";
import { UserList } from "./views/UserList";

const user = User.buildUser({ name: 'NAME', age: 20 });

const root = document.getElementById('root');

if (root) {
    const userEdit = new UserEdit(root, user);

    userEdit.render();
} else {
    throw new Error('Root element not found');
}

const users = User.buildUserCollection();

const usersDiv = document.getElementById('users');

users.on('change', () => {
    if (usersDiv) {
        const userList = new UserList(usersDiv, users);
        userList.render();
    }
});

users.fetch();