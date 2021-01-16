import { Paper, Typography } from "@material-ui/core"
import { indexStyle } from "../components/style/index"
import Header from "../components/ui/header"

function index() {

    const classes = indexStyle()

    return (
        <>
            <Header/>
            <Paper className={classes.header}>
                <Typography component="h1">Hello World</Typography>
            </Paper>
        </>
    )
}

export default index