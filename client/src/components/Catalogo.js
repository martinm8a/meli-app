import React, { Fragment, useEffect, useState } from "react";
import axios from "axios"
import ProductCard from "./ProductCard.js";

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


const Catalogo = (props) => {
 
//>>>>>>>>>>>>>>>> Estados
    var [products, setProducts] = useState([]);
    var [orderBy, setOrderBy] = useState("")
    var [estadoProd, setEstadoProd] = useState("new")
    const busqueda = props.palabra;

 //>>>>>>>>>>>>>>>> onSubmit   
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:5001/api/search?q=${busqueda}`)
            const jsonData = response.data
            console.log(Array.isArray(jsonData));

            await setProducts(jsonData)

        } catch (err) {
            console.error("este es el error", err.message)
        }
    }


    console.log("soy el props del catalogo", props.palabra)
{    
//     var sortF = () => {    
//     }

//     orderBy = 'priceASC'

//    var prod = products.sort(sortF)

//    const ordenMen = ()=>{
//     setOrderBy ('priceASC')
// 
}

//pasando como parametros de setProducts
{
// const ordenMen = products.sort((a, b) => {
//     if (a.price < b.price) {
//         return -1
//     } 
//     if (a.price > b.price) {
//         return 1
//     }
//     return 0
// })

// const ordenMay = products.sort((a, b) => {
//         if (a.price < b.price) {
//             return 1
//         } 
//         if (a.price > b.price) {
//             return -1
//         }
//         return 0
//     })
}
//>>>>>>>>>>>>>>>>>> Ordenamiento por precios
var sortF = () => {}
    
    switch (orderBy) {
        case 'priceASC':
            sortF = (a, b) => {
                if (a.price < b.price) {
                    return -1
                }
                if (a.price > b.price) {
                    return 1
                }
                return 0
            }
            break;
        case 'priceDSC':
            sortF = (a, b) => {
                if (a.price < b.price) {
                    return 1
                }
                if (a.price > b.price) {
                    return -1
                }
                return 0
            }
            break;
        default:
            break;
    }
{
    // function esNuevo(products) {
    //     return products.condition ==="new"
    //   }
    //   function esUsado(products) {
    //     return products.condition ==="used"
    //   }

    // var condicion = (condicion, esNuevo, esUsado) => {
    //     if (condicion === "new"){
    //         return esNuevo
    //     }
    // }

    }
   //>>>>>>>>>>>>>>>>>>>>Condicion del producto
    const esNuevo =()=> item=>{return item.condition === "new"}

    const esUsado= ()=> item=>{return item.condition === "used"}

{
    // var condicion = ()=>{}  
    // switch (estadoProd) {
    //     case "new":
    //         var condicion = ()=> {item=>{return item.condition === "new"}}
                
    //         break;
    //     case "used":
    //         function(){item=>{return item.condition === "used"}}
    //         break;
    
    //     default:
    //         break;
    // }
}

    return (
        <Fragment>
            {" "}
            <div>COmoponente catalogo</div>
            <h1>{props.mascota}</h1>
            <form className="" onSubmit={onSubmitForm}>
                <button type="submit">tocame bb</button>
            </form>
                     <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        Orden por Precio 
                        <hr/>
                        <label className="btn btn-secondary" onClick={() =>{setOrderBy ('priceASC')}}>
                            <input type="radio" name="options" id="option2" autocomplete="off"/> M- a M+
                        </label>
                        <label className="btn btn-secondary" onClick={() =>{setOrderBy ('priceDSC')}}  >
                            <input type="radio" name="options" id="option3" autocomplete="off"/> M+ a M-
                        </label> 
                        
                    </div>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        Orden por Condicion
                        <hr/>
                        <label className="btn btn-secondary" onClick={() =>{setEstadoProd ("new")}}>
                            <input type="radio" name="options" id="option2" autocomplete="off"/> nuevo
                        </label>
                        <label className="btn btn-secondary" onClick={() =>{setEstadoProd ("used")}}  >
                            <input type="radio" name="options" id="option3" autocomplete="off"/> usado
                        </label> 
                        
                    </div>
                    
            <div>
                {products.sort(sortF).filter(estadoProd === "new" ? esNuevo() : esUsado()).map((item) => {
                    return (
                        <ProductCard
                            key={item.id}

                            title={item.title}
                            price={item.price}
                            currency_id={item.currency_id}
                            available_quantity={item.available_quantity}
                            thumbnail={item.thumbnail}
                            condition={item.condition}
                        />
                    );
                })}
            </div>
        </Fragment>
    )
}

export default Catalogo