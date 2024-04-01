import { Inter } from "next/font/google";
import Notification from "./components/notifications"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Notification/>
    </>
  );
}
