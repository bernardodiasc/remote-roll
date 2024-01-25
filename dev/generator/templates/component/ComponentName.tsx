import type { FunctionComponent } from 'react'
import type { I<%= componentName %>Props } from './<%= componentName %>.types'

import styles from './<%= componentName %>.module.css'

const <%= componentName %>: FunctionComponent<I<%= componentName %>Props> = ({
  onClick,
  label = 'ClickMe!',
  placeholder,
}) => {
  if (!onClick) {
    return null
  }

  return (
    <div
      data-testid="<%= componentName %>"
      className={styles.component}
    >
      <input
        data-testid="<%= componentName %>-email"
        placeholder={placeholder}
      />
      <button
        data-testid="<%= componentName %>-button"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  )
}

export default <%= componentName %>
