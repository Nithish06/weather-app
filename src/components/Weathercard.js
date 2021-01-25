import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginTop:40,
    maxWidth: 400,
    marginLeft:40,
    marginRight:40,
    },
  media: {
    height: 200,
  },
  content:{
    marginTop:5,
  },
  contents:{
    marginTop:10,
  }
});

const Weathercard = ({dt, temp_min, temp_max, main, icon, humidity, wind_speed}) => {
    const classes = useStyles();
    const date = new Date(dt);
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            title="Card Title"
          />
          <CardContent className={classes.content}>
            <div className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {main}
            </Typography>
            </div>
            <div className={classes.contents}>
            <Typography variant="body2" component="p" >
            {date.toLocaleDateString()} - {date.toLocaleTimeString()}
            </Typography>
            </div>
            
            <div className={classes.contents}>
            <Typography variant="body2"  component="p">
            Humidity: {humidity}
            </Typography>
            </div>
            <div className={classes.contents}>
            <Typography variant="body2"  component="p">
            Min Temp: {temp_min}
            </Typography>
            </div>
            <div className={classes.contents}>
            <Typography variant="body2"  component="p">
            Max Temp: {temp_max}
            </Typography>
            </div>
            
            <div className={classes.contents}>
            <Typography variant="body2"  component="p">
            Wind speed: {wind_speed}
            </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default Weathercard
