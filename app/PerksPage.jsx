import React from 'react'
import styled from '@emotion/styled';
import InfoCard from '@components/InfoCard';
import { Grid } from '@mui/material';

const CustomDiv = styled.div`
    background-color: ${(props) => props.theme.palette.primary.light};
    height: 140vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PerksPage = () => {
  let wealthCardPicture = (
    <svg xmlns="http://www.w3.org/2000/svg" width="154" height="161" viewBox="0 0 154 161" fill="none">
      <g clip-path="url(#clip0_4_26)">
        <path d="M14.4375 18.3473V135.709H146.781C148.696 135.709 150.532 136.498 151.886 137.903C153.239 139.308 154 141.213 154 143.2C154 145.187 153.239 147.092 151.886 148.497C150.532 149.902 148.696 150.691 146.781 150.691H7.21875C5.30422 150.691 3.4681 149.902 2.11432 148.497C0.760545 147.092 0 145.187 0 143.2L0 18.3473C0 16.3605 0.760545 14.4551 2.11432 13.0502C3.4681 11.6454 5.30422 10.8561 7.21875 10.8561C9.13328 10.8561 10.9694 11.6454 12.3232 13.0502C13.677 14.4551 14.4375 16.3605 14.4375 18.3473ZM151.882 43.6175L101.351 96.0555C99.9977 97.4584 98.163 98.2464 96.25 98.2464C94.337 98.2464 92.5023 97.4584 91.1488 96.0555L67.375 71.3847L41.195 98.5526C39.8257 99.8751 38.0157 100.595 36.1454 100.562C34.2751 100.528 32.4902 99.7436 31.1657 98.3728C29.8448 96.9984 29.0887 95.1461 29.0564 93.2052C29.0241 91.2643 29.7181 89.386 30.9925 87.9651L62.2737 55.5034C63.6273 54.1006 65.462 53.3126 67.375 53.3126C69.288 53.3126 71.1227 54.1006 72.4762 55.5034L96.25 80.1743L141.68 33.03C143.049 31.7074 144.859 30.9873 146.73 31.0208C148.6 31.0543 150.385 31.8389 151.709 33.2097C153.03 34.5842 153.786 36.4365 153.819 38.3773C153.851 40.3182 153.157 42.1965 151.882 43.6175Z" fill="#FAE84E"/>
      </g>
sx<defs>
    <clipPath id="clip0_4_26">
      <rect width="154" height="159.811" fill="white" transform="translate(0 0.86792)"/>
    </clipPath>
  </defs>
</svg>
  );

  let independenceCardPicture = (
    <svg xmlns="http://www.w3.org/2000/svg" width="187" height="187" viewBox="0 0 187 187" fill="none">
      <path d="M30.725 45.8667H15.5833V151.858C15.5833 155.874 17.1786 159.726 20.0182 162.565C22.8578 165.405 26.7092 167 30.725 167H136.717V151.858H30.725V45.8667ZM140.502 108.326C140.502 96.9698 117.79 91.2917 106.433 91.2917C95.0771 91.2917 72.3646 96.9698 72.3646 108.326V114.004H140.502M106.433 78.0428C115.821 78.0428 123.468 70.3962 123.468 61.0084C123.468 51.6205 115.821 43.974 106.433 43.974C97.0455 43.974 89.399 51.6205 89.399 61.0084C89.399 70.3962 97.0455 78.0428 106.433 78.0428ZM151.858 15.5834H61.0083C52.6804 15.5834 45.8667 22.3971 45.8667 30.725V121.575C45.8667 125.591 47.4619 129.442 50.3016 132.282C53.1412 135.121 56.9925 136.717 61.0083 136.717H151.858C160.262 136.717 167 129.979 167 121.575V30.725C167 26.7092 165.405 22.8579 162.565 20.0183C159.725 17.1787 155.874 15.5834 151.858 15.5834ZM151.858 121.575H61.0083V30.725H151.858V121.575Z" fill="#FAE84E"/>
    </svg>
  );

  let securityCardPicture = (
    <svg xmlns="http://www.w3.org/2000/svg" width="173" height="173" viewBox="0 0 173 173" fill="none">
      <path d="M86.5 7.20837L21.625 36.0417V79.2917C21.625 119.298 49.305 156.709 86.5 165.792C123.695 156.709 151.375 119.298 151.375 79.2917V36.0417L86.5 7.20837ZM86.5 50.4584C96.5917 50.4584 106.683 58.3875 106.683 68.4792V79.2917C111.008 79.2917 115.333 83.6167 115.333 88.6625V113.892C115.333 118.217 111.008 122.542 105.963 122.542H66.3167C61.9917 122.542 57.6667 118.217 57.6667 113.171V87.9417C57.6667 83.6167 61.9917 79.2917 66.3167 79.2917V68.4792C66.3167 58.3875 76.4083 50.4584 86.5 50.4584ZM86.5 59.1084C80.7333 59.1084 75.6875 62.7125 75.6875 68.4792V79.2917H97.3125V68.4792C97.3125 62.7125 92.2667 59.1084 86.5 59.1084Z" fill="#FAE84E"/>
    </svg>
  );

  return (
    <CustomDiv>
      <Grid container spacing={3} justifyContent="space-evenly">
        <Grid item xs={3}>
          <InfoCard title={"Wealth"} picture={wealthCardPicture} text={"Bitcoin encourages saving and wealth building long-term. Bitcoin always has large increases in value in any 5-year period."} />
        </Grid>
        <Grid item xs={3}>
          <InfoCard title={"Independence"} picture={independenceCardPicture} text={"Bitcoin allows those who have been historically discriminated against to control their own money- taking power back from banks."} />
        </Grid>
        <Grid item xs={3}>
          <InfoCard title={"Security"} picture={securityCardPicture} text={"When communities build savings in safe assets that appreciate they become secure. They are no longer targets for monetary discrimination."} />
        </Grid>
      </Grid>
    </CustomDiv>
  )
}

export default PerksPage