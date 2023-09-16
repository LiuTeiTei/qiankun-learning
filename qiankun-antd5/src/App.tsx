import React from "react";
import { Button, message, ConfigProvider } from "antd";

import "./App.css";

const PageHeader = (window as any).antd.PageHeader || "div";

const App: React.FC = () => {
  const handleClick = () => {
    message.config({
      getContainer: () => document.querySelector(".antd5") as HTMLElement,
    });
    debugger;
    message.info((window as any).antd.version);
  };

  return (
    <div className="antd5">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "pink",
            colorInfo: "pink",
          },
        }}
        getPopupContainer={() =>
          document.querySelector(".antd5") as HTMLElement
        }
        getTargetContainer={() =>
          document.querySelector(".antd5") as HTMLElement
        }
      >
        {(window as any).antd.PageHeader ? (
          <PageHeader title="Antd@5.8.3 Pink Primary Button" />
        ) : (
          <div>no window.antd.PageHeader</div>
        )}

        <Button type="primary" onClick={handleClick}>
          Antd@5.8.3 Pink Primary Button
        </Button>
      </ConfigProvider>
    </div>
  );
};

export default App;
