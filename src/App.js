import { ChatEngine } from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed'
import DirectChatPage from './components/DM'
import LoginForm from './components/LoginForm';
const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm / > ;
    return ( <
        ChatEngine height = "100vh"
        projectID = "4518c414-c5c0-429e-bf32-e473f58dd6a7"
        userName = { localStorage.getItem('username') }
        userSecret = { localStorage.getItem('password') }
        onNewMessage = {
            () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()
        }
        renderChatFeed = {
            (chatAppProps) =>
            <
            ChatFeed {...chatAppProps }
            />
        }
        />
    );
}

export default App;