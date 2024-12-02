import { useState } from 'react';
import { languages } from '../../languages.js';
import Button from '../Button/Button.jsx';
import Card from '../Card/Card.jsx';


export default function Main() {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);


    const handleButtonClick = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <section>
            <div className='container'>
                <ul className='list'>
                    {languages.map((language) => (
                        <li key={language.id}>
                            <Button
                                title={language.title}
                                onClick={() => handleButtonClick(language)}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <div className='container'>
                <Card
                    title={selectedLanguage.title}
                    description={selectedLanguage.description}
                />
            </div>
        </section>
    );
}