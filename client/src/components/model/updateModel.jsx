import { useState } from "react";
import { privateRequest } from "../../utils/axios";
import toast from "react-hot-toast";

const UpdateModel = ({item,fetchData}) => {
    const [updateQuote,setUpdateQuote]=useState({
        text: item.text,
    authorName: item.authorName,
    })
     const [errors, setErrors] = useState({});
 const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUpdateQuote((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (id) => {
    try {
      const response = await privateRequest.put(`/quote/${id}`, updateQuote);
      const res= response.data;
      if(res.success === true){
        fetchData()
         toast.success('Quote is successfully updated') 
        
      }
    } catch (err) {
      const inputerror = err.response.data.errors;
      const error = err.response.data.message;
      toast.error(error);
      setErrors(inputerror);
    }
  };
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById('my_modal_3').showModal()}
      >
        Update
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className="text-2xl font-bold mb-4">Update Quote</h1>
          <div className="flex flex-col gap-4 justify-center items-center">
            <input
              type="text"
              placeholder="Author"
               name="authorName"
              value={updateQuote.authorName}
              onChange={inputChangeHandler}
              className="input input-bordered w-full max-w-xs"
            />
              {errors?.authorName && (
              <p className="text-red-700 text-lg">{errors.authorName}</p>
            )}
            <textarea
              placeholder="Quote"
               name="text"
              value={updateQuote.text}
              onChange={inputChangeHandler}
              className="textarea textarea-bordered w-full max-w-xs"
            ></textarea>
              {errors?.text && (
              <p className="text-red-700 text-lg">{errors.text}</p>
            )}
            <button onClick={()=>handleSubmit(item._id)} className="btn btn-accent">Update</button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateModel;
