import type { StencilReactComponent } from '@stencil/react-output-target/runtime';
import { MyComponent as MyComponentElement } from "stencil-library/dist/components/my-component.js";
import { StatusTag as StatusTagElement } from "stencil-library/dist/components/status-tag.js";
export type MyComponentEvents = NonNullable<unknown>;
export declare const MyComponent: StencilReactComponent<MyComponentElement, MyComponentEvents>;
export type StatusTagEvents = NonNullable<unknown>;
export declare const StatusTag: StencilReactComponent<StatusTagElement, StatusTagEvents>;
