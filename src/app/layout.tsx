/* eslint-disable max-len */
import type { Metadata } from 'next';
import { Allura, Cormorant_Garamond, Roboto } from 'next/font/google';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css';

const display = Cormorant_Garamond({
	variable: '--font-display',
	subsets: ['latin'],
	weight: ['500', '600', '700'],
});

const script = Allura({
	variable: '--font-script',
	subsets: ['latin'],
	weight: '400',
});

const body = Roboto({
	variable: '--font-body',
	subsets: ['latin'],
	weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
	title: {
		default: 'IDP Esperanza Baja – Casa de Gracia',
		template: '%s · IDP Esperanza Baja',
	},
	description:
		'Iglesia de Dios de la Profecía "Casa de Gracia" en La Esperanza (parte baja), Trujillo. Desde 1971 alcanzando y discipulando vidas.',
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='es'>
			<body
				suppressHydrationWarning
				className={`${display.variable} ${script.variable} ${body.variable} font-sans antialiased`}
			>
				<a
					href='#contenido'
					className='sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-60 focus:rounded focus:bg-white focus:p-3'
				>
					Saltar al contenido
				</a>
				<Header />
				<main id='contenido'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
