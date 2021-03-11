import { Chip, Typography } from "@material-ui/core"

export default function Tags({category, classes}) {
    return (
        <>
            <Typography variant="body1">Tags:</Typography> 
            {category?.map((category) => {
                return <Chip size="small" color="secondary" label={category.toUpperCase()} className={classes.chip_tags}/>
            })}
        </>
    )
}