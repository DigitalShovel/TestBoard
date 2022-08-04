var numberOfStations = 4;

// Adding a row inside the tbody.
/*for (var i=0; i < numberOfStations; i++){

}*/
function addStationTables(quantity) {
  for (var i = 1; i < quantity + 1; i++) {
    $("#table_container_body").append(`
        <div class="table__container">
                <table class="table table__2-col">
                <tbody class="table__body">
                    <tr class="table__row table__row--add-border">
                    <th class="table__heading">Station #${i}</th>
                    <th class="table__heading table__progress">
                        <svg width="32" height="32">
                        <circle id="PC${i}" stroke="var(--primary-color)" stroke-width="4" fill="transparent" r="${radius}" cx="16" cy="16" />
                            <text x="7" y="20" class="table__progress-number">%</text>
                        </svg>
                    </th>
                    </tr>
                    <tr class="table__row">
                    <td>
                        Channel #1
                    </td>
                    <td>
                        <button id="T${i}G1" onclick="showPopup('T${i}P1')" class="btn btn--unstyled popup__btn-show">View Graphs</button>
                        <div id="T${i}P1" class="popup">
                            <div class="popup__grid">
                                <div class="popup__grid-item">
                                    <canvas id="T${i}G1C1" class="chart" width="400" height="400"></canvas>
                                </div>
                                <div id="T${i}G1C2" class="popup__grid-item">CT2</div>
                                <div id="T${i}G1C3" class="popup__grid-item">CT3</div>
                                <div id="T${i}G1C4" class="popup__grid-item">CT4</div>
                                <div id="T${i}G1C5" class="popup__grid-item">CT5</div>
                                <div id="T${i}G1C6" class="popup__grid-item">CT6</div>
                                <div id="T${i}G1C7" class="popup__grid-item">CT7</div>
                                <div id="T${i}G1C8" class="popup__grid-item">CT8</div>
                            </div>
                            <div class="popup__relay flex gap--sm">
                                <div id="T${i}G1R1" class="popup__relay-light popup__relay-light--disabled popup__relay-1"></div>
                                <div id="T${i}G1R2" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G1R3" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G1R4" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G1R5" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G1R6" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G1R7" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G1R8" class="popup__relay-light popup__relay-1"></div>
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
                        <button id="T${i}G2" onclick="showPopup('T${i}P2')" class="btn btn--unstyled popup__btn-show">View Graphs</button>
                        <div id="T${i}P2" class="popup">
                            <div class="popup__grid">
                                <div id="T${i}G2C1" class="popup__grid-item">CT1</div>
                                <div id="T${i}G2C2" class="popup__grid-item">CT2</div>
                                <div id="T${i}G2C3" class="popup__grid-item">CT3</div>
                                <div id="T${i}G2C4" class="popup__grid-item">CT4</div>
                                <div id="T${i}G2C5" class="popup__grid-item">CT5</div>
                                <div id="T${i}G2C6" class="popup__grid-item">CT6</div>
                                <div id="T${i}G2C7" class="popup__grid-item">CT7</div>
                                <div id="T${i}G2C8" class="popup__grid-item">CT8</div>
                            </div>
                            <div class="popup__relay flex gap--sm">
                                <div id="T${i}G2R1" class="popup__relay-light popup__relay-light--disabled popup__relay-1"></div>
                                <div id="T${i}G2R2" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G2R3" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G2R4" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G2R5" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G2R6" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G2R7" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G2R8" class="popup__relay-light popup__relay-1"></div>
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
                        <button id="T${i}G3" onclick="showPopup('T${i}P3')" class="btn btn--unstyled popup__btn-show">View Graphs</button>
                        <div id="T${i}P3" class="popup">
                            <div class="popup__grid">
                                <div id="T${i}G3C1" class="popup__grid-item">CT1</div>
                                <div id="T${i}G3C2" class="popup__grid-item">CT2</div>
                                <div id="T${i}G3C3" class="popup__grid-item">CT3</div>
                                <div id="T${i}G3C4" class="popup__grid-item">CT4</div>
                                <div id="T${i}G3C5" class="popup__grid-item">CT5</div>
                                <div id="T${i}G3C6" class="popup__grid-item">CT6</div>
                                <div id="T${i}G3C7" class="popup__grid-item">CT7</div>
                                <div id="T${i}G3C8" class="popup__grid-item">CT8</div>
                            </div>
                            <div class="popup__relay flex gap--sm">
                                <div id="T${i}G3R1" class="popup__relay-light popup__relay-light--disabled popup__relay-1"></div>
                                <div id="T${i}G3R2" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G3R3" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G3R4" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G3R5" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G3R6" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G3R7" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G3R8" class="popup__relay-light popup__relay-1"></div>
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
                        <button id="T${i}G4" onclick="showPopup('T${i}P4')" class="btn btn--unstyled popup__btn-show">View Graphs</button>
                        <div id="T${i}P4" class="popup">
                            <div class="popup__grid">
                                <div id="T${i}G4C1" class="popup__grid-item">CT1</div>
                                <div id="T${i}G4C2" class="popup__grid-item">CT2</div>
                                <div id="T${i}G4C3" class="popup__grid-item">CT3</div>
                                <div id="T${i}G4C4" class="popup__grid-item">CT4</div>
                                <div id="T${i}G4C5" class="popup__grid-item">CT5</div>
                                <div id="T${i}G4C6" class="popup__grid-item">CT6</div>
                                <div id="T${i}G4C7" class="popup__grid-item">CT7</div>
                                <div id="T${i}G4C8" class="popup__grid-item">CT8</div>
                            </div>
                            <div class="popup__relay flex gap--sm">
                                <div id="T${i}G4R1" class="popup__relay-light popup__relay-light--disabled popup__relay-1"></div>
                                <div id="T${i}G4R2" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G4R3" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G4R4" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G4R5" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G4R6" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G4R7" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G4R8" class="popup__relay-light popup__relay-1"></div>
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
                        <button id="T${i}G5" onclick="showPopup('T${i}P5')" class="btn btn--unstyled popup__btn-show">View Graphs</button>
                        <div id="T${i}P5" class="popup">
                            <div class="popup__grid">
                                <div id="T${i}G5C1" class="popup__grid-item">CT1</div>
                                <div id="T${i}G5C2" class="popup__grid-item">CT2</div>
                                <div id="T${i}G5C3" class="popup__grid-item">CT3</div>
                                <div id="T${i}G5C4" class="popup__grid-item">CT4</div>
                                <div id="T${i}G5C5" class="popup__grid-item">CT5</div>
                                <div id="T${i}G5C6" class="popup__grid-item">CT6</div>
                                <div id="T${i}G5C7" class="popup__grid-item">CT7</div>
                                <div id="T${i}G5C8" class="popup__grid-item">CT8</div>
                            </div>
                            <div class="popup__relay flex gap--sm">
                                <div id="T${i}G5R1" class="popup__relay-light popup__relay-light--disabled popup__relay-1"></div>
                                <div id="T${i}G5R2" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G5R3" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G5R4" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G5R5" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G5R6" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G5R7" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G5R8" class="popup__relay-light popup__relay-1"></div>
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
                        <button id="T${i}G6" onclick="showPopup('T${i}P6')" class="btn btn--unstyled popup__btn-show">View Graphs</button>
                        <div id="T${i}P6" class="popup">
                            <div class="popup__grid">
                                <div id="T${i}G6C1" class="popup__grid-item">CT1</div>
                                <div id="T${i}G6C2" class="popup__grid-item">CT2</div>
                                <div id="T${i}G6C3" class="popup__grid-item">CT3</div>
                                <div id="T${i}G6C4" class="popup__grid-item">CT4</div>
                                <div id="T${i}G6C5" class="popup__grid-item">CT5</div>
                                <div id="T${i}G6C6" class="popup__grid-item">CT6</div>
                                <div id="T${i}G6C7" class="popup__grid-item">CT7</div>
                                <div id="T${i}G6C8" class="popup__grid-item">CT8</div>
                            </div>
                            <div class="popup__relay flex gap--sm">
                                <div id="T${i}G6R1" class="popup__relay-light popup__relay-light--disabled popup__relay-1"></div>
                                <div id="T${i}G6R2" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G6R3" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G6R4" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G6R5" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G6R6" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G6R7" class="popup__relay-light popup__relay-1"></div>
                                <div id="T${i}G6R8" class="popup__relay-light popup__relay-1"></div>
                            </div>
                            <button id="T${i}B6" onclick="showPopup('T${i}P6')" class="popup__btn-hide btn btn--primary">Close</button>
                        </div>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        `);
        updateProgressCircle("PC"+i);
  }
  createCharts();
}

function removeStationTables() {
  $("#table_container_body").empty();
}

let graphFlag = false;

function showPopup(graphID){
    var popupGrid = document.getElementById(graphID);
    popupGrid.classList.toggle("popup__show");

    if (!graphFlag){
        graphFlag = true;
        /////////////// Refresh chart every 5 seconds /////////////
        var inverval_timer = setInterval(function() { 
            readCT(listOfDateLabel[0][0]);
        }, 5000);
    }
    else {
        clearInterval(inverval_timer);
    }
}
