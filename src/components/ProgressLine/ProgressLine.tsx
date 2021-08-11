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

export const ProgressLine: React.FC<TProgressLine> = ({
  carName,
  carNumber,
  description,
  priceMax,
  priceMin,
  tank,
  colors,
  imgCarUrl,
  originalname,
  setProgressLineResult,
}) => {
  const percentageLine = () => {
    let value = 0
    if (carName) {
      value = value + 10
    }
    if (carNumber) {
      value = value + 10
    }
    if (description) {
      value = value + 10
    }
    if (priceMax) {
      value = value + 10
    }
    if (priceMin) {
      value = value + 10
    }
    if (tank) {
      value = value + 10
    }
    if (colors) {
      value = value + 10
    }
    if (imgCarUrl) {
      value = value + 20
    }
    if (originalname) {
      value = value + 10
    }
    setProgressLineResult(value)
    return value
  }

  return <BorderLinearProgress variant="determinate" value={percentageLine()} />
}
