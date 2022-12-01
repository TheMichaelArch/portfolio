import React from 'react'

type MyButtonProps = {
    content: string
    onClick?: () => void
}

const MyButton: React.FC<MyButtonProps> = ({ content = 'KEK', onClick }) => {
  return (
    <button
        style={{
            height: '25px',
            width: '120px',
            background: 'lightgreen'
        }}
        onClick={onClick}
    >
        { content }
    </button>
  )
}

export default MyButton
