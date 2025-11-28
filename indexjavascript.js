const selecionar_btn = document.getElementsByClassName("card-item")
const phone = "5517997583329"

for (let index = 0; index < selecionar_btn.length; index++){
    const element = selecionar_btn[index]
    const produto = element.querySelector("h3"). innerText.toLowerCase()
    const texto = "Olá estou interessado no "+produto
    const btn = element.querySelector("button")

    const urlEncode = encodeURIComponent(texto)
    const url ="https://wa.me/"+phone+"?text="+urlEncode

    btn.addEventListener("click",function(){
        window.open(url)
    })
}


