import styled from "styled-components";

const Home = () => {
  const ContainerStyle = styled.div`
    font-family: "Noto Sans", sans-serif;
    background-color: #1a1a1a;
    padding: 50px;
    border-radius: 10px;
    color: #fff;
    max-width: 900px;
    margin: 20px auto;
    align-items: center;

    h2 {
      font-family: "Poppins", sans-serif;
      margin-bottom: 20px;
      font-weight: 600;
    }
    li {
      list-style: none;
    }
  `;
  return (
    <ContainerStyle>
      <h2>Bagaimana Proses Deployment di ReactJS</h2>
      <p>
        Cara Deployment di React Berkerja Sebelum mendeploy suatu projek React,
        hal yang terpenting dilakukan adalah optimisasi untuk production
        beberapa langkah yang sering dilakukan untuk tahapan ini ialah :
        <li>1. Minification</li>
        <li>2. Bundling</li>
        <li>3. Code Splitting</li>
        <li>4. Image Optimasi</li>
        setelah tahapan atas dilakukan tahap berikutnya ialah proses Build di
        React bisa menggunakan run command "npm run build" atau "yarn build".
        Static Assets setelah tahapan build dilakukan dan files akan siap untuk
        di deploy di suatu platform deployment seperti vercel, heroku dan
        netifly.
      </p>
    </ContainerStyle>
  );
};

export default Home;
