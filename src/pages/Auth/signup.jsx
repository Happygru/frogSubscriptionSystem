import ABLInput from "@/Components/ABLInput";
import ABLButton from "@/Components/ABLButton";
import { Link } from "react-router-dom";
import { HiAtSymbol, HiOutlineUser, HiOutlineLockClosed } from "react-icons/hi";

const SignUp = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center p-8">
      <div className="m-auto flex h-[500px] w-full flex-col items-center justify-between desktop:w-3/5">
        <h1 className="text-[46px] font-bold text-[#fff]">Register👋</h1>
        <p className="text-[#777]">Let's setup you account real quick</p>
        <ABLInput
          label="Email address"
          color="purple"
          size="lg"
          icon={<HiAtSymbol />}
        />
        <ABLInput
          label="Full Name"
          color="purple"
          size="lg"
          icon={<HiOutlineUser />}
        />
        <ABLInput
          label="User Name"
          color="purple"
          size="lg"
          icon={<HiOutlineUser />}
        />
        <ABLInput
          label="Password"
          color="purple"
          size="lg"
          icon={<HiOutlineLockClosed />}
        />
        <ABLInput
          label="Confirm Password"
          color="purple"
          size="lg"
          icon={<HiOutlineLockClosed />}
        />
        <ABLButton className="w-full !rounded bg-[#0f8093] text-base font-thin normal-case">
          Sign up
        </ABLButton>
      </div>
      <p className="absolute bottom-[40px] text-center text-base text-[#fff]">
        Already have an account?{" "}
        <Link className="ml-2 text-[#0f8093] underline" to="/signin">
          Signin
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
