# Vue See More
[![npm version](https://badge.fury.io/js/vue-see-more.svg)](https://badge.fury.io/js/vue-see-more)

Vue See More is a simple and accessible Vue.js 2 component to handle long texts by truncating them at word boundaries. It provides a clean way to expand and retract content without breaking your layout or cutting words in half.

## Features

- ✂️ **Smart Truncation**: Automatically cuts text at the nearest space, avoiding broken words.
- ♿ **Accessible**: Uses semantic buttons instead of anchor tags for better screen reader support.
- 🔒 **Secure**: Renders plain text by default to prevent XSS (HTML support is optional).
- 🎨 **Customizable**: Easy to style and configure with props and events.

## Installation

```bash
npm install --save vue-see-more
```

## Usage

### Import

```javascript
import VueSeeMore from 'vue-see-more';

// As a global plugin
Vue.use(VueSeeMore);

// Or as a local component
import { VueSeeMore } from 'vue-see-more'; // If exported as named, check your index.js
```

### Basic Example

```html
<vue-see-more 
  to-text="A very long text that needs to be truncated at some point to keep the layout clean."
  :count-letters="40"
/>
```

### Full Configuration

```html
<vue-see-more 
  see-more="Read more" 
  see-less="Show less" 
  to-text="Your long text here..." 
  :count-letters="80"
  ellipsis="..."
  :allow-html="false"
  text-style="my-text-class" 
  link-style="my-button-class"
  @expand="onExpand"
  @retract="onRetract"
/>
```

## Props

| Parameter      | Type             | Default      | Description                                                                 |
|----------------|------------------|--------------|-----------------------------------------------------------------------------|
| to-text        | String           | **Required** | The full text to be displayed.                                              |
| count-letters  | String \| Number | 80           | Maximum number of characters before truncating.                             |
| see-more       | String           | 'See More'   | Text for the expansion button.                                              |
| see-less       | String           | 'Retract'    | Text for the retraction button.                                             |
| ellipsis       | String           | ' [...] '    | Characters shown at the end of truncated text.                              |
| allow-html     | Boolean          | false        | Whether to render the text as HTML (v-html). Use with caution.              |
| text-style     | String           | ''           | CSS class applied to the text paragraph.                                    |
| link-style     | String           | ''           | CSS class applied to the action button.                                     |

## Events

| Event   | Description                                     |
|---------|-------------------------------------------------|
| expand  | Emitted when the text is expanded.              |
| retract | Emitted when the text is retracted (show less). |

## Contribute
If you are interested, please submit a pull request from your code and we will help to get developers a simple and quality system to provide the services.

## License
Vue See More is Open Source software released under the [MIT license](https://opensource.org/licenses/MIT).
