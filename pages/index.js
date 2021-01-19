import  { Avatar, Container, Grid, Paper, Typography }       from "@material-ui/core"
import  { indexStyle }                      from "../components/style/index"
import  Header                              from "../components/ui/header"
import  Image                               from 'next/image'
import HomePosts from "../components/ui/home-posts"

function index() {

    const classes = indexStyle()

    return (
        <>
            <Header/>
            <Paper className={classes.headerMessage}>
                <Grid container direction="row" justify="flex-start" spacing={2}>
                    <Grid item>
                        <Image src="/certificado-ssl-800x400-1.png" width={400} height={250}/>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="overline">
                            Post em destaque
                        </Typography>
                        <Typography variant="h4">
                          Certificado SSL Gratuito com Let’s Encrypt/Certbot
                        </Typography>
                        <Typography>
                            Desde que foi anunciado que os principais navegadores da Web iriam mostrar páginas usando protocolo HTTP como inseguras, começou uma corrida para implementar certificados SSL nos sites. Se você tem um site que é acessado pelo protocolo HTTP, será mostrada uma mensagem de site inseguro aos seus usuários...
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <HomePosts/>
        </>
    )
}

export default index