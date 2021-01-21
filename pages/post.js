import { postStyle } from "../components/style/post";

const { Container } = require("@material-ui/core");
const { default: Copyright } = require("../components/ui/copiryght");
const { default: Header } = require("../components/ui/header");

function post() {

    const classes = postStyle()

    return (
        <>
            <Header/>
            <Container>
                <div className={classes.cover}>
                    Hello world
                </div>
            </Container>
            <Copyright/>
        </>
    )
}

export default post