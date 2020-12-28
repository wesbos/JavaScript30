



# Fun with HTML5 Canvas





## HTML CanvasElement : getContext

[CanvasElement 공식문서](https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement/getContext)



### Parameter

- `2d` : 2차원 렌더링 컨텍스트를 나타내는 CanvasRenderingContext2D 객체를 생성하게 함
- `webgl` : 3차원 렌더링 컨텍스트를 나타내는 WebGLRenderingContext 객체를 생성
- `webgl2` : 3차원 렌더링 컨텍스트를 나타내는 WebGL2RenderingContext 객체 생성
- `bitmaprenderer` : 캔버스 컨텐츠를 주어진 ImageBitmap으로 대체하기 위한 기능만을 제공하는 ImageBitmapRenderingContext 생성





## 스타일 & 색



[스타일&색 공식문서](https://developer.mozilla.org/ko/docs/Web/HTML/Canvas/Tutorial/Applying_styles_and_colors)



- strokeStyle : 도형의 윤곽선 색을 설정
- fillStyle : 도형을 채우는 색을 설정



- lineCap : 선의 끝 모양을 설정
- lineJoin : 선들이 만나는 `모서리`의 모양을 설정





## 캔버스(canvas)를 이용한 도형 그리기

[캔버스(canvas)를 이용한 도형 그리기 공식문서](https://developer.mozilla.org/ko/docs/Web/HTML/Canvas/Tutorial/Drawing_shapes)

- beginPath() : 새로운 경로를 만든다. 경로 생성후 이후 그리기 명령들을 이용해 경로를 구성하고 만들 수 있다.
- stroke() : 윤곽선을 이용하여 도형을 그린다.
- moveTo(x, y) : 펜을 x와 y로 지정된 좌표로 옮긴다. beginPath() 호출 후 사용.
- lineTo(x, y) : 현재의 드로잉 위치에서 x와 y로 지정된 위치까지 선을 그린다. 시작점은 moveTo() 메소드를 통해 변경.





## MouseEvent

[MouseEvent 공식문서](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)

- MouseEvent.offsetX : 이벤트 대상 객체에서의 상대적 마우스 x좌표 위치를 반환합니다.







## globalCompositeOperation

[globalCompositeOperation공식문서](https://developer.mozilla.org/ko/docs/Web/HTML/Canvas/Tutorial/Compositing#globalCompositeOperation)

>  기존 도형 위에 새로운 도형을 그릴때 도형 합성 방법을 설정하는 것

- multiply : 위쪽 레이어의 픽셀값이 아래족 레이어의 해당하는 픽셀값과 곱해지며, 결과적으로 어두운 이미지가 생성