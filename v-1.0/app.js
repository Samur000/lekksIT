
// Header scroll effect
window.addEventListener('scroll', function () {
	const header = document.getElementById('header');
	if (window.scrollY > 50) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});

// Animation on scroll
function animateOnScroll() {
	const elements = document.querySelectorAll('.animate-on-scroll');

	elements.forEach(element => {
		const elementPosition = element.getBoundingClientRect().top;
		const screenPosition = window.innerHeight / 1.2;

		if (elementPosition < screenPosition) {
			element.classList.add('animated');
		}
	});
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		const targetId = this.getAttribute('href');
		if (targetId === '#') return;

		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop - 80,
				behavior: 'smooth'
			});
		}
	});
});
// Обновленный JavaScript
// Mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav ul');
const menuOverlay = document.querySelector('.menu-overlay');
const html = document.documentElement;
let scrollPosition = 0;

// Функция переключения меню
function toggleMenu() {
	if (html.classList.contains('menu-open')) {
		closeMenu();
	} else {
		openMenu();
	}
}

// Функция открытия меню
function openMenu() {
	// Сохраняем текущую позицию скролла
	scrollPosition = window.pageYOffset;

	// Блокируем скролл и фиксируем позицию
	html.classList.add('menu-open');
	html.style.top = `-${scrollPosition}px`;

	// Открываем меню
	mobileMenuBtn.classList.add('active');
	nav.classList.add('active');
	menuOverlay.classList.add('active');
}

// Функция закрытия меню
function closeMenu() {
	// Разблокируем скролл и восстанавливаем позицию
	html.classList.remove('menu-open');
	window.scrollTo(0, scrollPosition);
	html.style.top = '';

	// Закрываем меню
	mobileMenuBtn.classList.remove('active');
	nav.classList.remove('active');
	menuOverlay.classList.remove('active');
}

// Остальной код обработчиков оставляем без изменений
document.querySelectorAll('nav ul li').forEach((li, index) => {
	li.style.setProperty('--i', index);
});

mobileMenuBtn.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', closeMenu);

document.querySelectorAll('nav ul li a').forEach(link => {
	link.addEventListener('click', function (e) {
		closeMenu();
		if (this.getAttribute('href').startsWith('#')) {
			e.preventDefault();
			const targetId = this.getAttribute('href');
			if (targetId !== '#') {
				setTimeout(() => {
					const targetElement = document.querySelector(targetId);
					if (targetElement) {
						window.scrollTo({
							top: targetElement.offsetTop - 80,
							behavior: 'smooth'
						});
					}
				}, 300);
			}
		}
	});
});

window.addEventListener('resize', function () {
	if (window.innerWidth > 768) {
		closeMenu();
	}
});


// Добавляем анимацию, если требуется
document.addEventListener('DOMContentLoaded', function () {
	const shape = document.querySelector('.custom-shape');

	// Анимация плавного появления
	shape.style.transition = 'opacity 1s ease';
	shape.style.opacity = '0.3'; // На случай, если нужно анимировать появление

	// Дополнительная анимация вращения при наведении
	shape.addEventListener('mouseenter', function () {
		this.style.transition = 'transform 0.5s ease';
		this.style.transform = 'translateX(-50%) rotate(35deg)';
	});

	shape.addEventListener('mouseleave', function () {
		this.style.transform = 'translateX(-50%) rotate(30deg)';
	});
});