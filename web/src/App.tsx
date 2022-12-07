import { useState } from "react"
import { ChatView } from "./components/ChatView"
import { Home } from "./components/Home"

type AppView = "home" | "chat"

function App() {
    const [view, setView] = useState<AppView>("chat")
    return (
        <div className="flex w-[100vw] h-[100vh] justify-center items-center">
            {view == "home" ? <Home /> : <ChatView />}
        </div>
    )
}

export default App
