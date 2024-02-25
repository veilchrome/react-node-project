import { Alert } from "./Alert";

export default {
  title: "HiMom",
  component: Alert,
};

export const Primary = () => <Alert type="primary">Primary</Alert>;
export const Danger = () => <Alert type="danger">Danger</Alert>;
export const Default = () => <Alert>Default</Alert>;
