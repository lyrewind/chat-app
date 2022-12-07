import { ChatFeed } from "./chat/ChatFeed"
import { ChatInput } from "./chat/ChatInput"

export const ChatView: React.FC = () => {
    return (
        <div className="flex flex-col justify-between border-gray-600 border-[1px] rounded w-[80%] h-[80%]">
            <ChatFeed />
            <ChatInput />
        </div>
    )
}
