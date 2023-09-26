import { useRef } from "react"
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

const SearchForm = () => {
    let keyword = useRef();
    let history = useHistory();

    const handleSubmit =(event) => {
        let word = keyword.current.value;
        event.preventDeFault()
        if (word.lenght < 2) {
            swal({
                text: 'El minimo de caracteres es 3',
                icon: 'error'
            });
        }else {
            keyword.current.value = '';
            history.push(`/results?word=${word}`);
        }
    }

    return (
        
        <div className="">
            <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                name="keywords"
                placeholder="Buscar productos, marcas y más"
                className="search-form_input"
                ref={keyword}
            />
            <button type="submit" className="">
                <i className="fas fa-search" />
            </button>
            </form>
        </div>
    );
}
export default SearchForm;