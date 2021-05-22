import styled from 'styled-components';

const ImageGalleryStyles = styled.div`

    $ig-small-screen: 768px !default;
    $ig-xsmall-screen: 480px !default;
    $ig-white: #fff !default;
    $ig-black: #000 !default;
    $ig-blue: #337ab7 !default;
    $ig-background-black: rgba(0, 0, 0, .4) !default;
    $ig-transparent: rgba(0, 0, 0, 0) !default;

    @mixin vendor-prefix($name, $value) {
    @each $vendor in ('-webkit-', '-moz-', '-ms-', '-o-', '') {
        #{$vendor}#{$name}: #{$value};
    }
    }

    // SVG ICON STYLES
    .image-gallery-icon {
    color: $ig-white;
    transition: all .2s ease-out;
    appearance: none;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    outline: none;
    position: absolute;
    z-index: 4;
    filter: drop-shadow(0 2px 2px lighten($ig-black, 10%));

    @media (min-width: $ig-small-screen) {
        // Don't hover on screens smaller than small
        &:hover {
        color: $ig-blue;
        .image-gallery-svg {
            transform: scale(1.1);
        }
        }
    }

    &:focus {
        // a11y support
        outline: 2px solid $ig-blue;
    }
    }

    .image-gallery-using-mouse {
    .image-gallery-icon {
        &:focus {
        outline: none;
        }
    }
    }

    .image-gallery-fullscreen-button,
    .image-gallery-play-button {
    bottom: 0;
    padding: 20px;

    .image-gallery-svg {
        height: 36px;
        width: 36px;
    }

    @media (max-width: $ig-small-screen) {
        padding: 15px;

        .image-gallery-svg {
        height: 24px;
        width: 24px;
        }
    }

    @media (max-width: $ig-xsmall-screen) {
        padding: 10px;

        .image-gallery-svg {
        height: 16px;
        width: 16px;
        }
    }
    }

    .image-gallery-fullscreen-button {
    right: 0;
    }

    .image-gallery-play-button {
    left: 0;
    }

    .image-gallery-left-nav,
    .image-gallery-right-nav {
    padding: 50px 10px;
    top: 50%;
    transform: translateY(-50%);

    .image-gallery-svg {
        height: 120px;
        width: 60px;
    }

    @media (max-width: $ig-small-screen) {
        .image-gallery-svg {
        height: 72px;
        width: 36px;
        }
    }

    @media (max-width: $ig-xsmall-screen) {
        .image-gallery-svg {
        height: 48px;
        width: 24px;
        }
    }

    &[disabled] {
        cursor: disabled;
        opacity: .6;
        pointer-events: none;
    }
    }

    .image-gallery-left-nav {
    left: 0;
    }

    .image-gallery-right-nav {
    right: 0;
    }
    // End of Icon styles

    .image-gallery {
    @include vendor-prefix('user-select', none);
    -webkit-tap-highlight-color: $ig-transparent;
    position: relative;

    &.fullscreen-modal {
        background: $ig-black;
        bottom: 0;
        height: 100%;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        width: 100%;
        z-index: 5;

        .image-gallery-content {
        top: 50%;
        transform: translateY(-50%);
        }
    }
    }

    .image-gallery-content {
    position: relative;
    line-height: 0;
    top: 0;

    &.fullscreen {
        background: $ig-black;
    }

    .image-gallery-slide .image-gallery-image {
        max-height: calc(100vh - 80px); // 80 px for the thumbnail space
    }

    &.left,
    &.right {
        .image-gallery-slide .image-gallery-image {
        max-height: 100vh;
        }
    }
    }

    .image-gallery-slide-wrapper {
    position: relative;

    &.left,
    &.right {
        display: inline-block;
        width: calc(100% - 110px); // 100px + 10px for margin

        @media (max-width: $ig-small-screen) {
        width: calc(100% - 87px); // 81px + 6px for margin
        }
    }
    &.image-gallery-rtl {
        direction: rtl;
    }
    }

    .image-gallery-slides {
    line-height: 0;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    text-align: center;
    }

    .image-gallery-slide {
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    &.center {
        position: relative;
    }

    .image-gallery-image {
        width: 100%;
        object-fit: contain;
    }

    .image-gallery-description {
        background: $ig-background-black;
        bottom: 70px;
        color: $ig-white;
        left: 0;
        line-height: 1;
        padding: 10px 20px;
        position: absolute;
        white-space: normal;

        @media (max-width: $ig-small-screen) {
        bottom: 45px;
        font-size: .8em;
        padding: 8px 15px;
        }

    }
    }

    .image-gallery-bullets {
    bottom: 20px;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    width: 80%;
    z-index: 4;

    .image-gallery-bullets-container {
        margin: 0;
        padding: 0;
        text-align: center;
    }

    .image-gallery-bullet {
        appearance: none;
        background-color: transparent;
        border: 1px solid $ig-white;
        border-radius: 50%;
        box-shadow: 0 1px 0 lighten($ig-black, 10%);
        cursor: pointer;
        display: inline-block;
        margin: 0 5px;
        outline: none;
        padding: 5px;
        transition: background .2s ease-out;

        @media (max-width: $ig-small-screen) {
        margin: 0 3px;
        padding: 3px;
        }

        @media (max-width: $ig-xsmall-screen) {
        padding: 2.7px;
        }

        &:focus,
        &:hover {
        background: $ig-blue;
        transform: scale(1.1);
        }

        &.active {
        background: $ig-white;
        }
    }
    }

    .image-gallery-thumbnails-wrapper {
    position: relative;

    &.thumbnails-wrapper-rtl {
        direction: rtl;
    }
    &.left,
    &.right {
        display: inline-block;
        vertical-align: top;
        width: 100px;

        @media (max-width: $ig-small-screen) {
        width: 81px; // 75px + 6px for border
        }

        .image-gallery-thumbnails {
        height: 100%;
        width: 100%;
        left: 0;
        padding: 0;
        position: absolute;
        top: 0;

        .image-gallery-thumbnail {
            display: block;
            margin-right: 0;
            padding: 0;

            + .image-gallery-thumbnail {
            margin-left: 0;
            margin-top: 2px;
            }

        }

        }
    }

    &.left,
    &.right {
        margin: 0 5px;

        @media (max-width: $ig-small-screen) {
        margin: 0 3px;
        }
    }
    }

    .image-gallery-thumbnails {
    overflow: hidden;
    padding: 5px 0;

    @media (max-width: $ig-small-screen) {
        padding: 3px 0;
    }

    .image-gallery-thumbnails-container {
        cursor: pointer;
        text-align: center;
        transition: transform .45s ease-out;
        white-space: nowrap;
    }

    }

    .image-gallery-thumbnail {
    display: inline-block;
    border: 4px solid transparent;
    transition: border .3s ease-out;
    width: 100px;
    background: transparent;
    padding: 0;

    @media (max-width: $ig-small-screen) {
        border: 3px solid transparent;
        width: 81px;
    }

    + .image-gallery-thumbnail {
        margin-left: 2px;
    }

    .image-gallery-thumbnail-inner {
        position: relative;
    }

    .image-gallery-thumbnail-image {
        vertical-align: middle;
        width: 100%;
        line-height: 0;
    }

    &.active,
    &:hover,
    &:focus {
        outline: none;
        border: 4px solid $ig-blue;

        @media (max-width: $ig-small-screen) {
        border: 3px solid $ig-blue;
        }
    }

    }

    .image-gallery-thumbnail-label {
    box-sizing: border-box;
    color: white;
    font-size: 1em;
    left: 0;
    line-height: 1em;
    padding: 5%;
    position: absolute;
    top: 50%;
    text-shadow: 1px 1px 0 black;
    transform: translateY(-50%);
    white-space: normal;
    width: 100%;

    @media(max-width: $ig-small-screen) {
        font-size: .8em;
        line-height: .8em;
    }
    }

    .image-gallery-index {
    background: $ig-background-black;
    color: $ig-white;
    line-height: 1;
    padding: 10px 20px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 4;

    @media(max-width: $ig-small-screen) {
        font-size: .8em;
        padding: 5px 10px;
    }
    }
`;

export default ImageGalleryStyles;