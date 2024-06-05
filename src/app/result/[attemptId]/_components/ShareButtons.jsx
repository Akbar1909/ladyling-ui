"use client";
import { useParams } from "next/navigation";
import {
  InstapaperShareButton,
  TelegramIcon,
  TelegramShareButton,
} from "react-share";
import { InstagramIcon } from "next-share";

const ShareButtons = ({ type }) => {
  const params = useParams();

  const url = `${process.env.NEXT_PUBLIC_DOMAIN}/result/${params.attemptId}`;

  return (
    <div className="flex items-center gap-1">
      <TelegramShareButton
        title={"See my result🔥 in #ladylingacademy"}
        url={url}
      >
        <TelegramIcon size={40} />
      </TelegramShareButton>
      <InstapaperShareButton
        title={"See my result🔥 in #ladylingacademy"}
        url={url}
      >
        <InstagramIcon size={40} />
      </InstapaperShareButton>
    </div>
  );
};

export default ShareButtons;
