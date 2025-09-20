// https://68c7b9ad5d8d9f514732c30b.mockapi.io/api/v1/user

// Формат данных для регистрации
// {
//   username: "username",
//   password: "password"
// }
const Register = (e) => {
    e.preventDefault()

    const NewUser = {
        username: document.querySelector('.register-form #username').value,
        password : document.querySelector('.register-form #password').value,
    }
    fetch("https://68c7b9ad5d8d9f514732c30b.mockapi.io/api/v1/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(NewUser),
    })
        .then((response) => {
            response.json()
            alert("Регистрация успешно завершена")
            // if (response.ok) window.location.href = "/project%20(3)/project/"
        })
        .then((data) => console.log(data))
}
document.querySelector(".register-form").addEventListener("submit", Register)


