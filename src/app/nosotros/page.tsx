/* eslint-disable max-len */
import type { Metadata } from 'next';
import Image from 'next/image';
import Icon from '../../components/Icon';
import Reveal from '../../components/Reveal';
import { ButtonLink, PageHero, SectionTitle } from '../../components/ui';
import { site } from '../../data/site';

export const metadata: Metadata = {
	title: 'Nosotros',
	description:
		'Conoce la historia, visión, misión y valores de la IDP Esperanza Baja.',
};

export default function Nosotros() {
	return (
		<>
			<PageHero
				title='Una iglesia con propósito desde 1971'
				text='Somos la Iglesia de Dios de la Profecía “Casa de Gracia”, en La Esperanza, Trujillo.'
			/>

			<section className='mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 md:grid-cols-[1fr_1.3fr]'>
				<Reveal className='flex justify-center'>
					<Image
						src='/images/logo-casa-de-gracia.png'
						alt='Emblema Casa de Gracia'
						width={1069}
						height={991}
						className='h-auto w-72 md:w-96'
					/>
				</Reveal>
				<Reveal>
					<SectionTitle title='Más de cinco décadas sirviendo' />
					<p className='text-muted text-lg'>
						Desde que Jesús ascendió al cielo, la iglesia fue llamada a llevar
						su mensaje a todo lugar. Desde {site.since}, la IDP Esperanza Baja
						asume esa misma misión: presentar a Jesucristo como Señor y Salvador
						a nuestra comunidad.
					</p>
					<p className='text-muted mt-4 text-lg'>
						Creemos que estamos en el tiempo de la cosecha. Por eso queremos
						comprometer a cada creyente, de todas las edades, con la misión de
						reconciliar a las personas con Cristo, mentorearlas y discipularlas.
					</p>
				</Reveal>
			</section>

			<section className='bg-hero py-24 text-white'>
				<div className='mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2'>
					{[
						{ t: 'Nuestra visión', d: site.vision, i: 'sun' as const },
						{ t: 'Nuestra misión', d: site.mission, i: 'flame' as const },
					].map(c => (
						<Reveal key={c.t}>
							<article className='h-full rounded-3xl border border-white/15 bg-white/5 p-10'>
								<Icon name={c.i} className='text-gold size-10' />
								<h2 className='text-gold mt-4 font-serif text-4xl font-bold'>
									{c.t}
								</h2>
								<p className='mt-4 text-lg text-white/85'>{c.d}</p>
							</article>
						</Reveal>
					))}
				</div>
				<Reveal className='mx-auto mt-10 max-w-4xl px-4 text-center'>
					<p className='text-gold text-sm font-bold tracking-[0.2em] uppercase'>
						Objetivo general
					</p>
					<p className='mt-3 font-serif text-3xl leading-snug'>
						Impulsar y ejecutar el cumplimiento de la misión, alcanzando y
						formando vidas para liderar e influenciar en las personas, familias
						y comunidades.
					</p>
				</Reveal>
			</section>

			<section className='mx-auto max-w-7xl px-4 py-24'>
				<SectionTitle title='Nuestros valores' />
				<dl className='grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3'>
					{site.values.map(v => (
						<Reveal key={v.title} className='border-border border-t py-6'>
							<dt className='text-navy font-serif text-2xl font-bold'>
								{v.title}
							</dt>
							<dd className='text-muted mt-1'>{v.text}</dd>
						</Reveal>
					))}
				</dl>
			</section>

			<section className='bg-white py-24'>
				<div className='mx-auto max-w-7xl px-4'>
					<SectionTitle title='Tres ejes que se entrelazan' />
					<div className='grid gap-6 md:grid-cols-3'>
						{site.pillars.map(p => (
							<Reveal key={p.title}>
								<article className='border-gold bg-background h-full border-t-4 p-8'>
									<h3 className='text-navy font-serif text-2xl font-bold'>
										{p.title}
									</h3>
									<p className='text-muted mt-3'>{p.text}</p>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className='mx-auto max-w-7xl px-4 py-24'>
				<SectionTitle title='Templo central y campos misioneros' />
				<div className='grid gap-6 md:grid-cols-2'>
					<Reveal className='bg-navy rounded-2xl p-8 text-white'>
						<Icon name='pin' className='text-gold size-8' />
						<h3 className='mt-3 font-serif text-2xl font-bold'>
							Templo central
						</h3>
						<p className='mt-2 text-white/85'>{site.address}</p>
					</Reveal>
					<Reveal className='border-border rounded-2xl border bg-white p-8'>
						<Icon name='sprout' className='text-gold-dark size-8' />
						<h3 className='text-navy mt-3 font-serif text-2xl font-bold'>
							Campos misioneros
						</h3>
						<ul className='text-muted mt-2 list-inside list-disc'>
							{site.fields.map(f => (
								<li key={f}>{f}</li>
							))}
						</ul>
					</Reveal>
				</div>
				<div className='mt-10 text-center'>
					<ButtonLink href='/ministerios' variant='navy'>
						Conoce nuestros ministerios
					</ButtonLink>
				</div>
			</section>
		</>
	);
}
