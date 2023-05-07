const images = document.querySelectorAll('.image img');
const prev = document.querySelector('.gallery .prev');
const next = document.querySelector('.gallery .next');
const close = document.querySelector('.gallery .close');
const galleryImg = document.querySelector('.gallery__inner img')
const gallery = document.querySelector('.gallery');

let currentIndex = 0;
let maxItem = images.length - 1;


// check current index & show modal
const showGallery = () => {
    if (currentIndex == 0) {
        prev.classList.add('hide');
    }
    else {
        prev.classList.remove('hide');
    }


    if (currentIndex == maxItem) {
        next.classList.add('hide');
    }
    else {
        next.classList.remove('hide');
    }


    gallery.classList.add('show');
    galleryImg.src = images[currentIndex].src;
}
images.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        showGallery();
        console.log(currentIndex);
    })
})

close.addEventListener('click', () => {
    gallery.classList.remove('show');
})

// Press Escape button to Close modal
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
        gallery.classList.remove('show');
    }
})


prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
})

gallery.addEventListener('click',(e)=>{
    e.target.classList.remove('show');
})

next.addEventListener('click', () => {
    if (currentIndex < maxItem) {
        currentIndex++;
        showGallery();
    }
})

// Khi click event sẽ xử lý luôn btn prev & next