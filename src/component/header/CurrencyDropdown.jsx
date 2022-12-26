// Reactstrap
import { useState } from 'react'
// reactstrap
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
// icon
import { HiOutlineChevronDown } from 'react-icons/hi';

const CurrencyDropdown = () => {
    // state
    const [currency, setCurrency] = useState({ value: 'INR', label: 'IND' })
    // currency List
    const currencyList = [
        { value: 'USD', label: 'USA' },
        { value: 'INR', label: 'INR' }
    ]

    // Function to switch Currency
    const handleCurrency = (value) => {
        const currency = currencyList.filter((item) => item.value === value)[0]
        setCurrency(currency)
    }

    return (
        <UncontrolledDropdown tag='li' className='top-header-dropdown'>
            <DropdownToggle tag='div' className='dropdown-header-01'>
                <span className='me-1'>{currency.label}</span>
                <HiOutlineChevronDown />
            </DropdownToggle>
            <DropdownMenu end>
                {
                    currencyList && currencyList.map((currency, index) => {
                        return (
                            <DropdownItem key={index} tag='div' onClick={() => handleCurrency(currency.value)}>
                                <span className='ms-1'>{currency.label}</span>
                            </DropdownItem>
                        )
                    })
                }
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default CurrencyDropdown
