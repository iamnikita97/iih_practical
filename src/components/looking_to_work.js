import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const useStyles = makeStyles((theme) => ({
    budgetWrapper: {
        border: "1px solid",
        borderColor: "#AFC1C1",
        borderRadius: "5px",
        width: "96%", marginLeft: "2%", marginRight: "2%", paddingTop: "23px", paddingLeft: "14px"
    }
}));



const marks = [
    {
        value: 10,
        label: '$10',
    },
    {
        value: 1000,
        label: '$1000',
    },
];


function valuetext(value) {
    return `${value}`;
}


export default function LookingWork() {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} >
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    multiline
                    rows={3}
                    rowsMax={5}
                    id="describe"
                    label=" Describe your project briefly "
                    name="describe"
                    autoComplete="describe"
                />
            </Grid>
            <Grid container xs={12}>
                <Grid item xs={12}>
                    <div className={classes.budgetWrapper}>
                        <div className="slider">What’s your budget?</div>
                        <Slider
                            track="inverted"
                            getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider-custom"
                            valueLabelDisplay="auto"
                            defaultValue={[150, 350]}
                            step={1}
                            marks={marks}
                            min={10}
                            max={1000}
                            style={{ width: "80%", margin: "10%" }}
                        />
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <div className="container-file-upload-row">
                    <div className="wrapper-input-file-row">
                        <label>
                            <div className="file-content">
                                <div className="icon">
                                    <img alt="Image upload icons" /></div>
                                <div className="content-label">Drag or browse your project brief</div>
                            </div>
                            <div className="row-wrap">
                                <div className="button">upload</div>
                            </div>
                        </label>
                        <input className="file-input" type="file" accept="*" />
                    </div>
                </div>
            </Grid>
        </>
    );

}