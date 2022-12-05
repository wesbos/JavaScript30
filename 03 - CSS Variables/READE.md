# 03- CSS Variables and JS

This is an HTML page enable users to edit a photo through CSS variables and filters.

![App Screenshot](https://github.com/Huiclaire/JavaScript30/blob/master/03%20-%20CSS%20Variables/image/js30-day3.png)


## Lesson learned

- CSS variables
```javascript
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}

img {
  padding: var(--spacing);
  background-color: var(--base);
  filter: blur(var(--blur));
}
```

- change CSS property via JS
```javascript
document.documentElement.style.setProperty('--<varName>', '<varValue>')

```
