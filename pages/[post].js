import React from 'react'
import classes from "../components/style/post.module.css"
import { H2, P, Image } from '../components/ui/htmltoreact'
import Img from 'next/image'

const { Container, Typography, Box, Chip, Avatar } = require("@material-ui/core");
const { default: Copyright } = require("../components/ui/copiryght");
const { default: Header } = require("../components/ui/header");
const remarkParse = require('remark-parse')
const unified = require('unified')
const highlightJs = require('rehype-highlight')
const rehypeReact = require("rehype-react")
const remarkRehype = require("remark-rehype")
const rehypeStringify = require("rehype-stringify")

function post(props) {

    var id,
        title,
        date,
        status,
        permalink,
        author,
        thumbnail,
        tag,
        category,
        content,
        description,
        modified_at,
        twitter,
        thumbnail_width,
        thumbnail_height

    if (props.post) {
        var { id,
        title,
        date,
        status,
        permalink,
        author,
        thumbnail,
        tag,
        category,
        content,
        description,
        modified_at,
        twitter,
        thumbnail_width,
        thumbnail_height } = JSON.parse(props.post)
        
        tag = tag.split(",")
        date = new Date(date)
    }

    return (
        <>
            <Header>
                <title>{`${title} - Compilado;`}</title>
                <meta name="description" content={description}/> 
                <meta name="keywords" content={tag.toString()} />
                <link rel="canonical" href={`https://compilado.xyz${permalink}`} />
                <meta property="og:site_name" content="Compilado;" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`${title} - Compilado;`} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={`https://compilado.xyz${permalink}`} />
                <meta property="og:image" content={thumbnail} />
                <meta property="og:image:secure_url" content={thumbnail} />
                <meta property="og:image:width" content={thumbnail_width} />
                <meta property="og:image:height" content={thumbnail_height} />
                {tag.map((text) => {
                    return <meta property="article:tag" content={text} />
                })}
                <meta property="article:published_time" content={date.toISOString()} />
                <meta property="article:modified_time" content={modified_at} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:site" content={`@${twitter}`} />
                <meta property="twitter:domain" content="compilado.xyz" />
                <meta property="twitter:title" content={`${title} - Compilado;`} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={thumbnail} />
                <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@10.5.0/styles/atom-one-dark.min.css"/>
            </Header>
            <Box justifyContent="center" flexWrap="wrap" display="flex" className={classes.cover} style={{backgroundImage: `url(${thumbnail})`}}>
                <Box>
                    <div className={classes.post_info}>
                        <center>
                            <div className={classes.post_tags}>
                                {tag?.map((tag) => {
                                    return <Chip color="secondary" label={tag.toUpperCase()} className={classes.chip_tags}/>
                                })}
                                <Typography className={classes.post_time}>
                                    {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ás ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}
                                </Typography>
                            </div>
                            <Typography variant="h1" className={classes.post_title}>
                                {title}
                            </Typography>
                            <div className={classes.post_author}>
                                {
                                    <Avatar><Img alt={author} src="/v1612101129/avatar/williamspacefire_xuhvy6.jpg" width={40} height={40}/></Avatar>
                                }
                                <Typography>
                                    {author}
                                </Typography>
                            </div>
                        </center>
                    </div>
                </Box>
            </Box>
            <Container className={classes.post_container} style={{display: "flex"}}>
            {(content) ? (
                <div className={classes.post_content}>
                    {
                        unified()
                        .use(remarkParse,{sanitize: false})
                        .use(remarkRehype, {}, {sanitize: false})
                        .use(highlightJs,{sanitize: false})
                        .use(rehypeStringify, {sanitize: false})
                        .use(rehypeReact, {
                            createElement: React.createElement,
                            components: {
                                p: P,
                                h2: H2,
                                img: Image
                            }
                        })
                        .processSync(content).result
                    }
                </div>
                ) : ("")}
            </Container>
            <Copyright/>
        </>
    )
}

export async function getStaticProps({ params }) {
    const { post } = params
    const mysql = require('mysql2/promise')
    
    const connection = await mysql.createConnection({
        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB
    });

    const [rows] = await connection.query(`SELECT * FROM posts WHERE permalink = ? LIMIT 1`, [`/${post}`])

    if (!rows[0]) return {notFound: true}

    return {
        props: {
            post: JSON.stringify(rows[0])
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: ['/criando-um-bot-para-o-discord-com-node-js-parte-1'],
        fallback: 'blocking'
    }
}

export default post
