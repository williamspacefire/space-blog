import  { indexStyle }                      from "../components/style/index"
import Copyright from "../components/ui/copiryght"
import  Header                              from "../components/ui/header"
import HomePosts from "../components/ui/home-posts"

function index() {

    const classes = indexStyle()

    return (
        <>
            <Header/>
            <HomePosts/>
            <Copyright/>
        </>
    )
}

export default index