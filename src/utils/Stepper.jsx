export const Stepper = ({ step, setStep }) => {
    return (
        <div className="w-full flex items-start justify-between mb-10">

            <div className="flex flex-col items-center w-fit ">
                <div className={`stepper-circle ${step >= 1 ? "active bg-coil text-white" : "bg-gray-400 text-white"} w-6 h-6 rounded-full flex items-center justify-center text-xs pt-px font-bold mb-2`}>
                    1
                </div>
                <span className={`${step >= 1 ? "text-text-primary" : "text-text-muted"} text-xs font-medium whitespace-nowrap`}>
                    Enter your email address
                </span>
            </div>

            <div className={`flex-1 h-px mt-3 mx-2 transition-all duration-600 ${step >= 2 ? "bg-coil" : "bg-text-muted"}`}></div>

            <div className="flex flex-col items-center w-fit">
                <div className={`stepper-circle ${step >= 2 ? "active bg-coil text-white" : "bg-gray-400 text-white"} w-6 h-6 rounded-full flex items-center justify-center text-xs pt-px font-bold mb-2`}>
                    2
                </div>
                <span className={`${step >= 2 ? "text-text-primary" : "text-text-muted"} text-xs whitespace-nowrap`}>
                    Provide your basic info
                </span>
            </div>

            <div className={`flex-1 h-px mt-3 mx-2 transition-all duration-600 ${step >= 3 ? "bg-coil" : "bg-text-muted"}`}></div>

            <div className="flex flex-col items-center w-fit">
                <div className={`stepper-circle ${step >= 3 ? "active bg-coil text-white" : "bg-gray-400 text-white"} w-6 h-6 rounded-full flex items-center justify-center text-xs pt-px font-bold mb-2`}>
                    3
                </div>
                <span className={`${step >= 3 ? "text-text-primary" : "text-text-muted"} text-xs whitespace-nowrap`}>
                    Create your password
                </span>
            </div>

        </div>
    )
}
