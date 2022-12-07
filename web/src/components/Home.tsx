import { useState } from "react"
import { Room } from "../App"

const MIN_LEN = 6

interface HomeProps {
    onJoin: (room: Room) => void
}

export const Home: React.FC<HomeProps> = ({ onJoin }) => {
    const [code, setCode] = useState("")

    const joinRoom = () => code.length >= MIN_LEN && onJoin({ code })

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
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    onKeyDown={e => e.key == "Enter" && joinRoom()}
                />
            </label>
            <button
                className="border-white border-2 rounded py-1"
                onClick={joinRoom}
            >
                Join
            </button>
        </div>
    )
}
