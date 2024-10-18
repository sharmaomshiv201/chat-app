import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { receiveMessage } from '../features/chatSlice';
import { Box, Typography, Paper } from '@mui/material';

const ChatDisplay = () => {
    const messages = useSelector((state) => state.chat.messages);
    const dispatch = useDispatch();
    const chatEndRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            dispatch(receiveMessage({ content: 'This is a simulated reply.', timestamp: new Date().toLocaleTimeString() }));
        }, 5000);
    }, [dispatch]);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <Box sx={{ height: 400, overflowY: 'auto', p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
            {messages.map((msg, index) => (
                <Paper
                    key={index}
                    sx={{
                        p: 1,
                        my: 1,
                        alignSelf: msg.type === 'sent' ? 'flex-end' : 'flex-start',
                        maxWidth: '70%',
                        bgcolor: msg.type === 'sent' ? '#d1e7dd' : '#fff3cd',
                    }}
                >
                    <Typography variant="body2">{msg.content}</Typography>
                    <Typography variant="caption" align="right" display="block">
                        {msg.timestamp}
                    </Typography>
                </Paper>
            ))}
            <div ref={chatEndRef} />
        </Box>
    );
};

export default ChatDisplay;
