import AnimatedAccordion from "@/components/accordionDemo";
import AccordionFadeIn from "@/components/accordionFadeIn/accordionFadeIn";
import AccordionSlideDown from "@/components/accordionSlideDown/accordionSlideDown";

export default function Accordion() {
  return (
    <main className="min-h-screen flex justify-center items-start bg-gray-100 p-4">
      <AnimatedAccordion />
	  <AccordionFadeIn />
	  <AccordionSlideDown />
    </main>
  );
}
