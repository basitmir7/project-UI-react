const Logo = () => {
  return (
    <div
      className="Logo"
      style={{
        fontSize: "40px",
        color: " white",
        margin: "5px",
        margin: "18px 0 0 30px",
      }}
    >
      <text
        id="fitnez-2"
        dataname="fitnez"
        transform="translate(0 54)"
        fill="#fff"
        fontSize="50"
        fontFamily="SegoeUI, Segoe UI"
        letterSpacing="-0.1em"
      >
        <tspan x="0" y="0">
          fitne
        </tspan>
        <tspan y="0" fill="lime" style={{ color: "#00FF00" }}>
          z
        </tspan>
      </text>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="40"
        viewBox="0 -8 10 40"
      >
        <text
          id="_"
          dataname=""
          transform="translate(0 32)"
          fontSize="30"
          fontamily="SegoeUI, Segoe UI"
          opacity="0.8"
          fill="#fff"
        >
          <tspan x="0" y="0">
            
          </tspan>
        </text>
      </svg>
    </div>
  );
};

export default Logo;
