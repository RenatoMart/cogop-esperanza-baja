/* eslint-disable max-len */
import type { Metadata } from 'next';
import Icon from '../../components/Icon';
import Reveal from '../../components/Reveal';
import { ButtonLink, PageHero } from '../../components/ui';
import { site } from '../../data/site';

export const metadata: Metadata = {
	title: 'Ubicación',
	description:
		'Dónde encontrar a la IDP Esperanza Baja en La Esperanza, Trujillo.',
};

export default function Ubicacion() {
	const q = encodeURIComponent(site.address);
	return (
		<>
			<PageHero
				title='Dónde encontrarnos'
				text='Las puertas de la Casa de Gracia están abiertas para ti y tu familia.'
			/>
			<section className='mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2'>
				<Reveal>
					<div className='bg-navy rounded-3xl p-8 text-white'>
						<Icon name='pin' className='text-gold size-9' />
						<h2 className='mt-3 font-serif text-3xl font-bold'>
							Templo central
						</h2>
						<p className='mt-2 text-lg text-white/85'>{site.address}</p>
						<div className='mt-6'>
							<ButtonLink
								href={`https://www.google.com/maps/search/?api=1&query=${q}`}
								external
							>
								Abrir en Google Maps
							</ButtonLink>
						</div>
					</div>
					<div className='border-border mt-6 rounded-3xl border bg-white p-8'>
						<h2 className='text-navy font-serif text-3xl font-bold'>
							Campos misioneros
						</h2>
						<ul className='text-muted mt-3 space-y-2 text-lg'>
							{site.fields.map(f => (
								<li key={f} className='flex items-center gap-2'>
									<Icon name='sprout' className='text-gold-dark size-5' />
									{f}
								</li>
							))}
						</ul>
					</div>
				</Reveal>
				<Reveal>
					<iframe
						title='Mapa de la ubicación de la iglesia'
						src={`https://maps.google.com/maps?q=${q}&output=embed`}
						loading='lazy'
						className='h-96 w-full rounded-3xl border-0 shadow-lg lg:h-full lg:min-h-112'
					/>
				</Reveal>
			</section>
		</>
	);
}
