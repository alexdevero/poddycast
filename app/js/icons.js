'use strict'

const s_PlayIcon =
`
<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5v14l11-7z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>
`

const s_HeartFilled =
`
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
`

const s_Favorite =
`
<svg class="set-favorite" onclick="unsubscribeListElement(this)" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg>
`

const s_Delete =
`
<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
<path d="M0 0h24v24H0z" fill="none"></path>
`

const s_DeleteIcon =
`
<svg class="delete-icon" onclick="event.stopPropagation(); deleteEntryWithIcon(this)" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>
`

const s_AddEpisodeIcon =
`
<svg onclick="event.stopPropagation(); addToEpisodes(this)" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/>
</svg>
`

const s_MoreOption =
`
<path d="M0 0h24v24H0z" fill="none"/>
<path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
`

const s_MoreOptionIcon =
`
<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
</svg>
`

const s_RemoveIcon =
`
<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
</svg>
`

const s_CheckBox =
`
<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
</svg>
`

const s_CheckBoxOutline =
`
<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>
`

const s_GridView =
`
<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>
`

const s_ListView =
`
<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>
`

const s_InfoIcon =
`
<svg fill="#000000" style="isolation:isolate" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs><clipPath id="iconInfo"><path d="M0 0h24v24.001H0z"/></clipPath></defs>
    <g clip-path="url(#iconInfo)"><path d="M11.472.011a11.99 11.99 0 0 1 5.867 1.241c2.782 1.373 4.988 3.869 5.996 6.804.858 2.447.885 5.175.084 7.641a12.003 12.003 0 0 1-3.601 5.405 11.922 11.922 0 0 1-5.717 2.714 12.01 12.01 0 0 1-7.438-1.065 12 12 0 0 1-3.817-2.992 11.948 11.948 0 0 1-2.635-5.507 12.104 12.104 0 0 1 .198-5.371 11.961 11.961 0 0 1 2.563-4.784A12.013 12.013 0 0 1 7.663.808a12.04 12.04 0 0 1 3.809-.797zm.326 4.243a1.758 1.758 0 0 0-.843 3.159c.639.488 1.609.448 2.204-.092.531-.454.74-1.242.501-1.898-.248-.762-1.068-1.278-1.862-1.169zM8.572 9.693c-.004.396.001.791 0 1.187a.25.25 0 0 0 .26.262c.485.005.969 0 1.454.001v6.002l-1.448.001a.25.25 0 0 0-.266.262c-.005.342.005.683-.003 1.025.006.119-.022.264.077.354.078.082.199.067.302.073 2.054-.002 4.109 0 6.164-.001.136.016.297-.06.309-.21.02-.413.004-.827.006-1.239a.249.249 0 0 0-.26-.264c-.485.001-.97-.004-1.454.001.003-2.465.001-4.931.001-7.396.024-.159-.088-.336-.262-.321H8.835a.25.25 0 0 0-.263.263z"/></g>
</svg>
`

