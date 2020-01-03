import React from 'react';
import ReactDOM from 'react-dom';
import ProgressiveImage from '../src/index.js';

const centerAlign = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const containerStyle = {
  ...centerAlign,
  overflow: 'hidden',
  position: 'relative',
  maxWidth: 1440,
  margin: '0 auto'
};

const imageStyle = {
  height: '100vh',
  minWidth: '100%'
};

const textContainerStyle = {
  ...centerAlign,
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0
};

const textStyle = {
  color: '#fff',
  fontFamily: 'sans-serif',
  fontSize: '2.5em',
  textTransform: 'uppercase'
};

class App extends React.Component {
  render() {
    return (
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h1 style={textStyle}>
            React <br />
            Progressive <br />
            Graceful <br />
            Image
          </h1>
        </div>
        {[...Array(5)].map((item, i) => (
          <ProgressiveImage
            key={i + 1}
            src={`http://placehold.it/594x1024/${i + 1}d${i}${i + 4}${i +
              3}a/ffffff/&text=Image${i + 1}`}
            placeholder={`http://placehold.it/59x102/${i + 1}d${i}${i + 4}${i +
              3}a/ffffff/&text=Placeholder${i + 1}`}
            srcSetData={{
              srcSet: `http://placehold.it/594x1024/${i + 1}d${i}${i + 4}${i +
                3}a/ffffff/&text=BigImage${i + 1} 2000w`
            }}
          >
            {(image, ref, loading, srcSetData) => {
              return (
                <img
                  style={imageStyle}
                  src={image}
                  srcSet={srcSetData.srcSet}
                  // sizes={srcSetData.sizes}
                  ref={ref}
                  alt={`Image #${i + 1}`}
                />
              );
            }}
          </ProgressiveImage>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
