import style from './Header.module.scss'
import SearchForm from './SearchForm'

const Header = () => {
    
  return (
    <div className={style.header_component}>
        <h1>Search for books</h1>
        <SearchForm />
    </div>
  )
}

export default Header