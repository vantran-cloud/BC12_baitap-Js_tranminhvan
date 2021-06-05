//Bài 1: viết chương trình xuất 3 sô theo thứ tự tăng dần.
/**phân tích
 * input: nhập vào 3 số nguyên bất kỳ, và 1 số nguyên
 * handle: khai báo ba biến ứng với ba số nguyên, 
 * xử lý: xuất ra 3 số theo thứ tự tăng dần
 */



var btnXuatRa = document.getElementById('btnXuatRa');
btnXuatRa.onclick = function() {

    var soNguyen = '';
    var a = document.getElementById('soNguyenThuNhat').value;
    var b = document.getElementById('soNguyenThuHai').value;
    var c = document.getElementById('soNguyenThuBa').value;
    
    if(a <= b && a <= c && b <= c) {
        soNguyen = (a + b + c);

    } else if(a <= b && a <= c && c <= b) {
        soNguyen = (a + c + b);

    } else if(b <= a && b <= c && a <= c) {
        soNguyen = (b + a + c);

    } else if(b <= a && b <= c && c <= a) {
        soNguyen = (b + c + a);

    } else if(c <= a && c <= b && a <= b) {
        soNguyen = (c + a + b);

    } else {
        soNguyen = (c + b + a);
    }

    alert(soNguyen);
}



//Bài 2: Viết chương trình “Chào hỏi” các thành viên trong gia đình

/**phân tich
 * input: nhập vào tên các thành viên, và lời chào
 * handle: viết câu chào tương ứng chức vụ thành viên trong gia đình
 * output: lời chào từng thành viên
 */

 

var btnChaoHoi = document.getElementById('btnChaoHoi');
btnChaoHoi.onclick = function() {
    var tenThanhVien = document.getElementById('tenThanhVien').value;
    var loiChao;

    if(tenThanhVien === 'B') {
        loiChao = 'Hello Bố !!!';
        
    } else if(tenThanhVien === 'M') {
        loiChao = 'Hello Mẹ !!!';
     
    } else if(tenThanhVien === 'A') {
        loiChao = 'Hello Anh trai !!!'

    } else{
        loiChao = 'Hello Em gái !!!'
    }


    alert(loiChao);

}   



//BÀi 3:BÀi 3: Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.
/**
 * phân tích:
 * input: nhập vào 3 số nguyên bất kỳ,
 * handle: báo biến cho 3 số nguyên, báo biên số lẻ, số chẵn
 * output: cho ra bao nhiêu số chẵn và lẻ
 */

var soChan = 0;
var soLe = 0;
var btnKetQua = document.getElementById('btnKetQua');
btnKetQua.onclick = function() {
    var num1 = Number(document.getElementById('number1').value);
    var num2 = Number(document.getElementById('number2').value);
    var num3 = Number(document.getElementById('number3').value);
    
    
    if(Number.isInteger(num1) == true && Number.isInteger(num2) == true && Number.isInteger(num3) == true)  {
        if(num1 % 2 === 0) {
            soChan += 1;
    
        } else{
            soLe += 1;
        }
    
        if(num2 % 2 === 0) {
            soChan += 1;
    
        } else {
            soLe += 1;
        }
    
        if(num3 % 2 === 0) {
            soChan += 1;
    
        } else {
            soLe += 1;
        }
    
        if(soChan === 0) {
            alert('không có sô chẵn - có 3 số lẻ');
    
        } else if(soLe === 0) {
            alert('không có số lẻ - có 3 số chẵn');
    
        } else {
            alert('có ' + soChan + ' số chẵn' + ' - có ' + soLe + ' số lẻ');
        }

    }


}

 


/**Phân tích:
 * input: nhập vào giá trị của ba cạnh a, b, c
 * handle: khai báo biến cho các cạnh, và loại tam giác
 * loại tam giác ứng với sô liệu của các cạnh nhập vào
 */ 

var btnTinhRa = document.getElementById('btnTinhRa');
btnTinhRa.onclick = function() {
    var a = document.getElementById('canhThuNhat').value;
    var b = document.getElementById('canhThuHai').value;
    var c = document.getElementById('canhThuBa').value;

    var loaiTamGiac = '';

    if((a === b && a !== c && b !== c) || (a === c && a !== b && c !== b) || (b === c && a !== b && a !== c)) {
        loaiTamGiac = 'Tam giác cân';

    } else if(a === b && a === c && b === c) {
        loaiTamGiac = 'Tam giác đều'

    } else if((a * a + b * b === c * c) || (a * a + c * c === b * b) || (b * b + c * c === a * a)) {
        loaiTamGiac = 'Tam giác vuông'

    } else {
        loaiTamGiac = 'Tam giác khác'
    }

    alert('Loại tam giác là ' + loaiTamGiac)
}