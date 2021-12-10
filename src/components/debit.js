import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const debit = () => {
    return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item>
                            <label name="checkNumber">Check #:</label> <input type="number" name="name" />
                            <label name="checkNumber">Amount:</label><input type="number" name="name" />
                            <button onclick="debit()">
                            Submit
                            </button>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
    );
};

export default debit;