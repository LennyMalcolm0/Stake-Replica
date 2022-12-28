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
    currentCrypto = document.querySelector(".current-v"),
    selectedCrypto = document.querySelectorAll("#crypto-balance"),
    currentImage = document.getElementById(".current-image"),
    selectedImage = document.querySelectorAll("#selected-image"),
    activeCrypto = document.querySelector(".active-crypto"),
    wDropdownOptions = document.querySelectorAll(".w-option");

    currentWallet.addEventListener("click", function(){
        walletOptions.classList.toggle("sw-active");
    });

    wDropdownOptions.forEach(element => {
        element.addEventListener("click", () => {
            currentCrypto.innerHTML = activeCrypto.innerHTML;
            document.querySelector(".wallet-dropdown-options .active-crypto").classList.remove("active-crypto");
            element.classList.add("active-crypto");
        });
    });

    const chatIcon = document.querySelector(".chat-icon"),
    chatActive = document.querySelector(".chat");

    chatIcon.addEventListener("click", function(){
        chatActive.classList.toggle("chat-active");
    });

};

walletDropdown();

const bsPopup = document.querySelector(".menu2-right img"),
popupItem = document.querySelector(".menu2-right");

bsPopup.addEventListener("mouseover", function() {
    popupItem.classList.add("popup-hover");
});

bsPopup.addEventListener("mouseout", function() {
    popupItem.classList.remove("popup-hover");
});




