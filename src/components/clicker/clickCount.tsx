import React from 'react'
import styles from './clickCount.module.scss'
import { useState } from 'react';

type ClickCountProps = {

}

const ClickCount: React.FC<ClickCountProps> = () => {
  const [count, setCount] = useState(0);
    return (
      <div className={styles.container}>
      {/* Declare a new state variable, which we'll call "count" */}
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              <h2> Click me </h2>
            </button>
      </div>
  )
}

export default ClickCount
