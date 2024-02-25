import NewsPost from "../components/Layout/NewsPost";

export default {
  title: "Components/Layout/NewsPost",
  component: NewsPost,
  argTypes: {
    title: { control: "text" },
    imageSrc: { control: "text" },
    content: { control: "text" },
  },
};

const Template = (args) => <NewsPost {...args} />;

export const Post = Template.bind({});
Post.args = {
  title: "Sample News Title",
  imageSrc: "https://via.placeholder.com/400",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero quis rhoncus consectetur.",
};
