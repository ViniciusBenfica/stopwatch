import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog';

import { 
  Container,
  DivTimer,
  Input,
  Label,
  Stopwatch,
  Overlay,
  Content,
  DivInputs,
  Close,
  box} from "../styles/index.style"

const Home: NextPage = () => {

  return (
    <Container>
      <h1>STUDY TIMER</h1>
       {/*  <DivTimer>
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
