import { useState } from 'react';
import ABLButton from "@/Components/ABLButton"
import ABLInput from "@/Components/ABLInput"
import { Radio, Checkbox } from "@material-tailwind/react";

const Dashboard = () => {

  const [ pcid, setPCID ] = useState("0E87W9V793KSUVH82");

  return (
    <>
      <div className="w-full grid grid-cols-11 divide-y desktop:divide-x desktop:divide-y-0">
        <div className="col-span-11 desktop:col-span-5 p-4">
          <h1 className="text-white text-xl font-semibold">PC</h1>
          <div className="p-4 gap-6 flex flex-col">
            <div>
              <p className="text-white">PC fingerprint</p>
              <div className="flex gap-4 mt-4">
                <div className="w-3/5 max-w-[400px]"><ABLInput defaultvalue="00AA006F1C1C6E" size="sm" label="PC ID" value={pcid} /></div>
                <ABLButton size="sm">Get PC ID</ABLButton>
              </div>
            </div>
            <div className='pl-6 flex flex-col'>
              <Radio id="radio1" name="type" label={<label for="radio1" className='text-white cursor-pointer'>FROG Lathe</label>} />
              <Radio id="radio2" name="type" label={<label for="radio2" className='text-white cursor-pointer'>FROG 4D</label>} />
              <Radio id="radio3" name="type" label={<label for="radio3" className='text-white cursor-pointer'>FROG Wire2D</label>} />
              <Radio id="radio4" name="type" label={<label for="radio4" className='text-white cursor-pointer'>FROG Wire3D</label>} />
              <Radio id="radio5" name="type" label={<label for="radio5" className='text-white cursor-pointer'>FROG Base</label>} />
            </div>
            <div>
              <p className="text-white">Message to Server</p>
              <div className="flex gap-4 mt-4">
                <div className="w-3/5 max-w-[400px]"><ABLInput defaultvalue="00AA006F1C1C6E" size="sm" label="Permit ID" value={pcid} /></div>
                <ABLButton size="sm">Send to Server</ABLButton>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-11 desktop:col-span-6 p-4">
          <h1 className="text-white text-xl font-semibold">Server</h1>
          <div className='p-4 gap-2 flex flex-col'>
            <div className='grid grid-cols-10 items-center'>
              <div className='col-span-3'>
                <p className='text-white'>&lt;PC Fingerprint&gt;</p>
              </div>
              <div className='col-span-4 flex justify-between items-center gap-8'>
                <p className='text-white'>&lt;Today&gt;</p>
                <ABLInput label="Days Left" className="w-full" defaultValue="14" />
              </div>
              <div className='col-span-3'>
                <Checkbox id="trial" label={<label for="trial text-white">Trial version</label>} defaultChecked />;
              </div>
            </div>
            <div className='w-full flex flex-col gap-4'>
              <div className='grid grid-cols-10 items-center'>
                <div className='col-span-4 lgcomputer:col-span-3'>
                  <Checkbox id="lathe" label={<label for="lathe" className='text-white cursor-pointer'>FROG Lathe</label>} defaultChecked />;
                </div>
                <div className='col-span-6 lgcomputer:col-span-5 flex gap-4'>
                  <div className='flex gap-2'>
                    <ABLInput label="From" className="w-full" defaultValue=" " />
                    <ABLInput label="To" className="w-full" defaultValue=" " />
                  </div>
                  <ABLInput label="Days left" className="w-full" defaultValue=" " />
                </div>
              </div>
              <div className='grid grid-cols-10 items-center'>
                <div className='col-span-4 lgcomputer:col-span-3'>
                  <Checkbox id="frog-4d" label={<label for="frog-4d" className='cursor-pointer text-white'>FROG 4D</label>} defaultChecked />;
                </div>
                <div className='col-span-6 lgcomputer:col-span-5 flex gap-4'>
                  <div className='flex gap-2'>
                    <ABLInput label="From" className="w-full" defaultValue=" " />
                    <ABLInput label="To" className="w-full" defaultValue=" " />
                  </div>
                  <ABLInput label="Days left" className="w-full" defaultValue=" " />
                </div>
              </div>
              <div className='grid grid-cols-10 items-center'>
                <div className='col-span-4 lgcomputer:col-span-3'>
                  <Checkbox id="frog-2d" label={<label for="frog-2d" className='cursor-pointer text-white'>FROG Wire2D</label>} defaultChecked />;
                </div>
                <div className='col-span-6 lgcomputer:col-span-5 flex gap-4'>
                  <div className='flex gap-2'>
                    <ABLInput label="From" className="w-full" defaultValue=" " />
                    <ABLInput label="To" className="w-full" defaultValue=" " />
                  </div>
                  <ABLInput label="Days left" className="w-full" defaultValue=" " />
                </div>
              </div>
              <div className='grid grid-cols-10 items-center'>
                <div className='col-span-4 lgcomputer:col-span-3'>
                  <Checkbox id="frog-3d" label={<label for="frog-3d" className='cursor-pointer text-white'>FROG Wire3D</label>} defaultChecked />;
                </div>
                <div className='col-span-6 lgcomputer:col-span-5 flex gap-4'>
                  <div className='flex gap-2'>
                    <ABLInput label="From" className="w-full" defaultValue=" " />
                    <ABLInput label="To" className="w-full" defaultValue=" " />
                  </div>
                  <ABLInput label="Days left" className="w-full" defaultValue=" " />
                </div>
              </div>
              <div className='grid grid-cols-10 items-center'>
                <div className='col-span-4 lgcomputer:col-span-3'>
                  <Checkbox id="frog-base" label={<label for="frog-base" className='text-white'>FROG Base</label>} defaultChecked />;
                </div>
                <div className='col-span-6 lgcomputer:col-span-5 flex gap-4'>
                  <div className='flex gap-2'>
                    <ABLInput label="From" className="w-full" defaultValue=" " />
                    <ABLInput label="To" className="w-full" defaultValue=" " />
                  </div>
                  <ABLInput label="Days left" className="w-full" defaultValue=" " />
                </div>
              </div>
            </div>
            <div>
              <p className="text-white">Reply to PC</p>
              <div className="flex gap-4 mt-4">
                <div className="w-3/5 max-w-[300px]"><ABLInput defaultvalue="0F1C1C6E" size="sm" label="PC ID" value={pcid} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard