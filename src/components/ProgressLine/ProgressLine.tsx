import React from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import { TProgressLine } from './ProgressLineType'

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 5,
      width: '100%',
      borderRadius: 4,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 4,
      backgroundColor: '#007BFF',
    },
  }),
)(LinearProgress)

export const ProgressLine: React.FC<TProgressLine> = ({ value }) => {
  return <BorderLinearProgress variant="determinate" value={value} />
}
