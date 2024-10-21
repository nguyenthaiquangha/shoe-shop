// import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getCateByAction } from '../../redux/slide/listCategory';
import { Pagination } from '../Pagination/Pagination';
import { onNavigationNext, onNavigationPrev } from '../../redux/slide/listProducts';
import { Items } from '../Items/Items';

export const ProductByCate = () => {

  const param = useParams();
  const dispatch = useDispatch();
  const getProductByCate = async (id) => {
    try {
      const action = getCateByAction(id);
      dispatch(action)
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getProductByCate(param.id);
  }, [param.id])

  const { cateDetail } = useSelector((state) => state.CateSlice);
  const { productPerPage } = useSelector((state) => state.ProductSlice);
  const { currentPage } = useSelector((state) => state.ProductSlice);

  
  
  const arrayProductByCate = Object.values(cateDetail);
  const totalPages = Math.ceil(arrayProductByCate.length / productPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);

  const indexOfLastPage = currentPage * productPerPage;
  const indexOfFirstPage = indexOfLastPage - productPerPage;

  const visibleProducts = arrayProductByCate.slice(indexOfFirstPage, indexOfLastPage);







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
      <h2 className="section-title">Products</h2>
      <div className="shop-content container" >
        {/* {
          Array.isArray(visibleProducts) && visibleProducts.map((item) => {
            return <>
              <CartItem item={item} />
            </>
          })
        } */}
        <Items listProducts={visibleProducts} />
      </div>
      <p>Page {currentPage} of {totalPages}</p>
      <Pagination
        page={pages}
        navigationPrev={navigationPrev}
        navigationNext={navigationNext}
      />

    </div>
  )
}
export default ProductByCate;