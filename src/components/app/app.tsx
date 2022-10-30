import React from 'react';
import { Container } from '../container/container';
import { Typography } from '../ui/typography/typography';
import { Workspace } from '../workspace/workspace';


function App() {
  return (
    <Container >
      <Typography variant='h' color='secondary'>todos</Typography>
      <Workspace />
    </Container>
  );
}

export default App;
