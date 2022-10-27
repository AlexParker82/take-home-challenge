const apiUrl = "https://jsonplaceholder.typicode.com/users";
const userContainer = document.getElementById("userContainer");
const postContainer = document.getElementById("postContainer");

fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user, index) => {
      let userDiv = document.createElement("div");
      userDiv.setAttribute("id", user.id);
      userDiv.classList.add("userDiv");
      userDiv.textContent = user.name;
      userContainer.append(userDiv);
    });
  });

userContainer.addEventListener("click", (e) => {
  postContainer.innerHTML = "";
  let userId = e.target.id;
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((post, index) => {
        let postDiv = document.createElement('div');
        let title = document.createElement('div');
        let body = document.createElement('div');

        title.classList.add("title");
        title.textContent = `Title: ${post.title}`;
        body.textContent = `Body: ${post.body}`;
        postDiv.setAttribute('id', post.id);
        postDiv.classList.add('postDiv');
        postDiv.append(title);
        postDiv.append(body);
        postContainer.append(postDiv);
      });
    });
});
