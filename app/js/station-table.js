var numberOfStations = 4;

// Adding a row inside the tbody.
/*for (var i=0; i < numberOfStations; i++){

}*/
addStationTables(3);
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
                        <circle stroke="var(--primary-color)" stroke-width="4" fill="transparent" r="14" cx="16" cy="16" />
                        </svg>
                    </th>
                    </tr>
                    <tr class="table__row">
                    <td>
                        Channel #1
                    </td>
                    <td>
                        <button id="G1-1" class="btn btn--unstyled popup__btn-show">View Graphs</button>
                        <div class="popup">
                        <div class="popup__grid">
                            <div class="popup__grid-item">CT1</div>
                            <div class="popup__grid-item">CT2</div>
                            <div class="popup__grid-item">CT3</div>
                            <div class="popup__grid-item">CT4</div>
                            <div class="popup__grid-item">CT5</div>
                            <div class="popup__grid-item">CT6</div>
                            <div class="popup__grid-item">CT7</div>
                            <div class="popup__grid-item">CT8</div>
                        </div>
                        <div class="popup__relay flex gap--sm">
                            <div class="popup__relay-light popup__relay-light--disabled popup__relay-1"></div>
                            <div class="popup__relay-light popup__relay-1"></div>
                            <div class="popup__relay-light popup__relay-1"></div>
                            <div class="popup__relay-light popup__relay-1"></div>
                            <div class="popup__relay-light popup__relay-1"></div>
                            <div class="popup__relay-light popup__relay-1"></div>
                            <div class="popup__relay-light popup__relay-1"></div>
                            <div class="popup__relay-light popup__relay-1"></div>
                        </div>
                        <button id="C1-1" class="popup__btn-hide btn btn--primary">Close</button>
                        </div>
                    </td>
                    </tr>
                    <tr class="table__row">
                    <td>
                        Channel #2
                    </td>
                    <td>
                        <button id="G1-2" class="btn btn--unstyled popup__btn-show">View Graphs</button>
                        <div class="popup">
                        <div class="popup__grid">
                            <div class="popup__grid-item">CT1</div>
                            <div class="popup__grid-item">CT2</div>
                            <div class="popup__grid-item">CT3</div>
                            <div class="popup__grid-item">CT4</div>
                            <div class="popup__grid-item">CT5</div>
                            <div class="popup__grid-item">CT6</div>
                            <div class="popup__grid-item">CT7</div>
                            <div class="popup__grid-item">CT8</div>
                        </div>
                        <button id="C1-2" class="popup__btn-hide btn btn--primary">Close</button>
                        </div>
                    </td>
                    </tr>
                    <tr class="table__row">
                    <td>
                        Channel #3
                    </td>
                    <td>
                        <button class="btn btn--unstyled">View Graphs</button>
                    </td>
                    </tr>
                    <tr class="table__row">
                    <td>
                        Channel #4
                    </td>
                    <td>
                        <button class="btn btn--unstyled">View Graphs</button>
                    </td>
                    </tr>
                    <tr class="table__row">
                    <td>
                        Channel #5
                    </td>
                    <td>
                        <button class="btn btn--unstyled">View Graphs</button>
                    </td>
                    </tr>
                    <tr class="table__row">
                    <td>
                        Channel #6
                    </td>
                    <td>
                        <button class="btn btn--unstyled">View Graphs</button>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        `);
  }
}

function removeStationTables() {
  $("#table_container_body").empty();
}
