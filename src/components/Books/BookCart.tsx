import { NavLink } from 'react-router-dom'
import { BookType } from '../../commonTypes/commonTypes'
import style from './Book.module.scss'
import notImg from './img/notImg.png'

export const BookCart = (props: BookType) => {

    const { volumeInfo } = props

    return (
        <li className={style.book}>
            <p className={style.name_book}>{volumeInfo.title}</p>
            <NavLink to={`/bookpage/${props.id}`}>
                <div className={style.book_img} style={{ backgroundImage: volumeInfo.imageLinks ? `url(${volumeInfo.imageLinks.smallThumbnail})` : `url(${notImg})` }}></div>
            </NavLink>
            <div className={style.description_book}>
                <a className={style.categories_book} href="/#">{volumeInfo.categories ? volumeInfo.categories[0] : <p></p>}</a>
                <p className={style.autor_book}>{volumeInfo.authors}</p>
            </div>
        </li>
    )
}
