import React, {useState} from 'react'
import styled from '@emotion/styled'
import { Box, Container, Grid, Paper, Typography, Badge } from '@mui/material';
import { grey } from '@mui/material/colors';
import { DateCalendar, PickersDay } from '@mui/x-date-pickers';
import MeetupDetails from '@components/MeetupDetails';

const SuiteAndBTCGraphic = (
<svg width="485" height="372" viewBox="0 0 485 372" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_10_442)">
<path d="M156.047 57.8694H155.057V110.793H156.047V57.8694Z" fill="#3F3D56"/>
<path d="M156.047 126.546H155.057V173.114H156.047V126.546Z" fill="#3F3D56"/>
<path d="M230.238 180.533H153.574V181.522H230.238V180.533Z" fill="#3F3D56"/>
<path d="M121.919 193.887H120.929V235.929H121.919V193.887Z" fill="#3F3D56"/>
<path d="M246.066 243.348H129.832V244.338H246.066V243.348Z" fill="#3F3D56"/>
<path d="M343.009 24.2358H342.02V74.1915H343.009V24.2358Z" fill="#3F3D56"/>
<path d="M334.601 82.1052H261.876V83.0944H334.601V82.1052Z" fill="#3F3D56"/>
<path d="M254.474 90.019H253.485V156.791H254.474V90.019Z" fill="#3F3D56"/>
<path d="M155.552 127.115C153.889 127.115 152.263 126.622 150.881 125.698C149.498 124.774 148.42 123.461 147.784 121.924C147.147 120.388 146.981 118.697 147.305 117.066C147.63 115.435 148.431 113.937 149.606 112.761C150.782 111.585 152.281 110.784 153.912 110.46C155.543 110.135 157.233 110.302 158.77 110.938C160.306 111.575 161.619 112.652 162.543 114.035C163.467 115.418 163.96 117.043 163.96 118.706C163.958 120.936 163.071 123.073 161.495 124.649C159.919 126.226 157.781 127.112 155.552 127.115ZM155.552 111.287C154.085 111.287 152.65 111.722 151.43 112.538C150.21 113.353 149.259 114.512 148.698 115.867C148.136 117.223 147.989 118.715 148.275 120.154C148.562 121.593 149.268 122.915 150.306 123.953C151.344 124.99 152.666 125.697 154.105 125.983C155.544 126.269 157.036 126.122 158.391 125.561C159.747 124.999 160.906 124.048 161.721 122.828C162.536 121.608 162.971 120.174 162.971 118.706C162.969 116.739 162.187 114.854 160.796 113.463C159.405 112.072 157.519 111.29 155.552 111.287Z" fill="#3F3D56"/>
<path d="M121.919 252.251C120.256 252.251 118.63 251.758 117.247 250.834C115.864 249.91 114.787 248.597 114.15 247.061C113.514 245.524 113.347 243.834 113.672 242.203C113.996 240.571 114.797 239.073 115.973 237.897C117.149 236.721 118.647 235.921 120.278 235.596C121.909 235.272 123.6 235.438 125.136 236.075C126.673 236.711 127.986 237.789 128.91 239.171C129.834 240.554 130.327 242.18 130.327 243.843C130.325 246.072 129.438 248.209 127.861 249.786C126.285 251.362 124.148 252.249 121.919 252.251ZM121.919 236.424C120.451 236.424 119.017 236.859 117.797 237.674C116.577 238.489 115.626 239.648 115.064 241.004C114.503 242.359 114.356 243.851 114.642 245.29C114.928 246.73 115.635 248.052 116.672 249.089C117.71 250.127 119.032 250.833 120.471 251.12C121.91 251.406 123.402 251.259 124.758 250.697C126.113 250.136 127.272 249.185 128.087 247.965C128.903 246.745 129.338 245.31 129.338 243.843C129.336 241.876 128.553 239.99 127.162 238.599C125.771 237.208 123.886 236.426 121.919 236.424Z" fill="#3F3D56"/>
<path d="M156.047 188.941C160.417 188.941 163.96 185.398 163.96 181.028C163.96 176.657 160.417 173.114 156.047 173.114C151.676 173.114 148.133 176.657 148.133 181.028C148.133 185.398 151.676 188.941 156.047 188.941Z" fill="#FAE84E"/>
<path d="M442.426 118.212H360.321V119.201H442.426V118.212Z" fill="#3F3D56"/>
<path d="M352.902 126.546H351.912V173.114H352.902V126.546Z" fill="#3F3D56"/>
<path d="M343.999 180.533H278.216V181.522H343.999V180.533Z" fill="#3F3D56"/>
<path d="M462.211 184.984H393.954V185.974H462.211V184.984Z" fill="#3F3D56"/>
<path d="M387.03 193.887H386.041V235.929H387.03V193.887Z" fill="#3F3D56"/>
<path d="M378.127 243.348H261.893V244.338H378.127V243.348Z" fill="#3F3D56"/>
<path d="M254.474 205.263H253.485V235.929H254.474V205.263Z" fill="#3F3D56"/>
<path d="M352.407 126.62C356.778 126.62 360.321 123.077 360.321 118.706C360.321 114.336 356.778 110.793 352.407 110.793C348.036 110.793 344.493 114.336 344.493 118.706C344.493 123.077 348.036 126.62 352.407 126.62Z" fill="#FAE84E"/>
<path d="M342.515 90.5138C340.852 90.5138 339.226 90.0206 337.843 89.0967C336.461 88.1728 335.383 86.8596 334.747 85.3232C334.11 83.7867 333.944 82.0961 334.268 80.465C334.593 78.834 335.393 77.3357 336.569 76.1598C337.745 74.9839 339.243 74.183 340.874 73.8586C342.506 73.5341 344.196 73.7007 345.733 74.3371C347.269 74.9735 348.582 76.0512 349.506 77.434C350.43 78.8167 350.923 80.4424 350.923 82.1054C350.921 84.3347 350.034 86.4719 348.458 88.0483C346.881 89.6246 344.744 90.5113 342.515 90.5138ZM342.515 74.6862C341.048 74.6862 339.613 75.1214 338.393 75.9366C337.173 76.7518 336.222 77.9105 335.66 79.2662C335.099 80.6219 334.952 82.1136 335.238 83.5528C335.525 84.992 336.231 86.314 337.269 87.3515C338.306 88.3891 339.628 89.0957 341.067 89.382C342.507 89.6683 343.998 89.5214 345.354 88.9598C346.71 88.3983 347.868 87.4473 348.684 86.2273C349.499 85.0072 349.934 83.5728 349.934 82.1054C349.932 80.1384 349.15 78.2526 347.759 76.8617C346.368 75.4708 344.482 74.6884 342.515 74.6862Z" fill="#3F3D56"/>
<path d="M253.98 90.5138C252.317 90.5138 250.691 90.0206 249.308 89.0967C247.925 88.1728 246.848 86.8596 246.211 85.3232C245.575 83.7867 245.408 82.0961 245.733 80.465C246.057 78.834 246.858 77.3357 248.034 76.1598C249.21 74.9839 250.708 74.183 252.339 73.8586C253.97 73.5341 255.661 73.7007 257.197 74.3371C258.734 74.9735 260.047 76.0512 260.971 77.434C261.895 78.8167 262.388 80.4424 262.388 82.1054C262.385 84.3347 261.499 86.4719 259.922 88.0483C258.346 89.6246 256.209 90.5113 253.98 90.5138ZM253.98 74.6862C252.512 74.6862 251.078 75.1214 249.858 75.9366C248.638 76.7518 247.687 77.9105 247.125 79.2662C246.564 80.6219 246.417 82.1136 246.703 83.5528C246.989 84.992 247.696 86.314 248.733 87.3515C249.771 88.3891 251.093 89.0957 252.532 89.382C253.971 89.6683 255.463 89.5214 256.819 88.9598C258.174 88.3983 259.333 87.4473 260.148 86.2273C260.964 85.0072 261.399 83.5728 261.399 82.1054C261.397 80.1384 260.614 78.2526 259.223 76.8617C257.832 75.4708 255.947 74.6884 253.98 74.6862Z" fill="#3F3D56"/>
<path d="M386.041 194.382C384.378 194.382 382.752 193.889 381.369 192.965C379.986 192.041 378.909 190.728 378.272 189.191C377.636 187.655 377.469 185.964 377.794 184.333C378.118 182.702 378.919 181.204 380.095 180.028C381.271 178.852 382.769 178.051 384.4 177.727C386.031 177.402 387.722 177.569 389.258 178.205C390.795 178.842 392.108 179.919 393.032 181.302C393.956 182.685 394.449 184.311 394.449 185.974C394.446 188.203 393.56 190.34 391.983 191.916C390.407 193.493 388.27 194.379 386.041 194.382ZM386.041 178.554C384.573 178.554 383.139 178.99 381.919 179.805C380.699 180.62 379.748 181.779 379.186 183.134C378.625 184.49 378.478 185.982 378.764 187.421C379.05 188.86 379.757 190.182 380.794 191.22C381.832 192.257 383.154 192.964 384.593 193.25C386.032 193.536 387.524 193.39 388.88 192.828C390.235 192.266 391.394 191.316 392.209 190.095C393.025 188.875 393.46 187.441 393.46 185.974C393.458 184.007 392.675 182.121 391.284 180.73C389.893 179.339 388.008 178.557 386.041 178.554Z" fill="#3F3D56"/>
<path d="M386.04 251.757C390.411 251.757 393.954 248.214 393.954 243.843C393.954 239.472 390.411 235.929 386.04 235.929C381.67 235.929 378.127 239.472 378.127 243.843C378.127 248.214 381.67 251.757 386.04 251.757Z" fill="#FAE84E"/>
<path d="M253.98 252.251C252.317 252.251 250.691 251.758 249.308 250.834C247.925 249.91 246.848 248.597 246.211 247.061C245.575 245.524 245.408 243.834 245.733 242.203C246.057 240.571 246.858 239.073 248.034 237.897C249.21 236.721 250.708 235.921 252.339 235.596C253.97 235.272 255.661 235.438 257.197 236.075C258.734 236.711 260.047 237.789 260.971 239.171C261.895 240.554 262.388 242.18 262.388 243.843C262.385 246.072 261.499 248.209 259.922 249.786C258.346 251.362 256.209 252.249 253.98 252.251ZM253.98 236.424C252.512 236.424 251.078 236.859 249.858 237.674C248.638 238.489 247.687 239.648 247.125 241.004C246.564 242.359 246.417 243.851 246.703 245.29C246.989 246.73 247.696 248.052 248.733 249.089C249.771 250.127 251.093 250.833 252.532 251.12C253.971 251.406 255.463 251.259 256.819 250.697C258.174 250.136 259.333 249.185 260.148 247.965C260.964 246.745 261.399 245.31 261.399 243.843C261.397 241.876 260.614 239.99 259.223 238.599C257.832 237.208 255.947 236.426 253.98 236.424Z" fill="#3F3D56"/>
<path d="M351.912 189.436C350.249 189.436 348.624 188.943 347.241 188.019C345.858 187.095 344.781 185.781 344.144 184.245C343.508 182.709 343.341 181.018 343.666 179.387C343.99 177.756 344.791 176.258 345.967 175.082C347.143 173.906 348.641 173.105 350.272 172.78C351.903 172.456 353.594 172.623 355.13 173.259C356.667 173.895 357.98 174.973 358.904 176.356C359.828 177.739 360.321 179.364 360.321 181.027C360.318 183.257 359.432 185.394 357.855 186.97C356.279 188.547 354.142 189.433 351.912 189.436ZM351.912 173.608C350.445 173.608 349.011 174.043 347.791 174.858C346.571 175.674 345.62 176.832 345.058 178.188C344.497 179.544 344.35 181.036 344.636 182.475C344.922 183.914 345.629 185.236 346.666 186.273C347.704 187.311 349.026 188.018 350.465 188.304C351.904 188.59 353.396 188.443 354.752 187.882C356.107 187.32 357.266 186.369 358.081 185.149C358.896 183.929 359.332 182.495 359.332 181.027C359.329 179.06 358.547 177.174 357.156 175.784C355.765 174.393 353.879 173.61 351.912 173.608Z" fill="#3F3D56"/>
<path d="M121.918 169.157C119.962 169.157 118.049 169.737 116.423 170.824C114.796 171.911 113.528 173.456 112.779 175.263C112.031 177.071 111.835 179.06 112.216 180.979C112.598 182.898 113.54 184.66 114.924 186.044C116.307 187.427 118.07 188.369 119.989 188.751C121.907 189.133 123.896 188.937 125.704 188.188C127.512 187.439 129.057 186.172 130.144 184.545C131.23 182.918 131.811 181.005 131.811 179.049C131.803 176.428 130.758 173.916 128.905 172.063C127.051 170.209 124.54 169.164 121.918 169.157ZM121.918 172.124C122.505 172.124 123.079 172.298 123.567 172.625C124.055 172.951 124.436 173.414 124.66 173.956C124.885 174.499 124.944 175.095 124.829 175.671C124.715 176.247 124.432 176.775 124.017 177.191C123.602 177.606 123.073 177.888 122.497 178.003C121.922 178.117 121.325 178.058 120.783 177.834C120.24 177.609 119.777 177.229 119.451 176.741C119.125 176.253 118.951 175.679 118.951 175.092C118.953 174.306 119.267 173.552 119.823 172.997C120.379 172.441 121.132 172.127 121.918 172.124ZM121.918 186.411C120.746 186.406 119.593 186.114 118.558 185.562C117.524 185.01 116.64 184.215 115.983 183.244C116.031 181.265 119.94 180.176 121.918 180.176C123.897 180.176 127.806 181.265 127.854 183.244C127.196 184.214 126.312 185.009 125.278 185.561C124.244 186.113 123.091 186.405 121.918 186.411Z" fill="#3F3D56"/>
<path d="M156.047 34.1282C154.09 34.1282 152.178 34.7083 150.551 35.7953C148.924 36.8823 147.656 38.4272 146.907 40.2348C146.159 42.0424 145.963 44.0314 146.344 45.9503C146.726 47.8692 147.668 49.6318 149.052 51.0152C150.435 52.3987 152.198 53.3408 154.117 53.7225C156.036 54.1042 158.025 53.9083 159.832 53.1596C161.64 52.4109 163.185 51.143 164.272 49.5162C165.359 47.8894 165.939 45.9769 165.939 44.0204C165.931 41.3992 164.886 38.8875 163.033 37.034C161.179 35.1805 158.668 34.1358 156.047 34.1282ZM156.047 37.0958C156.634 37.0958 157.207 37.2699 157.695 37.596C158.183 37.9221 158.564 38.3856 158.788 38.9278C159.013 39.4701 159.072 40.0668 158.957 40.6425C158.843 41.2181 158.56 41.7469 158.145 42.162C157.73 42.577 157.201 42.8596 156.626 42.9741C156.05 43.0887 155.453 43.0299 154.911 42.8053C154.369 42.5806 153.905 42.2003 153.579 41.7122C153.253 41.2242 153.079 40.6504 153.079 40.0635C153.082 39.2772 153.395 38.5239 153.951 37.9679C154.507 37.412 155.26 37.0985 156.047 37.0958ZM156.047 51.3825C154.874 51.3771 153.721 51.0858 152.687 50.5339C151.652 49.9819 150.768 49.186 150.111 48.2151C150.159 46.2366 154.068 45.1475 156.047 45.1475C158.025 45.1475 161.934 46.2366 161.982 48.2151C161.324 49.1852 160.44 49.9806 159.406 50.5325C158.372 51.0844 157.219 51.3761 156.047 51.3825Z" fill="#3F3D56"/>
<path d="M342.515 0C340.558 0 338.646 0.580171 337.019 1.66714C335.392 2.75411 334.124 4.29906 333.376 6.10663C332.627 7.91419 332.431 9.90318 332.813 11.8221C333.194 13.741 334.136 15.5036 335.52 16.8871C336.903 18.2705 338.666 19.2127 340.585 19.5943C342.504 19.976 344.493 19.7801 346.3 19.0314C348.108 18.2827 349.653 17.0148 350.74 15.388C351.827 13.7613 352.407 11.8487 352.407 9.89221C352.399 7.27099 351.355 4.75933 349.501 2.90584C347.648 1.05235 345.136 0.00767259 342.515 0ZM342.515 2.96766C343.102 2.96766 343.675 3.14171 344.164 3.46781C344.652 3.7939 345.032 4.25738 345.257 4.79965C345.481 5.34192 345.54 5.93862 345.425 6.51429C345.311 7.08996 345.028 7.61875 344.613 8.03378C344.198 8.44882 343.669 8.73146 343.094 8.84597C342.518 8.96047 341.921 8.90171 341.379 8.67709C340.837 8.45248 340.373 8.0721 340.047 7.58407C339.721 7.09604 339.547 6.52227 339.547 5.93533C339.55 5.14906 339.863 4.39575 340.419 3.83977C340.975 3.28379 341.729 2.97029 342.515 2.96766ZM342.515 17.2543C341.342 17.249 340.189 16.9577 339.155 16.4057C338.121 15.8538 337.237 15.0578 336.579 14.0869C336.627 12.1084 340.536 11.0194 342.515 11.0194C344.493 11.0194 348.403 12.1084 348.45 14.0869C347.792 15.0571 346.908 15.8525 345.874 16.4043C344.84 16.9562 343.687 17.2479 342.515 17.2543Z" fill="#3F3D56"/>
<path d="M456.275 108.32C454.319 108.32 452.406 108.9 450.779 109.987C449.153 111.074 447.885 112.619 447.136 114.426C446.387 116.234 446.191 118.223 446.573 120.142C446.955 122.061 447.897 123.823 449.28 125.207C450.664 126.59 452.426 127.532 454.345 127.914C456.264 128.296 458.253 128.1 460.061 127.351C461.868 126.603 463.413 125.335 464.5 123.708C465.587 122.081 466.167 120.169 466.167 118.212C466.16 115.591 465.115 113.079 463.262 111.226C461.408 109.372 458.896 108.327 456.275 108.32ZM456.275 111.287C456.862 111.287 457.436 111.462 457.924 111.788C458.412 112.114 458.792 112.577 459.017 113.119C459.242 113.662 459.3 114.258 459.186 114.834C459.071 115.41 458.789 115.939 458.374 116.354C457.959 116.769 457.43 117.051 456.854 117.166C456.278 117.28 455.682 117.222 455.139 116.997C454.597 116.772 454.134 116.392 453.808 115.904C453.482 115.416 453.307 114.842 453.307 114.255C453.31 113.469 453.624 112.716 454.18 112.16C454.736 111.604 455.489 111.29 456.275 111.287ZM456.275 125.574C455.103 125.569 453.949 125.277 452.915 124.726C451.881 124.174 450.997 123.378 450.34 122.407C450.387 120.428 454.297 119.339 456.275 119.339C458.254 119.339 462.163 120.428 462.21 122.407C461.553 123.377 460.668 124.172 459.634 124.724C458.6 125.276 457.447 125.568 456.275 125.574Z" fill="#3F3D56"/>
<path d="M475.07 175.092C473.114 175.092 471.201 175.672 469.575 176.759C467.948 177.846 466.68 179.391 465.931 181.199C465.182 183.006 464.987 184.995 465.368 186.914C465.75 188.833 466.692 190.596 468.076 191.979C469.459 193.363 471.222 194.305 473.14 194.686C475.059 195.068 477.048 194.872 478.856 194.123C480.664 193.375 482.208 192.107 483.295 190.48C484.382 188.853 484.963 186.941 484.963 184.984C484.955 182.363 483.91 179.851 482.057 177.998C480.203 176.144 477.692 175.1 475.07 175.092ZM475.07 178.06C475.657 178.06 476.231 178.234 476.719 178.56C477.207 178.886 477.588 179.349 477.812 179.892C478.037 180.434 478.096 181.031 477.981 181.606C477.866 182.182 477.584 182.711 477.169 183.126C476.754 183.541 476.225 183.823 475.649 183.938C475.074 184.053 474.477 183.994 473.935 183.769C473.392 183.545 472.929 183.164 472.603 182.676C472.277 182.188 472.103 181.614 472.103 181.027C472.105 180.241 472.419 179.488 472.975 178.932C473.531 178.376 474.284 178.062 475.07 178.06ZM475.07 192.346C473.898 192.341 472.745 192.05 471.71 191.498C470.676 190.946 469.792 190.15 469.135 189.179C469.183 187.2 473.092 186.111 475.07 186.111C477.049 186.111 480.958 187.2 481.006 189.179C480.348 190.149 479.464 190.945 478.43 191.496C477.395 192.048 476.243 192.34 475.07 192.346Z" fill="#3F3D56"/>
<path d="M254.612 174.927L253.598 178.99C254.747 179.277 258.288 180.445 258.862 178.146C259.46 175.748 255.761 175.214 254.612 174.927Z" fill="#FAE84E"/>
<path d="M253.087 181.041L251.969 185.521C253.349 185.864 257.604 187.23 258.233 184.703C258.89 182.067 254.467 181.385 253.087 181.041Z" fill="#FAE84E"/>
<path d="M259.193 162.831C255.634 161.944 251.892 162.132 248.44 163.371C244.988 164.611 241.981 166.846 239.799 169.794C237.618 172.742 236.359 176.271 236.183 179.935C236.007 183.598 236.921 187.232 238.81 190.375C240.699 193.519 243.478 196.032 246.795 197.597C250.112 199.162 253.819 199.708 257.447 199.166C261.074 198.624 264.459 197.018 267.174 194.552C269.889 192.086 271.812 188.871 272.699 185.312C273.289 182.949 273.407 180.493 273.048 178.084C272.688 175.676 271.857 173.361 270.603 171.274C269.349 169.186 267.695 167.366 265.738 165.917C263.78 164.469 261.556 163.42 259.193 162.831ZM262.883 178.183C262.616 179.989 261.615 180.864 260.285 181.171C262.11 182.121 263.04 183.579 262.154 186.106C261.056 189.245 258.446 189.51 254.977 188.853L254.134 192.228L252.099 191.721L252.93 188.391C252.388 188.257 251.847 188.116 251.308 187.97L250.474 191.316L248.441 190.809L249.284 187.427C248.808 187.306 248.326 187.176 247.833 187.053L245.185 186.392L246.195 184.063C246.195 184.063 247.694 184.462 247.674 184.433C247.767 184.462 247.865 184.473 247.962 184.465C248.06 184.457 248.154 184.43 248.241 184.385C248.328 184.34 248.405 184.278 248.467 184.203C248.53 184.128 248.577 184.042 248.606 183.949L249.937 178.613C250.012 178.632 250.085 178.65 250.152 178.667C250.083 178.64 250.013 178.617 249.941 178.599L250.89 174.79C250.918 174.508 250.835 174.226 250.658 174.005C250.48 173.784 250.223 173.641 249.942 173.607C249.974 173.585 248.464 173.239 248.464 173.239L249.006 171.066L251.813 171.767L251.81 171.777C252.232 171.882 252.667 171.981 253.11 172.082L253.944 168.74L255.978 169.247L255.161 172.524C255.707 172.648 256.256 172.774 256.791 172.907L257.603 169.652L259.638 170.159L258.804 173.503C261.373 174.387 263.252 175.714 262.883 178.183Z" fill="#FAE84E"/>
<path d="M75.1807 362.695C73.7733 375.494 -0.111833 374.419 0.000127113 362.694C1.40748 349.896 75.2926 350.971 75.1807 362.695Z" fill="#E6E6E6"/>
<path d="M51.3178 330.477L54.3132 336.966L59.8039 336.467L63.2983 324.986L57.8071 321.991L51.3178 330.477Z" fill="#FFB8B8"/>
<path d="M32.4672 345.423L32.349 349.945L40.835 350.444V344.953L32.4672 345.423Z" fill="#FFB8B8"/>
<path d="M35.3439 263.087L37.3406 303.022L32.349 346.45L47.3243 348.447L56.809 293.537L59.8039 256.098L35.3439 263.087Z" fill="#2F2E41"/>
<path d="M11.8825 248.611C11.8825 248.611 5.89231 288.046 18.3719 301.025C30.8514 314.004 47.8237 336.966 47.8237 336.966L59.8041 321.991L29.3539 289.544L35.3441 267.58L59.8041 256.099L55.8106 228.643L19.8694 228.144L11.8825 248.611Z" fill="#2F2E41"/>
<path d="M41.3343 157.26C47.3995 157.26 52.3163 152.344 52.3163 146.278C52.3163 140.213 47.3995 135.296 41.3343 135.296C35.2691 135.296 30.3522 140.213 30.3522 146.278C30.3522 152.344 35.2691 157.26 41.3343 157.26Z" fill="#FFB8B8"/>
<path d="M31.8498 148.774C31.8498 148.774 31.3506 164.249 28.8547 166.246C26.3588 168.242 37.84 176.728 37.84 176.728L45.3277 164.748V153.766L31.8498 148.774Z" fill="#FFB8B8"/>
<path d="M36.8416 169.74L30.7811 160.589L27.3569 165.247L22.3653 179.225L26.3588 233.635L49.8202 234.134L52.8155 171.737L45.3276 162.752L36.8416 169.74Z" fill="#D0CDE1"/>
<path d="M62.2999 173.234L66.2934 172.735C66.2934 172.735 67.2918 173.234 67.791 176.728C68.2902 180.223 74.2804 211.172 74.2804 211.172L66.2934 249.11L57.3081 237.129L62.7991 216.164L57.3081 195.198L62.2999 173.234Z" fill="#2F2E41"/>
<path d="M11.3835 172.735H8.38809L0.900681 213.169L7.88903 244.618L14.8774 233.136L12.8806 220.657L13.8793 209.675L17.3737 203.185L11.3835 172.735Z" fill="#2F2E41"/>
<path d="M55.8106 334.969C55.8106 334.969 52.8155 333.971 52.8155 335.968C52.8155 337.964 54.8122 343.955 54.8122 343.955C54.8122 343.955 51.8171 362.424 56.3098 361.426C60.8024 360.428 64.2967 351.942 64.7959 349.446C65.2951 346.95 67.791 333.971 67.791 333.971C67.791 333.971 71.7845 324.487 69.2885 323.987C66.7926 323.488 59.8041 321.491 59.8041 321.491C59.8041 321.491 63.7975 333.971 55.8106 334.969Z" fill="#2F2E41"/>
<path d="M41.3343 350.444C41.3343 350.444 33.3473 345.452 31.8498 349.446C30.8566 352.358 30.187 355.372 29.8531 358.431C29.8531 358.431 27.8563 364.92 35.8433 363.922C43.8302 362.924 42.8318 362.924 43.331 359.929C43.8302 356.933 41.3343 350.444 41.3343 350.444Z" fill="#2F2E41"/>
<path d="M34.8449 146.278L36.8416 145.779C36.8416 145.779 38.3392 137.293 41.8335 138.291C45.3278 139.29 54.313 140.288 54.313 136.295C54.313 132.301 45.8269 128.807 40.8351 129.306C35.8433 129.805 27.3572 131.303 27.8564 138.79C28.3555 146.278 31.5766 153.562 31.5766 153.562L31.8368 149.123L34.8449 146.278Z" fill="#2F2E41"/>
<path d="M45.3276 175.73L36.8416 169.74L45.3276 162.752L48.274 166.287L45.3276 175.73Z" fill="#D0CDE1"/>
<path d="M29.3536 175.231L36.8416 169.74L30.8513 160.755L27.3569 165.247L29.3536 175.231Z" fill="#D0CDE1"/>
<path d="M65.7942 172.735L49.8204 166.245L46.0765 163.5L34.8449 213.169L27.3572 190.705L29.6035 162.002L8.8874 172.735L15.876 206.679L16.8744 219.658L13.8792 230.141C13.8792 230.141 3.3964 237.629 6.89068 245.616C10.385 253.603 14.3784 254.102 14.3784 254.102C14.3784 254.102 31.3506 238.128 32.349 234.134C33.3474 230.141 34.8449 223.152 34.8449 223.152C34.8449 223.152 43.331 255.1 53.3147 254.601C63.2983 254.102 63.2983 243.619 63.2983 243.619L60.8024 232.637L56.809 221.156L58.8057 202.187L65.7942 172.735Z" fill="#2F2E41"/>
</g>
<defs>
<clipPath id="clip0_10_442">
<rect width="484.963" height="371.895" fill="white"/>
</clipPath>
</defs>
</svg>

);

