"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

/**
 * Command menu item props
 */
type CommandItemProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;

/**
 * Command menu component for ⌘ + K functionality
 * @param props - Dialog props
 * @returns Command menu component
 */
export function CommandMenu({ ...props }: DialogProps) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  // Handle keyboard shortcut
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Navigation items
  const items = [
    {
      title: "Home",
      href: "/",
      icon: "🏠",
    },
    {
      title: "Essays",
      href: "/essays",
      icon: "✍️",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen} {...props}>
      <DialogContent className="p-0 overflow-hidden max-w-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-gray-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput placeholder="Type a command or search..." />
          </div>
          <CommandList>
            <CommandGroup heading="Navigation">
              {items.map((item) => (
                <CommandItem
                  key={item.href}
                  onSelect={() => {
                    router.push(item.href);
                    setOpen(false);
                  }}
                >
                  <span className="mr-2">{item.icon}</span>
                  <span>{item.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

/**
 * Command component
 */
const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={`flex h-full w-full flex-col overflow-hidden rounded-md bg-white dark:bg-gray-900 ${className || ""}`}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

/**
 * Command input component
 */
const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3">
    <CommandPrimitive.Input
      ref={ref}
      className={`flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white ${className || ""}`}
      {...props}
    />
  </div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;

/**
 * Command list component
 */
const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={`max-h-[300px] overflow-y-auto overflow-x-hidden ${className || ""}`}
    {...props}
  />
));
CommandList.displayName = CommandPrimitive.List.displayName;

/**
 * Command group component
 */
const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={`overflow-hidden p-1 text-gray-950 dark:text-gray-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-gray-500 ${className || ""}`}
    {...props}
  />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;

/**
 * Command item component
 */
const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  CommandItemProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-gray-100 aria-selected:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:aria-selected:bg-gray-800 dark:aria-selected:text-gray-50 ${className || ""}`}
    {...props}
  />
));
CommandItem.displayName = CommandPrimitive.Item.displayName; 