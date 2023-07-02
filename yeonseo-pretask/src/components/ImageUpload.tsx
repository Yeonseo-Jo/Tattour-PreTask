import "../style/ImageUpload.css";

import { useState } from "react";

import { ReactComponent as AddImg } from "../assets/AddImg.svg";

const ImageUpload = () => {
  const [firstThumbnailURL, setFirstThumbnailURL] = useState<string>("");
  const [secondThumbnailURL, setSecondThumbnailURL] = useState<string>("");

  const handleChangeUploadByFileReader = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { files } = e.target;
    if (!files || !files[0]) return;
    const fileBlob = files[0];

    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    reader.onloadend = () => {
      const base64data = reader.result as string;
      console.log("fileReader 방식: \n", base64data);
      setFirstThumbnailURL(base64data);
    };
  };

  const handleChangeUploadByObjectURL = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { files } = e.target;
    if (!files || !files[0]) return;
    const fileBlob = files[0];

    if (secondThumbnailURL) URL.revokeObjectURL(secondThumbnailURL);
    const url = URL.createObjectURL(fileBlob);
    console.log("createObject 방식: \n", url);
    setSecondThumbnailURL(url);
  };

  const handleClickNext = () => {
    console.log("성공");
  };

  return (
    <>
      <h1>이미지 파일 업로드를 구현해 봐요</h1>

      <section className="section-img">
        <article>
          <h2>FileReader 방식</h2>
          <label className="img__label" htmlFor="first__designImg">
            <input
              id="first__designImg"
              className="img__input"
              type="file"
              accept="image/*"
              onChange={handleChangeUploadByFileReader}
            />
            <div className="img__uploadBox">
              {firstThumbnailURL ? (
                <img
                  className="img__uploadBox-preview"
                  src={firstThumbnailURL}
                  alt="미리보기 이미지"
                />
              ) : (
                <>
                  <AddImg />
                  <span>도안 이미지를 첨부해주세요</span>
                </>
              )}
            </div>
          </label>
          <div>
            <button type="button" onClick={handleClickNext}>
              다음으로
            </button>
          </div>
        </article>
        <article>
          <h2> createObjectURL 방식 </h2>
          <label className="img__label" htmlFor="second__designImg">
            <input
              id="second__designImg"
              className="img__input"
              type="file"
              accept="image/*"
              onChange={handleChangeUploadByObjectURL}
            />
            <div className="img__uploadBox">
              {secondThumbnailURL ? (
                <img
                  className="img__uploadBox-preview"
                  src={secondThumbnailURL}
                  alt="미리보기 이미지"
                />
              ) : (
                <>
                  <AddImg />
                  <span>도안 이미지를 첨부해주세요</span>
                </>
              )}
            </div>
          </label>
          <div>
            <button type="button" onClick={handleClickNext}>
              다음으로
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default ImageUpload;
