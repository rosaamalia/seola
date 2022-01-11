import React,{createContext, useState, useEffect} from "react"

const initialModul = []

export const ModulContext = createContext(initialModul)


function Textual(props) {
    const [modultext, setModultext] = useState('')
    const [error, setError] = useState(null)  

    useEffect (() => {
        async function ModulText() {
            try{
                const response = await fetch("url backend modul text");
                if(response.ok){
                    const json = await response.json();
                    const data = json.items;
                    setModultext(data)
                }else {
                    throw response
                }
            }catch(e){
                setError(e)

            }
        }
        ModulText()
    },[])

    const value = {
        modultext : modultext
    }
    return <ModulContext.Provider value={value}>
        {props.children}
    </ModulContext.Provider>
    
}

export default Textual;