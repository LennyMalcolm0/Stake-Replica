const intro = document.querySelector(".intro");
setInterval(() => {
    intro.style.display = "none";
    $(".odds-page").css({"display": "block"});

    // Resetting width to avoid display errors 
    const mainPageMenu = document.querySelector(".scroll-menu"),
    mainPageContainer = document.querySelector(".bs-container"),
    max700 = window.matchMedia("(max-width: 700px)");
    if (max700.matches) {
        mainPageMenu.style.width = `${mainPageContainer.offsetWidth}px`;
    } else {
        mainPageMenu.style.width = "fit-content";
    };
}, 2000);

$(document).ready(function(){

    const winHeight = window.innerHeight;
    $("body").css({"height": `${winHeight}px`});
    $(".fixed-left").css({"height": `${winHeight}px`});
    $(".small-side-bar").css({"height": `${winHeight}px`});
    $(".odds-page").css({"height": `${winHeight}px`});
    $(".obe-container").css({"height": `${winHeight}px`});
    $(".popup-background").css({"height": `${winHeight}px`});
    $(".cashier").css({"height": `${winHeight}px`});
    $(".games-booked").css({"height": `calc(${winHeight}px - 300px)`});
    $(".games-booked-multi").css({"height": `calc(${winHeight}px - 340px)`});

    // Reusable Codes
    
        // Changing Stake Logo Image and removing Search Text to free up space at the Top Section of the Stake Main Page
        const cashierSection = document.querySelector(".cashier"),
        leftSideMenu = document.querySelector(".stake-side-bar");
        function clearTopSpace() {
            if (!cashierSection.classList.contains("minimize-cashier") 
            && !leftSideMenu.classList.contains("minimize")) {
                $(".sw-image").css({"display": "flex"});
                $(".sw-text").css({"display": "none"});
                $(".ft-search").children("span").css({"display": "none"});
            } else {
                $(".sw-image").css({"display": "none"});
                $(".sw-text").css({"display": "flex"});
                $(".ft-search").children("span").css({"display": "block"});
            };
        };

        function clearTopSpace2() {
            if (!cashierSection.classList.contains("minimize-cashier")) {
                $(".sw-image").css({"display": "flex"});
                $(".sw-text").css({"display": "none"});
                $(".ft-search").children("span").css({"display": "none"});
            } else {
                $(".sw-image").css({"display": "none"});
                $(".sw-text").css({"display": "flex"});
                $(".ft-search").children("span").css({"display": "block"});
            };
        };


        // Checking if the Width of the Main page can contain the full details of the High Rollers Section
        function viewHighRollers() {
            setTimeout(() => {
                const bookingPage = document.querySelector(".odds-page"),
                bookingPageWidth = bookingPage.offsetWidth;
                if (bookingPageWidth < 800) {
                    $(".mc-user").css({"display": "none"});
                    $(".mc-time").css({"display": "none"});
                    $(".mc-odd").css({"display": "none"});
                } else {
                    $(".mc-user").css({"display": ""});
                    $(".mc-time").css({"display": ""});
                    $(".mc-odd").css({"display": ""});
                };
            }, 10);
        };
        viewHighRollers();


        // Checking if Crypto Balance and Total Singles Stake Amount are in sync
        function eligibleSinglesBalance() {
            const currentCrypto = document.querySelector(".current-text .current-value"),
            totalStake = document.querySelector(".check-out-singles .ts-amount span"),
            currentCryptoBalance = Number(currentCrypto.innerHTML.replace(/\D/g,"") * Math.pow(10, -2)),
            totalStakeAmount = Number(totalStake.innerHTML.replace(/\D/g,"") * Math.pow(10, -2)),

            aboveBalance = document.querySelector(".check-out-singles .above-balance"),
            placeSinglesBet = document.querySelector(".check-out-singles button"),

            checkOutSingles = document.querySelector(".check-out-singles"),
            gamesBooked = document.querySelector(".games-booked");

            if (totalStakeAmount > currentCryptoBalance) {
                // Display warning
                aboveBalance.style.display = "block";
                aboveBalance.classList.add("visible-warning");

                // Decreasing button opacity & changing cursor type
                placeSinglesBet.style.opacity = 0.5;
                placeSinglesBet.style.cursor = "not-allowed";

                // Adjusting height
                checkOutSingles.style.height = "150px";
                gamesBooked.style.height = `calc(${winHeight}px - 320px)`;
            } else if (totalStakeAmount <= currentCryptoBalance && totalStakeAmount > 0) {
                // Remove warning
                aboveBalance.style.display = "none";
                aboveBalance.classList.remove("visible-warning");
                
                // Increasing button opacity & changing cursor type
                placeSinglesBet.style.opacity = 1;
                placeSinglesBet.style.cursor = "pointer";

                // Returning height
                checkOutSingles.style.height = "130px";
                gamesBooked.style.height = `calc(${winHeight}px - 300px)`;
            } else if (totalStakeAmount == 0.00) {
                // Remove warning
                aboveBalance.style.display = "none";
                aboveBalance.classList.remove("visible-warning");

                // Decreasing button opacity & changing cursor type
                placeSinglesBet.style.opacity = 0.5;
                placeSinglesBet.style.cursor = "not-allowed";

                // Returning height
                checkOutSingles.style.height = "130px";
                gamesBooked.style.height = `calc(${winHeight}px - 300px)`;
            };
        };


        // Checking if Crypto Balance and Total Multi Stake Amount are in sync
        function eligibleMultiBalance() {
            const currentCrypto = document.querySelector(".current-text .current-value"),
            inputStakeMulti = document.querySelector(".check-out-multi input"),
            currentCryptoBalance = Number(currentCrypto.innerHTML.replace(/\D/g,"") * Math.pow(10, -2)),
            multiStakeAmount = inputStakeMulti.value,

            aboveBalance = document.querySelector(".check-out-multi .above-balance"),
            placeMultiBet = document.querySelector(".check-out-multi button"),

            checkOutMulti = document.querySelector(".check-out-multi"),
            gamesBooked = document.querySelector(".games-booked-multi");

            if (multiStakeAmount > currentCryptoBalance) {
                // Display warning
                aboveBalance.style.display = "block";
                aboveBalance.classList.add("visible-warning");

                // Decreasing button opacity & changing cursor type
                placeMultiBet.style.opacity = 0.5;
                placeMultiBet.style.cursor = "not-allowed";

                // Adjusting height
                checkOutMulti.style.height = "190px";
                gamesBooked.style.height = `calc(${winHeight}px - 360px)`;
            } else if (multiStakeAmount < currentCryptoBalance && multiStakeAmount > 0) {
                // Remove warning
                aboveBalance.style.display = "none";
                aboveBalance.classList.remove("visible-warning");
                
                // Increasing button opacity & changing cursor type
                placeMultiBet.style.opacity = 1;
                placeMultiBet.style.cursor = "pointer";

                // Returning height
                checkOutMulti.style.height = "170px";
                gamesBooked.style.height = `calc(${winHeight}px - 340px)`;
            } else if (multiStakeAmount == 0.00) {
                // Remove warning
                aboveBalance.style.display = "none";
                aboveBalance.classList.remove("visible-warning");

                // Decreasing button opacity & changing cursor type
                placeMultiBet.style.opacity = 0.5;
                placeMultiBet.style.cursor = "not-allowed";

                // Returning height
                checkOutMulti.style.height = "170px";
                gamesBooked.style.height = `calc(${winHeight}px - 340px)`;
            };
        };


        // For Calculating Total Stake & Payout in Singles Bets
        function singles() {
            // Summing up all stake amount in singles session
            function totalSinglesStake() {
                totalStake = document.querySelector(".check-out-singles .ts-amount span");

                const inputArray = [0];
                totalStake.innerHTML = 0;
                const inputStakeSingles = document.querySelectorAll(".new-entry input");
                inputStakeSingles.forEach(nss => {
                    inputArray.push(Number(nss.value))
                });

                let sumStake = inputArray.reduce(myFunction);
                function myFunction(total, value) {
                return total + value;
                };

                totalStake.innerHTML = (sumStake).toLocaleString("en-US", {style:"currency", currency:"USD"});
            };
            totalSinglesStake();

            // Summing up all estimated payout value
            function totalPayoutSingles() {
                const estPayoutSingles = document.querySelector(".check-out-singles .est-amount span");

                const payoutArray = [0];
                estPayoutSingles.innerHTML = 0;
                const inputStakeSingles = document.querySelectorAll(".new-entry input");
                inputStakeSingles.forEach(nss => {
                    let payout = nss.parentElement.parentElement.parentElement.children[1].children[1].children[1].firstElementChild.firstElementChild,
                    matchPickOdd = nss.parentElement.parentElement.parentElement.children[1].firstElementChild;

                    payout = (nss.value * matchPickOdd.innerHTML);
                    payoutArray.push(Number(payout));
                });

                let sumPayout = payoutArray.reduce(spFunction);
                function spFunction(total, value) {
                return total + value;
                };

                estPayoutSingles.innerHTML = (sumPayout).toLocaleString("en-US", {style:"currency", currency:"USD"});
            };
            totalPayoutSingles();
        };


        // For Calculating Total Stake & Payout in Multiple Bets
        function multi() {
            const inputStakeMulti = document.querySelector(".check-out-multi input"),
            totalMultiOdd = document.querySelector(".check-out-multi .total-odds"),
            payoutMulti = document.querySelector(".check-out-multi .est-amount span"),
            matchPickOdds = document.querySelectorAll(".new-entry .mp-odd"),
            oddArray = [1];
            matchPickOdds.forEach(mpOdd => {
                oddArray.push(Number(mpOdd.innerHTML))
            });

            let sumOdds = oddArray.reduce(myFunction);
            function myFunction(total, value) {
            return total * value;
            };

            totalMultiOdd.innerHTML = (sumOdds).toFixed(2);

            // Calculating Multi est payout
            payoutMulti.innerHTML = (inputStakeMulti.value * totalMultiOdd.innerHTML).toLocaleString("en-US", {style:"currency", currency:"USD"});
        };


        // For Counting Matches Selected
        let count = 0;
        function countOdds() {
            betCount = document.querySelectorAll(".bet-count");
            betCount.forEach(betC => {
                betC.textContent = count;
                betC.style.display = "block";

                if (count == 0) {
                    betC.style.display = "none";
                }
            });
        };


    
    // Code for Side Bars
    function sideBars() {
        function leftSideMenu() {
            const minimizeMenu = document.querySelector(".fl-image-container .fl-head-image");
            // Hover Effect for Minimize button
            minimizeMenu.addEventListener("mouseover", function() {
                document.querySelector(".fl-head-tooltip").style.display = "flex";
            });
            minimizeMenu.addEventListener("mouseout", function() {
                document.querySelector(".fl-head-tooltip").style.display = "none";
            });
            // Click Effect for Expand button
            minimizeMenu.addEventListener("click", function() {
                document.querySelector(".stake-side-bar").classList.add("minimize");
                document.querySelector(".small-side-bar").style.display = "block";

                $(".md-body").children(".extra-odds").css({"margin-left": "3%"});
              
                clearTopSpace();

                viewHighRollers();
            });


            // Toggling Side Menu Items by clicking on their Headers
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


            // Selecting Language
            const selectLang = document.querySelector(".fl-select-lang"),
            langToggle = document.querySelector(".select"),
            langChange = document.querySelector(".select .select-text"),
            langOptions = document.querySelectorAll(".lang-options");

            langToggle.addEventListener("click", function(){
                selectLang.classList.toggle("lang-dd-active");
            });

            // Closing Language Menu if any other part of the Document is clicked
            $(document).click(function(e){
                let outside = $(".fl-select-lang");
                if (outside !== e.target && !outside.has(e.target).length) {
                    selectLang.classList.remove("lang-dd-active");
                };
            });
            
            // Changing Selected Language feel
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
            // Hover Effect for Expand button
            const expandMenu = document.querySelector(".ssb-head-image");
            expandMenu.addEventListener("mouseover", function() {
                document.querySelector(".ssb-head-tooltip").style.display = "flex";
            });
            expandMenu.addEventListener("mouseout", function() {
                document.querySelector(".ssb-head-tooltip").style.display = "none";
            });
            
            // Click Effect for Expand button
            expandMenu.addEventListener("click", function() {
                document.querySelector(".stake-side-bar").classList.remove("minimize");
                document.querySelector(".small-side-bar").style.display = "none";

                const cashierSection = document.querySelector(".cashier");
                if (!cashierSection.classList.contains("minimize-cashier")) {
                    $(".md-body").children(".extra-odds").css({"margin-left": "1%"});
                } else {
                    $(".md-body").children(".extra-odds").css({"margin-left": "3%"});
                };

                clearTopSpace();

                viewHighRollers();
            });


            // Hover Effect for Small Side Bar Menu Items
            const ssbItem = document.querySelectorAll(".ssb-items .ssb-hover");
            ssbItem.forEach(item => {
                item.addEventListener("mouseover", function() {
                    item.nextElementSibling.style.display = "flex";
                })
                item.addEventListener("mouseout", function() {
                    item.nextElementSibling.style.display = "none";
                })
            });
        }
        smallSideMenu();
    };
    sideBars();


    // Code for Main Page
    function oddsPage() {
        // Code for events in Odds Page fixed header
        function stakeFixedHeader() {
            // Toggling Wallet Dropdown Menu
            const currentWallet = document.querySelector(".ft-current-wallet"),
            walletOptions = document.querySelector(".wallet-options");
    
            currentWallet.addEventListener("click", function(){
                walletOptions.classList.toggle("sw-active");
            });

            // Closing Wallet Dropdow Menu if any other part of the Document is clicked
            $(document).click(function(e){
                let outside = $(".wallet-options");
                if (outside !== e.target && !outside.has(e.target).length) {
                    walletOptions.classList.remove("sw-active");
                };
            });
    
            const currentCrypto = document.querySelector(".current-text .current-value"),
            currentCryptoImage = document.querySelector(".current-text img"),
            wDropdownOptions = document.querySelectorAll(".wallet-dropdown-options .w-option");
            walletSearch = document.querySelector(".wallet-search input");
    
            // Searching for Crypto
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
    
    
            // Updating Selected Crypto as Current Crypto
            currentCrypto.innerHTML = document.querySelector(".wallet-dropdown-options .cv").firstElementChild.innerHTML;
            currentCryptoImage.src = document.querySelector(".wallet-dropdown-options .cv").children[1].firstElementChild.src;
            wDropdownOptions.forEach(crypto => {
                crypto.addEventListener("click", () => {
                    currentCrypto.innerHTML = crypto.firstElementChild.innerHTML;
                    document.querySelector(".current-text #current-image").src = crypto.children[1].firstElementChild.src;
                    walletOptions.classList.toggle("sw-active");
    
                    const checkoutImage = document.querySelectorAll(".check-out #checkout-img");
                    checkoutImage.forEach(img => {
                        img.src = document.querySelector(".current-text #current-image").src;
                    });
    
                    const mcImages = document.querySelectorAll(".mc-content .s-dollars img");
                    mcImages.forEach(mcImage => {
                    mcImage.src = document.querySelector(".current-text #current-image").src;
                    });  
                    
                    // Clearing search input
                    walletSearch.value = "";
        
                    // Calling code for bet eligibility
                    eligibleSinglesBalance();
                    eligibleMultiBalance();
                });
            
            });
    
    
            // Toggling Chat Dropdown Menu
            const chatIcon = document.querySelector(".chat-icon"),
            chatActive = document.querySelector(".chat");
    
            chatIcon.addEventListener("click", function(){
                chatActive.classList.toggle("chat-active");
            });

            // Closing Chat Dropdown Menu if any other part of the Document is clicked
            $(document).click(function(e){
                let outside = $(".chat-icon");
                if (outside !== e.target && !outside.has(e.target).length) {
                    chatActive.classList.remove("chat-active");
                };
            });

            // Toggling User Profile Dropdown Menu
            const userProfileIcon = document.querySelector(".user-profile-icon"),
            userProfileActive = document.querySelector(".user-profile");
    
            userProfileIcon.addEventListener("click", function(){
                userProfileActive.classList.toggle("user-profile-active");
            });

            // Closing User Profile Dropdown Menu if any other part of the Document is clicked
            $(document).click(function(e){
                let outside = $(".user-profile-icon");
                if (outside !== e.target && !outside.has(e.target).length) {
                    userProfileActive.classList.remove("user-profile-active");
                };
            });
        };
        stakeFixedHeader();

    
        // Code for Odds Type
        function oddsType() {
            // Hover effect for Odds Type images
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
    

            // Switching Odds Type
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


            // Toggling Standard Odds Type Menu
            const oddsDisplayToggle = document.querySelectorAll(".menu-all"),
            oddsDisplayType = document.querySelector(".odds-display-type");
            oddsDisplayToggle.forEach(odt => {
                odt.addEventListener("click", function() {
                    oddsDisplayType.classList.toggle("odds-dd-active");
                })
            });

            // Closing Standard Odds Type Menu if any other part of the Document is clicked
            $(document).click(function(e){
                let outside = $(".menu-all");
                if (outside !== e.target && !outside.has(e.target).length) {
                    oddsDisplayType.classList.remove("odds-dd-active");
                };
            });
    
            // Chosing Standard Odds Type
            const odOption = document.querySelectorAll(".od-option");
            odOption.forEach(option => {
                option.addEventListener("click", function() {
                    document.querySelector(".bs-menu-odt span").innerHTML = option.innerHTML;
                    oddsDisplayType.classList.toggle("odds-dd-active");
                    document.querySelector(".odds-dropdown .od-option-active").classList.remove("od-option-active");
                    option.classList.add("od-option-active");
                })
            });
        };
        oddsType();


        // Code for Competition Section & it's effects on Cashier section
        function competitionXbetslip() {
            // Toggling Match Day for each Competition
            const compName = document.querySelectorAll(".comp-head");
            compName.forEach(cn => {
                cn.addEventListener("click", function() {
                    cn.parentElement.classList.toggle("deactivate");
                })
            }); 


            // Events that'll occur when a Match Odd is clicked
            const matchOdd = document.querySelectorAll(".match-odd");
            matchOdd.forEach(mo => {
                mo.addEventListener("click", () => {
                    mo.classList.toggle("md-active");

                    // Adding Cashier zone, Altering High Rollers(Open Bets) section, changing the styles of some Elements and increasing Footer height
                    const cashierSection = document.querySelector(".cashier"),
                    leftSideMenu = document.querySelector(".stake-side-bar");
                    if (mo.classList.contains("md-active")) {
                        cashierSection.classList.remove("minimize-cashier");
   
                        if (!cashierSection.classList.contains("minimize-cashier") 
                        && !leftSideMenu.classList.contains("minimize")) {
                            $(".md-body").children(".extra-odds").css({"margin-left": "1%"});
                        } else {
                            $(".md-body").children(".extra-odds").css({"margin-left": "3%"});
                        };

                        clearTopSpace();

                        viewHighRollers();
                    };

                    // Counting matches selected
                    if (mo.classList.contains("md-active")) {
                        count++
                    } else {
                        count--
                    };
                    countOdds();


                    // Adding and removing Match Cards & events attached to it
                    function addMatchCard() {
                        // Toggling the empty betslip content
                        const gamesBooked = document.querySelector(".games-booked");
                        if (!count == 0) {
                            gamesBooked.classList.add("gb-active");
                        } else {
                            gamesBooked.classList.remove("gb-active");
                        };
                        

                        // Adding match card content based on match info
                        if (mo.classList.contains("md-active")) {
                            const matchCard = document.querySelector(".match-card").cloneNode(true);
                            matchCard.classList.remove("hidden");

                            newEntry = document.createElement("div");
                            newEntry.classList.add(`${mo.firstElementChild.innerHTML.split(" ").join("") 
                                + mo.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.innerHTML.split(" ").join("") 
                                + mo.parentElement.firstElementChild.firstElementChild.innerHTML.split(" ").join("")}`
                            );
                            newEntry.classList.add("new-entry");
                            newEntry.appendChild(matchCard);

                            // Setting Match Card values in accordance with the Match Odd selected 
                            const matchHeader = newEntry.firstElementChild.firstElementChild.firstElementChild.firstElementChild,
                            matchPick = newEntry.firstElementChild.children[1].children[1].firstElementChild.firstElementChild,
                            matchPickOdd = newEntry.firstElementChild.children[1].children[1].children[1].firstElementChild,
                            matchInput = newEntry.firstElementChild.children[1].children[1].firstElementChild.children[1].firstElementChild,
                            newMatchPick = mo.firstElementChild,
                            newMatchHeader = mo.parentElement.parentElement.children[2],
                            newMatchPickOdd = mo.children[1];

                            matchHeader.innerHTML = newMatchHeader.innerHTML;
                            matchPick.innerHTML = newMatchPick.innerHTML;
                            matchPickOdd.innerHTML = newMatchPickOdd.innerHTML;
                            matchInput.value = 0.00.toFixed(2);
                    
                            // Adding Match Card to Bet Slip
                            const mcContainer = document.querySelector(".games-booked .match-cards-container");
                            mcContainer.appendChild(newEntry);

                            // Adding Animation to Match Card and scrolling Match Card Container to show new Match Card that was added
                            const max760 = window.matchMedia("(max-width: 760px)");
                            if (!max760.matches) {
                                mcContainer.scrollIntoView(false);
                                newEntry.style = "animation: matchCard 0.5s ease 0s 1";
                            };

                            newEntry.classList.add(`${mo.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.innerHTML.split(" ").join("") 
                            + mo.parentElement.firstElementChild.firstElementChild.innerHTML.split(" ").join("")}`
                            );
                            
                            // Deleting match card
                            const deleteMatchcard = document.querySelectorAll(".match-card .mh-cancel");
                            deleteMatchcard.forEach(dmc => {
                                dmc.addEventListener("click", () => {
                                    // Removing Match Card from Bet Slip
                                    const mCard = dmc.parentElement.parentElement.parentElement.parentElement;
                                    mcContainer.removeChild(mCard);
                                    
                                    // Removing active status from equivalent match odd 
                                    mo.classList.remove("md-active");

                                    // Reseting betslip count value
                                    count--
                                    countOdds();

                                    // Calling Singles code
                                    singles();

                                    // Calling Multi code
                                    multi();
        
                                    // Calling code for bet eligibility
                                    eligibleSinglesBalance();
                                    eligibleMultiBalance();

                                    // Checking if more than one odd is selected from a single match when a Match odd or Singles/Multi button is clicked
                                    sameMatch();

                                    // Returning "empty betslip" content if all matches are deleted
                                    if (!count == 0) {
                                        gamesBooked.classList.add("gb-active");
                                    } else {
                                        gamesBooked.classList.remove("gb-active");
                                    };
                                });
                            });

                        } else {
                            // Removing each match-card once it's match-odd counterpart is clicked again
                            const selectedMatch = document.querySelectorAll(".new-entry");
                            selectedMatch.forEach(ne => {
                                if (ne.classList.contains(`${mo.firstElementChild.innerHTML.split(" ").join("") 
                                    + mo.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.innerHTML.split(" ").join("") 
                                    + mo.parentElement.firstElementChild.firstElementChild.innerHTML.split(" ").join("")}`
                                )) {
                                    const mcContainer = document.querySelector(".games-booked .match-cards-container");
                                    mcContainer.removeChild(ne);

                                    // Calling Singles code
                                    singles();

                                    // Calling Multi code
                                    multi();
                                };
                            });
                                    
                            // Calling code for bet eligibility
                            eligibleSinglesBalance();
                            eligibleMultiBalance();
                        };
                    };
                    addMatchCard();

                    
                    // Singles Section
                    function singlesSection() {
                        const inputStakeSingles = document.querySelectorAll(".new-entry input");
                        inputStakeSingles.forEach(ns => {
                            let payout = ns.parentElement.parentElement.parentElement.children[1].children[1].children[1].firstElementChild.firstElementChild,
                            matchPickOdd = ns.parentElement.parentElement.parentElement.children[1].firstElementChild;

                            ns.addEventListener("input", () => {
                                // Returning payout for particular match
                                payout.innerHTML = (ns.value * matchPickOdd.innerHTML).toLocaleString("en-US", {style:"currency", currency:"USD"});

                                // Calling Singles code
                                singles();

                                // Calling code for bet eligibility
                                eligibleSinglesBalance();
                            });

                            ns.addEventListener("focusout", () => {
                                if (!ns.value) {
                                    ns.value = 0.00.toFixed(2);
                                };
                            });
                        });
                    };
                    singlesSection();


                    // Multi Section
                    function multiSection() {
                        const inputStakeMulti = document.querySelector(".check-out-multi input"),
                        totalMultiOdd = document.querySelector(".check-out-multi .total-odds"),
                        payoutMulti = document.querySelector(".check-out-multi .est-amount span");

                        inputStakeMulti.addEventListener("input", () => {
                            payoutMulti.innerHTML = (inputStakeMulti.value * totalMultiOdd.innerHTML).toLocaleString("en-US", {style:"currency", currency:"USD"});;

                            // Calling code for bet eligibility
                            eligibleMultiBalance();

                            // Checking if more than one odd is selected from a single match when a Match odd or Singles/Multi button is clicked
                            sameMatch();
                        });

                        inputStakeMulti.addEventListener("focusout", () => {
                            // Returning input value as zero if no value is entered
                            if (!inputStakeMulti.value) {
                                inputStakeMulti.value = 0.00.toFixed(2);
                            };
                        });

                        // Calling multi code
                        multi();
                    };
                    multiSection();


                    // Checking if more than one odd is selected from a single match when a Match odd or Singles/Multi button is clicked
                    const betSingles = document.querySelector(".bet-type .bt-singles"),
                    betMulti = document.querySelector(".bet-type .bt-multi");

                    function sameMatch() {
                        const sameEntry = document.querySelectorAll(".new-entry");
                        if (betMulti.classList.contains("bt-active")) {

                            const sameMatch = document.getElementsByClassName(`${mo.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.innerHTML.split(" ").join("") 
                            + mo.parentElement.firstElementChild.firstElementChild.innerHTML.split(" ").join("")}`
                            ),
                            sameMatchCount = sameMatch.length;

                            // Checking if class unique to each match occurs twice
                            sameEntry.forEach(entry => {
                                const sameEntryHeader = entry.firstElementChild.firstElementChild;

                                if (entry.classList.contains(`${mo.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.innerHTML.split(" ").join("") 
                                + mo.parentElement.firstElementChild.firstElementChild.innerHTML.split(" ").join("")}`
                                )) {
                                    if (sameMatchCount > 1) {
                                        // Changing Match Card header color
                                        sameEntryHeader.style = "background-color: #5D0619";
                                        entry.classList.add("multiple-selections-present");
                                    } else {
                                        // Returning Match Card header color
                                        sameEntryHeader.style = "background-color: #2E4552";
                                        entry.classList.remove("multiple-selections-present");
                                    };
                                };

                                const msp = document.getElementsByClassName("multiple-selections-present"),
                                mspCount = msp.length;
                               
                                const aboveBalance = document.querySelector(".check-out-multi .above-balance"),
                                multipleSelections = document.querySelector(".check-out-multi .multiple-selections"),
                                placeMultiBet = document.querySelector(".check-out-multi button"),
                    
                                checkOutMulti = document.querySelector(".check-out-multi"),
                                gamesBooked = document.querySelector(".games-booked");

                                // Toggling warning text in checkout zone
                                if (mspCount > 0) {
                                    // Display warning
                                    aboveBalance.style.display = "none";
                                    aboveBalance.classList.remove("visible-warning");
                                    multipleSelections.style.display = "block";
                                    multipleSelections.classList.add("visible-warning");
                    
                                    // Decreasing button opacity & changing cursor type
                                    placeMultiBet.style.opacity = 0.5;
                                    placeMultiBet.style.cursor = "not-allowed";
                    
                                    // Adjusting height
                                    checkOutMulti.style.height = "210px";
                                    gamesBooked.style.height = `calc(${winHeight}px - 380px)`;
                                } else {
                                    // Remove warning
                                    multipleSelections.style.display = "none";
                                    multipleSelections.classList.remove("visible-warning");
                                    
                                    eligibleMultiBalance();
                                };
                            });
                        } else {
                            sameEntry.forEach(entry => {
                                const sameEntryHeader = entry.firstElementChild.firstElementChild;
                                sameEntryHeader.style = "background-color: #2E4552";
                            });

                            // Returning width of Gamebooked in Singles section
                            const gamesBooked = document.querySelector(".games-booked");
                            gamesBooked.style.height = `calc(${winHeight}px - 300px)`;
                        };
                    };
                    sameMatch();

                    betMulti.addEventListener("click", sameMatch);
                    betSingles.addEventListener("click", sameMatch);


                    // Clearing all match/odds selected
                    const clearAll = document.querySelector(".alter-bl .clear-bl");
                    clearAll.addEventListener("click", () => {
                        const matchOdds = document.querySelectorAll(".match-odd"),
                        matchCards = document.querySelectorAll(".new-entry"),
                        gamesBooked = document.querySelector(".games-booked");

                        matchOdds.forEach(mo => {
                            mo.classList.remove("md-active");
                        });
                        matchCards.forEach(matchCard => {
                            const mcContainer = document.querySelector(".games-booked .match-cards-container");
                            mcContainer.removeChild(matchCard);
                        });
                        
                        // Reseting betslip count value
                        count = 0;
                        countOdds();

                        // Returning empty betslip content
                        gamesBooked.classList.remove("gb-active");

                        // Calling Singles code
                        singles();

                        // Calling Multi code
                        multi();

                        // Calling code for bet eligibility
                        eligibleSinglesBalance();

                        const multipleSelections = document.querySelector(".check-out-multi .multiple-selections");
                        multipleSelections.style.display = "none"; // Clearing Multiple Selections warning
                        eligibleMultiBalance();

                        // Checking if more than one odd is selected from a single match when a Match odd or Singles/Multi button is clicked
                        sameMatch();
                    });
                });

            });
        };
        competitionXbetslip();
    };
    oddsPage();


    // Code High Rollers Open Bets
    function highRollers() {
        // Object containing Singles Open Bets Events information
        const obEventSingles = [
            {
                name: "WOL - LFC",
                id: " ID 63,495,121",
                timeDate: "on 2/5/2023 at 8:30PM",
                bookingTime: "8:30PM 2/5/2023",
                matchTitle: "Wolvehampton Wanderers - Liverpool FC",
                oddType: "Both Teams to Score",
                matchPick: "Yes",
                mpOdd:(2.40).toFixed(2)
            },
            {
                name: "CRY - LEE",
                id: " ID 63,445,387",
                timeDate: "on 2/5/2023 at 8:20PM",
                bookingTime: "8:20PM 2/5/2023",
                matchTitle: "Crystal Palace - Leeds United",
                oddType: "Draw No Bet",
                matchPick: "Crystal Palace",
                mpOdd: (1.90).toFixed(2)
            },
            {
                name: "BRI - TOT",
                id: " ID 63,465,821",
                timeDate: "on 2/5/2023 at 8:20PM",
                bookingTime: "8:20PM 2/5/2023",
                matchTitle: "Brighton & Hove Albion - Tottenham Hotspur",
                oddType: "1st Half - 1x2",
                matchPick: "Tottenham Hotspur",
                mpOdd: (2.85).toFixed(2)
            },
            {
                name: "GSW - LAL",
                id: " ID 63,745,765",
                timeDate: "on 2/5/2023 at 8:15PM",
                bookingTime: "8:15PM 2/5/2023",
                matchTitle: "Golden State Warriors - Los Angeles Lakers",
                oddType: "Winner & Total (Incl. Overtime)",
                matchPick: "Los Angeles Lakers & Over 239.5",
                mpOdd: (2.68).toFixed(2)
            },
            {
                name: "BAR - GIR",
                id: " ID 63,965,229",
                timeDate: "on 2/5/2023 at 8:15PM",
                bookingTime: "8:15PM 2/5/2023",
                matchTitle: "Barcelona FC - Girona FC",
                oddType: "1x2",
                matchPick: "Barcelona FC",
                mpOdd: (1.30).toFixed(2)
            },
            {
                name: "PSV - VIT",
                id: " ID 63,978,576",
                timeDate: "on 2/5/2023 at 8:15PM",
                bookingTime: "8:15PM 2/5/2023",
                matchTitle: "PSV Eindoven - Vitesse FC",
                oddType: "Over 2.5",
                matchPick: "Yes",
                mpOdd: (1.75).toFixed(2)
            },
            {
                name: "GWC - DAF",
                id: " ID 63,995,236",
                timeDate: "on 2/5/2023 at 8:15PM",
                bookingTime: "8:15PM 2/5/2023",
                matchTitle: "George Washington Colonials - Dayton Flyers",
                oddType: "Winner (Incl. Overtime)",
                matchPick: "Dayton Flyers",
                mpOdd: (3.10).toFixed(2)
            },
            {
                name: "PSG - CHE",
                id: " ID 63,888,551",
                timeDate: "on 2/5/2023 at 8:00PM",
                bookingTime: "8:00PM 2/5/2023",
                matchTitle: "Paris Saint German - Chelsea FC",
                oddType: "1x2",
                matchPick: "Paris Saint German",
                mpOdd: (1.55).toFixed(2)
            },
            {
                name: "BAY - DOR",
                id: " ID 63,945,771",
                timeDate: "on 2/5/2023 at 8:00PM",
                bookingTime: "8:00PM 2/5/2023",
                matchTitle: "Bayern Munchen FC - Borussia Dortmund FC",
                oddType: "Highest Soring Half",
                matchPick: "2nd Half",
                mpOdd: (1.99).toFixed(2)
            },
        ];


        // Object containing Multi Open Bets Events information
        const obEventMulti = [
            [
                {
                    name: "Multi (2)",
                    id: " ID 63,445,021",
                    timeDate: "on 2/5/2023 at 8:30PM",
                    bookingTime: "8:30PM 2/5/2023"
                },
                [
                    {
                        matchTitle: "FC Inter Milano - AC Milan",
                        oddType: "Both Teams to Score",
                        matchPick: "Yes",
                        mpOdd:(1.85).toFixed(2)
                    },
                    {
                        matchTitle: "Athletic Bilbao - Sevilla FC",
                        oddType: "1x2",
                        matchPick: "Athletic Bilbao",
                        mpOdd:(1.70).toFixed(2)
                    }
                ]
            ]
        ];


        // Poping up Events Details when an (High Rollers) Open Bet Event is clicked
        const openEvents = document.querySelectorAll(".open-bets .mc-event");
        openEvents.forEach(openEvent => {
            openEvent.addEventListener("click", () => {
                // Creating new Open Bet Event
                const viewOpenBet = document.querySelector(".view-open-bets").cloneNode(true);
                openBetWrapper = document.createElement("div");
                openBetWrapper.classList.add("new-open-bet");
                openBetWrapper.appendChild(viewOpenBet);

                // Updating Event Information
                const openEventId = document.querySelector(".open-bet-event .obe-id"),
                dateTime = document.querySelector(".open-bet-event .obe-date-time"),
                bookingTime = document.querySelector(".open-bet-event .booking-time"),
                matchTitle = document.querySelectorAll(".open-bet-event .obe-mc-title span"),
                oddType = document.querySelectorAll(".open-bet-event .obe-mc-type"),
                matchPick = document.querySelectorAll(".open-bet-event .obe-mc-pick-odd .pick"),
                odds = document.querySelectorAll(".open-bet-event .obe-mc-pick-odd .odd"),
                totalOdds = document.querySelector(".open-bet-event .total-odds"),
                totalStake = document.querySelector(".open-bet-event .total-stake span"),
                estPayout = document.querySelector(".open-bet-event .est-payout span"),
                totalsImages = document.querySelectorAll(".open-bet-event .obe-totals img"),
                lastMatchcard = document.querySelector(".open-bet-event .obe-mc-last"),
                firstMatchcard = document.querySelector(".open-bet-event .obe-mc-first"),
                betsNum = document.querySelector(".open-bet-event button span"),
                addMatches = document.querySelector(".open-bet-event button"),
                matchCardContainer = document.querySelector(".obe-match-card-container");

                // For Singles Event
                for (let i = 0; i < obEventSingles.length; i++) {
                    if (obEventSingles[i].name == openEvent.children[0].children[1].textContent) {

                        // Updating Event Header Information values
                        openEventId.textContent = obEventSingles[i].id;
                        dateTime.innerHTML = obEventSingles[i].timeDate;
                        bookingTime.innerHTML = obEventSingles[i].bookingTime;

                        // Updating Event Match Card values
                        matchTitle.forEach(title => {
                            title.innerHTML = obEventSingles[i].matchTitle;
                        });

                        oddType.forEach(type => {
                            type.innerHTML = obEventSingles[i].oddType;
                        });

                        matchPick.forEach(pick => {
                            pick.innerHTML = obEventSingles[i].matchPick;
                        });

                        odds.forEach(odd => {
                            odd.innerHTML = obEventSingles[i].mpOdd;

                            // Updating Total Odds value
                            totalOdds.innerHTML = odd.innerHTML;
                        });

                        // Updating Event Totals values
                        totalStake.innerHTML = openEvent.parentElement.children[4].children[0].textContent;

                        const tStake = Number((totalStake.innerHTML).replace(/\D/g,"") * Math.pow(10, -2));
                        estPayout.innerHTML = (Number(totalOdds.innerHTML) * tStake).toLocaleString("en-US", {style:"currency", currency:"USD"});

                        // Updating Event Images
                        totalsImages.forEach(img => {
                            img.src = openEvent.parentElement.children[4].children[0].firstElementChild.src
                        });

                        // Removing other Match Cards when Bet contains just one Match
                        if (!matchCardContainer.firstElementChild.classList.contains("obe-mc-last")) {
                            const firstMatchcard = matchCardContainer.firstElementChild;
                            matchCardContainer.removeChild(firstMatchcard);
                        };

                        // Changing border radius as only Match
                        lastMatchcard.style = ("border-radius: 0");
                        
                        // Updating Add Bets value
                        betsNum.innerHTML = "1 bet";
                        
                
                        // Adding Event Matches to Bet Slip
                        addMatches.addEventListener("click", () => {
                            const matchCard = document.querySelector(".match-card").cloneNode(true);
                            matchCard.classList.remove("hidden");
                            
                            newEntry = document.createElement("div");
                            newEntry.classList.add("new-entry");
                            newEntry.classList.add("obe-new-entry");
                            newEntry.appendChild(matchCard);
        
                            // Setting Match Card values in accordance with the Match Odd selected
                            const blMatchTitle = newEntry.children[0].children[0].children[0].children[0],
                            blOddType = newEntry.children[0].children[1].children[0],
                            blMatchPick = newEntry.children[0].children[1].children[1].children[0].children[0],
                            blMatchPickOdd = newEntry.children[0].children[1].children[1].children[1].children[0];

                            blMatchTitle.innerHTML = obEventSingles[i].matchTitle;
                            blOddType.innerHTML = obEventSingles[i].oddType;
                            blMatchPick.innerHTML = obEventSingles[i].matchPick;
                            blMatchPickOdd.innerHTML = obEventSingles[i].mpOdd;

                            // Closing Open Bet and Opening Cashier Section(Bet Slip) 
                            $(".cashier").removeClass("minimize-cashier");
                            $(".view-open-bets").css({"display": "none"});

                            // Reseting Animation
                            const animationTimeout = setTimeout(() => {
                                $(".loading-animation").css({"display": "none"});
                                $(".open-bet-event").css({"height": "570px"});
                                $(".obe-body").css({"display": "block"});
                            }, 2400);
                            clearTimeout(animationTimeout);

                            $(".open-bet-event").css({"height": "fit-content"});
                            $(".loading-animation").css({"display": "none"});
                            $(".obe-body").css({"display": "none"});


                            // Unselecting all Match Odds and emptying Bet slip
                            const matchOdds = document.querySelectorAll(".match-odd"),
                            matchCards = document.querySelectorAll(".new-entry");

                            matchOdds.forEach(mo => {
                                mo.classList.remove("md-active");
                            });
                            matchCards.forEach(matchCard => {
                                const mcContainer = document.querySelector(".games-booked .match-cards-container");
                                mcContainer.removeChild(matchCard);
                            });

                               
                            // Adding Match Card to Bet Slip
                            const mcContainer = document.querySelector(".games-booked .match-cards-container");
                            mcContainer.appendChild(newEntry);
                          
                            // Adding Animation to Match Card and scrolling Match Card Container to show new Match Card that was added
                            mcContainer.scrollIntoView(false);
                            $(".match-card").css({"animation": "matchCard 0.5s ease 0s 1"});

                            // Updating Matches Selected
                            count = 0
                            count++
                            countOdds();
                            
                            // Toggling the empty betslip content
                            const gamesBooked = document.querySelector(".games-booked");
                            if (!count == 0) {
                                gamesBooked.classList.add("gb-active");
                            } else {
                                gamesBooked.classList.remove("gb-active");
                            };

                            // Removing Open Bet User, Time and Odds from page
                            $(".mc-user").css({"display": "none"});
                            $(".mc-time").css({"display": "none"});
                            $(".mc-odd").css({"display": "none"});

                            // Adding functionality to Match card input
                            const inputStake = document.querySelector(".new-entry input");
                            inputStake.addEventListener("input", () => {
                                let payout = inputStake.parentElement.parentElement.parentElement.children[1].children[1].children[1].firstElementChild.firstElementChild,
                                matchPickOdd = inputStake.parentElement.parentElement.parentElement.children[1].firstElementChild;
                                // Returning payout for particular match
                                payout.innerHTML = (inputStake.value * matchPickOdd.innerHTML).toLocaleString("en-US", {style:"currency", currency:"USD"});

                                // Calling Totals Code
                                singles();
                                multi();
                                eligibleMultiBalance();
                                eligibleSinglesBalance();
                            });

                            inputStake.addEventListener("focusout", () => {
                                if (!inputStake.value) {
                                    inputStake.value = 0.00.toFixed(2);
                                };
                            });

                            // Running Delete Match Card function
                            const deleteMatchcard = newEntry.children[0].children[0].children[0].children[1];
                            deleteMatchcard.addEventListener("click", () => {
                                // Removing Match Card from Bet Slip
                                const matchCard = deleteMatchcard.parentElement.parentElement.parentElement.parentElement;
                                mcContainer.removeChild(matchCard);

                                // Reseting betslip count value
                                count--
                                countOdds();

                                // Calling Singles code
                                singles();

                                // Calling Multi code
                                multi();
    
                                // Calling code for bet eligibility
                                eligibleSinglesBalance();
                                eligibleMultiBalance();

                                // Returning "empty betslip" content if all matches are deleted
                                if (!count == 0) {
                                    gamesBooked.classList.add("gb-active");
                                } else {
                                    gamesBooked.classList.remove("gb-active");
                                };
                            });

                            // Calling Totals Code
                            singles();
                            multi();
                            eligibleSinglesBalance();
                            eligibleMultiBalance();
                            
                            // Clearing all match/odds selected
                            const clearAll = document.querySelector(".alter-bl .clear-bl");
                            clearAll.addEventListener("click", () => {
                                const matchOdds = document.querySelectorAll(".match-odd"),
                                matchCards = document.querySelectorAll(".new-entry"),
                                gamesBooked = document.querySelector(".games-booked");

                                matchOdds.forEach(mo => {
                                    mo.classList.remove("md-active");
                                });
                                matchCards.forEach(matchCard => {
                                    const mcContainer = document.querySelector(".games-booked .match-cards-container");
                                    mcContainer.removeChild(matchCard);
                                });
                                
                                // Reseting betslip count value
                                count = 0;
                                countOdds();

                                // Returning empty betslip content
                                gamesBooked.classList.remove("gb-active");

                                // Calling Singles code
                                singles();

                                // Calling Multi code
                                multi();

                                // Calling code for bet eligibility
                                eligibleSinglesBalance();

                                const multipleSelections = document.querySelector(".check-out-multi .multiple-selections");
                                multipleSelections.style.display = "none"; // Clearing Multiple Selections warning
                                eligibleMultiBalance();
                            });
                        });
                    };
                };

                // For Multi Event
                for (let i = 0; i < obEventMulti.length; i++) {
                    if (obEventMulti[i][0].name == openEvent.children[0].children[1].textContent && !firstMatchcard) {

                        // Returning previous Match Card's
                        const firstMatchcard = document.querySelector(".obe-mc-last").cloneNode(true);
                        firstMatchcard.classList.remove("obe-mc-last");
                        firstMatchcard.classList.add("obe-mc-first");
                        $(".obe-mc-last").before(firstMatchcard);

                        // Updating Event Header Information values
                        openEventId.textContent = obEventMulti[i][0].id;
                        dateTime.innerHTML = obEventMulti[i][0].timeDate;
                        bookingTime.innerHTML = obEventMulti[i][0].bookingTime;

                        // Selecting each Match Card
                        const object1 = obEventMulti[i][1][0],
                        object2 = obEventMulti[i][1][1];

                        // Updating Event Match Card's values
                        firstMatchcard.children[0].children[1].innerHTML = object1.matchTitle;
                        lastMatchcard.children[0].children[1].innerHTML = object2.matchTitle;

                        firstMatchcard.children[1].innerHTML = object1.oddType;
                        lastMatchcard.children[1].innerHTML = object2.oddType;

                        firstMatchcard.children[2].children[0].innerHTML = object1.matchPick;
                        lastMatchcard.children[2].children[0].innerHTML = object2.matchPick;

                        firstMatchcard.children[2].children[1].innerHTML = object1.mpOdd;
                        lastMatchcard.children[2].children[1].innerHTML = object2.mpOdd;

                        // Updating Total Odds value
                        const oddArray = [];
                        oddArray.push(Number(firstMatchcard.children[2].children[1].innerHTML));
                        oddArray.push(Number(lastMatchcard.children[2].children[1].innerHTML));
                        
                        let sumOdds = oddArray.reduce(myFunction);
                        function myFunction(total, value) {
                        return total + value;
                        };
                        totalOdds.innerHTML = sumOdds.toFixed(2);

                        // Updating Event Totals values
                        totalStake.innerHTML = openEvent.parentElement.children[4].children[0].textContent;

                        const tStake = Number((totalStake.innerHTML).replace(/\D/g,"") * Math.pow(10, -2));
                        estPayout.innerHTML = (Number(totalOdds.innerHTML) * tStake).toLocaleString("en-US", {style:"currency", currency:"USD"});
                        
                        // Updating Event Images
                        totalsImages.forEach(img => {
                            img.src = openEvent.parentElement.children[4].children[0].firstElementChild.src
                        });
                        
                        // Setting border radius of Match Card's
                        firstMatchcard.style = ("border-radius: 0 0 5px 5px");
                        lastMatchcard.style = ("border-radius: 5px 5px 0 0");
                        
                        // Updating Add Bets value
                        betsNum.innerHTML = "2 bet";

                        
                        // Adding Event Matches to Bet Slip
                        addMatches.addEventListener("click", () => {
                            // Getting Match Card blueprint for Event Matchcard1
                            const matchCard1 = document.querySelector(".match-card").cloneNode(true);
                            matchCard1.classList.remove("hidden");
                            
                            newEntry1 = document.createElement("div");
                            newEntry1.classList.add("new-entry");
                            newEntry1.appendChild(matchCard1);
                            
                            // Getting Match Card blueprint for Event Matchcard2
                            const matchCard2 = document.querySelector(".match-card").cloneNode(true);
                            matchCard2.classList.remove("hidden");

                            newEntry2 = document.createElement("div");
                            newEntry2.classList.add("new-entry");
                            newEntry2.appendChild(matchCard2);
        
                            function setMatchCardValue(newEntry, object) {
                                const blMatchTitle = newEntry.children[0].children[0].children[0].children[0],
                                blOddType = newEntry.children[0].children[1].children[0],
                                blMatchPick = newEntry.children[0].children[1].children[1].children[0].children[0],
                                blMatchPickOdd = newEntry.children[0].children[1].children[1].children[1].children[0];
    
                                blMatchTitle.innerHTML = object.matchTitle;
                                blOddType.innerHTML = object.oddType;
                                blMatchPick.innerHTML = object.matchPick;
                                blMatchPickOdd.innerHTML = object.mpOdd;
                            }
                            setMatchCardValue(newEntry1, object1);
                            setMatchCardValue(newEntry2, object2);

                            // Closing Open Bet and Opening Cashier Section(Bet Slip) 
                            $(".cashier").removeClass("minimize-cashier");
                            $(".view-open-bets").css({"display": "none"});

                            // Reseting Animation
                            const animationTimeout = setTimeout(() => {
                                $(".loading-animation").css({"display": "none"});
                                $(".open-bet-event").css({"height": "570px"});
                                $(".obe-body").css({"display": "block"});
                            }, 2400);
                            clearTimeout(animationTimeout);

                            $(".open-bet-event").css({"height": "fit-content"});
                            $(".loading-animation").css({"display": "none"});
                            $(".obe-body").css({"display": "none"});


                            // Unselecting all Match Odds and emptying Bet slip
                            const matchOdds = document.querySelectorAll(".match-odd"),
                            matchCards = document.querySelectorAll(".new-entry");

                            matchOdds.forEach(mo => {
                                mo.classList.remove("md-active");
                            });
                            matchCards.forEach(matchCard => {
                                const mcContainer = document.querySelector(".games-booked .match-cards-container");
                                mcContainer.removeChild(matchCard);
                            });

                               
                            // Adding Match Card to Bet Slip
                            const mcContainer = document.querySelector(".games-booked .match-cards-container");
                            mcContainer.appendChild(newEntry1);
                            mcContainer.appendChild(newEntry2);
                          
                            // Adding Animation to Match Card and scrolling Match Card Container to show new Match Card that was added
                            mcContainer.scrollIntoView(false);
                            $(".match-card").css({"animation": "matchCard 0.5s ease 0s 1"});

                            // Updating Matches Selected
                            count = 0
                            count += 2
                            countOdds();
                            
                            // Toggling the empty betslip content
                            const gamesBooked = document.querySelector(".games-booked");
                            if (!count == 0) {
                                gamesBooked.classList.add("gb-active");
                            } else {
                                gamesBooked.classList.remove("gb-active");
                            };

                            viewHighRollers();

                            // Adding functionality to Match card input
                            const inputStakeSingles = document.querySelectorAll(".new-entry input");
                            inputStakeSingles.forEach(ns => {
                                let payout = ns.parentElement.parentElement.parentElement.children[1].children[1].children[1].firstElementChild.firstElementChild,
                                matchPickOdd = ns.parentElement.parentElement.parentElement.children[1].firstElementChild;

                                ns.addEventListener("input", () => {
                                    // Returning payout for particular match
                                    payout.innerHTML = (ns.value * matchPickOdd.innerHTML).toLocaleString("en-US", {style:"currency", currency:"USD"});

                                    // Calling Singles code
                                    singles();

                                    // Calling code for bet eligibility
                                    eligibleSinglesBalance();
                                });

                                ns.addEventListener("focusout", () => {
                                    if (!ns.value) {
                                        ns.value = 0.00.toFixed(2);
                                    };
                                });
                            });

                            // Running Delete Match Card function
                            const deleteMatchcard = document.querySelectorAll(".match-card .mh-cancel");
                            deleteMatchcard.forEach(dmc => {
                                dmc.addEventListener("click", () => {
                                    // Removing Match Card from Bet Slip
                                    const mCard = dmc.parentElement.parentElement.parentElement.parentElement;
                                    mcContainer.removeChild(mCard);

                                    // Reseting betslip count value
                                    count--
                                    countOdds();

                                    // Calling Singles code
                                    singles();

                                    // Calling Multi code
                                    multi();
        
                                    // Calling code for bet eligibility
                                    eligibleSinglesBalance();
                                    eligibleMultiBalance();

                                    // Returning "empty betslip" content if all matches are deleted
                                    if (!count == 0) {
                                        gamesBooked.classList.add("gb-active");
                                    } else {
                                        gamesBooked.classList.remove("gb-active");
                                    };
                                });
                            });

                            // Calling Totals Code
                            singles();
                            multi();
                            eligibleSinglesBalance();
                            eligibleMultiBalance();
                            
                            // Clearing all match/odds selected
                            const clearAll = document.querySelector(".alter-bl .clear-bl");
                            clearAll.addEventListener("click", () => {
                                const matchOdds = document.querySelectorAll(".match-odd"),
                                matchCards = document.querySelectorAll(".new-entry"),
                                gamesBooked = document.querySelector(".games-booked");

                                matchOdds.forEach(mo => {
                                    mo.classList.remove("md-active");
                                });
                                matchCards.forEach(matchCard => {
                                    const mcContainer = document.querySelector(".games-booked .match-cards-container");
                                    mcContainer.removeChild(matchCard);
                                });
                                
                                // Reseting betslip count value
                                count = 0;
                                countOdds();

                                // Returning empty betslip content
                                gamesBooked.classList.remove("gb-active");

                                // Calling Singles code
                                singles();

                                // Calling Multi code
                                multi();

                                // Calling code for bet eligibility
                                eligibleSinglesBalance();

                                const multipleSelections = document.querySelector(".check-out-multi .multiple-selections");
                                multipleSelections.style.display = "none"; // Clearing Multiple Selections warning
                                eligibleMultiBalance();
                            });
                        });
                    };
                };

            });
        });


        // Open Bets Popup Section
        $(".mc-event").each(function() {
            $(this).click(function() {
                $(".loading-animation").css({"display": "flex"});
                $(".view-open-bets").css({"display": "block"});

                const animationTimeout = setTimeout(() => {
                    $(".loading-animation").css({"display": "none"});
                    $(".open-bet-event").css({"height": "570px"});
                    $(".obe-body").css({"display": "block"});
                }, 2400);
                

                // Closing Open Bet if Cancel is clicked
                $(".close-open-bet").click(function() {
                    $(".view-open-bets").css({"display": "none"});

                    clearTimeout(animationTimeout);
                    
                    $(".new-open-bet").remove();
                    $(".open-bet-event").css({"height": "fit-content"});
                    $(".loading-animation").css({"display": "none"});
                    $(".obe-body").css({"display": "none"});
                });

        
                // Closing Open Bet if any other part of the Document is clicked
                $(".obe-container").click(function(e){
                    let outside = $(".open-bet-event");
                    if (outside !== e.target && !outside.has(e.target).length) {
                        $(".view-open-bets").css({"display": "none"});

                        clearTimeout(animationTimeout);
                        
                        $(".new-open-bet").remove();
                        $(".open-bet-event").css({"height": "fit-content"});
                        $(".loading-animation").css({"display": "none"});
                        $(".obe-body").css({"display": "none"});
                    };
                });
            });
        });
    };
    highRollers();


    // Code for cashier Section (Placing Bets and Viewing Bets)
    function cashier() {
        // Toggling Betslip Options (between Betslip and My-Bets section)
        const betMenu = document.querySelector(".bet-menu"),
        currentBetMenu = document.querySelector(".bl-top");

        betMenu.addEventListener("click", function() {
            currentBetMenu.classList.toggle("bl-top-active");
        });

        // Closing Betslip Options Menu if any other part of the Document is clicked
        $(document).click(function(e){
            let outside = $(".bet-menu");
            if (outside !== e.target && !outside.has(e.target).length) {
                currentBetMenu.classList.remove("bl-top-active");
            };
        });

        // Chosing Betslip Options (between Betslip and My-Bets section
        const ddItem = document.querySelectorAll(".blt-dropdown .dd-item");
        ddItem.forEach(item => {
            item.addEventListener("click", () => {
                document.querySelector(".bet-menu .current-bm").innerHTML = item.children[1].innerHTML;
                document.querySelector(".blt-dropdown .blt-dd-active").classList.remove("blt-dd-active");
                item.classList.add("blt-dd-active");

                if (item.classList.contains("dd-betslip")) {
                    document.getElementById("cbm-img").src = "Gallery/gallery1/my-bets.svg";
                    item.firstElementChild.src = "Gallery/gallery2/active-betslip.svg";
                    item.nextElementSibling.firstElementChild.src = "Gallery/gallery2/norm-mybet.svg";
                } else {
                    document.getElementById("cbm-img").src = "Gallery/gallery2/current-mybets.svg";
                    item.firstElementChild.src = "Gallery/gallery2/active-mybet.svg";
                    item.previousElementSibling.firstElementChild.src = "Gallery/gallery2/norm-betslip.svg";
                };

                document.querySelector(".bl-top").classList.toggle("bl-top-active");
            });
        });


        // Collapse betslip code
        const collapseBetslip = document.querySelector(".collapse-betslip .cb-image");
        collapseBetslip.addEventListener("mouseover", function() {
            document.querySelector(".collapse-betslip .cb-hover").style.display = "flex";
        });
        collapseBetslip.addEventListener("mouseout", function() {
            document.querySelector(".collapse-betslip .cb-hover").style.display = "none";
        });
        collapseBetslip.addEventListener("click", () => {
            document.querySelector(".cashier").classList.add("minimize-cashier");

            viewHighRollers();
            
            clearTopSpace();
            
            $(".md-body").children(".extra-odds").css({"margin-left": "3%"});
        });

        
        // Toggling Odd Changes Menu
        const oddChanges = document.querySelector(".oc-text"),
        currentOC = document.querySelector(".odd-changes");
        oddChanges.addEventListener("click", function() {
            currentOC.classList.toggle("alter-active");
        });

        // Chosing Odd Changes type
        const ocOption = document.querySelectorAll(".odd-changes .oc-option");
        ocOption.forEach(option => {
            option.addEventListener("click", () => {
                document.querySelector(".oc-text span").innerHTML = option.innerHTML;
                document.querySelector(".odd-changes .oc-active").classList.remove("oc-active");
                option.classList.add("oc-active");
                document.querySelector(".odd-changes").classList.toggle("alter-active");
            })
        });

        // Closing Odd Changes Menu if any other part of the Document is clicked
        $(document).click(function(e){
            let outside = $(".oc-text");
            if (outside !== e.target && !outside.has(e.target).length) {
                currentOC.classList.remove("alter-active");
            };
        });


        // Multi & Singles code
        function multiSingle() {
            const betType = document.querySelectorAll(".bet-type .bt-item");
            betType.forEach(bt => {
                bt.addEventListener("click", () => {
                    document.querySelector(".bet-type .bt-active").classList.remove("bt-active");
                    bt.classList.add("bt-active");
                })
            });


            const betSingles = document.querySelector(".bet-type .bt-singles"),
            betMulti = document.querySelector(".bet-type .bt-multi");

            betSingles.addEventListener("click", () => {
                document.querySelector(".check-out-singles").style.display = "flex";
                document.querySelector(".check-out-multi").style.display = "none";

                const stakeAmount = document.querySelectorAll(".match-card .stake-amount"),
                singlesPayout = document.querySelectorAll(".match-card .singles-payout");
                stakeAmount.forEach(sa => {
                    sa.style.display = "flex"
                });
                singlesPayout.forEach(sp => {
                    sp.style.display = "flex"
                });

                const mcContent = document.querySelectorAll(".match-card .mc-content");
                mcContent.forEach(mcc => {
                    mcc.classList.remove("mc-content-multi");
                });
                gamesBooked = document.querySelector(".games-booked");
                gamesBooked.classList.remove("games-booked-multi");
            });

            betMulti.addEventListener("click", () => {
                document.querySelector(".check-out-singles").style.display = "none";
                document.querySelector(".check-out-multi").style.display = "flex";

                const stakeAmount = document.querySelectorAll(".match-card .stake-amount"),
                singlesPayout = document.querySelectorAll(".match-card .singles-payout");
                stakeAmount.forEach(sa => {
                    sa.style.display = "none"
                });
                singlesPayout.forEach(sp => {
                    sp.style.display = "none"
                });

                const mcContent = document.querySelectorAll(".match-card .mc-content");
                mcContent.forEach(mcc => {
                    mcc.classList.add("mc-content-multi");
                });
                gamesBooked = document.querySelector(".games-booked");
                gamesBooked.classList.add("games-booked-multi");
            });
        };
        multiSingle();


        // Setting Checkout Images to Current Crypto Image 
        const checkoutImage = document.querySelectorAll(".check-out #checkout-img");
        checkoutImage.forEach(img => {
            img.src = document.querySelector(".wallet-dropdown-options .cv").children[1].firstElementChild.src;
        }); 
    };
    cashier();


    // Code for Responsiveness
    function responsiveCode() {
        // Changing the look of each Match Day

        // Shorter Width Match Day for smaller screen sizes
        function verticalMatchDay() {
            $(".stake-mini-logo").css({"display": "block"});
            $(".stake-big-logo").css({"display": "none"});

            $(".bs-menu2").css({"display": "block", "width": "fit-content"});
            $(".menu2-right").css({"margin-top": "30px", "margin-left": "20px"});

            $(".md-body").css({"display": "block", "padding": "0"});
            $(".md-body").children(".club-names").css({"display": "none"});
            $(".md-body").children(".md-image").css({"display": "none"});
            $(".md-body").children(".extra-odds").css({"display": "none"});

            $(".md-body").children(".res-club-name").css({"display": "block", "padding": "0 20px"});
            $(".md-body").children(".res-odd-type").css({"display": "block"});
            $(".mdh-odd-type").css({"display": "none"});

            $(".res-stats-extra").css({"display": "flex"});
            $(".res-stats-extra").children(".md-image").css({"display": "block"});
            
            $(".winners-odd-type").css({"width": "100%", "padding": "0 16px"});
            $(".res-match-line").css({"display": "block"});
        };

        // Longer Width Match Day for bigger screen sizes
        function horizontalMatchDay() {
            $(".stake-mini-logo").css({"display": "none"});
            $(".stake-big-logo").css({"display": "block"});

            $(".bs-menu2").css({"display": "flex", "width": "100%"});
            $(".menu2-right").css({"margin": "0"});

            $(".md-body").css({"display": "flex", "padding": "0 15px"});
            $(".md-body").children(".club-names").css({"display": "block"});
            $(".md-body").children(".md-image").css({"display": "block"});
            $(".md-body").children(".extra-odds").css({"display": "block"});

            $(".md-body").children(".res-club-name").css({"display": "none"});
            $(".md-body").children(".res-odd-type").css({"display": "none"});
            $(".mdh-odd-type").css({"display": "flex"});

            $(".res-stats-extra").css({"display": "none"});
            
            $(".winners-odd-type").css({"width": "calc(51% + 24px)", "padding": "0"});
            $(".res-match-line").css({"display": "none"});
        };

        
        // Adjustments to Elements as the browser undergoes resizing

        const leftSideMenu = document.querySelector(".stake-side-bar"),
        cashierSection = document.querySelector(".cashier"),
        matchOdd = document.querySelectorAll(".match-odd"),
        max1300 = window.matchMedia("(max-width: 1300px) and (min-width: 760px)"),
        max1150 = window.matchMedia("(max-width: 1150px) and (min-width: 760px)"),
        max1050 = window.matchMedia("(max-width: 1050px) and (min-width: 760px)"),
        max760 = window.matchMedia("(max-width: 760px)"),
        max700 = window.matchMedia("(max-width: 700px)"),
        max640 = window.matchMedia("(max-width: 640px)");
        
        function resOnload() {
            if (max1150.matches) {
                responsiveDarkBG();
            };
    
            if (max640.matches) {
                verticalMatchDay();
            };

            if (max760.matches) {
                $(".stake-side-bar").addClass("minimize");
                $(".footer").css({"padding-bottom": "100px"});
                
                window.addEventListener("resize", () => {
                    if (!max760.matches) {
                        
                        if (max1150.matches) {
                            if (!leftSideMenu.classList.contains("mobile")
                            && !leftSideMenu.classList.contains("res-stake-lb")) {
                                $(".small-side-bar").css({"display": "block"});
                                $(".stake-side-bar").addClass("minimize");
                                removeDarkBG();
                            } else if (leftSideMenu.classList.contains("mobile")
                            && leftSideMenu.classList.contains("res-stake-lb")) {
                                $(".stake-side-bar").removeClass("minimize");
                                $(".small-side-bar").css({"display": "block"});
                                responsiveDarkBG();
                            }
                        } else {
                            $(".stake-side-bar").removeClass("res-stake-lb");
                            
                            if (!leftSideMenu.classList.contains("mobile")) {
                                $(".small-side-bar").css({"display": "block"});
                                $(".stake-side-bar").addClass("minimize");
                            } else {
                                $(".stake-side-bar").removeClass("minimize");
                                $(".small-side-bar").css({"display": "none"});
                            }
                        }

                        if (cashierSection.classList.contains("show-cashier")) {
                            $(".cashier").removeClass("minimize-cashier");
                            $(".cashier").removeClass("show-cashier");
                        };
                    }
                });
            } else {
                $(".stake-side-bar").removeClass("minimize");
                $(".footer").css({"padding-bottom": "40px"});
            };

            const mainPageMenu = document.querySelector(".scroll-menu"),
            mainPageContainer = document.querySelector(".bs-container");
            if (max700.matches) {
                mainPageMenu.style.width = `${mainPageContainer.offsetWidth}px`;
            } else {
                mainPageMenu.style.width = "fit-content";
            };
        };
        resOnload();

        function window820() {
            const max820 = window.matchMedia("(max-width: 820px)");
            if (max820.matches) {
                $(".sw-image").css({"display": "flex"});
                $(".sw-text").css({"display": "none"});
                $(".ft-search").children("span").css({"display": "none"});
                $(".md-body").children(".extra-odds").css({"margin-left": "5px"});
            } else if (!max820.matches && max1300.matches) {
                clearTopSpace2();
                if (!cashierSection.classList.contains("minimize-cashier")) {
                    $(".md-body").children(".extra-odds").css({"margin-left": "5px"});
                } else {
                    $(".md-body").children(".extra-odds").css({"margin-left": "3%"});
                };
            }
        };

        // Showing a Dark Background to cover the Main Page any time the Detailed Side Menu is in View 
        function responsiveDarkBG() {
            // if Detailed(Bigger) Side Menu and Cashier Section are Visible and width is 1150px or less
            if (!cashierSection.classList.contains("minimize-cashier") 
            && !leftSideMenu.classList.contains("minimize") 
            && max1150.matches) {
                $(".stake-side-bar").addClass("res-stake-lb");
                $(".small-side-bar").css({"display": "block"});

                $(".tablet-dark-bg").css({"display": "block"});
                $(".tablet-dark-bg").children(".popup-background").css({"width": "calc(100vw - 590px)"});
            } 

            // if Detailed(Bigger) Side Menu is Visible and Cashier Section is not Visible and width is 1150px or less
            else if (cashierSection.classList.contains("minimize-cashier") 
            && !leftSideMenu.classList.contains("minimize") 
            && max1150.matches) {
                $(".stake-side-bar").addClass("res-stake-lb");
                $(".small-side-bar").css({"display": "block"});
                
                $(".tablet-dark-bg").css({"display": "block"});
                $(".tablet-dark-bg").children(".popup-background").css({"width": "calc(100vw - 240px)"});
            } 

            // if Detailed(Bigger) Side Menu is not Visible and Cashier Section is Visible are Visible and width is 1150px or less
            else if (!cashierSection.classList.contains("minimize-cashier") 
            && leftSideMenu.classList.contains("minimize") 
            && max1150.matches) {
                $(".stake-side-bar").removeClass("res-stake-lb");
                $(".stake-side-bar").addClass("minimize");
                $(".tablet-dark-bg").css({"display": "none"});
            }

            // if Detailed(Bigger) Side Menu and Cashier Section are not Visible and width is 1150px or less
            else if (cashierSection.classList.contains("minimize-cashier") 
            && leftSideMenu.classList.contains("minimize") 
            && max1150.matches) {
                $(".stake-side-bar").removeClass("res-stake-lb");
                $(".tablet-dark-bg").css({"display": "none"});
            }

            // if Detailed(Bigger) Side Menu and Cashier Section are Visible and width is 1150px or more
            else if (!cashierSection.classList.contains("minimize-cashier") 
            && !leftSideMenu.classList.contains("minimize") 
            && !max1150.matches) {
                $(".tablet-dark-bg").css({"display": "none"});
            };


            // Removing Dark-background when it is clicked
            $(".tablet-dark-bg").children(".popup-background").click(function(e){
                $(".tablet-dark-bg").css({"display": "none"});

                $(".stake-side-bar").removeClass("res-stake-lb");
                $(".stake-side-bar").addClass("minimize");

                $(".small-side-bar").css({"display": "block"});
            });
        };

        function removeDarkBG() {
            $(".tablet-dark-bg").css({"display": "none"});

            if (!leftSideMenu.classList.contains("minimize")) {
                $(".small-side-bar").css({"display": "none"});
            };

            $(".stake-side-bar").removeClass("res-stake-lb");
        };


        window.addEventListener("resize", () => {
            // Resetting heights to prevent distortion in mobile devices
            setInterval(() => {
                const winHeight = window.innerHeight;
                $("body").css({"height": `${winHeight}px`});
                $(".fixed-left").css({"height": `${winHeight}px`});
                $(".small-side-bar").css({"height": `${winHeight}px`});
                $(".odds-page").css({"height": `${winHeight}px`});
                $(".obe-container").css({"height": `${winHeight}px`});
                $(".popup-background").css({"height": `${winHeight}px`});
                $(".cashier").css({"height": `${winHeight}px`});
                $(".games-booked").css({"height": `calc(${winHeight}px - 300px)`});
                $(".games-booked-multi").css({"height": `calc(${winHeight}px - 340px)`});
    
                const aboveBalanceSingles = document.querySelector(".check-out-singles .above-balance"),
                aboveBalanceMulti = document.querySelector(".check-out-multi .above-balance"),
                multipleSelections = document.querySelector(".check-out-multi .multiple-selections");
                if (aboveBalanceSingles.classList.contains("visible-warning")) {
                    $(".games-booked").css({"height": `calc(${winHeight}px - 320px)`});
                }
                if (aboveBalanceMulti.classList.contains("visible-warning")) {
                    $(".games-booked-multi").css({"height": `calc(${winHeight}px - 360px)`});
                }
                if (multipleSelections.classList.contains("visible-warning")) {
                    $(".games-booked-multi").css({"height": `calc(${winHeight}px - 380px)`});
                }
            }, 10);


            if (max1300.matches) {
                // if Detailed(Bigger) Side Menu and Cashier Section are Visible and width is 1300px or less
                if (!cashierSection.classList.contains("minimize-cashier") 
                && !leftSideMenu.classList.contains("minimize")) {
                    verticalMatchDay();
                } 
                // if Detailed(Bigger) Side Menu is Visible and Cashier Section is not Visible and width is 1300px or less
                else if (cashierSection.classList.contains("minimize-cashier") 
                && !leftSideMenu.classList.contains("minimize")) {
                    horizontalMatchDay();
                } 
                // if Detailed(Bigger) Side Menu is not Visible and Cashier Section is Visible are Visible and width is 1300px or less
                else if (!cashierSection.classList.contains("minimize-cashier") 
                && leftSideMenu.classList.contains("minimize")) {
                    horizontalMatchDay();
                }
                // if Detailed(Bigger) Side Menu and Cashier Section are not Visible and width is 1300px or less
                else if (cashierSection.classList.contains("minimize-cashier") 
                && leftSideMenu.classList.contains("minimize")) {
                    horizontalMatchDay();
                };


                clearTopSpace2();
            } else {
                horizontalMatchDay();

                if (!cashierSection.classList.contains("minimize-cashier") 
                && !leftSideMenu.classList.contains("minimize")) {
                    $(".md-body").children(".extra-odds").css({"margin-left": "1%"});
                } else {
                    $(".md-body").children(".extra-odds").css({"margin-left": "3%"});
                };

                clearTopSpace();
            };

            if (max1150.matches) {
                responsiveDarkBG();
                horizontalMatchDay();
            } else {
                removeDarkBG();
            };

            if (max1050.matches) {
                if (!cashierSection.classList.contains("minimize-cashier")) {
                    verticalMatchDay();
                } else {
                    horizontalMatchDay();
                };
            };

            viewHighRollers();

            window820();

            if (max760.matches) {
                $(".small-side-bar").css({"display": "none"});
                $(".tablet-dark-bg").css({"display": "none"});

                if (!cashierSection.classList.contains("minimize-cashier")) {
                    $(".cashier").addClass("show-cashier");
                }
                
                if (!leftSideMenu.classList.contains("minimize")) {
                    $(".stake-side-bar").addClass("res-stake-lb");
                    $(".stake-side-bar").addClass("mobile");
                } else {
                    $(".stake-side-bar").removeClass("mobile");
                }

                $(".footer").css({"padding-bottom": "100px"});

                window.addEventListener("resize", () => {
                    if (!max760.matches) {
                        
                        if (max1150.matches) {
                            if (!leftSideMenu.classList.contains("mobile")
                            && !leftSideMenu.classList.contains("res-stake-lb")) {
                                $(".small-side-bar").css({"display": "block"});
                                $(".stake-side-bar").addClass("minimize");
                                removeDarkBG();
                            } else if (leftSideMenu.classList.contains("mobile")
                            && leftSideMenu.classList.contains("res-stake-lb")) {
                                $(".stake-side-bar").removeClass("minimize");
                                $(".small-side-bar").css({"display": "block"});
                                responsiveDarkBG();
                            }
                        } else {
                            $(".stake-side-bar").removeClass("res-stake-lb");
                            
                            if (!leftSideMenu.classList.contains("mobile")) {
                                $(".small-side-bar").css({"display": "block"});
                                $(".stake-side-bar").addClass("minimize");
                            } else {
                                $(".stake-side-bar").removeClass("minimize");
                                $(".small-side-bar").css({"display": "none"});
                            }
                        }

                        if (cashierSection.classList.contains("show-cashier")) {
                            $(".cashier").removeClass("minimize-cashier");
                            $(".cashier").removeClass("show-cashier");
                        };
                    }
                });
            } else {
                $(".footer").css({"padding-bottom": "40px"});
            }

            // Adjusting Odds Page Menu width to make it Scrollable
            const mainPageMenu = document.querySelector(".scroll-menu"),
            mainPageContainer = document.querySelector(".bs-container");
            if (max700.matches) {
                mainPageMenu.style.width = `${mainPageContainer.offsetWidth}px`;
            } else {
                mainPageMenu.style.width = "fit-content";
            };

            if (max640.matches) {
                verticalMatchDay();

            } else if (!max640.matches && max700.matches) {
                horizontalMatchDay();
                $(".bs-menu2").css({"display": "block", "width": "fit-content"});
                $(".menu2-right").css({"margin-top": "30px", "margin-left": "20px"});
            };
        });


        // Adjustments to Elements when a Match Card is added to the Bet Slip
        function resAddMatchCard() {
            if (max1300.matches) {
                if (!cashierSection.classList.contains("minimize-cashier") 
                && !leftSideMenu.classList.contains("minimize")) {
                    verticalMatchDay();
                } else {
                    horizontalMatchDay();
                };

                clearTopSpace2();

                $(".md-body").children(".extra-odds").css({"margin-left": "1%"});
            };

            if (max1150.matches) {
                responsiveDarkBG();
                horizontalMatchDay();
            };

            if (max1050.matches) {
                if (!cashierSection.classList.contains("minimize-cashier")) {
                    verticalMatchDay();
                    $(".sw-image").css({"display": "flex"});
                    $(".sw-text").css({"display": "none"});
                    $(".ft-search").children("span").css({"display": "none"});
                } else {
                    horizontalMatchDay();
                }
            };

            window820();

            if (max760.matches) {
                $(".cashier").addClass("minimize-cashier");
            };
        };

        matchOdd.forEach(mo => {
            mo.addEventListener("click", () => {
                if (mo.classList.contains("md-active")) {
                    resAddMatchCard();
                };
            });
        });

        $(".add-mc").click(function() {
            resAddMatchCard();
        });

        // Adjustments to Elements when a Minimize Side Menu is Clicked
        $(".fl-head-image").click(function() {
            if (max1300.matches) {
               horizontalMatchDay();
                if (!cashierSection.classList.contains("minimize-cashier")) {
                    $(".md-body").children(".extra-odds").css({"margin-left": "1%"});
                } else {
                    $(".md-body").children(".extra-odds").css({"margin-left": "3%"});
                };

                clearTopSpace2();
            };
                
            if (max1150.matches) {
                responsiveDarkBG();
            };

            if (max1050.matches) {
                if (!cashierSection.classList.contains("minimize-cashier")) {
                    verticalMatchDay();
                } else {
                    horizontalMatchDay();
                }
            };

            window820();
        });

        // Adjustments to Elements when a Expand Side Menu is Clicked
        $(".ssb-head-image").click(function() {
            if (max1300.matches) {
                if (!cashierSection.classList.contains("minimize-cashier")) {
                    verticalMatchDay();
                } else {
                    horizontalMatchDay();
                };
            };

            if (max1150.matches) {
                responsiveDarkBG();
                horizontalMatchDay();
            };

            if (max1050.matches) {
                if (!cashierSection.classList.contains("minimize-cashier")) {
                    verticalMatchDay();
                } else {
                    horizontalMatchDay();
                }
            };

            window820();
        });

        // Adjustments to Elements when a Collapse Bet Slip is Clicked
        $(".cb-image").click(function() {
            if (max1300.matches) {
               horizontalMatchDay();
            };
                
            if (max1150.matches) {
                responsiveDarkBG();
                horizontalMatchDay();
            };

            if (max1050.matches) {
                if (!cashierSection.classList.contains("minimize-cashier")) {
                    verticalMatchDay();
                } else {
                    horizontalMatchDay();
                }
            };

            if (max760.matches) {
                $(".cashier").addClass("minimize-cashier");
                $(".cashier").removeClass("show-cashier");
            }
            
            viewHighRollers();

            window820();
        });


        // Opening Side Menu and Bet Slip on Tablets/Mobile devices
        function mobileTablet() {
            $(".tmm-menu").click(function() {
                $(".stake-side-bar").addClass("res-stake-lb");
                $(".stake-side-bar").removeClass("minimize");
                $(".stake-side-bar").addClass("mobile");
            });

            $(".close-menu-image").mouseover(function() {
                $(".close-menu-tooltip").css({"display": "block"});
            });
            $(".close-menu-image").mouseout(function() {
                $(".close-menu-tooltip").css({"display": "none"});
            });
            const closeMenu = document.querySelector(".close-menu-image");
            closeMenu.addEventListener("touchstart", () => {
                $(".close-menu-tooltip").css({"display": "none"});
            });

            $(".close-menu-image").click(function() {
                $(".stake-side-bar").removeClass("res-stake-lb");
                $(".stake-side-bar").addClass("minimize");
                $(".stake-side-bar").removeClass("mobile");
            });

            $(".tmm-betslip").click(function() {
                $(".cashier").removeClass("minimize-cashier");
                $(".cashier").addClass("show-cashier");
            });
        };
        mobileTablet();

    };
    responsiveCode();

});