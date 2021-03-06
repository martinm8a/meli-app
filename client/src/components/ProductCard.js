import React, {Fragment, useEffect, useState} from "react";


const ProductCard = (props)=> {

    return (
        <Fragment >
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


{/* <div className="App">
            <form className="" onSubmit={onSubmitForm}>
                 <button type="submit">tocame bb</button>
             </form>
            {products.map((item) => {
                 <BootstrapTable
                 key={item.id}
                 title={item.title}
                 price={item.price}
                 currency_id={item.currency_id}
                 available_quantity={item.available_quantity}
                 thumbnail={item.thumbnail}
                 condition={item.condition}
                 columns={columns}
                 pagination={paginationFactory()}
             />
            })}
       
        </div> */}
{/* <BootstrapTable
                
                title={props.title}
                price={props.price}
                currency_id={props.currency_id}
                available_quantity={props.available_quantity}
                thumbnail={props.thumbnail}
                condition={props.condition}
                
                pagination={paginationFactory()}
            /> */}