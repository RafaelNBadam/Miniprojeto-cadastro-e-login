document.addEventListener("DOMContentLoaded", function () {
    const loginTab = document.getElementById("loginTab");
    const registerTab = document.getElementById("registerTab");
    const profileTab = document.getElementById("profileTab");
    const loginContent = document.getElementById("loginContent");
    const registerContent = document.getElementById("registerContent");
    const profileContent = document.getElementById("profileContent");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const editProfileButton = document.getElementById("editProfile");
    const deleteProfileButton = document.getElementById("deleteProfile");
    const usernameSpan = document.getElementById("username");
    const emailSpan = document.getElementById("email");
    const repeatPassword = document.getElementById("repeatPassword");
if (!localStorage.getItem("seu_usuario")) {
    registerTab.classList.add("active");
    registerContent.style.display = "block";
}
    if (localStorage.getItem("seu_usuario")) {
    loginTab.classList.add("active");
    loginContent.style.display = "block";
    registerContent.style.display = "none";
    profileContent.style.display = "none";
} else {
    registerTab.classList.add("active");
    registerContent.style.display = "block";
    loginContent.style.display = "none";
    profileContent.style.display = "none";
}

loginTab.classList.add("active");
loginContent.style.display = "block";
    loginTab.classList.add("active");
    loginContent.style.display = "block";
    registerContent.style.display = "none"; 
    profileContent.style.display = "none";

    loginTab.addEventListener("click", function () {
        loginTab.classList.add("active");
        registerTab.classList.remove("active");
        profileTab.classList.remove("active");
        loginContent.style.display = "block";
        registerContent.style.display = "none";
        profileContent.style.display = "none";
    });

    registerTab.addEventListener("click", function () {
        loginTab.classList.remove("active");
        registerTab.classList.add("active");
        profileTab.classList.remove("active");
        loginContent.style.display = "none";
        registerContent.style.display = "block";
        profileContent.style.display = "none";
    });

    profileTab.addEventListener("click", function () {
        loginTab.classList.remove("active");
        registerTab.classList.remove("active");
        profileTab.classList.add("active");
        loginContent.style.display = "none";
        registerContent.style.display = "none";
        profileContent.style.display = "block";
    });

   
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const loginUsername = document.getElementById("loginUsername").value;
        const loginPassword = document.getElementById("loginPassword").value;

        // Verifique as credenciais no localStorage
        const storedUser = JSON.parse(localStorage.getItem(loginUsername));

        if (storedUser && storedUser.password === loginPassword) {
            usernameSpan.textContent = storedUser.username;
            emailSpan.textContent = storedUser.email;
            profileTab.click();
            alert("Cadastro/Login bem-sucedido!");
        } else {
            alert("Credenciais inválidas. Tente novamente.");
        }
    });

    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const registerUsername = document.getElementById("registerUsername").value;
        const registerEmail = document.getElementById("registerEmail").value;
        const registerPassword = document.getElementById("registerPassword").value;

        if (registerPassword !== repeatPassword.value) {
            alert("A senha e a repetição da senha não coincidem. Tente novamente.");
            return;
        }

        if (localStorage.getItem(registerUsername)) {
            alert("Usuário já existe. Escolha um nome de usuário diferente.");
            return;
        }

        const user = {
            username: registerUsername,
            email: registerEmail,
            password: registerPassword,
        };

        localStorage.setItem(registerUsername, JSON.stringify(user));

        loginTab.classList.add("active");
        loginContent.style.display = "block";
        registerTab.classList.remove("active");
        registerContent.style.display = "none";
        profileContent.style.display = "none";

        usernameSpan.textContent = user.username;
        emailSpan.textContent = user.email;
        loginTab.click();
        alert("Cadastro/Login bem-sucedido!");
    });

    editProfileButton.addEventListener("click", function () {
        editProfileButton.addEventListener("click", function () {
            const currentUsername = usernameSpan.textContent;
            const currentEmail = emailSpan.textContent;
            const newUsername = prompt("Digite um novo nome de usuário:", currentUsername);
            const newEmail = prompt("Digite um novo email:", currentEmail);
        
            if (newUsername !== null && newEmail !== null) {
                usernameSpan.textContent = newUsername;
                emailSpan.textContent = newEmail;
            }
        });
        
    });

        deleteProfileButton.addEventListener("click", function () {
            const confirmDelete = confirm("Tem certeza de que deseja excluir o perfil?");
            if (confirmDelete) {
                localStorage.removeItem(usernameSpan.textContent);
                usernameSpan.textContent = "";
                emailSpan.textContent = "";
                loginTab.click();
            }
        });
        
    });

localStorage.clear();

console.log("Username:", user.username);
console.log("Email:", user.email);

profileTab.click();
console.log("Profile tab clicked");