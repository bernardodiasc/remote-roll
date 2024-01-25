import { FunctionComponent } from 'react'

import { useFeatureFlags } from '@hooks/useFeatureFlags'

import type { I<%= componentName %>Props } from './<%= componentName %>.types'

const <%= componentName %>: FunctionComponent<I<%= componentName %>Props> = ({
  children,
}) => {
  const { features } = useFeatureFlags()
  const is<%= componentName %>Enabled = features?.RELEASE_NEW_CONTAINER_<%= componentName.toUpperCase() %>
  return is<%= componentName %>Enabled ? (
    <>
      {children}
    </>
  ) : null
}

export default <%= componentName %>
