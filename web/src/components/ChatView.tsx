import { Room } from "../App"
import { ChatFeed } from "./chat/ChatFeed"
import { ChatInfo } from "./chat/ChatInfo"
import { ChatInput } from "./chat/ChatInput"

interface ChatViewProps {
    room: Room
    onLeave: () => void
}

export const ChatView: React.FC<ChatViewProps> = ({ onLeave, room }) => {
    return (
        <div className="flex flex-col justify-between border-gray-600 border-[1px] rounded w-[80%] h-[80%]">
            <ChatInfo
                title={room.code}
                onClick={onLeave}
            />
            <ChatFeed />
            <ChatInput />
        </div>
    )
}
