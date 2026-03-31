import axios from "axios";

export const updateUserAvatar = async (formData: FormData) => {
  const res = await axios.put("/update-avatar", formData);
  return res.data;
};
