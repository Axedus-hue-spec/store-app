import { CgAddR } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='max-w-1140 px-4'>
            <div className='flex items-center justify-between h-16'>
                <Link to={'/'} className='text-2xl text-cyan-400 font-bold text-transform: uppercase'>
                    Product store
                </Link>
                <Link to={'/create'} className='text-3xl text-white'>
                    <CgAddR />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;