const { makeStyles } = require("@material-ui/core");

module.exports.postStyle = makeStyles({
    cover: {
        height: "570px",
        backgroundColor: "#06f",
        color: "white",
        padding: "15px",
        backgroundColor: "rgba(0, 0, 0, 0.36)",
        backgroundPosition: "center center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "-8px"
    },
    post_title: {
        fontSize: "2.8125rem",
        fontWeight: 700
    },
    post_info: {
        maxWidth: "650px"
    }
})