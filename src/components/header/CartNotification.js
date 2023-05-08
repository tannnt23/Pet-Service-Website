import { Component } from 'react'
import { TfiClose } from "react-icons/tfi";
import { AiOutlineCloseCircle } from "react-icons/ai";
class CartNotification extends Component {

    render(){
        return(
            <div className='modal fixed inset-x-0 inset-y-0 flex'>
                <div className='modal_overplay absolute w-full h-full bg-[#00000033]'></div>
                    <div className='product_list bg-white z-[1] m-auto'>
                        <i>
                            <TfiClose/>
                        </i>
                        <div className='product_item'>
                            <a className='product_type'>
                                <img src='https://cf.shopee.vn/file/b2341fdac89201a9e5e8f00bf96d6a52' className='product-img'></img>
                                <p className='product-name'>Bánh bích quy hỗn hợp cho chó | túi 220g</p>
                                <i><AiOutlineCloseCircle/></i>
                            </a>
                            <div className='product_money'>
                                <p>Tạm tính: 75.000 ₫</p>
                            </div>
                            <div className='product_pay-check-cart'>
                                <button>XEM GIỎ HÀNG</button>
                                <button>THANH TOÁN</button>

                            </div>

                        </div>
                </div>
            </div>
        )
    }
}

export default CartNotification;