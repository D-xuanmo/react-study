import { useState, useCallback } from 'react'
const Child1 = (props) => {
  const handleChange = useCallback((event) => {
    props.onChange?.({
      ...props.value,
      child1: event.target.value
    })
  }, [props])
  return <input value={props.value.child1} onChange={handleChange} />
}

const Child2 = (props) => {
  const handleChange = useCallback((event) => {
    props.onChange?.({
      ...props.value,
      child2: event.target.value
    })
  }, [props])
  return <input value={props.value.child2} onChange={handleChange} />
}

export const CallbackExample = () => {
  const [value, setValue] = useState({
    child1: '',
    child2: ''
  })

  const handleChange = useCallback((value) => {
    setValue(value)
  }, [])

  return (
    <>
      <Child1 value={value} onChange={handleChange} />
      <Child2 value={value} onChange={handleChange} />
      <p>value: {JSON.stringify(value)}</p>
    </>
  )
}
