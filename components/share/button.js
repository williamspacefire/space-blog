import { Fab } from "@material-ui/core"
import { Facebook, Telegram, Twitter, WhatsApp } from "@material-ui/icons"

export default function ShareButton({ text, url, twitter, classes, type }) {
    const social = {
        twitter: {
            title: "Twitter",
            url: `https://twitter.com/intent/tweet?via=${twitter}&text=${text}&url=${url}`,
            icon: <Twitter/>
        },
        whatsapp: {
            title: "WhatsApp",
            url: `https://api.whatsapp.com/send?text=${text} por ${twitter} - ${url}`,
            icon: <WhatsApp/>
        },
        facebook: {
            title: "Facebook",
            url: `https://www.facebook.com/sharer.php?u=${url}&t=${text}&locale=pt_BR`,
            icon: <Facebook/>
        },
        telegram: {
            title: "Telegram",
            url: `https://telegram.me/share/url?url=${url}&text=${text}`,
            icon: <Telegram/>
        }
    }

    return (
        <Fab 
            size="medium" 
            className={classes.button_share} 
            href={social[type].url} 
            rel="noopener noreferrer" 
            target="_blank" 
            color="primary">
                {social[type].icon}
        </Fab>
    )
}