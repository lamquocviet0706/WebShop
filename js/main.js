const productList = [
    {id: 1, name: 'PEAK Tony Parker Outdoor Air Flow High E94141A – Đỏ', price: 1190000},
    {id: 2, name: 'PEAK Tony Parker Outdoor Air Flow High E94141A – Trắng Đen', price: 1190000},
    {id: 3, name: 'PEAK Tony Parker Outdoor Air Flow High E94141A – Xanh Navy', price: 1190000},
    {id: 4, name: 'PEAK Tony Parker Outdoor Air Flow High E94141A – Đen', price: 1190000},
    {id: 5, name: 'PEAK Basketball Tony Parker 7 TAICHI E93323A – Đen', price: 2090000},
    {id: 6, name: 'PEAK Basketball Tony Parker 7 TAICHI E93323A – Trắng Đen', price: 2090000},
    {id: 7, name: 'PEAK Lou Williams Lightning 2019 E91351A – Đỏ Đen', price: 1290000},
    {id: 8, name: 'PEAK Lou Williams Lightning 2019 E91351A – Đen', price: 1290000},
    {id: 9, name: 'PEAK Running TAICHI 1.0 Plus E92577H – Đen Ghi Đỏ', price: 2090000},
    {id: 10, name: 'PEAK Running TAICHI 1.0 Plus E92577H – Đen Sọc', price: 1690000},
    {id: 11, name: 'PEAK Running TAICHI 1.0 Plus E92577H – Trắng Xanh', price: 1690000},
    {id: 12, name: 'PEAK Running TAICHI 1.0 Plus E92577H – Đen', price: 1690000},
    {id: 13, name: 'Tất Bóng Rổ PEAK Mid W492011 – Trắng', price: 160000},
    {id: 14, name: 'Tất Bóng Rổ PEAK Mid W492011 – Xanh', price: 160000},
    {id: 15, name: 'Tất Bóng Rổ PEAK Low W492001 – Xanh', price: 130000},
    {id: 16, name: 'Balo Peak Cross Training B184050 – Xanh', price: 650000},
];
var chosenProductList = [];
const addToCart = (id) => {
    const product = productList.find(product => id === product.id);
    for(var i = 0; i < chosenProductList.length; i++){
        if(id === chosenProductList[i].id){
            chosenProductList[i].quantity+=1;
            render();
            return;           
        }
    }
    product.quantity = 1;
    chosenProductList.push(product); 
    render();
}
const changeQuantity = (id,value) => {
    const index = chosenProductList.findIndex(item => id === item.id);
    if(index !== -1){
        chosenProductList[index].quantity = +value;
        console.log(chosenProductList);
        render();
    }
}
const deleteProduct = (id) => {
    const index = chosenProductList.findIndex(item => id === item.id);
    if(index !== -1){
        chosenProductList.splice(index,1);
        render();
        console.log(chosenProductList)
    }
}
const render = () => {
    var htmlContent = "";
    var cost = 0;
    for(var i = 0; i < chosenProductList.length; i++){
        const currentItem = chosenProductList[i];
        htmlContent += `
            <tr>
                <th>${i+1}</th>
                <td>${currentItem.name}</td>
                <td>${currentItem.price}</td>
                <td><input onchange=(changeQuantity(${currentItem.id},this.value)) type="number" min=1 value="${currentItem.quantity}"/></td>
                <td><button type="button" class="btn btn-danger" onclick=(deleteProduct(${currentItem.id}))>Xóa</button></td>
            </tr>
        `;
        cost+=currentItem.price*currentItem.quantity;
    }
    document.getElementById('tbody').innerHTML = htmlContent;
    document.getElementById('total').innerHTML = cost + " VND";
}
document.getElementById('paybtn').addEventListener('click', function(){
    chosenProductList = [];
    render();
    alert('Cảm ơn bạn đã thanh toán!');
});