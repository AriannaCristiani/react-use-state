import style from './Button.module.css'

export default function Button({ title, onClick }) {
    return (
        <button className={style.btn} onClick={onClick}>
            {title}
        </button>
    );
}