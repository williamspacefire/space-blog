import  { Avatar, Grid, Paper, Typography }       from "@material-ui/core"
import  { indexStyle }                      from "../components/style/index"
import  Header                              from "../components/ui/header"
import  Image                               from 'next/image'
import HomePosts from "../components/ui/home-posts"

function index() {

    const classes = indexStyle()

    return (
        <>
            <Header/>
            
            <HomePosts/>
        </>
    )
}

export default index