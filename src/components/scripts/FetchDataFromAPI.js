import {useState, useEffect} from 'react';

const FetchDataFromAPI = (fetchURL) => {
    const [getData, setData] = useState([]);
    const loadData = async () => {
        //Query the API Gateway
        const resp = await fetch(fetchURL);
        let jsonData = await resp.json();
        //Assign response data to our state variable
        setData(jsonData)
    }   
    useEffect(() => {
        //Load the data from API gateway
        loadData();
    }, [] );
    return getData;  
}

export default FetchDataFromAPI;