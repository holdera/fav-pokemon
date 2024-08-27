import { useRef } from 'react';
import { HeartPlusIcon } from './Svg';

export default function FlickButton({ favorite, toggle }) {
	const ref = useRef();
	return (
		<div className='switch-wrapper'>
			<label className='rocker rocker-small cursor-pointer'>
				<input
					type='checkbox'
					ref={ref}
					checked={favorite}
					onChange={toggle}
					className='invisible'
				/>
				<span className='switch-left'>
					{favorite ? (
						<>
							<p className='flex gap-2'>
								<HeartPlusIcon
									className='inline w-8 h-8'
									fill='#7A7A7A'
								/>
								Unfavorite
							</p>
						</>
					) : (
						<>
							<p className='flex gap-2'>
								<HeartPlusIcon
									className='inline w-8 h-8'
									fill='#e073e0'
								/>
								Favorite
							</p>
						</>
					)}
				</span>
			</label>
		</div>
	);
}
