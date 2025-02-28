import React from 'react';

import {
  Title,
  FlexWrapper,
  ImageItem,
  Image1,
  ImgBlock,
  ImgWrapper,
  Inst,
} from './style';

const Instagram = () => (
  <>
    <Title>
      Следите за нами в <Inst>Instagram</Inst>
    </Title>
    <FlexWrapper>
      <Image1 src="/images/image1.jpg" alt="Image 1" />
      <ImgWrapper>
        <ImgBlock>
          <ImageItem src="/images/image2.jpg" alt="Image 2" />
          <ImageItem src="/images/image3.jpg" alt="Image 3" />
        </ImgBlock>
        <ImgBlock>
          <ImageItem src="/images/image4.jpg" alt="Image 4" />
          <ImageItem src="/images/image5.jpg" alt="Image 5" />
        </ImgBlock>
      </ImgWrapper>
    </FlexWrapper>
  </>
);

export default Instagram;
