"use client";

import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";

// Define types for component props
type AccordionTriggerProps = React.ComponentPropsWithoutRef<typeof Accordion.Trigger>;
type AccordionContentProps = React.ComponentPropsWithoutRef<typeof Accordion.Content>;

// Animation variants for Framer Motion
const animations = {
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1 } } },
    slideDown: { hidden: { y: -10, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1 } } },
    slideUp: { hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1 } } },
    scaleIn: { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 1 } } },
    rotate: { hidden: { rotateX: 90, opacity: 0 }, visible: { rotateX: 0, opacity: 1, transition: { duration: 1 } } },
    bounce: { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300 } } },
    flip: { hidden: { rotateY: 90, opacity: 0 }, visible: { rotateY: 0, opacity: 1, transition: { duration: 1 } } },
    zoomIn: { hidden: { scale: 0.5, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 1 } } },
    elastic: { hidden: { scale: 0.5, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } } },
    springy: { hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 200 } } },
  };

// AccordionDemo Component
const AccordionDemo: React.FC = () => (
  <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>Yes. It&apos;s unstyled by default, giving you freedom over the look and feel.</AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionContent>Yes! You can animate the Accordion with CSS or JavaScript.</AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

// AccordionTrigger Component with animation
const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const [isOpen, setIsOpen] = React.useState(false); // Local state for animation control

    return (
      <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
          asChild
          onClick={() => setIsOpen(!isOpen)} // Toggle state on click
        >
          <motion.button
            className={classNames("AccordionTrigger", className)}
            {...props}
            ref={forwardedRef}
            variants={animations} // Apply fade animation
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"} // Animate based on trigger state
            exit="hidden"
            whileTap={{ scale: 0.95 }} // Scale down effect when clicked
          >
            {children}
            <motion.span
              className="AccordionChevron"
              initial={false}
              animate={{ rotate: isOpen ? 180 : 0 }} // Rotate the Chevron
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ChevronDownIcon />
            </motion.span>
          </motion.button>
        </Accordion.Trigger>
      </Accordion.Header>
    );
  }
);

AccordionTrigger.displayName = "AccordionTrigger";

// AccordionContent Component
const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content className={classNames("AccordionContent", className)} {...props} ref={forwardedRef}>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={animations.fade}
        className="AccordionContentText"
      >
        {children}
      </motion.div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = "AccordionContent";

export default AccordionDemo;
