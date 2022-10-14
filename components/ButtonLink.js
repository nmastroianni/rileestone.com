import * as React from 'react'
import { PrismicLink } from '@prismicio/react'

const ButtonLink = ({
  herobuttontext,
  herobuttonlink,
  herobuttonstyle,
  herobuttonripple,
}) => {
  let rippleProps = {}
  if (herobuttonripple) {
    rippleProps['data-mdb-ripple'] = true
    rippleProps['data-mdb-ripple-color'] = 'danger'
  }
  switch (herobuttonstyle) {
    case 'Outline':
      return (
        <PrismicLink
          field={herobuttonlink}
          className="btn-outline"
          {...rippleProps}
        >
          {herobuttontext}
        </PrismicLink>
      )
    case 'Rounded':
      return (
        <PrismicLink
          field={herobuttonlink}
          className="btn-rounded"
          type="button"
          {...rippleProps}
        >
          {herobuttontext}
        </PrismicLink>
      )
    case 'Rounded Outline':
      return (
        <PrismicLink
          field={herobuttonlink}
          className="btn-rounded-outline"
          {...rippleProps}
        >
          {herobuttontext}
        </PrismicLink>
      )
    case 'Ghost':
      return (
        <PrismicLink
          field={herobuttonlink}
          className="btn-ghost"
          {...rippleProps}
        >
          {herobuttontext}
        </PrismicLink>
      )
    default:
      return (
        <PrismicLink
          field={herobuttonlink}
          className="btn-default"
          {...rippleProps}
        >
          {herobuttontext}
        </PrismicLink>
      )
  }
}

export default ButtonLink
