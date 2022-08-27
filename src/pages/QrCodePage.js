import React, { useState } from "react"
import axios from 'axios'

export default function QrCodePage() {
    const [urlQrCode, setUrlQrCode] = useState('')
    const [page, setPage] = useState('')

    function sendForm(event) {
        event.preventDefault()
        axios.get('/', { link: urlQrCode }).then(res => openHtml(res.data)).catch(err => console.log(err))
    }

    function openHtml(page) {
        if (page) {
            setPage(page)
            return (
                <>{page}</>
            )
        }
        return <></>
    }

    return (
        <>
            <form onSubmit={sendForm}>
                <input type="text" placeholder="entre com a url" value={urlQrCode} name={urlQrCode} onChange={e => setUrlQrCode(e.target.value)} required />
                <button type="submit">Press</button>
            </form>
            {page}
        </>

    )
}