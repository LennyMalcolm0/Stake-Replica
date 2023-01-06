// VARIABLES AND FUNCTIONS FOR FIXED LEFT SIDE BAR
function leftSideMenu() {
    const minimize = document.querySelector(".fl-image-container .fl-head-image"),
    expand = document.querySelector(".ssb-head .ssb-head-image");

    minimize.addEventListener("mouseover", function() {
        document.querySelector(".fl-head-tooltip").style.display = "flex";
    })
    minimize.addEventListener("mouseout", function() {
        document.querySelector(".fl-head-tooltip").style.display = "none";
    })

    minimize.addEventListener("click", function() {
        document.querySelector(".stake-side-bar").classList.add("minimize");
        document.querySelector(".small-side-bar").style.display = "block";
    });
    expand.addEventListener("click", function() {
        document.querySelector(".stake-side-bar").classList.remove("minimize");
        document.querySelector(".small-side-bar").style.display = "none";
    });


    const casino = document.querySelector(".casino-main"),
    casinoContainer = document.querySelector(".fl-casino");

    casino.addEventListener("click", function(){
        casinoContainer.classList.toggle("fl-active");
    });
    

    const sports = document.querySelector(".sports-main"),
    sportsContainer = document.querySelector(".fl-sports");

    sports.addEventListener("click", function(){
        sportsContainer.classList.toggle("fl-active");
    });
    

    const promotions = document.querySelector(".promotions-main"),
    promotionsContainer = document.querySelector(".fl-promotions");

    promotions.addEventListener("click", function(){
        promotionsContainer.classList.toggle("fl-active");
    });
    

    const sponsorships = document.querySelector(".sponsorships-main"),
    sponsorshipsContainer = document.querySelector(".fl-sponsorships");

    sponsorships.addEventListener("click", function(){
        sponsorshipsContainer.classList.toggle("fl-active");
    });


    const activeDropdown = document.querySelectorAll(".fl-dd-element");
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

function smallSideMenu() {
    const expandMenu = document.querySelector(".ssb-head-image");
    expandMenu.addEventListener("mouseover", function() {
        document.querySelector(".ssb-head-tooltip").style.display = "flex";
    })
    expandMenu.addEventListener("mouseout", function() {
        document.querySelector(".ssb-head-tooltip").style.display = "none";
    })


    const ssbItem = document.querySelectorAll(".ssb-items .ssb-hover");
    ssbItem.forEach(item => {
        item.addEventListener("mouseover", function() {
            item.nextElementSibling.style.display = "flex";
        })
        item.addEventListener("mouseout", function() {
            item.nextElementSibling.style.display = "none";
        })
    })
}
smallSideMenu();

function walletDropdown() {
    const currentWallet = document.querySelector(".ft-current-wallet"),
    walletOptions = document.querySelector(".wallet-options");

    currentWallet.addEventListener("click", function(){
        walletOptions.classList.toggle("sw-active");
    });


    const currentCrypto = document.querySelector(".current-text .current-value"),
    wDropdownOptions = document.querySelectorAll(".wallet-dropdown-options .w-option");
    walletSearch = document.querySelector(".wallet-search input");

    walletSearch.addEventListener("keyup", function() {
        wsvalue = walletSearch.value.toLowerCase();
        wDropdownOptions.forEach(crypto => {
            if(crypto.lastElementChild.textContent.toLowerCase().indexOf(wsvalue) != -1) {
                crypto.style.display = "flex"
            }
            else {
                crypto.style.display = "none"
            }
        })
    });


    currentCrypto.innerHTML = document.querySelector(".wallet-dropdown-options .cv").firstElementChild.innerHTML;
    wDropdownOptions.forEach(element => {
        element.addEventListener("click", () => {
            currentCrypto.innerHTML = element.firstElementChild.innerHTML;
            document.querySelector(".current-text #current-image").src = element.children[1].firstElementChild.src;
            walletSearch.value = "";
            walletOptions.classList.toggle("sw-active");
        });
    
    });


    const chatIcon = document.querySelector(".chat-icon"),
    chatActive = document.querySelector(".chat");

    chatIcon.addEventListener("click", function(){
        chatActive.classList.toggle("chat-active");
    });
};
walletDropdown();

function oddsType() {
    const bsPopup = document.querySelectorAll(".menu2-right img"),
    popupItem = document.querySelector(".menu2-right");

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


    const threewayImage = document.querySelector(".three-way img"),
    threeway = document.querySelector(".three-way"),
    standardImage = document.querySelector(".standard img"),
    standard = document.querySelector(".standard");

    threewayImage.addEventListener("click", function() {
        threeway.style.display = "none";
        standard.style.display = "block";
    });
    
    standardImage.addEventListener("click", function() {
        standard.style.display = "none";
        threeway.style.display = "block";
    });


    const oddsDisplayToggle = document.querySelectorAll(".menu-all"),
    oddsDisplayType = document.querySelector(".odds-display-type");

    oddsDisplayToggle.forEach(odt => {
        odt.addEventListener("click", function() {
           oddsDisplayType.classList.toggle("odds-dd-active");
        })
    })

    
    const odOption = document.querySelectorAll(".od-option");

    odOption.forEach(option => {
        option.addEventListener("click", function() {
            document.querySelector(".bs-menu-odt span").innerHTML = option.innerHTML;
            oddsDisplayType.classList.toggle("odds-dd-active");
            document.querySelector(".odds-dropdown .od-option-active").classList.remove("od-option-active");
            option.classList.add("od-option-active");
        })
    })
};
oddsType();

function competition() {
    const compName = document.querySelectorAll(".comp-head");
    compName.forEach(cn => {
        cn.addEventListener("click", function() {
            cn.parentElement.classList.toggle("deactivate");
        })
    });


    const matchOdd = document.querySelectorAll(".match-odd");
    matchOdd.forEach(mo => {
        mo.addEventListener("click", function() {
            mo.classList.toggle("md-active");
        })
    });
};
competition();

function cashier() {
    const betMenu = document.querySelector(".bet-menu");
    betMenu.addEventListener("click", function() {
        document.querySelector(".bl-top").classList.toggle("bl-top-active");
    });

    const ddItem = document.querySelectorAll(".blt-dropdown .dd-item");
    ddItem.forEach(item => {
        item.addEventListener("click", () => {
            document.querySelector(".bet-menu .current-bm").innerHTML = item.children[1].innerHTML;
            document.querySelector(".blt-dropdown .blt-dd-active").classList.remove("blt-dd-active");
            item.classList.add("blt-dd-active");

            if (item.classList.contains("dd-betslip")) {
                document.getElementById("cbm-img").src = "Gallery\\gallery1\\my-bets.svg";
                item.firstElementChild.src = "Gallery\\gallery2\\active-betslip.svg";
                item.nextElementSibling.firstElementChild.src = "Gallery\\gallery2\\norm-mybet.svg";
            } else {
                document.getElementById("cbm-img").src = "Gallery\\gallery2\\current-mybets.svg";
                item.firstElementChild.src = "Gallery\\gallery2\\active-mybet.svg";
                item.previousElementSibling.firstElementChild.src = "Gallery\\gallery2\\norm-betslip.svg";
            };

            document.querySelector(".bl-top").classList.toggle("bl-top-active");
        });
    })


    const betType = document.querySelectorAll(".bet-type .bt-item");
    betType.forEach(bt => {
        bt.addEventListener("click", () => {
            document.querySelector(".bet-type .bt-active").classList.remove("bt-active");
            bt.classList.add("bt-active");
        })
    });


    const oddChanges = document.querySelector(".oc-text");
    oddChanges.addEventListener("click", function() {
        document.querySelector(".odd-changes").classList.toggle("alter-active");
    });


    const ocOption = document.querySelectorAll(".odd-changes .oc-option");
    ocOption.forEach(option => {
        option.addEventListener("click", () => {
            document.querySelector(".oc-text span").innerHTML = option.innerHTML;
            document.querySelector(".odd-changes .oc-active").classList.remove("oc-active");
            option.classList.add("oc-active");
            document.querySelector(".odd-changes").classList.toggle("alter-active");
        })
    });
};
cashier();