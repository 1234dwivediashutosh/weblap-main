const flipCard = document.getElementById("flip-card");
const searchInput = document.getElementById("search-input");
const errorMsg = document.getElementById("error-msg");

async function searchUser() {
    const username = searchInput.value.trim();
    
    if (username === "") return;

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        // Agar user nahi mila
        if (response.status === 404) {
            errorMsg.innerText = "User not found!";
            errorMsg.style.display = "block";
            return;
        }

        const data = await response.json();
        
        // Data ko back card me feed karna
        document.getElementById("avatar").src = data.avatar_url;
        document.getElementById("name").innerText = data.name || data.login;
        
        const githubLink = document.getElementById("github-link");
        githubLink.innerText = `@${data.login}`;
        githubLink.href = data.html_url;

        // Bio na ho toh default text
        document.getElementById("bio").innerText = data.bio || "No bio available for this user.";
        
        document.getElementById("repos").innerText = data.public_repos;
        document.getElementById("followers").innerText = data.followers;
        document.getElementById("following").innerText = data.following;

        // Error message hatao aur card palat do
        errorMsg.style.display = "none";
        flipCard.classList.add("is-flipped");
        
    } catch (error) {
        errorMsg.innerText = "Something went wrong!";
        errorMsg.style.display = "block";
    }
}

function resetCard() {
    // Wapas pichhe ghumao aur input clear karo
    flipCard.classList.remove("is-flipped");
    searchInput.value = "";
}

// Enter dabane pe search chale
searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchUser();
    }
});