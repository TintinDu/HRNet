import { useState } from "react";
import { CustomInput, FieldSet, StyledForm, SubmitButton } from "./style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(new Date());
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [department, setDepartment] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const states = ["State 1", "State 2", "State 3"];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmit} method="POST">
      <label>First Name</label>
      <CustomInput
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label>Last Name</label>
      <CustomInput
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <label>Date of Birth</label>
      <DatePicker
        selected={dateOfBirth}
        onChange={(date) => setDateOfBirth(date)}
      />

      <label>Start Date</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />

      <FieldSet className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <CustomInput
          id="street"
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />

        <label htmlFor="city">City</label>
        <CustomInput
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label htmlFor="state">State</label>
        <select
          name="state"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <label htmlFor="zip-code">Zip Code</label>
        <CustomInput
          id="zip-code"
          type="number"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </FieldSet>

      <label>Department</label>
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">Select Department</option>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Engineering">Engineering</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Legal">Legal</option>
      </select>

      <SubmitButton type="submit">Save</SubmitButton>
    </StyledForm>
  );
}
