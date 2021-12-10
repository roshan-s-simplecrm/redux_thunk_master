import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useDispatch } from "react-redux";
import { creditAmount } from "../store/actions/transaction";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Credit = () => {
  const dispatch = useDispatch();
  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Item>
                  <label name="checkNumber">Check #:</label> <input type="number" name="name" />
                  <label name="checkNumber">Amount:</label><input type="number" name="name" />
                  <button onclick={() => dispatch(creditAmount(111))}>
                    Submit
                  </button>
                </Item>
            </Grid>
        </Grid>
      </Box>
  );
}

export default Credit;