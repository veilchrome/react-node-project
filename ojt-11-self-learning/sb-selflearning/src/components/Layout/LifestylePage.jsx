import styled from "styled-components";
import LifestylePost from "./LifestylePost";

const LifestyleContainer = styled.div`
  padding: 20;
  margin: 100px 500px;
`;

const LifestylePage = () => {
  return (
    <LifestyleContainer>
      <LifestylePost
        title="Breaking News"
        imageSrc="https://images.unsplash.com/photo-1706620842914-3f5523ca664b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
        expedita deserunt unde labore hic at optio iure possimus quis
        perspiciatis ea, inventore voluptas fugit odio, sint quibusdam explicabo
        quasi mollitia!"
      />
    </LifestyleContainer>
  );
};

export default LifestylePage;
