/* eslint-disable max-len */
export type Group = 'Alcance' | 'Formación' | 'Vida espiritual' | 'Por edades';

export type Ministry = {
	slug: string;
	short: string;
	name: string;
	group: Group;
	logo?: string;
	tagline: string;
	description: string;
	activities: string[];
};

export const groups: { name: Group; text: string }[] = [
	{
		name: 'Alcance',
		text: 'Salimos al encuentro de quienes necesitan conocer a Cristo.',
	},
	{
		name: 'Formación',
		text: 'Capacitamos creyentes y líderes para servir con excelencia.',
	},
	{
		name: 'Vida espiritual',
		text: 'Sostenemos la obra con oración, ayuno y comunión.',
	},
	{
		name: 'Por edades',
		text: 'Un lugar para cada etapa de la vida en la casa de Dios.',
	},
];

export const ministries: Ministry[] = [
	{
		slug: 'cosecha',
		short: 'Cosecha',
		name: 'Cosecha y plantación de iglesias',
		group: 'Alcance',
		tagline: 'Evangelismo con propósito, dentro y fuera del templo.',
		description:
			'Impulsa el evangelismo activo e intencional en la iglesia y en los campos misioneros, para la cosecha de almas y el discipulado, con el sueño de plantar nuevas iglesias.',
		activities: [
			'Evangelismo al aire libre y cultos evangelísticos en los GDC',
			'Evangelismo mensual en Víctor Raúl, Alto Trujillo y Pampas de San Juan',
			'Seminarios de estrategias de evangelismo',
			'Ayuno del equipo de cosecha',
			'Campaña "Cada uno gana uno"',
		],
	},
	{
		slug: 'gdc',
		short: 'GDC',
		name: 'Grupos Dinámicos de Crecimiento (GDC)',
		group: 'Alcance',
		tagline: 'La iglesia también se reúne en las casas.',
		description:
			'Pequeños grupos en hogares donde se comparte la Palabra, se ora unos por otros y se invita a nuevas personas a conocer a Jesús.',
		activities: [
			'Reuniones de crecimiento en las casas',
			'Culto especial de GDC cada mes',
			'Cultos evangelísticos en cada GDC',
			'Capacitación de líderes de GDC',
		],
	},
	{
		slug: 'servicio-social',
		short: 'Servicio social',
		name: 'Servicio social',
		group: 'Alcance',
		tagline: 'El amor de Cristo en acciones concretas.',
		description:
			'Llega a zonas de alta pobreza, a nuestros campos misioneros y a la iglesia con ayuda práctica, mostrando el amor de Dios a través del servicio.',
		activities: [
			'Empadronamiento y atención a familias vulnerables',
			'Campañas de limpieza y reciclaje',
			'Campaña gratuita de Papanicolau',
			'Chocolatada navideña para niños en necesidad',
		],
	},
	{
		slug: 'mayordomia',
		short: 'Mayordomía',
		name: 'Mayordomía',
		group: 'Alcance',
		tagline: 'Administrar con fidelidad lo que Dios nos confía.',
		description:
			'Enseña a vivir como buenos administradores del tiempo, los talentos y los recursos, con espíritu de generosidad.',
		activities: [
			'Semana de la Mayordomía',
			'Campaña "Dador Alegre"',
			'Taller de emprendimiento',
		],
	},
	{
		slug: 'mentoreo',
		short: 'Mentoreo',
		name: 'Mentoreo y discipulado',
		group: 'Formación',
		tagline: 'Nadie camina solo: cada nuevo creyente tiene un mentor.',
		description:
			'Forma y consolida un equipo de mentores que acompañan a los nuevos convertidos en su proceso de consolidación y crecimiento espiritual.',
		activities: [
			'Talleres y seminarios de mentoreo',
			'Un mentor designado para cada nuevo convertido',
			'Gran convocatoria y retiro de mentores',
			'Ayuno de mentores',
		],
	},
	{
		slug: 'eslider',
		logo: '/images/ministerios/eslider.png',
		short: 'ESLIDER',
		name: 'ESLIDER – Escuela de líderes',
		group: 'Formación',
		tagline: 'Formamos líderes para influenciar a las familias y comunidades.',
		description:
			'Escuela de formación con tres discipulados, presente también en los campos misioneros, con capacitaciones presenciales y virtuales.',
		activities: [
			'Los tres discipulados de ESLIDER',
			'Curso de Pastores en Potencia',
			'Talleres de administración, liderazgo, homilética y hermenéutica',
			'Retiros de formación espiritual y de líderes',
			'Mes de la identidad: historia y gobierno de la IDP',
		],
	},
	{
		slug: 'redes',
		short: 'Redes',
		name: 'Redes y comunicaciones',
		group: 'Formación',
		logo: '/images/ministerios/redes.png',
		tagline: 'Tecnología al servicio del mensaje.',
		description:
			'Equipo de innovación que lleva el Evangelio a los medios digitales y capacita en herramientas tecnológicas.',
		activities: [
			'Talleres de redes e innovación tecnológica',
			'Taller de diseño gráfico y publicidad en redes sociales',
		],
	},
	{
		slug: 'escuela-biblica',
		short: 'Escuela Bíblica Dominical',
		name: 'Escuela Bíblica Dominical',
		group: 'Formación',
		logo: '/images/ministerios/escuela-dominical.png',
		tagline: 'Aprender la Palabra de Dios cada domingo.',
		description:
			'Espacio de enseñanza bíblica con maestros y auxiliares capacitados, que acompaña a niños y adultos en el conocimiento de la Palabra.',
		activities: [
			'Clases de la Escuela Bíblica Dominical',
			'Capacitaciones para maestros y maestras',
			'Ayuno de maestras y auxiliares',
			'Promoción del SETIDP entre quienes tienen el don de enseñar',
		],
	},
	{
		slug: 'familias',
		short: 'Familias',
		name: 'Familias',
		group: 'Formación',
		logo: '/images/ministerios/familias.png',
		tagline: 'Hogares firmes sobre la Palabra de Dios.',
		description:
			'Acompaña y fortalece a padres, matrimonios y familias con enseñanza, talleres y espacios de convivencia.',
		activities: [
			'Escuela de padres',
			'Charlas para padres y matrimonios',
			'Taller para padres de adolescentes y té de padres',
			'Matrimonio masivo distrital',
			'Celebración del Día de la Madre y del Padre',
		],
	},
	{
		slug: 'oracion',
		short: 'Oración',
		name: 'Oración',
		group: 'Vida espiritual',
		logo: '/images/ministerios/oracion.png',
		tagline: 'Todo comienza de rodillas.',
		description:
			'Sostiene la obra con intercesión constante y promueve una vida de comunión e intimidad con Dios a través de la oración y el ayuno.',
		activities: [
			'Ayunos congregacionales mensuales',
			'Vigilias y oraciones matutinas',
			'Semana de la Oración y cadena de oración',
			'Retiro del ministerio de oración',
			'Santa Cena cada dos meses',
		],
	},
	{
		slug: 'musica',
		short: 'Música',
		name: 'Música',
		group: 'Vida espiritual',
		logo: '/images/ministerios/musica.png',
		tagline: 'Adoramos a Dios con nuestra voz y nuestros instrumentos.',
		description:
			'Dirige la alabanza y la adoración en los cultos y en las actividades especiales de la iglesia.',
		activities: [
			'Alabanza y adoración en los cultos',
			'Culto especial de Alabanza y Adoración',
			'Culto de oración y adoración',
		],
	},
	{
		slug: 'ninos',
		short: 'Niños',
		name: 'Niños',
		group: 'Por edades',
		logo: '/images/ministerios/ninos.png',
		tagline: 'Sembrando la Palabra desde la infancia.',
		description:
			'Un espacio para que los más pequeños conozcan a Jesús, con actividades pensadas para su edad y apoyo a sus padres.',
		activities: [
			'Escuela de padres',
			'Semana del Niño, vigilia kids y noche de cine',
		],
	},
	{
		slug: 'adolescentes',
		short: 'Adolescentes',
		name: 'Adolescentes',
		group: 'Por edades',
		logo: '/images/ministerios/adolescentes.png',
		tagline: 'Una generación que crece firme en la fe.',
		description:
			'Espacio para que los adolescentes conozcan a Jesús, formen amistades sanas y descubran sus dones.',
		activities: [
			'Vigilias y ayunos de adolescentes',
			'Evangelismo y cultos especiales',
			'Aniversario del ministerio',
			'Té de adolescentes',
		],
	},
	{
		slug: 'jovenes',
		short: 'Jóvenes',
		name: 'Jóvenes',
		group: 'Por edades',
		logo: '/images/ministerios/jovenes.png',
		tagline: 'Jóvenes que resplandecen para Cristo.',
		description:
			'La población que más ha crecido en nuestra congregación: adoración, talentos, evangelismo y comunión.',
		activities: [
			'Festival y noche de dones y talentos',
			'Una noche con Dios',
			'Paseos y confraternidades',
			'Aniversario del ministerio de jóvenes',
		],
	},
	{
		slug: 'damas',
		short: 'Damas',
		name: 'Damas',
		group: 'Por edades',
		tagline: 'Mujeres que oran, sirven y fortalecen la familia.',
		description:
			'Ministerio de mujeres que celebra su identidad en Cristo y apoya a las familias con charlas y servicio.',
		activities: [
			'Celebración del Día de la Mujer',
			'Charlas para padres y matrimonios',
			'Retiro distrital de damas',
			'Servicios al aire libre',
		],
	},
	{
		slug: 'caballeros',
		short: 'Caballeros',
		name: 'Caballeros',
		group: 'Por edades',
		logo: '/images/ministerios/caballeros.png',
		tagline: 'Hombres llamados a guiar su hogar con integridad.',
		description:
			'Forma hombres comprometidos con Dios, con su familia y con la misión de la iglesia.',
		activities: [
			'Confraternidades y ayuno de caballeros',
			'Seminarios y retiros',
			'Evangelismo y cultos especiales',
			'Cena de acción de gracias',
		],
	},
	{
		slug: 'adulto-mayor',
		short: 'Adulto Mayor',
		name: 'Adulto Mayor',
		group: 'Por edades',
		tagline: 'Honramos a quienes nos preceden en la fe.',
		description:
			'Club con reuniones mensuales de confraternidad para compartir, aprender y ser cuidados.',
		activities: [
			'Reunión mensual de confraternidad',
			'Día del Adulto Mayor',
			'Seminarios y paseos',
		],
	},
];
