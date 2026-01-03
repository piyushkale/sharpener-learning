async function displayData() {
  try {
    const crud = await axios.get(
      "https://crudcrud.com/api/10ff453bb88c45c3b31c646ed72571a4/order"
    );
    const data = crud.data;

    const t1 = document.getElementById("t1");
    const t2 = document.getElementById("t2");
    const t3 = document.getElementById("t3");

    // 🔴 CLEAR previous data before adding again
    t1.innerHTML = "";
    t2.innerHTML = "";
    t3.innerHTML = "";

    data.forEach((ord) => {
      if (ord.table === "table1") {
        addToOrder(ord.price, ord.dish, ord.table, ord._id, "t1");
      }
      if (ord.table === "table2") {
        addToOrder(ord.price, ord.dish, ord.table, ord._id, "t2");
      }
      if (ord.table === "table3") {
        addToOrder(ord.price, ord.dish, ord.table, ord._id, "t3");
      }
    });
  } catch (error) {
    console.log(error);
  }
}
displayData();

function addToOrder(price, dish, table, id, ele) {
  const elem = document.getElementById(`${ele}`);
  elem.innerHTML += `<div>Price ${price}, Dish ${dish}, Table ${table}  <button onclick="deleteOrder('${id}')">Delete</button></div>`;
}
function deleteOrder(id){
    axios.delete(`https://crudcrud.com/api/10ff453bb88c45c3b31c646ed72571a4/order/${id}`).then(res=>{
        console.log(res)
        displayData()
    }).catch(err=>{
        console.log("Delete error :",err)
    })
}
function handleFormSubmit(event) {
  event.preventDefault();
  const price = event.target.price.value;
  const dish = event.target.dish.value;
  const table_selection = event.target.table_selection.value;

  const obj = {
    price: price,
    dish: dish,
    table: table_selection,
  };
  axios
    .post(
      "https://crudcrud.com/api/10ff453bb88c45c3b31c646ed72571a4/order",
      obj
    )
    .then((res) => {
      console.log(res.data);
      displayData();
    })
    .catch((err) => {
      console.log(err);
    });
}
