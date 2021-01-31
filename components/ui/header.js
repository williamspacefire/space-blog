import  { AppBar, IconButton, Link, Toolbar, Typography } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import  Head from 'next/head'
import  LinkNext from 'next/link'
import style from '../style/header.module.css'
import 'fontsource-roboto'

function Header({ children }) {
    return (
        <>
            <Head>
                {children}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"></link>
            </Head>
            <AppBar position="fixed" style={{backgroundColor:"white", color:"black"}}>
                <Toolbar>
                        <LinkNext href="/" passHref>
                            <Link style={{flexGrow: 1}}>
                                <Typography className={style.linkNext}>Compilado;</Typography>
                            </Link>
                        </LinkNext>
                        <IconButton aria-label="Pesquisar no blog">
                            <Search/>
                        </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </>
    )
}

export default Header