import style from './Card.module.css'

export default function Card(props) {
    console.log(props)

    return (

        <div className={style.card}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>

    )
}