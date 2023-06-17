import { Button } from "@material-tailwind/react";

const ABLButton = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

export default ABLButton;
