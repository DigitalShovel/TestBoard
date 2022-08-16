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
                        <svg id="Logo${i}" class="logo-loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.39 78.37">
                            <polygon fill="#2A7DE1" points="38.54 0 12.85 0 0 0 0 25.7 12.85 25.7 12.85 12.85 38.54 12.85 38.54 25.7 51.39 25.7 51.39 0 38.54 0" />
                            <rect fill="#2A7DE1" x="19.27" y="19.27" width="12.85" height="25.7" rx="4" />
                            <polygon fill="#2A7DE1" points="38.54 47.17 25.52 60.2 12.85 47.53 12.85 32.12 0 32.12 0 52.91 0.06 52.91 25.52 78.37 25.52 78.37 25.52 78.37 51.34 52.55 51.39 52.55 51.39 32.12 38.54 32.12 38.54 47.17" />
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
                        <div id="T${i}F1" class="indicator-light"></div>
                    </td>
                    <td>
                        <button id="T${i}G1" onclick="showPopup('T${i}P1')" class="btn btn--unstyled popup__btn-show">
                        <svg class="station__icon station__icon--charts" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_118_644)">
                            <rect width="22" height="22" rx="3" fill="#2B3F55"/>
                            <rect width="1.90909" height="9.54545" rx="0.954545" transform="matrix(-1 0 0 1 16.7273 7.18182)" fill="#88A5C3"/>
                            <rect width="1.90909" height="11.4545" rx="0.954545" transform="matrix(-1 0 0 1 13.5454 5.27274)" fill="#4D7299"/>
                            <rect width="1.90909" height="7" rx="0.954545" transform="matrix(-1 0 0 1 10.3636 9.72726)" fill="#88A5C3"/>
                            <rect width="1.90909" height="8.27273" rx="0.954545" transform="matrix(-1 0 0 1 7.18176 8.45456)" fill="#4D7299"/>
                            </g>
                            <defs>
                            <filter id="filter0_i_118_644" x="0" y="0" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_118_644"/>
                            </filter>
                            </defs>
                        </svg>                        
                        </button>
                        <div id="T${i}P1" class="popup">
                            <div class="popup__grid">
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G1C1" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G1C2" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G1C3" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G1C4" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G1C5" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G1C6" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G1C7" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G1C8" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                            </div>
                            <div class="indicator">
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G1R1" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 2</span>
                                    <div id="T${i}G1R2" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 3</span>
                                    <div id="T${i}G1R3" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 4</span>
                                    <div id="T${i}G1R4" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 5</span>
                                    <div id="T${i}G1R5" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 6</span>
                                    <div id="T${i}G1R6" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 7</span>
                                    <div id="T${i}G1R7" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 8</span>
                                    <div id="T${i}G1R8" class="indicator-light"></div>
                                </div>
                            </div>
                            <button id="T${i}B1" onclick="showPopup('T${i}P1')" class="popup__btn-hide btn btn--primary">Close</button>
                        </div>
                    </td>
                    </tr>
                    <tr class="table__row">
                    <td>
                        Channel #2
                    </td>
                    <td>
                        <div id="T${i}F2" class="indicator-light"></div>
                    </td>
                    <td>
                        <button id="T${i}G2" onclick="showPopup('T${i}P2')" class="btn btn--unstyled popup__btn-show">
                        <svg class="station__icon station__icon--charts" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_118_644)">
                            <rect width="22" height="22" rx="3" fill="#2B3F55"/>
                            <rect width="1.90909" height="9.54545" rx="0.954545" transform="matrix(-1 0 0 1 16.7273 7.18182)" fill="#88A5C3"/>
                            <rect width="1.90909" height="11.4545" rx="0.954545" transform="matrix(-1 0 0 1 13.5454 5.27274)" fill="#4D7299"/>
                            <rect width="1.90909" height="7" rx="0.954545" transform="matrix(-1 0 0 1 10.3636 9.72726)" fill="#88A5C3"/>
                            <rect width="1.90909" height="8.27273" rx="0.954545" transform="matrix(-1 0 0 1 7.18176 8.45456)" fill="#4D7299"/>
                            </g>
                            <defs>
                            <filter id="filter0_i_118_644" x="0" y="0" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_118_644"/>
                            </filter>
                            </defs>
                        </svg> 
                        </button>
                        <div id="T${i}P2" class="popup">
                            <div class="popup__grid">
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G2C1" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G2C2" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G2C3" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G2C4" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G2C5" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G2C6" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G2C7" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G2C8" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                            </div>
                            <div class="indicator">
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G2R1" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 2</span>
                                    <div id="T${i}G2R2" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 3</span>
                                    <div id="T${i}G2R3" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 4</span>
                                    <div id="T${i}G2R4" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 5</span>
                                    <div id="T${i}G2R5" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 6</span>
                                    <div id="T${i}G2R6" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 7</span>
                                    <div id="T${i}G2R7" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 8</span>
                                    <div id="T${i}G2R8" class="indicator-light"></div>
                                </div>
                            </div>
                            <button id="T${i}B2" onclick="showPopup('T${i}P2')" class="popup__btn-hide btn btn--primary">Close</button>
                        </div>
                    </td>
                    </tr>
                    <tr class="table__row">
                    <td>
                        Channel #3
                    </td>
                    <td>
                        <div id="T${i}F3" class="indicator-light"></div>
                    </td>
                    <td>
                        <button id="T${i}G3" onclick="showPopup('T${i}P3')" class="btn btn--unstyled popup__btn-show">
                        <svg class="station__icon station__icon--charts" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_118_644)">
                            <rect width="22" height="22" rx="3" fill="#2B3F55"/>
                            <rect width="1.90909" height="9.54545" rx="0.954545" transform="matrix(-1 0 0 1 16.7273 7.18182)" fill="#88A5C3"/>
                            <rect width="1.90909" height="11.4545" rx="0.954545" transform="matrix(-1 0 0 1 13.5454 5.27274)" fill="#4D7299"/>
                            <rect width="1.90909" height="7" rx="0.954545" transform="matrix(-1 0 0 1 10.3636 9.72726)" fill="#88A5C3"/>
                            <rect width="1.90909" height="8.27273" rx="0.954545" transform="matrix(-1 0 0 1 7.18176 8.45456)" fill="#4D7299"/>
                            </g>
                            <defs>
                            <filter id="filter0_i_118_644" x="0" y="0" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_118_644"/>
                            </filter>
                            </defs>
                        </svg> 
                        </button>
                        <div id="T${i}P3" class="popup">
                            <div class="popup__grid">
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G3C1" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G3C2" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G3C3" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G3C4" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G3C5" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G3C6" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G3C7" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G3C8" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                            </div>
                            <div class="indicator">
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G3R1" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 2</span>
                                    <div id="T${i}G3R2" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 3</span>
                                    <div id="T${i}G3R3" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 4</span>
                                    <div id="T${i}G3R4" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 5</span>
                                    <div id="T${i}G3R5" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 6</span>
                                    <div id="T${i}G3R6" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 7</span>
                                    <div id="T${i}G3R7" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 8</span>
                                    <div id="T${i}G3R8" class="indicator-light"></div>
                                </div>
                            </div>
                            <button id="T${i}B3" onclick="showPopup('T${i}P3')" class="popup__btn-hide btn btn--primary">Close</button>
                        </div>
                    </td>
                    </tr>
                    <tr class="table__row">
                    <td>
                        Channel #4
                    </td>
                    <td>
                        <div id="T${i}F4" class="indicator-light"></div>
                    </td>
                    <td>
                        <button id="T${i}G4" onclick="showPopup('T${i}P4')" class="btn btn--unstyled popup__btn-show">
                        <svg class="station__icon station__icon--charts" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_118_644)">
                            <rect width="22" height="22" rx="3" fill="#2B3F55"/>
                            <rect width="1.90909" height="9.54545" rx="0.954545" transform="matrix(-1 0 0 1 16.7273 7.18182)" fill="#88A5C3"/>
                            <rect width="1.90909" height="11.4545" rx="0.954545" transform="matrix(-1 0 0 1 13.5454 5.27274)" fill="#4D7299"/>
                            <rect width="1.90909" height="7" rx="0.954545" transform="matrix(-1 0 0 1 10.3636 9.72726)" fill="#88A5C3"/>
                            <rect width="1.90909" height="8.27273" rx="0.954545" transform="matrix(-1 0 0 1 7.18176 8.45456)" fill="#4D7299"/>
                            </g>
                            <defs>
                            <filter id="filter0_i_118_644" x="0" y="0" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_118_644"/>
                            </filter>
                            </defs>
                        </svg> 
                        </button>
                        <div id="T${i}P4" class="popup">
                            <div class="popup__grid">
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G4C1" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G4C2" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G4C3" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G4C4" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G4C5" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G4C6" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G4C7" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G4C8" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                            </div>
                            <div class="indicator">
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G4R1" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G4R2" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G4R3" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G4R4" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G4R5" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G4R6" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G4R7" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G4R8" class="indicator-light"></div>
                                </div>
                            </div>
                            <button id="T${i}B4" onclick="showPopup('T${i}P4')" class="popup__btn-hide btn btn--primary">Close</button>
                        </div>
                    </td>
                    </tr>
                    <tr class="table__row">
                    <td>
                        Channel #5
                    </td>
                    <td>
                        <div id="T${i}F5" class="indicator-light"></div>
                    </td>
                    <td>
                        <button id="T${i}G5" onclick="showPopup('T${i}P5')" class="btn btn--unstyled popup__btn-show">
                        <svg class="station__icon station__icon--charts" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_118_644)">
                            <rect width="22" height="22" rx="3" fill="#2B3F55"/>
                            <rect width="1.90909" height="9.54545" rx="0.954545" transform="matrix(-1 0 0 1 16.7273 7.18182)" fill="#88A5C3"/>
                            <rect width="1.90909" height="11.4545" rx="0.954545" transform="matrix(-1 0 0 1 13.5454 5.27274)" fill="#4D7299"/>
                            <rect width="1.90909" height="7" rx="0.954545" transform="matrix(-1 0 0 1 10.3636 9.72726)" fill="#88A5C3"/>
                            <rect width="1.90909" height="8.27273" rx="0.954545" transform="matrix(-1 0 0 1 7.18176 8.45456)" fill="#4D7299"/>
                            </g>
                            <defs>
                            <filter id="filter0_i_118_644" x="0" y="0" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_118_644"/>
                            </filter>
                            </defs>
                        </svg> 
                        </button>
                        <div id="T${i}P5" class="popup">
                            <div class="popup__grid">
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G5C1" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G5C2" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G5C3" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G5C4" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G5C5" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G5C6" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G5C7" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G5C8" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                            </div>
                            <div class="indicator">
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G5R1" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G5R2" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G5R3" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G5R4" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G5R5" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G5R6" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G5R7" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G5R8" class="indicator-light"></div>
                                </div>
                            </div>
                            <button id="T${i}B5" onclick="showPopup('T${i}P5')" class="popup__btn-hide btn btn--primary">Close</button>
                        </div>
                    </td>
                    </tr>
                    <tr class="table__row">
                    <td>
                        Channel #6
                    </td>
                    <td>
                        <div id="T${i}F6" class="indicator-light"></div>
                    </td>
                    <td>
                        <button id="T${i}G6" onclick="showPopup('T${i}P6')" class="btn btn--unstyled popup__btn-show">
                        <svg class="station__icon station__icon--charts" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_118_644)">
                            <rect width="22" height="22" rx="3" fill="#2B3F55"/>
                            <rect width="1.90909" height="9.54545" rx="0.954545" transform="matrix(-1 0 0 1 16.7273 7.18182)" fill="#88A5C3"/>
                            <rect width="1.90909" height="11.4545" rx="0.954545" transform="matrix(-1 0 0 1 13.5454 5.27274)" fill="#4D7299"/>
                            <rect width="1.90909" height="7" rx="0.954545" transform="matrix(-1 0 0 1 10.3636 9.72726)" fill="#88A5C3"/>
                            <rect width="1.90909" height="8.27273" rx="0.954545" transform="matrix(-1 0 0 1 7.18176 8.45456)" fill="#4D7299"/>
                            </g>
                            <defs>
                            <filter id="filter0_i_118_644" x="0" y="0" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_118_644"/>
                            </filter>
                            </defs>
                        </svg> 
                        </button>
                        <div id="T${i}P6" class="popup">
                            <div class="popup__grid">
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G6C1" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G6C2" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G6C3" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G6C4" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G6C5" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G6C6" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G6C7" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G6C8" class="chart" width="${chartWidth}" height="${chartHeight}"></canvas>
                                </div>
                            </div>
                            <div class="indicator">
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G6R1" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G6R2" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G6R3" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G6R4" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G6R5" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G6R6" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G6R7" class="indicator-light"></div>
                                </div>
                                <div class="indicator-content">
                                    <span class="indicator-title">Relay 1</span>
                                    <div id="T${i}G6R8" class="indicator-light"></div>
                                </div>
                            </div>
                            <button id="T${i}B6" onclick="showPopup('T${i}P6')" class="popup__btn-hide btn btn--primary">Close</button>
                        </div>
                    </td>
                    </tr>
                    <tr>
                        <td>Temperature</td>
                        <td>
                            <div class="indicator-light"></div>
                        </td>
                        <td>
                            <button id="T${i}G7" onclick="showPopup('T${i}P7')" class="btn btn--unstyled popup__btn-show">
                            <svg class="station__icon station__icon--charts" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_i_118_644)">
                                <rect width="22" height="22" rx="3" fill="#2B3F55"/>
                                <rect width="1.90909" height="9.54545" rx="0.954545" transform="matrix(-1 0 0 1 16.7273 7.18182)" fill="#88A5C3"/>
                                <rect width="1.90909" height="11.4545" rx="0.954545" transform="matrix(-1 0 0 1 13.5454 5.27274)" fill="#4D7299"/>
                                <rect width="1.90909" height="7" rx="0.954545" transform="matrix(-1 0 0 1 10.3636 9.72726)" fill="#88A5C3"/>
                                <rect width="1.90909" height="8.27273" rx="0.954545" transform="matrix(-1 0 0 1 7.18176 8.45456)" fill="#4D7299"/>
                                </g>
                                <defs>
                                <filter id="filter0_i_118_644" x="0" y="0" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="1"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/>
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_118_644"/>
                                </filter>
                                </defs>
                            </svg> 
                            </button>
                            <div id="T${i}P7" class="popup">
                                <div class="popup__grid">
                                    <div class="popup__grid-item">
                                    </div>
                                    <div class="popup__grid-item">
                                    </div>
                                    <div class="popup__grid-item">
                                    </div>
                                    <div class="popup__grid-item">
                                    </div>
                                    <div class="popup__grid-item">
                                    </div>
                                    <div class="popup__grid-item">
                                    </div>
                                    <div class="popup__grid-item">
                                    </div>
                                    <div class="popup__grid-item">
                                    </div>
                                </div>
                                <button id="T${i}B7" onclick="showPopup('T${i}P7')" class="popup__btn-hide btn btn--primary">Close</button>
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
      var CT1 = new stationCharts(i, k, 1);
      var CT2 = new stationCharts(i, k, 2);
      var CT3 = new stationCharts(i, k, 3);
      var CT4 = new stationCharts(i, k, 4);
      var CT5 = new stationCharts(i, k, 5);
      var CT6 = new stationCharts(i, k, 6);
      var CT7 = new stationCharts(i, k, 7);
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

