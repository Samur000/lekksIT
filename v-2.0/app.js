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

// Mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav ul');
const menuOverlay = document.querySelector('.menu-overlay');
const html = document.documentElement;
let scrollPosition = 0;

function toggleMenu() {
	if (html.classList.contains('menu-open')) {
		 closeMenu();
	} else {
		 openMenu();
	}
}

function openMenu() {
	scrollPosition = window.pageYOffset;
	html.classList.add('menu-open');
	html.style.top = `-${scrollPosition}px`;
	mobileMenuBtn.classList.add('active');
	nav.classList.add('active');
	menuOverlay.classList.add('active');
}

function closeMenu() {
	html.classList.remove('menu-open');
	window.scrollTo(0, scrollPosition);
	html.style.top = '';
	mobileMenuBtn.classList.remove('active');
	nav.classList.remove('active');
	menuOverlay.classList.remove('active');
}

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

// Модальное окно для кейсов
const modal = document.getElementById('case-modal');
const modalClose = modal.querySelector('.modal-close');
const modalOverlay = modal.querySelector('.modal-overlay');

// Данные для кейсов
const casesData = {
	"case1": {
		 title: "Маркетплейс для ритейла",
		 image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
		 tags: ["Анализ рынка", "Frontend", "Backend", "UI/UX", "SEO"],
		 task: "Клиенту требовалась современная платформа для онлайн-продаж, которая бы интегрировалась с существующей CRM и системой складского учета. Основная сложность - обработка 5000+ товарных позиций и до 1000 заказов ежедневно.",
		 solution: "Мы разработали кастомное решение на React и Node.js с оптимизированной базой данных MongoDB. Реализовали систему кэширования для быстрой загрузки товаров, интеграцию с платежными системами и службами доставки.",
		 steps: [
			  "Анализ требований и проектирование архитектуры",
			  "Создание прототипа и согласование с клиентом",
			  "Разработка основного функционала (каталог, корзина, оформление заказа)",
			  "Интеграция с CRM и складской системой",
			  "Оптимизация производительности",
			  "Тестирование и запуск"
		 ],
		 technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Redis", "Docker"],
		 results: [
			  "Увеличение онлайн-продаж на 120% за первые 3 месяца",
			  "Снижение нагрузки на сервер на 40% благодаря оптимизации",
			  "Среднее время загрузки страницы - 1.2 сек",
			  "Автоматизация 90% процессов работы с заказами"
		 ],
		 examples: [
			  "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
			  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
			  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
		 ]
	},
	"case2": {
		 title: "Мобильное приложение для доставки",
		 image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
		 tags: ["Анализ рынка", "UI/UX", "Backend", "SEO", "Frontend"],
		 task: "Разработка мобильного приложения для службы доставки еды с функцией отслеживания заказа в реальном времени.",
		 solution: "Создали кроссплатформенное приложение на Flutter с интеграцией карт и push-уведомлений.",
		 steps: [
			  "Проектирование UX/UI",
			  "Разработка прототипа",
			  "Интеграция с API",
			  "Тестирование",
			  "Публикация в магазины приложений"
		 ],
		 technologies: ["Flutter", "Firebase", "Google Maps API", "Node.js"],
		 results: [
			  "50,000+ установок за первые 3 месяца",
			  "Средний рейтинг 4.8 в магазинах приложений",
			  "Увеличение повторных заказов на 65%"
		 ],
		 examples: [
			  "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
			  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
		 ]
	},
	"case3": {
		 title: "Корпоративный портал",
		 image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
		 tags: ["SEO", "Frontend", "Backend", "Анализ рынка", "UI/UX"],
		 task: "Создание единой платформы для автоматизации внутренних процессов компании с 1000+ сотрудников.",
		 solution: "Разработали портал на Vue.js с модульной архитектурой и интеграцией с существующими CRM и ERP системами.",
		 steps: [
			  "Анализ бизнес-процессов",
			  "Проектирование архитектуры",
			  "Разработка модулей",
			  "Интеграция с существующими системами",
			  "Обучение сотрудников"
		 ],
		 technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
		 results: [
			  "Сокращение времени на выполнение задач на 40%",
			  "Уменьшение бумажного документооборота на 75%",
			  "Повышение удовлетворенности сотрудников"
		 ],
		 examples: [
			  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
		 ]
	}
};

