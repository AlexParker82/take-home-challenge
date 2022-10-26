const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const userRow = document.getElementById("userRow");
const userTable = document.getElementById("userTable");

fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
        data.forEach((user, index) => {
            let userTd = document.createElement('tr');
            userTd.setAttribute('id', user.id)
            userTd.textContent = user.name;
            userRow.append(userTd);
        })
    });

userTable.addEventListener("click", (e) => {
    let userId = e.target.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then((res) => res.json())
        .then((data) => console.log(data.body))
})