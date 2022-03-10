import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom'
import Container from '../../components/Container/Container'
import ChooseItem from '../../components/ChooseItem/ChooseItem';
import Header from '../../components/Header/Header';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

function ProductDetails() {
  const { id } = useParams()
  const [result, setResult] = useState()

  useEffect(() => {
    fetch(`http://localhost:9022/api/items/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((resp) => resp.json())
      .then((data) => { setResult(data) })
  }, [id])

  const location = useLocation()
  let categories;
  if (location.state) { categories = location.state }

  return (
    <>
      <Header />
      <Container customClass='breadcrumb'>
        {categories && <Breadcrumb categories={categories} />}
      </Container>
      <Container>
        {result && <ChooseItem item={result.item} />}
      </Container>
    </>
  )
}

export default ProductDetails;