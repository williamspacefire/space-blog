import  { Chip, Container, Grid, Typography }       from "@material-ui/core"
import  { indexStyle }                      from "../components/style/index"
import  Header                              from "../components/ui/header"
import  Image                               from 'next/image'
import HomePosts from "../components/ui/home-posts"

function index() {

    const classes = indexStyle()

    return (
        <>
            <Header/>
                <Container className={classes.features}>
                    <Grid container xl justify="center" spacing={2}>
                        <Grid item>
                            <div className={classes.featured}>
                                <Image className={classes.feature_image} src="/12.jpg" width={770} height={482} priority={true}/>
                                <div className={classes.featured_info}>
                                    <div className={classes.cloudtags}>
                                        <Chip size="small" color="secondary" label="AUTOMAÇÃO" className={classes.chip_tags}/>
                                        <Chip size="small" color="secondary" label="SSL" className={classes.chip_tags}/>
                                        <Chip size="small" color="secondary" label="TUTORIAL" className={classes.chip_tags}/>
                                        <Chip size="small" color="secondary" label="DISCORD" className={classes.chip_tags}/>
                                        <Chip size="small" color="secondary" label="BOT" className={classes.chip_tags}/>
                                    </div>
                                    <Typography variant="h4">
                                        Criando um Bot para o Discord com Node.js – Parte 1
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>                    
                </Container>
            <HomePosts/>
        </>
    )
}

export default index