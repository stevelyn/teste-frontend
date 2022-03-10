import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/images/Logo_ML.png'
import search from '../../assets/images/ic_Search.png'

function Header() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleInputChange(e) {
    setQuery(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/items?search=${query}`)
  }

  return (
    <header className={styles.container}>
      <form onSubmit={handleSubmit}>
        <Link to='/'><img src={logo} alt='logo' /></Link>
        <div className={styles.search_tools}>
          <input placeholder='Nunca dejes de buscar' onChange={handleInputChange} />
          <button type='submit'><img src={search} alt='search' /></button>
        </div>
      </form>
    </header>
  )
}

export default Header;