document.addEventListener("DOMContentLoaded", function() {
    let input = document.getElementById('input');
    let buttons = document.querySelectorAll('button');

    buttons.forEach(element => {
        element.addEventListener("click", (e) => {
            handleButtonClick(e.target.textContent);
        });
    });

    document.addEventListener("keydown", (e) => {
        const key = e.key;
        const allowedKeys = /^[0-9+\-*/.=]$/;

        if (key === "Escape") {
            handleButtonClick("AC");
        }
        else if (key === "Enter") {
            handleButtonClick("=");
        }
        
        else if (allowedKeys.test(key)) {
            handleButtonClick(key);
        } else {
            e.preventDefault();
        }
    });

    function handleButtonClick(key) {
        if (key === "AC") {
            input.innerText = "";
        } else if (key === "+/-") {
            let textContent = input.innerText;
            if (textContent > 0 && textContent != 0) {
                input.innerText = "-" + textContent;
            } else {
                input.innerText = "+" + textContent;
            }
        } else if (key === "=") {
            input.innerText = eval(input.innerText);
        } else {
            input.innerText += key;
        }
        input.scrollLeft = input.scrollWidth;
    }
});
