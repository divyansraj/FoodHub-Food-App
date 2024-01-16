import { IMG_URL } from "../config";
import { addItem , removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Fooditem =({item}) => {
    const dispatch = useDispatch()
    const addFoodItem = (Fooditem) => {
        dispatch(addItem(Fooditem));
    }
    const removeFoodItem= (Fooditem) => {
        dispatch(removeItem(Fooditem));
    }
    return (
        <div>
        <h1>{console.log(item)}</h1>
        {item?.map((each ) => <>
        <div key={each.card.info.id} className="flex flex-row py-4 px-0">
            <div className="relative bg-[#e9e9e93b] h-40 flex flex-col justify-between py-5 px-0 rounded-md">
            <h2>{each?.card?.info?.name}</h2>
            <h2>{each?.card?.info?.description}</h2>
            <h2>Price :₹{(each?.card?.info?.price)/100}</h2>
            </div>
            <img className=" w-48 bg-center"
                  src={IMG_URL + each?.card?.info?.imageId}
                  alt="menuImg">
            </img>
            <div className="flex rounded-md absolute bottom-1 right-10 ">
                <button className="bg-white   text-sm text-orange-700 font-bold px-8 py-1 border-2 border-r-0 border-slate-300 hover:border-slate-600 "
                onClick={() => addFoodItem(item)}
                >
                +
                </button>
                <button className="bg-white text-sm text-orange-700 font-bold px-8 py-1 border-2 border-slate-300 hover:border-slate-600 "
                onClick={() => removeFoodItem(item)}
                >
                -
                </button></div>
            
            
        </div>
        
        </>
        )}
            
        </div>
    )
}

export default Fooditem;