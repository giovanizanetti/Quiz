import { render } from '@testing-library/react'
import Home from '../views/Home'
import { describe, expect, it, vi } from 'vitest'
import { I18nextProvider } from 'react-i18next'
import i18n from '../config/i18n'
import NotFound from '../views/NotFound'

describe('View are rendered correctelly', () => {
  it('Home view matches the snapshot', () => {
    const { asFragment } = render(
      <I18nextProvider i18n={i18n}>
        <Home  />
      </I18nextProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('Not Found view matches the snapshot', () => {
    const { asFragment } = render(
      <I18nextProvider i18n={i18n}>
        <NotFound  />
      </I18nextProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
