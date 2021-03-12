import { Divider, Typography } from "@material-ui/core"
import ShareButton from "./button"

export default function SharePost({ title, url, twitter, classes }) {

    const socialList = [
        "twitter",
        "telegram",
        "whatsapp",
        "facebook"
    ]

    return (
        <>
            <Typography className={classes.share_text} variant="body2">Compartilhar esse artigo:</Typography>
            <Divider/>
            {socialList.map((social, index) => {
                return (
                    <ShareButton 
                        key={index} 
                        classes={classes} 
                        text={title} 
                        url={url} 
                        twitter={twitter} 
                        type={social}/>
                )
            })}
        </>
    )
}