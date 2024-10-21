import React from 'react'
import { onclickCurrentPage } from '../../redux/slide/listProducts';
import { useDispatch } from 'react-redux';

export const Pagination = (props) => {
  const { page, navigationNext, navigationPrev } = props;
  const dispatch = useDispatch()
  const handleCurrentPage = (e) => {

    try {
      dispatch(onclickCurrentPage(e))
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" onClick={navigationPrev}>Previous</a></li>
          {Array.isArray(page) && page.map((item) => {
            return <li className="page-item" key={item}><a className="page-link" onClick={() => handleCurrentPage.call(null, item)}>{item}</a></li>
          })}
          <li className="page-item"><a className="page-link" onClick={navigationNext}>Next</a></li>
        </ul>
      </nav>
    </div>
  )
}
