import Link from "next/link";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <h1>Main Settings</h1>

      <ul>
        <li>
          <Link href="/settings/profile">Profile</Link>
        </li>
        <li>
          <Link href="/settings/notification">Notification</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
