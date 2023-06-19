import { Link } from "react-router-dom";
import ABLMenuItem from "@/Components/ABLMenuItem";
import { StarIcon } from "@heroicons/react/24/solid";
import {
  HiOutlinePresentationChartLine,
  HiOutlineUserGroup,
  HiOutlineHome,
  HiOutlineCog,
  HiOutlineUser,
} from "react-icons/hi";
import { SiPowerapps } from "react-icons/si";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sidebar = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  var settings = {
    dots: true,
    speed: 500,
    dotsClass: "slick-dots !hidden",
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const menuLists = [
    {
      label: "Dashboard", icon: <HiOutlineHome />, href: "/", key: ["/"]
    },
    { label: "Apps", icon: <SiPowerapps />, href: "/apps", key: ["/apps"] },
    {
      label: "Customer Form",
      icon: <HiOutlineUserGroup />,
      href: "/customers",
      key: ["/customers"],
    },
    {
      label: "Customers",
      icon: <HiOutlinePresentationChartLine />,
      href: "/Statistics",
      key: ["/Statistics"],
    },
    {
      label: "Accounts",
      icon: <HiOutlineUser />,
      href: "/accounts",
      key: ["/accounts"],
    },
    {
      label: "Settings",
      icon: <HiOutlineCog />,
      href: "/settings",
      key: ["/settings"],
    }
  ];

  return (
    <div className="h-full p-4">
      <Link
        className="flex h-[70px] items-center gap-4 border-b border-[#3D0D46]"
        to="/"
      >
        <img src="img/logo.svg" className="h-[50px]" />
        <h2 className="text-2xl font-bold text-white">Frog System</h2>
      </Link>
      <div className="relative flex h-[calc(100%-70px)] w-full flex-col items-center justify-between py-[20px]">
        <div className="w-full">
          {menuLists.map((item, index) => {
            const { label, icon, href, key } = item;
            return (
              <ABLMenuItem
                key={index}
                label={label}
                icon={icon}
                selected={key.includes(currentUrl)}
                href={href}
              />
            );
          })}
        </div>
        {/* <div className="w-full">
          <Slider {...settings} className="w-full">
            <Card
              color="transparent"
              shadow={false}
              className="w-full max-w-[26rem]"
            >
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
              >
                <Avatar
                  size="lg"
                  variant="circular"
                  src="img/useravatar.png"
                  alt="candice wu"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div>
                    <Typography variant="h5" className="text-white">
                      Candice Wu
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography className="text-gray-400">
                  &quot;I found solution to all my design needs from Creative
                  Tim. I use them as a freelancer in my hobby projects for fun!
                  And its really affordable, very humble guys !!!&quot;
                </Typography>
              </CardBody>
            </Card>
            <Card
              color="transparent"
              shadow={false}
              className="w-full max-w-[26rem]"
            >
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
              >
                <Avatar
                  size="lg"
                  variant="circular"
                  src="img/useravatar.png"
                  alt="candice wu"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div>
                    <Typography variant="h5" className="text-white">
                      Candice Wu
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography className="px-2 pl-3 text-gray-400">
                  &quot;I found solution to all my design needs from Creative
                  Tim. I use them as a freelancer in my hobby projects for fun!
                  And its really affordable, very humble guys !!!&quot;
                </Typography>
              </CardBody>
            </Card>
            <Card
              color="transparent"
              shadow={false}
              className="w-full max-w-[26rem]"
            >
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
              >
                <Avatar
                  size="lg"
                  variant="circular"
                  src="img/useravatar.png"
                  alt="candice wu"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div>
                    <Typography variant="h5" className="text-white">
                      Candice Wu
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography className="px-2 pl-3 text-gray-400">
                  &quot;I found solution to all my design needs from Creative
                  Tim. I use them as a freelancer in my hobby projects for fun!
                  And its really affordable, very humble guys !!!&quot;
                </Typography>
              </CardBody>
            </Card>
          </Slider>
          <ABLMenuItem
            label="New Chat"
            icon={<HiOutlinePlus />}
            selected={true}
            href={"/newapp"}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
