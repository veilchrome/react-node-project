import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    isDarkMode: {
      control: "boolean",
    },
    color: {
      control: "text",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "This is the navigation bar component.",
      },
    },
  },
};

const Template = (args) => (
  <Router>
    <Navbar {...args} />
  </Router>
);

export const DarkMode = Template.bind({});
DarkMode.args = {
  isDarkMode: true,
};

export const LightMode = Template.bind({});
LightMode.args = {
  isDarkMode: false,
};
