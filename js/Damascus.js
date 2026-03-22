function move(page){
    location.href=page;
}

// نظام السلايدر
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    currentSlideIndex = (index + slides.length) % slides.length;
    
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function moveSlide(n) {
    showSlide(currentSlideIndex + n);
}

function setSlide(n) {
    showSlide(n);
}

// تشغيل السلايدر تلقائياً
setInterval(() => moveSlide(1), 6000);

// تأثيرات التمرير البسيطة (Fade in effect)
window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.event-item, .info-card');
    items.forEach(item => {
        const speed = 1.2;
        const rect = item.getBoundingClientRect();
        if(rect.top < window.innerHeight) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
});

// تهيئة أولية
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.event-item, .info-card');
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.8s ease-out';
    });
});