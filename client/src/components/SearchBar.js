import React, {Fragment, useEffect, useState} from "react";
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