import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ArtworkList from './components/ArtworkList'
import ArtworkDetail from './components/ArtworkDetail'
import { AppBar, Toolbar, Typography, Container, ThemeProvider } from '@mui/material'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1, textAlign: 'center' }}>
              Art Institute of Chicago: Artworks Gallery
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route path='/' element={<ArtworkList />} />
            <Route path='/artwork/:id' element={<ArtworkDetail />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  )
}

export default App
