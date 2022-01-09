import React from "react";
import PropTypes from "prop-types";

export const YoutubeEmbed = ({embedId}) => (
    <div className="video-responsive">
        <iframe 
            width="768" 
            height="480" 
            src={`https://www.youtube.com/embed/${embedId}`} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
}