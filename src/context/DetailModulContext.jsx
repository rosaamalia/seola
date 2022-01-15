import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from '../services/api';

export const DetailModulContext = createContext();

export const DetailModulProvider = props => {
    const [modul, setModul] = useState([]);

    useEffect(() => {
        api.get('/modul/progres')
        .then((res) => {
            setModul(res.data);
        })
        .catch((err) => {
            console.log(err)
            toast.error(err)
        })
    }, [])

    return (
        <DetailModulContext.Provider value={{ modul, setModul }}>
            {props.children}
        </DetailModulContext.Provider>
    )
}