import Input from "../../ui/Input"

export const EmailField = ({ onChange, error }) => {
  return (
    <div className="w-full mb-6">
      <Input
        label="What’s your email?"
        variant="signup"
        placeholder="Enter your email address"
        error={error}
        id="email"
        name="email"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export const InfoField = ({ onChangeFullname, onChangePhone, fullnameError, phoneError }) => {
  return (
    <div className="w-full mb-6 flex flex-col gap-y-4">
      <Input
        label="What’s your Fullname?"
        variant="signup"
        placeholder="Enter your Fullname"
        error={fullnameError}
        type="text"
        id="name"
        name="name"
        onChange={(e) => onChangeFullname(e.target.value)}
      />
      <Input
        label="What’s your Phone number?"
        variant="signup"
        placeholder="Enter your phone number"
        error={phoneError}
        type="number"
        id="phone"
        name="phone"
        onChange={(e) => onChangePhone(e.target.value)}
      />
    </div>
  )
}

export const PasswordField = ({ onChangePassword, onChangConfirmPass, passwordError, ConfirmError }) => {
  return (
    <div className="w-full mb-6 flex flex-col gap-y-4">
      <Input
        label="Create a password"
        variant="signup"
        placeholder="Enter your password"
        error={passwordError}
        type="password"
        id="password"
        name="password"
        onChange={(e) => onChangePassword(e.target.value)}
      />
      <Input
        label="Confirm password"
        variant="signup"
        placeholder="Enter your password again"
        error={ConfirmError}
        type="password"
        id="confirm password"
        name="confirm password"
        onChange={(e) => onChangConfirmPass(e.target.value)}
      />
    </div>
  )
}