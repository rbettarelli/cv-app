import { styled } from "styled-components";
import InputField from "./InputField";

const PersonalFieldContainer = styled.div`
 
  display: flex
  flex-direction: row

  
  
`;
const NameFields = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitlePersonalInfo = styled.h1``;

export default function PersonalField({
  firstName,
  lastName,
  email,
  phone,
  onChange,
}) {
  return (
    <PersonalFieldContainer>
      <TitlePersonalInfo> Personal Info </TitlePersonalInfo>
      <NameFields>
        <label for="fistName">First Name</label>

        <InputField
          name="firstName"
          className="form-control"
          type="text"
          value={firstName}
          onChange={onChange}
        />
        <label for="lastName">Last Name</label>
        <InputField
          name="lastName"
          className="form-control"
          type="text"
          value={lastName}
          onChange={onChange}
        />
      </NameFields>
      <label for="email">E-mail</label>
      <InputField
        name="email"
        type="text"
        placeholder="Email"
        value={email}
        onChange={onChange}
      />
      <label for="phone">Phone</label>
      <InputField
        name="phone"
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={onChange}
      />
    </PersonalFieldContainer>
  );
}
