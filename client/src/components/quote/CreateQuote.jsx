import  { useState } from "react";
import toast from "react-hot-toast";
import { privateRequest } from "../../utils/axios";

const CreateQuote = ({fetchData}) => {
  const [quoteDetails, setQuoteDetails] = useState({
    text: "",
    authorName: ""
  });
  const [errors, setErrors] = useState({});

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setQuoteDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await privateRequest.post('/quote', quoteDetails);
      const res= response.data;
      if(res.success === true){
        
         toast.success('Quote  successfully created !')
         setQuoteDetails({ text: "", authorName: "" });
        fetchData()
      }
    } catch (err) {
     const inputerror = err.response.data.errors;
      const error = err.response.data.message;
     toast.error(error);
      setErrors(inputerror);
    }
  };

  return (
    <>
      

      <div className="container mx-auto py-12">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-8 rounded-lg shadow-xl">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Create Quote
          </h2>
          <div className="mb-3">
            <textarea
              type="text"
              placeholder="Quote"
              name="text"
              value={quoteDetails.text}
              onChange={inputChangeHandler}
              className="bg-white border font-roboto border-gray-300 rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700"
            />
            {errors?.text && (
              <p className="text-red-700 text-lg">{errors.text}</p>
            )}
          </div>
          <div className="mb-6">
            <input
              placeholder="Author"
              type="text"
              name="authorName"
              value={quoteDetails.authorName}
              onChange={inputChangeHandler}
              className="bg-white border border-gray-300 rounded-md py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-700 resize-none"
              rows="4"
            />
            {errors?.authorName && (
              <p className="text-red-700 text-lg">{errors.authorName}</p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="bg-indigo-700 text-white py-3 px-6 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transform hover:scale-105 transition-transform"
          >
            Create Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateQuote;
