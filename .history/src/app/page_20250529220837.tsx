import Image from "next/image";
import Main from "./main/page";
import CustomCursorManager from "@/components/CustomMouse/Context/Manager";
import CustomCursor from "@/components/CustomMouse";

export default function Home() {
  return (
    <div>
      <CustomCursorManager>
        <CustomCursor />
        <Main />
      </CustomCursorManager>
    </div>
  );
}
