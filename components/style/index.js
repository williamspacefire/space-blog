const { makeStyles } = require("@material-ui/core/styles")

module.exports.indexStyle = makeStyles({
    header: {
        backgroundColor: '#2a3eb1',
        color: 'white',
        padding: '10px',
        margin: 0,
    },
    avatar: {
        display: "inline-flex",
        width: 60,
        height: 60
    },
    post_card: {
        margin: "5px",
        maxWidth: 450
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    headerMessage: {
        padding: "30px",
        margin: 0,
        backgroundColor: "#F44336",
        color: "white",
    }
})