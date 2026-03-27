"use client";
import { useConfigStore } from "@/stores/configStore";
import css from "./LangSelect.module.css";

const LangSelect = () => {
  const lang = useConfigStore((s) => s.lang);
  const setLang = useConfigStore((s) => s.setLang);

  return (
    <div className={css["langSelect"]}>
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="en">En</option>
        <option value="ua">Ua</option>
      </select>
    </div>
  );
};

export default LangSelect;
