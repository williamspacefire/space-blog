import {
	Card,
	Chip,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	IconButton,
	Typography,
	Paper,
	Link,
} from '@material-ui/core'
import { Favorite, Share } from '@material-ui/icons'
import classes from '../style/index.module.css'
import LinkNext from 'next/link'

function HomePosts({ posts }) {
	return (
		<>
			<Grid container justify='flex-start'>
				<Grid container justify='center'>
					{posts.map(post => {
						return (
							<>
								<Grid item key={post.id}>
									<Card
										key={post.id}
										className={classes.post_card}
									>
										<CardMedia
											className={classes.media}
											image={post.thumbnail}
											title={post.title}
											key={post.id}
										/>
										<CardContent>
											<Typography
												variant='h2'
												className={classes.posts_title}
											>
												<LinkNext
													href={post.permalink}
													passHref
												>
													<Link>{post.title}</Link>
												</LinkNext>
											</Typography>
											<Typography>
												{post.description}
											</Typography>
										</CardContent>
										<CardActions>
											<IconButton
												aria-label={`Favoritar postagem ${post.title}`}
											>
												<Favorite />
											</IconButton>
											<IconButton
												aria-label={`Compoartilhar postagem ${post.title}`}
											>
												<Share />
											</IconButton>
										</CardActions>
									</Card>
								</Grid>
							</>
						)
					})}
				</Grid>
			</Grid>
		</>
	)
}

export default HomePosts
