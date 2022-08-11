import './App.css'
import { UserProvider } from './context/UserContext'
import UserBox from './components/UserBox'
import ScoreCounter from './components/ScoreCounter'
import UsernameInput from './components/UsernameInput'

function App() {
    return (
        <div className="App">
            <UserProvider>
                <UserBox />
                <ScoreCounter />
                <UsernameInput />
            </UserProvider>
        </div>
    )
}

export default App
