import { Card, Chip, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Typography, Paper } from "@material-ui/core";
import { Favorite, Share } from "@material-ui/icons"
import classes from '../style/index.module.css'
import Link from 'next/link'

function HomePosts() {

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xl justify="center" style={{width: "100%",padding: "20px"}}>
                    <div className={classes.featured}>
                        
                        <div className={classes.featured_info}>
                            <div className={classes.cloudtags}>
                                <Chip color="secondary" label="AUTOMAÇÃO" className={classes.chip_tags}/>
                                <Chip color="secondary" label="SSL" className={classes.chip_tags}/>
                                <Chip color="secondary" label="TUTORIAL" className={classes.chip_tags}/>
                                <Chip color="secondary" label="DISCORD" className={classes.chip_tags}/>
                                <Chip color="secondary" label="BOT" className={classes.chip_tags}/>
                            </div>
                            <Typography variant="h1" className={classes.post_title}>
                                Criando um Bot para o Discord com Node.js – Parte 1
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>                    
            <Grid container justify="flex-start">
                <Grid container sm>
                    <Grid item>
                        <Card className={classes.post_card}>
                            <CardMedia 
                                className={classes.media}
                                image="https://i0.wp.com/blog.meycup.com/wp-content/uploads/2020/09/12.jpg?resize=770%2C480&ssl="
                                title="Criando um Bot para o Discord com Node.js – Parte 1" />
                            <CardContent>
                                <Link href="/criando-um-bot-para-o-discord-com-node-js-parte-1">
                                    <Typography variant="h5">
                                        Criando um Bot para o Discord com Node.js – Parte 1
                                    </Typography>
                                </Link>
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
                <Grid item>
                    <Paper style={{padding: "10px"}}>
                    <Typography variant="h5">Nuvem de tags</Typography>
                    <Chip size="small" color="secondary" label="AUTOMAÇÃO" className={classes.chip_tags}/>
                                    <Chip size="small" color="secondary" label="SSL" className={classes.chip_tags}/>
                                    <Chip size="small" color="secondary" label="TUTORIAL" className={classes.chip_tags}/>
                                    <Chip size="small" color="secondary" label="DISCORD" className={classes.chip_tags}/>
                                    <Chip size="small" color="secondary" label="BOT" className={classes.chip_tags}/>
                     
                    </Paper>           
                </Grid>
            </Grid>
        </>
    )
}

export default HomePosts