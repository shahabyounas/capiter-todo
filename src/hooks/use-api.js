import { useEffect, useState } from 'react';
import { instance as api } from '../api-instance';


const useApi = (path, options = {}) => {

    const { defaultValue, dependencies = [], params } = options;
    const [error, setErrors] = useState('');

    const [data, setData] = useState(defaultValue);
    const baseUrl = process.env.REACT_APP_API_URL;


    useEffect(() => {

        const fetchData = async () => {
            try {

                const response = await api.get(`${baseUrl}/${path}`, { params });
                setData(response.data.data);
                return response;

            } catch (error) {
                setErrors(error);
            }
        }
        
        fetchData();


    }, [...dependencies])


    return [data, { error  }]
}

export default useApi;