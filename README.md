# React Progressive Graceful Image

**Note**: This is a forked repo from https://github.com/FormidableLabs/react-progressive-image. So, all usage are similar to that. I am adding two new feature for graceful loading [Done] and lazy loading [WIP] from https://github.com/linasmnew/react-graceful-image. So, please check usage of 3 newly introduced props (retry, noRetry, noLazyLoad) from this repo.

***

[![Maintenance Status][maintenance-image]](#maintenance-status)

[`react-progressive-graceful-image`](https://www.npmjs.com/package/react-progressive-graceful-image) React component for progressive image loading

### Install

```bash
$ npm i react-progressive-graceful-image
```

The UMD build is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/react-progressive-graceful-image@0.1.0/umd/react-progressive-graceful-image.min.js"></script>
```

If you use the UMD build you can find the library on `window.ReactProgressiveGracefulImage`.

### Examples

#### Simple

```jsx
<ProgressiveImage src="large-image.jpg" placeholder="tiny-image.jpg">
  {src => <img src={src} alt="an image" />}
</ProgressiveImage>
```

#### With Delay

```jsx
<ProgressiveImage
  delay={3000}
  src="large-image.jpg"
  placeholder="tiny-image.jpg"
>
  {src => <img src={src} alt="an image" />}
</ProgressiveImage>
```

#### With loading argument

```jsx
<ProgressiveImage src="large-image.jpg" placeholder="tiny-image.jpg">
  {(src, loading) => (
    <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt="an image" />
  )}
</ProgressiveImage>
```

#### With srcSet

```jsx
<ProgressiveImage
  src="medium.jpg"
  srcSetData={{
    srcSet: 'small.jpg 320w, medium.jpg 700w, large.jpg 2000w',
    sizes: '(max-width: 2000px) 100vw, 2000px'
  }}
  placeholder="tiny-image.jpg"
  retry={{ count: 8, delay: 2, accumulate: 'multiply' }}
>
  {(src, _loading, srcSetData) => (
    <img
      src={src}
      srcSet={srcSetData.srcSet}
      sizes={srcSetData.sizes}
      alt="an image"
    />
  )}
</ProgressiveImage>
```

#### Component As Placeholder

If you want to use a component, such as a loading spinner, as a placeholder, you can make use of the `loading` argument in the render callback. It will be true while the main image is loading and false once it has fully loaded. Keep in mind that the `placeholder` props is `required`, so you will need to explicitly declare an empty string as it's value if you plan on using a component in the render callback.

```jsx
const dominantImageColor = '#86356B';
const placeholder = (
  <div
    style={{ backgroundColor: dominantImageColor, height: 300, width: 500 }}
  />
);

<ProgressiveImage src="large-image.jpg" placeholder="">
  {(src, loading) => {
    return loading ? placeholder : <img src={src} alt="an image" />;
  }}
</ProgressiveImage>;
```

#### Progressive Enhancement and No JavaScript

Since this component relies on JavaScript to replace the placeholder src with the full image src, you should use a fallback image if your application supports environments that do not have JavaScript enabled or is progressively enhanced.

You can do this by adding the fallback image inside of a `<noscript>` tag in the render callback you provide as the `ProgressiveImage` component's child.

```jsx
<ProgressiveImage src="large-image.jpg" placeholder="tiny-image.jpg">
  {src => {
    return (
      <div>
        <img className="progressive-image" src={src} />
        <noscript>
          <img className="progressive-image no-script" src="large-image.jpg" />
        </noscript>
      </div>
    );
  }}
</ProgressiveImage>
```

### Props

| Name        | Type                                   | Required | Description                                     |
| ----------- | -------------------------------------- | -------- | ----------------------------------------------- |
| children    | `function`                             | `true`   | returns `src`, `loading`, and `srcSetData`      |
| delay       | `number`                               | `false`  | time in milliseconds before src image is loaded |
| onError     | `function`                             | `false`  | returns error event                             |
| placeholder | `string`                               | `true`   | the src of the placeholder image                |
| src         | `string`                               | `true`   | the src of the main image                       |
| srcSetData  | `{srcSet: "string", sizes: "string" }` | `false`  | srcset and sizes to be applied to the image     |
| noRetry     | `boolean`                              | `false`  | flag to see if retry is required                |
| retry       | `Object`                               | `true`   | {count: 8, delay: 2, accumulate: 'multiply'}    |
| noLazyLoad  | `boolean`                              | `false`  | flag to see if lazy loading is required         |

Note: See https://github.com/linasmnew/react-graceful-image for usage of props : retry, noRetry, noLazyLoad

## Maintenance Status

 **Stable:** Formidable is not planning to develop any new features for this project. We are still responding to bug reports and security concerns. We are still welcoming PRs for this project, but PRs that include new features should be small and easy to integrate and should not include breaking changes.

[maintenance-image]: https://img.shields.io/badge/maintenance-stable-blue.svg
