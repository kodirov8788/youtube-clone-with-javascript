const likeBtn = document.querySelector(".like__btn");
const dislikeBtn = document.querySelector(".dislike__btn");
let likeIcon = document.querySelector("#icon");
let dislikeIcon = document.querySelector("#icon2");
let shareLikeIcon = document.querySelector("#icon3");
let count2 = document.querySelector("#count2");
const backHover = document.querySelector(".back");
const surfaceText = document.querySelector(".surface");
const shareBtn = document.querySelector(".share__btn");
const closeBtn = document.querySelector(".close__btn");
const accordian = document.querySelector(".accordian");
const accBtn = document.querySelector(".acc__click");
const accSpan = document.querySelector(".text");


const sideBar = document.querySelector(".sidebar");
const openBtn = document.querySelector("#hamburger__menu");
let items = document.querySelector(".items");
let closeBtn2 = document.querySelector("#cancel");


accBtn.addEventListener("click", () => {
    if (!clicked) {
        clicked = true;
        accBtn.innerHTML = ` <i class="fas fa-chevron-up">  <span>   Show Less</span></i> `;
        accordian.style.display = "block";
    } else {
        clicked = false;
        accBtn.innerHTML = `<i class="fas fa-chevron-down">  <span>    Show More</span></i>`;
        accordian.style.display = "none";

    }
});







shareBtn.addEventListener("click", open1);

function open1() {
    backHover.style.width = "100%";
    surfaceText.style.display = "block";
}
closeBtn.addEventListener("click", close);

function close() {
    backHover.style.width = "0";
    surfaceText.style.display = "none";
}

let clicked = false;




likeBtn.addEventListener("click", () => {
    if (!clicked) {
        clicked = true;
        likeIcon.innerHTML = ` <i class="fas fa-thumbs-up "></i>`
        count.textContent++;
    } else {
        clicked = false;
        likeIcon.innerHTML = ` <i class="far fa-thumbs-up "></i>`;
        count.textContent--;
    }
});
dislikeBtn.addEventListener("click", () => {
    if (!clicked) {
        clicked = true;
        dislikeIcon.innerHTML = ` <i class="fas fa-thumbs-down "></i>`
        count2.textContent++;
    } else {
        clicked = false;
        dislikeIcon.innerHTML = ` <i class="far fa-thumbs-down "></i>`;
        count2.textContent--;
    }
});




openBtn.addEventListener("click", open);

function open() {
    // sideBar.style.width = "250px"
    items.style.display = "block";
    closeBtn2.style.right = "0";
    openBtn.style.left = "-50px";
    sideBar.classList.add("activeSidebar")
    backHover.style.width = "100%";
}
closeBtn2.addEventListener("click", close2);

function close2() {
    backHover.style.width = "0";
    openBtn.style.left = "0";
    // sideBar.style.width = "0";
    items.style.display = "block";
    closeBtn2.style.right = "-40px";
    sideBar.classList.remove("activeSidebar")
        // closeBtn2.classList.add("cancelActive");
}
// closeBtn2.addEventListener("over", close2);

// function close2() {
//     // openBtn.style.left = "0";
//     // // sideBar.style.width = "0";
//     // items.style.display = "block";
//     // closeBtn2.style.right = "-40px";
//     // sideBar.classList.remove("activeSidebar")
//     closeBtn2.classList.add("cancelActive");
// }