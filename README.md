# Gateway

A React component library for mirroring the look and feel of a proper desktop environment

---

This project was inspired by [Poolsuite](https://poolsuite.net/)

## Components

### Frame

Component used to mimic desktop windows.

`Attributes`

-   Children
    -   JSX component(s) that are rendered in the interior of the component.
-   isDraggable
    -   Boolean value that controls if the Frame is draggable. False by default.
-   connectionID
    -   Number that represents the unique identifying ID for the Frame. Used to connect the Frame to other interactive elements.

### Icon

Component used to represent desktop icons.

`Attributes`

-   Caption
    -   The labeling text displayed below the icon.
-   connectionID
    -   Number that represents the unique identifying ID for the Icon. Used to connect the Icon to other interactive elements.
-   imgSrc
    -   String that denotes the file path leading to the image that will be displayed for the Icon.
