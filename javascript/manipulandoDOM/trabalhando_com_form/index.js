const form = document.getElementById("formOrder")

form.addEventListener('submit', function(event){
  event.preventDefault()

  const name = document.querySelector("input[name='name']").value
  const address = document.querySelector("input[name='address']").value
  const typebread = document.querySelector("select[name='typebread']").value
  const main = document.querySelector("input[name='main']").value
  const observation = document.querySelector("textarea[name='observation']").value

  let salad = ""

  document.querySelectorAll("input[name='salad']:checked").forEach(function(item){
    salad += " - " + item.value + "\n"
  })

  console.log(
    name, 
    address,
    typebread,
    main,
    salad,
    observation
  )

  alert(
    "Pedido Realizado!" +
    "\nNome do cliente: " + name +
    "\nEndereço de entrega: " + address +
    "\nTipo de pão: " + typebread +
    "\nRecheio: \n - " + main + "\n" + salad +
    "Observações: " + observation
  )
})