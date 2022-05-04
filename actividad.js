const products = [
    {
      productId: 1,
      name: "headphones",
      typeOfProduct: 1,
      price: 100,
    },
    {
      productId: 2,
      name: "Shoes Nike",
      typeOfProduct: 2,
      price: 300,
    },
    {
      productId: 3,
      name: "hamburger",
      typeOfProduct: 3,
      price: 10,
    },
    {
      productId: 4,
      name: "Fries",
      typeOfProduct: 3,
      price: 5,
    },
    {
      productId: 5,
      name: "Sandwich",
      typeOfProduct: 3,
      price: 10,
    },
    {
      productId: 6,
      name: "laptop",
      typeOfProduct: 1,
      price: 100,
    },
    {
      productId: 7,
      name: "keyboard",
      typeOfProduct: 1,
      price: 50,
    },
    {
      productId: 8,
      name: "t-shirt",
      typeOfProduct: 2,
      price: 16,
    },
  ];
  
  const typeOfProducts = [
    { id: 1, name: "Electronic" },
    { id: 2, name: "Clothes" },
    { id: 3, name: "Food" }
  ];
  
  export const discountsHolyDays = [
    { typeOfProduct: 1, discountApply: true, value: 10 },
    { typeOfProduct: 2, discountApply: false, value: 0 },
    { typeOfProduct: 3, discountApply: true, value: 30 },
  ];
  
  //// Activity
  
  // cada solución debe de crearse con metodo que retorne el resultado esperado de cada punto
  // y su llamda del metodo con un console.log donde muestre la información
  
  /// 1 - ¿Cuál es el promedio de valor de cada tipo de producto?
             //Array separados por tipo
             const tipo1 = [];
             const tipo2 = [];
             const tipo3 = [];
 
             // Tipo 1
             const categoria1 = products.filter((producto,index,arreglo)=>{
             return producto.typeOfProduct === 1 })
             tipo1.push(categoria1)
             console.log(tipo1);
             
           
             // Tipo 2
             const categoria2 = products.filter((producto,index,arreglo)=>{
             return producto.typeOfProduct === 2 })
             tipo2.push(categoria2)
             console.log(tipo2);
             
             // Tipo 3
             const categoria3 = products.filter((producto,index,arreglo)=>{
             return producto.typeOfProduct === 3 })
             tipo3.push(categoria3)
             console.log(tipo3);
                     
 

  /// 2 - ¿Cuál es el producto más costoso de cada categoria?
           


  /// 3 - ¿Exite algún producto de tipo Electronico que cueste $100?

                
  /// 4 - Obtener todos los productos que en nombre tengan las letra S. 
        const productosConS = products.filter( (product,index,arreglo)=>{
               
                return product.name.includes('s') 
        } )
        console.log(productosConS);
        
  /// 5 - Crear un arreglo de objetos con la siguiente información: { productId: 7 ,nameProduct: 'keyboard', typeOfProduct: 'Electronic', discount: '10', applyDiscount: true}
        
        const nuevoObjecto = [{
            productId: 7 ,
            nameProduct: 'keyboard',
            typeOfProduct: 'Electronic',
            discount: '10', 
            applyDiscount: true
        }]
   /// 6. Crear un arreglo de objetos con la siguiente información: { productId: 7, priceWithDiscount: 45}
   const nuevoArreglo = [{
    productId: 7, 
    priceWithDiscount: 45
}]
  
  // 7. Agregar los siguientes productos, y crear un arreglo con el resultado, ejemplo: [{id: 9, status: 'succes', id:10: status: 'error': message: 'error message'}];
  
  const newProducts = [
      {
          id: 9,
          name: 'Tucson',
          typeOfProcuct: 'Car',
          discount: 10,
      },     {
          id: 10,
          name: 'Jeep',
          typeOfProcuct: 'Car',
          discount: 10,
      },  {
          id: 10,
          name: 'Screen',
          typeOfProcuct: 'Electronic'
      },{
          id: 1,
          name: 'Mouse',
          typeOfProcuct: 'Electronic'
      }
  ]