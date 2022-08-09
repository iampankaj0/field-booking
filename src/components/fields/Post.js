import styled from "styled-components";

export const Post = (props) => {
  const { id, title, body } = props.data;

  const MainDiv = styled.div`
    width: 25%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    margin: 10px;
    padding: 10px;

    > small {
      border: 2px solid #777;
      border-radius: 7px;
      padding: 5px 12px;
      color: #777;
    }
  `;

  return (
    <MainDiv className="post">
      <small>{id}</small>
      <h1>{title}</h1>
      <p>{body}</p>
    </MainDiv>
  );
};
