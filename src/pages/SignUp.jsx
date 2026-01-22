import React from 'react';
import { Link } from 'react-router';
import Button from '../ui/Button';
import { Stepper } from '../utils/Stepper';
import SocialButtons from '../components/signUp/SocialButtons';
import { EmailField } from '../components/signUp/InputFields';
import Header from '../components/signUp/Header';
import OrDivider from '../helpers/OrDivider';

const SignUp = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-175 px-6 py-12 flex flex-col items-center">

                {/* 1. Header */}
                <Header />

                {/* ----------------- Stepper */}
                <Stepper />

                {/* 3. Form Input */}
                <EmailField />

                {/* 4. Next Button */}
                <Button variant='authButton'>
                    Next
                </Button>

                {/* 5. Divider */}
                <OrDivider />

                {/* 6. Social Buttons */}
                <SocialButtons />

            </div>
        </div>
    );
};

export default SignUp;