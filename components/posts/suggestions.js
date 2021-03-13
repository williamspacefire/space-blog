import { Divider, Grid, Paper, Typography } from "@material-ui/core";
import Img from 'next/image'
import { formatCloudinaryUrl } from "../utils";
import Link from 'next/link'

export function PostsSugestions({ classes, related }) {
    return (
        <>
            <Typography className={classes.suggestion_title} variant="h5">Posts ralacionados</Typography>
            <Divider/>
            <Grid container justify="center" spacing={2}>
                {related.map((post, index) => {
                        return (
                            <Grid item key={index} justify="left">
                                <Suggestion post={post}/>
                            </Grid>
                        )
                })}
            </Grid>
        </>
    )
}

export function Suggestion({ post }) {
    return (
        <>
            <Paper style={{width: "237px", padding: "5px", height: "250px"}}>
                <Img src={formatCloudinaryUrl(post.thumbnail)} width={237} height={118}/>
                <Link href={`${post.permalink}`} passHref>
                    <Typography variant="h6" component="a">{post.title}</Typography>
                </Link>
            </Paper>
        </>
    )
}