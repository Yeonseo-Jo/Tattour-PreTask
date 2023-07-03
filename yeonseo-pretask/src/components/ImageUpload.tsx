import "../style/ImageUpload.css";

import React, { useState } from "react";

import { ReactComponent as AddImg } from "../assets/AddImg.svg";

const ImageUpload = () => {
  const [firstThumbnailURL, setFirstThumbnailURL] = useState<string>("");
  const [secondThumbnailURL, setSecondThumbnailURL] = useState<string>("");
  const [files, setFiles] = useState<FileList | null>(null);

  const handleChangeUploadByFileReader = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { files } = e.target;
    if (!files || !files[0]) return;
    setFiles(files);
    const fileBlob = files[0];

    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    reader.onloadend = () => {
      const base64data = reader.result as string;
      console.log("fileReader 방식: \n", base64data);
      setFirstThumbnailURL(base64data);
    };
  };

  const handleDeleteFistImg = () => {
    setFirstThumbnailURL("");
    setFiles(null);
  };

  const handleChangeUploadByObjectURL = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { files } = e.target;
    if (!files || !files[0]) return;
    setFiles(files);
    const fileBlob = files[0];

    //메모리에 url이 존재한다면 해제 해줘야 함
    if (secondThumbnailURL) URL.revokeObjectURL(secondThumbnailURL);
    const url = URL.createObjectURL(fileBlob);
    console.log("createObject 방식: \n", url);
    setSecondThumbnailURL(url);
  };

  const handleDeleteSecondImg = () => {
    URL.revokeObjectURL(secondThumbnailURL);
    setSecondThumbnailURL("");
    setFiles(null);
  };

  //file 자체로 서버에 post 요청 하는 함수 연습!
  const handleClickNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (files) console.log(files[0]);
    // const formData = new FormData();
    // if (!files) return;
    // formData.append("file", files[0]);

    // try {
    //   const res = await axios.post("/reques 파라미터", formData, {
    //     headers: { "content-type": "multipart/form-data" },
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <>
      <h1>이미지 파일 업로드를 구현해 봐요</h1>

      <section className="section-img">
        <article>
          <h2>FileReader 방식</h2>

          {firstThumbnailURL ? (
            <>
              <div className="img__uploadBox">
                <img
                  className="img__uploadBox-preview"
                  src={firstThumbnailURL}
                  alt="미리보기 이미지"
                />
              </div>
              <button type="button" onClick={handleDeleteFistImg}>
                삭제
              </button>
            </>
          ) : (
            <label className="img__label" htmlFor="first__designImg">
              <input
                id="first__designImg"
                className="img__input"
                type="file"
                accept="image/*"
                onChange={handleChangeUploadByFileReader}
              />
              <div className="img__uploadBox">
                <AddImg />
                <span>도안 이미지를 첨부해주세요</span>
              </div>
            </label>
          )}
        </article>
        <article>
          <h2> createObjectURL 방식 </h2>

          {secondThumbnailURL ? (
            <>
              <div className="img__uploadBox">
                <img
                  className="img__uploadBox-preview"
                  src={secondThumbnailURL}
                  alt="미리보기 이미지"
                />
              </div>
              <button type="button" onClick={handleDeleteSecondImg}>
                삭제
              </button>
            </>
          ) : (
            <label className="img__label" htmlFor="second__designImg">
              <input
                id="second__designImg"
                className="img__input"
                type="file"
                accept="image/*"
                onChange={handleChangeUploadByObjectURL}
              />
              <div className="img__uploadBox">
                <AddImg />
                <span>도안 이미지를 첨부해주세요</span>
              </div>
            </label>
          )}
        </article>
      </section>
      <div className="next-button">
        <button type="submit" onClick={handleClickNext}>
          다음으로
        </button>
      </div>
    </>
  );
};

export default ImageUpload;
