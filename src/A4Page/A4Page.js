import React, { PropTypes } from 'react';

const styles = {
  wrapper: {
    display: 'flex',
    position: 'relative',
  },
  wrapperInner: {
    padding: '40px 20px 20px 20px',
  },
  pageWrapper: {
    border: '1px dashed GAINSBORO',
  },
  label: {
    position: 'absolute',
    top: '0',
    left: '0',
    marginTop: '12px',
    marginLeft: '22px',
    fontSize: '16px',
    color: 'DARKGRAY',
    fontFamily: 'Roboto Condensed, sans-serif',
    textTransform: 'capitalize',
  },
};

/**
 * A4Page Component
 */
const A4Page = ({ className, style, landscape, children }) => {
  const size = landscape ? { height: '210mm', width: '297mm' } : { height: '297mm', width: '210mm' };

  return (
    <div className={className} style={{...styles.wrapper, ...style}}>
      <div style={styles.label}>A4 {landscape ? 'landscape' : 'portrait'} preview</div>
      <div style={styles.wrapperInner}>
        <div style={{...styles.pageWrapper, ...size}}>
          {children}
        </div>
      </div>
    </div>
  );
};

A4Page.propTypes = {
  /**
   * The contents of the `A4Page`.
   */
  children: PropTypes.node.isRequired,
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * If set to true page renders in landscape orientation
   */
  landscape: PropTypes.bool,
  /**
   * Override inline-styles of the root element.
   */
  style: PropTypes.object,
};

export default A4Page;
