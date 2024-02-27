
import { useState } from "react";

var recent = []
export default function SearchBarWithSuggestion() {
  const [txtValue, setTxtValue] = useState('')
  const [text, setText] = useState('')
  var data = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

  var filterData = []
  if (txtValue.length !== 0) {
    filterData = data.filter(item =>
      item.toUpperCase().includes(txtValue.toUpperCase())
    );
  }

  const handleClick = (item) => {
    setText(item)
    setTxtValue(item)
    recent.unshift(item)
  }

  const handleClick2 = (item) => {
    setText(item)
    setTxtValue(item)
    recent.unshift(item)
  }


  function ShowData() {
    return filterData.slice(0, 5).map((item) => {
      var highlight = item.split('').map((char) => {
        if (txtValue.toUpperCase().split('').includes(char.toUpperCase())) {
          return <span style={{ color: 'black', fontWeight: 'bold' }}>{char}</span>;
        } else {
          return <span>{char}</span>;
        }
      })
      return <div onClick={() => { handleClick(item) }}>{highlight}</div>
    })
  }
  function ShowRecent() {
    return recent.slice(0, 5).map((item) => {
      return <div onClick={() => { handleClick2(item) }}>{item}</div>
    })
  }


  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', marginTop: '20%' }}>
        <input type="text" placeholder="place name you wanna search......" onChange={(event) => {
          setTxtValue(event.target.value)
          setText('')
        }} value={txtValue} style={{ width: 250, marginRight: 10 }} />
        <button onClick={() => {
          setTxtValue('')
          setText('')
        }}>clear</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: 258, height: 'auto', backgroundColor: 'lightgrey', alignSelf: 'center', marginRight: 55 }}>
        <div style={{ backgroundColor: 'gray', color: 'white', cursor: 'pointer' }}> {txtValue.length !== 0 ? <>Suggestions (up to 5)</> : <>Previous Searches (up to 5)</>}</div>
        {txtValue.length !== 0 ? <>{ShowData()}</> : <>{ShowRecent()}</>}
      </div>
      <div style={{ marginTop: 100, color: 'darkgreen', fontSize: 30, fontWeight: 'bold', textAlign: 'center', }}>{text}</div>
    </div>
  )
}

