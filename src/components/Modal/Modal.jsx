import './Modal.scss';

const Modal = ({ img, title, subTitle, description, technologies, modalClose }) => {
  const modalStyle = {
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'block',
  };

  // Determine if the img is a video by checking its extension
  const isVideo = img?.endsWith('.webm');

  return (
    <div className="modal show fade bd-example-modal-lg" style={modalStyle}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button
              type="button"
              className="btn-close"
              onClick={modalClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="st-flex-center">
              {/* Render video or image based on the file type */}
              {isVideo ? (
                <video 
                  src={img} 
                  autoPlay 
                  loop 
                  muted 
                  controls 
                  className="modal-media"
                />
              ) : (
                <img src={img} alt="modal media" className="modal-media" />
              )}
            </div>
            <p className="modal-subtitle">{subTitle}</p>
            <br />
            <p className="modal-subtitle">{description}</p>
            <br />
            <p className="modal-subtitle">{technologies}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
