export default function FlickButton({ favorite, toggle }) {
	return (
		<div class='switch-wrapper'>
			<label class='rocker rocker-small'>
				<input type='checkbox' checked={favorite} onChange={toggle} />
				<span class='switch-left'>favorite</span>
				<span class='switch-right'>unfavorite</span>
			</label>
		</div>
	);
}
