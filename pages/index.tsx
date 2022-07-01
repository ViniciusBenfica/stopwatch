import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { styled } from '../styles/stitches.config'
import * as Dialog from '@radix-ui/react-dialog';

import {
  css,
} from '@stitches/react';

const Container = styled('div', {
  display: "flex",
})

const DivTimer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  margin: "15px 0",
  // all: 'unset',
  // gap: 20,
})

const Input = styled('input', {
  all: 'unset',
  width: '280px',
  height: "35px",
  fontSize: 15,
  color: "$testando",
  boxShadow: `0 0 0 1px #038C65`,
  borderRadius: "5px",

  '&:focus': { boxShadow: `0 0 0 2px #038C65` },

})

const Label = styled('label', {
  all: 'unset',
  width: '90px',
  textAlign: "right",
  marginRight: "20px",
  // boxShadow: `0 0 0 1px $testando`,
  borderRadius: 4,
  color: "$testando",
  fontSize: "15px"

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
  variants: {
    BackgroundColor: {
      red: { backgroundColor: "red" }
    }
  }
})

const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.2)"
})

const Content = styled(Dialog.Content, {
  position: "fixed",
  width: "400px",
  height: "250px",
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  top: "50%",
  left: "50%",
  lineHeight: "1.5",
  transform: "translate(-50%, -50%)",
})

const DivInputs = styled("div", {
  // display: "flex",
  // flexDirection: "column",
  alignContent: "space-around",
})

const Close = styled(Dialog.Close, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  float: "right",
  backgroundColor: "green",
  color: "yellow",
})

const box = css({
  
});

const Home: NextPage = () => {



  return (
    <Container>
      {/* <h1>STUDY TIMER</h1>
        <DivTimer>
          <div>
            <Stopwatch onClick={() => testando("comecar")} BackgroundColor={'red'}>{count}</Stopwatch>
            <div>HOURS</div>
          </div>
          <div>
            <Stopwatch onClick={() => testando("nao")} BackgroundColor={'red'}>17</Stopwatch>
            <div>MINUTES</div>
          </div>
          <div>
            <Stopwatch BackgroundColor={'red'}>17</Stopwatch>
            <div>SECONDS</div>
          </div>
        </DivTimer> */}
      <Dialog.Root>
        <Dialog.Trigger>Edit stopwatch</Dialog.Trigger>
        <Dialog.Portal>
          <Overlay></Overlay>
          <Content>
            <Dialog.Title className={box({ css: { fontSize: "16px", marginTop: "0" } })}>Edit stopwatch</Dialog.Title>
            <Dialog.Description className={box({ css: { color: "grey", fontSize: "14px", marginTop: "-5px" } })}>Make changes to your stopwatch here. Click save when you're done.</Dialog.Description>
            <DivTimer className={box({ css: {marginTop: "25px" }})}>
              <Label>Name</Label>
              <Input></Input>
            </DivTimer>
            <DivTimer>
              <Label>Description</Label>
              <Input></Input>
            </DivTimer>
            <Close>Save changes</Close>
          </Content>
        </Dialog.Portal>
      </Dialog.Root>

    </Container>
  )
}

export default Home
