async function mainEvent() {

    /** Winner Pop Up Buttons and Fields */
    const winnerPopUpContainer = document.querySelector("#winnerPopUpContainer");
    const winnerPopUpInput = document.querySelector("#winnerPopUpInput");
    const winnerPopUpScore = document.querySelector("#winnerPopUpScore");
    const winnerPopUpXButton = document.querySelector("#winnerPopUpXButton");
    const winnerPopUpCloseButton = document.querySelector("#winnerPopUpCloseButton");

    /** Settings Buttons and Inputs */
    const settingsPopUpXButton = document.querySelector("#settingsPopUpXButton");
    const settingsTeamNameTextboxOne = document.querySelector("#settingsTeamNameTextboxOne");
    const settingsTeamNameTextboxTwo = document.querySelector("#settingsTeamNameTextboxTwo");
    const settingsPlayToNumbox = document.querySelector("#settingsPlayToNumbox");
    const settingsSaveButton = document.querySelector("#settingsSaveButton");
    const settingsPopUpContainer = document.querySelector("#settingsPopUpContainer");

    /** Main Display Buttons and Fields */

        /** Team One */
    const teamNameContainerOne = document.querySelector("#teamNameContainerOne");
    const scoreWrapperOne = document.querySelector("#scoreWrapperOne");
    const leftServingDotOne = document.querySelector("#leftServingDotOne");
    const leftServingDotTwo = document.querySelector("#leftServingDotTwo");
            /** Team One - Lower Buttons */
    const teamOneScoreDownButton = document.querySelector("#teamOneScoreDownButton");
    const teamOneScoreUpButton = document.querySelector("#teamOneScoreUpButton");
        
        /** Team Two */
    const teamNameContainerTwo = document.querySelector("#teamNameContainerTwo");
    const scoreWrapperTwo = document.querySelector("#scoreWrapperTwo");
    const rightServingDotOne = document.querySelector("#rightServingDotOne");
    const rightServingDotTwo = document.querySelector("#rightServingDotTwo");
            /** Team Two - Lower Buttons */
    const teamTwoScoreDownButton = document.querySelector("#teamTwoScoreDownButton");
    const teamTwoScoreUpButton = document.querySelector("#teamTwoScoreUpButton");

        /** Reset and Settings Buttons */
    const resetStartButton = document.querySelector("#resetStartButton");
    const settingsButton = document.querySelector("#settingsButton");

    /** Intance Variables */
    let maxScore = 11;
    let gameOver = true;

    /** Functions */
    function displayGameOver(teamName, winnerScore, loserScore) {
        console.log("Entered - displayGameOver(teamName = " + teamName + 
            ", winnerScore = " + winnerScore + ",loserScore = " + loserScore + ")");

        winnerPopUpContainer.classList.remove("hidden");
        winnerPopUpInput.innerHTML = teamName + " is the Winner!!!"
        winnerPopUpScore.innerHTML = "Final Score: " + winnerScore + " - " + loserScore;
        
    }

    /** Event Listeners */

        /** Serving Button Event Listeners */
    leftServingDotOne.addEventListener("click", (event) => {
        console.log("Fired - leftServingDotOne clicked");

        if (gameOver != true) {
            // Below Checks If Clicked Dot Is Already Acitve - Allows User To Deactivate 
            if (leftServingDotOne.classList.contains("activeServingDot") 
                && leftServingDotTwo.classList.contains("activeServingDot") != true) {
                    leftServingDotOne.classList.remove("activeServingDot");

            } else {
                // Activating leftServingDotOne
                leftServingDotOne.classList.add("activeServingDot");
            }
            
            // Deactivating Other Serving Dots
            leftServingDotTwo.classList.remove("activeServingDot");
            rightServingDotOne.classList.remove("activeServingDot");
            rightServingDotTwo.classList.remove("activeServingDot");
        }
    })
    leftServingDotTwo.addEventListener("click", (event) => {
        console.log("Fired - leftServingDotTwo clicked");

        if (gameOver != true) {
            // Below Checks If Clicked Dot Is Already Active - Allows User To Deactivate
            if (leftServingDotTwo.classList.contains("activeServingDot")) {
                leftServingDotTwo.classList.remove("activeServingDot");
            } else {
                // Activating leftServingDotOne and leftServingDotTwo
                leftServingDotOne.classList.add("activeServingDot");
                leftServingDotTwo.classList.add("activeServingDot");
            }
            
            // Deactivating Other Serving Dots
            rightServingDotOne.classList.remove("activeServingDot");
            rightServingDotTwo.classList.remove("activeServingDot");
        }
    })

    rightServingDotOne.addEventListener("click", (event) => {
        console.log("Fired - rightServingDotOne clicked");

        if (gameOver != true) {
            // Below Checks If Clicked Dot Is Already Active - Allows User To Deactivate
            if (rightServingDotOne.classList.contains("activeServingDot") 
                && rightServingDotTwo.classList.contains("activeServingDot") != true) {
                    rightServingDotOne.classList.remove("activeServingDot");
            } else {
                // Activating rightServingDotOne 
                rightServingDotOne.classList.add("activeServingDot");
            }
            
            
            // Deactivating Other Serving Dots
            rightServingDotTwo.classList.remove("activeServingDot");
            leftServingDotOne.classList.remove("activeServingDot");
            leftServingDotTwo.classList.remove("activeServingDot");
        }
    })
    rightServingDotTwo.addEventListener("click", (event) => {
        console.log("Fired - rightServingDotTwo clicked");

        if (gameOver != true) {
            // Below Checks If Clicked Dot Is Already Active - Allows User To Deactivate
            if (rightServingDotTwo.classList.contains("activeServingDot")) {
                rightServingDotTwo.classList.remove("activeServingDot");
            } else {
                // Activating rightServingDotOne and rightServingDotTwo
                rightServingDotOne.classList.add("activeServingDot");
                rightServingDotTwo.classList.add("activeServingDot");
            }

            // Deactivating Other Serving Dots
            leftServingDotOne.classList.remove("activeServingDot");
            leftServingDotTwo.classList.remove("activeServingDot");
        }
    })

        /** Lower Button Event Listeners */

    teamOneScoreDownButton.addEventListener("click", (event) => {
        console.log("Fired - teamOneScoreDownButton clicked");

        if (gameOver != true && scoreWrapperOne.innerHTML != 0) {
            let curScore = new Number (scoreWrapperOne.innerHTML);
            const newScore = new Number (curScore - 1);
            scoreWrapperOne.innerHTML = newScore;
        } else if (gameOver != true && scoreWrapperOne.innerHTML == 0) {
            // could fill in and make some haptix to tell them they can't subtract
        }
    })

    teamOneScoreUpButton.addEventListener("click", (event) => {
        console.log("Fired - teamOneScoreUpButton clicked");

        if (gameOver != true) {
            let curScore = new Number (scoreWrapperOne.innerHTML);
            const newScore = new Number (curScore + 1);

            // Setting New Score
            scoreWrapperOne.innerHTML = newScore;

            // Checking Serving Dot
            if (rightServingDotOne.classList.contains("activeServingDot") 
                || rightServingDotTwo.classList.contains("activeServingDot")) {
                    rightServingDotOne.classList.remove("activeServingDot");
                    rightServingDotTwo.classList.remove("activeServingDot");
                    leftServingDotOne.classList.add("activeServingDot");
            }

            // Checking To See If Game Is Over
            if (newScore == maxScore) {
                gameOver = true;
                scoreWrapperOne.classList.add("winner");
                displayGameOver(teamNameContainerOne.innerHTML, scoreWrapperOne.innerHTML, scoreWrapperTwo.innerHTML);
            }
        }
    })

    teamTwoScoreDownButton.addEventListener("click", (event) => {
        console.log("Fired - teamTwoScoreDownButton clicked");

        if (gameOver != true && scoreWrapperTwo.innerHTML != 0) {
            let curScore = new Number (scoreWrapperTwo.innerHTML);
            let newScore = new Number (curScore - 1);
            scoreWrapperTwo.innerHTML = newScore;
        } else if (gameOver != true && scoreWrapperTwo.innerHTML == 0) {
            // could fill in and make some haptix to tell them they can't subtract
        }
    })

    teamTwoScoreUpButton.addEventListener("click", (event) => {
        console.log("Fired - teamTwoScoreUpButton clicked");

        if (gameOver != true) {
            let curScore = new Number (scoreWrapperTwo.innerHTML);
            const newScore = new Number (curScore + 1);

            // Setting New Score
            scoreWrapperTwo.innerHTML = newScore;

            // Checking Serving Dot
            if (leftServingDotOne.classList.contains("activeServingDot") 
                || leftServingDotTwo.classList.contains("activeServingDot")) {
                    leftServingDotOne.classList.remove("activeServingDot");
                    leftServingDotTwo.classList.remove("activeServingDot");
                    rightServingDotOne.classList.add("activeServingDot");
            }

            // Checking To See If Game Is Over
            if (newScore == maxScore) {
                gameOver = true;
                scoreWrapperTwo.classList.add("winner");
                displayGameOver(teamNameContainerTwo.innerHTML, scoreWrapperTwo.innerHTML, scoreWrapperOne.innerHTML);
            }
        }
    })

    resetStartButton.addEventListener("click", (event) => {
        console.log("Fired - resetStartButton clicked");

        console.log("hiya");
        console.log(resetStartButton.innerHTML.localeCompare("START"));
        if (resetStartButton.innerHTML.toString().localeCompare("START") == 0) {
            console.log("ent top");
            gameOver = false;
            resetStartButton.innerHTML = "RESTART"
        } else {
            console.log("ent bottom");

            scoreWrapperOne.innerHTML = "0";
            scoreWrapperOne.classList.remove("winner");

            scoreWrapperTwo.innerHTML = "0";
            scoreWrapperTwo.classList.remove("winner");
    
            leftServingDotOne.classList.remove("activeServingDot");
            leftServingDotTwo.classList.remove("activeServingDot");
            
            rightServingDotOne.classList.remove("activeServingDot");
            rightServingDotTwo.classList.remove("activeServingDot");

            resetStartButton.innerHTML = "START"
            gameOver = true;
        }
        
    })

    settingsButton.addEventListener("click", (event) => {
        console.log("Fired - settingsButton clicked");

        settingsPopUpContainer.classList.remove("hidden");
    })


        /** Settings Pop Up Event Listeners */
    settingsPopUpXButton.addEventListener("click", (event) => {
        console.log("Fired - settingsPopUpXButton clicked");

        settingsPopUpContainer.classList.add("hidden");
    })

    settingsSaveButton.addEventListener("click", (event) => {
        console.log("Fired - settingsSaveButton clicked");

        // Setting / Changing Team One Name 
        const teamOneName = settingsTeamNameTextboxOne.value;
        console.log("TeamOneName =");
        console.log(teamOneName);
        teamNameContainerOne.innerHTML = teamOneName;

        // Setting / Changing Team Two Name
        const teamTwoName = settingsTeamNameTextboxTwo.value;
        teamNameContainerTwo.innerHTML = teamTwoName;

        // Setting / Changing Max Score
        maxScore = settingsPlayToNumbox.value;

        // Hiding Settings Pop Up
        settingsPopUpContainer.classList.add("hidden");
    })

    /** Selects All When Entering Textbox */
    settingsTeamNameTextboxOne.addEventListener("click", (event) => {
        console.log("Fired - settingsTeamNameTextboxOne clicked");

        if (event.target.value != null) {
            event.target.select();
        } 
    })
    /** Sets Input To Default Value If User Leaves Blank */
    settingsTeamNameTextboxOne.addEventListener("mouseout", (event) => {
        console.log("Fired - settingsTeamNameTextboxOne mouseout");

        if (settingsTeamNameTextboxOne.value == "") {
            settingsTeamNameTextboxOne.value = "Team 1";
        }
    })

    /** Selects All When Entering Textbox */
    settingsTeamNameTextboxTwo.addEventListener("click", (event) => {
        console.log("Fired - settingsTeamNameTextboxTwo clicked");

        if (event.target.value != null) {
            event.target.select();
        } 
    })
    /** Sets Input To Default Value If User Leaves Blank */
    settingsTeamNameTextboxTwo.addEventListener("mouseout", (click) => {
        console.log("Fired - settingsTeamNameTextboxTwo mouseout");

        if (settingsTeamNameTextboxTwo.value == "") {
            settingsTeamNameTextboxTwo.value = "Team 2";
        }
    })

    /** Selects All When Entering Textbox */
    settingsPlayToNumbox.addEventListener("click", (event) => {
        console.log("Fired - settingsPlayToNumbox clicked");

        if (event.target.value != null) {
            event.target.select();
        } 
    })
    /** Sets Input To Default Value If User Leaves Blank */
    settingsPlayToNumbox.addEventListener("mouseout", (event) => {
        console.log("Fired - settingsPlayToNumbox mouseout");

        if (settingsPlayToNumbox.value == "") {
            settingsPlayToNumbox.value = 11;
        } else if (settingsPlayToNumbox.value <= "0") {
            settingsPlayToNumbox.value = 11;
        }
    })

    winnerPopUpCloseButton.addEventListener("click", (event) => {
        console.log("Fired - winnerPopUpCloseButton clicked");

        winnerPopUpContainer.classList.add("hidden");
    })
    winnerPopUpXButton.addEventListener("click", (event) => {
        console.log("Fired - winnerPopUpXButton clicked");

        winnerPopUpContainer.classList.add("hidden");
    })
}
document.addEventListener("DOMContentLoaded", async() => mainEvent());