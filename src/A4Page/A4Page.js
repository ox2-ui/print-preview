import React, { PropTypes } from 'react';
import classNames from 'classnames';

const styles = {
  wrapper: {
    border: '1px dashed GAINSBORO',
    margin: '40px 20px 20px 20px',
  },
  label: {
    position: 'absolute',
    top: '0',
    left: '0',
    marginTop: '10px',
    marginLeft: '20px',
    fontSize: '16px',
    color: 'DARKGRAY',
    fontFamily: 'Roboto Condensed, Sans Serif',
    textTransform: 'capitalize',
  },
};

/**
 * A4Page Component
 */
const A4Page = (props) => {
  const { className: classNameProp, orientation, children } = props;

  const className = classNames(
    classNameProp
  );

  let size = {};

  if (orientation === 'landscape') {
    size = { height: '210mm', width: '297mm' };
  } else {
    size = { height: '297mm', width: '210mm' };
  }

  return (
    <div className={className}>
      <div style={styles.label}>A4 {orientation} preview</div>
      <div style={{...styles.wrapper, ...size}}>
        {children}
      </div>
    </div>
  );
};

A4Page.propTypes = {
  /**
   * The contents of the `A4Page`.
   */
  children: PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  orientation: PropTypes.string,
};

export default A4Page;
