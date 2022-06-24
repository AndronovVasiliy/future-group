import style from './Header.module.scss'
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getBookListAction } from '../../store/reducers/booksActionCreator';
import { useNavigate } from 'react-router-dom';
import { bookSlice } from '../../store/reducers/bookSlice';

enum SortingEnum {
    relevance = "relevance",
    newest = "newest",
}

enum CategoryEnum {
    all = "all",
    art = "art",
    biography = "biography",
    computers = "computers",
    history = "history",
    medical = "medical",
    poetry = "poetry"
}

type Inputs = {
    nameBook: string,
    sorting: SortingEnum,
    category: CategoryEnum
};

const SearchForm = () => {

    const navigate = useNavigate()
    const {step} = useAppSelector(state => state.books)

    const dispatch = useAppDispatch()
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        dispatch(getBookListAction({nameBook: data.nameBook, sorting: data.sorting, category: data.category, step: step}))
        bookSlice.actions.setSearchData({querySearch: data.nameBook, sorting: data.sorting, category: data.category})
        navigate('./')
    }

    return (
        <form className={style.serach_form} onSubmit={handleSubmit(onSubmit)}>
            <input className={style.query_search} {...register("nameBook")} />
            <div className={style.form_item}>
            <label>Sort by</label>
            <select {...register("sorting")} >
                <option value="relevance">relevance</option>
                <option value="newest">newest</option>
            </select>
            </div>
            <div className={style.form_item}>
            <label>Select a category</label>
            <select {...register("category")} >
                <option value="all">all</option>
                <option value="art">art</option>
                <option value="biography">biography</option>
                <option value="computers">computers</option>
                <option value="history">history</option>
                <option value="medical">medical</option>
                <option value="poetry">poetry</option>
            </select>
            </div>
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;