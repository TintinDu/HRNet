import { useState } from "react";
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

export function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(new Date());
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      zipCode,
    };
    // Submit form data to the server
    // await fetch("/api/employee", {
    //   method: "POST",
    //   body: data,
    // });

    console.log(data);

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
            onChange={(date) => setDateOfBirth(date)}
          />
        </InputWrapper>

        <InputWrapper>
          <CustomerLabel>Start Date</CustomerLabel>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
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
            data={departments}
            defaultValue={{ label: "Select Department", value: "", color: "" }}
          />
        </InputWrapper>

        <SubmitButton type="submit">Save</SubmitButton>
      </StyledForm>
    </>
  );
}
