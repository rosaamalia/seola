import React from "react";
import PropTypes from "prop-types";

export const YoutubeEmbed = ({embedId}) => (
    <div className="video-responsive">
        <iframe 
            width='770'
            height='480'
            src={`https://www.youtube.com/embed/${embedId}`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
}