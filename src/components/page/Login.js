import Footer from "../footer";
import Header from "../header";
import {useState} from 'react';
import {Link } from 'react-router-dom';
function Login() {
    
    const [state, setState] = useState({selector:'', rules:[]});    //giá trị khởi tạo với mảng rules rỗng để tránh lỗi khi queryselector lần đầu

    var isAll_Valid={'user':false, 'password':false};
    // var handleBlur=()=>{}
    var isFill = function(value){
        return (value||oninput==true)? undefined :'Không được để trống trường này!' 
    } 
    if(state!=''){
        var submitValid=false;
        var submitElement=document.querySelector('#submit');

        function Validate(checkElement, rule, messageElement,isInner, oninput){ //Hàm Valiadte
            switch(rule){
                case 'isFill':{
                    var messageValue=isFill(checkElement.value, oninput);
                }
            }
            if(messageValue){
                if(isInner){messageElement.innerText=messageValue;}
                messageElement.classList.add('text-red-500');
                submitElement.classList.add('hover:bg-red-600');
                isAll_Valid[checkElement.id]=false;
            }else{
                if(isInner){messageElement.innerText='';}
                messageElement.classList.remove('text-red-500');
                isAll_Valid[checkElement.id]=true;
                if(isAll_Valid['user'] &&isAll_Valid['password']){
                    submitValid=true;
                    submitElement.classList.remove('hover:bg-red-600');
                }
            }
        }
        
        if(state.selector=='submit')    //xử lí khi click submit thì check tất cả fields
        {
            var submitElement = document.querySelector('#submit');
            submitElement.onclick=()=>{
                var checkElements = document.querySelectorAll('.require');
                checkElements.forEach((checkElement)=>{
                    var messageElement=checkElement.parentElement.querySelector('.form-message');
                    var rule='isFill';
                    Validate(checkElement, rule, messageElement,true, false);
                })
                if(submitValid){
                    
                    // 
                    console.log('Đăng nhập thành công!')
                }else{
                    
                }
            }
            
            
            
        }
        else{       //xử lí khi focus các trường require
            state.rules.forEach((rule)=>{
                var checkElement=document.querySelector(`#${state.selector}`);
                var messageElement=checkElement.parentElement.querySelector('.form-message');
                checkElement.onblur=()=>{
                    console.log(1);
                    var oninput=false;
                    Validate(checkElement, rule, messageElement,true, oninput);

                    var checkElements = document.querySelectorAll('.require');  // Chuyển xanh nút submit khi blur ra ngoài thì check để đổi màu
                    checkElements.forEach((checkElement)=>{
                        var rule='isFill';
                        Validate(checkElement, rule, messageElement,false, false);
                    }) 
                    if(isAll_Valid['user'] &&isAll_Valid['password']){
                        submitValid=true;
                        submitElement.classList.remove('hover:bg-red-600');
                    }
                }
                checkElement.oninput=()=>{  //kiểm tra xem có đang nhập dữ liệu hay không nếu có thì bỏ qua kiểm tra
                    var oninput=true;
                    Validate(checkElement, rule, messageElement,true, oninput)
                } 
            });
        }
    }else{}
    
    
    return (
        <div>
            <Header />

                <div className=" flex flex-col items-center mt-[60px] mb-[260px]">
                    <div className="font-bold text-[34px] mb-[40px] ">ĐĂNG NHẬP</div>
                    
                    

                    <form action="" method="POST" id="form-login" >
                        <div className="mb-3">Các trường được đánh dấu <span className="text-[#e80000] text-[18px] font-extrabold">*</span> là bắt buộc</div>
                            <div className="mb-[25px]">
                            <label htmlFor="user"  className="text-[18px] font-semibold">Tên đăng nhập<span className="text-[#e80000] font-extrabold">*</span></label><br />
                            <input 
                            onFocus={e=>{if(!e.target.value)setState({selector:'user', rules:['isFill',]})}}
                            // onBlur={handleBlur}
                            id="user" type="text"  className="border py-3 w-[500px] pl-3 outline-none focus:outline-[#999999] require"></input>
                            <div className="form-message"></div>

                        </div>
                            
                        <div className="mb-[25px]">

                            <label htmlFor="password"  className="text-[18px] font-semibold">Mật khẩu<span className="text-[#e80000] font-extrabold">*</span></label><br />
                            <input id="password" type="password" className="border py-3 w-[500px] pl-3 outline-none focus:outline-[#999999] require" 
                            onFocus={e=>{if(!e.target.value)setState({selector:'password', rules:['isFill',]})}}
                            // onBlur={handleBlur}
                            >
                                
                            </input>
                            <div className="form-message"></div>

                        </div>
                    
                        <div className="flex items-center justify-between">
                            <div>Bạn chưa có tài khoản?<Link to='/Signup' className="text-[#e80000] ml-[10px]">Đăng ký ngay</Link></div>
                            <div id="submit" 
                            onMouseOver={e=>{setState({selector:'submit', rules:[]})}}  //khi di chuột lên nút submit thì re-render để lần đầu vào page và click submit thì listen event vẫn nhận được
                            className="flex rounded border w-32 h-14 text-white bg-black hover:bg-blue-600 hover:cursor-pointer ease-in duration-100 transition-colors "><span className=" m-auto">Đăng nhập</span></div>
                        </div>
                    </form>

                </div>

            <Footer/>
        </div>


    )
}
export default Login;