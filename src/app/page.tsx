/* eslint-disable max-len */
import Image from 'next/image';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import { ButtonLink, MinistryCard, SectionTitle } from '../components/ui';
import { ministries } from '../data/ministries';
import { site } from '../data/site';

export default function Home() {
	return (
		<>
			<section className='bg-hero relative overflow-hidden text-white'>
				<div className='hero-in mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:py-28 lg:grid-cols-[1.4fr_1fr]'>
					<div className='text-center lg:text-left'>
						<div className='text-gold mb-6 flex justify-center gap-3 lg:justify-start'>
							<Icon name='cross' className='size-7' />
							<Icon name='star' className='size-7' />
							<Icon name='crown' className='size-7' />
						</div>
						<h1 className='text-3xl font-black tracking-wide uppercase sm:text-5xl'>
							Iglesia de Dios de la Profecía
						</h1>
						<p className='font-script my-2 text-7xl leading-none text-white/90 sm:text-8xl'>
							“Casa de Gracia”
						</p>
						<p className='text-lg font-bold tracking-[0.35em] uppercase'>
							Esperanza Baja
						</p>
						<p className='mx-auto mt-8 max-w-xl text-lg text-white/80 lg:mx-0'>
							Una iglesia creciente, empoderada por el Espíritu Santo, que
							alcanza y discipula vidas en La Esperanza, Trujillo, desde{' '}
							{site.since}.
						</p>
						<div className='mt-9 flex flex-wrap justify-center gap-4 lg:justify-start'>
							<ButtonLink href='/ubicacion'>Visítanos</ButtonLink>
							<ButtonLink href='/ministerios' variant='outline'>
								Nuestros ministerios
							</ButtonLink>
						</div>
					</div>
					<div className='flex justify-center'>
						<Image
							src='/images/logo-casa-de-gracia.png'
							alt='Emblema IDP Esperanza Baja, Casa de Gracia, desde 1971'
							width={1069}
							height={991}
							priority
							className='h-auto w-72 sm:w-96'
						/>
					</div>
				</div>
			</section>

			<section className='mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 md:grid-cols-2'>
				<Reveal>
					<h2 className='text-navy font-serif text-4xl leading-tight font-bold sm:text-5xl'>
						Una casa donde la gracia de Dios te espera
					</h2>
					<span className='bg-gold mt-5 block h-1 w-16 rounded' />
					<p className='text-muted mt-6 text-lg'>
						Somos una iglesia misionera. Creemos que estamos en el tiempo de la
						cosecha y trabajamos para reconciliar a las personas con Cristo,
						mentorearlas y discipularlas, de modo que nadie quede olvidado.
					</p>
					<p className='text-muted mt-4 text-lg'>
						Pastores, líderes y hermanos voluntarios servimos juntos para que
						cada creyente descubra su llamado y lo viva.
					</p>
					<div className='mt-8'>
						<ButtonLink href='/nosotros' variant='navy'>
							Conócenos
						</ButtonLink>
					</div>
				</Reveal>
				<Reveal className='grid gap-5'>
					{[
						{ t: 'Nuestra visión', d: site.vision, i: 'sun' as const },
						{ t: 'Nuestra misión', d: site.mission, i: 'flame' as const },
					].map(c => (
						<article
							key={c.t}
							className='bg-navy rounded-2xl p-7 text-white shadow-lg'
						>
							<div className='text-gold mb-3 flex items-center gap-3'>
								<Icon name={c.i} className='size-7' />
								<h3 className='font-serif text-2xl font-bold'>{c.t}</h3>
							</div>
							<p className='text-white/85'>{c.d}</p>
						</article>
					))}
				</Reveal>
			</section>

			<section className='bg-white py-24'>
				<div className='mx-auto max-w-7xl px-4'>
					<SectionTitle
						title='Un ministerio para cada persona'
						text='Niños, adolescentes, jóvenes, damas, caballeros y adultos mayores: hay un lugar para cada etapa de la vida.'
					/>
					<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
						{ministries
							.filter(m => m.group === 'Por edades')
							.map(m => (
								<MinistryCard key={m.slug} m={m} />
							))}
					</div>
					<div className='mt-12 text-center'>
						<ButtonLink href='/ministerios' variant='navy'>
							Ver los {ministries.length} ministerios
						</ButtonLink>
					</div>
				</div>
			</section>

			<section className='bg-hero py-24 text-white'>
				<div className='mx-auto max-w-7xl px-4'>
					<SectionTitle title='Nuestros tres ejes' light />
					<div className='grid gap-6 md:grid-cols-3'>
						{site.pillars.map(p => (
							<Reveal key={p.title}>
								<article className='h-full rounded-2xl border border-white/15 bg-white/5 p-8'>
									<h3 className='mt-2 font-serif text-2xl font-bold'>
										{p.title}
									</h3>
									<p className='mt-3 text-white/80'>{p.text}</p>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className='mx-auto max-w-7xl px-4 py-24'>
				<SectionTitle title='Nuestros valores' center />
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

			<section className='bg-gold py-16'>
				<div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left'>
					<div>
						<h2 className='text-navy-deep font-serif text-4xl font-bold'>
							Te esperamos en la Casa de Gracia
						</h2>
						<p className='text-navy-deep/80 mt-1 flex items-center justify-center gap-2 md:justify-start'>
							<Icon name='pin' className='size-5 shrink-0' /> {site.address}
						</p>
					</div>
					<ButtonLink href='/ubicacion' variant='navy'>
						Cómo llegar
					</ButtonLink>
				</div>
			</section>
		</>
	);
}
