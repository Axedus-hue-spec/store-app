import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../store/features/products/productsSlice";
import Card from "../componets/Card";

const HomePage = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.products.items);
    const status = useSelector(state => state.products.status);
    
    useEffect(() => {
        if (status == 'idle') {
            dispatch(getProducts());
        }
        
    }, [items, status]);

    return (
        <div className="h-screen">
            <h1 className="text-center mt-10 text-3xl text-cyan-400">Current Products</h1>
            <div className="flex mt-10 w-full px-10 gap-10">
                {items.map((product) => 
                    <Card key={product.id_product} product={product} />)}
            </div>
        </div>
    )
}

export default HomePage;