import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 180,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function ScheduleCall() {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12}>
                <div className="heading-row">
                    <div className="meeting">60 Min Meeting</div>
                    <div className="day">Select a Day</div>
                </div>
                <Grid item xs={12} >
                    <div className="flex-row">
                        <div className="time-zone">
                            Timezone -
                                    <select name="timezone" id="time">
                                <option value="EST">EST</option>
                                <option value="MST">MST</option>
                                <option value="PST">PST</option>
                                <option value="CST">CST</option>
                            </select>
                        </div>
                        <div className="time-slot">
                            Schedule Meeting -
                                <select name="timeSlot" id="cmeeting" className="time-slot">
                                <option value="06:00 AM - 07:00 AM">06:00 AM - 07:00 AM</option>
                                <option value="07:00 AM - 08:00 AM">07:00 AM - 08:00 AM</option>
                                <option value="08:00 AM - 09:00 AM">08:00 AM - 09:00 AM</option>
                                <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                                <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                                <option value="12:00 PM - 01:00 PM">12:00 PM - 01:00 PM</option>
                                <option value="01:00 PM - 02:00 PM">01:00 PM - 02:00 PM</option>
                                <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                                <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
                                <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                                <option value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM</option>
                                <option value="06:00 PM - 07:00 PM">06:00 PM - 07:00 PM</option>
                                <option value="07:00 PM - 08:00 PM">07:00 PM - 08:00 PM</option>
                                <option value="08:00 PM - 09:00 PM">08:00 PM - 09:00 PM</option>
                                <option value="09:00 PM - 10:00 PM">09:00 PM - 10:00 PM</option>
                                <option value="10:00 PM - 11:00 PM">10:00 PM - 11:00 PM</option>
                                <option value="11:00 PM - 12:00 AM">11:00 PM - 12:00 AM</option>
                            </select>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    );

}