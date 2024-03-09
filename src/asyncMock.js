const products = [
    {
      id: "1",
      name: "iphone 12",
      price: 899.500,
      category: "celular",
      img: "https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png",
      stock: 25,
      description: "Descripcion de Iphone 12",
    },
    {
      id: "2",
      name: "samsung s21",
      price: 751.900,
      category: "celular",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803",
      stock: 16,
      description: "Descripcion de Samsung s21",
    },
    {
      id: "3",
      name: "Ipad 8va generacion",
      price: 480.700,
      category: "tablet",
      img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
      stock: 9,
      description: " Ipad de 10th generations",
    },
    {
      id: "4",
      name: "Apple Macbook Pro",
      price: 840.899,
      category: "Computers",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_992056-MLA53127199389_012023-F.webp",
      stock: 4,
      description: "Apple Macbook Pro A1398 Notebook Core I7 4ta 256gb Ssd 16gb (Reacondicionado)",
    },
    {
    id: "5",
    name: "Tablet T-go",
    price: 120.560,
    category: "tablet",
    img: "https://http2.mlstatic.com/D_NQ_NP_908430-MLU74022982830_012024-O.webp",
    stock: 9,
    description: "Descripcion de tablet T-go Gamer",
    },
    {
      id: "6",
      name: "Notebook Asus Vivobook Go 14",
      price: 389.990,
      category: "Computers",
      img: "https://http2.mlstatic.com/D_NQ_NP_990344-MLU74139464529_012024-O.webp",
      stock: 28,
      description: "Asus,celeron N4020 E410ma-bv2442w color negro",
      }
  



    
  ];

  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 1000);
    });
  };

  export const getProductById = (productoId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productoId));
      }, 1000);
    });
  };