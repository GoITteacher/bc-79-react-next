"use client";

import { useId, useState } from "react";
import css from "./PhotoPicker.module.css";
import { updateUserAvatar } from "@/lib/user";

const PhotoPicker = () => {
  const id = useId();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        console.log("FORMAT ERROR");
        return;
      }
      if (file.size > 1024 * 1024 * 10) {
        console.log("SIZE ERROR");
        return;
      }
      const fileReader = new FileReader();

      fileReader.onloadend = () => {
        setPreviewUrl(fileReader.result as string);
      };

      fileReader.readAsDataURL(file);
      setFile(file);
    } else {
      setPreviewUrl(null);
      setFile(null);
    }
  };

  const handleSaveAvatar = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("avatar", file);
    await updateUserAvatar(formData);
  };

  return (
    <div className={css["photoPicker"]}>
      <div>
        <label htmlFor={`${id}-user-avatart`}>User avatar</label>
        <input
          type="file"
          name="user-avatar"
          id={`${id}-user-avatart`}
          accept="image/*"
          onChange={handleChange}
        />

        {previewUrl && <img src={previewUrl} alt="Image" />}
      </div>

      <button onClick={handleSaveAvatar}>Зберегти новий аватар</button>
    </div>
  );
};

export default PhotoPicker;
