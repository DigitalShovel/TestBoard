let BuildArray = [0];

function addStationTables(quantity) {
  for (var i = 1; i < quantity + 1; i++) {
    $("#table_container_body").append(`
    <div class="table__container">
    <table class="table table__2-col">
        <tbody class="table__body">
            <tr class="table__row table__row--add-border">
                <th class="table__heading">Station #${i}</th>
                <th class="table__heading"></th>
                <th class="table__heading table__progress">
                    <span id="PCT${i}" x="25" y="20" class="table__progress-number">0%</span>
                    <svg width="32" height="32">
                        <circle r="${radius}" cx="16" cy="16" />
                        <circle id="PC${i}" r="${radius}" cx="16" cy="16" />
                    </svg>
                </th>
            </tr>
            <tr class="table__row">
                <td class="table__subheading">Test Quantity</td>
                <td class="table__subheading">
                    <svg id="Logo${i}" class="logo-loading" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 51.39 78.37">
                        <polygon fill="#2A7DE1"
                            points="38.54 0 12.85 0 0 0 0 25.7 12.85 25.7 12.85 12.85 38.54 12.85 38.54 25.7 51.39 25.7 51.39 0 38.54 0" />
                        <rect fill="#2A7DE1" x="19.27" y="19.27" width="12.85" height="25.7" rx="4" />
                        <polygon fill="#2A7DE1"
                            points="38.54 47.17 25.52 60.2 12.85 47.53 12.85 32.12 0 32.12 0 52.91 0.06 52.91 25.52 78.37 25.52 78.37 25.52 78.37 51.34 52.55 51.39 52.55 51.39 32.12 38.54 32.12 38.54 47.17" />
                    </svg>
                </td>
                <td id="test-quantity-${i}" class="table__subheading">
                    Loading...
                </td>
            </tr>
            <tr class="table__row">
                <td>
                    Channel #1
                </td>
                <td>
                    <div id="S${i}F1" class="indicator__light indicator__light-table"></div>
                </td>
                <td>
                    <button id="S${i}C1" onclick="showModal('S${i}P1')" class="btn btn--unstyled modal__btn-show">
                        <svg class="station__icon station__icon--charts" width="22" height="22" viewBox="0 0 22 22"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_118_644)">
                                <rect width="22" height="22" rx="3" fill="#2B3F55" />
                                <rect width="1.90909" height="9.54545" rx="0.954545"
                                    transform="matrix(-1 0 0 1 16.7273 7.18182)" fill="#88A5C3" />
                                <rect width="1.90909" height="11.4545" rx="0.954545"
                                    transform="matrix(-1 0 0 1 13.5454 5.27274)" fill="#4D7299" />
                                <rect width="1.90909" height="7" rx="0.954545"
                                    transform="matrix(-1 0 0 1 10.3636 9.72726)" fill="#88A5C3" />
                                <rect width="1.90909" height="8.27273" rx="0.954545"
                                    transform="matrix(-1 0 0 1 7.18176 8.45456)" fill="#4D7299" />
                            </g>
                            <defs>
                                <filter id="filter0_i_118_644" x="0" y="0" width="22" height="22"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="1" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_118_644" />
                                </filter>
                            </defs>
                        </svg>
                    </button>
                    <div id="S${i}P1" class="modal">
                        <div class="indicator">
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C1R1" class="indicator__light"></div>
                                    Relay 1
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C1RI1" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C1RN1">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C1R2" class="indicator__light"></div>
                                    Relay 2
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C1RI2" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C1RN2">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C1R3" class="indicator__light"></div>
                                    Relay 3
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C1RI3" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C1RN3">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C1R4" class="indicator__light"></div>
                                    Relay 4
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C1RI4" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C1RN4">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C1R5" class="indicator__light"></div>
                                    Relay 5
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C1RI5" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C1RN5">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C1R6" class="indicator__light"></div>
                                    Relay 6
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C1RI6" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C1RN6">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C1R7" class="indicator__light"></div>
                                    Relay 7
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C1RI7" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C1RN7">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C1R8" class="indicator__light"></div>
                                    Relay 8
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C1RI8" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C1RN8">0000</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal__grid modal__grid--ct">
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 1</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C1CI1" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C1CN1">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C1C1" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 2</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C1CI2" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C1CN2">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C1C2" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 3</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C1CI3" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C1CN3">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C1C3" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 4</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C1CI4" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C1CN4">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C1C4" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 5</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C1CI5" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C1CN5">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C1C5" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 6</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C1CI6" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C1CN6">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C1C6" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 7</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C1CI7" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C1CN7">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C1C7" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 8</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C1CI8" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C1CN8">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C1C8" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                        </div>
                        <button id="S${i}B1" onclick="showModal('S${i}P1')" class="modal__btn-hide btn">
                            <svg width="37" height="36" viewBox="0 0 37 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4" stroke-width="3.27273"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4" stroke-width="3.27273"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
            <tr class="table__row">
                <td>
                    Channel #2
                </td>
                <td>
                    <div id="S${i}F2" class="indicator__light indicator__light-table"></div>
                </td>
                <td>
                    <button id="S${i}C2" onclick="showModal('S${i}P2')" class="btn btn--unstyled modal__btn-show">
                        <svg class="station__icon station__icon--charts" width="22" height="22" viewBox="0 0 22 22"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_118_644)">
                                <rect width="22" height="22" rx="3" fill="#2B3F55" />
                                <rect width="1.90909" height="9.54545" rx="0.954545"
                                    transform="matrix(-1 0 0 1 16.7273 7.18182)" fill="#88A5C3" />
                                <rect width="1.90909" height="11.4545" rx="0.954545"
                                    transform="matrix(-1 0 0 1 13.5454 5.27274)" fill="#4D7299" />
                                <rect width="1.90909" height="7" rx="0.954545"
                                    transform="matrix(-1 0 0 1 10.3636 9.72726)" fill="#88A5C3" />
                                <rect width="1.90909" height="8.27273" rx="0.954545"
                                    transform="matrix(-1 0 0 1 7.18176 8.45456)" fill="#4D7299" />
                            </g>
                            <defs>
                                <filter id="filter0_i_118_644" x="0" y="0" width="22" height="22"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="1" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_118_644" />
                                </filter>
                            </defs>
                        </svg>
                    </button>
                    <div id="S${i}P2" class="modal">
                        <div class="indicator">
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C2R1" class="indicator__light"></div>
                                    Relay 1
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C2RI1" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C2RN1">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C2R2" class="indicator__light"></div>
                                    Relay 2
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C2RI2" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C2RN2">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C2R3" class="indicator__light"></div>
                                    Relay 3
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C2RI3" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C2RN3">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C2R4" class="indicator__light"></div>
                                    Relay 4
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C2RI4" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C2RN4">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C2R5" class="indicator__light"></div>
                                    Relay 5
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C2RI5" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C2RN5">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C2R6" class="indicator__light"></div>
                                    Relay 6
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C2RI6" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C2RN6">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C2R7" class="indicator__light"></div>
                                    Relay 7
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C2RI7" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C2RN7">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C2R8" class="indicator__light"></div>
                                    Relay 8
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C2RI8" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C2RN8">0000</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal__grid modal__grid--ct">
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 1</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C2CI1" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C2CN1">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C2C1" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 2</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C2CI2" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C2CN2">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C2C2" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 3</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C2CI3" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C2CN3">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C2C3" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 4</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C2CI4" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C2CN4">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C2C4" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 5</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C2CI5" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C2CN5">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C2C5" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 6</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C2CI6" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C2CN6">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C2C6" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 7</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C2CI7" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C2CN7">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C2C7" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 8</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C2CI8" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C2CN8">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C2C8" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                        </div>
                        <button id="S${i}B2" onclick="showModal('S${i}P2')" class="modal__btn-hide btn">
                            <svg width="37" height="36" viewBox="0 0 37 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4" stroke-width="3.27273"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4" stroke-width="3.27273"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
            <tr class="table__row">
                <td>
                    Channel #3
                </td>
                <td>
                    <div id="S${i}F3" class="indicator__light indicator__light-table"></div>
                </td>
                <td>
                    <button id="S${i}C3" onclick="showModal('S${i}P3')" class="btn btn--unstyled modal__btn-show">
                        <svg class="station__icon station__icon--charts" width="22" height="22" viewBox="0 0 22 22"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_118_644)">
                                <rect width="22" height="22" rx="3" fill="#2B3F55" />
                                <rect width="1.90909" height="9.54545" rx="0.954545"
                                    transform="matrix(-1 0 0 1 16.7273 7.18182)" fill="#88A5C3" />
                                <rect width="1.90909" height="11.4545" rx="0.954545"
                                    transform="matrix(-1 0 0 1 13.5454 5.27274)" fill="#4D7299" />
                                <rect width="1.90909" height="7" rx="0.954545"
                                    transform="matrix(-1 0 0 1 10.3636 9.72726)" fill="#88A5C3" />
                                <rect width="1.90909" height="8.27273" rx="0.954545"
                                    transform="matrix(-1 0 0 1 7.18176 8.45456)" fill="#4D7299" />
                            </g>
                            <defs>
                                <filter id="filter0_i_118_644" x="0" y="0" width="22" height="22"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="1" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_118_644" />
                                </filter>
                            </defs>
                        </svg>
                    </button>
                    <div id="S${i}P3" class="modal">
                        <div class="indicator">
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C3R1" class="indicator__light"></div>
                                    Relay 1
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C3RI1" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C3RN1">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C3R2" class="indicator__light"></div>
                                    Relay 2
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C3RI2" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C3RN2">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C3R3" class="indicator__light"></div>
                                    Relay 3
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C3RI3" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C3RN3">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C3R4" class="indicator__light"></div>
                                    Relay 4
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C3RI4" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C3RN4">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C3R5" class="indicator__light"></div>
                                    Relay 5
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C3RI5" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C3RN5">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C3R6" class="indicator__light"></div>
                                    Relay 6
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C3RI6" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C3RN6">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C3R7" class="indicator__light"></div>
                                    Relay 7
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C3RI7" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C3RN7">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C3R8" class="indicator__light"></div>
                                    Relay 8
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C3RI8" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C3RN8">0000</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal__grid modal__grid--ct">
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 1</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C3CI1" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C3CN1">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C3C1" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 2</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C3CI2" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C3CN2">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C3C2" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 3</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C3CI3" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C3CN3">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C3C3" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 4</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C3CI4" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C3CN4">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C3C4" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 5</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C3CI5" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C3CN5">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C3C5" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 6</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C3CI6" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C3CN6">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C3C6" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 7</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C3CI7" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C3CN7">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C3C7" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 8</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C3CI8" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C3CN8">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C3C8" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                        </div>
                        <button id="S${i}B3" onclick="showModal('S${i}P3')" class="modal__btn-hide btn">
                            <svg width="37" height="36" viewBox="0 0 37 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4" stroke-width="3.27273"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4" stroke-width="3.27273"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
            <tr class="table__row">
                <td>
                    Channel #4
                </td>
                <td>
                    <div id="S${i}F4" class="indicator__light indicator__light-table"></div>
                </td>
                <td>
                    <button id="S${i}C4" onclick="showModal('S${i}P4')" class="btn btn--unstyled modal__btn-show">
                        <svg class="station__icon station__icon--charts" width="22" height="22" viewBox="0 0 22 22"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_118_644)">
                                <rect width="22" height="22" rx="3" fill="#2B3F55" />
                                <rect width="1.90909" height="9.54545" rx="0.954545"
                                    transform="matrix(-1 0 0 1 16.7273 7.18182)" fill="#88A5C3" />
                                <rect width="1.90909" height="11.4545" rx="0.954545"
                                    transform="matrix(-1 0 0 1 13.5454 5.27274)" fill="#4D7299" />
                                <rect width="1.90909" height="7" rx="0.954545"
                                    transform="matrix(-1 0 0 1 10.3636 9.72726)" fill="#88A5C3" />
                                <rect width="1.90909" height="8.27273" rx="0.954545"
                                    transform="matrix(-1 0 0 1 7.18176 8.45456)" fill="#4D7299" />
                            </g>
                            <defs>
                                <filter id="filter0_i_118_644" x="0" y="0" width="22" height="22"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="1" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_118_644" />
                                </filter>
                            </defs>
                        </svg>
                    </button>
                    <div id="S${i}P4" class="modal">
                        <div class="indicator">
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C4R1" class="indicator__light"></div>
                                    Relay 1
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C4RI1" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C4RN1">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C4R2" class="indicator__light"></div>
                                    Relay 2
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C4RI2" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C4RN2">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C4R3" class="indicator__light"></div>
                                    Relay 3
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C4RI3" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C4RN3">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C4R4" class="indicator__light"></div>
                                    Relay 4
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C4RI4" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C4RN4">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C4R5" class="indicator__light"></div>
                                    Relay 5
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C4RI5" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C4RN5">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C4R6" class="indicator__light"></div>
                                    Relay 6
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C4RI6" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C4RN6">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C4R7" class="indicator__light"></div>
                                    Relay 7
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C4RI7" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C4RN7">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C4R8" class="indicator__light"></div>
                                    Relay 8
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C4RI8" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C4RN8">0000</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal__grid modal__grid--ct">
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 1</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C4CI1" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C4CN1">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C4C1" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 2</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C4CI2" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C4CN2">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C4C2" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 3</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C4CI3" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C4CN3">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C4C3" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 4</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C4CI4" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C4CN4">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C4C4" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 5</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C4CI5" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C4CN5">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C4C5" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 6</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C4CI6" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C4CN6">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C4C6" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 7</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C4CI7" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C4CN7">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C4C7" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 8</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C4CI8" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C4CN8">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C4C8" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                        </div>
                        <button id="S${i}B4" onclick="showModal('S${i}P4')" class="modal__btn-hide btn">
                            <svg width="37" height="36" viewBox="0 0 37 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4" stroke-width="3.27273"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4" stroke-width="3.27273"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
            <tr class="table__row">
                <td>
                    Channel #5
                </td>
                <td>
                    <div id="S${i}F5" class="indicator__light indicator__light-table"></div>
                </td>
                <td>
                    <button id="S${i}C5" onclick="showModal('S${i}P5')" class="btn btn--unstyled modal__btn-show">
                        <svg class="station__icon station__icon--charts" width="22" height="22" viewBox="0 0 22 22"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_118_644)">
                                <rect width="22" height="22" rx="3" fill="#2B3F55" />
                                <rect width="1.90909" height="9.54545" rx="0.954545"
                                    transform="matrix(-1 0 0 1 16.7273 7.18182)" fill="#88A5C3" />
                                <rect width="1.90909" height="11.4545" rx="0.954545"
                                    transform="matrix(-1 0 0 1 13.5454 5.27274)" fill="#4D7299" />
                                <rect width="1.90909" height="7" rx="0.954545"
                                    transform="matrix(-1 0 0 1 10.3636 9.72726)" fill="#88A5C3" />
                                <rect width="1.90909" height="8.27273" rx="0.954545"
                                    transform="matrix(-1 0 0 1 7.18176 8.45456)" fill="#4D7299" />
                            </g>
                            <defs>
                                <filter id="filter0_i_118_644" x="0" y="0" width="22" height="22"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="1" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_118_644" />
                                </filter>
                            </defs>
                        </svg>
                    </button>
                    <div id="S${i}P5" class="modal">
                        <div class="indicator">
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C5R1" class="indicator__light"></div>
                                    Relay 1
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C5RI1" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C5RN1">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C5R2" class="indicator__light"></div>
                                    Relay 2
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C5RI2" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C5RN2">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C5R3" class="indicator__light"></div>
                                    Relay 3
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C5RI3" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C5RN3">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C5R4" class="indicator__light"></div>
                                    Relay 4
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C5RI4" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C5RN4">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C5R5" class="indicator__light"></div>
                                    Relay 5
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C5RI5" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C5RN5">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C5R6" class="indicator__light"></div>
                                    Relay 6
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C5RI6" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C5RN6">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C5R7" class="indicator__light"></div>
                                    Relay 7
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C5RI7" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C5RN7">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C5R8" class="indicator__light"></div>
                                    Relay 8
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C5RI8" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C5RN8">0000</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal__grid modal__grid--ct">
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 1</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C5CI1" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C5CN1">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C5C1" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 2</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C5CI2" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C5CN2">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C5C2" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 3</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C5CI3" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C5CN3">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C5C3" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 4</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C5CI4" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C5CN4">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C5C4" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 5</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C5CI5" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C5CN5">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C5C5" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 6</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C5CI6" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C5CN6">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C5C6" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 7</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C5CI7" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C5CN7">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C5C7" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 8</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C5CI8" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C5CN8">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C5C8" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                        </div>
                        <button id="S${i}B5" onclick="showModal('S${i}P5')" class="modal__btn-hide btn">
                            <svg width="37" height="36" viewBox="0 0 37 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4" stroke-width="3.27273"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4" stroke-width="3.27273"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
            <tr class="table__row">
                <td>
                    Channel #6
                </td>
                <td>
                    <div id="S${i}F6" class="indicator__light indicator__light-table"></div>
                </td>
                <td>
                    <button id="S${i}C6" onclick="showModal('S${i}P6')" class="btn btn--unstyled modal__btn-show">
                        <svg class="station__icon station__icon--charts" width="22" height="22" viewBox="0 0 22 22"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_118_644)">
                                <rect width="22" height="22" rx="3" fill="#2B3F55" />
                                <rect width="1.90909" height="9.54545" rx="0.954545"
                                    transform="matrix(-1 0 0 1 16.7273 7.18182)" fill="#88A5C3" />
                                <rect width="1.90909" height="11.4545" rx="0.954545"
                                    transform="matrix(-1 0 0 1 13.5454 5.27274)" fill="#4D7299" />
                                <rect width="1.90909" height="7" rx="0.954545"
                                    transform="matrix(-1 0 0 1 10.3636 9.72726)" fill="#88A5C3" />
                                <rect width="1.90909" height="8.27273" rx="0.954545"
                                    transform="matrix(-1 0 0 1 7.18176 8.45456)" fill="#4D7299" />
                            </g>
                            <defs>
                                <filter id="filter0_i_118_644" x="0" y="0" width="22" height="22"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="1" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_118_644" />
                                </filter>
                            </defs>
                        </svg>
                    </button>
                    <div id="S${i}P6" class="modal">
                        <div class="indicator">
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C6R1" class="indicator__light"></div>
                                    Relay 1
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C6RI1" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C6RN1">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C6R2" class="indicator__light"></div>
                                    Relay 2
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C6RI2" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C6RN2">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C6R3" class="indicator__light"></div>
                                    Relay 3
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C6RI3" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C6RN3">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C6R4" class="indicator__light"></div>
                                    Relay 4
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C6RI4" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C6RN4">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C6R5" class="indicator__light"></div>
                                    Relay 5
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C6RI5" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C6RN5">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C6R6" class="indicator__light"></div>
                                    Relay 6
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C6RI6" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C6RN6">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C6R7" class="indicator__light"></div>
                                    Relay 7
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C6RI7" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C6RN7">0000</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="indicator__content">
                                <span class="indicator__title">
                                    <div id="S${i}C6R8" class="indicator__light"></div>
                                    Relay 8
                                </span>
                                <div class="indicator__failed indicator__failed--relay">
                                    <svg id="S${i}C6RI8" class="indicator__failed-icon" width="37" height="36"
                                        viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                        <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                            stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="indicator__failed-text">
                                        <h4>Failed</h4>
                                        <h5 id="S${i}C6RN8">0000</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal__grid modal__grid--ct">
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 1</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C6CI1" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C6CN1">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C6C1" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 2</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C6CI2" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C6CN2">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C6C2" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 3</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C6CI3" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C6CN3">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C6C3" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 4</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C6CI4" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C6CN4">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C6C4" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 5</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C6CI5" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C6CN5">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C6C5" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 6</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C6CI6" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C6CN6">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C6C6" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 7</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C6CI7" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C6CN7">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C6C7" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                            <div class="modal__grid-ct">
                                <div class="grid-item__title">
                                    <h3>CT - 8</h3>
                                    <div class="indicator__failed indicator__failed--ct">
                                        <svg id="S${i}C6CI8" class="indicator__failed-icon" width="37" height="36"
                                            viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                            <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4"
                                                stroke-width="3.27273" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="indicator__failed-text">
                                            <h4>Failed</h4>
                                            <h5 id="S${i}C6CN8">0000</h5>
                                        </div>
                                    </div>
                                </div>
                                <canvas id="S${i}C6C8" class="chart" width="${chartWidth}"
                                    height="${chartHeight}"></canvas>
                            </div>
                        </div>
                        <button id="S${i}B6" onclick="showModal('S${i}P6')" class="modal__btn-hide btn">
                            <svg width="37" height="36" viewBox="0 0 37 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4" stroke-width="3.27273"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4" stroke-width="3.27273"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Temperature</td>
                <td>
                    <div class="indicator__light indicator__light-table"></div>
                </td>
                <td>
                    <button id="S${i}C7" onclick="showModalCentered('S${i}P7')"
                        class="btn btn--unstyled modal__btn-show">
                        <svg class="station__icon station__icon--charts" width="22" height="22" viewBox="0 0 22 22"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_118_644)">
                                <rect width="22" height="22" rx="3" fill="#2B3F55" />
                                <rect width="1.90909" height="9.54545" rx="0.954545"
                                    transform="matrix(-1 0 0 1 16.7273 7.18182)" fill="#88A5C3" />
                                <rect width="1.90909" height="11.4545" rx="0.954545"
                                    transform="matrix(-1 0 0 1 13.5454 5.27274)" fill="#4D7299" />
                                <rect width="1.90909" height="7" rx="0.954545"
                                    transform="matrix(-1 0 0 1 10.3636 9.72726)" fill="#88A5C3" />
                                <rect width="1.90909" height="8.27273" rx="0.954545"
                                    transform="matrix(-1 0 0 1 7.18176 8.45456)" fill="#4D7299" />
                            </g>
                            <defs>
                                <filter id="filter0_i_118_644" x="0" y="0" width="22" height="22"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="1" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_118_644" />
                                </filter>
                            </defs>
                        </svg>
                    </button>
                    <div id="S${i}P7" class="modal">
                        <div class="modal__grid modal__grid--temp">
                            <div class="modal__grid-temp">
                                <div class="widget__heading-container">
                                    <h2 class="widget__heading">Temperature 1</h2>
                                </div>

                                <div class="widget__label widget__label--lg">
                                    <div class="widget__label-name">Pi</div>
                                    <div class="widget__temp">
                                        <div class="widget__temp-container">
                                            <div id="temp1_bar" class="widget__temp-bar"></div>
                                        </div>
                                    </div>
                                    <div id="temp1_text" class="widget__label-unit">°C</div>
                                </div>

                                <div class="widget__label widget__label--lg">
                                    <div class="widget__label-name">TBM
                                        <div class="tooltip">Test Board Module</div>
                                    </div>
                                    <div class="widget__temp">
                                        <div class="widget__temp-container">
                                            <div id="temp1_bar" class="widget__temp-bar"></div>
                                        </div>
                                    </div>
                                    <div id="temp1_text" class="widget__label-unit">°C</div>
                                </div>
                            </div>

                            <div class="modal__grid-temp">
                                <div class="widget__heading-container">
                                    <h2 class="widget__heading">Temperature 2</h2>
                                </div>

                                <div class="widget__label widget__label--lg">
                                    <div class="widget__label-name">Pi</div>
                                    <div class="widget__temp">
                                        <div class="widget__temp-container">
                                            <div id="temp2_bar" class="widget__temp-bar"></div>
                                        </div>
                                    </div>
                                    <div id="temp2_text" class="widget__label-unit">°C</div>
                                </div>

                                <div class="widget__label widget__label--lg">
                                    <div class="widget__label-name">TBM
                                        <div class="tooltip">Test Board Module</div>
                                    </div>
                                    <div class="widget__temp">
                                        <div class="widget__temp-container">
                                            <div id="temp2_bar" class="widget__temp-bar"></div>
                                        </div>
                                    </div>
                                    <div id="temp2_text" class="widget__label-unit">°C</div>
                                </div>
                            </div>

                            <div class="modal__grid-temp">
                                <div class="widget__heading-container">
                                    <h2 class="widget__heading">Temperature 3</h2>
                                </div>
                                <div class="widget__label widget__label--lg">
                                    <div class="widget__label-name">Pi</div>
                                    <div class="widget__temp">
                                        <div class="widget__temp-container">
                                            <div id="temp2_bar" class="widget__temp-bar"></div>
                                        </div>
                                    </div>
                                    <div id="temp2_text" class="widget__label-unit">°C</div>
                                </div>

                                <div class="widget__label widget__label--lg">
                                    <div class="widget__label-name">TBM
                                        <div class="tooltip">Test Board Module</div>
                                    </div>
                                    <div class="widget__temp">
                                        <div class="widget__temp-container">
                                            <div id="temp2_bar" class="widget__temp-bar"></div>
                                        </div>
                                    </div>
                                    <div id="temp2_text" class="widget__label-unit">°C</div>
                                </div>
                            </div>

                            <div class="modal__grid-temp">
                                <div class="widget__heading-container">
                                    <h2 class="widget__heading">Temperature 4</h2>
                                </div>
                                <div class="widget__label widget__label--lg">
                                    <div class="widget__label-name">Pi</div>
                                    <div class="widget__temp">
                                        <div class="widget__temp-container">
                                            <div id="temp2_bar" class="widget__temp-bar"></div>
                                        </div>
                                    </div>
                                    <div id="temp2_text" class="widget__label-unit">°C</div>
                                </div>

                                <div class="widget__label widget__label--lg">
                                    <div class="widget__label-name">TBM
                                        <div class="tooltip">Test Board Module</div>
                                    </div>
                                    <div class="widget__temp">
                                        <div class="widget__temp-container">
                                            <div id="temp2_bar" class="widget__temp-bar"></div>
                                        </div>
                                    </div>
                                    <div id="temp2_text" class="widget__label-unit">°C</div>
                                </div>
                            </div>

                            <div class="modal__grid-temp">
                                <div class="widget__heading-container">
                                    <h2 class="widget__heading">Temperature 5</h2>
                                </div>

                                <div class="widget__label widget__label--lg">
                                    <div class="widget__label-name">Pi</div>
                                    <div class="widget__temp">
                                        <div class="widget__temp-container">
                                            <div id="temp2_bar" class="widget__temp-bar"></div>
                                        </div>
                                    </div>
                                    <div id="temp2_text" class="widget__label-unit">°C</div>
                                </div>

                                <div class="widget__label widget__label--lg">
                                    <div class="widget__label-name">TBM
                                        <div class="tooltip">Test Board Module</div>
                                    </div>
                                    <div class="widget__temp">
                                        <div class="widget__temp-container">
                                            <div id="temp2_bar" class="widget__temp-bar"></div>
                                        </div>
                                    </div>
                                    <div id="temp2_text" class="widget__label-unit">°C</div>
                                </div>
                            </div>

                            <div class="modal__grid-temp">
                                <div class="widget__heading-container">
                                    <h2 class="widget__heading">Temperature 6</h2>
                                </div>
                                <div class="widget__label widget__label--lg">
                                    <div class="widget__label-name">Pi</div>
                                    <div class="widget__temp">
                                        <div class="widget__temp-container">
                                            <div id="temp2_bar" class="widget__temp-bar"></div>
                                        </div>
                                    </div>
                                    <div id="temp2_text" class="widget__label-unit">°C</div>
                                </div>

                                <div class="widget__label widget__label--lg">
                                    <div class="widget__label-name">TBM
                                        <div class="tooltip">Test Board Module</div>
                                    </div>
                                    <div class="widget__temp">
                                        <div class="widget__temp-container">
                                            <div id="temp2_bar" class="widget__temp-bar"></div>
                                        </div>
                                    </div>
                                    <div id="temp2_text" class="widget__label-unit">°C</div>
                                </div>
                            </div>

                            <div class="modal__grid-temp">
                                <div class="widget__heading-container">
                                    <h2 class="widget__heading">Temperature 7</h2>
                                </div>
                                <div class="widget__label widget__label--lg">
                                    <div class="widget__label-name">Pi</div>
                                    <div class="widget__temp">
                                        <div class="widget__temp-container">
                                            <div id="temp2_bar" class="widget__temp-bar"></div>
                                        </div>
                                    </div>
                                    <div id="temp2_text" class="widget__label-unit">°C</div>
                                </div>

                                <div class="widget__label widget__label--lg">
                                    <div class="widget__label-name">TBM
                                        <div class="tooltip">Test Board Module</div>
                                    </div>
                                    <div class="widget__temp">
                                        <div class="widget__temp-container">
                                            <div id="temp2_bar" class="widget__temp-bar"></div>
                                        </div>
                                    </div>
                                    <div id="temp2_text" class="widget__label-unit">°C</div>
                                </div>
                            </div>

                            <div class="modal__grid-temp">
                                <div class="widget__heading-container">
                                    <h2 class="widget__heading">Temperature 8</h2>
                                </div>
                                <div class="widget__label widget__label--lg">
                                    <div class="widget__label-name">Pi</div>
                                    <div class="widget__temp">
                                        <div class="widget__temp-container">
                                            <div id="temp2_bar" class="widget__temp-bar"></div>
                                        </div>
                                    </div>
                                    <div id="temp2_text" class="widget__label-unit">°C</div>
                                </div>

                                <div class="widget__label widget__label--lg">
                                    <div class="widget__label-name">TBM
                                        <div class="tooltip">Test Board Module</div>
                                    </div>
                                    <div class="widget__temp">
                                        <div class="widget__temp-container">
                                            <div id="temp2_bar" class="widget__temp-bar"></div>
                                        </div>
                                    </div>
                                    <div id="temp2_text" class="widget__label-unit">°C</div>
                                </div>
                            </div>

                            <button id="S${i}B7" onclick="showModalCentered('S${i}P7')" class="modal__btn-hide btn">
                                <svg width="37" height="36" viewBox="0 0 37 36" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18.2856" cy="18" r="14.7273" fill="#EEF1F6" />
                                    <path d="M23.1946 13.0909L13.3765 22.9091" stroke="#AABED4" stroke-width="3.27273"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.3766 13.0909L23.1948 22.9091" stroke="#AABED4" stroke-width="3.27273"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
        `);
    updateProgressCircle("PC" + i);
    // Create charts for Stations #STA
    var chArray = [0];
    for (var k = 1; k <= 6; k++) {
        delete CT1;
        var CT1 = new stationCharts(i, k, 1);
        delete CT2;
        var CT2 = new stationCharts(i, k, 2);
        delete CT3;
        var CT3 = new stationCharts(i, k, 3);
        delete CT4;
        var CT4 = new stationCharts(i, k, 4);
        delete CT5;
        var CT5 = new stationCharts(i, k, 5);
        delete CT6;
        var CT6 = new stationCharts(i, k, 6);
        delete CT7;
        var CT7 = new stationCharts(i, k, 7);
        delete CT8;
        var CT8 = new stationCharts(i, k, 8);
        CT1.createChart();
        CT2.createChart();
        CT3.createChart();
        CT4.createChart();
        CT5.createChart();
        CT6.createChart();
        CT7.createChart();
        CT8.createChart();
        chArray.push([0, CT1, CT2, CT3, CT4, CT5, CT6, CT7, CT8]);
    }
    BuildArray.push(chArray);
  }
}