const s_BrokenLinkIcon = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 512 512.026" width="512pt" height="512.026pt"><defs><clipPath id="_clipPath_zXVuJA49J729qbjhjXv8sZvlfcBdjb8p"><rect width="512" height="512.026"/></clipPath></defs><g clip-path="url(#_clipPath_zXVuJA49J729qbjhjXv8sZvlfcBdjb8p)"><g><path d=" M 322.675 32.343 C 350.409 4.244 394.046 -7.147 431.853 4.561 C 465.368 13.683 493.199 40.148 505.224 72.565 C 513.566 95.835 514.42 121.788 506.59 145.302 C 501.053 164.449 488.979 181.06 474.661 194.647 C 435.634 233.552 396.729 272.627 357.58 311.435 C 329.725 338.095 287.429 347.779 250.573 336.876 C 247.597 335.778 244.597 334.729 241.621 333.656 C 220.181 325.728 201.545 310.459 189.13 291.312 C 185.495 285.775 181.642 280.116 180.471 273.457 C 194.496 261.724 205.277 243.43 225.108 241.357 C 229.059 262.188 245.182 279.53 265.306 285.848 C 279.087 289.458 293.917 288.531 306.894 282.457 C 314.943 278.725 321.358 272.481 327.651 266.383 C 365.288 228.6 403.193 191.061 440.781 153.229 C 457.294 137.838 463.319 112.422 455.196 91.323 C 446.781 67.004 420.511 50.613 394.924 53.808 C 379.972 55.198 366.215 62.906 356.287 74.029 C 327.724 102.836 298.625 131.13 270.355 160.23 C 246.743 152.644 221.425 151.863 197.374 157.937 C 238.743 115.69 281.063 74.346 322.675 32.343 Z " fill="rgb(0,0,0)"/><path d=" M 189.471 36.002 C 194.838 32.611 203.789 33.733 204.424 41.246 C 205.058 60.784 204.546 80.395 204.692 99.957 C 205.18 104.177 203.253 107.958 200.57 111.007 C 197.691 110.958 194.838 110.934 191.984 110.909 C 190.276 108.348 187.642 105.982 187.788 102.64 C 187.349 84.688 187.886 66.711 187.52 48.759 C 187.252 44.393 188.203 40.124 189.471 36.002 Z " fill="rgb(0,0,0)"/><path d=" M 79.025 79.127 C 82.098 75.663 88.391 75.834 91.343 79.395 C 108.759 96.933 126.492 114.178 143.688 131.935 C 149.42 138.984 138.809 149.473 131.833 143.789 C 114.1 126.618 96.831 108.909 79.293 91.518 C 75.61 88.566 75.537 82.273 79.025 79.127 Z " fill="rgb(0,0,0)"/><path d=" M 154.396 200.745 C 173.665 182.182 200.057 171.938 226.645 170.767 C 260.452 169.62 294.405 184.768 315.772 211.013 C 322.431 218.965 327.407 228.112 332.432 237.137 C 318.724 249.87 307.113 268.7 286.746 270.505 C 282.892 249.797 266.623 231.893 246.256 226.405 C 223.4 219.185 198.301 228.893 183.325 246.87 C 146.078 284.335 108.49 321.46 71.268 358.975 C 54.877 374.195 48.779 399.416 56.731 420.393 C 62.585 437.638 77.488 451.029 94.685 456.518 C 107.783 459.908 121.589 459.079 134.199 454.127 C 147.712 448.127 157.25 436.492 167.543 426.369 C 192.545 401.758 217.01 376.537 242.158 352.12 C 265.647 359.243 290.673 360.17 314.528 354.243 C 279.087 390.977 242.304 426.418 206.472 462.786 C 198.057 470.592 190.593 479.397 181.69 486.666 C 153.64 510.326 113.1 518.302 78.22 506.887 C 53.121 499.569 31.241 482.422 17.265 460.42 C -1.005 431.833 -5.151 394.855 6.63 362.999 C 11.947 347.754 21.021 334.046 32.339 322.582 C 73.073 282.043 113.613 241.284 154.396 200.745 Z " fill="rgb(0,0,0)"/><path d=" M 35.681 189.451 C 44.584 186.5 54.023 188.061 63.195 187.744 C 76.952 188.012 90.757 187.183 104.514 188.134 C 110.71 188.89 110.881 195.671 110.856 200.525 C 105.051 207.086 95.465 204.208 87.782 204.842 C 70.439 204.013 52.779 206.55 35.656 203.306 C 33.339 198.842 33.437 193.915 35.681 189.451 Z " fill="rgb(0,0,0)"/><path d=" M 405.632 308.361 C 418.048 305.776 431.048 307.874 443.683 307.215 C 452.733 307.386 461.807 306.752 470.832 307.556 C 479.637 308.361 479.881 323.533 470.758 323.972 C 450.318 324.533 429.829 324.314 409.388 324.094 C 401.144 324.558 397.656 311.435 405.632 308.361 Z " fill="rgb(0,0,0)"/><path d=" M 369.288 369.39 C 372.313 365.78 378.825 365.877 381.655 369.707 C 399.095 387.22 416.828 404.49 434 422.271 C 439.732 429.369 428.804 439.956 421.901 433.906 C 404.217 416.686 386.924 399.026 369.41 381.61 C 365.629 378.732 365.776 372.414 369.288 369.39 Z " fill="rgb(0,0,0)"/><path d=" M 307.65 407.27 C 308.479 398.806 322.797 399.05 323.7 407.319 C 324.895 420.247 323.846 433.297 324.188 446.297 C 323.773 456.274 325.529 466.543 322.553 476.299 C 318.114 478.08 313.382 478.3 309.016 476.202 C 305.845 467.348 307.479 457.859 307.138 448.688 C 307.479 434.882 306.43 421.003 307.65 407.27 Z " fill="rgb(0,0,0)"/></g></g></svg>
`
