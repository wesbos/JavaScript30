### 比較需要注意的寫法：

1. querySelector 對於特定 data-key 的選取方式

2. audio 可以用的兩種函式：
audio.play ( ) <-- 播放
audio.currentTime = 『秒數』 <-- play 按下之後，目前已播放到的時間點，在 example 中調整為零，可以讓使用者不用等到音檔播完就能播下一次

https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement/currentTime

3. nodeList 不是 array，但是可以使用 forEach() 方法

https://developer.mozilla.org/zh-TW/docs/Web/API/NodeList

4. addEventListener 搭配 transitionend 的用法(CSS 中要有 transition 事件)
addEventListener('transitionend', 『callback』) <-- transition 事件結束後觸發 callback

https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/transitionend_event