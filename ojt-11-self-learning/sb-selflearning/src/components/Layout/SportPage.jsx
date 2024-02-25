import SportPost from "./SportPost";
const SportPage = () => {
  const currentDate = new Date().toLocaleString;
  return (
    <SportPost
      title="Weekly Sport Pages"
      images={[
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ]}
      content="lorem ipsum dolo dolor"
      date={currentDate}
    />
  );
};

export default SportPage;
