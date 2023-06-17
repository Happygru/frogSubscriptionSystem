import ABLInput from "@/Components/ABLInput";
import ABLSelect from "@/Components/ABLSelect";

export const textToComponent = (type, label, placeholder, valueList, index) => {
  switch (type) {
    case "Text":
      return (
        <div className="mt-2" key={index}>
          <p>{label === "" ? "Unvalued" : label}</p>
          <ABLInput label={placeholder} color="cyan" className="bg-white" />
        </div>
      );
    case "Dropdown":
      return (
        <div className="mt-2" key={index}>
          <p>{label === "" ? "Unvalued" : label}</p>
          <ABLSelect placeholder={placeholder} />
        </div>
      );
    case "Multiple Choice":
      return (
        <div className="mt-2" key={index}>
          <p>{label === "" ? "Unvalued" : label}</p>
          <ABLSelect placeholder={placeholder} isMulti={true} />
        </div>
      );
  }
};
