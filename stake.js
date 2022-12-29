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

const bsPopup = document.querySelectorAll(".menu2-right img"),
popupItem = document.querySelector(".menu2-right"),

threewayImage = document.querySelector(".three-way img"),
threeway = document.querySelector(".three-way"),
standardImage = document.querySelector(".standard img"),
standard = document.querySelector(".standard"),

oddsDisplayType = document.querySelector(".odds-display-type"),
oddsDisplayToggle = document.querySelectorAll(".menu-all"),
odTotal = document.querySelector(".od-total"),
odHandicap = document.querySelector(".od-handicap"),
odWinner = document.querySelector(".od-winner");


bsPopup.forEach(img => {
    img.addEventListener("mouseover", function() {
        popupItem.classList.add("popup-hover");
    })
});

bsPopup.forEach(img => {
    img.addEventListener("mouseout", function() {
        popupItem.classList.remove("popup-hover");
    })
});

threewayImage.addEventListener("click", function() {
    threeway.style.display = "none";
    standard.style.display = "block";
});

standardImage.addEventListener("click", function() {
    standard.style.display = "none";
    threeway.style.display = "block";
});

oddsDisplayToggle.forEach(odt => {
    odt.addEventListener("click", function() {
        oddsDisplayType.classList.toggle("odds-dd-active");
    })
})


odTotal.addEventListener("click", function() {
    document.querySelector(".bs-menu-winner").style.display = "none";
    document.querySelector(".bs-menu-handicap").style.display = "none";
    document.querySelector(".bs-menu-total").style.display = "flex";

    odHandicap.classList.remove("od-option-active");
    odWinner.classList.remove("od-option-active");
    odTotal.classList.add("od-option-active");
    oddsDisplayType.classList.toggle("odds-dd-active");
});

odHandicap.addEventListener("click", function() {
    document.querySelector(".bs-menu-winner").style.display = "none";
    document.querySelector(".bs-menu-handicap").style.display = "flex";
    document.querySelector(".bs-menu-total").style.display = "none";

    odHandicap.classList.add("od-option-active");
    odWinner.classList.remove("od-option-active");
    odTotal.classList.remove("od-option-active");
    oddsDisplayType.classList.toggle("odds-dd-active");
});

odWinner.addEventListener("click", function() {
    document.querySelector(".bs-menu-winner").style.display = "flex";
    document.querySelector(".bs-menu-handicap").style.display = "none";
    document.querySelector(".bs-menu-total").style.display = "none";

    odHandicap.classList.remove("od-option-active");
    odWinner.classList.add("od-option-active");
    odTotal.classList.remove("od-option-active");
    oddsDisplayType.classList.toggle("odds-dd-active");
});





