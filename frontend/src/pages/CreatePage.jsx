import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createNewProduct } from '../store/features/products/productsSlice'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: ''
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const status = useSelector(state => state.products.status);

    const handleSubmit = async () => {
        try {
            dispatch(createNewProduct(newProduct));
            setNewProduct({
                name: '',
                price: '',
                image: ''
            });
            navigate('/');
            toast.success(status);
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <div className="mt-5 h-screen">
            <h1 className="text-center text-white text-4xl">Create new Product</h1>
            <div className="mx-auto bg-[--lg-blue] w-1/2 rounded-lg">
                <form onSubmit={e => e.preventDefault()} className="flex flex-col mt-8 gap-5 p-6">
                    <input 
                        value={newProduct.name} 
                        onChange={e => {setNewProduct({...newProduct, name: e.target.value})}} 
                        className="text-white bg-[--lg-blue] rounded-md border border-gray-100 px-3 py-2" 
                        type="text" 
                        placeholder="Product Name"
                    />
                    <input
                        value={newProduct.price} 
                        onChange={e => {setNewProduct({...newProduct, price: e.target.value})}} 
                        className="text-white bg-[--lg-blue] rounded-md border border-gray-100 px-3 py-2" 
                        type="number"
                        placeholder="Price" 
                    />
                    <input 
                        value={newProduct.image} 
                        onChange={e => {setNewProduct({...newProduct, image: e.target.value})}} 
                        className="text-white bg-[--lg-blue] rounded-md border border-gray-100 px-3 py-2" 
                        type="text" 
                        placeholder="image URL" 
                    />
                    <button onClick={handleSubmit} className="text-gray-800 bg-blue-200 rounded-md p-2">Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePage;