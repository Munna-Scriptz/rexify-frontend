export const EmailField = () => {
  return (
    <div className="w-full mb-6">
      <label className="block text-sm text-coil mb-2 font-medium">
        What’s your email?
      </label>
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full border border-gray-300 rounded-lg text-text-primary px-4 py-3 text-sm focus:outline-none focus:border-coil focus:ring-1 transition-colors placeholder:text-gray-400"
      />
    </div>
  )
}