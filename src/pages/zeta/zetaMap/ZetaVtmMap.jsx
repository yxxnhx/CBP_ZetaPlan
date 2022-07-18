import { useCallback, useEffect, useRef} from 'react'; 

function ZetaVtmMap() {
  const mapRef = useRef(null);

  const initMap = useCallback(() => {
    const uluru = { lat:21.046535831175845, lng: 105.79397602923244};
    const map=new window.google.maps.Map(mapRef.current, {
      center: uluru,
      zoom:14,
    });
    new window.google.maps.Marker({
      position: uluru,
      map: map,
    });
  }, [mapRef]);
  
  useEffect(() => {
    window.initMap = initMap;
    initMap();
  }, [initMap]);

  return (
    <div
      className="map"
      style={{ width: '100%', height: '56rem' }}
      ref={mapRef}
    ></div>
  );
}

export default ZetaVtmMap;