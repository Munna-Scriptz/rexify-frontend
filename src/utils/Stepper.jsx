export const Stepper = () => {
    return (
        <div className="w-full flex items-start justify-between mb-10">

            {/* Step 1 */}
            <div className="flex flex-col items-center w-fit">
                <div className="w-6 h-6 rounded-full bg-coil text-white flex items-center justify-center text-xs font-bold mb-2">
                    1
                </div>
                <span className="text-xs text-text-primary font-medium whitespace-nowrap">Enter your email address</span>
            </div>

            {/* Line Spacer 1 */}
            <div className="flex-1 h-px bg-text-muted mt-3 mx-2"></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center w-fit">
                <div className="w-6 h-6 rounded-full bg-gray-400 text-white flex items-center justify-center text-xs font-bold mb-2">
                    2
                </div>
                <span className="text-xs text-text-muted whitespace-nowrap">Provide your basic info</span>
            </div>

            {/* Line Spacer 2 */}
            <div className="flex-1 h-px bg-text-muted mt-3 mx-2"></div>

            {/* Step 3 */}
            <div className="flex flex-col items-center w-fit">
                <div className="w-6 h-6 rounded-full bg-gray-400 text-white flex items-center justify-center text-xs font-bold mb-2">
                    3
                </div>
                <span className="text-xs text-text-muted whitespace-nowrap">Create your password</span>
            </div>

        </div>
    )
}