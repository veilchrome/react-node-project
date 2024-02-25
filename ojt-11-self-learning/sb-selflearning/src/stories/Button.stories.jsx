import PropTypes from "prop-types";
import { action } from "@storybook/addon-actions";
import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    primary: {
      control: "boolean",
    },
    onClick: {
      action: "clicked",
    },
  },
};

// Template for a button
const Template = (args) => <Button {...args} />;
// Button story
export const Default = () => (
  <Template onClick={action("clicked")}>Button</Template>
);

// Primary button story
export const Primary = () => (
  <Template primary onClick={action("clicked")}>
    Primary Button
  </Template>
);

// Disabled button story
export const Disabled = () => (
  <Template disabled onClick={action("clicked")}>
    Disabled Button
  </Template>
);

// PropTypes validation
Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  disabled: false,
  onClick: () => {},
};
