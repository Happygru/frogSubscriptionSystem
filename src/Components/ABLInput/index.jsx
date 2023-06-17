import { Input } from "@material-tailwind/react";

const ABLInput = (props) => {
  return (
    <Input
      color={props.color ? props.color : "purple"}
      containerProps={{ className: 'min-w-[50px]' }}
      {...props}
      style={{ color: "white" }}
    />
  );
};

export default ABLInput;