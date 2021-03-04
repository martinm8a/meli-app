import React, {Fragment, useEffect, useState} from "react";
import axios from "axios"
import Catalogo from "./Catalogo.js"

const SearchBar = ()=> {

    const [keyword, setKeyword] = useState("");


    return (
        <Fragment>
            <h2>Search bar bb</h2>
            <form className="" >
                <input type="text" name="keyword" onChange={(e) => setKeyword (e.target.value)} value={keyword}/>
            </form>
            <Catalogo palabra={keyword} mascota="perrito" />
        </Fragment>
       
    )

}


export default SearchBar



    // const onSubmitForm = async e => {
    //     e.preventDefault();
    //     try {
    //         const busqueda = {keyword};
    //         console.log("soy la busqueda", busqueda)
    //         const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda.keyword}`)
    //         console.log("soy el response",response.data.results)
    //             await setArrayResult(response.data.results)
    //             console.log("soy arrayResult", arrayResult)
            
            
    //     } catch (err) {
    //         console.error("este es el error", err.message)
    //     }
    // }
