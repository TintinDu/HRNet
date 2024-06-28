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
import { TintinDuDialog } from "tintindu-dialog";

export function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(new Date());
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const states = [
    { value: "FRA", label: "France", color: "#0052cc" },
    { value: "USA", label: "United States", color: "#5243AA" },
    { value: "GBR", label: "United Kingdom", color: "#FF5630" },
    { value: "DEU", label: "Germany", color: "#FF8B00" },
    { value: "ITA", label: "Italy", color: "#FFC400" },
  ];

  const departments = [
    { value: "Sales", label: "Sales", color: "#FF8B00" },
    { value: "Marketing", label: "Marketing", color: "#FFC400" },
    { value: "Engineering", label: "Engineering", color: "#36B37E" },
    { value: "Human Resources", label: "Human Resources", color: "#00B8D9" },
    { value: "Legal", label: "Legal", color: "#0052CC" },
  ];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOpen(true);
  };

  return (
    <>
      <TintinDuDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1>Success</h1>
        <p>Your form has been submitted successfully</p>
      </TintinDuDialog>
      <StyledForm onSubmit={handleSubmit} method="POST">
        <InputWrapper>
          <CustomerLabel>First Name</CustomerLabel>
          <CustomInput
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <CustomerLabel>Last Name</CustomerLabel>
          <CustomInput
            type="text"
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
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper>
              <CustomSmallLabel htmlFor="city">City</CustomSmallLabel>
              <CustomInput
                id="city"
                type="text"
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