function removeStationTables() {
  $("#table_container_body").empty();
  BuildArray = [0];
}

let graphFlag = false;

function showModal(graphID) {
  var modalGrid = document.getElementById(graphID);
  modalGrid.classList.toggle("modal__show--channels");
}

function showModalCentered(graphID) {
    var modalGrid = document.getElementById(graphID);
    modalGrid.classList.toggle("modal__show--temps");
  }

function refreshPIList(station, quantity, current) {
  if (station != 0) {
    document.getElementById("P" + current + "Default").innerHTML = "Station " + station;
    document.getElementById("P" + current + "Default").value = station;
  } else {
    document.getElementById("P" + current + "Default").innerHTML = "Unassigned";
  }
  for (var i = 1; i <= quantity; i++) {
    if (i == station) {
      continue;
    }
    $("#station-" + current).append(`
        <option id="P${current}Default${i}" value="${i}">Station ${i}</option>
        `);
  }
}

function removePIList(quantity) {
  $("#PI_LIST").empty();
  $("#PI_LIST").append(`
    <div class="list__item" id="PI#1">Empty</div>
    <div class="list__item">
        <select name="stations" id="station-1">
            <option id="P1Default" value="0">Unassigned</option>
        </select>
    </div>
    <div class="list__item" id="PI#2">Empty</div>
    <div class="list__item">
        <select name="stations" id="station-2">
        <option id="P2Default" value="0">Unassigned</option>
        </select>
    </div>
    <div class="list__item" id="PI#3">Empty</div>
    <div class="list__item">
        <select name="stations" id="station-3">
        <option id="P3Default" value="0">Unassigned</option>
        </select>
    </div>
    <div class="list__item" id="PI#4">Empty</div>
    <div class="list__item">
        <select name="stations" id="station-4">
        <option id="P4Default" value="0">Unassigned</option>
        </select>
    </div>
    <div class="list__item" id="PI#5">Empty</div>
    <div class="list__item">
        <select name="stations" id="station-5">
        <option id="P5Default" value="0">Unassigned</option>
        </select>
    </div>
    `);
  if (quantity > 5) {
    for (var i = 6; i < quantity; i++)
      $("#PI_LIST").append(`
        <div class="list__item" id="PI#${i}">Empty</div>
        <div class="list__item">
            <select name="stations" id="station-${i}">
                <option id="P${i}Default" value="0">Unassigned</option>
            </select>
        </div>
        `);
  }
}