function showPopup(graphID) {
  var popupGrid = document.getElementById(graphID);
  popupGrid.classList.toggle("popup__show");
}

function refreshPIList(station, quantity, current) {
    if (station != 0) {
        document.getElementById("P"+current+"Default").innerHTML = "Station "+station;
    } else {
        document.getElementById("P"+current+"Default").innerHTML = "Station";
    }
    for (var i=1; i <= quantity; i++){
        if (i == station){
            continue;
        }
        $("#station-"+current).append(`
        <option value="station-${i}">Station ${i}</option>
        `);
    }
}

function removePIList(quantity){
    $("#PI_LIST").empty();
    $("#PI_LIST").append(`
    <div class="list__item" id="PI#1">Empty</div>
    <div class="list__item">
        <select name="stations" id="station-1">
            <option id="P1Default" value="">Station</option>
        </select>
    </div>
    <div class="list__item" id="PI#2">Empty</div>
    <div class="list__item">
        <select name="stations" id="station-2">
        <option id="P2Default" value="">Station</option>
        </select>
    </div>
    <div class="list__item" id="PI#3">Empty</div>
    <div class="list__item">
        <select name="stations" id="station-3">
        <option id="P3Default" value="">Station</option>
        </select>
    </div>
    <div class="list__item" id="PI#4">Empty</div>
    <div class="list__item">
        <select name="stations" id="station-4">
        <option id="P4Default" value="">Station</option>
        </select>
    </div>
    <div class="list__item" id="PI#5">Empty</div>
    <div class="list__item">
        <select name="stations" id="station-5">
        <option id="P5Default" value="">Station</option>
        </select>
    </div>
    `);
    if (quantity > 5){
        for(var i=6; i < quantity; i++)
        $("#PI_LIST").append(`
        <div class="list__item" id="PI#${i}">Empty</div>
        <div class="list__item">
            <select name="stations" id="station-${i}">
                <option id="P${i}Default" value="">Station</option>
            </select>
        </div>
        `);
    }
}

function refreshESPList(station, channel, current) {
    document.getElementById("ESP"+current+"Detail").innerHTML = "S"+station+" - CH"+channel;
}

function removeESPList(quantity){
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
    if (quantity > 5){
        for(var i=6; i < quantity; i++)
        $("#ESP_LIST").append(`
        <div class="list__item" id="ESP#${i}">Empty</div>
        <div class="list__item">
          <p id="ESP${i}Detail" class="list__item-label">S0 - CH0</p>
        </div>
        `);
    }
}
