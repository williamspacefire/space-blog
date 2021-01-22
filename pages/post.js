import { postStyle } from "../components/style/post";

const { Container, Typography, Box } = require("@material-ui/core");
const { default: Copyright } = require("../components/ui/copiryght");
const { default: Header } = require("../components/ui/header");

function post() {

    const classes = postStyle()

    return (
        <>
            <Header/>
                <Box justifyContent="center" flexWrap="wrap" display="flex" className={classes.cover} style={{backgroundImage: "url('/12.jpg')"}}>
                    <Box>
                        <div className={classes.post_info}>
                            <center>
                                <Typography>
                                    AUTOMATIZAÇÃO BOT DISCORD JAVASCRIPT NODEJS NPM SHELL TUTORIAL
                                </Typography>
                                <Typography>
                                    3 MESES AGO
                                </Typography>
                            </center>
                            <Typography variant="h1" className={classes.post_title}>
                                Criando um Bot para o Discord com Node.js – Parte 1
                            </Typography>
                        </div>
                    </Box>
                </Box>
            <Copyright/>
        </>
    )
}

export default post