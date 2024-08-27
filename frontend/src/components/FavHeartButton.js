import { HeartMinusIcon, HeartPlusIcon } from './Ui/Svg';

export default function FavHeartButton({ favorite, toggle }) {
	return (
		<div className='fav-wrapper mt-2.5'>
			<label className='cursor-pointer'>
				<input
					type='checkbox'
					checked={favorite}
					onChange={toggle}
					className='invisible absolute'
				/>
				<p className='flex gap-2 justify-center smMobile:justify-start md:gap-3'>
					{favorite ? (
						<>
							<HeartMinusIcon
								className='w-8 h-8'
								fill='#7A7A7A'
							/>
							Unfavorite
						</>
					) : (
						<>
							<HeartPlusIcon className='w-8 h-8' fill='#e073e0' />
							Favorite
						</>
					)}
				</p>
			</label>
		</div>
	);
}
