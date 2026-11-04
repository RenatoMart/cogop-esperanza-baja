/* eslint-disable max-len */
import type { Metadata } from 'next';
import { MinistryCard, PageHero, SectionTitle } from '../../components/ui';
import { groups, ministries } from '../../data/ministries';

export const metadata: Metadata = {
	title: 'Ministerios',
	description:
		'Todos los ministerios de la IDP Esperanza Baja: cosecha, oración, mentoreo, niños, jóvenes, damas, caballeros y más.',
};

const slugify = (t: string) =>
	t
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/\s+/g, '-');

export default function Ministerios() {
	return (
		<>
			<PageHero
				title='Nuestros ministerios'
				text='Hay un lugar para ti. Descubre cómo puedes crecer, servir y ser parte de la misión.'
			/>
			<nav
				aria-label='Grupos de ministerios'
				className='border-border sticky top-[4.75rem] z-40 border-b bg-white lg:top-[6.5rem]'
			>
				<ul className='mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3'>
					{groups.map(g => (
						<li key={g.name}>
							<a
								href={`#${slugify(g.name)}`}
								className='border-border text-navy hover:border-gold hover:bg-gold/20 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-5 text-sm font-bold whitespace-nowrap transition-colors duration-200'
							>
								{g.name}
								<span className='bg-navy rounded-full px-2 text-xs text-white'>
									{ministries.filter(m => m.group === g.name).length}
								</span>
							</a>
						</li>
					))}
				</ul>
			</nav>
			{groups.map((g, gi) => (
				<section
					key={g.name}
					id={slugify(g.name)}
					className={
						gi % 2 ? 'scroll-mt-40 bg-white py-20' : 'scroll-mt-40 py-20'
					}
				>
					<div className='mx-auto max-w-7xl px-4'>
						<SectionTitle title={g.name} text={g.text} />
						<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
							{ministries
								.filter(m => m.group === g.name)
								.map(m => (
									<MinistryCard key={m.slug} m={m} />
								))}
						</div>
					</div>
				</section>
			))}
		</>
	);
}
