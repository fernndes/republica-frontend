import React from 'react'
import { TextField, Button, } from '@material-ui/core';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: { main: '#2196F3' },
    },
});


export default function TextInput(props) {
    const { label, id, variant, onChange } = props; //"outlined-basic"
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <TextField
                onChange={onChange}
                id={id}
                label={label}
                className={classes.margin}
                variant={variant} />
        </ThemeProvider>
    )
}
