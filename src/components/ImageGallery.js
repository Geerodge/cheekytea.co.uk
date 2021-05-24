import React from "react";
import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import styled from 'styled-components';

const ImageGalleryStyles = styled.div`

`;

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];



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