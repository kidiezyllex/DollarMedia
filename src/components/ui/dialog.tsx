"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

import { cn } from "@/lib/utils";
import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";

import Image from "next/image";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

type DialogSize = "small" | "medium" | "large";

interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  size?: DialogSize;
  backgroundPath?: string;
}

const getDialogWidth = (size: DialogSize) => {
  switch (size) {
    case "small":
      return "w-[95vw] md:w-[40vw] md:max-w-[40vw]";
    case "medium":
      return "w-[95vw] md:w-[70vw] md:max-w-[70vw]";
    case "large":
      return "w-[95vw] md:w-[90vw] md:max-w-[90vw]";
    default:
      return "w-[95vw] md:w-[50vw] md:max-w-[600px]";
  }
};

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, size = "medium", backgroundPath = "/images/black-and-gold-luxury-background2.webp", ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-[900] flex flex-col translate-x-[-50%] translate-y-[-50%] gap-3 md:gap-4 border-2 border-accent/70 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-[24px] md:rounded-[32px] p-0 h-fit min-h-[200px] max-h-[95vh] overflow-y-auto bg-gradient-to-b from-[#7a0101] to-[#4d0301] overflow-hidden",
        getDialogWidth(size),
        className
      )}
      {...props}
    >
      {/* Background Pattern */}
      <Image
        src={backgroundPath}
        alt="background pattern"
        fill
        className="object-cover opacity-50 -z-10 pointer-events-none mix-blend-soft-light"
      />

      {/* Border flares */}
      <div className="absolute top-0 left-2 w-24 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent blur-[1px] z-20 opacity-80" />
      <div className="absolute top-[-2px] left-2 w-1.5 h-1.5 bg-secondary/50 rounded-full shadow-[0_0_15px_5px_rgba(255,255,255,0.8),0_0_30px_10px_rgba(255,255,255,0.2)] z-20" />

      <div className="absolute bottom-0 right-2 w-28 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent blur-[1px] z-20 opacity-80" />
      <div className="absolute bottom-[-2px] right-2 w-1.5 h-1.5 bg-secondary/50 rounded-full shadow-[0_0_15px_5px_rgba(255,255,255,0.8),0_0_30px_10px_rgba(255,255,255,0.2)] z-20" />

      <div className="relative z-10 flex flex-col w-full h-fit">{children}</div>
      <DialogPrimitive.Close className="absolute md:right-4 md:top-3 right-3 top-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-darkCardV1 data-[state=open]:text-gray-500 bg-black/20 border border-white/10 rounded-full p-1 z-30">
        <Icon path={mdiClose} size={0.8} className="text-neutral-200" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1 text-left text-neutral-200 border-b-darkBorderV1 border-b p-3 md:p-4 !h-fit w-full bg-darkBorderV1",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-row justify-end items-center gap-3 h-fit w-full p-3 md:p-4 border-t-darkBorderV1 border-t bg-darkBorderV1",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-base flex items-center gap-2 font-semibold leading-none tracking-tight text-neutral-200",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-gray-500", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog, DialogClose,
  DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger
};
