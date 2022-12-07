import { useState } from "react"
import { ChatView } from "./components/ChatView"
import { Home } from "./components/Home"

type AppView = "home" | "chat"

export interface Room {
    code: string
}

function App() {
    const [view, setView] = useState<AppView>("home")
    const [room, setRoom] = useState<Room | null>(null)

    const switchToRoom = (_room: Room) => {
        setView("chat")
        setRoom(_room)
    }
    const switchToHome = () => setView("home")
    return (
        <div className="flex w-[100vw] h-[100vh] justify-center items-center">
            {view == "home" ? <Home  onJoin={switchToRoom}/> : <ChatView onLeave={switchToHome} room={room as Room}/>}
        </div>
    )
}

export default App
