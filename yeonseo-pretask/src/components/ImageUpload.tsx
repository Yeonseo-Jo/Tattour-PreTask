import "../style/ImageUpload.css";

import { ReactComponent as AddImg } from "../assets/AddImg.svg";

const ImageUpload = () => {
  return (
    <>
      <h1>이미지 파일 업로드를 구현해 봐요</h1>
      <article>
        <label className="img__label" htmlFor="designImg">
          <input
            id="designImg"
            className="img__input"
            type="file"
            accept="image/*"
            // onChange={}
          />
          <div className="img__preview">
            <AddImg />
            <span>도안 이미지를 첨부해주세요</span>
          </div>
        </label>
      </article>
    </>
  );
};

export default ImageUpload;
