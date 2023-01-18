import { render } from 'solid-js/web'
import type { Component } from 'solid-js'

const Badge: Component = () => {
  return (
    <div>
      <div class="border-2  text-center  rounded-full bg-red-700 w-4 h-4 text-xs font-semibold  align-middle text-white">
        <p class="">2</p>
      </div>
    </div>
  )
}

export default Badge
