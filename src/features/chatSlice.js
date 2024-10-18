import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    messages: [],
    currentUser: 'User',
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        sendMessage: (state, action) => {
            state.messages.push({ ...action.payload, type: 'sent' });
        },
        receiveMessage: (state, action) => {
            state.messages.push({ ...action.payload, type: 'received' });
        },
    },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
