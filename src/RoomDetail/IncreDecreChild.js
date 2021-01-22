import React from 'react';
import {useState} from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { Box, SvgIcon} from '@material-ui/core';


const IncrementDecrementBox = ({member, setMember, roomInfo}) => {

    const [value, setValue] = useState(member);

    const setIncrementValue = () => {
        setValue(value < Math.round((roomInfo.SoNguoiToiDa)/2) ? value + 1 : Math.round((roomInfo.SoNguoiToiDa)/2));
    }

    const setDecrementValue = () => {
        setValue(value > 0 ? value - 1 : 0);
    }
    setMember(value)
    return(
        <Grid container item xs={12} style={{ minWidth:"100px" }}>
                <SvgIcon style={{width: "20px"}} viewBox="0 0 200 200" fill="none" onClick={setDecrementValue} >
                    <path d="M94.5 0C42.3969 0 0 42.3895 0 94.5C0 146.61 42.3969 189 94.5 189C146.61 189 189 146.61 189 94.5C189 42.3895 146.603 0 94.5 0ZM94.5 174.36C50.4634 174.36 14.6397 138.537 14.6397 94.5C14.6397 50.4634 50.4634 14.6397 94.5 14.6397C138.537 14.6397 174.36 50.4634 174.36 94.5C174.36 138.537 138.537 174.36 94.5 174.36Z" fill="black"/>
                    <path d="M131.1 86.5214H57.9006C53.86 86.5214 50.5806 89.8008 50.5806 93.8414C50.5806 97.882 53.86 101.161 57.9006 101.161H131.1C135.14 101.161 138.42 97.882 138.42 93.8414C138.42 89.8008 135.14 86.5214 131.1 86.5214Z" fill="black"/>
                </SvgIcon>
            &nbsp;
            <Grid container item xs={6} justify="center">
                <Grid item xs={12}>
                    <Box style={{
                        backgroundColor: '#033A56',
                        borderRadius: 30,
                    }}>
                        <Grid container item xs={12} style={{
                            display: 'flex'
                        }} justify="center">
                            <Typography variant='body1' style={{
                                fontWeight: 'bold',
                                color: 'white'
                            }}>
                                {value}
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            &nbsp;
            <SvgIcon style={{width: "20px"}} viewBox="0 0 324 324" fill="none" onClick={setIncrementValue}>
                <path d="M162 0C72.6678 0 0 72.6678 0 162C0 251.332 72.6678 324 162 324C251.332 324 324 251.32 324 162C324 72.6804 251.332 0 162 0ZM162 298.903C86.5213 298.903 25.0967 237.491 25.0967 162C25.0967 86.5086 86.5213 25.0967 162 25.0967C237.479 25.0967 298.903 86.5086 298.903 162C298.903 237.491 237.491 298.903 162 298.903Z" fill="black"/>
                <path d="M224.742 148.322H174.549V98.129C174.549 91.2022 168.94 85.5803 162 85.5803C155.061 85.5803 149.452 91.2022 149.452 98.129V148.322H99.2581C92.3187 148.322 86.7095 153.944 86.7095 160.871C86.7095 167.798 92.3187 173.42 99.2581 173.42H149.452V223.613C149.452 230.54 155.061 236.162 162 236.162C168.94 236.162 174.549 230.54 174.549 223.613V173.42H224.742C231.682 173.42 237.291 167.798 237.291 160.871C237.291 153.944 231.682 148.322 224.742 148.322Z" fill="black"/>
            </SvgIcon>
        </Grid>
    );
}

export default IncrementDecrementBox;