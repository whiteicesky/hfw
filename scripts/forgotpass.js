document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const notification = document.getElementById('message2');
        notification.style.display = 'block'; 

        notification.style.visibility = 'visible'; 
        setTimeout(() => {
            notification.style.opacity = '1'; 
        }, 10); 

        setTimeout(function() {
            notification.style.opacity = '0'; 
            setTimeout(() => {
                notification.style.visibility = 'hidden'; 
                window.location.href = 'login.html';
            }, 500); 
        }, 3000);
});