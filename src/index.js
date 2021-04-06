import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// 순수 자바스크립트로만 위 코드를 작성 했을 시
/* var img = document.createElement('img');
img.setAttribute('src', 'http://www.easyspub.co.kr/images/logo_footer.png');
var divEl = document.createElement('div');
divEl.innerText = '안녕하세요';
var welcomeEl = document.createElement('div');
welcomeEl.append(img);
welcomeEl.append(divEl);
 
var root = document.getElementById('root');
root.append(welcomeEl);
*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals