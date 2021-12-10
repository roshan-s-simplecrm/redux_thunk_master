import * as actionTypes from "./actionTypes";
import { api } from "../api";

const getCreditAmountRequest = () => ({
  type: actionTypes.CREDIT_AMOUNT_REQUEST,
});

const getCreditAmountSuccess = (payload) => ({
  type: actionTypes.CREDIT_AMOUNT_SUCCESS,
  payload,
});

const getCreditAmountFailure = (error) => ({
  type: actionTypes.CREDIT_AMOUNT_FAILURE,
  error,
});

export const creditAmount = (data)=>{
    try{
        console.log("dddddddddddddata",data)
        // dispatch(getCreditAmountRequest());
        // const res = await api.get("localhost:8080/prft-bank/");
        // if(res){
        //     dispatch(getCreditAmountSuccess(res));
        //     return res;
        // }
        // dispatch(getCreditAmountFailure());
    }catch(e){
        // dispatch(getCreditAmountFailure(e));

    }
}
