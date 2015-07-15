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
		url: 'http://itd.rada.gov.ua/mps/info/page/17983',
		picture: 'http://static.rada.gov.ua/dep_img8/bp39.jpg',
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
		name: 'Деркач Андрій Леонідович',
		url: 'http://itd.rada.gov.ua/mps/info/page/2284',
		picture: 'http://static.rada.gov.ua/dep_img8/d159_1.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дехтярчук Олександр Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/6130',
		picture: 'http://static.rada.gov.ua/dep_img8/d154_1.jpg',
		facebook: 'https://www.facebook.com/oleksandr.dehtyarchuk',
		tags: [],
	},
	{
		name: 'Джемілєв Мустафа',
		url: 'http://itd.rada.gov.ua/mps/info/page/2394',
		picture: 'http://static.rada.gov.ua/dep_img8/bp5.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Дзензерський Денис Вікторович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15652',
		picture: 'http://static.rada.gov.ua/dep_img8/nf24.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дзюблик Павло Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18082',
		picture: 'http://static.rada.gov.ua/dep_img8/d66_1.jpg',
		facebook: 'https://www.facebook.com/dzyublik',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дирів Анатолій Борисович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15767',
		picture: 'http://static.rada.gov.ua/dep_img8/d86_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=1325521180',
		tags: [],
	},
	{
		name: 'Діденко Ігор Анатолійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18017',
		picture: 'http://static.rada.gov.ua/dep_img8/sp18.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Дідич Валентин Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18083',
		picture: 'http://static.rada.gov.ua/dep_img8/d40_1.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дмитренко Олег Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18084',
		picture: 'http://static.rada.gov.ua/dep_img8/d210_1.jpg',
		facebook: 'https://www.facebook.com/shtabdmitrenko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Добкін Дмитро Маркович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15818',
		picture: 'http://static.rada.gov.ua/dep_img8/d178_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Добкін Михайло Маркович',
		url: 'http://itd.rada.gov.ua/mps/info/page/5578',
		picture: 'http://static.rada.gov.ua/dep_img8/ob3.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Добродомов Дмитро Євгенович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18085',
		picture: 'http://static.rada.gov.ua/dep_img8/d115_1.jpg',
		facebook: 'https://www.facebook.com/dmytro.dobrodomov',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Довбенко Михайло Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/6201',
		picture: 'http://static.rada.gov.ua/dep_img8/d84_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Довгий Олесь Станіславович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18086',
		picture: 'http://static.rada.gov.ua/dep_img8/d102_1.jpg',
		facebook: 'https://www.facebook.com/oles.dovhiy',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Долженков Олександр Валерійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15644',
		picture: 'http://static.rada.gov.ua/dep_img8/ob23.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Домбровський Олександр Георгійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15727',
		picture: 'http://static.rada.gov.ua/dep_img8/d11_1.jpg',
		facebook: 'https://www.facebook.com/DombrovskijOleksandr',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Донець Тетяна Анатоліївна',
		url: 'http://itd.rada.gov.ua/mps/info/page/3849',
		picture: 'http://static.rada.gov.ua/dep_img8/nf20.jpg',
		facebook: 'https://www.facebook.com/TetianaDonets',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Драюк Сергій Євсейович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18221',
		picture: 'http://static.rada.gov.ua/dep_img8/nf71.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100003400835731',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дроздик Олександр Валерійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18222',
		picture: 'http://static.rada.gov.ua/dep_img8/nf74.jpg',
		facebook: 'https://www.facebook.com/drozdik.alexander',
		tags: [],
	},
	{
		name: 'Дубіль Валерій Олександрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/12272',
		picture: 'http://static.rada.gov.ua/dep_img8/but19.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дубінін Олександр Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18087',
		picture: 'http://static.rada.gov.ua/dep_img8/d30_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Дубневич Богдан Васильович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18088',
		picture: 'http://static.rada.gov.ua/dep_img8/d118_1.jpg',
		facebook: 'https://www.facebook.com/Dubnevych.Bogdan',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дубневич Ярослав Васильович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15790',
		picture: 'http://static.rada.gov.ua/dep_img8/d120_1.jpg',
		facebook: 'https://www.facebook.com/Dubnevych',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Дунаєв Сергій Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15780',
		picture: 'http://static.rada.gov.ua/dep_img8/d107_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Євлахов Анатолій Сергійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18089',
		picture: 'http://static.rada.gov.ua/dep_img8/d207_1.jpg',
		facebook: 'https://www.facebook.com/anatoliy.yevlakhov',
		tags: [],
	},
	{
		name: 'Євтушок Сергій Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/11728',
		picture: 'http://static.rada.gov.ua/dep_img8/d156_1.jpg',
		facebook: 'ttps://www.facebook.com/profile.php?id=100002247157326',
		tags: [],
	},
	{
		name: 'Єднак Остап Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18016',
		picture: 'http://static.rada.gov.ua/dep_img8/sp17.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Єленський Віктор Євгенович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17959',
		picture: 'http://static.rada.gov.ua/dep_img8/nf38.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Ємець Леонід Олександрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/4761',
		picture: 'http://static.rada.gov.ua/dep_img8/d221_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100002263895563',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Єремеєв Ігор Миронович',
		url: 'http://itd.rada.gov.ua/mps/info/page/5509',
		picture: 'http://static.rada.gov.ua/dep_img8/d23_1.jpg',
		facebook: 'https://www.facebook.com/IgorEremeev.Ukraine',
		tags: [],
	},
	{
		name: 'Єфімов Максим Вікторович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18090',
		picture: 'http://static.rada.gov.ua/dep_img8/d48_1.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Єфремова Ірина Олексіївна',
		url: 'http://itd.rada.gov.ua/mps/info/page/16716',
		picture: 'http://static.rada.gov.ua/dep_img8/nf63.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Жеваго Костянтин Валентинович',
		url: 'http://itd.rada.gov.ua/mps/info/page/2301',
		picture: 'http://static.rada.gov.ua/dep_img8/d150_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100004764370772',
		tags: [],
	},
	{
		name: 'Жолобецький Олександр Олександрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18091',
		picture: 'http://static.rada.gov.ua/dep_img8/d129_1.jpg',
		facebook: 'https://www.facebook.com/aleksandr.zholobetskyy',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Журжій Андрій Валерійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18015',
		picture: 'http://static.rada.gov.ua/dep_img8/sp16.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100001269912329',
		tags: [],
	},
	{
		name: 'Заболотний Григорій Михайлович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15730',
		picture: 'http://static.rada.gov.ua/dep_img8/bp27.jpg',
		facebook: 'https://www.facebook.com/grigoriyzabolotny',
		tags: [],
	},
	{
		name: 'Загорій Гліб Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17991',
		picture: 'http://static.rada.gov.ua/dep_img8/bp52.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Заліщук Світлана Петрівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/17976',
		picture: 'http://static.rada.gov.ua/dep_img8/bp18.jpg',
		facebook: 'https://www.facebook.com/svitlana.zalishchuk',
		tags: [],
	},
	{
		name: 'Заставний Роман Йосипович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17955',
		picture: 'http://static.rada.gov.ua/dep_img8/nf31.jpg',
		facebook: 'https://www.facebook.com/RomanZastavnyj',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Звягільський Юхим Леонідович',
		url: 'http://itd.rada.gov.ua/mps/info/page/833',
		picture: 'http://static.rada.gov.ua/dep_img8/d45_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Зубач Любомир Львович',
		url: 'http://itd.rada.gov.ua/mps/info/page/19126',
		picture: 'http://static.rada.gov.ua/dep_img8/sp34.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Зубик Володимир Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/8771',
		picture: 'http://static.rada.gov.ua/dep_img8/d195_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100005282119011',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Іванчук Андрій Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15654',
		picture: 'http://static.rada.gov.ua/dep_img8/nf16.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Івахів Степан Петрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15733',
		picture: 'http://static.rada.gov.ua/dep_img8/d21_1.jpg',
		facebook: 'https://www.facebook.com/StepanIvahiv',
		tags: [],
	},
	{
		name: 'Івченко Вадим Євгенович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18055',
		picture: 'http://static.rada.gov.ua/dep_img8/but6.jpg',
		facebook: 'https://www.facebook.com/vadym1ivchenko',
		tags: [],
	},
	{
		name: 'Іллєнко Андрій Юрійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15837',
		picture: 'http://static.rada.gov.ua/dep_img8/d215_1.jpg',
		facebook: 'https://www.facebook.com/andriy.illenko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ільюк Артем Олександрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15794',
		picture: 'http://static.rada.gov.ua/dep_img8/d128_1.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Іонова Марія Миколаївна',
		url: 'http://itd.rada.gov.ua/mps/info/page/15672',
		picture: 'http://static.rada.gov.ua/dep_img8/bp23.jpg',
		facebook: 'https://www.facebook.com/mariya.ionova.9',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Іоффе Юлій Якович',
		url: 'http://itd.rada.gov.ua/mps/info/page/793',
		picture: 'http://static.rada.gov.ua/dep_img8/d112_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Іщейкін Костянтин Євгенович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18092',
		picture: 'http://static.rada.gov.ua/dep_img8/d148_1.jpg',
		facebook: 'ttps://www.facebook.com/ishejkin',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Іщенко Валерій Олександрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15685',
		picture: 'http://static.rada.gov.ua/dep_img8/bp37.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кадикало Микола Олегович',
		url: 'http://itd.rada.gov.ua/mps/info/page/16618',
		picture: 'http://static.rada.gov.ua/dep_img8/nf51.jpg',
		facebook: 'https://www.facebook.com/m.kadykalo',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Каплін Сергій Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15801',
		picture: 'http://static.rada.gov.ua/dep_img8/d144_1.jpg',
		facebook: 'https://www.facebook.com/kaplins',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кацер-Бучковська Наталія Володимирівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/17967',
		picture: 'http://static.rada.gov.ua/dep_img8/nf54.jpg',
		facebook: 'https://www.facebook.com/nataliya.katserbuchkovska',
		tags: [],
	},
	{
		name: 'Кацуба Володимир Михайлович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15816',
		picture: 'http://static.rada.gov.ua/dep_img8/d175_1.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кириленко Іван Григорович',
		url: 'http://itd.rada.gov.ua/mps/info/page/1351',
		picture: 'http://static.rada.gov.ua/dep_img8/but14.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кириченко Олексій Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/12455',
		picture: 'http://static.rada.gov.ua/dep_img8/rp18.jpg',
		facebook: 'https://www.facebook.com/oleksij.kirichenko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кишкар Павло Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18006',
		picture: 'http://static.rada.gov.ua/dep_img8/sp7.jpg',
		facebook: 'https://www.facebook.com/kyshkar',
		tags: [],
	},
	{
		name: 'Ківалов Сергій Васильович',
		url: 'http://itd.rada.gov.ua/mps/info/page/2320',
		picture: 'http://static.rada.gov.ua/dep_img8/d135_1.jpg',
		facebook: 'https://www.facebook.com/s.kivalov',
		tags: [],
	},
	{
		name: 'Кіраль Сергій Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18031',
		picture: 'http://static.rada.gov.ua/dep_img8/sp32.jpg',
		facebook: 'https://www.facebook.com/sergii.kiral',
		tags: [],
	},
	{
		name: 'Кірш Олександр Вікторович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18093',
		picture: 'http://static.rada.gov.ua/dep_img8/d169_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100004825488022',
		tags: [],
	},
	{
		name: 'Кісельов Андрій Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/13694',
		picture: 'http://static.rada.gov.ua/dep_img8/ob17.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100009571924315',
		tags: [],
	},
	{
		name: 'Кіссе Антон Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/7371',
		picture: 'http://static.rada.gov.ua/dep_img8/d142_1.jpg',
		facebook: 'https://www.facebook.com/antonkisse',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кіт Андрій Богданович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18094',
		picture: 'http://static.rada.gov.ua/dep_img8/d126_1.jpg',
		facebook: 'https://www.facebook.com/kit.andriy.bogdanovych',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Климпуш-Цинцадзе Іванна Орестівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/17997',
		picture: 'http://static.rada.gov.ua/dep_img8/bp61.jpg',
		facebook: 'https://www.facebook.com/ivanna.klympushtsintsadze',
		tags: [],
	},
	{
		name: 'Клімов Леонід Михайлович',
		url: 'http://itd.rada.gov.ua/mps/info/page/5423',
		picture: 'http://static.rada.gov.ua/dep_img8/d137_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Клюєв Сергій Петрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/8781',
		picture: 'http://static.rada.gov.ua/dep_img8/d46_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Княжицький Микола Леонідович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15645',
		picture: 'http://static.rada.gov.ua/dep_img8/nf34.jpg',
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
		name: 'Князевич Руслан Петрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/1897',
		picture: 'http://static.rada.gov.ua/dep_img8/bp12.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кобцев Михайло Валентинович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17990',
		picture: 'http://static.rada.gov.ua/dep_img8/bp50.jpg',
		facebook: 'https://www.facebook.com/mykhaylo.kobtsev',
		tags: [],
	},
	{
		name: 'Кодола Олександр Михайлович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15309',
		picture: 'http://static.rada.gov.ua/dep_img8/d209_1.jpg',
		facebook: 'https://www.facebook.com/oleksandr.mihalich',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кожем’якін Андрій Анатолійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/8786',
		picture: 'http://static.rada.gov.ua/dep_img8/but13.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Козак Тарас Романович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18034',
		picture: 'http://static.rada.gov.ua/dep_img8/ob14.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Козаченко Леонід Петрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/7175',
		picture: 'http://static.rada.gov.ua/dep_img8/bp41.jpg',
		facebook: 'https://www.facebook.com/leonidkozachenko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Козир Борис Юрійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18095',
		picture: 'http://static.rada.gov.ua/dep_img8/d127_1.jpg',
		facebook: 'https://www.facebook.com/boris.kozyr.5',
		tags: [],
	},
	{
		name: 'Колганова Олена Валеріївна',
		url: 'http://itd.rada.gov.ua/mps/info/page/17414',
		picture: 'http://static.rada.gov.ua/dep_img8/nf28.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Колєсніков Дмитро Валерійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/11098',
		picture: 'http://static.rada.gov.ua/dep_img8/ob21.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кондратюк Олена Костянтинівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/11166',
		picture: 'http://static.rada.gov.ua/dep_img8/but18.jpg',
		facebook: 'https://www.facebook.com/olena.kondratiuk',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кононенко Ігор Віталійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17981',
		picture: 'http://static.rada.gov.ua/dep_img8/bp29.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100001507967095',
		tags: [],
	},
	{
		name: 'Константіновський Вячеслав Леонідович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18096',
		picture: 'http://static.rada.gov.ua/dep_img8/d220_1.jpg',
		facebook: 'https://www.facebook.com/v.konstantinovskyi',
		tags: [],
	},
	{
		name: 'Корнацький Аркадій Олексійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18097',
		picture: 'http://static.rada.gov.ua/dep_img8/d132_1.jpg',
		facebook: 'https://www.facebook.com/arkady.kornatsky.7',
		tags: [],
	},
	{
		name: 'Королевська Наталія Юріївна',
		url: 'http://itd.rada.gov.ua/mps/info/page/8693',
		picture: 'http://static.rada.gov.ua/dep_img8/ob8.jpg',
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
		name: 'Король Віктор Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/2314',
		picture: 'http://static.rada.gov.ua/dep_img8/bp35.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Корчик Віталій Андрійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18167',
		picture: 'http://static.rada.gov.ua/dep_img8/nf67.jpg',
		facebook: 'https://www.facebook.com/vitaliy.korchik',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Корчинська Оксана Анатоліївна',
		url: 'http://itd.rada.gov.ua/mps/info/page/18165',
		picture: 'http://static.rada.gov.ua/dep_img8/rp24.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Костенко Павло Петрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18028',
		picture: 'http://static.rada.gov.ua/dep_img8/sp29.jpg',
		facebook: 'https://www.facebook.com/ic.kostenko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Котвіцький Ігор Олександрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17965',
		picture: 'http://static.rada.gov.ua/dep_img8/nf48.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100007311643153',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кошелєва Альона Володимирівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/18048',
		picture: 'http://static.rada.gov.ua/dep_img8/rp13.jpg',
		facebook: 'https://www.facebook.com/alena.kosheleva.9',
		tags: [],
	},
	{
		name: 'Кремінь Тарас Дмитрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17969',
		picture: 'http://static.rada.gov.ua/dep_img8/nf59.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кривенко Вадим Валерійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17970',
		picture: 'http://static.rada.gov.ua/dep_img8/nf60.jpg',
		facebook: 'https://www.facebook.com/vadim.kryvenko',
		tags: [],
	},
	{
		name: 'Кривенко Віктор Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18005',
		picture: 'http://static.rada.gov.ua/dep_img8/sp5.jpg',
		facebook: 'https://www.facebook.com/viktor.kryvenko.1',
		tags: [],
	},
	{
		name: 'Кривохатько Вадим Вікторович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18107',
		picture: 'http://static.rada.gov.ua/dep_img8/d82_1.jpg',
		facebook: 'https://www.facebook.com/vadim.krivohatko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кривошея Геннадій Григорович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15901',
		picture: 'http://static.rada.gov.ua/dep_img8/nf69.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100008291649615',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кришин Олег Юрійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18108',
		picture: 'http://static.rada.gov.ua/dep_img8/d34_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Крулько Іван Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/6073',
		picture: 'http://static.rada.gov.ua/dep_img8/but8.jpg',
		facebook: 'https://www.facebook.com/ikrulko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ксенжук Олександр Степанович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17957',
		picture: 'http://static.rada.gov.ua/dep_img8/nf36.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кубів Степан Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15649',
		picture: 'http://static.rada.gov.ua/dep_img8/bp59.jpg',
		facebook: 'https://www.facebook.com/skubiv',
		tags: [],
	},
	{
		name: 'Кудлаєнко Сергій Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17999',
		picture: 'http://static.rada.gov.ua/dep_img8/bp63.jpg',
		facebook: 'https://www.facebook.com/pages/Сергій-Кудлаєнко/875895792469983',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кужель Олександра Володимирівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/735',
		picture: 'http://static.rada.gov.ua/dep_img8/but16.jpg',
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
		name: 'Кузьменко Анатолій Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18109',
		picture: 'http://static.rada.gov.ua/dep_img8/d103_1.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кулініч Олег Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15804',
		picture: 'http://static.rada.gov.ua/dep_img8/d147_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100008098784689',
		tags: [],
	},
	{
		name: 'Куліченко Іван Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18110',
		picture: 'http://static.rada.gov.ua/dep_img8/d28_1.jpg',
		facebook: 'https://www.facebook.com/Kulichenko',
		tags: [],
	},
	{
		name: 'Куніцин Сергій Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15840',
		picture: 'http://static.rada.gov.ua/dep_img8/bp68.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Купрієнко Олег Васильович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18050',
		picture: 'http://static.rada.gov.ua/dep_img8/rp17.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100001099433721',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Купрій Віталій Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18111',
		picture: 'http://static.rada.gov.ua/dep_img8/d29_1.jpg',
		facebook: 'https://www.facebook.com/vitaliy.kupriy',
		tags: [],
	},
	{
		name: 'Курило Віталій Семенович',
		url: 'http://itd.rada.gov.ua/mps/info/page/8803',
		picture: 'http://static.rada.gov.ua/dep_img8/d113_1.jpg',
		facebook: 'https://www.facebook.com/VSKurilo',
		tags: [],
	},
	{
		name: 'Курячий Максим Павлович',
		url: 'http://itd.rada.gov.ua/mps/info/page/13646',
		picture: 'http://static.rada.gov.ua/dep_img8/d25_1.jpg',
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
		name: 'Кутовий Тарас Вікторович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15805',
		picture: 'http://static.rada.gov.ua/dep_img8/d151_1.jpg',
		facebook: 'https://www.facebook.com/t.kutovyi',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Кучер Микола Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18112',
		picture: 'http://static.rada.gov.ua/dep_img8/d17_1.jpg',
		facebook: 'https://www.facebook.com/pages/Микола-Кучер/1590097224576613',
		tags: [],
	},
	{
		name: 'Лабазюк Сергій Петрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15824',
		picture: 'http://static.rada.gov.ua/dep_img8/d188_1.jpg',
		facebook: 'https://www.facebook.com/SergiyLobazyuk',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лаврик Микола Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18113',
		picture: 'http://static.rada.gov.ua/dep_img8/d161_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100007926224698',
		tags: [],
	},
	{
		name: 'Лаврик Олег Васильович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18011',
		picture: 'http://static.rada.gov.ua/dep_img8/sp12.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100001542360542',
		tags: [],
	},
	{
		name: 'Ланьо Михайло Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15756',
		picture: 'http://static.rada.gov.ua/dep_img8/d70_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Лапін Ігор Олександрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18114',
		picture: 'http://static.rada.gov.ua/dep_img8/d22_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100007665035539',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ларін Сергій Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/2179',
		picture: 'http://static.rada.gov.ua/dep_img8/ob6.jpg',
		facebook: 'https://www.facebook.com/SNLarin',
		tags: [],
	},
	{
		name: 'Левус Андрій Мар’янович',
		url: 'http://itd.rada.gov.ua/mps/info/page/11694',
		picture: 'http://static.rada.gov.ua/dep_img8/nf23.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100000077905605',
		tags: [],
	},
	{
		name: 'Левченко Юрій Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/16672',
		picture: 'http://static.rada.gov.ua/dep_img8/d223_1.jpg',
		facebook: 'https://www.facebook.com/Y.V.Levchenko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ледовських Олена Володимирівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/17413',
		picture: 'http://static.rada.gov.ua/dep_img8/nf27.jpg',
		facebook: 'https://www.facebook.com/elena.ledovskykh',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ленський Олексій Олексійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/10204',
		picture: 'http://static.rada.gov.ua/dep_img8/rp11.jpg',
		facebook: 'https://www.facebook.com/aleksey.lenskyy',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лесюк Ярослав Васильович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18605',
		picture: 'http://static.rada.gov.ua/dep_img8/bp69.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лещенко Сергій Анатолійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17977',
		picture: 'http://static.rada.gov.ua/dep_img8/bp19.jpg',
		facebook: 'https://www.facebook.com/leshchenko.ukraine',
		tags: [],
	},
	{
		name: 'Литвин Володимир Михайлович',
		url: 'http://itd.rada.gov.ua/mps/info/page/5470',
		picture: 'http://static.rada.gov.ua/dep_img8/d65_1.jpg',
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
		name: 'Лівік Олександр Петрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18115',
		picture: 'http://static.rada.gov.ua/dep_img8/d131_1.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лінько Дмитро Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18052',
		picture: 'http://static.rada.gov.ua/dep_img8/rp20.jpg',
		facebook: 'https://www.facebook.com/dmytro.linko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Логвинський Георгій Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17958',
		picture: 'http://static.rada.gov.ua/dep_img8/nf37.jpg',
		facebook: 'https://www.facebook.com/georgiylogvinskiy',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лозовой Андрій Сергійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15916',
		picture: 'http://static.rada.gov.ua/dep_img8/rp2.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лопушанський Андрій Ярославович',
		url: 'http://itd.rada.gov.ua/mps/info/page/8815',
		picture: 'http://static.rada.gov.ua/dep_img8/d125_1.jpg',
		facebook: 'https://www.facebook.com/AndrewLopushansky',
		tags: [],
	},
	{
		name: 'Лубінець Дмитро Валерійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18116',
		picture: 'http://static.rada.gov.ua/dep_img8/d60_1.jpg',
		facebook: 'https://www.facebook.com/dmytro.lubinets',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лук’янчук Руслан Валерійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/6332',
		picture: 'http://static.rada.gov.ua/dep_img8/nf18.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Лунченко Валерій Валерійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15662',
		picture: 'http://static.rada.gov.ua/dep_img8/nf19.jpg',
		facebook: 'https://www.facebook.com/valeriy.lunchenko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Луценко Ігор Вікторович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18054',
		picture: 'http://static.rada.gov.ua/dep_img8/but3.jpg',
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
		name: 'Луценко Ірина Степанівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/15647',
		picture: 'http://static.rada.gov.ua/dep_img8/bp70.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Луценко Юрій Віталійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/4132',
		picture: 'http://static.rada.gov.ua/dep_img8/bp2.jpg',
		facebook: 'https://www.facebook.com/LlutsenkoYuri',
		tags: [],
	},
	{
		name: 'Льовочкін Сергій Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/7718',
		picture: 'http://static.rada.gov.ua/dep_img8/ob12.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Льовочкіна Юлія Володимирівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/11109',
		picture: 'http://static.rada.gov.ua/dep_img8/ob16.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Люшняк Микола Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18117',
		picture: 'http://static.rada.gov.ua/dep_img8/d166_1.jpg',
		facebook: 'https://www.facebook.com/lyushniak.mykola',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Ляшко Олег Валерійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/8818',
		picture: 'http://static.rada.gov.ua/dep_img8/rp1.jpg',
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
		name: 'Макар’ян Давид Борисович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15972',
		picture: 'http://static.rada.gov.ua/dep_img8/bp66.jpg',
		facebook: 'https://www.facebook.com/rezina.diski',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Македон Юрій Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18163',
		picture: 'http://static.rada.gov.ua/dep_img8/d16_1.jpg',
		facebook: 'https://www.facebook.com/yura.makedon',
		tags: [],
	},
	{
		name: 'Мамчур Юлій Валерійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17974',
		picture: 'http://static.rada.gov.ua/dep_img8/bp6.jpg',
		facebook: 'https://www.facebook.com/pages/Юлій-Мамчур/658555767542620',
		tags: [],
	},
	{
		name: 'Маркевич Ярослав Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18013',
		picture: 'http://static.rada.gov.ua/dep_img8/sp14.jpg',
		facebook: 'https://www.facebook.com/markevich.yaroslav',
		tags: [],
	},
	{
		name: 'Мартиненко Микола Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/2323',
		picture: 'http://static.rada.gov.ua/dep_img8/nf14.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Мартиняк Сергій Васильович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15732',
		picture: 'http://static.rada.gov.ua/dep_img8/d20_1.jpg',
		facebook: 'https://www.facebook.com/S.V.Martyniak',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мартовицький Артур Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15744',
		picture: 'http://static.rada.gov.ua/dep_img8/d36_1.jpg',
		facebook: 'https://www.facebook.com/avmartovitskiy',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Марченко Олександр Олександрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18118',
		picture: 'http://static.rada.gov.ua/dep_img8/d90_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100006182508637',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Масоріна Олена Сергіївна',
		url: 'http://itd.rada.gov.ua/mps/info/page/17966',
		picture: 'http://static.rada.gov.ua/dep_img8/nf52.jpg',
		facebook: 'https://www.facebook.com/olena.masorina',
		tags: [],
	},
	{
		name: 'Матвієнко Анатолій Сергійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/2262',
		picture: 'http://static.rada.gov.ua/dep_img8/bp32.jpg',
		facebook: 'https://www.facebook.com/asmatvienko',
		tags: [],
	},
	{
		name: 'Матвієнков Сергій Анатолійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/2356',
		picture: 'http://static.rada.gov.ua/dep_img8/d57_1.jpg',
		facebook: 'https://www.facebook.com/sergey.matvienkov',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Матвійчук Едуард Леонідович',
		url: 'http://itd.rada.gov.ua/mps/info/page/5500',
		picture: 'http://static.rada.gov.ua/dep_img8/d133_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Матейченко Костянтин Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17953',
		picture: 'http://static.rada.gov.ua/dep_img8/nf26.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Матіос Марія Василівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/15665',
		picture: 'http://static.rada.gov.ua/dep_img8/bp7.jpg',
		facebook: 'https://www.facebook.com/maria.matios',
		tags: [],
	},
	{
		name: 'Матківський Богдан Миронович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18119',
		picture: 'http://static.rada.gov.ua/dep_img8/d121_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100008424758160',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Матузко Олена Олександрівна',
		url: 'http://itd.rada.gov.ua/mps/info/page/11342',
		picture: 'http://static.rada.gov.ua/dep_img8/bp64.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Мацола Роман Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18120',
		picture: 'http://static.rada.gov.ua/dep_img8/d190_1.jpg',
		facebook: 'https://www.facebook.com/roman.matsola',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Медуниця Олег Вячеславович',
		url: 'http://itd.rada.gov.ua/mps/info/page/12003',
		picture: 'http://static.rada.gov.ua/dep_img8/d157_1.jpg',
		facebook: 'https://www.facebook.com/oleg.medunitsya',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мельник Сергій Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18161',
		picture: 'http://static.rada.gov.ua/dep_img8/d187_1.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мельниченко Володимир Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15828',
		picture: 'http://static.rada.gov.ua/dep_img8/d193_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100005732172873',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мельничук Іван Іванович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18121',
		picture: 'http://static.rada.gov.ua/dep_img8/d14_1.jpg',
		facebook: 'https://www.facebook.com/ivan.melnychuk.7',
		tags: [],
	},
	{
		name: 'Мельничук Сергій Петрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18039',
		picture: 'http://static.rada.gov.ua/dep_img8/rp3.jpg',
		facebook: 'https://www.facebook.com/SergiyMelnuchykKombatAidar',
		tags: [],
	},
	{
		name: 'Мирний Іван Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/11106',
		picture: 'http://static.rada.gov.ua/dep_img8/ob18.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Мисик Володимир Юрійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15814',
		picture: 'http://static.rada.gov.ua/dep_img8/d172_1.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Мірошниченко Юрій Романович',
		url: 'http://itd.rada.gov.ua/mps/info/page/8826',
		picture: 'http://static.rada.gov.ua/dep_img8/ob20.jpg',
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
		name: 'Мірошніченко Іван Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18014',
		picture: 'http://static.rada.gov.ua/dep_img8/sp15.jpg',
		facebook: '',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Міщенко Сергій Григорович',
		url: 'http://itd.rada.gov.ua/mps/info/page/8827',
		picture: 'http://static.rada.gov.ua/dep_img8/d98_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100004207506810',
		tags: [],
	},
	{
		name: 'Молоток Ігор Федорович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15810',
		picture: 'http://static.rada.gov.ua/dep_img8/d160_1.jpg',
		facebook: 'https://www.facebook.com/igor.molotok',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мороко Юрій Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/11102',
		picture: 'http://static.rada.gov.ua/dep_img8/ob19.jpg',
		facebook: '',
		tags: [],
	},
	{
		name: 'Мосійчук Ігор Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18045',
		picture: 'http://static.rada.gov.ua/dep_img8/rp9.jpg',
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
		name: 'Москаленко Ярослав Миколайович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15773',
		picture: 'http://static.rada.gov.ua/dep_img8/d96_1.jpg',
		facebook: 'https://www.facebook.com/yarmoskalenko',
		tags: [
			{
				name: 'популист',
				lawId: '1558-1',
				lawName: 'Закон про реструктуризацію зобов\'язань за кредитами в іноземній валюті (№1558-1)',
				lawUrl: 'http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_golos?g_id=3049'
			}
		],
	},
	{
		name: 'Мураєв Євгеній Володимирович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15819',
		picture: 'http://static.rada.gov.ua/dep_img8/d181_1.jpg',
		facebook: 'https://www.facebook.com/yevgeniy.murayev',
		tags: [],
	},
	{
		name: 'Мусій Олег Степанович',
		url: 'http://itd.rada.gov.ua/mps/info/page/16517',
		picture: 'http://static.rada.gov.ua/dep_img8/d124_1.jpg',
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
		name: 'Мушак Олексій Петрович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17996',
		picture: 'http://static.rada.gov.ua/dep_img8/bp60.jpg',
		facebook: 'https://www.facebook.com/oleksiy.mushak',
		tags: [],
	},
	{
		name: 'Найєм Мустафа-Масі',
		url: 'http://itd.rada.gov.ua/mps/info/page/17978',
		picture: 'http://static.rada.gov.ua/dep_img8/bp20.jpg',
		facebook: 'https://www.facebook.com/Mustafanayyem',
		tags: [],
	},
	{
		name: 'Насалик Ігор Степанович',
		url: 'http://itd.rada.gov.ua/mps/info/page/2370',
		picture: 'http://static.rada.gov.ua/dep_img8/d85_1.jpg',
		facebook: 'https://www.facebook.com/nasalyk',
		tags: [],
	},
	{
		name: 'Насіров Роман Михайлович',
		url: 'http://itd.rada.gov.ua/mps/info/page/17666',
		picture: 'http://static.rada.gov.ua/dep_img8/bp51.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100004717308190',
		tags: [],
	},
	{
		name: 'Негой Федір Федорович',
		url: 'http://itd.rada.gov.ua/mps/info/page/15823',
		picture: 'http://static.rada.gov.ua/dep_img8/d186_1.jpg',
		facebook: 'https://www.facebook.com/fedir.negoy',
		tags: [],
	},
	{
		name: 'Недава Олег Анатолійович',
		url: 'http://itd.rada.gov.ua/mps/info/page/18122',
		picture: 'http://static.rada.gov.ua/dep_img8/d53_1.jpg',
		facebook: 'https://www.facebook.com/profile.php?id=100001261912525',
		tags: [
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