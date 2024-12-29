

import React, { Fragment } from 'react';


import { Dialog, Grid, } from '@mui/material'

const LocationMap = ({ maxWidth, button, buttonClass }) => {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }


    return (
        <Fragment>
            <button
                className={`btn ${buttonClass}`}
                onClick={handleClickOpen}>
                {button}
                See Location
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <button onClick={handleClose} className='event-close-btn'>
                    <i className='fa fa-close'></i>
                </button>
                <Grid className="modalBody modal-body">
                    <Grid className="modalBody modal-body">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4469.002831678744!2d120.96364047564961!3d14.614117576744473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b5f5157b8ba7%3A0x46f8e0bb5f9ae84e!2sKingdom%20Hall%20of%20Jehovah&#39;s%20Witnesses!5e1!3m2!1sen!2sph!4v1735352817456!5m2!1sen!2sph"></iframe>
                    </Grid>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default LocationMap


