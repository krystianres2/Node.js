let input = document.getElementById("input")
let button = document.getElementById("button")
let list = document.getElementById("list")

button.addEventListener("click", add);


function sendItemToBackEnd(a) {
    fetch("http://127.0.0.1:8888/todos", {
        method: "POST",
        body: JSON.stringify(a),
        headers:{
            "Content-type": "application/json",
        },
    });
}

function getItemsFromBackEnd(){
    console.log(fetch("http://127.0.0.1:8888/todos").then((res)=>res.json()))
    return fetch("http://127.0.0.1:8888/todos").then((res)=>res.json());
}

function add() {
    let value = input.value;
    const obj={
        text: value
    };
    let ar;
    let List=[];
    List.length=0;
    List.push(obj);
    sendItemToBackEnd(obj)

    // const itemsResponse = getItemsFromBackEnd();
    // const items = itemsResponse.strList.map((item) => item.text);
    // for (let i = 0; i < items.length; i++) {
    //     List.push(items[i]);
    //     console.log(items[i]);
    //   }
    //   for(let i=0; i<List.length;i++){
    //     //console.log(List[i])
    //   }
    fetch("http://127.0.0.1:8888/todos")
    .then(response => response.json())
  .then(data => {
    const text = data.text;
    // use the text here
    console.log(JSON.parse(text));
  })
  .catch(error => {
    // handle errors here
    console.error(error);
  });
      //getItemsFromBackEnd();
//    getItemsFromBackEnd().then(({todoList})=>{
//         const s=ar;
//         todoList.forEach((Item)=>{
//             List.push(Object.value(Item.text));
//         });
//     });
    // let li = document.createElement("li");
    // list.appendChild(li);
    // list.lastChild.innerHTML = value;

    List.forEach((item)=>{
        const li =document.createElement("li");
        li.textContent=item.text;
        list.appendChild(li);
    });
}

