// const layout = 'Hello';

// export { layout };
import React, { useState } from 'react';

function FormExample() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const columnStyle = {
        display: 'flex',
        flexDirection: 'column',
    }
    return (
        <form style={{ ...columnStyle, width: '300px' }}>
            <label style={columnStyle}>
                <span>Name:</span>
                <input
                    onChange={e => setName(e.target.value)}
                    value={name}
                    type="text"
                />
            </label>
            <label style={columnStyle}>
                <span>Email:</span>
                <input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="text"
                />
            </label>
            <pre>{JSON.stringify({ name, email }, null, 2)}</pre>
        </form>
    )
}

export default FormExample