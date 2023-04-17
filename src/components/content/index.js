import { FaChevronDown } from 'react-icons/fa'
import { FaDog } from 'react-icons/fa';
import { FaBroom } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

function Content() {
    return (
        <div>
            {/* HOME1 */}
            <div className="flex  justify-center">
                <div className="flex w-1220">
                    <div className=" flex-1 pt-28 px-14 pb-16">
                        <div>
                            <h1 className="text-6xl font-bold ">DỊCH VỤ THÚ CƯNG TẠI NHÀ</h1>
                        </div>

                        <div className='py-12 text-2xl'> <b>UY TÍN HÀNG ĐẦU </b>TẠI HỒ CHÍ MINH</div>
                        <div className='flex'>
                            <button className='flex p-1  bg-cyan-600  rounded-full text-white font-medium hover:bg-black hover:text-white px-3   '>
                                Xem Thêm <FaChevronDown className='self-center pl-1 font-none' />
                            </button>
                        </div>
                    </div>

                    <div>
                        <img className='' src="https://petservicehcm.com/wp-content/uploads/2019/11/pet-care-slide3-img-1.png.webp" alt="" />
                    </div>
                </div>
            </div>


            {/* HOME2 */}
            <div className='flex justify-center pt-12 mb-32'>
                <div className=' flex w-1220 justify-between items-center'>
                    <div className='w-1/4 mx-3 '>
                        <h3 className='p-3'>PET SERVICE</h3>
                        <h1 className='text-6xl p-2 '>DỊCH VỤ </h1>
                        <div className='border-b-4 border-indigo-500 w-24 p-2 '></div>
                        <p className='text-4xl p-2 '>HÀNG ĐẦU</p>
                    </div>

                    <div className='w-1/4 border-2 border-slate-400 py-14 px-7 mx-3 shadow-xl rounded-lg hover:border-sky-200'>
                        {/* icon */}
                        <FaDog className='text-7xl' />
                        <h2 className='font-bold text-xl '>PET SHOP</h2>
                        <p className='text-[#656565]'>Cùng với hơn 3.000 khách hàng đã luôn tin tưởng, đồng hành, chúng tôi luôn đặt ra những mục tiêu và thử thách mới. PET SERVICE cung cấp các sản phẩm, phụ kiện rất đa dạng...
                        </p>
                        <button className='p-1 px-4 mt-5 bg-cyan-600 rounded-full text-white font-medium hover:bg-slate-700 hover:text-white'>
                            Xem Thêm
                        </button>
                    </div>

                    <div className='w-1/4 border-2 border-slate-400 py-14 px-7 mx-3 shadow-xl rounded-lg hover:border-sky-200'>
                        {/* icon */}
                        <FaBroom className='text-7xl' />
                        <h2 className='font-bold text-xl '>PET GROOMING</h2>
                        <p className='text-[#656565]'>Chúng tối biết cách làm thế nào để thú cưng của bạn trở nên đẳng cấp hơn cá tính hơn. Với dịch vụ cắt tỉa lông chó / mèo chúng tôi sẽ giúp các bé trở thành phiên bản hoàn hảo nhất...
                        </p>
                        <button className='p-1 px-4 mt-5 bg-cyan-600 rounded-full text-white font-medium hover:bg-slate-700 hover:text-white'>
                            Xem Thêm
                        </button>
                    </div>

                    <div className='w-1/4 border-2 border-slate-400 py-14 px-7 mx-3 shadow-xl rounded-lg hover:border-sky-200'>
                        {/* icon */}
                        <FaDog className='text-7xl' />
                        <h2 className='font-bold text-xl '>PET TREATMENT</h2>
                        <p className='text-[#656565]'>Chúng tối biết cách làm thế nào để thú cưng của bạn trở nên đẳng cấp hơn cá tính hơn. Với dịch vụ cắt tỉa lông chó / mèo chúng tôi sẽ giúp các bé trở thành phiên bản hoàn hảo nhất...
                        </p>
                        <button className='p-1 px-4 mt-5 bg-cyan-600 rounded-full text-white font-medium hover:bg-slate-700 hover:text-white'>
                            Xem Thêm
                        </button>
                    </div>

                </div>
            </div>


            {/* Home 3 */}
            <div className='flex justify-center pt-8 bg-gradient-to-b from-[#F0F0F0] to-[#FFFFFF] '>
                <div className=' flex w-1220 justify-between items-center my-10'>
                    <div className='w-1/4 mx-3 '>
                        <h3 className='p-3'> HOT ITEMS</h3>
                        <h1 className='text-5xl p-2  leading-2 text-cyan-900' >SẢN PHẨM NỔI BẬT </h1>
                        <div className='border-b-4 border-indigo-500 w-24 p-2 '></div>
                        <p className='text-4xl p-2 '>HÀNG ĐẦU</p>
                        <div className='flex mt-6'>
                            <button className='flex p-1  bg-cyan-600 rounded-full text-white font-medium hover:bg-black hover:text-white px-3   '>
                                Xem cửa hàng <FaChevronRight className='self-center pl-1 font-none' />
                            </button>
                        </div>
                    </div>

                    <div className='w-1/4 border-2 border-none rounded-lg py-14 px-7 mx-3 shadow-xl hover:shadow-2xl bg-white '>
                        <a href='/'>
                            <img src="https://tse2.mm.bing.net/th?id=OIP.QbLd897jnCjpOhjPsz9y2gHaHa&pid=Api&P=0" alt='' />
                            <p className='text-center text-[#656565]'>Pate & Sốt</p>
                            <h4 className='text-center font-bold '>Pate chó mèo Cherman</h4>
                            <h3 className='text-center text-cyan-900'>15.000<u>đ</u></h3>
                        </a>
                    </div>

                    <div className='w-1/4 border-2 border-none rounded-lg py-14 px-7 mx-3 shadow-xl hover:shadow-2xl bg-white '>
                        <a href='/'>
                            <img src='https://petnhatrang.com/wp-content/uploads/2019/11/72b07854b66879739e802c8659557922-600x600.jpeg' alt='' />
                            <p className='text-center text-[#656565]'>Đồ chơi</p>
                            <h4 className='text-center font-bold '>Đồ chơi dây thừng</h4>
                            <h3 className='text-center text-cyan-900'>50.000<u>đ</u></h3>
                        </a>
                    </div>

                    <div className='w-1/4 border-2 border-none rounded-lg py-14 px-7 mx-3 shadow-xl hover:shadow-2xl bg-white '>
                        <a href='/'>
                            <img src="https://bizweb.dktcdn.net/100/310/338/products/ban-chai-kmom-han-quoc.jpg?v=1606460374990" alt='' />
                            <p className='text-center text-[#656565]'>Sản phẩm vệ sinh</p>
                            <h4 className='text-center font-bold '>Bộ đánh răng</h4>
                            <h3 className='text-center text-cyan-900'>70.000<u>đ</u></h3>
                        </a>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Content;