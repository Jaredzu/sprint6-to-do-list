import sunIcon from '../images/icon-sun.svg'
import moonIcon from '../images/icon-moon.svg'

const Title = () => {
  return (
    <div className='toDoHeader'>
      <h1>TODO</h1>
      <img src={moonIcon} alt='dark theme' />
    </div>
  )
}

export default Title
