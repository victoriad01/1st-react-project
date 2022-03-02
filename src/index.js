import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { personBirthdays } from './birthdays'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(personBirthdays)

  const onClickButton = () => setPeople([])
  return (
    <>
      <div className='card'>
        <h2>{people.length}-Birthday(s) Today</h2>
        {people.map((person) => {
          const { id, img, name, age } = person
          return (
            <article key={id} className='handp'>
              <img src={img} alt='person' className='dpimage' />

              <div>
                <span>
                  <h4>{name}</h4>
                  <p>{age}</p>
                </span>
              </div>
            </article>
          )
        })}
        <button type='button' className='btn' onClick={onClickButton}>
          Clear All
        </button>
      </div>
    </>
  )
}

// function BirthdayList() {
//   return (
//     <>
//       <section className='card'>
//         <h2>5 - Birthdays Today!</h2>
//         {personBirthdays.map((todaybirthday, index) => {
//           return <Birthdays key={todaybirthday.id} {...todaybirthday} />
//         })}
//         <button type='button' className='btn'>
//           Clear All
//         </button>

//         <UseStateExample />
//       </section>
//     </>
//   )
// }

// const Birthdays = ({ img, name, age }) => {
//   return (
//     <>
//       <div className=''>
//         <img src={img} alt='' />
//         <h3>{name}</h3>
//         <p>{age}</p>
//       </div>
//     </>
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <UseStateArray></UseStateArray>
  </React.StrictMode>,
  document.getElementById('root')
)
