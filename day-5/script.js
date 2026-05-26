function changeContent() {
    document.getElementById("example1").innerHTML =
        "<strong>HELLO YOU CHANGED CONTEXT</strong>";

    document.getElementById("example2").textContent =
        "HI YOU CHANGED CONTEXT USING CHANGE CONTEXT BUTTON";
}


function addClass() {
    let el = document.getElementById("example");
    el.classList.add("highlight");
    el.classList.add("bold");
}

function removeClass() {
    let el = document.getElementById("example");

    // remove both so you SEE clear effect
    el.classList.remove("highlight");
    el.classList.remove("bold");
}

function toggleClass() {
    document.getElementById("example").classList.toggle("highlight");
}

/* STYLE */
function changeStyle() {
    let el = document.getElementById("demo");

    el.style.color = "white";
    el.style.fontSize = "28px";
    el.style.backgroundColor = "black";
    el.style.padding = "10px";
}

/* CREATE ELEMENT */
function createElementDemo() {
    let newDiv = document.createElement("div");
    newDiv.textContent = "New Element Created";
    document.body.appendChild(newDiv);

    setTimeout(() => {
        newDiv.remove();
    }, 3000);
}


function changeImage() {
    let img = document.getElementById("image");

   
    img.src = "https://picsum.photos/200?random=" + Math.random();
}

function removeImageAttr() {
    document.getElementById("image").removeAttribute("src");
}


function showData() {
    let id = document.getElementById("demoData").dataset.userId;
    document.getElementById("output").textContent =
        "User ID: " + id;
}
