import type { Component } from 'solid-js'
import Circle from './components/Circle'
import Active from './components/ActiveCircle'
import Hover from './components/HoverCircle'

const App: Component = () => {
  return (
    <div>
      <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
      <Circle />
    </div>
  )
}

export default App
