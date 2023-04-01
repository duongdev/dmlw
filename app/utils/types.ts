import type { TablerIconsProps } from "@tabler/icons-react";

// eslint-disable-next-line no-unused-vars
export type Icon = (props: TablerIconsProps) => JSX.Element

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never