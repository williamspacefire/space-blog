import React from 'react'
import classes from "../components/style/post.module.css"
import { H2, P, Image } from '../components/ui/htmltoreact'

const { Container, Typography, Box, Chip, Avatar } = require("@material-ui/core");
const { default: Copyright } = require("../components/ui/copiryght");
const { default: Header } = require("../components/ui/header");
//const remarkHtml = require('remark-html')
const remark = require('remark') 
const remarkParse = require('remark-parse')
const unified = require('unified')
const highlightJs = require('rehype-highlight')
const rehypeReact = require("rehype-react")
const remarkRehype = require("remark-rehype")
const rehypeStringify = require("rehype-stringify")

async function markdownToHtml(content) {
    const html = await unified()
    .use(remarkParse)
    .use(highlightJs)
    //.use(remarkHtml)
    .use(remarkReact)
    .processSync(content).result
    
    return html
}

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
        html

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
        content } = JSON.parse(props.post)
        html = props.html

        tag = tag.split(",")
        console.log(html)
    }

    return (
        <>
            <Header/>
                <Box justifyContent="center" flexWrap="wrap" display="flex" className={classes.cover} style={{backgroundImage: `url(${thumbnail})`}}>
                    <Box>
                        <div className={classes.post_info}>
                            <center>
                                <div className={classes.post_tags}>
                                    {tag?.map((tag) => {
                                        return <Chip color="secondary" label={tag} className={classes.chip_tags}/>
                                    })}
                                    <Typography className={classes.post_time}>
                                        {date}
                                    </Typography>
                                </div>
                                <Typography variant="h1" className={classes.post_title}>
                                    {title}
                                </Typography>
                                <div className={classes.post_author}>
                                    <Avatar src="https://secure.gravatar.com/avatar/af334e44eb2ffe56ceeb9a3047f4963b?s=35&d=mm&r=g"/>
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
    //const html = await markdownToHtml(rows[0].content)

    return {
        props: {
            post: JSON.stringify(rows[0])
            //html: html
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    }
}

export default post