import classes from "./ContentBlock.module.css";
import MyButton from "../../../../shared/UI/button/MyButton.tsx";
import {Link} from "react-router-dom";

const ContentsBlock = () => {
    return (
        <div className={classes.container}>
            <div className={classes.name}>Chery Arrizo 8</div>

            <div className={classes.title}>Характеристики</div>
            <table>
                <tr>
                    <th>Коробка передач</th>
                    <td>Автоматическая</td>
                </tr>
                <tr>
                    <th>Руль</th>
                    <td>Левый</td>
                </tr>
                <tr>
                    <th>Тип кузова</th>
                    <td>Кроссовер</td>
                </tr>
                <tr>
                    <th>Цвет</th>
                    <td>Белый</td>
                </tr>
            </table>

            <div className={classes.title}>Стоимость</div>
            <table>
                <tr>
                    <th>Аренда на 7 дней</th>
                    <td>1 апреля – 8 апреля</td>
                </tr>
                <tr className={classes.sum}>
                    <th>Итого</th>
                    <td>35 000 ₽</td>
                </tr>
            </table>

            <div className={classes.btns}>
                <Link to={"/"}>
                    <MyButton className={classes.btn1}>
                        Назад
                    </MyButton>
                </Link>

                <Link to={"/reservation"}>
                    <MyButton className={classes.btn2}>
                        Забронировать
                    </MyButton>
                </Link>
            </div>
        </div>
    );
};

export default ContentsBlock;