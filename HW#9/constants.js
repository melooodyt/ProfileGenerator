const userInput = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const usernameContainer = document.querySelector(".profile-name");
const unContainer = document.querySelector(".profile-username");
const reposContainer = document.querySelector(".profile-repos");
const urlContainer = document.querySelector(".profile-url");

const user_id = "";
const user_code = "";

const fetchUsers = async() => {
    const api_call = await fetch('https://api.github.com/users/${user}?user_id=${user_id}&user_code=${user_code}');

    const data = await api_call.json(); 
    return { data }

};





const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        console.log(res);

        usernameContainer.innerHTML = 'Name: <span class="main__profile-value">${res.data.name}</span>';

        unContainer.innerHTML = 'Username: <span class="main__profile-value">${res.data.login}</span>';

        reposConatainer.innerHTML = 'Repos: <span class="main__profile-value">${res.data.public_repos}</span>';

        urlContainer.innerHTML = 'URL: <span class="main__profile-value">${res.data.html_url}</span>';

    })
};

searchButton.addEventListener("click", () => {
    console.log("Welcome");
})