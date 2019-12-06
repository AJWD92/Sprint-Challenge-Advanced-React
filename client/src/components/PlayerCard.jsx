import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import purple from '@material-ui/core/colors/purple'

const primaryColor = purple[A400]

const useStyles = makeStyles({
    card: {
        width: '60%',
        background: primaryColor,
        boxShadow: '5 8 5 #000',
    },

    content: {
        color: '#fff',
    },
});

const PlayerCard = props => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.content} component='h1'>{props.player.name}</Typography>
                <Typography className={classes.content} component='h2'>{props.player.country}</Typography>
                <Typography className={classes.content} component='p'>{props.player.searches}</Typography>
            </CardContent>
        </Card>
    )
}

export default PlayerCard;