const CustomDiv = styled.div`
    background-color: ${(props) => props.theme.palette.primary.brightest};
    height: 140vh;
    width: 100%;
    display: flex;
    align-items: center;

`;

const isFirstWednesday = (day) => {
  // console.log(day);
  // console.log(day instanceof Date);
  // console.log(JSON.stringify(day));
    let date = new Date(day);
    return date.getDay() === 3 && date.getDate() <= 7;
}

const MeetupDay = (props) => {
  const {day, outsideCurrentMonth, ...other } = props;

  const isSelected = !props.outsideCurrentMonth && isFirstWednesday(day);

  return (
    <Badge
      key={props.day.toString()}
      variant='dot'
      color='secondary'
      invisible={!isSelected}
      overlap='circular'
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}



/*

The goal of the calendar is to be able to click on dates and have a popup that shows our meetup details. 
*** 1. Perhaps the modal is actually seperate and is just passed the dates from a click event?
3. Also need to change colors

*/

const CalendarPage = () => {
  const [openMeetupDetails, setOpenMeetupDetails] = useState(false);

  const closeMeetupDetails = () => {
    setOpenMeetupDetails(false);
  }

  const checkToOpenDetails = (value, selectionState) => {
    console.log("Test");
    console.log(value);
    console.log(isFirstWednesday(value));
    isFirstWednesday(value) ? setOpenMeetupDetails(true) : null;
  }

  return (
    <CustomDiv>
      <Container>
        <MeetupDetails open={openMeetupDetails} onClose={closeMeetupDetails} />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Box sx={{display: "flex", justifyContent: "center"}}>
              <Typography variant="h3">Calendar</Typography>
            </Box>
            <Box>
              <Paper>
                <DateCalendar 
                  slots={{
                    day: MeetupDay
                  }}
                  onChange={checkToOpenDetails}
                />
              </Paper>
            </Box>
            <Box>
              <Typography variant="h4" marginY={2}>Trade</Typography>
              <Typography variant="body1">Looking to buy bitcoin? Sell bitcoin? Buy goods and services with bitcoin? Come and meet up with us! Lets change our world one transaction at a time. </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography variant="h4" marginTop={6} marginBottom={2}>Education</Typography>
              <Typography variant="body1" marginBottom={2}>Curious? Skeptical? Can’t get enough? We have monthly meetups where we teach people what BTC is, why it matters, and how it works. Let us show you how BTW can help YOU!</Typography>
            </Box>
            <Box>
            <Typography variant="h4" marginBottom={2}>Socialize</Typography>
              <Typography variant="body1">Just feel like hanging out with people that understand the the value of financial empowerment and freedom? We love to get together for coffee, a drink, or a bite and talk about bitcoin and everything else.</Typography>
            </Box>
            <Box>
              {SuiteAndBTCGraphic}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </CustomDiv>
  )
}

export default CalendarPage