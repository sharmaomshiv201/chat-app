import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../features/chatSlice';
import { Button, TextField, Box } from '@mui/material';

const MessageInput = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleSend = () => {
        if (message.trim()) {
            dispatch(sendMessage({ content: message, timestamp: new Date().toLocaleTimeString() }));
            setMessage('');
        }
    };

    return (
        <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
                variant="outlined"
                fullWidth
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button variant="contained" onClick={handleSend}>
                Send
            </Button>
        </Box>
    );
};

export default MessageInput;