function refreshESPList(station, channel, current) {
  document.getElementById("ESP" + current + "Detail").innerHTML = "S" + station + " - CH" + channel;
}

function removeESPList(quantity) {
    console.log("TBM:",quantity);
  $("#ESP_LIST").empty();
  $("#ESP_LIST").append(`
    <div class="list__item" id="ESP#1">Empty</div>
        <div class="list__item">
          <p id="ESP1Detail" class="list__item-label">S0 - CH0</p>
        </div>
        <div class="list__item" id="ESP#2">Empty</div>
        <div class="list__item">
          <p id="ESP2Detail" class="list__item-label">S0 - CH0</p>
        </div>
        <div class="list__item" id="ESP#3">Empty</div>
        <div class="list__item">
          <p id="ESP3Detail" class="list__item-label">S0 - CH0</p>
        </div>
        <div class="list__item" id="ESP#4">Empty</div>
        <div class="list__item">
          <p id="ESP4Detail" class="list__item-label">S0 - CH0</p>
        </div>
        <div class="list__item" id="ESP#5">Empty</div>
        <div class="list__item">
          <p id="ESP5Detail" class="list__item-label">S0 - CH0</p>
        </div>
    `);
  if (quantity > 5) {
    for (var i = 6; i <= quantity; i++)
      $("#ESP_LIST").append(`
        <div class="list__item" id="ESP#${i}">Empty</div>
        <div class="list__item">
          <p id="ESP${i}Detail" class="list__item-label">S0 - CH0</p>
        </div>
        `);
  }
}
