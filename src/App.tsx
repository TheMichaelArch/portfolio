// App.tsx
import React from 'react'
import MyFirstComponent from './components/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent'
import ClickCount from './components/clicker/clickCount';
import MyButton from './components/MyButton';

const App: React.FC = () => {
  return (
    <div>
      <MyButton content='Nappi 1' onClick={() => console.log('Nappi 1')} />
      <MyButton content='Nappi 2' onClick={() => console.log('Nappi 2')} />
      <MyFirstComponent />
      <SomeExampleComponent />
      <ClickCount />
    </div>
  )
}

export default App

