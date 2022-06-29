import type { NextPage } from 'next'
import { useState } from 'react'
import { styled } from '../styles/stitches.config'

const Container = styled('div', {
  display: "flex",
})

const DivTimer = styled('div', {
  display: "flex",
})

const Stopwatch = styled('div', {
  width: '120px',
  height: '120px',
  lineHeight: "4",
  textAlign: "center",
  fontSize: "30px",
  borderRadius: '50%',
  background: `radial-gradient(white 50%, transparent 51%), conic-gradient(blue 250deg, orange 0deg)`,
  margin: "0 10px",
  variants:{
    BackgroundColor:{
      red:{backgroundColor: "red"}
    }
  }
})

const Home: NextPage = () => {



  return (
    <Container>
      <div>
        <h1>STUDY TIMER</h1>
        <DivTimer>
          <div>
            <Stopwatch BackgroundColor={'red'}>10</Stopwatch>
            <div>HOURS</div>
          </div>
          <div>
            <Stopwatch BackgroundColor={'red'}>17</Stopwatch>
            <div>MINUTES</div>
          </div>
          <div>
            <Stopwatch BackgroundColor={'red'}>17</Stopwatch>
            <div>SECONDS</div>
          </div>
        </DivTimer>
      </div>
    </Container>
  )
}

export default Home
