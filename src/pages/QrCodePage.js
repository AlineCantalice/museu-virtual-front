import React, { useState } from "react"
import axios from 'axios'
import createDOMPurify from 'dompurify'
//import { JSDOM } from 'jsdom'

export default function QrCodePage() {
    const [urlQrCode, setUrlQrCode] = useState('')
    const [page, setPage] = useState('')

    //const window = (new JSDOM('')).window
    const DOMPurify = createDOMPurify(window)

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
            <div>
            { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(page) }} /> }
            </div>
        </>

    )
}