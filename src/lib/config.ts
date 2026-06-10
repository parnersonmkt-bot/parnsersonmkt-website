/**
 * Central site configuration.
 *
 * 👉 EDITAR ESTOS VALORES: número de WhatsApp, correo y redes son
 *    placeholders. Reemplázalos por los datos reales de Parnerson.
 */
export const site = {
	name: 'Parnerson',
	legalName: 'Parnerson Marketing',
	tagline: 'Agencia de crecimiento digital & automatización',
	description:
		'Parnerson es una agencia de performance marketing y automatización con IA. Convertimos inversión publicitaria en crecimiento medible y predecible.',
	url: 'https://www.parnersonmkt.com',

	// 👉 Reemplazar con datos reales (WhatsApp/teléfono/email siguen siendo placeholders)
	email: 'hola@parnerson.com', // 👉 placeholder — reemplazar por el correo real
	phoneDisplay: '+54 351 663 0691',
	whatsapp: '5493516630691', // formato internacional sin "+", ni espacios (54 9 351 …)
	location: 'Córdoba, Argentina · Operamos en LATAM y España',

	social: {
		instagram: 'https://www.instagram.com/parnersonmarketing/',
		linkedin: 'https://linkedin.com/',
		facebook: 'https://facebook.com/'
	}
} as const;

export const whatsappLink = (
	message = 'Hola Parnerson 👋, quiero impulsar el crecimiento de mi negocio.'
) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const nav = [
	{ label: 'Inicio', href: '/' },
	{ label: 'Servicios', href: '/servicios' },
	{ label: 'Resultados', href: '/#resultados' },
	{ label: 'Proceso', href: '/#proceso' },
	{ label: 'Contacto', href: '/contacto' }
] as const;
