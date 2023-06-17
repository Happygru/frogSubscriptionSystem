const ABLDivider = ({ title, size = "lg", position = "center" }) => {
  return (
    <div className="my-8 flex w-full items-center justify-center">
      <hr className="border-1 w-full grow border-t-white" />
      <p
        className={`px-4 text-${size} w-max	 grow whitespace-nowrap text-white`}
      >
        {title}
      </p>
      <hr className="border-1 w-full grow-0 border-t-white" />
    </div>
  );
};

export default ABLDivider;
