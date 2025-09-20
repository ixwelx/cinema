const login = (e) => {
    e.preventDefault()

    const user = {
        username: document.querySelector('.login-form #username').value,
        password : document.querySelector('.login-form #password').value,
    }

    fetch(`https://68c7b9ad5d8d9f514732c30b.mockapi.io/api/v1/user?username=${user.username}&password=${user.password}`)
        .then((response) => {
            response.json()
            if (response.ok) window.location.href = "/project%20(3)/project/"
            else alert ("Неправильный пароль или неправильный логин")
        })
        .then((data) => console.log(data))
}

document.querySelector(".login-form").addEventListener("submit", login)