import { User, UserProps } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: 'NAME', age: 20 });

const userForm = new UserForm(
    document.getElementById('root'),
    user
);

userForm.render();


// const colletion = User.buildUserCollection();
// colletion.on('change', () => {
//     console.log(colletion)
//     console.log('changed');
// })

// colletion.fetch();