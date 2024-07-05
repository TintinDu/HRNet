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
