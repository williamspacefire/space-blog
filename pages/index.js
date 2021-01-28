import Copyright from "../components/ui/copiryght"
import Header from "../components/ui/header"
import HomePosts from "../components/ui/home-posts"

function index() {

    return (
        <>
            <Header/>
            <HomePosts/>
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
    
    const {rows} = await connection.query("SELECT * FROM posts ORDER BY id DESC LIMIT 5")
    
    const minute = 60
    const hour = minute*60
    const day = hour*24
    const week = 7*day
    
    return {
        props: rows,
        revalidate: day
    }
}

export default index