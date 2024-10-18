import React from 'react';
import { Container, Box } from '@mui/material';
import MessageInput from './components/MessageInput';
import ChatDisplay from './components/ChatDisplay';

const App = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ boxShadow: 3, p: 2, bgcolor: 'white', borderRadius: 1 }}>
        <ChatDisplay />
        <MessageInput />
      </Box>
    </Container>
  );
};

export default App;
