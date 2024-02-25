import OpinionPost from "../components/Layout/OpinionPost";

export default {
  title: "Components/Layout/OpinionPost",
  component: OpinionPost,
  argTypes: {
    title: { control: "text" },
    imageSrc: { control: "text" },
    content: { control: "text" },
  },
};

const Template = (args) => <OpinionPost {...args} />;

export const PostOp = Template.bind({});
PostOp.args = {
  title: "Sample News Title",
  imageSrc: "https://via.placeholder.com/400",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero quis rhoncus consectetur.",
};
