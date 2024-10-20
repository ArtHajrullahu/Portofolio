  /*$(document).ready(function() {
            const randomNumber = 71;
            let guessCount = 0;

            $("#guessButton").on("click", function() {
                checkGuess();
            });

            function checkGuess() {
                const guessInput = $("#guessInput");
                const guess = parseInt(guessInput.val());

                if (isNaN(guess) || guess < 1 || guess > 100) {
                    setMessage("Please enter a valid number between 1 and 100.");
                    return;
                }

                guessCount++;

                if (guess === randomNumber) {
                    setMessage(`Congratulations! You guessed the number ${randomNumber} correctly in ${guessCount} attempts.`);
                    disableInput();
                } else if (guess < randomNumber) {
                    setMessage("Too low! Try a higher number.");
                } else {
                    setMessage("Too high! Try a lower number.");
                }

                guessInput.val("");
                guessInput.focus();
            }

            function setMessage(message) {
                $("#message").text(message);
            }

            function disableInput() {
                $("#guessInput").prop("disabled", true);
                $("#guessButton").prop("disabled", true);
            }
        });*/
        document.addEventListener('DOMContentLoaded', function() {
            const randomNumber = 69;
            let guessCount = 0;

            const guessButton = document.getElementById('guessButton');
            guessButton.addEventListener('click', function() {
                checkGuess();
            });

            function checkGuess() {
                const guessInput = document.getElementById('guessInput');
                const guess = parseInt(guessInput.value);

                if (isNaN(guess) || guess < 1 || guess > 100) {
                    setMessage("Please enter a valid number between 1 and 100.");
                    return;
                }

                guessCount++;

                if (guess === randomNumber) {
                    setMessage(`Congratulations! You guessed the number ${randomNumber} correctly in ${guessCount} attempts.`);
                    disableInput();
                } else if (guess < randomNumber) {
                    setMessage("Too low! Try a higher number.");
                } else {
                    setMessage("Too high! Try a lower number.");
                }

                guessInput.value = "";
                guessInput.focus();
            }

            function setMessage(message) {
                const messageElement = document.getElementById('message');
                messageElement.textContent = message;
            }

            function disableInput() {
                const guessInput = document.getElementById('guessInput');
                const guessButton = document.getElementById('guessButton');

                guessInput.disabled = true;
                guessButton.disabled = true;
            }
        });