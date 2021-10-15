import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

function ColorBox({ name, background, moreUrl }) {
  const [copied, setCopied] = useState(false);

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <Styled.ColorBox background={background} moreUrl={moreUrl}>
        <Styled.CopyOverlay
          style={{ background }}
          className={copied && 'show'}
        ></Styled.CopyOverlay>
        <Styled.CopyMessage className={`${copied && 'show'}`}>
          <h1>copied!</h1>
          <p className="copy-text">{background}</p>
        </Styled.CopyMessage>
        <div className="copy-container">
          <div className="box-content">
            <span className="color-name">{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        {moreUrl && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className="see-more">MORE</span>
          </Link>
        )}
      </Styled.ColorBox>
    </CopyToClipboard>
  );
}

export default ColorBox;
