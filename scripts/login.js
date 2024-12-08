document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'user' && password === '123') {
        window.location.href = 'index.html';
    } else {
        const notification = document.getElementById('message');
        notification.style.display = 'block'; 

        notification.style.visibility = 'visible'; 
        setTimeout(() => {
            notification.style.opacity = '1'; 
        }, 10); 

        setTimeout(function() {
            notification.style.opacity = '0'; 
            setTimeout(() => {
                notification.style.visibility = 'hidden'; 
            }, 500); 
        }, 3000);
    }

    
});