const notificationIcon = document.querySelector('.notification-icon');
const notificationList = document.querySelector('.notification-list');
const notificationContainer = document.querySelector('.notification-container');

function toggleNotifications() {
    notificationList.classList.toggle('active');
    notificationIcon.classList.toggle('active');
}

notificationIcon.addEventListener('click', (event) => {
    toggleNotifications();
    event.stopPropagation();
});

document.addEventListener('click', (event) => {
    if (!notificationContainer.contains(event.target)) {
        notificationList.classList.remove('active');
        notificationIcon.classList.remove('active');
    }
});
