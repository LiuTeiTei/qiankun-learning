import React from "react";
import { createRoot } from "react-dom/client";
import { unmountComponentAtNode } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./public-path";

function render(props: any) {
  // ReactDOM.render(<App />, document.getElementById("root"));
  const { container } = props;
  // 为了避免根 id #root 与其他的 DOM 冲突，需要限制查找范围。
  const root = createRoot(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

//@ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("react app bootstraped");
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: unknown) {
  console.log(
    "%c [ antd@5.8.3 - 基座下发的能力 - props ]-35",
    "font-size:13px; background:pink; color:#bf2c9f;",
    props
  );

  // 可通过 props.getGlobalState() 获取基座下发的数据

  // props.setGlobalState({user: {name: ''}}) 改变全局的数据

  // props.onGlobalStateChange 监听全局数据的变化
  render(props);
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  unmountComponentAtNode(document.getElementById("root") as Element);
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props: unknown) {
  console.log("update props", props);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
