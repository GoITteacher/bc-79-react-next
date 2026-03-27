import { useConfigStore } from "@/stores/configStore";
import css from "./ThemeSelect.module.css";
import clsx from "clsx";

const ThemeSelect = () => {
  const theme = useConfigStore((s) => s.theme);
  const toggleTheme = useConfigStore((s) => s.toggleTheme);
  const isDarkMode = theme === "dark";

  return (
    <div className={css["themeSelect"]}>
      <div className={css["toggle"]} onClick={toggleTheme}>
        <div className={clsx(css["check"], isDarkMode && css["is-dark"])}>
          {isDarkMode ? "dark" : "light"}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelect;
