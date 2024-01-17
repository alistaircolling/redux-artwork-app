import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchArtworks } from '../redux/actions'
import { RootState } from '../redux/reducer'
import { AppDispatch } from '../redux/store'
import { Artwork } from '../types'
import { useNavigate } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Container,
} from '@mui/material'

const ArtworkList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { loading, artworks, error } = useSelector((state: RootState) => state.artworks)

  useEffect(() => {
    dispatch(fetchArtworks())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <Container style={{ marginTop: '20px' }}>
      <TableContainer component={Paper} style={{ padding: '20px' }}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align='right'>Artist</TableCell>
              <TableCell align='right'>Date</TableCell>
              <TableCell align='right'>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {artworks.map((artwork: Artwork) => (
              <TableRow key={artwork.id}>
                <TableCell component='th' scope='row'>
                  {artwork.title}
                </TableCell>
                <TableCell align='right'>{artwork.artistDisplay}</TableCell>
                <TableCell align='right'>{artwork.dateDisplay}</TableCell>
                <TableCell align='right'>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => navigate(`/artwork/${artwork.id}`)}
                    style={{ margin: '10px' }}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ArtworkList
