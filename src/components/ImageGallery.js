import React from "react";
import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import styled from 'styled-components';

const ImageGalleryStyles = styled.div`

`;

export default function ProductGallery(props) {
    return (
        <ImageGalleryStyles>
            <ImageGallery
                items={props.items} // Why does this not resize???
                // items={images}
                showPlayButton={false}
                showBullets={true}
            />
        </ImageGalleryStyles>
    )
}