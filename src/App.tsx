// App.tsx
import React from 'react'
import HomePage from './components/home/homePage'
import ClickCount from './components/clicker/clickCount';
import MyButton from './components/MyButton';

const App: React.FC = () => {
  return (
    <div>
      <MyButton content='Nappi 1' onClick={() => console.log('Nappi 1')} />
      <MyButton content='Nappi 2' onClick={() => console.log('Nappi 2')} />
      <HomePage />
      <ClickCount />
    </div>
  )
}

export default App

