import { Button } from "./components/Button"
import { Icon, IconSize } from "./components/Icon";
import { IconButton } from "./components/icon-button";
import { Input } from "./components/input";
import { Select } from "./components/select";
import { TextButton, TextButtonSize } from "./components/text-button";
import Toggle from "./components/toggle";
import {Typography, TypographyVariant} from './components/Typography'
import { Color } from "./tokens/colors";
import { IconName } from "./tokens/icons";

function App() {
  return (
    <>
      <Button color='green' variant='filled' size='large'>
        <Icon size={IconSize.MEDIUM} name={IconName.BIKE_CHILD}/>
        Кнопка
      </Button>
      <Button color='green' size='large'>
        <Icon color={Color.GREEN_30} size={IconSize.MEDIUM} name={IconName.BIKE_CHILD} />
        Детям
      </Button>
      <Button color='orange' variant='filled'>
        <Icon size={IconSize.MEDIUM} name={IconName.HEART}/>
        Кнопка
      </Button>
      <Button color='orange' size='large'>
        <Icon color={Color.ORANGE_30} size={IconSize.MEDIUM} name={IconName.BIKE_ADULT} />
        Кнопка
      </Button>
      <Button disabled>Disabled</Button>
      <Typography as='h1' variant={TypographyVariant.TITLE_1}>
        Banners (рекламные баннеры)
      </Typography>
      <Typography variant={TypographyVariant.TEXT_1} color={Color.GREEN_30}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum id ad eligendi vero, commodi repellat non deleniti minima nobis reprehenderit porro asperiores dolorem harum pariatur illum. Architecto, rerum explicabo?
      </Typography>
      <TextButton size={TextButtonSize.MEDIUM}>Кнопка-текст</TextButton>
      <IconButton>
        <Icon name={IconName.MENU} size={IconSize.LARGE}/>
      </IconButton>
      <Toggle label='Toggle'/>
      <Input placeholder='Введите пароль...'/>
      <Typography as='h2' variant={TypographyVariant.TITLE_2}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit possimus in atque blanditiis itaque ex repellendus error corporis et? Earum, nesciunt cupiditate. A fuga amet expedita animi voluptate molestias culpa.
      </Typography>
      <Select label='Выберите тип велосипеда'>
        <option>Прогулочные</option>
        <option>Трековые</option>
        <option>Горные</option>
      </Select>
    </>
  )
}

export default App;
