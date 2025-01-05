import Image, { type ImageProps } from "next/image";
import { SignUp } from "@repo/ui/signup";
import styles from "./page.module.css";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};



export default function Home() {
  return (
    <div className={styles.page}>
      <SignUp/>
    </div>
  );
}
