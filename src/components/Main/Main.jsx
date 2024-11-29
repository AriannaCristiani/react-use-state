import { languages } from '../../languages.js'
import Button from '../Button/Button.jsx'


export default function Main() {

    return (
        <div className='container'>
            <ul className='list'>
                {languages.map((language) => (
                    <li key={language.id}>
                        <Button title={language.title} />
                    </li>
                ))}

            </ul>
        </div>
    )

}