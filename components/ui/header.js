import  { AppBar, IconButton, Toolbar, Typography }  from '@material-ui/core'
import { Search } from '@material-ui/icons'
import  Head                             from 'next/head'
import  Link                             from 'next/link'
import style from '../style/header.module.css'

function Header({ extraHead }) {
    return (
        <>
            <Head>
                <title>Compilado; - Seu blog sobre programação</title>
                <meta name="description" content="Blog criado para falar sobre tudo de programação"/> 
                <meta name="keywords" content="tutorial,discord,bot,meycup,discord.js,automatização,javascript,nodejs,shell,npm" />
                <link rel="canonical" href="https://compilado.xyz/" />
                <meta property="og:site_name" content="Compilado" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Criando um Bot para o Discord com Node.js – Parte 1 – MeyCup" />
                <meta property="og:description" content="Nessa série de posts vamos aprender a criar um bot para o Discord. Recentemente eu precisei de um Bot para um servidor do Discord que eu tenho, existem várias opções de Bots atualmente, opções muito boas até, mas eu estava precisando de algo personalizado, uma personalização que os outros Bots não oferecem." />
                <meta property="og:url" content="https://compilado.xyz/criando-um-bot-para-o-discord-com-node-js-parte-1/" />
                <meta property="og:image" content="https://i0.wp.com/blog.meycup.com/wp-content/uploads/2020/09/12.jpg?fit=910%2C480&#038;ssl=1" />
                <meta property="og:image:secure_url" content="https://i0.wp.com/blog.meycup.com/wp-content/uploads/2020/09/12.jpg?fit=910%2C480&#038;ssl=1" />
                <meta property="og:image:width" content="910" />
                <meta property="og:image:height" content="480" />
                <meta property="article:section" content="Bot" />
                <meta property="article:tag" content="tutorial" />
                <meta property="article:tag" content="discord" />
                <meta property="article:tag" content="bot" />
                <meta property="article:tag" content="meycup" />
                <meta property="article:tag" content="discord.js" />
                <meta property="article:tag" content="automatização" />
                <meta property="article:tag" content="javascript" />
                <meta property="article:tag" content="nodejs" />
                <meta property="article:tag" content="shell" />
                <meta property="article:tag" content="npm" />
                <meta property="article:published_time" content="2020-11-01T03:00:00Z" />
                <meta property="article:modified_time" content="2020-11-01T12:54:24Z" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:site" content="@wiliamspacefire" />
                <meta property="twitter:domain" content="blog.meycup.com" />
                <meta property="twitter:title" content="Criando um Bot para o Discord com Node.js – Parte 1 – MeyCup" />
                <meta property="twitter:description" content="Nessa série de posts vamos aprender a criar um bot para o Discord. Recentemente eu precisei de um Bot para um servidor do Discord que eu tenho, existem várias opções de Bots atualmente, opções muito boas até, mas eu estava precisando de algo personalizado, uma personalização que os outros Bots não oferecem." />
                <meta property="twitter:image" content="https://i0.wp.com/blog.meycup.com/wp-content/uploads/2020/09/screen08.jpg?fit=1024%2C465&amp;ssl=1" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"></link>
                <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@10.5.0/styles/atom-one-dark.min.css"/>
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