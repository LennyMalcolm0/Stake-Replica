// VARIABLES AND FUNCTIONS FOR FIXED LEFT SIDE BAR

const casino = document.querySelector(".casino-main"),
casinoContainer = document.querySelector(".fl-casino"),
sports = document.querySelector(".sports-main"),
sportsContainer = document.querySelector(".fl-sports"),
promotions = document.querySelector(".promotions-main"),
promotionsContainer = document.querySelector(".fl-promotions"),
activeDropdown = document.querySelectorAll(".fl-dd-element");

casino.addEventListener("click", function(){
    casinoContainer.classList.toggle("fl-active");
});

sports.addEventListener("click", function(){
    sportsContainer.classList.toggle("fl-active");
});

promotions.addEventListener("click", function(){
    promotionsContainer.classList.toggle("fl-active");
});

activeDropdown.forEach(btn => {
    btn.addEventListener("click", function(){
        document.querySelector(".fl-dropdown .fl-dropdown-active").classList.remove("fl-dropdown-active");
        btn.classList.add("fl-dropdown-active");
    })
});