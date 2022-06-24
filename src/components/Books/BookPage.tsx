import { useParams } from 'react-router-dom'
import notImg from './img/notImg.png'
import style from './Book.module.scss'
import { useEffect, useState } from 'react'
import { BookType } from '../../commonTypes/commonTypes'
import { bookApi } from '../../API/Api'
import Preloader from '../common/Preloader/Preloader'

export const BookPage = () => {

    const [book, setBook] = useState<BookType>()

    let urlParams = useParams<{ id?: string }>()

    useEffect(() => {
        if (urlParams.id) {
            bookApi.getBook(urlParams.id).then(res =>
                setBook(res.data)
            )
        }
    }, [urlParams.id])

    return (
        <div className={style.book_page}>
            {book ?
                <>
                    <div className={style.book_page_img_area}>
                        {book && <div className={style.book_page_img} style={{ backgroundImage: book.volumeInfo.imageLinks ? `url(${book.volumeInfo.imageLinks.smallThumbnail})` : `url(${notImg})` }}></div>}
                    </div>
                    <div className={style.book_page_description}>
                        <p className={style.categories_book}>{book.volumeInfo.categories ? book.volumeInfo.categories.map(i => <a key={i.length} href='/#'>{`${i} /`}</a>) : ""}</p>
                        <h2>{book.volumeInfo.title}</h2>
                        <div className={style.block_autors}>
                            {book.volumeInfo.authors && book.volumeInfo.authors.map(i => <p className={style.autor_page_book}>{i}</p>)}
                        </div>
                        <p className={style.description_of_the_content_book}>{book.volumeInfo.description}</p>
                    </div>
                </> : <Preloader />
            }

        </div>
    )
}
