import { ArrowRight } from 'lucide-react'
import { useState } from 'react';
import {publicRequest} from '../utils/axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Register() {
    const [credentials, setCredentials] = useState({
		username: "",	
		email: "",
		password: "",
		password_confirmation: "",
	});
    const navigate=useNavigate()
	const [errors, setErrors] = useState({});

	const inputChangeHandler = (e) => {
		setCredentials((prevCredentials) => ({
			...prevCredentials,
			[e.target.name]: e.target.value,
		}));
	};

	const SubmitHandler = async (event) => {
		event.preventDefault();
		try {
			await publicRequest.post("/auth/register", credentials);
          
			toast.success("User registered successfully");
			navigate('/login')
		} catch (err) {
			const inputerror = err.response.data.errors;
			const error = err.response.data.message;
			toast.error(error);
			setErrors(inputerror);
		}
	};
  return (
    <section className='p-24'>
     <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full rounded-md object-cover object-top"
              src="https://www.codingnepalweb.com/wp-content/uploads/2021/12/Build-A-Random-Quote-Generator-in-HTML-CSS-JavaScript.jpg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white">
Sign up to create, manage quotes with our community.              </h3>
           
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{' '}
              <NavLink
              to='/login'
               
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </NavLink>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      name='username'
                      value={credentials.username}
                      onChange={inputChangeHandler}
                      placeholder="Username"
                      id="name"
                    ></input>
                  </div>
                  {errors?.username && (
								<p className="text-red-700">{errors.username}</p>
							)}
                </div>
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      name='email'
                      value={credentials.email}
                      onChange={inputChangeHandler}
                      placeholder="Email"
                      id="email"
                    ></input>
                  </div>
                  {errors?.email && (
								<p className="text-red-700">{errors.email}</p>
							)}
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      onChange={inputChangeHandler}
                      value={credentials.password}
                      name='password'
                      placeholder="Password"
                      id="password"
                    ></input>
                  </div>
                  {errors?.password && (
								<p className="text-red-700">{errors.password}</p>
							)}
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      ConfirmPassword{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      name='password_confirmation'
                      onChange={inputChangeHandler}
                      value={credentials.password_confirmation}
                      placeholder="ConfirmPassword"
                      id="password"
                    ></input>
                  </div>
                  {errors?.password && (
								<p className="text-red-700">{errors.password}</p>
							)}
                </div>
                <div>
                  <button
                    type="button"
                    onClick={SubmitHandler}
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Account <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register;