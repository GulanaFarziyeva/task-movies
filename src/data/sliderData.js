const sliderData = [
    {
      id: 1,
      title: "Brave New World",
      year: 2015,
      time: '1h 23m',
      img: 'https://s3-alpha-sig.figma.com/img/3671/ec69/a5ca6bac2c1630fb47538fe2e8569a0f?Expires=1673222400&Signature=JCWggMVmk9LyRk-UVwF~s9xqSn4IZ1~0fgQV~96vJueNTxghJ~VmzYoIxiP3s3KzzCv93WjR0-E2NH~oZWNZr6lrY8WgMpEvNA0i3lqsxA0NURut5jKdGPIgd49Z356uobXLt8oUwyJDMZrgp2wNPDHq5fnTZLMlPGFalgM~-610WD1wRo8vOa5UAzQzJyXJ3AoUDeiECxOHFRuwWzlaGLifCZWwp2BNACJVc4pL0AQKDoO97XGtrfekYz5BT43KrTXIiVrzWLIbLYqkb1fnsh0FVKjMY-CsABYfCeCrBsSfobyY4a0i0IApBrEeIrJLK3FS6poXUh2jEgbPKEk-UA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id: 2,
      title: "Vanguard",
      year: 2015,
      time: '1h 23m',
      img: 'https://s3-alpha-sig.figma.com/img/3671/ec69/a5ca6bac2c1630fb47538fe2e8569a0f?Expires=1673222400&Signature=JCWggMVmk9LyRk-UVwF~s9xqSn4IZ1~0fgQV~96vJueNTxghJ~VmzYoIxiP3s3KzzCv93WjR0-E2NH~oZWNZr6lrY8WgMpEvNA0i3lqsxA0NURut5jKdGPIgd49Z356uobXLt8oUwyJDMZrgp2wNPDHq5fnTZLMlPGFalgM~-610WD1wRo8vOa5UAzQzJyXJ3AoUDeiECxOHFRuwWzlaGLifCZWwp2BNACJVc4pL0AQKDoO97XGtrfekYz5BT43KrTXIiVrzWLIbLYqkb1fnsh0FVKjMY-CsABYfCeCrBsSfobyY4a0i0IApBrEeIrJLK3FS6poXUh2jEgbPKEk-UA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id: 3,
      title: "Breaking Bad",
      year: 2015,
      time: '1h 23m',
      img: 'https://s3-alpha-sig.figma.com/img/3671/ec69/a5ca6bac2c1630fb47538fe2e8569a0f?Expires=1673222400&Signature=JCWggMVmk9LyRk-UVwF~s9xqSn4IZ1~0fgQV~96vJueNTxghJ~VmzYoIxiP3s3KzzCv93WjR0-E2NH~oZWNZr6lrY8WgMpEvNA0i3lqsxA0NURut5jKdGPIgd49Z356uobXLt8oUwyJDMZrgp2wNPDHq5fnTZLMlPGFalgM~-610WD1wRo8vOa5UAzQzJyXJ3AoUDeiECxOHFRuwWzlaGLifCZWwp2BNACJVc4pL0AQKDoO97XGtrfekYz5BT43KrTXIiVrzWLIbLYqkb1fnsh0FVKjMY-CsABYfCeCrBsSfobyY4a0i0IApBrEeIrJLK3FS6poXUh2jEgbPKEk-UA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    }, 
    {
      id: 4,
      title: "Spartacus",
      year: 2015,
      time: '1h 23m',
      img: 'https://s3-alpha-sig.figma.com/img/3671/ec69/a5ca6bac2c1630fb47538fe2e8569a0f?Expires=1673222400&Signature=JCWggMVmk9LyRk-UVwF~s9xqSn4IZ1~0fgQV~96vJueNTxghJ~VmzYoIxiP3s3KzzCv93WjR0-E2NH~oZWNZr6lrY8WgMpEvNA0i3lqsxA0NURut5jKdGPIgd49Z356uobXLt8oUwyJDMZrgp2wNPDHq5fnTZLMlPGFalgM~-610WD1wRo8vOa5UAzQzJyXJ3AoUDeiECxOHFRuwWzlaGLifCZWwp2BNACJVc4pL0AQKDoO97XGtrfekYz5BT43KrTXIiVrzWLIbLYqkb1fnsh0FVKjMY-CsABYfCeCrBsSfobyY4a0i0IApBrEeIrJLK3FS6poXUh2jEgbPKEk-UA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id: 5,
      title: "Prison Break",
      year: 2015,
      time: '1h 23m',
      img: 'https://s3-alpha-sig.figma.com/img/3671/ec69/a5ca6bac2c1630fb47538fe2e8569a0f?Expires=1673222400&Signature=JCWggMVmk9LyRk-UVwF~s9xqSn4IZ1~0fgQV~96vJueNTxghJ~VmzYoIxiP3s3KzzCv93WjR0-E2NH~oZWNZr6lrY8WgMpEvNA0i3lqsxA0NURut5jKdGPIgd49Z356uobXLt8oUwyJDMZrgp2wNPDHq5fnTZLMlPGFalgM~-610WD1wRo8vOa5UAzQzJyXJ3AoUDeiECxOHFRuwWzlaGLifCZWwp2BNACJVc4pL0AQKDoO97XGtrfekYz5BT43KrTXIiVrzWLIbLYqkb1fnsh0FVKjMY-CsABYfCeCrBsSfobyY4a0i0IApBrEeIrJLK3FS6poXUh2jEgbPKEk-UA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id: 6,
      title: "Peaky Blinders",
      year: 2015,
      time: '1h 23m',
      img: 'https://s3-alpha-sig.figma.com/img/3671/ec69/a5ca6bac2c1630fb47538fe2e8569a0f?Expires=1673222400&Signature=JCWggMVmk9LyRk-UVwF~s9xqSn4IZ1~0fgQV~96vJueNTxghJ~VmzYoIxiP3s3KzzCv93WjR0-E2NH~oZWNZr6lrY8WgMpEvNA0i3lqsxA0NURut5jKdGPIgd49Z356uobXLt8oUwyJDMZrgp2wNPDHq5fnTZLMlPGFalgM~-610WD1wRo8vOa5UAzQzJyXJ3AoUDeiECxOHFRuwWzlaGLifCZWwp2BNACJVc4pL0AQKDoO97XGtrfekYz5BT43KrTXIiVrzWLIbLYqkb1fnsh0FVKjMY-CsABYfCeCrBsSfobyY4a0i0IApBrEeIrJLK3FS6poXUh2jEgbPKEk-UA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
      id: 7,
      title: "Vikings",
      year: 2015,
      time: '1h 23m',
      img: 'https://s3-alpha-sig.figma.com/img/3671/ec69/a5ca6bac2c1630fb47538fe2e8569a0f?Expires=1673222400&Signature=JCWggMVmk9LyRk-UVwF~s9xqSn4IZ1~0fgQV~96vJueNTxghJ~VmzYoIxiP3s3KzzCv93WjR0-E2NH~oZWNZr6lrY8WgMpEvNA0i3lqsxA0NURut5jKdGPIgd49Z356uobXLt8oUwyJDMZrgp2wNPDHq5fnTZLMlPGFalgM~-610WD1wRo8vOa5UAzQzJyXJ3AoUDeiECxOHFRuwWzlaGLifCZWwp2BNACJVc4pL0AQKDoO97XGtrfekYz5BT43KrTXIiVrzWLIbLYqkb1fnsh0FVKjMY-CsABYfCeCrBsSfobyY4a0i0IApBrEeIrJLK3FS6poXUh2jEgbPKEk-UA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    }
  ]
  
  export default sliderData;