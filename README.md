# React Native light tooltip component

`rn-light-tooltip` is a simple and customizable tooltip component for React Native. It displays a tooltip above or below the target element, adjusting dynamically to ensure it stays within the screen bounds. It also supports a customizable backdrop color and works with both iOS and Android.

## Features

- **Customizable Tooltip**: Easily modify the tooltip text and its appearance.
- **Dynamic Positioning**: The tooltip automatically adjusts its position to ensure it stays within the screen's boundaries.
- **Backdrop**: Customize the backdrop color when the tooltip is visible.
- **Animations**: Smooth fade-in and fade-out animations for showing and hiding the tooltip.
- **Responsive**: The tooltip adjusts its position based on the screen size.

## Installation

To use `rn-light-tooltip`, you need to have React Native set up on your project.

If you're using **npm**:

```bash
npm install react-native-modal
npm install @initdev/rn-light-tooltip
```
If you're using **yarn**:
```bash
yarn add react-native-modal
yarn add @initdev/rn-light-tooltip
```
## Usage
Import the `CustomTooltip` component into your React Native project and wrap it around any element that will trigger the tooltip.
### Basic Example
```bash
import React from 'react';
import { View, Text } from 'react-native';
import { CustomTooltip } from './path/to/CustomTooltip'; // Import CustomTooltip

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomTooltip tooltipText="This is a custom tooltip">
        <Text style={{ fontSize: 18 }}>Click me to see tooltip</Text>
      </CustomTooltip>
    </View>
  );
};

export default App;
```
### Example with Custom Backdrop Color
```bash
<CustomTooltip tooltipText="This is a custom tooltip" backdropColor="rgba(0, 0, 0, 0.5)">
  <Text style={{ fontSize: 18 }}>Click me to see tooltip</Text>
</CustomTooltip>
```
## Props
|Prop         |Type    |Default      |Description                             |
|-------------|--------|-------------|----------------------------------------|
|tooltipText  |`string`|'null'       |The text content that will be displayed in the tooltip. |
|backdropColor|`string`|`transparent`|The color of the backdrop behind the tooltip (e.g., `'rgba(0, 0, 0, 0.5)'`). |

## How It Works

 - When the user clicks on the wrapped element (`TouchableOpacity`), the `showTooltip` function is called.
 - The tooltip's position is calculated based on the element’s position in the screen using the `UIManager.measureInWindow` method.
 - The tooltip's position is adjusted to ensure it remains within the screen bounds.
 - The tooltip appears with a fade-in animation, and when the user clicks outside, it fades out.
### Tooltip Positioning Logic:
 - **Top and Left Positioning**: The tooltip’s position is determined based on the position of the target element.
 - **Boundary Constraints**: The tooltip will reposition if it exceeds the screen edges:
	 - If the tooltip exceeds the screen width, it will be moved to the right or left, depending on the space.
	 - If the tooltip exceeds the screen height, it will be moved above the element.

## Notes

 - **Performance**: The tooltip dynamically calculates positions using `UIManager.measureInWindow` to ensure it fits on the screen, even if the screen size changes or the target element is near the edge of the screen.
 - **Backdrop**: The backdrop is used to dim the background when the tooltip is active. You can change the color by passing the `backdropColor` prop.

## Contributing
If you find any issues or would like to contribute improvements, feel free to fork the repository and submit a pull request.
> You can copy and paste this Markdown code into your `README.md` file. Let me know if you need further modifications!
