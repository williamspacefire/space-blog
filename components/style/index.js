const { makeStyles } = require("@material-ui/core/styles")

module.exports.indexStyle = makeStyles({
    header: {
        backgroundColor: '#2a3eb1',
        color: 'white',
        padding: '10px',
        margin: 0,
    },
    post_card: {
        margin: "5px",
        maxWidth: 450
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    featured: {
        maxWidth: "770px",
        Height: "482px",
        minHeight: 271,
        minWidth: 417,
        position: "relative",
        color: "white",
        borderRadius: "8px",
        padding: 0,
        boxShadow: "0 0px 4px 0px #a5a5a5"
    },
    featured_info: {
        padding: "32px 32px 32px",
        bottom: 0,
        position: "absolute",
        zIndex: 2,
        boxShadow: "inset 0px -22px 216px -5px #000",
        borderRadius: "0 0 8px 8px",
        backgroundColor: "rgb(0 0 0 / 40%)"
    },
    cloudtags: {
        
    },
    feature_image: {
        width: "100%",
        height: "100%",
        zIndex: 1,
        borderRadius: "8px"
    },
    features: {
        marginTop: "32px",
        marginBottom: "32px"
    },
    chip_tags: {
        margin: "5px"
    }
})