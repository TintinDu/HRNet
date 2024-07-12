import Select, { StylesConfig } from "react-select";
import chroma from "chroma-js";

const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles: StylesConfig<{
  label: string;
  value: string;
  color: string;
}> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    width: "90%",
    margin: "0 auto",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    let backgroundColor;
    if (isDisabled) {
      backgroundColor = undefined;
    } else if (isSelected) {
      backgroundColor = data.color;
    } else if (isFocused) {
      backgroundColor = color.alpha(0.1).css();
    } else {
      backgroundColor = undefined;
    }

    let colorValue;
    if (isDisabled) {
      colorValue = "#ccc";
    } else if (isSelected) {
      colorValue = chroma.contrast(color, "white") > 2 ? "white" : "black";
    } else {
      colorValue = data.color;
    }

    let activeBackgroundColor;
    if (!isDisabled) {
      if (isSelected) {
        activeBackgroundColor = data.color;
      } else {
        activeBackgroundColor = color.alpha(0.3).css();
      }
    } else {
      activeBackgroundColor = undefined;
    }

    return {
      ...styles,
      backgroundColor,
      color: colorValue,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: activeBackgroundColor,
      },
    };
  },
  input: (styles) => ({
    ...styles,
    ...dot(),
    padding: "0.25rem",
    fontSize: "0.9rem",
    marginTop: "0.25rem",
    display: "flex",
    alignSelf: "center",
  }),
  placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

export const FormSelect = ({
  data,
  defaultValue,
  setData,
}: {
  data: { value: string; label: string; color: string }[];
  defaultValue: { value: string; label: string; color: string };
  setData: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Select
      options={data}
      styles={colourStyles}
      defaultValue={defaultValue}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onChange={(e: any) => {
        setData(e.value);
      }}
    />
  );
};
