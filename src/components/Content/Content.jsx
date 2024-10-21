// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Items } from "../Items/Items";
import "./content.scss"
import axios from "axios";
import { useEffect,  } from "react";
import { onclickCurrentPage, onNavigationNext, onNavigationPrev, setListProducts } from "../../redux/slide/listProducts";
// import { Category } from "../Category/Category";
import { Pagination } from "../Pagination/Pagination";

export const Content = () => {
    const { listProducts } = useSelector((state) => state.ProductSlice);
    const { productPerPage } = useSelector((state) => state.ProductSlice);
    const { currentPage } = useSelector((state) => state.ProductSlice);




    const dispatch = useDispatch();
    const getProducts = async () => {
        const res = await axios.get('https://shop.cyberlearn.vn/api/Product');
        const action = setListProducts(res.data.content);
        dispatch(action);
    }
    useEffect(() => {
        getProducts()
    }, []);


    const totalPages = Math.ceil(listProducts.length / productPerPage);

    const pages = [...Array(totalPages + 1).keys()].slice(1);

    const indexOfLastPage = currentPage * productPerPage;
    const indexOfFirstPage = indexOfLastPage - productPerPage;

    const visibleProducts = listProducts.slice(indexOfFirstPage, indexOfLastPage);


    const navigationPrev = () => {
        try {
            if (currentPage !== 1) {
                const action = onNavigationPrev()
                dispatch(action)
            }

        } catch (error) {
            console.log(error);

        }
    }
    const navigationNext = () => {
        try {
            if (currentPage !== totalPages) {
                const action = onNavigationNext()
                dispatch(action)
            }

        } catch (error) {
            console.log(error);

        }
    }
   
    return (
        <div>
            <section className="shop container">
                <h2 className="section-title">Product</h2>
                <div className="shop-content container" >
                    <Items listProducts={visibleProducts} />
                </div>
            </section>
            <p>Page {currentPage} of {totalPages}</p>

            <Pagination
                page={pages}
                navigationPrev={navigationPrev}
                navigationNext={navigationNext}
               />
            {/* <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" onClick={navigationPrev}>Previous</a></li>
                        {Array.isArray(pages) && pages.map((item) => {
                            return <li className="page-item" key={item}>
                                <a className="page-link" onClick={() => handleCurrentPage.call(null, item)}>{item}</a>
                            </li>
                        })}
                        <li className="page-item"><a className="page-link" onClick={navigationNext}>Next</a></li>
                    </ul>
                </nav>
            </div> */}
        </div>
    )
}
export default Content