import clsx from 'clsx';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa'
import { FaCartPlus } from 'react-icons/fa'

// const cl = classNames.bind(styles)

function Header() {
    return (
        <div className=' ' >
            <div className='flex justify-center h-11 '>
                <header className='flex bg-slate-600 text-white  justify-between  px-8 text-sm w-1220   '>
                    <div className='flex justify-between'>
                        <div className='  flex px-4 items-center '>0898520760</div>
                        <div className=' flex px-4 items-center'>217 Lâm Văn Bền, P. Bình Thuận, Q.7, HCM</div>
                    </div>
                    <div className='flex flex-row '>
                        {/* search*/}
                        <button className='search -2  px-4 hover:bg-sky-700'>
                            <FaSearch className='' />
                        </button>
                        {/* gio hang*/}
                        <button className='cart px-4 hover:bg-sky-700' >
                            <FaCartPlus className='' />
                        </button>
                        <div className=' bg-blue-800 basis-1/4 px-4 rounded hover:bg-blue-600'>Log in</div>
                        <div className='basis-1/4 px-4'> Sign Up</div>


                    </div>
                </header>
            </div>

            <div className='w-1220 flex justify-center'>
                <div className='flex flex-row '>
                    <div>
                        <img className='w-48' src='https://petservicehcm.com/wp-content/uploads/2019/11/Pet_logo.png.webp' alt='Pet logo'></img>
                    </div>

                    {/* page*/}
                    <div className='flex flex-row font-bold text-blue-600/100'>
                        <div className='p-1.5'>TRANG CHỦ</div>
                        <div className='p-1.5'>GIỚI THIỆU</div>
                        <div className='p-1.5'>DỊCH VỤ</div>
                        <div className='p-1.5'>CỦA HÀNG</div>
                        <div className='p-1.5'>LIÊN HỆ</div>
                    </div>

                    {/* ONLINE BOOKING*/}
                    <div className=''>
                        ONLINE BOOKING
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;