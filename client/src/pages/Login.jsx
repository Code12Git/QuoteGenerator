import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';
import {publicRequest} from '../utils/axios';
 function Login() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
		
		email: "",
		password: "",
		
	});
    useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      navigate("/");
    }
  }, [navigate]);
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
		const response= await publicRequest.post("/auth/login", credentials);
      localStorage.setItem("user", JSON.stringify(response.data));
			localStorage.setItem("token", JSON.stringify(response.data.token));
			toast.success("User Logged in successfully");
			navigate('/')
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
              src="https://marketplace.canva.com/EAEC1k6F1Gg/4/0/1600w/canva-pink-organic-inspirational-quote-instagram-post-E4RJ7LqJ7IE.jpg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white">
Log in to access your quotes, update your collection, and discover inspiring words.              </h3>
           
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>
            <p className="mt-2 text-sm text-gray-600">
             Don&apos;t have an account?{' '}
              <NavLink to='/register'
                href="#"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </NavLink>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
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
                    ></input>
                  </div>
                   {errors?.email && (
								<p className="text-red-700">{errors.email}</p>
							)}
                </div>
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                   Password{' '}
                  </label>
                 
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      name='password'
                      value={credentials.password}
                      placeholder="Password"
                      onChange={inputChangeHandler}
                    ></input>
                     {errors?.password && (
								<p className="text-red-700">{errors.password}</p>
							)}
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={SubmitHandler}
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Login <ArrowRight className="ml-2" size={16} />
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

export default Login