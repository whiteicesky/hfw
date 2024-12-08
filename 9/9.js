const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');
const likeIcon = document.getElementById('likeIcon');

let count = 0;
let isDrawing = false;

function createFollower(x, y) {
  const follower = document.createElement('div');
  follower.classList.add('follower');
  follower.textContent = '❤️';
  document.body.appendChild(follower);

  follower.style.left = `${x - 10}px`; 
  follower.style.top = `${y - 10}px`;

  setTimeout(() => {
    follower.remove();
  }, 1000);
}

likeButton.addEventListener('click', () => {
  likeButton.classList.toggle('liked'); 

  if (likeButton.classList.contains('liked')) {
    count++;
  } else {
    count--;
  }
  likeCount.textContent = count;

  isDrawing = !isDrawing;
  if (isDrawing) {
    document.addEventListener('mousemove', handleMouseMove);
  } else {
    document.removeEventListener('mousemove', handleMouseMove);
  }
});

function handleMouseMove(event) {
  if (isDrawing) {
    createFollower(event.pageX, event.pageY);
  }
}
