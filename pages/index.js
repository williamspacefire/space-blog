import Copyright from "../components/ui/copiryght"
import Header from "../components/ui/header"
import HomePosts from "../components/ui/home-posts"

function index(props) {
    
    const posts = JSON.parse(props.posts)
    console.log(posts)

    return (
        <>
            <Header>
                <title>Compilado; - Programação, Open Source e muito código</title>
                <meta name="description" content="A missão do Blog Compilado é lhe passar conhecimentos importantes sobre o mundo da programação com artigos completos e explicativos." />
                <meta name="keywords" content="programação,tecnologia,open source,tutorial,code,javascript,nodejs,node,npm,security,compilado,blog,machine learning,aprendizado de máquina,inteligêngia artificial,ia,ai,ml,discord,bot,discord.js" />
                <link rel="canonical" href="https://compilado.xyz" />
                <meta property="og:site_name" content="Compilado" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Compilado; - Programação, Open Source e muito código" />
                <meta property="og:description" content="A missão do Blog Compilado é lhe passar conhecimentos importantes sobre o mundo da programação com artigos completos e explicativos." />
                <meta property="og:url" content="https://compilado.xyz/" />
                <meta property="og:image" content="https://res.cloudinary.com/williamspacefire/image/upload/v1611871360/compilado/discord_bot_lnnyyy.jpg" />
                <meta property="og:image:secure_url" content="https://res.cloudinary.com/williamspacefire/image/upload/v1611871360/compilado/discord_bot_lnnyyy.jpg" />
                <meta property="article:section" content="Bot" />
                <meta property="article:tag" content="tutorial" />
                <meta property="article:tag" content="discord" />
                <meta property="article:tag" content="bot" />
                <meta property="article:tag" content="meycup" />
                <meta property="article:tag" content="discord.js" />
                <meta property="article:tag" content="programação" />
                <meta property="article:tag" content="tecnologia" />
                <meta property="article:tag" content="open source" />
                <meta property="article:tag" content="code" />
                <meta property="article:tag" content="javascript" />
                <meta property="article:tag" content="nodejs" />
                <meta property="article:tag" content="node" />
                <meta property="article:tag" content="npm" />
                <meta property="article:tag" content="security" />
                <meta property="article:tag" content="blog" />
                <meta property="article:tag" content="machien learning" />
                <meta property="article:tag" content="aprendizado de máquina" />
                <meta property="article:tag" content="inteligêngia artificial" />
                <meta property="article:tag" content="ia" />
                <meta property="article:tag" content="ai" />
                <meta property="article:tag" content="ml" />
                <meta property="article:tag" content="automatização" />
                <meta property="article:tag" content="shell" />
                <meta property="article:published_time" content="2021-01-01T03:00:00Z" />
                <meta property="article:modified_time" content="2021-01-01T12:54:24Z" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:site" content="@wiliamspacefire" />
                <meta property="twitter:domain" content="compilado.xyz" />
                <meta property="twitter:title" content="Compilado; - Programação, Open Source e muito código" />
                <meta property="twitter:description" content="A missão do Blog Compilado é lhe passar conhecimentos importantes sobre o mundo da programação com artigos completos e explicativos." />
                <meta property="twitter:image" content="https://res.cloudinary.com/williamspacefire/image/upload/v1611871360/compilado/discord_bot_lnnyyy.jpg" />
            </Header>
            <HomePosts posts={posts} />
            <Copyright/>
        </>
    )
}

export async function getStaticProps() {
    const mysql2 = require("mysql2/promise")
    
    const connection = await mysql2.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB
    })
    
    const [rows] = await connection.query("SELECT * FROM posts WHERE status = 'publish' ORDER BY id DESC LIMIT 5")
    
    const minute = 60
    const hour = minute*60
    const day = hour*24
    const week = 7*day
    
    console.log(rows)
    
    return {
        props: {
            posts: JSON.stringify(rows)
        },
        revalidate: day
    }
}

export default index