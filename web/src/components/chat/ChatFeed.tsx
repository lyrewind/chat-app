import { useEffect, useState } from "react"

export interface ChatMessage {
    author: string
    content: string
}

export const ChatFeed: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([])

    useEffect(() => {
        let dummy: ChatMessage[] = []
        for (let i = 0; i < 40; i++) {
            dummy.push({
                author: `author ${i + 1}`,
                content: ["hmm", "yeah", "nope"][Math.floor(Math.random() * 3)]
            })
        }
        setMessages([...messages, ...dummy])
    }, [])

    return (
        <div className="h-full p-2 overflow-y-scroll">
            {messages.map(message => (
                <div className="flex gap-2">
                    <strong>{message.author}</strong>
                    <p>{message.content}</p>
                </div>
            ))}
        </div>
    )
}
