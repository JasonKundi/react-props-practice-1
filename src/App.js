import { useState } from 'react'
import { reverse } from './helpers'
import Title from './Title.js'
import NameLength from './NameLength.js'
import './styles.css'

export default function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name = {name}/> 
      <NameLength name = {name}/>
      <p className="name-reversed">
        Also, {name} backwards is {reverse(name)}
      </p>
    </div>
  )
}
