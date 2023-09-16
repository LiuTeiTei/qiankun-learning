import React from "react";
import { Button, ConfigProvider, PageHeader, message } from "antd";

// import "antd/dist/antd.variable.min.css";

import "./App.css";

const App: React.FC = () => {
  ConfigProvider.config({
    theme: {
      primaryColor: "purple",
      infoColor: "purple",
    },
  });

  const handleClick = () => {
    message.config({
      getContainer: () => document.querySelector(".antd420") as HTMLElement,
    });
    debugger;
    message.info((window as any).antd.version);
  };

  return (
    <div className="antd420">
      {(window as any).antd.PageHeader ? (
        <PageHeader title="Antd@4.24.13 Purple Primary Button" />
      ) : (
        <div>no window.antd.PageHeader</div>
      )}

      <Button type="primary" onClick={handleClick}>
        Antd@4.24.13 Purple Primary Button
      </Button>
    </div>
  );
};

export default App;
