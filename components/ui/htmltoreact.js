import { Typography } from "@material-ui/core";
import NextImage from 'next/image'
import classes from '../style/post.module.css'

export function H2({ children }) {
    return <Typography variant="h2" className={classes.heading}>{children}</Typography>
}

export function P({ children }) {
    return <Typography variant="body1" className={classes.paragraph}>{children}</Typography>
}

export function Image(props) {
    return (
        <figure><NextImage src={props.src} quality={100} width={800} height={500} alt={props.alt} layout={"responsive"}/></figure>
    )
}