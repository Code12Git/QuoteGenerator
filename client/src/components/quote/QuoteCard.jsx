import { privateRequest } from "../../utils/axios";
import UpdateModel from "../model/updateModel";
import {toast } from 'react-hot-toast'
const QuoteCard = ({ item,fetchData }) => {
  const deleteHandler=async(id)=>{
    try{
      const res=await privateRequest.delete(`/quote/${id}`)
      const response=res.data.success
      if(response === true){
        fetchData()
        toast.success("Quote delleted successfully")
      }else{
        toast.error("Error deleting quote: " )
      }
    }catch(err){
      toast.error(err.message)
    }
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {item.authorName}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {item.text}
          </p>
          <div className="card-actions justify-between items-center mt-5">
           <button className="btn btn-neutral" onClick={()=>deleteHandler(item._id)}>Delete</button>
            <button><UpdateModel item={item} fetchData={fetchData}/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
