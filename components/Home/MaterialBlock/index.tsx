import { Text } from "@/components/Text";
import Image, { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";
import { DescriptionWrapper, MaterialBlockWrapper } from "./styled";

interface IBaseProps {
  direction: "rtl" | "ltr";
}
interface IConfigProps extends IBaseProps {
  imgLink: StaticImageData;
  description: string;
  title: string;
}
interface IChildrenProps extends IBaseProps {
  children: ReactNode;
}

export const MaterialBlock: FC<IConfigProps | IChildrenProps> = (props) => {
  const isConfigurable =
    "title" in props && "description" in props && "imgLink" in props;

  return (
    <MaterialBlockWrapper
      direction={props.direction}
      isConfigurable={isConfigurable}
    >
      {isConfigurable ? (
        <>
          <Image src={props.imgLink} alt={props.title} />
          <DescriptionWrapper>
            <Text type="h2">{props.title}</Text>
            <Text type="description-text">{props.description}</Text>
          </DescriptionWrapper>
        </>
      ) : (
        props.children
      )}
    </MaterialBlockWrapper>
  );
};
