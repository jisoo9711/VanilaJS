const loginid = document.querySelector("#loginID");
const loginInput = document.querySelector("#loginID input");
const UserInfo = document.querySelector("#userinfo");

const Hidden = "hidden";
const User = "user";

function LoginSave(event) {
    event.preventDefault();
    loginid.classList.add(Hidden);
    const user = loginInput.value;
    localStorage.setItem(User, user);
    Login(user);



}


function Login(user) {

    UserInfo.innerText = `Welcome
    ${user}!`;

    UserInfo.classList.remove(Hidden);

}

const savedUser = localStorage.getItem(User);

if (savedUser === null) {
    loginid.classList.remove(Hidden);
    loginid.addEventListener("submit", LoginSave);
} else {
    Login(savedUser);
}

