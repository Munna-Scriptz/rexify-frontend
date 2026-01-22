import React from 'react';

// You can use 'react-icons' or stick to SVGs for brand logos like Google/FB
// I've included the raw SVGs here so it works instantly without installing new packages.

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sans">
      <div className="w-full max-w-[600px] px-6 py-12 flex flex-col items-center">
        
        {/* 1. Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Create an account
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Already have an account?{' '}
          <a href="/login" className="text-black font-semibold underline underline-offset-2">
            Log in
          </a>
        </p>

        {/* 2. Stepper */}
        <div className="w-full flex items-center justify-between mb-10 relative">
          {/* Connecting Lines (Absolute to sit behind circles) */}
          <div className="absolute top-3 left-0 w-full h-[1px] bg-gray-200 -z-10" />
          
          {/* Step 1 */}
          <div className="flex flex-col items-center bg-white px-2">
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold mb-2">
              1
            </div>
            <span className="text-xs text-gray-600 font-medium">Enter your email address</span>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center bg-white px-2">
            <div className="w-6 h-6 rounded-full bg-gray-400 text-white flex items-center justify-center text-xs font-bold mb-2">
              2
            </div>
            <span className="text-xs text-gray-400">Provide your basic info</span>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center bg-white px-2">
            <div className="w-6 h-6 rounded-full bg-gray-400 text-white flex items-center justify-center text-xs font-bold mb-2">
              3
            </div>
            <span className="text-xs text-gray-400">Create your password</span>
          </div>
        </div>

        {/* 3. Form Input */}
        <div className="w-full mb-6">
          <label className="block text-sm text-gray-600 mb-2 font-medium">
            What’s your email?
          </label>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors placeholder:text-gray-400"
          />
        </div>

        {/* 4. Next Button */}
        <button className="w-full bg-[#C4C4C4] text-white font-semibold py-3.5 rounded-full mb-10 hover:bg-black transition-colors duration-300">
          Next
        </button>

        {/* 5. Divider */}
        <div className="w-full flex items-center gap-4 mb-10">
          <div className="h-[1px] bg-gray-300 flex-1"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="h-[1px] bg-gray-300 flex-1"></div>
        </div>

        {/* 6. Social Buttons */}
        <div className="w-full flex flex-col sm:flex-row gap-4">
          
          {/* Facebook */}
          <button className="flex-1 flex items-center justify-center gap-3 border border-gray-400 rounded-full py-3 hover:bg-gray-50 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="text-gray-700 text-sm font-medium">Sign up with Facebook</span>
          </button>

          {/* Google */}
          <button className="flex-1 flex items-center justify-center gap-3 border border-gray-400 rounded-full py-3 hover:bg-gray-50 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-gray-700 text-sm font-medium">Sign up with Google</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default SignUp;