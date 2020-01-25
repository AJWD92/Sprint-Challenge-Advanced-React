import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const primaryColor = '#dd33fa'

const useStyles = makeStyles({
    card: {
        width: '60%',
        background: primaryColor,
        boxShadow: '5 8 5 #000',
        margin: '1% auto'
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
                <Typography className={classes.content} data-testid='player-name' component='h1'>Player Name: {props.player.name}</Typography>
                <Typography className={classes.content} data-testid='player-country' component='h2'>Player Country: {props.player.country}</Typography>
                <Typography className={classes.content} component='p'>Searches: {props.player.searches}</Typography>
            </CardContent>
        </Card>
    )
}

export default PlayerCard;