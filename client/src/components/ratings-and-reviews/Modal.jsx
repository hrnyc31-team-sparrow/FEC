import React from "react";
import apiMaster from "../../apiMaster.js";
const { addReview } = apiMaster;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      summary: "",
      body: "",
      recommend: false,
      name: "",
      email: "",
      photos: [],
      characteristic: "",
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
  }

  handleSubmitForm(event) {
    event.preventDefault();
    addReview({
      rating: this.state.rating,
      summary: this.state.summary,
      body: this.state.body,
      recommend: this.state.recommend,
      name: this.state.name,
      email: this.state.email,
      photos: this.state.photos,
      characteristics: this.state.characteristics,
    })
      .then(() => {
        this.props.handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChangeForm(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClickClose() {
    this.props.handleClose();
  }

  render() {
    const {
      photo,
      currentModalView,
      updateReviewListState,
      productInfoData,
      setShowModal,
      showModal,
    } = this.props;
    return (
      <div className="modal display-block ">
        <section className=".modal-content">
          {currentModalView === "photo" ? (
            <>
              <span className="close" onClick={this.handleClickClose}>
                &times;
              </span>
              <img
                className="fullSizeImageModal"
                src={photo}
                alt="User photos from Reviews"
              ></img>
            </>
          ) : (
            <div>
              <p className="text-style-1"> “Write Your Review”</p>
              <p className="text-style-2">“About the {productInfoData.name}”</p>
              <form onSubmit={this.handleSubmitForm}>
                <label className="text-style-2">
                  Overall rating (mandatory)
                </label>
                <input
                  onChange={this.handleChangeForm}
                  name="rating"
                  value={this.state.rating}
                  type=""
                  className=""
                  placeholder=""
                ></input>

                <p className="text-style-2">Do you recommend this product?</p>
                <input
                  onChange={this.handleChangeForm}
                  name="recommend"
                  value={true}
                  type="radio"
                  className=""
                ></input>
                <label className="text-style-2">Yes</label>
                <input
                  onChange={this.handleChangeForm}
                  name="recommend"
                  value={false}
                  type="radio"
                  className=""
                  placeholder=""
                ></input>
                <label className="text-style-2">No</label>

                <label className="text-style-2">Review summary</label>
                <input
                  onChange={this.handleChangeForm}
                  name="summary"
                  value={this.state.summary}
                  type="text"
                  className=""
                  placeholder="Best purchase ever!"
                ></input>
                <label className="text-style-2">body</label>
                <input
                  onChange={this.handleChangeForm}
                  name="body"
                  value={this.state.body}
                  type="text"
                  className=""
                  placeholder="Why did you like the product or not?"
                ></input>
                <p>Minimum required characters left: {50 - this.state.body.length}</p>

                <label className="text-style-2">name</label>
                <input
                  onChange={this.handleChangeForm}
                  name="name"
                  value={this.state.name}
                  type=""
                  className=""
                  placeholder=""
                ></input>
                <label className="text-style-2">email</label>
                <input
                  onChange={this.handleChangeForm}
                  name="email"
                  value={this.state.email}
                  type=""
                  className=""
                  placeholder=""
                ></input>
                <label className="text-style-2">photos</label>
                <input
                  onChange={this.handleChangeForm}
                  name="photos"
                  value={this.state.photos}
                  type="file"
                  className=""
                  multiple
                ></input>
                <label className="text-style-2">
                  Characteristics (mandatory)
                </label>
                <input
                  onChange={this.handleChangeForm}
                  name="characteristics"
                  value={this.state.characteristics}
                  type=""
                  className=""
                  placeholder=""
                ></input>
                <input type="submit" onSubmit={this.handleSubmitForm}></input>
              </form>
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default Modal;
