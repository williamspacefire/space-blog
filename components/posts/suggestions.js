import { Box, Divider, Grid, Paper, Typography } from "@material-ui/core";
import Img from 'next/image'
import { formatCloudinaryUrl } from "../utils";
import Link from 'next/link'

export function PostsSugestions({ classes, related }) {
    return (
        <>
            <Typography className={classes.suggestion_title} variant="h5">Posts ralacionados</Typography>
            <Divider/>
            <Grid container justify="center" spacing={2} style={{marginTop: "7px"}}>
                {related.map((post, index) => {
                        return (
                            <Grid item key={index}>
                                <Suggestion post={post}/>
                            </Grid>
                        )
                })}
            </Grid>
        </>
    )
}

export function Suggestion({ post, classes }) {
    return (
        <>
            <Paper style={{width: "237px", height: "250px"}}>
                <Box>
                    <Img quality={100} alt={post.title} src={formatCloudinaryUrl(post.thumbnail)} width={237} height={118}/>
                </Box>
                <Box style={{padding: "10px"}}>
                    <Link href={post.permalink} passHref>
                        <Typography variant="h6" component="a">{post.title}</Typography>
                    </Link>
                </Box>
            </Paper>
        </>
    )
}