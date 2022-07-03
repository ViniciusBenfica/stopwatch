import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog';

import {
  Timer,
  Input,
  Label,
  Stopwatch,
  Overlay,
  Content,
  Close,
  DivStopwatch,
  Button,
  box,
  Trigger
} from "../styles/index.style"

const Home: NextPage = () => {

  var [count, setCount] = useState<number>(0)
  var [timer, setTimer] = useState<any>()

  var [teste, setTeste] = useState<any>({ second: 0, minute: 0, hour: 0 })


  var startStopwatch = (opcao: boolean): any => {
    var objectTime = { second: 0, minute: 0, hour: 0 }

    if (opcao) {
      setTimer(window.setInterval(() => {
        objectTime.second++
        if (objectTime.second >= 60) {
          objectTime.minute++
          objectTime.second = 0
        }

        if (objectTime.minute >= 60) {
          objectTime.hour++
          objectTime.minute = 0
        }

        setTeste({ second: objectTime.second, minute: objectTime.minute, hour: objectTime.hour })
      }, 1000))
    } else {
      setTimer(clearInterval(timer))
    }

  }

  return (
    <div>
      <DivStopwatch>
        <h1>STUDY TIMER</h1>
        <Timer>
          <div>
            <Stopwatch BackgroundColor={'red'}>{teste.second}</Stopwatch>
            <div>HOURS</div>
          </div>
          <div>
            <Stopwatch BackgroundColor={'red'}>{teste.minute}</Stopwatch>
            <div>MINUTES</div>
          </div>
          <div>
            <Stopwatch BackgroundColor={'red'}>{teste.hour}</Stopwatch>
            <div>SECONDS</div>
          </div>
        </Timer>
        <Dialog.Root>
          <div className={box({ css: { display: "flex", justifyContent: "space-around", width: "100%" } })}>
            <Trigger>Edit stopwatch</Trigger>
            <Button onClick={() => startStopwatch(true)}>Start stopwatch</Button>
            <Button onClick={() => startStopwatch(false)}>Stop stopwatch</Button>
          </div>
          <Dialog.Portal>
            <Overlay />
            <Content>
              <Dialog.Title className={box({ css: { fontSize: "16px", marginTop: "0", color: "black" } })}>Edit stopwatch</Dialog.Title>
              <Dialog.Description className={box({ css: { color: "grey", fontSize: "14px", marginTop: "-5px" } })}>Make changes to your stopwatch here. Click save when you're done.</Dialog.Description>
              <Timer className={box({ css: { marginTop: "25px" } })}>
                <Label>Name</Label>
                <Input></Input>
              </Timer>
              <Timer>
                <Label>Description</Label>
                <Input></Input>
              </Timer>
              <Close>Save changes</Close>
            </Content>
          </Dialog.Portal>
        </Dialog.Root>
      </DivStopwatch>
    </div>
  )
}

export default Home
