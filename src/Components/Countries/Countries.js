import React,{useState, useEffect} from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, []);
    return (
        <div>
            <h1>Total Countries : {countries.length}</h1>
            <div className='countries'>
                {
                    countries.map(country => <Country name={country.name.official} population={country.population} flag={country.flags.png}></Country>)
                    // countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries; 