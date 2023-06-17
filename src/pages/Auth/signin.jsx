import ABLInput from "@/Components/ABLInput";
import ABLButton from "@/Components/ABLButton";
import { Link, useNavigate } from "react-router-dom";
import { HiAtSymbol, HiOutlineLockClosed } from "react-icons/hi";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center p-8">
      <div className="m-auto flex h-[450px] w-full flex-col items-center justify-between desktop:w-3/5">
        <h1 className="text-[46px] font-bold text-[#fff]">Welcome</h1>
        <ABLInput
          label="Email address"
          color="purple"
          size="lg"
          icon={<HiAtSymbol />}
        />
        <ABLInput
          label="Password"
          color="purple"
          type="password"
          size="lg"
          icon={<HiOutlineLockClosed />}
        />
        <ABLButton
          className="w-full !rounded bg-[#0f8093] text-base font-thin normal-case"
          onClick={() => navigate("/")}
        >
          Sign In
        </ABLButton>
        <p className="text-center text-[#fff]">Forgot password?</p>
        <div className="flex w-full items-center justify-center">
          <hr className="border-1 w-full border-t-white" />
          <p className="px-4 text-lg text-white">or</p>
          <hr className="border-1 w-full border-t-white" />
        </div>
        <ABLButton className="flex w-full items-center justify-center gap-4 !rounded bg-[white] text-base font-thin normal-case">
          <img src="img/google.svg" className="w-[24px]" />
          <span className="text-[#747474]">Sign in with Google</span>
        </ABLButton>
      </div>
      <p className="absolute bottom-[40px] text-center text-base text-[#fff]">
        Don't have an account?
        <Link className="ml-2 text-[#0f8093] underline" to="/signup">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
