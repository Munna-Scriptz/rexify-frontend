import Input from "../../ui/Input"

export const EmailField = ({ onChange, error }) => {
  return (
    <div className="w-full mb-6">
      <Input
        label="What’s your email?"
        variant="signup"
        placeholder="Enter your email"
        error={error}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}