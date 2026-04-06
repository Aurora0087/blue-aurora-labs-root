// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	srcDark: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle:
		'Blue Aurora Labs | Custom Website Design & Development Agency',
	siteDescription:
		'Blue Aurora Labs builds high-performance, beautifully crafted websites for businesses of all sizes. From landing pages to full custom builds — we turn your vision into a website that works.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		srcDark: '/logo.svg',
		alt: 'Blue Aurora Labs logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
