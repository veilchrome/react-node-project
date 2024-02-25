import PropTypes from "prop-types";
import styled from "styled-components";

const SportContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-family: "Noto Sans", sans-serif;
  font-size: 20px;
  margin-bottom: 8px;
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Content = styled.p`
  font-size: 16px;
  font-family: "Poppins", sans-serif;
`;

const DateText = styled.p`
  font-size: 14px;
  color: #666;
`;

const SportPost = ({ title, images, content, date }) => (
  <SportContainer>
    <Title>{title}</Title>
    <ImageGallery>
      {images.map((image, index) => (
        <Image key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </ImageGallery>
    <Content>{content}</Content>
    <DateText>Date: {date}</DateText>
  </SportContainer>
);

SportPost.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default SportPost;
