function Validator(options){
        // Lấy ra form cần validate
        var formElement = document.querySelector(options.form);
        //Xử lý người dùng có nhập trường * hay ko 
        function validate (inputElement, rule) {
            var errorElement = inputElement.parentElement.querySelector('.form-message')
            var errorMess = rule.test(inputElement.value);
            if (errorMess) {
                errorElement.innerText = errorMess;
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
                    }
    
                    // Xử lý khi bắt đầu nhập thì ẩn errorMess
                    inputElement.oninput = function () {
                        var errorElement = inputElement.parentElement.querySelector('.form-message')
                        errorElement.innerText='';
                    }
                }
            })
        }  
    }
    
Validator.isRequire = function(selector){
        return {
            selector:selector,
            test: function (value) {
                return  value.trim() ? undefined : 'Vui lòng nhập trường này'
            }
        }
    }
    
Validator.isEmail = function(selector){
        return {
            selector:selector,
            test:function(value){
                var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(value) ? undefined : 'Trường này phải là email'
            },
        }
    }



Validator({
    form :'#form-1',
    rules:[
        Validator.isRequire('#fullName'),
        Validator.isRequire('#mess'),
        Validator.isEmail('#email'),     
    ]
});


