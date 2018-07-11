import React from "react";
import PropTypes from "prop-types";

class TextTruncate extends React.PureComponent {
  render() {
    const lineHieght = this.props.lineHeight || 16;
    const numberOfClampLine = Math.floor(this.props.height / lineHieght);
    const styles = {
      parent: {
        display: "-webkit-box",
        lineHeight: `${lineHieght}px`,
        maxHeight: `${this.props.height}px`,
        overflow: "hidden",
        textOverflow: "ellipsis",
        textAlign: "left",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: `${numberOfClampLine}`,
        width: `${this.props.width}px`
      }
    };

    return (
      <div className={this.props.containerClassName} style={styles.parent}>
        {this.props.text}
      </div>
    );
  }
}

TextTruncate.propTypes = {
  containerClassName: PropTypes.string,
  text: PropTypes.string.isRequired,
  lineHeight: PropTypes.number,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

export default TextTruncate;
