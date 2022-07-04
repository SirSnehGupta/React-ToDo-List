import PropTypes from 'prop-types'
import Button  from './Button'

export const Header = ({title, onAddTask, showAdd}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd? "#d60000" : "#009400"} text={showAdd? "Close" : "Add"} onClick={onAddTask}/>
    </header>

  )
}

Header.defaultProps = {
    title: "Task tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header;