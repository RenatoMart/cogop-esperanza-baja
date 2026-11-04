/* eslint-disable max-len */
import Image from 'next/image';
import Link from 'next/link';
import type { Ministry } from '../data/ministries';
import Icon from './Icon';
import Reveal from './Reveal';

export function SectionTitle({
	title,
	text,
	light = false,
	center = false,
}: {
	title: string;
	text?: string;
	light?: boolean;
	center?: boolean;
}) {
	return (
		<Reveal
			className={`mb-12 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}
		>
			<h2
				className={`font-serif text-4xl leading-tight font-bold text-balance sm:text-5xl ${light ? 'text-white' : 'text-navy'}`}
			>
				{title}
			</h2>
			<span
				className={`bg-gold mt-5 block h-1 w-16 rounded ${center ? 'mx-auto' : ''}`}
			/>
			{text && (
				<p className={`mt-5 text-lg ${light ? 'text-white/80' : 'text-muted'}`}>
					{text}
				</p>
			)}
		</Reveal>
	);
}

export function PageHero({ title, text }: { title: string; text?: string }) {
	return (
		<section className='bg-hero relative overflow-hidden text-white'>
			<div className='hero-in mx-auto max-w-7xl px-4 py-20 md:py-28'>
				<h1 className='max-w-3xl font-serif text-5xl leading-tight font-bold text-balance md:text-6xl'>
					{title}
				</h1>
				{text && <p className='mt-5 max-w-2xl text-lg text-white/80'>{text}</p>}
			</div>
		</section>
	);
}

export function MinistryName({
	m,
	size = 'card',
}: {
	m: Ministry;
	size?: 'card' | 'page';
}) {
	return (
		<span
			className={`bg-navy text-gold flex size-full items-center justify-center p-4 text-center font-black tracking-wider text-balance uppercase ${
				size === 'page' ? 'text-4xl' : 'text-2xl'
			}`}
		>
			{m.short}
		</span>
	);
}

export function MinistryCard({ m }: { m: Ministry }) {
	return (
		<Reveal className='h-full'>
			<Link
				href={`/ministerios/${m.slug}`}
				className='group border-border hover:border-gold flex h-full cursor-pointer flex-col rounded-2xl border bg-white p-7 transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:shadow-xl'
			>
				<div className='mb-5 flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-slate-100'>
					{m.logo ? (
						<Image
							src={m.logo}
							alt={`Logo del ministerio: ${m.name}`}
							width={320}
							height={180}
							className='h-full w-full object-contain'
						/>
					) : (
						<MinistryName m={m} />
					)}
				</div>
				<h3 className='text-navy font-serif text-2xl leading-snug font-bold'>
					{m.name}
				</h3>
				<p className='text-muted mt-2 flex-1'>{m.tagline}</p>
				<span className='text-royal mt-5 inline-flex items-center gap-2 text-sm font-bold'>
					Conocer más
					<Icon
						name='arrow'
						className='size-4 transition-transform duration-200 ease-out group-hover:translate-x-1'
					/>
				</span>
			</Link>
		</Reveal>
	);
}

export function ButtonLink({
	href,
	children,
	variant = 'gold',
	external = false,
}: {
	href: string;
	children: React.ReactNode;
	variant?: 'gold' | 'outline' | 'navy';
	external?: boolean;
}) {
	const styles = {
		gold: 'bg-gold text-navy-deep hover:bg-white',
		outline: 'border-2 border-white/60 text-white hover:bg-white/10',
		navy: 'bg-navy text-white hover:bg-royal',
	}[variant];
	const cls = `inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full px-8 font-bold tracking-wide uppercase transition-colors duration-200 ${styles}`;
	return external ? (
		<a href={href} target='_blank' rel='noopener noreferrer' className={cls}>
			{children}
		</a>
	) : (
		<Link href={href} className={cls}>
			{children}
		</Link>
	);
}
