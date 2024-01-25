import styled from "styled-components"
import Product from "./Product"
import { popularProduct } from "../data"

const Container=styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;
const Products = () => { 
  return (
    <Container>
        {popularProduct.map(item=>(
            <Product item ={item } key={item.id}/>
        ))}
      
    </Container>
  )
}

export default Products
