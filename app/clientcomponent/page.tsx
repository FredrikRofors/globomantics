'use client'

import { useState } from "react"

export default function Page() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>This is a client-side component</h1>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>Click to increase counter</button>
        </>
    )
}