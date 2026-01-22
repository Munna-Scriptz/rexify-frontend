import Input from "../../ui/Input"

export const EmailField = () => {
  return (
    <div className="w-full mb-6">
      <Input
        label="What’s your email?"
        variant="signup"
        placeHolder="Enter your email"
      />
    </div>
  )
}