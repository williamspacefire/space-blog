import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import { Favorite, Share } from "@material-ui/icons";
import { indexStyle } from "../style";

function HomePosts() {

    const classes = indexStyle()

    return (
        <>
            <Grid container>
                <Grid item>
                    <Card className={classes.post_card}>
                        
                        <CardMedia 
                            className={classes.media}
                            image="https://i0.wp.com/blog.meycup.com/wp-content/uploads/2020/09/12.jpg?resize=770%2C480&ssl="
                            title="Criando um Bot para o Discord com Node.js – Parte 1" />
                        <CardContent>
                            <Typography variant="h5">
                                Criando um Bot para o Discord com Node.js – Parte 1
                            </Typography>
                            <Typography>
                            Nessa série de posts vamos aprender a criar um bot para o Discord. Recentemente eu precisei de um Bot para um servidor do Discord que eu tenho, existem várias opções de Bots atualmente, opções muito boas até, mas eu estava precisando de algo personalizado, uma personalização que os outros Bots não oferecem.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton>
                                <Favorite/>
                            </IconButton>
                            <IconButton>
                                <Share/>
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
               
                <Grid item>
                    <Card className={classes.post_card}>
                        <CardMedia 
                            className={classes.media}
                            image="https://i0.wp.com/blog.meycup.com/wp-content/uploads/2020/07/certificado-ssl-800x400-1.png?resize=570%2C399&ssl=1"
                            title="Certificado SSL Gratuito com Let’s Encrypt/Certbot" />
                        <CardContent>
                            <Typography variant="h5">
                                Certificado SSL Gratuito com Let’s Encrypt/Certbot
                            </Typography>
                            <Typography>
                                Desde que foi anunciado que os principais navegadores da Web iriam mostrar páginas usando protocolo HTTP como inseguras, começou uma corrida para implementar certificados SSL nos sites. Se você tem um site que é acessado pelo protocolo HTTP, será mostrada uma mensagem de site inseguro aos seus usuários...
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton>
                                <Favorite/>
                            </IconButton>
                            <IconButton>
                                <Share/>
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default HomePosts