"use client";
import { TelegramIcon, TelegramShareButton } from "react-share";

const ShareButtons = () => {
  return (
    <div className="flex flex-row items-center gap-1">
      <TelegramShareButton
        title={"I have finished the test"}
        url={"https://t.me/ladylingacademy"}
      >
        <TelegramIcon size={32} />
      </TelegramShareButton>
    </div>
  );
};

export default ShareButtons;
