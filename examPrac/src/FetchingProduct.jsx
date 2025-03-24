import { useEffect, useState } from "react";

function FetchingProduct() {
  const [products, setProducts] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [title, setTitle] = useState('');
  const [categ, setCateg] = useState('');
  const [priceRange, setPriceRange] = useState(250);
  const [rating, setRating] = useState(0.1);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(proData => {
        setProducts(proData);

        // Get unique categories
        let Categ = proData.map(product => product.category);
        let AllCateg = ['All', ...new Set(Categ)];
        setAllCategories(AllCateg);
      })
      .catch(error => console.error("Error fetching data:", error));

      
  }, []);
  function changeHandler(e){
    if(e.target.name==='category')
    {
        setCateg(e.target.value)
    }
    if(e.target.name==='price')
        {
            setPriceRange(e.target.value)
        }
        if(e.target.name==='rating')
            {
                setRating(e.target.value)
            }
  }

  let filteredProducts=products.filter(product=> (product.category===categ || categ==='All' ) && ((priceRange>=product.price) && ( rating >= product.rating.rate) ))
  

  return (
    <div>
              
                <div> <label htmlFor="">category</label>
                   <select name="category" id="" onChange={changeHandler}>
                   {allCategories.map((categ)=> <option value={categ}>{categ}</option>)}
                   </select>
                </div>
                
                <div> <label htmlFor="">price :{priceRange}</label>
                
                  <input type="text" name="price" onChange={changeHandler}/>
                </div>
                <div> 
                    <label htmlFor="">rating: {rating}</label>
                    <input type="range"  name="rating" min={0} max={5} onChange={changeHandler}/>
                    
                    </div>
              
                
           

      <h1>Product Details</h1>

      

      <div>
        {
        filteredProducts.map(product=>{
            return(

                <div>

            <h1>
                {product.title}
            </h1>
            <img src={product.image} alt="" width={80}/>
            </div>
            )
        }) }

        
      </div>
    </div>
  );
}

export default FetchingProduct;
