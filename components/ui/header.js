import  { AppBar, IconButton, Toolbar, Typography }  from '@material-ui/core'
import { Search } from '@material-ui/icons'
import  Head                             from 'next/head'
import  Link                             from 'next/link'
import style from '../style/header.module.css'

function Header({ children }) {
    return (
        <>
            <Head>
                {children}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"></link>
            </Head>
            <AppBar position="fixed" style={{backgroundColor:"white", color:"black"}}>
                <Toolbar>
                        <Link href="/">
                            <Typography style={{flexGrow: 1}} className={style.link} variant="h6" component="a">Compilado;</Typography>
                        </Link>
                        <IconButton>
                            <Search/>
                        </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </>
    )
}

export default Header