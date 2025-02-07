"use client";

import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./style.css";

// Define types for component props
type AccordionTriggerProps = React.ComponentPropsWithoutRef<typeof Accordion.Trigger>;
type AccordionContentProps = React.ComponentPropsWithoutRef<typeof Accordion.Content>;

const AccordionDemo: React.FC = () => (
    <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
        <Accordion.Item className="AccordionItem" value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
                Yes. It&apos;s unstyled by default, giving you freedom over the look and feel.
            </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <AccordionContent>
                Yes! You can animate the Accordion with CSS or JavaScript.
            </AccordionContent>
        </Accordion.Item>
    </Accordion.Root>
);

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
    ({ children, className, ...props }, forwardedRef) => (
        <Accordion.Header className="AccordionHeader">
            <Accordion.Trigger
                className={classNames("AccordionTrigger", className)}
                {...props}
                ref={forwardedRef}
            >
                {children}
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
            </Accordion.Trigger>
        </Accordion.Header>
    )
);

AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
    ({ children, className, ...props }, forwardedRef) => (
        <Accordion.Content
            className={classNames("AccordionContent", className)}
            {...props}
            ref={forwardedRef}
        >
            <div className="AccordionContentText">{children}</div>
        </Accordion.Content>
    )
);

AccordionContent.displayName = "AccordionContent";

export default AccordionDemo;
