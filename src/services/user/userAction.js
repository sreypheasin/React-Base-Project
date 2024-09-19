// get user profile
export async function getUserProfile(accessToken) {
  //   convert value to json
  try {
    // method fetch
    const response = fetch(`${import.meta.env.VITE_BASE_URL}profile/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }).then((res) => res.json());
    const data = await response;
    console.log("data in function", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
