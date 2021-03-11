import { Divider, Typography } from "@material-ui/core"
import ShareButton from "./button"

export default function SharePost({ title, canonical, twitter, classes }) {
    return (
        <>
            <Typography className={classes.share_text} variant="body2">Compartilhar esse artigo:</Typography>
            <Divider/>
            <ShareButton classes={classes} text={title} url={canonical} via={twitter} type="twitter"/>
            <ShareButton classes={classes} text={title} url={canonical} via={twitter} type="telegram"/>
            <ShareButton classes={classes} text={title} url={canonical} via={twitter} type="whatsapp"/>
            <ShareButton classes={classes} text={title} url={canonical} via={twitter} type="facebook"/>
        </>
    )
}