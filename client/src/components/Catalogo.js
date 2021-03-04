import React, {Fragment, useEffect, useState} from "react";
import axios from "axios"
import ProductCard from "./ProductCard.js";

//PENDIENTES
// Poder ordenar los productos en base a su precio, de forma ascendete o descendente.
// Poder filtrar por condicion.
// Poder páginar los resultados de a 30 productos por página.


const Catalogo = (props)=>{

    const [products, setProducts] = useState({
        productos: [],
        newProductos: [],
        usedProductos: [],
        lowestAll: [],
        lowestNew: [],
        lowestUsed: [],
        highestNew: [],
        highestAll: [],
        highestUsed: [],
      });
    const cache = {};

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            console.log("soy el cache solito wiii", cache)
            const busqueda = props.palabra;
                console.log("soy la busqueda", busqueda)
                const response = await axios.get(`http://localhost:3001/api/search?q=${busqueda}`)
                cache[busqueda] = response.data.results

                const recursos = response.data;
                setProducts({
                    ...products,
                    productos: recursos,
                  });
                // setProducts(response.data.results)  
            
            
            
        } catch (err) {
            console.error("este es el error", err.message)
        }
    }


    console.log("soy el props del catalogo", props.palabra) 

    return(
        <Fragment>
            <div>COmoponente catalogo</div>
            <h1>{props.mascota}</h1>
            <form className=""  onSubmit={onSubmitForm}>
                <button type="submit">tocame bb</button>
            </form>
            {products && products.slice(0, 30).map((item) => {
              return (
                <ProductCard
                  title={item.title}
                  price={item.price}
                  currency_id={item.currency_id}
                  available_quantity={item.available_quantity}
                  thumbnail= {item.thumbnail}
                  condition={item.condition}
                />
              );
            })}
        </Fragment>
    )

}

export default Catalogo

// 