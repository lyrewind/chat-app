interface ChatInfoProps {
    title: string
    onClick: () => void
}

export const ChatInfo: React.FC<ChatInfoProps> = ({ title, onClick }) => {
    return (
        <div className="flex border-b-gray-600 border-b-[1px] h-8">
            <p className="w-full px-2 text-center my-auto">{title}</p>
            <button className="border-l-gray-600 border-l-[1px] px-6 hover:font-bold hover:border-l-white" onClick={onClick}>Leave</button>
        </div>
    )
}
