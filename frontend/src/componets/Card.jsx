import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../store/features/products/productsSlice";
import { toast } from 'react-toastify';

const Card = ({product}) => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.products.status);
    

    const deleteHandler = (id) => {
        try {
            dispatch(deleteProduct(id));
            toast(status);

        } catch(e) {
            console.log(e)
        }
    }

    return (
        <div className="w-1/3 bg-[--lg-blue] rounded-xl">
            <img className="rounded-xl" src={product.image} alt="#" />
            <div className="text-white p-5 text-lg">
                <span>{product.name}</span>
                <span className="block">${product.price}</span>
                <div className="flex text-white gap-5 justify-end">
                    <button>Изменить</button>
                    <button onClick={() => deleteHandler(product.id_product)} >Удалить</button>
                </div>
            </div>
        </div>
    )
}

export default Card;