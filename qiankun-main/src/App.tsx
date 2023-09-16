import React, { useEffect } from "react";
import { loadMicroApp } from "qiankun";
import { Button, ConfigProvider, message } from "antd";

const Main: React.FC = () => {
  ConfigProvider.config({
    theme: {
      primaryColor: "gold",
      infoColor: "gold",
    },
  });

  const handleClick = () => {
    debugger;
    message.info((window as any).antd.version);
  };

  return (
    <div>
      <Button type="primary" onClick={handleClick}>
        Main@4.20.0 Gold Primary Button
      </Button>
    </div>
  );
};

const Antd4: React.FC = () => {
  useEffect(() => {
    debugger;
    const microAntd4 = loadMicroApp(
      {
        name: "antd4",
        entry: "//localhost:8088/",
        container: "#antd4",
        props: { brand: "qiankun" },
      },
      {
        sandbox: {
          experimentalStyleIsolation: true,
        },
      }
    );
    microAntd4.mount();
  }, []);

  return <div id="antd4"></div>;
};

const Antd5: React.FC = () => {
  useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const microAntd5 = loadMicroApp(
        {
          name: "antd5",
          entry: "//localhost:8089/",
          container: "#antd5",
          props: {},
        },
        {
          sandbox: {
            experimentalStyleIsolation: true,
          },
        }
      );
      microAntd5.mount();
    })();
  }, []);

  return <div id="antd5"></div>;
};

const App: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <Main />
      <Antd4 />
      <Antd5 />
    </div>
  );
};

export default App;
