import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { TrashIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Select,
  Option,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { HiCheck, HiX } from "react-icons/hi";
 
const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Online",
    value: "online",
  },
  {
    label: "Offline",
    value: "offline",
  },
];
 
const TABLE_HEAD = ["No", "App", "Enable", "Trial", "Start", "End", "Days left", "#Runs"];
 
const TABLE_ROWS = [
  {
    app: 'FROG Base',
    enable: true,
    trial: false,
    start: '03.21.2023',
    end: '06.12.2024',
    daysleft: '37',
    runs: '434'
  },
  {
    app: 'FROG Lathe',
    enable: false,
    trial: true,
    start: '03.21.2023',
    end: '06.12.2024',
    daysleft: '37',
    runs: '434'
  },
  {
    app: 'FROG 4D',
    enable: false,
    trial: true,
    start: '03.21.2023',
    end: '06.12.2024',
    daysleft: '37',
    runs: '434'
  },
  {
    app: 'FROG Wire 2D',
    enable: true,
    trial: false,
    start: '03.21.2023',
    end: '06.12.2024',
    daysleft: '37',
    runs: '434'
  },
  {
    app: 'FROG Wire 3D',
    enable: true,
    trial: false,
    start: '03.21.2023',
    end: '06.12.2024',
    daysleft: '37',
    runs: '434'
  },
];
 
export default function Customer() {
  return (
    <>
      <Card className="w-full p-2">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Customer Form
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about customer & PCID
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button className="flex items-center gap-3" color="blue" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add PCID
              </Button>
              <Button className="flex items-center gap-3" color="red" size="sm">
                <TrashIcon strokeWidth={2} className="h-4 w-4" /> Delete PCID
              </Button>
              <Button className="flex items-center gap-3" color="red" size="sm">
                <TrashIcon strokeWidth={2} className="h-4 w-4" /> Delete Customer
              </Button>
            </div>
          </div>
          <div className="py-4">
            <h1>Created: 01.01.2023</h1>
            <h1>Company: </h1>
            <h1>Address: </h1>
            <h1>Contact person: </h1>
            <h1>Phone: </h1>
            <h1>Mail:</h1>
            <h1>Notes:</h1>
            <h1>User: R&D Department - Anthony Blanch</h1>
            <h1>Notes: Brian Novak in Sales, brian@mail.com</h1>
          </div>
          <div className="w-[250px]">
            <Select label="Select Version" size="sm" value={"3"}>
              <Option value="1">0EID3820KSOE</Option>
              <Option value="2">8DS3NEO9EKD9</Option>
              <Option value="3">8DN1N9D0XMXL</Option>
              <Option value="4">0A92KEU92KN</Option>
              <Option value="5">02JNIVANQ0S</Option>
            </Select>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                      {index !== TABLE_HEAD.length - 1 && (
                        <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ app, enable, trial, start, end, daysleft, runs }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
  
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <span>{index + 1}</span>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {app}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        {
                          enable ? <HiCheck /> : <HiX />
                        }
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        {
                          enable ? <HiCheck /> : <HiX />
                        }
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {start}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {end}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {daysleft}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {runs}
                      </Typography>
                    </td>
                    {/* <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text" color="blue-gray">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Detail User">
                        <IconButton variant="text" color="blue-gray">
                          <EyeIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" color="blue-gray" size="sm">
              Previous
            </Button>
            <Button variant="outlined" color="blue-gray" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}