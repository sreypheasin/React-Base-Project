const base_url = "https://jobfinder.automatex.dev/api/";
// register action
export async function register(values) {
  console.log("values in register func", values);
  //   convert value to json
  const body = JSON.stringify(values);
  try {
    // method fetch
    const response = fetch(`${base_url}register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    }).then((res) => res.json());
    const data = await response;
    // console.log("data in function", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
