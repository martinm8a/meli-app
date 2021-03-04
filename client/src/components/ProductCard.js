import React, {Fragment, useEffect, useState} from "react";


const ProductCard = (props)=> {

    return (
        <Fragment>
            <h1>{props.title}</h1>
            
            <p>${props.currency_id}</p>
            <h3>{props.price}</h3>
            <p>stock: {props.available_quantity}</p>
            <p>{props.condition}</p>
            <img src={props.thumbnail}></img>
            
            <hr/>

        </Fragment>
       
    )
}

export default ProductCard