import React from "react"

// const foo = <div />

// console.log(foo)

const c = createjs
const canvas = document.createElement("canvas")

Object.assign(document.body.style, {
  margin: "0px"
})

document.body.appendChild(canvas)

Object.assign(canvas.style, {
  position: "fixed",
  top: "0px",
  left: "0px",
  // backgroundColor: "red",
  width: `${window.innerWidth}px`,
  height: `${window.innerHeight}px`,
})

Object.assign(canvas, {
  width: window.innerWidth,
  height: window.innerHeight
})

const stage = new c.Stage(canvas)
const root = new lib.timelineanimation()
stage.addChild(root)
stage.update()

const main = root.main
main.x = window.innerWidth / 2
main.y = window.innerHeight / 2
main.gotoAndStop(0)


const tree = main.tree

c.Ticker.setFPS(30)
c.Ticker.addEventListener("tick", stage)

const scrollpane = document.createElement("div")

Object.assign(scrollpane.style, {
  height: "3000px",
  background: "url('bg.png')",
  padding: "0px",
  margin: "0px",
})

document.body.appendChild(scrollpane)

window.addEventListener("scroll", ()=> {
  console.log("scrolling!!!")
  console.log("scrollpane height:", scrollpane.style.height)

  const winHeight = window.innerHeight
  const scrollpaneHeight = parseInt(scrollpane.style.height, 10)
  const scrollPos = document.body.scrollTop
  const paneHeightOffset = scrollpaneHeight - winHeight
  const scrollPercent = scrollPos / paneHeightOffset
  const targetFrame = (main.totalFrames * scrollPercent) - 1

  main.gotoAndStop(targetFrame)

  console.log(winHeight, scrollpaneHeight, scrollPos, paneHeightOffset, scrollPercent)

})


window.addEventListener("resize", ()=> {
  console.log("resize: ", window.devicePixelRatio)
})






















