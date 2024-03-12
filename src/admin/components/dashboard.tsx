import { Box, Button, Icon, Text, H2, H4, Link } from '@adminjs/design-system';
import React, { FC } from 'react';


const Dash: FC = () => {
  return (
      <Box flex flexDirection="column" alignItems="center" justifyContent="center">
        <br />
        <br />
        <H2 fontWeight="bold">Welcome, Candidate!</H2>
        <H4 >By this <Link href="https://docs.google.com/document/d/1VtBNKJslytjY3PVi5X-tQtwZzKA4lWH6yxNiGxV8UEA/edit?usp=sharing">Link</Link> you will find your task for the home assignment, good luck!</H4>

        
      </Box>
  );
};

export { Dash };
export default Dash;
