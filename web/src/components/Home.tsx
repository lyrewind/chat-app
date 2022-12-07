export const Home: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 py-12 px-6 w-[60%] border-gray-600 border-[1px] rounded focus-within:border-gray-500">
                <label
                    htmlFor="code"
                    className="flex flex-col focus-within:font-bold"
                >
                    Room Code
                    <input
                        id="code"
                        className="rounded bg-gray-800 text-white text-lg px-3 py-1"
                        placeholder="Room code..."
                    />
                </label>
            <button className="border-white border-2 rounded py-1">Join</button>
        </div>
    )
}
