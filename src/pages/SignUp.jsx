import React, { useState } from 'react';
import Button from '../ui/Button';
import { Stepper } from '../utils/Stepper';
import SocialButtons from '../components/signUp/SocialButtons';
import { EmailField } from '../components/signUp/InputFields';
import Header from '../components/signUp/Header';
import OrDivider from '../helpers/OrDivider';

const SignUp = () => {
    const [step, setStep] = useState(1)

    const [formData, setFormData] = useState({
        email: "",
        emailError: ""
    })

    // ------------ Form handler 
    const handleForm = (e)=>{
        e.preventDefault()
        if (!formData.email) return setFormData(prev => ({...prev, emailError: "Please enter your email address"}))
        
        // -------- Step 2
        console.log(formData.email)
    }


    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleForm} className="w-full max-w-175 px-6 py-12 flex flex-col items-center">

                {/* -------- Header */}
                <Header />

                {/* -------- Stepper */}
                <Stepper step={step} />

                {/* -------- Form input */}
                <EmailField error={formData.emailError} onChange={(value) => setFormData(prev => ({ ...prev, email: value , emailError: ""}))} />

                {/* -------- Next button */}
                <Button variant='authButton' type="submit">
                    Next
                </Button>

                {/* -------- Or Divider */}
                <OrDivider />

                {/* -------- Social button */}
                <SocialButtons />

            </form>
        </div>
    );
};

export default SignUp;