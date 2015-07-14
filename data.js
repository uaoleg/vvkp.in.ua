var $table = $('.js-deputies-table'),
	deputies = [
	{
		name: 'Абдуллін Олександр Рафкатович',
		url: 'http://itd.rada.gov.ua/mps/info/page/2524',
		picture: 'http://static.rada.gov.ua/dep_img8/but17.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Агафонова Наталія Володимирівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/15669',
		picture: 'http://static.rada.gov.ua/dep_img8/bp44.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100004181072834',
		tags: [],
	},
	{
		name: 'Алексєєв Ігор Сергійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/16067',
		picture: 'http://static.rada.gov.ua/dep_img8/nf64.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100009322140452',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Алєксєєв Сергій Олегович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17993',
		picture: 'http://static.rada.gov.ua/dep_img8/bp55.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Амельченко Василь Васильович',
		url: 'http://itd.rada.gov.ua/mps/info/page/12290',
		picture: 'http://static.rada.gov.ua/dep_img8/rp21.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Андрієвський Дмитро Йосипович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15839',
		picture: 'http://static.rada.gov.ua/dep_img8/d222_1.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Антонищак Андрій Федорович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15839',
		picture: 'http://static.rada.gov.ua/dep_img8/d222_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100007288305290',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Арешонков Володимир Юрійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18058',
		picture: 'http://static.rada.gov.ua/dep_img8/d64_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100009067737697',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ар’єв Володимир Ігорович',
		url: 'http://itd.rada.gov.ua/mps/info/page/11118',
		picture: 'http://static.rada.gov.ua/dep_img8/d218_1.jpg',
		facebook: 'https://www.facebook.com/volodymyr.ariev',
		tags: [],
	},
	{
		name: 'Артеменко Андрій Вікторович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18049',
		picture: 'http://static.rada.gov.ua/dep_img8/rp16.jpg',
		facebook: 'https://www.facebook.com/andvicart',
		tags: [],
	},
	{
		name: 'Артюшенко Ігор Андрійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18059',
		picture: 'http://static.rada.gov.ua/dep_img8/d75_1.jpg',
		facebook: 'https://www.facebook.com/artjushenko.igor',
		tags: [],
	},
	{
		name: 'Атрошенко Владислав Анатолійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/5584',
		picture: 'http://static.rada.gov.ua/dep_img8/d206_1.jpg',
		facebook: 'https://www.facebook.com/vladatroshenko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бабак Альона Валеріївна',
		url: 'http://itd.rada.gov.ua/mps/info/page/18007',
		picture: 'http://static.rada.gov.ua/dep_img8/sp8.jpg',
		facebook: 'https://www.facebook.com/alyona.babak',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бабенко Валерій Борисович',
		url: 'http://itd.rada.gov.ua/mps/info/page/4427',
		picture: 'http://static.rada.gov.ua/dep_img8/nf35.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бабій Юрій Юрійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18604',
		picture: 'http://static.rada.gov.ua/dep_img8/nf75.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бакулін Євген Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18060',
		picture: 'http://static.rada.gov.ua/dep_img8/d106_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Бакуменко Олександр Борисович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17994',
		picture: 'http://static.rada.gov.ua/dep_img8/bp57.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100008866600855',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Балицький Євген Віталійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15762',
		picture: 'http://static.rada.gov.ua/dep_img8/d80_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Балога Віктор Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/5566',
		picture: 'http://static.rada.gov.ua/dep_img8/d69_1.jpg',
		facebook: 'https://www.facebook.com/ViktorBaloga',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Балога Іван Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18061',
		picture: 'http://static.rada.gov.ua/dep_img8/d73_1.jpg',
		facebook: 'https://www.facebook.com/baloga.ivan',
		tags: [],
	},
	{
		name: 'Балога Павло Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15757',
		picture: 'http://static.rada.gov.ua/dep_img8/d71_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Бандуров Володимир Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15761',
		picture: 'http://static.rada.gov.ua/dep_img8/d79_1.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Барвіненко Віталій Дмитрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/9776',
		picture: 'http://static.rada.gov.ua/dep_img8/d141_1.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Барна Олег Степанович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18062',
		picture: 'http://static.rada.gov.ua/dep_img8/d167_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100004441810055',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Батенко Тарас Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18063',
		picture: 'http://static.rada.gov.ua/dep_img8/d123_1.jpg',
		facebook: 'https://www.facebook.com/t.batenko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бахтеєва Тетяна Дмитрівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/5520',
		picture: 'http://static.rada.gov.ua/dep_img8/ob9.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Безбах Яків Якович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15734',
		picture: 'http://static.rada.gov.ua/dep_img8/d24_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100007266183649',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Береза Борислав Юхимович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18064',
		picture: 'http://static.rada.gov.ua/dep_img8/d213_1.jpg',
		facebook: 'https://www.facebook.com/borislav.bereza',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Береза Юрій Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17949',
		picture: 'http://static.rada.gov.ua/dep_img8/nf10.jpg',
		facebook: 'https://www.facebook.com/yra.bereza',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Березкін Станіслав Семенович',
		url: 'http://itd.rada.gov.ua/mps/info/page/14393',
		picture: 'http://static.rada.gov.ua/dep_img8/d100_1.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Березюк Олег Романович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18027',
		picture: 'http://static.rada.gov.ua/dep_img8/sp28.jpg',
		facebook: 'https://www.facebook.com/oleg.bereziuk.77',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бєлькова Ольга Валентинівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/15684',
		picture: 'http://static.rada.gov.ua/dep_img8/bp47.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Білецький Андрій Євгенійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18065',
		picture: 'http://static.rada.gov.ua/dep_img8/d217_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Білий Олексій Петрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/8723',
		picture: 'http://static.rada.gov.ua/dep_img8/ob5.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Біловол Олександр Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/3471',
		picture: 'http://static.rada.gov.ua/dep_img8/d180_1.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бобов Геннадій Борисович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15829',
		picture: 'http://static.rada.gov.ua/dep_img8/d196_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100004831083336',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Богомолець Ольга Вадимівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/17972',
		picture: 'http://static.rada.gov.ua/dep_img8/bp3.jpg',
		facebook: 'https://www.facebook.com/olgabogomolets',
		tags: [],
	},
	{
		name: 'Богуслаєв Вячеслав Олександрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/8725',
		picture: 'http://static.rada.gov.ua/dep_img8/d77_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Бойко Олена Петрівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/16698',
		picture: 'http://static.rada.gov.ua/dep_img8/nf66.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100003472124257',
		tags: [],
	},
	{
		name: 'Бойко Юрій Анатолійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/11094',
		picture: 'http://static.rada.gov.ua/dep_img8/ob1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Бондар Віктор Васильович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15826',
		picture: 'http://static.rada.gov.ua/dep_img8/d191_1.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бондар Михайло Леонтійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18066',
		picture: 'http://static.rada.gov.ua/dep_img8/d119_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100006099828041',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Брензович Василь Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17998',
		picture: 'http://static.rada.gov.ua/dep_img8/bp62.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Бриченко Ігор Віталійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15796',
		picture: 'http://static.rada.gov.ua/dep_img8/nf47.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100009140976073',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бублик Юрій Васильович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15802',
		picture: 'http://static.rada.gov.ua/dep_img8/d145_1.jpg',
		facebook: 'https://www.facebook.com/bublyk.svoboda',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Бурбак Максим Юрійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15655',
		picture: 'http://static.rada.gov.ua/dep_img8/d204_1.jpg',
		facebook: 'https://www.facebook.com/maksym.burbak',
		tags: [],
	},
	{
		name: 'Бухарєв Владислав Вікторович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15257',
		picture: 'http://static.rada.gov.ua/dep_img8/d162_1.jpg',
		facebook: 'https://www.facebook.com/vladislav.buharev',
		tags: [],
	},
	{
		name: 'Вадатурський Андрій Олексійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18067',
		picture: 'http://static.rada.gov.ua/dep_img8/d130_1.jpg',
		facebook: 'https://www.facebook.com/avadaturskyy',
		tags: [],
	},
	{
		name: 'Валентиров Сергій Васильович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18068',
		picture: 'http://static.rada.gov.ua/dep_img8/d81_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Ванат Петро Михайлович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17964',
		picture: 'http://static.rada.gov.ua/dep_img8/nf45.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Васюник Ігор Васильович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15787',
		picture: 'http://static.rada.gov.ua/dep_img8/nf17.jpg',
		facebook: 'https://www.facebook.com/vivmail',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Величкович Микола Романович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17961',
		picture: 'http://static.rada.gov.ua/dep_img8/nf40.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100000145124423',
		tags: [],
	},
	{
		name: 'Веселова Наталія Василівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/18008',
		picture: 'http://static.rada.gov.ua/dep_img8/sp9.jpg',
		facebook: 'https://www.facebook.com/natalka.poltavka.78',
		tags: [],
	},
	{
		name: 'Висоцький Сергій Віталійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17963',
		picture: 'http://static.rada.gov.ua/dep_img8/nf44.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Вілкул Олександр Юрійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/8737',
		picture: 'http://static.rada.gov.ua/dep_img8/ob2.jpg',
		facebook: 'https://www.facebook.com/OleksandrVilkul',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Вінник Іван Юлійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18069',
		picture: 'http://static.rada.gov.ua/dep_img8/d184_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100008664874137',
		tags: [],
	},
	{
		name: 'Вітко Артем Леонідович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18043',
		picture: 'http://static.rada.gov.ua/dep_img8/rp7.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100008907132210',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Власенко Сергій Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/12265',
		picture: 'http://static.rada.gov.ua/dep_img8/but15.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100001667276617',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Вовк Віктор Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/8132',
		picture: 'http://static.rada.gov.ua/dep_img8/rp23.jpg',
		facebook: 'https://www.facebook.com/Dr.vovk',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Вознюк Юрій Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15807',
		picture: 'http://static.rada.gov.ua/dep_img8/d153_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100002187041715',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Войцеховська Світлана Михайлівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/11596',
		picture: 'http://static.rada.gov.ua/dep_img8/nf46.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100009606826570',
		tags: [],
	},
	{
		name: 'Войціцька Вікторія Михайлівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/18021',
		picture: 'http://static.rada.gov.ua/dep_img8/sp22.jpg',
		facebook: 'https://www.facebook.com/viktoriya.voytsitska',
		tags: [],
	},
	{
		name: 'Воропаєв Юрій Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/8741',
		picture: 'http://static.rada.gov.ua/dep_img8/ob13.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Гаврилюк Михайло Віталійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18070',
		picture: 'http://static.rada.gov.ua/dep_img8/d95_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100008264370063',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Галасюк Віктор Валерійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18046',
		picture: 'http://static.rada.gov.ua/dep_img8/rp10.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гальченко Андрій Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18071',
		picture: 'http://static.rada.gov.ua/dep_img8/d32_1.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гарбуз Юрій Григорійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18072',
		picture: 'http://static.rada.gov.ua/dep_img8/d114_1.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гвоздьов Михайло Олексійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17992',
		picture: 'http://static.rada.gov.ua/dep_img8/bp53.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Герасимов Артур Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17985',
		picture: 'http://static.rada.gov.ua/dep_img8/bp43.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Геращенко Антон Юрійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17952',
		picture: 'http://static.rada.gov.ua/dep_img8/nf21.jpg',
		facebook: 'https://www.facebook.com/anton.gerashchenko.7',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Геращенко Ірина Володимирівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/11121',
		picture: 'http://static.rada.gov.ua/dep_img8/bp9.jpg',
		facebook: 'https://www.facebook.com/iryna.gerashchenko',
		tags: [],
	},
	{
		name: 'Герега Олександр Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15827',
		picture: 'http://static.rada.gov.ua/dep_img8/d192_1.jpg',
		facebook: 'https://www.facebook.com/olexandr.gerega',
		tags: [],
	},
	{
		name: 'Гєллєр Євгеній Борисович',
		url: 'http://itd.rada.gov.ua/mps/info/page/8746',
		picture: 'http://static.rada.gov.ua/dep_img8/d50_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Гіршфельд Анатолій Мусійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/5606',
		picture: 'http://static.rada.gov.ua/dep_img8/d179_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Головко Михайло Йосифович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15813',
		picture: 'http://static.rada.gov.ua/dep_img8/d164_1.jpg',
		facebook: 'https://www.facebook.com/mihaylo.holovko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Голуб Владислав Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/8238',
		picture: 'http://static.rada.gov.ua/dep_img8/d197_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100003798267049',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Голубов Дмитро Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18074',
		picture: 'http://static.rada.gov.ua/dep_img8/d136_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100009312742363',
		tags: [],
	},
	{
		name: 'Гончаренко Олексій Олексійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17984',
		picture: 'http://static.rada.gov.ua/dep_img8/bp40.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Гопко Ганна Миколаївна',
		url: 'http://itd.rada.gov.ua/mps/info/page/18002',
		picture: 'http://static.rada.gov.ua/dep_img8/sp1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Горбунов Олександр Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17962',
		picture: 'http://static.rada.gov.ua/dep_img8/nf41.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100000968968654',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Горват Роберт Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18075',
		picture: 'http://static.rada.gov.ua/dep_img8/d68_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100004995437158',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гордєєв Андрій Анатолійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15953',
		picture: 'http://static.rada.gov.ua/dep_img8/d183_1.jpg',
		facebook: 'https://www.facebook.com/andriy.gordeev',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Грановський Олександр Михайлович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17995',
		picture: 'http://static.rada.gov.ua/dep_img8/bp58.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Гриневич Лілія Михайлівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/15646',
		picture: 'http://static.rada.gov.ua/dep_img8/nf9.jpg',
		facebook: 'https://www.facebook.com/liliya.grynevych',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гринів Ігор Олексійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/5414',
		picture: 'http://static.rada.gov.ua/dep_img8/bp14.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Гройсман В.Б.',
		url: 'http://itd.rada.gov.ua/mps/info/page/17973',
		picture: 'http://static.rada.gov.ua/dep_img8/bp4.jpg',
		facebook: 'https://www.facebook.com/volodymyrgroysman',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гудзенко Віталій Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18077',
		picture: 'http://static.rada.gov.ua/dep_img8/d92_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100004086552851',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гузь Ігор Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/14674',
		picture: 'http://static.rada.gov.ua/dep_img8/d19_1.jpg',
		facebook: 'https://www.facebook.com/igor.guz',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гуляєв Василь Олександрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18078',
		picture: 'http://static.rada.gov.ua/dep_img8/d140_1.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Гусак Володимир Георгійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18036',
		picture: 'http://static.rada.gov.ua/dep_img8/ob15.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Давиденко Валерій Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18079',
		picture: 'http://static.rada.gov.ua/dep_img8/d208_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Данченко Олександр Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18009',
		picture: 'http://static.rada.gov.ua/dep_img8/sp10.jpg',
		facebook: 'https://www.facebook.com/danchenko.oleksandr',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дейдей Євген Сергійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17956',
		picture: 'http://static.rada.gov.ua/dep_img8/nf32.jpg',
		facebook: 'https://www.facebook.com/evgeniy.deidei',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Демчак Руслан Євгенійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18080',
		picture: 'http://static.rada.gov.ua/dep_img8/d18_1.jpg',
		facebook: 'https://www.facebook.com/ruslan.demchak',
		tags: [],
	},
	{
		name: 'Денисенко Анатолій Петрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15815',
		picture: 'http://static.rada.gov.ua/dep_img8/d173_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Денисенко Андрій Сергійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18081',
		picture: 'http://static.rada.gov.ua/dep_img8/d26_1.jpg',
		facebook: 'https://www.facebook.com/andriy.denysenko.75',
		tags: [],
	},
	{
		name: 'Денисенко Вадим Ігорович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17986',
		picture: 'http://static.rada.gov.ua/dep_img8/bp45.jpg',
		facebook: 'https://www.facebook.com/vadym.denysenko.1',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Денісова Людмила Леонтіївна',
		url: 'http://itd.rada.gov.ua/mps/info/page/8757',
		picture: 'http://static.rada.gov.ua/dep_img8/nf15.jpg',
		facebook: 'https://www.facebook.com/denisovamlsp',
		tags: [],
	},
	{
		name: 'Дерев’янко Юрій Богданович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15768',
		picture: 'http://static.rada.gov.ua/dep_img8/d87_1.jpg',
		facebook: 'https://www.facebook.com/derevyanko.yurii',
		tags: [
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
		facebook: 'https://www.facebook.com/oleh.musij',
		tags: [
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
		facebook: 'https://www.facebook.com/spivakovsky.alexander',
		tags: [
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
		facebook: 'https://www.facebook.com/egor.firsov',
		tags: [
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
		facebook: 'https://www.facebook.com/kuryachiy',
		tags: [
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
		facebook: 'https://www.facebook.com/andriy.pavelko',
		tags: [
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
		facebook: 'https://www.facebook.com/m.tomenko',
		tags: [
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
		name: 'Дзюблик П.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Донець Т.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ємець Л.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Заставний Р.Й.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кадикало М.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кодола О.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Корчик В.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кремінь Т.Д.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кривошея Г.Г.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ксенжук О.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Логвинський Г.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лунченко В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Медуниця О.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Река А.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Сташук В.Ф.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Сторожук Д.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Фаєрмарк С.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Хміль М.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шкварилюк В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дзензерський Д.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Драюк С.Є.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Єфремова І.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Княжицький М.Л.',
		facebook: 'https://www.facebook.com/mykolakn',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Котвіцький І.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лапін І.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ледовських О.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лук’янчук Р.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Поляков М.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Присяжнюк О.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Романовський О.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Сидорчук В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Сочка О.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Стеценко Д.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Тимошенко Ю.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Унгурян П.Я.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Федорук М.Т.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Королевська Н.Ю.',
		facebook: 'https://www.facebook.com/Nataliya.Korolevska',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мартовицький А.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Павленко Ю.О.',
		facebook: 'https://www.facebook.com/Yurij.Pavlenko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Папієв М.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Сажко С.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Солод Ю.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шпенов Д.Ю.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Долженков О.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Матвієнков С.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мірошниченко Ю.Р.',
		facebook: 'https://www.facebook.com/umirosnicenko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Німченко В.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Павлов К.Ю.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Скорик М.Л.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шенцев Д.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шурма І.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дідич В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Іллєнко А.Ю.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Марченко О.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Осуховський О.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Парубій А.В.',
		facebook: 'https://www.facebook.com/andriy.parubiy',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Супруненко О.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Довгий О.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Левченко Ю.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Немировський А.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Парасюк В.З.',
		facebook: 'https://www.facebook.com/v.parasyuk',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Суслова І.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Костенко П.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мірошніченко І.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Острікова Т.Г.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Семенуха Р.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Подоляк І.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Романова А.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Сисоєнко І.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ільюк А.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кіссе А.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Пресман О.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Хомутиннік В.Ю.',
		facebook: 'https://www.facebook.com/profile.php?id=100009097881046',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шкіря І.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Зубик В.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кацуба В.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Святаш Д.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шипко А.Ф.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Яценко А.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Корчинська О.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Купрієнко О.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лінько Д.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ляшко О.В.',
		facebook: 'https://www.facebook.com/O.Liashko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Огнєвіч З.Л.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Рибалка С.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Скуратовський С.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шухевич Ю.Р.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кириченко О.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ленський О.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лозовой А.С.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мосійчук І.В.',
		facebook: 'https://www.facebook.com/igor.mosijcuk',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Попов І.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Силантьєв Д.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лабазюк С.П.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Литвин В.М.',
		facebook: 'https://www.facebook.com/vm.lytvyn',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Москаленко Я.М.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Развадовський В.Й.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шаповалов Ю.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Деркач А.Л.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мартиняк С.В.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Молоток І.Ф.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Поплавський М.М.',
		facebook: 'https://www.facebook.com/MMPoplavskiy',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Фурсін І.Г.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кириленко І.Г.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кондратюк О.К.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кужель О.В.',
		facebook: 'https://www.facebook.com/abkuzhel',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Немиря Г.М.',
		facebook: 'https://www.facebook.com/profile.php?id=100004412837426',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Тарасюк Б.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Шкрум А.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дубіль В.О.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кожем’якін А.А.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Крулько І.І.',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Луценко І.В.',
		facebook: 'https://www.facebook.com/igor.lutsenko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Тимошенко Ю.В.',
		facebook: 'https://www.facebook.com/YuliaTymoshenko',
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
		var htmlFb = deputy.facebook ? '<a href="' + deputy.facebook + '" target="_blank"><img src="img/facebook.png"></a>' : '',
			htmlPicture = deputy.picture ? '<img src="' + deputy.picture + '" style="width: 50px;">' : '',
			htmlName = deputy.url ? '<a href="' + deputy.url + '" target="_blank">' + deputy.name + '</a>' : deputy.name,
			htmlTag = deputy.tags.length ? 
				'<a href="' + deputy.tags[0].lawUrl + '" target="_blank" style="display: block; margin-top: 5px;">' +
					'<span class="label label-warning" data-toggle="tooltip" data-placement="left" title="' + deputy.tags[0].lawName + '">' + 
						deputy.tags[0].name + 
					'</span>' + 
				'</a>' : '';
		$table.append(
			'<tr>' + 
				'<td style="vertical-align: middle; width: 30px;">' + htmlFb + '</td>' +
				'<td style="height: 84px; width: 60px;">' + htmlPicture + '</td>' +
				'<td style="vertical-align: middle; width: 400px;">' + htmlName + '</td>' +
				'<td style="vertical-align: middle;">' + htmlTag + '</td>' + 
			'</tr>'
		)
	});

	// Bind tooltips
	$('[data-toggle="tooltip"]').tooltip();
});