let map;
let infoWindow;

function initMap() {
    var uluru = new google.maps.LatLng(14.058324, 108.277199);
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
       center: uluru
    });

    infoWindow = new google.maps.InfoWindow({
        content: ''
    })

    addMarker();

    map.addListener('click', function () {
        infoWindow.close()
    })
}

function addMarker() {
    $(function () {
        let viewOnMapBtns = $('.finding-button');
        for (let i = 0; i < viewOnMapBtns.length; i++) {
            let viewOnMapBtn = $(viewOnMapBtns[i]);
            let marker = new google.maps.Marker({
                map: map,
                position: {
                    lat: parseFloat(viewOnMapBtn.data('lat')),
                    lng: parseFloat(viewOnMapBtn.data('lng'))
                },
                icon: '../images/icons/location.svg'
            })

            marker.addListener('click', function () {
                let postion = marker.getPosition();
                map.setCenter(postion);
                infoWindow.setContent(infoWindowGenerator(
                    viewOnMapBtn.data('name'),
                    viewOnMapBtn.data('address'),
                    viewOnMapBtn.data('phone')
                ));
                infoWindow.open(map, marker);
            })

            viewOnMapBtn.on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                map.setCenter({
                    lat: $(this).data('lat'),
                    lng: $(this).data('lng')
                });

                map.setZoom(15);

                $('html, body').animate({scrollTop: $('#map').offset().top});

                google.maps.event.trigger(marker, 'click');
            })
        }
    })
}
function infoWindowGenerator(name, address, phone) {
    let html = '<div id="map-info-window" class="map-info-window">' +
        '<div class="window-body">';

    if (name && name.length) {
        html += '<p class="text mb-1">' + name + '</p>'
    }

    if (address && address.length) {
        html += '<p class="text mb-1" style="font-size: 15px;">' + address + '</p>'
    }

    if (phone && phone.length) {
        html += '<p class="text mb-0" style="font-size: 15px;">' + phone + '</p>'
    }

    html += '</div>' + '</div>';

    return html
}
//google.maps.event.addDomListener(window, 'load', initMap);

const btnFinding= document.querySelector("#btn-finding-center");
const VietNamMapSection = document.querySelector(".viet-nam-map");
const CentralSection= document.querySelector(".central-section");

const openCentralSection = () => {
    // fade out viet-nam-map section
    VietNamMapSection.classList.add('animateOut');
    setTimeout(()=> {
        // hidden viet-nam-map section
        VietNamMapSection.classList.remove('active');
        VietNamMapSection.classList.add('hidden');
    
        // active central section
        CentralSection.classList.remove('hidden');
        CentralSection.classList.add('active');
        CentralSection.classList.add('animateIn');
        console.log('out');
    }, 700);
}

// animation finding central
btnFinding.addEventListener('click', () => openCentralSection());
$('.central-location .location .data').click(() => openCentralSection());

//animation dotted location
$('.location .dotted').hover(
    function(e){
        let id= e.target.getAttribute('data-name')
        $(`#${id}`).children('.dotted').addClass('zoom');
        setTimeout(()=>{
            $(`#${id}`).children('.dotted').addClass('fade');
        },400)
        setTimeout(()=>{
            $(`#${id}`).children('.data').addClass('activeIcon');
        }, 500)
    },
    function(e){
        // do nothing
    }
)
$('.location .data').hover(
    function(e){
        // do nothing
    },
    function(e){
        let preventId= e.target.getAttribute('data-name');
        $(`#${preventId}`).children('.data').addClass('fade');
        $(`#${preventId}`).children('.dotted').removeClass('fade');

        setTimeout(()=>{
        $(`#${preventId}`).children('.data').removeClass('fade');
        $(`#${preventId}`).children('.data').removeClass('activeIcon');
        $(`#${preventId}`).children('.dotted').removeClass('zoom');
        }, 400);
    }
)



