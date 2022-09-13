const checkForm = () => {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    var isValid = true;

    isValid &= 
    checkRequired(username,'usererror',"*Vui lòng điền tên đăng nhập!") &&
    checkLength(username,'usererror',"*Tên đăng nhập phải nằm trong khoảng 1-10 ký tự!",1,10) &&
    checkRegex(username, 'usererror', "*Chỉ cho phép sử dụng ký tự chữ (a-z) và số (0-9)!");

    isValid &= 
    checkRequired(password,'passerror',"*Vui lòng điền mật khẩu!") &&
    checkLength(password,'passerror',"*Mật khẩu phải nằm trong khoảng 1-10 ký tự!",1,10) &&
    checkRegex(password, 'passerror', "*Chỉ cho phép sử dụng ký tự chữ (a-z) và số (0-9)!");

    if(isValid){
        alert("Đăng nhập thành công!");
        return true;
    }
    return false;
}

const checkRequired = (value,idMessage,message) => {
    if(!value.length){
        document.getElementById(idMessage).innerHTML = message;
        return false;
    }
    document.getElementById(idMessage).innerHTML = '';
    return true;
}

const checkLength = (value, idMessage,message,min,max) => {
    if(value.length < min || value.length > max){
        document.getElementById(idMessage).innerHTML = message;
        return false;
    }
    document.getElementById(idMessage).innerHTML = ''
    return true;
}

const checkRegex = (value, idMessage, message) => {
    const stringPattern = new RegExp(/^\w+$/)
    if(stringPattern.test(value)){
        document.getElementById(idMessage).innerHTML = ''
        return true;
    }
    document.getElementById(idMessage).innerHTML = message;
    return false;
}