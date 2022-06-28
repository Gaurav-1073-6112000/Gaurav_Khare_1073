var arr = [
    { name: "Alinaa", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071"},
    { name: "George", img: "https://images.unsplash.com/photo-1597843572347-e66b3eeb7b79?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935"},
    { name: "Mayra", img: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1826"},
    { name: "Vikash", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887"},
    { name: "Avni", img: "https://images.unsplash.com/photo-1556632973-57d167636a3f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070"},
    { name: "Sherya", img: "https://images.unsplash.com/photo-1520512202623-51c5c53957df?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887"},
    { name: "Ritik", img: "https://images.unsplash.com/photo-1598106755735-3ebfced1d38b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887"},
    { name: "Sonali", img: "https://images.unsplash.com/photo-1609241642232-cd1edbc10b7a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887"},
    { name: "Kate", img: "https://images.unsplash.com/photo-1530554313278-5fc75c0b5a80?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887"},
    { name: "Marry", img: "https://images.unsplash.com/photo-1488508872907-592763824245?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070"}
];

var clutter = "";

arr.forEach(function(elem, index){
    clutter += `<div id="${index}" class="contactCard">
    <div class="contactdp">
    <img src="${elem.img}" alt="">
    </div>
    <div class="contactInfo">
        <h3>${elem.name}</h3>
        <p>Hey there! I am using WhatsApp</p>
    </div>    
</div>`

})

document.querySelector("#contactsSection").innerHTML = clutter;


document.querySelector("#contactsSection").addEventListener("click", function(dets){

// console.log(arr[dets.target.id].img); 
document.querySelector("#contactdp h3").innerHTML=`${arr[dets.target.id].name}`;
document.querySelector("#contactdp .contactdp").style.backgroundImage =`url(${arr[dets.target.id].img})`
document.querySelector("#userDashDp").style.backgroundImage =`url(${arr[dets.target.id].img})`
document.querySelector("#uDash h5").style.display = `block`;
});