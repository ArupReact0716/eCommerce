// Reactstrap
import { useState } from 'react'
// reactstrap
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
// country flag
import ReactCountryFlag from 'react-country-flag'
// icon
import { HiOutlineChevronDown } from 'react-icons/hi';

const LanguageDropdown = () => {
    // state
    const [country, setCountry] = useState({ value: 'in', label: 'India', flag: 'in' })
    // Language List
    const countryList = [
        { value: 'in', label: 'India', flag: 'in' },
        { value: 'us', label: 'English', flag: 'us' },
        { value: 'de', label: 'German', flag: 'de' }
    ]

    // Function to switch Language
    const handleCountry = (value) => {
        const country = countryList.filter((item) => item.value === value)[0]
        setCountry(country)
    }

    return (
        <UncontrolledDropdown tag='li' className='top-header-dropdown divider'>
            <DropdownToggle tag='div' className='dropdown-header-01'>
                <ReactCountryFlag className='country-flag' countryCode={country.flag} svg />
                <span className='mx-1'>{country.label}</span>
                <HiOutlineChevronDown />
            </DropdownToggle>
            <DropdownMenu end>
                {
                    countryList && countryList.map((country, index) => {
                        return (
                            <DropdownItem key={index} tag='div' onClick={() => handleCountry(country.value)}>
                                <ReactCountryFlag className='country-flag' countryCode={country.flag} svg />
                                <span className='ms-1'>{country.label}</span>
                            </DropdownItem>
                        )
                    })
                }
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default LanguageDropdown
