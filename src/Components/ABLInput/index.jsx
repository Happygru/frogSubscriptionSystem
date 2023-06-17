import { Input } from "@material-tailwind/react";

const ABLInput = (props) => {
  return (
    <Input
      color={props.color ? props.color : "purple"}
      {...props}
      style={{ color: "white" }}
    />
  );
};

export default ABLInput;