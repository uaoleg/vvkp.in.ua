var $table = $('.js-deputies-table'),
	deputies = [
	{
		name: 'Андрієвський Д.Й.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Арешонков В.Ю.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Барна О.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гарбуз Ю.Г.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Голуб В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гордєєв А.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Денисенко В.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Добродомов Д.Є.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Домбровський О.Г.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дубневич Я.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Єфімов М.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Іщейкін К.Є.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Каплін С.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кривохатько В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кудлаєнко С.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кутовий Т.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Люшняк М.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Матківський Б.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мацола Р.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мельниченко В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мусій О.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Пацкан В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ревега О.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Рибчинський Є.Ю.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Розенблат Б.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Сабашук П.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Соловей Ю.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Співаковський О.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Сугоняко О.Л.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Урбанський О.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Фірсов Є.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Чекіта Г.Л.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Чубаров Р.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Юринець О.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Яніцький В.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Антонищак А.Ф.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бакуменко О.Б.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Батенко Т.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Горват Р.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гудзенко В.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дмитренко О.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дубневич Б.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Жолобецький О.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Іонова М.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Іщенко В.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кіт А.Б.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Князевич Р.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Козаченко Л.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кузьменко А.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Курячий М.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лесюк Я.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лівік О.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лубінець Д.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Макар’ян Д.Б.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мельник С.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Недава О.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Новак Н.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Павелко А.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Палатний А.Л.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Петренко О.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Побер І.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Рибак І.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Романюк Р.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Сольвар Р.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Тіміш Г.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Томенко М.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Усов К.Г.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Черненко О.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шинькович А.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Юрик Т.З.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Юрчишин П.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Яриніч К.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: '',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
];

$(function () {

	// Sort deputies by name
	deputies.sort(function(a, b) { return a.name.localeCompare(b.name); });
	
	// Render deputies
	$.each(deputies, function(i, deputy) {
		if (!deputy.name) {
			return;
		}
		var fbHtml = deputy.facebook ? '<a href="' + deputy.facebook + '" target="_blank"><img src="facebook.png"></a>' : '';
		$table.append(
			'<tr>' + 
				'<td style="width: 30px;">' + fbHtml + '</td>' +
				'<td style="width: 400px;">' + deputy.name + '</td>' +
				'<td>' +
					'<a href="' + deputy.tags[0].lawUrl + '" target="_blank">' +
						'<span class="label label-warning" data-toggle="tooltip" data-placement="left" title="' + deputy.tags[0].lawName + '">' + 
							deputy.tags[0].name + 
						'</span>' + 
					'</a>' + 
				'</td>' + 
			'</tr>'
		)
		console.log(deputy);
	});

	// Bind tooltips
	$('[data-toggle="tooltip"]').tooltip();
});