import { Container, Typography } from "@material-ui/core"
import Header from "./components/ui/header"

function index() {
    return (
        <>
            <Header/>
            <Container>
                <Typography component="h1">Hello World</Typography>
            </Container>
        </>
    )
}

export default index