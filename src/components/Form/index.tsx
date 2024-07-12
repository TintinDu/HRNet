import { useContext, useState } from "react";
import {
  CustomInput,
  CustomLegend,
  CustomSmallLabel,
  CustomerLabel,
  FieldSet,
  InputWrapper,
  StyledForm,
  SubmitButton,
} from "./style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormSelect } from "../Select";
import { departments, states } from "../../constants";
import { Dialog } from "../Dialog";
import { Context } from "../../contexts";

export function Form() {
  const { data, update } = useContext(Context);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [street, setStreet] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [department, setDepartment] = useState<string>("");

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dataToSubmit = {
      firstName,
      lastName,
      birthDate: dateOfBirth.toLocaleDateString(),
      startDate: startDate.toLocaleDateString(),
      department,
      street,
      city,
      state,
      zipCode,
    };
    update([...data, dataToSubmit]);

    setIsOpen(true);
  };

  return (
    <>
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <StyledForm onSubmit={handleSubmit} method="POST">
        <InputWrapper>
          <CustomerLabel>First Name</CustomerLabel>
          <CustomInput
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <CustomerLabel>Last Name</CustomerLabel>
          <CustomInput
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <CustomerLabel>Date of Birth</CustomerLabel>
          <DatePicker
            selected={dateOfBirth}
            onChange={(date) => setDateOfBirth(date as Date)}
          />
        </InputWrapper>

        <InputWrapper>
          <CustomerLabel>Start Date</CustomerLabel>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date as Date)}
          />
        </InputWrapper>

        <InputWrapper>
          <FieldSet className="address">
            <CustomLegend>Address</CustomLegend>

            <InputWrapper>
              <CustomSmallLabel htmlFor="street">Street</CustomSmallLabel>
              <CustomInput
                id="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper>
              <CustomSmallLabel htmlFor="city">City</CustomSmallLabel>
              <CustomInput
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper>
              <CustomSmallLabel htmlFor="state">State</CustomSmallLabel>
              <FormSelect
                data={states}
                defaultValue={{ label: "Select State", value: "", color: "" }}
                setData={setState}
              />
            </InputWrapper>

            <InputWrapper>
              <CustomSmallLabel htmlFor="zip-code">Zip Code</CustomSmallLabel>
              <CustomInput
                id="zip-code"
                type="number"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </InputWrapper>
          </FieldSet>
        </InputWrapper>

        <InputWrapper>
          <CustomerLabel>Department</CustomerLabel>
          <FormSelect
            setData={setDepartment}
            data={departments}
            defaultValue={{ label: "Select Department", value: "", color: "" }}
          />
        </InputWrapper>

        <SubmitButton type="submit">Save</SubmitButton>
      </StyledForm>
    </>
  );
}
