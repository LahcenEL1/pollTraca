import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
//import Grid2 from '@mui/material/Grid2';
import Grid2 from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { useAppState } from '../store/AppState';
import { getPolls } from '../store/PollData';
import { PollCard } from './PollCard';

export const PickPoll = () => {
  const setAdd = useAppState().setAdd
  const polls = getPolls()
  return <Container>
    <Grid2 container direction="row" justifyContent="center" alignItems="center">
      <Grid2>
        <Typography variant="h2" sx={{ mt: '140px', mb : '60px', fontFamily: 'Dancing Script', justifyContent : 'center' }}>
          Give your opinion!
        </Typography>
      </Grid2>
      <Grid2 xs={12}>
        <Grid2 container justifyContent="center" alignItems="center" spacing={4}>
          { polls.map((s,i) => {
              return <Grid2 key={"survey_"+i} md={4} sm={6} xs={12}>
                <Grid2 container justifyContent='center'>
                  <PollCard data={s}/>
                </Grid2>
              </Grid2>
            })
          }
        </Grid2>
      </Grid2>
      <Grid2 container direction="row" justifyContent="center" alignItems="center" sx={{ mt : '12px', mb: '18px' }}>
        <Grid2>
          <Typography variant="h5" sx={{ fontFamily : 'Dancing Script' }}>Want a new poll?</Typography>
        </Grid2>
        <Grid2>
          <Button onClick={setAdd} sx={{ ml: '18px', mt : '4px' }}>add poll</Button>
        </Grid2>
      </Grid2>
    </Grid2>
  </Container>
}