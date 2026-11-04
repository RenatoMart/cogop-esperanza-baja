/* eslint-disable max-len */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { site } from '../data/site';

export default function Header() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	const isActive = (href: string) =>
		href === '/' ? pathname === '/' : pathname.startsWith(href);

	return (
		<header className='bg-navy-deep sticky top-0 z-50 border-b border-white/10 text-white'>
			<div className='bg-royal/40 hidden border-b border-white/10 text-xs lg:block'>
				<div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-white/85'>
					<span>{site.address}</span>
					<span className='text-gold font-bold tracking-widest uppercase'>
						Desde {site.since} · Casa de Gracia
					</span>
				</div>
			</div>
			<div className='mx-auto flex h-20 max-w-7xl items-center justify-between px-4'>
				<Link
					href='/'
					className='flex items-center gap-3'
					onClick={() => setOpen(false)}
				>
					<Image
						src='/images/logo-casa-de-gracia.png'
						alt='Emblema IDP Esperanza Baja, Casa de Gracia'
						width={56}
						height={52}
						priority
						className='h-14 w-auto'
					/>
					<span className='leading-tight'>
						<span className='text-gold block text-xs font-bold tracking-widest uppercase'>
							Iglesia de Dios de la Profecía
						</span>
						<span className='font-script block text-2xl'>Casa de Gracia</span>
					</span>
				</Link>

				<nav
					aria-label='Principal'
					className='hidden items-center gap-1 lg:flex'
				>
					{site.nav.map(item => (
						<Link
							key={item.href}
							href={item.href}
							aria-current={isActive(item.href) ? 'page' : undefined}
							className={`rounded-full px-4 py-2 text-sm font-bold tracking-wide uppercase transition-colors duration-200 ${
								isActive(item.href)
									? 'bg-gold text-navy-deep'
									: 'text-white/85 hover:bg-white/10 hover:text-white'
							}`}
						>
							{item.label}
						</Link>
					))}
				</nav>

				<button
					type='button'
					aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
					aria-expanded={open}
					aria-controls='menu-movil'
					onClick={() => setOpen(v => !v)}
					className='flex size-11 cursor-pointer items-center justify-center rounded-lg lg:hidden'
				>
					<svg
						width='26'
						height='26'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						aria-hidden='true'
					>
						{open ? (
							<path d='M6 6l12 12M18 6L6 18' />
						) : (
							<path d='M4 7h16M4 12h16M4 17h16' />
						)}
					</svg>
				</button>
			</div>

			{open && (
				<nav
					id='menu-movil'
					aria-label='Principal móvil'
					className='bg-navy-deep border-t border-white/10 px-4 py-3 lg:hidden'
				>
					{site.nav.map(item => (
						<Link
							key={item.href}
							href={item.href}
							onClick={() => setOpen(false)}
							aria-current={isActive(item.href) ? 'page' : undefined}
							className={`block rounded-lg p-3 text-base font-bold tracking-wide uppercase ${
								isActive(item.href) ? 'text-gold' : 'text-white/90'
							}`}
						>
							{item.label}
						</Link>
					))}
				</nav>
			)}
		</header>
	);
}
