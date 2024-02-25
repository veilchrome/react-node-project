import SportPost from "../components/Layout/SportPost";

export default {
  title: "Components/Layout/SportPost",
  component: SportPost,
};

const Template = (args) => <SportPost {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Sport Gallery This Week",
  images: [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ],
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec quam sed libero vestibulum feugiat nec sit amet justo.",
};
