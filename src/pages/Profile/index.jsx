import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  HiCheckCircle,
  HiOutlineUpload,
  HiOutlineRefresh,
} from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";
import ABLInput from "@/Components/ABLInput";
import ABLTextArea from "@/Components/ABLTextArea";
import ABLAvatar from "@/Components/ABLAvatar";
import ABLButton from "@/Components/ABLButton";

const Profile = () => {
  const [openAccordion, SetOpenAccordion] = useState(0);
  const [data, setData] = useState({
    bgColor: "#cecece",
    textColor: "#333333",
    buttonColor: "#000000",
    vanityUrl: uuidv4(),
  });

  useEffect(() => {}, [data]);

  const handleOpenAccordion = (id) => {
    SetOpenAccordion(id);
  };

  const CustomBranding = (
    <div className="w-full divide-y divide-dashed divide-[rgb(0,213,251,0.6)] ">
      <div className="flex w-full justify-center py-4">
        <ABLButton
          color="cyan"
          className="flex w-full max-w-[400px] items-center justify-center gap-3"
        >
          <HiOutlineUpload className="h-5 w-5" />
          <span>Upload Logo</span>
        </ABLButton>
      </div>
      <div className="w-full">
        <div className="mt-4 grid grid-cols-12">
          <div className="col-span-4">
            <span className="text-md text-gray-400">Background</span>
          </div>
          <div className="col-span-8">
            <input
              type="color"
              value={data.bgColor}
              onChange={({ target: { value } }) =>
                setData({ ...data, bgColor: value })
              }
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-12">
          <div className="col-span-4">
            <span className="text-md text-gray-400">Text</span>
          </div>
          <div className="col-span-8">
            <input
              type="color"
              value={data.textColor}
              onChange={({ target: { value } }) =>
                setData({ ...data, textColor: value })
              }
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-12">
          <div className="col-span-4">
            <span className="text-md text-gray-400">Button</span>
          </div>
          <div className="col-span-8">
            <input
              type="color"
              value={data.buttonColor}
              onChange={({ target: { value } }) =>
                setData({ ...data, buttonColor: value })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );

  const BasicProfile = (
    <div className="grid w-full grid-cols-1 gap-8 tablet:grid-cols-3">
      <div className="col-span-1 flex flex-col items-center gap-4">
        <ABLAvatar src="img/useravatar.png" radius="50%" size="100%" />
        <ABLButton
          color="cyan"
          className="flex items-center justify-center gap-2 rounded py-3"
        >
          <HiOutlineRefresh className="h-4 w-4" />
          <span>Change</span>
        </ABLButton>
      </div>
      <div className="grid-rows-8 col-span-2 grid gap-4">
        <div>
          <ABLInput label="Display Name" color="cyan" />
        </div>
        <div>
          <ABLTextArea label="Bio" color="cyan" />
        </div>
        <div>
          <ABLInput label="Website" color="cyan" />
        </div>
        <div>
          <ABLInput label="YouTube" color="cyan" />
        </div>
        <div>
          <ABLInput label="Linkedin" color="cyan" />
        </div>
        <div>
          <ABLInput label="Instagram" color="cyan" />
        </div>
        <div>
          <ABLInput label="TikTok" color="cyan" />
        </div>
        <div>
          <ABLInput label="Facebook" color="cyan" />
        </div>
        <div>
          <ABLInput label="Twitter" color="cyan" />
        </div>
      </div>
    </div>
  );

  const accordionPanel = [
    {
      title: "Basic Profile",
      content: BasicProfile,
      isValid: false,
    },
    { title: "Customize Branding", content: CustomBranding, isValid: false },
  ];

  return (
    <div className="h-full">
      <div className="grid h-full grid-cols-12">
        <div className="col-span-12 h-full desktop:col-span-5 desktop:overflow-auto">
          <div className="m-auto h-full overflow-auto px-2">
            {accordionPanel.map((item, index) => {
              const { isValid, title, content } = item;
              return (
                <Accordion
                  key={index}
                  open={openAccordion === index}
                  className={`mb-2 rounded-lg bg-[rgba(0,0,0,0.6)] backdrop-blur-sm ${
                    openAccordion === index
                      ? "border border-[rgb(0,213,251)]"
                      : "border border-gray-900"
                  }`}
                >
                  <AccordionHeader
                    onClick={() => handleOpenAccordion(index)}
                    className={`w-full overflow-hidden border-b-0 p-4 text-white hover:text-white`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <p>{title}</p>
                      {isValid ? (
                        <HiCheckCircle className="text-3xl text-[rgb(0,213,251)]" />
                      ) : (
                        <span className="h-6 w-6 rounded-full border-2 border-[gray] bg-gray-900"></span>
                      )}
                    </div>
                  </AccordionHeader>
                  <AccordionBody className="h-[calc(100vh-500px)] overflow-y-auto border-t border-[rgb(0,213,251)] p-4 text-base font-normal">
                    {content}
                  </AccordionBody>
                </Accordion>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 px-2 desktop:col-span-7 desktop:overflow-y-auto">
          <div className="flex w-full flex-col border desktop:h-full">
            <div className="flex h-[50px] w-full grow items-center justify-center bg-cyan-500">
              <h1 className="text-black-900 text-xl font-bold">
                Preview & Test Browser
              </h1>
            </div>
            <div
              className={`z-10 h-[70vw] min-h-[600px] w-full grow-0 desktop:h-[calc(100%-50px)]`}
              style={{ backgroundColor: `${data.bgColor}` }}
            >
              <div className="border bg-white">
                <div className="mx-4 my-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-3xl border border-gray-800 px-4 py-1 text-sm">
                  <span>airbotlab.com/user/{data.vanityUrl}</span>
                </div>
              </div>
              <div
                style={{ color: `${data.textColor}` }}
                className="grid h-[calc(100%-40px)] gap-24 overflow-auto p-4"
              >
                <div className="m-auto w-5/6 break-words">
                  <h1 className="text-7xl font-bold">{data.title}</h1>
                  <p className="mt-2 text-lg">{data.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
