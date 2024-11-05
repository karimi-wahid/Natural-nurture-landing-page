import React from 'react'
import ProductCategory from '../components/ProductCategory'
import { useParams } from 'react-router-dom'
import { bathBody, hairCare, skinCare, gifts ,productText } from '../constants/Products'

const ProductType = () => {
    const {category} = useParams();

    const categories = {  
        'bathBody': {  
            products: bathBody,  
            categoryName: "Bath & Body",  
        },  
        'hairCare': {  
            products: hairCare,  
            categoryName: "Hair Care",  
        },
        'skinCare': {  
            products: skinCare,  
            categoryName: "Skin Care",  
        },    
        'gifts': {  
            products: gifts,  
            categoryName: "Gifts",  
        },    
    };

    const selectedCategory = categories[category];


    
  return (
    <div>  
    {selectedCategory ? (  
        <ProductCategory   
            products={selectedCategory.products}   
            categoryName={selectedCategory.categoryName}
            text={productText}   
        />  
    ) : (  
        <p>Category not found.</p> 
    )}  
</div>
  )
}

export default ProductType