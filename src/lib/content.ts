import type { Icon as LucideIcon } from 'lucide-svelte';
import {
	Target,
	Bot,
	Search,
	MonitorSmartphone,
	LineChart,
	MessageSquareHeart,
	ShieldCheck,
	Clock
} from 'lucide-svelte';

export type Service = {
	id: string;
	icon: typeof LucideIcon;
	image: string;
	title: string;
	tagline: string;
	description: string;
	features: string[];
};

export const services: Service[] = [
	{
		id: 'performance',
		icon: Target,
		image: '/images/dashboard.jpg',
		title: 'Performance & Paid Media',
		tagline: 'Adquisición rentable',
		description:
			'Campañas de Google, Meta y TikTok Ads diseñadas para escalar tu inversión con un retorno medible. Cada peso trabaja para generar ventas, no solo clics.',
		features: [
			'Estrategia full-funnel de adquisición',
			'Google, Meta, TikTok & LinkedIn Ads',
			'Optimización por ROAS y CAC',
			'Tracking avanzado y atribución'
		]
	},
	{
		id: 'automatizacion',
		icon: Bot,
		image: '/images/analytics.jpg',
		title: 'Automatización & IA',
		tagline: 'Crecimiento en piloto automático',
		description:
			'Conectamos tu marketing con IA y automatizaciones que nutren leads, responden en segundos y liberan a tu equipo de tareas repetitivas.',
		features: [
			'Embudos y nurturing automatizados',
			'Integración con CRM y WhatsApp',
			'Agentes de IA y chatbots',
			'Lead scoring y workflows inteligentes'
		]
	},
	{
		id: 'seo',
		icon: Search,
		image: '/images/content.jpg',
		title: 'SEO & Contenido',
		tagline: 'Autoridad que perdura',
		description:
			'Posicionamiento orgánico y contenido estratégico que convierte tu marca en referente y atrae demanda cualificada de forma sostenida.',
		features: [
			'SEO técnico y on-page',
			'Estrategia de contenidos',
			'Link building de autoridad',
			'Contenido optimizado con IA + edición humana'
		]
	},
	{
		id: 'web',
		icon: MonitorSmartphone,
		image: '/images/web-design.jpg',
		title: 'Web, Diseño & CRO',
		tagline: 'Experiencias que convierten',
		description:
			'Sitios y landing pages de alto rendimiento, con diseño premium y optimización de conversión para transformar visitas en clientes.',
		features: [
			'Landing pages y sitios a medida',
			'Diseño UI/UX premium',
			'Optimización de conversión (CRO)',
			'Velocidad, Core Web Vitals y SEO técnico'
		]
	}
];

/** Diferenciadores honestos — por qué elegir Parnerson (sin métricas infladas). */
export type Differentiator = { icon: typeof LucideIcon; title: string; description: string };
export const differentiators: Differentiator[] = [
	{
		icon: LineChart,
		title: 'Decisiones basadas en datos',
		description:
			'Cada acción se sustenta en métricas reales, no en corazonadas. Medimos, aprendemos y mejoramos.'
	},
	{
		icon: MessageSquareHeart,
		title: 'Trato cercano y claro',
		description:
			'Hablas directo con quienes ejecutan tu estrategia. Reportes simples, sin tecnicismos vacíos.'
	},
	{
		icon: Bot,
		title: 'Tecnología & automatización',
		description:
			'Aplicamos IA y automatizaciones que ahorran tiempo y hacen crecer tu operación sin fricción.'
	},
	{
		icon: Target,
		title: 'Foco en la rentabilidad',
		description:
			'No perseguimos likes: optimizamos para que tu inversión se convierta en clientes y ventas.'
	}
];

/** Compromisos verificables (no promesas de números). */
export type Commitment = { icon: typeof LucideIcon; label: string };
export const commitments: Commitment[] = [
	{ icon: ShieldCheck, label: 'Sin contratos de permanencia' },
	{ icon: LineChart, label: 'Reportes claros y en tiempo real' },
	{ icon: Clock, label: 'Respondemos en menos de 24h' }
];

export type Step = { number: string; title: string; description: string };
export const process: Step[] = [
	{
		number: '01',
		title: 'Diagnóstico & estrategia',
		description:
			'Analizamos tu negocio, métricas y competencia para diseñar un plan de crecimiento con objetivos claros y medibles.'
	},
	{
		number: '02',
		title: 'Implementación',
		description:
			'Lanzamos campañas, automatizaciones y activos digitales con tracking riguroso desde el primer día.'
	},
	{
		number: '03',
		title: 'Optimización con datos',
		description:
			'Iteramos sobre los datos: escalamos lo que funciona y eliminamos lo que no aporta retorno.'
	},
	{
		number: '04',
		title: 'Escala & reporting',
		description:
			'Hacemos crecer los resultados con dashboards transparentes y reportes accionables.'
	}
];

export type Testimonial = {
	quote: string;
	author: string;
	role: string;
};
export const testimonials: Testimonial[] = [
	{
		quote:
			'Parnerson ordenó nuestra inversión publicitaria y por fin entendemos en qué se gasta cada peso. El crecimiento se nota mes a mes.',
		author: 'María Fernández',
		role: 'CEO · Tienda Nova'
	},
	{
		quote:
			'Lo mejor es que hablan de resultados de negocio, no de métricas vacías. Cercanos, claros y muy profesionales.',
		author: 'Carlos Medina',
		role: 'Director de Marketing · Lumina'
	},
	{
		quote:
			'La automatización de la atención y los leads nos ahorró horas cada semana. Un equipo en el que se puede confiar.',
		author: 'Ana Ríos',
		role: 'Fundadora · Clínica Bienestar'
	}
];

export const clients = ['Nova', 'Lumina', 'Bienestar', 'Vertex', 'Aurora', 'Helix', 'Norte', 'Quantum'];

export type Faq = { q: string; a: string };
export const faqs: Faq[] = [
	{
		q: '¿Trabajan con cualquier tipo de negocio?',
		a: 'Trabajamos con e-commerce, servicios profesionales, SaaS y marcas en crecimiento. Tras un diagnóstico inicial te decimos con total honestidad si podemos generar resultados para tu caso.'
	},
	{
		q: '¿Cuánto tiempo tardo en ver resultados?',
		a: 'Las campañas de performance suelen mostrar señales en las primeras semanas. El crecimiento sostenido y la optimización profunda se consolidan con el paso de los meses.'
	},
	{
		q: '¿Hay permanencia o contratos forzosos?',
		a: 'No creemos en atar clientes. Trabajamos por resultados; si aportamos valor, te quedas porque quieres, no porque un contrato te obligue.'
	},
	{
		q: '¿Cómo reportan los resultados?',
		a: 'Tendrás dashboards en tiempo real y reportes claros enfocados en las métricas que importan: ventas, CAC y crecimiento, no solo likes.'
	}
];
