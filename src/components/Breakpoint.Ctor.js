// https://github.com/bkzl/vue-fraction-grid/issues/13

import VShowAt from './ShowAt'
import VHideAt from './HideAt'
import VBreakpoint from './Breakpoint'
import VWithBreakpoint from './WithBreakpoint'

import merge from 'lodash.merge'

import breakpoints from '@/assets/javascript/breakpoints' // Bootstrap 4 (Stable)

export class Ctor {
  constructor(Vue, config = {}) {
    const defaults = {
      breakpoints,
      debounceTime: 100,
      experimental: false
    }

    config = merge({}, defaults, config)

    VShowAt.config = config
    VHideAt.config = config
    VBreakpoint.config = config

    this.VShowAt = VShowAt
    this.VHideAt = VHideAt
    this.VBreakpoint = VBreakpoint
    this.VWithBreakpoint = VWithBreakpoint
  }
}