// Функция открытия модального окна
function openModal(caseId) {
	const caseData = casesData[caseId];

	if (!caseData) return;

	// Заполняем основную информацию
	modal.querySelector('.modal-title').textContent = caseData.title;
	modal.querySelector('.modal-image img').src = caseData.image;
	modal.querySelector('.modal-image img').alt = caseData.title;

	// Заполняем теги
	const modalTags = modal.querySelector('.modal-tags');
	modalTags.innerHTML = '';
	caseData.tags.forEach(tag => {
		 const tagElement = document.createElement('span');
		 tagElement.className = 'modal-tag';
		 tagElement.textContent = tag;
		 modalTags.appendChild(tagElement);
	});

	// Заполняем новые секции
	modal.querySelector('.modal-task').textContent = caseData.task;
	modal.querySelector('.modal-solution').textContent = caseData.solution;

	// Заполняем этапы работы
	const stepsList = modal.querySelector('.modal-steps');
	stepsList.innerHTML = '';
	caseData.steps.forEach(step => {
		 const li = document.createElement('li');
		 li.textContent = step;
		 stepsList.appendChild(li);
	});

	// Заполняем технологии
	const techList = modal.querySelector('.modal-tech');
	techList.innerHTML = '';
	caseData.technologies.forEach(tech => {
		 const li = document.createElement('li');
		 li.textContent = tech;
		 techList.appendChild(li);
	});

	// Заполняем результаты
	const resultsContainer = modal.querySelector('.modal-results');
	resultsContainer.innerHTML = '';
	caseData.results.forEach(result => {
		 const p = document.createElement('p');
		 p.innerHTML = `✓ ${result}`;
		 resultsContainer.appendChild(p);
	});

	// Заполняем примеры
	const examplesContainer = modal.querySelector('.modal-examples');
	examplesContainer.innerHTML = '';
	caseData.examples.forEach(example => {
		 const div = document.createElement('div');
		 div.className = 'modal-example-img';
		 div.innerHTML = `<img src="${example}" alt="Пример реализации">`;
		 examplesContainer.appendChild(div);
	});

	// Показываем модальное окно
	modal.style.display = 'flex';
	document.body.classList.add('modal-open');
}

// Функция закрытия модального окна
function closeModal() {
	modal.style.display = 'none';
	document.body.classList.remove('modal-open');
}

// Назначение обработчиков событий
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Закрытие по ESC
document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && modal.style.display === 'flex') {
		 closeModal();
	}
});

// Обработка кликов на кнопки "Подробнее"
document.querySelectorAll('.cases-link a').forEach((link, index) => {
	link.addEventListener('click', function (e) {
		 e.preventDefault();
		 openModal(this.getAttribute('data-case-id'));
	});
});


// Typewriter effect
document.addEventListener('DOMContentLoaded', function() {
	const text = "Инновационные";
	const typewriterElement = document.querySelector('.typewriter-text');
	let i = 0;
	
	function typeWriter() {
	  if (i < text.length) {
		 typewriterElement.innerHTML += text.charAt(i);
		 i++;
		 setTimeout(typeWriter, 150); // Скорость печати (мс)
	  } else {
		 // После завершения анимации удаляем курсор
		 setTimeout(() => {
			typewriterElement.style.setProperty('--cursor-visibility', 'hidden');
		 }, 700);
	  }
	}
	
	// Запускаем анимацию после небольшой задержки
	setTimeout(typeWriter, 500);
 });

 // Advanced typewriter effect
document.addEventListener('DOMContentLoaded', function() {
	const texts = ["Инновационные", "Эффективные", "Современные"];
	const typewriterElement = document.querySelector('.typewriter-text');
	let textIndex = 0;
	let charIndex = 0;
	let isDeleting = false;
	let isEnd = false;
	
	function typeWriter() {
	  const currentText = texts[textIndex];
	  
	  if (isDeleting) {
		 // Удаление текста
		 typewriterElement.textContent = currentText.substring(0, charIndex - 1);
		 charIndex--;
	  } else {
		 // Печать текста
		 typewriterElement.textContent = currentText.substring(0, charIndex + 1);
		 charIndex++;
	  }
	  
	  // Определяем скорость анимации
	  let typeSpeed = 150;
	  
	  if (isDeleting) {
		 typeSpeed /= 2; // Удаление быстрее
	  }
	  
	  // Если текст напечатан полностью
	  if (!isDeleting && charIndex === currentText.length) {
		 isEnd = true;
		 typeSpeed = 2000; // Пауза перед удалением
		 isDeleting = true;
	  } else if (isDeleting && charIndex === 0) {
		 isDeleting = false;
		 isEnd = false;
		 // Переход к следующему тексту
		 textIndex = (textIndex + 1) % texts.length;
	  }
	  
	  setTimeout(typeWriter, typeSpeed);
	}
	
	// Запускаем анимацию после небольшой задержки
	setTimeout(typeWriter, 500);
 });
