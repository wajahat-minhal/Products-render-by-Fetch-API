// let div = document.querySelector(".container");

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => {
//         return res.json()
//     })
//     .then((res) => {
//        console.log(res)
//        res.map((item)=>{
//            div.innerHTML += `
//            <div class="card">
//            <h3>${item.id}</h3>
//            <h1>${item.name}</h1>
//            <h3>${item.username}</h3>
//            <h3>${item.email}</h3>
//            </div>
//            `

//        })

//     })
//     .catch((err) => {
//         console.log(err)
//     })


let div = document.querySelector(".container");

fetch("https://dummyjson.com/products")
    .then((res) => {
        return res.json()
    })
    .then((res) => {
        const data = res.products
        console.log(data)
        data.map((item) => {
            div.innerHTML += `
            <div class="card">
                <img src="${item.thumbnail}"></img>
                <h3>${item.id}</h3>
                <h1>${item.title}</h1>
                <h3>Category: ${item.category}</h3>
                <h3>Price: ${item.price}</h3>
                <button class = "see-more" onclick = "seeMore(${item.id})">See More</button>
            </div>
            `

        })
    })
    .catch((err) => {
        console.log(err)
    })

function seeMore(id) {
    window.location = "seeMore.html"
    localStorage.setItem("id", id)
    console.log(id)
}
