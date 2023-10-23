import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQantity, increaseItemQuantity } from "./cartSlice"

function UpdateItemQuantity({pizzaId, currentQuantity}) {
    const dispatch = useDispatch();
    return (
        <div className="flex gap-1 items-centre gap-1 md:gap-3 ">
            <Button type="round" onClick={() => dispatch(decreaseItemQantity(pizzaId))}>-</Button>
            <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity
