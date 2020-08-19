import React from "react";

const Characteristics = ({
  sizeChar,
  widthChar,
  comfortChar,
  qualityChar,
  lengthChar,
  fitChar,
  handleChangeSize,
  handleChangeWidth,
  handleChangeComfort,
  handleChangeQuality,
  handleChangeLength,
  handleChangeFit,
}) => {

  const displaySizeDesc = () => {
    if (sizeChar.value === "1") {
      return (
        <span className="text-style-2 margin-sides">A size too small</span>
      );
    } else if (sizeChar.value === "2") {
      return (
        <span className="text-style-2 margin-sides">½ a size too small</span>
      );
    } else if (sizeChar.value === "3") {
      return <span className="text-style-2 margin-sides">Perfect</span>;
    } else if (sizeChar.value === "4") {
      return (
        <span className="text-style-2 margin-sides">½ a size too big</span>
      );
    } else if (sizeChar.value === "5") {
      return <span className="text-style-2 margin-sides">A size too wide</span>;
    }
  };

  const displayWidthDesc = () => {
    if (widthChar.value === "1") {
      return <span className="text-style-2 margin-sides">Too narrow</span>;
    } else if (widthChar.value === "2") {
      return <span className="text-style-2 margin-sides">Slightly narrow</span>;
    } else if (widthChar.value === "3") {
      return <span className="text-style-2 margin-sides">Perfect</span>;
    } else if (widthChar.value === "4") {
      return <span className="text-style-2 margin-sides">Slightly wide</span>;
    } else if (widthChar.value === "5") {
      return <span className="text-style-2 margin-sides">Too wide</span>;
    }
  };
  const displayComfortDesc = () => {
    if (comfortChar.value === "1") {
      return <span className="text-style-2 margin-sides">Uncomfortable</span>;
    } else if (comfortChar.value === "2") {
      return <span className="text-style-2 margin-sides">Slightly uncomfortable</span>;
    } else if (comfortChar.value === "3") {
      return <span className="text-style-2 margin-sides">Ok</span>;
    } else if (comfortChar.value === "4") {
      return <span className="text-style-2 margin-sides">Comfortable</span>;
    } else if (comfortChar.value === "5") {
      return <span className="text-style-2 margin-sides">Perfect</span>;
    }
  };
  const displayQualityDesc = () => {
    if (qualityChar.value === "1") {
      return <span className="text-style-2 margin-sides">Poor</span>;
    } else if (qualityChar.value === "2") {
      return <span className="text-style-2 margin-sides">Below average</span>;
    } else if (qualityChar.value === "3") {
      return <span className="text-style-2 margin-sides">What I expected</span>;
    } else if (qualityChar.value === "4") {
      return <span className="text-style-2 margin-sides">Pretty great</span>;
    } else if (qualityChar.value === "5") {
      return <span className="text-style-2 margin-sides">Perfect</span>;
    }
  };
  const displayLengthDesc = () => {
    if (lengthChar.value === "1") {
      return <span className="text-style-2 margin-sides">Runs Short</span>;
    } else if (lengthChar.value === "2") {
      return <span className="text-style-2 margin-sides">Runs slightly short</span>;
    } else if (lengthChar.value === "3") {
      return <span className="text-style-2 margin-sides">Perfect</span>;
    } else if (lengthChar.value === "4") {
      return <span className="text-style-2 margin-sides">Runs slightly long</span>;
    } else if (lengthChar.value === "5") {
      return <span className="text-style-2 margin-sides">Runs long</span>;
    }
  };

  const displayFitDesc = () => {
    if (fitChar.value === "1") {
      return <span className="text-style-2 margin-sides">Runs tight</span>;
    } else if (fitChar.value === "2") {
      return <span className="text-style-2 margin-sides">Runs slightly tight</span>;
    } else if (fitChar.value === "3") {
      return <span className="text-style-2 margin-sides">Perfect</span>;
    } else if (fitChar.value === "4") {
      return <span className="text-style-2 margin-sides">Runs slightly long</span>;
    } else if (fitChar.value === "5") {
      return <span className="text-style-2 margin-sides">Runs long</span>;
    }
  };

  return (
    <div className="user-input-characteristics">
      <div className="text-style-2" style={{ fontWeight: "bold" }}>
        Characteristics (mandatory)
      </div>

      <label className="text-style-2" style={{ fontWeight: "bold" }}>
        Size:
      </label>

      <input
        onChange={(e) => handleChangeSize(e.target.value)}
        name="sizeChar"
        value="1"
        type="radio"
        checked={sizeChar.value === "1"}
        id="sizeChar1"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="sizeChar1"
      >
        1
      </label>

      <input
        onChange={(e) => handleChangeSize(e.target.value)}
        name="sizeChar"
        value="2"
        type="radio"
        checked={sizeChar.value === "2"}
        id="sizeChar2"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="sizeChar2"
      >
        2
      </label>

      <input
        onChange={(e) => handleChangeSize(e.target.value)}
        name="sizeChar"
        value="3"
        type="radio"
        checked={sizeChar.value === "3"}
        id="sizeChar3"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="sizeChar3"
      >
        3
      </label>

      <input
        onChange={(e) => handleChangeSize(e.target.value)}
        name="sizeChar"
        value="4"
        type="radio"
        checked={sizeChar.value === "4"}
        id="sizeChar4"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="sizeChar4"
      >
        4
      </label>

      <input
        onChange={(e) => handleChangeSize(e.target.value)}
        name="sizeChar"
        value="5"
        type="radio"
        checked={sizeChar.value === "5"}
        id="sizeChar5"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="sizeChar5"
      >
        5
      </label>
      {displaySizeDesc()}
<br/>
      <label className="text-style-2" style={{ fontWeight: "bold" }}>
        Width:
      </label>

      <input
        onChange={(e) => handleChangeWidth(e.target.value)}
        name="widthChar"
        value="1"
        type="radio"
        checked={widthChar.value === "1"}
        id="widthChar1"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="widthChar1"
      >
        1
      </label>

      <input
        onChange={(e) => handleChangeWidth(e.target.value)}
        name="widthChar"
        value="2"
        type="radio"
        checked={widthChar.value === "2"}
        id="widthChar2"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="widthChar2"
      >
        2
      </label>

      <input
        onChange={(e) => handleChangeWidth(e.target.value)}
        name="widthChar"
        value="3"
        type="radio"
        checked={widthChar.value === "3"}
        id="widthChar3"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="widthChar3"
      >
        3
      </label>

      <input
        onChange={(e) => handleChangeWidth(e.target.value)}
        name="widthChar"
        value="4"
        type="radio"
        checked={widthChar.value === "4"}
        id="widthChar4"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="widthChar4"
      >
        4
      </label>

      <input
        onChange={(e) => handleChangeWidth(e.target.value)}
        name="widthChar"
        value="5"
        type="radio"
        checked={widthChar.value === "5"}
        id="widthChar5"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="widthChar5"
      >
        5
      </label>
      {displayWidthDesc()}
      <br/>

      <label className="text-style-2" style={{ fontWeight: "bold" }}>
      Comfort:
      </label>

      <input
        onChange={(e) => handleChangeComfort(e.target.value)}
        name="comfortChar"
        value="1"
        type="radio"
        checked={comfortChar.value === "1"}
        id="comfortChar1"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="comfortChar1"
      >
        1
      </label>

      <input
        onChange={(e) => handleChangeComfort(e.target.value)}
        name="comfortChar"
        value="2"
        type="radio"
        checked={comfortChar.value === "2"}
        id="comfortChar2"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="comfortChar2"
      >
        2
      </label>

      <input
        onChange={(e) => handleChangeComfort(e.target.value)}
        name="comfortChar"
        value="3"
        type="radio"
        checked={comfortChar.value === "3"}
        id="comfortChar3"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="comfortChar3"
      >
        3
      </label>

      <input
        onChange={(e) => handleChangeComfort(e.target.value)}
        name="comfortChar"
        value="4"
        type="radio"
        checked={comfortChar.value === "4"}
        id="comfortChar4"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="comfortChar4"
      >
        4
      </label>

      <input
        onChange={(e) => handleChangeComfort(e.target.value)}
        name="comfortChar"
        value="5"
        type="radio"
        checked={comfortChar.value === "5"}
        id="comfortChar5"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="comfortChar5"
      >
        5
      </label>
      {displayComfortDesc()}
      <br/>

      <label className="text-style-2" style={{ fontWeight: "bold" }}>
      Quality:
      </label>

      <input
        onChange={(e) => handleChangeQuality(e.target.value)}
        name="qualityChar"
        value="1"
        type="radio"
        checked={qualityChar.value === "1"}
        id="qualityChar1"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="qualityChar1"
      >
        1
      </label>

      <input
        onChange={(e) => handleChangeQuality(e.target.value)}
        name="qualityChar"
        value="2"
        type="radio"
        checked={qualityChar.value === "2"}
        id="qualityChar2"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="qualityChar2"
      >
        2
      </label>

      <input
        onChange={(e) => handleChangeQuality(e.target.value)}
        name="qualityChar"
        value="3"
        type="radio"
        checked={qualityChar.value === "3"}
        id="qualityChar3"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="qualityChar3"
      >
        3
      </label>

      <input
        onChange={(e) => handleChangeQuality(e.target.value)}
        name="qualityChar"
        value="4"
        type="radio"
        checked={qualityChar.value === "4"}
        id="qualityChar4"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="qualityChar4"
      >
        4
      </label>

      <input
        onChange={(e) => handleChangeQuality(e.target.value)}
        name="qualityChar"
        value="5"
        type="radio"
        checked={qualityChar.value === "5"}
        id="qualityChar5"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="qualityChar5"
      >
        5
      </label>
      {displayQualityDesc()}
      <br/>

      <label className="text-style-2" style={{ fontWeight: "bold" }}>
      Length:
      </label>

      <input
        onChange={(e) => handleChangeLength(e.target.value)}
        name="lengthChar"
        value="1"
        type="radio"
        checked={lengthChar.value === "1"}
        id="lengthChar1"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="lengthChar1"
      >
        1
      </label>

      <input
        onChange={(e) => handleChangeLength(e.target.value)}
        name="lengthChar"
        value="2"
        type="radio"
        checked={lengthChar.value === "2"}
        id="lengthChar2"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="lengthChar2"
      >
        2
      </label>

      <input
        onChange={(e) => handleChangeLength(e.target.value)}
        name="lengthChar"
        value="3"
        type="radio"
        checked={lengthChar.value === "3"}
        id="lengthChar3"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="lengthChar3"
      >
        3
      </label>

      <input
        onChange={(e) => handleChangeLength(e.target.value)}
        name="lengthChar"
        value="4"
        type="radio"
        checked={lengthChar.value === "4"}
        id="lengthChar4"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="lengthChar4"
      >
        4
      </label>

      <input
        onChange={(e) => handleChangeLength(e.target.value)}
        name="lengthChar"
        value="5"
        type="radio"
        checked={lengthChar.value === "5"}
        id="lengthChar5"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="lengthChar5"
      >
        5
      </label>
      {displayLengthDesc()}
      <br/>

      <label className="text-style-2" style={{ fontWeight: "bold" }}>
      Fit:
      </label>

      <input
        onChange={(e) => handleChangeFit(e.target.value)}
        name="fitChar"
        value="1"
        type="radio"
        checked={fitChar.value === "1"}
        id="fitChar1"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="fitChar1"
      >
        1
      </label>

      <input
        onChange={(e) => handleChangeFit(e.target.value)}
        name="fitChar"
        value="2"
        type="radio"
        checked={fitChar.value === "2"}
        id="fitChar2"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="fitChar2"
      >
        2
      </label>

      <input
        onChange={(e) => handleChangeFit(e.target.value)}
        name="fitChar"
        value="3"
        type="radio"
        checked={fitChar.value === "3"}
        id="fitChar3"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="fitChar3"
      >
        3
      </label>

      <input
        onChange={(e) => handleChangeFit(e.target.value)}
        name="fitChar"
        value="4"
        type="radio"
        checked={fitChar.value === "4"}
        id="fitChar4"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="fitChar4"
      >
        4
      </label>

      <input
        onChange={(e) => handleChangeFit(e.target.value)}
        name="fitChar"
        value="5"
        type="radio"
        checked={fitChar.value === "5"}
        id="fitChar5"
      ></input>
      <label
        className="text-style-2"
        style={{ fontWeight: "bold" }}
        htmlFor="fitChar5"
      >
        5
      </label>
      {displayFitDesc()}
      <br/>
    </div>
  );
};

export default Characteristics;
