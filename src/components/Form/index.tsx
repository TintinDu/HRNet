import { lazy, Suspense, useContext, useState } from "react";
import {
  CustomInput,
  CustomLegend,
  CustomSmallLabel,
  DivError,
  FieldSet,
  InputWrapper,
  StyledForm,
  SubmitButton,
} from "./style";
import "react-datepicker/dist/react-datepicker.css";
import { departments, states } from "../../constants";
import { EmployeeContext } from "../../contexts";
import CustomLabel from "../LabelForm";
import Dialog from "../Dialog";
import FormSelect from "../Select";
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
    <>
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <StyledForm onSubmit={handleSubmit} method="POST">
        <InputWrapper>
          <CustomLabel htmlFor="first-name">First Name</CustomLabel>
          <CustomInput
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="given-name"
          />
          {errors.firstName && <DivError>{errors.firstName}</DivError>}
        </InputWrapper>

        <InputWrapper>
          <CustomLabel htmlFor="last-name">Last Name</CustomLabel>
          <CustomInput
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="family-name"
          />
          {errors.lastName && <DivError>{errors.lastName}</DivError>}
        </InputWrapper>

        <Suspense fallback={<div>Loading...</div>}>
          <InputWrapper>
            <CustomLabel htmlFor="date-of-birth">Date of Birth</CustomLabel>
            <DatePicker
              id="date-of-birth"
              selected={dateOfBirth}
              onChange={(date) => setDateOfBirth(date as Date)}
              openToDate={new Date(1990, 0, 1)}
              autoComplete="bday"
            />
            {errors.dateOfBirth && <DivError>{errors.dateOfBirth}</DivError>}
          </InputWrapper>
        </Suspense>

        <InputWrapper>
          <CustomLabel htmlFor="start-date">Start Date</CustomLabel>
          <DatePicker
            id="start-date"
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
                autoComplete="street-address"
              />
              {errors.street && <DivError>{errors.street}</DivError>}
            </InputWrapper>

            <InputWrapper>
              <CustomSmallLabel htmlFor="city">City</CustomSmallLabel>
              <CustomInput
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                autoComplete="address-level2"
              />
              {errors.city && <DivError>{errors.city}</DivError>}
            </InputWrapper>

            <InputWrapper>
              <CustomSmallLabel htmlFor="state">State</CustomSmallLabel>
              <FormSelect
                id="state"
                data={states}
                defaultValue={{ label: "Select State", value: "", color: "" }}
                setData={setState}
                autoComplete="address-level1"
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
                autoComplete="postal-code"
              />
              {errors.zipCode && <DivError>{errors.zipCode}</DivError>}
            </InputWrapper>
          </FieldSet>
        </InputWrapper>

        <InputWrapper>
          <CustomLabel htmlFor="department">Department</CustomLabel>
          <FormSelect
            id="department"
            setData={setDepartment}
            data={departments}
            defaultValue={{ label: "Select Department", value: "", color: "" }}
            autoComplete="organization"
          />
          {errors.department && <DivError>{errors.department}</DivError>}
        </InputWrapper>

        <SubmitButton type="submit">Save</SubmitButton>
      </StyledForm>
    </>
  );
}
