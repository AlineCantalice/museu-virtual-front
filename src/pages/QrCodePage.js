import React, { useState } from "react"
import axios from 'axios'

export default function QrCodePage() {
    const [urlQrCode, setUrlQrCode] = useState('')
    const [page, setPage] = useState('')

    async function sendForm(event) {
        event.preventDefault()
        const body = { link: urlQrCode }
        const data = await axios.post('http://localhost:4000/link', body);
        setPage(data.data)
    }

    return (
        <>
            <form onSubmit={sendForm}>
                <input type="text" placeholder="entre com a url" value={urlQrCode} onChange={e => setUrlQrCode(e.target.value)} required />
                <button type="submit">Press</button>
            </form>
            {page}
        </>

    )
}