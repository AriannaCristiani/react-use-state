import style from './Button.module.css'


export default function Button(props) {
    console.log(props)
    return (
        <button className={style.btn}>{props.title}</button>
    )
}