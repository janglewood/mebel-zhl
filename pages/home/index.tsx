import { CatalogImage } from "@/components/Catalog/CatalogImage";
import { CatalogList } from "@/components/Catalog/CatalogList";
import { Text } from "@/components/Text";
import { CatalogItem } from "interfaces/catalog";
import { FC, useMemo, useState, memo } from "react";
import {
  CollorPalleteImage,
  HomePageWrapper,
  MaterialBlockColumn,
  MaterialFeaturesWrapper,
  MaterialsBlock,
  TopCatalogListBlock,
} from "./styled";

import sofaImage from "@/assets/images/foam.png";
import textileImage from "@/assets/images/textile.png";
import textileImage2 from "@/assets/images/textile2.png";
import colorsImage from "@/assets/images/colors.png";
import colorsImage2 from "@/assets/images/colors2.png";

import { MaterialBlock } from "@/components/Home/MaterialBlock";
import { MaterialSection } from "@/components/Home/MaterialSection";
import { MaterialsSection } from "@/components/Home/MaterialsSection";

const text = {
  foam: "Поролон (ППУ или мягкий полиуретан, поролон) – синтетический материал, который активно используется в мебельной, текстильной, автомобильной промышленности. Поролон мебельный является составляющей частью: мягкой и офисной мебели,сидений в автомобилях ,звуковой аппаратуры. Поролон EL 2545 одна из наиболее востребованных марок листового поролона повышенной жесткости для мебели, плотность которого составляет 25 кг/м³ при жесткости 45 кПа. Сиденье и матрас при нагрузке 60-80 кг. Используется в разных отраслях производства и оформления.поролон марки EL идеально подходит обивки мебели,для упаковки, акустики, набивки мягких игрушек и для изготовления спортивных матов.",
  textile:
    "Велюр – это группа красивых материалов с ворсистой поверхностью. Обязательным признаком для всех велюровых материалов является наличие ворса. Прочность – одно из основных качеств велюра. Большая плотность ткани гарантирует его высокую стойкость к изнашиванию. Велюр сохраняет качества долгие годы, не растягивается, не дает усадки. Приятные осязательные впечатления от касания к ткани укрепляют в решении приобрести этот материал. Велюры хорошо сохраняют тепло, создают чувства уюта, комфорта. Натуральные ткани хорошо «дышат». Велюры из природного сырья не вызывают аллергических реакций организма. Ворсинки вместе с грунтовой основой хорошо фиксируют частички красящих пигментов. Велюры имеют прочную однородную окраску, которая хорошо сохраняется длительный период.",
  textile2:
    "Рогожка — это прочная грубоватая ткань. Ей характерна ярко выраженная фактура, схожая с мешковиной. \nРогожка отличается достаточно крупным шахматным узором плетения. Его образуют одинаково двойные или тройные нити как утка, так и основы. Структура может быть гладкой или ворсистой. \nРогожка имеет ряд плюсов. Она износостойка и долговечна, благодаря следующим сильным сторонам: \nПрочность. Полотно сложно повредить, порвать. \nНеплохая упругость: ткань тянется. \nНе склонность к деформации. Изделия с таким плетением держат форму, не мнутся, не растягиваются и не садятся. \nЭстетичность. Вещи смотрятся стильно, оригинально и привлекательно. Если речь о мебельной обивке, то она легко вписывается в любой интерьер. \nЭкологичность. Натуральное исходное сырье безвредно для окружающей среды при утилизации. \nНеаллергенность. Даже смесовые разновидности волокна безвредны, так как доля синтетики в них минимальна.",
};

const Home: FC<{ catalog: CatalogItem[] }> = ({ catalog }) => {
  const [currentItemId, setCurrentItemId] = useState(catalog[0].id);

  const currentItem = useMemo(
    () => catalog.find(({ id }) => id === currentItemId),
    [currentItemId]
  );

  return (
    <HomePageWrapper>
      <TopCatalogListBlock>
        <CatalogList
          catalog={catalog}
          currentItemId={currentItemId}
          setCurrentItemId={setCurrentItemId}
        />
        <CatalogImage imgLink={currentItem.imgLink} />
      </TopCatalogListBlock>

      <MaterialsSection />
    </HomePageWrapper>
  );
};

export default Home;
