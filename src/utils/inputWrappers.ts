export function wrapTextInput(handler: (value: string) => void) {
  return (e: { target: { value: string } }) => handler(e.target.value)
}

export function wrapNumberInput(handler: (value: number) => void) {
  return (e: { target: { value: string } }) => handler(Number(e.target.value))
}

export function wrapSwitchInput(handler: (value: boolean) => void) {
  return (e: unknown, checked: boolean) => handler(checked)
}
