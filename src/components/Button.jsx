//name export

// const props = {
//   title: "Register",
//     style: btnStyle,
//   onClick: ()=> handleClick();,
// };
export function Button({ title }) {
  // console.log("props", props);
  return <button style={btnStyle}>{title ? title : "Default"}</button>;
}

// default export
export default function Login() {
  return <button style={btnStyle}>Login</button>;
}
// object style
const btnStyle = {
  // background-color: "blue",
  backgroundColor: "blue",
  color: "white",
  padding: "5px 10px",
  borderRadius: "5px"
};
