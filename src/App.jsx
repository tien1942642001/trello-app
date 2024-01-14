import ButtonComponent from './components/ButtonComponent'
import Button from '@mui/material/Button'
import { useColorScheme } from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <>
      <Button onClick={() => {
        setMode(mode === 'dark' ? 'light' : 'dark')
      }}>{mode === 'dark' ? 'light' : 'dark'}</Button>
    </>
  )
}

function App() {
  return (
    <>
      <ModeToggle />
      <ButtonComponent />
    </>
  )
}

export default App
