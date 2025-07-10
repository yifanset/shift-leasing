import classes from "./MainPage.module.css"
import CardList from "./components/card-list/CardList.tsx";
import Search from "./components/search/Search.tsx";



const MainPage = () => {
    return (
        <div className={classes.container}>
            <Search/>
            <CardList/>
        </div>
    );
};

export default MainPage;