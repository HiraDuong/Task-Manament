import React from "react";
import Select from "react-select";
import chroma from "chroma-js";

const colourOptions = [
  { value: "study", label: "Study", color: "#00B8D9" },
  { value: "work", label: "Work", color: "#0052CC" },
  { value: "entertain", label: "Entertain", color: "#5243AA" },
  { value: "job", label: "Jobs", color: "#FF5630" },
  { value: "business", label: "Business", color: "#FF8B00" },
];

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};

const MultiSelect = ({ setLabels }) => {
    const [selectedLabels, setSelectedLabels] = React.useState([]);
    const handleChange = (selectedOptions) => {
      // Truyền giá trị đã chọn lên component cha thông qua props
      setLabels(selectedOptions);
        setSelectedLabels(selectedOptions);
    };
  
    return (
      <div className="multi-select">
        <Select
          closeMenuOnSelect={false}
          isMulti
          options={colourOptions}
          styles={colourStyles}
          onChange={handleChange}
        />
        
      </div>
   
    );
  };
  
  export default MultiSelect;
  

// Path: frontend/src/components/Task/Task.js
