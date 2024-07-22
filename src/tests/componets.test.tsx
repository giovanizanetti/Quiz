// src/components/Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { UtilButton } from '../components/UtilButton'
import '../config/i18n'

describe('UtilButton', () => {
  const buttonLabel = 'TEST'

  it('renders UtilButton', () => {
    render(<UtilButton onClick={() => {}}>{buttonLabel}</UtilButton>)
    expect(screen.getByText(buttonLabel)).toBeDefined()
  })

  it('it calls the onClick property correctelly', () => {
    let counter = 0

    render(<UtilButton onClick={() => counter++}>{buttonLabel}</UtilButton>)
    fireEvent.click(screen.getByText(buttonLabel))
    expect(counter).toEqual(1)
    fireEvent.click(screen.getByText(buttonLabel))
    expect(counter).toEqual(2)
  })

  it('disabled correctelly', () => {
    let counter = 0
    let disabled = true
    render(
      <UtilButton disabled={disabled} onClick={() => counter++}>
        {buttonLabel}
      </UtilButton>
    )
    fireEvent.click(screen.getByText(buttonLabel))
    expect(counter).toEqual(0)
  })
})
