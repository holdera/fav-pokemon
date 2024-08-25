import { useRef } from 'react';
export default function FlickButton({ favorite, toggle }) {
	const ref = useRef();
	return (
		<div class='switch-wrapper'>
			<label class='rocker rocker-small'>
				<input
					type='checkbox'
					ref={ref}
					checked={favorite}
					onChange={toggle}
				/>
				<span class='switch-left'>favorite</span>
				<span class='switch-right'>unfavorite</span>
			</label>
		</div>
	);
}
