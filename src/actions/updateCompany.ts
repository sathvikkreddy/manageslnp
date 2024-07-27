"use server";

export async function updateCompany(formData: FormData) {
  console.log(formData.get("name"));
  await new Promise((res) => setTimeout(res, 2000));
  return true;
}
