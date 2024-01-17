import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtworkDetail, resetArtworkDetail } from '../redux/actions'
import { RootState } from '../redux/reducer'
import { AppDispatch } from '../redux/store'
import { Button, Typography, Paper, Container, Grid, Box } from '@mui/material'
import { FileWatcherEventKind } from 'typescript'

const ArtworkDetail: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const { artworkDetail, loading, error } = useSelector((state: RootState) => state.artworkDetail)

  useEffect(() => {
    if (id) dispatch(fetchArtworkDetail(Number(id)))
    return () => {
      dispatch(resetArtworkDetail())
    }
  }, [id, dispatch])

  const handleBack = () => {
    navigate(-1)
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  if (!artworkDetail) return <div>No artwork details available.</div>

  return (
    <Container>
      <Button onClick={handleBack} variant='contained' color='primary' style={{ marginTop: '20px' }}>
        Back to List
      </Button>
      <Paper style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant='h4' gutterBottom>
          {artworkDetail.title}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='body1'>
              <strong>Artist:</strong> {artworkDetail.artistDisplay}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1'>
              <strong>Date Display:</strong> {artworkDetail.dateDisplay}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1'>
              <strong>Place of Origin:</strong> {artworkDetail.placeOfOrigin}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1'>
              <strong>Dimensions:</strong> {artworkDetail.dimensions}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1'>
              <strong>Credit Line:</strong> {artworkDetail.creditLine}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1'>
              <strong>Medium Display:</strong> {artworkDetail.mediumDisplay}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1'>
              <strong>Artwork Type:</strong> {artworkDetail.artworkTypeTitle}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1'>
              <strong>Department:</strong> {artworkDetail.departmentTitle}
            </Typography>
          </Grid>
        </Grid>
        {artworkDetail.imageUrl && (
          <Box mt={2} display='flex' justifyContent='center'>
            <img
              src={artworkDetail.imageUrl}
              alt={`Image of ${artworkDetail.title}`}
              style={{ maxWidth: '100%', height: 'auto', padding: '20px' }}
            />
          </Box>
        )}
      </Paper>
    </Container>
  )
}

export default ArtworkDetail
