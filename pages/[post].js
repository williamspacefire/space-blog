import classes from "../components/style/post.module.css"

const { Container, Typography, Box, Chip, Avatar } = require("@material-ui/core");
const { default: Copyright } = require("../components/ui/copiryght");
const { default: Header } = require("../components/ui/header");

function post() {

    return (
        <>
            <Header/>
                <Box justifyContent="center" flexWrap="wrap" display="flex" className={classes.cover} style={{backgroundImage: "url('/12.jpg')"}}>
                    <Box>
                        <div className={classes.post_info}>
                            <center>
                                <div className={classes.post_tags}>
                                    <Chip color="secondary" label="AUTOMAÇÃO" className={classes.chip_tags}/>
                                    <Chip color="secondary" label="SSL" className={classes.chip_tags}/>
                                    <Chip color="secondary" label="TUTORIAL" className={classes.chip_tags}/>
                                    <Chip color="secondary" label="DISCORD" className={classes.chip_tags}/>
                                    <Chip color="secondary" label="BOT" className={classes.chip_tags}/>
                                    <Typography className={classes.post_time}>
                                        3 MESES AGO
                                    </Typography>
                                </div>
                                <Typography variant="h1" className={classes.post_title}>
                                    Criando um Bot para o Discord com Node.js – Parte 1
                                </Typography>
                                <div className={classes.post_author}>
                                    <Avatar src="https://secure.gravatar.com/avatar/af334e44eb2ffe56ceeb9a3047f4963b?s=35&d=mm&r=g"/>
                                    <Typography>
                                        William Spacefire
                                    </Typography>
                                </div>
                            </center>
                        </div>
                    </Box>
                </Box>
                <Container className={classes.post_container} style={{display: "flex"}}>
                    <div className={classes.post_content}>
                    <Typography>Nessa série de posts vamos aprender a criar um bot para o Discord. Recentemente eu precisei de um Bot para um servidor do Discord que eu tenho, existem várias opções de Bots atualmente, opções muito boas até, mas eu estava precisando de algo personalizado, uma personalização que os outros Bots não oferecem.

Se você está passando pela mesma necessidade ou só quer fazer seu próprio Bot, está no lugar certo. Vamos fazer um Bot personalizado para um servidor, mas você pode adaptar o código para o seu servidor, e se você planeja adicionar ele em servidores diferentes, é possível adaptar ele para cada servidor de forma dinâmica, vamos abordar isso mais para frente.
</Typography>
<Typography variant="h3">Passo 1 – Criando o Bot:</Typography>
<Typography>Primeiro precisamos acessar o Portal de Desenvolvedor do Discord e criar uma aplicação. Para isso, Acesse: https://discord.com/developers/applications

No canto superior direito clique em New Application (Nova Aplicação)</Typography>
                    </div>
                </Container>
            <Copyright/>
        </>
    )
}

export default post