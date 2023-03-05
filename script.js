let plugs = [
    {
        name:"Diamond Cakes",
        phone: "256-700-292679",
        image:"dp.png",
        category:"Cakes"
    },
    {
        name:"Diamond Cakes",
        phone: "256-700-292679",
        image:"dp.png",
        category:"Cakes"
    },
    {
        name:"Diamond Cakes",
        phone: "256-700-292679",
        image:"dp.png",
        category:"Umeme"
    },
    {
        name:"Diamond Cakes",
        phone: "256-700-292679",
        image:"dp.png",
        category:"Abayas"
    },
    {
        name:"Diamond Cakes",
        phone: "256-700-292679",
        image:"dp.png",
        category:"Accounting"
    },
    {
        name:"Diamond Cakes",
        phone: "256-700-292679",
        image:"dp.png",
        category:"Electricians"
    },
    {
        name:"Diamond Cakes",
        phone: "256-700-292679",
        image:"dp.png",
        category:"French translation"
    },
    {
        name:"Diamond Cakes",
        phone: "256-700-292679",
        image:"dp.png",
        category:"Jobs"
    }
]

const container = document.querySelector(".container");
loadData();
function loadData(){
    container.innerHTML="";
    let categories = [...new Set(plugs.map(i=>i.category))];
    for(i=0;i<categories.length;i++){
        const plugDiv = document.createElement("div"); 
        container.appendChild(plugDiv);
        plugDiv.classList.add("plug");
    
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");
        
        const categoryH3 = document.createElement("h3");
        categoryH3.textContent=categories[i];
        categoryDiv.appendChild(categoryH3);
        
        plugDiv.appendChild(categoryDiv);
    
        console.log(plugs[i].category)
        const filteredPlugs = plugs.filter(plug => plug.category === categories[i]);
    
        for(let plug of filteredPlugs){
           
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");
            plugDiv.appendChild(itemDiv);
            
            const itemImage = document.createElement('img');
            itemImage.setAttribute("src",plug.image);
            itemDiv.appendChild(itemImage);
    
            const itemName = document.createElement('p');
            itemName.classList.add("name");
            itemName.textContent=plug.name;
            itemDiv.appendChild(itemName);
    
            const itemPhone = document.createElement('p');
            itemPhone.classList.add("phone");
            itemPhone.textContent=plug.phone;
            itemDiv.appendChild(itemPhone);
            
        } 
    }
}
const addForm = document.querySelector("#addForm");
const addButton = document.querySelector("#addNew");
    
addButton.addEventListener("click",()=>{
    addForm.classList.remove("inactive")
})
   
addForm.addEventListener("submit",function(event){
    event.preventDefault;
    const newPlug={
        name:addForm.elements.name.value,
        phone:addForm.elements.phone.value,
        image:"dp.png",
        category:addForm.elements.category.value
    }
    console.log(plugs.length)
    plugs.push(newPlug);
    
    addForm.reset();
    addForm.classList.add("inactive");
    loadData();
})