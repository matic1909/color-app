import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { Link } from 'react-router-dom';
import './ColorBox.css';

export default function ColorBox({ name, background, moreUrl }) {
  const [copied, setCopied] = useState(false);

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const isDarkColor = chroma(background).luminance() <= 0.075;
  const isLightColor = chroma(background).luminance() >= 0.7;

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className="ColorBox">
        <div
          style={{ background }}
          className={`copy-overlay ${copied && 'show'}`}
        ></div>
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>copied!</h1>
          <p className={isLightColor ? 'dark-text' : ''}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isDarkColor ? 'light-text' : ''}>{name}</span>
          </div>
          <button className={`copy-button ${isLightColor ? 'dark-text' : ''}`}>
            Copy
          </button>
        </div>
        {moreUrl && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className={`see-more ${isLightColor ? 'dark-text' : ''}`}>
              MORE
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}
