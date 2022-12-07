export const ChatInput: React.FC = () => {
    return (
        <div className="flex">
            <input
                className="w-full text-lg px-2"
                placeholder="Type here..."
            />
            <button className="px-6">Send</button>
        </div>
    )
}
