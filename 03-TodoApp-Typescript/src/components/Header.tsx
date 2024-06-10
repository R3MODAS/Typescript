import goalImg from "../assets/goals.jpg"

const Header = () => {
  return (
    <header>
        <img src={goalImg} alt="this is goal img" />
        <h1>My TodoList</h1>
    </header>
  )
}

export default Header