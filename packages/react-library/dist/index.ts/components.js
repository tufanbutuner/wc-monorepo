'use client';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';
import { MyComponent as MyComponentElement, defineCustomElement as defineMyComponent } from "stencil-library/dist/components/my-component.js";
import { StatusTag as StatusTagElement, defineCustomElement as defineStatusTag } from "stencil-library/dist/components/status-tag.js";
export const MyComponent = createComponent({
    tagName: 'my-component',
    elementClass: MyComponentElement,
    react: React,
    events: {},
    defineCustomElement: defineMyComponent
});
export const StatusTag = createComponent({
    tagName: 'status-tag',
    elementClass: StatusTagElement,
    react: React,
    events: {},
    defineCustomElement: defineStatusTag
});
//# sourceMappingURL=components.js.map