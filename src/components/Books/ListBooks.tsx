import style from './Book.module.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { BookCart } from './BookCart'
import { getNewPortionBook } from '../../store/reducers/booksActionCreator'
import Preloader from '../common/Preloader/Preloader'

const ListBooks = () => {

  const { books, category, sorting, portion, step, querySearch, isLoading } = useAppSelector(state => state.books)
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(getNewPortionBook({ nameBook: querySearch, category: category, sorting: sorting, start: portion * step + 1, step: step }))
  }

  return (
    <>
      {isLoading && books.length <= 0 ?
        <Preloader />
        :
        <ul className={style.list_book}>
          {books.map((item, index) => <BookCart key={index} {...item} />)}
        </ul>}
      {books.length > 0 && <button className={style.button_new_portion} disabled={isLoading} onClick={() => onClick()}>Еще</button>}
    </>
  )
}

export default ListBooks