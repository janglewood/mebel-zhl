import { Text } from "@/components/Text";
import { FC, memo } from "react";
import {
  CollorPalleteImage,
  MaterialBlockColumn,
  MaterialFeaturesWrapper,
  MaterialsBlock,
  PartnersLinkWrapper,
} from "./styled";

import sofaImage from "@/assets/images/foam.png";
import textileImage from "@/assets/images/textile.png";
import textileImage2 from "@/assets/images/textile2.png";
import colorsImage from "@/assets/images/colors.png";
import colorsImage2 from "@/assets/images/colors2.png";

import { MaterialBlock } from "@/components/Home/MaterialBlock";

const text = {
  foam: "Поролон (ППУ или мягкий полиуретан, поролон) – синтетический материал, который активно используется в мебельной, текстильной, автомобильной промышленности. Поролон мебельный является составляющей частью: мягкой и офисной мебели,сидений в автомобилях ,звуковой аппаратуры. Поролон EL 2545 одна из наиболее востребованных марок листового поролона повышенной жесткости для мебели, плотность которого составляет 25 кг/м³ при жесткости 45 кПа. Сиденье и матрас при нагрузке 60-80 кг. Используется в разных отраслях производства и оформления.поролон марки EL идеально подходит обивки мебели,для упаковки, акустики, набивки мягких игрушек и для изготовления спортивных матов.",
  textile:
    "Велюр – это группа красивых материалов с ворсистой поверхностью. Обязательным признаком для всех велюровых материалов является наличие ворса. Прочность – одно из основных качеств велюра. Большая плотность ткани гарантирует его высокую стойкость к изнашиванию. Велюр сохраняет качества долгие годы, не растягивается, не дает усадки. Приятные осязательные впечатления от касания к ткани укрепляют в решении приобрести этот материал. Велюры хорошо сохраняют тепло, создают чувства уюта, комфорта. Натуральные ткани хорошо «дышат». Велюры из природного сырья не вызывают аллергических реакций организма. Ворсинки вместе с грунтовой основой хорошо фиксируют частички красящих пигментов. Велюры имеют прочную однородную окраску, которая хорошо сохраняется длительный период.",
  textile2:
    "Рогожка — это прочная грубоватая ткань. Ей характерна ярко выраженная фактура, схожая с мешковиной. \nРогожка отличается достаточно крупным шахматным узором плетения. Его образуют одинаково двойные или тройные нити как утка, так и основы. Структура может быть гладкой или ворсистой. \nРогожка имеет ряд плюсов. Она износостойка и долговечна, благодаря следующим сильным сторонам: \nПрочность. Полотно сложно повредить, порвать. \nНеплохая упругость: ткань тянется. \nНе склонность к деформации. Изделия с таким плетением держат форму, не мнутся, не растягиваются и не садятся. \nЭстетичность. Вещи смотрятся стильно, оригинально и привлекательно. Если речь о мебельной обивке, то она легко вписывается в любой интерьер. \nЭкологичность. Натуральное исходное сырье безвредно для окружающей среды при утилизации. \nНеаллергенность. Даже смесовые разновидности волокна безвредны, так как доля синтетики в них минимальна.",
};

export const MaterialsSection: FC = memo(() => {
  return (
    <MaterialsBlock>
      <Text type="h1">Наполнение и ткань</Text>
      <MaterialBlock
        title={"Поролон EL25*45"}
        imgLink={sofaImage}
        description={text.foam}
        direction="rtl"
      />
      <MaterialBlock
        title={"ВелюрFidji"}
        imgLink={textileImage}
        description={text.textile}
        direction="ltr"
      />
      <MaterialBlock direction="rtl">
        <CollorPalleteImage src={colorsImage} alt="Варианты цветов" />
        <MaterialBlockColumn gap={24}>
          <Text type="text">СОСТАВ ТКАНИ</Text>
          <MaterialFeaturesWrapper>
            <MaterialBlockColumn gap={8}>
              <Text type="text">Полиэстер</Text>
              <Text type="h2">100%</Text>
            </MaterialBlockColumn>
            <MaterialBlockColumn gap={8}>
              <Text type="text">Плотность</Text>
              <Text type="h2">370 г/м.кв.</Text>
            </MaterialBlockColumn>
            <MaterialBlockColumn gap={8}>
              <Text type="text">Стоикость к истиранию</Text>
              <Text type="h2">45 000 циклов</Text>
            </MaterialBlockColumn>
          </MaterialFeaturesWrapper>
        </MaterialBlockColumn>
      </MaterialBlock>
      <MaterialBlock
        title={"РогожкаArtemis"}
        imgLink={textileImage2}
        description={text.textile2}
        direction="ltr"
      />
      <MaterialBlock direction="ltr">
        <CollorPalleteImage src={colorsImage2} alt="Варианты цветов" />
        <MaterialBlockColumn gap={24}>
          <Text type="text">СОСТАВ ТКАНИ</Text>
          <MaterialFeaturesWrapper>
            <MaterialBlockColumn gap={8}>
              <Text type="text">Полиэстер</Text>
              <Text type="h2">100%</Text>
            </MaterialBlockColumn>
            <MaterialBlockColumn gap={8}>
              <Text type="text">Плотность</Text>
              <Text type="h2">360 г/м.кв.</Text>
            </MaterialBlockColumn>
            <MaterialBlockColumn gap={8}>
              <Text type="text">Стоикость к истиранию</Text>
              <Text type="h2">50 000 циклов</Text>
            </MaterialBlockColumn>
          </MaterialFeaturesWrapper>
        </MaterialBlockColumn>
      </MaterialBlock>

      <PartnersLinkWrapper>
        <Text type="h2" color="black">
          Посмотреть весь ассортимент обивочной ткани Вы можете у наших
          партнеров по ссылке:
        </Text>
        <Text type="h2" color="black" as="a" href="https://belkraft.by/">
          https://belkraft.by/
        </Text>
      </PartnersLinkWrapper>
    </MaterialsBlock>
  );
});
