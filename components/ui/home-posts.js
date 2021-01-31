import { Card, Chip, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Typography, Paper, Link } from "@material-ui/core";
import { Favorite, Share } from "@material-ui/icons"
import classes from '../style/index.module.css'
import LinkNext from 'next/link'

function HomePosts({ posts }) {

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xl justify="center" style={{width: "100%",padding: "20px"}}>
                    <LinkNext href={posts[0].permalink} passHref>
                        <Link>
                            <div className={classes.featured} style={{backgroundImage: `url('${posts[0].thumbnail}')`}}>
                                <div className={classes.featured_info}>
                                    <div className={classes.cloudtags}>
                                        {
                                            posts[0].category.split(',').map((category) => {
                                                return <Chip color="secondary" label={category.toUpperCase()} className={classes.chip_tags}/>
                                            })
                                        }
                                    </div>
                                    <Typography variant="h1" className={classes.post_title}>
                                        {posts[0].title}
                                    </Typography>
                                </div>
                            </div>
                        </Link>
                    </LinkNext>
                </Grid>
            </Grid>                    
            <Grid container justify="flex-start">
                <Grid container sm>
                    {
                        posts.map((post, index) => {
                            if (index != 0) return (
                                <>
                                    <Grid item>
                                        <Card className={classes.post_card}>
                                            <CardMedia 
                                                className={classes.media}
                                                image={post.thumbnail}
                                                title={post.title} />
                                            <CardContent>
                                                <Typography variant="h2" className={classes.posts_title}>
                                                    <LinkNext href={post.permalink} passHref>
                                                        <Link>
                                                            {post.title}
                                                        </Link>
                                                    </LinkNext>
                                                </Typography>
                                                <Typography>
                                                    {post.description}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <IconButton aria-label={`Favoritar postagem ${post.title}`}>
                                                    <Favorite/>
                                                </IconButton>
                                                <IconButton aria-label={`Compoartilhar postagem ${post.title}`}>
                                                    <Share/>
                                                </IconButton>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </>
                            )
                        })
                    }
                </Grid>
                <Grid item>
                    <Paper style={{padding: "10px"}}>
                    <Typography variant="h5">Nuvem de tags</Typography>
                    <Chip size="small" color="secondary" label="AUTOMAÇÃO" className={classes.chip_tags}/>
                                    <Chip size="small" color="secondary" label="SSL" className={classes.chip_tags}/>
                                    <Chip size="small" color="secondary" label="TUTORIAL" className={classes.chip_tags}/>
                                    <Chip size="small" color="secondary" label="DISCORD" className={classes.chip_tags}/>
                                    <Chip size="small" color="secondary" label="BOT" className={classes.chip_tags}/>
                     
                    </Paper>           
                </Grid>
            </Grid>
        </>
    )
}

export default HomePosts