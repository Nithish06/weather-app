import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Selectcity.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



const Selectcity = ({onSearch}) => {
    const [city, setCity] = useState('');
    
   
      const onKeyDown = (event) => {
        if (event.keyCode === 13) {
          onSearch();
        }
      };
    const classes = useStyles();
    return (
        <>
            <div className="maindiv">
                
                <h1>Search your city</h1>
                <form className={classes.root} component="span"  onChange={(event) => setCity(event.target.value)} value={city} onKeyDown={onKeyDown} >
                    <TextField id="outlined-basic" label="City" variant="outlined" />
                </form>
                <div className="button">
                <Button   variant="contained" color="primary" component="span" onClick={() => onSearch(city)} >
                    Check Weather
                </Button>
                </div>
               

            </div>
        </>
    )
}

export default Selectcity
