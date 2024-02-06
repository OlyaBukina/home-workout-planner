import { cn } from "@/lib/utils";
import React from "react";

interface HeaderProps {
  label: string;
}
export default function Header({ label }: HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold")}>Log in</h1>
      <p className="text-muted-foreground text-lg font-medium">{label}</p>
    </div>
  );
}
