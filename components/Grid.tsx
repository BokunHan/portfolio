import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section className="py-20" id="about">
      <BentoGrid className="w-full">
        {gridItems.map(
          (
            {
              id,
              title,
              description,
              className,
              img,
              imgWidth,
              imgHeight,
              imgClassName,
              titleClassName,
              spareImg,
            },
            i,
          ) => (
            <BentoGridItem
              key={i}
              id={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgWidth={imgWidth}
              imgHeight={imgHeight}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          ),
        )}
      </BentoGrid>
    </section>
  );
};
export default Grid;
