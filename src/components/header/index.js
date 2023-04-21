import { Routes, Route, Link } from 'react-router-dom';
import clsx from 'clsx';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa'
import { FaCartPlus } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'

function Header() {
    return (
        <div className=' ' >
            <div className='flex justify-center bg-slate-600 '>
                <header className='flex  text-white  justify-between  text-sm w-1220   '>
                    <div className='flex justify-between'>
                        <button>
                            <FaPhone />
                        </button>
                        <div className='  flex px-4 items-center '>0898520760</div>

                        <div className=' flex px-4 items-center'>217 Lâm Văn Bền, P. Bình Thuận, Q.7, HCM</div>
                    </div>
                    <div className='flex justify-between  '>
                        {/* search*/}
                        <button className='search -2  px-4 hover:bg-sky-700'>
                            <FaSearch className='' />
                        </button>
                        {/* gio hang*/}
                        <button className='cart px-4 hover:bg-sky-700' >
                            <FaCartPlus className='' />
                        </button>
                        <a href='' className='self-center bg-blue-800 p-2 rounded-lg hover:bg-blue-600'>Log in</a>
                        <a href='' className='self-center  p-2 rounded-lg hover:bg-sky-700'> Sign Up</a>


                    </div>
                </header>
            </div>

            <div className=' flex justify-center py-5 '>
                <div className='w-1220 '>
                    <div className='flex justify-between   '>
                        <div>
                            <img className='w-48' src='https://petservicehcm.com/wp-content/uploads/2019/11/Pet_logo.png.webp' alt='Pet logo'></img>
                        </div>

                        {/* page*/}

                        <Link to='/' className='p-1.5 self-center font-bold text-neutral-600 hover:text-teal-500 '>TRANG CHỦ</Link>
                        <Link to='/About' className='p-1.5 self-center font-bold text-neutral-600 hover:text-teal-500 '>GIỚI THIỆU</Link>
                        <Link to='' className='p-1.5 self-center font-bold text-neutral-600 hover:text-teal-500  relative  group  '>DỊCH VỤ
                            <ul className=' hidden w-264 group-hover:block  z-10 absolute  top-full rounded-lg text-sm text-cyan-900 bg-slate-100 border border-solid border-[#273172] pt-2 '>
                                <li className=' left-0  p-3 hover:text-teal-500 '> <Link to=''>THÚ Y TẠI NHÀ</Link></li>
                                <li className=' left-0  p-3 hover:text-teal-500  '><Link to=''>TẮM - VỆ SINH TẠI NHÀ</Link></li>
                                <li className=' left-0  p-3 hover:text-teal-500  '><Link to=''>CẮT- TỈA LÔNG TẠI NHÀ</Link></li>
                                <li className=' left-0  p-3 hover:text-teal-500  '><Link to=''>DẮT CHÓ ĐI DẠO</Link></li>
                            </ul>
                            <FaChevronDown className='self-center pl-1 font-none inline' /></Link>
                        <Link to='' className=' p-1.5 self-center font-bold text-neutral-600 hover:text-teal-500  relative group '>CỬA HÀNG
                            <ul className=' hidden w-250 group-hover:block  z-10 absolute top-full rounded-lg text-sm text-cyan-900 bg-slate-100 border border-solid border-[#273172] pt-2 '>
                                <li className=' left-0  p-3 hover:text-teal-500 '> <Link to='/FoodProduct'>THỰC PHẨM THÚ CƯNG</Link></li>
                                <li className=' left-0  p-3 hover:text-teal-500  '><Link to='/HygieneProduct'>SẢN PHẨM VỆ SINH</Link></li>
                                <li className=' left-0  p-3 hover:text-teal-500  '><Link to='/TreatmentProduct'>SẢN PHẨM ĐIỀU TRỊ</Link></li>
                            </ul>
                            <FaChevronDown className='self-center pl-1 font-none inline' /></Link>
                        <Link to='/Contact' className='p-1.5 self-center font-bold text-neutral-600 hover:text-teal-500 group relative'>LIÊN HỆ
                        </Link>


                        {/* ONLINE BOOKING*/}
                        <Link to='/OnlineBooking' className='flex '>
                            <button className='  p-1.5 bg-black self-center text-white rounded-full hover:bg-sky-800 px-4  '>
                                ONLINE BOOKING

                            </button>

                        </Link>



                    </div>

                </div>
            </div>

        </div >
    )
}

export default Header;