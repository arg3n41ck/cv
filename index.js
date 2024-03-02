const updateThemeStyles = theme => {
	const rootStyle = document.documentElement.style
	const themeVars = theme === 'dark' ? 'dark' : 'light'
	rootStyle.setProperty('--mainTextColor', `var(--mainTextColor-${themeVars})`)
	rootStyle.setProperty(
		'--secondaryTextColor',
		`var(--secondaryTextColor-${themeVars})`
	)
	rootStyle.setProperty('--mainLinkColor', `var(--mainLinkColor-${themeVars})`)
	rootStyle.setProperty(
		'--mainBorderColor',
		`var(--mainBorderColor-${themeVars})`
	)
	rootStyle.setProperty('--mainBgColor', `var(--mainBgColor-${themeVars})`)
}

const toggleTheme = () => {
	const currentTheme = document.body.getAttribute('data-theme')
	const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
	document.body.setAttribute('data-theme', newTheme)
	localStorage.setItem('theme', newTheme)
	updateThemeStyles(newTheme)
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme)

document.addEventListener('DOMContentLoaded', () => {})

const translations = {
	en: {
		switchTheme: 'Switch Theme',
		userName: 'Alimbaev Argen',
		bio: 'Frontend developer with 1.5 years of experience in creating quality user interfaces.',
		email: '👉 argoalimbaev@gmail.com',
		linkedin: 'Linkedin',
		github: 'GitHub',
		telegram: 'Telegram',
		leetCode: 'LeetCode',
		resume: 'Resume',
		aboutMe: 'About me',
		aboutMeText:
			'I have worked closely with backend developers to ensure integration and functionality. I am always willing to be a valuable team member and ready for new projects and challenges. I love working in a company where I can apply and improve my skills while working with highly skilled professionals. I am confident that my experience, knowledge, and motivation will help me to achieve great results and contribute to the success of your company.',
		techStack: 'Tech stack',
		workHistory: 'Work History',
		workHistoryExample: '🚧 Frontend Developer | ZettaSoft IO',
		workHistoryTitle: 'Work History',
		frontendDeveloperZettaSoft: '🚧 Frontend Developer | ZettaSoft IO',
		periodSep2021Present: 'September 2021 - Present',
		zettaSoftDescription:
			'This is the company with which you will build, expand and control your business.',
		projectsParticipated: 'Projects in which I participated:',
		projectKEBEK: 'KEBEK',
		myImpacts: 'My impacts:',
		mainStorePage: 'Main Store Page:',
		kebekMainStorePageImpacts: {
			firstImpact:
				'Developed the foundation of the web store, enabling user registration and product management, including adding items to the cart, modifying quantities, and completing purchases',
			secondImpact:
				'Implemented cart functionality allowing users to adjust product quantities and remove them from the cart',
		},
		userPersonalAccountPage: 'User Personal Account Page:',
		userPersonalAccountPageImpacts: {
			firstImpact:
				'Created a user dashboard for viewing and editing personal information, and interacting with notifications',
			secondImpact:
				'Developed notification and product inquiry pages, enhancing user interaction with the site',
		},
		administrativePanelPage: 'Administrative Panel Page:',
		administrativePanelPageImpacts: {
			firstImpact:
				'Developed an administrative panel for product management, editing supplier and employee information',
			secondImpact: 'Integrated ApexCharts for sales analytics visualization',
		},
		landOfStartups: 'Land of Startups',
		landOfStartupsImpacts: {
			firstImpact:
				"Developed the 'My Events' page, featuring event cards with information and a link to each event's detailed page",
			secondImpact:
				'Developed functionality allowing users to share events via social media',
			thirdImpact:
				"Developed the 'My Profile' page, offering users the ability to edit their profile, view submitted applications for vacancies and tasks, and track their status",
			fourthImpact:
				'Responsible for debugging throughout the application and implementing multilingual support',
		},
		hustleFree: 'Hustle Free',
		hustleFreeImpacts: {
			firstImpact: "Fully developed the project's authentication system",
			secondImpact:
				'Developed the main page of the project, excluding carousels and tournament cards',
			thirdImpact:
				'Developed a registration feature for athletes to enter their data for tournament participation',
			fourthImpact:
				"Developed the 'Community' page with sorting capabilities for Users by categories Athletes, Teams, Organizers, and filtering by the teams they participate in, country, gender, as well as a search function for all users",
		},
		shopper: 'Shopper',
		shopperMiniDescription:
			"Developed the project from scratch, working both independently and as part of a team. Here are the latest tasks I've worked on:",
		shopperImpacts: {
			firstImpact:
				'Initiated the transition to TailwindCSS from css-in-js (styled-components)',
			secondImpact: 'Successfully integrated React Query',
			thirdImpact:
				'Developed a feature for saving form data when creating a product using IndexedDB',
			fourthImpact:
				'Successfully migrated the project from Redux Toolkit to Zustand',
			fifthImpact:
				'Created a custom Select component, simplifying navigation through nested product categories',
		},
		frontendDeveloperMAKERS: '🚧 Frontend Developer | MAKERS',
		periodJul2021Aug2021: 'July 2021 - August 2021',
		makersDescription:
			'Makers, a Kyrgyz company specializing in software and website development, also provides programming courses and training for novice developers.',
		makersImpacts: {
			firstImpact:
				'Actively participated in student training, offering support with assignments and verifying homework',
			secondImpact: 'Developed and optimized web page layouts',
			thirdImpact:
				'Delved into learning React and Next.js, implementing functional components and interfaces to enhance user experience',
			fourthImpact:
				'Identified and fixed bugs in projects, improving the quality and stability of web applications',
		},
	},
	ru: {
		switchTheme: 'Переключить тему',
		userName: 'Алимбаев Арген',
		bio: 'Фронтенд разработчик с 1.5 годами опыта создания качественных пользовательских интерфейсов.',
		email: '👉 argoalimbaev@gmail.com',
		linkedin: 'Линкедин',
		github: 'Гитхаб',
		telegram: 'Телеграм',
		leetCode: 'Литкод',
		resume: 'Резюме',
		aboutMe: 'Обо мне',
		aboutMeText:
			'Я тесно сотрудничал с бэкенд-разработчиками для обеспечения интеграции и функциональности. Всегда готов быть ценным членом команды и готов к новым проектам и вызовам. Люблю работать в компании, где могу применять и улучшать свои навыки, работая с высококвалифицированными специалистами. Уверен, что мой опыт, знания и мотивация помогут мне достигнуть великолепных результатов и внести вклад в успех вашей компании.',
		techStack: 'Технологический стек',
		workHistory: 'История работы',
		workHistoryExample: '🚧 Фронтенд разработчик | ZettaSoft IO',
		workHistoryTitle: 'История работы',
		frontendDeveloperZettaSoft: '🚧 Фронтенд разработчик | ZettaSoft IO',
		periodSep2021Present: 'Сентябрь 2021 - настоящее время',
		zettaSoftDescription:
			'Это компания, с которой вы будете строить, расширять и контролировать ваш бизнес.',
		projectsParticipated: 'Проекты, в которых я участвовал:',
		projectKEBEK: 'KEBEK',
		myImpacts: 'Мое влияние:',
		mainStorePage: 'Главная страница магазина:',
		kebekMainStorePageImpacts: {
			firstImpact:
				'Разработал основу веб-магазина, позволяющую регистрацию пользователей и управление товарами, включая добавление товаров в корзину, изменение количества и совершение покупок',
			secondImpact:
				'Реализовал функциональность корзины, позволяющую пользователям регулировать количество товаров и удалять их из корзины',
		},
		userPersonalAccountPage: 'Страница личного кабинета пользователя:',
		userPersonalAccountPageImpacts: {
			firstImpact:
				'Создал пользовательскую панель для просмотра и редактирования личной информации и взаимодействия с уведомлениями',
			secondImpact:
				'Разработал страницы уведомлений и запросов на товары, улучшая взаимодействие пользователя с сайтом',
		},
		administrativePanelPage: 'Страница административной панели:',
		administrativePanelPageImpacts: {
			firstImpact:
				'Разработал административную панель для управления товарами, редактирования информации о поставщиках и сотрудниках',
			secondImpact: 'Интегрировал ApexCharts для визуализации аналитики продаж',
		},
		landOfStartups: 'Land Of Startups',
		landOfStartupsImpacts: {
			firstImpact:
				"Разработал страницу 'Мои события' с карточками мероприятий, содержащими информацию и ссылку на подробную страницу каждого события",
			secondImpact:
				'Разработал функциональность, позволяющую пользователям делиться событиями через социальные сети',
			thirdImpact:
				"Разработал страницу 'Мой профиль', предлагающую пользователям возможность редактировать свой профиль, просматривать поданные заявки на вакансии и задачи, и отслеживать их статус",
			fourthImpact:
				'Ответствен за отладку по всему приложению и внедрение поддержки нескольких языков',
		},
		hustleFree: 'Hustle Free',
		hustleFreeImpacts: {
			firstImpact: 'Полностью разработал систему аутентификации проекта',
			secondImpact:
				'Разработал главную страницу проекта, за исключением каруселей и карточек турниров',
			thirdImpact:
				'Разработал функцию регистрации для спортсменов для ввода их данных для участия в турнирах',
			fourthImpact:
				"Разработал страницу 'Сообщество' с возможностями сортировки пользователей по категориям Атлеты, Команды, Организаторы, и фильтрацией по командам, в которых они участвуют, стране, полу, а также функцией поиска всех пользователей",
		},
		shopper: 'Shopper',
		shopperMiniDescription:
			'Разрабатывал проект с нуля, работая как самостоятельно, так и в команде. Вот последние задачи, над которыми я работал:',
		shopperImpacts: {
			firstImpact:
				'Инициировал переход на TailwindCSS с css-in-js (styled-components)',
			secondImpact: 'Успешно интегрировал React Query',
			thirdImpact:
				'Разработал функцию для сохранения данных формы при создании продукта с использованием IndexedDB',
			fourthImpact: 'Успешно перенес проект с Redux Toolkit на Zustand',
			fifthImpact:
				'Создал пользовательский компонент Select, упрощающий навигацию по вложенным категориям продуктов',
		},
		frontendDeveloperMAKERS: '🚧 Фронтенд разработчик | MAKERS',
		periodJul2021Aug2021: 'Июль 2021 - Август 2021',
		makersDescription:
			'Makers, кыргызская компания, специализирующаяся на разработке программного обеспечения и веб-сайтов, также предлагает курсы программирования и обучение для начинающих разработчиков.',
		makersImpacts: {
			firstImpact:
				'Активно участвовал в обучении студентов, предоставляя поддержку в выполнении заданий и проверке домашних работ',
			secondImpact: 'Разрабатывал и оптимизировал макеты веб-страниц',
			thirdImpact:
				'Углубился в изучение React и Next.js, реализуя функциональные компоненты и интерфейсы для улучшения пользовательского опыта',
			fourthImpact:
				'Выявлял и исправлял ошибки в проектах, повышая качество и стабильность веб-приложений',
		},
	},
}

function changeLanguage(lang) {
	localStorage.setItem('lang', lang)
	const elements = document.querySelectorAll('[data-i18n]')

	elements.forEach(el => {
		const keyPath = el.getAttribute('data-i18n').split('.')
		let translation = translations[lang]

		keyPath.forEach(key => {
			if (translation && translation[key] !== undefined) {
				translation = translation[key]
			} else {
				translation = null
				return
			}
		})

		if (translation) {
			el.textContent = translation
		}
	})
}

document
	.getElementById('lang-en')
	.addEventListener('click', () => changeLanguage('en'))
document
	.getElementById('lang-ru')
	.addEventListener('click', () => changeLanguage('ru'))

document.addEventListener('DOMContentLoaded', () => {
	const lang = localStorage.getItem('lang') || 'en'
	const savedTheme = localStorage.getItem('theme') || 'dark'

	document.body.setAttribute('data-theme', savedTheme)

	updateThemeStyles(savedTheme)
	changeLanguage(lang)
})
