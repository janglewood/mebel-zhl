import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRequireAuth } from "@/hooks";
import { useForm } from "react-hook-form";
import { Button } from "@/components/Admin/Button";
import {
  ImagePreview,
  InputWrapper,
  StyledFileInput,
  StyledFileLabel,
  StyledForm,
  StyledInput,
  StyledTextArea,
} from "../styled";
import { Text } from "@/components/Text";
import PlusIcon from "@/assets/icons/plus.svg";
import { CatalogItem } from "interfaces/catalog";
import { useCatalog } from "hooks";
import { useRouter } from "next/router";

export const ItemForm: FC<{
  isEditing?: boolean;
  id?: CatalogItem["id"];
}> = ({ isEditing = false, id }) => {
  const { addItem, updateItem, catalog } = useCatalog();

  const defaultValues = useMemo(
    () => (catalog ? catalog.find((item) => item.id === id) : null),
    [id, catalog]
  );

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues,
  });
  useRequireAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [headImgFile, setHeadImgFile] = useState<{ file: File; url: string }>();
  const { push } = useRouter();

  const renderImage = useCallback((): ReactNode | null => {
    if (headImgFile?.url) {
      return <ImagePreview src={headImgFile.url} />;
    }
    if (defaultValues?.imgLink) {
      return <ImagePreview src={getValues().imgLink} />;
    }
    return null;
  }, [headImgFile, defaultValues]);

  const onSubmit = (data: CatalogItem) => {
    try {
      setIsLoading(true);
      setError(null);
      if (isEditing) {
        updateItem(id, data);
      } else {
        addItem(data);
      }
      setIsLoading(false);
      push("/admin");
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <label htmlFor="title">
          <Text type="text">Заголовок</Text>
        </label>
        <div>
          <StyledInput
            id="title"
            type="text"
            name="title"
            isError={!!errors.title}
            {...register("title", {
              required: "Введите заголовок",
            })}
          />
          {errors.title && <Text type="error">{errors.title.message}</Text>}
        </div>
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="headImg" onClick={() => console.log("click")}>
          <Text type="text">Заглавное изображение</Text>
        </label>

        {renderImage()}
        <StyledFileLabel
          htmlFor="headImg"
          isError={!!errors.headImg}
          isFileAdded={!!headImgFile}
        >
          <StyledFileInput
            id="headImg"
            type="file"
            accept="image/*"
            name="headImg"
            {...register("headImg", {
              required: isEditing ? false : "Добавьте изображение",
              onChange: ({ target: { files } }) => {
                if (files.length) {
                  setHeadImgFile({
                    file: files[0],
                    url: URL.createObjectURL(files[0]),
                  });
                }
              },
            })}
          />
          {headImgFile ? (
            <Text type="text">
              {headImgFile.file.name} (
              {(headImgFile.file.size / 1000).toFixed(1)} kb)
            </Text>
          ) : (
            <>
              <PlusIcon />
              <Text type="text">Добавить изображение</Text>
            </>
          )}
        </StyledFileLabel>
        {errors.headImg && <Text type="error">{errors.headImg.message}</Text>}
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="height">
          <Text type="text">Высота</Text>
        </label>
        <StyledInput
          id="height"
          type="number"
          name="height"
          isError={!!errors.height}
          {...register("height", {
            required: "Введите высоту",
            pattern: {
              value: /^[0-9-]+$/,
              message: "Должно быть число",
            },
          })}
        />
        {errors.height && <Text type="error">{errors.height.message}</Text>}
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="width">
          <Text type="text">Ширина</Text>
        </label>
        <StyledInput
          id="width"
          type="number"
          name="width"
          isError={!!errors.width}
          {...register("width", {
            required: "Введите ширину",
            pattern: {
              value: /^[0-9-]+$/,
              message: "Должно быть число",
            },
          })}
        />
        {errors.width && <Text type="error">{errors.width.message}</Text>}
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="deep">
          <Text type="text">Глубина</Text>
        </label>
        <StyledInput
          id="deep"
          type="number"
          name="deep"
          isError={!!errors.deep}
          {...register("deep", {
            required: "Введите глубину",
            pattern: {
              value: /^[0-9-]+$/,
              message: "Должно быть число",
            },
          })}
        />
        {errors.deep && <Text type="error">{errors.deep.message}</Text>}
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="description">
          <Text type="text">Описание</Text>
        </label>
        <StyledTextArea
          id="description"
          name="description"
          isError={!!errors.description}
          {...register("description", {
            required: "Введите описание",
          })}
        />
        {errors.description && (
          <Text type="error">{errors.description.message}</Text>
        )}
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="price">
          <Text type="text">Цена</Text>
        </label>
        <StyledInput
          id="price"
          type="number"
          name="price"
          isError={!!errors.price}
          {...register("price", {
            required: "Введите цену",
            pattern: {
              value: /^[0-9-]+$/,
              message: "Должно быть число",
            },
          })}
        />
        {errors.price && <Text type="error">{errors.price.message}</Text>}
      </InputWrapper>
      {error && <Text type="error">{error}</Text>}

      <Button
        text={isEditing ? "Сохранить" : "Добавить"}
        type="submit"
        variant="primary"
        isLoading={isLoading}
      />
    </StyledForm>
  );
};
