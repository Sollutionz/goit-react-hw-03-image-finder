import { Component } from 'react';
import PropTypes from 'prop-types';



export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.escCloseModal);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.escCloseModal);
  }
  escCloseModal = e => {
    if (e.code === 'Escape') this.props.toggleModal();
  };

  closeModal = e => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };

  render() {
    const {modalImages,alt} = this.props;

    return (
      <>
        <div className="Overlay" onClick={this.closeModal}>
          <div className="ModalStyle">
            <img src={modalImages} alt={alt} />
          </div>
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  modalImages: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
