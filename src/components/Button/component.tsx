import * as classNames from 'classnames'
import * as React from 'react'

import './index.scss'

enum Type {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Info = 'info',
  Light = 'light',
  Dark = 'dark',
  Link = 'link'
}

export interface IProps {
  type?: Type
  className?: string
  children?: JSX.Element[] | JSX.Element
}

export interface IState {
  disabled: boolean
}

class Button extends React.Component<IProps, IState> {
  public static defaultProps: IProps = {
    type: Type.Primary
  }

  constructor(props: IProps) {
    super(props)
    this.state = {
      disabled: false
    }
  }

  public render() {
    const { type, children, className, ...props } = this.props
    const { disabled } = this.state
    const clsName = classNames(
      'btn',
      {
        [`btn-${type}`]: true
      },
      className
    )

    return (
      <button {...props} disabled={disabled} className={clsName}>
        {children}
      </button>
    )
  }
}

export default Button
