# Vue See More
[![npm version](https://badge.fury.io/js/vue-see-more.svg)](https://badge.fury.io/js/vue-see-more)

Vue See More is a simple npm component for Vue.js. which hides large text by displaying a minimum size and a maximum text size so as not to damage the layout of your app. The idea is to cut at the best point, not just a specific character, to cut short words. 

## How to Use 

Vue See More is extraordinarily simple to use with vue. You only need to add some props, as a text, a letters quantity and the the words to exibition in app to expand or retract the text.

#### Install and Import
```
npm install --save vue-see-more
import VueSeeMore from 'vue-see-more';
```

##### Use
```html
<vue-see-more see-more="" see-less="" to-text="" text-style="" link-style="" count-letters="" />
```


| Parameter          | Default Values |
|--------------------|----------------------------|
| see-more           | 'See More'                 |
| see-less           | 'Retract'                  |
| to-text            | 'A completed text"         |
| count-letters      | 80                         |
| text-style         | null                       |
| link-style         | null                       |


_**The parameters text-styles and link-styles are not mandatory and accept custom styles from the project itself, such as from external frameworks, such as bootstrap, bulma, tailwind-css, among others.**_

##### Example
```html
<vue-see-more see-more="See More" see-less="Retract" to-text="A completed text" text-style="a-css-class" link-style="a-css-class" count-letters="80" />
```

## Next steps

### Perform enhancements
The intention is to improve this package more and more, with the intention of helping others who use this method of hiding large texts to improve the use of some apps.

## Contribute
If you are interested, please submit a pull request from your code and we will help to get developers a simple and quality system to provide the services.

## License
Vue See More is Open Source software released under the [MIT license](https://opensource.org/licenses/MIT).
