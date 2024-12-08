function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('captcha-output').textContent = captcha;
    document.getElementById('captcha-input').value = '';
    document.getElementById('error-message').textContent = '';
    document.getElementById('submit-btn').disabled = true;
}

function checkCaptcha() {
    const userInput = document.getElementById('captcha-input').value;
    const captchaText = document.getElementById('captcha-output').textContent;

    if (!captchaText.includes('+')) {
        if (userInput === captchaText) {
            window.location.href = 'index.html';
        } else {
            document.getElementById('captcha-output').textContent = generateMathCaptcha();
            document.getElementById('captcha-input').value = '';
            document.getElementById('submit-btn').disabled = true;
            displayErrorMessage('Wrong! Try again');
        }
    } else {
        const [num1, num2] = captchaText.split('+').map(Number);
        if (parseInt(userInput) === (num1 + num2)) {
            window.location.href = 'index.html';
        } else {
            document.getElementById('captcha-output').textContent = generateMathCaptcha();
            document.getElementById('captcha-input').value = '';
            document.getElementById('submit-btn').disabled = true;
            displayErrorMessage('Wrong! Try again');
        }
    }
}

function generateMathCaptcha() {
    const num1 = Math.floor(Math.random() * 20);
    const num2 = Math.floor(Math.random() * 20);
    return `${num1}+${num2}`;
}

function displayErrorMessage(message) {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = message;
    errorMessageElement.style.display = 'block'; 

    errorMessageElement.style.visibility = 'visible'; 
        setTimeout(() => {
            errorMessageElement.style.opacity = '1'; 
        }, 10); 

        setTimeout(function() {
            errorMessageElement.style.opacity = '0'; 
            setTimeout(() => {
                errorMessageElement.style.visibility = 'hidden'; 
            }, 500); 
        }, 3000);
}

document.getElementById('captcha-input').addEventListener('input', function () {
    const userInput = this.value.trim();
    if (userInput.length > 0) {
        document.getElementById('submit-btn').disabled = false;
    } else {
        document.getElementById('submit-btn').disabled = true;
    }
});

window.onload = generateCaptcha;
