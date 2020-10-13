import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AboutCompany from './about_your_company';
import LookingWork from './looking_to_work';
import ServiceInterest from './service_interest';
import ScheduleCall from './schedule_call';


const useStyles = makeStyles((theme) => ({
    papers: {
        marginTop: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    roots: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        width: '100%'
    },
}));

export default function ContactForm() {
    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper);
    return (
        <Container component="main" maxWidth="sm" style={{ backgroundColor: "#00ffff17" }}>
            <CssBaseline />
            <div className={classes.papers}>

                <div className="heading">
                    <div className="icon"><img src="image/download.svg" alt="" />
                    </div>
                    <h3 className="title1"> Get in touch to discuss your project, request a quote or even just to pick our brains.</h3>
                </div>
            </div>
            <div className={classes.roots}>

                <form className={classes.form}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div className="tittle"> 1. Tell us about your company</div>
                        </Grid>
                        <AboutCompany />
                        <Grid item xs={12}>
                            <div className="tittle"> 2. What are you looking to work on?</div>
                        </Grid>
                        <LookingWork />
                        <Grid item xs={12}>
                            <div className="tittle">3. What services are you interested in?</div>
                        </Grid>
                        <ServiceInterest />
                        <Grid item xs={12}>
                            <div className="tittle"> 4. Schedule a call with our tech expert. Get a detailed tech consultation for free!</div>
                        </Grid>
                        <ScheduleCall />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <button
                            type="submit"
                            className="btn-submit-form"
                        >
                            Submit
          </button>
                    </Grid>
                </form>
            </div>

        </Container>
    );
}