// quais acoes meu carrinho poe fazer

// casos de uso
// ✅----adicionar item no carrinho

async function addItem(userCart, item) {
userCart.push(item);

    
}
// ---calcular total o carrinho

async function calculeTotal(userCart) {
    console.log ("\n Shopee Cart Total is ... "); 
const result =  userCart.reduce((total, item) => total + item.subtotal(), 0); 

console.log(`  🎁 Total: ${result}`);
    
}

// --- deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1 ){
userCart.splice(index, 1);

    }
    
}

// ----remover um item so diminui  um item
async function removeItem(userCart, item) {

    
    //transforma o inice visual o usuario, para o inice de backend
const deleteIndex = index - 1;

    // eh maior do que zero e se eh menor do que o tamamnho do carrinho 
 if (deleteIndex >= 0 && deleteIndex < userCart.length){
      userCart.splice(deleteIndex, 1);
   }
    
}
// mostrar o carrinho o usuario
async function displayCart(userCart)  {
    console.log(" \n Shopee Car LIST... ");
    userCart.forEach(( item , index) => {
        console.log(`${index + 1} . ${item.name} - R$ ${item.price} | 
             ${item.quantity} x | Subtotal = ${item.subtotal()}`);

    
});
    
}

export {
    addItem,
    calculeTotal,
    deleteItem,
    removeItem,
    displayCart,
}
