import React from "react";
import apiMaster from "../../apiMaster.js";
import StarRating from "./StarRating";
import Recommend from "./Recommend";
import Characteristics from "./Characteristics";
const { addReview } = apiMaster;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      summary: "",
      body: "",
      recommend: null,
      name: "",
      email: "",
      photos: [],
      sizeChar: { id: 36, value: 0 },
      widthChar: { id: 36, value: 0 },
      comfortChar: { id: 36, value: 0 },
      qualityChar: { id: 36, value: 0 },
      lengthChar: { id: 36, value: 0 },
      fitChar: { id: 36, value: 0 },
      valid: true,
      lastId: 36,
      invalidMessage: [],
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
    this.handleChangeStarRatingSelect = this.handleChangeStarRatingSelect.bind(
      this
    );
    this.displayRatingDesc = this.displayRatingDesc.bind(this);
    this.handleChangeRec = this.handleChangeRec.bind(this);
    this.validEmail = this.validEmail.bind(this);
    this.displayMessageName = this.displayMessageName.bind(this);
    this.displayMessageEmail = this.displayMessageEmail.bind(this);
    this.isInvalid = this.isInvalid.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleChangeWidth = this.handleChangeWidth.bind(this);
    this.handleChangeComfort = this.handleChangeComfort.bind(this);
    this.handleChangeQuality = this.handleChangeQuality.bind(this);
    this.handleChangeLength = this.handleChangeLength.bind(this);
    this.handleChangeFit = this.handleChangeFit.bind(this);
    this.incrementId = this.incrementId.bind(this);
  }

  isInvalid() {
    const result = false;
    const invalidMessage = [];
    const {
      rating,
      summary,
      body,
      recommend,
      name,
      email,
      photos,
      sizeChar,
      widthChar,
      comfortChar,
      qualityChar,
      lengthChar,
      fitChar,
      valid,
    } = this.state;

    if (
      rating < 1 ||
      recommend === null ||
      body.length === 0 ||
      email.length === 0 ||
      name === 0 ||
      sizeChar.value === 0 ||
      widthChar.value === 0 ||
      comfortChar.value === 0 ||
      qualityChar.value === 0 ||
      lengthChar.value === 0 ||
      fitChar.value === 0
    ) {
      result = true;
      this.setState({
        valid: false,
      });
      invalidMessage.push("All mandatory fields must be filled out");
    }
    if (!this.validEmail()) {
      result = true;
      invalidMessage.push(
        "The email address provided is not in correct email format"
      );
    }
    if (body.length < 51) {
      result = true;
      this.setState({
        valid: false,
      });
      invalidMessage.push("The Review body must be more than 50 characters");
    }
    return result;
  }

  displayMessageEmail() {
    if (this.state.email.length > 0) {
      return (
        <span className="text-style-2 margin-sides">
          For authentication reasons, you will not be emailed
        </span>
      );
    }
  }

  displayMessageName() {
    if (this.state.name.length > 0) {
      return (
        <span className="text-style-2 margin-sides">
          For privacy reasons, do not use your full name or email address
        </span>
      );
    }
  }

  validEmail() {
    let last4 = this.state.email.slice(this.state.email.length - 4);
    if (
      this.state.email.includes("@") &&
      (last4[0] === "." || last4[1] === ".")
    ) {
      return true;
    }
    this.setState({
      valid: false,
    });
    return false;
  }

  handleSubmitForm(event) {
    event.preventDefault();
    const {
      rating,
      summary,
      body,
      recommend,
      name,
      email,
      photos,
      sizeChar,
      widthChar,
      comfortChar,
      qualityChar,
      lengthChar,
      fitChar,
      valid,
    } = this.state;
    const charObj = {};
    charObj[sizeChar.id] = Number(sizeChar.value);
    charObj[widthChar.id] = Number(widthChar.value);
    charObj[comfortChar.id] = Number(comfortChar.value);
    charObj[qualityChar.id] = Number(qualityChar.value);
    charObj[lengthChar.id] = Number(lengthChar.value);
    charObj[fitChar.id] = Number(fitChar.value);
    console.log(rating);
    console.log(summary);
    console.log(body);
    console.log(recommend);
    console.log(name);
    console.log(email);
    console.log(photos);
    console.log(charObj);
    if (valid === true) {
      addReview({
        rating,
        summary,
        body,
        recommend,
        name,
        email,
        photos,
        charObj,
      })
        .then(() => {
          this.props.handleClose();
          this.setState({
            invalidMessage: []
          })
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  handleChangeForm(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClickClose() {
    this.props.handleClose();
  }

  handleChangeStarRatingSelect(value) {
    this.setState({
      rating: Number(value),
    });
    console.log(value);
  }

  displayRatingDesc() {
    if (this.state.rating === 1) {
      return <span className="text-style-2 margin-sides">Poor</span>;
    } else if (this.state.rating === 2) {
      return <span className="text-style-2 margin-sides">Fair</span>;
    } else if (this.state.rating === 3) {
      return <span className="text-style-2 margin-sides">Average </span>;
    } else if (this.state.rating === 4) {
      return <span className="text-style-2 margin-sides">Good </span>;
    } else if (this.state.rating === 5) {
      return <span className="text-style-2 margin-sides">Great </span>;
    }
  }
  handleChangeRec(event) {
    if (event.target.value === "yes") {
      this.setState({
        recommend: true,
      });
    } else {
      this.setState({
        recommend: false,
      });
    }
  }

  handleChangeSize(size) {
    let newId = this.incrementId();
    console.log(newId);
    this.setState({
      sizeChar: { id: newId, value: size },
    });
  }
  handleChangeWidth(width) {
    let newId = this.incrementId();
    console.log(newId);
    this.setState({
      widthChar: { id: newId, value: width },
    });
  }
  handleChangeComfort(comfort) {
    let newId = this.incrementId();
    this.setState({
      comfortChar: { id: newId, value: comfort },
    });
  }
  handleChangeQuality(quality) {
    let newId = this.incrementId();
    this.setState({
      qualityChar: { id: newId, value: quality },
    });
  }
  handleChangeLength(length) {
    let newId = this.incrementId();
    this.setState({
      lengthChar: { id: newId, value: length },
    });
  }
  handleChangeFit(fit) {
    let newId = this.incrementId();
    this.setState({
      fitChar: { id: newId, value: fit },
    });
    console.log(newId);
  }

  incrementId() {
    this.setState({
      lastId: this.state.lastId + 1,
    });

    return this.state.lastId;
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
    const {
      sizeChar,
      widthChar,
      comfortChar,
      qualityChar,
      lengthChar,
      fitChar,
    } = this.state;
    return (
      <div className="modal display-block ">
        <div className="grid-container">
          <section className="modal-content">
            {currentModalView === "photo" ? (
              <>
                <span className="close" onClick={this.handleClickClose}>
                  &times;
                </span>
                <img src={photo} alt="User photos from Reviews"></img>
              </>
            ) : (
              <div className="user-input-container">
                <div className="user-input-header">
                  <span className="close" onClick={this.handleClickClose}>
                    &times;
                  </span>
                  <p className="text-style-1"> Write Your Review</p>
                  <p className="text-style-2" style={{ fontWeight: "bold" }}>
                    Product Name: About the {productInfoData.name}
                  </p>
                </div>
                <br />
                <form onSubmit={this.handleSubmitForm}>
                  <div className="user-input-rating">
                    <label
                      className="text-style-2"
                      style={{ fontWeight: "bold" }}
                    >
                      Overall rating (mandatory):
                    </label>
                    <StarRating
                      handleChangeStarRatingSelect={
                        this.handleChangeStarRatingSelect
                      }
                      currentModalView={currentModalView}
                    />
                    {this.displayRatingDesc()}
                  </div>
                  <br />
                  <Recommend
                    handleChangeRec={this.handleChangeRec}
                    recommend={this.state.recommend}
                  />
                  <br />
                  <Characteristics
                    sizeChar={sizeChar}
                    widthChar={widthChar}
                    comfortChar={comfortChar}
                    qualityChar={qualityChar}
                    lengthChar={lengthChar}
                    fitChar={fitChar}
                    handleChangeSize={this.handleChangeSize}
                    handleChangeWidth={this.handleChangeWidth}
                    handleChangeComfort={this.handleChangeComfort}
                    handleChangeQuality={this.handleChangeQuality}
                    handleChangeLength={this.handleChangeLength}
                    handleChangeFit={this.handleChangeFit}
                  />
                  <br />
                  <div className="user-input-summary">
                    <label
                      className="text-style-2"
                      style={{ fontWeight: "bold" }}
                    >
                      Review summary
                    </label>
                    <br />
                    <textarea
                      onChange={this.handleChangeForm}
                      name="summary"
                      value={this.state.summary}
                      type="text"
                      placeholder="Example: Best purchase ever!"
                      maxLength="60"
                    ></textarea>
                  </div>
                  <br />
                  <div className="user-input-body">
                    <label
                      className="text-style-2"
                      style={{ fontWeight: "bold" }}
                    >
                      Review body (mandatory)
                    </label>

                    <br />
                    <textarea
                      onChange={this.handleChangeForm}
                      name="body"
                      value={this.state.body}
                      type="text"
                      className="user-input"
                      placeholder="Why did you like the product or not?"
                      maxLength="1000"
                    ></textarea>
                    {50 - this.state.body.length < 1 ? (
                      <span className="text-style-2 margin-sides ">
                        Minimum reached
                      </span>
                    ) : (
                      <span className="text-style-2 margin-sides ">
                        Minimum required characters left:{" "}
                        {50 - this.state.body.length}
                      </span>
                    )}
                  </div>
                  <br />
                  <div className="user-input-photos">
                    <label
                      className="text-style-2"
                      style={{ fontWeight: "bold" }}
                    >
                      Upload your photos:
                    </label>
                    <input
                      onChange={this.handleChangeForm}
                      name="photos"
                      value={this.state.photos}
                      type="file"
                      className="chooseFile "
                      multiple
                    ></input>
                  </div>
                  <br />
                  <div className="user-input-name">
                    <label
                      className="text-style-2"
                      style={{ fontWeight: "bold" }}
                    >
                      What is your nickname (mandatory):
                    </label>
                    <input
                      onChange={this.handleChangeForm}
                      name="name"
                      value={this.state.name}
                      type="text"
                      className="input1"
                      placeholder="Example: jackson11!"
                      maxLength="60"
                    ></input>
                    <br />
                    {this.displayMessageName()}
                  </div>
                  <br />
                  <div className="user-input-email">
                    <label
                      className="text-style-2"
                      style={{ fontWeight: "bold" }}
                    >
                      Your email (mandatory):
                    </label>
                    <input
                      onChange={this.handleChangeForm}
                      name="email"
                      value={this.state.email}
                      type="text"
                      className="input1"
                      placeholder="Example: jackson11@email.com"
                      maxLength="60"
                    ></input>
                    <br />
                    {this.displayMessageEmail()}
                  </div>
                  <br />
                  <div className="user-input-submit">
                    {this.state.invalidMessage.length > 0 ? (
                      this.state.invalidMessage.map((message) => {
                        return <div>{message}</div>;
                      })
                    ) : (
                      <></>
                    )}
                    <input
                      className="submit"
                      type="submit"
                      onSubmit={this.handleSubmitForm}
                    ></input>
                  </div>
                </form>
              </div>
            )}
          </section>
        </div>
      </div>
    );
  }
}

export default Modal;
