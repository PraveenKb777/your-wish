import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { CSSProperties, FC } from "react";

interface IAvatarCombined {
  style?: CSSProperties;
}

interface IAvatar {
  style?: CSSProperties;
  className?: string;
  src: string | StaticImport;
  alt?: string;
}

export const Avatar: FC<IAvatar> = ({
  style = {},
  className = "",
  src,
  alt = "",
}) => {
  const classStyle =
    "border-2 border-white rounded-full dark:border-gray-800 " + className;

  return (
    <Image
      className={classStyle}
      src={src}
      alt={alt}
      width={40}
      height={40}
      style={style}
    />
  );
};

const AvatarCombined: FC<IAvatarCombined> = ({ style = {} }) => {
  return (
    <div className="flex -space-x-4 rtl:space-x-reverse" style={style}>
      <Avatar
        src={
          "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24395697/bkq6gtrpcnw43vsm5zm62q3z.png?quality=90&strip=all&crop=10.454545454545,0,79.090909090909,100"
        }
      />
      <Avatar src="/docs/images/people/profile-picture-2.jpg" />
      <Avatar src="/docs/images/people/profile-picture-3.jpg" />
      <a
        className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
        href="#"
      >
        +99
      </a>
    </div>
  );
};

export default AvatarCombined;
