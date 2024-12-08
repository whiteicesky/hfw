document.getElementById('newsletterform').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const notification = document.getElementById('notification');
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
});