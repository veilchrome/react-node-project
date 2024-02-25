import PropTypes from "prop-types";
import styled from "styled-components";

const OpiniContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  display: grid;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-family: "Noto Sans", sans-serif;
  font-size: 20px;
  margin-bottom: 8px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const Content = styled.p`
  font-size: 16px;
  font-family: "Poppins", sans-serif;
`;

const OpinionPost = ({ title, imageSrc, content }) => (
  <OpiniContainer>
    <Title>{title}</Title>
    {imageSrc && <Image src="{image}" alt={title} />}
    <Content>{content}</Content>
  </OpiniContainer>
);

OpinionPost.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default OpinionPost;
