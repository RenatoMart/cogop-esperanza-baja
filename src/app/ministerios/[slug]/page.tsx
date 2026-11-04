/* eslint-disable max-len */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '../../../components/Icon';
import Reveal from '../../../components/Reveal';
import {
	ButtonLink,
	MinistryCard,
	MinistryName,
	PageHero,
} from '../../../components/ui';
import { ministries } from '../../../data/ministries';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
	return ministries.map(m => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const m = ministries.find(x => x.slug === slug);
	return m ? { title: m.name, description: m.tagline } : {};
}

export default async function MinistryPage({ params }: Props) {
	const { slug } = await params;
	const m = ministries.find(x => x.slug === slug);
	if (!m) notFound();
	const related = ministries
		.filter(x => x.group === m.group && x.slug !== m.slug)
		.slice(0, 3);

	return (
		<>
			<PageHero title={m.name} text={m.tagline} />
			<section className='mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1.3fr_1fr]'>
				<Reveal>
					<Link
						href='/ministerios'
						className='text-royal mb-6 inline-block text-sm font-bold'
					>
						← Todos los ministerios
					</Link>
					{m.logo ? (
						<Image
							src={m.logo}
							alt={`Logo del ministerio: ${m.name}`}
							width={320}
							height={180}
							className='mb-6 h-auto w-64 rounded-2xl bg-slate-100'
						/>
					) : (
						<div className='mb-6 aspect-video w-64 overflow-hidden rounded-2xl'>
							<MinistryName m={m} />
						</div>
					)}
					<h2 className='text-navy font-serif text-4xl font-bold'>
						¿Qué hacemos?
					</h2>
					<p className='text-muted mt-4 text-lg'>{m.description}</p>
				</Reveal>
				<Reveal>
					<div className='bg-navy rounded-3xl p-8 text-white'>
						<h2 className='text-gold font-serif text-3xl font-bold'>
							Actividades
						</h2>
						<ul className='mt-5 space-y-4'>
							{m.activities.map(a => (
								<li key={a} className='flex gap-3'>
									<Icon
										name='star'
										className='text-gold mt-1 size-5 shrink-0'
									/>
									<span>{a}</span>
								</li>
							))}
						</ul>
					</div>
				</Reveal>
			</section>

			{related.length > 0 && (
				<section className='bg-white py-20'>
					<div className='mx-auto max-w-7xl px-4'>
						<h2 className='text-navy mb-8 font-serif text-3xl font-bold'>
							Otros ministerios de {m.group.toLowerCase()}
						</h2>
						<div className='grid gap-6 md:grid-cols-3'>
							{related.map(r => (
								<MinistryCard key={r.slug} m={r} />
							))}
						</div>
					</div>
				</section>
			)}
			<section className='bg-gold py-14 text-center'>
				<h2 className='text-navy-deep font-serif text-3xl font-bold'>
					¿Quieres ser parte?
				</h2>
				<p className='text-navy-deep/80 mt-2'>
					Visítanos y conversa con nuestros líderes.
				</p>
				<div className='mt-6'>
					<ButtonLink href='/ubicacion' variant='navy'>
						Cómo llegar
					</ButtonLink>
				</div>
			</section>
		</>
	);
}
