function tao_tai_khoan() { // ghi dữ liệu lên database
    let tenNguoiChoi = document.getElementById("username").value;
    let diemCuaGame = document.getElementById("password").value;
    fetch('https://mindx-class-api.vercel.app/api', {
        method: 'POST', // ghi bằng phương thức POST
        headers: {
            'Content-Type': 'application/json' // định dạng dữ liệu gửi đi là JSON
        },
        body: JSON.stringify({
            id_class: "JSA17-JSA17", // định danh người sử dụng
            name: tenNguoiChoi,
            password: diemCuaGame,
        })
    })
    .then(response => response.json())
    .then(ketQua => {
        alert("Đã tạo tài khoản thành công!");
    })
    .catch (error => {
        alert("Tạo tài khoản thất bại!");
    });
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    fetch("https://mindx-class-api.vercel.app/api")
    .then(response => response.json())
    .then(users => {
        let user = users.find(u => u.name === username && u.password === password);
        console.log(users);
        if (user){
            window.location.href = "menu.html";
        }
        else {
            alert("Tên người dùng hoặc mật khẩu không đúng!");
        }
    })
}