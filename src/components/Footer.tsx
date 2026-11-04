/* eslint-disable max-len */
import Image from 'next/image';
import Link from 'next/link';
import { ministries } from '../data/ministries';
import { site } from '../data/site';

export default function Footer() {
	return (
		<footer className='bg-navy-deep text-white/80'>
			<div className='mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4'>
				<div className='md:col-span-2'>
					<Image
						src='/images/logo-casa-de-gracia.png'
						alt='Emblema Casa de Gracia'
						width={96}
						height={90}
						className='h-20 w-auto'
					/>
					<p className='font-script mt-4 text-4xl text-white'>Casa de Gracia</p>
					<p className='text-gold text-sm font-bold tracking-widest uppercase'>
						Iglesia de Dios de la Profecía · Esperanza Baja
					</p>
					<p className='mt-4 max-w-md'>
						Desde {site.since} alcanzando y discipulando vidas en La Esperanza,
						Trujillo.
					</p>
				</div>
				<div>
					<h2 className='text-gold mb-3 text-sm font-bold tracking-widest uppercase'>
						Explora
					</h2>
					<ul className='space-y-2'>
						{site.nav.map(n => (
							<li key={n.href}>
								<Link href={n.href} className='hover:text-white'>
									{n.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className='text-gold mb-3 text-sm font-bold tracking-widest uppercase'>
						Ministerios
					</h2>
					<ul className='space-y-2'>
						{ministries.slice(0, 6).map(m => (
							<li key={m.slug}>
								<Link
									href={`/ministerios/${m.slug}`}
									className='hover:text-white'
								>
									{m.name}
								</Link>
							</li>
						))}
						<li>
							<Link href='/ministerios' className='text-gold font-bold'>
								Ver todos →
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='border-t border-white/10 py-5'>
				<div className='mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 text-sm'>
					<p>{site.address}</p>
					<p>
						© {new Date().getFullYear()} IDP Esperanza Baja. Todos los derechos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
