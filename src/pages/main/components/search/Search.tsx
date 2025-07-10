import classes from "./Search.module.css"
import filter from "./assets/filter.svg"
import MyInput from "../../../../shared/UI/input/MyInput.tsx";
import MyButton from "../../../../shared/UI/button/MyButton.tsx";


const Search = () => {
    return (
        <div className={classes.container}>
            <div className={classes.input}>
                <div className={classes.txt}>Поиск</div>
                <MyInput
                    type={"text"}
                    placeholder={"Поиск"}
                />
            </div>
            <div className={classes.input}>
                <div className={classes.txt}>Дата аренды</div>
                <MyInput
                    type={"date"}
                    placeholder={"Поиск"}
                />
            </div>
            <MyButton className={classes.btn}>
                <img
                    src={filter}
                    alt="filter"
                    width={20}
                    height={20}
                />
                <div className={classes.btnTxt}>Фильтры</div>
            </MyButton>
        </div>
    );
};

export default Search;