const React = require("react");

exports.wrapPageElement = ({ element }) => {
  return (
    <div className="root">
      <div
        id="overlay"
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 100,
        }}
      ></div>
      {element}
    </div>
  );
};

exports.onInitialClientRender = () => {
  setTimeout(() => {
    document.getElementById("overlay").style.display = "none";
  }, 500);
};
