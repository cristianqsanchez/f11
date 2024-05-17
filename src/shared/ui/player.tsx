type PlayerProps = {
	position: string
	name?: string
	photo?: string
}

export function Player({ position, name, photo }: PlayerProps) {
	const containerMargin = photo ? 'my-3' : 'my-12'

	return (
		<div
			className={`${containerMargin} grid max-h-24 max-w-24 justify-items-center gap-2`}>
			{photo && (
				<img
					src={photo}
					alt={`Photograph of the player ${name}`}
					className='aspect-square max-h-12 rounded-full object-contain'
				/>
			)}
			{name && <span className='line-clamp-2'>{name}</span>}
			{!name && <span>{position}</span>}
		</div>
	)
}
