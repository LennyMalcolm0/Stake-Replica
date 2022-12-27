// VARIABLES AND FUNCTIONS FOR FIXED LEFT SIDE BAR
function leftSideMenu() {
    const casino = document.querySelector(".casino-main"),
    casinoContainer = document.querySelector(".fl-casino"),
    sports = document.querySelector(".sports-main"),
    sportsContainer = document.querySelector(".fl-sports"),
    promotions = document.querySelector(".promotions-main"),
    promotionsContainer = document.querySelector(".fl-promotions"),
    sponsorships = document.querySelector(".sponsorships-main"),
    sponsorshipsContainer = document.querySelector(".fl-sponsorships"),
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
    
    sponsorships.addEventListener("click", function(){
        sponsorshipsContainer.classList.toggle("fl-active");
    });

    activeDropdown.forEach(btn => {
        btn.addEventListener("click", function(){
            document.querySelector(".fl-dropdown .fl-dropdown-active").classList.remove("fl-dropdown-active");
            btn.classList.add("fl-dropdown-active");
        })
    });


    const selectLang = document.querySelector(".fl-select-lang"),
    langToggle = document.querySelector(".select"),
    langChange = document.querySelector(".select .select-text"),
    langOptions = document.querySelectorAll(".lang-options");

    langToggle.addEventListener("click", function(){
        selectLang.classList.toggle("lang-dd-active");
    });
    
    langOptions.forEach(lang => {
        lang.addEventListener("click", function(){
            langChange.innerHTML = lang.innerHTML;
            document.querySelector(".select-dropdown .active-lang").classList.remove("active-lang");
            lang.classList.add("active-lang");
            selectLang.classList.toggle("lang-dd-active");
        });
    });
};

leftSideMenu();

function walletDropdown() {
    const currentWallet = document.querySelector(".ft-current-wallet"),
    walletOptions = document.querySelector(".wallet-options"),
    currentCrypto = document.querySelector(".select-text span"),
    selectedCrypto = document.querySelectorAll("#crypto-balance"),
    currentImage = document.getElementById("current-image"),
    selectedImage = document.querySelectorAll("#selected-image"),
    wDropdownOptions = document.querySelectorAll(".w-option");

    currentWallet.addEventListener("click", function(){
    walletOptions.classList.toggle("sw-active");
    });

    // wDropdownOptions.forEach(element => {
    //     element.addEventListener("click", () => {
    //         selectedCrypto.forEach(sc => {
    //             currentCrypto.innerHTML = sc.innerHTML;
    //         })
    //     });
    // });

    
};

walletDropdown();






