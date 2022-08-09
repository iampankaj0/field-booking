import { useEffect, useState } from "react";
import styled from "styled-components";

export const Pagination = ({ data, RenderComponent, pageLimit, dataLimit }) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  // STYLED COMPONENTS CSS START
  const PagiDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const ButtonPagiItem = styled.button`
    background: #fff;
    border: 2px solid #666;
    padding: 10px 15px;
    border-radius: 50%;
    height: 45px;
    width: 45px;
    position: relative;
    margin: 0 5px;
    cursor: pointer;

    > span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .active {
      border: 1px solid #888;
      color: #888;
      pointer-events: none;
    }

    .prev.disabled,
    .next.disabled {
      pointer-events: none;
      box-shadow: none;
      color: #999;
    }
  `;

  const ButtonPrev = styled.button`
    background: #fff;
    border: none;
    padding: 10px;
    color: blue;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    margin: 0 10px;
    cursor: pointer;
  `;
  const ButtonNext = styled.button`
    background: #fff;
    border: none;
    padding: 10px;
    color: blue;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    margin: 0 10px;
    cursor: pointer;
  `;

  return (
    <>
      {/* show the posts, 10 posts at a time */}

      {getPaginatedData().map((d, idx) => (
        <RenderComponent key={idx} data={d} />
      ))}

      {/* show the pagiantion
    it consists of next and previous buttons
    along with page numbers, in our case, 5 page
    numbers at a time
*/}
      <PagiDiv className="pagination">
        {/* previous button */}
        <ButtonPrev
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </ButtonPrev>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <ButtonPagiItem
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </ButtonPagiItem>
        ))}

        {/* next button */}
        <ButtonNext
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </ButtonNext>
      </PagiDiv>
    </>
  );
};
