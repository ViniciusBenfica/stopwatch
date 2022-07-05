import type { NextPage } from 'next'
import { useState } from 'react'
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

interface time {
  seconds: number,
  minutes: number,
  hours: number
}

const Home: NextPage = () => {

  var [timer, setTimer] = useState<any>()
  var [count, setCount] = useState<time>({ seconds: 0, minutes: 0, hours: 0 })
  var [start, setStart] = useState<boolean>(true)
  var [title, setTitle] = useState<string>("NAME HERE")

  var [auxTitle, setAuxTitle] = useState<string>("")

  var startStopwatch = (opcao: boolean): void => {
    var objectTime = count

    if (opcao) {
      if (start) {
        setTimer(window.setInterval(() => {
          objectTime.seconds++

          if (objectTime.seconds >= 60) {
            objectTime.minutes++
            objectTime.seconds = 0
          }

          if (objectTime.minutes >= 60) {
            objectTime.hours++
            objectTime.minutes = 0
          }

          setCount({ seconds: objectTime.seconds, minutes: objectTime.minutes, hours: objectTime.hours })
        }, 1000))
        setStart(false)
      } else {
        setTimer(clearInterval(timer))
        setStart(true)
      }

    } else {
      setTimer(clearInterval(timer))
      setCount({ seconds: 0, minutes: 0, hours: 0 })
    }

  }

  return (
    <div>
      <DivStopwatch>
        <h1>{title}</h1>
        <Timer>
          <div>
            <Stopwatch className={box ({ css: { background: `radial-gradient(#061244 65%, transparent 10%), conic-gradient(#161682 ${360 * count.seconds / 60 }deg, #b8b8bb 0deg)`}})}>{count.seconds}</Stopwatch>
            <div>HOURS</div>
          </div>
          <div>
            <Stopwatch className={box ({ css: { background: `radial-gradient(#061244 65%, transparent 10%), conic-gradient(#161682 ${360 * count.minutes / 60 }deg, #b8b8bb 0deg)`}})}>{count.minutes}</Stopwatch>
            <div>MINUTES</div>
          </div>
          <div>
            <Stopwatch className={box ({ css: { background: `radial-gradient(#061244 65%, transparent 10%), conic-gradient(#161682 ${360 * count.hours / 12 }deg, #b8b8bb 0deg)`}})}>{count.hours}</Stopwatch>
            <div>SECONDS</div>
          </div>
        </Timer>
        <Dialog.Root>
          <div className={box({ css: { display: "flex", justifyContent: "space-around", width: "100%" } })}>
            <Trigger>Edit stopwatch</Trigger>
            {start ? <Button onClick={() => startStopwatch(true)}>Start stopwatch</Button> : <Button onClick={() => startStopwatch(true)}>Stop stopwatch</Button>}
            <Button onClick={() => startStopwatch(false)}>Reset stopwatch</Button>
          </div>
          <Dialog.Portal>
            <Overlay />
            <Content>
              <Dialog.Title className={box({ css: { fontSize: "16px", marginTop: "0", color: "black" } })}>Edit stopwatch</Dialog.Title>
              <Dialog.Description className={box({ css: { color: "grey", fontSize: "14px", marginTop: "-5px" } })}>Make changes to your stopwatch here. Click save when you're done.</Dialog.Description>
              <Timer className={box({ css: { marginTop: "25px" } })}>
                <Label>Name</Label>
                <Input type="text" onChange={(event) => setAuxTitle(event.target.value)}></Input>
              </Timer>
              <Timer>
                <Label>Description</Label>
                <Input></Input>
              </Timer>
              <Close  onClick={() => setTitle(auxTitle)}>Save changes</Close>
            </Content>
          </Dialog.Portal>
        </Dialog.Root>
      </DivStopwatch>
    </div>
  )
}

export default Home
