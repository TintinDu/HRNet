import { lazy, useContext, Suspense, useState } from "react";
import {
  CustomInput,
  CustomLegend,
  CustomSmallLabel,
  CustomerLabel,
  DivError,
  FieldSet,
  InputWrapper,
  StyledForm,
  SubmitButton,
} from "./style";
import "react-datepicker/dist/react-datepicker.css";
import { departments, states } from "../../constants";
import { EmployeeContext } from "../../contexts";
const Dialog = lazy(() => import("../Dialog"));
const FormSelect = lazy(() => import("../Select"));
const DatePicker = lazy(() => import("react-datepicker"));

export function Form() {
  const employeeData = localStorage.getItem("employeeData");
  const { update, data } = useContext(EmployeeContext);
  const dataToUse = employeeData ? JSON.parse(employeeData) : data;
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [street, setStreet] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [department, setDepartment] = useState<string>("");

  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!firstName) newErrors.firstName = "First Name is required";
    if (!lastName) newErrors.lastName = "Last Name is required";
    if (!dateOfBirth) newErrors.dateOfBirth = "Date of Birth is required";
    if (!startDate) newErrors.startDate = "Start Date is required";
    if (!street) newErrors.street = "Street is required";
    if (!city) newErrors.city = "City is required";
    if (!zipCode) newErrors.zipCode = "Zip Code is required";
    if (!state) newErrors.state = "State is required";
    if (!department) newErrors.department = "Department is required";
    return newErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const dataToSubmit = {
      firstName,
      lastName,
      birthDate: dateOfBirth?.toLocaleDateString(),
      startDate: startDate?.toLocaleDateString(),
      department,
      street,
      city,
      state,
      zipCode,
    };
    update([...dataToUse, dataToSubmit]);
    localStorage.setItem(
      "employeeData",
      JSON.stringify([...dataToUse, dataToSubmit]),
    );

    setIsOpen(true);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <StyledForm onSubmit={handleSubmit} method="POST">
        <InputWrapper>
          <CustomerLabel>First Name</CustomerLabel>
          <CustomInput
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <DivError>{errors.firstName}</DivError>}
        </InputWrapper>

        <InputWrapper>
          <CustomerLabel>Last Name</CustomerLabel>
          <CustomInput
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <DivError>{errors.lastName}</DivError>}
        </InputWrapper>

        <InputWrapper>
          <CustomerLabel>Date of Birth</CustomerLabel>
          <DatePicker
            selected={dateOfBirth}
            onChange={(date) => setDateOfBirth(date as Date)}
            openToDate={new Date(1990, 0, 1)}
          />
          {errors.dateOfBirth && <DivError>{errors.dateOfBirth}</DivError>}
        </InputWrapper>

        <InputWrapper>
          <CustomerLabel>Start Date</CustomerLabel>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date as Date)}
            openToDate={new Date()}
          />
          {errors.startDate && <DivError>{errors.startDate}</DivError>}
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
              {errors.street && <DivError>{errors.street}</DivError>}
            </InputWrapper>

            <InputWrapper>
              <CustomSmallLabel htmlFor="city">City</CustomSmallLabel>
              <CustomInput
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              {errors.city && <DivError>{errors.city}</DivError>}
            </InputWrapper>

            <InputWrapper>
              <CustomSmallLabel htmlFor="state">State</CustomSmallLabel>
              <FormSelect
                data={states}
                defaultValue={{ label: "Select State", value: "", color: "" }}
                setData={setState}
              />
              {errors.state && <DivError>{errors.state}</DivError>}
            </InputWrapper>

            <InputWrapper>
              <CustomSmallLabel htmlFor="zip-code">Zip Code</CustomSmallLabel>
              <CustomInput
                id="zip-code"
                type="number"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
              {errors.zipCode && <DivError>{errors.zipCode}</DivError>}
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
          {errors.department && <DivError>{errors.department}</DivError>}
        </InputWrapper>

        <SubmitButton type="submit">Save</SubmitButton>
      </StyledForm>
    </Suspense>
  );
}
