import { Searchbar } from './searchbar/Searchbar';
import { Component, React } from 'react';
import { ImageGallery } from './imageGallery/ImageGallery';
import { Loader } from './loader/Loader';
import { Button } from './button/Button';
import { fetchImages } from 'api/imageFinder';
import { Modal } from './modal/Modal';

export class App extends Component {
  state = {
    isLoading: false,
    query: '',
    totalImages: 0,
    modalImages: null,
    data: [],
    page: 1,
    isModal: false,
  };
  onSubmit = async e => {
    e.preventDefault();
    await this.setState({
      query: e.target[1].value,
      isLoading: true,
    });
    try {
      await fetchImages(this.state.query, this.state.page).then(
        ({ images, totalImages }) => {
          this.setState({
            data: images,
            totalImages,
            modalImages: images.modalImages,
            page: this.state.page + 1,
          });
        }
      );
    } catch (error) {
      alert(error.message);
    }
    this.setState({ isLoading: false });
  };

  onLoadMore = async () => {
    this.setState({
      isLoading: true,
    });
    try {
      await fetchImages(this.state.query, this.state.page).then(
        ({ images, totalImages }) => {
          this.setState(prev => ({
            data: [...prev.data, ...images],
            totalImages,
            modalImages: images.modalImages,
            page: this.state.page + 1,
          }));
        }
      );
    } catch (error) {
      console.log(error.message);
    }
    this.setState({
      isLoading: false,
    });
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModal: !prevState.isModal }));
  };

  getModalImg = (modalImages, alt) => {
    this.setState({ modalImages, alt });
  };

  render() {
    const { data, loading, modalImages, isModal, totalImages } = this.state;

    return (
      <>
        <div className="App">
          <Searchbar onSubmit={this.onSubmit} />
          {loading && <Loader />}
          <ImageGallery
            modalImages={modalImages}
            data={data}
            openModal={this.toggleModal}
            getModalImg={this.getModalImg}
          />
          {isModal && (
            <Modal modalImages={modalImages} toggleModal={this.toggleModal} />
          )}
          {data.length !== 0 && <Button onLoadMore={this.onLoadMore} />}
        </div>
      </>
    );
  }
}
