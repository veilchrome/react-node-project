import LifestylePost from "../components/Layout/LifestylePost";

export default {
  title: "Components/Layout/LifestylePost",
  component: LifestylePost,
  argTypes: {
    title: { control: "text" },
    imageSrc: { control: "text" },
    content: { control: "text" },
  },
};

const Template = (args) => <LifestylePost {...args} />;

export const lifestylePost = Template.bind({});
lifestylePost.args = {
  title: "sample LifestylePost",
  imageSrc: "https://via.placeholder.com/400",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero quis rhoncus consectetur.",
};
