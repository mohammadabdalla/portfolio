import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const SinglePortfolio = ({ data, getData }) => {
  const { imgLink, imgLinkLg, title, subTitle, effect, duration, delay, description, technologies } = data;

  // Determine if the imgLink is a video by checking its extension
  const isVideo = imgLink?.endsWith('.webm');

  return (
    <div 
      className="col-lg-4 col-md-6" 
      data-aos={effect} 
      data-aos-duration={duration} 
      data-aos-delay={delay}
    >
      <div 
        className="st-portfolio-single st-style1" 
        onClick={() => getData(imgLinkLg, title, subTitle, description, technologies)}
      >
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in">
              {/* Render video or image based on the file type */}
              {isVideo ? (
                <video 
                  src={imgLink} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="st-portfolio-video"
                />
              ) : (
                <img src={imgLink} alt="portfolio" />
              )}
            </div>
            <div className="st-portfolio-item-hover">
              <Icon icon="mdi:plus-circle" />
              <h5>{title}</h5>
              <p>{subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SinglePortfolio.propTypes = {
  data: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired,
};

export default SinglePortfolio;
