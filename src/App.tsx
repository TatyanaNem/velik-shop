import { Button } from "./components/Button"

function App() {
  return (
    <>
      <Button color='green' variant='filled' size='large'>Кнопка</Button>
      <Button color='green' size='large'>Кнопка</Button>
      <Button color='orange' variant='filled'>Кнопка</Button>
      <Button color='orange' size='large'>Кнопка</Button>
      <Button disabled>Disabled</Button>
    </>
  )
}

export default App;
