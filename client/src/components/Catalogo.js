import React, { Fragment, useEffect, useState } from "react";
import axios from "axios"
import ProductCard from "./ProductCard.js";
import ReactPaginate from 'react-paginate';
import styles from './Catalogo.css'

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


const Catalogo = (props) => {

    const busqueda = props.palabra;

//>>>>>>>>>>>>>>>> Estados
    
    var [products, setProducts] = useState([]);
    var [orderBy, setOrderBy] = useState("priceASC")
    var [estadoProd, setEstadoProd] = useState("new")

//>>>>>>>>>>>>>>>> Estados de pagina
    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 30;
    const pageVisited = pageNumber * productsPerPage;

 //>>>>>>>>>>>>>>>> onSubmit   
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:5001/api/search?q=${busqueda}`)
            const jsonData = response.data
            console.log(Array.isArray(jsonData));

             setProducts(jsonData)

        } catch (err) {
            console.error("este es el error", err.message)
        }
    }
  
    // useEffect(()=>{
    //     onSubmitForm()
    // }, []);
    

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

   //>>>>>>>>>>>>>>>>>>>>Condicion del producto
    const esNuevo =()=> item=>{return item.condition === "new"}

    const esUsado= ()=> item=>{return item.condition === "used"}


    //>>>>>>>>>>>>>>>>>>>> Paginacion

        const pageCount = Math.ceil(products.length/ productsPerPage)

        const changePage = ({selected}) => {
        setPageNumber(selected)
        }

    //>>>>>>>>>>>>>>>>>>>>> Filtros

        const productosPaginados = products.slice(pageVisited, pageVisited + productsPerPage)

        const mostrarProductos = productosPaginados.sort(sortF).filter(estadoProd === "new" ? esNuevo() : esUsado())
      

    return (
        <Fragment>
            {" "}
            <div>Componente catalogo</div>
            
            <form className="" onSubmit={onSubmitForm}>
                <button type="submit">Buscar</button>
            </form>
                     <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        Orden por Precio 
                        <hr/>
                        <label className="btn btn-secondary" onClick={() =>{setOrderBy ('priceASC')}}>
                            <input type="radio" name="options" id="option2" autocomplete="off"/> M- a M+
                        </label>
                        <label className="btn btn-secondary" onClick={() =>{setOrderBy ('priceDSC')},}  >
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
                { mostrarProductos.map((item) => {
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
                
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
        </Fragment>
    )
}

export default Catalogo