document.addEventListener('DOMContentLoaded', function () {
	// Загрузка видеофона
	const videoBg = document.querySelector('.video-bg');
	const video = document.querySelector('.video-bg video');

	video.addEventListener('loadeddata', function () {
		videoBg.classList.add('loaded');
	});

	// Меню для мобильных устройств
	const hamburger = document.querySelector('.hamburger');
	const navLinks = document.querySelector('.nav-links');

	hamburger.addEventListener('click', function () {
		navLinks.classList.toggle('active');
		hamburger.classList.toggle('active');
	});

	// Закрытие меню при клике на ссылку
	document.querySelectorAll('.nav-links a').forEach(link => {
		link.addEventListener('click', function () {
			navLinks.classList.remove('active');
			hamburger.classList.remove('active');
		});
	});

	// Плавная прокрутка
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			const targetId = this.getAttribute('href');
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop - 80,
					behavior: 'smooth'
				});
			}
		});
	});

	// Анимация при скролле
	function checkVisibility() {
		const elements = document.querySelectorAll('.section-title, .hero-content h1, .hero-content p, .neon-button, .tech-sphere, .service-hexagon, .case-card, .portfolio-item, .contact-form, .contact-info, .map-container');

		elements.forEach(element => {
			const elementTop = element.getBoundingClientRect().top;
			const elementBottom = element.getBoundingClientRect().bottom;
			const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);

			if (isVisible) {
				element.classList.add('visible');
			}
		});

		// Анимация текста "О нас"
		const aboutTextParagraphs = document.querySelectorAll('.about-text p');
		aboutTextParagraphs.forEach((para, index) => {
			const paraTop = para.getBoundingClientRect().top;
			const isParaVisible = paraTop < window.innerHeight - 50;

			if (isParaVisible) {
				setTimeout(() => {
					para.classList.add('visible');
				}, index * 200);
			}
		});
	}

	// Инициализация при загрузке
	checkVisibility();

	// Проверка при скролле
	window.addEventListener('scroll', checkVisibility);

	// Слайдер отзывов
	const testimonials = document.querySelectorAll('.testimonial');
	const dots = document.querySelectorAll('.dot');
	let currentSlide = 0;

	function showSlide(index) {
		testimonials.forEach(testimonial => testimonial.classList.remove('active'));
		dots.forEach(dot => dot.classList.remove('active'));

		testimonials[index].classList.add('active');
		dots[index].classList.add('active');
		currentSlide = index;
	}

	dots.forEach((dot, index) => {
		dot.addEventListener('click', () => showSlide(index));
	});

	// Автопереключение слайдов
	setInterval(() => {
		let nextSlide = (currentSlide + 1) % testimonials.length;
		showSlide(nextSlide);
	}, 5000);

	// 3D сфера технологий
	const techIcons = [
		{ icon: '<i class="fab fa-js"></i>', tooltip: 'JavaScript' },
		{ icon: '<i class="fab fa-react"></i>', tooltip: 'React' },
		{ icon: '<i class="fab fa-node-js"></i>', tooltip: 'Node.js' },
		{ icon: '<i class="fab fa-python"></i>', tooltip: 'Python' },
		{ icon: '<i class="fas fa-database"></i>', tooltip: 'Базы данных' },
		{ icon: '<i class="fab fa-aws"></i>', tooltip: 'AWS' },
		{ icon: '<i class="fas fa-robot"></i>', tooltip: 'AI/ML' },
		{ icon: '<i class="fas fa-cloud"></i>', tooltip: 'Облако' },
		{ icon: '<i class="fas fa-mobile-alt"></i>', tooltip: 'Мобильные' },
		{ icon: '<i class="fas fa-code"></i>', tooltip: 'Разработка' },
		{ icon: '<i class="fas fa-shield-alt"></i>', tooltip: 'Безопасность' },
		{ icon: '<i class="fas fa-chart-line"></i>', tooltip: 'Аналитика' }
	];

	const sphereContainer = document.getElementById('tech-sphere');
	const radius = 150;
	const count = techIcons.length;

	techIcons.forEach((tech, i) => {
		const phi = Math.acos(-1 + (2 * i) / count);
		const theta = Math.sqrt(count * Math.PI) * phi;

		const x = radius * Math.cos(theta) * Math.sin(phi);
		const y = radius * Math.sin(theta) * Math.sin(phi);
		const z = radius * Math.cos(phi);

		const icon = document.createElement('div');
		icon.className = 'tech-icon';
		icon.innerHTML = tech.icon;
		icon.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
		icon.setAttribute('data-tooltip', tech.tooltip);

		sphereContainer.appendChild(icon);
	});

	// Частицы в шапке
	particlesJS('particles-js', {
		"particles": {
			"number": {
				"value": 80,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#6e00ff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				}
			},
			"opacity": {
				"value": 0.5,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#6e00ff",
				"opacity": 0.2,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 2,
				"direction": "none",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "grab"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 140,
					"line_linked": {
						"opacity": 0.5
					}
				},
				"push": {
					"particles_nb": 4
				}
			}
		},
		"retina_detect": true
	});

	// Форма обратной связи
	const contactForm = document.getElementById('contactForm');

	contactForm.addEventListener('submit', function (e) {
		e.preventDefault();

		// Здесь можно добавить отправку формы
		alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
		contactForm.reset();
	});

	// Анимация заголовка героя
	setTimeout(() => {
		document.querySelector('.hero-content h1').classList.add('visible');
		document.querySelector('.hero-content p').classList.add('visible');
		document.querySelector('.neon-button').classList.add('visible');
	}, 300);
});