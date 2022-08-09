var arr =[
  "Iphone XS" , 
  "Samsung Galaxy Z Fold 3", 
  "Xiaomi Redmi 10" , 
  "Iphone 11", 
  "Oppo Renno7", 
  "Iphone 12", 
];

function showProduct() {
  var content = `<tr>
    <th>Product Name</th>
    <th>Sửa</th>
    <th>Xóa</th>
  </tr>`

  for (let i = 0; i < arr.length; i++) {
    content += `<tr>
      <td>${arr[i]}</td>
      <td>
        <input type = 'button' value = 'Sửa' onclick='sua(${i});'>
      </td>
      <td>
        <input type = 'button' value = 'Xóa' onclick='xoa(${i});'>
      </td>
    </tr>`
  }

  document.getElementById("tbl_product").innerHTML = content;

}

function addNew() {
  let product = document.getElementById("input_product_name").value;
  if (product == '') {
    alert("Bạn nhập tên sản phẩm vào nhé.");
  } else {
    arr.push(product);
  }

  showProduct();
  clearAll();
  
}

function sua(index) {
  // nếu để index = document... thì không hoạt động ????
  document.getElementById("edit_index").value = index; 

  document.getElementById("input_product_name").value = arr[index];

  document.getElementById("update").style.display = '';
  document.getElementById("add").style.display = 'none';


}

function update() {

  let index = document.getElementById("edit_index").value;

  arr[index] = document.getElementById("input_product_name").value;
  showProduct();
  
  document.getElementById("update").style.display = 'none';
  document.getElementById("add").style.display = '';
}

function xoa(index) {
  let text = 'Bạn có chắc chắn muốn xóa?\nBạn đồng ý nhấn OK\nBạn không đồng ý nhấn Cancel ';
  if(confirm(text) == true) {
    arr.splice(index,1);
    showProduct();

  }
}

function clearAll() {
  document.getElementById("input_product_name").value = '';
}