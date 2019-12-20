import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'

import ProductList from './ProductList'
import ProductForm from './ProductForm'

const GET_PRODUCTS = gql`
  {
    getProducts {
      idProduct
      name
    }
  }
`

const ADD_PRODUCT = gql`
  mutation addProduct($name: String!) {
    addProduct(name: $name) {
      idProduct
      name
    }
  }
`

const ProductPage = () => {
  const [newProductName, setNewProductName] = useState()

  const { loading, error, data } = useQuery(GET_PRODUCTS)
  const [addProduct] = useMutation(ADD_PRODUCT, {
    update (cache, { data: { addProduct } }) {
      const { getProducts } = cache.readQuery({ query: GET_PRODUCTS })
      cache.writeQuery({
        query: GET_PRODUCTS,
        data: { getProducts: getProducts.concat([addProduct]) }
      })
    }
  })

  const onNameChange = e => {
    setNewProductName(e.target.value)
  }

  const createProduct = () => {
    addProduct({ variables: { name: newProductName } })
    setNewProductName(undefined)
  }

  if (loading) return 'Chargement...'
  if (error) return 'Erreur...'

  return (
    <div>
      <ProductList products={data.getProducts} />
      <ProductForm
        nameValue={newProductName}
        onNameChange={onNameChange}
        createProduct={createProduct}
      />
    </div>
  )
}

export default ProductPage
