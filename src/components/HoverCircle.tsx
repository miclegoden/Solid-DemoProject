import { render } from 'solid-js/web'
import type { Component } from 'solid-js'
import Badge from './Badge'

const Hover: Component = () => {
  return (
    <div>
      <div class=" text-center  rounded-full  bg-black w-11 h-11 text-sm font-semibold  align-middle text-white hover: rounded-lg ">
        <p class="pt-2.5">A</p>
        <div class="ml-7 border-2  text-center  rounded-full bg-red-700 w-5 h-5 text-xs font-semibold  align-middle text-white">
          <p class="">2</p>
        </div>
      </div>
    </div>
  )
}

export default Hover
