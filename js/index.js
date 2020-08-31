function submit() {
    const name = document.getElementById("name").value;
    if (name.length === 0) {
        alert("Enter Your name");
    } else {
        sessionStorage.setItem("name", name);
        window.location.href = "/quiz.html";
    }
}