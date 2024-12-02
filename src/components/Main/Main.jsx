import { languages } from '../../languages.js'
import Button from '../Button/Button.jsx'
import Card from '../Card/Card.jsx'


export default function Main() {

    const firstLanguage = languages[0];

    return (
        <section>
            <div className='container'>
                <ul className='list'>
                    {languages.map((language) => (
                        <li key={language.id}>
                            <Button title={language.title} />
                        </li>
                    ))}

                </ul>
            </div>
            <div className='container'>
                <Card title={firstLanguage.title} description={firstLanguage.description} />
            </div>
        </section>
    )

}