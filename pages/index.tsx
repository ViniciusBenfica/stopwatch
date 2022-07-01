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
  Close,
  DivStopwatch,
  box} from "../styles/index.style"

const Home: NextPage = () => {

  var [count, setCount] = useState<number>(0)
  var [timer, setTimer] = useState<any>()

  var [teste, setTeste] = useState<any>({second:0, minute: 0, hour: 0})
  
  
  var startStopwatch = (opcao: boolean): any => {
    var mamigu = {second:0, minute: 0, hour: 0}

    if (opcao) {
      setTimer(window.setInterval(() => {
        mamigu.second++
      if(mamigu.second >= 60){
        mamigu.minute++
        mamigu.second = 0
      }

      if(mamigu.minute >= 60){
        mamigu.hour++
        mamigu.minute = 0
      }

      setTeste({second: mamigu.second, minute: mamigu.minute, hour: mamigu.hour })
      }, 1000))
    } else {
      setTimer(clearInterval(timer))
    }
    
  }
  
  return (
    <Container>
      <DivStopwatch>
        <h1>STUDY TIMER</h1>
        <DivTimer>
          <div>
            <Stopwatch onClick={() => startStopwatch(true)} BackgroundColor={'red'}>{teste.second}</Stopwatch>
            <div>HOURS</div>
          </div>
          <div>
            <Stopwatch onClick={() => startStopwatch(false)} BackgroundColor={'red'}>{teste.minute}</Stopwatch>
            <div>MINUTES</div>
          </div>
          <div>
            <Stopwatch BackgroundColor={'red'}>{teste.hour}</Stopwatch>
            <div>SECONDS</div>
          </div>
        </DivTimer>
        <Dialog.Root>
          <Dialog.Trigger>Edit stopwatch</Dialog.Trigger>
          <Dialog.Portal>
            <Overlay/>
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
      </DivStopwatch>
    </Container>
  )
}

export default Home
