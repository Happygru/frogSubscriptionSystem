import React, { useEffect, useState, useRef } from "react";
import ABLInput from "../Components/ABLInput";
import Sidebar from "./Sidebar";
import {
  HiOutlineSearch,
  HiChevronDoubleRight,
  HiChevronDoubleLeft,
  HiOutlineCog,
  HiOutlineLogout,
} from "react-icons/hi";
import { Outlet, Link } from "react-router-dom";
import {
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const Layout = () => {
  const [isSidebaropen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const openBtnRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", windowClickEvent);
    window.addEventListener("mousemove", windowMoveEvent);
    return () => {
      window.removeEventListener("click", windowClickEvent);
      window.removeEventListener("mousemove", windowMoveEvent);
    };
  }, [isSidebaropen]);

  const windowClickEvent = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    } else if (openBtnRef.current.outerHTML.indexOf(e.target.outerHTML) > -1) {
      setIsSidebarOpen(!isSidebaropen);
    }
  };

  const windowMoveEvent = (e) => {
    const iframe = iframeRef.current;
    const message = {
      type: 'mousemove',
      e: { clientX: e.clientX, clientY: e.clientY }
    };
    iframe.contentWindow.postMessage(message, '*');
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[length:80%_80%] bg-center bg-no-repeat">
      <iframe ref={iframeRef} src="img/background.html" className="absolute z-50 h-screen w-screen" />
      <div className="absolute left-[-18vh] top-[-18vw] z-20 h-[30vh] w-[30vw] rounded-full bg-[#FB026A] blur-[300px]"></div>
      <div className="absolute bottom-[-20vh] right-[-20vw] z-20 h-[30vh] w-[30vw] rounded-full bg-[#FB026A] blur-[250px]"></div>
      <div
        className="relative z-50 flex h-full w-full items-center justify-between p-8"
        id="sidebar"
      >
        <div
          ref={sidebarRef}
          className={`gradient-border-solid fixed bg-[rgba(0,0,0,0.9)] backdrop-blur ${
            !isSidebaropen ? "left-[-247px]" : "left-[6px]"
          } z-30 h-full w-[240px] overflow-auto  rounded-xl transition-all tablet:relative tablet:left-0 tablet:bg-[rgba(0,0,0,0.2)] tablet:backdrop-blur-0`}
        >
          <IconButton
            ref={openBtnRef}
            className="!absolute top-[20px] right-[-42px] rounded tablet:hidden"
            color="cyan"
          >
            {!isSidebaropen ? (
              <HiChevronDoubleRight className="text-xl text-white" />
            ) : (
              <HiChevronDoubleLeft className="text-xl text-white" />
            )}
          </IconButton>
          <Sidebar />
        </div>
        <div className="gradient-border-solid-swap flex h-full w-full w-full flex-col bg-[rgba(0,0,0,0.2)] transition-all tablet:w-[calc(100%-250px)]">
          <div className="flex h-[80px] w-full items-center justify-between px-[30px]">
            <h1 className="grow text-2xl font-bold text-white">Apps</h1>
            <div className="flex grow-0 items-end justify-end gap-10">
              <div className="hidden max-w-[300px] pb-2 laptop:block">
                <ABLInput
                  icon={<HiOutlineSearch />}
                  label="Search for Apps"
                  variant="standard"
                />
              </div>
              <div className="relative mt-2 w-max rounded-full p-1">
                <div className="group relative">
                  <img
                    className="h-10 w-10 cursor-pointer rounded-full border-2 border-white"
                    src="img/useravatar.png"
                    alt="avatar"
                  />
                  <Card className="absolute left-[-190px] top-[40px] z-40 w-60 origin-top-right scale-0 overflow-hidden transition-all group-hover:h-auto group-hover:scale-100">
                    <CardHeader floated={false}>
                      <img src="img/useravatar.png" alt="profile-picture" />
                    </CardHeader>
                    <CardBody className="p-5 pb-0 text-center">
                      <Link
                        className="flex items-center gap-4 rounded p-2 transition hover:bg-[rgba(0,213,251,1)] hover:text-white"
                        to="/profile"
                      >
                        <HiOutlineCog className="h-5 w-5" />
                        <span>Manage Account</span>
                      </Link>
                      <Link
                        className="flex items-center gap-4 rounded p-2 transition hover:bg-[rgba(0,213,251,1)] hover:text-white"
                        to="/signin"
                      >
                        <HiOutlineLogout className="h-5 w-5" />
                        <span>Logout</span>
                      </Link>
                    </CardBody>
                    <CardFooter className="flex justify-start gap-7 pl-7 pt-0">
                      <Tooltip content="Like">
                        <Typography
                          as="a"
                          href="#facebook"
                          variant="lead"
                          color="blue"
                          textGradient
                        >
                          <i className="fab fa-facebook" />
                        </Typography>
                      </Tooltip>
                      <Tooltip content="Follow">
                        <Typography
                          as="a"
                          href="#twitter"
                          variant="lead"
                          color="light-blue"
                          textGradient
                        >
                          <i className="fab fa-twitter" />
                        </Typography>
                      </Tooltip>
                      <Tooltip content="Follow">
                        <Typography
                          as="a"
                          href="#instagram"
                          variant="lead"
                          color="purple"
                          textGradient
                        >
                          <i className="fab fa-instagram" />
                        </Typography>
                      </Tooltip>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[calc(100%-80px)] overflow-y-auto p-[30px]">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full pr-8 text-right text-lg font-bold text-white">
        &copy;2023, Appbotlab Teams. All rights reserved.
      </div>
    </div>
  );
};

export default Layout;
