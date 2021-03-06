Emoji List
----------

```jsx
initialState = {
  open: true,
  recent: ['😀', '👻']
};

const handleOpenClick = () => {
  setState({ open: !state.open });
};

const handleEmojiClick = (emoji) => {
  setState({ recent: [emoji, ...state.recent.filter((item) => item !== emoji)] });
};

<div>
  <Button onClick={handleOpenClick} theme="primary" size="small">
    Toggle
  </Button>
  <hr />
  {state.open ? (
    <EmojiList
      recent={state.recent}
      onClick={handleEmojiClick}
    />
  ): null}
</div>
```

Stickers List
-------------

```jsx
const images = require('./fixtures/octodex.json');

const stickers = [];

for (let i = 0; i < parseInt(images.length / 7, 10); i++) {
  const start = i * 7;
  const end = start + 7;

  stickers.push({
    id: i,
    title: 'GitHub',
    stickers: images.slice(start, end).map((image, id) => {
      return {
        id,
        image,
        emoji: '😀'
      };
    })
  });
}

<EmojiList
  recent={['😀', '👻']}
  stickers={stickers}
  onClick={console.debug}
/>
```
