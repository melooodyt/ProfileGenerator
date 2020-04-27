const userInput = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".profile-name");
const unContainer = document.querySelector(".profile-username");
const reposContainer = document.querySelector(".profile-repos");
const urlContainer = document.querySelector(".profile-url");
const user_id = "";
const user_code = "";

const loadUsers = async(user) => {
    const get_api = await fetch('http://api.github.com/users/${user}?user_id=${user_id}&user_code=${user_code}');

    const result = await get_api.json();
    return { result }
};

const showResult = () => {
    loadUsers(inputValue.value).then((res) => {
        console.log(res);
        nameContainer.innerHTML = 'Name: <span class="profile-value">${res.data.name}</span>';
        unContainer.innerHTML = 'Username: <span class="profile-value">${res.data.login}<span>';
        reposContainer.innerHTML = 'Repos: <span class="profile-value">${res.data.public_repos}<span>';
        urlContainer.innerHTML = 'URL: <span class="profile-value">${res.data.html_url}</span>';
    
    })
};

searchButton.addEventListener("click", () => {
    showResult();
    //console.log("Welcome");
})