import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { deleteProduct, getProductById } from '../services/product_service.js'
import { IoStar } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Product() {
  const navigate = useNavigate();
  const [data, setData] = useState(null)
  const { id } = useParams()

  const fetchData = async () => {
    try {
      const data = await getProductById(id)
      setData(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const renderStars = (rating) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<IoStar color='gold' />)
      } else {
        stars.push(<IoStar color='gray' />)
      }
    }
    return stars
  }

  if (!data) {
    return null
  }

  function Description(text) {
    console.log(text)
    const formattedText = text.split('////n////').map((item, index) => {
      console.log(`item ----> ${item}`)
      return (
        <React.Fragment key={index}>
          {item}
          <br />
        </React.Fragment>
      )
    })

    return <div>{formattedText}</div>
  }

  return (
    <div className='container-fluid py-5'>
      <div className='row px-xl-5'>
        <div className='col-lg-5 pb-5'>
          <div
            id='product-carousel'
            className='carousel slide'
            data-ride='carousel'
          >
            <div className='carousel-inner border' style={{
              boxShadow: "0px 0px 30px gray"
            }}>
              <img
                className='product-image'
                src={data.images[0]}
                onError={(e) => {
                  console.log('error occured')
                  console.log('There is Error loading image:', e)
                }}
                alt='Product'
                onClick={() => {
                  console.log('Imsg Product Click happened')
                }}
              />
            </div>
          </div>
        </div>

        <div className='col-lg-7 pb-5'>
          <h3 className='font-weight-semi-bold'>{data.title}</h3>
          <div className='d-flex mb-3 justify-content-start'>
            <small className='pt-1'>({data.reviews.length} Reviews)</small>
          </div>
          <h3 className='font-weight-semi-bold mb-4'>Rs: {data.price}</h3>
          <div>
          <p className='mb-4' style={{textAlign: "start"}}>{data.stock ? 'In Stock' : 'Not in Stock'}</p>
          </div>

          <h3 className='font-weight-semi-bold mb-2'>Site: {data.site}</h3>
          <h3 className='font-weight-semi-bold mb-4'>
            Category: {data.category}
          </h3>
          {data.ratings !== 'null' && (
            <h3 className='font-weight mb-2 rating-starts'>
              {renderStars(data.ratings)}
            </h3>
          )}

          <div className='d-flex align-items-center mb-4 pt-2'>
            <div className='d-flex'>
              <button
                className='btn btn-primary px-3'
                style={{
                  backgroundColor: 'rgb(0, 65, 90)',
                  color: 'white',
                  padding: '10px 15px',
                }}
                onClick={() => {
                  window.open(data.product_url, '_blank')
                }}
              >
                Visit Store
              </button>

              <button
                className='btn btn-primary px-3 ml-4'
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  padding: '10px 15px',
                }}
                onClick={async () => {
                 const status = await deleteProduct(data._id) 
                 if(status){
                  alert("Product Deleted Successfully")
                  navigate(-1)
                 }else{
                  alert("Couldn't delete Product")
                 }

                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='row px-xl-5 ml-2'>
        <h4 className='mb-3'>Product Description</h4>
        <p
          style={{
            color: '#082137',
            textAlign: "start"
          }}
        >
          {Description(data.desc)}
        </p>
      </div>
    </div>
  )
}

export default Product
