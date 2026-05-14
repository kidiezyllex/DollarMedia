

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";
import { mdiClose } from "@mdi/js";
import { Icon } from "@mdi/react";

const DrawerContext = React.createContext<{ direction: "top" | "bottom" | "left" | "right" }>({
	direction: "bottom",
});

const Drawer = ({
	shouldScaleBackground = true,
	direction = "bottom",
	...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
	<DrawerContext.Provider value={{ direction }}>
		<DrawerPrimitive.Root
			shouldScaleBackground={shouldScaleBackground}
			direction={direction}
			{...props}
		/>
	</DrawerContext.Provider>
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/80", className)} {...props} />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => {
	const { direction } = React.useContext(DrawerContext);
	return (
		<DrawerPortal>
			<DrawerOverlay />
			<DrawerPrimitive.Content
				ref={ref}
				className={cn(
					"fixed z-50 flex flex-col border bg-[#050505]",
					direction === "bottom" && "inset-x-0 bottom-0 mt-24 h-auto rounded-t-[10px]",
					direction === "right" && "inset-y-0 right-0 h-full w-[85%] max-w-sm rounded-l-[20px]",
					className,
				)}
				{...props}
			>
				{direction === "bottom" && (
					<div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-white/10" />
				)}
				{children}
				<DrawerPrimitive.Close className="absolute right-4 top-4 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-darkBackgroundV1 data-[state=open]:text-gray-500 bg-white/5 rounded-full p-2">
					<Icon path={mdiClose} size={0.8} className="text-neutral-300" />
					<span className="sr-only">Close</span>
				</DrawerPrimitive.Close>
			</DrawerPrimitive.Content>
		</DrawerPortal>
	);
});
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("grid gap-2 p-3 md:p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("mt-auto flex flex-col gap-2 p-3 md:p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Title
		ref={ref}
		className={cn("text-lg font-semibold leading-none tracking-tight", className)}
		{...props}
	/>
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Description ref={ref} className={cn("text-sm text-gray-500", className)} {...props} />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
	Drawer, DrawerClose,
	DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger
};
