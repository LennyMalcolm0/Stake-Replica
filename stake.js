$(document).ready(function(){

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

            // Toggling some contents in open bets section
            const cashier = document.querySelector(".cashier");
            if (cashier.style.display == "block") {
                $(".mc-user").css({"display": ""});
                $(".mc-time").css({"display": ""});
                $(".mc-odd").css({"display": ""});
            };
        });
        expand.addEventListener("click", function() {
            document.querySelector(".stake-side-bar").classList.remove("minimize");
            document.querySelector(".small-side-bar").style.display = "none";

            // Toggling some contents in open bets section
            const cashier = document.querySelector(".cashier");
            if (cashier.style.display == "block") {
                $(".mc-user").css({"display": "none"});
                $(".mc-time").css({"display": "none"});
                $(".mc-odd").css({"display": "none"});
            };
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
        });
        expandMenu.addEventListener("mouseout", function() {
            document.querySelector(".ssb-head-tooltip").style.display = "none";
        });


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


    // Some Reusable Codes (Would be called when some events happen)

        function eligibleSinglesBalance() {
        // Checking if Crypto Balance and Total Singles Stake Amount are in sync
            const currentCrypto = document.querySelector(".current-text .current-value"),
            totalStake = document.querySelector(".check-out-singles .ts-amount span"),
            currentCryptoBalance = Number(currentCrypto.innerHTML.slice(1)),
            totalStakeAmount = Number(totalStake.innerHTML),

            aboveBalance = document.querySelector(".check-out-singles .above-balance"),
            placeSinglesBet = document.querySelector(".check-out-singles button"),

            checkOutSingles = document.querySelector(".check-out-singles"),
            gamesBooked = document.querySelector(".games-booked");

            if (totalStakeAmount > currentCryptoBalance) {
                // Display warning
                aboveBalance.style.display = "block";

                // Decreasing button opacity
                placeSinglesBet.style.opacity = 0.5;

                // Adjusting height
                checkOutSingles.style.height = "150px";
                gamesBooked.style.height = "calc(100vh - 320px)";
            } else if (totalStakeAmount <= currentCryptoBalance && totalStakeAmount > 0) {
                // Remove warning
                aboveBalance.style.display = "none";
                
                // Increasing button opacity
                placeSinglesBet.style.opacity = 1.0;

                // Returning height
                checkOutSingles.style.height = "130px";
                gamesBooked.style.height = "calc(100vh - 300px)";
            } else if (totalStakeAmount == 0.00) {
                // Remove warning
                aboveBalance.style.display = "none";

                // Decreasing button opacity
                placeSinglesBet.style.opacity = 0.5;

                // Returning height
                checkOutSingles.style.height = "130px";
                gamesBooked.style.height = "calc(100vh - 300px)";
            };
        };


        function eligibleMultiBalance() {
            // Checking if Crypto Balance and Total Multi Stake Amount are in sync
            const currentCrypto = document.querySelector(".current-text .current-value"),
            inputStakeMulti = document.querySelector(".check-out-multi input"),
            currentCryptoBalance = Number(currentCrypto.innerHTML.slice(1)),
            multiStakeAmount = inputStakeMulti.value,

            aboveBalance = document.querySelector(".check-out-multi .above-balance"),
            placeMultiBet = document.querySelector(".check-out-multi button"),

            checkOutMulti = document.querySelector(".check-out-multi"),
            gamesBooked = document.querySelector(".games-booked");

            if (multiStakeAmount > currentCryptoBalance) {
                // Display warning
                aboveBalance.style.display = "block";

                // Decreasing button opacity
                placeMultiBet.style.opacity = 0.5;

                // Adjusting height
                checkOutMulti.style.height = "190px";
                gamesBooked.style.height = "calc(100vh - 360px)";
            } else if (multiStakeAmount < currentCryptoBalance && multiStakeAmount > 0) {
                // Remove warning
                aboveBalance.style.display = "none";
                
                // Increasing button opacity
                placeMultiBet.style.opacity = 1.0;

                // Returning height
                checkOutMulti.style.height = "170px";
                gamesBooked.style.height = "calc(100vh - 340px)";
            } else if (multiStakeAmount == 0.00) {
                // Remove warning
                aboveBalance.style.display = "none";

                // Decreasing button opacity
                placeMultiBet.style.opacity = 0.5;

                // Returning height
                checkOutMulti.style.height = "170px";
                gamesBooked.style.height = "calc(100vh - 340px)";
            };
        };


        function singles() {
            // Summing up all stake amount in singles session
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

            totalStake.innerHTML = (sumStake).toFixed(2);

            // Summing up all estimated payout value
            const estPayoutSingles = document.querySelector(".check-out-singles .est-amount span");
            singlesPayout = document.querySelectorAll(".new-entry .sd-amount span");

            const payoutArray = [0];
            estPayoutSingles.innerHTML = 0;
            singlesPayout.forEach(sPay => {
                payoutArray.push(Number(sPay.textContent));
            });

            let sumPayout = payoutArray.reduce(spFunction);
            function spFunction(total, value) {
            return total + value;
            };

            estPayoutSingles.innerHTML = (sumPayout).toFixed(2);
        };


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
            payoutMulti.innerHTML = (inputStakeMulti.value * totalMultiOdd.innerHTML).toFixed(2);
        };


    function oddsPage() {
        // Code for events in Odds Page fixed header
        function stakeHeader() {
            // Toggling Wallet Dropdown
            const currentWallet = document.querySelector(".ft-current-wallet"),
            walletOptions = document.querySelector(".wallet-options");
    
            currentWallet.addEventListener("click", function(){
                walletOptions.classList.toggle("sw-active");
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
        };
        stakeHeader();

    
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


            // Toggling Standard Odds Type values
            const oddsDisplayToggle = document.querySelectorAll(".menu-all"),
            oddsDisplayType = document.querySelector(".odds-display-type");
            oddsDisplayToggle.forEach(odt => {
                odt.addEventListener("click", function() {
                oddsDisplayType.classList.toggle("odds-dd-active");
                })
            });
    
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
            const matchOdd = document.querySelectorAll(".match-odd"),
            betCount = document.querySelectorAll(".bl-top .bet-count");
            let count = 0;
            matchOdd.forEach(mo => {
                mo.addEventListener("click", () => {
                    mo.classList.toggle("md-active");

                    // Adding Cashier zone & Altering Random bets section
                    const cashierDisplay = document.querySelector(".cashier");
                    if (mo.classList.contains("md-active")) {
                        cashierDisplay.style.display = "block";

                        $(".mc-user").css({"display": "none"});
                        $(".mc-time").css({"display": "none"});
                        $(".mc-odd").css({"display": "none"});
                    };

                    // Adjusting numbers of picks
                    if (mo.classList.contains("md-active")) {
                        count++
                    } else {
                        count--
                    };
                    
                    // Counting matches selected
                    function countOdds() {
                        betCount.forEach(betC => {
                            betC.textContent = count;
                            betC.style.display = "block";

                            if (count == 0) {
                                betC.style.display = "none";
                            }
                        });
                    };
                    countOdds();


                    // Adding and removing Match Cards & events attached to it
                    function addMatchCard() {
                        const mdActive = document.getElementsByClassName("md-active"),
                        mdActiveCount = mdActive.length;
                        // Toggling the empty betslip content
                        const gamesBooked = document.querySelector(".games-booked");
                        if (!mdActiveCount == 0) {
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
                            newMatchPick = mo.firstElementChild,
                            newMatchHeader1 = mo.parentElement.firstElementChild.firstElementChild,
                            newMatchHeader2 = mo.parentElement.firstElementChild.children[1],
                            newMatchPickOdd = mo.children[1];

                            matchHeader.innerHTML = newMatchHeader1.innerHTML + " - " + newMatchHeader2.innerHTML;
                            matchPick.innerHTML = newMatchPick.innerHTML;
                            matchPickOdd.innerHTML = newMatchPickOdd.innerHTML;
                    
                            // Adding Match Card to Bet Slip
                            const mcContainer = document.querySelector(".games-booked .match-cards-container");
                            mcContainer.appendChild(newEntry);


                            newEntry.classList.add(`${mo.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.innerHTML.split(" ").join("") 
                            + mo.parentElement.firstElementChild.firstElementChild.innerHTML.split(" ").join("")}`
                            );

                            // Deleting match card
                            const deleteMatchcard = newEntry.firstElementChild.firstElementChild.firstElementChild.children[1];
                            deleteMatchcard.addEventListener("click", () => {
                                // Removing Match Card from Bet Slip
                                const matchCard = deleteMatchcard.parentElement.parentElement.parentElement.parentElement;
                                mcContainer.removeChild(matchCard);
                                
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
                                const mdActive = document.getElementsByClassName("md-active"),
                                mdActiveCount = mdActive.length;
        
                                const gamesBooked = document.querySelector(".games-booked");
                                if (mdActiveCount == 0) {
                                    gamesBooked.classList.remove("gb-active");
                                };
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
                                payout.innerHTML = (ns.value * matchPickOdd.innerHTML).toFixed(2);

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
                            payoutMulti.innerHTML = (inputStakeMulti.value * totalMultiOdd.innerHTML).toFixed(2);

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
                                    multipleSelections.style.display = "block";
                    
                                    // Decreasing button opacity
                                    placeMultiBet.style.opacity = 0.5;
                    
                                    // Adjusting height
                                    checkOutMulti.style.height = "210px";
                                    gamesBooked.style.height = "calc(100vh - 380px)";
                                } else {
                                    // Remove warning
                                    multipleSelections.style.display = "none";
                                    
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
                            gamesBooked.style.height = "calc(100vh - 300px)";
                        };
                    };
                    sameMatch();

                    betMulti.addEventListener("click", () => {
                        sameMatch();
                    });
                    betSingles.addEventListener("click", () => {
                        sameMatch();
                    });


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

                        // Checking if more than one odd is selected from a single match when a Match odd or Singles/Multi button is clicked
                        sameMatch();
                    });
                });

            });

            // Adding "help" cursor to hidden users
            const mcUser = document.querySelectorAll("tbody .mc-user");
            mcUser.forEach(user => {
                if (!user.classList.contains("known-user")) {
                    user.style.cursor = "help"
                };
            });
        };
        competitionXbetslip();
    };
    oddsPage();


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
            document.querySelector(".cashier").style.display = "none";

            $(".mc-user").css({"display": ""});
            $(".mc-time").css({"display": ""});
            $(".mc-odd").css({"display": ""});
        })

        
        // Accept odd changes code
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


        const checkoutImage = document.querySelectorAll(".check-out #checkout-img");
        checkoutImage.forEach(img => {
            img.src = document.querySelector(".wallet-dropdown-options .cv").children[1].firstElementChild.src;
        }); 
    };
    cashier();

});