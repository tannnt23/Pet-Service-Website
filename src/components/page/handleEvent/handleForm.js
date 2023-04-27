const HandleForm = {
    Validator(options){
        // Lấy ra form cần validate
        var formElement = document.querySelector(options.form);
        //Xử lý người dùng có nhập trường * hay ko 
        // console.log(formElement)
        function validate (inputElement, rule) {
            var errorElement = inputElement.parentElement.querySelector('.form-message')
            var errorMess = rule.test(inputElement.value);
            if (errorMess) {
                errorElement.innerText = errorMess;
                inputElement.style.border = '2px solid red'
            }
            else {
                errorElement.innerText = '';
            }            
        }
        if(formElement)
        {
            options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector);
                if (inputElement) {
                    // Xử lý trường hợp blur khỏi input
                    inputElement.onblur = function () {
                        validate(inputElement, rule)
                        console.log(123)
                    }
    
                    // Xử lý khi bắt đầu nhập thì ẩn errorMess
                    inputElement.oninput = function () {
                        var errorElement = inputElement.parentElement.querySelector('.form-message')
                        errorElement.innerText='';
                        inputElement.style.border = '2px solid #7787ea'
                        
                    }
                }
            })
        }  
    },
    
   
}
export default HandleForm
// export default function test () {
//     console.log("Như nào")
// }

