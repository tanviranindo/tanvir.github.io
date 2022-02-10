window.onload = liveModification;

function liveModification() {
    setTimeout('method()', 1000);
}

function method() {
    document.getElementById('pageLocation').innerHTML = "Location : " + window.location.href;
    const date1 = new Date(document.lastModified);
    document.getElementById('lastModified').innerHTML = "Modified : " + date1.toLocaleDateString('en-us', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    const date2 = new Date();
    document.getElementById('time').innerHTML = "Time : " + date2.toLocaleDateString('en-us', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    liveModification();
}


window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});

const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function() {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
}