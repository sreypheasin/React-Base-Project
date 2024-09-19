import { getAccessToken } from "../../lib/secureLocalStorage";

// get all job
export async function getAllJobs() {
  try {
    // method fetch
    const response = fetch(
      `${import.meta.env.VITE_BASE_URL}jobs/?page=2&size=20`
    ).then((res) => res.json());
    const data = await response;
    console.log("data in function", data.products);
    return data?.results;
  } catch (error) {
    console.log(error);
  }
}

// delete job
export async function deleteJob(id) {
  //   convert value to json
  const accessToken = getAccessToken();
  try {
    // method fetch
    const response = fetch(`${import.meta.env.VITE_BASE_URL}jobs/${id}/`, {
      method: "DELETE",
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
