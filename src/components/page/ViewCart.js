import Footer from "../footer";
import Header from "../header";
import { SlClose } from "react-icons/sl";
import { useState } from "react";
function ViewCart() {
    // Xử lý tăng số lượng sản phẩm
    const [Quantity1, setQuantity1] = useState(1)
    const [Quantity2, setQuantity2] = useState(1)
    const [Quantity3, setQuantity3] = useState(1)

    const [Atrr, setAtrr] = useState('disabled')
    let isChangeQuantity = false;
    function alowUpdateCart () {
        if(isChangeQuantity)
        {
            setAtrr('')
            const btnUpdateCart = document.querySelector('.btnUpdateCart')
            btnUpdateCart.classList.replace('hover:cursor-not-allowed','opacity-100')
            btnUpdateCart.classList.add('hover:opacity-80')
        }
    }
    return (
        <div>
            <Header />
            <div className="flex mb-24">
                <div className="Container mt-[50px] m-auto">
                    <header>
                        <h1 className="text-[42px] text-[#222] font-normal">Giỏ hàng</h1>
                    </header>
                    <div>
                        <form className="">
                            <table className="StatisticalProduct table-fixed border-collapse min-w-[1211px] mb-6">
                                <thead className="border border-slate-300 bg-[#fbfbfb]">
                                    <tr className="">
                                        <th className=""></th>
                                        <th></th>
                                        <th className="Product text-left font-medium p-2">Sản phẩm</th>
                                        <th className="Price text-left font-medium p-2">Giá</th>
                                        <th className="Quantity text-left font-medium p-2">Số lượng</th>
                                        <th className="Pay text-left font-medium p-2">Tạm tính</th>
                                    </tr>
                                </thead>
                                <tbody className="border border-slate-300">
                                    <tr className="InfoProduct border border-slate-300">
                                        <td className="RemoveProduct py-5 w-[20px]">
                                            <button className="RemoveProduct px-7 ">
                                                <i className="text-[26px] font-thin opacity-25 hover:opacity-90 hover:text-[#3380c4]"><SlClose /></i>
                                            </button>
                                        </td>
                                        <td className="ProductIMG ">
                                            <a href="#">
                                                <img className="w-[70px] h-[70px] p-2" src="https://cf.shopee.vn/file/b2341fdac89201a9e5e8f00bf96d6a52"></img>
                                            </a>
                                        </td>
                                        <td className="ProductName p-2 hover:opacity-80">
                                            <a href="#" className="text-[#1e73be] font-medium">Bánh bích quy hỗn hợp cho chó | túi 220g</a>
                                        </td>
                                        <td className="ProductPrice p-2 mr-2">
                                            <span className="font-medium">75.000 ₫</span>
                                        </td>
                                        <td className="ProductEndow p-2">
                                            <div >
                                                <input
                                                    className="border w-16 pl-[20px] min-h-[35px] outline-none"
                                                    type="number"
                                                    step={1} 
                                                    min={1}
                                                    max={10}
                                                    value={Quantity1}
                                                    onChange={(e) => 
                                                        {
                                                            isChangeQuantity = true;
                                                            alowUpdateCart()
                                                            setQuantity1(Number(e.target.value))
                                                        }
                                                    }
                                                />

                                            </div>
                                        </td>
                                        <td className="IntoMoney p-2">
                                            <span className="font-medium">75.000 ₫</span>
                                        </td>
                                    </tr>
                                    <tr className="InfoProduct border border-slate-300">
                                        <td className="RemoveProduct py-5 w-[20px]">
                                            <button className="RemoveProduct px-7 ">
                                                <i className="text-[26px] font-thin opacity-25 hover:opacity-90 hover:text-[#3380c4]"><SlClose /></i>
                                            </button>
                                        </td>
                                        <td className="ProductIMG ">
                                            <a href="#">
                                                <img className="w-[70px] h-[70px] p-2" src="https://down-vn.img.susercontent.com/file/a5409e6f4d504dfc656508da56048037_tn"></img>
                                            </a>
                                        </td>
                                        <td className="ProductName p-2 hover:opacity-80">
                                            <a href="#" className="text-[#1e73be] font-medium">Cá ngừ khô Tellme cho chó - 40g</a>
                                        </td>
                                        <td className="ProductPrice p-2 mr-2">
                                            <span className="font-medium">50.000 ₫</span>
                                        </td>
                                        <td className="ProductEndow p-2">
                                            <div >
                                                <input
                                                    className="border w-16 pl-[20px] min-h-[35px] outline-none"
                                                    type="number"
                                                    step={1} 
                                                    min={1}
                                                    max={10}
                                                    value={Quantity2}
                                                    onChange={(e) => 
                                                        {
                                                            isChangeQuantity = true;
                                                            alowUpdateCart(isChangeQuantity)
                                                            setQuantity2("" + Number(e.target.value))
                                                        }
                                                    }
                                                />

                                            </div>
                                        </td>
                                        <td className="IntoMoney p-2">
                                            <span className="font-medium">50.000 ₫</span>
                                        </td>
                                    </tr>
                                    <tr className="InfoProduct border border-slate-300">
                                        <td className="RemoveProduct py-5 w-[20px]">
                                            <button className="RemoveProduct px-7 ">
                                                <i className="text-[26px] font-thin opacity-25 hover:opacity-90 hover:text-[#3380c4]"><SlClose /></i>
                                            </button>
                                        </td>
                                        <td className="ProductIMG ">
                                            <a href="#">
                                                <img className="w-[70px] h-[70px] p-2" src="https://down-vn.img.susercontent.com/file/sg-11134201-23010-q3mwmajmw4lvc3_tn"></img>
                                            </a>
                                        </td>
                                        <td className="ProductName p-2 hover:opacity-80">
                                            <a href="#" className="text-[#1e73be] font-medium">Gan Bò Sấy Cho Chó Mèo Tell me 75g</a>
                                        </td>
                                        <td className="ProductPrice p-2 mr-2">
                                            <span className="font-medium">75.000 ₫</span>
                                        </td>
                                        <td className="ProductQuantity p-2">
                                            <div >
                                                <input
                                                    className="border w-16 pl-[20px] min-h-[35px] outline-none"
                                                    type="number"
                                                    step={1} 
                                                    min={1}
                                                    max={10}
                                                    value={Quantity3}
                                                    onChange={(e) => 
                                                        {
                                                            isChangeQuantity = true;
                                                            alowUpdateCart()
                                                            setQuantity3(Number(e.target.value))
                                                        }
                                                    }
                                                />

                                            </div>
                                        </td>
                                        <td className="IntoMoney p-2">
                                            <span className="font-medium">75.000 ₫</span>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td colSpan={6} >
                                            <div className="flex justify-between">
                                                <div>
                                                    <input type="text" placeholder="Mã ưu đãi" className="border border-slate-400 outline-none p-1 m-3"></input>
                                                    <button type="submit" value={"Áp dụng"} className="bg-[#273172] pt-[5px] pb-[5px] px-10 text-white font-medium hover:opacity-80">
                                                        ÁP DỤNG
                                                    </button>
                                                </div>
                                                <button  
                                                type="submit" 
                                                value={"Cập nhật giỏ hàng"} 
                                                disabled={Atrr} 
                                                className="btnUpdateCart mx-2 bg-[#273172] h-[34px] px-5 text-white font-medium self-center opacity-40 hover:cursor-not-allowed"
                                                onClick={(e)=> e.preventDefault()}
                                                >
                                                    CẬP NHẬT GIỎ HÀNG
                                                </button>
                                            </div>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>

                        <div>
                            <div className="float-right border border-slate-300 w-1/2">
                                <header className="bg-[#fbfbfb] py-2 px-3 border-b mb-5">
                                    <h2 className="text-[#222] font-medium text-[20px]">Cộng giỏ hàng</h2>
                                </header>
                                <table cellSpacing={0} className="text-left border-collapse mx-6 block">
                                    <tbody className="block">
                                        <tr className="border-b border-slate-300 flex">
                                            <th className="p-3 mr-36 min-w-[110px]">Tạm tính</th>
                                            <td className="p-3 font-medium">200.000 ₫</td>
                                        </tr>
                                        <tr className="border-b border-slate-300 flex">
                                            <th className="p-3 mr-36 min-w-[110px]">Giao hàng</th>
                                            <td className="p-3 font-medium">30.000 ₫</td>
                                        </tr>
                                        <tr className="border-b border-slate-300 flex">
                                            <th className="p-3 mr-36 min-w-[110px]">Tổng</th>
                                            <td className="p-3 font-medium">230.000 ₫</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="w-full flex p-[14px] ">
                                    <button className="py-2.5 px-10 bg-[#273172] text-center w-full mx-2.5 text-white font-medium hover:opacity-80">Tiến hành thanh toán</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ViewCart;