import { NavLink } from "react-router-dom";

const Navber = () => {
    const navoption = <div className="space-x-3">
       <NavLink to='/'  className={({isActive}) => isActive ? 'text-yellow-300 font-bold' : 'text-white font-bold' }>Home</NavLink>
       <NavLink to='/contactus' className={({isActive}) => isActive ? 'text-yellow-300 font-bold' : 'text-white font-bold'}>CONTACT us</NavLink>
       <NavLink to='/dashboard' className={({isActive}) => isActive ? 'text-yellow-300 font-bold' : 'text-white font-bold'}>DASHBOARD</NavLink>
       <NavLink to='/menu' className={({isActive}) => isActive ? 'text-yellow-300 font-bold' : 'text-white font-bold'}>Our Menu</NavLink>
       <NavLink to='/ourshoap' className={({isActive}) => isActive ? 'text-yellow-300 font-bold' : 'text-white font-bold'}>Our Shop</NavLink>
        
    </div>
    return (
        <div>
            <div className="navbar bg-black bg-opacity-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navoption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navoption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get Start</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;