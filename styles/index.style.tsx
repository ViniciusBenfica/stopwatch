import { styled } from './stitches.config'
import { css } from '@stitches/react';
import * as Dialog from '@radix-ui/react-dialog';

export const Container = styled('div', {
    background: "red"
  })

export const DivStopwatch = styled('div',{
   width: "500px",
   display: "flex",
   flexDirection: "column",
   background: "green",
   alignItems: "center",
   textAlign: "center",
})
  
export const DivTimer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    margin: "15px 0",
    // all: 'unset',
    // gap: 20,
})

export const Input = styled('input', {
    all: 'unset',
    width: '290px',
    height: "35px",
    fontSize: 15,
    color: "$testando",
    boxShadow: `0 0 0 1px #470070`,
    borderRadius: "5px",

    '&:focus': { boxShadow: `0 0 0 2px #470070` },

})

export const Label = styled('label', {
    all: 'unset',
    width: '90px',
    textAlign: "right",
    marginRight: "20px",
    // boxShadow: `0 0 0 1px $testando`,
    borderRadius: 4,
    color: "$testando",
    fontSize: "15px"
})

export const Stopwatch = styled('div', {
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

export const Overlay = styled(Dialog.Overlay, {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2)"
})

export const Content = styled(Dialog.Content, {
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

export const Close = styled(Dialog.Close, {
    all: 'unset',
    borderRadius: "5px",
    padding: '0 15px',
    fontSize: 15,
    height: 35,
    float: "right",
    backgroundColor: "#33ABAA",
    color: "white",
    marginTop: "10px",

    '&:hover': { backgroundColor: "#2d9999" },
})

export const box = css({

});