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


function walletDropdown() {
    const currentWallet = document.querySelector(".ft-current-wallet"),
    walletOptions = document.querySelector(".wallet-options");

    currentWallet.addEventListener("click", function(){
        walletOptions.classList.toggle("sw-active");
    });


    const currentCrypto = document.querySelector(".current-text .current-value"),
    currentCryptoImage = document.querySelector(".current-text img"),
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
    currentCryptoImage.src = document.querySelector(".wallet-dropdown-options .cv").children[1].firstElementChild.src;
    wDropdownOptions.forEach(element => {
        element.addEventListener("click", () => {
            currentCrypto.innerHTML = element.firstElementChild.innerHTML;
            document.querySelector(".current-text #current-image").src = element.children[1].firstElementChild.src;
            walletSearch.value = "";
            walletOptions.classList.toggle("sw-active");

            const checkoutImage = document.querySelectorAll(".check-out #checkout-img");
            checkoutImage.forEach(img => {
                img.src = document.querySelector(".current-text #current-image").src;
            });

            const mcImages = document.querySelectorAll(".mc-content .s-dollars img");
            mcImages.forEach(mcImage => {
            mcImage.src = document.querySelector(".current-text #current-image").src;
            });  
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

    const oddArray = [],
    inputArray = [];

    const matchOdd = document.querySelectorAll(".match-odd"),
    betCount = document.querySelectorAll(".bl-top .bet-count");
    let count = 0;
    matchOdd.forEach(mo => {
        mo.addEventListener("click", () => {
            mo.classList.toggle("md-active");

            // Adjusting numbers of picks
            if (mo.classList.contains("md-active")) {
                count++
            } else {
                count--
            };
            
            // Counting matches selected
            betCount.forEach(betC => {
                betC.textContent = count;
                betC.style.display = "block";

                if (count == 0) {
                    betC.style.display = "none";
                }
            })
            
            // Adding and removing Match Cards
            function addMatchCard() {
                let mdActive = document.getElementsByClassName("md-active"),
                mdActiveCount = mdActive.length;

                //Adding Cashier zone & Toggling the empty betslip content 
                const gamesBooked = document.querySelector(".games-booked"),
                cashierDisplay = document.querySelector(".cashier");
                if (!mdActiveCount == 0) {
                    gamesBooked.classList.add("gb-active");
                    cashierDisplay.style.display = "block";
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
            
                    const mcContainer = document.querySelector(".games-booked .match-cards-container");
                    mcContainer.appendChild(newEntry);

                    // Deleting match card
                    const deleteMatchcard = newEntry.firstElementChild.firstElementChild.firstElementChild.children[1];
                    deleteMatchcard.addEventListener("click", () => {
                        let matchCard = deleteMatchcard.parentElement.parentElement.parentElement.parentElement;
                        matchCard.style.display = "none";
                        mo.classList.remove("md-active");

                        // Returning "empty betslip" content if all matches are deleted
                        let mdActive = document.getElementsByClassName("md-active"),
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
                            ne.classList.add("hidden");
                        }
                    })
                }
            };
            addMatchCard();
            
            // Singles Est. Payout
            const inputStakeSingles = document.querySelectorAll(".new-entry input");
            inputStakeSingles.forEach(ns => {
                let payout = ns.parentElement.parentElement.parentElement.children[1].children[1].children[1].firstElementChild.firstElementChild,
                mpOdd = ns.parentElement.parentElement.parentElement.children[1].firstElementChild;

                ns.addEventListener("input", () => {
                    payout.innerHTML = (ns.value * mpOdd.innerHTML).toFixed(2);
                });

                ns.addEventListener("focusout", () => {
                    if (!ns.value) {
                        ns.value = 0.00.toFixed(2);
                    };

                    // Suming up total stake for single bets
                    const totalStake = document.querySelector(".check-out-singles .ts-amount span");

                    let initial = Number((payout.innerHTML / mpOdd.innerHTML));
                    inputArray.push(initial);
                    console.log(inputArray);
                    
                    let sum = inputArray.reduce(myFunction);
                    function myFunction(total, value) {
                    return total + value;
                    }

                    totalStake.innerHTML = (sum * 1).toFixed(2);
                });
            });

            // Multi Payout
            function multiPayout() {
                const inputStakeMulti = document.querySelector(".check-out-multi input"),
                totalMultiOdd = document.querySelector(".check-out-multi .total-odds"),
                payoutMulti = document.querySelector(".check-out-multi .est-amount span");

                oddArray.push(Number(mo.children[1].innerHTML));

                let oddSum = oddArray.reduce(addOdds)
                function addOdds(total, value) {
                    return total * value
                };
                totalMultiOdd.innerHTML = (oddSum * 1).toFixed(2);

                inputStakeMulti.addEventListener("keyup", () => {
                    payoutMulti.innerHTML = (inputStakeMulti.value * totalMultiOdd.innerHTML).toFixed(2);
                });

                inputStakeMulti.addEventListener("focusout", () => {
                    if (!inputStakeMulti.value) {
                        inputStakeMulti.value = 0.00.toFixed(2);
                    };
                });
            };
            multiPayout();

            // let zazu = [2, 4, 6, 8]
            // console.log(zazu);
        });

    });


    const mcImages = document.querySelectorAll(".mc-content .s-dollars img");
    mcImages.forEach(mcImage => {
        mcImage.src = document.querySelector(".wallet-dropdown-options .cv").children[1].firstElementChild.src;
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
    })

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


    const checkoutImage = document.querySelectorAll(".check-out #checkout-img");
    checkoutImage.forEach(img => {
        img.src = document.querySelector(".wallet-dropdown-options .cv").children[1].firstElementChild.src;
    }); 
};
cashier();