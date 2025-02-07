import AccordionBounce from "@/components/accordionBounce/accordionBounce";
import AnimatedAccordion from "@/components/accordionDemo";
import AccordionElastic from "@/components/accordionElastic/accordionElastic";
import AccordionFadeIn from "@/components/accordionFadeIn/accordionFadeIn";
import AccordionFlip from "@/components/accordionFlip/accordionFlip";
import AccordionRotate from "@/components/accordionRotate/accordionRotate";
import AccordionScaleIn from "@/components/accordionScaleIn/accordionScaleIn";
import AccordionSlideDown from "@/components/accordionSlideDown/accordionSlideDown";
import AccordionSlideUp from "@/components/accordionSlideUp/accordionSlideUp";
import AccordionSpringy from "@/components/accordionSpringy/accordionSpringy";
import AccordionZoomIn from "@/components/accordionZoomIn/accordionZoomIn";

export default function Accordion() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 flex justify-center items-start">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6 w-full max-w-7xl">
        <div>
          <h2>Basic Accordion Radix</h2>
          <AnimatedAccordion />
        </div>
        <div>
          <h2>Accordion Fade In</h2>
          <AccordionFadeIn />
        </div>
        <div>
          <h2>Accordion Slide Down</h2>
          <AccordionSlideDown />
        </div>
        <div>
          <h2>Accordion Slide Up</h2>
          <AccordionSlideUp />
        </div>
        <div>
          <h2>Accordion Rotate</h2>
          <AccordionRotate />
        </div>
        <div>
          <h2>Accordion Bounce</h2>
          <AccordionBounce />
        </div>
        <div>
          <h2>Accordion Scale In</h2>
          <AccordionScaleIn />
        </div>
        <div>
          <h2>Accordion Flip</h2>
          <AccordionFlip />
        </div>
        <div>
          <h2>Accordion Zoom In</h2>
          <AccordionZoomIn />
        </div>
        <div>
          <h2>Accordion Elastic</h2>
          <AccordionElastic />
        </div>
        <div>
          <h2>Accordion Springy</h2>
          <AccordionSpringy />
        </div>
      </div>
    </main>
  );
}
