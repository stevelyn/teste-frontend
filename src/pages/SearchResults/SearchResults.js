import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from '../../components/Container/Container'
import SearchItems from '../../components/SearchItems/SearchItems';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

function SearchResults() {
  const navigate = useNavigate()
  const [params, setParams] = useState('')
  const [results, setResults] = useState()

  const query = new URL(window.location.href)
  let search = query.searchParams.get("search")
  useEffect(() => {
    setParams(search)
  }, [search])

  if (params) {
    fetch(`http://localhost:9022/api/items?q=${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        setResults(data)
      })
  }

  function navigateToItem(itemId) {
    navigate(`/items/${itemId}`, { state: results.categories })
  }

  return (
    <>
      <Header />
      <Container customClass='breadcrumb'>
        {results && <Breadcrumb categories={results.categories} />}
      </Container>
      <Container>
        {results && results.items.map(item => (<SearchItems item={item} key={item.id} handleOnClick={navigateToItem} />))}
      </Container>
    </>
  )
}

export default SearchResults;