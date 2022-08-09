import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopHeader from "../../reusableComponents/topheader/TopHeader";
import { Pagination } from "./Pagination";
import { Post } from "./Post";

const url = "https://jsonplaceholder.typicode.com/posts";

const MyDivCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

const DivCard = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
  padding: 10px;
  background-color: #f7f7f7;
  height: 220px;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  cursor: pointer;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);

  &:hover {
    box-shadow: 0 0 0;
  }

  @media screen and (max-width: 800px) {
    width: 40%;
  }
  @media screen and (max-width: 636px) {
    width: 100%;
    height: auto;
  }
`;

const Fields = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("something went wrong while requesting posts");
      })
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <TopHeader page_name="Fields" />

      {/* <CardData>
        {posts.map((data, id) => {
          return (
            <DivCard key={id}>
              <div>
                <p
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "30px",
                      height: "30px",
                      border: "1px dashed #dcdcdc",
                    }}
                  >
                    {data.id}
                  </span>
                </p>
                <p>{data.title}</p>
                <p>{data.body}</p>
              </div>
            </DivCard>
          );
        })}
      </CardData> */}

      <MyDivCard>
        {posts.length > 0 ? (
          <Pagination
            data={posts}
            RenderComponent={Post}
            pageLimit={5}
            dataLimit={10}
          />
        ) : (
          <h1>No Posts to display</h1>
        )}
      </MyDivCard>
    </>
  );
};

export default Fields;
