import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({

    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        width: '100%'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 180,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function ServiceInterest() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper);

    return (
        <>
            <Grid item xs={12} md={6} >
                <Paper className={fixedHeightPaper}>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Web or Mobile Apps
                                Development"
                    />
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} >
                <Paper className={fixedHeightPaper}>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Hire Dedicated
                                Developers"
                    />
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} >
                <Paper className={fixedHeightPaper}>
                    <FormControlLabel
                        control={<Checkbox name="checkedG" />}
                        label="AI/ML Development
                                Services"
                    />
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} >
                <Paper className={fixedHeightPaper}>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Custom Software
                                Development"
                    />
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} >
                <Paper className={fixedHeightPaper}>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Software Testing
                                and QA"
                    />
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} >
                <Paper className={fixedHeightPaper}>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="API Development &
                                Integration"
                    />
                </Paper>
            </Grid>
        </>
    );

}