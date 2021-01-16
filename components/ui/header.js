import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'

function Header(props) {
    return (
        <>
            <Head>
                <title>Compilado; - Seu blog sobre programação</title>
                <meta name="description" content="Blog criado para falar sobre tudo de programação"/> 
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"></link>
            </Head>
            <AppBar position="fixed" style={{backgroundColor:"white", color:"black"}}>
                <Toolbar>
                    <Typography>Compilado;</Typography>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </>
    )
}

export default Header