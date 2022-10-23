declare module 'react-progressive-graceful-image' {
  export interface ProgressiveImageProps {
    delay?: number;
    onError?: (errorEvent: Event) => void;
    placeholder: string;
    src: string;
    srcSetData?: {
      srcSet: string;
      sizes: string;
    };
    noRetry?: boolean;
    noLazyLoad?: boolean;
    rootMargin?: string;
    threshold?: Array;
    children?: (src: string, loading: boolean) => React.ReactNode;
  }

  export interface ProgressiveImageState {
    image: string;
    loading: boolean;
    srcSetData?: {
      srcSet: string;
      sizes: string;
    }; 
  }

  export default class ProgressiveImage extends React.Component<
    ProgressiveImageProps,
    ProgressiveImageState
  > {}
}
