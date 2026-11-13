
function showProfile(id) {

    let message = "";

    if (id === "amit") {
        message = "Amit is an MCA graduate and Frontend Developer.";
    }
    else if (id === "rahul") {
        message = "Rahul is a creative designer who loves UI/UX.";
    }
    else if (id === "saloni") {
        message = "Saloni is a web developer with an interest in databases.";
    }

    document.getElementById(id).innerText = message;
}
