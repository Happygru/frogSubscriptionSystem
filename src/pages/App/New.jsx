import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  IconButton,
} from "@material-tailwind/react";
import {
  HiCheckCircle,
  HiPlus,
  HiOutlineDuplicate,
  HiOutlineTrash,
  HiExternalLink,
} from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";
import ABLInput from "@/Components/ABLInput";
import ABLTextArea from "@/Components/ABLTextArea";
import ABLButton from "@/Components/ABLButton";
import { textToComponent } from "../../utils/global";
import { Tagify } from "react-tagify";

const NewApp = () => {
  const [openAccordion, SetOpenAccordion] = useState(0);
  const [data, setData] = useState({
    bgColor: "#cecece",
    textColor: "#333333",
    buttonColor: "#000000",
    vanityUrl: uuidv4(),
    title: "",
    description: "",
    formList: [],
  });

  useEffect(() => {}, [data]);

  const handleOpenAccordion = (id) => {
    SetOpenAccordion(id);
  };

  const duplicate = (index) => {
    let item = data.formList[index];
    setData({ ...data, formList: [...data.formList, { ...item }] });
  };

  const deleteForm = (index) => {
    let rData = data.formList;
    rData.splice(index, 1);
    setData({ ...data, formList: [...rData] });
  };

  const addForm = (type) => {
    let item;
    switch (type) {
      case "Text":
        item = {
          type: "Text",
          label: "",
          placeholder: "",
          valueList: null,
        };
        break;
      case "Dropdown":
        item = {
          type: "Dropdown",
          label: "",
          placeholder: "",
          valueList: "",
        };
        break;
      case "Multiple Choice":
        item = {
          type: "Multiple Choice",
          label: "",
          placeholder: "",
          valueList: "",
        };
    }
    let rData = data.formList;
    rData.push(item);
    setData({ ...data, formList: [...rData] });
  };

  const changeFormValue = (index, value, type) => {
    let rData = data.formList;
    rData[index][type] = value;
    setData({ ...data, formList: [...rData] });
  };

  const AppBasic = (
    <div className="w-full">
      <div className="grid grid-cols-12">
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
      <div className="mt-4 grid grid-cols-12">
        <div className="col-span-4 pt-3">
          <span className="text-md text-gray-400">Title</span>
        </div>
        <div className="col-span-8">
          <ABLInput
            size="md"
            color="cyan"
            label="Title"
            variant="standard"
            onChange={({ target: { value } }) =>
              setData({ ...data, title: value })
            }
          />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-12">
        <div className="col-span-4 pt-3">
          <span className="text-md text-gray-400">Description</span>
        </div>
        <div className="col-span-8">
          <ABLTextArea
            size="md"
            color="cyan"
            variant="standard"
            label="Description"
            onChange={({ target: { value } }) =>
              setData({ ...data, description: value })
            }
          />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-12">
        <div className="col-span-4">
          <span className="text-md text-gray-400">Vanity URL</span>
        </div>
        <div className="col-span-8">
          <ABLInput
            size="md"
            color="cyan"
            value={data.vanityUrl}
            variant="standard"
            readOnly
          />
        </div>
      </div>
    </div>
  );

  const FormList = (
    <div className="w-full">
      <div className="flex w-full gap-2">
        <ABLButton
          size="sm"
          variant="outlined"
          className="jusitfy-between p flex items-center gap-1 !rounded-none p-[4px] text-white !shadow-none"
          onClick={() => addForm("Text")}
        >
          <HiPlus className="text-[14px] text-gray-400" />{" "}
          <span className="text-[12px] text-gray-400">Input</span>
        </ABLButton>
        <ABLButton
          size="sm"
          variant="outlined"
          className="jusitfy-between p flex items-center gap-1 !rounded-none p-[4px] text-white !shadow-none"
          onClick={() => addForm("Dropdown")}
        >
          <HiPlus className="text-[14px] text-gray-400" />{" "}
          <span className="text-[12px] text-gray-400">Select</span>
        </ABLButton>
        <ABLButton
          size="sm"
          variant="outlined"
          className="jusitfy-between p flex items-center gap-1 !rounded-none p-[4px] text-white !shadow-none"
          onClick={() => addForm("Multiple Choice")}
        >
          <HiPlus className="text-[14px] text-gray-400" />{" "}
          <span className="text-[12px] text-gray-400">Multiple Choice</span>
        </ABLButton>
      </div>
      <div className="mt-2 w-full divide-y divide-dashed divide-[rgb(0,213,251,0.6)]">
        {data.formList.length > 0 ? (
          data.formList.map((item, index) => {
            const { type, label, placeholder, valueList } = item;
            return (
              <div className="grid grid-cols-12 gap-2 py-6" key={index}>
                <div className="col-span-3 pt-3">
                  <span className="text-md text-gray-400">{type}</span>
                </div>
                <div className="col-span-7">
                  <ABLInput
                    variant="standard"
                    size="md"
                    color="cyan"
                    label="label"
                    value={label}
                    onChange={({ target: { value } }) =>
                      changeFormValue(index, value, "label")
                    }
                  />
                  <div className="py-2" />
                  <ABLInput
                    variant="standard"
                    size="md"
                    label="placeholder"
                    color="cyan"
                    value={placeholder}
                    onChange={({ target: { value } }) =>
                      changeFormValue(index, value, "placeholder")
                    }
                  />
                  {type !== "Text" ? (
                    <div className="w-full pt-4">
                      <p className="text-sm text-gray-300">Choices</p>
                      <p className="mb-4 text-xs text-gray-500">
                        Each choice must be on a separate line
                      </p>
                      <ABLTextArea
                        size="md"
                        color="cyan"
                        variant="standard"
                        label="Description"
                        value={valueList}
                        className="font-normal !text-gray-400"
                        onChange={({ target: { value } }) =>
                          changeFormValue(index, value, "valueList")
                        }
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="col-span-2 flex justify-evenly pt-3">
                  <IconButton
                    variant="text"
                    className="rounded"
                    size="sm"
                    onClick={() => duplicate(index)}
                  >
                    <HiOutlineDuplicate className="text-xl text-gray-400" />
                  </IconButton>
                  <IconButton
                    variant="text"
                    className="rounded"
                    size="sm"
                    onClick={() => deleteForm(index)}
                  >
                    <HiOutlineTrash className="text-xl text-gray-400" />
                  </IconButton>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );

  const GeneratePrompt = (
    <Tagify
      onClick={(text, type) => console.log(text, type)}
      detectHashtags={false}
    >
      <p>This is a #React component with help of #ReactTagify!</p>
    </Tagify>
  );

  const accordionPanel = [
    {
      title: "App Basics",
      content: AppBasic,
      isValid: data.title !== "" && data.description !== "",
    },
    { title: "Form", content: FormList, isValid: data.formList.length },
    { title: "AI Model", content: GeneratePrompt, isValid: false },
    { title: "Publish & Share", content: <div></div>, isValid: false },
  ];

  return (
    <div className="h-full">
      <div className="grid h-full grid-cols-12 gap-8">
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
                  <span>airbotlab.com/appview/{data.vanityUrl}</span>
                </div>
              </div>
              <div
                style={{ color: `${data.textColor}` }}
                className="grid h-[calc(100%-40px)] grid-cols-1 gap-24 overflow-auto p-4 laptop:grid-cols-2"
              >
                <div className="col-span-1 break-words">
                  <h1 className="text-7xl font-bold">{data.title}</h1>
                  <p className="mt-2 text-lg">{data.description}</p>
                </div>
                <div className="col-span-1">
                  {data.formList.map(
                    ({ type, label, placeholder, valueList }, index) =>
                      textToComponent(
                        type,
                        label,
                        placeholder,
                        valueList,
                        index
                      )
                  )}
                  <ABLButton
                    className="m-auto mt-8 flex items-center gap-4"
                    style={{
                      backgroundColor: `${data.buttonColor}`,
                    }}
                    size="lg"
                  >
                    <span className="text-lg">Submit</span>
                    <HiExternalLink className="text-xl" />
                  </ABLButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewApp;
