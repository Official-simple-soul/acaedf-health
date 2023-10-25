import React from "react";
import { RiAdminFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <div className='w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-pri to-gray-900 flex justify-center items-center'>
            <RiAdminFill className='h-10 w-auto text-white' />
          </div>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign in as Admin
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form
            className='space-y-6'
            action='#'
            method='POST'
            onSubmit={handleSignIn}
          >
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password
                </label>
                <div className='text-sm'>
                  <a
                    href='/'
                    rel='noreferrer'
                    className='font-semibold text-[#3E2753] hover:text-indigo-500'
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-[#3E2753] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Sign in
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Not a member?{" "}
            <a
              href='/'
              rel='noreferrer'
              className='font-semibold leading-6 text-pri hover:text-gray-900'
            >
              Request access
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
