import React from 'react'
import styled from 'styled-components'

const TableStyle = styled.table`
    width: 500px;
    height: 600px;
`
const ThStyle = styled.th`
    background: #686cb3;
    color:white;
    padding: 12px;
    border: 1px solid #dddddd;
`

const TrStyle = styled.tr`
    border:1px white;
    font-weight: bold;
    font-size: 25px;
    color:black;
    padding: 12px;
    &:hover{background-color: #45a14e;}
    cursor: pointer;
`

const TdStyle = styled.td`
    border:1px white;
    font-weight: lighter;
    font-size: 18px;
    background: #cef3ddff;
    padding: 12px;
`

const productItems = [{
    product_name: "삼성 TV",
    price: 10000,
    color: "블랙"
},{
    product_name: "LG 냉장고",
    price: 30000,
    color: "베이지"
},{
    product_name: "애플 노트북",
    price: 50000,
    color: "그레이"
}]

const Products = () => {
  return (
    <div>
        <TableStyle>
            <thead>
            <TrStyle>
                <ThStyle>제품명</ThStyle>
                <ThStyle>가격</ThStyle>
                <ThStyle>색상</ThStyle>
            </TrStyle>
            </thead>
            <tbody>
                {productItems.map((product) => 
                <TrStyle>
                    <TdStyle>{product.product_name}</TdStyle> 
                    <TdStyle>{product.price}</TdStyle>
                    <TdStyle> {product.color}</TdStyle>
                </TrStyle>)}
            </tbody>
        </TableStyle>
    </div>
  )
}

export default Products