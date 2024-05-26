"use client";
import { useParams } from "next/navigation";
import { TelegramIcon, TelegramShareButton } from "react-share";

const ShareButtons = () => {
  const params = useParams();

  const title = `${process.env.NEXT_PUBLIC_DOMAIN}/result/${params.attemptId}`;

  return (
    <TelegramShareButton title={"See my result🔥"} url={title}>
      <TelegramIcon size={36} />
    </TelegramShareButton>
  );
};

export default ShareButtons;
