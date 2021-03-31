import { Chip, Typography } from '@material-ui/core'

export default function Tags({ category, classes }) {
	return (
		<>
			<br />
			<br />
			<Typography variant='body1'>Tags:</Typography>
			{category?.map((category, index) => {
				return (
					<Chip
						key={index}
						size='small'
						color='secondary'
						label={category.toUpperCase()}
						className={classes.chip_tags}
					/>
				)
			})}
		</>
	)
}
