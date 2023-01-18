import { render } from 'solid-js/web'
import type { Component } from 'solid-js'
import Badge from './Badge'

const Circle: Component = () => {
  return (
    <div class="group flex justify-between w-14 hover:">
      <div class=" mt-3 group-active:mt-1 flex items-center justify-items-center rounded-r-full  w-1 h-4 group-active:h-8 group-focus:h-8 bg-white group-hover:bg-black"></div>
      <div class=" text-center  rounded-full  bg-black w-11 h-11 text-sm font-semibold  align-middle text-white rounded-full group-hover:rounded-lg group-active:rounded-lg ">
        <p class="pt-2.5">A</p>
        <div class="ml-7 border-2  text-center  rounded-full bg-red-700 w-5 h-5 text-xs font-semibold  align-middle text-white">
          <p class="">2</p>
        </div>
      </div>
    </div>
  )
}

export default Circle
