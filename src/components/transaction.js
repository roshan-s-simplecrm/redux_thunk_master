import * as React from 'react';
import axios from 'axios';

const baseURL = "http://localhost:8080/prft-bank/index.php";

const Transaction = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
        console.log("Response: ",response)
        setData(response.data)
        });
    }, [data]);

    return (
            <div>         
            </div>
    );
};

export default Transaction;